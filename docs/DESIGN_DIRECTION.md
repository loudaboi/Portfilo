# Portfilo Design Direction

_Last updated: 2026-09-04_

## Objective

Portfilo should feel like a contemporary editorial institution built for the internet, not a generic news site, SaaS landing page, or AI content product.

The visual language should inherit the discipline and expressive editorial qualities explored in the user's portfolio direction, including inspiration from highly art-directed portfolio/editorial work, while becoming more readable, repeatable, and institutional.

Do not copy a reference site literally.

## Internal design idea

**Contemporary editorial + technical intelligence + Filipino cultural confidence**

The interface should communicate:

- rigor;
- curiosity;
- ambition;
- restraint;
- clarity;
- cultural specificity without cliché.

## Visual principles

### 1. Typography carries the brand

Prefer:

- oversized editorial headlines;
- strong hierarchy;
- disciplined body typography;
- selective expressive type;
- compact metadata.

Avoid relying on decorative brand effects to create identity.

### 2. Evidence is visual material

Research should not feel like legal fine print.

Possible recurring editorial devices:

- source labels;
- methodology modules;
- large data points;
- confidence/limitation notes where editorially justified;
- chart annotations;
- report numbering;
- series/day markers.

The design should make evidence understandable and attractive without making uncertain findings look more authoritative than they are.

### 3. Use whitespace deliberately

Portfilo should feel calm enough for serious reading.

Do not maximize information density simply because content exists.

### 4. Composition over card soup

Avoid a homepage made from repeated identical boxes.

Use editorial hierarchy:

- one dominant story;
- secondary groupings;
- deliberate asymmetry;
- strong section transitions;
- varying compositions based on story importance and content type.

Cards are allowed when they solve a real information problem. They are not the default visual primitive.

### 5. Mobile is first-class

Do not shrink desktop.

On mobile:

- preserve strong type hierarchy;
- maintain readable line lengths;
- simplify compositions intelligently;
- keep one clear reading path;
- avoid cluttered sidebars or overlays;
- keep tap targets and navigation accessible.

## Color

The implemented v0 palette is:

- paper / off-white: `#f4f0e8`;
- ink / near-black: `#171614`;
- muted neutral: `#69655e`;
- line neutral: `#cbc5bb`;
- Portfilo blue: `#0050a4`;
- light blue for dark surfaces: `#8fc7ff`;
- Portfilo red: `#b42318`.

Blue is the primary functional accent for links, focus, active states, and other interface emphasis where the implementation uses an accent.

Red is a secondary brand/editorial accent. It should be sparse and intentional rather than used to balance a page mechanically.

For generated editorial imagery, follow `docs/IMAGE_SYSTEM.md`: default to grayscale/neutral imagery with zero or one approved Portfilo accent. Do not introduce unrelated hues.

No gradient-first identity.

## Typography

The implemented v0 typography baseline is:

1. `Instrument Sans` for interface, navigation, metadata, and much editorial display use;
2. `Source Serif 4` for long-form/body roles where a serif is used;
3. `IBM Plex Mono` for technical labels, source metadata, timestamps, and compact utility roles.

These are the current runtime families, not a permanent commitment for every future Portfilo product. Do not replace or expand them during v0 finalization without a concrete design requirement and visual regression review.

Avoid unnecessary font weights and styles.

## Layout

Use:

- strict responsive grid;
- strong vertical rhythm;
- dedicated reading measure;
- optional wider media/data measure;
- generous responsive gutters;
- clear hierarchy between editorial levels.

Story pages should optimize long-form reading before decorative composition.

## Components

Expected v0 primitives may include:

- SiteHeader
- SiteFooter
- Wordmark
- StoryHeader
- StoryMeta
- StoryBody
- StoryTeaser / StoryCard
- SeriesIndex
- SectionHeader
- NewsletterForm
- SourceNote
- DataPoint
- PullQuote
- Figure
- Methodology
- CorrectionNotice

Do not build component variants until an actual page requires them.

## Motion

Motion is subordinate to composition.

Start with native CSS.

Potential v0 motion:

- subtle page/section entrance;
- restrained reveal;
- small image/type movement where it helps hierarchy;
- interaction feedback.

Requirements:

- respect `prefers-reduced-motion`;
- do not make reading wait for animation;
- avoid scroll-jacking;
- do not add GSAP or another animation library unless CSS is demonstrably insufficient for a required interaction.

## Images and data

Editorial imagery must follow `docs/IMAGE_SYSTEM.md`.

Prefer:

- strong owned/licensed/verified photography when documentary truth is part of the image's value;
- approved generated editorial illustration when a conceptual or situational visual job is justified;
- clean diagrams;
- charts;
- source documents/details where legally appropriate;
- typography-led compositions.

Generated imagery is illustration, not evidence. It requires a researched visual decision, an approved story image brief before generation, visible synthetic/AI disclosure when published, and human final selection.

The homepage currently uses the separately approved universal feature image recorded in `research/image-system/homepage-featured-cover-decision.md`. That homepage decision does not automatically authorize generated images for individual stories.

Avoid:

- generic stock-photo mood boards;
- AI-generated imagery presented as documentary evidence;
- image-model-led concept selection without an approved brief;
- decorative visuals that imply facts not supported by reporting;
- generic business/AI visual clichés.

## Anti-patterns

Avoid by default:

- generic SaaS hero layouts;
- endless rounded cards;
- glassmorphism;
- gradient blobs;
- excessive shadows;
- dashboard aesthetics on editorial pages;
- dense newspaper mimicry;
- fake terminal aesthetics;
- decorative 3D;
- unnecessary parallax;
- animation for every scroll event;
- generic "AI publication" imagery.

## Accessibility

Design requirements include:

- semantic document structure;
- keyboard navigation;
- visible focus states;
- sufficient contrast;
- descriptive link text;
- meaningful alt text;
- reduced-motion behavior;
- responsive text/layout without horizontal overflow.

Accessibility is part of completion, not a later polish phase.

## Design fixture rule

Synthetic content-architecture fixtures remain development-only test material. They may be used to test long headlines, series ordering, draft filtering, wrapping, and other structural behavior, but they must remain excluded from public production routes where required.

Real published stories are now the primary visual QA material for editorial surfaces. Fixtures must never present fabricated reporting as real Portfilo journalism.
