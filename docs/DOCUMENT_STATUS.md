# Portfilo Document Status

_Last updated: 2026-09-08_

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

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. As of 2026-09-08, the static homepage is founder-reported as validated and frozen, the News + Stories content architecture is founder-approved, and News + Stories visual/system planning is the active next task.
- `docs/V0_SCOPE.md` — current v0 product and technical boundaries. Older clauses that conflict with the newer approved News + Stories architecture in `PROJECT_STATE` are subordinate to it.
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

- `research/homepage-redesign-v1.md` — historical/provenance record for the homepage redesign process. The current frozen homepage runtime and `PROJECT_STATE` now own the active homepage authority where they differ.
- `docs/DESIGN_DIRECTION.md` — current general visual principles; News + Stories visual planning must inherit the frozen homepage system and may not treat old editorial-page styling as authority.
- `docs/IMAGE_SYSTEM.md` — canonical editorial image rules; canonical v0 story-image ratio is 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only; current top acquisition area uses no image.
- `research/image-system/homepage-featured-cover-decision.md` — historical provenance for the prior Feature artwork; current homepage uses `public/images/homepage-feature-16x9.png`.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — useful internal research and supporting evidence for the approved two-layer current-News + deeper-Stories model; `briefing` is rejected as public acquisition language.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only; superseded for exact public hero wording.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED PRIMARY ACQUISITION WORDING AND OPERATING PROMISES**.

Current CTA authority:

- header CTA: `Subscribe free`;
- hero CTA: `Send me the news`;
- contextual side-rail CTA: `Subscribe`.

Founder-approved contextual headline:

`There's more to it than the headline.`

A support description remains required beneath it. Exact final contextual wording remains open. Current runtime temporarily reuses the already-approved primary newsletter support copy rather than inventing a new claim. That reuse is not final contextual copy authority.

### Brand

- `research/brand-system/wordmark-svg.md`
- `research/brand-system/icon-system.md`
- `research/brand-system/social-preview.md`
- canonical assets under `public/brand/` and `public/social/`.

Current shared wordmark presentation is 5.8rem in both header and footer across the current responsive system.

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists operationally in places. The later public naming migration to `Newsletter` must be coordinated, not piecemeal.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned website is stable.

## Approved News + Stories architecture authority

The current founder-approved architecture is recorded in `docs/PROJECT_STATE.md` and supersedes older uncertainty about the relationship among News, Stories, Features, and Latest.

Approved model:

- keep one Astro editorial collection;
- add explicit `section: news | stories`;
- keep `contentType` and `topic` as separate editorial dimensions;
- News routes: `/news` and `/news/[slug]`;
- Stories routes remain `/stories` and `/stories/[slug]`;
- homepage Feature and blue Stories rail source Stories only;
- homepage News and Latest-news ticker source News only;
- target header after `/news` exists: `News | Stories | Subscribe free`;
- target topics: `business / technology / startup / ai`;
- migrate `startups` to `startup`;
- audit `building` entries individually before removing that legacy topic;
- `/latest`, pagination, topic filters, and search remain deferred until real inventory justifies them;
- old `/stories` archive/article visuals have no forward design authority merely because they are currently implemented.

Architecture approval does **not** authorize runtime/schema implementation by itself.

## Current runtime authority

The frozen homepage currently implements:

- one shared 84rem / 1344px maximum shell for header, hero, Feature, News, footer newsletter, and homepage footer alignment;
- only the Latest-news ticker is full-bleed;
- current runtime header remains `Portfilo | Latest | Stories | Subscribe free` until `/news` exists;
- full Portfilo-blue newsletter hero using Instrument Sans;
- compact static/manual Latest-news ticker with black fixed label, light rail, and blue category metadata;
- selected `public/images/homepage-feature-16x9.png` Feature asset;
- canonical 16:9 Feature presentation and 3px blue image-top rule;
- one continuous blue newsletter/Stories rail;
- Feature + rail stack at 64rem / 1024px and below;
- homepage News hierarchy with 16:9 lead image treatment;
- development-only News fixtures;
- production factual News empty state;
- footer `Stories | Standards | Privacy`;
- matched 5.8rem header/footer wordmarks;
- no ticker motion;
- no News/Stories schema or route migration yet.

## Rejected / historical records with zero current decision authority

### Rejected homepage copy

- `research/homepage-copy-v1.md` — **REJECTED / HISTORICAL / ZERO AUTHORITY**.
- `research/homepage-copy-v2.md` — **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**.

### Rejected recent homepage implementation choices

The following are superseded and must not be treated as precedent:

- Source Serif 4 hero headline;
- Source Serif 4 homepage Feature headline/dek;
- prior Homepage v3 composition;
- independently centered/narrowed Feature shell that changes the global left edge;
- oversized Feature presentation;
- arbitrary tall/natural-ratio homepage Feature rendering;
- blue-rail content pushed to the bottom with `margin-top:auto`;
- synthetic Feature placeholder as the current visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero surface;
- red normal-state ticker treatment;
- entire ticker black;
- topic labels in the homepage header;
- implementation-time global gutter/max-width changes without explicit approval;
- hiding the entire News section in production because development fixtures are excluded;
- fabricating production News.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated.

## Validation authority

The founder reported the final static-homepage `npm run check`, `npm run build`, development rendered review, and production-equivalent preview as passing before instructing the project to proceed.

This is user-reported local validation. The remote session did not independently execute those local commands.

Any News/Stories runtime implementation will require fresh validation against the changed tree.

## Motion authority

Ticker movement remains deferred until News/Stories architecture implementation so it can operate on the real News stream.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across new planning documents.
