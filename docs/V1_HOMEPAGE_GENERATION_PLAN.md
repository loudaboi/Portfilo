# Portfilo v1 Homepage Generation Plan

_Last updated: 2026-09-14_

## Status

**FOUNDER-APPROVED PROCESS AUTHORITY**

## Decision job

Define exactly how the next Portfilo homepage visual will be designed and generated so the process cannot fall back into generic agency/editorial website patterns.

This document does **not** select the final homepage design.

## Approved facts and constraints

Current authority:

- `docs/V1_CREATIVE_DIRECTION.md`
- `docs/V1_IDENTITY_SYSTEM.md`
- `docs/V1_HOMEPAGE_POSITIONING.md`
- `docs/V1_HOMEPAGE_COPY.md`
- `skills/portfilo-anti-slop/SKILL.md`

Locked:

- Responsive Identity remains the broader creative direction;
- Sharp Ornamental 01 is the approved emblem;
- `PORTFILO` in all-caps Noto Serif Display SemiCondensed Medium is the approved wordmark treatment;
- the wordmark typeface is **not automatically the website typeface**;
- Problem-led software remains the positioning;
- approved hero headline remains **Software built around the problem.**;
- approved supporting copy remains unchanged unless separately reopened;
- public architecture remains `Work / Services / Hustle / Journal / Contact`;
- no fabricated Work, screenshots, product UI, client evidence, testimonials, metrics, or photography;
- the current runtime homepage is rejected as visual authority.

## Explicitly rejected / non-authoritative

The following have no authority over the next visual:

- Obsidian Precision;
- the rejected dark homepage;
- Aperture;
- the generated light Aperture mockups;
- Relay;
- Cut Scene;
- any generated filler copy, fake imagery, fake projects, or decorative section labels from prior mockups.

Aperture is rejected because its visual translation repeatedly collapsed into generic editorial/luxury website conventions.

## Unknowns that must remain open

Do not silently decide these inside image generation:

- website typography;
- hero display type treatment;
- light vs dark vs mixed environment;
- navigation composition;
- hero spatial mechanism;
- signature interaction;
- background material/texture;
- signal color;
- exact CTA treatment;
- homepage motion language.

## Core process correction

**Do not ask an image model to render the complete website screen.**

That method produced:

- hallucinated copy;
- approximate logos;
- fake content;
- generic typography;
- conventional agency layouts;
- visual decisions that were never approved.

The next homepage visual must be assembled from exact design inputs.

### Exact elements must be real

Use real SVG/HTML/CSS/Figma layers for:

- Portfilo emblem;
- Portfilo wordmark;
- all typography;
- approved copy;
- navigation labels;
- spacing;
- alignment;
- buttons/links;
- rules or UI geometry if any.

### Generative imagery has a narrow role

Image generation may be used only if the approved composition requires a non-text visual material such as:

- abstract spatial material;
- texture;
- atmosphere;
- non-literal imagery.

If used:

- generate the visual material separately;
- no logos;
- no text;
- no navigation;
- no UI;
- no fake screens;
- no fake products;
- no fake people presented as Portfilo work.

Then composite the generated material into the exact layout.

Image generation is optional, not required.

## Automatic rejection patterns

A concept fails before founder review if it defaults to any of the following without a specific approved reason:

- oversized editorial serif hero;
- using the Portfilo wordmark serif as the main site display type by default;
- black/off-white as the entire idea;
- giant white type on permanent black;
- thin-rule luxury minimalism;
- numbered `01 / 02 / 03` decorations;
- standard top-left-logo / top-right-nav agency header as an unexamined default;
- left-copy / right-visual split hero;
- centered manifesto hero;
- bento/card grids;
- pill CTAs;
- fake laptop/device mockups;
- random premium photography;
- mountains, architecture, sculptures, chrome, grain, or brutalist imagery added only for mood;
- giant emblem used as wallpaper;
- whitespace treated as the design concept;
- repeated scroll-reveal animation;
- conventional stacked agency sections;
- fake case studies or proof;
- invented slogans or supporting copy.

## Generation sequence

### Gate 1 — Website typography

