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

- `docs/PROJECT_STATE.md` — **CURRENT PHASE AND EXACT NEXT TASK**. As of 2026-09-08, the founder-approved production-safety homepage correction is implemented and fresh local validation + production-equivalent visual QA are pending.
- `docs/V0_SCOPE.md` — current v0 product and technical boundaries. Homepage-specific presentation clauses are subordinate to the newer correction contract where they differ.
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

- `research/homepage-redesign-v1.md` — **CURRENT FOUNDER-APPROVED HOMEPAGE PRODUCTION-SAFETY CORRECTION CONTRACT AND IMPLEMENTATION RECORD**.
- `docs/DESIGN_DIRECTION.md` — current general visual principles aligned to the implemented production-safety homepage contract.
- `docs/IMAGE_SYSTEM.md` — canonical editorial image rules; canonical v0 story-image ratio is 16:9 landscape.
- `docs/PHOTO_TREATMENT.md` — current photo treatment where applicable.
- `research/image-system/homepage-hero-image-brief-v1.md` — historical hero concept provenance only.
- `research/image-system/homepage-hero-selection-v1.md` — historical hero selection/provenance only; current top acquisition area uses no image.
- `research/image-system/homepage-featured-cover-decision.md` — historical provenance for the prior Feature artwork; current homepage uses the later founder-selected `public/images/homepage-feature-16x9.png` asset.

### Product-model / newsletter research and copy

- `research/newsletter-copy-reference-corpus-v1.md` — research corpus only; no copy authority by itself.
- `research/portfilo-product-model-research-v1.md` — useful internal research; `briefing` is rejected as public acquisition language.
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

### Email / deployment

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

The email infrastructure remains current. `Portfilo Brief` still exists operationally in places. The later public naming migration to `Newsletter` must be coordinated, not piecemeal.

### Audience / distribution

- `docs/SOCIAL_DISTRIBUTION.md` remains current strategy, but Social Visual System work is deferred until the redesigned website is stable.

## Rejected / historical records with zero current decision authority

### Rejected homepage copy

- `research/homepage-copy-v1.md` — **REJECTED / HISTORICAL / ZERO AUTHORITY**.
- `research/homepage-copy-v2.md` — **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**.

### Rejected recent homepage implementation choices

The following are superseded and must not be treated as precedent:

- Source Serif 4 hero headline;
- Source Serif 4 homepage Feature headline/dek;
- prior Homepage v3 hero composition;
- independently centered/narrowed Feature shell that changes the global left edge;
- oversized Feature presentation;
- arbitrary tall/natural-ratio homepage Feature rendering;
- blue-rail Latest content pushed to the bottom with `margin-top:auto`;
- synthetic Feature placeholder as the current visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero surface;
- red ticker treatment;
- entire ticker black;
- topic labels in the homepage header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time global gutter/max-width changes without explicit approval;
- hiding the entire News section in production because development fixtures are excluded;
- fabricating production news to fill layout space.

### Historical copy/navigation records

The following remain for provenance only:

- `docs/COPY_REPLACEMENT_CANDIDATE.md`;
- `docs/NAVIGATION_RESEARCH.md`;
- `docs/SITE_COPY_AND_IA_AUDIT.md`;
- `docs/SITE_COPY_IMPLEMENTATION.md`;
- `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

### Removed duplicate plan

`docs/EXECUTION_PLAN.md` was removed because it duplicated `docs/PROJECT_STATE.md`. It must not be recreated.

## Current runtime: implemented production-safety homepage correction

Current working-branch homepage now implements:

- one shared 84rem / 1344px maximum shell for header, hero, Feature, News, footer newsletter, and homepage footer alignment;
- only the Latest ticker remains full-bleed;
- header `Portfilo | Latest | Stories | Subscribe free`;
- compact `[content] [signup]` hero using Instrument Sans;
- hero CTA `Send me the news`;
- 2 px Portfilo-blue rule above and below the shared hero unit;
- deliberate paper breathing room above and below the Latest ticker;
- black-only `Latest` identifier with light ticker rail;
- selected `public/images/homepage-feature-16x9.png` Feature asset;
- canonical 16:9 homepage Feature presentation;
- large-desktop Feature media capped at approximately 52rem / 832 px and scaled fluidly downward;
- 3 px Portfilo-blue top rule on the Feature image;
- Instrument Sans Feature headline/dek;
- one continuous blue editorial/newsletter rail;
- contextual signup at the top of the rail;
- Latest block directly after the signup in normal document flow, with no bottom-push behavior;
- real Latest teaser when an eligible item exists;
- restrained factual lower-rail fallback when no second eligible published story exists;
- current published Feature topic corrected from `building` to `business`;
- News section remains structurally present in production;
- synthetic News fixtures remain local-development-only;
- production shows a restrained factual News empty state until real News inventory exists;
- dark footer endcap preserved;
- no ticker motion;
- no route/schema/full-taxonomy migration.

## Information architecture authority

Current homepage header presentation remains:

`Latest | Stories | Subscribe free`

The eventual relationship among News, Features, Stories, and Latest remains a later architecture decision. Do not infer route/schema migration from the current header wording.

Current content schema still permits:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

The currently published Feature now uses `business`, but the full schema migration is still pending.

## Image authority

### Current homepage Feature image

Current selected asset:

- `public/images/homepage-feature-16x9.png`

Current homepage presentation:

- 16:9 landscape;
- restrained large-desktop scale;
- responsive downward scaling;
- approved blue top-image rule;
- AI-generated editorial-image disclosure.

Older assets remain in the repository for provenance/possible later use:

- `public/images/homepage-feature-image.png`
- `public/images/homepage-feature-image.webp`

They are not the current homepage Feature visual authority.

### Square right-rail visual

The square Portfilo brand placeholder is **REJECTED** and removed from current runtime. It has zero forward design authority.

### Historical architectural hero

The prior selected architectural image remains provenance only. The current top acquisition area uses no hero image.

## Motion authority

Ticker movement remains deliberately deferred until the corrected static desktop/tablet/mobile composition is validated and founder-approved.

## Responsive authority

Responsiveness is a hard completion requirement for every homepage visual pass.

Required QA includes wide desktop, 1440 px, 1366 px, tablet, and approximately 390 px mobile. No horizontal overflow is acceptable.

The current blue rail may stretch beside the Feature on larger screens, but its internal Latest content remains top-flowing. On stacked layouts the rail becomes content-height.

## Validation authority

The production-safety runtime implementation exists, but fresh `npm run check`, `npm run build`, and production-equivalent preview have not yet been recorded as passing.

The implementation session could not execute local npm validation. Do not claim a pass until those commands actually succeed against the current branch.

## Maintenance rule

When a later founder decision supersedes an older record:

- preserve useful history;
- update this status map when stale material could mislead later work;
- update `docs/PROJECT_STATE.md` whenever the current phase or exact next task changes;
- do not duplicate current state across new planning documents.
