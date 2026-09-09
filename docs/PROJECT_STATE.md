# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — G COMPLETE / H RESPONSIVE AUDIT NEXT**

Sequence items A–G are complete on `build/portfilo-v0`. G1 `/subscribe`, G2 `/standards`, and G3 `/privacy` are founder-approved and locally validated. G1 was explicitly reopened immediately before H, redesigned, reapproved, and revalidated. Sequence H, the dedicated site-wide responsive typography/layout audit, is now the exact next task.

Current and last fully validated runtime HEAD:

`c63d5f0fd295acca12fbf420ed9ebf5b2e591440` — `Reset subscribe page to responsive editorial layout`

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

The current `/subscribe` page renders the compact shared `SiteFooter` with acquisition explicitly suppressed. This gives the page institutional navigation without duplicating the newsletter CTA.

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

**COMPLETE.**

Sequence inside G:

1. `/subscribe` — **COMPLETE / REOPENED AND REVALIDATED BEFORE H**;
2. `/standards` — **COMPLETE**;
3. `/privacy` — **COMPLETE**.

### G1 `/subscribe`

The image-led campaign treatment validated earlier in G1 was explicitly reopened by the founder immediately before H because its 16:9 image-as-layout-container architecture was judged too fragile for mobile and no longer aligned with the simpler current Portfilo design direction. That treatment, including the page-scoped campaign statement and image overlay composition, is now historical only.

Current founder-approved Subscribe contract:

- standard shared `SiteHeader`;
- no campaign image in the runtime composition;
- no duplicated Portfilo wordmark inside the page;
- no absolute-positioned copy or form;
- no aspect-ratio container controlling the page composition;
- current 84rem publication shell;
- paper background, ink typography, neutral rules, and Portfilo blue used structurally;
- one asymmetric desktop message/form grid in normal document flow;
- message and form stack into one column below the desktop/tablet threshold;
- phone layout uses naturally wrapping headline/support copy plus full-width stacked email field and CTA;
- no `white-space: nowrap` dependency for the public message;
- existing shared `NewsletterSignup.astro` retains validation, honeypot, `/api/subscribe`, confirmation, status, and error behavior;
- visible utility note `Free newsletter. Unsubscribe anytime.` is allowed through the shared signup component;
- `/subscribe` renders the compact shared `SiteFooter` with `showAcquisition={false}`, so Stories / Standards / Privacy and copyright remain available without a duplicate acquisition block;
- the old `public/images/subscribe-16x9.png` asset remains in the repository but is no longer rendered by `/subscribe`;
- no new dependency, framework, form implementation, API change, homepage change, or shared-header redesign.

Current visible Subscribe copy uses already-approved newsletter language rather than a new campaign line:

Headline:

`Get ahead in business and tech in 7 minutes.`

Support:

`The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`

CTA:

`SUBSCRIBE`

Meta title:

`Subscribe | Portfilo`

Meta description:

`Subscribe to Portfilo’s free business and technology newsletter. Business and tech in 7 minutes, three times a week.`

Current implementation:

- `c63d5f0fd295acca12fbf420ed9ebf5b2e591440` — reset `/subscribe` to the founder-approved responsive editorial layout.

Relevant historical G1 provenance remains useful only as history:

- `adaabb4ab6ad4a37e67095363df7b1146a89bd96` — rejected full-blue Subscribe direction;
- `9e2348763a0d6c811a095767beeb5bc6e5962f83` — final validated image-led campaign version before the founder later reopened G1;
- intermediate image-led refinements remain historical and must not override the current reset.

### G1 validation

**PASS.**

Recorded against runtime HEAD `c63d5f0fd295acca12fbf420ed9ebf5b2e591440`:

- founder rendered visual review of the reset composition: **PASS**;
- founder approval of the simpler editorial direction and compact non-acquisition footer: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the reset runtime;
- local `npm run build`: **PASS**, reported by the founder after pulling the reset runtime;
- source/diff review confirms the reset commit changed only `src/pages/subscribe.astro`;
- shared NewsletterSignup behavior remains in use;
- the scrollbar-gutter shift between short and long routes was observed and explicitly accepted without change;
- dedicated full-site responsive audit remains sequence H.

G1 is closed again. Do not reopen it during H unless the audit finds a concrete responsive defect or the founder explicitly changes direction.

### G2 `/standards`

The previous Standards runtime used a bespoke 100rem / 12-column microsite treatment with numbered section scaffolding, oversized display typography, a five-cell numbered index, a black AI takeover section, a special red correction treatment, and sidebar/card-like notes. That visual system is superseded by the founder-approved G2 simplification.

The final founder-approved G2 contract is:

- one restrained text-led editorial/utility page inside the current 84rem publication shell;
- standard shared `SiteHeader` and normal shared `SiteFooter` behavior, including the shared footer acquisition;
- current page title, introduction, substantive standards copy, metadata title, and metadata description preserved;
- simple unnumbered `On this page` jump links for Sources, Verification, AI use, Corrections, and Commercial independence;
- one consistent section system rather than separate visual treatments for each topic;
- Instrument Sans for hierarchy and utility text;
- Source Serif 4 for substantive reading copy;
- narrow reading measure aligned with the current editorial reading system;
- supporting principles and process information preserved inline rather than deleted merely because their old containers were removed;
- no giant numeric markers, numbered presentation scaffold, black AI takeover, red correction card, decorative sidebars, cards, gradients, or new graphics;
- no dependency, framework, schema, shared-header, shared-footer, archive, article, homepage, Subscribe, or Privacy changes.

