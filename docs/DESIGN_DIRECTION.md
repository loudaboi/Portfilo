# Portfilo Design Direction

_Last updated: 2026-09-08_

## Objective

Portfilo should feel like a contemporary editorial product built for the internet, not a generic news template, SaaS landing page, AI-content product, or fake newspaper.

Current direction:

> **Premium editorial restraint + digital immediacy**

The design should make current News easy to scan, deeper Features pleasant to read, and newsletter acquisition easy to act on without turning the site into a marketing funnel with journalism underneath it.

For nontrivial discretionary visual/product decisions, apply:

`skills/portfilo-anti-slop/SKILL.md`

## Current homepage authority

Founder-approved composition contract:

`research/homepage-redesign-v1.md`

Homepage v2 was founder-approved on 2026-09-08 after reviewing the first static rebuild against Morning Brew and BackScoop composition references.

The current implementation target is a compact publication hierarchy, not a large marketing hero.

## Core visual principles

### 1. Editorial hierarchy before components

Use scale, typography, image treatment, placement, and whitespace to express editorial importance.

Avoid equal-card grids as the default. Cards are allowed only when they solve a real information problem.

### 2. Typography carries most of the identity

Prefer:

- strong sans-led homepage hierarchy;
- disciplined reading typography;
- compact metadata;
- serif contrast where it creates a meaningful slower Feature/reading mode;
- natural variation in scale based on editorial importance.

Do not use repeated eyebrows, index labels, or typography tricks merely to make the page feel designed.

### 3. Whitespace is structural

Use deliberate whitespace to separate editorial jobs and protect reading rhythm.

Do not maximize density merely because content exists. Do not use arbitrary spacer blocks to repair composition.

### 4. Evidence can be visual material

When journalism supports it, source documents, data, diagrams, methodology notes, calculations, and other evidence can become visual material.

Do not make uncertain evidence look more authoritative through styling.

### 5. Mobile is first-class

Mobile is not a shrunken desktop composition.

Preserve readable line lengths, editorial order, usable form controls, accessible tap targets, and no horizontal page overflow.

## Homepage v2 composition

Approved structure:

```text
COMPACT HEADER
smaller Portfilo wordmark
Business / Technology / Startup / AI
Features

LIGHT-BLUE NEWSLETTER BAND
approved acquisition copy
email + Send me the news

FULL-WIDTH LATEST TICKER
static until Homepage v2 visual approval

FEATURED STORY
image
headline
minimal supporting copy

NEWS
lead current item + supporting items

BLACK FOOTER ENDCAP
compact newsletter signup
minimal institutional/legal links
```

`Latest` is a chronological view, not a content type. `News` and `Features` are the intended editorial layers. `Stories` should not be treated as the public product name merely because `/stories` remains the current technical route.

Route/schema migration remains a later architecture task.

## Color

Current Portfilo palette:

- paper/off-white: `#f4f0e8` baseline, with restrained near-white variation allowed;
- ink: `#171614`;
- muted neutral: `#69655e`;
- line neutral: `#cbc5bb`;
- Portfilo blue: `#0050a4`;
- light blue: `#8fc7ff` as a brand reference, with restrained pale-blue surface derivations allowed for acquisition areas;
- Portfilo red: `#b42318`.

Blue is the primary functional accent for links, focus, active states, and newsletter actions.

Red is rare and intentional. Homepage v2 may use red as the small Latest ticker identifier accent.

A near-black footer is approved as a strong publication endcap.

No gradient-first identity.

## Typography

Baseline:

1. `Instrument Sans` for homepage, interface, navigation, metadata, and much display work;
2. `Source Serif 4` for long-form/body and meaningful Feature contrast;
3. `IBM Plex Mono` only for true utility/data/source/timestamp roles.

Avoid excessive monospace and repeated eyebrow systems.

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

## Images

Editorial imagery follows `docs/IMAGE_SYSTEM.md`.

Preferred modes when the editorial job supports them:

- owned/licensed/verified photography;
- approved generated editorial illustration;
- data/document/evidence visuals;
- typography-led/no-image treatment.

No image is required merely because a section feels empty.

Homepage v2 explicitly uses **no hero image**. Imagery should be concentrated on actual News and Feature content.

### Grain as Portfilo image language

Visible controlled print/film-like grain is an approved recurring trait for selected editorial imagery, not page backgrounds, forms, buttons, or the whole interface.

### Historical homepage hero selection

`research/image-system/homepage-hero-selection-v1.md` records a previously selected architectural image. That asset is historical provenance only for the current Homepage v2 no-image hero treatment and must not be silently reintroduced.

### Existing Feature image

Existing assets:

- `public/images/homepage-feature-image.png`;
- `public/images/homepage-feature-image.webp`.

These remain valid for the current Feature job.

## Imagery anti-patterns

Reject by default:

- robot heads;
- glowing AI brains;
- neon circuitry/cyberpunk shorthand;
- handshakes;
- generic smiling business teams;
- generic laptop/phone technology symbolism;
- anonymous executive skyline imagery;
- stock office meetings;
- fake dashboards/screens/documents;
- fake logos;
- random abstract collage without an editorial job;
- national/cultural symbols used only as decorative geographic signaling.

## Motion

Motion remains subordinate to static composition.

Homepage v2 static layout must be visually approved before automatic ticker motion is added.

The immediate later ticker motion treatment should use:

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

## Design decision rule

A new visual device requires a job and evidence, not merely taste.

Once a visual direction is founder-approved, implementation should execute it rather than silently redesign it.