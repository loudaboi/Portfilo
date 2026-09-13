# Portfilo v1 Design Direction Research

_Last updated: 2026-09-14_

## Decision job

Define a Portfilo-specific visual and interaction direction that makes the new studio feel alive, technically excellent, expensive, and highly capable without becoming a generic Awwwards-style agency site.

This is research and recommendation only. It does not authorize runtime implementation.

## Current approved constraints

- Portfilo v1 is studio-first.
- Primary architecture: Work / Services / Hustle / Journal / Contact.
- Newsletter remains embedded distribution, not a primary navigation destination.
- News is retired.
- Why evolves into Journal.
- Hustle broadens to founders, CTOs, engineers, operators, independent builders, and other relevant people.
- Dark / near-black, silver / graphite / cold-white, minimal color is the founder-preferred territory.
- High visual ambition is desired.
- Motion should demonstrate craft and control.
- The old publication design system is historical, not a v1 constraint.
- The existing Portfilo wordmark should be tested in the selected system before any redesign decision.

## Reference evidence

### Active Theory

Useful lesson: technical spectacle can coexist with extremely simple navigation.

Active Theory deliberately keeps navigation simple while using WebGL and interaction as the expressive layer of the portfolio. Their site treats the portfolio itself as proof of technical capability rather than decorating conventional agency pages with motion.

Relevant source:
- https://activetheory.net/
- https://www.commarts.com/webpicks/active-theory-2

Portfilo implication:
- reserve technical complexity for the places where it demonstrates capability;
- keep navigation and conversion paths obvious;
- do not copy WebGL simply because Active Theory uses it. Immersive technology is part of what they sell.

### Studio Freight

Useful lesson: a studio can feel premium through conviction, typography, strong work presentation, and extremely restrained interface rather than visual effects alone.

Their Hyperbolic work is especially relevant because the identity was explicitly designed to feel technical and AI-native without becoming generic sci-fi. The case study pairs structured typography, restrained supporting graphics, physical compute imagery, and clear business framing.

Relevant sources:
- https://studiofreight.com/
- https://studiofreight.com/work/hyperbolic
- https://studiofreight.com/work/studio-freight

Portfilo implication:
- do not let "technical" turn into cyberpunk;
- show business context and project consequence;
- the Work itself should carry more visual weight than generic studio decoration.

### Locomotive

Useful lesson: strong studios can keep a conventional information architecture while making the execution expressive.

Their current architecture still foregrounds Work, agency information, contact, and supporting articles/culture. They explicitly describe design and code as tools rather than the core differentiator.

Relevant source:
- https://locomotive.ca/

Portfilo implication:
- Work should be immediately accessible;
- editorial content can coexist with commercial work without becoming the homepage identity;
- motion and personality do not require hiding ordinary navigation.

### Build in Amsterdam

Useful lesson: premium digital experiences can be dynamic while remaining systematic.

Their Akris case explicitly uses grids, precise typography, and open space inspired by Swiss modernism. Their other work uses motion, sound, variable typography, and interactive product presentation only when it fits the brand.

Relevant sources:
- https://www.buildinamsterdam.com/
- https://www.buildinamsterdam.com/case/akris
- https://www.buildinamsterdam.com/case/moooi
- https://www.buildinamsterdam.com/case/bezier

Portfilo implication:
- premium comes from precision before effects;
- motion should have a clear system;
- sophisticated interaction can sit on top of disciplined grids and typography.

### Metalab

Useful lesson: product/interface work should be shown directly and at scale.

Their Work surface is highly project-forward and uses the interface/product artifact itself as the central evidence.

Relevant sources:
- https://www.metalab.com/
- https://www.metalab.com/work

Portfilo implication:
- M7 and future systems should be presented through real interface footage/screens, not generic device mockups alone;
- capabilities matter less than credible proof.

### ustwo and thoughtbot

Useful lesson: commercial positioning becomes much more credible when Work, service capability, and published thinking reinforce each other.

Relevant sources:
- https://ustwo.com/
- https://thoughtbot.com/

Portfilo implication:
- Hustle and Journal should support, not compete with, the studio;
- service pages should connect to real work and business outcomes;
- editorial publishing can become a durable trust layer.

