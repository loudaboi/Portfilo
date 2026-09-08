# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — FINAL STATIC HOMEPAGE QA CORRECTIONS IMPLEMENTED / LOCAL VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder approved and explicitly authorized one narrow final static-homepage consistency pass after the dedicated visual QA audit. That pass is now implemented on `build/portfilo-v0` and intentionally does not reopen the accepted homepage composition.

Implemented final static-homepage QA corrections:

1. Feature + blue rail now stack at the existing `64rem` / 1024 px boundary instead of waiting until `52rem`;
2. the News lead image treatment is now canonical 16:9 at every viewport;
3. newsletter controls inside the blue hero and blue rail now use a high-contrast white focus outline while retaining the existing 3 px thickness and offset;
4. Feature -> News transition spacing was tightened by reducing only Feature bottom spacing to `clamp(1.5rem, 2.5vw, 2.25rem)`;
5. the stale footer label `Features` was replaced with `Stories`, preserving the `/stories` route and the rest of the footer unchanged.

The next gate is fresh local validation plus rendered QA at the required widths. No deployment, merge-to-main, or release approval has been given.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

`docs/PROJECT_STATE.md` alone owns the current phase and exact next task.

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

`main` remains the release boundary. No merge to `main` without intentional release review.

## Approved current product direction

- brand: **Portfilo**;
- product category: business and technology media product;
- newsletter/email acquisition is a primary conversion and recurring-reader relationship;
- **News** is the intended current/day-to-day editorial layer;
- **Stories** is the current public deeper-editorial label and remains routed through `/stories`;
- intended eventual coverage taxonomy remains `Business / Technology / Startup / AI`, but those labels are not homepage header navigation;
- Portfilo has no geographic product promise;
- Portfilo remains free in v0;
- public newsletter acquisition promises **latest news**, a **7-minute** read, and delivery **three times per week**;
- exact send days/times remain open;
- `briefing` is rejected as public homepage/newsletter acquisition language;
- the four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Homepage static composition now treated as provisionally frozen

The core homepage composition should not be reopened unless rendered QA exposes a concrete regression.

Current homepage header:

`Portfilo | Latest | Stories | Subscribe free`

Current footer navigation:

`Stories | Standards | Privacy`

Shared-shell rule:

- header inner content, hero inner content, Feature area, News, footer newsletter inner content, and site footer alignment use the same shell;
- runtime uses `--content-max: 84rem` / 1344 px maximum with responsive shell gutters;
- individual homepage sections must not invent independent global centering/max-width rules;
- **only the Latest-news ticker may be full-bleed**.

Current homepage composition:

```text
HEADER
Portfilo | Latest | Stories | Subscribe free

BLUE NEWSLETTER HERO
left: approved headline + support copy
right: signup form
white headline / softened white support
translucent-on-blue input
paper/white CTA with Portfilo-blue text
responsive Instrument Sans typography

FULL-WIDTH LATEST NEWS TICKER
hugs directly under hero
compact height
stationary black `Latest news` label
light headline rail with blue category metadata
static/manual behavior for now

FEATURE AREA
left: approved restrained 16:9 monochrome Feature image + headline + dek
right: continuous blue newsletter/Stories rail on large desktop
Feature + rail stack at <=64rem / 1024 px

NEWS
plain News heading
canonical 16:9 lead image treatment at all widths
local development: one lead + four supporting synthetic fixtures
production: no fabricated journalism; factual empty state when no real News inventory exists

BLACK FOOTER ENDCAP
compact signup
Stories | Standards | Privacy
```

## Static homepage freeze list

Do not change without a concrete founder-approved defect:

- business and technology positioning;
- public homepage copy;
- full Portfilo-blue hero;
- Instrument Sans homepage direction;
- shared 84rem / 1344 px shell and global gutters;
- header IA and labels;
- header and footer wordmark assets and their intentional hierarchy;
- hero signup composition and square geometry;
- ticker color treatment and `Latest news` label;
- approved 16:9 Feature image;
- Feature 3 px blue image-top rule;
- AI-generated editorial-image disclosure;
- Feature image -> headline -> dek hierarchy;
- continuous blue rail concept;
- rail order: signup -> divider -> Stories -> teaser -> `Read more stories →`;
- normal-flow rail content with no bottom push;
- News lead/supporting hierarchy;
- development-only News fixture policy;
- production empty-state policy;
- footer black endcap and wordmark treatment.

Ticker motion remains a separate post-static-freeze implementation pass.

## Latest ticker motion gate

The current ticker remains static/manual until the homepage passes rendered QA and receives founder static-homepage approval.

Future approved-direction behavior should be evaluated as a separate narrow pass:

