# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Series Page Foundation & Visual Design**

Homepage Visual Design is complete after the user-reported final local production-build and browser QA pass.

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

Build the smallest credible **Series** system and public series page required by `docs/V0_SCOPE.md`.

This is not only a styling task. The current story schema has story-level `series` and `seriesOrder`, but v0 scope also requires series-level metadata and an active/completed state. Resolve that minimal content-model gap first, then implement the page using the frozen Portfilo visual language.

Do not build a CMS, database, dynamic application state, complex taxonomy, or speculative series-management framework.

## Exact next task

Perform **Series Foundation Review & Implementation** in this order:

1. Re-read `AGENTS.md`, `docs/V0_SCOPE.md`, `docs/DESIGN_DIRECTION.md`, `docs/EDITORIAL_STANDARD.md`, `docs/PUBLISHING_STANDARD.md`, and `docs/COPY_STYLE.md`.
2. Inspect the current `src/` tree, `src/content.config.ts`, story fixtures, homepage, and story route.
3. Confirm the smallest series-level data model needed to satisfy v0 scope:
   - stable series slug/id;
   - public title;
   - concise description/dek;
   - active/completed state;
   - optional ordering/display metadata only if a current requirement proves necessary.
4. Prefer a small build-time Content Collection or equally simple repository-native model if series-level metadata cannot live cleanly on stories without duplication.
5. Keep story membership through the existing `series` + `seriesOrder` relationship unless a concrete problem requires changing it.
6. Add one clearly synthetic series fixture with enough ordered published stories to prove rendering. Do not fabricate real reporting.
7. Implement a generic static series route and page.
8. Reuse the established visual system: Instrument Sans, Source Serif 4, IBM Plex Mono, warm paper, near-black ink, blue evidence/action accents, twelve-column editorial grid, restrained rules, and no generic card grid.
9. Series page should communicate at minimum:
   - series title;
   - description;
   - active/completed status;
   - ordered story list;
   - each story's type/topic and useful metadata;
   - clear path into individual stories.
10. Follow `docs/COPY_STYLE.md`; public labels should be familiar and literal rather than invented brand terminology.
11. Preserve static output and avoid client-side JavaScript unless a real interaction requires it.
12. Run production build and responsive/browser QA before marking the phase complete.

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

### Classification rules

- A story has one primary topic in v0.
- AI is used when AI itself is the main thing the reader needs to understand. A story involving AI may still be Business, Startups, or Building when the larger question belongs there.
- Founders are a recurring subject/lens, not a top-level topic. Founder profiles use the existing `profile` content type and the most appropriate primary topic.
- Capital, venture, funding, investing, acquisitions, and ownership are covered primarily under Business or Startups rather than as a separate top-level topic.
- Fintech, e-commerce, SaaS, and similar beats do not require a tagging system in v0. Add secondary tags only when real publishing volume proves the need.
- Career, salary, skills, work, and broader life questions are supporting subjects when they connect to the stronger Portfilo mission rather than the publication's identity.
- News is a format, not Portfilo's identity. Cover developments when Portfilo can add explanation, evidence, context, or decision value beyond the event itself.
- `Latest` remains broader than a breaking-news feed.
- Portfilo Brief remains the planned email product and may become the faster channel for useful updates.

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

## Brand and visual system

### Wordmark

Locked for v0:

- wordmark-first identity;
- no standalone logo symbol required;
- forward-leaning Instrument Sans treatment with slight streetwear influence;
- `Port` near-black `#171614`;
- `fi` signal blue `#0050a4`;
- `lo` correction red `#b42318`.

Do not reopen symbol exploration during v0 unless a concrete production problem appears.

### Color rule

Publication base:

- warm paper `#f4f0e8`;
- near-black ink `#171614`.

Blue:

- signal blue `#0050a4` is the primary functional/editorial accent;
- evidence blue `#8fc7ff` is used on dark evidence fields;
- blue carries evidence, structure, links, section markers, methodology, navigation/action cues, and informational emphasis.

