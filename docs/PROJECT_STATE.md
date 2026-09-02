# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Email System Lock — PASS**

The publication foundation, content architecture, editorial design, core public pages, subscription flow, confirmation flow, and reusable Portfilo Brief v0 email system have all passed their current v0 QA.

The next task is a deployment-readiness audit. Do not expand scope before that audit identifies a real launch blocker.

Canonical email architecture:

`docs/EMAIL_SYSTEM_PLAN.md`

Operational beehiiv configuration:

`docs/BEEHIIV_EMAIL_SETUP.md`

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

Latest stable branch work before this documentation lock includes:

- `6fc6638` — remove reader-facing series id;
- prior email-architecture simplification commits restoring beehiiv-owned confirmation.

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

User visual QA: PASS, including stable route navigation, About topic-card alignment, compact `Founder / Louda Tuppal` attribution, and removal of legacy `Back to home` links.

## Public surfaces

### Homepage `/` — PASS

Implementation:

`src/pages/index.astro`

Approved direction:

- page title `Portfilo`;
- compact topic/coverage strip;
- feature story is the primary `h1` and visual hero;
- `Latest` section has `id="latest"`;
- factual About bridge;
- Portfilo Brief copy reduced to the email product itself;
- no geographic/tagline positioning.

Fixture story language remains clearly marked as preview material until launch stories are selected.

### About `/about` — PASS

Implementation:

`src/pages/about.astro`

Current public framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

No founder portrait, long biography, founder letter, or unsupported ownership/independence claim should be added without a new decision.

### Research & Standards `/standards` — PASS

Implementation:

`src/pages/standards.astro`

Substantive standards remain:

- Sources
- Verification
- AI use
- Corrections
- Commercial independence

### Story template — PASS

Implementation:

`src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, and Content Collection behavior remain intact.

### Series template — PASS

Implementation:

`src/pages/series/[slug].astro`

Series ordering and fixture behavior remain intact.

Reader-facing `Series ID` cleanup is complete in commit `6fc6638`.

Do not expand that cleanup into an unapproved Series redesign.

### Confirmation `/confirmed` — PASS

Implementation:

`src/pages/confirmed.astro`

Purpose:

- Portfilo-owned post-double-opt-in destination;
- transactional, not a marketing surface;
- shared SiteHeader/SiteFooter;
- `noindex`;
- one confirmation statement and one CTA back to `/#latest`.

Current copy:

> Subscription confirmed.
>
> You’re subscribed to Portfilo Brief. New stories will arrive by email.
>
> Read the latest ↗

Local browser review: PASS, user reported 2026-09-02.

The route becomes the actual post-confirmation destination only after beehiiv's production Opt-in Redirect URL is configured to the stable public Portfilo domain.

### Subscribe `/subscribe` — END-TO-END PASS

Visible page:

`src/pages/subscribe.astro`

Server endpoint:

`functions/api/subscribe.js`

Local secret template:

`.dev.vars.example`

Approved architecture:

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

beehiiv owns Pending state, confirmation-token handling, Pending → Active transition, confirmed subscriber storage, newsletter delivery, unsubscribe handling, and provider deliverability infrastructure.

Validated local end-to-end results:

- beehiiv identity verification: PASS;
- dedicated API key: PASS;
- `.dev.vars` secret loading: PASS;
- Astro production build: PASS;
- `npx wrangler pages dev dist`: PASS;
- Cloudflare Pages Function compilation: PASS;
- native form submission: PASS;
- `POST /api/subscribe`: 200 OK;
- Portfilo pending-confirmation UI: PASS;
- beehiiv double-opt-in email delivered: PASS;
- confirmation completed: PASS;
- subscriber state in beehiiv: Active;
- acquisition source: `api: portfilo / website`.

The custom Resend/Turnstile/token confirmation experiment remains rejected and removed.

## Production build — PASS

After the simplified beehiiv-owned architecture was restored, the user pulled the branch and ran a clean production build on 2026-09-02.

Result: PASS.

Astro completed static generation successfully, including the restored email architecture state. No Resend/Turnstile/custom-confirmation runtime dependency remains.

## beehiiv confirmation email — PUBLISHED / PASS

Double opt in remains ON.

The revised beehiiv opt-in email is now intentionally published.

Canonical copy:

**Subject**

`Confirm your Portfilo Brief subscription`

**Preview text**

`Confirm your email to finish subscribing.`

**Visible content**

> PORTFILO BRIEF / CONFIRMATION
>
> Confirm your subscription.
>
> Click below to finish signing up for Portfilo Brief.
>
> Confirm subscription

Design is aligned with the Portfilo Brief system using paper `#F4F0E8`, Arial structural typography, Georgia body copy, Portfilo blue `#0050A4`, ink `#171614`, muted `#69655E`, and a square blue CTA.

Do not turn the confirmation email into a larger marketing surface.

