# Portfilo v1 Design System + Information Architecture

_Last updated: 2026-09-14_

## Status

**SUPERSEDED / HISTORICAL EVIDENCE**

This document is the former concrete system derived from Obsidian Precision.

It is not current design authority.

Current creative authority:

`docs/V1_CREATIVE_DIRECTION.md`

The following are not locked for the redesign:

- Instrument Sans;
- IBM Plex Mono;
- permanent Obsidian/graphite palette;
- previous spacing/grid expression;
- previous navigation composition;
- current wordmark geometry;
- old homepage composition;
- old motion grammar.

Product architecture and valid content/integrity decisions survive only where confirmed by current authority.

---

## Historical content

Parent direction:

`docs/V1_DESIGN_DIRECTION.md`

Research provenance:

`research/design/v1-design-system-ia-research.md`

This document turns Obsidian Precision into the concrete design and information-architecture contract for v1.

## Typography

Primary family:

**Instrument Sans**

Use:

- display/hero: width approximately 78–86, weight 600–700;
- section headlines: width approximately 88–100, weight 600–650;
- interface/body: width 100, weight 400–500.

Utility family:

**IBM Plex Mono**

Use only for compact technical/editorial metadata such as project index, dates, status, and labels.

Do not use mono for body copy or decorative large text.

Recommended scale:

- hero display: `clamp(4.5rem, 10vw, 10.5rem)`;
- major section title: `clamp(3rem, 6vw, 6.5rem)`;
- project title: `clamp(2.5rem, 5vw, 5rem)`;
- H2/editorial feature: `clamp(2rem, 3.5vw, 3.75rem)`;
- large intro: `clamp(1.25rem, 1.6vw, 1.75rem)`;
- body: `1rem–1.125rem`;
- utility/mono: `0.6875rem–0.8125rem`.

Large type is a hierarchy tool, not a default treatment.

## Neutral palette

Foundation tokens:

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

The Portfilo interface should remain almost entirely neutral.

Contextual color may come from:

- real project interfaces;
- client branding;
- authentic Hustle photography;
- diagrams/data where color communicates meaning;
- semantic states.

Do not recolor real project or documentary media merely to preserve monochrome branding.

## Grid and shell

Desktop:

- 12-column grid;
- maximum working frame around 1680px;
- outer gutter: `clamp(24px, 3vw, 48px)`;
- gap: 16–24px.

Tablet:

- 8-column grid;
- 24–32px outer gutter.

Phone:

- 4-column grid;
- 16–20px outer gutter.

Reading measures:

- long-form body: approximately 680–760px;
- wide editorial intro: approximately 900px.

