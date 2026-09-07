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

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. As of 2026-09-08, the post-v3 homepage correction plan is founder-approved and runtime implementation is not yet authorized.
- `docs/V0_SCOPE.md` — current v0 product and technical boundaries. Homepage-specific presentation clauses are subordinate to the newer correction plan where they differ.
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

- `research/homepage-redesign-v1.md` — **CURRENT FOUNDER-APPROVED HOMEPAGE CORRECTION CONTRACT**. It supersedes the rejected Homepage v3 visual composition while preserving useful history in source control.
- `docs/DESIGN_DIRECTION.md` — current general visual principles; the homepage-specific target must agree with the correction contract above.
- `docs/IMAGE_SYSTEM.md` — general editorial image rules.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only; current homepage top acquisition area uses no image.
- `research/image-system/homepage-featured-cover-decision.md` — historical/current authority for the existing Feature artwork, but the next layout pass deliberately uses a development image placeholder instead of depending on that artwork.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — useful internal research; `briefing` is rejected as public acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only; superseded for exact public hero wording.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED PRIMARY ACQUISITION WORDING AND OPERATING PROMISES**.

Current CTA authority for the approved correction target:

- header CTA: `Subscribe free`;
- hero CTA: `Send me the news`.

Founder-approved contextual card headline:

`There's more to it than the headline.`

A support description is required beneath it, but exact one-sentence wording remains open and must not be invented during implementation.

### Brand

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists operationally in places. The later public naming migration to `Newsletter` must be coordinated, not piecemeal.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned website is stable.

## Rejected / historical records with zero current decision authority

### Rejected homepage copy

- `research/homepage-copy-v1.md` — **REJECTED / HISTORICAL / ZERO AUTHORITY**.
- `research/homepage-copy-v2.md` — **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**.

### Rejected recent homepage implementation choices

The following recent runtime/design choices are explicitly superseded and must not be treated as precedent:

- Source Serif 4 hero headline;
- current Homepage v3 hero composition;
- hero CTA `Subscribe free` as the top in-page signup action;
- independently centered/narrowed Feature shell that changes the global left edge;
- oversized Feature presentation;
- using the current Feature image as a dependency for the next layout pass;
- muted/light-blue full hero surface;
- red ticker treatment;
- entire ticker black;
- topic labels in the homepage header;
- removing `Latest | Stories` from the header based on an exploratory question;
- implementation-time global gutter/max-width changes without explicit approval.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated.

## Current runtime vs approved correction target

Current runtime still reflects the rejected Homepage v3 implementation. It has not yet been replaced by the newly approved correction plan.

Approved correction target now requires:

- one shared content shell for header, hero, Feature area, News, and footer inner content;
- working large-desktop shell roughly 1280–1360 px;
- only the ticker full-bleed;
- header `Portfilo | Latest | Stories | Subscribe free`;
- compact `[content] [signup]` hero using Instrument Sans;
- hero CTA `Send me the news`;
- Feature development image placeholder instead of the current editorial image for layout QA;
- Feature left column around 64%;
- stacked right rail around 32%: contextual blue signup block + square Portfilo brand placeholder;
- required contextual support-description slot beneath `There's more to it than the headline.`;
- News and dark footer otherwise structurally unchanged;
- no ticker motion yet.

## Information architecture authority

Current approved header target is:

`Latest | Stories | Subscribe free`

The eventual relationship among News, Features, Stories, and Latest remains a later architecture decision. Do not infer route/schema migration from the current header wording.

Current content schema still uses:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

Do not confuse target taxonomy with completed migration.

## Image authority

### Feature image

Current assets remain:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

They are not deleted or invalidated. The next homepage layout pass intentionally uses a development placeholder so composition can be approved without artwork influencing geometry.

### Right-rail square visual

The approved layout includes a square brand/editorial placeholder beneath the contextual signup block. It may center the approved ink/black Portfilo wordmark. Final artwork is not authorized in the layout pass.

### Historical architectural hero

The prior selected architectural image remains provenance only. The current top acquisition area uses no hero image.

## Motion authority

Ticker movement remains deliberately deferred until the corrected static desktop/mobile composition is implemented and founder-approved.

## Validation authority

The newly approved correction plan is docs-only. It creates no new runtime validation result.

Do not claim the corrected homepage is implemented or validated until runtime implementation is explicitly authorized and fresh `npm run check` and `npm run build` actually succeed.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across new planning documents.
