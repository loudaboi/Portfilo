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

`docs/PROJECT_STATE.md` owns the current phase and implementation gate.

The previously implemented Homepage v3 composition was visually rejected. The current design authority is the later post-v3 correction plan.

## Core visual principles

### 1. Editorial hierarchy before components

Use scale, typography, image treatment, placement, and whitespace to express editorial importance.

Avoid equal-card grids as the default. Cards are allowed only when they solve a real information problem.

### 2. Typography carries most of the identity

Prefer:

- strong sans-led publication hierarchy;
- disciplined reading typography;
- serif contrast only where it creates a meaningful reading/editorial mode;
- compact utility/metadata typography;
- natural variation in scale based on editorial importance.

For the current homepage correction, the hero returns to **Instrument Sans**. The rejected Source Serif 4 hero treatment is not precedent.

Do not use repeated eyebrows, index labels, or typography tricks merely to make the page feel designed.

### 3. Whitespace is structural, not ornamental

Use deliberate whitespace to separate editorial jobs and protect reading rhythm.

Do not use oversized empty marketing regions to signal premium design. Portfilo should feel intentionally dense enough to read as a publication.

### 4. One global homepage shell

The current homepage has a hard alignment invariant:

- header inner content, hero inner content, Feature area, News, and footer inner content share one common shell;
- preferred large-desktop working width is roughly **1280–1360 px**;
- the Feature placeholder edge is the canonical visual content edge;
- individual homepage sections must not invent independent global max-width/centering rules;
- internal grids may vary inside the shell;
- **only the Latest ticker is full-bleed**.

This rule exists to prevent repeated gutter/indent drift.

### 5. Brand color is structural, not decorative

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

The current homepage correction rejects a large light-blue hero surface and a red ticker treatment.

### 6. Mobile is first-class

Mobile is not a shrunken desktop composition.

Preserve readable line lengths, editorial order, usable form controls, accessible tap targets, and no horizontal page overflow.

## Current homepage visual contract

Approved structure:

```text
SHARED CONTENT SHELL
Header / Hero / Feature / News / Footer-inner

HEADER
Portfilo | Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
[content] [signup]
Instrument Sans
hero CTA: Send me the news
warm paper surface

LATEST STRIP
black Latest label only
light headline rail
full viewport width

FEATURE + STACKED RIGHT RAIL
left: development Feature image placeholder + headline + dek
right: blue contextual signup + square Portfilo brand placeholder

NEWS
lead current item + supporting items

BLACK FOOTER ENDCAP
compact signup + minimal links
```

### Header

Use:

- current approved Portfilo wordmark asset at the earlier restrained scale;
- `Latest | Stories` navigation;
- `Subscribe free` CTA button;
- no topic labels;
- shared shell alignment;
- no unrelated header redesign.

### Top newsletter acquisition area

The top signup should behave like a compact publication acquisition unit:

`[content] [signup]`

Use:

- warm paper background;
- Instrument Sans headline/support/UI;
- approved headline `Get ahead in business and tech in 7 minutes.`;
- approved support line;
- roughly 52–55% content / 45–48% signup internally on large desktop;
- roughly 40–56 px internal gap;
- hero CTA `Send me the news`;
- free/unsubscribe note close to the form;
- no hero image;
- no `NEWSLETTER` eyebrow;
- no huge independent hero container;
- no colored full-section background block;
- no serif hero experiment;
- no gradient, shadow, card shell, or decorative icon.

The header CTA remains `Subscribe free`; the in-page hero CTA remains `Send me the news`.

### Latest strip

Use:

- full viewport width;
- near-black `Latest` identifier only;
- light headline rail;
- blue category accents where useful;
- static behavior until the corrected homepage is visually approved.

Do not use the whole strip as a black bar and do not use red as the ticker treatment.

### Feature + stacked right rail

For the next layout pass, geometry is more important than final imagery.

Feature column:

- use a development image placeholder instead of the current Feature artwork;
- landscape proportion around 16:9 or slightly wider;
- roughly 64% of the shared module;
- placeholder -> headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` heading;
- keep Feature prominent without letting it dominate the viewport.

Right rail:

- roughly 32% of the shared module;
- roughly 32–40 px gap from the Feature;
- stack a blue contextual signup block above a square brand/editorial placeholder;
- square placeholder may center the approved ink/black Portfilo wordmark;
- do not generate/source final artwork during layout approval;
- do not stretch the newsletter block to match Feature height.

Approved contextual signup headline:

`There's more to it than the headline.`

A one-sentence support description is required structurally, but exact wording remains a separate copy gate.

### News and footer

News remains below the Feature/right-rail composition with its current plain `News` heading and development hierarchy.

The near-black footer endcap remains. Its inner content uses the same shared shell.

Do not redesign either section unless the approved shell exposes a concrete defect.

## Geometry and surfaces

Default toward:

- square or nearly square geometry;
- thin rules rather than heavy borders;
- flat surfaces;
- composition and spacing rather than shadows;
- image scale based on editorial importance;
- tighter publication density rather than oversized landing-page whitespace.

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

1. `Instrument Sans` for homepage interface/navigation/metadata and current homepage display work;
2. `Source Serif 4` for long-form reading and selective deeper editorial contrast, not the current hero;
3. `IBM Plex Mono` only for true utility/data/source/timestamp roles.

Avoid excessive monospace and repeated eyebrow systems.

## Images

Editorial imagery follows `docs/IMAGE_SYSTEM.md`.

Preferred modes when the editorial job supports them:

- owned/licensed/verified photography;
- approved generated editorial illustration;
- data/document/evidence visuals;
- typography-led/no-image treatment.

The current correction uses no hero image.

The existing Feature image remains a valid repository asset, but the next homepage layout pass deliberately uses a development placeholder so geometry can be judged independently of artwork.

The right-rail square visual is also a placeholder during the layout pass; final imagery is not authorized yet.

## Motion

Motion remains subordinate to static composition.

The corrected static homepage must be implemented and visually approved before automatic ticker motion is added.

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

Synthetic content and image placeholders may be used to test hierarchy, wrapping, density, and responsive structure only when clearly synthetic, clearly labeled, and excluded from production.

Do not fabricate realistic company/news claims merely to make a layout look populated.
