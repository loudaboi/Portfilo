# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Custom Confirmation Bridge — IMPLEMENTED / LOCAL QA PENDING**

The earlier beehiiv-owned double-opt-in flow was functionally validated, but that confirmation experience has now been intentionally **SUPERSEDED**.

The user approved a Portfilo-owned confirmation architecture after browser evaluation showed that beehiiv's opt-in editor/hosted confirmation experience did not provide the required control.

Canonical architecture:

`docs/EMAIL_SYSTEM_PLAN.md`

Operational setup:

`docs/CUSTOM_CONFIRMATION_SETUP.md`

Do not publish the earlier unpublished beehiiv Opt in email edits. beehiiv's own opt-in email is no longer part of the v0 runtime path.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Approved product direction

Portfilo v0 is a content-first business and technology publication.

Public-brand rules:

- no permanent tagline by default;
- no forced geographic slogan;
- no audience-flattering slogan;
- the wordmark establishes the publication;
- the Homepage leads with journalism rather than a brand manifesto;
- About explains Portfilo plainly;
- Standards demonstrates editorial rigor;
- Subscribe explains the email product only.

Canonical copy guide:

`docs/COPY_STYLE.md`

Internal editing rule:

> **Say the thing. Then stop.**

Rejected positioning must not be restored, including:

- `Practical intelligence for ambitious Filipinos.`
- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`

## Locked taxonomy

Top-level v0 topics:

- Business
- Technology
- Startups
- AI
- Building

Founders remain a recurring lens rather than a top-level topic. Capital/funding normally sits under Business or Startups. Portfilo Brief is the email product.

## Shared site chrome — PASS

Runtime components:

- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

Primary navigation:

- `Latest` → `/#latest`
- `Standards` → `/standards`
- `About` → `/about`
- `Subscribe` → `/subscribe`

User visual QA is a PASS, including stable navigation, About topic alignment, founder attribution spacing, and removal of legacy `Back to home` links.

## Public surfaces

### Homepage `/`

Implementation: `src/pages/index.astro`

Approved content-first direction remains unchanged.

### About `/about`

Implementation: `src/pages/about.astro`

Current public framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

### Research & Standards `/standards`

Implementation: `src/pages/standards.astro`

Substantive standards remain unchanged.

### Story template

Implementation: `src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, and Content Collection behavior remain intact.

### Series template

Implementation: `src/pages/series/[slug].astro`

Pre-launch cleanup still required:

- remove reader-facing `Series ID` before public launch.

Do not expand that cleanup into an unapproved Series redesign.

### Confirmation `/confirmed` — PASS

Implementation: `src/pages/confirmed.astro`

Purpose:

- Portfilo-owned successful confirmation destination;
- shared SiteHeader/SiteFooter;
- `noindex`;
- one confirmation statement and CTA back to `/#latest`.

Local browser review: **PASS, user reported 2026-09-02**.

## Legacy beehiiv confirmation flow — SUPERSEDED

The previous implementation sent the email to beehiiv immediately with `double_opt_override: "on"`. It was validated end-to-end and produced an Active subscriber after beehiiv confirmation.

That validation remains useful historical evidence for the beehiiv API credentials and publication ID, but the flow is no longer the intended runtime architecture.

The old beehiiv email-setup document is retained only as a superseded decision record:

`docs/BEEHIIV_EMAIL_SETUP.md`

## Custom confirmation bridge — APPROVED / IMPLEMENTED

### Runtime flow

```text
/subscribe
  → Turnstile
  → POST /api/subscribe
  → encrypted 24-hour token
  → Resend Portfilo confirmation email
  → GET /api/confirm?token=...
  → beehiiv Active subscriber
  → /confirmed
```

### Runtime files

- `src/pages/subscribe.astro`
- `src/pages/confirmed.astro`
- `functions/api/subscribe.js`
- `functions/api/confirm.js`
- `functions/_lib/confirmation-token.js`
- `functions/_lib/confirmation-email.js`

### Architecture rules

- Cloudflare Turnstile protects signup submissions and is validated server-side.
- Turnstile browser appearance is `interaction-only` so normal readers should not see a CAPTCHA-style widget.
- Portfilo calls Resend directly through REST `fetch`; no npm email dependency was added.
- Resend sends only the transactional confirmation email.
- Confirmation tokens use stateless AES-GCM authenticated encryption through Web Crypto.
- Tokens expire after 24 hours.
- No email address is exposed as plaintext in the confirmation URL.
- There is no KV namespace, pending-subscriber database, permanent subscriber database, or custom SMTP server.
- `/api/subscribe` no longer creates a beehiiv subscriber.
- `/api/confirm` creates the already-verified beehiiv subscriber with `double_opt_override: "off"`.
- `reactivate_existing: true` remains because a user who completes a fresh confirmation is knowingly resubscribing.
- `send_welcome_email: false` remains the approved v0 policy.
- website UTM attribution remains `portfilo / website / portfilo_brief_signup`.
- beehiiv remains the canonical confirmed-subscriber store and handles Portfilo Brief delivery/unsubscribe operations.

### Portfilo confirmation email

Source:

