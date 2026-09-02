# Portfilo Custom Confirmation Setup

_Status: implementation setup / QA required_

_Last updated: 2026-09-02_

This is the operational setup guide for the approved Portfilo-owned confirmation flow.

Canonical architecture:

`docs/EMAIL_SYSTEM_PLAN.md`

## What is already implemented

Runtime files:

- `src/pages/subscribe.astro`
- `src/pages/confirmed.astro`
- `functions/api/subscribe.js`
- `functions/api/confirm.js`
- `server/confirmation-token.js`
- `server/confirmation-email.js`

No npm email dependency was added. Resend is called through its REST API with `fetch`.

## Local QA setup

### 1. Create a Resend account and API key

Create one private API key for Portfilo local/website confirmation testing.

Do not paste the key into chat, GitHub, screenshots, or committed files.

For initial testing, Resend's testing sender can be used:

`Portfilo <onboarding@resend.dev>`

The Resend testing domain is restricted to the email address associated with the Resend account. This is sufficient for the first end-to-end QA pass.

References:

- https://resend.com/cloudflare
- https://resend.com/docs/knowledge-base/403-error-resend-dev-domain

### 2. Update local `.dev.vars`

Keep the existing beehiiv key and add the new values described by `.dev.vars.example`.

Local shape:

```text
BEEHIIV_API_KEY="..."
RESEND_API_KEY="..."
RESEND_FROM="Portfilo <onboarding@resend.dev>"
TURNSTILE_SITE_KEY="1x00000000000000000000AA"
TURNSTILE_SECRET_KEY="1x0000000000000000000000000000000AA"
CONFIRMATION_TOKEN_SECRET="..."
```

The Turnstile values above are Cloudflare's official always-pass **test** credentials for localhost. Never use them in production.

Reference:

- https://developers.cloudflare.com/turnstile/troubleshooting/testing/

### 3. Generate `CONFIRMATION_TOKEN_SECRET`

Use a fresh random secret. Do not reuse an API key or password.

PowerShell example:

```powershell
$bytes = New-Object byte[] 32
$rng = [System.Security.Cryptography.RandomNumberGenerator]::Create()
$rng.GetBytes($bytes)
[Convert]::ToBase64String($bytes)
$rng.Dispose()
```

Copy the printed value into `.dev.vars` as `CONFIRMATION_TOKEN_SECRET`.

Do not send the value in chat.

### 4. Build and run the complete local stack

From the repository root:

```powershell
npm run build
npx wrangler pages dev dist
```

Use the URL printed by Wrangler, not `astro dev`, for end-to-end confirmation QA because the Pages Functions and `.dev.vars` are required.

## Local QA sequence

### A. Configuration

Open Wrangler's `/subscribe` route.

Expected:

- the Subscribe button becomes enabled after Turnstile's background verification is ready;
- no visible CAPTCHA should appear during the normal always-pass localhost test;
- no secret is present in page source or network responses;
- `GET /api/subscribe` exposes only the public Turnstile site key.

### B. Validation

Submit an invalid email.

Expected UI:

`Enter a valid email address.`

### C. Custom confirmation email

Submit the email address associated with the Resend account.

Expected Portfilo UI:

`Check your inbox. Confirm your email to finish subscribing to Portfilo Brief.`

Expected Wrangler result:

`POST /api/subscribe 200 OK`

Expected inbox:

- sender from the configured Resend identity;
- subject `Confirm your Portfilo Brief subscription`;
- Portfilo-designed paper/ink/blue email;
- no beehiiv confirmation email;
- no beehiiv confirmation footer/page;
- one `Confirm subscription ↗` CTA.

### D. Confirmation

Click the Portfilo confirmation CTA.

Expected flow:

`/api/confirm?token=...` → beehiiv API → `/confirmed`

Expected browser destination:

`/confirmed`

Expected beehiiv subscriber state:

`Active`

Expected acquisition source should remain the Portfilo website/API attribution.

### E. Failure handling

An invalid or expired encrypted token must not create a beehiiv subscriber. It should return to `/subscribe` with a safe request-new-link message.

Do not intentionally paste real confirmation tokens into chat or issue trackers.

## Production setup

Do not use localhost testing credentials in production.

### Resend

Before public signup:

1. verify a Portfilo-owned sending domain/subdomain in Resend;
2. use a deliberate sender such as `Portfilo <brief@mail.<production-domain>>` or another approved Portfilo address;
3. replace `RESEND_FROM` in Cloudflare production configuration;
4. keep `RESEND_API_KEY` server-side only.

### Turnstile

Create a real Managed Turnstile widget for the production Portfilo hostname.

Recommended behavior:

- Managed widget;
- production hostname restriction;
- browser appearance remains `interaction-only` in Portfilo code;
- server-side Siteverify remains mandatory.

Configure the real `TURNSTILE_SITE_KEY` and private `TURNSTILE_SECRET_KEY` in the Cloudflare Pages production environment.

### Confirmation token secret

Set `CONFIRMATION_TOKEN_SECRET` as a private Cloudflare environment secret.

Use a different random production secret if desired. Rotating this secret invalidates confirmation links issued with the previous value, so do not rotate it casually while valid links are outstanding.

### beehiiv

Keep the dedicated Portfilo website API key server-side.

Do not enable/use beehiiv's Double Opt-in Email for this flow.

The Portfilo confirmation endpoint creates the already-verified subscriber with:

- `double_opt_override: "off"`;
- `send_welcome_email: false`;
- `reactivate_existing: true`.

## Production QA

Before public launch, repeat the full signup with a fresh address and require:

- real Turnstile validation;
- Resend delivery from the verified Portfilo sender;
- correct desktop/mobile email rendering;
- confirmation CTA on the production Portfilo domain;
- Active beehiiv subscriber after click;
- `/confirmed` destination;
- no beehiiv opt-in email;
- no secret leakage;
- no console/function errors.

## Separate newsletter launch blocker

The regular Portfilo Brief newsletter still uses beehiiv. A legitimate physical mailing address remains required before the first public newsletter send.

Do not invent an address and do not treat Resend confirmation-email QA as resolving the newsletter footer/address requirement.
