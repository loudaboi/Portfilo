# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Shared Site Chrome Reset — IMPLEMENTED / LOCAL QA PENDING**

The previously implemented global-navigation prototype failed visual QA because different routes used different masthead geometry, typography, and responsive behavior.

That prototype has now been replaced with shared site chrome:

- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

Homepage, About, Subscribe, Standards, Story, and Series all render those shared components.

The same pass also corrected the About topic-card alignment, tightened the Founder/name spacing, and removed legacy `Back to home` footer links.

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
- Content-first copy architecture approval

The overall visual language remains approved. Recent work intentionally reopened only the Homepage identity hierarchy and shared site chrome because those were directly involved in copy/usability failures.

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

Approved copy implementation record:

`docs/COPY_REPLACEMENT_CANDIDATE.md`

Navigation reset research/implementation record:

`docs/NAVIGATION_RESEARCH.md`

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

## Shared site chrome — IMPLEMENTED / QA PENDING

### Header

Runtime source of truth:

`src/components/SiteHeader.astro`

Every public route now uses the same component.

Primary navigation is exactly:

- `Latest` → `/#latest`;
- `Standards` → `/standards`;
- `About` → `/about`;
- `Subscribe` → `/subscribe`.

The Portfilo wordmark links to `/` and acts as Home.

Do not add a redundant `Home` text link.

Do not add Business, Technology, Startups, AI, or Building until real topic-index routes exist.

Do not add Series while Series is represented only by fixtures.

Header behavior:

- desktop: wordmark left, navigation right;
- global navigation uses Instrument Sans everywhere;
- sentence case;
- identical order and spacing logic on every route;
- current top-level destination uses signal blue plus a non-shifting underline;
- Subscribe is not permanently blue;
- Story and Series do not falsely mark a top-level destination current;
- no route-specific `Story`, `Series`, `Standards`, or other context label appears inside the global header;
- no hamburger menu while four short links fit visibly;
- mobile uses the same two-row geometry on every route: wordmark first row, visible navigation second row.

Page-specific orientation stays below the global header in local metadata and indexes.

### Footer

Runtime source of truth:

`src/components/SiteFooter.astro`

Every public route now uses the same footer.

Footer destinations use the same vocabulary and order as the header:

- Latest;
- Standards;
- About;
- Subscribe.

The footer wordmark also links Home.

Legacy `Back to home` links have been removed.

### About layout corrections

The five topic containers remain part of the approved visual composition.

Desktop topic descriptions now reserve a consistent minimum vertical area so the five topic names and description starts align horizontally without flattening the containers. That reservation is removed on narrower layouts.

Founder attribution now uses a bounded label column rather than the previous `2fr / 10fr` split, bringing `Founder` and `Louda Tuppal` into a readable metadata pair.

## Homepage `/` — CONTENT-FIRST IMPLEMENTED

Implementation file:

`src/pages/index.astro`

Current direction:

- page title is simply `Portfilo`;
- metadata description names the five coverage areas without geographic positioning;
- giant institutional positioning hero removed;
- compact coverage strip retained;
- temporary fixture-era descriptor: `Stories about companies, products, markets, and the people building them.`;
- synthetic fixture notice retained;
- feature story is the page's primary `h1` and visual hero;
- `Latest` has `id="latest"` for global navigation;
- dark institutional block is a factual About bridge;
- Homepage Portfilo Brief copy is reduced to `Portfilo Brief` / `New stories by email.`.

The temporary coverage descriptor is not a tagline. During browser QA, remove it if the page is clearer without it.

## About `/about` — SIMPLIFIED + ALIGNMENT FIX IMPLEMENTED

Implementation file:

`src/pages/about.astro`

Current public framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

Implemented direction:

- old positioning block removed;
- Philippine-context manifesto section removed;
- topic descriptions simplified;
- topic-card title/description baselines aligned on desktop;
- audience section reduced to people curious about business and technology;
- `If a term matters, we explain it.` retained as the small reader note;
- Standards bridge reduced to `Our standards are public.` plus a link;
- founder remains only `Founder / Louda Tuppal`;
- Founder/name spacing tightened;
- shared footer replaces `Back to home`.

No founder portrait, long biography, founder letter, personal-brand hero, or unsupported ownership/independence claim should be added without a new decision.

