# Portfilo v1 Design System + Information Architecture Research

_Last updated: 2026-09-14_

## Decision job

Turn the founder-approved **Obsidian Precision** direction into a concrete design and information-architecture system that can guide the v1 implementation without introducing arbitrary visual choices during build.

This is a research and recommendation artifact only. It does not authorize production UI implementation.

## Approved foundation

Canonical visual authority:

`docs/V1_DESIGN_DIRECTION.md`

Approved product architecture:

`Work / Services / Hustle / Journal / Contact`

Approved design standard:

**High visual ambition. Low visual noise.**

The system must feel alive, technically excellent, expensive, controlled, and highly capable.

---

# 1. Reference findings relevant to the concrete system

## Build in Amsterdam / Akris

Akris is useful because the premium effect is explicitly built through grids, precise typography, and open space rather than decorative luxury cues.

Portfilo implication:

- use a disciplined grid;
- keep strong open space around important project media;
- treat precision itself as the luxury signal;
- do not use metallic effects as a substitute for composition.

## Studio Freight

Useful for strong typographic hierarchy, dense information, sharp geometry, and work-first presentation.

Portfilo implication:

- dense information can feel premium when alignment is strict;
- giant type should be used selectively;
- small utility type can contrast with large display type;
- the site should not imitate Studio Freight's exact multi-column layout.

## Metalab

Useful because project interfaces are the evidence. Their work pages foreground real product screens and describe project type/stage/deliverables without letting capability labels dominate.

Portfilo implication:

- real software UI should be the main Work media;
- project taxonomy should stay secondary;
- use project context and outcomes rather than technology stacks as the primary narrative.

## Active Theory

Useful for the principle that experimental execution does not require experimental navigation.

Portfilo implication:

- navigation stays direct;
- technical complexity belongs in Work and transitions, not basic usability.

## GSAP / web performance

GSAP's current ScrollTrigger and matchMedia APIs support native scrolling, responsive animation setup, cleanup, and reduced-motion conditions.

Portfilo implication:

- use native scrolling;
- GSAP is likely justified for coordinated motion;
- do not add a separate smooth-scroll layer at foundation level;
- configure desktop/mobile/reduced-motion intentionally.

---

# 2. Recommended typography system

## Primary typeface: Instrument Sans

Recommendation: **retain Instrument Sans, but use it very differently from v0.**

Reason:

- open-source / OFL;
- variable width from 75–100;
- weight range 400–700;
- strong neo-grotesque foundation;
- enough stylistic alternates to create a more specific expression;
- already technically suitable for UI and large display work;
- width axis lets Portfilo create a compressed, high-impact display voice without adding another paid display family.

This is not a decision to preserve the old publication typography system. The v1 treatment should be materially different.

### Roles

**Display / hero**
- Instrument Sans variable
- width: ~78–86 depending on final optical testing
- weight: 600–700
- tight leading
- tight tracking
- uppercase only when composition earns it, not by default

**Section headlines**
- width: 88–100
- weight: 600–650

**Body / interface**
- width: 100
- weight: 400–500
- generous enough line-height for clarity

## Utility typeface: IBM Plex Mono

Recommendation: retain or reintroduce **IBM Plex Mono** for small technical/utility roles only.

Use for:

- project index;
- metadata;
- dates;
- section labels;
- status;
- compact technical annotation.

Do not use mono for body copy or large decorative text.

Why IBM Plex Mono over Geist Mono:

- more industrial/editorial character;
- less likely to make Portfilo resemble a generic Vercel-style software site;
- already fits the business + engineering hybrid;
- open-source / OFL.

## Proposed type scale

Desktop target ranges:

- Hero display: `clamp(4.5rem, 10vw, 10.5rem)`
- Major section title: `clamp(3rem, 6vw, 6.5rem)`
- Project title: `clamp(2.5rem, 5vw, 5rem)`
- H2 / editorial feature: `clamp(2rem, 3.5vw, 3.75rem)`
- Intro / large body: `clamp(1.25rem, 1.6vw, 1.75rem)`
- Body: `1rem–1.125rem`
- Utility/mono: `0.6875rem–0.8125rem`

