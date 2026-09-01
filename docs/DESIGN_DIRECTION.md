# Portfilo Design Direction

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

Starting direction:

- near-black;
- off-white;
- restrained neutral scale;
- one sparse violet accent.

Violet should have semantic value, for example:

- active state;
- links/focus;
- series marker;
- selected data point;
- research/source signal.

Do not use violet as arbitrary decoration.

No gradient-first identity.

## Typography

Limit the system to a small set of roles:

1. primary sans / grotesk for interface and readable editorial use;
2. one expressive editorial/display face if it materially improves the identity;
3. mono for data, source metadata, timestamps, or technical labels.

Do not freeze exact font families until implementation/design testing.

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

Prefer:

- strong original/relevant photography;
- documentary imagery;
- clean diagrams;
- charts;
- source documents/details where legally appropriate;
- typography-led compositions.

Avoid:

- generic stock-photo mood boards;
- AI-generated imagery presented as documentary evidence;
- decorative visuals that imply facts not supported by reporting.

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

Before real editorial content is selected, use clearly labeled design fixtures to test:

- long headlines;
- long body text;
- figures;
- source notes;
- methodology;
- corrections;
- series metadata;
- mobile wrapping.

Fixtures must not present fabricated reporting as real Portfilo journalism.
