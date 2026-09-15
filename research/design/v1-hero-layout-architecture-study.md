# Portfilo v1 — Hero Layout Architecture Study

_Last updated: 2026-09-15_

## Status

**FOUNDER-APPROVED COMPARISON SET / STORYBOARD BUILD AUTHORIZED**

## Decision job

Study the layout architecture of the strongest current references and derive materially different Portfilo hero structures before changing typography, background material, or implementation.

Parent authority:

- `docs/V1_HERO_EXPERIENCE_CONTRACT.md`
- `research/design/v1-hero-four-state-storyboard.md`
- `skills/portfilo-visual-direction/SKILL.md`

This file does not select a final layout.

---

# 1. Obys

Reference:
https://obys.agency/

Case study:
https://tympanus.net/codrops/2026/05/14/designing-ourselves-the-new-obys-identity-and-website/

## Layout mechanism

Obys treats identity as part of the page structure rather than a header attachment.

The system is built to survive multiple layout modes: vertical, horizontal, and grid.

The logo remains a stable reference while project content changes around it.

Current homepage evidence also shows a long project index rather than a conventional sequence of cards.

## Spatial lesson

- stable identity zone;
- independent content zone;
- strong rails / axes;
- large negative space can work when the surrounding alignment system is explicit;
- identity persists while content mode changes.

## Do not copy

- white background;
- exact logo scale;
- project-list styling;
- custom typeface;
- exact grid.

## Portfilo translation

Use the emblem as a stable orientation anchor and the wordmark as a separate spatial object that can change role across states.

The hero should have multiple intentional zones, not one left-aligned content block with unused remainder.

---

# 2. PX PUSH

Reference:
https://pxpush.com/

Case study:
https://tympanus.net/codrops/2026/08/07/the-department-is-open-building-the-px-push-website/

## Layout mechanism

The homepage gives the PX PUSH identity major first-viewport presence.

The logo is not just shown; it changes functional role on scroll, shrinking and moving into the header where it becomes navigation.

## Spatial lesson

- identity can legitimately occupy major hero space when it has a later interface role;
- hero identity can transform into navigation rather than disappearing;
- the layout can begin composition-led and become utility-led.

## Do not copy

- giant chrome / 3D treatment;
- CRT concept;
- repeated departmental labels;
- centered agency aesthetic;
- scroll-velocity rotation.

## Portfilo translation

The PORTFILO wordmark may earn larger hero-scale presence if its scale/position transformation is essential to the first-scroll system.

The emblem remains independent and more stable.

---

# 3. MERSI

Reference:
https://www.mersi-architecture.com/

Case study:
https://tympanus.net/codrops/2026/07/27/between-print-and-digital-the-making-of-mersis-website/

## Layout mechanism

MERSI uses strong spatial division.

Its signature split-screen slider places two large synchronized visual regions around a central label / control anchor.

The design team describes pages as composed rather than filled, with images treated as material and typography as structure.

Projects later reposition from a freer arrangement into a structured grid.

## Spatial lesson

- one strong division can organize an entire viewport;
- a central seam / axis can create tension without adding decorative objects;
- one element can bridge two regions;
- layout reorganization itself can be the interaction.

## Do not copy

- architecture imagery;
- central orange project label;
- split-screen photography;
- exact editorial type treatment.

## Portfilo translation

Use an invisible or very subtle structural seam between two unequal zones.

Identity, proposition, and navigation can occupy opposite sides or cross the seam.

The seam can become the mask / transition boundary in Pointer, Selection, and First Scroll.

---

# 4. Telha Clarke

Case study:
https://tympanus.net/codrops/2026/02/25/reshaping-telha-clarkes-digital-home-from-wordmark-to-motion-system/

## Layout mechanism

Telha Clarke uses clean structured layouts where small metadata, imagery, supporting copy, and large statements occupy different levels of hierarchy rather than sitting in one stack.

