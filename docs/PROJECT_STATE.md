# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — POPULATED HOMEPAGE QA PASS IMPLEMENTED / LOCAL VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder approved and explicitly authorized the current homepage QA pass after the production-safety correction. The current pass keeps the accepted 16:9 Feature treatment and production-safe News behavior, adopts the blue hero variant for continued QA, tightens the Latest ticker, changes the lower blue-rail editorial block from Latest to Stories, and populates local development with clearly synthetic News fixtures so the complete homepage hierarchy can be judged before real inventory exists.

The next gate is fresh local validation plus desktop/tablet/mobile visual QA. No deployment or release approval has been given.

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
- **Features / Stories** are the deeper editorial layer currently represented by `/stories`;
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

Current runtime:

```text
SHARED CONTENT SHELL
Header / Hero / Feature / News / Footer-inner

HEADER
Portfilo | Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
full-width Portfilo blue surface
left: approved headline + support copy
right: signup form
white headline / softened white support
hero input uses the same translucent-on-blue treatment as the blue-rail signup
paper/white CTA with Portfilo-blue text
responsive hero typography

FULL-WIDTH LATEST NEWS TICKER
hugs directly under the hero
slightly reduced height
black `Latest news` label only
light headline rail
local development uses synthetic News fixtures

FEATURE AREA
left: restrained approved 16:9 Feature image + Instrument Sans headline + dek
right: one continuous blue editorial/newsletter rail with top-flowing signup + Stories block

NEWS
plain News heading
local development uses five clearly synthetic News fixtures
production keeps a factual empty state when no real News inventory exists yet

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

The earlier warm-paper hero / blue-rule clauses in `research/homepage-redesign-v1.md` are superseded by this current founder-approved QA variant wherever they conflict. That record remains useful provenance until the static homepage is finally approved and documentation is consolidated.

## Top newsletter signup implementation

Implemented in `src/pages/index.astro`:

- full-width Portfilo-primary-blue surface;
- compact `[content] [signup]` structure retained;
- Instrument Sans headline/support/form UI;
- approved headline remains `Get ahead in business and tech in 7 minutes.`;
- approved support copy remains unchanged;
- hero CTA remains `Send me the news`;
- previous blue top/bottom rules are removed;
- headline is white and support copy uses softened white;
- hero email input now matches the blue-rail signup field treatment: translucent blue/white surface, light border, light text;
- hero CTA remains paper/white with Portfilo-blue text;
- mobile/tablet typography has explicit responsive reduction instead of preserving near-desktop display scale;
- no vertical divider, shadow, gradient, rounded shell, or eyebrow.

Hero and Feature-rail signup controls continue to use the same `NewsletterSignup` component so control height, typography, square geometry, validation, and submission behavior remain aligned.

## Latest ticker

Current static treatment:

- full viewport width;
- label is now `Latest news`;
- only the label area is near-black/ink;
- headline rail remains light;
- blue category labels remain;
- no red treatment;
- no automatic movement yet;
- ticker now hugs the hero with no paper gap above it;
- vertical padding and minimum height were reduced slightly;
- a small paper gap remains below the ticker before the Feature area;
- local development uses the same clearly synthetic News fixtures as the News section so realistic headline lengths can be tested;
- production still excludes those fixtures.

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
3. `Stories` label;
4. one deeper-story teaser when an eligible item exists, otherwise a restrained factual empty state;
5. `Read more stories →` linking to `/stories`.

Desktop/tablet behavior:

- rail remains one continuous Portfilo-blue panel;
- signup stays top-aligned;
- Stories content follows the signup in normal top-to-bottom flow;
- `margin-top:auto` / bottom-push behavior remains removed;
- a tall image must not force the lower content to the bottom of the rail.

Responsive behavior:

- below the Feature/rail breakpoint the composition stacks;
- rail becomes normal content-height flow;
- mobile order is Feature -> blue rail -> News.

Founder-approved contextual headline remains:

`There's more to it than the headline.`

A support description remains structurally present. Exact final contextual wording is still **OPEN / NOT YET APPROVED**. Runtime continues to reuse the already-approved primary newsletter support copy temporarily rather than inventing a new public claim. That temporary reuse has no final contextual-copy authority.

### Stories rail source behavior

