import { readConfirmationToken } from "../_lib/confirmation-token.js";

const BEEHIIV_PUBLICATION_ID = "pub_dde8610d-d1a8-4c74-aa13-aeb3838b2d40";

function redirect(request, path, status = 303) {
  const location = new URL(path, request.url);

  return new Response(null, {
    status,
    headers: {
      location: location.toString(),
      "cache-control": "no-store",
      "referrer-policy": "no-referrer",
      "x-content-type-options": "nosniff",
    },
  });
}

function isValidEmail(value) {
  if (typeof value !== "string") return false;
  const email = value.trim();

  if (email.length < 3 || email.length > 320 || email.includes(" ")) return false;

  const at = email.lastIndexOf("@");
  if (at <= 0 || at === email.length - 1) return false;

  const domain = email.slice(at + 1);
  return domain.includes(".") && !domain.startsWith(".") && !domain.endsWith(".");
}

export async function onRequest(context) {
  const { request, env } = context;

  if (request.method !== "GET") {
    return new Response("Method not allowed.", {
      status: 405,
      headers: {
        allow: "GET",
        "cache-control": "no-store",
        "content-type": "text/plain; charset=utf-8",
      },
    });
  }

  const apiKey = env.BEEHIIV_API_KEY;
  const confirmationSecret = env.CONFIRMATION_TOKEN_SECRET;

  if (!apiKey || !confirmationSecret || confirmationSecret.length < 32) {
    console.error("Portfilo confirmation endpoint is missing required configuration.");
    return redirect(request, "/subscribe?confirmation=error");
  }

  const url = new URL(request.url);
  const token = url.searchParams.get("token") || "";
  const confirmation = await readConfirmationToken(token, confirmationSecret);

  if (!confirmation.ok || !isValidEmail(confirmation.email)) {
    const reason = confirmation.reason === "expired" ? "expired" : "invalid";
    return redirect(request, `/subscribe?confirmation=${reason}`);
  }

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
          email: confirmation.email,
          reactivate_existing: true,
          send_welcome_email: false,
          double_opt_override: "off",
          utm_source: "portfilo",
          utm_medium: "website",
          utm_campaign: "portfilo_brief_signup",
        }),
      },
    );
  } catch (error) {
    console.error("beehiiv confirmation request failed to reach the API.", error);
    return redirect(request, "/subscribe?confirmation=error");
  }

  if (!beehiivResponse.ok) {
    console.error(`beehiiv confirmation request failed with ${beehiivResponse.status}.`);
    return redirect(request, "/subscribe?confirmation=error");
  }

  return redirect(request, "/confirmed");
}
