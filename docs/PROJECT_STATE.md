# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Homepage Visual Design**

The homepage design direction is approved. The editorial taxonomy is now aligned with that direction. One final local production-build and browser QA pass is required before Homepage Visual Design may be formally closed.

Foundation, Content Architecture, Editorial Design, Wordmark Exploration & Lock, Public Copy Style, and Editorial Taxonomy Alignment are complete.

The story visual surface remains frozen for v0 unless a concrete implementation problem is discovered.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Perform **Homepage Final QA & Closure** after the final taxonomy and color cleanup.

The remaining work is validation, not another redesign.

## Portfilo editorial direction

Portfilo helps ambitious Filipinos understand business, technology, startups, building, and the ways these forces shape life in the Philippines through useful, specific, evidence-aware journalism and analysis.

Current positioning line:

> **Practical intelligence for ambitious Filipinos**

This remains the current positioning line and masthead strapline, but is not permanently frozen as the final long-term public tagline.

### Locked primary topics

The controlled v0 story taxonomy is:

- **Business** — companies, industries, markets, business models, economics, and strategy;
- **Technology** — software, AI, fintech, infrastructure, platforms, and emerging technology where Philippine relevance is concrete;
- **Startups** — new companies, startup ecosystems, funding, growth, failure, acquisitions, and early-stage company development;
- **Building** — product, distribution, sales, pricing, hiring, operations, and the practical work of creating companies and products;
- **Life** — how business, technology, startups, and ambition affect how Filipinos live and make consequential choices.

The Content Collection schema now enforces:

`business / technology / startups / building / life`

### Important classification rules

- A story has **one primary topic** in v0.
- **Founders** are a recurring subject/lens, not a top-level topic. Founder profiles use the existing `profile` content type and the most appropriate primary topic.
- **Capital**, venture, funding, investing, acquisitions, and ownership are covered primarily under Business or Startups rather than as a separate top-level topic.
- AI, fintech, e-commerce, SaaS, and similar beats do not require a tagging system in v0. Add secondary tags only when real publishing volume proves the need.
- Career, salary, skills, and work questions are not banned, but they are supporting subjects when they connect to the stronger Portfilo mission rather than the publication's identity.
- **News is a format, not Portfilo's identity.** Portfilo covers important developments when it can add explanation, evidence, context, or decision value beyond the event itself.
- The homepage therefore keeps a broad `Latest` treatment rather than becoming a commodity breaking-news feed.
- **Portfilo Brief** remains the planned email product and may become the faster channel for useful updates.

## Homepage final direction

Approved and implemented:

- locked `Port / fi / lo` black/blue/red wordmark in the masthead;
- masthead page label is `Home`;
- `Practical intelligence for ambitious Filipinos` is the primary homepage editorial statement;
- `for ambitious Filipinos.` is rendered as a separate blue line to prevent the earlier collapsed word-boundary issue;
- no reader-facing `v0` project language;
- same twelve-column editorial grid logic, gutters, rules, and mobile collapse behavior as the frozen story page;
- one dominant editorial feature rather than a repeated card grid;
- dark typography-led evidence panel paired with the dominant feature;
- mobile evidence-panel number is reduced and explicitly spaced to avoid collision with its label;
- Latest + Selected uses one larger secondary story and two compact text-led entries;
- asymmetric institutional section with a compact editorial-topic rail;
- visible homepage taxonomy is now `Business / Technology / Startups / Building / Life`;
- preview stories test business, technology, startup, founder, and building subject matter rather than generic salary/career framing;
- Portfilo Brief CTA remains a preview only until beehiiv integration;
- all preview headlines remain clearly identified as unpublished design fixtures;
- one footer link continues to expose the existing published development story fixture for route testing;
- no React, Vue, Svelte, Tailwind, UI kit, animation library, CMS, database, authentication, or new package dependency was added;
- implementation remains Astro + custom CSS with no client-side JavaScript requirement.

### Homepage implementation history

- initial homepage candidate: `8c2dbb31e4f35050e2b43d313d9a22a247abddea`
- first copy/responsive refinement: `dcef23d6abfcf7b821dfb17ed055fe6eee70dc0c`
- business/technology/founder positioning pass: `57f3fb45a756dab2bb38e156f2a2f82f7cd227a8`
- final taxonomy + red-accent cleanup: `6c43ba19f8c58f82bd780180884fb0b1c3650305`

## Editorial taxonomy alignment

Completed in this phase because the homepage direction was explicitly approved before final closure.

Changes:

- `src/content.config.ts` controlled topics changed from `work / money / skills / building / life` to `business / technology / startups / building / life`;
- published content-architecture fixture migrated to `topic: business`;
- draft-filtering fixture migrated to `topic: startups`;
- `docs/EDITORIAL_STANDARD.md` mission and examples aligned to the focused business/technology/startup direction;
- homepage topic labels aligned to the same taxonomy.

Relevant commits:

- schema alignment: `6d524f7070178de759fc81d63626cba5e8a95901`
- published fixture migration: `2e27f93bf86b05ba5343dc02e0a990a86e2f2bcb`
- draft fixture migration: `a051e5ea3089125ed90884fe2857359527243189`
- editorial-standard alignment: `99cb25fe93d4e306084cff9a32cf7c8fed7d9202`

No secondary tag/beat infrastructure was added because there is no current publishing-volume requirement for it.

## Portfilo public copy standard

`docs/COPY_STYLE.md` is the canonical standard for public-facing site copy, and `AGENTS.md` requires contributors to follow it.

Core rules:

