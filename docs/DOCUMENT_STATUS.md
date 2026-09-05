# Portfilo Document Status

_Last updated: 2026-09-06_

This file prevents historical implementation notes and research records from being mistaken for current authority.

When documents disagree, use this priority order:

1. `AGENTS.md` for contributor/workflow rules;
2. `docs/PROJECT_STATE.md` for the current phase, validated state, and exact next task;
3. the current canonical standard for the subject;
4. current source code for runtime behavior;
5. historical decision/research records for provenance only.

## Current canonical documents

### Product and scope

- `docs/PROJECT_STATE.md`
- `docs/V0_SCOPE.md`
- `docs/CONTENT_PLANNING.md`
- `BACKLOG.md`

### Editorial, research, and writing

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `docs/PORTFILO_TEST_STANDARD.md`
- `research/README.md`
- `research/STYLE_RESEARCH_TEMPLATE.md`
- `research/STYLE_BRIEF_TEMPLATE.md`

### Audience and distribution

- `docs/SOCIAL_DISTRIBUTION.md`

### Design and imagery

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`
- `research/image-system/homepage-featured-cover-decision.md` for the current homepage feature-image decision

### Email and deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

## Historical / superseded implementation records

The following files remain in the repository for provenance. Their old status lines, pending-QA language, fixture references, or earlier navigation/copy decisions do **not** override current implementation or `docs/PROJECT_STATE.md`.

- `docs/COPY_REPLACEMENT_CANDIDATE.md` — historical content-first copy implementation record. Its earlier `Latest` navigation and fixture-era homepage details were superseded by the later Stories archive and copy/IA work.
- `docs/NAVIGATION_RESEARCH.md` — historical navigation reset record. The final runtime navigation is `Stories / Standards / About / Subscribe`, as implemented in `src/components/SiteHeader.astro` and `src/components/SiteFooter.astro`.
- `docs/SITE_COPY_AND_IA_AUDIT.md` — completed audit/decision record. Implementation is no longer pending.
- `docs/SITE_COPY_IMPLEMENTATION.md` — completed Phase 2B implementation record. Its earlier pending deployment/build language is historical.
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md` — approved historical decision record establishing the content-first/no-tagline architecture. Current public-copy rules live in `docs/COPY_STYLE.md`.
- `docs/NAVIGATION_RESEARCH.md` and earlier copy records must not be used to reintroduce `Latest` as the global nav destination; `/stories` is the current archive.

## Historical image-system material

The homepage image-system research directory intentionally preserves rejected candidates, earlier briefs, pilot experiments, and generation records.

Current authority is:

- `docs/IMAGE_SYSTEM.md` for general editorial image rules;
- `research/image-system/homepage-featured-cover-decision.md` for the homepage feature panel;
- `public/images/homepage-feature-image.png` for the approved universal homepage feature asset.

The earlier five-topic homepage mapping and earlier Building/Astra/Pinterest candidates are superseded for v0.

The universal homepage feature image is already implemented and validated. The separate per-story generated-image pilot remains paused unless explicitly reopened.

## Navigation authority

Current global navigation is:

- `Stories` → `/stories`
- `Standards` → `/standards`
- `About` → `/about`
- `Subscribe` → `/subscribe`

The Portfilo wordmark links to `/` and acts as Home.

Current runtime sources:

- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

## Current homepage image authority

The homepage feature panel uses one universal image regardless of the featured story topic:

`public/images/homepage-feature-image.png`

The image is not mapped separately to Business, Technology, Startups, AI, or Building.

## Current validation authority

Do not infer a current pass from an old document that says QA was pending or from an old document that says QA passed.

Current validation state is recorded only in:

`docs/PROJECT_STATE.md`

## Maintenance rule

When a later decision supersedes an older implementation record:

- preserve the old file when it contains useful provenance;
- update this status map when the old file could plausibly mislead future work;
- update the canonical standard when the governing rule itself changed;
- update `docs/PROJECT_STATE.md` at meaningful phase boundaries;
- do not duplicate current state across many historical files merely to make every old timestamp read as current.