# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Production Hardening — PARTIAL PASS**

The publication foundation, content architecture, editorial design, core public pages, subscription flow, confirmation flow, reusable Portfilo Brief v0 email system, and Task 1A site launch foundation have passed their current v0 validation.

Task 1A adds the production-origin contract, canonical/social metadata, sitemap and robots behavior, Article structured data, custom 404, privacy surface, default social image, static security-header baseline, and Astro type/content checking.

The final public domain is still intentionally unset. Task 1B repository-side hardening is complete and validated. Production account configuration and deployed end-to-end QA remain pending until the final domain and Cloudflare production settings are available.

Canonical email architecture:

`docs/EMAIL_SYSTEM_PLAN.md`

Operational beehiiv configuration:

`docs/BEEHIIV_EMAIL_SETUP.md`

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

Latest stable checkpoints include:

- Task 1A site launch foundation — current checkpoint;
- `e8b53ad` — lock Portfilo Brief v0 email system;
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

## Site launch foundation — PASS

Task 1A is implemented without changing the existing visual direction or expanding the runtime architecture.

Implementation:

- `astro.config.mjs` reads an optional build-time `SITE_URL` and uses it as Astro's canonical `site`;
- no production domain, `pages.dev` URL, or preview URL is hard-coded;
- `@astrojs/sitemap` is enabled only when `SITE_URL` is present;
- `/confirmed` and `/404` are excluded from the sitemap;
- `src/components/SiteHead.astro` centralizes description, canonical, Open Graph, Twitter/X card metadata, sitemap discovery, and Article JSON-LD;
- story pages emit Article structured data when a canonical site origin is configured;
- `src/pages/robots.txt.ts` emits a crawl policy and production sitemap reference when available;
- `src/pages/404.astro` provides the custom static 404;
- `src/pages/privacy.astro` records the current v0 newsletter/infrastructure privacy behavior;
- Subscribe links directly to Privacy;
- the shared footer includes Privacy;
- `public/social/portfilo-default.png` is the default 1200 × 630 social/share image;
- `public/_headers` provides a narrow static security-header baseline without introducing a CSP that would break the current inline styles/script or externally hosted fonts;
- `npm run check` runs `astro check`;
- `npm run build` now runs `astro check && astro build`.

Security-header baseline for static Pages responses:

- `X-Content-Type-Options: nosniff`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `X-Frame-Options: DENY`;
- camera/geolocation/microphone disabled through `Permissions-Policy`;
- CSP limited to `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'`, and `object-src 'none'`.

Cloudflare Pages `_headers` applies to static responses, not Pages Functions. The existing `/api/subscribe` function continues to set its own `no-store` and `nosniff` response headers. No rate limiting or Turnstile was added in Task 1A.

Validation completed on 2026-09-02 through an isolated GitHub Actions run:

- dependency install / lock synchronization: PASS;
- `astro check`: PASS;
- build without `SITE_URL`: PASS;
- build with a temporary validation-only site origin: PASS;
- generated custom 404: PASS;
- generated Privacy route: PASS;
- generated robots.txt: PASS;
- generated sitemap index: PASS;
- canonical URL output: PASS;
- Open Graph default-image output: PASS;
- Article JSON-LD output: PASS;
- `/confirmed` excluded from sitemap: PASS;
- `/404` excluded from sitemap: PASS;
- default social image copied to build output: PASS;
- static `_headers` copied to build output: PASS.

Still pending because they require deployment or launch content:

- final production domain;
- production Cloudflare `SITE_URL`;
- production `BEEHIIV_API_KEY`;
- production beehiiv Opt-in Redirect URL;
- production subscription/confirmation/unsubscribe QA;
- mailing-address/compliance clearance before the first public newsletter send;
- Cloudflare edge rate limiting for `/api/subscribe` under Task 1B;
- replacement/removal of published development fixture content before public launch;
- real launch stories and final editorial imagery.

## Task 1B repository hardening — PASS / production account configuration pending

Repository-side Task 1B work is complete without adding a new runtime service.

Implementation:

- `functions/api/subscribe.js` now enforces the 4 KB request cap against the actual body bytes, not only the caller-supplied `Content-Length` header;
- the existing `Content-Length` check remains as an early rejection path;
- JSON, URL-encoded form, and multipart form inputs remain supported;
- same-origin browser checking, honeypot behavior, server-side email validation, safe errors, beehiiv double opt in, and server-only `BEEHIIV_API_KEY` behavior remain unchanged;
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md` records the production Pages, environment-variable, custom-domain, rate-limiting, analytics, beehiiv redirect, and deployed email-QA contract.

Validation completed on 2026-09-02 through an isolated GitHub Actions run:

- `npm ci`: PASS;
- current dependency audit: `0 vulnerabilities`;
- valid JSON signup path with mocked beehiiv response: PASS;
- cross-origin request rejection: PASS;
- oversized actual body rejected with `413`: PASS;
- URL-encoded fallback: PASS;
- multipart input: PASS;
- honeypot accepted without forwarding to beehiiv: PASS;
- `npm run build`: PASS;
- build with temporary validation-only `SITE_URL`: PASS.

Production account-side items remain pending because no final public domain is recorded and Cloudflare account actions were not available to this execution session after connection:

- connect/finalize the public domain;
- set production `SITE_URL`;
- set production `BEEHIIV_API_KEY`;
- create the Cloudflare `/api/subscribe` rate-limiting rule;
- enable/verify Cloudflare Web Analytics;
- set beehiiv's Opt-in Redirect URL to the canonical production `/confirmed` route;
- run deployed subscription → confirmation → Active subscriber → unsubscribe QA.

Do not add Turnstile unless deployed traffic shows a real abuse problem after the existing honeypot and edge rate limit are active.

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
| Task 1A site launch foundation | PASS |
| `astro check` | PASS |
| Build without `SITE_URL` | PASS |
| Build with validation `SITE_URL` | PASS |
| Canonical/social metadata generation | PASS when `SITE_URL` is set |
| Sitemap/robots generation | PASS when `SITE_URL` is set |
| Custom 404 | PASS, generated output |
| Privacy page + signup/footer links | PASS |
| Article structured data | PASS when `SITE_URL` is set |
| Static security-header baseline | PASS |
| Task 1B request-body hardening | PASS |
| Dependency audit | PASS, 0 vulnerabilities on 2026-09-02 |
| Task 1B Cloudflare production configuration | PENDING final domain/account configuration |
| Production Opt-in Redirect URL | PENDING stable production domain |
| Mailing-address/compliance clearance | PENDING clearance before first public send |
| Production environment end-to-end email QA | PENDING deployment |
| Real launch stories/content replacement | PENDING launch preparation |

## Remaining deployment-readiness scope

Task 1A resolved the repository-side launch-foundation gaps. The remaining work is production configuration, launch content, and deployed-environment QA.

The remaining launch process should verify:

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

**Finish Task 1B in the production accounts after the final Portfilo domain is selected.**

Use `docs/CLOUDFLARE_PRODUCTION_SETUP.md` as the execution checklist. The remaining sequence is:

1. connect the final public domain to Cloudflare Pages;
2. set production `SITE_URL` to the canonical HTTPS origin;
3. set the production `BEEHIIV_API_KEY` secret;
4. create the `/api/subscribe` edge rate-limiting rule;
5. enable/verify Cloudflare Web Analytics;
6. set beehiiv's production Opt-in Redirect URL to `/confirmed`;
7. run the production subscribe → confirm → Active → unsubscribe flow end to end.

After Task 1B production QA passes, move to launch-content replacement and final browser/link QA.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