The case study explicitly says the layout is meant to support project content while motion creates continuity between sections.

## Spatial lesson

- distributed hierarchy can create more tension than one stacked hero column;
- very small and very large elements can coexist when alignment is disciplined;
- large whitespace is useful only when the grid explains it;
- transitions work best when the layout gives an existing element somewhere meaningful to move.

## Do not copy

- architecture studio editorial composition;
- large photographic reliance;
- exact black/white typography.

## Portfilo translation

Distribute identity, proposition, and nav into a shared grid rather than stacking them together.

Use the resulting alignment lines as transition rails.

---

# 5. MetaLab

Reference:
https://www.metalab.com/

Case study:
https://tympanus.net/codrops/2026/01/08/from-whats-a-string-to-sites-of-the-day-nathan-dallaires-high-end-web-experiences/

## Layout mechanism

MetaLab selected a Frames system that uses portals/windows to open different project and client universes through interaction.

The layout is not one fixed split or column system; it becomes a field of contextual openings.

The system was repeatedly refined so exploration stayed usable.

## Spatial lesson

- negative space can be active space reserved for interaction;
- visual states can open into the existing composition rather than adding cards;
- a hero can have a calm baseline and materially different selected states.

## Do not copy

- portal/window geometry;
- project imagery;
- exact black/white composition;
- existing hover animation.

## Portfilo translation

Reserve one contextual region in the composition that can become active on navigation selection.

Do not populate it at rest merely to avoid emptiness.

Without real Work / Hustle / Journal material, this region should remain structural rather than fake.

---

# Cross-reference findings

The references differ aesthetically, but the layouts share several structural principles.

## 1. Identity occupies real space

Obys and PX PUSH do not reduce identity to a small conventional corner signature.

Identity participates in composition and state change.

## 2. One strong spatial rule beats many decorative details

MERSI has the split axis.

Obys has persistent grid / identity rails.

MetaLab has Frames.

PX PUSH has logo-to-header transformation.

The strong sites can be described by one spatial rule.

## 3. Negative space is assigned

Empty space is not simply whatever remains after placing copy.

It belongs to a grid, transition path, project visual, or interaction state.

## 4. Hierarchy is distributed

Strong layouts often separate:

- identity;
- proposition;
- navigation;
- contextual content

into different spatial zones instead of one headline stack.

## 5. Layout changes are part of interaction

The best references reorganize existing elements.

They do not depend on adding decorative overlays after the fact.

---

# Portfilo layout requirements

Any next layout must:

- use black / graphite / silver material only;
- keep emblem and wordmark independent;
- give the wordmark an earned spatial / transition role;
- avoid the rejected top-left-lockup + top-right-nav + giant-left-headline topology;
- create assigned negative space rather than accidental emptiness;
- support Rest, Pointer, Navigation Selection, and First Scroll with the same underlying geometry;
- work before fake media exists;
- have a credible touch/mobile adaptation later.

---

# Derived Portfilo architectures

## A — Identity Spine

### Thesis

**A persistent identity rail organizes the viewport while the wordmark expands into the hero and then contracts back into interface state.**

### Rest geometry

Use an asymmetric grid with a narrow identity/navigation rail and a broader composition field.

Possible structure:

- emblem occupies the stable rail;
- navigation aligns to the same rail or an opposing edge;
- PORTFILO wordmark occupies a large but bounded field across the composition;
- proposition sits in a separate compact zone, not directly underneath the wordmark;
- no decorative object.

Negative space is assigned to the wordmark transition path.

### Pointer

Neutral-silver exposure moves across the broad field but not the stable rail.

### Navigation Selection

The rail remains stable while the wordmark and proposition shift within the broad field to open contextual space.

### First Scroll

Wordmark contracts / moves toward its interface role along the same alignment system.

### Reference DNA

Obys + PX PUSH + Telha Clarke.

### Strength

Strong identity logic with low dependence on real media.

### Risk

