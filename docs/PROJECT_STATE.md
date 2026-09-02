# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Editorial Launch Research - ACTIVE**

The publishing machine is ready for real editorial selection.

The publication foundation, content architecture, editorial design, core public pages, subscription and confirmation flow, Portfilo Brief email system, launch foundation, repository-side production hardening, temporary live Cloudflare deployment, and Content Planning System v0 have passed their current validation.

The active task is now to use the approved planning system to answer:

> What should Portfilo investigate and publish first?

Canonical content-planning guide:

`docs/CONTENT_PLANNING.md`

Editorial launch research workspace:

`research/editorial-launch/`

The final public domain is still intentionally unset. `SITE_URL` must remain unset until the canonical domain is connected. Final-domain Cloudflare configuration, final beehiiv redirect configuration, edge rate limiting, Web Analytics verification, unsubscribe QA, and mailing-address/compliance clearance remain deployment-readiness work. They do not block editorial launch research.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

Recent stable checkpoints include:

- Content Planning System v0 - current checkpoint;
- `91b2c2e` - record live deployment checkpoint;
- `4461647` - render link arrows consistently across platforms, user production/mobile QA PASS;
- `84c0da9` - trigger Cloudflare production deployment used for live Pages testing;
- `8ce33ec` - record Task 1B repository hardening;
- `e8b53ad` - lock Portfilo Brief v0 email system;
- `6fc6638` - remove reader-facing series id.

Historical implementation and validation detail remains available in git history and in the canonical documents referenced below.

## Canonical documents

Project/product:

- `docs/V0_SCOPE.md`
- `docs/PROJECT_STATE.md`
- `docs/CONTENT_PLANNING.md`

Editorial:

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `research/README.md`

Design:

- `docs/DESIGN_DIRECTION.md`

Email/deployment:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

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

Canonical copy rule:

> **Say the thing. Then stop.**

Rejected positioning must not be restored, including:

- `Practical intelligence for ambitious Filipinos.`
- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`

Philippine relevance remains part of reporting and early distribution strategy, but geography is not required brand copy and should not be forced into global stories.

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

## Content Planning System v0 - APPROVED / PASS

Implementation:

`docs/CONTENT_PLANNING.md`

Purpose:

Select which questions deserve Portfilo reporting time before the existing research and publishing pipeline begins.

The planning boundary is:

```text
Signal -> Story question -> Editorial gate -> Priority -> Research assignment
```

The existing research/publishing system then remains:

```text
Research brief -> Sources -> Evidence -> Contradictions -> Story decision -> Draft -> Verification -> Publish
```

### Primary planning unit

The unit of planning is a specific, answerable **story question**, not a broad topic and not a pre-written headline.

### Reader needs

Each candidate identifies one primary reader need:

- `Update` - What changed?
- `Understand` - How does this work?
- `Interpret` - What does this mean?
- `Decide` - What should I know before making this decision?

Reader need is separate from content type.

### Editorial gate

Substantial candidates are checked for:

1. question;
2. importance;
3. timing / why now;
4. potential Portfilo contribution;
5. credible evidence path;
6. reporting feasibility.

Possible gate outcomes:

- `PASS`
- `REFRAME`
- `HOLD`
- `KILL`

Killing a weak candidate is a valid editorial outcome.

### Existing-coverage check

Before substantial assignment, Portfilo checks whether the question has already been answered well.

Coverage by another publication is not itself disqualifying. The candidate must show a meaningful information gap, changed circumstances, or a materially different contribution.

Commodity rewrites are not enough.

### Priority

Candidates that pass receive:

- `HIGH`
- `MEDIUM`
- `LOW`

No 100-point editorial score is used. Priority remains judgment informed by consequence, information gap, timeliness, originality, evidence, fit, lifespan, and effort.

### Copy Style integration

`docs/COPY_STYLE.md` applies at two points:

- pitch framing before assignment;
- headline/dek approval after evidence stabilizes.

Copy style does not determine whether a subject is worthy of coverage.

### Distribution

Derivative potential may be recorded, but social/video/shareability cannot make a weak story worthy of reporting.

The publishing rule remains:

> Research once, publish many.

### Work-in-progress limits

Default v0 limits:

- maximum one flagship investigation in active production at once;
- generally no more than three substantial stories in active research at once;
- no mandatory article quota.

### Fast-moving updates

A narrow verified factual development can use a faster path when attribution and scope are clear. Larger implications become separate planning candidates and follow the normal gate.

### Planning-system evaluation

Before approval, the system was challenged for likely failure modes including bureaucracy, slow news response, forced Philippine framing, social-engagement incentives, fake scoring precision, confirmation bias, sunk-cost publishing, excessive simultaneous work, and generic AI-shaped framing.

No unresolved structural blocker was identified for v0.

No database, CMS, planning SaaS, admin dashboard, or workflow dependency was added.

## Editorial Launch Research - ACTIVE

The first real use of the planning system is the Editorial Launch Research project described in `research/README.md`.

Expected workspace:

```text
research/
└── editorial-launch/
    ├── brief.md
    ├── audience-signals.md
    ├── competitor-map.md
    ├── information-gaps.md
    ├── candidate-stories.md
    ├── candidate-series.md
    ├── evaluation.md
    └── recommendation.md
