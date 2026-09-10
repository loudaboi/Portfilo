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

The latest News / Why / Hustle release is complete and production-verified.

**Editorial Packaging Standard Refinement is decision-complete and canonically reconciled. The subsequent editorial-image runtime impact review and default social-preview refresh are also complete on the working branch.**

Founder-approved image policy:

- News imagery is optional;
- Why imagery is preferred when it performs a real explanatory, documentary, or conceptual job, but is not required;
- Hustle authentic subject/operating-context imagery is strongly preferred when available, but is not required;
- no News, Why, or Hustle piece may be blocked from publication solely because no suitable image is available;
- `NO IMAGE` remains a valid editorial outcome;
- imagery must never be manufactured merely to fill a visual slot.

Canonical image-integrity and generated-image controls remain in `docs/IMAGE_SYSTEM.md` and `docs/PHOTO_TREATMENT.md`.

The packaging reconciliation itself changed canonical documentation only. The later founder-promoted image-runtime review concluded that no schema expansion or article/archive component change is justified for v0 because the existing optional image model, no-image states, per-article social-image behavior, and structured-data behavior already satisfy the approved policy.

The default social fallback at `public/social/portfilo-default.png` has been replaced on `build/portfilo-v0` with the founder-selected Portfilo stairs/wordmark composition, prepared as a `1200 x 630` PNG. CI run `#41` on commit `5bc981c65dd6a50db9d020ed4d8f8e4c4cd5a9d9` passed. This asset refresh is not yet a production release to `main`.

No further runtime image-system implementation, schema expansion, image generation, publication, or production release is authorized by this closure.

Canonical upstream News operating contract remains:

`docs/EDITORIAL_INTELLIGENCE.md`

Canonical operating source registry remains:

`docs/EDITORIAL_SOURCE_MAP.md`

Canonical reusable scanner prompt remains:

`docs/NEWS_SCANNER_PROMPT.md`

The public editorial architecture is:

`News / Why / Hustle`

`Stories` is retired as a public section name. The generic journalistic word `story` may still appear internally where it describes an editorial artifact, research packet, or writing job rather than a public navigation section.

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
- `docs/EDITORIAL_PACKAGING_STANDARD.md` - current headline/dek/metadata architecture plus the founder-approved optional-image policy and section-specific image preferences.
- `docs/PUBLISHING_STANDARD.md` - substantial and fast-factual publication paths, current `section: news | why | hustle` schema contract, and publication image-necessity checks.
- `docs/COPY_STYLE.md` - public copy rules and institutional-copy provenance.
- `docs/PORTFILO_TEST_STANDARD.md` - Portfilo Test methodology.

### Relationship between intelligence and reporting standards

Use the layers in this order:

```text
EDITORIAL INTELLIGENCE
source map + current web -> signal -> original-source check -> News / Watch / Story Idea / Ignore

CONTENT PLANNING
idea/question -> editorial gate -> priority -> Why / Hustle assignment

RESEARCH + WRITING + PACKAGING + PUBLISHING
research packet -> evidence -> story decision -> form -> draft -> verification -> package -> image-necessity decision -> publish
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

Do not infer a topic-taxonomy migration from the section migration or packaging refinement.

### Design and imagery

Current:

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`
- `docs/EDITORIAL_PACKAGING_STANDARD.md`

Astro's native image pipeline remains the current runtime authority for editorial image rendering.

Approved publication-level image rule:

- `image` remains optional across News, Why, and Hustle;
- News does not require an image;
- Why may prefer imagery when useful, but absence is not a publication blocker;
- Hustle strongly prefers authentic subject/operating imagery when available, but absence is not a publication blocker;
- generated imagery remains illustration, not documentary evidence;
- one approved story visual may be reused across article/homepage/archive/share derivatives where appropriate;
- a surface may remain text-led even when an approved story image exists elsewhere.

The completed v0 image-runtime impact review preserved the existing schema and shared article/archive components. Do not expand image metadata or introduce dynamic social-card generation merely for completeness without a new justified task.

Current default social behavior:

- articles with an approved image use that image for Open Graph/X metadata and Article structured data;
- articles without an approved image fall back to `/social/portfilo-default.png`;
- non-article pages use the same default fallback where social metadata is enabled;
- the current working-branch default fallback asset is a `1200 x 630` Portfilo stairs/wordmark PNG at `public/social/portfilo-default.png`.

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

The latest released `main` state is founder production-verified. The new default social-preview asset remains working-branch preview/test state until separately approved for release.

## Known adjacent authority hygiene issues

The 2026-09-10 conflict audit identified two stale documentation issues that do not block current editorial operation:

1. `docs/COPY_STYLE.md` still contains route/header facts from an earlier standalone `/subscribe` and persistent header-CTA state. Current route/header authority in `PROJECT_STATE`, `V0_SCOPE`, `DESIGN_DIRECTION`, and runtime source takes precedence.
2. `docs/SOCIAL_DISTRIBUTION.md` still contains legacy `Portfilo Brief` naming. Current newsletter public naming authority is `Portfilo newsletter`.

Treat these as maintenance/reconciliation items. Do not use the stale clauses to reopen already-approved product decisions.

The stale public `Stories` packaging terminology previously present in `docs/EDITORIAL_PACKAGING_STANDARD.md` was reconciled during the approved Editorial Packaging Standard Refinement.

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
image: optional
```

The internal Astro collection remains named `stories`. That collection name is implementation plumbing, not public navigation.

All four existing non-News content entries have been reclassified to `section: why`. There is no synthetic Hustle content.

### Archives and articles

`src/components/EditorialArchive.astro` owns shared News/Why/Hustle archive presentation.

`src/components/EditorialArticle.astro` owns shared article presentation with `news` and `longform` rendering modes. Why and Hustle use the shared long-form mode.

The current components already accept image and no-image states. The completed image-runtime review left these components unchanged because the current behavior satisfies the approved v0 image policy.

The homepage keeps one primary long-form Feature that may draw from Why or Hustle inventory. It does not add separate homepage section blocks merely because the public navigation has three editorial destinations.

### Social metadata

`src/components/SiteHead.astro` remains the runtime authority for default and per-article Open Graph/X image selection.

The current working-branch default fallback asset is:

`public/social/portfilo-default.png`

Current prepared dimensions:

`1200 x 630`

No new social-image generator, route, schema field, or metadata component was introduced in the completed image-runtime review.

## Current validation status

**LATEST RELEASE COMPLETE / CI PASS / FOUNDER PREVIEW QA PASS / PRODUCTION VERIFICATION PASS / WORKING-BRANCH SOCIAL PREVIEW CI PASS.**

The News/Why/Hustle migration, short-page footer correction, client-side navigation enhancement, newsletter acquisition copy refinement, and signup-heading width correction were validated before release, released to `main` after explicit founder approval, and verified on the production Cloudflare Pages deployment.

The Editorial Packaging Standard Refinement is decision-complete and canonically reconciled.

The subsequently promoted editorial-image runtime review concluded with no schema or article/archive component expansion. The working-branch replacement of `public/social/portfilo-default.png` passed CI run `#41` on commit `5bc981c65dd6a50db9d020ed4d8f8e4c4cd5a9d9`.

That social-preview refresh has not yet been released to `main`, so no new production-deployment claim is made for it.

## Historical/provenance records

Files under `research/` and older implementation/copy records remain useful for provenance only unless explicitly promoted by a current canonical document.

Rejected or superseded designs, copy, strategies, and generated outputs do not become precedent merely because they remain in Git history or research files.
