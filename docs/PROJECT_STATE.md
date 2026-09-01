# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Research & Standards Page**

Series Page Foundation & Visual Design is complete after the user-reported final local production-build, responsive/browser QA, link checks, and explicit visual approval.

Completed phases:

- Foundation
- Content Architecture
- Editorial Design
- Wordmark Exploration & Lock
- Public Copy Style
- Editorial Taxonomy Alignment
- Homepage Visual Design
- Series Page Foundation & Visual Design

The story, homepage, and Series visual directions are frozen for v0 unless a concrete implementation problem is discovered.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Build the smallest credible public **Research & Standards** surface required by `docs/V0_SCOPE.md`.

This page should explain Portfilo's editorial safeguards clearly enough for a reader to understand how the publication handles sourcing, verification, AI use, corrections, and commercial/editorial separation.

It is a reader-facing institutional page, not a dump of internal workflow documentation.

## Exact next task

Perform **Research & Standards Page Foundation & Implementation** in this order:

1. Re-read `AGENTS.md`, `docs/V0_SCOPE.md`, `docs/DESIGN_DIRECTION.md`, `docs/COPY_STYLE.md`, `docs/EDITORIAL_STANDARD.md`, `docs/RESEARCH_STANDARD.md`, and `docs/PUBLISHING_STANDARD.md`.
2. Inspect the current homepage, story page, and Series page so the new surface uses the established Portfilo system rather than creating a parallel design language.
3. Decide the minimum public information architecture needed to cover:
   - sourcing;
   - verification;
   - AI usage;
   - corrections;
   - commercial/editorial separation.
4. Translate the canonical internal standards into concise public language. Do not expose implementation/process jargon merely because it exists in the internal documents.
5. Follow `docs/COPY_STYLE.md`: clear before clever, concrete language, familiar labels, no generic trust-marketing copy, no AI-shaped slogans.
6. Preserve the frozen visual system: Instrument Sans, Source Serif 4, IBM Plex Mono, warm paper, near-black ink, blue editorial/evidence accents, red only for the wordmark/correction semantics, twelve-column grid, restrained rules, and first-class mobile layout.
7. Prefer an institutional editorial composition over a generic FAQ/card grid.
8. Use semantic HTML, visible keyboard focus, a skip link, and reduced-motion-safe behavior.
9. Keep static Astro output and avoid client-side JavaScript unless a real interaction requires it.
10. Run production build plus desktop/mobile/browser QA before marking the phase complete.

Do not begin About, Subscribe integration, analytics, deployment, or editorial launch research until this phase is complete.

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

The Portfilo Brief homepage copy was also tightened to:

> **Portfilo Brief, by email.**
>
> Get new reporting and clear explanations on business, technology, startups, AI, and building in the Philippines.

Homepage Visual Design remains closed.

## Series Page Foundation & Visual Design — COMPLETE

### Content model

A build-time Astro `series` Content Collection stores only:

- title;
- description;
- `active | completed` status;
- fixture marker for synthetic development entries.

Stories retain the existing `series` + `seriesOrder` relationship.

No CMS, database, client-side state, secondary taxonomy, or new frontend dependency was added.

### Generic route

`src/pages/series/[slug].astro`

The page:

- generates static routes from Series entries;
- includes only published stories;
- sorts by `seriesOrder`;
- exposes title, description, status, story count, ordered story sequence, story type/topic/date, and direct story links;
- supports a valid empty-series state;
- uses no client-side JavaScript.

### Synthetic validation fixture

Series route:

`/series/content-architecture-fixtures`

The fixture is explicitly development-only and contains no real reporting or factual findings.

It contains three published synthetic stories ordered Part 1 → Part 2 → Part 3.

Implementation commits:

- `799f0d8ca03a72998488b7521e03c8f98559c71f` — Series Content Collection
- `68109c0bef0d3a83194c9220a0c58a964efcb927` — synthetic Series fixture
- `4e9c872fdb91c45cff1eebfa24e1d2fb6318ba44` — ordering fixture Part 2
- `ea25f432125e17123553c356f3d37163a2431fda` — ordering fixture Part 3
- `241be4fdcd783117ecd2b75af808fc5b23e29151` — generic Series page

### Final validation

User-reported PASS on 2026-09-02:

- production build passed;
- revised homepage remained acceptable;
- `/series/content-architecture-fixtures` rendered correctly;
- Active status and three published stories rendered;
- Part 1 → Part 2 → Part 3 ordering was correct;
- story links passed;
- responsive/browser review passed;
- final Series appearance explicitly approved.

**Series Page Foundation & Visual Design is formally closed.**

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

- Research & Standards page — current phase
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
| Series Page Foundation & Visual Design | PASS — final local QA + visual approval user-reported 2026-09-02 |
| Research & Standards Page | NOT STARTED — current phase |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