### Industrial/product references

Teenage Engineering and Nothing demonstrate that monochrome or near-monochrome systems can feel highly distinctive when material, typography, product imagery, and interaction are coherent.

Relevant sources:
- https://teenage.engineering/
- https://nothing.tech/

Portfilo implication:
- "silver" should be treated as a material hierarchy, not a metallic gradient gimmick;
- neutral systems can still have strong identity.

## Cross-reference findings

### 1. Expensive does not mean dark

Several premium references are light or mixed-mode. Darkness alone has no premium value.

For Portfilo, dark remains a strong founder-preferred direction because it suits the desired technical confidence and makes interface/media presentation effective. The premium quality must come from precision, restraint, typography, motion, and project media.

### 2. Work should carry the spectacle

The strongest commercial studio sites make projects the primary evidence.

Portfilo should not spend its largest motion budget on a decorative hero while presenting real client work in small cards.

### 3. Navigation should stay boring in the best sense

Primary navigation should remain immediate and legible.

The site can be technically ambitious without making the visitor learn a new interaction model.

### 4. Motion needs a grammar

Useful motion roles:

- reveal hierarchy;
- transition between projects/pages;
- demonstrate an interface or workflow;
- show relationship between states;
- reward direct interaction;
- create pacing.

Weak motion roles:

- constant ambient movement with no meaning;
- parallax everywhere;
- cursor particles;
- scroll hijacking;
- loading sequences that exist only to delay entry;
- effects repeated solely to make the site feel "advanced."

### 5. Monochrome works best when real media is allowed to breathe

The Portfilo shell can remain nearly monochrome while actual Work interfaces, client imagery, and Hustle photography supply contextual color.

This avoids forcing every real artifact into the brand palette.

### 6. The commercial/editorial hybrid is valid

Koto, Locomotive, thoughtbot, Studio Freight, and others maintain publishing or cultural/editorial layers alongside commercial Work.

Portfilo does not need to choose between studio and editorial identity. It does need a clear hierarchy: studio first, editorial second.

## Candidate direction A — Obsidian Precision

### Core idea

A near-black, graphite, silver, and cold-white system built around exact typography, hard alignment, strong project media, and tightly controlled motion.

Silver is expressed primarily through tonal hierarchy, fine highlights, crisp surfaces, and occasional material media rather than chrome gradients.

### Visual language

- near-black base;
- graphite secondary surfaces;
- cold silver secondary type/rules;
- bright cold white for highest hierarchy;
- little to no persistent brand color;
- real project media allowed to retain its own color;
- large but disciplined typography;
- precise grid;
- sharp corners by default;
- thin structural rules used sparingly;
- high-quality UI footage/screens as primary Work imagery.

### Motion language

- clipped/masked type and media reveals;
- project panels locking into alignment;
- subtle depth and scale during project transitions;
- coordinated page transitions;
- interface-state demonstrations;
- fast, precise hover responses;
- little or no decorative continuous motion.

### Work

The strongest and most cinematic surface.

A project may temporarily own most of the viewport. Actual software UI should animate or transition through real states.

Business problem and outcome stay visible and concise.

### Services

Quiet, typographic, structured.

No service-card soup.

### Hustle

Human contrast against the engineered shell.

Authentic portraits and operating-context imagery can carry natural color if appropriate rather than forcing all subjects into monochrome.

### Journal

Lowest-motion surface.

Strong typography, generous reading measure, restrained metadata, diagrams/data where justified.

### Wordmark

Test the existing wordmark first in cold-white and silver monochrome.

Refine only if the selected typography/system exposes a concrete proportion or optical problem.

### Technical cost

Medium.

Likely achievable with Astro + CSS + GSAP for coordinated sequencing and page/scroll interactions.

No WebGL requirement.

### Risk

Can become sterile if every surface is treated as machinery.

Hustle, real project media, and selective human imagery are the counterweight.

### Assessment

Best fit.

This direction most directly satisfies "alive, technically excellent, expensive" while keeping the site credible for business clients.

## Candidate direction B — Cinematic Blackroom

### Core idea

A black editorial/cinematic environment driven by full-bleed photography, video, project footage, and larger atmospheric transitions.

