# Portfilo v1 Homepage Plan

_Last updated: 2026-09-14_

## Status

Approved Phase 3 plan.

Phase 3A is complete and founder-approved.

Phase 3B is complete and founder-approved.

Phase 3C is complete and founder-approved.

Phase 3D is complete and validated.

Phase 3E is active.

Approved authorities:

- `docs/V1_HOMEPAGE_POSITIONING.md`
- `docs/V1_HOMEPAGE_COPY.md`
- `docs/V1_HOMEPAGE_COMPOSITION.md`

## Homepage hierarchy

`Hero -> Selected Work -> Services -> Hustle -> Journal -> Newsletter -> Contact -> Footer`

Work is the primary proof surface. The hero introduces Portfilo but should not overshadow Work.

Homepage sections with no real public content do not render.

## Phase 3 gates

### 3A Positioning + narrative research

**COMPLETE / FOUNDER-APPROVED**

Approved territory:

**Problem-led software**

See `docs/V1_HOMEPAGE_POSITIONING.md`.

### 3B Copy approval

**COMPLETE / FOUNDER-APPROVED**

Approved homepage copy:

`docs/V1_HOMEPAGE_COPY.md`

### 3C Composition + interaction

**COMPLETE / FOUNDER-APPROVED**

Approved composition authority:

`docs/V1_HOMEPAGE_COMPOSITION.md`

### 3D Implementation

**COMPLETE / VALIDATED**

The legacy homepage at `/` was replaced with the approved v1 homepage.

Validated runtime commit:

`ffdfbbef0340d412feb5c6f8d41468b05ae99af9`

Validation run:

`34807816064`

Passed:

- dependency installation;
- `astro check`;
- production build.

Phase 3E hardening completed before rendered QA:

- production draft routes are excluded;
- homepage motion uses the shared motion utility;
- unused footer prop scaffolding was removed;
- CI validation no longer duplicates `astro check`.

### 3E QA

**ACTIVE / SOURCE-LEVEL QA PASSED**

Evidence:

`research/qa/v1-homepage-phase3e.md`

Validate:

- desktop/tablet/mobile;
- keyboard/focus;
- reduced motion;
- Astro navigation lifecycle;
- GSAP cleanup;
- overflow;
- layout stability;
- performance;
- metadata;
- conditional rendering.

## Empty-state policy

Content-driven routes may have minimal designed empty states.

Do not use fake projects, fake testimonials, construction graphics, fabricated media, or filler "coming soon" content.

The homepage must not render a content section when that section has no real public content.

Before release:

- Work should have at least one real case study.
- Services should be complete.
- Journal should have real content.
- Contact must have a real contact path.
- Newsletter must function.
- Hustle should ideally have at least one real piece; otherwise omit it from the homepage until one exists.

## Work boundary

The homepage Work composition is implemented.

Real M7 evidence, screenshots, workflow demonstrations, and substantiated case-study claims still belong to the Work proof phase.

## Still open

- Phase 3E visual/interaction QA;
- final Work case study;
- Contact destination/form backend;
- favicon and social preview;
- newsletter cadence;
- optional confirmation-route namespace move.

Phase 3 does not authorize merge to `main` or deployment.
