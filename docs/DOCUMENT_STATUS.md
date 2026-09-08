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
- `skills/portfilo-anti-slop/SKILL.md` — mandatory evidence-first gate for nontrivial discretionary product/copy/design decisions.

### Product and state

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. The static homepage is founder-reported as validated and frozen. News + Stories content architecture and visual system are founder-approved. Runtime implementation is awaiting a separate explicit authorization.
- `docs/V0_SCOPE.md` — current v0 product and technical boundaries. Older clauses that conflict with the newer founder-approved News + Stories architecture or visual system in `PROJECT_STATE` are subordinate to `PROJECT_STATE`.
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

- `docs/DESIGN_DIRECTION.md` — current general visual principles. The founder-approved News + Stories visual contract is now recorded in `PROJECT_STATE` and is the implementation authority for `/news`, `/news/[slug]`, `/stories`, and `/stories/[slug]`.
- `docs/IMAGE_SYSTEM.md` — canonical editorial-image workflow and constraints. Canonical v0 primary story-image ratio remains 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/homepage-redesign-v1.md` — historical/provenance record for the homepage redesign process; frozen homepage runtime + `PROJECT_STATE` own active homepage authority where they differ.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only; current acquisition hero uses no image.
- `research/image-system/homepage-featured-cover-decision.md` — historical provenance for the prior Feature artwork; current homepage uses `public/images/homepage-feature-16x9.png`.

### Product-model / newsletter research and copy

- `research/portfilo-product-model-research-v1.md` — supporting research for the approved current-News + deeper-Stories model; research is not runtime authority by itself.
- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only.
- `research/editorial-lens-four-issue-pilot-v1.md` — founder-approved pilot, parked until core site completion.
- `research/homepage-copy-evidence-matrix-v1.md` — research/provenance only; superseded for exact public hero wording.
- `research/homepage-hero-copy-v3.md` — **CURRENT FOUNDER-APPROVED PRIMARY ACQUISITION WORDING AND OPERATING PROMISES**.

Current CTA authority:

- header CTA: `Subscribe free`;
- hero CTA: `Send me the news`;
- contextual side-rail CTA: `Subscribe`.

Founder-approved contextual headline:

`There's more to it than the headline.`

Exact final contextual support wording remains open. Current runtime temporarily reuses approved primary newsletter support copy rather than inventing a new claim.

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

Email infrastructure remains current. `Portfilo Brief` still exists operationally in places. The later public naming migration to `Newsletter` must be coordinated, not piecemeal.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned website is stable.

## Approved News + Stories authority

`docs/PROJECT_STATE.md` is the canonical implementation contract for the founder-approved News + Stories architecture and visual system.

### Content architecture

Approved model:

- one Astro editorial collection;
- explicit `section: news | stories`;
- `contentType` and `topic` remain separate dimensions;
- News routes: `/news`, `/news/[slug]`;
- Stories routes: `/stories`, `/stories/[slug]`;
- Feature and blue Stories rail source Stories only;
- homepage News and Latest-news ticker source News only;
- target header after `/news` exists: `News | Stories | Subscribe free`;
- target topics: `business / technology / startup / ai`;
- `startups` migrates to `startup`;
- `building` entries are audited individually;
- `/latest`, pagination, filters and search remain deferred.

### Visual system

Approved model:

- all four editorial surfaces inherit the frozen homepage publication language rather than the current old Stories styling;
- shared 84rem outer shell and responsive gutter discipline;
- Instrument Sans for display/UI and News body;
- Source Serif 4 for sustained Stories long-form body reading;
- IBM Plex Mono only for real utility/data/timestamp roles;
- Portfilo blue / ink / paper palette, square geometry, thin rules and flat surfaces;
- News archive = dense, chronological, text-forward, optional lead image;
- Stories archive = more breathing room, optional approved imagery, stronger lead package;
- News article = compact sans-led current-reading mode;
- Story article = long-form reading mode with serif body and sans display hierarchy;
- no old giant archive numbers, sticky metadata rails, duplicated metadata scaffolding, decorative mono indexing, card soup, gradients, glow or SaaS styling;
- primary editorial imagery remains optional 16:9; no production placeholder/fallback is manufactured;
- implementation may add only the approved minimal optional image metadata object: `src`, `alt`, optional `credit`, optional `generated`;
- both article families use one post-article newsletter acquisition unit with existing approved copy/behavior;
- responsive mobile becomes a single editorial column with no horizontal overflow.

Approval of this visual system does **not** authorize runtime implementation by itself.

## Current runtime authority

The frozen homepage currently implements:

- shared 84rem / 1344px shell;
- only Latest-news ticker is full-bleed;
- runtime header remains `Portfilo | Latest | Stories | Subscribe free` until `/news` exists;
- full blue newsletter hero;
- static/manual Latest-news ticker;
- selected `public/images/homepage-feature-16x9.png` Feature asset;
- 16:9 Feature presentation and 3px blue image-top rule;
- continuous blue newsletter/Stories rail;
- Feature + rail stack at 64rem / 1024px and below;
- homepage News hierarchy with 16:9 lead imagery;
- development-only News fixtures and production factual empty state;
- footer `Stories | Standards | Privacy`;
- matched 5.8rem header/footer wordmarks;
- no ticker motion;
- no News/Stories schema or route migration yet.

The current `/stories` archive and article runtime remain transitional old presentation. They must not be copied or preserved merely because they exist.

## Rejected / historical records with zero current decision authority

The following remain rejected/superseded:

- old Homepage v3 composition;
- Source Serif 4 homepage hero/Feature treatment;
- independently centered/narrowed Feature shell;
- oversized/tall Feature presentation;
- rail bottom-push with `margin-top:auto`;
- synthetic Feature placeholder as current target;
- square Portfilo rail placeholder;
- muted/light-blue hero;
- red normal-state ticker;
- whole ticker black;
- topic labels in homepage header;
- implementation-time global gutter changes without approval;
- hiding News in production because fixtures are absent;
- fabricated production News;
- old Stories archive giant numbered rows and experimental page scaffolding as forward design authority.

Historical copy/navigation records remain provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

`docs/EXECUTION_PLAN.md` must not be recreated; `PROJECT_STATE.md` owns active execution state.

## Validation authority

The founder reported the final static-homepage `npm run check`, `npm run build`, development rendered review and production-equivalent preview as passing.

This is user-reported local validation. The remote session did not independently execute those commands.

Any News/Stories runtime implementation requires fresh validation against the changed tree.

## Motion authority

Ticker movement remains deferred until the News/Stories runtime architecture exists so it can operate on the real News stream.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across a new execution-plan document.
