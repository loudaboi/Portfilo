# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — FOLLOW-UP HOMEPAGE CORRECTION PLAN FOUNDER-APPROVED / IMPLEMENTATION AUTHORIZATION PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder reviewed the implemented post-v3 homepage correction. The shared-shell/header/hero/ticker direction is broadly retained, but the current Feature/right-rail treatment still needs a focused correction. The square Portfilo placeholder and homepage Feature serif treatment are rejected. A new follow-up correction plan is founder-approved but not yet authorized for runtime implementation.

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

Approved header target remains:

`Portfilo | Latest | Stories | Subscribe free`

Rules:

- `Latest` links to the homepage ticker area;
- `Stories` continues to use `/stories`;
- `Subscribe free` remains the header CTA;
- topic labels do not appear in the header;
- deeper News / Features / Stories information architecture remains a later task;
- do not create `/news`, delete/redirect `/stories`, or migrate schema/taxonomy during homepage correction work.

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

## Shared shell invariant

This remains a hard homepage rule:

- header inner content, top signup inner content, Feature area, News, footer newsletter inner content, and site footer inner alignment use the same shell;
- current implementation uses `--content-max: 84rem` / 1344 px maximum and a responsive shell gutter;
- individual homepage sections must not invent independent global centering/max-width rules;
- internal module grids may vary inside the shell;
- **only the Latest ticker may be full-bleed**.

Do not change the shared shell during the next correction pass.

## Retained homepage structure

The following are retained from the current correction unless a concrete QA defect appears:

```text
SHARED CONTENT SHELL
Header / Hero / Feature / News / Footer-inner

HEADER
Portfilo | Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
left: approved headline + support copy
right: signup form
Instrument Sans
hero CTA: Send me the news

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

FEATURE AREA
left: Feature image + headline + dek
right: one continuous blue editorial/newsletter rail

NEWS
existing plain News hierarchy

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

Morning Brew and BackScoop remain composition references only. The useful lesson is compact publication/signup adjacency and hierarchy, not their branding, colors, typography, or wording.

## Top newsletter signup follow-up treatment

The current `[content] [signup]` structure remains approved.

Additional founder-approved visual treatment for the next pass:

- keep Instrument Sans for hero headline/support/form UI;
- hero CTA remains `Send me the news`;
- add a thin Portfilo-primary-blue rule **above and below** the hero acquisition area;
- the rules frame the shared hero unit rather than creating a card;
- do not add a vertical divider, colored hero background, shadow, gradient, rounded shell, or eyebrow;
- keep the hero compact and publication-dense;
- hero and Feature-rail signup forms should visibly belong to one system: same control height, border thickness, typography, padding rhythm, square geometry, and 100% fill within their own form columns;
- exact pixel widths do not need to match when the parent columns differ.

Approved primary acquisition copy remains:

`Get ahead in business and tech in 7 minutes.`

`The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`

## Latest ticker

Keep unchanged for this pass:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- blue category labels may remain;
- no red treatment;
- no automatic movement during this static correction pass.

Ticker motion remains a separate post-static approval task.

## Feature treatment

The current homepage Feature serif treatment is rejected.

Next pass requirements:

- use **Instrument Sans** for the homepage Feature headline and dek;
- keep the Feature prominent without letting it dominate the viewport;
- use the existing homepage Feature image for the next layout pass rather than a synthetic image placeholder;
- the image remains a layout/visual QA asset and does not force a final future editorial-image decision;
- preserve the image responsively with `width: 100%` and natural height; no fixed-height crop;
- add a thin Portfilo-primary-blue rule along the **top edge of the Feature image**;
- this top-image rule becomes an approved restrained editorial image device and may also be used on News imagery;
- no border on the other three image edges;
- Feature order remains image -> headline -> short dek;
- no Feature eyebrow and no `A CLOSER LOOK` heading.

## Right editorial/newsletter rail

The square Portfilo brand placeholder below the current blue signup is **REJECTED** and must be removed.

Next pass target is one continuous blue rail aligned beside the Feature.

The rail should contain, in order:

1. contextual newsletter signup;
2. a thin internal divider;
3. one current-news teaser with a short description;
4. a clear link such as `See the latest news →`.

Behavior:

- desktop/tablet: the blue rail may stretch to the approximate bottom edge of the full Feature module so the two columns read as one composition;
- keep rail content top-aligned, not vertically centered;
- do not add a second card inside the rail;
- use only **one** current-news teaser so the rail does not compete with the News section below;
- on mobile the rail becomes normal content-height flow and must **not** preserve desktop equal-height behavior;
- mobile order remains Feature -> blue rail -> News.

Founder-approved contextual headline remains:

`There's more to it than the headline.`

