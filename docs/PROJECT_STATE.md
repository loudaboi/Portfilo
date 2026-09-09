# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**CORRECTED + PERFORMANCE-OPTIMIZED V0 RELEASED TO `main` / PRODUCTION VERIFICATION PENDING**

The founder approved the responsive typography repair, archive corrections, homepage Story-inventory behavior, whole-site performance pass, and homepage ticker spacing on the deployed build-branch preview.

The validated working state was fast-forwarded to `main` on 2026-09-09.

Latest runtime-changing commit:

`9afec05851c130d3b4cb135dae591edb94f620b8` — `Pass optimized News image URL to metadata`

Release boundary commit before this documentation sync:

`e126165028e77f1103c98ea4376ac09b7f43db78` — `Record performance pass validation gate`

`main` and `build/portfilo-v0` should remain aligned after this documentation sync. Do not infer Cloudflare Production branch behavior from repository intent alone; verify it in Cloudflare.

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

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Intended Cloudflare model:

- `build/portfilo-v0` -> preview/test
- `main` -> production

Cloudflare branch behavior appeared inconsistent earlier in this release cycle. Re-verify that the effective Production branch is `main` and that the latest `main` deployment succeeds.

## Approved product direction

- Portfilo is a business and technology publication.
- News is the current/day-to-day editorial layer.
- Stories is the deeper editorial layer.
- Public topics: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0.
- Newsletter acquisition remains important but must not dominate publication identity.
- Approved newsletter promise: latest news, a 7-minute read, three times per week.
- Exact send days/times remain open.
- `briefing` is rejected as public acquisition language.
- No individual public author/byline system is part of v0.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Temporary pre-audience content policy

### News

Until real News inventory exists, the existing synthetic News fixtures may render strictly as layout placeholders.

Requirements:

- visibly identify them as sample content, not Portfilo reporting;
- keep them non-clickable;
- do not create fake `/news/[slug]` routes;
- do not create Article metadata for fixtures;
- real published News replaces them automatically;
- replace them before broad audience launch.

### Stories

The founder has approved temporarily exposing the existing Story drafts so the Stories archive uses the Story inventory already in the repository.

Draft handling remains explicit:

- `status: draft` is not silently changed to `published`;
- draft items are visibly labeled `Draft`;
- draft Story routes use `noindex, nofollow`;
- draft routes omit published-story canonical/social/article metadata;
- published Stories keep normal metadata behavior.

Current Story inventory is four files: one published Story and three draft Story previews.

The homepage primary Feature remains published-only. The adjacent Stories rail prefers an existing real Story, including an explicitly labeled draft during this pre-audience period, before falling back to a synthetic sample Story.

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

- `/subscribe` as a standalone page; redirect target `/#newsletter`.
- `/about`; redirect target `/`.
- public `/series/[slug]`.

## Released correction state

### Archive acquisition and footer

Canonical archive structure is restored:

1. editorial lead;
2. contextual archive acquisition in Portfilo blue;
3. supporting archive rows when they exist;
4. normal shared footer acquisition;
5. compact institutional footer.

`EditorialArchive.astro` renders the supporting stream only when supporting items exist, preventing dead empty space.

### Responsive typography

The founder visually approved the repaired responsive typography state.

Continuous fluid scaling now governs:

- News/Stories archive titles;
- archive lead and supporting headlines;
- article titles and article-header spacing;
- Standards and Privacy titles;
- Confirmed and 404 titles.

Article body typography, reading measure, hero composition, Story TOC behavior, homepage editorial headline typography, masthead, newsletter typography, and footer typography were not redesigned.

### Homepage Story rail

- primary Feature selection remains published-only;
- the secondary Stories rail uses existing Story inventory first;
- an existing draft can appear during the approved pre-audience period and is labeled `Draft story`;
- the synthetic Story teaser is a last fallback only.

### News and Stories staging

- sample News fixtures remain clearly labeled and non-clickable when there are zero real News items;
- real News replaces fixtures automatically;
- `/stories` includes the four existing Story entries during pre-audience staging;
- draft Story pages remain noindex/nofollow and without published-story social/canonical metadata.

