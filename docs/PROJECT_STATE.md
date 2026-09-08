# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — NEWS/STORIES ARCHIVE UNIFICATION + SHARED ACQUISITION IMPLEMENTED / TECHNICAL + RENDERED QA PENDING**

The founder-approved implementation pass for sequence items A–C is now implemented on the working branch.

Current working-branch runtime HEAD:

`d58b6f060a24f807651276520745747296d31f54` — `Migrate homepage footer acquisition`

Implementation commits in this pass:

- `cae3cb6ddf47b09284bf1444d2849e127b01edcd` — `Unify archives and shared acquisition`;
- `d58b6f060a24f807651276520745747296d31f54` — `Migrate homepage footer acquisition`.

This records implementation only. Fresh `npm run check`, `npm run build`, production-equivalent preview, and complete multi-width rendered QA have **not** been recorded against this HEAD. GitHub exposes no attached CI status or workflow run for the implementation commit, so no automated pass may be inferred.

No deployment, merge to `main`, or release is authorized.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

`docs/PROJECT_STATE.md` owns the current phase and exact next task.

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

`main` remains the release boundary. No merge to `main` without intentional release review.

## Approved product direction

- Brand: **Portfilo**.
- Product: business and technology media product.
- **News** is the current/day-to-day editorial layer.
- **Stories** is the deeper editorial layer.
- Header: `Portfilo | News | Stories | Subscribe free`.
- `News` is a first-class `/news` destination.
- Homepage ticker label remains **Latest news**.
- Public topic taxonomy: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0 and has no geographic product promise.
- Newsletter acquisition remains primary; approved public promise is latest news, a 7-minute read, three times per week.
- Exact newsletter send days/times remain open.
- `briefing` remains rejected as public acquisition language.
- Four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Homepage current contract

The homepage remains the visual reference for the rest of the site. Do not reopen unrelated homepage decisions during later page work.

Current founder-approved desktop composition includes:

- shared 84rem / 1344px shell;
- matched 5.8rem header/footer wordmarks;
- Portfilo-blue newsletter hero;
- Instrument Sans homepage direction;
- square newsletter controls;
- hero desktop grid aligned to the same `52rem primary column + shared gap + right column` geometry used by Feature/News;
- hero signup fills that right column so its left and right edges match the blue Feature rail;
- full-bleed Latest-news ticker with fixed black `Latest news` label, light headline rail and blue metadata;
- automatic ticker movement at approximately 30 px/sec with linear transform motion when inventory is sufficient;
- ticker pauses on hover, focus and active manual interaction, retains manual horizontal scrolling, and disables automatic movement under `prefers-reduced-motion`;
- approved 16:9 monochrome Feature image with 3px blue top rule and AI-image disclosure;
- Feature + continuous blue Stories rail composition;
- Feature and homepage News share the same desktop editorial grid;
- homepage News remains one lead plus supporting items;
- development-only News fixtures remain synthetic and production never fabricates News;
- one shared dark footer-acquisition section now renders immediately before the compact SiteFooter and follows the 84rem publication grid;
- the previous homepage-local footer newsletter markup/CSS has been removed;
- compact black footer endcap remains `Stories | Standards | Privacy`.

Founder-approved contextual Feature signup copy:

**Headline:** `There's more to it than the headline.`

**Support:** `Who made the move, what changed, and the details behind it.`

CTA remains `Subscribe`.

The dedicated site-wide responsive typography/sizing audit is intentionally deferred until the remaining page structures are stable.

## Implemented News + Stories architecture

### Collection model

The existing Astro editorial collection remains one collection and requires:

```yaml
section: news | stories
```

`section`, `contentType`, and `topic` remain separate dimensions.

Current topic values:

`business / technology / startup / ai`

Optional shared editorial image metadata:

```yaml
image:
  src: /images/...
  alt: ...
  credit: ...        # optional
  generated: true    # optional, defaults false
```

Schema safeguards enforce:

- `section` required;
- published entries require `publishedAt`;
- `updatedAt` cannot precede `publishedAt`;
- `seriesOrder` requires `series`;
- News cannot be `featured`;
- News cannot define `series` or `seriesOrder`.

### Routes

Implemented:

- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`

At the current inventory level there are no published News entries. Production therefore keeps the factual News empty state and no ticker until real News exists. Development uses clearly synthetic News fixtures for layout/motion QA.

DEV-only editorial imagery may use `/images/homepage-feature-16x9.png` in existing image-capable slots for visual QA. Production still renders imagery only from real editorial metadata.

## Implemented archive and acquisition system

### 1. One archive layout for News and Stories

`src/components/EditorialArchive.astro` now owns the shared archive composition for both `/news` and `/stories`.

The two archives now share:

- page-title treatment;
- 84rem shell;
- lead package grid;
- 16:9 image treatment;
- headline/dek placement;
- metadata slot geometry;
- supporting-row geometry;
- spacing/dividers;
- optional supporting-image slot;
- breakpoint behavior.

Section-specific routes retain their own collection/query and metadata normalization. News and Stories remain different editorial products without maintaining parallel archive CSS/layout systems.

### 2. Shared full-blue archive acquisition band

The former paper-background archive signup with a blue top line is no longer rendered.

Both `/news` and `/stories` use the shared archive component's full-width Portfilo-blue acquisition band:

- full-width blue background;
- inner 84rem shell;
- desktop `52rem primary + shared gap + right column` publication grid;
- approved section-specific copy in the primary column;
- square newsletter form filling the right column;
- stacked layout at narrower widths.

Approved copy remains unchanged:

News:

- `Get Portfilo news in your inbox.`
- `The latest news on companies, startups, products, markets, AI, and technology. Three times a week.`

Stories:

- `Get Portfilo stories in your inbox.`
- `Deeper reporting, explainers, and analysis on business and technology.`

### 3. Shared site-wide footer acquisition

`src/components/FooterAcquisition.astro` now owns the dark/ink pre-footer newsletter-acquisition section.

`SiteFooter.astro` renders it on substantive site pages and excludes the dedicated `/subscribe` acquisition page plus utility confirmation/404 routes.

The shared footer acquisition:

- uses the approved main newsletter promise;
- uses an 84rem shell;
- uses the same `52rem primary + shared gap + right column` desktop publication grid;
- keeps square controls;
- stacks on narrower widths;
- remains visually separate from the compact SiteFooter.

The compact SiteFooter remains wordmark, `Stories | Standards | Privacy`, and copyright, with its horizontal shell alignment normalized to the same 84rem publication width.

Current article files still contain their legacy `article-newsletter` source blocks, but those blocks are suppressed in rendered output by `SiteFooter.astro` and replaced by the shared footer acquisition. The article templates themselves remain temporary and are still scheduled for a separate reset/design gate.

## Article pages remain a separate design gate

The current `/news/[slug]` and `/stories/[slug]` article templates remain temporary and are not the final article direction.

The founder has explicitly indicated that the article designs are being reset and do not need preservation as visual authority.

Do not infer approval for a replacement article template from the A–C implementation approval.

After archive/footer QA, the next design job remains one improved shared article template for News and Stories. It should share page geometry, metadata framework, hero placement, reading shell, notes/correction treatment, newsletter treatment, and footer alignment. Legitimate content-mode differences such as metadata fields and reading typography may remain, but separate page geometry should not.

The replacement article-layout plan requires founder approval before implementation.

## Remaining simple pages

After the article system is approved and implemented:

1. simplify `/subscribe` around the current Portfilo shell/grid/form system and remove stale `Portfilo Brief` / `No fixed schedule yet` presentation;
2. simplify `/standards` while preserving substantive standards content;
3. simplify `/privacy` while preserving factual/legal requirements;
4. keep all of these pages structurally restrained and within the same publication system.

## Responsive audit comes after page structures are stable

Do not perform the deep site-wide responsive typography/sizing audit before the remaining page structures are finished.

Each page must still be basically responsive while it is built, but the dedicated cross-site audit happens afterward across at least:

`1440 / 1366 / 1024 / 768 / 390 / 375 / 320`

That audit will reconcile typography scale, tablet-to-mobile progression, gutters, spacing, image widths, form widths, metadata, line lengths, controls, breakpoints, and overflow across the whole site.

## Approved execution sequence

A. unify `/news` with the approved `/stories` archive layout — **IMPLEMENTED, QA PENDING**;

B. replace both archive blue-line signup units with the shared full-blue grid acquisition band — **IMPLEMENTED, QA PENDING**;

C. establish the shared site-wide footer acquisition section and migrate the homepage footer-newsletter area to the same grid alignment — **IMPLEMENTED, QA PENDING**;

D. perform technical + rendered QA for those archive/footer changes — **NEXT**;

E. plan one improved shared News/Stories article template and stop for founder approval;

F. after separate approval, implement the shared article template;

G. simplify `/subscribe`, then `/standards`, then `/privacy`;

H. run the dedicated site-wide responsive typography/layout audit;

I. run final site-wide QA and release-readiness review.

## Exact next task

### D — Technical + rendered QA for archive/footer implementation

Before any further design or article-template work:

1. verify `build/portfilo-v0` and current HEAD;
2. run the relevant technical checks, including `npm run check` and `npm run build` where the local environment is available;
3. inspect `/news`, `/stories`, homepage footer acquisition, shared SiteFooter acquisition on substantive pages, and the `/subscribe` exclusion;
4. inspect both development-content and production-safe archive behavior where feasible;
5. verify that archive supporting images remain optional and 16:9 when present;
6. verify desktop/tablet/mobile stacking and no obvious horizontal overflow without turning this into the later deep site-wide responsive audit;
7. verify newsletter forms retain validation/submission behavior and square control geometry;
8. record any defects introduced by A–C;
9. do not redesign article templates, `/subscribe`, `/standards`, `/privacy`, or unrelated homepage areas during QA;
10. stop before the shared article-template design gate.

No fresh technical/rendered QA is recorded yet against the current HEAD.

## Deferred / not authorized in the current implementation state

- replacement article-template design or implementation before its separate gate;
- `/subscribe` redesign;
- `/standards` redesign;
- `/privacy` redesign;
- deep site-wide responsive typography audit;
- `/latest`;
- pagination;
- topic filters;
- search;
- CMS/database/framework changes;
- new dependencies;
- fabricated production content;
- deployment;
- merge to `main`;
- release.

## Validation authority

Source-level inspection was performed while assembling the implementation commits, including candidate-tree review and branch/HEAD verification.

This is **not** equivalent to a successful Astro type/build pass or rendered-browser QA.

Fresh full `npm run check`, `npm run build`, complete multi-width rendered QA, and production-equivalent preview have not been recorded as a complete pass against `d58b6f060a24f807651276520745747296d31f54`.

## Deployment / release boundary

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` recorded as the production branch. No explicit deployment action, domain finalization, public newsletter sending, or merge to `main` is authorized by this implementation pass.
