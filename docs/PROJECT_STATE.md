# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — G1 `/subscribe` COMPLETE / G2 `/standards` NEXT**

Sequence items A–F are complete on `build/portfilo-v0`. Sequence item G is active. G1 `/subscribe` was reopened after founder rendered review rejected the first blue-band implementation, then iterated through a founder-approved image-led composition. The final G1 runtime is founder-approved and locally validated. G2 `/standards` is now the exact next task.

Current and last fully validated runtime HEAD:

`9e2348763a0d6c811a095767beeb5bc6e5962f83` — `Revert subscribe no-scroll experiment`

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
- Header: `Portfilo | News | Stories | SUBSCRIBE FREE`.
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
- compact SiteFooter: wordmark | Stories | Standards | Privacy | copyright;
- shared header CTA renders as `SUBSCRIBE FREE` on all routes.

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

The current `/subscribe` page does not render `SiteFooter.astro` at all. That page-level exception is founder-approved and does not change the shared footer contract for other routes.

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

**ACTIVE — G1 `/subscribe` COMPLETE / G2 `/standards` NEXT.**

Sequence inside G:

1. `/subscribe` — **COMPLETE**;
2. `/standards` — **NEXT**;
3. `/privacy` — **NOT STARTED**.

### G1 `/subscribe`

The first G1 implementation at `adaabb4ab6ad4a37e67095363df7b1146a89bd96` used a full-width Portfilo-blue acquisition band. Founder rendered review rejected that visual direction. It has zero current visual authority and must not be used as precedent for G1.

The final founder-approved G1 contract is:

- focused utility landing page using the locked `public/images/subscribe-16x9.png` asset as the central visual stage;
- standard shared `SiteHeader` above the stage;
- no `SiteFooter` on `/subscribe` and therefore no generic dark footer acquisition on that page;
- paper page background with natural document scrolling;
- centered 84rem / 1344px maximum campaign shell;
- image stage remains 16:9 in the current runtime;
- one restrained solid dark image overlay for legibility, with no gradient, glass panel, rounded card, or decorative container;
- exactly two direct overlay content blocks;
- top-left block: light Portfilo wordmark plus the approved page-specific statement;
- bottom-right block: one-line `GET THE NEWSLETTER` label above one inline email input + `SUBSCRIBE` CTA;
- the campaign statement remains sentence case while `GET THE NEWSLETTER` remains all caps as a functional signup heading;
- `GET THE NEWSLETTER` uses the same Instrument Sans weight, scale, line-height, and tracking as the campaign statement at the corresponding breakpoint;
- the signup block width follows the rendered newsletter-label width, with the 8.5rem / 136px CTA retained and the email input taking the remaining width;
- both overlay blocks use one shared campaign inset so their geometric edge spacing is equal;
- the wordmark alone receives a narrow optical correction to compensate for transparent space inside the SVG, while the campaign sentence remains on the geometric inset;
- the Portfilo wordmark-to-message gap is tightened to roughly 36–40px on desktop, intentionally larger than the newsletter-label-to-form gap;
- the form CTA is 8.5rem / 136px wide on the current desktop treatment, centered explicitly, and uses weight 650;
- form/input controls above 32rem use the approved 2.75rem / 44px height treatment;
- the cadence support line and shared free/unsubscribe note remain intentionally hidden on this page;
- the shared `NewsletterSignup.astro` still owns validation, honeypot, `/api/subscribe` submission, confirmation messaging, and error states;
- the approved statement remains page-scoped campaign/institutional copy, not a permanent Portfilo tagline and not automatic authority for other surfaces;
- natural document scrolling remains the approved behavior; the later no-scroll experiment was rejected and reverted;
- dedicated laptop/tablet/mobile visual tuning is deferred to sequence H rather than reopening the approved desktop composition now.

Locked asset:

`public/images/subscribe-16x9.png`

Founder-approved exact visible `/subscribe` public copy:

Campaign statement:

`Some changes look small, until they reshape everything. We look closer.`

The runtime intentionally presents that sentence across three visual lines:

- `Some changes look small,`
- `until they reshape everything.`
- `We look closer.`

Signup heading:

`GET THE NEWSLETTER`

CTA:

`SUBSCRIBE`

The page currently has no visible cadence support line and no visible `Free newsletter. Unsubscribe anytime.` note.

Meta title remains:

`Subscribe | Portfilo`

Meta description remains:

`Subscribe to Portfilo’s free business and technology newsletter. Business and tech in 7 minutes, three times a week.`

Implementation provenance:

