# Portfilo Document Status

_Last updated: 2026-09-07_

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

- `docs/PROJECT_STATE.md` — current phase, current target vs runtime, exact next task, validation state.
- `docs/V0_SCOPE.md` — current v0 target product and technical boundaries.
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

`docs/CONTENT_PLANNING.md` remains canonical for its planning gates, reader needs, evidence/feasibility checks, and assignment workflow. Its 2026-09-06 internal geography thesis and old five-topic public taxonomy are **superseded by the 2026-09-07 product decision recorded in `docs/PROJECT_STATE.md`**. Do not use those stale clauses to reintroduce a Philippines-first product promise or `Building` as an intended public coverage label. Full planning-taxonomy synchronization belongs to the later News/Feature architecture migration.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current visual principles.
- `docs/IMAGE_SYSTEM.md` — general editorial image rules.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — founder-approved homepage composition/design contract. Its old in-file `Current active task: Hero Visual Direction v1` section is superseded; hero selection is complete and the current task lives only in `PROJECT_STATE.md`.
- `research/image-system/homepage-hero-image-brief-v1.md` — approved brief/provenance for the new hero concept. Its old `awaiting concept selection` status line is superseded by the selection record below.
- `research/image-system/homepage-hero-selection-v1.md` — current authority for the selected new hero candidate and asset-provenance requirements.
- `research/image-system/homepage-featured-cover-decision.md` — historical/current-runtime authority for the **older Feature-panel image**, not the selected new homepage hero.

### Product-model / newsletter research

- `research/newsletter-copy-reference-corpus-v1.md` — current research corpus only; it grants no Portfilo copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — research record whose recommendation **Model 2: focused business/technology briefing + original reporting** and **no geographic product promise** were founder-approved after the file was written. Its in-file `approval pending` status is stale.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot design. Its in-file `awaiting founder approval` status is stale. The pilot is **parked until the core redesigned site is built**.
- `research/homepage-copy-evidence-matrix-v1.md` — founder-approved homepage copy-structure decision record. **Architecture A — Product/output first** is selected.
- `research/homepage-copy-v2.md` — current exact homepage copy candidate produced from approved Architecture A. It is **awaiting founder copy approval** and has no implementation authority until approved.

### Brand

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists as the operational name on current runtime/email surfaces. The approved redesign direction is a later **coordinated** public naming migration to `Newsletter`; do not perform a piecemeal migration.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy.

Its former position as the immediate next project task is superseded. Social Visual System work is deferred until the redesigned website is stable.

## Rejected / historical records with zero current decision authority

### Rejected homepage copy

`research/homepage-copy-v1.md` is **REJECTED / HISTORICAL / ZERO AUTHORITY**.

Do not use its Candidate A/B/C wording or lightly paraphrase it into the current homepage-copy attempt. This includes the rejected directions around `keep up`, `latest`, `business and technology, by email`, `news and deeper stories`, and `Get Portfilo in your inbox`.

The approved process completed the reference-corpus + Portfilo claim-sheet + message-architecture gate. Architecture A is selected in `research/homepage-copy-evidence-matrix-v1.md`. The new exact wording candidate is `research/homepage-copy-v2.md` and remains pending founder approval.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

Their old navigation, fixture-era copy, approval status, or `next task` language does not override current state.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was created during the 2026-09-07 redesign discussion but duplicated the existing project-state authority model. It is intentionally removed during state reconciliation. Its useful current decisions were reconciled into `docs/PROJECT_STATE.md`; it must not be recreated as a second current-phase authority.

## Current runtime vs redesign target

The current runtime is transitional.

Actual working-branch header currently renders:

- `Latest`
- `Features`
- `Subscribe free`

The current `src/pages/index.astro` is the rejected first homepage-rebuild attempt. It is not visual or copy precedent, even though it remains runtime code until replacement.

The current content schema still uses:

`business / technology / startups / ai / building`

The approved target public coverage set is:

`Business / Technology / Startup / AI`

Do not confuse the approved target with an already completed schema migration.

## Homepage image authority

Two different image jobs now exist:

### Older Feature image

Current repository assets:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

These remain valid for their prior Feature/runtime job and may be reused for a Feature when justified.

### New homepage hero

Founder selected generated architectural candidate 2. See:

`research/image-system/homepage-hero-selection-v1.md`

The exact selected binary is not yet committed. Do not regenerate or substitute it if unavailable. Ask for the approved asset and verify the recorded hash when practical.

## Validation authority

Do not infer a current pass from an old record saying QA passed or was pending.

Current validation state is recorded only in:

`docs/PROJECT_STATE.md`

Documentation-only state reconciliation and copy-candidate documentation do not create a new runtime check/build result.

## Maintenance rule

When a later decision supersedes an older record:

- preserve historical material when it is useful for provenance;
- update this status map if the older record could plausibly mislead later work;
- update the governing canonical standard when the rule itself changed;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across multiple new planning documents;
- do not edit old history merely to make every old status line read as current when a clear status map is sufficient.
