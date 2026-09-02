import { buildConfirmationEmail } from "../_lib/confirmation-email.js";
import { createConfirmationToken } from "../_lib/confirmation-token.js";

const JSON_HEADERS = {
  "content-type": "application/json; charset=utf-8",
  "cache-control": "no-store",
  "x-content-type-options": "nosniff",
};

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
  if (email.includes(" ")) return false;

  const at = email.lastIndexOf("@");
  if (at <= 0 || at === email.length - 1) return false;

  const domain = email.slice(at + 1);
  return domain.includes(".") && !domain.startsWith(".") && !domain.endsWith(".");
}

async function readPayload(request) {
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  if (
    contentType.includes("application/x-www-form-urlencoded") ||
    contentType.includes("multipart/form-data")
  ) {
    const formData = await request.formData();
    return Object.fromEntries(formData.entries());
  }

  throw new Error("unsupported_content_type");
}

async function verifyTurnstile(token, secret, remoteIp) {
  if (typeof token !== "string" || !token || token.length > 2048) return false;

  const body = {
    secret,
    response: token,
  };

  if (remoteIp) body.remoteip = remoteIp;

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      },
    );

    if (!response.ok) return false;
    const result = await response.json();
    return result?.success === true;
  } catch (error) {
    console.error("Turnstile verification request failed.", error);
    return false;
  }
}

async function sendConfirmationEmail({ apiKey, from, to, confirmationUrl }) {
  const email = buildConfirmationEmail(confirmationUrl);

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: email.subject,
      html: email.html,
      text: email.text,
    }),
  });

  return response;
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method === "GET") {
    if (!env.TURNSTILE_SITE_KEY) {
      return json(
        {
          ok: false,
          message: "Email signup is temporarily unavailable. Please try again later.",
        },
        503,
      );
    }

    return json({ ok: true, turnstileSiteKey: env.TURNSTILE_SITE_KEY });
  }

  if (request.method !== "POST") {
    return json(
      { ok: false, message: "Method not allowed." },
      405,
      { allow: "GET, POST" },
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
  if (contentLength > 4096) {
    return json({ ok: false, message: "Request is too large." }, 413);
  }

  let payload;
  try {
    payload = await readPayload(request);
  } catch {
    return json({ ok: false, message: "Invalid signup request." }, 400);
  }

  const email = typeof payload?.email === "string" ? payload.email.trim() : "";
  const honeypot = typeof payload?.company === "string" ? payload.company.trim() : "";
  const turnstileToken =
    typeof payload?.turnstileToken === "string" ? payload.turnstileToken : "";

  // Quietly accept obvious bot submissions without forwarding or sending email.
  if (honeypot) {
    return json({ ok: true, status: "confirmation_sent" });
  }

  if (!isValidEmail(email)) {
    return json({ ok: false, message: "Enter a valid email address." }, 400);
  }

  const turnstileSecret = env.TURNSTILE_SECRET_KEY;
  const resendApiKey = env.RESEND_API_KEY;
  const resendFrom = env.RESEND_FROM;
  const confirmationSecret = env.CONFIRMATION_TOKEN_SECRET;

  if (
    !turnstileSecret ||
    !resendApiKey ||
    !resendFrom ||
    !confirmationSecret ||
    confirmationSecret.length < 32
  ) {
    console.error("Portfilo subscribe endpoint is missing confirmation-email configuration.");
    return json(
      {
        ok: false,
        message: "Email signup is temporarily unavailable. Please try again later.",
      },
      503,
    );
  }

  const remoteIp = request.headers.get("CF-Connecting-IP") || "";
  const turnstileValid = await verifyTurnstile(
    turnstileToken,
    turnstileSecret,
    remoteIp,
  );

  if (!turnstileValid) {
    return json(
      {
        ok: false,
        message: "We could not verify this signup. Please try again.",
      },
      403,
    );
  }

  let confirmationToken;
  try {
    confirmationToken = await createConfirmationToken(
      email,
      confirmationSecret,
      86400,
    );
  } catch (error) {
    console.error("Portfilo confirmation token creation failed.", error);
    return json(
      {
        ok: false,
        message: "We could not submit your email. Please try again.",
      },
      500,
    );
  }

  const confirmationUrl = new URL("/api/confirm", request.url);
  confirmationUrl.searchParams.set("token", confirmationToken);

  let resendResponse;
  try {
    resendResponse = await sendConfirmationEmail({
      apiKey: resendApiKey,
      from: resendFrom,
      to: email,
      confirmationUrl: confirmationUrl.toString(),
    });
  } catch (error) {
    console.error("Resend confirmation request failed to reach the API.", error);
    return json(
      {
        ok: false,
        message: "We could not send the confirmation email. Please try again.",
      },
      502,
    );
  }

  if (!resendResponse.ok) {
    console.error(`Resend confirmation request failed with ${resendResponse.status}.`);

    if (resendResponse.status === 429) {
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
        message: "We could not send the confirmation email. Please try again.",
      },
      502,
    );
  }

  return json({ ok: true, status: "confirmation_sent" });
}
