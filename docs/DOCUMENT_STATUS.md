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

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. A–F are complete. F passed founder rendered review plus user-reported local `npm run check` and `npm run build` against runtime HEAD `7ffc3021c93a8a512b1c220cea8ef7b4361d611b`. G is active. The first G1 blue-band `/subscribe` implementation was rejected in founder rendered review; the revised image-led G1 implementation is current and validation is pending before `/standards` begins.
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

`docs/COPY_STYLE.md` is synchronized to the current newsletter commitments, records the founder-approved rule that Portfilo public copy does not use em dashes, and records the revised G1 `/subscribe` statement as page-scoped copy rather than a permanent tagline.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current general visual principles. Homepage-specific passages that predate the current header, blue hero, ticker behavior, archive unification, shared acquisition runtime, or current shared article runtime are subordinate to `PROJECT_STATE` and current source.
- `docs/IMAGE_SYSTEM.md` — canonical editorial image rules; v0 primary story-image ratio remains 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.

Historical/provenance only:

- `research/homepage-redesign-v1.md`
- `research/image-system/homepage-hero-image-brief-v1.md`
- `research/image-system/homepage-hero-selection-v1.md`
- `research/image-system/homepage-featured-cover-decision.md`

Current homepage Feature asset remains `public/images/homepage-feature-16x9.png`.

Current G1 `/subscribe` visual asset is `public/images/subscribe-16x9.png`. It is founder-selected for that utility-page composition and is not editorial documentary evidence or automatic precedent for story imagery.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only.
- `research/portfilo-product-model-research-v1.md` — supporting evidence for the approved current-News + deeper-Stories model.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only.
- `research/homepage-hero-copy-v3.md` — current founder-approved homepage hero acquisition wording and authority for the public latest-news / 7-minute / three-times-per-week operating promises. Its exact wording remains hero-scoped and is not automatic authority for other acquisition surfaces.

Current CTA authority:

- shared header CTA label: `Subscribe free`;
- homepage header CTA presentation: `SUBSCRIBE FREE`;
- hero CTA: `Send me the news`;
- contextual Feature-rail CTA: `Subscribe`;
- `/subscribe` CTA: `SUBSCRIBE FREE`.

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

Current founder-approved `/subscribe` copy:

- left statement: `Some changes look small, until they reshape everything. We look closer.`;
- right label: `GET THE NEWSLETTER`;
- right support: `Business and tech in 7 minutes, three times a week.`;
- CTA: `SUBSCRIBE FREE`;
- shared note: `Free newsletter. Unsubscribe anytime.`

The left statement is page-scoped campaign/institutional copy. It is not a permanent Portfilo tagline and should not be reused automatically on the homepage, masthead, newsletter, social surfaces, or editorial packaging.

### Brand

Current:

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

Shared header/footer wordmark presentation remains 5.8rem.

### Email / deployment

Current:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. The G1 `/subscribe` implementation uses the shared newsletter component and does not reintroduce stale `Portfilo Brief` wording or duplicate form logic. Do not opportunistically migrate unrelated deferred surfaces outside their active gate.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned core site is stable.

## Current runtime authority

### Homepage

Current approved/implemented behavior includes:

- header `Portfilo | News | Stories | Subscribe free` with the homepage CTA rendered visually as `SUBSCRIBE FREE`;
- full Portfilo-blue newsletter hero;
- shared 52rem-primary/right-column publication geometry;
- Latest-news ticker with restrained automatic movement when inventory supports it;
- Feature sourced from Stories only;
- homepage News and ticker sourced from News only;
- DEV-only synthetic News fixtures when real published News is absent;
- production never fabricates News;
- shared dark `FooterAcquisition.astro` before the compact SiteFooter;
- footer `Stories | Standards | Privacy` with 5.8rem wordmark.

The homepage hero CTA remains `Send me the news`; the G1 work did not replace it with `SUBSCRIBE FREE`.

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

The first G1 `/subscribe` runtime at `adaabb4ab6ad4a37e67095363df7b1146a89bd96` used a full-width blue acquisition band and was rejected in founder rendered review. That composition is historical only.

The current revised G1 runtime is founder-approved at the design/copy gate and remains validation-pending.

Current contract:

- locked visual asset `public/images/subscribe-16x9.png`;
- standard SiteHeader, centered image-led stage, compact SiteFooter;
- no generic shared footer acquisition on `/subscribe`;
- desktop stage remains 16:9 and is sized to fit normal viewport height where practical;
- mobile may use a taller crop of the same source image and scroll when needed;
- one restrained solid dark image overlay for legibility;
- no gradient, glass panel, rounded card, or decorative overlay container;
- two direct overlay blocks;
- left: light Portfilo wordmark plus `Some changes look small, until they reshape everything. We look closer.`;
- right: `GET THE NEWSLETTER`, `Business and tech in 7 minutes, three times a week.`, shared email input, `SUBSCRIBE FREE`, shared free/unsubscribe note;
- shared `NewsletterSignup.astro` owns validation, honeypot, `/api/subscribe`, confirmation and error states;
- no `Portfilo Brief` naming;
- no `No fixed schedule yet` copy;
- no numbered mono scaffolding or separate subscription-details section;
- no route-local duplicate newsletter submission script.

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

The revised G1 `/subscribe` has not yet received a recorded local `npm run check`, `npm run build`, or founder rendered PASS against runtime HEAD `c2ba1efd651d4a7fbb4264ff823c10b76dddc2a0`. Do not describe G1 as validated until those checks pass.

Because there are currently no published News entries, absence of a production `/news/[slug]` page is expected. No production News article was fabricated solely for QA.

The later dedicated multi-width full-site responsive audit remains sequence H and is not complete.

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

- `adaabb4ab6ad4a37e67095363df7b1146a89bd96` — first simplified blue-band `/subscribe`; rejected in founder rendered review and historical only;
- `b66910b0e52e6eb93556985d38ca532e0513bdfb` — locked `/subscribe` image asset;
- `f860085e7cef614a3c594a403af91bd8f1e2525f` — revised image-led `/subscribe` runtime;
- `a873c55ccbf3678ecfbddd1f7e61030acd715075` — homepage-only uppercase header subscribe presentation;
- `c2ba1efd651d4a7fbb4264ff823c10b76dddc2a0` — preserve shared header link/CTA colors on `/subscribe`.

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
