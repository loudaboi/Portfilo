# Homepage Featured Cover System Research

_Last updated: 2026-09-04_

_Status: RESEARCH / CONCEPT SELECTION REQUIRED / NO IMAGE GENERATION AUTHORIZED_

## Purpose

Evaluate a topic-aware visual system for the black featured-story cover panel on the Portfilo homepage before continuing story-specific image generation.

This is a homepage/brand-editorial surface, not documentary story evidence.

C030 remains paused with:

- image brief: approved;
- generator instruction: ready;
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

## Core product question

Should the black featured panel become a visual cover whose image is selected by the featured story's topic?

Recommended system shape to test:

`featured story -> topic -> topic cover asset`

The article body does not automatically determine the image in v0.

A later story-specific override could be evaluated after the visual system is proven, but it is not required for this pilot.

## Why start here

This is a lower-risk pilot surface than a story hero because:

- the panel already behaves like a publication cover rather than documentary evidence;
- only five topic contexts need to be solved initially;
- one shared grammar can be judged together at thumbnail/homepage scale;
- the system can test Portfilo's realistic illustration direction before story-specific imagery carries factual or conceptual burden;
- implementation can remain simple and deterministic.

## Professional/editorial research

### Shared grammar, variable subject

Useful illustration systems do not require the same object or composition everywhere. They use a shared visual grammar while allowing subjects and scale to change with the section's job.

Source:

- Designelier, `How to build a consistent website illustration system`
  - https://designelier.com/resources/consistent-website-illustration-systems

Transferable principle:

Keep palette, texture, lighting, realism level, geometry, information density, and crop behavior consistent. Let subject/context vary by topic.

### Flexible editorial foundation

Editorial systems need a consistent visual foundation that can adapt across different content without losing cohesion.

Source:

- Mike Steven François, `MR Magazine | Art Direction`
  - https://www.mikesteven-francois.com/works/mr-magazine

Transferable principle:

Do not create five independent art directions. Create one Portfilo cover language with five topic expressions.

### Section identity as wayfinding

Consistent section openers and visual signposts help readers understand where they are in a publication.

Source:

- Pages the Magazine / Journey Group, `The Power of Perspective`
  - https://pagesthemagazine.com/the-power-of-perspective/

Transferable principle:

The topic visual can function as wayfinding, but should still look like editorial art rather than a navigation icon.

### Approve the system before scaling

Representative-page/system approval before full production reduces rework and prevents drift.

Source:

- Brand Elevate Marketing Solutions, `Editorial & Magazine Layouts`
  - https://www.bemsolutions.net/editorial-magazine-layouts

Transferable principle:

First approve the shared grammar and representative topic concepts. Do not generate all future variations first.

### Concept review before execution

Professional editorial illustration workflows commonly review multiple conceptual directions before final execution.

Source:

- The Washington Post, `How The Washington Post design team works with freelance illustrators`
  - https://www.washingtonpost.com/pr/2020/12/18/washington-post-design-team-is-looking-illustrators/

Transferable principle:

Present materially different system concepts first; human selection remains authoritative.

## Shared visual grammar proposed for all five topics

These are inherited from the approved Portfilo image/design system unless later revised by human approval:

- realistic editorial illustration rather than cartoon/anime;
- monochrome / grayscale base;
- near-black / off-white tonal compatibility with the existing panel;
- high but readable contrast;
- strong geometry and negative space;
- directional or low-key light;
- restrained visible grain/texture;
- ordinary work/building/process contexts rather than glossy ad sets;
- restrained information density;
- no generated typography;
- no fake logos, readable screens, documents, charts, dashboards, or named-person likenesses;
- no unrelated hues;
- topic difference should come primarily from subject/context, not from five unrelated palettes or styles.

## What the five topics should mean visually

These are content territories, not final scenes.

### Business

Visual territory:

`coordination / exchange / operating decisions`

Avoid:

- handshakes;
- skyscraper clichés;
- money piles;
- generic boardroom smiles;
- finance-dashboard shorthand.

### Technology

Visual territory:

`systems / tools / infrastructure / interfaces as physical process`

Avoid:

- neon circuitry;
- floating UI;
- generic server racks as universal technology shorthand;
- hacker/cyberpunk treatment.

### Startups

Visual territory:

`prototyping / iteration / constrained early-stage making`

Avoid:

- celebratory founders;
- pitch decks;
- rocket/growth metaphors;
- generic coworking scenes.

### AI

Visual territory:

`human-machine process / inference / automation entering work`

Avoid:

- robot heads;
- glowing brains;
- humanoid androids;
- neon neural networks;
- magical floating interfaces.

### Building

Visual territory:

`making / assembly / physical or operational construction`

Avoid:

- literal construction-site cliché unless a specific story requires it;
- hard hats as category iconography;
- generic blueprints;
- inspirational maker imagery.

## Concept directions

The three directions below are system-level concepts. Each would produce five related topic covers.

