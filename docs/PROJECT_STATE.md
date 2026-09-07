# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — PRODUCTION-SAFETY HOMEPAGE CORRECTION IMPLEMENTED / LOCAL VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder approved and explicitly authorized a production-safety homepage correction after visual QA exposed an oversized Feature image, rail-content bottom-push behavior, missing production News structure, a stale `Building` topic leak, and missing breathing room above the Latest ticker. That correction is now implemented on `build/portfilo-v0`.

The next gate is fresh local validation followed by desktop/tablet/mobile visual QA. No deployment or release approval has been given.

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
- **Features** remains the deeper editorial layer internally/currently;
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

## Homepage information architecture state

Current homepage header remains:

`Portfilo | Latest | Stories | Subscribe free`

Rules:

- `Latest` links to the homepage ticker area;
- `Stories` continues to use `/stories`;
- `Subscribe free` remains the header CTA;
- topic labels do not appear in the header;
- deeper News / Features / Stories information architecture remains a later task;
- do not create `/news`, delete/redirect `/stories`, or perform the full schema/taxonomy migration during homepage QA.

Current `src/content.config.ts` still permits:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

The currently published Feature metadata was narrowly corrected from `topic: building` to `topic: business` so the rejected public `Building` label no longer leaks into the homepage ticker. This is not the full taxonomy migration.

## Shared shell invariant

This remains a hard homepage rule:

- header inner content, top signup inner content, Feature area, News, footer newsletter inner content, and site footer inner alignment use the same shell;
- runtime uses `--content-max: 84rem` / 1344 px maximum with a responsive shell gutter;
- individual homepage sections must not invent independent global centering/max-width rules;
- internal module grids may vary inside the shell;
- **only the Latest ticker may be full-bleed**.

Do not change the shared shell during visual QA unless a concrete founder-approved defect is identified.

## Current implemented homepage composition

Canonical composition record:

`research/homepage-redesign-v1.md`

Current runtime:

```text
SHARED CONTENT SHELL
Header / Hero / Feature / News / Footer-inner

HEADER
Portfilo | Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
blue rule above
left: approved headline + support copy
right: signup form
Instrument Sans
hero CTA: Send me the news
blue rule below

PAPER SPACE

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

PAPER SPACE

FEATURE AREA
left: restrained approved 16:9 Feature image + Instrument Sans headline + dek
right: one continuous blue editorial/newsletter rail with top-flowing signup + Latest block

NEWS
plain News heading
local development hierarchy when fixtures exist
production-safe factual empty state when no real News inventory exists yet

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

Morning Brew and BackScoop remain composition references only. The useful lesson is compact publication/signup adjacency and hierarchy, not their branding, colors, typography, or wording.

## Top newsletter signup implementation

Implemented in `src/pages/index.astro`:

- warm paper / near-white surface;
- compact `[content] [signup]` structure retained;
- Instrument Sans headline/support/form UI;
- approved headline remains `Get ahead in business and tech in 7 minutes.`;
- approved support copy remains unchanged;
- hero CTA remains `Send me the news`;
- 2 px Portfilo-primary-blue rule frames the shared hero unit above and below;
- no vertical divider, colored hero background, shadow, gradient, rounded shell, or eyebrow;
- hero signup remains constrained with the shared form-system sizing and remains responsive.

Hero and Feature-rail signup controls continue to use the same `NewsletterSignup` component so control height, typography, square geometry, border rhythm, and state behavior remain aligned even though available widths differ.

## Latest ticker

Current static treatment:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- blue category labels remain;
- no red treatment;
- no automatic movement yet;
- deliberate paper breathing room now exists above and below the ticker;
- target spacing is approximately 24 px desktop and 16 px narrow mobile.

Ticker motion remains a separate post-static approval task.

## Feature implementation

Current approved implementation:

- selected asset: `public/images/homepage-feature-16x9.png`;
- homepage Feature uses the canonical 16:9 landscape image format;
- large-desktop Feature media is capped at approximately 52rem / 832 px and scales fluidly downward;
- arbitrary tall natural-ratio homepage rendering is rejected;
- no fixed-height crop is used;
- 3 px Portfilo-primary-blue top rule sits on the Feature image only;
- AI-generated editorial-image disclosure remains present;
- homepage Feature headline and dek use Instrument Sans;
- image -> headline -> short dek remains the order;
- no Feature eyebrow;
- no `A CLOSER LOOK` heading.

The 16:9 decision aligns with the canonical story-image ratio already defined in `docs/IMAGE_SYSTEM.md`.

## Continuous blue editorial/newsletter rail

The square Portfilo right-rail placeholder remains removed.

Current rail order:

1. contextual newsletter signup;
2. thin internal divider;
3. Latest block;
4. real teaser title + short description when an eligible item exists, otherwise a restrained factual empty state;
5. `See the latest news →` link.

Desktop/tablet behavior:

- rail remains one continuous Portfilo-blue panel;
- signup stays top-aligned;
- Latest content follows the signup in normal top-to-bottom flow;
- `margin-top:auto` / bottom-push behavior is removed;
- a tall image must not force the Latest content to the bottom of the rail.

Responsive behavior:

- below the Feature/rail breakpoint the composition stacks;
- rail becomes normal content-height flow;
- mobile order is Feature -> blue rail -> News.

Founder-approved contextual headline remains:

`There's more to it than the headline.`

