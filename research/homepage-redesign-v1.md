# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: FOUNDER APPROVED / HOMEPAGE V2 CORRECTION AUTHORIZED / TICKER MOTION DEFERRED UNTIL STATIC VISUAL APPROVAL_

## Purpose

Portfilo is being redesigned as a contemporary business-and-technology publication with strong newsletter acquisition and clear editorial hierarchy.

The homepage must behave like a publication first and a signup funnel second.

Current reference evidence includes Morning Brew and BackScoop screenshots supplied by the founder on 2026-09-08. They are **composition references only**. Transfer useful page logic, not their visual identity, colors, branding, or copy.

## Public coverage labels

Approved reader-facing coverage labels:

`Business / Technology / Startup / AI`

`Building` is removed from the intended public coverage set and `Startups` becomes singular `Startup`.

This remains a presentation/product decision only until the later taxonomy migration. Do not migrate schema, routes, or story metadata during homepage work.

## Brand

Keep the approved Portfilo brand assets:

- `public/brand/portfilo-wordmark-color.svg`;
- `public/brand/portfilo-wordmark-ink.svg`;
- `public/brand/portfilo-wordmark-light.svg`.

Do not create a replacement logo or wordmark.

## Homepage v2 composition contract

Founder-approved on 2026-09-08:

```text
COMPACT HEADER
smaller Portfilo wordmark
Business / Technology / Startup / AI
Features
no header Subscribe CTA
no primary Latest navigation item

COMPACT LIGHT-BLUE NEWSLETTER BAND
Get ahead in business and tech in 7 minutes.
approved support line
email form
button: Send me the news
no hero image
no decorative eyebrow required

FULL-WIDTH LATEST TICKER
static for the Homepage v2 visual pass
slow motion added only after static visual approval

FEATURED STORY
no section eyebrow
no A CLOSER LOOK heading
story image first
story headline directly below
minimal supporting copy only when useful
this is the first editorial object after the newsletter/ticker area

NEWS
plain section title
lead current item
supporting current items
no repeated decorative eyebrow system

BLACK FOOTER ENDCAP
compact newsletter signup
minimal institutional/legal links
```

## Information architecture clarification

The founder identified a redundancy between `Latest` and `Stories`.

Current product interpretation:

- **News** is the current/day-to-day content layer;
- **Features** is the deeper editorial content layer;
- **Latest** is a chronological view, not a content type;
- **Stories** should not remain a reader-facing product label merely because `/stories` is the current technical route.

For Homepage v2:

- remove `Latest` from primary header navigation;
- keep `Features` as the reader-facing deeper-content label;
- keep existing `/stories` technical route for now;
- do not invent a new `/news` route or perform route migration during this visual correction pass.

The later News/Feature architecture gate will decide the clean route/schema model.

## Header

Requirements:

- reduce the wordmark scale by roughly 15–20% from Homepage v1;
- reduce overall header height;
- remove the header `Subscribe free` CTA because the newsletter acquisition area follows immediately below;
- remove `Latest` from primary navigation;
- expose `Business / Technology / Startup / AI` on wider screens where space allows;
- keep `Features` as the primary editorial navigation link;
- mobile must remain compact and usable without horizontal overflow.

## Newsletter band

The newsletter area is not a full-screen hero.

Use:

- a compact light-blue Portfilo surface;
- approved acquisition headline;
- approved support line;
- email field + `Send me the news` button;
- no hero image;
- no oversized empty marketing space;
- no decorative `NEWSLETTER` eyebrow required.

Target desktop content height is roughly 180–220 px where the viewport allows, so editorial content appears quickly.

Approved copy remains:

```text
Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

The 7-minute and three-times-per-week statements remain public operating promises.

## Latest ticker

The ticker should run full viewport width rather than stopping at the page content max-width.

For the Homepage v2 correction pass:

- full-width / full-bleed;
- mobile responsive and horizontally safe;
- red may be used as a restrained Portfilo accent for the ticker identifier;
- no fabricated production headlines;
- automatic movement remains deferred until the new static composition is visually approved.

Immediate post-static motion pass:

- slow continuous horizontal movement;
- pause on hover/focus where applicable;
- touch-safe mobile behavior;
- `prefers-reduced-motion` becomes stationary/manual;
- no obsolete `<marquee>`;
- CSS-first implementation.

## Featured story

The Feature is promoted above News in Homepage v2.

Current published Feature candidate:

`What actually makes starting a business hard?`

Requirements:

- immediately after the ticker;
- no `Feature` eyebrow;
- no `A CLOSER LOOK` section title;
- image first;
- headline directly below the image;
- dek may follow when useful, but metadata should remain minimal;
- no paired newsletter card in this first-screen Feature composition;
- use the existing approved story image and story packaging;
- aim for the image + headline to appear within the initial desktop viewport on common 1440×900 screens, without brittle fixed-viewport hacks.

## News

News follows the Featured story.

Use:

- one plain `News` section heading;
- lead current item;
- supporting current items;
- development fixtures only when unmistakably synthetic and excluded from production;
- no repeated `Current`, `The Latest`, `Feature`, or other decorative eyebrow stack.

Editorial importance determines scale. Do not default to equal-card grids.

## Footer

Use a strong near-black footer endcap.

Requirements:

- compact newsletter signup integrated into the dark endcap;
- minimal institutional/legal links;
- light wordmark on the dark surface;
- blue remains the primary action color;
- Portfilo red may appear as a small accent, not as a competing full-page color block.

## Visual rules

Working direction:

**premium editorial restraint + digital immediacy**

Use:

- warm near-white editorial canvas;
- near-black ink;
- Portfilo blue as primary functional/editorial accent;
- a restrained light-blue newsletter surface;
- Portfilo red rarely and intentionally;
- square geometry;
- thin rules;
- strong sans-led homepage typography;
- serif selectively for deeper editorial contrast;
- imagery concentrated on actual News/Feature content rather than decorative hero art.

Avoid:

- generic SaaS hero composition;
- gradients/glow/glass;
- rounded-card systems and pill-heavy UI;
- card soup;
- fake newspaper styling;
- decorative black panels in the body;
- excessive monospace;
- `01 / 02 / 03` decoration;
- repeated eyebrows used only to make sections look designed;
- decorative motion before static composition approval.

## Mobile

Expected order:

1. compact header;
2. compact newsletter band;
3. full-width Latest ticker;
4. Featured story image + headline;
5. News;
6. black footer endcap with compact signup and links.

Mobile is not a shrunken desktop grid. Preserve readable widths, usable form controls, and no horizontal page overflow.

## Homepage v2 implementation boundary

Founder approval on 2026-09-08 authorizes this Homepage v2 visual correction pass.

Authorized now:

- header resizing/navigation simplification;
- light-blue newsletter band;
- `Send me the news` signup button label on homepage signup instances;
- full-width static ticker;
- Featured-before-News ordering;
- removal of decorative homepage eyebrows/section titles described above;
- removal of the Feature-paired signup card;
- black footer endcap;
- responsive corrections required by this composition.

Not authorized in this pass:

- ticker auto-motion before static Homepage v2 visual approval;
- schema/taxonomy migration;
- new News routes;
- deletion/redirect of `/stories`;
- article reading-surface redesign;
- site-wide `Portfilo Brief` naming migration;
- deployment;
- merge to `main`;
- release.

After implementation, run actual `npm run check` and `npm run build` before claiming local validation, then stop for desktop/mobile visual QA.