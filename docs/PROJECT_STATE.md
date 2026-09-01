# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Subscribe Surface & beehiiv Integration**

The Subscribe page and beehiiv integration hook are committed as a candidate. The phase remains open because Portfilo's publication-specific beehiiv embed code has not yet been generated/configured, and functional signup plus final local browser QA are still required.

Completed phases:

- Foundation
- Content Architecture
- Editorial Design
- Wordmark Exploration & Lock
- Public Copy Style
- Editorial Taxonomy Alignment
- Homepage Visual Design
- Series Page Foundation & Visual Design
- Research & Standards Page
- About Page

The story, homepage, Series, Research & Standards, and About visual directions are frozen for v0 unless a concrete implementation problem is discovered.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Finish the smallest credible public **Subscribe** surface required by `docs/V0_SCOPE.md` and connect it to beehiiv without creating custom newsletter infrastructure.

Portfilo Brief is the planned email product. beehiiv remains responsible for subscriber management, deliverability, unsubscribe handling, and the embedded signup form.

## Exact next task

Complete the beehiiv account-side connection and final validation in this order:

1. In beehiiv, create or open the Portfilo publication on the free Launch plan.
2. Go to `Subscribers > Subscribe forms` and create a form for the Portfilo website.
3. Use the **Inline** embed layout.
4. Keep the minimum required field set for v0, preferably email only unless a real editorial need justifies another field.
5. Set the form width/layout so it can fill the Portfilo signup panel responsively.
6. Save/publish the form and choose **Get embed code**.
7. From the generated single script tag, copy only the URL inside its `src="..."` attribute.
8. Create a local `.env` file from `.env.example` and set:

   `PUBLIC_BEEHIIV_EMBED_SRC=<beehiiv script URL>`

9. Run `npm run build` and require a clean static production build.
10. Run the site locally and confirm `/subscribe` renders the real beehiiv form.
11. Submit a test email and verify it reaches the beehiiv audience/subscriber list.
12. Verify beehiiv's success/error behavior, unsubscribe handling path, and any required terms/privacy links configured in beehiiv.
13. Review `/subscribe` at desktop, intermediate/tablet, 390px, and 360px widths.
14. Check keyboard focus, skip link, form usability, font loading, and horizontal overflow.
15. Confirm existing `/`, `/about`, `/standards`, Series, and published story routes remain acceptable.
16. Do not mark Subscribe complete until the live signup flow and final local QA pass.

After Subscribe passes final local QA, perform a **Global Navigation & Public Surface Integration pass** so readers can move coherently among Home, Standards, About, Subscribe, and future story/index surfaces.

Do not begin analytics, deployment, or editorial launch research until the Subscribe phase is complete.

## Portfilo editorial direction

Portfilo helps ambitious Filipinos understand business, technology, startups, AI, and what it takes to build in the Philippines through useful, specific, evidence-aware journalism and analysis.

Current positioning line:

> **Practical intelligence for ambitious Filipinos**

This remains the current positioning line and masthead strapline, but is not permanently frozen as the final long-term public tagline.

### Locked primary topics

The controlled v0 story taxonomy is:

- **Business** — companies, industries, markets, business models, economics, and strategy;
- **Technology** — software, fintech, infrastructure, platforms, devices, and emerging technology where Philippine relevance is concrete;
- **Startups** — new companies, startup ecosystems, funding, growth, failure, acquisitions, and early-stage company development;
- **AI** — models, products, agents, adoption, infrastructure, economics, policy, and the effects of AI on Philippine companies and work;
- **Building** — product, distribution, sales, pricing, hiring, operations, and the practical work of creating companies and products.

The Content Collection schema enforces:

`business / technology / startups / ai / building`

Classification rules:

- one primary topic per story in v0;
- AI is primary only when AI itself is the main thing the reader needs to understand;
- founders are a recurring subject/lens, not a top-level topic;
- capital/venture/funding live primarily under Business or Startups;
- secondary tags are deferred until real publishing volume proves a need;
- career, salary, skills, work, and broader life questions are supporting subjects rather than Portfilo's primary identity;
- News is a format, not Portfilo's identity;
- `Latest` remains broader than a breaking-news feed;
- Portfilo Brief remains the planned email product.