```

`candidate-stories.md` is required so the research does not assume a series before evidence supports one.

The launch research may recommend:

- one standalone flagship;
- several unrelated strong stories;
- one coherent launch package;
- a real series.

A broad candidate pool may be developed, but there is no story-count quota. A plausible final package is one flagship plus two to four supporting stories only if the research justifies them.

Do not manufacture stories to fill the homepage.

No launch story is approved yet.

## Shared site chrome - PASS

Runtime components:

- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

Primary navigation:

- `Latest` -> `/#latest`
- `Standards` -> `/standards`
- `About` -> `/about`
- `Subscribe` -> `/subscribe`

The Portfilo wordmark links Home. Shared navigation remains visible on mobile.

User visual QA includes stable route navigation, About topic-card alignment, compact `Founder / Louda Tuppal` attribution, removal of legacy `Back to home` links, and consistent non-emoji up-right link arrows on iOS.

## Public surfaces

### Homepage `/` - PASS

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

Fixture story language remains clearly marked as preview material until real launch stories are selected.

### About `/about` - PASS

Implementation:

`src/pages/about.astro`

Current framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

Founder treatment remains minimal.

### Research & Standards `/standards` - PASS

Implementation:

`src/pages/standards.astro`

Standards cover:

- Sources
- Verification
- AI use
- Corrections
- Commercial independence

### Story template - PASS

Implementation:

`src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, figures, and Content Collection behavior remain intact.

### Series template - PASS

Implementation:

`src/pages/series/[slug].astro`

Series ordering and fixture behavior remain intact. Reader-facing Series ID cleanup is complete.

### Confirmation `/confirmed` - PASS

Implementation:

`src/pages/confirmed.astro`

Purpose:

- Portfilo-owned post-double-opt-in destination;
- transactional, not a marketing surface;
- shared SiteHeader/SiteFooter;
- `noindex`;
- one confirmation statement and CTA back to `/#latest`.

Temporary Pages route:

`https://portfilo-app.pages.dev/confirmed`

The final beehiiv Opt-in Redirect must point to the canonical production `/confirmed` route after the public domain is connected. The temporary redirect target was identified during testing but its saved Beehiiv configuration was not separately re-verified in the repository checkpoint.

### Subscribe `/subscribe` - LOCAL + LIVE FLOW PASS

Visible page:

`src/pages/subscribe.astro`

Server endpoint:

`functions/api/subscribe.js`

Architecture:

Portfilo renders its own signup form and forwards requests through one narrow Cloudflare Pages Function to beehiiv.

The function:

