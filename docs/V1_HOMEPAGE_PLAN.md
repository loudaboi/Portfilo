# Portfilo v1 Homepage Plan

_Last updated: 2026-09-14_

## Status

Approved Phase 3 plan.

Phase 3A is complete and founder-approved.

Phase 3B is active.

Approved Phase 3A positioning authority:

`docs/V1_HOMEPAGE_POSITIONING.md`

## Homepage hierarchy

`Hero -> Selected Work -> Services -> Hustle -> Journal -> Newsletter -> Contact -> Footer`

Work is the primary proof surface. The hero introduces Portfilo but should not overshadow Work.

## Phase 3 gates

### 3A Positioning + narrative research

**COMPLETE / FOUNDER-APPROVED**

Research strong software/studio positioning patterns, define credible claim boundaries, define the homepage narrative, and recommend one positioning territory.

Approved territory:

**Problem-led software**

See `docs/V1_HOMEPAGE_POSITIONING.md`.

No final public copy was approved during 3A.

### 3B Copy approval

**ACTIVE**

Approve the hero headline, supporting sentence, section framing, newsletter message, and Contact CTA.

All wording must remain within the approved Phase 3A positioning and claim boundaries.

Do not implement the homepage during 3B.

### 3C Composition + interaction

Define exact layout, pacing, typography, Work media framing, GSAP behavior, responsive simplification, reduced-motion behavior, and conditional rendering.

### 3D Implementation

Replace `src/pages/index.astro` with the approved v1 homepage.

### 3E QA

Validate desktop/tablet/mobile, keyboard/focus, reduced motion, Astro navigation lifecycle, GSAP cleanup, overflow, layout stability, performance, and metadata.

## Empty-state policy

Content-driven routes should have minimal designed empty states.

Do not use fake projects, fake testimonials, construction graphics, fabricated media, or filler "coming soon" content.

The homepage must not render a content section when that section has no real public content.

Before release:

- Work should have at least one real case study.
- Services should be complete.
- Journal should have real content.
- Contact must have a real contact path.
- Newsletter must function.
- Hustle should ideally have at least one real piece; otherwise consider omitting it from public navigation/homepage until one exists.

## Work boundary

Phase 3 may establish the homepage Work composition, but real M7 evidence, screenshots, workflow demonstrations, and substantiated case-study claims belong to the Work proof phase.

## Still open

- final homepage copy;
- exact homepage composition and motion;
- whether Hustle is surfaced before its first real piece;
- final Work case study;
- Contact destination/form backend;
- favicon and social preview;
- newsletter cadence;
- optional confirmation-route namespace move.

Phase 3 does not authorize merge to `main` or deployment.
