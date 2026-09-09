# Portfilo Document Status

_Last updated: 2026-09-09_

This file prevents historical implementation notes, stale status lines, and research records from being mistaken for current authority.

## Authority order

When documents disagree, use this order:

1. `AGENTS.md` for contributor/workflow/approval rules;
2. `docs/PROJECT_STATE.md` for the current phase, validated state, and exact next task;
3. this status map for whether a document is current, partial, historical, or superseded;
4. `docs/V0_SCOPE.md` for current v0 product boundaries;
5. the canonical standard for the subject;
6. current source code for actual runtime behavior;
7. historical research/decision records for provenance only.

Do not create a second execution-plan document. `docs/PROJECT_STATE.md` owns the active sequence.

## Current canonical documents

### Contributor / decision control

- `AGENTS.md` — repository authority, scope, approvals, implementation discipline.
- `skills/portfilo-anti-slop/SKILL.md` — mandatory evidence-first decision gate for nontrivial discretionary product/copy/design decisions.

### Product and state

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. A–G are complete. G1 `/subscribe` was explicitly reopened before H and is now revalidated against runtime HEAD `c63d5f0fd295acca12fbf420ed9ebf5b2e591440`, with founder rendered approval plus user-reported local `npm run check` and `npm run build` PASS. G2 `/standards` is validated against runtime HEAD `b7c764647d8b583ceb64d54aca1ee1b99df3027c`. G3 `/privacy` is validated against runtime HEAD `10b3d96b1f90260cb77fbd94414a360e1e365580`. Sequence H responsive audit is next and begins at inspection/audit planning, not implementation.
- `docs/V0_SCOPE.md` — current v0 product/technical boundary document. Older clauses describing News/Stories architecture, legacy taxonomy, `/latest`, ticker motion, or legacy newsletter naming as future/current gates are subordinate to `PROJECT_STATE` where they conflict.
- `BACKLOG.md` — valid ideas outside current scope.

### Editorial, research, writing

Current:

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/EDITORIAL_PACKAGING_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `docs/PORTFILO_TEST_STANDARD.md`
- `docs/CONTENT_PLANNING.md` — canonical for planning gates, with older geography/taxonomy clauses superseded by later product decisions in `PROJECT_STATE`.

`docs/COPY_STYLE.md` remains canonical for general public-copy rules. Its note about the old image-led G1 campaign statement is historical page-scoped provenance after the founder reopened and replaced that Subscribe composition. Current `/subscribe` wording authority is the validated runtime and `PROJECT_STATE.md`.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current general visual principles. Homepage-specific passages that predate the current header, blue hero, ticker behavior, archive unification, shared acquisition runtime, current shared article runtime, current Subscribe reset, final G2 Standards runtime, or final G3 Privacy runtime are subordinate to `PROJECT_STATE` and current source.
- `docs/IMAGE_SYSTEM.md` — canonical editorial image rules; v0 primary story-image ratio remains 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.

Historical/provenance only:

- `research/homepage-redesign-v1.md`
- `research/image-system/homepage-hero-image-brief-v1.md`
- `research/image-system/homepage-hero-selection-v1.md`
- `research/image-system/homepage-featured-cover-decision.md`

Current homepage Feature asset remains `public/images/homepage-feature-16x9.png`.

`public/images/subscribe-16x9.png` remains in the repository as historical G1 asset provenance but is no longer rendered by the current `/subscribe` runtime.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only.
- `research/portfilo-product-model-research-v1.md` — supporting evidence for the approved current-News + deeper-Stories model.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only.
- `research/homepage-hero-copy-v3.md` — current founder-approved homepage hero acquisition wording and authority for the public latest-news / 7-minute / three-times-per-week operating promises. Its exact wording remains hero-scoped unless separately adopted elsewhere.

Current CTA authority:

- shared header CTA: `SUBSCRIBE FREE`;
- homepage hero CTA: `Send me the news`;
- contextual Feature-rail CTA: `Subscribe`;
- `/subscribe` CTA: `SUBSCRIBE`.

Current founder-approved Feature-rail copy:

- headline: `There's more to it than the headline.`;
- support: `Who made the move, what changed, and the details behind it.`

Current founder-approved archive acquisition copy:

News:

- `Get Portfilo news in your inbox.`
- `The latest news on companies, startups, products, markets, AI, and technology. Three times a week.`

