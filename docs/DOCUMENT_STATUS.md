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

- `docs/PROJECT_STATE.md` — **CURRENT AUTHORITY** for the latest homepage correction pass, current runtime target, exact next task, open Feature-card copy gate, and validation state.
- `docs/V0_SCOPE.md` — current v0 target product and technical boundaries. Exact homepage ordering and the latest visual corrections live in `docs/PROJECT_STATE.md`.
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

`docs/CONTENT_PLANNING.md` remains canonical for its planning gates, reader needs, evidence/feasibility checks, and assignment workflow. Its old geography thesis and five-topic public taxonomy are superseded by later product decisions in `docs/PROJECT_STATE.md`. Full planning-taxonomy synchronization belongs to the later News/Feature architecture migration.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current general visual principles. Its Homepage v2-specific smaller-header/topic-header/red-ticker clauses are **superseded where they conflict with the latest founder review recorded in `docs/PROJECT_STATE.md`**.
- `docs/IMAGE_SYSTEM.md` — general editorial image rules.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — homepage redesign provenance and earlier composition contract. Its Homepage v2 details are **partially superseded by the latest 2026-09-08 founder visual review in `docs/PROJECT_STATE.md`**, specifically header scale/content, ticker color, hero blue treatment, and restoration of the Feature-side newsletter card.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical brief/provenance for the architectural hero concept; no longer an active homepage implementation requirement.
- `research/image-system/homepage-hero-selection-v1.md` — historical selection/provenance only for the current no-image homepage hero.
- `research/image-system/homepage-featured-cover-decision.md` — authority for the existing Feature image used by the homepage Feature treatment.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no automatic Portfilo copy authority.
- `research/portfilo-product-model-research-v1.md` — useful internal product-model research. `Briefing` remains rejected as public homepage/newsletter acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot design, parked until the core site is built.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance record; former Architecture A final-hero structure is superseded by later founder decisions.
- `research/homepage-hero-copy-v3.md` — **CURRENT APPROVED PRIMARY HOMEPAGE NEWSLETTER COPY AUTHORITY** for the headline/support line and newsletter promises.
- `Send me the news` is the current approved homepage form action label.
- The restored Feature-side newsletter card needs a **different contextual message**; exact card headline/support copy is still open. The working founder idea `There's more to it than the headline.` is not yet final authority.

### Brand

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists as the operational name on current runtime/email surfaces. The approved redesign direction remains a later coordinated public naming migration to `Newsletter`; do not perform it piecemeal during homepage work.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy.

Social Visual System work remains deferred until the redesigned website is stable.

## Rejected / historical records with zero current decision authority

### Rejected homepage copy

- `research/homepage-copy-v1.md` — REJECTED / HISTORICAL / ZERO AUTHORITY.
- `research/homepage-copy-v2.md` — REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY.

Do not restore the briefing-led line:

`A briefing on business and technology, with original reporting from Portfilo.`

### Rejected latest visual choices

The following Homepage v2 implementation choices were explicitly rejected by the founder on 2026-09-08 and must not return as precedent:

- undersized header wordmark/proportions;
- `Business / Technology / Startup / AI` labels displayed in the header;
- over-indented centered Feature treatment;
- red Latest ticker treatment;
- overly pale newsletter hero background;
- removal of the Feature-side newsletter signup card.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated as a second current-phase authority.

## Current runtime vs approved target

The latest focused homepage correction pass is implemented in the working branch but remains **unvalidated locally and not yet founder-approved visually**.

Current runtime includes:

- restored earlier/larger restrained Portfilo header proportions;
- no topic/category labels in the header;
- `Features` as the explicit editorial header link;
- no header Subscribe CTA;
- muted/light Portfilo blue newsletter band using `#8fc7ff`;
- white hero signup CTA;
- full-width near-black Latest ticker with light text and blue category accents;
- Feature immediately after ticker;
- Feature image + headline/dek on the left and restored newsletter signup card on the right for desktop;
- Feature card stacks after the Feature story on mobile;
- News below Feature;
- black footer newsletter endcap and dark site footer;
- no ticker auto-motion yet;
- no route/schema/taxonomy migration.

The Feature-side newsletter card currently reuses already-approved primary newsletter copy **temporarily**. Do not mistake that temporary copy reuse for final card-copy approval.

The current content schema still uses:

`business / technology / startups / ai / building`

The approved target public coverage set remains:

`Business / Technology / Startup / AI`

## Homepage information architecture authority

Current interpretation:

- `News` = current/day-to-day content layer;
- `Features` = deeper editorial layer;
- `Latest` = chronological view/ticker concept, not a content type;
- `Stories` = current technical route terminology, not intended reader-facing product naming.

Do not create or migrate routes during homepage visual QA. The later News/Feature architecture gate owns that work.

## Homepage image authority

### Feature image

Current repository assets:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

These remain valid for the Feature job and are used by the homepage.

### Historical architectural hero image

Founder previously selected generated architectural candidate 2. See:

`research/image-system/homepage-hero-selection-v1.md`

The homepage deliberately uses no hero image. The historical selection remains preserved but is not an implementation dependency.

## Motion authority

Ticker movement remains deliberately deferred until the corrected static desktop/mobile composition is founder-approved.

The immediate later motion pass may add slow CSS-based horizontal ticker movement with pause/focus behavior and a reduced-motion stationary/manual fallback.

## Validation authority

Do not infer a current pass from an old record saying QA passed or was pending.

Fresh validation state is recorded only in:

`docs/PROJECT_STATE.md`

The correction pass requires actual `npm run check` and `npm run build` before a pass can be claimed.

## Maintenance rule

When a later decision supersedes an older record:

- preserve historical material when useful for provenance;
- update this status map if the older record could plausibly mislead later work;
- update the governing canonical standard when the rule itself changed;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across new planning documents.
