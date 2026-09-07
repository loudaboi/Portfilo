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

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. As of 2026-09-08, Homepage v3 design is founder-approved and runtime implementation still requires explicit authorization.
- `docs/V0_SCOPE.md` — current v0 product and technical boundaries. Homepage-specific presentation clauses are subordinate to the newer Homepage v3 contract where they differ.
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

- `research/homepage-redesign-v1.md` — **CURRENT FOUNDER-APPROVED HOMEPAGE V3 DESIGN CONTRACT**. Despite the filename, its current in-file status governs Homepage v3. It records the editorial white signup treatment, `Subscribe free` hero CTA, smaller constrained Feature composition, contextual newsletter-card headline, and implementation boundary.
- `docs/DESIGN_DIRECTION.md` — current general visual principles. Its older Homepage v2-specific examples are superseded where they conflict with `PROJECT_STATE` or the current `research/homepage-redesign-v1.md` contract.
- `docs/IMAGE_SYSTEM.md` — general editorial image rules.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only; current homepage top acquisition area uses no image.
- `research/image-system/homepage-featured-cover-decision.md` — authority for the existing Feature image used by the homepage.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — useful internal research; `briefing` is rejected as public acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only; superseded for exact public hero wording.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED PRIMARY ACQUISITION WORDING AND OPERATING PROMISES**.

Homepage v3 additionally approves the hero CTA label `Subscribe free`.

Feature-side newsletter card headline is founder-approved as:

`There's more to it than the headline.`

Its exact one-sentence support copy remains open and must not be invented during implementation.

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

### Superseded homepage implementation choices

The following recent runtime/design choices are explicitly superseded by Homepage v3 and must not be treated as precedent:

- muted/light-blue full top newsletter band;
- `Send me the news` as the hero CTA;
- stretched horizontal hero form;
- oversized wide-screen Feature treatment;
- aggressive fixed-height Feature crop;
- removing `Latest | Stories` from the header;
- topic labels in the homepage header;
- red ticker treatment;
- entire ticker rendered black.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated.

## Current runtime vs Homepage v3 target

Current runtime is still the prior correction pass, not Homepage v3.

It currently includes:

- `Latest | Stories` header navigation;
- no topic labels/header Subscribe CTA;
- warm near-white acquisition area;
- horizontal hero form with `Send me the news`;
- Latest strip with black identifier and light rail;
- Feature + newsletter-card pairing;
- full uncropped Feature image that is too large on wide desktop;
- temporary repeated primary acquisition copy in the side card;
- News below Feature;
- black footer endcap;
- no ticker motion.

Homepage v3 target changes only the approved items in `research/homepage-redesign-v1.md` and `docs/PROJECT_STATE.md`.

## Information architecture authority

Current header presentation remains:

`Latest | Stories`

The eventual relationship among News, Features, Stories, and Latest remains a later architecture decision. Do not infer route/schema migration from the current header wording.

Current content schema still uses:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

Do not confuse target taxonomy with completed migration.

## Image authority

### Feature image

Current assets:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

Homepage v3 keeps the full Feature image composition but reduces its rendered scale by constraining the overall module width.

### Historical architectural hero

The prior selected architectural image remains provenance only. Homepage v3 top acquisition area uses no hero image.

## Motion authority

Ticker movement remains deliberately deferred until Homepage v3 static desktop/mobile composition is implemented and founder-approved.

## Validation authority

No fresh runtime validation was created by the Homepage v3 docs-only approval record.

The current runtime requires actual implementation plus `npm run check` and `npm run build` before a Homepage v3 validation pass can be claimed.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across new planning documents.
