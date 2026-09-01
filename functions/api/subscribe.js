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

  // Quietly accept obvious bot submissions without forwarding them to beehiiv.
  if (honeypot) {
    return json({ ok: true, status: "pending_confirmation" });
  }

  if (!isValidEmail(email)) {
    return json({ ok: false, message: "Enter a valid email address." }, 400);
  }

  const apiKey = env.BEEHIIV_API_KEY;
  const publicationId = env.BEEHIIV_PUBLICATION_ID;

  if (!apiKey || !publicationId || !publicationId.startsWith("pub_")) {
    console.error("Portfilo subscribe endpoint is missing beehiiv configuration.");
    return json(
      {
        ok: false,
        message: "Email signup is temporarily unavailable. Please try again later.",
      },
      503,
    );
  }

  let beehiivResponse;
  try {
    beehiivResponse = await fetch(
      `https://api.beehiiv.com/v2/publications/${encodeURIComponent(publicationId)}/subscriptions`,
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
