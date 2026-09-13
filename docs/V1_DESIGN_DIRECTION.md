# Portfilo v1 Design Direction

_Last updated: 2026-09-14_

## Status

**FOUNDER-APPROVED / CURRENT V1 DESIGN AUTHORITY**

Research provenance:

`research/design/v1-design-direction-research.md`

## Direction

### Obsidian Precision

Portfilo v1 should feel:

- alive;
- technically excellent;
- expensive;
- controlled;
- highly capable;
- confident without empty agency posturing.

The design system should achieve this through precision, hierarchy, real project media, and purposeful motion rather than visual effects for their own sake.

## Core visual language

Use a predominantly neutral system:

- near-black base;
- graphite secondary surfaces;
- muted silver for secondary hierarchy and structural details;
- cold white for strongest hierarchy;
- minimal persistent brand color;
- real project interfaces, photography, and editorial imagery may retain contextual color where useful.

Silver is a **material hierarchy**, not a chrome-gradient effect.

Avoid making literal metallic rendering, reflective UI, or sci-fi visual language the identity.

## Composition

- strong grid and exact alignment;
- generous but controlled whitespace;
- sharp geometry by default;
- restrained structural rules;
- large typography where hierarchy earns it;
- dense information is allowed when composition remains controlled;
- navigation should remain immediately legible and conventional enough to use without learning a new interaction model.

Premium quality must come from precision, not darkness alone.

## Section behavior

### Work

Work is the primary visual and technical showcase.

Use real software interfaces, product footage, workflows, and project artifacts as the main evidence.

Motion may demonstrate actual state changes, workflows, or product behavior.

Do not reduce Work to small cards, generic device mockups, or technology-stack showcases.

Business context, problem, solution, and evidenced outcomes should remain understandable.

### Services

Services should be visually quieter than Work.

Prefer strong typography and structured composition over repeated service cards or decorative motion.

### Hustle

Hustle provides the human counterweight to the engineered studio shell.

Authentic portraits and operating-context imagery may retain natural color.

Do not force all photography into monochrome merely to preserve the neutral brand system.

### Journal

Journal should be the quietest primary surface.

Prioritize reading quality, strong typography, restrained metadata, and useful diagrams/data/screens where justified.

Motion should be limited and subordinate to comprehension.

## Motion grammar

Motion should feel:

- fast;
- weighted;
- deliberate;
- precise.

Useful behaviors include:

- clipped or masked reveals;
- project panels resolving into alignment;
- subtle depth/scale during transitions;
- coordinated page transitions;
- real interface-state demonstrations;
- precise hover feedback.

Avoid:

- bouncy motion as a default;
- cursor particles;
- constant floating elements;
- decorative parallax everywhere;
- scroll hijacking;
- long intro/load sequences;
- ambient movement with no information or hierarchy job.

Every animation should answer:

> What does this clarify, demonstrate, or improve?

## Technical direction

Astro remains the foundation.

A dedicated motion library is likely justified for coordinated sequencing. GSAP may be evaluated and is the leading candidate, but dependency approval happens at the implementation-planning gate.

WebGL/Three.js is **not** part of the foundation direction.

Use WebGL only if a later specific concept demonstrates clear product value that cannot be achieved more simply.

Motion must include:

- deliberate mobile simplification;
- reduced-motion behavior;
- accessible navigation independent of animation;
- performance-conscious media loading;
- preference for transform/opacity-based animation where appropriate.

## Wordmark

The existing Portfilo wordmark geometry remains the first candidate.

Test it in:

- cold white;
- muted silver.

Do not redesign the wordmark unless the approved typography/composition system exposes a concrete optical or proportional problem.

The old blue/red application has no automatic authority over v1.

## Anti-patterns

Do not introduce as defaults:

- literal chrome UI;
- cyberpunk/sci-fi styling;
- generic dark AI-startup aesthetics;
- glassmorphism;
- glow-heavy interfaces;
- rounded card systems;
- fake terminal motifs;
- decorative 3D;
- meaningless marquees;
- excessive micro-labeling;
- motion that delays access to content;
- agency copy or layout conventions added only to look premium.

## Design test

For every material design choice ask:

> Does this make Portfilo look more capable, or merely more designed?

The approved standard is:

**High visual ambition. Low visual noise.**

## Still open

This direction does not yet lock:

- exact typefaces;
- exact neutral palette values;
- exact navigation composition;
- exact homepage structure;
- exact spacing scale;
- exact motion timings/easing;
- Work case-study structure;
- media framing;
- Hustle image treatment details;
- Journal reading type;
- GSAP dependency;
- wordmark refinements.

Those belong to the next design-system and information-architecture gate.