A support description beneath it remains structurally required. Exact final contextual wording is still **OPEN / NOT YET APPROVED**. Do not copy BackScoop wording or invent a new unsupported public claim during implementation.

Current contextual CTA language may remain within already approved subscription wording unless separately reopened.

## Editorial image-top rule

Founder-approved homepage image treatment:

- a restrained **2–3 px Portfilo-primary-blue rule** may sit at the top of Feature and News imagery;
- the rule must match the responsive image width;
- do not box the image with additional borders;
- do not apply this device indiscriminately to non-editorial visuals.

## Responsive requirement

Responsiveness is a hard completion requirement for every homepage visual change, not a later polish task.

Minimum behavior:

- shared shell scales fluidly;
- hero remains `[content] [signup]` while space permits, then stacks naturally;
- hero blue top/bottom rules remain aligned to the shared shell;
- ticker remains the only full-bleed element;
- Feature + blue rail sit side-by-side only while both remain readable;
- tablet/mobile stack Feature then blue rail;
- images use responsive width and natural height with no fixed-height crop;
- image-top blue rule follows image width;
- blue rail is content-height on mobile;
- forms fill their available column without overflow;
- header CTA remains usable on narrow screens;
- no horizontal page scrolling.

Required visual QA after implementation:

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
- synthetic Feature image placeholder as the next-pass visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero surface;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time global gutter/max-width changes without approval.

## Current runtime vs approved follow-up target

Current runtime still contains the previous implemented correction, including:

- synthetic Feature placeholder;
- Source Serif 4 Feature headline/dek;
- blue contextual signup block plus square Portfilo placeholder;
- no blue hero top/bottom framing rules yet;
- no editorial image-top rule on the Feature because the Feature image is not currently shown;
- no latest-news teaser in the blue rail.

Those are runtime facts only. Where they conflict with the approved follow-up plan above, the follow-up plan governs future implementation.

## Current sequence

1. post-v3 correction implementation — COMPLETE;
2. follow-up visual QA review — COMPLETE;
3. follow-up correction plan — **FOUNDER APPROVED**;
4. explicit follow-up implementation authorization — **ACTIVE NEXT GATE**;
5. implement only the approved follow-up changes;
6. run fresh `npm run check` and `npm run build`;
7. desktop/tablet/mobile visual QA;
8. correct only visible regressions against the approved contract;
9. founder static-homepage approval;
10. add ticker motion as a separate narrow pass;
11. later News/Feature/Stories architecture and taxonomy work.

## Exact next task

### Follow-up homepage correction implementation authorization gate

No runtime edits are authorized by this design approval alone.

The founder may explicitly authorize:

`Proceed with the approved follow-up homepage correction implementation.`

Once authorized, do not expand scope into taxonomy, routes, article surfaces, ticker motion, new image generation, final contextual-copy invention, or unrelated redesign.

## Validation authority

This docs-only approval creates no new runtime validation result.

Do not claim the follow-up homepage correction is implemented or validated until implementation occurs and fresh `npm run check` / `npm run build` actually succeed.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