Phone display sizes should reduce substantially rather than merely scaling the desktop composition down.

## Typography rule

Large type is a hierarchy tool, not a default aesthetic.

No page should contain several competing oversized headlines.

---

# 3. Recommended neutral palette

The palette should feel cold and engineered without becoming blue-black cyberpunk.

## Core tokens

```text
Obsidian        #090909   primary background
Deep graphite   #0E0F10   secondary background
Graphite        #151617   elevated media/section surface
Steel           #1D1F21   hover/elevated structural surface
Line            #2B2E30   borders/rules

Muted silver    #8F9498   secondary text
Silver          #B9BEC2   emphasized secondary text
Cold white      #E8EAEC   primary text
Bright white    #F4F5F5   maximum emphasis
```

Contrast checks against `#090909`:

- `#8F9498`: ~6.5:1
- `#B9BEC2`: ~10.6:1
- `#E8EAEC`: ~16.5:1
- `#F4F5F5`: ~18.2:1

The muted silver is therefore viable for ordinary text contrast on the main background, although smaller/critical text should generally use the stronger values.

## Color policy

Portfilo-owned interface color should remain almost entirely neutral.

Contextual color is allowed through:

- real project interfaces;
- client branding;
- Hustle photography;
- Journal diagrams/data where color communicates meaning;
- semantic states such as error/success.

Do not recolor real software or photography merely to maintain monochrome branding.

The old Portfilo blue/red treatment has no automatic v1 role.

---

# 4. Grid, shell, spacing, and geometry

## Grid

Desktop:

- 12-column grid;
- maximum working frame around 1680px;
- outer gutter: `clamp(24px, 3vw, 48px)`;
- grid gap: 16–24px depending on viewport.

Tablet:

- 8-column grid;
- 24–32px outer gutter.

Phone:

- 4-column grid;
- 16–20px outer gutter.

The homepage and Work may use full-width media outside the reading/text column.

## Reading measures

- long-form body: ~680–760px maximum;
- wide editorial intro: ~900px maximum;
- service/marketing copy: allow wider lines only when font size is large enough.

## Spacing scale

Foundation:

`4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 / 160`

Avoid arbitrary one-off spacing unless optical correction clearly requires it.

## Geometry

Default:

- square/sharp corners;
- radius 0–4px only where a software screenshot/device/system artifact genuinely requires it;
- 1px structural rules;
- no card shadows as decoration;
- no pill components except where the underlying product/interface shown in media actually contains them.

---

# 5. Navigation system

## Desktop

Recommended composition:

- Portfilo wordmark: top-left;
- primary navigation: top-right;
- order: Work / Services / Hustle / Journal / Contact;
- no separate CTA pill in the global header;
- Contact behaves as a normal primary link.

Header behavior:

- initial state may be transparent over the hero where contrast is safe;
- after scroll, transition to solid/near-solid Obsidian with a subtle bottom rule;
- avoid glass blur as the default effect;
- remain accessible and immediately usable.

Hover:

- muted silver -> cold/bright white;
- optional subtle line/reveal motion;
- no moving navigation position.

## Mobile

Recommended:

- wordmark left;
- text control `MENU` right;
- no hamburger icon required;
- full-screen or near-full-screen menu overlay;
- large vertical links;
- Contact remains in the same hierarchy rather than being converted into a special button.

The menu animation should be simple and quick.

---

# 6. Homepage information architecture

Recommended order:

```text
HEADER

HERO
- one primary positioning statement
- one supporting statement
- primary path to Work
- secondary path to Contact where useful
- no generic capability badge cloud

SELECTED WORK
- dominant homepage section
- one project at a time or a very small number of strongly presented projects
- real interface/product media
- project context/problem/outcome cues

SERVICES / WHAT WE SOLVE
- structured text-led section
- no card soup

HUSTLE
- one featured human story
- strong portrait/real-world media
- visual rhythm change

JOURNAL
- compact list or editorial stream
- text-led

NEWSLETTER
- embedded acquisition section
- not a standalone product page

CONTACT / OUTRO
- decisive end state
- clear path to start a conversation

FOOTER
```