- accepts POST only;
- performs same-origin browser checking;
- enforces request-size limits including actual body bytes;
- validates email server-side;
- uses a honeypot;
- reads `BEEHIIV_API_KEY` only server-side;
- calls beehiiv API V2;
- uses `reactivate_existing: true`;
- uses `send_welcome_email: false`;
- uses `double_opt_override: "on"`;
- stores no subscriber database in Portfilo;
- returns safe errors.

beehiiv owns confirmation-token handling, subscriber state, delivery, unsubscribe handling, and deliverability infrastructure.

Validated locally and on the temporary live Pages deployment:

- native signup: PASS;
- Pages Function -> beehiiv: PASS;
- double-opt-in email delivery: PASS;
- confirmation: PASS;
- Pending -> Active subscriber transition: PASS.

The custom Resend/Turnstile/token confirmation experiment remains rejected and removed.

## Email system - PASS

Reusable template:

`Portfilo Brief v0`

Canonical implementation and per-issue operating instructions:

`docs/BEEHIIV_EMAIL_SETUP.md`

Architecture remains:

- beehiiv Visual Editor;
- one column;
- paper background;
- restrained editorial hierarchy;
- no custom HTML dependency;
- optional 16:9 lead image;
- variable one-story or multi-story issue structure;
- optional restrained correction module;
- beehiiv-managed footer and unsubscribe behavior.

QA completed:

- desktop preview: PASS;
- mobile preview: PASS;
- long-headline wrapping: PASS;
- one-story behavior: PASS;
- optional correction treatment: PASS;
- optional lead-image treatment: PASS;
- real inbox test: PASS, user reported;
- double-opt-in confirmation email revision: published / PASS.

Welcome Email: OFF.

Smart Nudge: OFF for v0.

Sender name: `Portfilo`.

Reply-To: `portfilo.ph@gmail.com`.

The provider-managed unsubscribe/preferences link remains required and may open a beehiiv-hosted subscriber profile. Do not replace beehiiv's unsubscribe state handling in v0.

## Site launch foundation - PASS

Task 1A implementation includes:

- optional production `SITE_URL` contract;
- canonical URLs;
- Open Graph/social metadata;
- conditional sitemap;
- robots.txt;
- Article structured data;
- custom 404;
- Privacy page;
- default social image;
- static security-header baseline;
- `astro check` in the production build;
- cross-platform vector treatment for small up-right link arrows.

`SITE_URL` is intentionally unset until the real canonical domain exists.

No preview or `pages.dev` URL should become the canonical site origin.

## Task 1B repository hardening - PASS

Repository-side hardening includes:

- 4 KB request cap enforced against actual request body bytes;
- early `Content-Length` rejection retained;
- JSON, URL-encoded, and multipart input support retained;
- same-origin, honeypot, validation, safe-error, and beehiiv behavior retained;
- production setup contract in `docs/CLOUDFLARE_PRODUCTION_SETUP.md`.

Validated through the prior isolated GitHub Actions run:

- `npm ci`: PASS;
- dependency audit: 0 vulnerabilities on 2026-09-02;
- mocked valid signup: PASS;
- cross-origin rejection: PASS;
- oversized body -> `413`: PASS;
- URL-encoded path: PASS;
- multipart path: PASS;
- honeypot behavior: PASS;
- `npm run build`: PASS;
- build with validation-only `SITE_URL`: PASS.

## Temporary production deployment - PASS / final domain pending

Cloudflare Pages project:

`portfilo-app`

Temporary URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Validated, user reported:

- Pages deployment: PASS;
- production `BEEHIIV_API_KEY` secret available to deployed function: PASS;
- live signup: PASS;
- beehiiv confirmation email: PASS;
- confirmation: PASS;
- Active subscriber state: PASS;
- cross-platform arrow fix after deployment: PASS on iOS.

Still pending:

- final public domain;
- production `SITE_URL` after the final domain is live;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enablement/verification;
- final beehiiv Opt-in Redirect URL;
- final-domain subscribe -> confirm -> `/confirmed` -> Active -> unsubscribe QA;
- mailing-address/compliance clearance before the first public newsletter send.

