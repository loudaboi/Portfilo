# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — SHARED ARTICLE TEMPLATE IMPLEMENTED / VALIDATION PENDING**

Sequence items A–E are complete on `build/portfilo-v0`. Sequence item F is implemented in runtime and awaits its required technical + founder rendered validation before G begins.

Current runtime HEAD before this documentation update:

`dff79cd039de478c47583a06b5aecd5810e38c67` — `Remove obsolete article newsletter suppression`

F runtime commits:

- `ca853921ae19d36d08188090ac29a916d8584b1e` — `Add shared editorial article template`;
- `d3606dfbcb8f97357084b6e98dea3974aaedfcb8` — `Migrate News articles to shared template`;
- `87e9b2b083622b80f9a66652806e5f8ed4a5d924` — `Migrate Story articles to shared template`;
- `dff79cd039de478c47583a06b5aecd5810e38c67` — `Remove obsolete article newsletter suppression`.

No deployment, merge to `main`, or release is authorized.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

Do not create another execution-plan or roadmap file. This document owns current phase and next task.

## Branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

`main` remains the release boundary.

## Approved product direction

- Brand: **Portfilo**.
- Product: business and technology media product.
- **News** is the current/day-to-day editorial layer.
- **Stories** is the deeper editorial layer.
- Header: `Portfilo | News | Stories | Subscribe free`.
- Public topic taxonomy: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0.
- Newsletter acquisition remains primary.
- Approved main newsletter promise: latest news, a 7-minute read, three times per week.
- Exact newsletter send days/times remain open.
- `briefing` remains rejected as public acquisition language.
- Four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Current implemented publication system

### Homepage

The homepage remains the visual reference for the rest of the site. Current approved characteristics include:

- shared 84rem / 1344px shell;
- matched 5.8rem header/footer wordmarks;
- Portfilo-blue newsletter hero;
- Instrument Sans homepage direction;
- square newsletter controls;
- desktop publication grid based on a 52rem primary column + shared gap + right column;
- full-bleed Latest-news ticker;
- restrained automatic ticker movement only when inventory is sufficient, with hover/focus/manual-interaction pause and `prefers-reduced-motion` support;
- 16:9 Feature imagery with a thin Portfilo-blue top rule;
- Feature + continuous blue Stories rail;
- homepage News sourced only from News;
- development-only synthetic News fixtures when real published News is absent;
- production never fabricates News;
- one shared dark footer-acquisition section before the compact SiteFooter;
- compact SiteFooter: wordmark | Stories | Standards | Privacy | copyright.

Do not reopen unrelated homepage design during later page work.

### News + Stories collection and routes

The existing Astro editorial collection remains one collection with:

```yaml
section: news | stories
```

`section`, `contentType`, and `topic` remain separate dimensions.

Current topics:

`business / technology / startup / ai`

Optional editorial image metadata remains:

```yaml
image:
  src: /images/...
  alt: ...
  credit: ...        # optional
  generated: true    # optional
```

Implemented routes:

- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`

At current inventory there are no published News entries. Production stays factual and does not fabricate News. Development may use clearly synthetic News fixtures on archive/homepage surfaces, but no fake News article route should be created merely for presentation.

### Shared archive system

`src/components/EditorialArchive.astro` owns the archive presentation for both `/news` and `/stories`.

Both archives share:

- page-title treatment;
- 84rem shell;
- lead package grid;
- 16:9 image treatment;
- headline/dek placement;
- metadata-slot geometry;
- supporting-row geometry;
- spacing/dividers;
- optional supporting-image slot;
- breakpoint behavior;
- full-width blue archive acquisition band.

News and Stories retain section-specific data and metadata values without separate layout systems.

The full-blue archive signup uses approved section-specific copy.

News:

- `Get Portfilo news in your inbox.`
- `The latest news on companies, startups, products, markets, AI, and technology. Three times a week.`

Stories:

- `Get Portfilo stories in your inbox.`
- `Deeper reporting, explainers, and analysis on business and technology.`

Production empty-archive behavior intentionally keeps the contextual blue archive signup and suppresses the redundant generic dark footer signup when an archive has zero items.

### Shared footer acquisition

`src/components/FooterAcquisition.astro` owns the dark/ink pre-footer newsletter acquisition.

`src/components/SiteFooter.astro` renders it by default on substantive pages and excludes:

- `/subscribe`;
- `/confirmed`;
- `/404`;
- any page that explicitly disables it for a justified local acquisition state.

The component uses the 84rem shell and the same 52rem-primary/right-column desktop grid as the publication system. Controls remain square and the layout stacks at narrower widths.

The compact SiteFooter remains visually separate and aligned to the same 84rem publication shell.

## D — Archive/acquisition technical + rendered QA

**COMPLETE.**

Recorded validation against the A–D runtime state:

- founder visual inspection: PASS;
- `npm run check`: PASS;
- `npm run build`: PASS;
- source inspection verified NewsletterSignup form behavior remains on the existing `/api/subscribe` contract;
- `/subscribe` remains excluded from the shared footer acquisition;
- archive supporting images remain optional and 16:9 when present;
- one production-only empty-News double-acquisition edge case was discovered during QA and fixed in `80349a49d6aa484d320d51b648c1964e2c3f7697`.

The later dedicated full-site responsive audit is still separate and has not been completed.

## E — Shared article-template design gate

**COMPLETE. FOUNDER APPROVED.**

Approved decision job:

> choose one shared Portfilo article geometry that supports both fast News and deeper Stories without maintaining two parallel article design systems.

Approved structure:

1. article header inside the 84rem shell;
2. compact classification row;
3. large Instrument Sans headline;
4. dek immediately below;
5. compact author/date metadata below the dek;
6. optional restrained 16:9 hero with blue top rule, credit, and generated-image disclosure where applicable;
7. centered narrow reading shell around the existing 42–44rem range;
8. News body may use Instrument Sans while Stories may use Source Serif 4;
9. one shared methodology/correction geometry;
10. no legacy inline article newsletter, using the already-approved shared dark footer acquisition once;
11. no new related-content, popularity, comments, author-bio, share-toolbar, table-of-contents, reading-time, custom-motion, or special one-off feature system in this pass.

The approved plan was informed by repository constraints and structural patterns in current The Verge, WIRED, and Rest of World article experiences. References were used for information order and tradeoffs, not visual copying.

## F — Shared article-template implementation

**IMPLEMENTED. VALIDATION PENDING.**

`src/components/EditorialArticle.astro` now owns article presentation for both `/news/[slug]` and `/stories/[slug]`.

Shared implementation includes:

- one 84rem article shell;
- one classification/headline/dek/metadata hierarchy;
- one optional 16:9 hero implementation;
- one image-credit and generated-image-disclosure implementation;
- one 44rem reading measure;
- one shared heading/link/list/blockquote/code/media spacing contract;
- one methodology/correction system;
- one responsive header/hero/body implementation;
- shared dark footer acquisition from `SiteFooter.astro`.

Section-specific route files retain only legitimate data differences:

News:

- `News / Topic / Published` classification values;
- author and optional Updated metadata;
- Instrument Sans reading mode.

Stories:

- `Content type / Topic / Published` classification values;
- author, optional Updated, and optional Series metadata;
- Source Serif 4 reading mode.

Both route files continue to own:

- `getStaticPaths` collection filtering;
- SEO/page metadata passed to `SiteHead`;
- section-specific metadata normalization;
- rendered Markdown content.

The old route-local article CSS and inline newsletter blocks have been removed. The obsolete SiteFooter rule that existed only to hide those old blocks has also been removed.

No dependency, schema, framework, CMS, database, route, production-content, archive, homepage, or utility-page changes were made by F.

## Remaining sequence

A. unify `/news` with `/stories` archive layout — **COMPLETE**;

B. shared full-blue archive acquisition band — **COMPLETE**;

C. shared site-wide footer acquisition + homepage migration — **COMPLETE**;

D. archive/acquisition technical + rendered QA — **COMPLETE**;

E. shared article-template design gate — **COMPLETE / APPROVED**;

F. shared article-template implementation — **IMPLEMENTED / VALIDATION PENDING**;

G. simplify `/subscribe`, then `/standards`, then `/privacy` — **NOT STARTED**;

H. dedicated site-wide responsive typography/layout audit across at least `1440 / 1366 / 1024 / 768 / 390 / 375 / 320` — **NOT STARTED**;

I. final site-wide QA and release-readiness review — **NOT STARTED**.

## Exact next task

Validate F before starting G.

Required:

1. pull the latest `build/portfilo-v0`;
2. run `npm run check`;
3. run `npm run build`;
4. render and inspect at least one real `/stories/[slug]` page on desktop and mobile;
5. verify headline/dek/metadata hierarchy, 16:9 hero behavior where present, narrow reading measure, Source Serif Story body, methodology/correction rendering where content exists, and exactly one shared dark footer acquisition;
6. if a real or existing DEV News content entry provides a `/news/[slug]` route, inspect it too; do not fabricate a News article solely for visual QA;
7. report any F regression before beginning G.

Because there are currently no published News entries, absence of a production News article route is expected and is not itself a defect. Astro check/build plus the shared-component architecture provide technical coverage until real News article inventory exists.

Do not begin G until the F checks and founder rendered review pass.

## Deferred / not authorized now

- `/subscribe` redesign before F validation;
- `/standards` redesign before its G sub-gate;
- `/privacy` redesign before its G sub-gate;
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

## Deployment / release boundary

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` recorded as the production branch. No explicit deployment action, domain finalization, public newsletter sending, merge to `main`, or release is authorized by A–F.
