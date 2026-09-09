# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**V0 RELEASE CLOSED / EDITORIAL PACKAGING STANDARD REFINEMENT NEXT**

The corrected and performance-optimized Portfilo v0 release is founder-approved and closed.

Production verification completed in Cloudflare on 2026-09-09:

- Production branch is `main`;
- automatic deployments are enabled;
- the released site was smoke-tested by the founder;
- responsive typography, archive/footer corrections, optimized editorial images, navigation performance, and homepage ticker spacing were accepted;
- no new runtime defect was reported during final production review.

The founder explicitly approved closing this release and moving to Editorial Packaging Standard Refinement.

Latest runtime-changing commit in the closed release:

`9afec05851c130d3b4cb135dae591edb94f620b8` — `Pass optimized News image URL to metadata`

Release/documentation boundary before this phase transition:

`1b7d8fd93571b6b4e7752b81f777071c730702c6`

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard/approved decision relevant to the task
6. current runtime source

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

The repository is the durable source of truth. Do not override current canonical decisions with assumptions from previous chats.

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Verified Cloudflare model:

- `build/portfilo-v0` -> preview/test
- `main` -> production

`main` remains the production release boundary for future runtime changes.

## Approved product direction

- Portfilo is a business and technology publication.
- News is the current/day-to-day editorial layer.
- Stories is the deeper editorial layer.
- Public topics are `Business / Technology / Startup / AI`.
- Portfilo remains free in v0.
- Newsletter acquisition is important but must not dominate publication identity.
- Approved newsletter promise: latest news, a 7-minute read, three times per week.
- Exact send days/times remain open.
- `briefing` is rejected as public acquisition language.
- No individual public author/byline system is part of v0.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Current production/staging facts

### News

Until real News inventory replaces them, the existing synthetic News fixtures may render strictly as clearly labeled, non-clickable layout placeholders.

They must not create fake article routes or Article metadata and must be replaced before broad-audience launch.

### Stories

The current Story inventory is one published Story and three draft Story previews.

Draft handling remains explicit:

- draft status is not silently changed to published;
- draft items are visibly labeled;
- draft routes remain `noindex, nofollow`;
- draft routes omit published-story canonical/social/article metadata.

The homepage primary Feature remains published-only. The adjacent Stories rail prefers real Story inventory before any synthetic fallback.

### Editorial imagery

The production image system supports both image and image-less archive/article states.

The current approved editorial source asset is stored under:

`src/assets/editorial/`

Astro's native image pipeline is now the canonical runtime path for editorial images.

Whether published News and Stories should normally require an editorial image is **not yet a locked publishing rule**. That question belongs to the next Editorial Packaging Standard Refinement task.

## Closed release state

The released v0 includes the founder-approved:

- shared News/Stories archive system;
- shared News/Stories article system;
- responsive typography repair;
- archive acquisition/footer corrections;
- temporary real Story draft staging behavior;
- homepage real-Story rail preference;
- Astro native editorial-image optimization;
- targeted Home/News/Stories prefetch;
- Astro default CSS handling;
- narrow immutable caching for fingerprinted `/_astro/*` assets;
- homepage ticker attached directly beneath the blue newsletter band with breathing room below.

No React/framework migration, SPA router, service worker, external image CDN, performance package, broad cache layer, CMS, database, or other speculative infrastructure was added.

## Validation status

**RELEASE CLOSED / PRODUCTION FOUNDER-APPROVED.**

Do not reopen the closed visual/performance release without one of:

- an explicit founder change request;
- a concrete production defect;
- material new evidence that invalidates an approved decision.

Historical local `npm run check` and `npm run build` results should only be claimed for the specific state in which they were actually run. The released state was successfully deployed and visually/smoke validated in production by the founder.

## Exact next task

**Editorial Packaging Standard Refinement**

This is initially an inspection, research, and planning gate. Do not implement runtime changes yet.

First inspect the current canonical sources, especially:

- `AGENTS.md`
- `docs/PROJECT_STATE.md`
- `docs/DOCUMENT_STATUS.md`
- `docs/V0_SCOPE.md`
- `docs/EDITORIAL_PACKAGING_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`
- `docs/COPY_STYLE.md`
- `docs/WRITING_SYSTEM.md`
- `src/content.config.ts`
- `src/components/EditorialArchive.astro`
- `src/components/EditorialArticle.astro`
- current Story frontmatter examples

Then research and evaluate the smallest durable refinement needed for Portfilo's editorial packaging system.

The refinement should specifically decide:

1. what belongs to a complete News or Story package before publication;
2. whether editorial imagery should normally be required for published News and/or Stories;
3. when image-less publication is acceptable;
4. image role and reuse rules across homepage, archive, article hero, social metadata, and newsletter/distribution surfaces;
5. 16:9 source/crop expectations where relevant;
6. alt text, credit, disclosure, provenance, and AI-generated-image requirements;
7. whether image requirements belong in editorial packaging, publishing gates, schema validation, or a combination of those layers;
8. how to avoid forcing decorative or low-quality imagery merely to satisfy a rule;
9. what should remain optional so Portfilo does not overengineer its publishing workflow.

Research strong human-edited digital publications for comparable packaging decisions, but use examples to understand editorial systems rather than imitate wording, visual style, or institutional voice.

After inspection and research, produce:

- findings;
- concrete problems in the current standard, if any;
- recommended refined contract;
- explicit non-goals;
- exact files that would need documentation or runtime changes;
- an approval gate before any implementation.

Do not redesign the site, rewrite existing articles, publish drafts, create News inventory, build a CMS, add dependencies, change distribution strategy, or implement unrelated editorial systems in this task.

## Separate workstreams

The founder will handle article development, News development, broader editorial-system work, and distribution strategy in separate chat sessions.

This next task should refine the **packaging standard and its publication contract only**, then stop at the appropriate approval gate.

## Still separate

This phase transition does not imply:

- final custom-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send;
- replacement of sample News with real reporting;
- publication of current draft Stories;
- broad-audience launch;
- search, filters, accounts, CMS, community, analytics infrastructure, or other post-v0 product expansion.