## Welcome email / Smart Nudge

Welcome Email: OFF.

The API remains:

`send_welcome_email: false`

Smart Nudge: OFF for v0.

Revisit only when actual subscriber behavior justifies either feature.

## Portfilo Brief v0 — DESIGN + QA PASS

The reusable beehiiv template is:

`Portfilo Brief v0`

Architecture:

- blank beehiiv Visual Editor template;
- one column;
- paper background;
- Arial for structure/headlines/CTAs;
- Georgia for editorial deks/prose;
- no custom HTML dependency;
- no cards, gradients, shadows, or rounded editorial containers;
- Portfilo blue as the primary signal color;
- correction red reserved for corrections.

Master structure:

1. `PORTFILO BRIEF` masthead;
2. issue date;
3. `3 px` blue editorial rule;
4. lead story;
5. one reusable secondary-story Section;
6. beehiiv-managed footer.

Variable issue rules:

- delete the whole secondary Section for a one-story issue;
- duplicate the whole Section for additional curated stories;
- do not create empty sections;
- curate rather than dump 5+ available stories into one email.

Optional lead images:

- default `16:9`;
- approximately `1200 × 675` export;
- full-column, square corners, no border/shadow;
- live text must still carry the story if images are blocked.

Optional corrections:

- inserted after masthead rule and before lead story;
- restrained `#B42318` top rule and label;
- no red background or red CTA.

Footer:

- paper background;
- Arial;
- muted text;
- neutral top rule;
- blue underlined links;
- copyright `Portfilo`;
- beehiiv provider branding left alone for v0.

QA completed:

- desktop preview: PASS;
- mobile preview: PASS;
- long-headline wrapping: PASS;
- one-story issue behavior: PASS;
- optional correction treatment: PASS;
- optional 16:9 image treatment: PASS;
- real inbox test send: PASS, user reported;
- revised opt-in email publication: PASS.

A specific dark-mode QA result was not separately recorded.

Exact settings and per-issue workflow:

`docs/BEEHIIV_EMAIL_SETUP.md`

## Current sender/reply settings

- sender name: `Portfilo`;
- post-author-as-sender: OFF;
- Reply-To: `portfilo.ph@gmail.com`;
- beehiiv/provider-managed sending remains the v0 default.

Do not make custom HTML or paid-only sending/presentation features a v0 dependency.

## Mailing address status

The beehiiv publication address field is currently left unset. beehiiv may display its provider fallback address.

That fallback is not Portfilo's own address and must not be represented as such.

The user accepted the fallback for setup/testing. The repository does not establish that this is sufficient for every applicable public-sending requirement. Mailing-address/compliance clearance remains part of the deployment-readiness audit before the first public Portfilo Brief send.

Do not invent an address or casually expose a private/home address.

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
| Homepage | PASS |
| About | PASS |
| Standards | PASS |
| Story template | PASS |
| Series template | PASS |
| Reader-facing Series ID cleanup | PASS |
| `/confirmed` route | PASS, local browser QA |
| Subscribe end-to-end | PASS, prior real local QA |
| beehiiv double opt in | PASS |
| Custom confirmation experiment | REJECTED / REMOVED |
| Simplified runtime restoration | COMPLETE |
| Production build after simplification | PASS |
| Published opt-in email revision | PASS |
| Portfilo Brief reusable template | PASS |
| Portfilo Brief desktop/mobile QA | PASS |
| Portfilo Brief real inbox test | PASS, user reported |
| Production Opt-in Redirect URL | PENDING stable production domain |
| Mailing-address/compliance clearance | PENDING deployment-readiness audit |
| Production environment end-to-end email QA | PENDING deployment |
| Real launch stories/content replacement | PENDING launch preparation |

## Deployment-readiness audit scope

The next phase is not another design pass. Audit what is actually required to put Portfilo online safely and coherently.

The audit should verify:

- deployment target and production domain;
- Cloudflare Pages production configuration;
- production `BEEHIIV_API_KEY` secret;
- production `/subscribe` → beehiiv → `/confirmed` flow;
- beehiiv Opt-in Redirect URL after the domain exists;
- mailing-address/compliance clearance before the first public newsletter send;
- unsubscribe behavior;
- final sender/reply behavior;
- analytics production configuration;
- SEO/metadata/robots/sitemap behavior;
- replacement/removal of fixture content;
- real launch stories and imagery;
- broken-link and route QA;
- final responsive/browser QA;
- launch rollback/recovery basics.

Do not treat every possible improvement as a blocker. Separate true launch blockers from post-launch enhancements.

## Exact next task

**Run the Portfilo v0 deployment-readiness audit against the current branch and produce a prioritized blocker list before implementing more features.**

The audit should end with:

- blockers that must be solved before deployment;
- items required before the first public newsletter send;
- safe post-launch improvements;
- one concrete next implementation task.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
