const encoder = new TextEncoder();
const decoder = new TextDecoder();

function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);

  return btoa(binary)
    .replaceAll("+", "-")
    .replaceAll("/", "_")
    .replace(/=+$/u, "");
}

function base64UrlToBytes(value) {
  const normalized = value.replaceAll("-", "+").replaceAll("_", "/");
  const padding = "=".repeat((4 - (normalized.length % 4)) % 4);
  const binary = atob(normalized + padding);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

async function deriveKey(secret) {
  const keyMaterial = await crypto.subtle.digest("SHA-256", encoder.encode(secret));

  return crypto.subtle.importKey(
    "raw",
    keyMaterial,
    { name: "AES-GCM" },
    false,
    ["encrypt", "decrypt"],
  );
}

export async function createConfirmationToken(email, secret, ttlSeconds = 86400) {
  const now = Math.floor(Date.now() / 1000);
  const payload = encoder.encode(
    JSON.stringify({
      email,
      issuedAt: now,
      expiresAt: now + ttlSeconds,
    }),
  );

  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(secret);
  const encrypted = new Uint8Array(
    await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, payload),
  );

  const token = new Uint8Array(iv.length + encrypted.length);
  token.set(iv, 0);
  token.set(encrypted, iv.length);

  return bytesToBase64Url(token);
}

export async function readConfirmationToken(token, secret) {
  if (typeof token !== "string" || token.length < 32 || token.length > 2048) {
    return { ok: false, reason: "invalid" };
  }

  try {
    const bytes = base64UrlToBytes(token);
    if (bytes.length <= 12) return { ok: false, reason: "invalid" };

    const iv = bytes.slice(0, 12);
    const encrypted = bytes.slice(12);
    const key = await deriveKey(secret);
    const decrypted = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv },
      key,
      encrypted,
    );
    const payload = JSON.parse(decoder.decode(decrypted));

    if (
      typeof payload?.email !== "string" ||
      !Number.isInteger(payload?.expiresAt)
    ) {
      return { ok: false, reason: "invalid" };
    }

    if (payload.expiresAt < Math.floor(Date.now() / 1000)) {
      return { ok: false, reason: "expired" };
    }

    return { ok: true, email: payload.email };
  } catch {
    return { ok: false, reason: "invalid" };
  }
}
