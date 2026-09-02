# Portfilo Email System & Confirmation Experience

_Status: APPROVED / implementation active_

_Last updated: 2026-09-02_

## Goal

Portfilo owns the signup and confirmation experience. beehiiv remains the newsletter/subscriber platform after the reader has verified the email address.

The confirmation flow must not require Portfilo to operate a database, SMTP server, or custom newsletter platform.

## Approved architecture

```text
Portfilo /subscribe
        ↓
Cloudflare Turnstile
        ↓
POST /api/subscribe
        ↓
24-hour encrypted stateless token
        ↓
Resend sends Portfilo HTML confirmation email
        ↓
GET /api/confirm?token=...
        ↓
Portfilo decrypts + validates token
        ↓
beehiiv creates verified Active subscriber
        ↓
Portfilo /confirmed
```

### Ownership boundaries

Portfilo owns:

- signup UI;
- abuse protection;
- confirmation-email HTML and plain text;
- confirmation token creation/validation;
- confirmation endpoint;
- post-confirmation page.

Resend owns:

- transactional confirmation-email delivery only.

beehiiv owns:

- confirmed subscriber storage;
- Portfilo Brief newsletter delivery;
- unsubscribe handling;
- newsletter operations.

There is no Portfilo subscriber database and no pending-subscriber store.

## Why no Workers KV

Workers KV was evaluated for temporary confirmation tokens but rejected for this flow because it is eventually consistent; writes may take time to become visible in another Cloudflare location.

Portfilo instead uses a stateless encrypted token. The token contains the email and expiry inside AES-GCM authenticated encryption, so the email address is not readable from the URL and no pending state needs to be stored.

Reference:

- https://developers.cloudflare.com/kv/concepts/how-kv-works/

## Confirmation token

Implementation:

`functions/_lib/confirmation-token.js`

Properties:

- AES-GCM authenticated encryption using Web Crypto;
- key derived from private `CONFIRMATION_TOKEN_SECRET`;
- random 12-byte IV per token;
- 24-hour expiry;
- opaque URL-safe token;
- no email address exposed in plaintext in the link;
- no database/KV write;
- invalid/expired tokens return to `/subscribe` with a safe status message.

A replay of a still-valid link can call the confirmation endpoint again, but it cannot change the encoded email or create a different subscriber. beehiiv receives the same verified address with `reactivate_existing: true`.

## Signup abuse protection

Portfilo uses Cloudflare Turnstile.

Implementation:

- the public site key is returned at runtime by `GET /api/subscribe`;
- the browser explicitly renders Turnstile;
- appearance is `interaction-only`, so most readers do not see a CAPTCHA-style UI;
- the token is validated server-side through Cloudflare Siteverify before any email is sent;
- the existing honeypot remains as a cheap first filter.

Server-side validation is mandatory.

References:

- https://developers.cloudflare.com/turnstile/get-started/
- https://developers.cloudflare.com/turnstile/get-started/client-side-rendering/widget-configurations/

## Transactional confirmation email

Implementation:

`functions/_lib/confirmation-email.js`

Sender service:

Resend REST API.

The email is source-controlled Portfilo HTML rather than a beehiiv template.

Subject:

`Confirm your Portfilo Brief subscription`

Preview:

`One click to finish signing up.`

Core content:

> PORTFILO BRIEF / CONFIRMATION
>
> Confirm your subscription.
>
> Click below to finish signing up for Portfilo Brief.
>
> Confirm subscription ↗
>
> If you did not sign up, you can ignore this email.

Visual direction:

- Portfilo text wordmark with approved ink/blue/red split;
- paper `#f4f0e8` background;
- ink `#171614`;
- signal blue `#0050a4` rule and CTA;
- correction red only in the wordmark;
- square CTA;
- email-safe Arial/Helvetica and Georgia/Courier fallbacks;
- single-column layout;
- mobile adjustment below 640px;
- plain-text fallback sent explicitly;
- no decorative hero image, cards, gradients, or beehiiv chrome.

Reference:

- https://resend.com/features/email-api

## `/api/subscribe`

Implementation:

`functions/api/subscribe.js`

GET:

- returns only the public Turnstile site key;
- returns no secrets.

POST:

1. enforce same-origin browser request;
2. enforce request-size limit;
3. parse JSON/form payload;
4. quietly accept honeypot submissions;
5. validate email;
6. validate Turnstile server-side;
7. create encrypted 24-hour token;
8. construct same-origin `/api/confirm` URL;
9. send Portfilo confirmation email through Resend;
10. return the existing `Check your inbox` success state.

The POST does **not** create a beehiiv subscriber.

## `/api/confirm`

Implementation:

`functions/api/confirm.js`

Flow:

1. accept GET from the email link;
2. decrypt and authenticate the token;
3. enforce token expiry;
4. validate the recovered email address;
5. call beehiiv subscription creation;
6. redirect to `/confirmed` on success.

beehiiv request policy:

```json
{
  "reactivate_existing": true,
  "send_welcome_email": false,
  "double_opt_override": "off",
  "utm_source": "portfilo",
  "utm_medium": "website",
  "utm_campaign": "portfilo_brief_signup"
}
```

`double_opt_override` is intentionally `off` at this stage because Portfilo has already performed the confirmation step. beehiiv must not send another opt-in email.

## Post-confirmation page

Implementation:

`src/pages/confirmed.astro`

Current copy:

> Subscription confirmed.
>
> You’re subscribed to Portfilo Brief. New stories will arrive by email.
>
> Read the latest ↗

The page uses shared site chrome and is `noindex`.

There is no beehiiv Opt-in Redirect URL in this architecture because the reader never uses beehiiv's confirmation page.

## Welcome email

V0 policy: **disabled**.

The confirmation endpoint sends:

`send_welcome_email: false`

Do not enable a generic welcome email. Revisit only when real launch stories make a useful onboarding email possible.

## Portfilo Brief newsletter template

The regular newsletter is still sent through beehiiv. It should use one reusable template at launch.

Recommended structure:

1. `PORTFILO BRIEF / [DATE]`;
2. lead story headline;
3. short dek/explanation;
4. `Read →`;
5. `Also in Portfilo` with only as many links as are genuinely useful;
6. compliant footer.

Subject lines should lead with the strongest concrete story rather than issue numbering or generic newsletter language.

The confirmation email and the regular newsletter do not need to share the same implementation. Confirmation is source-controlled transactional HTML; Portfilo Brief remains a beehiiv newsletter product.

## Mailing address

A real authorized physical mailing address remains a blocker before the first public **newsletter** send.

Do not invent an address or casually publish a private/home address. The exact address choice must be verified before launch.

The custom transactional confirmation email does not use beehiiv's fallback New York footer.

## Environment variables

Local template:

`.dev.vars.example`

Required runtime values:

- `BEEHIIV_API_KEY` — private;
- `RESEND_API_KEY` — private;
- `RESEND_FROM` — sender identity;
- `TURNSTILE_SITE_KEY` — public but environment-specific;
- `TURNSTILE_SECRET_KEY` — private;
- `CONFIRMATION_TOKEN_SECRET` — private, random, at least 32 characters.

For localhost, Cloudflare's official always-pass Turnstile test keys may be used. Never deploy those test keys to production.

Reference:

- https://developers.cloudflare.com/turnstile/troubleshooting/testing/

## QA standard

Before declaring the custom confirmation flow complete:

- production Astro build passes;
- Wrangler compiles both Pages Functions;
- Turnstile public config loads;
- invalid email is rejected;
- Turnstile failure path is safe;
- one real confirmation email is delivered through Resend;
- Gmail desktop rendering is reviewed;
- mobile inbox rendering is reviewed;
- plain-text content is sensible;
- confirmation CTA points to Portfilo, not beehiiv;
- confirmation creates an Active beehiiv subscriber;
- acquisition source remains `api: portfilo / website` or the equivalent beehiiv display;
- confirmation redirects to `/confirmed`;
- expired/invalid token returns safely to `/subscribe`;
- no secret is present in Git, browser HTML, screenshots, or logs.

## Recommendation

This is the v0 confirmation architecture.

It deliberately adds only what is needed to own the confirmation experience while preserving the larger zero-budget posture:

- no database;
- no KV;
- no custom SMTP server;
- no custom newsletter platform;
- no subscriber accounts;
- beehiiv remains the durable newsletter system.
