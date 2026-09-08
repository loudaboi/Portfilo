# Portfilo Document Status

_Last updated: 2026-09-08_

This file prevents historical implementation notes, stale status lines, and research records from being mistaken for current authority.

## Authority order

When documents disagree, use this order:

1. `AGENTS.md` for contributor/workflow/approval rules;
2. `docs/PROJECT_STATE.md` for the current phase, validated state, and exact next task;
3. this status map for whether a document is current, partial, historical, or superseded;
4. `docs/V0_SCOPE.md` for current v0 product boundaries;
5. the current canonical standard for the subject;
6. current source code for actual runtime behavior;
7. historical research/decision records for provenance only.

Do not create a second execution-plan document. `docs/PROJECT_STATE.md` owns the active sequence.

## Current canonical documents

### Contributor / decision control

- `AGENTS.md` — repository authority, scope, approvals, implementation discipline.
- `skills/portfilo-anti-slop/SKILL.md` — mandatory evidence-first decision gate for nontrivial discretionary product/copy/design decisions.

### Product and state

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. As of 2026-09-08, the News + Stories architecture and visual system are founder-approved, the implementation is committed, and fresh technical/rendered QA is the active next task.
- `docs/V0_SCOPE.md` — current v0 product/technical boundary document. Older clauses describing News/Stories architecture as a future gate, legacy taxonomy values, or `/latest` as an active target are subordinate to the newer approved and implemented contract in `PROJECT_STATE`.
- `BACKLOG.md` — valid ideas outside current scope.

### Editorial, research, writing

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/EDITORIAL_PACKAGING_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `docs/PORTFILO_TEST_STANDARD.md`
- `docs/CONTENT_PLANNING.md` — canonical for planning gates, with older geography/taxonomy clauses superseded by later product decisions in `PROJECT_STATE`.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current general visual principles. Homepage-specific wording that still describes the pre-News navigation or earlier rail terminology is subordinate to the frozen runtime and `PROJECT_STATE`.
- `docs/IMAGE_SYSTEM.md` — canonical editorial image rules; canonical v0 primary story-image ratio remains 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — historical/provenance record for the homepage redesign process. Current frozen runtime and `PROJECT_STATE` own active homepage authority where they differ.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only.
- `research/image-system/homepage-featured-cover-decision.md` — historical provenance for the homepage Feature artwork; current asset remains `public/images/homepage-feature-16x9.png`.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — supporting evidence for the approved current-News + deeper-Stories model; `briefing` remains rejected as public acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only; superseded for exact public hero wording.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED PRIMARY ACQUISITION WORDING AND OPERATING PROMISES**.

Current CTA authority:

- header CTA: `Subscribe free`;
- hero CTA: `Send me the news`;
- contextual side-rail CTA: `Subscribe`.

Founder-approved contextual headline:

`There's more to it than the headline.`

Exact final contextual support wording remains open. Current runtime reuses the already-approved primary newsletter support copy rather than inventing another public claim.

### Brand

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

Current shared header/footer wordmark presentation remains 5.8rem.

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists operationally in older surfaces. The later public naming migration to `Newsletter` remains a coordinated future task rather than a piecemeal change during News/Stories implementation.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned core site is stable.

## Current News + Stories authority

The founder-approved content architecture and visual-system contract are recorded in `docs/PROJECT_STATE.md` and are now implemented in runtime.

Current implemented model:

- one Astro editorial collection;
- required `section: news | stories`;
- separate `contentType` and `topic` dimensions;
- public topic values `business / technology / startup / ai`;
- News routes `/news` and `/news/[slug]`;
- Stories routes `/stories` and `/stories/[slug]`;
- existing published Story URLs preserved;
- homepage Feature + blue rail source Stories only;
- homepage News + Latest-news ticker source News only;
- header is now `News | Stories | Subscribe free`;
- `/latest`, pagination, filters and search remain deferred;
- optional shared editorial-image metadata supports source, alt, optional credit and generated-image disclosure;
- old Stories archive/article visuals are superseded and have zero forward design authority.

Implementation commit:

`f1e4b634d3675f99cec8e121b442509e28874c08`

Fresh technical and rendered QA against that commit is pending.

## Current runtime authority

### Homepage

The homepage visual composition remains frozen. News/Stories implementation changed data sourcing and links only.

Current homepage behavior:

- header `Portfilo | News | Stories | Subscribe free`;
- full Portfilo-blue newsletter hero;
- static/manual `Latest news` ticker sourced from News only;
- current Feature sourced from Stories only;
- continuous blue Stories/newsletter rail sourced from Stories only;
- homepage News sourced from News only;
- clearly synthetic shared News fixtures appear in development when real published News inventory is absent;
- production never fabricates News;
- there is currently no published News inventory, so production should retain the factual News empty state and no News-derived ticker items;
- footer remains `Stories | Standards | Privacy`;
- matched 5.8rem wordmarks remain.

### News

`/news` and `/news/[slug]` now implement the compact, chronological, sans-led News mode.

The draft `portfilo-draft-filtering-test` is intentionally classified as a synthetic News fixture for development route QA and remains excluded from production.

### Stories

`/stories` and `/stories/[slug]` now implement the approved deeper-editorial system. The old giant-number archive, sticky metadata rail, duplicated article metadata, decorative numbered body headings, and old report-like scaffolding are superseded.

The currently published Story `What actually makes starting a business hard?` remains the only published Story and retains its existing route. Its existing homepage Feature image is represented through shared image metadata with generated-image disclosure.

## Rejected / historical work with zero current decision authority

### Rejected homepage copy

- `research/homepage-copy-v1.md` — **REJECTED / HISTORICAL / ZERO AUTHORITY**.
- `research/homepage-copy-v2.md` — **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**.

### Rejected visual/implementation patterns

Do not reintroduce:

- Source Serif 4 homepage hero or Feature treatment;
- prior Homepage v3 composition;
- independently centered/narrowed homepage Feature shell;
- oversized/arbitrary-tall Feature rendering;
- blue-rail content bottom-pushed with `margin-top:auto`;
- square Portfilo right-rail placeholder;
- muted/light-blue hero;
- red normal-state ticker;
- entire ticker black;
- topic labels in the header;
- old `Latest` header navigation now that `/news` exists;
- old giant-number Stories archive treatment;
- old sticky article metadata rail;
- old repeated/decorative mono scaffolding;
- fabricated production News;
- implementation-time global design changes without approval.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated.

## Motion authority

Ticker movement remains deferred until the current News + Stories implementation passes fresh QA and receives founder approval.

## Validation authority

The founder-reported static-homepage validation applies to the pre-News/Stories implementation tree.

Fresh `npm run check`, `npm run build`, development rendered QA and production-equivalent preview have not yet been recorded as passing against implementation commit `f1e4b634d3675f99cec8e121b442509e28874c08`.

Do not describe the News + Stories implementation as validated until those checks actually run and the required views are inspected.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across a new execution-plan file.