Stories:

- `Get Portfilo stories in your inbox.`
- `Deeper reporting, explainers, and analysis on business and technology.`

Current founder-approved visible `/subscribe` copy:

- headline: `Get ahead in business and tech in 7 minutes.`;
- support: `The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`;
- CTA: `SUBSCRIBE`;
- shared utility note: `Free newsletter. Unsubscribe anytime.`

The former campaign statement `Some changes look small, until they reshape everything. We look closer.` and the image-overlay `GET THE NEWSLETTER` treatment are historical G1 provenance only. They no longer describe the current `/subscribe` runtime.

### Brand

Current:

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

Shared header/footer wordmark presentation remains 5.8rem where those shared components are rendered.

### Email / deployment

Current:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. The current `/subscribe` implementation still uses the shared newsletter component and does not duplicate form logic or reintroduce stale `Portfilo Brief` wording. The final G3 Privacy notice uses neutral `Portfilo newsletter` website language without claiming the beehiiv-side operational naming migration has occurred. Do not opportunistically migrate unrelated deferred surfaces outside their active gate.

Cloudflare Web Analytics remains described in production setup as a v0 capability whose enablement/verification is still unresolved. The final G3 Privacy notice intentionally does not claim that analytics is active.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned core site is stable.

## Current runtime authority

### Homepage

Current approved/implemented behavior includes:

- header `Portfilo | News | Stories | SUBSCRIBE FREE`;
- full Portfilo-blue newsletter hero;
- shared 52rem-primary/right-column publication geometry;
- Latest-news ticker with restrained automatic movement when inventory supports it;
- Feature sourced from Stories only;
- homepage News and ticker sourced from News only;
- DEV-only synthetic News fixtures when real published News is absent;
- production never fabricates News;
- shared dark `FooterAcquisition.astro` before the compact SiteFooter;
- footer `Stories | Standards | Privacy` with 5.8rem wordmark.

The homepage hero CTA remains `Send me the news`.

### News + Stories archives

Current model:

- one Astro editorial collection;
- required `section: news | stories`;
- separate `contentType` and `topic` dimensions;
- public topic values `business / technology / startup / ai`;
- routes `/news`, `/news/[slug]`, `/stories`, `/stories/[slug]`;
- `/latest`, pagination, filters and search remain deferred;
- optional editorial-image metadata supports source, alt, optional credit and generated-image disclosure.

`src/components/EditorialArchive.astro` is the canonical shared archive layout for `/news` and `/stories`.

Shared archive contract:

- 84rem shell;
- Stories-derived page-title, lead and supporting-row geometry;
- 16:9 lead/supporting image treatment where images exist;
- shared metadata-slot geometry with section-specific values;
- same dividers, spacing and breakpoints;
- full-width blue archive acquisition band.

News keeps current-news data and DEV fixture behavior. Stories keeps deeper-editorial metadata and author display on archive surfaces. These differences do not create separate layout systems.

### Shared footer acquisition

`src/components/FooterAcquisition.astro` is the canonical dark pre-footer acquisition section.

`src/components/SiteFooter.astro`:

- renders the shared acquisition by default on substantive pages;
- excludes `/subscribe`, `/confirmed`, `/404`;
- allows an explicit page-level suppression for a justified local acquisition state;
- retains the compact footer navigation/content;
- aligns the footer endcap to the 84rem publication shell.

Production empty `/news` intentionally shows the contextual blue archive acquisition without immediately repeating the generic dark footer acquisition.

The current `/subscribe` page renders `SiteFooter.astro` with `showAcquisition={false}`. It therefore has the compact institutional footer but no duplicate newsletter acquisition block.

### Shared article implementation

`src/components/EditorialArticle.astro` is the canonical article presentation for both `/news/[slug]` and `/stories/[slug]`.

The current founder-approved article contract is:

- centered classification/headline/dek header;
- visible author/byline omitted from article presentation;
- supplemental metadata appears only when genuinely present, such as Updated or Series;
- the content `author` field remains required/internal and continues to feed article structured data/SEO where applicable;
- header maximum width 54rem;
- headline uses the full 54rem frame with a restrained desktop maximum around 4.35rem;
- optional restrained 16:9 hero maximum width 54rem;
- independent thin neutral divider between the header package and hero when a hero exists;
- blue hero top rule remains separate from that neutral divider;
- image credit and generated-image disclosure preserved;
- centered 41.5rem reading measure;
- shared heading/link/list/blockquote/code/media spacing;
- shared methodology/correction geometry;
- existing shared dark footer acquisition once at the article end;
- no inline article signup, related-content module, comments, author bio, share toolbar, reading-time widget, custom article motion, or audio/listen system.

