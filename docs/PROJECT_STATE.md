# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — HOMEPAGE V3 DESIGN APPROVED / IMPLEMENTATION AUTHORIZATION PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder has reviewed multiple homepage passes. Rejected implementation choices have zero visual authority. Homepage v3 is now the approved correction plan, but runtime implementation has not yet been authorized.

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

Founder-approved at this boundary:

- brand: **Portfilo**;
- product category: business and technology media product;
- newsletter/email acquisition is a primary conversion and recurring-reader relationship;
- **News** is the intended current/day-to-day editorial layer;
- **Features** remains the deeper editorial layer internally/currently;
- intended eventual coverage taxonomy remains `Business / Technology / Startup / AI`, but those labels are not homepage header navigation;
- `Building` is removed from the intended public coverage set;
- `Startups` becomes singular `Startup` in the intended public coverage set;
- Portfilo has no geographic product promise;
- Portfilo remains free in v0;
- public newsletter acquisition promises **latest news**, a **7-minute** read, and delivery **three times per week**;
- exact send days/times remain open;
- `briefing` is rejected as public homepage/newsletter acquisition language;
- the four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only. It is not homepage copy or a tagline.

## Information architecture state

Current homepage header remains:

`Latest | Stories`

Current behavior:

- `Latest` links to the homepage Latest/ticker area;
- `Stories` links to the existing `/stories` route;
- topic labels do not appear in the header;
- no Subscribe CTA appears in the header.

The deeper News / Features / Stories information architecture remains a later task. Do not create `/news`, delete/redirect `/stories`, or migrate schema/taxonomy during Homepage v3 work.

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

## Current content set

Published on the working branch:

- `src/content/stories/what-actually-makes-starting-a-business-hard.md`

Withdrawn to draft:

- `src/content/stories/build-things-that-make-the-next-thing-easier.md`;
- `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`;
- `src/content/stories/what-actually-changed.md`.

The published starting-business story remains the real Feature used for homepage visual QA.

## Homepage v3 approved design

Canonical composition record:

`research/homepage-redesign-v1.md`

Founder-approved Homepage v3 direction:

```text
HEADER
Portfilo
Latest | Stories

EDITORIAL NEWSLETTER ACQUISITION AREA
warm white / paper surface
editorial proposition + support line
stacked email field + Subscribe free
restrained blue structural accent

LATEST STRIP
black Latest label only
light headline rail

FEATURE + CONTEXTUAL NEWSLETTER CARD
left: smaller uncropped Feature image + headline + dek
right: blue newsletter card

NEWS
plain News heading
lead + supporting current stories

BLACK FOOTER ENDCAP
compact signup + minimal links
```

Morning Brew and BackScoop are composition references only. Do not copy their branding, colors, proprietary wording, or distinctive layout treatment.

## Homepage v3 top newsletter area

Approved changes from the current runtime:

- warm white / paper surface remains;
- no hero image;
- no `NEWSLETTER` eyebrow;
- no generic card/panel treatment;
- stronger editorial composition through type/spacing rather than a colored background block;
- headline may use Source Serif 4;
- target headline roughly 44–48 px on large desktop;
- target total desktop section height roughly 170–200 px;
- stacked form rather than the current stretched horizontal row;
- form roughly 420–480 px maximum on desktop;
- input and CTA same width;
- hero CTA is exactly `Subscribe free`;
- CTA uses Portfilo blue with white text;
- small free/unsubscribe note below;
- one restrained blue structural rule/accent is allowed;
- mobile stacks naturally.

Approved primary acquisition copy remains:

```text
Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

The 7-minute and three-times-per-week statements remain public operating promises.

## Latest strip

Approved static treatment:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail stays light;
- blue category labels may remain;
- no red ticker treatment;
- no automatic ticker movement in Homepage v3 static implementation.

Ticker motion remains the immediate post-static approval task.

## Feature + contextual newsletter card

The current runtime Feature is too large on wide desktop because the story column receives too much width while preserving the full image ratio.

Homepage v3 approved fix:

- constrain the Feature composition rather than crop the image;
- dedicated module maximum roughly 88–92 rem;
- desktop ratio roughly 62–65% story / 30–34% newsletter card;
- gap roughly 32–48 px;
- target Feature image roughly 800–850 px wide on large desktop;
- preserve full image composition;
- no fixed-height `object-fit: cover` crop;
- image → headline → short dek;
- headline roughly 40–48 px serif on large desktop;
- no Feature eyebrow;
- no `A CLOSER LOOK` title;
- newsletter card must not be stretched to image height;
- mobile stacks Feature then card.

Founder-approved contextual card headline:

```text
There's more to it than the headline.
```

Exact one-sentence support copy for this card remains **OPEN / NOT YET APPROVED**. Do not copy BackScoop's support wording or silently invent a public claim.

## News and footer

News stays below the Feature area with one plain `News` heading. Do not redesign News during Homepage v3 unless implementation exposes a concrete defect.

The near-black footer endcap remains approved for this pass. Do not redesign it unless QA exposes a defect.

## Current runtime state vs Homepage v3 target

Current runtime still reflects the prior correction pass, including:

- `Latest | Stories` header;
- warm-white top signup area;
- hero CTA currently `Send me the news`;
- hero form currently horizontal;
- corrected light ticker rail with black `Latest` label;
- Feature + newsletter card pairing;
- full uncropped Feature image, currently too large on wide desktop;
- temporary repeated primary newsletter copy in the Feature-side card;
- News below Feature;
- black footer endcap;
- no ticker motion.

These runtime details are not Homepage v3 authority where they conflict with the approved plan above.

## Newsletter behavior

Underlying newsletter behavior remains:

- email input;
- `/api/subscribe` Cloudflare Pages Function;
- beehiiv owns double opt-in, subscriber storage, delivery, unsubscribe, and deliverability;
- `reactivate_existing: true`;
- `send_welcome_email: false`;
- `double_opt_override: "on"`;
- confirmation success state remains `Check your inbox. Confirm your email to finish subscribing.`.

The coordinated public/email `Portfilo Brief` -> `Newsletter` migration remains deferred.

## Motion state

Automatic Latest ticker movement is not implemented yet by design.

Sequence remains:

1. approve Homepage v3 static design — COMPLETE;
2. explicitly authorize Homepage v3 implementation — **ACTIVE NEXT GATE**;
3. implement only the approved v3 correction;
4. run `npm run check` and `npm run build`;
5. desktop/mobile visual QA;
6. approve/fix static composition;
7. add ticker movement;
8. later News/Feature/Stories architecture and taxonomy work.

## Exact next task

### Homepage v3 implementation authorization gate

No runtime code is authorized by the design approval alone.

The founder may now explicitly authorize:

`Proceed with Homepage v3 implementation.`

Once authorized, implementation is limited to the approved v3 contract. Do not add ticker motion, taxonomy migration, new routes, article redesign, or unrelated visual changes.

## Validation authority

No fresh runtime validation was created by this docs-only approval record.

The current runtime must not be described as Homepage v3 or as newly validated until implementation occurs and actual `npm run check` / `npm run build` succeed.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
