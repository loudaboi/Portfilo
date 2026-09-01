# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Series Page Foundation & Visual Design**

The minimal Series content model and first generic Series page candidate are implemented on `build/portfilo-v0`.

The remaining work in this phase is local production-build validation, responsive/browser QA, and explicit visual approval. Do not mark the Series phase complete until those checks pass.

Completed phases:

- Foundation
- Content Architecture
- Editorial Design
- Wordmark Exploration & Lock
- Public Copy Style
- Editorial Taxonomy Alignment
- Homepage Visual Design

The story visual surface and homepage visual direction remain frozen for v0 unless a concrete implementation problem is discovered.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Validate and visually approve the **Series Page Foundation & Visual Design** candidate.

The Series system now satisfies the v0 structural requirement without adding a CMS, database, client-side state, secondary taxonomy, or new frontend dependency.

## Series foundation — implemented

### Series-level content model

A second build-time Astro Content Collection named `series` now exists.

Each series entry uses its filename as the stable series ID/slug and stores only:

- `title`
- `description`
- `status: active | completed`
- `fixture` boolean used only to identify synthetic development fixtures clearly

Stories continue to use the existing:

- `series`
- `seriesOrder`

relationship. No duplicated series title/description/status is stored on individual stories.

Implementation commit:

- `799f0d8ca03a72998488b7521e03c8f98559c71f` — add Series Content Collection

### Synthetic series fixture

One explicitly synthetic series entry was added:

`src/content/series/content-architecture-fixtures.md`

Public route candidate:

`/series/content-architecture-fixtures`

The fixture identifies itself as development-only and states that it contains no reported claims or real-world findings.

Fixture commit:

- `68109c0bef0d3a83194c9220a0c58a964efcb927` — add synthetic Series fixture

### Ordered story fixtures

The existing published content-architecture fixture remains Part 1 of `content-architecture-fixtures`.

Two more published synthetic fixtures were added solely to prove ordering and responsive list rendering:

- `portfilo-series-ordering-test-two` — Part 2
- `portfilo-series-ordering-test-three` — Part 3

They contain no reported journalism, statistics, interviews, or real-world findings.

Commits:

- `4e9c872fdb91c45cff1eebfa24e1d2fb6318ba44`
- `ea25f432125e17123553c356f3d37163a2431fda`

## Series page candidate — implemented

Generic static route:

`src/pages/series/[slug].astro`

Implementation commit:

- `241be4fdcd783117ecd2b75af808fc5b23e29151`

Behavior:

- builds one static route per Series collection entry;
- selects only `published` stories for the public series list;
- matches stories by the existing `series` identifier;
- sorts stories by `seriesOrder` with a stable title fallback;
- renders series title, description, active/completed status, story count, and stable series ID;
- clearly labels development fixtures as not journalism;
- renders an ordered editorial story list;
- shows each story's content type, topic, publication date, title, and description;
- provides direct `Read story` links to individual published stories;
- includes an empty-series state for valid series entries with no published stories;
- uses static Astro output with no client-side JavaScript.

### Series visual direction

The page is intentionally closer to an editorial dossier/index than another homepage.

It reuses the frozen system:

- Instrument Sans
- Source Serif 4
- IBM Plex Mono
- warm paper `#f4f0e8`
- near-black `#171614`
- signal blue `#0050a4`
- red only in the wordmark/correction semantics
- twelve-column editorial grid
- strong typography
- restrained rules
- deliberate asymmetry
- no generic card grid
- first-class mobile layout
- visible keyboard focus
- skip link
- reduced-motion handling

Large blue order numbers are structural series markers, not decorative red/blue alternation.

## Homepage copy cleanup

The Portfilo Brief homepage copy was tightened to follow `docs/COPY_STYLE.md` more literally.

Previous generic inbox language was replaced with:

> **Portfilo Brief, by email.**
>
> Get new reporting and clear explanations on business, technology, startups, AI, and building in the Philippines.

This states what arrives and what it covers without promising an uncommitted frequency, exclusivity, or other newsletter benefit.

Commit:

- `80667eab6304c2fe5ca8a8997c5705cde09d69fe`

Temporary development-fixture language elsewhere on the homepage remains intentionally explicit until real launch stories replace the fixtures.

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

For factual journalism, the Copy Style does not replace the stricter Editorial, Research, and Publishing standards.

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

Final user-reported validation on 2026-09-02 included:

- `npm run build` passed;
- homepage rendered correctly;
- published fixture remained available;
- draft filtering remained correct;
- desktop and narrow-mobile review passed;
- no blocking overflow/collision issue was reported;
- final homepage appearance was approved.

Homepage Visual Design is formally closed.

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

- Research & Standards page
- About page
- Subscribe surface / beehiiv integration
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
| Homepage Portfilo Brief copy cleanup | IMPLEMENTED — browser recheck required |
| Series Content Collection | IMPLEMENTED — local build required |
| Synthetic Series fixture | IMPLEMENTED |
| Ordered published Series story fixtures | IMPLEMENTED |
| Generic `/series/[slug]` route | IMPLEMENTED — local build required |
| Series desktop responsive review | REQUIRED |
| Series 390px / 360px mobile review | REQUIRED |
| Series keyboard/focus review | REQUIRED |
| Series font loading review | REQUIRED |
| Series visual approval | REQUIRED |
| Series Page Foundation & Visual Design complete | NO — awaiting local QA + approval |

## Exact next task

Perform **Series Page Final QA & Approval** on the current `build/portfilo-v0` branch.

Required local validation:

1. run `git pull`;
2. run `npm run build` and require a clean production build;
3. confirm `/` still renders and the revised Portfilo Brief copy wraps cleanly;
4. open `/series/content-architecture-fixtures`;
5. confirm the Series page renders the synthetic series title, description, `active` status, and 3 published stories;
6. confirm story order is exactly Part 1 → Part 2 → Part 3;
7. open all three story links and confirm they route correctly;
8. confirm the draft fixture still has no public production route;
9. inspect the Series page at wide desktop, intermediate/tablet, 390px, and 360px;
10. check the large blue part numbers, metadata, headlines, descriptions, and `Read story` links for collision or awkward wrapping;
11. check for horizontal overflow or clipped content;
12. keyboard through the page and verify the skip link, wordmark, story-title links, `Read story` links, and home footer link have usable focus states;
13. verify Instrument Sans, Source Serif 4, and IBM Plex Mono load rather than silently falling back;
14. either explicitly approve the Series page or report a concrete defect.

Only after these checks pass should **Series Page Foundation & Visual Design** be marked complete.

If Series passes, the next planned public-surface phase is:

**Research & Standards Page**

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