## Hero behavior

The hero should create immediate confidence, but not consume the site's entire design budget.

Do not make the hero more technically impressive than Work.

No final public positioning copy is approved during this gate.

---

# 7. Work system

## Work archive

Recommended pattern:

- large project list;
- project name + concise business problem/outcome cue;
- large media preview;
- desktop hover/selection can update a sticky or adjacent preview;
- avoid equal-size project cards.

If real inventory is small, show fewer projects with more confidence rather than manufacturing filler.

## Homepage Work

A project may occupy 80–100vh when the media and story justify it.

Use real:

- POS flows;
- dashboards;
- inventory states;
- customer records;
- workflow changes;
- interface interactions.

Avoid fake dashboard data, made-up outcomes, or abstract 3D used to hide weak project evidence.

## Case study structure

Recommended:

```text
PROJECT HERO
name / concise job / year / role

BUSINESS CONTEXT
what operation/business situation existed

PROBLEM
what was failing, manual, fragmented, or limiting

SYSTEM
what Portfilo designed/built

PRODUCT WALKTHROUGH
real interface and workflow evidence

KEY DECISIONS
only decisions that materially shaped the solution

OUTCOME
only evidenced results / current operational state

NEXT PROJECT / CONTACT
```

Do not force every project into a long agency-process narrative.

---

# 8. Services structure

Services should remain problem-led.

Recommended page architecture:

```text
INTRO
what kinds of business problems Portfilo takes on

PROBLEM TERRITORIES
manual operations
disconnected tools/data
repetitive workflows
systems that no longer fit
customer/product software needs

CAPABILITIES
Custom Software
Automation
AI Integration
Digital Products

ENGAGEMENT / HOW WORK STARTS
simple explanation of discovery -> decision -> build where justified

RELATED WORK

CONTACT
```

The problem territories and capabilities are structural labels, not final public copy.

Avoid creating a long menu of platforms, frameworks, and technologies.

---

# 9. Hustle system

## Archive

Hustle should visually break the engineered Work rhythm.

Recommended:

- strong feature portrait;
- large subject name;
- concise story premise;
- supporting list/grid with authentic imagery where available;
- natural color allowed.

Avoid generic founder-card grids.

## Article

Recommended:

- portrait/subject hero;
- strong headline and dek;
- opening context;
- reported long-form body;
- pull quotes only when genuinely useful;
- authentic supporting images/documents/screens;
- methodology/source note where appropriate;
- related Hustle / newsletter at end.

Disability/background should only dominate framing when reporting establishes that it materially shaped the story and the subject is comfortable with that framing.

---

# 10. Journal system

## Archive

The quietest archive.

Recommended:

- title/date/topic;
- short dek;
- restrained list;
- optional image only when it materially helps;
- no repeated animated cards.

## Article

- reading measure 680–760px;
- strong hierarchy;
- restrained sticky metadata/contents only when length justifies it;
- code, diagrams, screenshots, or data can break the reading column when necessary;
- minimal scroll animation.

Journal should feel like serious thinking, not a blog template.

---

# 11. Newsletter placement

No primary navigation item.

Recommended placements:

1. homepage after Journal or between Journal and Contact;
2. end of Hustle articles;
3. end of Journal articles;
4. optional restrained footer signup.

Avoid signup interruptions inside the reading body.

The old three-times-per-week cadence is not carried forward automatically.

---

# 12. Contact flow

Use a dedicated `/contact` route.

Recommended initial form:

- Name
- Email
- Company / organization (optional)
- What are you trying to improve, replace, or build?
- Submit

Do not require a budget field at foundation level.

Also provide a direct email fallback.

No Calendly/booking dependency unless actual client workflow later shows it is useful.

---

# 13. Motion grammar

## Timing families

### Micro interaction
`160–220ms`

Use for:
- hover color;
- focus;
- small controls;
- icon/line responses.

### Component transition
`280–420ms`

Use for:
- menu;
- content reveal;
- small media state changes.

### Section / major reveal
`500–700ms`

Use for:
- large text/media entrance;
- section handoff.

