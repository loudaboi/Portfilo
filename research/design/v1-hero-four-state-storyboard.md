# Portfilo v1 — 4-State Hero Storyboard

_Last updated: 2026-09-15_

## Status

**FOUNDER REVIEW GATE / NO IMPLEMENTATION AUTHORITY YET**

## Decision job

Decide whether one complete Portfilo hero experience works across Rest, Pointer, Navigation, and First Scroll before selecting typography or building another prototype.

Parent authority:

`docs/V1_HERO_EXPERIENCE_CONTRACT.md`

## Shared composition

All four frames use the same underlying composition.

### Identity

The Sharp Ornamental 01 emblem is a small independent anchor.

The PORTFILO wordmark is a separate, more spatially significant identity element.

They must never collapse into a conventional combined header lockup.

### Proposition

The approved headline and support copy form one concise information block.

They remain immediately readable but do not monopolize the viewport.

### Navigation

`Work / Services / Hustle / Journal / Contact` occupy a clear interface zone.

The exact typography and final placement remain open.

### Surface

- neutral black / graphite;
- clearly visible monochrome grain;
- broad neutral-silver exposure;
- no blue;
- no permanent hero object.

---

# Frame 1 — Rest

No pointer activity. No scroll activity.

Everything is still.

The grain field is visibly material but not animated.

The emblem holds a stable compact anchor.

The wordmark carries stronger brand-scale presence.

The proposition and navigation are readable without becoming the visual spectacle.

This frame must prove:

- Portfilo is recognizable without a giant headline;
- black / graphite / silver has enough richness without color;
- emblem and wordmark feel related while remaining separate;
- negative space feels intentional rather than unresolved.

---

# Frame 2 — Pointer

The native pointer remains unchanged.

Pointer movement affects the **surface**, not the cursor.

A broad neutral-silver exposure field shifts slightly in the movement direction.

Behavior:

1. pointer moves;
2. exposure follows with restrained lag;
3. exposure settles gradually back toward Rest.

The response is deliberately small.

The grain itself does not swim.

Identity and text do not chase the pointer.

On touch devices, this state is omitted cleanly.

This frame must prove:

- the page feels responsive without a cursor gimmick;
- interaction belongs to the material;
- Rest remains complete without motion.

---

# Frame 3 — Navigation / Selection

A navigation item receives hover, focus, or selection.

One compositional state change occurs.

Proposed behavior:

1. selected navigation item becomes the active interface signal;
2. proposition block compresses or shifts by a controlled amount;
3. wordmark changes spatial relationship to create contextual space;
4. a masked region becomes available for real context when real material exists;
5. neutral-silver exposure rebalances around the new state.

No fake project image appears.

Before richer media exists, the contextual region can remain purely structural.

Services may use only approved capability language.

Work, Hustle, and Journal previews are added only when real material exists.

Exit returns the same elements to Rest.

This frame must prove:

- navigation and identity behave as one system;
- the state remains meaningful before richer media exists;
- later real media can enter without redesigning the hero.

---

# Frame 4 — First Scroll

The hero does not disappear as one flat layer.

The emblem remains a short-term stable anchor.

The PORTFILO wordmark becomes the primary continuity object.

As scroll crosses the hero boundary:

1. wordmark changes scale and/or position;
2. proposition and navigation leave through one controlled clipping boundary;
3. the neutral material field remains continuous long enough to connect both states;
4. the next homepage surface enters into the space created by the reorganization;
5. the wordmark resolves into its next appropriate identity role, or exits only after the next state is established.

Later, real Selected Work media can become a deeper shared transition object.

Initial implementation territory:

- CSS / SVG clipping;
- GSAP;
- GSAP Flip if element relocation benefits from it;
- native scrolling.

No WebGL requirement.

This frame must prove:

- first scroll feels like one interface reorganizing;
- motion has spatial meaning;
- Portfilo does not rely on repeated reveal animation.

---

# Mobile / touch boundary

The storyboard is desktop-interaction-first but cannot create desktop-only comprehension.

On touch:

- no pointer material response;
- Rest remains complete;
- Navigation / Selection uses tap/focus;
- first-scroll continuity remains;
- no hover-only information is required.

Mobile composition is not being designed in this gate.

---

# Specificity test

The Portfilo-specific mechanism is:

**independent emblem + wordmark acting as stable/reorganizing identity objects across software-like states on a black / graphite / silver material field.**

If implementation reduces this to a standard logo/header plus animation, it fails.

## Founder review questions

1. Is the identity-led composition the correct structural replacement for the rejected giant-headline layout?
2. Is pointer response on the material rather than the cursor the correct interaction?
3. Should navigation selection reorganize the identity field even before rich real media exists?
4. Is the wordmark the correct first-scroll continuity object?

If approved:

1. lock this storyboard;
2. select typography inside these roles;
3. specify exact desktop geometry;
4. build one interactive hero prototype containing all four states;
5. review the behavior rather than only a screenshot.

No implementation is authorized before storyboard approval.
