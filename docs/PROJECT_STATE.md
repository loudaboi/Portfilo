# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — APPROVED POST-V3 HOMEPAGE CORRECTION IMPLEMENTED / VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder visually rejected the prior Homepage v3 composition. Those rejected choices have zero forward visual authority. The newer post-v3 correction plan was founder-approved and is now implemented on `build/portfilo-v0`.

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

Current homepage header now implements:

`Portfilo | Latest | Stories | Subscribe free`

Rules:

- `Latest` links to the homepage ticker area;
- `Stories` continues to use `/stories`;
- `Subscribe free` is a header CTA;
- topic labels do not appear in the header;
- deeper News / Features / Stories information architecture remains a later task;
- do not create `/news`, delete/redirect `/stories`, or migrate schema/taxonomy during homepage QA.

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

## Governing homepage composition

Canonical record:

`research/homepage-redesign-v1.md`

Implemented target:

```text
SHARED CONTENT SHELL
one common alignment for header, hero, Feature area, News, footer-inner
working desktop shell: 84rem / 1344px max
only ticker is full-bleed

HEADER
Portfilo | Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
left: approved headline + support copy
right: stacked signup form
Instrument Sans
hero CTA: Send me the news

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

MAIN FEATURE AREA
left: development Feature image placeholder + headline + dek
right: stacked rail
  blue contextual signup block
  square Portfilo brand visual placeholder

NEWS
existing plain News hierarchy

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

Morning Brew and BackScoop remain composition references only. The approved lesson is compact publication/signup adjacency and hierarchy, not their colors, branding, typography, or wording.

## Shared shell invariant

This is a hard homepage rule:

- header inner content, top signup inner content, Feature area, News, footer newsletter inner content, and site footer inner alignment use the same shell;
- current implementation uses `--content-max: 84rem` and a responsive `--shell-gutter`;
- individual homepage sections must not invent independent global centering/max-width rules;
- internal grids may vary inside the shell;
- **only the Latest ticker may be full-bleed**.

This exists specifically to prevent the repeated indent drift seen in rejected passes.

## Current runtime implementation

### Header

Implemented in `src/components/SiteHeader.astro`:

- Portfilo wordmark retained at the current restrained scale;
- `Latest | Stories` retained;
- `Subscribe free` CTA restored;
- topic labels remain absent;
- homepage header alignment follows the shared shell.

### Top newsletter signup

Implemented in `src/pages/index.astro`:

- warm paper / near-white surface;
- `[content] [signup]` desktop relationship;
- Instrument Sans hero headline;
- approved headline: `Get ahead in business and tech in 7 minutes.`;
- approved support copy unchanged;
- hero CTA: `Send me the news`;
- stacked email field + CTA in the right column;
- no hero image;
- no blue full-section background;
- no `NEWSLETTER` eyebrow;
- no independent hero shell.

### Latest ticker

Preserved:

- full viewport width;
- black/ink `Latest` identifier only;
- light headline rail;
- blue category labels;
- static behavior;
- no red treatment.

### Feature + stacked right rail

Implemented:

- actual Feature artwork is removed from homepage layout QA for now but the asset remains in the repository;
- left column uses a clearly synthetic 16:9 Feature image placeholder;
- Feature headline + dek remain below the placeholder;
- right rail stacks two blocks rather than stretching one card;
- top block is the blue contextual newsletter signup;
- bottom block is a square brand visual placeholder using the approved ink Portfilo wordmark;
- mobile/tablet behavior stacks naturally.

Founder-approved contextual card headline remains:

`There's more to it than the headline.`

A description slot is now present. Because exact contextual support wording remains open, the current implementation temporarily reuses the already-approved primary newsletter support copy rather than inventing a new public claim. This is **not final contextual card copy**.

Current contextual card CTA is `Subscribe`.

### News and footer

- News remains structurally unchanged apart from shared-shell alignment;
- dark footer newsletter endcap remains;
- site footer homepage alignment now follows the same shared shell;
- no unrelated footer redesign occurred.

## Explicitly rejected recent choices

These have zero forward homepage authority:

- Source Serif 4 hero headline;
- prior Homepage v3 hero composition;
- hero CTA `Subscribe free` as the in-page hero action;
- independently centered/narrowed Feature shell that changes the global page edge;
- oversized Feature presentation;
- current Feature artwork as a required layout dependency during this QA pass;
- muted/light-blue full hero surface;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time global gutter/max-width changes without approval.

## Motion state

Automatic Latest ticker movement remains deliberately unimplemented.

Sequence:

1. post-v3 correction plan — COMPLETE;
2. implementation authorization — COMPLETE;
3. correction implementation — COMPLETE;
4. **fresh local `npm run check` + `npm run build` — ACTIVE NEXT STEP**;
5. desktop/mobile visual QA;
6. correct only visible regressions against this contract;
7. founder static-homepage approval;
8. add ticker motion as a separate narrow pass;
9. later News/Feature/Stories architecture and taxonomy work.

## Exact next task

### Validate and visually review the corrected homepage

Run locally:

```text
npm run check
npm run build
npm run dev
```

Then inspect at minimum:

- wide desktop / current normal browser viewport;
- 1440×900 class desktop;
- 1366×768 laptop if available;
- mobile around 390 px width.

Review specifically:

- one consistent content edge from header through Feature/News/footer;
- only ticker is full-bleed;
- header CTA balance;
- hero `[content] [signup]` density and Instrument Sans treatment;
- `Send me the news` hero CTA;
- Feature placeholder scale;
- left Feature / stacked right rail balance;
- blue contextual signup block description slot;
- square Portfilo brand placeholder size;
- News appearing at the right vertical point;
- no horizontal overflow on mobile.

Do not treat the temporary repeated primary support copy in the contextual card as final wording. Exact contextual support copy remains a later copy gate.

## Validation authority

Fresh `npm run check` and `npm run build` have **not yet been recorded as passing against this correction implementation**.

Do not claim a validation pass until those commands actually succeed.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
