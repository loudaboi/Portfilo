# Portfilo v1 — Layout Storyboard Comparison

_Last updated: 2026-09-15_

## Status

**FOUNDER REVIEW READY / LAYOUT DECISION ONLY**

## Decision job

Compare the two approved layout candidates as four-state spatial systems before typography or implementation.

Candidates:

- **B — Split Tension** — lead;
- **A — Identity Spine** — challenger.

The visual storyboards were created as low-fidelity review artifacts using neutral placeholder typography and the approved black / graphite / silver material logic.

## Shared storyboard states

1. Rest;
2. Pointer;
3. Navigation / Selection;
4. First Scroll.

No fake media is used.

The visible guide lines and labels are storyboard notation, not proposed production UI.

---

# B — Split Tension

## What works

### Rest

The off-center seam gives the viewport a real structural rule.

Identity and proposition occupy different fields instead of collapsing into one headline stack.

The wordmark can carry substantial presence without being attached to the emblem.

Negative space has a job: it belongs to the seam, the transition path, and future contextual state.

### Pointer

The material response can cross the seam without moving identity or copy.

This makes the pointer behavior feel tied to the surface rather than to cursor decoration.

### Navigation

The seam naturally becomes the mask / compression boundary.

One side can remain stable while the other opens contextual space.

This is the strongest layout-to-interaction relationship in the comparison.

### First Scroll

The same seam provides a credible handoff boundary into the next surface.

The wordmark can shrink / reposition while the next surface enters through the same spatial system.

## Risks

- a literal visible divider would become too editorial / architectural;
- an always-vertical nav could feel like awards-site styling;
- the wordmark could become wallpaper if its scale is not tied tightly to transition behavior;
- proposition must not become too small simply because identity is more dominant.

## Corrections if selected

- seam should usually be **implicit** through alignment / tonal balance, not a visible rule;
- navigation placement remains open;
- wordmark scale must be justified by its motion role;
- proposition remains clearly readable.

## Preliminary verdict

**Strongest current architecture.**

It solves resting composition and state-change geometry with the same rule.

---

# A — Identity Spine

## What works

### Rest

The persistent rail gives the interface a clear orientation anchor.

The emblem and navigation have stable territory while the wordmark and proposition occupy the broader field.

### Pointer

The broad field can respond materially without disturbing the stable rail.

### Navigation

Selection can occur against a consistent interface spine while contextual space opens elsewhere.

### First Scroll

The rail can persist while the wordmark contracts and the next surface expands.

This is operationally clear.

## Risks

- the rail can become a conventional sidebar;
- it can make Portfilo feel more like a product dashboard than an authored studio site;
- the wordmark still risks becoming oversized decoration;
- the structure is more rigid and less spatially expressive than Split Tension.

## Preliminary verdict

**Credible challenger, but weaker than Split Tension.**

It is easier to understand, but also easier to turn into a familiar interface pattern.

---

# Anti-slop review

Neither candidate should literally preserve:

- storyboard guide lines;
- annotation labels;
- vertical navigation merely because it appears in the diagram;
- placeholder type scale;
- visible context boxes;
- large wordmark scale unless the transition earns it.

The decision being made is only:

**Which spatial rule should organize the hero across all four states?**

## Current recommendation

**Select B — Split Tension.**

If selected, the next gate should:

1. lock Split Tension as the spatial architecture;
2. define exact desktop geometry with the seam remaining implicit;
3. research typography inside that geometry;
4. build one interactive prototype containing Rest, Pointer, Navigation, and First Scroll together.

No static hero-only prototype should be built again.

No runtime homepage replacement.

No merge to `main`.

No deployment.