## Research & Standards `/standards`

Implementation file:

`src/pages/standards.astro`

The substantive Sources, Verification, AI use, Corrections, and Commercial independence material remains unchanged.

The route now uses shared site chrome. The old centered mono navigation and separate `Standards` masthead label are gone.

## Story template

Implementation file:

`src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, and Content Collection behavior were not reopened.

The template now uses shared site chrome. The former global-header `Story / {contentType}` label is gone; story classification remains in local story metadata below the header.

## Series template

Implementation file:

`src/pages/series/[slug].astro`

Series content, ordering logic, fixture behavior, and story presentation remain unchanged.

The template now uses shared site chrome. The former global-header `Series` label is gone; Series context remains in local page metadata.

Separate pre-launch cleanup still required:

- remove reader-facing `Series ID` before real public launch.

Do not silently expand that cleanup into a Series redesign.

## Subscribe `/subscribe`

Implementation file:

`src/pages/subscribe.astro`

Visible product copy remains intentionally literal:

- `Portfilo Brief`;
- `New Portfilo stories by email.`;
- `Subscribe`;
- `Enter your email. We’ll send a confirmation link.`;
- `No fixed schedule yet. Unsubscribe any time.`.

The route now uses shared site chrome. The native form and client interaction code were not changed in the chrome reset.

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
- binds the verified Portfilo Brief Publication ID in server code;
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

**Local production-build and shared-chrome visual QA.**

The user should:

1. pull the latest `build/portfilo-v0` branch;
2. run `npm run build` and require a clean production build;
3. run `npm run dev` if the build passes;
4. inspect `/`, `/about`, `/subscribe`, `/standards`, `/series/content-architecture-fixtures`, and at least one published Story fixture at the same desktop viewport;
5. confirm the Portfilo wordmark position, nav baseline, header height, nav font, link order, and spacing do not change between routes;
6. confirm active-state underline/color does not shift adjacent links;
7. confirm `Latest` reaches the Homepage Latest section and the wordmark returns Home;
8. inspect 390px and 360px and confirm the same two-row mobile header appears everywhere with no horizontal overflow;
9. inspect the shared footer on every route and confirm the vocabulary is identical and `Back to home` is gone;
10. watch for a double separator where a page-ending section already has a bottom border immediately above the shared footer;
11. inspect About desktop topic-card alignment and Founder/name spacing;
12. decide whether the temporary Homepage descriptor earns its place.

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
| First navigation prototype | REJECTED |
| Shared `SiteHeader` | IMPLEMENTED, browser QA pending |
| Shared `SiteFooter` | IMPLEMENTED, browser QA pending |
| Six-route shared-chrome integration | IMPLEMENTED, browser QA pending |
| About topic-card baseline fix | IMPLEMENTED, browser QA pending |
| About Founder/name spacing fix | IMPLEMENTED, browser QA pending |
| Legacy `Back to home` footer links | REMOVED |
| Production Astro build after chrome reset | **NOT YET VALIDATED** |
| Subscribe native architecture | IMPLEMENTED, visual QA + API credential/end-to-end QA pending |

## Relevant shared-chrome commits

- `53227236af966c111d476095b29b89767ea5c89a` - document navigation research and reject inconsistent prototype
- `e058ba85bb252ebe94bf03e4008ac8b441dab6eb` - add shared SiteHeader
- `0de109e699d428e817e6ef7fc21f72d0d69d06e4` - add shared SiteFooter
- `4b4122c297bb6fda3946357119d30f8793ae4bb8` - integrate About chrome and alignment fixes
- `156d23f9117cf6b237f8c762ebadf7dda90d02fb` - integrate Homepage shared chrome
- `85eeffb264ae310e9c0d1a680a00eeab44a78e1f` - integrate Subscribe shared chrome
- `60b78bc9da5bfee92eddf3d95cbb4f4c6675b464` - integrate Standards shared chrome
- `9bcd49b546791ab1585889f40d2ffece6d317b8e` - integrate Story shared chrome
- `e6b649b32fd6df05abe12cad6129dbe6cdf7c3b8` - integrate Series shared chrome
- `4fb110a9ae79a7ef30bdcb95711f9aa616f49ac3` - record navigation reset implementation

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