`functions/_lib/confirmation-email.js`

Subject:

`Confirm your Portfilo Brief subscription`

Design:

- source-controlled HTML and plain-text fallback;
- Portfilo ink/blue/red wordmark treatment;
- paper `#f4f0e8`;
- ink `#171614`;
- signal blue `#0050a4` rule/CTA;
- square CTA;
- email-safe font stack;
- single-column responsive layout;
- no beehiiv branding, default beehiiv body, or hosted beehiiv confirmation page.

## Environment configuration

Template:

`.dev.vars.example`

Required runtime values:

- `BEEHIIV_API_KEY` — private;
- `RESEND_API_KEY` — private;
- `RESEND_FROM` — sender identity;
- `TURNSTILE_SITE_KEY` — public/environment-specific;
- `TURNSTILE_SECRET_KEY` — private;
- `CONFIRMATION_TOKEN_SECRET` — private/random, minimum 32 characters.

For localhost only, `.dev.vars.example` documents Cloudflare's official always-pass Turnstile test site/secret keys.

`.dev.vars` remains ignored. `.wrangler/` remains ignored.

Never paste API keys or `CONFIRMATION_TOKEN_SECRET` into chat, GitHub, screenshots, or committed files.

## Newsletter template and mailing address

The regular Portfilo Brief newsletter still uses beehiiv and remains a later email-design task.

Before the first public newsletter send:

- choose a legitimate physical mailing address Portfilo is authorized to use;
- build/QA one reusable Portfilo Brief newsletter template;
- verify sender/reply identity and real inbox rendering.

Do not invent an address.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Foundation | PASS |
| Content Architecture | PASS |
| Editorial Design | PASS |
| Wordmark | PASS |
| Editorial Taxonomy | PASS |
| Shared SiteHeader/SiteFooter | PASS |
| `/confirmed` browser QA | PASS |
| Legacy beehiiv subscription flow | PASS / SUPERSEDED |
| Custom confirmation architecture | APPROVED |
| Stateless token implementation | IMPLEMENTED, unvalidated locally |
| Portfilo HTML confirmation email | IMPLEMENTED, inbox QA pending |
| Turnstile integration | IMPLEMENTED, local QA pending |
| Resend integration | IMPLEMENTED, credentials/QA pending |
| Custom `/api/subscribe` | IMPLEMENTED, local QA pending |
| Custom `/api/confirm` | IMPLEMENTED, local QA pending |
| Production Astro build after custom-flow changes | PENDING |
| Wrangler compile after custom-flow changes | PENDING |
| Real Resend confirmation delivery | PENDING |
| Custom confirmation → Active beehiiv subscriber | PENDING |
| Production Turnstile widget | PENDING deployment phase |
| Production verified Resend sender | PENDING deployment phase |
| Publication mailing address | PENDING before newsletter launch |
| Portfilo Brief newsletter template | PENDING |

## Exact next task

**Local custom-confirmation QA.**

Sequence:

1. leave beehiiv's unpublished Opt in email edits unpublished;
2. pull the latest `build/portfilo-v0` branch;
3. create a Resend account/API key if not already created;
4. update local `.dev.vars` using `.dev.vars.example`, preserving the existing beehiiv key;
5. use Resend's test sender for the first pass;
6. generate a private random `CONFIRMATION_TOKEN_SECRET` locally;
7. run `npm run build` and require a clean result;
8. run `npx wrangler pages dev dist`;
9. open Wrangler's `/subscribe` route;
10. verify Turnstile initializes without visible friction;
11. submit the Resend account email;
12. require the Portfilo-designed confirmation email to arrive;
13. review the real inbox rendering before clicking;
14. click the Portfilo confirmation CTA;
15. require redirect to `/confirmed`;
16. verify the subscriber is Active in beehiiv and acquisition attribution remains correct.

Do not mark the custom confirmation flow PASS until steps 7–16 succeed.

## Relevant custom-confirmation commits

- `25e62de68ec17ddf0c56a07db944e7ab53ec3013` - add stateless confirmation tokens
- `fd22354b99f3c53b4a215cfbe41aedf36a5a12e1` - add Portfilo confirmation email template
- `417f4a04e33ad73d99429168da76f1a31e4b80d8` - send Portfilo confirmation emails
- `1639b270eed0a60de95eed319a35f690bf0607e6` - confirm subscribers into beehiiv
- `f9d915921eae53ac10bda2a53a8235bffe19fd04` - protect custom signup confirmation flow
- `46d7fb7520e56087faf8486bb2859c6f707cd7a8` - add custom confirmation environment variables
- `6175eb811a7d4d25c0a2c6f105b55e697fbe5215` - update newsletter architecture guardrails
- `1786ad4f12d36d602311a685665835a6c0a86428` - approve custom confirmation bridge in v0 scope
- `d7568690697ad354b5427083c67c98801185505d` - adopt Portfilo-owned confirmation architecture
- `3a4912f80b32fcf270ff5cd644d6411095ced6d8` - retire beehiiv opt-in email setup
- `033826736c5b104f9f0e4dd07f04ff8f2a2fbf9b` - add custom confirmation setup guide

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