Before composing a hero, resolve the website type system.

The approved wordmark remains Noto Serif Display Regular.

The site must test independent typography rather than automatically extending the logo serif into headings.

Output:

- no more than three typography systems;
- each shown using the exact approved hero headline and supporting copy;
- no website layout yet;
- founder selects one direction.

### Gate 2 — Structural wireframes

Create **three low-fidelity hero wireframes**.

Rules:

- desktop only;
- 1440 × 900 reference viewport;
- grayscale blocks and exact text only;
- real wordmark/emblem;
- no generated imagery;
- no styling intended to look finished;
- each composition must be materially different;
- each must explain its core spatial idea in one sentence.

The wireframe exists to judge composition before taste/polish obscures it.

Founder selects or rejects.

### Gate 3 — Exact hero prototype

Build one selected hero with:

- exact SVG identity assets;
- selected website typography;
- exact approved copy;
- exact navigation labels;
- exact geometry and spacing;
- no content below the first viewport;
- no invented page sections;
- no mobile version yet.

Preferred medium:

**real HTML/CSS or Figma-style exact vector/layout composition**, not a generated screenshot.

### Gate 4 — Optional visual material

Only if the hero concept has an intentional visual-material requirement:

1. define the visual-material job;
2. generate only that asset;
3. inspect it independently;
4. composite it into the exact hero;
5. reject it if the hero depends on generic mood rather than composition.

### Gate 5 — Founder visual approval

Judge only:

1. does it have a specific idea?
2. could it appear unchanged on a generic agency/SaaS site?
3. does the identity feel native to the composition?
4. is the typography distinct from the wordmark without fighting it?
5. does it communicate software rather than fashion/editorial/media first?
6. is anything present only because the frame felt empty?
7. would removing an element improve it?
8. is there a credible path from static hero to meaningful interaction?

If the answer is weak, stop and diagnose before another generation.

### Gate 6 — First interaction only

After the hero is approved, prototype exactly one behavior:

- first scroll state;
- navigation state;
- or another founder-approved signature interaction.

Do not design the rest of the homepage yet.

### Gate 7 — Page expansion

Only after hero + first interaction pass:

- Selected Work;
- Services;
- Hustle only if real content exists;
- Journal;
- Newsletter;
- Contact;
- mobile adaptation.

## First-generation prompt contract

When a visual-generation step is eventually authorized, the prompt must state:

- exact purpose of the generated asset;
- what portion of the final composition it occupies;
- required aspect ratio;
- material/lighting/texture constraints if relevant;
- explicit prohibition on text, logo, UI, devices, fake product imagery, fake portfolio content, and filler graphics.

The prompt must **not** ask for:

> a premium Portfilo website

or equivalent broad instructions.

## Stop condition

No new polished homepage image may be generated until:

1. this generation plan is founder-approved;
2. the website typography gate is completed;
3. a structural wireframe is founder-selected.

## Approval outcome

Founder approved this generation process.

## Typography outcome

Founder selected:

**Mona Sans**

Current typography authority:

`docs/V1_TYPOGRAPHY_DIRECTION.md`

## Structural wireframe outcome

Founder selected:

**A — Perimeter Field**

This selects the structural model only.

## Intervening identity refinement

**COMPLETE**

Founder-approved replacement wordmark:

**PORTFILO / Noto Serif Display SemiCondensed Medium / ALL CAPS**

The Sharp Ornamental 01 emblem remains unchanged.

The canonical final identity assets, brand exports, and runtime wordmark now use the approved all-caps geometry.

## Gate 3 outcome

**EXACT PERIMETER FIELD HERO PROTOTYPE COMPLETE / READY FOR FOUNDER REVIEW**

Review record:

`research/design/v1-perimeter-field-hero-prototype.md`

The prototype uses:

- approved identity;
- Mona Sans;
- exact approved hero copy;
- exact navigation labels;
- no generated imagery;
- no CTA;
- no below-fold content.

## Current gate

**FOUNDER HERO VISUAL REVIEW**

If approved, proceed to **Gate 6 — First Interaction Only**.

Do not expand the full homepage yet.