Implementation:

- `b7c764647d8b583ceb64d54aca1ee1b99df3027c` — simplify `/standards` into the approved restrained editorial page.

### G2 validation

**PASS.**

Recorded against runtime HEAD `b7c764647d8b583ceb64d54aca1ee1b99df3027c`:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the G2 runtime;
- local `npm run build`: **PASS**, reported by the founder after pulling the G2 runtime;
- source/diff review confirms only `src/pages/standards.astro` changed in the G2 runtime commit;
- the substantive institutional standards were preserved rather than materially rewritten;
- dedicated multi-width site-wide responsive QA remains sequence H.

G2 is closed.

### G3 `/privacy`

The previous Privacy runtime used the older 100rem / 12-column utility-page system, numbered `01 / 02 / 03` scaffolding, stale `Portfilo Brief` website terminology, and an incomplete three-section notice that did not fully reflect the current data flow.

The final founder-approved G3 contract is:

- one restrained text-led privacy notice inside the current 84rem publication shell;
- normal shared `SiteHeader` and `SiteFooter` behavior, including the shared footer acquisition;
- simple unnumbered `On this page` links;
- Instrument Sans hierarchy and Source Serif 4 substantive reading copy;
- sections for Information we collect, Newsletter, Service providers, Retention, Your choices and rights, and Contact;
- public website terminology uses `Portfilo newsletter` rather than the stale `Portfilo Brief` website label;
- newsletter data-flow copy reflects the actual `/api/subscribe` proxy, double opt-in, beehiiv subscriber storage/delivery/unsubscribe handling, fixed website attribution, honeypot behavior, and the absence of a separate Portfilo subscriber database;
- service-provider disclosure covers Cloudflare, beehiiv, and jsDelivr based on the current runtime;
- the notice does not claim Cloudflare Web Analytics is active because the repository still records enablement/verification as unresolved;
- privacy requests use the founder-approved v0 contact `portfilo.ph@gmail.com`;
- rights language remains qualified to applicable privacy law and records the Philippine National Privacy Commission complaint route;
- no invented legal identity, unsupported account-level beehiiv feature claim, cookie-banner requirement, analytics implementation, new provider, dependency, database, or shared-component redesign.

Implementation:

- `10b3d96b1f90260cb77fbd94414a360e1e365580` — simplify `/privacy` and align the public notice to the verified current data flow.

### G3 validation

**PASS.**

Recorded against runtime HEAD `10b3d96b1f90260cb77fbd94414a360e1e365580`:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the G3 runtime;
- local `npm run build`: **PASS**, reported by the founder after pulling the G3 runtime;
- source/diff review confirms only `src/pages/privacy.astro` changed in the G3 runtime commit;
- the approved Privacy wording and data-flow boundaries were preserved in implementation;
- dedicated multi-width site-wide responsive QA remains sequence H.

G3 and sequence G are closed.

## Remaining sequence

A. unify `/news` with `/stories` archive layout — **COMPLETE**;

B. shared full-blue archive acquisition band — **COMPLETE**;

C. shared site-wide footer acquisition + homepage migration — **COMPLETE**;

D. archive/acquisition technical + rendered QA — **COMPLETE**;

E. shared article-template design gate — **COMPLETE / LATER AMENDED DURING F**;

F. revised shared article-template implementation + validation — **COMPLETE**;

G. simplify `/subscribe`, then `/standards`, then `/privacy` — **COMPLETE; SUBSCRIBE LATER REOPENED AND REVALIDATED BEFORE H**;

H. dedicated site-wide responsive typography/layout audit across at least `1440 / 1366 / 1024 / 768 / 390 / 375 / 320` — **NEXT**;

I. final site-wide QA and release-readiness review — **NOT STARTED**.

## Exact next task

Begin sequence H at the **site-wide responsive inspection and audit-planning gate**, not broad redesign or implementation.

Required first step:

1. verify the current branch/HEAD and the last validated runtime;
2. inspect the current implemented public routes and shared components that materially affect responsive layout;
3. audit at minimum the target viewport widths `1440 / 1366 / 1024 / 768 / 390 / 375 / 320`;
4. include homepage, News archive/empty state, Stories archive, representative News/Stories article states that actually exist, `/subscribe`, `/standards`, `/privacy`, `/confirmed`, `/about`, and `/404` where applicable;
5. inspect typography wrapping, shell/gutter alignment, horizontal overflow, image ratios/crops, forms, navigation, footer/acquisition behavior, section rails, jump-link layouts, and touch-target/readability issues;
6. distinguish real responsive defects from already approved intentional behavior;
7. group findings by shared root cause before proposing route-local patches;
8. do not redesign approved desktop compositions merely because a narrower breakpoint needs correction;
9. present the responsive defect list and narrow remediation plan for founder approval before making runtime edits.

Sequence H is a correction/audit gate, not permission to reopen product direction, copy, page architecture, or visual identity without a concrete responsive defect.

## Deferred / not authorized now

- article audio/listen system;
- share toolbar;
- unrelated desktop redesign during H;
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

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` recorded as the production branch. No explicit deployment action, domain finalization, public newsletter sending, merge to `main`, or release is authorized by A–H.