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

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND HOMEPAGE AUTHORITY**. As of 2026-09-08 it records the latest corrected homepage state: `Latest | Stories` header, no topic labels/header Subscribe CTA, warm-neutral newsletter area, ink-only Latest ticker label with light headline rail, uncropped Feature image, Feature + newsletter-card pairing, News below Feature, and black footer endcap.
- `docs/V0_SCOPE.md` — current v0 product and technical boundaries. Where its homepage ordering/presentation differs from `PROJECT_STATE`, the newer founder-approved homepage state wins until scope synchronization.
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
- `docs/CONTENT_PLANNING.md` — canonical for planning gates, but its old geography thesis and old five-topic public taxonomy are superseded by later product decisions in `PROJECT_STATE`.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current general visual principles. Any homepage-specific clauses that conflict with the latest `PROJECT_STATE` are superseded by the later founder review.
- `docs/IMAGE_SYSTEM.md` — general editorial image rules.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — redesign provenance and prior approved composition record. Later founder QA corrections in `PROJECT_STATE` supersede stale clauses within this research file.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only; current homepage hero uses no image.
- `research/image-system/homepage-featured-cover-decision.md` — current/historical authority for the existing Feature image used by the homepage.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — useful internal product-model research; `briefing` is rejected as public acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only; superseded for exact public hero wording.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED PRIMARY HOMEPAGE ACQUISITION COPY** and operating promises.

Feature-side newsletter card copy is **not yet final**. The working idea around `There's more to it than the headline.` is a direction only. Current runtime temporarily reuses the approved primary acquisition copy for that card.

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
- `research/homepage-copy-v2.md` — **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**. Do not restore its briefing-led headline.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated.

## Current runtime vs approved target

Current working branch homepage implements:

- earlier/larger restrained Portfilo wordmark scale;
- `Latest | Stories` header navigation;
- no topic/category labels in the header;
- no header Subscribe CTA;
- warm near-white newsletter acquisition area;
- normal white email field + blue `Send me the news` CTA;
- full-width static Latest strip where **only the Latest label is ink/black** and the headline rail remains light;
- Feature + newsletter-card pairing on desktop, stacked on mobile;
- Feature image rendered without the rejected fixed-height `object-fit: cover` crop;
- Feature headline/dek directly below the image;
- News below Feature;
- black footer newsletter endcap and dark site footer;
- no automatic ticker movement yet;
- no route/schema/taxonomy migration.

Current content schema still uses:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

Do not confuse target taxonomy with completed migration.

## Information architecture authority

The earlier removal of `Latest` / `Stories` from the header was based on an exploratory question and is superseded.

Current header presentation is:

`Latest | Stories`

The eventual relationship among News, Features, Stories, and Latest remains a later architecture decision. Do not infer a route/schema migration from the current header wording.

## Image authority

### Feature image

Current assets:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

The current homepage must show the Feature image composition without the rejected aggressive crop.

### Historical architectural hero

The prior selected architectural image remains provenance only. Current homepage hero uses no image.

## Motion authority

Ticker movement remains deliberately deferred until the corrected static desktop/mobile composition is founder-approved. The later motion pass may add slow CSS-based movement with hover/focus pause and reduced-motion fallback.

## Validation authority

Current fresh validation state lives only in `docs/PROJECT_STATE.md`.

The latest correction pass requires actual `npm run check` and `npm run build` before a pass can be claimed.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across new planning documents.
