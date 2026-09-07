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

A current founder decision should be reconciled into the proper canonical file before a later chat relies on it.

Do not create a second execution-plan document. `docs/PROJECT_STATE.md` owns the active sequence.

## Current canonical documents

### Contributor / decision control

- `AGENTS.md` — repository authority, scope, approvals, implementation discipline.
- `skills/portfilo-anti-slop/SKILL.md` — mandatory evidence-first decision gate for nontrivial discretionary product/copy/design decisions.

### Product and state

- `docs/PROJECT_STATE.md` — current phase, current target vs runtime, exact next task, validation state. As of 2026-09-08 it records **Homepage v2 implemented / local validation + visual QA pending**.
- `docs/V0_SCOPE.md` — current v0 target product and technical boundaries. Its homepage surface list is broad inventory; exact current ordering lives in `docs/PROJECT_STATE.md` and `research/homepage-redesign-v1.md`.
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
- `research/README.md`
- `research/STYLE_RESEARCH_TEMPLATE.md`
- `research/STYLE_BRIEF_TEMPLATE.md`

`docs/CONTENT_PLANNING.md` remains canonical for its planning gates, reader needs, evidence/feasibility checks, and assignment workflow. Its old geography thesis and five-topic public taxonomy are superseded by later product decisions in `docs/PROJECT_STATE.md`. Do not use those stale clauses to reintroduce a Philippines-first product promise or `Building` as an intended public coverage label. Full planning-taxonomy synchronization belongs to the later News/Feature architecture migration.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — **CURRENT** visual principles, updated for Homepage v2: smaller header, light-blue newsletter band, full-width static ticker, Feature before News, no decorative eyebrow system, and black footer endcap.
- `docs/IMAGE_SYSTEM.md` — general editorial image rules.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — **CURRENT FOUNDER-APPROVED HOMEPAGE COMPOSITION CONTRACT**. Updated on 2026-09-08 for Homepage v2 after founder review of the first static rebuild.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical brief/provenance for the architectural hero concept; no longer an active Homepage v2 implementation requirement.
- `research/image-system/homepage-hero-selection-v1.md` — **HISTORICAL SELECTION / PROVENANCE ONLY** for the current no-image homepage hero. Do not regenerate or silently substitute the selected image; also do not reintroduce it unless the founder reopens the decision.
- `research/image-system/homepage-featured-cover-decision.md` — current/historical authority for the existing Feature image used by the homepage Feature treatment.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; it grants no Portfilo copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — useful internal product-model research. `Briefing` may describe a historical/internal archetype but is rejected as public homepage/newsletter acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot design, parked until the core site is built; later used to validate the approved 7-minute / three-times-per-week promise operationally.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance record. Its former Architecture A final-hero structure is superseded by later founder copy decisions.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED HOMEPAGE ACQUISITION COPY AUTHORITY** for the headline/support line and newsletter promises. Homepage v2 additionally authorizes `Send me the news` as the homepage form action label.

### Brand

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists as the operational name on current runtime/email surfaces. The approved redesign direction is a later **coordinated** public naming migration to `Newsletter`; do not perform a piecemeal migration during homepage work.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy.

Social Visual System work remains deferred until the redesigned website is stable.

## Rejected / historical records with zero current decision authority

### Rejected homepage copy

`research/homepage-copy-v1.md` is **REJECTED / HISTORICAL / ZERO AUTHORITY**.

`research/homepage-copy-v2.md` is also **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**. Do not restore its briefing-led headline:

`A briefing on business and technology, with original reporting from Portfilo.`

The current acquisition-copy authority is `research/homepage-hero-copy-v3.md` plus the later Homepage v2 button-label decision in `research/homepage-redesign-v1.md` and `docs/PROJECT_STATE.md`.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

Their old navigation, fixture-era copy, approval status, or `next task` language does not override current state.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated as a second current-phase authority.

## Current runtime vs approved target

Homepage v2 is now implemented in `src/pages/index.astro` on `build/portfilo-v0` but remains **unvalidated locally and not yet founder-approved visually**.

Current Homepage v2 runtime includes:

- smaller Portfilo header wordmark;
- `Business / Technology / Startup / AI` presentation labels on wider screens;
- `Features` as the primary editorial header link;
- no header `Latest` link;
- no header subscribe CTA;
- compact light-blue no-image newsletter band;
- `Send me the news` homepage signup action label;
- full-width static Latest ticker with red label accent;
- Feature immediately after the ticker with no section eyebrow or `A CLOSER LOOK` title;
- News below the Feature with one plain `News` heading;
- black footer newsletter endcap and dark site footer;
- no automatic ticker movement yet;
- no route/schema/taxonomy migration.

The current content schema still uses:

`business / technology / startups / ai / building`

The approved target public coverage set remains:

`Business / Technology / Startup / AI`

Do not confuse presentation labels with an already completed schema migration.

## Homepage information architecture authority

Current interpretation:

- `News` = current/day-to-day content layer;
- `Features` = deeper editorial layer;
- `Latest` = chronological view, not a content type;
- `Stories` = current technical route terminology, not intended reader-facing product naming.

Do not create or migrate routes during Homepage v2 visual QA. The later News/Feature architecture gate owns that work.

## Homepage image authority

### Feature image

Current repository assets:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

These remain valid for the Feature job and are used by Homepage v2.

### Historical architectural hero image

Founder previously selected generated architectural candidate 2. See:

`research/image-system/homepage-hero-selection-v1.md`

Homepage v2 deliberately uses **no hero image**. The historical selection remains preserved but is not an implementation dependency.

## Motion authority

Ticker movement remains deliberately deferred until Homepage v2 static desktop/mobile composition is founder-approved.

The immediate later motion pass may add slow CSS-based horizontal ticker movement with pause/focus behavior and a reduced-motion stationary/manual fallback.

## Validation authority

Do not infer a current pass from an old record saying QA passed or was pending.

Fresh Homepage v2 validation state is recorded only in:

`docs/PROJECT_STATE.md`

Homepage v2 requires actual `npm run check` and `npm run build` before a pass can be claimed.

## Maintenance rule

When a later decision supersedes an older record:

- preserve historical material when useful for provenance;
- update this status map if the older record could plausibly mislead later work;
- update the governing canonical standard when the rule itself changed;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across new planning documents.