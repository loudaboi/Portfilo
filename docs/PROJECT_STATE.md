# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — ARCHIVE + ACQUISITION QA COMPLETE / SHARED ARTICLE TEMPLATE DESIGN GATE OPEN**

Sequence items A–D are complete on `build/portfilo-v0`.

Validated runtime HEAD before this documentation update:

`80349a49d6aa484d320d51b648c1964e2c3f7697` — `Guard empty archive acquisition state`

A–D runtime commits:

- `cae3cb6ddf47b09284bf1444d2849e127b01edcd` — `Unify archives and shared acquisition`;
- `d58b6f060a24f807651276520745747296d31f54` — `Migrate homepage footer acquisition`;
- `80349a49d6aa484d320d51b648c1964e2c3f7697` — `Guard empty archive acquisition state`.

D validation is complete:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**;
- local `npm run build`: **PASS**;
- source-level review found and fixed one production-only empty-News acquisition duplication before closure;
- no dependency, content-schema, framework, CMS, database, or unrelated homepage changes were introduced.

GitHub still exposes no attached automated commit-status checks or workflow runs for this branch. That does not invalidate the recorded local Astro checks.

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

Do not reopen unrelated homepage design during article work.

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

At current inventory there are no published News entries. Production stays factual and does not fabricate News. Development may use clearly synthetic News fixtures and the development-only editorial image for layout QA.

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

## D — Technical + rendered QA

**COMPLETE.**

Recorded validation against the A–D runtime state:

- founder visual inspection of the implemented archive/footer changes: PASS;
- `npm run check`: PASS;
- `npm run build`: PASS;
- no obvious archive/footer visual regression reported by founder;
- source inspection verified NewsletterSignup form behavior remains on the existing `/api/subscribe` contract;
- `/subscribe` remains excluded from the shared footer acquisition;
- archive supporting images remain optional and 16:9 when present;
- one production-only empty-News double-acquisition edge case was discovered during QA and fixed in `80349a49d6aa484d320d51b648c1964e2c3f7697`.

The later dedicated full-site responsive audit is still separate and has not been completed.

## E — Shared article-template design gate

**ACTIVE. DESIGN/PLAN ONLY. IMPLEMENTATION NOT YET AUTHORIZED.**

The existing `/news/[slug]` and `/stories/[slug]` layouts are temporary. The founder explicitly said the article designs are being reset and do not need preservation as visual authority.

The decision job is:

> choose one shared Portfilo article geometry that supports both fast News and deeper Stories without maintaining two parallel article design systems.

### Evidence basis

Repository constraints:

- homepage/archive visual language is sans-led, restrained, 84rem-shell based, square, and structurally blue rather than decorative;
- Source Serif 4 is available for meaningful long-form reading contrast, not for arbitrary decoration;
- current article metadata/content fields already support topic, content type, author, published/updated dates, series, methodology, correction, image credit, and generated-image disclosure;
- current article pages already prove a narrow reading column works technically, but their present composition is not visual precedent;
- old sticky article metadata rail is explicitly rejected as precedent.

External reference patterns reviewed for structure, not visual copying:

- current The Verge news articles use top-loaded topic/context, headline, dek, byline/date, hero media, then body;
- current WIRED articles similarly front-load author/category/date, headline/dek and hero before a narrow reading experience;
- Rest of World uses restrained editorial hierarchy, direct byline/date treatment, strong hero media, and conventional reading flow for global technology reporting.

### Recommended shared article structure

One narrow shared Astro article component should own geometry and presentation for both routes. Route files should retain only collection/query and section-specific data normalization.

Proposed structure:

1. **Article header inside the 84rem shell**
   - compact classification row at the top;
   - large Instrument Sans headline;
   - dek immediately below;
   - compact author/date metadata row below the dek;
   - no sticky side rail;
   - no decorative eyebrow stack or numbered scaffolding.

2. **Shared metadata framework**
   - News: `News / Topic / Published` plus author and Updated when present;
   - Stories: `Content type / Topic / Published` plus author, Updated, and Series when present;
   - same visual slots and hierarchy, different values only where editorially legitimate.

3. **Hero media**
   - optional, never fabricated in production;
   - canonical 16:9 landscape;
   - restrained centered maximum width within the 84rem shell rather than a full-viewport or arbitrary-tall image;
   - thin Portfilo-blue top rule;
   - image credit/caption directly below when provided;
   - generated-image disclosure preserved.

4. **Reading shell**
   - one centered narrow reading column around the existing 42–44rem range;
   - News body may remain Instrument Sans for faster current-news reading;
   - Stories may use Source Serif 4 for deeper long-form reading contrast;
   - headings, links, blockquotes, lists, code and embedded media share one spacing/system contract.

5. **Methodology and corrections**
   - same shared notes component/geometry after the body;
   - blue rule for methodology;
   - Portfilo red reserved for correction treatment;
   - no card boxes unless a real information problem requires one.

6. **Article ending**
   - no separate legacy inline newsletter block;
   - use the already-approved shared dark footer acquisition once;
   - no new related-content, popularity, comments, author-bio, share-toolbar, or recommendation module in this pass unless separately justified and approved.

7. **Responsive behavior**
   - basic responsiveness is part of implementation;
   - header metadata wraps cleanly;
   - headline/dek scale down without horizontal overflow;
   - hero becomes full available shell width on small screens;
   - reading measure remains comfortable;
   - deep cross-site responsive tuning remains sequence H.

### Technical shape if approved

Prefer one narrow shared component, likely `src/components/EditorialArticle.astro`, rather than parallel News/Stories article CSS.

The two route files should continue to own:

- `getStaticPaths` collection filtering;
- page metadata/SEO values;
- section-specific metadata normalization;
- rendered Markdown content.

No dependency, schema, framework, CMS, database, production-content, or routing changes are required for the article-template reset.

### Explicitly not part of E/F unless separately approved

- related stories;
- most-popular modules;
- comments;
- share buttons/toolbars;
- sticky metadata/navigation rails;
- table of contents;
- author biography system;
- reading-time calculation;
- custom article motion;
- special one-off feature templates;
- new public copy;
- new dependencies.

## Remaining sequence

A. unify `/news` with `/stories` archive layout — **COMPLETE**;

B. shared full-blue archive acquisition band — **COMPLETE**;

C. shared site-wide footer acquisition + homepage migration — **COMPLETE**;

D. technical + rendered QA — **COMPLETE**;

E. approve/reject/refine the shared article-template plan above — **CURRENT GATE**;

F. after separate explicit approval, implement the shared article template;

G. simplify `/subscribe`, then `/standards`, then `/privacy`;

H. run the dedicated site-wide responsive typography/layout audit across at least `1440 / 1366 / 1024 / 768 / 390 / 375 / 320`;

I. final site-wide QA and release-readiness review.

## Exact next task

Founder review of the E article-template plan above.

Do **not** implement the article reset until the founder explicitly approves E.

If approved, re-verify branch/HEAD before runtime edits and implement only the shared article-template contract.

## Deferred / not authorized now

- article implementation before E approval;
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

## Deployment / release boundary

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` recorded as the production branch. No explicit deployment action, domain finalization, public newsletter sending, merge to `main`, or release is authorized by the completed A–D work or the current E planning gate.
