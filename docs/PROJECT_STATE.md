# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Email Architecture Simplification — CODE RESTORED / BUILD QA PENDING**

The custom Resend/Turnstile/token confirmation experiment has been rejected as overengineering for v0 and fully removed from runtime.

Portfilo has returned to the previously validated beehiiv-owned double-opt-in architecture.

The runtime subscription files are restored exactly to the known-good pre-experiment state. The only remaining work from this correction is a clean local production build after the user pulls the latest branch.

Canonical email architecture:

`docs/EMAIL_SYSTEM_PLAN.md`

Operational beehiiv guidance:

`docs/BEEHIIV_EMAIL_SETUP.md`

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

Philippine relevance remains part of reporting and early distribution strategy, but geography is not required brand copy.

## Locked taxonomy

Top-level v0 topics:

- Business
- Technology
- Startups
- AI
- Building

Rules:

- one primary topic per story;
- AI is primary only when AI itself is the main subject;
- founders are a recurring lens, not a top-level topic;
- capital/funding normally sits under Business or Startups;
- `Latest` is broader than breaking news;
- Portfilo Brief is the email product.

## Shared site chrome — PASS

Runtime components:

- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

Primary navigation:

- `Latest` → `/#latest`
- `Standards` → `/standards`
- `About` → `/about`
- `Subscribe` → `/subscribe`

The Portfilo wordmark links Home. The same shared header/footer system is used across public pages. Global navigation uses Instrument Sans and remains visible on mobile.

User visual QA is a PASS, including:

- stable navigation across routes;
- About topic-card alignment;
- compact `Founder / Louda Tuppal` attribution;
- removal of legacy `Back to home` links.

## Public surfaces

### Homepage `/`

Implementation: `src/pages/index.astro`

Approved direction:

- page title `Portfilo`;
- compact topic/coverage strip;
- feature story is the primary `h1` and visual hero;
- `Latest` section has `id="latest"`;
- factual About bridge;
- Portfilo Brief copy reduced to the email product itself;
- no geographic/tagline positioning.

Fixture story language remains clearly marked as preview material until launch stories are selected.

### About `/about`

Implementation: `src/pages/about.astro`

Current public framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

No founder portrait, long biography, founder letter, or unsupported ownership/independence claim should be added without a new decision.

### Research & Standards `/standards`

Implementation: `src/pages/standards.astro`

Substantive standards remain unchanged:

- Sources
- Verification
- AI use
- Corrections
- Commercial independence

### Story template

Implementation: `src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, and Content Collection behavior remain intact.

### Series template

Implementation: `src/pages/series/[slug].astro`

Series ordering and fixture behavior remain intact.

Pre-launch cleanup still required:

- remove reader-facing `Series ID` before public launch.

Do not expand that cleanup into an unapproved Series redesign.

### Confirmation `/confirmed` — PASS

Implementation: `src/pages/confirmed.astro`

Purpose:

- Portfilo-owned post-double-opt-in destination;
- transactional, not a marketing surface;
- uses shared SiteHeader/SiteFooter;
- marked `noindex`;
- one confirmation statement and one CTA back to `/#latest`.

Current copy:

> Subscription confirmed.
>
> You’re subscribed to Portfilo Brief. New stories will arrive by email.
>
> Read the latest ↗

Local browser review: **PASS, user reported 2026-09-02**.

The route becomes the actual post-confirmation destination only after beehiiv's production Opt-in Redirect URL is configured to the stable public Portfilo domain.

## Subscribe `/subscribe` — END-TO-END PASS

Visible page:

`src/pages/subscribe.astro`

Server endpoint:

`functions/api/subscribe.js`

Local secret template:

`.dev.vars.example`

### Approved architecture

Portfilo renders its own native signup form and forwards the request through one narrow Cloudflare Pages Function to the official beehiiv API.

The function:

- accepts POST only;
- performs a same-origin browser check;
- limits request size;
- validates email server-side;
- quietly accepts honeypot submissions without forwarding them;
- reads only `BEEHIIV_API_KEY` from server-side environment variables;
- binds the Portfilo Brief publication ID in server code;
- calls beehiiv API V2 subscription creation;
- uses `reactivate_existing: true`;
- uses `send_welcome_email: false`;
- uses `double_opt_override: "on"`;
- attributes signup with Portfilo website UTM values;
- returns safe errors without exposing beehiiv credentials or raw responses;
- stores no subscriber database in Portfilo.

