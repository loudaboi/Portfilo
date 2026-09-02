# Portfilo beehiiv Email Setup

_Status: simplified v0 operational guide_

_Last updated: 2026-09-02_

## Purpose

beehiiv owns double opt-in for Portfilo v0.

This file records only the minimum settings that matter. The confirmation email is a utility email and should not become a design blocker.

Canonical architecture:

`docs/EMAIL_SYSTEM_PLAN.md`

## 1. Subscription API

Portfilo's server endpoint is:

`functions/api/subscribe.js`

Required beehiiv behavior:

```js
reactivate_existing: true
send_welcome_email: false
double_opt_override: "on"
```

Keep the existing Portfilo website UTM attribution.

The beehiiv API key remains server-side only in `.dev.vars` locally and in the Cloudflare Pages production environment.

Never paste the key into ChatGPT, GitHub, screenshots, or browser-visible code.

## 2. Double opt-in email

The existing published beehiiv confirmation flow is functional.

The user currently has experimental **unpublished** edits in the Opt in email editor. Do not publish those edits merely to finish setup.

If a later cleanup is straightforward, use this minimal copy:

**Subject**

`Confirm your Portfilo Brief subscription`

**Body**

> Confirm your subscription.
>
> Click below to finish signing up for Portfilo Brief.
>
> Confirm subscription

That is sufficient.

Do not require:

- a Portfilo wordmark recreation;
- custom HTML;
- decorative rules;
- complex typography;
- multiple sections;
- a brand manifesto;
- a founder message;
- a second email provider.

If beehiiv's editor makes deeper styling awkward, stop. A functional utility email is acceptable for v0.

## 3. Welcome email

Keep disabled.

Do not enable the beehiiv Welcome Email while the API uses:

`send_welcome_email: false`

Revisit only when Portfilo has real launch stories that make a welcome email useful.

## 4. Post-confirmation redirect

Portfilo's owned destination is:

`/confirmed`

Implementation:

`src/pages/confirmed.astro`

After Portfilo has a stable production domain, set beehiiv's Opt-in Redirect URL to:

`https://<production-domain>/confirmed`

Do not use localhost, `127.0.0.1`, a Wrangler local URL, or a temporary preview URL as the permanent redirect.

Until the production redirect is configured, beehiiv's hosted post-confirmation page is an accepted temporary artifact.

## 5. Mailing address

A legitimate physical mailing address is required before the first public Portfilo Brief newsletter send.

Do not enter a fake address.

The beehiiv New York address currently visible in test emails is a fallback, not Portfilo's address.

Resolve an authorized publication mailing address before public sending.

## 6. Sender and reply identity

Before public launch, choose and verify deliberate sender/reply details for Portfilo Brief.

Prefer Portfilo as the durable sender identity rather than treating an individual article author as the newsletter sender.

Do not let sender-domain setup block local site development, but include it in production email QA.

## 7. Production QA

Before public launch, test the real production flow with a fresh accessible email address:

1. submit through Portfilo `/subscribe`;
2. require a successful Pages Function request;
3. receive the beehiiv double-opt-in email;
4. click the confirmation action;
5. land on Portfilo `/confirmed` through the configured production redirect;
6. verify the subscriber is Active in beehiiv;
7. verify acquisition remains attributed to the Portfilo website/API;
8. verify legitimate footer address and unsubscribe behavior;
9. verify sender/reply identity;
10. send one real Portfilo Brief test before any public newsletter issue.

## 8. Non-goals

Do not add Resend, custom confirmation tokens, Workers KV, custom transactional-email code, or Turnstile solely to improve the visual design of the confirmation email.

Abuse protection can be revisited if real traffic shows the existing validation and honeypot are insufficient.

The v0 priority is a reliable subscription flow with minimal infrastructure.
