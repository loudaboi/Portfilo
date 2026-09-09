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

**Editorial Direction + News Intelligence v0 / News-Why-Hustle section migration**

Canonical upstream operating contract:

`docs/EDITORIAL_INTELLIGENCE.md`

Canonical operating source registry:

`docs/EDITORIAL_SOURCE_MAP.md`

Canonical reusable scanner prompt:

`docs/NEWS_SCANNER_PROMPT.md`

The public editorial architecture is now:

`News / Why / Hustle`

`Stories` is retired as a public section name. The generic journalistic word `story` may still appear internally where it describes an editorial artifact, research packet, or writing job rather than a public navigation section.

The previous Editorial Packaging Standard Refinement task remains deferred, not canceled.

## Current canonical documents

### Contributor and decision control

- `AGENTS.md`
- `skills/portfilo-anti-slop/SKILL.md`

### Product and implementation state

- `docs/PROJECT_STATE.md` - current phase, validated state, active work plan, and exact next task.
- `docs/V0_SCOPE.md` - current v0 product/technical boundaries and News/Why/Hustle public section contract.
- `docs/DESIGN_DIRECTION.md` - current visual/responsive contract.
- `README.md` - current repository overview.
- `BACKLOG.md` - ideas outside current scope only.

### Editorial direction, intelligence, research, writing, packaging, publishing

Current:

- `docs/EDITORIAL_INTELLIGENCE.md` - upstream News discovery, ChatGPT-led scanner model, signal handling, automation boundary, and handoff into existing editorial systems.
- `docs/EDITORIAL_SOURCE_MAP.md` - starting source universe, monitoring priority, optional supporting inputs, and source-map review rules.
- `docs/NEWS_SCANNER_PROMPT.md` - short reusable prompt for a dedicated ChatGPT News-scanner conversation; substantive authority remains in the canonical standards.
- `docs/CONTENT_PLANNING.md` - substantial Why/Hustle candidate selection and prioritization.
- `docs/EDITORIAL_STANDARD.md` - editorial integrity, coverage principles, and public News/Why/Hustle distinction.
- `docs/RESEARCH_STANDARD.md` - evidence, source hierarchy, contradiction search, research packets, and verification.
- `docs/WRITING_SYSTEM.md` - writing-form selection and structural/stylistic authority.
- `docs/STYLE_RESEARCH_STANDARD.md` - story-specific professional form research.
- `docs/EXPLAINED_STANDARD.md` - founder-approved Explained direction; no universal Explainer structure is canonical.
- `docs/EDITORIAL_PACKAGING_STANDARD.md` - current headline/dek/metadata architecture.
- `docs/PUBLISHING_STANDARD.md` - substantial and fast-factual publication paths plus current `section: news | why | hustle` schema contract.
- `docs/COPY_STYLE.md` - public copy rules and institutional-copy provenance.
- `docs/PORTFILO_TEST_STANDARD.md` - Portfilo Test methodology.

### Relationship between intelligence and reporting standards

Use the layers in this order:

```text
EDITORIAL INTELLIGENCE
source map + current web -> signal -> original-source check -> News / Watch / Story Idea / Ignore

CONTENT PLANNING
idea/question -> editorial gate -> priority -> Why / Hustle assignment

RESEARCH + WRITING + PUBLISHING
research packet -> evidence -> story decision -> form -> draft -> verification -> package -> publish
```

`STORY IDEA` remains a private scanner/Sheet label, not a public section.

`docs/EDITORIAL_INTELLIGENCE.md` does not create a second evidence hierarchy. `docs/RESEARCH_STANDARD.md` remains the authority for evidentiary source tiers and claim verification.

`docs/EDITORIAL_SOURCE_MAP.md` uses `CORE / WATCH / TARGETED` only as monitoring-frequency labels. They are not credibility tiers.

`docs/NEWS_SCANNER_PROMPT.md` is an invocation contract, not a substitute for repository authority.

Deeper editorial ideas do not have to originate in the News pipeline.

### Public topic taxonomy

Current public topic taxonomy remains:

`Business / Technology / Startup / AI`

Runtime values remain:

`business / technology / startup / ai`

This topic taxonomy is separate from the public section architecture:

`News / Why / Hustle`

Do not infer a topic-taxonomy migration from the section migration.

### Design and imagery

Current:

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`

Astro's native image pipeline remains the current runtime authority for editorial image rendering.

Whether published News/Why/Hustle work should normally require an image remains intentionally open and belongs to the deferred Editorial Packaging Standard Refinement task.

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

The 2026-09-10 conflict audit identified two stale documentation issues that do not block the current workstream:

1. `docs/COPY_STYLE.md` still contains route/header facts from an earlier standalone `/subscribe` and persistent header-CTA state. Current route/header authority in `PROJECT_STATE`, `V0_SCOPE`, `DESIGN_DIRECTION`, and runtime source takes precedence.
2. `docs/SOCIAL_DISTRIBUTION.md` still contains legacy `Portfilo Brief` naming. Current newsletter public naming authority is `Portfilo newsletter`.

Treat these as maintenance/reconciliation items. Do not use the stale clauses to reopen already-approved product decisions.

## Current runtime authority

### Header

`src/components/SiteHeader.astro`

Current masthead:

`Portfilo | News | Why | Hustle`

There is no persistent Subscribe CTA.

### Public route set

Current editorial/institutional routes:

- `/`
- `/news`
- `/news/[slug]`
- `/why`
- `/why/[slug]`
- `/hustle`
- `/hustle/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`

Retired routes:

- `/stories` -> `/why` via Cloudflare redirect
- `/stories/*` -> `/why/:splat` via Cloudflare redirect
- `/subscribe` -> `/#newsletter` via Cloudflare redirect
- `/about` -> `/`
- `/series/[slug]` removed from v0

### Content schema

`src/content.config.ts` currently owns:

```text
section: news | why | hustle
contentType: reported | explained | guide | profile | analysis | perspective | field-notes | partner
topic: business | technology | startup | ai
status: draft | published
```

The internal Astro collection remains named `stories`. That collection name is implementation plumbing, not public navigation.

All four existing non-News content entries have been reclassified to `section: why`. There is no synthetic Hustle content.

### Archives and articles

`src/components/EditorialArchive.astro` owns shared News/Why/Hustle archive presentation.

`src/components/EditorialArticle.astro` owns shared article presentation with `news` and `longform` rendering modes. Why and Hustle use the shared long-form mode.

The homepage keeps one primary long-form Feature that may draw from Why or Hustle inventory. It does not add separate homepage section blocks merely because the public navigation has three editorial destinations.

## Current validation status

The previous corrected and performance-optimized website v0 release remains founder-approved and production-verified.

The News/Why/Hustle migration changes runtime code and therefore requires a fresh `npm run check`, `npm run build`, and preview/responsive inspection before it can be considered validated for release.

Do not claim those checks passed until they actually run against the migration state.

No merge to `main` is authorized by the migration implementation gate.

## Historical/provenance records

Files under `research/` and older implementation/copy records remain useful for provenance only unless explicitly promoted by a current canonical document.

Rejected or superseded designs, copy, strategies, and generated outputs do not become precedent merely because they remain in Git history or research files.