A support description remains structurally present. Exact final contextual wording is still **OPEN / NOT YET APPROVED**. Runtime continues to reuse the already-approved primary newsletter support copy temporarily rather than inventing a new public claim. That temporary reuse has no final contextual-copy authority.

### Rail news-source behavior

During local development, the rail teaser uses the clearly synthetic first News fixture so visual QA can evaluate the completed rail.

Outside development, the rail uses the newest additional published story when one exists. If no additional eligible published item exists, the lower Latest block remains present with a restrained factual empty state rather than disappearing or fabricating production journalism.

## News production behavior

News remains structurally present below the Feature/rail composition in both development and production.

- development fixtures remain clearly synthetic and local-only;
- development keeps the existing lead + supporting News hierarchy for layout QA;
- production excludes those fixtures;
- when real News inventory does not yet exist, production shows a restrained factual empty state instead of removing the entire News section;
- this does not create a `/news` route or complete the later News/Feature schema architecture.

## Editorial image-top rule

Current approved homepage image treatment:

- Feature image uses a 3 px Portfilo-primary-blue top rule;
- current News development image placeholder uses the same blue top-edge behavior;
- no border is added on the other three image edges;
- the rule follows responsive image width.

Do not apply this device indiscriminately to non-editorial visuals.

## Responsive requirement

Responsiveness is a hard completion requirement for every homepage visual change.

Current implementation is intended so:

- shared shell scales fluidly;
- hero remains `[content] [signup]` while space permits, then stacks;
- hero blue top/bottom rules stay aligned to the shared shell;
- ticker remains the only full-bleed element;
- ticker breathing room reduces appropriately on mobile;
- Feature + blue rail remain side-by-side only while readable;
- Feature image is capped on large desktop and scales fluidly downward;
- tablet/mobile stack Feature then rail;
- image-top blue rule follows image width;
- blue rail becomes content-height on mobile;
- forms fill available width without horizontal overflow;
- header CTA remains governed by the existing responsive header behavior.

Required visual QA:

- wide desktop/current browser viewport;
- 1440 px desktop;
- 1366 px laptop;
- tablet;
- approximately 390 px mobile.

## Explicitly rejected recent choices

These have zero forward homepage authority:

- Source Serif 4 hero headline;
- Source Serif 4 homepage Feature headline/dek treatment;
- prior Homepage v3 hero composition;
- independently centered/narrowed Feature shell that changes the global page edge;
- oversized Feature presentation;
- arbitrary tall/natural-ratio homepage Feature rendering;
- rail Latest content pushed toward the bottom with `margin-top:auto`;
- synthetic Feature image placeholder as the current visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero surface;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time global gutter/max-width changes without approval;
- hiding the News section in production because fixtures are excluded;
- fabricating production News to fill the layout.

## Current sequence

1. post-v3 correction implementation — COMPLETE;
2. follow-up visual QA review — COMPLETE;
3. first follow-up correction implementation — COMPLETE;
4. production visual review exposed concrete regressions — COMPLETE;
5. production-safety correction plan + founder authorization — COMPLETE;
6. production-safety correction implementation — COMPLETE;
7. **fresh local `npm run check` + `npm run build` + production-equivalent preview — ACTIVE NEXT STEP**;
8. wide desktop / 1440 / 1366 / tablet / ~390 mobile visual QA;
9. correct only visible regressions against the approved contract;
10. founder static-homepage approval;
11. add ticker motion as a separate narrow pass;
12. later News/Feature/Stories architecture and taxonomy work.

## Exact next task

### Validate and visually review the production-safety homepage correction

First pull the current working branch, then run locally:

```text
npm run check
npm run build
npm run preview
```

Use `npm run dev` only as an additional development-fixture view. The production-equivalent preview is required because the previous defect came from DEV-only content behavior.

Then inspect at minimum:

- wide desktop/current normal browser viewport;
- 1440 px desktop;
- 1366 px laptop;
- tablet;
- approximately 390 px mobile.

Review specifically:

- shared content edge remains unchanged;
- hero blue top/bottom rules remain structural;
- clear paper space exists between hero rule -> ticker -> Feature;
- production ticker says `Business`, not `Building`, for the current Feature;
- approved 16:9 Feature image is visibly restrained rather than dominating the page;
- large-desktop Feature image does not exceed the intended scale;
- blue-rail Latest content stays near the signup in normal flow and is not pushed to the bottom;
- production rail keeps its lower Latest block even with no second story;
- News section remains present in production;
- development fixtures never leak into production preview;
- rail becomes content-height after stacking;
- no horizontal overflow.

Do not reopen final contextual support copy during this layout QA unless the founder explicitly chooses to do so.

## Validation authority

Fresh `npm run check`, `npm run build`, and production-equivalent preview have **not yet been recorded as passing against this production-safety correction**.

The remote implementation session could not execute local npm validation. Do not claim a validation pass until the commands above actually succeed on the working tree.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