- `b66910b0e52e6eb93556985d38ca532e0513bdfb` — locked `/subscribe` image asset;
- `f1c5d65e179c327cd8a9fb238952b34598bebed7` — historical removal of the earlier newsletter label before the founder later restored it;
- `f29f5b4ac1d9d659b0511b9bb96ef42db90fbfbd` — remove the footer on `/subscribe` and establish the approved message hierarchy;
- `406b6fd18dfefca17eb4460e4201dc633bc94a4e` — set page CTA to `SUBSCRIBE` and strengthen its weight;
- `972cbf96b21be699c35550f96c68355fe3f62148` — swap the two overlay blocks vertically while preserving their left/right sides;
- `5a7cc7663838819f16880d3ec031a2baa37e0275` — establish one shared campaign inset and tighten the original form width;
- `bd419eac0886696022da359f77df9b214e0f3895` — set the page CTA to the 8.5rem width and explicit centering;
- `da9f4afc08ed53ba5f214c09c3dcd3794a76b8f3` — optically align the wordmark and set the approved 44px control height above 32rem;
- `a429bd625a8002305799adc335194184c3747291` — restore visible `GET THE NEWSLETTER` above the form;
- `eca1af7d4704a2c24c75648adb8c50454a07e6c3` — match the newsletter heading typography to the campaign statement;
- `8cd8f33b47f2df3a9a84a2acba13c2c991aa86a6` — match the signup-block width to the newsletter heading while retaining the fixed CTA width;
- `b8b72646ea288fa9b5c40858082d48d8dcdb9995` — tighten the wordmark-to-message spacing;
- `ad7cb5520163c56e573d6e6e26622e34439252c7` and `0ba54ef882d78ced023ae2bb6c172f442dd24c10` — rejected no-scroll experiment and attempted alignment correction; historical only;
- `9e2348763a0d6c811a095767beeb5bc6e5962f83` — revert the no-scroll experiment and restore the founder-approved natural-scrolling composition while retaining the approved newsletter-heading/form refinements;
- the shared `NewsletterSignup.astro` remains behaviorally authoritative for the form;
- no dependency, schema, API, archive, article, Standards, or Privacy runtime changes were made by the final G1 corrections.

### G1 validation

**PASS.**

Recorded against runtime HEAD `9e2348763a0d6c811a095767beeb5bc6e5962f83`:

- founder rendered desktop visual review after the final revert: **PASS**;
- founder approval of the final visible newsletter heading, matched typography, matched heading/form width relationship, tightened left lockup spacing, CTA treatment, natural scrolling, and no-footer composition: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the final runtime;
- local `npm run build`: **PASS**, reported by the founder after pulling the final runtime;
- source review confirms `/subscribe` continues to use the shared `NewsletterSignup.astro` submission/validation implementation;
- the dedicated multi-width laptop/tablet/mobile visual audit remains intentionally deferred to H.

G1 is closed. Do not reopen it during G2 unless a concrete regression or founder decision requires it.

## Remaining sequence

A. unify `/news` with `/stories` archive layout — **COMPLETE**;

B. shared full-blue archive acquisition band — **COMPLETE**;

C. shared site-wide footer acquisition + homepage migration — **COMPLETE**;

D. archive/acquisition technical + rendered QA — **COMPLETE**;

E. shared article-template design gate — **COMPLETE / LATER AMENDED DURING F**;

F. revised shared article-template implementation + validation — **COMPLETE**;

G. simplify `/subscribe`, then `/standards`, then `/privacy` — **ACTIVE: G1 COMPLETE / G2 NEXT**;

H. dedicated site-wide responsive typography/layout audit across at least `1440 / 1366 / 1024 / 768 / 390 / 375 / 320` — **NOT STARTED**;

I. final site-wide QA and release-readiness review — **NOT STARTED**.

## Exact next task

Begin G2 `/standards` at the **inspection and design/copy planning gate**, not implementation.

Required first step:

1. verify the current branch/HEAD;
2. inspect the current `/standards` source and rendered structure;
3. inspect the canonical editorial/research/publishing standards that the public page is supposed to represent;
4. read/apply `skills/portfilo-anti-slop/SKILL.md` before making any nontrivial public-copy or visual recommendation;
5. identify what is stale, redundant, visually inconsistent, or unsupported on the current page without changing unrelated site surfaces;
6. propose a restrained G2 simplification contract using the existing publication system where appropriate;
7. separate content/copy decisions from implementation details;
8. stop for founder approval before editing `/standards` runtime or public copy.

Do not begin `/privacy` while G2 `/standards` is open.

## Deferred / not authorized now

- article audio/listen system;
- share toolbar;
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