During local development, the rail uses one clearly synthetic deeper-story teaser solely to populate the Stories treatment for layout QA.

Outside development, the rail uses the newest additional published story when one exists. If no additional eligible published item exists, the Stories block remains present with a restrained factual empty state rather than fabricating published work.

## News development and production behavior

News remains structurally present below the Feature/rail composition in both development and production.

Local development currently uses five clearly synthetic fixture items with varied headline lengths and categories to test:

- one lead News item;
- four supporting items;
- ticker density;
- wrapping and scanability;
- desktop/mobile hierarchy.

The fixture warning remains visible: `Development fixtures only. Not Portfilo reporting.`

Production behavior:

- development fixtures are excluded;
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
- hero headline/support typography reduce explicitly across tablet and mobile breakpoints;
- hero controls retain usable touch-target height;
- ticker remains the only full-bleed element;
- ticker height and spacing reduce appropriately on mobile;
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
- approximately 390 px mobile;
- approximately 375 px mobile;
- approximately 320 px narrow mobile.

## Explicitly rejected recent choices

These have zero forward homepage authority:

- Source Serif 4 hero headline;
- Source Serif 4 homepage Feature headline/dek treatment;
- prior Homepage v3 hero composition;
- independently centered/narrowed Feature shell that changes the global left edge;
- oversized Feature presentation;
- arbitrary tall/natural-ratio homepage Feature rendering;
- rail content pushed toward the bottom with `margin-top:auto`;
- synthetic Feature image placeholder as the current visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero surface;
- previous warm-paper hero with blue top/bottom rules as the current active variant;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time global gutter/max-width changes without approval;
- hiding the News section in production because fixtures are excluded;
- fabricating production News to fill the layout.

## Current sequence

1. post-v3 correction implementation — COMPLETE;
2. production-safety correction implementation — COMPLETE;
3. 16:9 Feature / production News QA review — COMPLETE;
4. blue hero responsive variant — COMPLETE;
5. populated homepage QA plan + founder authorization — COMPLETE;
6. populated homepage QA implementation — COMPLETE;
7. **fresh local validation + populated development visual review — ACTIVE NEXT STEP**;
8. production-equivalent preview review;
9. wide desktop / 1440 / 1366 / tablet / 390 / 375 / 320 visual QA;
10. correct only visible regressions against the approved contract;
11. founder static-homepage approval;
12. add ticker motion as a separate narrow pass;
13. later News/Feature/Stories architecture and taxonomy work.

## Exact next task

### Validate and visually review the populated homepage QA pass

First pull the current working branch, then run locally:

```text
npm run check
npm run build
npm run dev
```

Use the development server first because the populated News and Stories fixtures are deliberately `DEV`-only and are the current layout-QA dataset.

Inspect at minimum:

- wide desktop/current normal browser viewport;
- 1440 px desktop;
- 1366 px laptop;
- tablet;
- approximately 390 px mobile;
- approximately 375 px mobile;
- approximately 320 px narrow mobile.

Review specifically:

- blue hero feels stronger than the prior paper version without becoming an oversized marketing block;
- hero input visually matches the blue-rail signup field;
- hero headline/support scale down meaningfully on mobile;
- Latest news ticker hugs the hero and its reduced height still feels readable;
- synthetic ticker headlines test realistic density without horizontal page overflow;
- approved 16:9 Feature image remains restrained;
- blue rail reads as newsletter signup + Stories, not a duplicated News module;
- one Stories teaser is enough to populate the rail without crowding it;
- News section hierarchy works with one lead and four supporting fixtures;
- mobile stack remains Feature -> rail -> News;
- no horizontal overflow.

After development-fixture QA, also run:

```text
npm run preview
```

Confirm production-equivalent behavior:

- development fixtures are absent;
- News section remains structurally present;
- Stories rail uses real published inventory or its factual empty state;
- current published ticker metadata does not expose `Building`;
- no production-only layout regression appears.

Do not reopen final contextual support copy during this layout QA unless the founder explicitly chooses to do so.

## Validation authority

Fresh `npm run check`, `npm run build`, development visual QA, and production-equivalent preview have **not yet been recorded as passing against this populated homepage QA implementation**.

The remote implementation session could not execute local npm validation. Do not claim a validation pass until the commands above actually succeed on the working tree.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
