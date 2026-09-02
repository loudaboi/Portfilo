# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Content-First Copy + Global Navigation — IMPLEMENTED / LOCAL QA PENDING**

The user approved **Architecture C: Content-first / no tagline**, then approved the coordinated replacement copy and the decision to pull Global Navigation into the same implementation pass.

The replacement is now implemented across Homepage, About, Subscribe, Standards, Story, and Series.

Do **not** treat this phase as closed yet. A local production build and responsive/browser QA are still required.

Subscribe engineering remains implemented, but end-to-end newsletter QA is still waiting on beehiiv identity verification and API-key creation.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Completed foundation and visual phases

- Foundation
- Content Architecture
- Editorial Design
- Wordmark Exploration & Lock
- Editorial Taxonomy Alignment
- Homepage visual direction
- Series Page Foundation & Visual Design
- Research & Standards Page
- About Page visual direction
- Voice & Positioning architecture research

The overall visual language remains approved. The current pass intentionally reopened only the Homepage identity hierarchy and shared masthead/navigation behavior because those were directly involved in the copy/usability problem.

## Voice reset history

The previous public-copy system was rejected because it became vague, geographically forced, over-explained, and recognizably AI-shaped.

Rejected lines include:

- `Practical intelligence for ambitious Filipinos.`
- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`
- `Some stories start here. Others start somewhere else and matter here anyway.`

Do not iterate on or restore those lines.

The approved architecture removes the assumption that Portfilo needs a permanent public tagline.

## Canonical voice and architecture

Canonical copy guide:

`docs/COPY_STYLE.md`

Architecture research/decision:

`docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`

Approved implementation record:

`docs/COPY_REPLACEMENT_CANDIDATE.md`

### Architecture C: Content-first / no tagline

Approved rules:

- no permanent public tagline by default;
- no geographic slogan in the masthead or hero;
- no audience-flattering slogan;
- the wordmark establishes the publication;
- a small taxonomy descriptor may orient readers when useful;
- the featured story is the main Homepage statement;
- About explains the publication plainly;
- Standards demonstrates editorial rigor;
- Subscribe explains the email product only;
- story selection, headlines, deks, and editorial writing carry most of the personality.

Internal editing rule:

> **Say the thing. Then stop.**

The project treats recognizably machine-shaped brand prose as a product-quality failure even when grammar is correct.

## Geography rule

Philippine relevance remains part of reporting and early distribution strategy, but geography is not required brand copy.

Do not force `Philippines`, `Filipino`, `here`, `local`, or similar wording into the masthead, hero, About, or newsletter merely to establish identity.

Use Philippine context when the actual subject, market, source, regulation, price, person, event, or reader consequence requires it.

A global story does not need a manufactured Philippine justification to belong on Portfilo.

## Audience

The early audience remains younger readers around the founder's peer group who are curious about business, technology, startups, AI, companies, careers, and building.

This is an internal editorial/distribution focus, not a public label.

Do not brand Portfilo as `Gen Z media`, `for young Filipinos`, or `for ambitious Filipinos` by default.

## Global navigation — IMPLEMENTED

Primary navigation is now visible across all public templates:

- `Latest` → Homepage `#latest`;
- `Standards` → `/standards`;
- `About` → `/about`;
- `Subscribe` → `/subscribe`.

The Portfilo wordmark links to `/` and acts as Home.

Do not add a redundant `Home` link.

Do not add Business, Technology, Startups, AI, or Building to primary navigation until real topic-index routes exist.

Do not add Series while Series is represented only by fixtures.

There is no hamburger menu in v0 while these four short links fit visibly. On narrow layouts, navigation becomes a visible second row.

Subscribe may use the signal-blue accent but should not become a rounded SaaS-style button.

Standards, Story, and Series retain their small right-side page/context labels in addition to the primary navigation. This is intentional for the current implementation and should be judged during visual QA.

## Homepage `/` — CONTENT-FIRST IMPLEMENTED

Implementation file:

`src/pages/index.astro`

Implemented changes:

- page title is simply `Portfilo`;
- metadata description names the five coverage areas without geographic positioning;
- giant institutional positioning hero removed;
- compact coverage strip added;
- temporary fixture-era descriptor: `Stories about companies, products, markets, and the people building them.`;
- synthetic fixture notice retained;
- feature story promoted to the page's primary `h1` and visual hero;
- `Latest` has `id="latest"` for global navigation;
- dark institutional block simplified into a factual About bridge;
- repeated topic list removed from that About bridge;
- Homepage Portfilo Brief copy reduced to `Portfilo Brief` / `New stories by email.`;
- footer positioning slogan removed.

The temporary coverage descriptor is not a tagline. During browser QA, remove it if the page is clearer without it.

## About `/about` — SIMPLIFIED IMPLEMENTED

Implementation file:

`src/pages/about.astro`

Current public framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

Implemented changes:

- old positioning block removed;
- entire Philippine-context manifesto section removed;
- topic descriptions simplified;
- `Stories take different forms.` introduces formats;
- audience section reduced to people curious about business and technology;
- `If a term matters, we explain it.` retained as the small reader note;
- Standards bridge reduced to `Our standards are public.` plus a link;
- founder remains only `Founder / Louda Tuppal`;
- footer positioning slogan removed.

No founder portrait, long biography, founder letter, personal-brand hero, or unsupported ownership/independence claim should be added without a new decision.

## Research & Standards `/standards` — SUBSTANTIVE COPY UNCHANGED

Implementation file:

`src/pages/standards.astro`

The substantive Sources, Verification, AI use, Corrections, and Commercial independence material remains unchanged.

Only shared masthead/navigation/footer integration changed.

## Story template — NAVIGATION INTEGRATED

Implementation file:

