# C027 Visual Sourcing Plan

_Last updated: 2026-09-03_

_Status: PLANNING / NO IMAGE SELECTED OR GENERATED_

## Story

**Build things that make the next thing easier**

Topic: `Building`  
Content type: `Perspective`  
Author: `Louda Tuppal`

## Visual job

The image should give the featured Perspective a distinct editorial identity on the homepage and story page without pretending to be documentary evidence.

The story's visual idea is not generic ambition, hustle, success, or startup culture. It is **carryover**: one piece of work can leave something usable that changes the next starting point.

The visual should therefore support the article's central argument rather than illustrate every example in the prose.

## Design constraints

Follow `docs/DESIGN_DIRECTION.md`:

- prefer original/relevant imagery, diagrams, or typography-led compositions;
- avoid generic stock-photo mood imagery;
- do not present generated imagery as documentary evidence;
- keep the composition editorial, restrained, and readable;
- preserve strong mobile crops and meaningful alt text;
- do not add decorative 3D, gradient-first effects, or generic AI-publication aesthetics.

## Sourcing order

### 1. Original conceptual editorial illustration - RECOMMENDED

Create an original Portfilo illustration specifically for C027.

Why it fits:

- the article is conceptual rather than reported from a physical scene;
- no real person or location needs to be represented;
- the visual can express the central idea more precisely than a generic photograph;
- one visual system can be reused across homepage, article, newsletter, and social crops.

The image must read clearly as an illustration, not as a photograph presented as evidence.

### 2. Original/owned photography - USE ONLY IF GENUINELY RELEVANT

A real photograph can be stronger than an illustration if Portfilo has access to a meaningful scene, object, workspace, prototype, notes, or other material directly connected to the story.

Do not stage a generic laptop/desk/startup photograph merely to make the article look more human.

### 3. Licensed or free-to-use photography - FALLBACK

Use only if a specific image materially fits the story. Avoid broad search terms such as `entrepreneur`, `success`, `hustle`, `startup founder`, or `working on laptop` because they are likely to produce generic imagery.

Licensing and attribution must be checked at the source before use.

## Concept directions

### A. Modular carryover - RECOMMENDED

A restrained editorial composition showing two distinct structures or attempts. A small set of pieces from the first remain and become part of the second.

Important:

- do not use a literal staircase, ladder, mountain, finish line, or upward-arrow success metaphor;
- keep the transfer/carryover legible without turning the image into an infographic;
- use strong negative space and a small number of forms;
- Portfilo blue may carry the reusable element; red, if used at all, should be a very small editorial accent rather than decoration.

### B. Workbench / retained pieces

An abstract work surface where an attempt has been disassembled, but a few tools, components, notes, or modules remain organized for the next build.

Risk:
May become too literal or resemble productivity imagery.

### C. Artifact trail

A sequence of tangible outputs such as a rough sketch, finished object, marked-up document, or small published artifact, with one element visibly carried into a later frame.

Risk:
Can become busy and overly explanatory.

## Recommended visual direction

Proceed with **A. Modular carryover**.

The goal is a quiet, high-contrast editorial illustration with a clear visual relationship between `first attempt` and `next starting point`.

It should feel closer to a magazine illustration or print composition than to a motivational poster.

No text should be baked into the image. The headline and metadata already carry the words.

## Asset strategy

Create one master composition with the important visual information near the center so it survives multiple crops.

Preferred outputs from the same composition:

- homepage feature crop: approximately `4:5`;
- article hero: approximately `3:2` or a flexible editorial crop;
- social/share crop: `1.91:1` when Open Graph support is added;
- newsletter crop: derive from the same master rather than creating a different visual concept.

Do not distort the image to fit each surface. Crop from a shared master or export intentional variants.

## Technical implementation plan

The current story schema has no hero-image metadata. Before attaching the final image, add a small optional visual object to the story schema rather than hardcoding C027 into templates.

Proposed v0 fields:

```yaml
heroImage:
  src: /images/stories/<slug>/hero.webp
  alt: "..."
  credit: "Portfilo illustration"
  caption: "..." # optional; omit when it adds no information
```

Implementation should then:

1. render the image on the story page only when `heroImage` exists;
2. use the same image on the homepage featured treatment;
3. keep a typography-led fallback when a featured story has no image;
4. provide meaningful alt text based on what is visibly depicted, not the article thesis;
5. avoid a caption when it merely repeats the headline;
6. later pass the same asset into Open Graph/social metadata when that support is implemented.

## Current homepage state

C027 is now marked `featured: true`.

The homepage reads real published content from the `stories` collection:

- C027 is the dominant featured story;
- C009 appears under Latest;
- the old synthetic story fixtures and preview notice have been removed;
- a typography-led dark feature panel is the temporary fallback until a final C027 visual is selected.

## Next step

Before generating or sourcing an asset:

1. review a small set of editorial visual references for composition, texture, and restraint without copying any artist's style;
2. lock one concrete art direction for `Modular carryover`;
3. create 2-3 original concept variants;
4. evaluate them at homepage and story-page crop sizes;
5. select one;
6. add the hero-image schema and integrate the selected asset;
7. run responsive, alt-text, and render QA.

No image has been selected, generated, licensed, or published yet.
