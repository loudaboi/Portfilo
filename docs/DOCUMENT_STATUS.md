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

- `docs/PROJECT_STATE.md` — current phase, current target vs runtime, exact next task, validation state. As of 2026-09-08 it records the founder-approved **compact no-image homepage hero**, the revised newsletter placements, and Static Homepage Rebuild v1 as the active implementation/validation task.
- `docs/V0_SCOPE.md` — current v0 target product and technical boundaries. Its older line describing one standalone final newsletter signup is superseded by the later homepage placement decision in `docs/PROJECT_STATE.md` until the scope file is synchronized.
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

- `docs/DESIGN_DIRECTION.md` — current visual principles. Its old homepage-composition and selected-hero-image clauses are superseded where they conflict with the later founder decisions in `docs/PROJECT_STATE.md`: Static Homepage Rebuild v1 uses a compact **no-image** newsletter hero, a Feature/newsletter paired module, and a compact footer signup.
- `docs/IMAGE_SYSTEM.md` — general editorial image rules.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — founder-approved redesign provenance. Its original hero-image requirement, standalone final newsletter CTA, and old active-task section are superseded by the 2026-09-08 decisions recorded in `docs/PROJECT_STATE.md`.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical brief/provenance for the architectural hero concept; no longer an active implementation requirement for Homepage Rebuild v1.
- `research/image-system/homepage-hero-selection-v1.md` — **HISTORICAL SELECTION / PROVENANCE ONLY FOR THE CURRENT REBUILD**. The exact selected image must not be regenerated or silently substituted, but the founder has chosen not to use a hero image in Static Homepage Rebuild v1.
- `research/image-system/homepage-featured-cover-decision.md` — current/historical authority for the older Feature-panel image, which remains eligible for its approved Feature job.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — current research corpus only; it grants no Portfilo copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — research record whose model recommendation remains useful internally. `Briefing` may describe an internal archetype in that research, but it is rejected as public homepage/newsletter acquisition language at the current boundary.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot design. Its in-file `awaiting founder approval` status is stale. The pilot is parked until the core redesigned site is built and now validates whether the approved 7-minute / three-times-per-week promise can be sustained operationally.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance record. Its former Architecture A hero selection is superseded for actual hero wording/structure by the founder's later acquisition-copy decision.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED HOMEPAGE HERO COPY AUTHORITY**. It records the exact hero copy, the `latest news` acquisition promise, the 7-minute reading-time promise, the three-times-per-week cadence, and rejection of `briefing` as public acquisition language. Its earlier section-specific lower-signup rule is superseded for the first static build by the founder's explicit approval to reuse the hero copy in all three signup placements.

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

Do not use its Candidate A/B/C wording or lightly paraphrase it into the current homepage-copy work. This includes the rejected directions around `keep up`, `latest` used generically without the now-approved concrete promise, `business and technology, by email`, `news and deeper stories`, and `Get Portfilo in your inbox`.

`research/homepage-copy-v2.md` is also **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**. Do not restore its briefing-led headline:

`A briefing on business and technology, with original reporting from Portfilo.`

The current hero authority is `research/homepage-hero-copy-v3.md`.

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

Static Homepage Rebuild v1 has now replaced the rejected first homepage composition in `src/pages/index.astro` on the working branch.

The current rebuild implements:

- compact no-image newsletter hero;
- static Latest strip;
- development-only News fixtures for hierarchy testing;
- current Feature treatment using the approved existing Feature image;
- Feature + newsletter-card pairing;
- compact footer newsletter signup.

`src/components/NewsletterSignup.astro` now supplies compact hero/card/footer variants while preserving the existing subscription behavior.

`src/components/SiteHeader.astro` now exposes the intended `Business / Technology / Startup / AI` coverage labels as presentation text without performing the later schema/taxonomy migration.

The current content schema still uses:

`business / technology / startups / ai / building`

The approved target public coverage set is:

`Business / Technology / Startup / AI`

Do not confuse header presentation with an already completed schema migration.

## Homepage image authority

### Feature image

Current repository assets:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

These remain valid for the Feature job and are used by the current static homepage Feature treatment.

### Historical architectural hero image

Founder previously selected generated architectural candidate 2. See:

`research/image-system/homepage-hero-selection-v1.md`

The current homepage hero deliberately uses **no image**. The historical selection remains preserved but is not an implementation dependency. Do not add or regenerate it unless the founder explicitly reopens that decision.

## Validation authority

Do not infer a current pass from an old record saying QA passed or was pending.

Current validation state is recorded only in:

`docs/PROJECT_STATE.md`

The current static homepage runtime changes require fresh validation. Documentation updates do not create a check/build pass.

## Maintenance rule

When a later decision supersedes an older record:

- preserve historical material when it is useful for provenance;
- update this status map if the older record could plausibly mislead later work;
- update the governing canonical standard when the rule itself changed;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across multiple new planning documents;
- do not edit old history merely to make every old status line read as current when a clear status map is sufficient.
