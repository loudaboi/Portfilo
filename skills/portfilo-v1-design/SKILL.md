---
name: portfilo-v1-design
description: Implementation contract for the founder-approved Portfilo v1 Obsidian Precision design system. Use for all v1 runtime UI, layout, typography, motion, media, navigation, Work, Services, Hustle, Journal, newsletter, and responsive implementation tasks.
---

# Portfilo v1 Design Implementation Contract

## Job

Implement the approved Portfilo v1 design system faithfully.

This skill does not create a new visual direction. It converts the canonical v1 design authority into implementation constraints.

## Authority

Read before implementation:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V1_SCOPE.md`
5. `docs/V1_DESIGN_DIRECTION.md`
6. `docs/V1_DESIGN_SYSTEM.md`
7. the approved migration/implementation plan for the current phase
8. `skills/portfilo-anti-slop/SKILL.md`

Explicit founder decisions at the current gate override earlier candidates. Record material changes in canonical documentation.

## Core direction

**Obsidian Precision**

Required feeling:

- technically excellent;
- controlled;
- expensive through precision;
- alive through purposeful motion;
- highly capable;
- low visual noise.

Do not translate this into generic dark-SaaS, cyberpunk, chrome, glass, glow, or Awwwards-style decoration.

## Visual tokens

Use the canonical neutral hierarchy:

```text
Obsidian        #090909
Deep graphite   #0E0F10
Graphite        #151617
Steel           #1D1F21
Line            #2B2E30

Muted silver    #8F9498
Silver          #B9BEC2
Cold white      #E8EAEC
Bright white    #F4F5F5
```

Real project media, client identity, Hustle photography, and meaningful diagrams may retain contextual color.

Silver is hierarchy, not a metallic gradient effect.

## Typography

Primary:

**Instrument Sans**

Use width and weight deliberately:

- hero/display: width ~78–86, weight 600–700;
- section headlines: width ~88–100, weight 600–650;
- body/interface: width 100, weight 400–500.

Utility:

**IBM Plex Mono**

Use only for compact metadata, dates, indices, status, or technical annotation.

Do not use mono for body copy or decorative large text.

Large typography must establish hierarchy. Do not make every heading oversized.

## Grid and spacing

Desktop:

- 12 columns;
- working frame up to about 1680px;
- outer gutter `clamp(24px, 3vw, 48px)`.

Tablet:

- 8 columns;
- 24–32px outer gutter.

Phone:

- 4 columns;
- 16–20px outer gutter.

Foundation spacing:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`

Long-form reading width:

~680–760px.

Use arbitrary spacing only for justified optical correction.

## Geometry

Default to:

- sharp/square geometry;
- 0–4px radius only where an actual software artifact needs it;
- thin structural rules;
- no decorative card shadows;
- no pill systems as generic UI.

## Navigation

Desktop:

- monochrome Portfilo wordmark left;
- Work / Services / Hustle / Journal / Contact right;
- no special CTA pill;
- navigation remains directly usable without animation.

Mobile:

- wordmark left;
- `MENU` text control right;
- simple large-link overlay;
- no hamburger required.

## Section hierarchy

Preserve these distinct visual jobs:

**Work = spectacle**

Use real product UI, workflows, and media as evidence. Motion may demonstrate real system behavior.

**Services = precision**

Quieter and text-led. No card soup.

**Hustle = humanity**

Authentic portrait/context imagery. Natural color is allowed.

**Journal = clarity**

Reading-first, low motion, restrained metadata.

Do not make all surfaces share the same animation or layout pattern.

## Homepage order

Approved hierarchy:

`Hero -> Selected Work -> Services -> Hustle -> Journal -> Newsletter -> Contact -> Footer`

Do not make the hero more technically impressive than Work.

Public positioning copy is a separate approval gate.

## Motion

GSAP is approved.

Native scroll remains the default.

Timing families:

- micro: 160–220ms;
- component: 280–420ms;
- major reveal: 500–700ms;
- page/project: 650–900ms;
- product demonstration: 800–1200ms.

Primary easing:

`power3.out`

Bidirectional:

`power2.inOut`

Avoid:

- bounce/spring as brand default;
- scroll hijacking;
- foundation smooth-scroll libraries;
- cursor particles;
- decorative ambient motion;
- excessive parallax;
- long intro loaders;
- foundation WebGL/Three.js.

Every material animation must clarify hierarchy, state, workflow, or transition.

## Mobile and reduced motion

Mobile is a separate simplification pass, not desktop motion scaled down.

Reduce:

- pinned sequences;
- long horizontal travel;
- layered parallax;
- hover-dependent meaning.

For `prefers-reduced-motion: reduce`:

- remove large scale/pan/parallax;
- remove pinned storytelling;
- preserve all content/navigation/state;
- use immediate or minimal transitions.

## Media

Software priority:

1. raw real interface capture;
2. browser/window frame when context matters;
3. device frame when device context matters;
4. generic floating mockup only as a last resort.

Do not hide weak project proof behind decorative 3D.

Hustle requires authentic documentary/subject imagery. Do not fabricate documentary environments or subject likenesses.

Journal imagery must perform explanatory or documentary work.

## Wordmark

Keep the current geometry first.

Test/apply in cold white or muted silver.

Do not redesign geometry unless a concrete optical problem appears during implementation and is approved.

The old blue/red wordmark application has no automatic v1 role.

## Accessibility and performance

Required:

- semantic HTML;
- visible keyboard focus;
- skip links;
- accessible navigation independent of motion;
- responsive media sizing;
- lazy loading where appropriate;
- reduced-motion support;
- no layout-jank animation when transform/opacity can do the job;
- no animation that blocks initial access.

## Anti-pattern check

Reject implementation choices that introduce:

- generic dark AI-startup styling;
- literal chrome UI;
- glow;
- glassmorphism;
- rounded card soup;
- fake terminals;
- meaningless marquees;
- decorative 3D;
- excessive micro-labels;
- motion added only to make a section feel premium.

For each material design choice ask:

> Does this make Portfilo look more capable, or merely more designed?

## Approval boundary

Implementation may resolve low-level engineering details.

Do not invent:

- final public positioning copy;
- new page sections;
- new service promises;
- project outcomes;
- new brand motifs;
- new dependencies beyond the approved phase;
- Work/Hustle content;
- external providers.

Surface those as separate gates.