## Public copy standard

`docs/COPY_STYLE.md` is canonical for reader-facing copy and `AGENTS.md` requires contributors to follow it.

Core rules:

- clear before clever;
- smart without academic affect;
- confident without hype;
- useful before self-descriptive;
- Filipino by concrete context, not costume;
- familiar interface language over invented brand terminology;
- avoid generic AI/product-copy patterns and internal project language;
- never strengthen uncertainty or factual claims for stronger copy.

Working principle:

> **Make the useful thing clear. Keep the personality in the precision.**

For factual journalism, Copy Style does not replace the stricter Editorial, Research, and Publishing standards.

## Brand and visual system

### Wordmark

Locked for v0:

- wordmark-first identity;
- no standalone logo symbol required;
- forward-leaning Instrument Sans treatment with slight streetwear influence;
- `Port` near-black `#171614`;
- `fi` signal blue `#0050a4`;
- `lo` correction red `#b42318`.

### Color rule

Paper/black carry the publication. Blue is the active editorial accent. Red is the wordmark signature and correction signal until a better institutional role is earned.

Do not add red merely to create numerical color balance.

## Homepage Visual Design — COMPLETE

Final user-reported validation on 2026-09-02 included a clean production build, correct homepage rendering, published/draft fixture behavior, desktop/mobile review, and explicit approval.

Current Portfilo Brief homepage copy:

> **Portfilo Brief, by email.**
>
> Get new reporting and clear explanations on business, technology, startups, AI, and building in the Philippines.

Homepage Visual Design remains closed.

## Series Page Foundation & Visual Design — COMPLETE

Generic route:

`src/pages/series/[slug].astro`

The Series page generates static routes from structured Series entries, includes only published stories, sorts by `seriesOrder`, supports empty states, and uses no client-side JavaScript.

Synthetic validation route:

`/series/content-architecture-fixtures`

Implementation commits:

- `799f0d8ca03a72998488b7521e03c8f98559c71f` — Series Content Collection
- `68109c0bef0d3a83194c9220a0c58a964efcb927` — synthetic Series fixture
- `4e9c872fdb91c45cff1eebfa24e1d2fb6318ba44` — ordering fixture Part 2
- `ea25f432125e17123553c356f3d37163a2431fda` — ordering fixture Part 3
- `241be4fdcd783117ecd2b75af808fc5b23e29151` — generic Series page

User-reported final QA PASS on 2026-09-02.

**Series Page Foundation & Visual Design is formally closed.**

## Research & Standards Page — COMPLETE

Route:

`/standards`

Implementation file:

`src/pages/standards.astro`

The page translates the internal standards into reader-facing explanations of Sources, Verification, AI use, Corrections, and Commercial independence. It is static Astro with no client-side JavaScript and no new dependency.

Implementation commits:

- `df26a6df07e17324a5af7d78c018866544745e9b` — initial public Research & Standards page
- `70c4a593aa828078c60b402510076b02eaaf4bea` — responsive/CSS compatibility refinement
- `4bec0d2d37b158cfff8775fba7a18d2cbc30d1c9` — implementation candidate and QA gate

User-reported final QA PASS on 2026-09-02, including a clean static production build, route generation, responsive/browser review, and explicit visual approval.

**Research & Standards Page is formally closed.**

## About Page — COMPLETE

Route:

`/about`

Implementation file:

`src/pages/about.astro`

The page is institution-first and explains:

- what Portfilo is and does;
- the five locked coverage areas;
- who the publication is for;
- why Philippine context can materially change an answer;
- a short bridge to `/standards` for research methodology.

Founder treatment is intentionally restrained. The only personal attribution is:

> Founder / Louda Tuppal

No founder portrait, long biography, founder letter, personal-brand hero, or unsupported ownership claim was added.

Implementation commits:

- `3c172cf1cadf24551380fa0dc432e6283fccad8d` — initial About page
- `402eed67aa3b4090803ec8e3a7981d4dad42a678` — reduce founder attribution and remove unsupported independence wording