### Page / project transition
`650–900ms`

Use sparingly.

### Product demonstration
`800–1200ms`

Only when demonstrating a real interface/workflow and the slower pace improves comprehension.

## Easing families

Primary settle/reveal:
- GSAP `power3.out`

Bidirectional transitions:
- GSAP `power2.inOut`

Avoid bounce/spring as default brand motion.

## Scroll

- native scroll;
- no scroll hijacking;
- no foundation-level smooth-scroll dependency;
- ScrollTrigger only where a real composition needs it;
- pinned sequences mainly limited to Work/project demonstrations.

## Mobile

Mobile is not the desktop motion system compressed.

Reduce or remove:

- long pinned sequences;
- multi-layer parallax;
- large horizontal movement;
- hover-dependent meaning.

Prefer:

- fades;
- short translate/clip reveals;
- simple media sequencing.

## Reduced motion

When `prefers-reduced-motion: reduce`:

- remove large scale/pan/parallax;
- remove pinned storytelling;
- use immediate or minimal-opacity transitions;
- preserve all content/state/navigation access.

---

# 14. Media framing

## Software interfaces

Preferred hierarchy:

1. raw interface capture at high quality;
2. full-window/browser frame only when context is necessary;
3. device frame only when device context matters;
4. avoid generic floating-device mockups as the default.

Use project UI as composition material.

## Hustle

Authentic portraiture / workplace / subject context.

Do not use AI-generated documentary likenesses or fake workplaces.

## Journal

Images only when they do explanatory/documentary/conceptual work.

---

# 15. Wordmark test

Recommendation:

- retain existing geometry for v1 foundation;
- convert SVG application to monochrome/currentColor for testing;
- first tests:
  - `#E8EAEC` cold white;
  - `#B9BEC2` silver;
- use the wordmark primarily in the header/footer, not as constant oversized decoration.

Do not redesign it unless implementation prototypes expose a concrete mismatch.

---

# 16. GSAP decision

Recommendation: **approve GSAP as the v1 motion dependency once implementation begins.**

Rationale:

- motion is now part of the product/design contract rather than decorative enhancement;
- Work needs coordinated sequencing and selective scroll-linked demonstrations;
- GSAP provides mature timeline sequencing, ScrollTrigger, responsive matchMedia handling, and cleanup;
- a single well-scoped motion dependency is preferable to scattered bespoke animation utilities.

Constraints:

- do not add ScrollSmoother at foundation level;
- do not add Three.js/WebGL;
- animation must remain progressive enhancement;
- keep scope modular and clean up listeners/triggers on navigation.

---

# 17. Recommended system summary

## Typography
Instrument Sans + IBM Plex Mono.

## Palette
Obsidian / graphite / muted silver / cold white.

## Grid
12 desktop / 8 tablet / 4 mobile.

## Geometry
Sharp, 1px structural lines, little/no decorative radius.

## Navigation
Simple persistent desktop nav; wordmark + MENU overlay on mobile.

## Homepage
Hero -> Work -> Services -> Hustle -> Journal -> Newsletter -> Contact.

## Motion
GSAP, native scroll, precise timing, no WebGL foundation.

## Visual hierarchy
Work = spectacle.
Services = precision.
Hustle = humanity.
Journal = clarity.

## Brand principle
Real project/product/media color is allowed inside an almost colorless Portfilo shell.

---

# 18. Decisions still intentionally open

This gate does **not** approve final public copy.

Still separate:

- homepage positioning wording;
- service descriptions;
- contact copy;
- Journal/Hustle naming copy beyond approved labels;
- final project case-study factual claims;
- newsletter cadence/promise.

---

# Approval gate

Founder approval should lock or modify:

1. typography;
2. palette;
3. grid/geometry;
4. navigation;
5. homepage IA;
6. Work model;
7. Services/Hustle/Journal architecture;
8. newsletter/contact placement;
9. motion system;
10. media treatment;
11. wordmark treatment;
12. GSAP as the implementation motion dependency.

After approval, promote the system into canonical v1 design authority and create the targeted runtime/content migration plan.