- keep the black `Latest news` label stationary;
- move only the headline rail;
- slow constant horizontal velocity;
- seamless duplicated sequence with no visible restart;
- pause on hover, keyboard focus, and manual interaction;
- preserve manual horizontal scrolling;
- disable automatic motion under `prefers-reduced-motion`;
- no marquee element, snapping, fades, parallax, or decorative entrance animation.

Do not implement ticker motion during the current static QA gate.

## Content / fixture behavior

Current `src/content.config.ts` still permits legacy topics:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

The currently published Feature metadata was narrowly corrected from `building` to `business`; this is not the full taxonomy migration.

Local development uses clearly synthetic fixture content to test homepage density and hierarchy. The fixture warning remains visible. Production excludes those fixtures and must not fabricate journalism.

The blue Stories rail uses one development-only deeper-story teaser locally. Outside development it uses eligible real published inventory or a factual empty state.

## Responsive requirement

Responsiveness is a hard completion requirement.

Current intended behavior:

- shared shell scales fluidly;
- hero remains `[content] [signup]` while space permits, then stacks;
- hero typography reduces explicitly across tablet/mobile breakpoints;
- newsletter controls retain usable touch-target height;
- ticker remains the only full-bleed element;
- Feature + blue rail stack at `64rem` / 1024 px and below;
- blue rail becomes normal content-height when stacked;
- News grid stacks at `52rem` and below;
- Feature and News imagery use 16:9;
- forms fill available width without horizontal overflow;
- header CTA keeps the existing deliberate compact treatment.

Required rendered QA:

- wide desktop/current browser viewport;
- 1440 px desktop;
- 1366 px laptop;
- 1024 px / tablet-small-laptop boundary;
- approximately 390 px mobile;
- approximately 375 px mobile;
- approximately 320 px narrow mobile.

At approximately 320 px, inspect the header specifically. Do not modify it unless the actual rendered result shows overflow or unacceptable crowding.

## Explicitly rejected homepage choices

These have zero forward authority:

- Source Serif 4 hero or homepage Feature headline/dek treatment;
- prior Homepage v3 composition;
- independently centered/narrowed Feature shell;
- oversized or arbitrary tall Feature rendering;
- rail content pushed to the bottom with `margin-top:auto`;
- square right-rail placeholder;
- muted/light-blue hero;
- earlier warm-paper hero with blue framing rules as the active direction;
- red normal-state ticker treatment;
- entire ticker black;
- topic labels in the header;
- implementation-time global gutter/max-width changes without approval;
- hiding News in production because development fixtures are excluded;
- fabricating production News.

## Current sequence

1. production-safety homepage corrections — COMPLETE;
2. blue responsive hero variant — COMPLETE;
3. populated homepage QA dataset — COMPLETE;
4. dedicated homepage visual QA audit — COMPLETE;
5. final narrow static-homepage correction plan + founder authorization — COMPLETE;
6. final narrow static-homepage correction implementation — COMPLETE;
7. **fresh local validation + rendered visual QA — ACTIVE NEXT STEP**;
8. founder static-homepage freeze decision;
9. ticker motion as a separate narrow pass;
10. remaining page redesign order: **Subscribe -> Stories -> Standards -> Privacy**;
11. later News/Stories architecture and taxonomy work;
12. Social Visual System / distribution work after the core site is finished.

## Exact next task

### Validate and visually review the final static-homepage correction pass

Pull the current working branch, then run:

```text
npm run check
npm run build
npm run dev
```

Use development mode first to inspect the populated QA dataset.

Then inspect:

- wide desktop/current normal browser viewport;
- 1440 px;
- 1366 px;
- 1024 px;
- approximately 390 px;
- approximately 375 px;
- approximately 320 px.

Review specifically:

- 1366/1440 desktop Feature + rail composition is unchanged;
- at 1024 px the Feature appears first and the blue rail stacks below it cleanly;
- the stacked rail is content-height and does not visually overpower the Feature;
- News lead image remains 16:9 at desktop, tablet, and mobile;
- keyboard focus is clearly visible on hero and blue-rail signup controls;
- Feature -> News transition feels tighter without making the News divider cramped;
- footer reads `Stories | Standards | Privacy`;
- mobile stack remains Feature -> rail -> News;
- no horizontal overflow;
- 320 px header remains usable and uncrushed.

After development-fixture QA, run:

```text
npm run preview
```

Confirm production-equivalent behavior:

- development fixtures are absent;
- News remains structurally present;
- Stories rail uses real published inventory or its factual empty state;
- current published ticker metadata does not expose `Building`;
- no production-only layout regression appears.

## Validation authority

Fresh `npm run check`, `npm run build`, development rendered QA, and production-equivalent preview have **not yet been recorded as passing against this final static-homepage correction pass**.

The remote implementation session cannot execute the user's local npm validation environment. Do not claim a pass until those commands actually succeed and the required rendered widths are inspected.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