`src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, and Content Collection behavior were not reopened.

The rejected masthead strapline was replaced by primary navigation. `Story / {contentType}` remains as page context.

## Series template — NAVIGATION INTEGRATED

Implementation file:

`src/pages/series/[slug].astro`

Series content, ordering logic, fixture behavior, and story presentation remain unchanged.

The rejected masthead strapline was replaced by primary navigation. `Series` remains as page context. Footer positioning copy was removed.

Separate pre-launch cleanup still required:

- remove reader-facing `Series ID` before real public launch.

Do not silently expand that cleanup into a Series redesign.

## Subscribe `/subscribe` — NATIVE FORM + SIMPLIFIED COPY IMPLEMENTED

Implementation file:

`src/pages/subscribe.astro`

Visible product copy is now intentionally literal:

- `Portfilo Brief`;
- `New Portfilo stories by email.`;
- `Subscribe`;
- `Enter your email. We’ll send a confirmation link.`;
- `No fixed schedule yet. Unsubscribe any time.`.

The old coverage/perspective explanation was removed.

Product facts now state:

- Schedule / No fixed schedule yet;
- Confirmation / Required before the subscription is active;
- Unsubscribe / Any time.

The beehiiv provider note remains literal and operational.

### Native subscription architecture

Portfilo renders its own form and forwards signup requests through one Cloudflare Pages Function:

`functions/api/subscribe.js`

The function:

- accepts POST only;
- rejects cross-origin browser requests;
- limits request size;
- validates email server-side;
- quietly drops honeypot submissions;
- requires only `BEEHIIV_API_KEY` from the server-side environment;
- binds the verified Portfilo Brief API V2 Publication ID in server code;
- calls beehiiv's subscription API;
- sets double opt-in on;
- can reactivate an address after an explicit resubscribe form submission;
- exposes no credential to the browser;
- stores no subscriber data in Portfilo.

`.dev.vars.example` documents the only local secret variable. `.dev.vars` is ignored by Git.

Do not reintroduce the beehiiv iframe/embed.

### Remaining Subscribe validation

After beehiiv identity verification is complete:

- create a dedicated API key;
- configure local `.dev.vars`;
- run the site through `npx wrangler pages dev dist`;
- verify invalid-email and loading states;
- complete one real subscription request;
- receive and complete the double-opt-in confirmation;
- confirm the subscriber appears in beehiiv.

Do not close Subscribe until that end-to-end flow passes.

## Locked taxonomy

V0 topics remain:

- Business
- Technology
- Startups
- AI
- Building

Rules remain:

- one primary topic per story;
- AI is primary only when AI itself is the main subject;
- founders are a recurring lens, not a top-level topic;
- capital/funding normally sits under Business or Startups;
- `Latest` is broader than breaking news;
- Portfilo Brief is the email product.

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

Current direction remains:

- Cloudflare Pages;
- one Cloudflare Pages Function solely for newsletter subscription forwarding;
- Cloudflare Web Analytics;
- beehiiv;
- GitHub;
- local Markdown + Astro Content Collections;
- no database, authentication system, custom subscriber store, custom newsletter platform, or custom analytics backend.

## Exact next task

**Local production-build and responsive/browser QA.**

The user should:

1. pull the latest `build/portfilo-v0` branch;
2. run `npm run build` and require a clean production build;
3. run `npm run dev` for browser review;
4. inspect `/`, `/about`, `/subscribe`, `/standards`, `/series/content-architecture-fixtures`, and at least one published Story fixture;
5. check desktop, intermediate/tablet, 390px, and 360px widths;
6. confirm the navigation is visible and usable on every route;
7. confirm `Latest` reaches the Homepage Latest section;
8. confirm the wordmark returns Home;
9. check active navigation styling, focus states, tap targets, wrapping, and horizontal overflow;
10. check Homepage hierarchy and decide whether the temporary descriptor earns its place;
11. confirm no current public surface shows the rejected geographic/tagline positioning;
12. visually check Subscribe form states without requiring a successful beehiiv submission yet.

Do **not** claim this QA has passed until the user reports the local results.

After this QA passes, resume Subscribe end-to-end credential testing when the API key is available. Analytics/deployment preparation and editorial launch work follow later.

## Current validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Foundation | PASS |
| Content Architecture | PASS |
| Editorial Design | PASS |
| Wordmark | PASS |
| Editorial Taxonomy | PASS |
| Architecture C: Content-first / no tagline | APPROVED |
| Canonical copy guide | UPDATED |
| Coordinated content-first replacement | IMPLEMENTED, local QA pending |
| Global primary navigation | IMPLEMENTED, local QA pending |
| Homepage content hierarchy | IMPLEMENTED, local QA pending |
| About simplified copy | IMPLEMENTED, local QA pending |
| Standards substantive content | PASS, navigation regression QA pending |
| Story template | PASS baseline, navigation regression QA pending |
| Series template | PASS baseline, navigation regression QA pending |
| Subscribe native architecture | IMPLEMENTED, visual QA + API credential/end-to-end QA pending |

## Relevant current-pass commits

- `f348937dd6594ecdc07bbdc75f4263821c1b6071` - mark previous copy revision rejected
- `609dae0dae803357e5b0086b422ffa05ca40fc03` - add positioning architecture exploration
- `a26b2cdc21b98cf6db9b8ca3a8fb85b96abdb54f` - rewrite canonical copy guide
- `41576056d7b53148c25d027694ebe05609a68c12` - record Architecture C approval
- `f914cb8d83dca655213c72768d154e93cd60cf2a` - prepare content-first replacement candidate
- `771c0f93cdde76213b0d06716ac60d08a8b09092` - content-first Homepage + navigation
- `8cfc9ece78fc6525ae95e184dd556f821c7024ec` - simplified About + navigation
- `2857355685522e5bbe32b270b8ab969a03ebd6cd` - simplified Subscribe + navigation
- `f73b909f42c4560c7a8b5e0c6a273cc9f79d216f` - Standards navigation integration
- `995b098282ca3e38515c93087ab1f6a87efb72df` - Story navigation integration
- `6b2df694b8858e97d5fa73157ecdfa02d0fd6643` - Series navigation integration
- `74eeebcee07ed19b90597182cf5c477d0955f09f` - record approved copy/navigation implementation

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