A compare against the pre-About head confirmed that the implementation added only `src/pages/about.astro`; frozen public surfaces and the content schema were not modified.

### Final validation

User-reported PASS on 2026-09-02:

- local production build passed;
- `/about` rendered correctly;
- desktop/mobile/browser QA passed;
- existing public surfaces remained acceptable;
- final About appearance explicitly approved.

**About Page is formally closed.**

## Subscribe Surface & beehiiv Integration — IMPLEMENTED / CONNECTION PENDING

### Current beehiiv decision

Current official beehiiv information verified on 2026-09-02:

- the Launch plan is free at `$0/month`;
- Launch supports up to 2,500 subscribers;
- unlimited email sends are included;
- subscribe forms are included;
- external websites should use beehiiv's embedded subscribe forms;
- the current embed is generated by beehiiv as a publication/form-specific script;
- inline embeds render where the script is placed;
- external embedded forms do not use beehiiv Website Builder signup flows;
- removing beehiiv branding requires a higher paid tier, so v0 accepts beehiiv branding rather than paying to remove it.

### Route

`/subscribe`

Implementation file:

`src/pages/subscribe.astro`

The page:

- uses the locked Portfilo visual system;
- explains Portfilo Brief without promising a publishing frequency;
- exposes the five coverage areas;
- includes a dedicated inline signup panel;
- loads the real beehiiv external form only when `PUBLIC_BEEHIIV_EMBED_SRC` is configured;
- shows an honest non-signup fallback when the beehiiv connection is absent;
- uses no custom newsletter backend or API;
- adds no frontend dependency.

Configuration example:

`.env.example`

The real local `.env` remains ignored by Git. The beehiiv embed URL is a public form asset, not a secret credential, but configuration is kept outside the page so a form-specific identifier is not fabricated during implementation.

### Implementation commits

- `486daf94de82cceed878fead289ffed48bf504a4` — Subscribe surface with beehiiv external-script integration hook
- `4c854cbcbfd89de745a4a21b9627771350ad61c1` — beehiiv environment configuration example

A compare against the pre-Subscribe head `7a83c8ca2acdaede49c01b285a5f213c08010add` confirmed that the current implementation adds only:

- `src/pages/subscribe.astro`;
- `.env.example`.

Frozen existing public pages and the content schema were not modified during this implementation candidate.

### Remaining validation/blocker

Not yet complete:

- Portfilo's beehiiv publication/account-side form creation;
- real `PUBLIC_BEEHIIV_EMBED_SRC` configuration;
- test subscription into the beehiiv audience;
- live success/error-state review;
- final local production build with the configured embed;
- responsive/browser QA with the real form.

**Do not close this phase until the real beehiiv signup succeeds and the user reports final local QA pass.**

## Zero-budget infrastructure posture

Locked direction:

- Cloudflare Pages for static hosting/deployment;
- Cloudflare Web Analytics;
- beehiiv for newsletter sending, subscriber management, deliverability, unsubscribe handling, and embedded signup;
- GitHub source control;
- local Markdown + Astro Content Collections;
- no database, authentication system, custom newsletter backend, or custom analytics backend.

Use free tiers while sufficient for v0 validation.

## Scope still not started

- Subscribe beehiiv account-side connection + final QA — current phase remainder
- global navigation / public-surface integration pass — after Subscribe
- analytics
- deployment
- editorial launch research
- first real article
- polished editorial figure/data primitives

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Foundation | PASS |
| Content Architecture | PASS |
| Editorial Design | PASS |
| Wordmark Exploration & Lock | PASS |
| Public Copy Style | PASS |
| Editorial Taxonomy Alignment | PASS |
| Homepage Visual Design | PASS |
| Series Page Foundation & Visual Design | PASS — final local QA + visual approval user-reported 2026-09-02 |
| Research & Standards Page | PASS — final local production build + responsive/browser QA + visual approval user-reported 2026-09-02 |
| About Page | PASS — final local production build + responsive/browser QA + visual approval user-reported 2026-09-02 |
| Subscribe Surface & beehiiv Integration | IMPLEMENTED — beehiiv connection + functional signup + final QA pending |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
