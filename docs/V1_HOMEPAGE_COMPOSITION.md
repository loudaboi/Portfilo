# Portfilo v1 Homepage Composition + Interaction

_Last updated: 2026-09-14_

## Status

**REJECTED / SUPERSEDED / HISTORICAL EVIDENCE**

This composition was implemented and then founder-rejected after rendered review.

It no longer authorizes implementation.

Current creative authority:

`docs/V1_CREATIVE_DIRECTION.md`

The approved Problem-led software positioning and homepage copy survive separately; this visual composition does not.

Do not use this document to constrain the new Responsive Identity exploration.

---

## Historical content

This document records the approved homepage visual composition and interaction model for Portfilo v1.

It is subordinate to:

- `docs/V1_DESIGN_DIRECTION.md`
- `docs/V1_DESIGN_SYSTEM.md`
- `docs/V1_HOMEPAGE_POSITIONING.md`
- `docs/V1_HOMEPAGE_COPY.md`

This document authorizes Phase 3D implementation of the approved homepage. It does not authorize merge to `main` or deployment.

## Composition principle

The homepage should feel like one continuous engineered surface rather than a stack of agency cards or alternating marketing bands.

Primary hierarchy:

**Hero = proposition**

**Work = spectacle / proof**

**Services = precision**

**Hustle = humanity**

**Journal = clarity**

The homepage becomes progressively quieter after Work.

## Hero

Desktop target:

- approximately 65–72svh below the header;
- typographic and controlled;
- headline is the only oversized element;
- headline occupies approximately columns 1–10;
- supporting sentence sits lower/right at approximately columns 8–12;
- thin structural rule closes the hero and introduces Work.

Approved headline:

**Software built around the problem.**

Preferred wide-screen line treatment:

```
Software built
around the problem.
```

The fixed desktop line treatment must relax on mobile so wrapping can occur naturally.

Do not add:

- hero imagery;
- abstract 3D;
- gradients;
- AI graphics;
- service tickers;
- marquees;
- hero CTA buttons;
- decorative metrics.

### Hero motion

Use one restrained clipped/masked headline reveal.

Target family:

- 550–650ms;
- `power3.out`;
- supporting sentence follows with a small opacity/vertical transition.

Navigation must be usable immediately.

No loader or delayed entrance sequence.

## Selected Work

Render only when at least one real published Work case study exists.

Use large vertical project modules, not:

- equal-card grids;
- horizontal carousels;
- generic device mockups.

Each project should communicate:

1. concise project metadata;
2. project name;
3. evidence-bounded project cue;
4. large real project media where available;
5. link to the case study.

Use real software UI, workflow footage, interface states, or system artifacts.

If a published project has no legitimate homepage media, do not fabricate a media placeholder. The composition may fall back to a text-led project treatment.

Project footage may animate through real system states when that evidence exists. Static media should receive only a restrained entrance.

No giant pinned homepage Work sequence at foundation level.

## Services

Visually quieter than Work.

Desktop composition should use an approximately 4/8 split for section framing.

Approved public copy:

**What we solve**

Manual work, disconnected systems, repetitive workflows, software that no longer fits, and new product needs.

Capabilities should appear as ruled rows:

1. Custom Software
2. Automation
3. AI Integration
4. Digital Products

No cards, capability icons, decorative illustrations, or foundation accordion.

Interaction is limited to precise tonal/rule feedback where useful.

## Hustle

Render only when at least one real published Hustle story exists.

Use one featured story on the homepage rather than a generic article grid.

Preferred desktop balance:

- authentic portrait/context media: approximately 5 columns;
- story information: approximately 7 columns.

Natural documentary color is allowed.

Do not:

- fabricate subject imagery;
- force monochrome treatment;
- add portrait effects;
- use a carousel by default.

If the real story has no legitimate image, use a text-led fallback rather than fabricated media.

## Journal

Render only when published Journal content exists.

Use:

- approved heading and supporting sentence;
- approximately three most recent published pieces;
- restrained ruled editorial rows;
- compact metadata;
- headline;
- dek;
- literal read/open affordance.

No repeated card backgrounds, required imagery, hover-preview system, or complex section animation.

Journal should be the quietest editorial surface.

## Newsletter

Render while the approved newsletter infrastructure is functioning.

Use a subtle Deep Graphite material shift rather than brand color or a bright promotional band.

Desktop target:

- approximately 5/7 split;
- approved heading/supporting sentence on the left;
- email field + Subscribe action on the right.

Do not repeat another homepage newsletter acquisition module in the footer.

## Contact

The approved homepage Contact section should render only when there is a real public contact path.

Target:

- approximately 50–60svh on desktop;
- second major typographic moment after the hero;
- approved question as the primary text;
- `Contact Portfilo` as a large text action or ruled link;
- no pill or promotional urgency.

Until the Contact destination is real, omit the homepage Contact section rather than showing a placeholder.

## Footer

Retain the existing footer architecture unless implementation exposes a concrete problem:

- wordmark;
- primary navigation;
- Privacy;
- copyright.

Do not expand it into another marketing surface.

## Motion

Use GSAP for coordinated motion and real Work demonstrations.

Native scroll remains mandatory.

Homepage motion hierarchy:

1. restrained hero reveal;
2. Work reveal or genuine product-state demonstration;
3. restrained section entrances;
4. minimal Journal motion.

Do not add:

- smooth-scroll infrastructure;
- scroll hijacking;
- persistent parallax;
- cursor effects;
- ambient decorative motion.

Every animation must clarify hierarchy, state, workflow, or transition.

## Responsive behavior

Mobile is a separate simplification pass.

### Hero

- stack naturally;
- allow the headline to wrap without forced desktop line breaks;
- supporting sentence follows directly below.

### Work

- preserve real media aspect ratio;
- remove sticky/pinned storytelling;
- do not depend on hover.

### Services

- one-column flow.

### Hustle

- image first, story second when image exists.

### Journal

- simple ruled rows.

### Newsletter

- stacked copy and form.

### Contact

- large but not forced to fill a viewport.

Existing mobile `MENU` navigation remains.

## Reduced motion

For `prefers-reduced-motion: reduce`:

- render the same content statically;
- remove large scale/pan/parallax;
- remove pinned sequences;
- avoid motion-dependent access;
- use representative static project state when motion would otherwise carry meaning.

## Conditional rendering

Homepage rules:

1. Work renders only with at least one published Work case study.
2. Services renders because its approved content is real.
3. Hustle renders only with at least one published Hustle story.
4. Journal renders only with published Journal content.
5. Newsletter renders while the current approved subscription infrastructure functions.
6. Contact renders only when a real public contact path exists.
7. Footer always renders.

Do not show homepage empty-state messages.

## Rejected homepage patterns

Do not introduce during implementation:

- Work card grid;
- horizontal project carousel;
- looping marquee;
- fake terminal;
- literal chrome material effect;
- hero showreel;
- foundation Three.js/WebGL;
- glowing AI graphics;
- decorative metrics;
- fabricated testimonials;
- unsupported client-logo wall;
- redundant agency manifesto blocks.

## Phase 3D boundary

Phase 3D may:

- replace the legacy homepage runtime;
- query current Content Collections;
- apply the approved composition responsively;
- use existing GSAP;
- solve low-level accessibility, layout, and lifecycle details.

Phase 3D may not:

- change approved public copy;
- fabricate Work/Hustle proof;
- create new sections;
- introduce new visual motifs;
- merge to `main`;
- deploy.
