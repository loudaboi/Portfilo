# Homepage Featured Cover System Research

_Last updated: 2026-09-04_

_Status: RESEARCH COMPLETE / DIRECTION SELECTED / BRIEF APPROVED / NO IMAGE GENERATION AUTHORIZED_

## Purpose

Evaluate a topic-aware visual system for the black featured-story cover panel on the Portfilo homepage before continuing story-specific image generation.

This is a homepage/brand-editorial surface, not documentary story evidence.

C030 remains paused with:

- image brief: approved;
- generator instruction: presented;
- generation authorization: no;
- valid candidate set: none.

## Current homepage behavior

Source:

`src/pages/index.astro`

Current featured-story selection:

1. use the newest published story marked `featured: true`;
2. otherwise fall back to the newest published story.

The black featured cover currently derives its visible content from story metadata:

- editorial type;
- topic;
- author.

The large central word is the story's `topic`.

Current canonical topics from `src/content.config.ts`:

- Business
- Technology
- Startups
- AI
- Building

Therefore a topic-aware cover system has five v0 contexts.

## Core product decision

Approved system shape:

`featured story -> topic -> canonical topic cover asset`

The article body does not automatically determine the homepage cover in v0.

A later story-specific override may be evaluated after the visual system is proven, but it is not required for this pilot.

## Why start here

This is a lower-risk pilot surface than a story hero because:

- the panel already behaves like a publication cover rather than documentary evidence;
- only five topic contexts need to be solved initially;
- one shared grammar can be judged together at thumbnail/homepage scale;
- the system can test Portfilo's realistic illustration direction before story-specific imagery carries factual or conceptual burden;
- implementation can remain simple and deterministic.

## Professional/editorial research

### Consistency with controlled variation

Fast Company's redesign process explicitly describes editorial design as a balance of consistency and variety. Stable branding and typographic systems give designers room to vary layouts and imagery according to editorial content.

Sources:

- https://www.fastcompany.com/90490678/inside-the-redesign-of-fast-company-magazine
- https://www.fastcompany.com/90946499/how-to-redesign-a-magazine-fast-company-style

Transferable principle:

Keep Portfilo's visual grammar stable while allowing each topic to change the subject/context.

### Small flexible systems rather than rigid or over-engineered ones

Rest of World's homepage redesign describes the tension between standard layouts that become inflexible and systems that try to account for every possible use case and become over-engineered. Its solution was a small flexible system.

Sources:

- https://restofworld.org/inside/homepage-redesign/
- https://restofworld.org/style-guide/

Transferable principle:

Start with five canonical topic assets and one shared grammar. Do not design a large variant engine before the first five prove useful.

### Concept review before execution

The Washington Post's documented illustration workflow asks illustrators to provide multiple rough concepts with descriptions before final execution and review.

Source:

- https://www.washingtonpost.com/pr/2020/12/18/washington-post-design-team-is-looking-illustrators/

Transferable principle:

Human concept/system selection precedes generation.

### Professional-quality filter

Society of Publication Designers medal-finalist records repeatedly include publications such as Fast Company, WIRED, MIT Technology Review, Bloomberg Businessweek, The Washington Post, and other established editorial-design organizations.

Sources:

- https://www.spd.org/spd-61-medal-finalists
- https://www.spd.org/spd-58-medal-finalists

This is used only as a quality filter for the references, not as proof that Portfilo should imitate their styles.

## What `proven` means here

The chosen direction is grounded in established, award-recognized editorial-design practice rather than model preference alone.

It is not scientifically proven that this aesthetic will maximize audience performance for Portfilo. The pilot still exists to test whether the system works in Portfilo's own homepage context.

## Direction comparison

### A — Working Worlds

Environment-led realistic editorial imagery.

Strengths:

- strongest topic differentiation;
- closest to Louda's preference for realistic illustration;
- strong fit with the existing dark feature panel;
- scalable to future variations.

Risks:

- generic stock-like workplace scenes;
- fake documentary implication;
- AI and Technology overlap.

### B — Material Evidence of Work

Object/process-led realistic imagery.

Strengths:

- tactile;
- strong at small sizes;
- low fake-workplace risk;
- less dependent on anatomy.

Risks:

- Business is difficult to represent cleanly;
- topic distinctions can become subtle;
- can drift toward product photography.

### C — Human Work

Human-action-led imagery using anonymous partial figures/hands.

Strengths:

- clearly about people doing actual work;
- realistic and human;
- recurring continuity.

Risks:

- highest stock-photo feel risk;
- anatomy/identity risk;
- actions can become staged or overly literal.

## Selected direction

Selected by:

`Louda Tuppal`

Selection date:

`2026-09-04`

Selected direction:

`Working Worlds / Material Anchors`

This combines Direction A's environment-led differentiation with Direction B's compositional restraint.

Core rule:

> The topic determines the environment. One dominant material/process anchor gives the image focus. Humans are optional and secondary.

Why selected:

- strongest differentiation among Business, Technology, Startups, AI, and Building;
- one dominant anchor improves small-panel readability and prevents scene clutter;
- human presence remains available without becoming a mandatory stock-photo motif;
- preserves one Portfilo grammar instead of creating five independent art styles;
- aligns with the approved realistic grayscale editorial direction.

## Shared grammar

All five covers should retain:

- realistic editorial illustration;
- monochrome / grayscale base;
- high but readable contrast;
- strong geometry and negative space;
- directional or low-key light;
- restrained grain/texture;
- ordinary work/building/process environments;
- restrained information density;
- no generated typography;
- no fake logos, readable screens, documents, dashboards, or named-person likenesses;
- no unrelated hues;
- no named-artist/publication imitation.

## Topic territories

### Business

`coordination / exchange / operating decisions`

Avoid handshakes, skyscrapers, money, boardroom smiles, and dashboard shorthand.

### Technology

`systems / tools / infrastructure / technical process`

Avoid neon circuitry, floating UI, hacker/cyberpunk treatment, and generic server-rack shorthand.

### Startups

`prototyping / iteration / constrained early-stage making`

Avoid celebratory founders, pitch decks, rocket/growth metaphors, and generic coworking scenes.

### AI

`human-machine process / automation entering work`

Avoid robot heads, glowing brains, humanoids, neural-network spectacle, and magical UI.

### Building

`making / assembly / physical or operational construction`

Avoid hard-hat category iconography, generic blueprints, and inspirational maker clichés.

## V0 production strategy

Approved representative test pair:

1. `Building`
2. `AI`

Reason:

They are meaningfully different topic territories. If the same shared grammar can make both legible without collapsing into one generic generated universe, the system has evidence of useful range.

Do not generate all five before this pair is reviewed.

## Approved brief

Canonical execution brief:

`research/image-system/homepage-featured-cover-brief.md`

Brief status:

`APPROVED`

Image generation authorization:

`NO`

Implementation authorization:

`NO`

## Current gate

Research complete:

`YES`

Human direction selection:

`YES`

Visual brief approved:

`YES`

Generator instructions prepared/presented:

`NO`

Image generation authorized:

`NO`

Next step:

Derive the Building + AI representative-test generator instructions from the approved brief, present the exact instructions to Louda Tuppal, then obtain separate explicit generation authorization before invoking any image-generation tool.
