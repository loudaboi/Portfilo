# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — FOLLOW-UP HOMEPAGE CORRECTION IMPLEMENTED / VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder approved the focused follow-up homepage correction and explicitly authorized implementation. That correction is now implemented on `build/portfilo-v0`. The next gate is fresh local validation followed by desktop/tablet/mobile visual QA. Earlier rejected square-placeholder and serif-Feature treatments have zero forward visual authority.

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
- do not create `/news`, delete/redirect `/stories`, or migrate schema/taxonomy during homepage QA.

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

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

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

FEATURE AREA
left: existing Feature image + Instrument Sans headline + dek
right: one continuous blue editorial/newsletter rail

NEWS
existing plain News hierarchy

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
- a 2 px Portfilo-primary-blue rule now frames the shared hero unit above and below;
- no vertical divider, colored hero background, shadow, gradient, rounded shell, or eyebrow;
- hero signup is constrained with the shared form-system sizing and remains responsive.

Hero and Feature-rail signup controls continue to use the same `NewsletterSignup` component so input/button height, typography, square geometry, border rhythm, and state behavior remain aligned even though available widths differ.

## Latest ticker

Preserved unchanged:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- blue category labels remain;
- no red treatment;
- no automatic movement yet.

Ticker motion remains a separate post-static approval task.

## Feature implementation

The rejected synthetic Feature placeholder is removed from the current homepage runtime.

Implemented:

- existing `public/images/homepage-feature-image.webp` is shown again;
- image preserves natural responsive height with no fixed-height crop;
- 3 px Portfilo-primary-blue top rule sits on the Feature image only;
- AI-generated editorial-image disclosure remains present;
- homepage Feature headline now uses Instrument Sans;
- homepage Feature dek now uses Instrument Sans;
- image -> headline -> short dek remains the order;
- no Feature eyebrow;
- no `A CLOSER LOOK` heading.

The current image remains a visual/layout asset for this pass and does not prevent a later editorial-image decision.

## Continuous blue editorial/newsletter rail

The square Portfilo right-rail placeholder is removed.

Current rail behavior:

1. contextual newsletter signup;
2. thin internal divider;
3. one current-news teaser with a short description when an eligible item exists;
4. `See the latest news →` link.

Desktop/tablet behavior:

- rail is a single continuous Portfilo-blue panel;
- the grid stretches it with the Feature module so both columns read as one composition;
- signup content remains top-aligned;
- the single Latest teaser is pushed toward the lower portion of the rail rather than creating a second nested card.

Responsive behavior:

- below the Feature/rail breakpoint the composition stacks;
- rail becomes normal content-height flow;
- Latest teaser uses normal spacing rather than desktop equal-height behavior;
- mobile order is Feature -> blue rail -> News.

Founder-approved contextual headline remains:

`There's more to it than the headline.`

A support description remains structurally present. Exact final contextual wording is still **OPEN / NOT YET APPROVED**. Runtime continues to reuse the already-approved primary newsletter support copy temporarily rather than inventing a new public claim. That temporary reuse has no final contextual-copy authority.

Current contextual CTA remains:

`Subscribe`

### Rail news-source behavior

During local development, the rail teaser uses the clearly synthetic first News fixture so visual QA can evaluate the completed rail.

Outside development, the rail uses the newest additional published story when one exists. If no additional eligible published item exists, the teaser is omitted rather than fabricating production news.

## Editorial image-top rule

Current approved homepage image treatment:

- Feature image uses a 3 px Portfilo-primary-blue top rule;
- current News development image placeholder already uses the same blue top-edge behavior;
- no border is added on the other three image edges;
- the rule follows responsive image width.

Do not apply this device indiscriminately to non-editorial visuals.

## Responsive requirement

Responsiveness is a hard completion requirement for every homepage visual change.

Current implementation is designed so:

- shared shell scales fluidly;
- hero remains `[content] [signup]` while space permits, then stacks;
- hero blue top/bottom rules stay aligned to the shared shell;
- ticker remains the only full-bleed element;
- Feature + blue rail remain side-by-side only while readable;
- tablet/mobile stack Feature then rail;
- Feature image uses responsive width and natural height;
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
- synthetic Feature image placeholder as the current visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero surface;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time global gutter/max-width changes without approval.

## Current sequence

1. post-v3 correction implementation — COMPLETE;
2. follow-up visual QA review — COMPLETE;
3. follow-up correction plan — COMPLETE;
4. follow-up implementation authorization — COMPLETE;
5. follow-up correction implementation — COMPLETE;
6. **fresh local `npm run check` + `npm run build` — ACTIVE NEXT STEP**;
7. desktop/tablet/mobile visual QA;
8. correct only visible regressions against the approved contract;
9. founder static-homepage approval;
10. add ticker motion as a separate narrow pass;
11. later News/Feature/Stories architecture and taxonomy work.

## Exact next task

### Validate and visually review the implemented follow-up homepage correction

Run locally:

```text
npm run check
npm run build
npm run dev
```

Then inspect at minimum:

- wide desktop/current normal browser viewport;
- 1440 px desktop;
- 1366 px laptop;
- tablet;
- approximately 390 px mobile.

Review specifically:

- shared content edge remains unchanged;
- hero blue top/bottom rules feel structural rather than decorative;
- hero and rail forms read as one control system;
- Feature image scale and blue top-image rule;
- Feature Instrument Sans headline/dek treatment;
- blue rail reaches a convincing desktop relationship with the Feature without feeling like an oversized empty slab;
- single Latest teaser gives the rail useful editorial weight without competing with the News section;
- rail becomes content-height after stacking;
- no horizontal overflow.

Do not reopen final contextual support copy during this layout QA unless the founder explicitly chooses to do so.

## Validation authority

Fresh `npm run check` and `npm run build` have **not yet been recorded as passing against this follow-up implementation**.

Do not claim a validation pass until those commands actually succeed.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
