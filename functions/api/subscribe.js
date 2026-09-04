const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
};

const BEEHIIV_PUBLICATION_ID = "pub_dde8610d-d1a8-4c74-aa13-aeb3838b2d40";
const MAX_REQUEST_BYTES = 4096;
const BEEHIIV_TIMEOUT_MS = 10_000;

class RequestTooLargeError extends Error {}

function json(body, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...JSON_HEADERS, ...extraHeaders },
  });
}

function isValidEmail(value) {
  if (typeof value !== "string") return false;
  const email = value.trim();

  if (email.length < 3 || email.length > 320) return false;
  if (/\s/.test(email)) return false;

  const at = email.indexOf("@");
  if (at <= 0 || at !== email.lastIndexOf("@") || at === email.length - 1) {
    return false;
  }

  const domain = email.slice(at + 1);
  return domain.includes(".") && !domain.startsWith(".") && !domain.endsWith(".");
}

async function readBoundedBody(request) {
  if (!request.body) return new Uint8Array();

  const reader = request.body.getReader();
  const chunks = [];
  let totalBytes = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      if (!value) continue;

      totalBytes += value.byteLength;
      if (totalBytes > MAX_REQUEST_BYTES) {
        try {
          await reader.cancel();
        } catch {
          // The response is already determined; cancellation failure is non-fatal.
        }
        throw new RequestTooLargeError();
      }

      chunks.push(value);
    }
  } finally {
    reader.releaseLock();
  }

  const body = new Uint8Array(totalBytes);
  let offset = 0;

  for (const chunk of chunks) {
    body.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return body;
}

async function readPayload(request) {
  const body = await readBoundedBody(request);
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return JSON.parse(new TextDecoder().decode(body));
  }

  if (contentType.includes("application/x-www-form-urlencoded")) {
    return Object.fromEntries(
      new URLSearchParams(new TextDecoder().decode(body)).entries(),
    );
  }

  if (contentType.includes("multipart/form-data")) {
    const boundedRequest = new Request(request.url, {
      method: request.method,
      headers: request.headers,
      body,
    });
    const formData = await boundedRequest.formData();
    return Object.fromEntries(formData.entries());
  }

  throw new Error("unsupported_content_type");
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "POST") {
    return json(
      { ok: false, message: "Method not allowed." },
      405,
      { allow: "POST" },
    );
  }

  const origin = request.headers.get("origin");
  if (origin) {
    try {
      if (new URL(origin).host !== new URL(request.url).host) {
        return json({ ok: false, message: "Request not allowed." }, 403);
      }
    } catch {
      return json({ ok: false, message: "Request not allowed." }, 403);
    }
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return json({ ok: false, message: "Request is too large." }, 413);
  }

  let payload;
  try {
    payload = await readPayload(request);
  } catch (error) {
    if (error instanceof RequestTooLargeError) {
      return json({ ok: false, message: "Request is too large." }, 413);
    }

    return json({ ok: false, message: "Invalid signup request." }, 400);
  }

  const email = typeof payload?.email === "string" ? payload.email.trim() : "";
  const honeypot = typeof payload?.company === "string" ? payload.company.trim() : "";

  // Quietly accept obvious bot submissions without forwarding them to beehiiv.
  if (honeypot) {
    return json({ ok: true, status: "pending_confirmation" });
  }

  if (!isValidEmail(email)) {
    return json({ ok: false, message: "Enter a valid email address." }, 400);
  }

  const apiKey = env.BEEHIIV_API_KEY;

  if (!apiKey) {
    console.error("Portfilo subscribe endpoint is missing the beehiiv API key.");
    return json(
      {
        ok: false,
        message: "Email signup is temporarily unavailable. Please try again later.",
      },
      503,
    );
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), BEEHIIV_TIMEOUT_MS);
  let beehiivResponse;

  try {
    beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${BEEHIIV_PUBLICATION_ID}/subscriptions`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          reactivate_existing: true,
          send_welcome_email: false,
          double_opt_override: "on",
          utm_source: "portfilo",
          utm_medium: "website",
          utm_campaign: "portfilo_brief_signup",
        }),
        signal: controller.signal,
      },
    );
  } catch (error) {
    console.error("beehiiv subscription request failed to reach the API.", error);
    return json(
      {
        ok: false,
        message: "We could not submit your email. Please try again.",
      },
      502,
    );
  } finally {
    clearTimeout(timeoutId);
  }

  if (!beehiivResponse.ok) {
    console.error(`beehiiv subscription request failed with ${beehiivResponse.status}.`);

    if (beehiivResponse.status === 429) {
      return json(
        {
          ok: false,
          message: "Too many signup attempts. Please try again shortly.",
        },
        429,
      );
    }

    return json(
      {
        ok: false,
        message: "We could not submit your email. Please try again.",
      },
      502,
    );
  }

  return json({ ok: true, status: "pending_confirmation" });
}
