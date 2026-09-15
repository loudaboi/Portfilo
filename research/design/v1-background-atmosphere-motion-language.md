# Portfilo v1 Background Atmosphere + Motion Language

_Last updated: 2026-09-15_

## Status

**RESEARCH COMPLETE / FOUNDER DECISION GATE READY**

## Decision job

Define a realistic hero background family and motion language that can make Portfilo feel visually authored without depending on complex realtime graphics.

This research follows founder rejection of the Stateful Typeset / Constraint Fit specimen.

## Founder review correction

Rejected as current hero direction:

- Stateful Typeset / Constraint Fit composition;
- stepped headline as the primary visual event;
- Bricolage Grotesque as hero display typography.

Observed failure:

- the specimen read as a typographic poster on black rather than a compelling full-screen environment;
- the stepped headline geometry felt arbitrary;
- Bricolage Grotesque felt too soft / quirky beside the Sharp Ornamental 01 emblem and approved serif wordmark;
- the support copy remained spatially separate rather than naturally integrated.

Onest is not selected or rejected globally. It simply has no current authority.

## Current strategy

Portfilo should not ask either typography or a shader to carry the entire hero.

The stronger working model is:

1. restrained but beautiful static or near-static background atmosphere;
2. approved emblem + wordmark;
3. calmer, sharper typography selected inside that environment;
4. clean and deliberate transitions as a major source of perceived craft;
5. real Work media eventually becoming transition material where evidence exists.

The resting frame can be simple.

The movement between states should be exceptional.

---

# Background family A — Graphite Exposure

## Visual

A near-black full-screen field with:

- one off-axis graphite lift;
- a very soft neutral highlight;
- fine monochrome grain;
- no visible blob boundary;
- no central object;
- no obvious gradient geometry.

The surface should feel closer to controlled photographic exposure than a CSS gradient demo.

The brightest region should be composed around the final typography rather than placed generically in the center.

## Implementation

Preferred first route:

- layered CSS radial / linear gradients;
- SVG or CSS noise texture;
- static fallback is identical to the normal resting state;
- optional extremely slow exposure or position drift only if it improves the final composition.

No WebGL.

## Strength

- lowest implementation burden;
- easy to tune around real typography;
- keeps the identity dominant;
- supports clean motion without visual competition.

## Risk

Can look unfinished if the gradient relationships are too weak or too symmetrical.

## Current assessment

**Recommended first background prototype.**

---

# Background family B — Low-Chroma Spectrum

## Visual

A dark field with one restrained spectral shift.

Possible behavior:

- near-black / graphite base;
- one low-saturation cool or neutral tint;
- soft transition into off-black;
- full-surface grain;
- no rainbow;
- no aurora;
- no neon;
- no obvious AI-gradient aesthetic.

The purpose is to give the hero a memorable atmosphere without turning color into the brand itself.

## Implementation

Possible routes:

- CSS gradients + SVG grain;
- static AVIF/WebP plate if browser gradients look too synthetic.

No realtime graphics are required.

## Strength

More immediate visual identity than pure graphite.

## Risk

Highest risk of reading as contemporary AI/SaaS styling.

A signal color is not approved by this exploration.

## Current assessment

**Worth testing only as a restrained alternative to A.**

---

# Background family C — Authored Light Plate

## Visual

One separately authored 16:10 or viewport-safe still image.

The image is abstract but not object-based.

Possible qualities:

- irregular light falloff;
- graphite / silver tonal depth;
- subtle optical softness;
- real textural imperfection;
- no visible object;
- no architecture;
- no chrome;
- no glass;
- no fake interface;
- no text or identity inside the asset.

The final page adds its own grain and HTML interface.

## Implementation

- AVIF/WebP primary still;
- responsive crop strategy;
- CSS/SVG grain above the still;
- HTML/SVG identity and typography remain separate;
- optional exposure/scale movement may be introduced later.

Image generation or offline design may be used only for the isolated background plate after founder approval.

## Strength

Highest static visual ceiling without requiring WebGL.

## Risk

Can become decorative mood art with no Portfilo-specific reason.

## Current assessment

**Best fallback if CSS-only Graphite Exposure cannot reach the visual standard.**

---

# Background recommendation

Prototype in this order:

1. **A — Graphite Exposure**
2. **C — Authored Light Plate**
3. **B — Low-Chroma Spectrum**

Do not generate all three as polished website mockups.

The next visual gate should compare isolated 1440 × 900 background plates with only the approved emblem + wordmark used as scale/context anchors.

Typography is intentionally deferred until the background family is selected.

---

# Motion language

## Principle

Portfilo motion should make state changes feel designed.

