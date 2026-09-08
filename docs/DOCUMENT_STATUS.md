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

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. A–D are complete; the shared News/Stories article-template design gate is current and implementation is not yet authorized.
- `docs/V0_SCOPE.md` — current v0 product/technical boundary document. Older clauses describing News/Stories architecture, legacy taxonomy, `/latest`, or ticker motion as future gates are subordinate to `PROJECT_STATE` where they conflict.
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

### Design and imagery

- `docs/DESIGN_DIRECTION.md` — current general visual principles. Homepage-specific passages that predate the current header, blue hero, ticker behavior, archive unification, or shared acquisition runtime are subordinate to `PROJECT_STATE` and current source.
- `docs/IMAGE_SYSTEM.md` — canonical editorial image rules; v0 primary story-image ratio remains 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.

Historical/provenance only:

- `research/homepage-redesign-v1.md`
- `research/image-system/homepage-hero-image-brief-v1.md`
- `research/image-system/homepage-hero-selection-v1.md`
- `research/image-system/homepage-featured-cover-decision.md`

Current homepage Feature asset remains `public/images/homepage-feature-16x9.png`.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only.
- `research/portfilo-product-model-research-v1.md` — supporting evidence for the approved current-News + deeper-Stories model.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only.
- `research/homepage-hero-copy-v3.md` — current founder-approved primary acquisition wording and operating promises.

Current CTA authority:

- header CTA: `Subscribe free`;
- hero CTA: `Send me the news`;
- contextual Feature-rail CTA: `Subscribe`.

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

The email infrastructure remains current. Older `Portfilo Brief` wording still exists on some deferred surfaces and must not be opportunistically changed during the article gate.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned core site is stable.

## Current runtime authority

### Homepage

Current approved/implemented behavior includes:

- header `Portfilo | News | Stories | Subscribe free`;
- full Portfilo-blue newsletter hero;
- shared 52rem-primary/right-column publication geometry;
- Latest-news ticker with restrained automatic movement when inventory supports it;
- Feature sourced from Stories only;
- homepage News and ticker sourced from News only;
- DEV-only synthetic News fixtures when real published News is absent;
- production never fabricates News;
- shared dark `FooterAcquisition.astro` before the compact SiteFooter;
- footer `Stories | Standards | Privacy` with 5.8rem wordmark.

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

News keeps current-news data and DEV fixture behavior. Stories keeps deeper-editorial metadata and author display. These differences do not create separate layout systems.

### Shared footer acquisition

`src/components/FooterAcquisition.astro` is the canonical dark pre-footer acquisition section.

`src/components/SiteFooter.astro`:

- renders the shared acquisition by default on substantive pages;
- excludes `/subscribe`, `/confirmed`, `/404`;
- allows an explicit page-level suppression for a justified local acquisition state;
- retains the compact footer navigation/content;
- aligns the footer endcap to the 84rem publication shell.

Production empty `/news` intentionally shows the contextual blue archive acquisition without immediately repeating the generic dark footer acquisition.

### Article routes

`/news/[slug]` and `/stories/[slug]` remain temporary article implementations.

The founder has explicitly reset those designs. They have **zero visual-precedent authority** for the replacement article template.

The current E proposal in `docs/PROJECT_STATE.md` recommends one shared article geometry with:

- top-loaded classification/headline/dek/byline/date hierarchy;
- optional restrained 16:9 hero;
- narrow reading shell;
- shared notes/correction geometry;
- existing shared dark footer acquisition;
- legitimate News/Stories metadata and reading-font differences without separate page geometry.

This proposal is awaiting founder approval. No replacement article implementation is authorized yet.

## Current validation authority

Archive/acquisition sequence A–D is validated.

Recorded against runtime HEAD `80349a49d6aa484d320d51b648c1964e2c3f7697` before the documentation-only closeout commits:

- founder rendered visual review: **PASS**;
- local `npm run check`: **PASS**;
- local `npm run build`: **PASS**;
- source review: **PASS after one narrow D fix**.

D fix:

`80349a49d6aa484d320d51b648c1964e2c3f7697` — `Guard empty archive acquisition state`.

GitHub exposes no attached automated CI/status checks for this branch. Do not convert that absence into either a pass or a failure; the recorded local checks are the validation authority.

The later dedicated multi-width full-site responsive audit remains sequence H and is not complete.

## Current implementation commits

Archive/acquisition runtime:

- `cae3cb6ddf47b09284bf1444d2849e127b01edcd` — shared archive + acquisition foundation;
- `d58b6f060a24f807651276520745747296d31f54` — homepage migration to shared footer acquisition;
- `80349a49d6aa484d320d51b648c1964e2c3f7697` — production empty-archive acquisition guard.

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
- old sticky article metadata rail as precedent;
- separate News/Stories archive CSS systems;
- separate News/Stories replacement article geometry;
- paper-background archive signup with only a blue top line;
- repeated/decorative mono scaffolding;
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