- clear before clever;
- smart without sounding academic;
- confident without hype;
- useful before self-descriptive;
- Filipino by concrete context, not costume;
- familiar interface language over invented brand terminology;
- avoid generic AI/product-copy patterns and internal project language;
- never strengthen uncertainty or factual claims for stronger copy.

Working principle:

> **Make the useful thing clear. Keep the personality in the precision.**

## Brand-color rule

The color system is deliberately asymmetric.

### Publication base

- warm paper `#f4f0e8`;
- near-black ink `#171614`.

### Blue

- signal blue `#0050a4` is the primary functional/editorial accent;
- evidence blue `#8fc7ff` is used on dark evidence fields;
- blue carries evidence, structure, links, section markers, methodology, navigation/action cues, and informational emphasis.

### Red

- correction/brand red `#b42318`;
- correction soft `#f6e7e3`;
- red remains in the `lo` portion of the Portfilo wordmark;
- on story/journalism surfaces, red is reserved for correction semantics aside from the wordmark;
- the experimental extra red institutional accents on the homepage were removed after visual review because they felt forced;
- do not add red merely to create numerical color balance;
- future non-story use requires a natural, repeatable role rather than decorative placement.

Current practical rule:

> **Paper/black carry the publication. Blue is the active editorial accent. Red is the wordmark signature and correction signal until a better institutional role is earned.**

## Locked v0 wordmark decision

Approved and locked for v0:

- Portfilo uses a wordmark-first identity;
- no standalone logo symbol is required for v0;
- forward-leaning editorial sans with a slight streetwear influence;
- live masthead wordmark:
  - `Port` near-black `#171614`;
  - `fi` signal blue `#0050a4`;
  - `lo` correction red `#b42318`;
- Instrument Sans remains the wordmark and editorial sans base;
- no standalone `P`, `PF`, avatar mark, or favicon is locked for v0.

Do not reopen symbol exploration during v0 unless a concrete production problem appears.

## Completed foundation

### Content architecture

- Astro 7.2.10 with TypeScript;
- static output;
- one build-time `stories` Content Collection using local Markdown;
- controlled content types and topics;
- authorship, draft/published state, featured state, publish/update dates, optional series metadata, methodology metadata, and structured correction metadata;
- published stories require `publishedAt`;
- `seriesOrder` requires `series`;
- `updatedAt` cannot precede `publishedAt`;
- generic static story route at `/stories/[slug]`;
- production route generation filters to `status: published`;
- synthetic published and draft fixtures remain in place.

### Editorial design

Story surface remains frozen for v0:

- Instrument Sans for headline/interface/editorial headings;
- Source Serif 4 for dek and long-form reading;
- IBM Plex Mono for metadata and technical/editorial labels;
- warm paper, near-black ink, muted text, blue evidence/action accents, red correction semantics;
- twelve-column wide-screen grid;
- body measure around `42rem`;
- desktop metadata rail and single-path mobile reading layout;
- methodology as a high-contrast evidence module;
- corrections as a separate red treatment;
- skip link and visible keyboard focus treatment.

## Editorial media / graphics readiness

Article visuals remain in scope for v0.

Before the first real visual-heavy article, add only the primitives actually needed, likely:

- `Figure` with image, caption, credit/source, and meaningful alt text;
- optional wider media/data treatment;
- chart / diagram styling;
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

- Series page implementation
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
| Content Architecture | PASS |
| Editorial Design | PASS |
| Wordmark Exploration & Lock | PASS |
| Public Copy Style | PASS |
| Editorial Taxonomy Alignment | PASS — implementation complete, local build required |
| Homepage information hierarchy/composition | PASS |
| Homepage visual direction | APPROVED |
| Homepage taxonomy | PASS — Business / Technology / Startups / Building / Life |
| Extra homepage red accents | REMOVED |
| New frontend/package dependencies | NONE |
| Production build after taxonomy + final homepage cleanup | REQUIRED — local validation |
| Published fixture route | REQUIRED — local build/browser QA |
| Draft fixture exclusion | REQUIRED — local production-build QA |
| Desktop responsive review | REQUIRED — final local browser QA |
| 390px / 360px mobile review | REQUIRED — final local browser QA |
| Horizontal overflow | REQUIRED — final local browser QA |
| Keyboard focus / skip link | REQUIRED — final local browser QA |
| Exact font loading | REQUIRED — final local browser/network QA |
| Homepage Visual Design phase complete | NO — awaiting final QA |

## Exact next task

Perform **Homepage Final QA & Closure** on the current `build/portfilo-v0` branch.

Required local validation:

1. `git pull`;
2. `npm run build` and require a clean build;
3. confirm `/` renders;
4. confirm `/stories/portfilo-content-architecture-test` still builds/renders and shows the migrated `business` topic;
5. confirm `/stories/portfilo-draft-filtering-test` is not generated publicly;
6. inspect wide desktop, intermediate/tablet, 390px, and 360px;
7. confirm `Business / Technology / Startups / Building / Life` wraps cleanly with no collision;
8. confirm the mobile evidence panel keeps comfortable separation around `01`;
9. confirm removing the extra red accents restored the intended black/paper/blue hierarchy while the wordmark retains its red `lo`;
10. check clipping, overlap, awkward headline wrapping, and horizontal overflow;
11. keyboard through the page and verify usable focus states;
12. verify Instrument Sans, Source Serif 4, and IBM Plex Mono actually load;
13. report the build result and any concrete visual defect.

If those checks pass, mark **Homepage Visual Design** complete.

The exact next product-surface task after closure is:

**Series Page Visual Design & Implementation**

Do not begin Research & Standards, About, Subscribe integration, analytics, deployment, or editorial launch research before the homepage phase is formally closed.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