### Direction A — Working Worlds

Core idea:

Each topic is represented by a realistic but generic environment where that kind of work plausibly occurs. The environment carries the topic; anonymous people, if present, remain secondary.

Examples of subject logic:

- Business: coordination around a shared operating surface or exchange point;
- Technology: a physical technical system, tools, cables, or infrastructure being worked on;
- Startups: an unfinished prototype/workbench environment;
- AI: a restrained human-machine work setting where automation/compute is present without robot symbolism;
- Building: a making/assembly environment with materials, tools, or structural work.

Why it works:

- closest to Louda's preference for realistic illustration;
- gives each topic a distinct context without changing art style;
- strong fit with the existing black cover because environments can use deep shadows and large geometry;
- scalable to later variations.

Main risks:

- scenes may become generic stock-like workplaces;
- Technology and AI may overlap;
- generated environments may look documentary or imply a real company.

Controls:

- generic/editorialized spaces;
- no branding, readable UI, signage, distinctive company architecture, uniforms, or named products;
- each topic requires a clear subject rule before generation;
- disclosure remains visible if generated assets are used publicly.

### Direction B — Material Evidence of Work

Core idea:

Use realistic close or medium views of tools, materials, components, prototypes, surfaces, and physical traces of work. People are absent or limited to anonymous hands.

Examples of subject logic:

- Business: physical coordination objects and operating materials without readable paperwork;
- Technology: components, connectors, tools, devices, cabling, or infrastructure detail;
- Startups: rough prototypes, taped assemblies, test pieces, or incomplete builds;
- AI: compute-related physical objects or human-machine input/output process without AI iconography;
- Building: tools, materials, joinery, fixtures, assembly traces.

Why it works:

- reduces fake-workplace/documentary risk;
- strong at small homepage sizes;
- tactile and visually consistent;
- avoids dependence on faces/anatomy.

Main risks:

- topic distinctions may become too subtle;
- Business is harder to represent without drifting into documents or money;
- can become a product-photography system rather than editorial art.

Controls:

- compose objects as editorial stills, not catalog photography;
- define one clear topic mechanism rather than random objects;
- no readable paper/screens/logos.

### Direction C — Human Work, Environment Secondary

Core idea:

Use anonymous partial figures or hands as the repeated visual grammar. Each topic differs by the action being performed rather than by a literal category symbol.

Examples of subject logic:

- Business: coordinating, comparing, handing off, reviewing a physical process;
- Technology: testing, wiring, calibrating, or inspecting a system;
- Startups: assembling or revising a prototype;
- AI: operating or reviewing an automated process without identifiable UI;
- Building: measuring, fitting, assembling, or making.

Why it works:

- immediately communicates that Portfilo covers people doing actual work;
- realistic and human without requiring portraits;
- provides strong recurring visual continuity across topics.

Main risks:

- can drift toward stock-photo hands;
- actions may become staged or overly literal;
- Business and AI are difficult to show without implying specific processes or fake interfaces.

Controls:

- anonymous partial figures only;
- environment-led composition with restrained gesture;
- no smiling corporate-team treatment, handshake, fake UI, branded equipment, or dramatic performance cues.

## Comparative evaluation

| Criterion | A — Working Worlds | B — Material Evidence | C — Human Work |
|---|---|---|---|
| Realistic editorial feel | Strong | Strong | Strong |
| Topic differentiation | Strongest | Moderate | Moderate-strong |
| Small-panel readability | Strong | Strongest | Strong |
| Documentary-misread risk | Highest of the three | Lowest | Moderate |
| Risk of generic stock feel | Moderate | Low-moderate | Highest |
| Expansion to future variants | Strong | Strong | Strong |
| Fit with current Portfilo image direction | Strong | Strong | Strong |

No direction is selected by this document.

## V0 asset-count recommendation

If the system is approved:

- start with **5 canonical topic assets**, one each for Business, Technology, Startups, AI, and Building;
- do not generate a separate asset for every story yet;
- do not create multiple variants per topic until the first five are reviewed together in the homepage context;
- later evaluate whether each topic needs a small variant family or whether story-specific covers should override the topic fallback.

## Implementation model to evaluate after visual approval

Simple v0 direction:

`topic -> local asset`

Possible implementation approaches later:

1. a deterministic topic-to-asset map in the homepage component; or
2. a small canonical topic-cover configuration module reused by future surfaces.

Do not add story image schema fields merely to support this first topic-cover pilot unless a real implementation need requires them.

## Current gate

Research complete:

`YES`

Human system-direction selection:

`REQUIRED`

Image generation authorized:

`NO`

Implementation authorized:

`NO`

Next step:

Present Directions A, B, and C to Louda Tuppal for selection or revision. After selection, create a concise five-topic visual brief for the chosen direction. Only after that brief is approved should generator instructions be prepared and separately authorized under `docs/IMAGE_SYSTEM.md`.