Legitimate section differences remain data/read-mode differences rather than separate article systems:

News:

- classification values include News, topic, and published date when present;
- optional Updated metadata only in the visible supplemental metadata group;
- Instrument Sans body reading mode;
- no in-page section rail in the current contract.

Stories:

- classification values include content type, topic, and published date when present;
- optional Updated and optional Series metadata only in the visible supplemental metadata group;
- Source Serif 4 body reading mode;
- Astro-rendered `h2` headings feed an `In this story` in-page navigation only when at least three real `h2` sections exist.

Stories section-navigation behavior:

- desktop: left sticky section rail + narrow body;
- links use the existing generated Markdown heading IDs/text;
- below 56rem the rail is hidden and the body returns to centered single-column reading;
- no article headings are invented to force the rail to appear.

The published `what-actually-makes-starting-a-business-hard` Story has no `h2` headings, so it intentionally does not show the rail. The DEV-visible draft `what-higher-value-work-means-in-philippine-it-bpm` has six `h2` headings and remains the rail QA case.

The earlier E statement excluding a table of contents is superseded only to the extent of this later founder-approved Stories section rail. The earlier visible-author article treatment is likewise superseded by the later founder decision to omit bylines from article presentation while retaining author metadata internally. Neither change authorizes copying the OpenAI article UI wholesale or adding audio, sharing, or other adjacent features.

### `/subscribe`

The current founder-approved Subscribe runtime is `c63d5f0fd295acca12fbf420ed9ebf5b2e591440`.

Current contract:

- standard shared SiteHeader;
- 84rem publication shell;
- no rendered campaign image and no internal duplicate wordmark;
- no absolute-positioned overlay copy/form;
- no aspect-ratio container controlling the composition;
- paper background with one blue structural top rule and restrained neutral bottom rule;
- asymmetric desktop message/form grid in normal document flow;
- below the layout threshold, message and form become a single-column composition;
- phone layout uses naturally wrapping text and full-width stacked email field + CTA;
- Instrument Sans carries the page identity;
- current visible headline and support reuse already-approved newsletter language rather than a separate campaign statement;
- shared `NewsletterSignup.astro` owns validation, honeypot, `/api/subscribe`, confirmation, and error states;
- shared utility note is visible;
- compact shared `SiteFooter` renders with acquisition suppressed;
- old `public/images/subscribe-16x9.png` remains in the repository but is not rendered;
- no route-local duplicate newsletter submission script;
- the browser scrollbar-gutter shift between short and long pages was observed and founder-accepted without a change.

### `/standards`

The founder-approved G2 runtime is the restrained text-led Standards page implemented at `b7c764647d8b583ceb64d54aca1ee1b99df3027c`.

Current contract:

- current 84rem publication shell and shared header alignment;
- standard shared SiteHeader and SiteFooter behavior, including the normal shared footer acquisition;
- existing substantive Standards copy, meta title, and meta description preserved;
- unnumbered `On this page` jump links for Sources, Verification, AI use, Corrections, and Commercial independence;
- one consistent editorial section system rather than separate microsite-style treatments;
- Instrument Sans hierarchy and Source Serif 4 substantive reading copy;
- narrow editorial reading measure;
- supporting source, verification, AI, correction, and commercial-independence principles retained inline;
- no numbered `01 / 02 / 03` presentation scaffold;
- no giant numeric marker;
- no five-cell boxed index;
- no black AI takeover section;
- no red correction card;
- no decorative sidebars or card-like note system;
- no new dependency, framework, schema, shared-component, archive, article, homepage, Subscribe, or Privacy changes.

### `/privacy`

The founder-approved G3 runtime is the restrained privacy notice implemented at `10b3d96b1f90260cb77fbd94414a360e1e365580`.

Current contract:

- current 84rem publication shell and shared header alignment;
- normal shared SiteHeader and SiteFooter behavior, including the normal shared footer acquisition;
- simple unnumbered `On this page` links;
- Instrument Sans hierarchy and Source Serif 4 substantive reading copy;
- sections for Information we collect, Newsletter, Service providers, Retention, Your choices and rights, and Contact;
- website-facing newsletter terminology uses `Portfilo newsletter` rather than stale `Portfilo Brief` wording;
- notice reflects the current email-address submission, hidden honeypot field, Cloudflare Pages Function proxy, fixed website attribution, beehiiv double opt-in/subscriber storage/delivery/unsubscribe role, and absence of a separate Portfilo subscriber database;
- service-provider section identifies Cloudflare, beehiiv, and jsDelivr based on the current runtime;
- notice does not claim Cloudflare Web Analytics is active while that configuration remains unresolved;
- privacy contact is `portfilo.ph@gmail.com` for v0;
- rights language is qualified to applicable privacy law and includes the Philippine National Privacy Commission complaint route;
- no invented legal identity, unsupported provider/account feature claim, cookie-banner requirement, analytics implementation, database, or new dependency.

## Current validation authority

Archive/acquisition sequence A–D is validated.

Recorded against runtime HEAD `80349a49d6aa484d320d51b648c1964e2c3f7697` before documentation closeout:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**;
- local `npm run build`: **PASS**;
- source review: **PASS after one narrow D fix**.

F shared article implementation is validated against runtime HEAD `7ffc3021c93a8a512b1c220cea8ef7b4361d611b`:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the latest branch;
- local `npm run build`: **PASS**, reported by the founder after pulling the latest branch;
- the final founder-reviewed article state includes centered header geometry, resilient headline scale, no visible byline, independent neutral header/hero divider, 54rem 16:9 hero treatment, narrow reading body and conditional Stories section rail.

G1 `/subscribe` is validated against runtime HEAD `c63d5f0fd295acca12fbf420ed9ebf5b2e591440`:

- founder rendered visual review of the simpler editorial reset: **PASS**;
- compact non-acquisition footer: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the reset runtime;
- local `npm run build`: **PASS**, reported by the founder after pulling the reset runtime;
- source/diff review confirms the reset commit changed only `src/pages/subscribe.astro`;
- shared NewsletterSignup behavior remains in use;
- scrollbar-gutter route shift explicitly accepted without change;
- dedicated multi-width site-wide responsive QA remains sequence H.

G2 `/standards` is validated against runtime HEAD `b7c764647d8b583ceb64d54aca1ee1b99df3027c`:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the G2 runtime;
- local `npm run build`: **PASS**, reported by the founder after pulling the G2 runtime;
- source/diff review confirms the runtime commit changed only `src/pages/standards.astro`;
- substantive institutional standards were preserved rather than materially rewritten;
- dedicated multi-width site-wide responsive QA remains sequence H.

G3 `/privacy` is validated against runtime HEAD `10b3d96b1f90260cb77fbd94414a360e1e365580`:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**, reported by the founder after pulling the G3 runtime;
- local `npm run build`: **PASS**, reported by the founder after pulling the G3 runtime;
- source/diff review confirms the runtime commit changed only `src/pages/privacy.astro`;
- approved privacy wording and verified data-flow boundaries were preserved in implementation;
- dedicated multi-width site-wide responsive QA remains sequence H.

Because there are currently no published News entries, absence of a production `/news/[slug]` page is expected. No production News article was fabricated solely for QA.

## Current implementation commits

Archive/acquisition runtime:

- `cae3cb6ddf47b09284bf1444d2849e127b01edcd` — shared archive + acquisition foundation;
- `d58b6f060a24f807651276520745747296d31f54` — homepage migration to shared footer acquisition;
- `80349a49d6aa484d320d51b648c1964e2c3f7697` — production empty-archive acquisition guard.

Shared article runtime:

- `ca853921ae19d36d08188090ac29a916d8584b1e` — shared article component;
- `d3606dfbcb8f97357084b6e98dea3974aaedfcb8` — News route migration;
- `87e9b2b083622b80f9a66652806e5f8ed4a5d924` — Stories route migration;
- `dff79cd039de478c47583a06b5aecd5810e38c67` — obsolete article-newsletter suppression cleanup;
- `52eed7f71fab1ebed46ee0545ff270b167f2dde6` — tighter article geometry;
- `5d8ca03d8aa2fa8141d0e1387a45bae1d836222a` — header/hero frame alignment;
- `9dcbfc6bb1c2b58d0c04afd6bde0b3a75687e441` — internal header-width correction;
- `98ee5dfdb20d01735485a34031138730ef021ce9` — reduced headline scale and full 54rem headline frame;
- `88acad2f36135d3149e6ed4aa07792810ba3dfec` — centered header + conditional Story section rail;
- `f3ebed7441dfef4726bd65e0c9b4d17f737e6ef8` — Story heading plumbing for the rail;
- `e87a82f6dfc6f6afd0659ff89a08094f7ca82700` — visible News author removal;
- `94effd0f89efd675dad82aba2d88f5ead983656f` — visible Story author removal;
- `7ffc3021c93a8a512b1c220cea8ef7b4361d611b` — independent neutral header/hero divider.

G utility runtime:

- `c63d5f0fd295acca12fbf420ed9ebf5b2e591440` — current founder-approved responsive editorial `/subscribe` reset;
- `b7c764647d8b583ceb64d54aca1ee1b99df3027c` — simplify `/standards` into the founder-approved restrained editorial page;
- `10b3d96b1f90260cb77fbd94414a360e1e365580` — simplify `/privacy` into the founder-approved notice aligned to the verified current data flow.

Historical G1 runtime provenance:

- `adaabb4ab6ad4a37e67095363df7b1146a89bd96` — rejected full-blue Subscribe direction;
- `b66910b0e52e6eb93556985d38ca532e0513bdfb` through `9e2348763a0d6c811a095767beeb5bc6e5962f83` — image-led campaign iteration and final previously validated image-led state, all superseded by `c63d5f0...`.

Initial News + Stories implementation remains historical runtime provenance:

`f1e4b634d3675f99cec8e121b442509e28874c08`

Prior correction commits remain historical provenance rather than current-phase authority.

## Rejected / historical work with zero current decision authority

Do not reintroduce:

- rejected homepage copy directions;
- Source Serif 4 homepage hero/Feature treatment;
- prior Homepage v3 composition;
- independently centered/narrowed homepage Feature shell;
- oversized/arbitrary-tall homepage Feature imagery;
- bottom-pushed blue-rail content;
- square Portfilo right-rail placeholder;
- muted/light-blue hero;
- red normal-state ticker;
- entire ticker black;
- topic labels in the header;
- old `Latest` header navigation;
- old giant-number Stories archive treatment;
- old sticky article metadata rail;
- visible article byline/author block;
- separate News/Stories archive CSS systems;
- separate News/Stories article geometry;
- legacy article-local inline newsletter blocks;
- paper-background archive signup with only a blue top line;
- repeated/decorative mono scaffolding;
- legacy `/subscribe` numbered scaffold and subscription-details section;
- first G1 full-width blue-band `/subscribe` composition;
- the superseded image-led `/subscribe` campaign stage, image overlay, duplicated internal wordmark, absolute-positioned message/form, and 16:9 layout-container architecture;
- the old Subscribe campaign statement or `GET THE NEWSLETTER` overlay treatment as current page authority;
- no-scroll `/subscribe` experiment that changed the approved shell/alignment behavior;
- old G2 Standards 100rem / 12-column microsite composition;
- numbered five-cell Standards index and repeated `01 / 02 / 03` presentation scaffold;
- giant numeric AI marker and black AI takeover treatment on Standards;
- red correction-card and decorative sidebar treatments on Standards;
- old G3 Privacy 100rem / 12-column utility-page composition;
- numbered Privacy `01 / 02 / 03` scaffold and stale `Portfilo Brief` website-facing privacy terminology;
- the incomplete old three-section Privacy notice as current data-flow authority;
- fabricated production News;
- generic production fallback imagery;
- implementation-time global design changes without approval.

Historical copy/navigation records remain provenance only, including `docs/COPY_REPLACEMENT_CANDIDATE.md`, `docs/NAVIGATION_RESEARCH.md`, `docs/SITE_COPY_AND_IA_AUDIT.md`, `docs/SITE_COPY_IMPLEMENTATION.md`, and `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md` and must not be recreated.

## Maintenance rule

When a founder decision supersedes an older record:

- preserve useful history where it still has provenance value;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever current phase or exact next task changes;
- do not duplicate current state across a new execution-plan file.
