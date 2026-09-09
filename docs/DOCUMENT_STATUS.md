# Portfilo Document Status

_Last updated: 2026-09-10_

This file prevents historical implementation notes and research records from being mistaken for current authority.

## Authority order

When documents disagree, use:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. this status map
4. `docs/V0_SCOPE.md`
5. the canonical standard for the subject
6. current runtime source
7. historical research/decision records for provenance only

`docs/PROJECT_STATE.md` owns the current phase and exact next task. Do not create a competing execution plan.

## Current phase

Current primary workstream:

**Editorial Direction + News Intelligence v0**

Canonical upstream operating contract:

`docs/EDITORIAL_INTELLIGENCE.md`

The previous Editorial Packaging Standard Refinement task is deferred, not canceled.

## Current canonical documents

### Contributor and decision control

- `AGENTS.md`
- `skills/portfilo-anti-slop/SKILL.md`

### Product and implementation state

- `docs/PROJECT_STATE.md` — current phase, validated state, conflict audit, active work plan, and exact next task.
- `docs/V0_SCOPE.md` — current v0 product/technical boundaries.
- `docs/DESIGN_DIRECTION.md` — current visual/responsive contract.
- `README.md` — current repository overview.
- `BACKLOG.md` — ideas outside current scope only.

### Editorial direction, intelligence, research, writing, packaging, publishing

Current:

- `docs/EDITORIAL_INTELLIGENCE.md` — upstream News discovery, signal handling, minimal operating routine, automation boundary, and handoff into existing editorial systems.
- `docs/CONTENT_PLANNING.md` — substantial editorial candidate selection and prioritization.
- `docs/EDITORIAL_STANDARD.md` — editorial integrity and coverage principles.
- `docs/RESEARCH_STANDARD.md` — evidence, source hierarchy, contradiction search, research packets, and verification.
- `docs/WRITING_SYSTEM.md` — writing-form selection and structural/stylistic authority.
- `docs/STYLE_RESEARCH_STANDARD.md` — story-specific professional form research.
- `docs/EXPLAINED_STANDARD.md` — founder-approved Explained direction; no universal Explainer structure is canonical.
- `docs/EDITORIAL_PACKAGING_STANDARD.md` — current headline/dek/metadata architecture.
- `docs/PUBLISHING_STANDARD.md` — substantial and fast-factual publication paths.
- `docs/COPY_STYLE.md` — public copy rules and institutional-copy provenance.
- `docs/PORTFILO_TEST_STANDARD.md` — Portfilo Test methodology.

### Relationship between intelligence and reporting standards

Use the layers in this order:

```text
EDITORIAL INTELLIGENCE
source -> signal -> original-source check -> News / Watch / Ignore
                                   ↘ possible Story question

CONTENT PLANNING
idea/question -> editorial gate -> priority -> assignment

RESEARCH + WRITING + PUBLISHING
research packet -> evidence -> story decision -> form -> draft -> verification -> package -> publish
```

`docs/EDITORIAL_INTELLIGENCE.md` does not create a second evidence hierarchy. `docs/RESEARCH_STANDARD.md` remains the authority for evidentiary source tiers and claim verification.

Story ideas do not have to originate in the News pipeline.

### Public taxonomy

Current public topic taxonomy remains:

`Business / Technology / Startup / AI`

Runtime values remain:

`business / technology / startup / ai`

The founder-approved internal editorial direction is broader and is recorded in `docs/PROJECT_STATE.md` and `docs/EDITORIAL_INTELLIGENCE.md`.

A public taxonomy change is a separate gate because it affects documentation, content frontmatter, and `src/content.config.ts`.

Do not infer a taxonomy migration from approval of the editorial-direction workstream.

### Design and imagery

Current:

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`

Astro's native image pipeline remains the current runtime authority for editorial image rendering.

Whether published News/Stories should normally require an image remains intentionally open and belongs to the deferred Editorial Packaging Standard Refinement task.

### Email and deployment

Current:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

Important boundary:

- website-facing acquisition language uses `Portfilo newsletter`, not `Portfilo Brief`;
- provider-side beehiiv records may still contain historical naming;
- repository edits do not imply provider-side beehiiv settings were changed.

Cloudflare production behavior remains:

- production branch: `main`;
- automatic deployments: enabled;
- `build/portfilo-v0` remains the preview/test working branch.

## Known adjacent authority hygiene issues

The 2026-09-10 conflict audit identified two stale documentation issues that do not block the active editorial-intelligence workstream:

1. `docs/COPY_STYLE.md` still contains route/header facts from an earlier standalone `/subscribe` and persistent header-CTA state. Current route/header authority in `PROJECT_STATE`, `V0_SCOPE`, and runtime source takes precedence.
2. `docs/SOCIAL_DISTRIBUTION.md` still contains legacy `Portfilo Brief` naming. Current newsletter public naming authority is `Portfilo newsletter`.

Treat these as maintenance/reconciliation items. Do not use the stale clauses to reopen the already-approved route, header, or newsletter-name decisions.

## Current runtime authority

### Header

`src/components/SiteHeader.astro`

Current masthead:

`Portfilo | News | Stories`

There is no persistent Subscribe CTA.

### Public route set

Current editorial/institutional routes:

- `/`
- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`

Retired routes:

- `/subscribe` -> `/#newsletter` via Cloudflare redirects
- `/about` -> `/`
- `/series/[slug]` removed from v0

### Content schema

`src/content.config.ts` currently owns:

```text
section: news | stories
contentType: reported | explained | guide | profile | analysis | perspective | field-notes | partner
topic: business | technology | startup | ai
status: draft | published
```

No taxonomy or schema change is authorized by the active intelligence workstream.

### Archives and articles

`src/components/EditorialArchive.astro` owns shared News/Stories archive presentation.

`src/components/EditorialArticle.astro` owns shared News/Stories article presentation.

The current implementation already supports separate News/Stories modes and displays content classification supplied by the routes. No runtime redesign is required for Editorial Intelligence v0.

## Current validation status

The corrected and performance-optimized website v0 release remains founder-approved and production-verified.

Current Editorial Direction + News Intelligence changes are documentation-only unless a later explicit gate authorizes runtime changes.

Do not claim a new local build/check validation pass unless it was actually run against the relevant state.

## Historical/provenance records

Files under `research/` and older implementation/copy records remain useful for provenance only unless explicitly promoted by a current canonical document.

Rejected or superseded designs, copy, strategies, and generated outputs do not become precedent merely because they remain in Git history or research files.