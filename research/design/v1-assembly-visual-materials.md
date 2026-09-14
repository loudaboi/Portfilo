# Portfilo v1 Assembly Visual Material Gate

_Last updated: 2026-09-15_

## Status

**FOUNDER-APPROVED MOTION / MATERIAL SELECTION ACTIVE**

## Decision job

The Assembly behavior has passed founder review.

The next decision is the actual full-screen visual material that Assembly will fragment, misregister, align, and reveal.

The material must work at 100% viewport coverage. It must not read as a small central graphic placed on a dark website.

## Locked behavior

Assembly remains:

- full-screen;
- unresolved at load;
- large layers align into one coherent hero;
- identity and approved copy resolve above the visual;
- later pointer/scroll behavior may create controlled misregistration;
- the loader is the first Assembly state.

The first motion study passed founder review.

## Material requirements

The selected visual material must:

- fill the entire viewport;
- remain visually strong when paused;
- preserve text legibility through composition rather than a generic dark overlay;
- reward fragmentation and reassembly;
- avoid a discrete central object;
- avoid fake UI, devices, photography, fake Work, or client imagery;
- remain compatible with dark-first Portfilo identity;
- be achievable in the current Astro stack;
- support reduced-motion/static fallback;
- avoid dependence on a single high-cost GPU technique if a lighter method achieves the same result.

## Candidate A — Crossfield

A broad four-direction lighting field with deep black/graphite material and off-white highlights. The field converges and diverges across the full viewport without drawing the emblem literally.

Reason to test:

- subtly relates to the four-direction logic of Sharp Ornamental 01;
- creates long cross-screen structures that become interesting when Assembly layers misregister;
- can be authored as motion or reproduced with a lightweight shader.

Risk:

- can become generic radial/gradient art if not sharp enough.

## Candidate B — Refraction

A full-screen dark optical material with very large refracted zones, soft caustic-like highlights, warped depth, and restrained silver edges.

Reason to test:

- high cinematic quality;
- continuous visual surface works naturally with Assembly;
- misregistration can expose optical seams rather than obvious panels.

Risk:

- can drift toward luxury-product or generic glass aesthetics.

## Candidate C — Strata

Large diagonal/curved graphite strata move across the entire viewport. Light is carried by the boundaries between broad layers rather than by a central object.

Reason to test:

- more graphic and architectural;
- strongest relationship to Assembly's idea of layers;
- can remain abstract without looking like cards or portals;
- likely easiest to art-direct precisely.

Risk:

- can become static editorial geometry if the surface lacks depth.

## Prototype rule

Build all three as real browser-rendered full-screen materials.

For this gate:

- the Assembly behavior itself does not need to replay in every candidate;
- use the approved hero interface over each full-screen material;
- candidate switching is allowed for review;
- final implementation technology is not locked by the study;
- no runtime homepage changes.

## Exact next decision

Founder selects:

- A — Crossfield;
- B — Refraction;
- C — Strata;
- or rejects all three.

After selection, integrate the chosen material into the already-approved Assembly loader → resolved hero motion study.