It should not exist merely to make a static layout look expensive.

Reference evidence:

- MERSI uses the selected project media itself as a transition object and uses GSAP Flip to move the same visual between layouts / routes;
- MERSI reorganizes projects between compositional states rather than fading sections independently;
- Telha Clarke uses clip-path + translation to connect sections and a reusable title-reveal system with consistent easing/duration;
- 4WIDE demonstrates a higher-complexity version where visual effects, page transitions, and interaction are treated as one experience;
- 1820 demonstrates that minimal layouts can gain substantial character from clean clip-path reveals, editorial-cut transitions, and consistent motion rhythm.

Portfilo should borrow the structural principles, not their exact effects.

---

## Motion 1 — Identity-led load

First visit:

1. near-black/background atmosphere already exists;
2. Sharp Ornamental 01 resolves cleanly;
3. PORTFILO wordmark resolves as the second identity anchor;
4. hero interface is revealed with one controlled mask / clip motion;
5. navigation/supporting information follows as part of the same timing system.

Returning navigation should not replay a long branded loader.

The previous Assembly work remains useful timing evidence, but visible fragmented layers are no longer required.

## Motion 2 — Hero exit / first scroll

The first scroll should not trigger generic fade-up content.

Preferred behavior:

- hero text and/or foreground crop away along one clear axis;
- background atmosphere remains spatially continuous;
- the next surface enters through the same mask boundary;
- identity may retain its location or transition deliberately into the next navigation state.

This should feel like one surface giving way to another.

## Motion 3 — Section continuity

Where a real visual is available, use it to bridge sections.

Example future Work behavior:

- one project visual begins inside Selected Work;
- on scroll or selection it changes crop, size, or location;
- its transformation introduces the next project/detail state.

Use transforms, clip-path, or GSAP Flip before considering WebGL.

## Motion 4 — Work → case study shared element

Strong candidate for Portfilo's signature navigation behavior once real Work media exists.

The selected project image / interface becomes the transition object.

Possible architecture:

1. capture source media bounds;
2. preserve or clone the visual during navigation;
3. transition it into the destination case-study media frame;
4. reveal the destination typography around it;
5. remove the transitional layer after layout stabilizes.

GSAP Flip is a natural candidate.

No fake Work may be created to demonstrate this.

## Motion 5 — Global route transition

For navigation without a shared media object:

- fast mask / curtain transition;
- restrained directional movement;
- consistent easing;
- incoming page already prepared underneath;
- no white flash;
- no repeated elaborate loader.

This can remain HTML/CSS + GSAP.

---

# Motion character

Portfilo motion should feel:

- controlled;
- decisive;
- smooth;
- slightly cinematic;
- geometrically precise;
- calm at rest.

Avoid:

- bounce / elastic easing;
- random character animation;
- excessive stagger;
- scroll hijacking;
- constant parallax everywhere;
- cursor gimmicks;
- repeated opacity-only reveals;
- shader distortion without a content job.

## Initial timing territory

Not production-locked:

- major transitions: roughly 0.8–1.2 s;
- micro transitions: roughly 0.2–0.45 s;
- preferred easing territory: expo / power families;
- movement should usually complete as one readable action rather than many independent animations.

Exact timing belongs to prototype review.

---

# Technical fit

Current Portfilo stack is sufficient.

Likely implementation:

- Astro + semantic HTML;
- custom CSS;
- SVG/CSS grain;
- GSAP for state choreography;
- GSAP Flip if shared-element Work transitions are approved;
- native scrolling by default.

No current requirement for:

- Three.js;
- realtime WebGL;
- Lenis;
- React;
- a new framework.

4WIDE is useful as evidence of what is possible, not as a dependency target.

---

# Typography boundary

Do not select a replacement hero font yet.

The failed Bricolage specimen showed that evaluating type on an empty black field makes the type carry too much of the design burden.

Typography should be reviewed after a background family is selected.

Desired hero typography remains:

- calmer than Bricolage Grotesque;
- sharper / more controlled;
- strong at display scale;
- compatible with the PORTFILO serif wordmark without imitating it;
- clearly suitable for a software studio;
- not generic developer-platform typography.

The approved wordmark remains unchanged.

---

# Decision gate

Founder selects the first background prototype:

- **A — Graphite Exposure** — recommended;
- **B — Low-Chroma Spectrum**;
- **C — Authored Light Plate**.

After background selection:

1. create isolated background plate;
2. review it with emblem + wordmark only;
3. if approved, select hero typography inside that environment;
4. compose the static hero;
5. only then prototype the identity-led load + first-scroll transition.

No runtime homepage change.

No merge to `main`.

No deployment.
