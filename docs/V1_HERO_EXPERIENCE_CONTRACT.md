# Portfilo v1 Hero Experience Contract

_Last updated: 2026-09-15_

## Status

**SUPPORTING CONSTRAINT RECORD / DESIGN.MD OVERRIDES IMPLEMENTATION PROCESS**

This document defines the current Portfilo homepage hero experience.

It supersedes earlier hero-specific assumptions that conflict with it.

Parent authority:

- `docs/V1_CREATIVE_DIRECTION.md`
- `docs/V1_IDENTITY_SYSTEM.md`
- `docs/V1_HOMEPAGE_POSITIONING.md`
- `docs/V1_HOMEPAGE_COPY.md`
- `skills/portfilo-visual-direction/SKILL.md`

> Current visual implementation process is defined by `DESIGN.md`. This document retains approved constraints but must not be used to revive the detached storyboard/prototype workflow.

## Core thesis

**Portfilo should be quiet at rest and highly authored in state change.**

The static hero does not need a decorative object or complex realtime graphic.

Its identity comes from:

- approved Portfilo identity;
- black / graphite / silver material;
- clear composition;
- controlled typography;
- interaction;
- transition continuity;
- state change.

Motion and pointer behavior are part of the design system itself, not polish added after the static layout.

---

# 1. Color and material lock

For the homepage hero:

## Approved palette

- black;
- near-black;
- graphite;
- neutral silver-gray;
- off-white.

## Explicitly not approved

- blue;
- navy;
- teal;
- purple;
- colored glow;
- aurora treatment;
- neon signal color;
- metallic chrome effect.

A signal color may only enter the homepage later through a separate founder-approved decision.

## Background material

The OpenAI Business page is a reference **only** for:

- visible fine grain;
- dark material depth;
- soft uneven illumination;
- broad exposure rather than obvious gradient geometry.

Do not copy its blue/teal hue.

Portfilo translation:

**black -> charcoal -> graphite -> faint neutral silver exposure**

The grain must be visible enough to contribute material character even on a phone display.

It must remain refined rather than noisy.

No background element should read as:

- a blob;
- a spotlight;
- a glowing orb;
- a central object;
- a shader demo.

---

# 2. Identity composition lock

Approved assets remain:

- Sharp Ornamental 01;
- PORTFILO all-caps wordmark.

For the homepage hero:

**the emblem and wordmark must remain independent compositional elements.**

The combined horizontal lockup is founder-rejected for this surface.

The emblem may act as a compact stable interface anchor.

The wordmark may carry larger spatial weight where the composition benefits.

Their relationship should be created by:

- placement;
- scale;
- spatial tension;
- state;
- motion.

Do not mechanically attach them into a conventional top-left logo.

---

# 3. Composition anti-reference

The following topology is rejected:

`top-left logo + top-right nav + giant left headline + empty right field`

Do not revive it with:

- another font;
- different spacing;
- different grain;
- lower headline size;
- motion added afterward.

Also reject:

- giant sans headline as the hero's primary visual identity;
- decorative center object;
- fake product UI;
- fake Work imagery;
- cards added to occupy space;
- arbitrary asymmetry;
- detached muted support paragraph;
- filler labels or kickers.

The next composition must be materially different at the structural level.

---

# 4. Content hierarchy

Approved hero copy remains:

## Headline

**Software built around the problem.**

## Supporting sentence

**Portfilo designs and develops software around business needs and constraints, from internal systems and automation to practical AI integrations and customer-facing products.**

The proposition must be clearly readable, but it should not monopolize the viewport.

The identity itself should carry more of the visual presence than in the rejected giant-headline prototypes.

Typography remains open until the storyboard / composition is approved.

---

# 5. Navigation

Public architecture remains:

`Work / Services / Hustle / Journal / Contact`

Navigation should be:

- clearly usable;
- part of the interface state;
- not merely decorative header text;
- compatible with keyboard and touch;
- capable of driving contextual state later when real material exists.

Do not compromise basic navigation in pursuit of experimental behavior.

---

# 6. Motion contract

Motion is not a post-design effect.

The hero must be conceived through four connected states:

1. Rest;
2. Pointer / local interaction;
3. Navigation / selection state;
4. First-scroll transition.

## Motion character

- controlled;
- smooth;
- precise;
- calm;
- slightly cinematic;
- materially connected to layout/state.

Avoid:

- fade-up as primary motion;
- bounce;
- elastic curves;
- excessive stagger;
- scroll hijacking;
- perpetual parallax;
- random text animation;
- cursor gimmicks.

Implementation preference:

`HTML / CSS / SVG -> GSAP / Flip / View Transition -> WebGL only if later proven necessary`

Native scroll remains default.

---

# 7. Pointer contract

Keep the native pointer.

No custom cursor circle, follower, spotlight, magnetic dot, or decorative ring.

Pointer movement may affect the **surface or active content state**, not the cursor itself.

Initial behavior territory:

- subtle neutral-silver exposure shift;
- small directional material displacement;
- gentle persistence / settling;
- bounded response;
- no visible grain swimming.

On touch devices, omit pointer-only response cleanly.

---

# 8. State / navigation contract

Reference principles:

- 4WIDE: default and focus states can change information + visual material together;
- MetaLab: interaction may open alternate visual states rather than permanently filling the page;
- MERSI: content/media can maintain continuity across navigation;
- Dash: pointer response should belong to the concept and stay behind content.

Portfilo translation:

- Rest remains quiet;
- selection can reorganize the existing system;
- real Work / Hustle / Journal material may later enter contextually;
- no fake material is created merely to demonstrate a state.

---

# 9. First-scroll contract

The first-scroll transition must not be:

`hero -> generic fade/reveal -> next section`

The hero should reorganize or hand off through a continuous spatial relationship.

Possible tools:

- mask;
- clip-path;
- shared-element movement;
- crop change;
- scale/placement change;
- GSAP Flip.

The exact transition is not yet locked.

The storyboard must establish what remains continuous and what changes.

---

# 10. Typography status

No hero/interface sans is currently locked.

Schibsted Grotesk, Instrument Sans, and other candidates may be reconsidered only after the storyboard establishes the actual role typography needs to perform.

Do not run another disconnected typography specimen.

---

# 11. Current process

Use:

`hero experience contract -> 4-state storyboard -> founder approval -> typography inside storyboard -> interactive desktop prototype -> rendered/behavior critique -> founder approval -> page expansion/mobile`

Do not return to:

`font -> static layout -> background -> imagine motion later`

---

# 12. Current gate

**4-STATE HERO STORYBOARD**

The storyboard must show one coherent composition through:

1. Rest;
2. Pointer;
3. Navigation / Selection;
4. First Scroll.

It must not be production code.

It must not lock typography.

It must not introduce new color.

It must not use fake Work or filler graphics.

No runtime homepage replacement.

No merge to `main`.

No deployment.
