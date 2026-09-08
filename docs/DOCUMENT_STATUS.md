# Portfilo Document Status

_Last updated: 2026-09-09_

This file prevents historical implementation notes, stale status lines, and research records from being mistaken for current authority.

## Authority order

When documents disagree, use this order:

1. `AGENTS.md` for contributor/workflow/approval rules;
2. `docs/PROJECT_STATE.md` for the current phase, validated state, and exact next task;
3. this status map for whether a document is current, partial, historical, or superseded;
4. `docs/V0_SCOPE.md` for current v0 product boundaries;
5. the current canonical standard for the subject;
6. current source code for actual runtime behavior;
7. historical research/decision records for provenance only.

Do not create a second execution-plan document. `docs/PROJECT_STATE.md` owns the active sequence.

## Current canonical documents

### Contributor / decision control

- `AGENTS.md` — repository authority, scope, approvals, implementation discipline.
- `skills/portfilo-anti-slop/SKILL.md` — mandatory evidence-first decision gate for nontrivial discretionary product/copy/design decisions.

### Product and state

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. As of 2026-09-09, the founder-approved A–C archive/acquisition implementation is on `build/portfilo-v0`; technical + rendered QA is the next sequence item and has not yet been recorded as passed.
- `docs/V0_SCOPE.md` — current v0 product/technical boundary document. Older clauses describing News/Stories architecture, legacy taxonomy, `/latest`, or ticker motion as future gates are subordinate to `PROJECT_STATE` where they conflict.
- `BACKLOG.md` — valid ideas outside current scope.

### Editorial, research, writing

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/EDITORIAL_PACKAGING_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `docs/PORTFILO_TEST_STANDARD.md`
- `docs/CONTENT_PLANNING.md` — canonical for planning gates, with older geography/taxonomy clauses superseded by later product decisions in `PROJECT_STATE`.

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current general visual principles. Homepage-specific wording that predates the current header, aligned Feature/News grid, ticker behavior, archive unification, or shared acquisition implementation is subordinate to `PROJECT_STATE` and current runtime.
- `docs/IMAGE_SYSTEM.md` — canonical editorial image rules; canonical v0 primary story-image ratio remains 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — historical/provenance record. Its stale static-ticker, old navigation, or open contextual-support wording has no authority over current runtime.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only.
- `research/image-system/homepage-featured-cover-decision.md` — historical provenance for the homepage Feature artwork; current asset remains `public/images/homepage-feature-16x9.png`.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — supporting evidence for the approved current-News + deeper-Stories model; `briefing` remains rejected as public acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only; superseded for exact public hero wording.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED PRIMARY ACQUISITION WORDING AND OPERATING PROMISES**.

Current CTA authority:

- header CTA: `Subscribe free`;
- hero CTA: `Send me the news`;
- contextual Feature-rail CTA: `Subscribe`.

Current founder-approved Feature-rail contextual copy:

- headline: `There's more to it than the headline.`;
- support: `Who made the move, what changed, and the details behind it.`

Current founder-approved archive acquisition copy:

News:

- `Get Portfilo news in your inbox.`
- `The latest news on companies, startups, products, markets, AI, and technology. Three times a week.`

Stories:

- `Get Portfilo stories in your inbox.`
- `Deeper reporting, explainers, and analysis on business and technology.`

### Brand

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

Current shared header/footer wordmark presentation remains 5.8rem.

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists operationally in older surfaces. The coordinated public naming migration to `Newsletter` remains a future task rather than an incidental change during current archive/acquisition work.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned core site is stable.

## Current News + Stories authority

The founder-approved architecture and archive/acquisition visual-system contract are recorded in `docs/PROJECT_STATE.md` and implemented in runtime.

Current model:

- one Astro editorial collection;
- required `section: news | stories`;
- separate `contentType` and `topic` dimensions;
- public topic values `business / technology / startup / ai`;
- News routes `/news` and `/news/[slug]`;
- Stories routes `/stories` and `/stories/[slug]`;
- existing published Story URLs preserved;
- homepage Feature + blue rail source Stories only;
- homepage News + Latest-news ticker source News only;
- header `News | Stories | Subscribe free`;
- `/latest`, pagination, filters and search remain deferred;
- optional editorial-image metadata supports source, alt, optional credit and generated-image disclosure;
- `/news` and `/stories` now consume one shared `EditorialArchive.astro` layout system;
- both archives use the same full-blue archive acquisition band with section-specific approved copy;
- article templates remain temporary and are not visual authority for the planned replacement template.

Initial News + Stories runtime implementation:

`f1e4b634d3675f99cec8e121b442509e28874c08`

Prior founder-authorized correction runtime included:

- `6e19872d70575609542003a4813f1a93d1f79c1c`;
- `4ae88632629596738f627866b32f4b64dea4ea73`;
- `1070c480dc013367ae9d646a395b30039e67a739` for the DEV image optional-credit typing fix.

Current archive/acquisition implementation:

- `cae3cb6ddf47b09284bf1444d2849e127b01edcd` — shared archive + shared acquisition foundation;
- `d58b6f060a24f807651276520745747296d31f54` — homepage migration to the shared footer acquisition.

## Current runtime authority

### Homepage

Current approved/implemented behavior:

- header `Portfilo | News | Stories | Subscribe free`;
- full Portfilo-blue newsletter hero;
- hero signup aligned to the same 52rem/right-column publication geometry used by Feature/News;
- Latest-news ticker retains its fixed black label and moves its headline rail automatically at a restrained constant speed when enough News inventory exists;
- ticker pauses for hover, keyboard focus, and manual interaction, remains manually scrollable, and is static under `prefers-reduced-motion`;
- Feature remains sourced from Stories only;
- homepage Feature and News share the same 52rem primary editorial column, right-column start, gap, and 64rem stacking breakpoint;
- homepage News DEV lead uses the real 16:9 development fixture rather than a gray placeholder;
- contextual Feature support copy is the founder-approved `Who made the move, what changed, and the details behind it.`;
- clearly synthetic News fixtures appear only in development when real published News inventory is absent;
- production never fabricates News;
- the old homepage-local footer newsletter block has been removed;
- the homepage now receives the shared dark `FooterAcquisition.astro` immediately before the compact SiteFooter;
- footer remains `Stories | Standards | Privacy` with the 5.8rem wordmark.

### Shared archive implementation

`src/components/EditorialArchive.astro` now owns the archive presentation used by both `/news` and `/stories`:

- 84rem shell;
- Stories-derived page-title, lead and supporting-row geometry;
- 16:9 lead/supporting image treatment where images exist;
- shared metadata-slot geometry with section-specific values;
- same dividers, spacing and breakpoints;
- full-width blue archive acquisition band between the lead package and supporting stream.

News keeps chronological current-news data and DEV-only fixture behavior. Stories keeps deeper-editorial metadata and author display. These data differences do not create separate layout systems.

### Shared footer acquisition

`src/components/FooterAcquisition.astro` is the canonical shared dark pre-footer acquisition section.

`src/components/SiteFooter.astro` now:

- renders the shared acquisition on substantive pages;
- excludes `/subscribe`, `/confirmed`, and the generated `/404` route;
- retains the compact footer navigation/content;
- aligns the footer endcap to the 84rem publication shell.

The existing article files still contain legacy page-local `article-newsletter` source blocks. Those are currently suppressed from rendered output by `SiteFooter.astro` so the shared footer acquisition is the visible article-page acquisition treatment until the article templates are reset.

### Development editorial imagery

`src/data/devEditorialImage.ts` defines the development-only test visual using:

`/images/homepage-feature-16x9.png`

Presentation code may use it in development when a real editorial item has no image metadata. This is for visual QA only and must not become production metadata or a generic production fallback.

### News

`/news` now uses the shared Stories-derived archive system rather than its former separate compact archive CSS/layout.

Production remains factual when News inventory is empty. Development uses clearly synthetic fixtures only when real published News inventory is absent.

### Stories

`/stories` remains the structural reference and now consumes the shared archive implementation rather than owning that layout privately.

The currently published Story `What actually makes starting a business hard?` retains its existing route and real image metadata.

### Article routes

`/news/[slug]` and `/stories/[slug]` remain temporary article implementations. The founder has indicated that these designs are being reset; they must not be treated as visual precedent for the replacement shared article template.

No replacement article-template design or implementation is authorized by the archive/acquisition pass.

## Motion authority

Ticker motion remains authorized only within the approved Latest-news contract:

- fixed `Latest news` label;
- approximately 30 px/sec constant headline-rail movement when enough inventory exists;
- seamless duplicate-sequence loop mechanics;
- duplicate sequence hidden from accessibility semantics;
- hover/focus/manual-interaction pause;
- manual horizontal scrolling retained;
- `prefers-reduced-motion` disables automatic movement;
- insufficient inventory remains static;
- no marquee, snapping, fades, parallax, red treatment, or entrance animation.

This does not authorize decorative motion elsewhere on the site.

## Rejected / historical work with zero current decision authority

Do not reintroduce:

- rejected homepage copy records `research/homepage-copy-v1.md` or `research/homepage-copy-v2.md`;
- Source Serif 4 homepage hero or Feature treatment;
- prior Homepage v3 composition;
- independently centered/narrowed homepage Feature shell;
- oversized/arbitrary-tall Feature rendering;
- blue-rail content bottom-pushed with `margin-top:auto`;
- square Portfilo right-rail placeholder;
- muted/light-blue hero;
- red normal-state ticker;
- entire ticker black;
- topic labels in the header;
- old `Latest` header navigation;
- old giant-number Stories archive treatment;
- old sticky article metadata rail as precedent for the replacement article template;
- separate News and Stories archive CSS/layout systems;
- the paper-background archive signup with only a blue top line;
- repeated/decorative mono scaffolding;
- fabricated production News;
- generic production fallback imagery;
- implementation-time global design changes without approval.

Historical copy/navigation records remain provenance only, including `docs/COPY_REPLACEMENT_CANDIDATE.md`, `docs/NAVIGATION_RESEARCH.md`, `docs/SITE_COPY_AND_IA_AUDIT.md`, `docs/SITE_COPY_IMPLEMENTATION.md`, and `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md` and must not be recreated.

## Validation authority

The current implementation has been source-inspected and branch/HEAD verified.

GitHub reports no attached commit-status checks and no workflow runs for `cae3cb6ddf47b09284bf1444d2849e127b01edcd`.

Fresh `npm run check`, `npm run build`, development rendered QA and production-equivalent preview have **not** yet been recorded as passing against the current `d58b6f060a24f807651276520745747296d31f54` runtime tree.

Do not describe A–C as technically or visually validated until the dedicated D QA pass is actually completed.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across a new execution-plan file.
