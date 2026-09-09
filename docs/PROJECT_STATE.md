# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**SPARSE-LAUNCH CORRECTION IMPLEMENTED ON BUILD / VALIDATION PENDING**

The previously approved website remediation passed broad rendered and functional QA, was advanced to `main`, and was then inspected on the deployed site with real production inventory.

That production inspection exposed a concrete sparse-inventory defect: Portfilo currently has no real published News and only one published Story, so the development-only fixtures disappeared and the production composition became visually incomplete.

A founder-approved correction is now implemented on `build/portfilo-v0`.

Latest runtime-changing commit:

`48602ee95668b9421d5bc1557e9563e341569e16` — `Keep archive hover within canonical palette`

Current build branch HEAD after the related scope update:

`af3a42d8ce13662d878ba9bf39f0fbdb5d5476ac`

Current `main` remains at the previously released state:

`11c9587123b0812cc8b09316dac50213858f0f01`

The founder has explicitly authorized bringing the corrected state to `main` after this correction passes its deployment/render validation gate.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard/approved decision relevant to the task
6. current source code for actual runtime behavior

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Intended Cloudflare branch model:

- `build/portfilo-v0` -> preview/test
- `main` -> production

The founder changed Cloudflare branch control to `main` during the release process. Subsequent dashboard screenshots also showed at least one `build/portfilo-v0` deployment labeled Production, so the effective deployment environment must be re-verified after the corrected state reaches `main`. Do not infer final Cloudflare correctness from branch intent alone.

## Approved product direction

- Portfilo is a business and technology publication.
- News is the current/day-to-day editorial layer.
- Stories is the deeper editorial layer.
- Public topics: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0.
- Newsletter acquisition remains important but must not dominate the publication identity.
- Approved newsletter promise: latest news, a 7-minute read, three times per week.
- Exact send days/times remain open.
- `briefing` is rejected as website acquisition language.
- No individual public author/byline system is part of v0.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Temporary sparse-launch content policy

Until real News inventory exists, clearly labeled sample News fixtures may render in production strictly as layout placeholders.

Requirements:

- sample items remain non-clickable;
- sample items do not create `/news/[slug]` routes;
- sample items do not create Article structured metadata;
- the homepage and News archive visibly identify the material as sample content and not Portfilo reporting;
- real published News automatically replaces the sample fixtures;
- this temporary sample inventory must be replaced before broad audience launch.

The homepage Stories rail may also use one clearly labeled sample Story teaser while only one real Story exists. It is not a published Story route.

## Current public route model

Keep:

- `/`
- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`
- `/robots.txt`
- `/api/subscribe`

Retired:

- `/subscribe` as a standalone page; Cloudflare redirect target is `/#newsletter`.
- `/about`; Cloudflare redirect target is `/`.
- public `/series/[slug]` presentation.

## Sparse-launch correction implemented

### Homepage

- Existing sample News fixtures now fill the layout when there are zero real published News items in both development and production.
- Sample News remains non-clickable.
- The ticker label changes to `Sample news` while fixtures are active.
- The News section shows `Sample content for layout testing. Not Portfilo reporting.` while fixtures are active.
- The existing secondary Story fallback can appear in production while only one real Story exists, and its rail label changes to `Sample story`.
- Once real News or a second real Story exists, the real editorial inventory takes precedence automatically.
- The normal populated homepage composition, typography, ticker behavior, Feature treatment, and responsive model were not redesigned.

### News archive

- The same sample News fixtures render when there are zero real published News items.
- The fixture notice is explicit that they are sample layout content and not Portfilo reporting.
- Sample News remains non-clickable and route-less.
- Real News remains clickable and routes to `/news/[slug]`.

### Archive footer consistency

- News and Stories archives keep one contextual archive acquisition block and suppress the second shared acquisition block from `SiteFooter` to avoid duplicate newsletter sections.
- Archive acquisition now uses the same dark footer visual family as the rest of Portfilo while retaining contextual archive copy.
- The compact institutional footer remains shared.

### Shared foundation

`src/styles/global.css` continues to own font loading, palette, shared shell variables, responsive gutter, focus behavior, and the narrow archive-footer visual override.

No new dependency, framework, runtime service, CMS, database, route family, or content schema field was added.

## Validation history already completed

Before the sparse-launch correction, founder-reported validation included:

- `npm run check`: PASS
- `npm run build`: PASS
- homepage responsive QA across desktop/laptop/tablet/phone: FOUNDER ACCEPTED
- `/news`, `/stories`, representative Story article, `/standards`, `/privacy`, `/confirmed`, `/404`: FOUNDER ACCEPTED
- responsive editorial typography: PASS / FOUNDER ACCEPTED
- deployed `/api/subscribe` real email -> beehiiv: PASS
- `/subscribe` -> `/#newsletter`: PASS
- `/about` -> `/`: PASS
- source audit: no individual author field or public byline system; Article structured data uses Portfilo Organization

Those passes remain valid as baseline evidence, but they do not validate the new sparse-launch correction commits.

## Current validation status

**NEW SPARSE-LAUNCH CORRECTION: SOURCE IMPLEMENTED / DEPLOYMENT + RENDER VALIDATION PENDING.**

Do not claim `npm run check`, `npm run build`, or rendered PASS for the corrected build until the new deployment/build actually succeeds and is inspected.

## Exact next task

1. Wait for Cloudflare to finish building the latest `build/portfilo-v0` state.
2. Confirm the deployment/build succeeds. The Cloudflare build command is expected to run the repository `npm run build` path.
3. Inspect the corrected homepage and `/news` on that deployment, focusing on:
   - ticker restored as clearly labeled sample content;
   - Feature + Story rail composition restored;
   - homepage News section populated by clearly labeled sample fixtures;
   - `/news` populated by clearly labeled non-clickable sample fixtures;
   - archive acquisition and compact footer visually read as one dark footer family;
   - no duplicate acquisition block.
4. If those checks pass, fast-forward `main` to the validated build HEAD. This merge/update is already founder-authorized for this correction.
5. Re-check Cloudflare branch control so `main` is the production branch and `build/portfilo-v0` is preview/test.
6. Smoke-test production `/`, `/news`, `/stories`, one real Story, newsletter signup, `/subscribe`, and `/about`.
7. Record only checks that actually ran.

If validation reveals a concrete defect, fix only that defect before advancing `main`.

## Still separate / not implied by this approval

- final custom-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send;
- replacing sample News with real reporting;
- broader audience launch.
