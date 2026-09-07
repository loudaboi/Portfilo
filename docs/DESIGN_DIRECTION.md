# Portfilo Design Direction

_Last updated: 2026-09-08_

## Objective

Portfilo should feel like a contemporary editorial product built for the internet, not a generic news template, SaaS landing page, AI-content product, or fake newspaper.

Current direction:

> **Premium editorial restraint + digital immediacy**

The design should make current News easy to scan, deeper editorial work pleasant to read, and newsletter acquisition easy to act on without turning the site into a marketing funnel with journalism underneath it.

For nontrivial discretionary visual/product decisions, apply:

`skills/portfilo-anti-slop/SKILL.md`

## Current homepage authority

Current founder-approved homepage contract:

`research/homepage-redesign-v1.md`

Despite the filename, that file now records the approved **Homepage v3** plan.

`docs/PROJECT_STATE.md` owns the current phase and implementation gate.

## Core visual principles

### 1. Editorial hierarchy before components

Use scale, typography, image treatment, placement, and whitespace to express editorial importance.

Avoid equal-card grids as the default. Cards are allowed only when they solve a real information problem.

### 2. Typography carries most of the identity

Prefer:

- strong sans-led publication hierarchy;
- disciplined reading typography;
- serif contrast where it creates a meaningful editorial mode;
- compact utility/metadata typography;
- natural variation in scale based on editorial importance.

Do not use repeated eyebrows, index labels, or typography tricks merely to make the page feel designed.

### 3. Whitespace is structural

Use deliberate whitespace to separate editorial jobs and protect reading rhythm.

Do not use arbitrary spacer blocks or oversized empty marketing regions to repair weak composition.

### 4. Brand color is structural, not decorative

Current palette:

- paper/off-white: `#f4f0e8` baseline, with restrained near-white variation allowed;
- ink: `#171614`;
- muted neutral: `#69655e`;
- line neutral: `#cbc5bb`;
- Portfilo blue: `#0050a4`;
- light blue: `#8fc7ff` as a brand reference/accent where justified;
- Portfilo red: `#b42318`.

Blue is the primary functional/editorial accent.

Red is rare and intentional. Do not mechanically balance blue and red across page regions.

Homepage v3 specifically rejects a large light-blue top signup surface and a red ticker treatment.

### 5. Mobile is first-class

Mobile is not a shrunken desktop composition.

Preserve readable line lengths, editorial order, usable form controls, accessible tap targets, and no horizontal page overflow.

## Homepage v3 visual contract

Approved structure:

```text
HEADER
Portfilo | Latest | Stories

EDITORIAL NEWSLETTER ACQUISITION AREA
warm paper surface
editorial proposition
stacked form + Subscribe free
restrained blue structural accent

LATEST STRIP
black Latest label only
light headline rail

FEATURE + CONTEXTUAL NEWSLETTER CARD
smaller uncropped Feature image + story copy
blue contextual signup card

NEWS
lead current item + supporting items

BLACK FOOTER ENDCAP
compact signup + minimal links
```

### Top newsletter acquisition area

The top signup should feel like the top of a publication, not a newsletter SaaS card.

Use:

- warm paper background;
- typography and spacing as the primary visual structure;
- Source Serif 4 as an allowed headline treatment;
- Instrument Sans for support copy and form UI;
- roughly 44–48 px headline on large desktop;
- roughly 170–200 px total section height;
- stacked form around 420–480 px maximum width;
- input and `Subscribe free` CTA at equal width;
- blue CTA with white text;
- one thin structural rule or restrained blue accent;
- no hero image;
- no `NEWSLETTER` eyebrow;
- no gradient, shadow, rounded card, decorative icon, or large colored background block.

### Latest strip

Use:

- full viewport width;
- near-black `Latest` identifier only;
- light headline rail;
- blue category accents where useful;
- static behavior until Homepage v3 visual approval.

Do not use the whole strip as a black bar and do not use red as the ticker treatment.

### Feature + contextual signup card

The Feature must be prominent without swallowing the viewport.

Use:

- dedicated module max roughly 88–92 rem;
- roughly 62–65% story / 30–34% card on large desktop;
- roughly 32–48 px gap;
- full image composition, no aggressive crop;
- target image roughly 800–850 px wide on large desktop;
- image → headline → short dek;
- serif headline roughly 40–48 px on large desktop;
- blue contextual newsletter card to the right;
- do not force the card to match the image height;
- mobile stacks story then signup card.

Approved contextual card headline:

`There's more to it than the headline.`

Exact support sentence remains a separate copy gate.

## Geometry and surfaces

Default toward:

- square or nearly square geometry;
- thin rules rather than heavy borders;
- flat surfaces;
- composition and spacing rather than shadows;
- image scale based on editorial importance.

Avoid by default:

- rounded newsletter cards;
- pill-heavy navigation;
- glassmorphism;
- default shadows;
- glow;
- decorative black panels in the page body;
- gradient blocks;
- `01 / 02 / 03` decoration;
- fake terminal styling;
- faux-print/newsprint texture on the UI itself.

## Typography

Baseline:

1. `Instrument Sans` for homepage interface/navigation/metadata and much display work;
2. `Source Serif 4` for long-form reading and meaningful editorial contrast;
3. `IBM Plex Mono` only for true utility/data/source/timestamp roles.

Avoid excessive monospace and repeated eyebrow systems.

## Images

Editorial imagery follows `docs/IMAGE_SYSTEM.md`.

Preferred modes when the editorial job supports them:

- owned/licensed/verified photography;
- approved generated editorial illustration;
- data/document/evidence visuals;
- typography-led/no-image treatment.

Homepage v3 uses no hero image. Imagery is concentrated on actual editorial content.

The existing Feature image remains valid and must retain its approved composition. Reduce its rendered scale by constraining the module rather than cropping the artwork.

## Motion

Motion remains subordinate to static composition.

Homepage v3 static layout must be implemented and visually approved before automatic ticker motion is added.

Later ticker motion should use:

- slow horizontal movement;
- pause behavior on hover/focus where applicable;
- stationary/manual reduced-motion fallback;
- touch-safe mobile behavior;
- CSS first;
- no obsolete `<marquee>`.

Avoid scroll-jacking, decorative parallax, fade-up on every section, or motion that delays reading.

## Accessibility

Required:

- semantic document structure;
- keyboard navigation;
- visible focus;
- sufficient contrast;
- meaningful link text;
- appropriate alt text;
- reduced-motion behavior;
- responsive text/layout without horizontal overflow.

Accessibility is part of completion, not later polish.

## Development fixture rule

Synthetic content may be used to test hierarchy, wrapping, density, and responsive structure only when it is clearly synthetic, clearly labeled, and excluded from production.

Do not fabricate realistic company/news claims merely to make a layout look populated.