Red:

- correction/brand red `#b42318`;
- correction soft `#f6e7e3`;
- red remains in the `lo` portion of the wordmark;
- on journalism surfaces, red is reserved for correction semantics aside from the wordmark;
- experimental extra red homepage accents were removed after visual review because they felt forced;
- do not add red merely to create numerical color balance;
- future non-story use requires a natural, repeatable role rather than decorative placement.

Practical rule:

> **Paper/black carry the publication. Blue is the active editorial accent. Red is the wordmark signature and correction signal until a better institutional role is earned.**

## Homepage Visual Design — COMPLETE

Approved and implemented:

- masthead uses the locked `Port / fi / lo` wordmark;
- masthead page label is `Home`;
- `Practical intelligence for ambitious Filipinos` is the primary homepage statement;
- `for ambitious Filipinos.` is a separate blue line to preserve the word boundary under tight tracking;
- no reader-facing `v0` language;
- twelve-column editorial grid and established spacing/rule system;
- one dominant editorial feature rather than repeated generic cards;
- dark typography-led evidence panel;
- Latest + Selected with one larger story and two compact entries;
- institutional dark section with compact topic rail;
- visible homepage taxonomy is `Business / Technology / Startups / AI / Building`;
- preview stories use business, AI, startup, founder, and building subject matter rather than generic salary/career framing;
- Portfilo Brief CTA remains a preview until beehiiv integration;
- preview headlines remain explicitly unpublished synthetic design fixtures;
- footer exposes the published development story fixture for route testing;
- extra red homepage accents removed;
- no new frontend framework, UI kit, animation library, CMS, database, authentication, or package dependency;
- Astro + custom CSS with no client-side JavaScript requirement.

Implementation history:

- `8c2dbb31e4f35050e2b43d313d9a22a247abddea` — initial homepage candidate
- `dcef23d6abfcf7b821dfb17ed055fe6eee70dc0c` — first copy/responsive refinement
- `57f3fb45a756dab2bb38e156f2a2f82f7cd227a8` — focused business/technology/founder positioning pass
- `6c43ba19f8c58f82bd780180884fb0b1c3650305` — startups taxonomy + red-accent cleanup
- `eb7c38967a50072323f1e2375025f63533042b56` — final AI homepage taxonomy pass

Final validation, user-reported on 2026-09-02:

- final `git pull` completed;
- `npm run build` passed;
- homepage rendered correctly;
- published story fixture remained available;
- draft-filtering behavior remained correct;
- desktop and narrow-mobile review passed;
- no blocking overflow/collision issue reported;
- final homepage appearance approved.

**Homepage Visual Design is formally closed.**

## Completed content architecture

- Astro 7.2.10 with TypeScript;
- static output;
- one build-time `stories` Content Collection using local Markdown;
- controlled content types and topics;
- authorship, draft/published state, featured state, publish/update dates, optional series relationship/order, methodology metadata, and structured correction metadata;
- published stories require `publishedAt`;
- `seriesOrder` requires `series`;
- `updatedAt` cannot precede `publishedAt`;
- generic static story route at `/stories/[slug]`;
- production route generation filters to `status: published`;
- synthetic published and draft fixtures remain in place.

## Editorial media / graphics readiness

Article visuals remain in scope for v0.

Before the first real visual-heavy article, add only the primitives actually needed, likely:

- `Figure` with image, caption, credit/source, and meaningful alt text;
- optional wider media/data treatment;
- chart/diagram styling;
- `DataPoint` where editorially justified;
- consistent asset naming/storage conventions;
- responsive image optimization.

Do not build a complex visualization framework in advance.

AI-generated imagery must not be presented as documentary evidence or imply facts unsupported by reporting.

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

- Series page implementation — current phase
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
| Homepage Visual Design | PASS — final local QA user-reported 2026-09-02 |
| New frontend/package dependencies from homepage | NONE |
| Series Page Foundation & Visual Design | IN PROGRESS — next task |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
