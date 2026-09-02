# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Subscribe End-to-End QA — ACTIVE**

The user has approved the content-first copy architecture and reported the shared-site-chrome/browser review as a **PASS**, including the final About founder-attribution spacing correction.

beehiiv identity verification is now complete. The immediate task is to configure a dedicated beehiiv API key locally and validate one real double-opt-in subscription through the native Portfilo form and Cloudflare Pages Function.

Do not treat Subscribe as closed until the full confirmation flow succeeds.

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

Canonical copy guide: `docs/COPY_STYLE.md`.

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

Primary navigation is exactly:

- `Latest` → `/#latest`
- `Standards` → `/standards`
- `About` → `/about`
- `Subscribe` → `/subscribe`

The Portfilo wordmark links Home. There is no redundant `Home` text link and no hamburger menu while the four links fit visibly.

The same header/footer components render on Homepage, About, Subscribe, Standards, Story, and Series. Global navigation uses Instrument Sans and no route-specific page label is inserted into the masthead.

The user reported the shared-site-chrome/browser review as a **PASS** after the final founder-spacing correction.

About-specific fixes now accepted:

- five topic cards preserve their containers while aligning title/description starts on desktop;
- `Founder` and `Louda Tuppal` behave as a compact metadata pair;
- legacy `Back to home` links are removed.

## Homepage `/`

Implementation: `src/pages/index.astro`

Current approved direction:

- page title `Portfilo`;
- compact topic/coverage strip;
- feature story is the primary `h1` and visual hero;
- `Latest` section has `id="latest"`;
- factual About bridge;
- Portfilo Brief copy reduced to the email product itself;
- no geographic/tagline positioning.

Fixture story language remains clearly marked as preview material until launch stories are selected.

## About `/about`

Implementation: `src/pages/about.astro`

Current public framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

No founder portrait, long biography, founder letter, or unsupported ownership/independence claim should be added without a new decision.

## Research & Standards `/standards`

Implementation: `src/pages/standards.astro`

Substantive standards remain unchanged:

- Sources
- Verification
- AI use
- Corrections
- Commercial independence

## Story template

Implementation: `src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, and Content Collection behavior remain intact.

## Series template

Implementation: `src/pages/series/[slug].astro`

Series ordering and fixture behavior remain intact.

Pre-launch cleanup still required:

- remove reader-facing `Series ID` before public launch.

Do not expand that cleanup into an unapproved Series redesign.

## Subscribe `/subscribe` — END-TO-END QA ACTIVE

Visible page implementation: `src/pages/subscribe.astro`

Server endpoint: `functions/api/subscribe.js`

Local secret template: `.dev.vars.example`

### Approved architecture

Portfilo renders its own native form and forwards subscription requests through one Cloudflare Pages Function to the official beehiiv API.

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
- forces `double_opt_override: "on"`;
- attributes the signup with Portfilo website UTM values;
- returns safe errors without exposing beehiiv credentials or raw responses;
- stores no subscriber database in Portfilo.

The publication ID is intentionally non-secret and remains in source code.

The beehiiv API key is secret. **Never paste it into ChatGPT, GitHub, a browser-visible file, screenshot, or committed configuration.**

### Current credential state

- beehiiv identity verification: **COMPLETE, user reported**
- dedicated API key: **NEXT STEP**
- `.dev.vars` local configuration: pending
- real subscription request: pending
- double-opt-in email received: pending
- confirmation completed: pending
- subscriber confirmed in beehiiv: pending

### Exact next task

1. In beehiiv, create a dedicated API key for the Portfilo website, for example `Portfilo Website`.
2. Store the key securely and do not send it in chat.
3. In the repository root, copy `.dev.vars.example` to `.dev.vars`.
4. Put the private key only in `.dev.vars` as `BEEHIIV_API_KEY="..."`.
5. Run `npm run build` and require a clean production build.
6. Run `npx wrangler pages dev dist` so Astro static output and the Cloudflare Pages Function run together.
7. Open the local `/subscribe` route served by Wrangler.
8. Verify invalid-email behavior.
9. Submit one real email address that you can access.
10. Require the Portfilo UI to show the pending-confirmation success message.
11. Receive the beehiiv double-opt-in email.
12. Click the confirmation link.
13. Confirm the subscriber is active/confirmed in beehiiv.
14. Verify the subscription source/UTM metadata if beehiiv exposes it in the subscriber record.

Subscribe closes only after steps 5–14 pass.

## Build and validation status

The user has reported shared-site-chrome and visual/browser QA as a pass.

A clean production `npm run build` result after the latest commits has not been explicitly recorded in chat, so it remains part of the Subscribe QA sequence rather than being assumed.

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
| Shared SiteHeader/SiteFooter | PASS, user visual QA |
| About topic alignment | PASS, user visual QA |
| About founder spacing | PASS, user visual QA |
| Subscribe native architecture | IMPLEMENTED |
| beehiiv identity verification | COMPLETE, user reported |
| Dedicated beehiiv API key | PENDING |
| Production build after latest commits | PENDING explicit result |
| Cloudflare Pages Function local run | PENDING |
| Real subscription request | PENDING |
| Double opt-in confirmation | PENDING |
| beehiiv subscriber verification | PENDING |

## Brand and visual system

Locked unless QA exposes a concrete implementation problem:

- wordmark-first identity;
- Instrument Sans, Source Serif 4, IBM Plex Mono;
- paper `#f4f0e8`;
- ink `#171614`;
- muted `#69655e`;
- signal blue `#0050a4`;
- evidence blue `#8fc7ff`;
- correction red `#b42318`;
- 12-column editorial grid;
- strong typography and restrained rules;
- no card-heavy SaaS treatment, gradients, glassmorphism, or decorative motion;
- red remains primarily wordmark/corrections.

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
- no custom newsletter platform;
- no custom analytics backend.

## Relevant latest commits

- `28b98e8f36964b010af93605b4fcc8547321ff71` - final About founder spacing correction

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