## Released performance pass

### Astro CSS behavior

The custom `build.inlineStylesheets = "always"` override was removed. Portfilo now uses Astro's default CSS handling. No custom Vite chunking or additional CSS tooling was added.

### Targeted primary-navigation prefetch

Astro built-in prefetch is enabled only for the persistent primary header destinations using `data-astro-prefetch="viewport"`:

- Portfilo wordmark -> `/`
- News -> `/news`
- Stories -> `/stories`

There is no `prefetchAll`, article-grid prefetching, custom prefetch JavaScript, or `ClientRouter`.

### Native Astro editorial-image pipeline

The approved editorial source asset is now:

`src/assets/editorial/homepage-feature-16x9.png`

The old unprocessed public copy was removed.

The Content Collection image schema uses Astro's native `image()` helper, and current editorial renderers use `astro:assets` `<Image />` for:

- homepage Feature;
- homepage lower News image;
- archive lead images;
- archive supporting images;
- article heroes.

Lead/LCP candidates use priority; lower/supporting images keep lazy/default loading behavior. No external image service, new dependency, custom responsive-image abstraction, or manual output-size matrix was added.

### Fingerprinted-asset caching

`public/_headers` applies long-lived immutable browser caching only to:

`/_astro/*`

No broad cache rule was added for HTML, public routes, redirects, or `/api/subscribe`.

### Homepage ticker spacing

The ticker has zero top margin and preserves bottom breathing room.

Approved composition:

`blue newsletter band -> ticker -> breathing room -> Feature`

Ticker height, animation, content, typography, and interaction behavior were not changed.

## Explicitly not added

This pass did not add:

- React or another frontend framework;
- SPA routing / `ClientRouter`;
- a service worker;
- Cloudflare Images or another image CDN;
- a performance or caching library;
- custom lazy-loading JavaScript;
- self-hosted font migration;
- broad Cloudflare Cache Rules;
- speculative article-link prefetching;
- analytics or RUM solely for this optimization.

If future slowness is observed, inspect a real deployed network waterfall before introducing another mechanism.

## Validation evidence

Founder-reported/observed validation before release includes:

- earlier `npm run check`: PASS baseline;
- earlier `npm run build`: PASS baseline;
- homepage responsive QA: accepted;
- News / Stories / Story article / Standards / Privacy / Confirmed / 404 rendered QA: accepted;
- responsive typography correction: founder visually approved;
- archive/footer corrections: founder visually approved;
- performance + ticker state on the deployed build-branch preview: founder reported `everything looks good so far` and explicitly passed the state;
- deployed `/api/subscribe` real email -> beehiiv: PASS from the earlier release cycle;
- `/subscribe` -> `/#newsletter`: PASS from the earlier release cycle;
- `/about` -> `/`: PASS from the earlier release cycle.

The current performance pass was source-audited before release. A separate current local `npm run check` / `npm run build` result was not reported in chat, so do not claim one beyond the successful deployed preview observed by the founder.

## Current validation status

**FOUNDER-APPROVED BUILD PREVIEW / FAST-FORWARDED TO `main` / PRODUCTION DEPLOYMENT + SMOKE VERIFICATION PENDING.**

The GitHub fast-forward to `main` succeeded without force.

## Exact next task

1. Verify in Cloudflare that Production branch is `main`.
2. Confirm the latest `main` deployment succeeds.
3. Smoke-test production:
   - `/`
   - `/news`
   - `/stories`
   - one published Story
   - one draft Story preview
   - newsletter signup
   - `/subscribe`
   - `/about`
4. Confirm on production:
   - ticker remains directly below the blue newsletter band;
   - archive typography/footer corrections remain intact;
   - optimized editorial images render correctly;
   - primary navigation feels responsive;
   - no visible regression from the approved build preview.
5. Record only production checks actually performed.

If production differs from the approved preview, treat it as a concrete deployment/runtime defect. Do not reopen the visual direction or add another optimization by guess.

## Still separate

This release does not imply:

- final custom-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send;
- replacing sample News with real reporting;
- changing draft Story status to `published` without a separate editorial publication decision;
- broad audience launch.
