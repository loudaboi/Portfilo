# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**PERFORMANCE PASS IMPLEMENTED ON BUILD / VALIDATION PENDING**

The founder visually approved the responsive typography and archive correction state for this pass, then reported that the site still felt slow as a whole, including page-to-page navigation and image loading.

A final whole-site performance audit was completed before implementation. The approved approach was to inspect broadly but change narrowly, preserving the static Astro architecture and avoiding a framework, SPA router, service worker, image CDN, performance package, or broad cache layer.

Latest runtime-changing commit:

`9afec05851c130d3b4cb135dae591edb94f620b8` — `Pass optimized News image URL to metadata`

Current `main` remains:

`11c9587123b0812cc8b09316dac50213858f0f01`

Do not fast-forward `main` until the current performance state passes build, render, and deployed-preview validation and the founder explicitly approves the release boundary.

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

Cloudflare branch behavior appeared inconsistent in dashboard screenshots during this release cycle. Re-verify the effective Production branch when the validated state is released; do not infer it from intent alone.

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

Until real News inventory exists, the existing synthetic News fixtures may render in production strictly as layout placeholders.

Requirements:

- visibly identify them as sample content, not Portfilo reporting;
- keep them non-clickable;
- do not create fake `/news/[slug]` routes;
- do not create Article metadata;
- real published News replaces them automatically;
- replace them before broad audience launch.

### Stories

The founder has approved temporarily exposing the existing Story drafts so the Stories archive uses the Story inventory already in the repository.

Draft handling remains explicit:

- `status: draft` is not silently changed to `published`;
- draft items are visibly labeled `Draft` in archive/article classification;
- draft Story routes use `noindex, nofollow`;
- draft routes omit canonical/social/article metadata intended for published work;
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

## Current correction state

### Archive acquisition and footer

Canonical archive structure is restored:

1. editorial lead;
2. contextual archive acquisition in Portfilo blue;
3. supporting archive rows when they exist;
4. normal shared footer acquisition;
5. compact institutional footer.

`EditorialArchive.astro` renders the supporting stream only when supporting items exist, preventing dead empty space.

### Responsive typography

The founder visually approved the repaired responsive typography state before the performance pass.

Current behavior keeps continuous fluid scaling for:

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

## Approved performance pass

The performance audit identified three concrete inefficiencies in the current implementation plus one founder-requested composition adjustment.

### 1. Astro CSS defaults restored

The custom:

`build.inlineStylesheets = "always"`

has been removed from `astro.config.mjs`.

Portfilo now uses Astro's default CSS handling instead of forcing every stylesheet into each HTML document. No custom chunking, Vite configuration, or additional CSS tooling was added.

### 2. Targeted primary-navigation prefetch

Astro built-in prefetch is enabled.

Only the persistent primary header destinations use `data-astro-prefetch="viewport"`:

- Portfilo wordmark -> `/`
- News -> `/news`
- Stories -> `/stories`

There is no `prefetchAll`, no article-grid prefetching, no custom prefetch JavaScript, and no `ClientRouter`.

### 3. Native Astro editorial-image pipeline

The approximately 2.2 MB canonical editorial PNG was previously stored under `public/images/`, where Astro served it unchanged.

The approved source asset is now:

`src/assets/editorial/homepage-feature-16x9.png`

The unprocessed duplicate at:

`public/images/homepage-feature-16x9.png`

has been removed.

The Content Collection image schema now uses Astro's native `image()` helper, so local editorial images resolve as `ImageMetadata`.

The existing image renderers now use `astro:assets` `<Image />`:

- homepage Feature: constrained 864 x 486, priority;
- homepage lower News image: constrained 864 x 486, default lazy behavior;
- archive lead image: constrained 864 x 486, priority;
- archive supporting image: constrained 640 x 360, default lazy behavior;
- article hero: constrained 864 x 486, priority.

No external image service, new dependency, Picture abstraction, AVIF matrix, custom responsive-image component, or manually maintained size set was added.

The Story/News article metadata boundary now passes the underlying generated image URL string to `SiteHead`, while the visual renderer receives `ImageMetadata`.

### 4. Fingerprinted-asset caching only

`public/_headers` now adds:

```text
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
```

This applies only to Astro's fingerprinted build assets.

No broad cache rule was added for HTML, public routes, redirects, or `/api/subscribe`.

### 5. Homepage ticker spacing

The ticker now has zero top margin and preserves its existing bottom breathing room at desktop and phone widths.

Intended composition:

`blue newsletter band -> ticker -> breathing room -> Feature`

Ticker height, animation, content, typography, and interaction behavior were not changed.

## Explicitly not added

The current performance pass does not add or authorize:

- React or another frontend framework;
- `ClientRouter` or SPA navigation;
- a service worker;
- Cloudflare Images or another image CDN;
- a performance or caching library;
- custom lazy-loading JavaScript;
- self-hosted font migration;
- broad Cloudflare Cache Rules;
- speculative prefetching of article/content links;
- analytics or RUM solely for this pass.

If the site still feels materially slow after this pass, inspect a real deployed network waterfall before introducing another performance mechanism.

## Prior validation evidence

Before the current performance-changing commits, founder-reported validation included:

- `npm run check`: PASS
- `npm run build`: PASS
- homepage responsive QA: founder accepted
- News / Stories / Story article / Standards / Privacy / Confirmed / 404 rendered QA: founder accepted
- responsive typography correction: founder visually approved for this pass
- deployed `/api/subscribe` real email -> beehiiv: PASS
- `/subscribe` -> `/#newsletter`: PASS
- `/about` -> `/`: PASS

These are baseline results only. They do not validate the current performance pass.

## Current validation status

**SOURCE AUDIT COMPLETE / PERFORMANCE IMPLEMENTATION COMPLETE / BUILD + DEPLOYED-PREVIEW VALIDATION PENDING.**

Source verification confirms:

- Astro's forced-inline CSS override is removed;
- only the three primary header destinations opt into viewport prefetch;
- the Content Collection uses native image metadata;
- homepage, archive, and article editorial renderers use Astro `<Image />`;
- the approved PNG exists under `src/assets/editorial`;
- the old `public/images/homepage-feature-16x9.png` path no longer exists on the working branch;
- `/_astro/*` has the narrow immutable cache rule;
- the ticker has no top margin at base or phone widths.

GitHub exposes no commit status checks for the latest runtime commit, so no CI/build pass can be inferred from GitHub.

Do not claim `npm run check`, `npm run build`, generated WebP output, deployed cache headers, or navigation-speed improvement until those are actually observed for the current state.

## Exact next task

1. Pull the latest `build/portfilo-v0` state locally.
2. Run:
   - `npm run check`
   - `npm run build`
3. Stop and fix only concrete errors if either command fails.
4. On the latest Cloudflare build-branch preview, inspect:
   - `/`
   - `/news`
   - `/stories`
   - one published Story article
   - one draft Story article
5. Confirm the approved visual state remains intact:
   - archive typography and footers remain correct;
   - Story draft labels remain visible where expected;
   - homepage primary Feature remains published-only;
   - ticker sits directly below the blue newsletter band with breathing room below it;
   - responsive layouts remain stable on desktop and phone.
6. In browser DevTools Network, confirm editorial images are requested from fingerprinted `/_astro/` output and use generated responsive image markup rather than requesting `/images/homepage-feature-16x9.png`.
7. Confirm the selected `/_astro/` asset response includes:
   - `Cache-Control: public, max-age=31536000, immutable`
8. Compare cold and warm navigation through:
   - Home -> News
   - News -> Stories
   - Stories -> Home
   - archive -> article -> archive
9. Confirm the primary navigation feels materially improved without layout or interaction regressions.
10. If this performance state passes, obtain explicit founder approval to advance this new runtime state to `main`.
11. After release approval, fast-forward `main`, verify Cloudflare Production branch is `main`, confirm deployment success, and smoke-test production.
12. Record only checks actually performed.

If validation still shows material slowness, do not add another optimization by guess. Capture the deployed network waterfall and identify the remaining bottleneck first.

## Still separate

The current performance implementation approval does not imply:

- release to `main`;
- final custom-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send;
- replacing sample News with real reporting;
- changing draft Story status to `published` without a separate editorial publication decision;
- broad audience launch.