Less industrial than Direction A, more emotional.

### Visual language

- black canvas;
- large media;
- oversized typography;
- heavier use of full-screen composition;
- image/video-led sections;
- fewer visible grids/rules;
- editorial shifts in scale.

### Motion language

- slower image reveals;
- full-screen transitions;
- masks and wipes;
- cinematic scroll pacing;
- occasional pinned sequences.

### Work

Immersive project chapters.

### Hustle

Potentially exceptional because portraiture and human stories become visually central.

### Journal

Could inherit an editorial magazine feel.

### Technical cost

Medium to high because quality depends on excellent media and careful responsive treatment.

### Risk

Portfilo currently has limited project-media inventory.

Without consistently strong photography/video, the direction can feel empty or overdramatic.

It also has a higher risk of becoming a creative-agency presentation rather than a technically serious operations/software studio.

### Assessment

Strong secondary influence, not recommended as the core system.

Borrow its media confidence for Work and Hustle.

## Candidate direction C — Machined Chrome

### Core idea

Explicit metallic/chrome materials, 3D objects, reflective surfaces, futuristic interaction, and more visible technical spectacle.

### Visual language

- black;
- literal silver/chrome;
- reflective 3D forms;
- hardware/infrastructure references;
- technical labels;
- more explicit depth and lighting.

### Motion language

- 3D rotation;
- spatial scroll scenes;
- shaders/reflections;
- mouse-driven depth;
- persistent ambient movement.

### Technical cost

High.

Likely introduces WebGL/Three.js or similar infrastructure plus significantly more performance and QA work.

### Risk

Very high risk of:
- generic AI-company aesthetics;
- sci-fi/cyberpunk cliché;
- making Portfilo look more capable than the actual work proves;
- performance cost;
- distracting from business outcomes;
- aging quickly.

Studio Freight's Hyperbolic case is an explicit warning: technical businesses often already look like dark, dense, futuristic startups. Their answer was to move toward trusted, structured enterprise presentation instead.

### Assessment

Reject as the core direction.

A tiny amount of machined/metallic detail may be borrowed into Direction A, but literal chrome should not become the identity.

## Recommended direction

**Direction A — Obsidian Precision**

Use Direction B selectively for project and Hustle storytelling.

Reject Direction C as the overall identity.

Recommended design formula:

```text
OBSIDIAN PRECISION
+ cinematic project media when earned
+ authentic human/editorial imagery
- sci-fi chrome theater
- generic agency motion
```

## Recommended v1 design principles

1. Work proves capability.
2. Navigation never competes with Work.
3. Motion communicates control.
4. Silver is a material hierarchy, not an effect.
5. Real project interfaces are more valuable than decorative 3D.
6. Real people keep the system human.
7. The studio shell owns almost no color; real content may.
8. Every animation must have a reason.
9. Mobile receives a deliberately simplified motion system, not a broken desktop version.
10. Expensive means precise enough that nothing looks accidental.

## Technical implications

If Direction A is approved:

- Astro remains appropriate;
- GSAP is likely justified for coordinated motion;
- native scrolling should remain the default unless later interaction design proves a need for another layer;
- WebGL/Three.js is not justified at foundation level;
- prioritize transform/opacity-based motion where possible;
- every motion system requires reduced-motion behavior;
- large video/project media must be responsive and lazily loaded;
- mobile should use fewer pinned/large spatial transitions;
- motion must not block navigation or content access.

Relevant technical references:
- https://gsap.com/docs/v3/GSAP/gsap.matchMedia%28%29/
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-reduced-motion
- https://web.dev/articles/animations-overview
- https://web.dev/articles/animations-guide

## Open decisions after direction approval

Do not resolve these until the founder approves a direction:

- exact typefaces;
- exact neutral palette values;
- exact homepage composition;
- navigation placement/behavior;
- exact page-transition grammar;
- exact Work case-study structure;
- whether project media uses device frames or raw UI surfaces;
- Hustle photo color treatment;
- Journal reading typography;
- final wordmark treatment/refinement;
- whether GSAP becomes an actual dependency.

## Approval gate

Founder should approve, reject, or modify one design direction.

No v1 runtime UI implementation should begin before that direction is locked.