Do not add Turnstile unless deployed traffic shows a real abuse problem after the existing honeypot and edge rate limit are active.

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
| Homepage | PASS |
| About | PASS |
| Standards | PASS |
| Story template | PASS |
| Series template | PASS |
| `/confirmed` route | PASS, local browser QA |
| Subscribe end-to-end | PASS, local + temporary live Cloudflare flow through Active |
| beehiiv double opt in | PASS |
| Portfilo Brief reusable template | PASS |
| Portfilo Brief desktop/mobile QA | PASS |
| Portfilo Brief real inbox test | PASS, user reported |
| Task 1A site launch foundation | PASS |
| `astro check` | PASS |
| Production build | PASS |
| Canonical/social metadata | PASS when `SITE_URL` is set |
| Sitemap/robots | PASS when `SITE_URL` is set |
| Custom 404 | PASS |
| Privacy surface | PASS |
| Article structured data | PASS when `SITE_URL` is set |
| Static security headers | PASS |
| Task 1B request-body hardening | PASS |
| Dependency audit | PASS, 0 vulnerabilities on 2026-09-02 |
| Cloudflare temporary production deployment | PASS, user reported |
| Production `BEEHIIV_API_KEY` secret | PASS, live function verified |
| Live subscribe -> confirm -> Active | PASS, user reported |
| Cross-platform link-arrow rendering | PASS, user iOS QA |
| Content Planning System v0 | APPROVED / PASS |
| Editorial Launch Research | ACTIVE |
| First real launch package | PENDING research |
| Fixture content replacement | PENDING launch stories |
| Final-domain Cloudflare configuration | PENDING domain |
| Production Opt-in Redirect | PENDING final canonical domain; temporary target not separately re-verified |
| Cloudflare edge rate limiting | PENDING |
| Cloudflare Web Analytics | PENDING verification |
| Production unsubscribe QA | PENDING |
| Mailing-address/compliance clearance | PENDING before first public send |

## Remaining launch scope

The publishing and planning systems are ready. Remaining work is now split into two tracks.

### Editorial track

- run Editorial Launch Research;
- identify audience and market signals without treating them as evidence for an individual story;
- map competitors and existing coverage;
- identify information gaps;
- build a credible candidate-story pool;
- evaluate candidates through `docs/CONTENT_PLANNING.md`;
- decide whether a series is actually justified;
- select the first real launch package;
- create research packets for approved substantial stories;
- research, draft, verify, and publish under the canonical editorial standards;
- prepare imagery/graphics only where editorially justified;
- replace/remove fixture content;
- populate the homepage with real stories.

### Deployment track

When the canonical domain is available:

- connect the public domain;
- set `SITE_URL`;
- configure edge rate limiting;
- enable/verify Web Analytics;
- update beehiiv Opt-in Redirect to the canonical `/confirmed` route;
- complete final subscribe/confirm/unsubscribe QA;
- verify canonical/social/sitemap/robots behavior;
- complete mailing-address/compliance clearance;
- run final browser, responsive, link, and console QA.

Do not treat post-launch enhancements as v0 blockers.

## Exact next task

**Run Editorial Launch Research using `docs/CONTENT_PLANNING.md`.**

Immediate sequence:

1. create the `research/editorial-launch/` workspace;
2. define the launch-research brief and decision criteria;
3. research audience signals relevant to Portfilo's initial editorial focus;
4. map current Philippine/regional/international coverage relevant to Business, Technology, Startups, AI, and Building;
5. identify information gaps and recurring unanswered questions;
6. build `candidate-stories.md` without assuming a series;
7. evaluate candidates using the approved editorial gates and priority bands;
8. evaluate `candidate-series.md` only where multiple strong stories form a real coherent investigation;
9. write `recommendation.md` selecting the first launch package and explaining why.

Do not begin writing a launch article merely to fill the site before this selection research is complete.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.