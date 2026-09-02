# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Email System & Confirmation Experience — PLANNING**

Subscribe end-to-end functionality is now **PASS**.

The user completed one real native Portfilo subscription through the local Cloudflare Pages Function and beehiiv API. The flow produced the expected pending-confirmation state, delivered the double-opt-in email, completed confirmation, and showed the subscriber as Active in beehiiv. beehiiv also recorded the acquisition source as `api: portfilo / website`.

The next problem is no longer subscription plumbing. It is the branded email and post-confirmation experience.

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

The user reported the shared-site-chrome/browser review as a PASS after the final founder-spacing correction.

About-specific fixes accepted:

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

## Subscribe `/subscribe` — END-TO-END PASS

Visible page implementation: `src/pages/subscribe.astro`

Server endpoint: `functions/api/subscribe.js`

Local secret template: `.dev.vars.example`

### Architecture

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

The beehiiv API key is secret. Never paste it into ChatGPT, GitHub, a browser-visible file, screenshot, or committed configuration.

### Validated end-to-end results

- beehiiv identity verification: **PASS**
- dedicated API key created: **PASS**
- `.dev.vars` local secret loading: **PASS**
- production `npm run build`: **PASS**, 8 pages built successfully
- `npx wrangler pages dev dist`: **PASS**
- Cloudflare Pages Function compilation: **PASS**
- private API key binding recognized by Wrangler: **PASS**
- native form submission: **PASS**
- `POST /api/subscribe`: **200 OK**
- Portfilo pending-confirmation UI: **PASS**
- beehiiv double-opt-in email delivered: **PASS**
- confirmation completed: **PASS**
- subscriber state in beehiiv: **Active**
- acquisition source: **`api: portfilo / website`**

Subscribe functionality is closed unless later deployment QA exposes an environment/configuration regression.

## Email System & Confirmation Experience — NEXT

The default beehiiv double-opt-in email and post-confirmation destination are not yet brand-ready.

Current findings:

- beehiiv allows the Double Opt-in Email to be edited for subject, preview text, author, body copy, confirmation-button text, position, and visual styling;
- the confirmation button itself must remain because it performs double opt-in;
- beehiiv supports an `Opt-in Redirect URL` after confirmation;
- without a custom redirect, the current confirmation flow lands on beehiiv's publication website, which is not an approved Portfilo public surface;
- the confirmation email footer currently uses beehiiv's fallback mailing address because Portfilo has not yet supplied a publication mailing address;
- do not replace that fallback with a fake address;
- a real authorized publication mailing address must be chosen before public newsletter sending.

Recommended product direction:

1. design the Portfilo double-opt-in email in beehiiv;
2. define the Portfilo welcome-email behavior and whether a welcome email should be enabled;
3. create a minimal Portfilo-owned post-confirmation route such as `/confirmed` or `/welcome`;
4. after a stable public Portfilo URL exists, set beehiiv's Opt-in Redirect URL to that Portfilo route;
5. determine a legitimate publication mailing address before launch;
6. test email appearance on desktop and mobile clients before sending publicly.

Do not invest in styling beehiiv's hosted publication website unless Portfilo intentionally decides to use it as a public surface. The Astro/Cloudflare site remains the primary website.

## Build and validation status

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
| Production Astro build | PASS |
| Subscribe native architecture | PASS |
| beehiiv API credentials | PASS |
| Cloudflare Pages Function local run | PASS |
| Real subscription request | PASS |
| Double opt-in confirmation | PASS |
| beehiiv subscriber verification | PASS |
| Subscribe end-to-end | **PASS / CLOSED** |
| Email visual system | PENDING |
| Portfilo post-confirmation destination | PENDING |
| Publication mailing address | PENDING before newsletter launch |

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

## Exact next task

**Portfilo Email System & Confirmation Experience design.**

Research and define:

- Double Opt-in Email copy and visual treatment;
- welcome-email decision;
- post-confirmation Portfilo route and copy;
- beehiiv Opt-in Redirect integration point;
- compliant publication-address plan;
- email QA checklist.

Do not change beehiiv or build the redirect page until the design/copy plan is reviewed and approved.

## Relevant latest commits

- `28b98e8f36964b010af93605b4fcc8547321ff71` - final About founder spacing correction
- `dd9a527312e48562442dd7995d7a704e7a240311` - advance project to Subscribe end-to-end QA

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
