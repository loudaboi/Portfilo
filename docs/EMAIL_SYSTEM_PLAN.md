# Portfilo Email System & Confirmation Experience

_Status: APPROVED / v0 architecture locked_

_Last updated: 2026-09-09_

## Decision

Portfilo v0 uses beehiiv to own subscriber confirmation, confirmed-subscriber storage, newsletter sending, unsubscribe handling, and deliverability infrastructure.

Portfilo owns the signup interfaces, the narrow subscription proxy, the post-confirmation website experience, and the editorial newsletter template.

Portfilo does not operate a transactional email service, custom confirmation-token system, pending-subscriber store, subscriber database, or custom newsletter backend.

## Runtime flow

```text
Portfilo visible signup form
        ↓
POST /api/subscribe
        ↓
beehiiv subscription API
        ↓
Pending subscriber
        ↓
beehiiv double-opt-in email
        ↓
reader confirms
        ↓
Active subscriber in beehiiv
        ↓
Portfilo /confirmed
```

The homepage `/#newsletter` section is the direct signup destination. The retired `/subscribe` URL redirects there on Cloudflare Pages.

All visible forms use:

`src/components/NewsletterSignup.astro`

Subscription proxy:

`functions/api/subscribe.js`

Post-confirmation page:

`src/pages/confirmed.astro`

The API intentionally uses:

```js
reactivate_existing: true
send_welcome_email: false
double_opt_override: "on"
```

and preserves Portfilo website attribution through the existing UTM values.

## Ownership boundaries

### Portfilo owns

- the shared website signup component and its page placements;
- browser-side email validation;
- server-side email validation;
- the honeypot filter;
- the narrow Cloudflare Pages Function that forwards signup to beehiiv;
- `/confirmed` as the post-confirmation destination;
- editorial newsletter selection, design, copy, and QA.

### beehiiv owns

- Pending subscriber state;
- confirmation-token generation and validation;
- double-opt-in email delivery;
- Pending to Active transition;
- confirmed subscriber storage;
- newsletter delivery;
- unsubscribe handling;
- provider footer/compliance mechanisms;
- deliverability infrastructure.

## Double opt-in

Keep double opt in enabled for v0. It protects list quality and verified consent.

Do not switch to single opt in without real conversion/deliverability evidence.

## Confirmation email

The currently configured beehiiv confirmation email remains an external operational asset. `docs/BEEHIIV_EMAIL_SETUP.md` records its exact provider-side copy and styling.

Website-facing copy does not use the retired `Portfilo Brief` acquisition label. The external beehiiv template name/copy should be migrated only through an intentional provider-side update, not by pretending a repository edit changed beehiiv.

## Post-confirmation destination

Portfilo owns `/confirmed`.

Current website message:

- `Subscription confirmed.`
- `You’re subscribed to the Portfilo newsletter.`

The route is `noindex` and uses the shared site foundation.

After the final production domain is stable, beehiiv's Opt-in Redirect URL should be:

`https://<production-domain>/confirmed`

## Welcome email and Smart Nudge

Welcome Email: **OFF** for v0.

Smart Nudge: **OFF** for v0.

Revisit only when actual subscriber behavior creates a clear requirement.

## Sender and reply identity

Current v0 settings:

- sender name: `Portfilo`;
- do not use an individual author as recurring sender identity;
- Reply-To: `portfilo.ph@gmail.com`;
- beehiiv remains the sending provider.

A custom Portfilo sending domain may be evaluated after the production domain is stable.

## Newsletter template

The existing reusable beehiiv template remains provider-side infrastructure. `docs/BEEHIIV_EMAIL_SETUP.md` is the operational record for that template.

The website product decision to remove individual authors and the standalone Subscribe page does not require rebuilding the provider template.

## Rejected custom confirmation architecture

Do not reintroduce Resend, custom confirmation tokens, KV, Turnstile, or a second confirmation backend for v0 unless a newly validated requirement justifies them.

The already-tested beehiiv flow solves the commodity confirmation problem without expanding Portfilo's runtime.

## QA requirement

Before release readiness:

1. submit from every distinct visible website signup placement;
2. verify invalid-email handling;
3. verify server/API failure handling where practical;
4. run one real new-subscriber double-opt-in flow on the final production configuration;
5. verify beehiiv redirects to `/confirmed`;
6. verify subscriber state becomes Active;
7. verify unsubscribe works;
8. verify no API key or raw sensitive provider response appears client-side.

The provider-side confirmation email/template migration, if desired, is a separate operational gate from website runtime implementation.