If the large wordmark is treated as wallpaper rather than a functional transition object, it becomes another oversized-brand cliché.

---

## B — Split Tension

### Thesis

**One off-center spatial seam divides the hero into two unequal fields, and every state is expressed by shifting what crosses, occupies, or opens along that seam.**

### Rest geometry

Use one dominant vertical seam, likely off-center rather than 50/50.

Possible structure:

- emblem on one side as orientation anchor;
- wordmark may cross or align tightly to the seam;
- proposition occupies the opposing field;
- navigation uses an edge / rail rather than standard top-right placement;
- no visible divider is required.

The seam exists through alignment and tonal/exposure difference.

### Pointer

The neutral-silver exposure moves across the seam with restrained lag.

### Navigation Selection

The seam becomes a mask boundary.

One region compresses while the other becomes contextual space.

### First Scroll

The same seam becomes the clipping / handoff boundary into the next section.

### Reference DNA

MERSI + Telha Clarke + MetaLab.

### Strength

Most coherent link between layout and motion.

The transition system is already implicit in the resting geometry.

### Risk

Can drift into architecture/editorial art direction if type and spacing become too precious.

---

## C — Context Field

### Thesis

**A sparse identity composition reserves one intentional activation field that remains quiet at rest and opens only when navigation or real content gives it a reason.**

### Rest geometry

- emblem and wordmark occupy separate fixed zones;
- proposition is compact;
- one large region is deliberately reserved for future context;
- navigation is positioned to clearly control that region.

Unlike the rejected empty-right-side hero, the reserved region has an explicit state job from the beginning.

### Pointer

Surface response can bias toward the contextual field.

### Navigation Selection

The reserved region becomes the active state through masks / frames.

Real Work, Hustle, or Journal material may later enter it.

### First Scroll

The activation field expands or becomes the next section's viewport.

### Reference DNA

MetaLab + MERSI.

### Strength

Strongest future fit for Responsive Identity once Portfilo has richer real media.

### Risk

Weakest current-state option because Portfilo does not yet have enough real visual material.

Without excellent geometry, it can look like the same empty-right-side mistake under a new explanation.

---

# Evaluation

## A — Identity Spine

Current fit: **strong**

- strongest use of the approved wordmark;
- supports identity-led transition;
- works with current asset maturity;
- less dependent on imagery;
- needs disciplined scale to avoid logo-as-wallpaper.

## B — Split Tension

Current fit: **strongest**

- solves resting composition and transition geometry together;
- avoids conventional agency hero topology;
- gives negative space a clear structural job;
- creates an obvious mask / selection / scroll boundary;
- works with no fake media;
- can retain simple black / graphite / silver material.

## C — Context Field

Current fit: **future / not recommended first**

- conceptually strong;
- closest to MetaLab;
- depends too heavily on media/content that is not mature yet;
- highest risk of feeling empty now.

# Recommendation

Take **B — Split Tension** forward as the lead layout architecture.

Keep **A — Identity Spine** as the only serious challenger.

Do not prototype C yet.

The next gate should compare A and B as **layout storyboards**, using neutral placeholder typography and the same approved identity/copy/material constraints.

No polished hero implementation yet.


## Founder agreement outcome

The founder agreed with the research conclusion:

- **B — Split Tension** advances as the lead layout architecture;
- **A — Identity Spine** advances as the challenger;
- **C — Context Field** is parked for later when stronger real media exists.

This is not final layout approval.

Authorized next artifact:

**two low-fidelity four-state layout storyboards**

Each must show:

1. Rest;
2. Pointer;
3. Navigation / Selection;
4. First Scroll.

Shared constraints:

- black / graphite / neutral silver only;
- clearly visible grain;
- emblem and wordmark independent;
- approved copy only;
- neutral placeholder typography;
- no fake Work/media;
- no polished visual effects;
- no runtime implementation.

The decision job is to compare spatial architecture, not aesthetic finish.