beehiiv owns Pending subscriber state, confirmation-token handling, double-opt-in delivery, Pending → Active transition, confirmed subscriber storage, newsletter delivery, and unsubscribe handling.

### Validated end-to-end results

The earlier real local test already proved:

- beehiiv identity verification: PASS
- dedicated API key: PASS
- `.dev.vars` secret loading: PASS
- production Astro build at that time: PASS
- `npx wrangler pages dev dist`: PASS
- Cloudflare Pages Function compilation: PASS
- native form submission: PASS
- `POST /api/subscribe`: 200 OK
- Portfilo pending-confirmation UI: PASS
- beehiiv double-opt-in email delivered: PASS
- confirmation completed: PASS
- subscriber state in beehiiv: Active
- acquisition source: `api: portfilo / website`

The runtime subscription files have now been restored exactly to that known-good implementation after the rejected custom-confirmation experiment.

## Email architecture simplification — APPROVED

Canonical plan:

`docs/EMAIL_SYSTEM_PLAN.md`

Decision:

- keep double opt-in;
- beehiiv owns confirmation;
- Portfilo owns `/subscribe` and `/confirmed`;
- do not add Resend;
- do not add custom confirmation tokens;
- do not add Workers KV for confirmation state;
- do not require Turnstile unless real abuse later justifies it;
- keep Welcome Email disabled;
- do not rebuild newsletter infrastructure to improve one utility email's appearance.

The Resend/Turnstile/custom-token experiment has been fully removed from runtime and local config templates.

## beehiiv confirmation email

The confirmation email is a utility surface, not a major brand-design surface.

Preferred minimal copy if straightforward to configure:

**Subject**

`Confirm your Portfilo Brief subscription`

**Body**

> Confirm your subscription.
>
> Click below to finish signing up for Portfilo Brief.
>
> Confirm subscription

The user currently has experimental changes in the beehiiv Opt in email editor that were shown as **Unpublished changes**.

Do not publish those experimental edits merely to finish this phase.

The existing published confirmation flow is functional. Deeper visual customization is not a v0 blocker.

## Welcome email

Keep disabled for v0.

The API remains:

`send_welcome_email: false`

Revisit only when real launch stories make a welcome email useful.

## Newsletter template

A reusable Portfilo Brief newsletter template is still pending.

This is a more important design surface than the confirmation email, but it should not block the current architecture cleanup/build check.

## Mailing address

A legitimate physical mailing address remains required before the first public Portfilo Brief send.

The beehiiv New York address visible during testing is a fallback, not Portfilo's address.

Do not invent an address.

## Zero-budget infrastructure posture

Current direction:

- Cloudflare Pages;
- one Cloudflare Pages Function solely for newsletter subscription forwarding;
- Cloudflare Web Analytics;
- beehiiv;
- GitHub;
- local Markdown + Astro Content Collections;
- no database;
- no authentication system;
- no custom subscriber store;
- no custom confirmation service;
- no custom newsletter platform;
- no custom analytics backend.

Local-only/generated files:

- `.dev.vars` remains ignored;
- `.wrangler/` is ignored and must not be committed.

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
| Architecture C / content-first | APPROVED |
| Shared SiteHeader/SiteFooter | PASS |
| About topic alignment | PASS |
| About founder spacing | PASS |
| `/confirmed` route | PASS, local browser QA |
| Subscribe end-to-end | PASS, prior real local QA |
| beehiiv double opt-in | PASS |
| Custom confirmation experiment | REJECTED / REMOVED |
| Simplified runtime restoration | COMPLETE |
| Production build after simplification | **PENDING USER RUN** |
| Production Opt-in Redirect URL | PENDING stable production domain |
| Publication mailing address | PENDING before public newsletter launch |
| Portfilo Brief reusable template | PENDING |
| Series ID public cleanup | PENDING before public launch |

## Exact next task

**Pull the simplified branch and run one clean production build.**

From the repository root:

```powershell
git pull origin build/portfilo-v0
npm run build
```

Expected result:

- clean Astro build;
- `/confirmed` remains generated;
- no Resend/Turnstile/custom-confirmation runtime errors;
- no additional secrets required beyond the existing beehiiv key for Pages Function testing.

If the build passes, record it and move forward. Do not return to the beehiiv visual editor as a blocker.

## Relevant latest decisions

- Subscribe native form + beehiiv API proxy: validated and retained.
- `/confirmed`: implemented and user-approved.
- custom Resend/Turnstile/token confirmation: researched, implemented experimentally, then rejected as overengineering and removed.
- provider-owned beehiiv double opt-in: restored as the v0 architecture.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