Foundation spacing scale:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`

Use one-off spacing only for clear optical correction.

## Geometry

Default:

- square/sharp corners;
- 0–4px radius only where a software artifact genuinely needs it;
- 1px structural rules;
- no decorative shadows;
- no pill systems except when the actual product being shown contains them.

## Navigation

### Desktop

- Portfilo wordmark top-left;
- primary nav top-right;
- order: Work / Services / Hustle / Journal / Contact;
- Contact remains a normal primary link, not a CTA pill.

Header may begin transparent where contrast is safe and transition to a solid/near-solid Obsidian state with a subtle rule after scroll.

Avoid glass blur as a default effect.

### Mobile

- wordmark left;
- text control `MENU` right;
- no hamburger icon required;
- large vertical navigation overlay;
- Contact remains in the same hierarchy.

Navigation must remain accessible independently of animation.

## Homepage information architecture

Approved order:

```text
HEADER
HERO
SELECTED WORK
SERVICES / WHAT WE SOLVE
HUSTLE
JOURNAL
NEWSLETTER
CONTACT
FOOTER
```

The hero introduces Portfilo but must not visually overpower Work.

No final public positioning copy is approved by this document.

## Work

Work is the primary proof and visual showcase.

Use real:

- software UI;
- product footage;
- workflows;
- interface states;
- system artifacts.

Avoid reducing projects to small cards, generic device mockups, or technology-stack presentations.

Recommended archive behavior:

- large project list;
- concise business problem/outcome cue;
- large media preview;
- desktop selection/hover may update adjacent or sticky media;
- no equal-card grid by default.

Recommended case-study structure:

```text
PROJECT HERO
BUSINESS CONTEXT
PROBLEM
SYSTEM
PRODUCT WALKTHROUGH
KEY DECISIONS
OUTCOME
NEXT PROJECT / CONTACT
```

Only use evidenced outcomes.

Do not force every project into a long agency-process narrative.

## Services

Services remain problem-led.

Recommended architecture:

```text
INTRO
PROBLEM TERRITORIES
CAPABILITIES
HOW WORK STARTS
RELATED WORK
CONTACT
```

Problem territories may include:

- manual operations;
- disconnected tools/data;
- repetitive workflows;
- systems that no longer fit;
- customer/product software needs.

Directional capability labels:

- Custom Software
- Automation
- AI Integration
- Digital Products

These are structure, not final public copy.

Avoid long framework/platform menus.

## Hustle

Hustle is the human counterweight to Work.

Archive:

- strong featured portrait;
- large subject name;
- concise story premise;
- authentic imagery;
- natural color allowed.

Article:

- subject/portrait hero;
- headline/dek;
- opening context;
- reported long-form body;
- authentic supporting media;
- methodology/source note where useful;
- related Hustle and newsletter at end.

Do not default to generic founder-card grids.

## Journal

Journal is the quietest primary surface.

Archive:

- title/date/topic;
- short dek;
- restrained list;
- optional image only when useful;
- no repeated animated cards.

Article:

- 680–760px reading measure;
- strong hierarchy;
- minimal motion;
- code, diagrams, screenshots, or data may break wider when necessary.

## Newsletter

No primary-navigation item.

Preferred placements:

1. homepage after Journal and before Contact;
2. end of Hustle articles;
3. end of Journal articles;
4. optional restrained footer signup.

Do not interrupt article bodies with signup modules.

The old v0 cadence is not carried forward automatically.

## Contact

Use a dedicated `/contact` route.

Recommended initial fields:

- Name
- Email
- Company / organization, optional
- What are you trying to improve, replace, or build?
- Submit

Provide a direct email fallback.

No budget field at foundation level.

No booking dependency unless real client workflow later justifies it.

## Motion system

Motion should feel fast, weighted, deliberate, and precise.

Timing families:

- micro interaction: 160–220ms;
- component: 280–420ms;
- major reveal: 500–700ms;
- page/project: 650–900ms;
- product demonstration: 800–1200ms.

Recommended easings:

- primary settle/reveal: `power3.out`;
- bidirectional transitions: `power2.inOut`.

Avoid bounce/spring as the default brand motion.

Scroll:

- native scrolling;
- no scroll hijacking;
- no foundation smooth-scroll dependency;
- use scroll-linked behavior only where the composition benefits;
- pinned sequences should be concentrated in Work/product demonstrations.

Mobile:

- simplify motion deliberately;
- reduce long pinned sequences, multi-layer parallax, and large horizontal movement;
- do not depend on hover.

Reduced motion:

- remove large scale/pan/parallax;
- remove pinned storytelling;
- preserve all content, navigation, and state access.

## Media framing

For software:

1. raw interface capture;
2. browser/window frame only when context matters;
3. device frame only when device context matters;
4. avoid generic floating-device mockups as the default.

Use software itself as composition material.

For Hustle:

- authentic portrait/workplace/context imagery;
- no generated documentary likenesses or fake operating environments.

For Journal:

- imagery only when it performs a meaningful explanatory/documentary/conceptual job.

## Wordmark

Keep the current Portfilo wordmark geometry as the v1 foundation candidate.

Test primarily in:

- Cold white `#E8EAEC`;
- Silver `#B9BEC2`.

Do not redesign unless implementation prototypes expose a concrete optical/proportional mismatch.

The old blue/red application has no automatic v1 role.

## Motion dependency

**GSAP is approved for v1 implementation.**

Rationale:

- coordinated motion is part of the approved product/design contract;
- Work requires timeline sequencing and selective scroll-linked demonstrations;
- one mature dependency is preferable to scattered bespoke animation infrastructure.

Constraints:

- no foundation ScrollSmoother dependency;
- no foundation Three.js/WebGL;
- progressive enhancement;
- responsive/reduced-motion setups;
- clean listener/trigger lifecycle during navigation.

## System summary

```text
Typography
Instrument Sans + IBM Plex Mono

Palette
Obsidian / graphite / silver / cold white

Grid
12 desktop / 8 tablet / 4 mobile

Geometry
Sharp / thin structural rules

Navigation
Simple desktop nav / MENU overlay mobile

Homepage
Hero -> Work -> Services -> Hustle -> Journal -> Newsletter -> Contact

Motion
GSAP + native scroll / no foundation WebGL

Hierarchy
Work = spectacle
Services = precision
Hustle = humanity
Journal = clarity
```

## Still separate

This document does not approve final public copy.

Separate future copy decisions include:

- homepage positioning;
- service descriptions;
- contact language;
- newsletter promise/cadence;
- case-study factual claims;
- editorial headlines/deks.
