# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — F COMPLETE / G1 SUBSCRIBE IMPLEMENTED / VALIDATION PENDING**

Sequence items A–F are complete on `build/portfilo-v0`. Sequence item G is active. G1 `/subscribe` has been founder-approved and implemented, but it must pass local technical checks plus founder rendered review before G2 `/standards` begins.

Current unvalidated runtime HEAD before this documentation update:

`adaabb4ab6ad4a37e67095363df7b1146a89bd96` — `Simplify subscribe page`

Last fully validated runtime HEAD:

`7ffc3021c93a8a512b1c220cea8ef7b4361d611b` — `Restore article header divider`

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
- Product: business and technology publication.
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

The homepage remains the visual reference for broad publication surfaces. Current approved characteristics include:

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

Current public topics:

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
- optional supporting image slot;
- breakpoint behavior;
- full-width blue archive acquisition band.

News and Stories retain section-specific data and metadata values without separate layout systems.

Approved archive acquisition copy remains:

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

**COMPLETE, THEN AMENDED BY FOUNDER REVIEW DURING F.**

The original E decision established one shared article system for News and Stories, an optional restrained 16:9 hero, narrow reading measure, shared notes/corrections, legitimate News-vs-Stories reading-font differences, and no parallel article CSS systems.

The original E scope excluded a table of contents. During rendered F review, the founder explicitly reopened the article composition because the left-aligned header continued to feel visually unbalanced. The founder supplied the current OpenAI article treatment as a structural reference and explicitly approved this later correction:

- center the article classification/headline/dek package and any remaining supplemental metadata;
- keep the restrained 54rem 16:9 hero;
- keep the body around 41–42rem;
- add a Stories-only in-page section navigation when enough real `h2` sections exist;
- keep News simpler without that rail;
- defer article audio/listen functionality rather than adding it to F.

During the same rendered F review, the founder later removed visible article bylines because the author block created awkward header positioning. This is a presentation decision only: the canonical content `author` field remains internal editorial metadata and continues to feed article structured data/SEO where applicable.

The founder also approved a dedicated thin neutral divider between the article header package and an optional hero image. The divider is independent of author/update/series metadata and does not replace the hero's existing blue top rule.

These later founder decisions supersede the original E exclusion of table-of-contents navigation and visible author metadata in the article header. They do not authorize unrelated OpenAI-style features, visual copying, audio, sharing, related content, or new dependencies.

## F — Revised shared article-template implementation

**COMPLETE.**

`src/components/EditorialArticle.astro` remains the single article presentation component for `/news/[slug]` and `/stories/[slug]`.

Current shared article contract:

- centered classification row;
- centered Instrument Sans headline;
- centered dek;
- visible article author/byline omitted;
- supplemental article metadata renders only when genuinely present, such as Updated or Series;
- internal `author` content metadata remains retained and continues to feed `SiteHead` article metadata;
- article header max width: 54rem;
- headline max width: 54rem with a restrained desktop maximum around 4.35rem for more resilient multi-line titles;
- optional 16:9 hero max width: 54rem;
- thin neutral structural divider between header package and hero when a hero is present;
- thin Portfilo-blue hero top rule;
- image credit and generated-image disclosure preserved;
- reading measure: 41.5rem;
- News uses Instrument Sans reading mode;
- Stories use Source Serif 4 reading mode;
- shared headings, links, lists, blockquotes, code/media spacing, methodology and correction treatment;
- one shared dark footer acquisition at the article end;
- no route-local article CSS and no inline article newsletter block.

### Stories in-page section navigation

Stories receive Markdown headings from Astro `render()`.

The shared component renders the `In this story` rail only when:

- `mode === "stories"`; and
- the article has at least three real level-2 (`h2`) headings.

Behavior:

- desktop: left in-page navigation + narrow main reading column;
- rail links are generated from existing Markdown heading slugs/text;
- rail is sticky while the article is read on sufficiently wide screens;
- below 56rem the rail is hidden and the reading column returns to the centered single-column layout;
- no headings are invented solely to make the navigation appear.

The published Story `/stories/what-actually-makes-starting-a-business-hard` contains no `h2` headings and therefore intentionally shows no rail.

The existing DEV-visible draft `/stories/what-higher-value-work-means-in-philippine-it-bpm` contains six `h2` headings and remains the current rendered test case for the rail.

### Explicitly deferred from F

Do not add without a later approved requirement:

- listen-to-article / TTS / audio generation;
- audio player;
- share toolbar;
- related stories;
- most-popular modules;
- comments;
- author biography system;
- reading-time calculation;
- custom article motion;
- special one-off feature templates;
- new dependencies.

Audio was discussed during founder review and intentionally deferred because player UI is simple but reliable article audio requires a separate source/generation and publishing workflow decision.

### F runtime commits

Initial shared article implementation:

- `ca853921ae19d36d08188090ac29a916d8584b1e` — shared article component;
- `d3606dfbcb8f97357084b6e98dea3974aaedfcb8` — News route migration;
- `87e9b2b083622b80f9a66652806e5f8ed4a5d924` — Stories route migration;
- `dff79cd039de478c47583a06b5aecd5810e38c67` — obsolete article-newsletter suppression cleanup.

Founder-review geometry corrections:

- `52eed7f71fab1ebed46ee0545ff270b167f2dde6` — tighten article geometry;
- `5d8ca03d8aa2fa8141d0e1387a45bae1d836222a` — align header and hero frame;
- `9dcbfc6bb1c2b58d0c04afd6bde0b3a75687e441` — balance internal header widths;
- `98ee5dfdb20d01735485a34031138730ef021ce9` — reduce headline scale and use full 54rem title frame.

Current structural correction:

- `88acad2f36135d3149e6ed4aa07792810ba3dfec` — centered header + conditional Story section rail;
- `f3ebed7441dfef4726bd65e0c9b4d17f737e6ef8` — feed Astro Story headings into the shared article component;
- `e87a82f6dfc6f6afd0659ff89a08094f7ca82700` — remove visible News author metadata;
- `94effd0f89efd675dad82aba2d88f5ead983656f` — remove visible Story author metadata;
- `7ffc3021c93a8a512b1c220cea8ef7b4361d611b` — restore the independent neutral header/hero divider.

The byline removal changed only article presentation. It did not remove the `author` field from content, schema, structured metadata, or editorial provenance.

No dependency, schema, framework, CMS, database, production-content, archive, homepage, or utility-page changes were made by these corrections.

### F validation

**PASS.**

Recorded against runtime HEAD `7ffc3021c93a8a512b1c220cea8ef7b4361d611b`:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the latest branch;
- local `npm run build`: **PASS**, reported by the founder after pulling the latest branch;
- article geometry, headline wrapping, visible-byline removal, independent divider, 16:9 hero treatment and reading composition were founder-approved through rendered review;
- no published News article was fabricated solely for QA.

The later dedicated multi-width full-site responsive audit remains sequence H and is not complete.

## G — Utility/editorial page simplification

**ACTIVE — G1 `/subscribe` IMPLEMENTED / VALIDATION PENDING.**

Sequence inside G:

1. `/subscribe`;
2. `/standards`;
3. `/privacy`.

### G1 `/subscribe`

Founder-approved direction:

- one focused utility landing page rather than a second homepage;
- one full-width Portfilo-blue acquisition section;
- existing 84rem publication shell;
- desktop relationship based on the established 52rem primary column plus right-side form area;
- one page-specific headline and one concise support sentence;
- shared `NewsletterSignup.astro` for form behavior;
- `Subscribe free` CTA;
- compact SiteFooter only, with the shared footer acquisition still suppressed on `/subscribe`;
- remove legacy `Portfilo Brief` naming, numbered mono scaffolding, duplicated form JavaScript, separate subscription-details section and `No fixed schedule yet` copy.

Founder-approved exact `/subscribe` public copy:

Headline:

`Business and tech, three times a week.`

Support:

`The latest news on companies, startups, products, markets, AI, and technology in a 7-minute read.`

CTA:

`Subscribe free`

Form note remains the shared component wording:

`Free newsletter. Unsubscribe anytime.`

Meta title:

`Subscribe | Portfilo`

Meta description:

`Subscribe to Portfilo’s free business and technology newsletter. The latest news in a 7-minute read, three times a week.`

Implementation:

- runtime commit `adaabb4ab6ad4a37e67095363df7b1146a89bd96` rewrote only `src/pages/subscribe.astro`;
- the bespoke `/subscribe` form and inline submit script were removed;
- the shared `NewsletterSignup.astro` now owns validation, honeypot, `/api/subscribe` submission, confirmation messaging and error states on this page;
- no dependency, schema, API, homepage, archive, article, Standards or Privacy runtime changes were made;
- `docs/COPY_STYLE.md` now records the founder rule that Portfilo public copy does not use em dashes and synchronizes the current newsletter facts.

## Remaining sequence

A. unify `/news` with `/stories` archive layout — **COMPLETE**;

B. shared full-blue archive acquisition band — **COMPLETE**;

C. shared site-wide footer acquisition + homepage migration — **COMPLETE**;

D. archive/acquisition technical + rendered QA — **COMPLETE**;

E. shared article-template design gate — **COMPLETE / LATER AMENDED DURING F**;

F. revised shared article-template implementation + validation — **COMPLETE**;

G. simplify `/subscribe`, then `/standards`, then `/privacy` — **ACTIVE: `/subscribe` VALIDATION PENDING**;

H. dedicated site-wide responsive typography/layout audit across at least `1440 / 1366 / 1024 / 768 / 390 / 375 / 320` — **NOT STARTED**;

I. final site-wide QA and release-readiness review — **NOT STARTED**.

## Exact next task

Validate G1 `/subscribe` before beginning `/standards`.

Required:

1. pull the latest `build/portfilo-v0`;
2. run `npm run check`;
3. run `npm run build`;
4. render `/subscribe` on desktop and verify the single blue acquisition section, approved copy, shared form, compact footer and absence of legacy `Portfilo Brief` / numbered scaffolding / subscription-details content;
5. verify `/subscribe` shows no generic dark footer acquisition above the compact footer;
6. test an invalid email state and confirm the shared form surfaces its normal error state;
7. inspect a representative mobile width for stacking, readable headline/support copy, full-width form controls and no horizontal overflow;
8. report any G1 regression before beginning `/standards`.

Do not begin `/standards` or `/privacy` while `/subscribe` is still open.

## Deferred / not authorized now

- article audio/listen system;
- share toolbar;
- `/standards` redesign before `/subscribe` is complete;
- `/privacy` redesign before its G sub-gate;
- deep site-wide responsive typography audit before H;
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

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` recorded as the production branch. No explicit deployment action, domain finalization, public newsletter sending, merge to `main`, or release is authorized by A–G.
