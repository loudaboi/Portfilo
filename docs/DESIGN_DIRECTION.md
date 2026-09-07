# Portfilo Design Direction

_Last updated: 2026-09-07_

## Objective

Portfilo should feel like a contemporary editorial product built for the internet, not a generic news template, SaaS landing page, AI-content product, or fake newspaper.

Current working direction:

> **Premium editorial restraint + digital immediacy**

The design should make current News easy to scan, deeper Features pleasant to read, and newsletter acquisition easy to act on without turning the site into a marketing funnel with journalism underneath it.

For nontrivial discretionary visual/product decisions, apply:

`skills/portfilo-anti-slop/SKILL.md`

before recommending a direction.

## Current homepage authority

Founder-approved composition contract:

`research/homepage-redesign-v1.md`

Current working-branch `src/pages/index.astro` is the **rejected first redesign attempt**. It may contain reusable behavior, but its layout, copy, scale, spacing, decorative choices, and hierarchy are not visual precedent.

The next homepage implementation must be a clean rebuild from the approved composition after homepage copy is approved and the exact selected hero asset is available.

## Core visual principles

### 1. Editorial hierarchy before components

Use differences in scale, typography, image treatment, placement, and whitespace to express editorial importance.

Avoid equal-card grids as the default. Cards are allowed only when they solve a real information problem.

### 2. Typography carries most of the identity

Prefer:

- strong sans-led homepage hierarchy;
- disciplined reading typography;
- compact metadata;
- serif contrast where it creates a meaningful slower Feature/reading mode;
- natural variation in scale based on editorial importance.

Do not use typography tricks merely to make the page feel designed.

### 3. Whitespace is structural

Use deliberate whitespace to separate editorial jobs and protect reading rhythm.

Do not maximize density merely because content exists.

Do not use arbitrary spacer blocks to repair a composition that should be solved by grid/flex/layout structure.

### 4. Evidence can be visual material

When the journalism supports it, source documents, data, diagrams, methodology notes, calculations, and other evidence can become visual material.

Do not make uncertain evidence look more authoritative through visual styling.

### 5. Mobile is first-class

Mobile is not a shrunken desktop composition.

On mobile:

- preserve a clear editorial reading order;
- maintain readable line lengths and strong hierarchy;
- simplify two-column compositions intelligently;
- avoid overlays/sidebars that obstruct reading;
- preserve accessible tap targets and navigation.

## Homepage composition

The approved homepage structure is:

```text
COMPACT HEADER
Portfilo + Business / Technology / Startup / AI
Latest | Features | Subscribe free

COMPACT NEWSLETTER HERO
copy column + selected hero visual

LATEST STRIP

THE LATEST
lead current item + supporting items/feed

A CLOSER LOOK
one deeper Feature

FINAL NEWSLETTER SIGNUP

MINIMAL FOOTER
```

### Hard text/image alignment rule

For desktop and large-tablet side-by-side modules, especially Hero and Feature:

- text and image live in the same grid row;
- top edges align;
- bottom edges align;
- the module reads as one rectangle;
- do not allow either side to hang materially lower;
- do not insert decorative filler to force equal height.

Once the module stacks on mobile, equal-height alignment no longer applies.

## Color

Current Portfilo palette:

- paper/off-white: `#f4f0e8` baseline, with restrained near-white variation allowed by the approved homepage composition;
- ink: `#171614`;
- muted neutral: `#69655e`;
- line neutral: `#cbc5bb`;
- Portfilo blue: `#0050a4`;
- light blue on dark surfaces: `#8fc7ff`;
- Portfilo red: `#b42318`.

Blue is the primary functional accent for links, focus, active states, and newsletter actions.

Red is rare and intentional. Do not use blue/red as mechanically balanced opposing page regions.

No gradient-first identity.

## Typography

Initial redesign baseline:

1. `Instrument Sans` for homepage, interface, navigation, metadata, and much display work;
2. `Source Serif 4` for long-form/body and meaningful Feature contrast;
3. `IBM Plex Mono` only for true utility/data/source/timestamp roles.

The redesign reopens typography only after the first faithful static composition demonstrates a concrete problem. Do not add font dependencies merely to signal novelty.

Avoid excessive monospaced labels and design-system decoration.

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
- decorative black panels;
- gradient blocks;
- `01 / 02 / 03` section-label systems used as decoration;
- fake terminal styling;
- faux-print/newsprint texture on the UI itself.

## Images

Editorial imagery follows `docs/IMAGE_SYSTEM.md`.

Preferred visual modes when the editorial job supports them:

- owned/licensed/verified photography;
- approved generated editorial illustration;
- data/document/evidence visuals;
- typography-led/no-image treatment.

No image is required merely because a section feels empty.

### Grain as Portfilo image language

Visible controlled print/film-like grain is an approved recurring trait for selected editorial imagery.

Use it on appropriate hero/Feature/editorial visuals, not on:

- page backgrounds;
- forms;
- buttons;
- body text;
- the whole interface.

Grain should remain clean enough that geometry/details read clearly. It should not become faux-vintage distress.

### New homepage hero

Current selection authority:

`research/image-system/homepage-hero-selection-v1.md`

Founder selected generated architectural candidate 2.

Required behavior:

- monochrome/grayscale;
- premium visible grain;
- contemporary architectural/city geometry;
- no embedded text/logos/UI;
- no documentary claim;
- live HTML disclosure such as `AI-generated editorial image`;
- stable crop beside the hero copy.

The exact binary is not currently committed. Do not regenerate or substitute it if unavailable.

### Older homepage Feature image

Existing assets:

- `public/images/homepage-feature-image.png`;
- `public/images/homepage-feature-image.webp`.

These remain valid for their previous Feature/runtime job. They are not the selected new hero merely because they already exist.

## Imagery anti-patterns

Reject by default:

- robot heads;
- glowing AI brains;
- neon circuitry/cyberpunk technology shorthand;
- handshakes;
- generic smiling business teams;
- laptop/phone closeups used as generic technology symbolism;
- anonymous executive staring at a skyline;
- stock office meetings;
- fake dashboards/screens/documents;
- fake logos;
- random abstract collage with no editorial job;
- national/cultural symbols used only as decorative geographic signaling.

## Motion

Motion is subordinate to static composition.

**No decorative motion before static desktop/mobile surfaces are approved.**

Later candidate motion:

- slow Latest ticker movement;
- visible pause/stop control;
- stationary/manual reduced-motion fallback;
- restrained link/CTA feedback;
- small image interaction only when useful.

Use CSS first. Do not add GSAP or another animation dependency unless a concrete approved interaction cannot be implemented cleanly without it.

Avoid:

- scroll-jacking;
- decorative parallax;
- fade-up on every section;
- motion that delays reading;
- movement added only to make the site feel premium.

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

Synthetic content may be used to test hierarchy, wrapping, density, and responsive structure only when it is:

- clearly labeled as development fixture material;
- obviously non-journalistic;
- excluded from production.

Do not fabricate realistic company/news claims merely to make a layout look populated.

## Design decision rule

A new visual device requires a job and evidence, not merely taste.

Before adding a nontrivial visual pattern, use the anti-slop skill to establish:

- what problem it solves;
- which approved constraints apply;
- what references/professional patterns justify the approach when needed;
- why simpler existing primitives are insufficient;
- what must not be copied from references.

Once a visual direction is founder-approved, implementation should execute it rather than silently redesign it.
