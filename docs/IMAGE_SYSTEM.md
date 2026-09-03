# Portfilo Editorial Image System

_Last updated: 2026-09-04_

_Status: APPROVED / CANONICAL / PILOT REQUIRED / EXPLICIT GENERATION AUTHORIZATION REQUIRED_

Research basis:

`research/image-system/research.md`

## Principle

Portfilo does not ask an image model to decide what a story should look like.

> **Research the visual problem before asking AI to generate the image.**

> **AI output has zero visual authority.**

AI may execute an approved visual decision. It may not establish the visual decision by itself.

The image system exists to make generated visuals:

- editorially relevant;
- visually consistent;
- factually bounded;
- transparent;
- accessible;
- technically useful across Portfilo surfaces.

## Non-negotiable distinction: illustration vs evidence

AI-generated imagery is **editorial illustration**.

It is not:

- documentary photography;
- evidence that a real event occurred;
- a depiction of a reported person's actual appearance or environment;
- a real screenshot, source document, product interface, workplace, building interior, factory, data center or scene unless the asset itself is real and verified.

Generated imagery must never be presented in a way that invites a reasonable reader to mistake it for documentary evidence.

Real photography, screenshots, source documents, diagrams and data graphics follow normal editorial verification rules and are not governed by the generation portion of this system.

## Required workflow

For every substantial story image:

```text
APPROVED STORY / EVIDENCE POSITION
  ↓
IMAGE NECESSITY GATE
  ↓
VISUAL RESEARCH / STORY EXTRACTION
  ↓
IMAGE JOB
  ↓
2-3 CONCEPT CANDIDATES
  ↓
HUMAN CONCEPT SELECTION
  ↓
IMAGE-BRIEF.MD
  ↓
HUMAN BRIEF APPROVAL
  ↓
GENERATOR INSTRUCTIONS DERIVED FROM BRIEF
  ↓
HUMAN GENERATION AUTHORIZATION
  ↓
CANDIDATE GENERATION
  ↓
BRIEF / FACTUAL-IMPLICATION / ARTIFACT REVIEW
  ↓
HUMAN IMAGE SELECTION
  ↓
CONTROLLED COLOR / CROP / EXPORT
  ↓
ALT / DISCLOSURE / CREDIT DECISION
  ↓
IMPLEMENTATION
  ↓
ARTICLE + CARD + SHARE PREVIEW QA
```

Brief approval authorizes the brief as the visual source of truth and permits generator-instruction preparation. It does **not** authorize image generation.

No actual Portfilo story image may be generated until the generator instruction has been presented and a separate explicit human generation authorization has been given.

No generated candidate becomes public merely because it is technically impressive or visually attractive.

### Approval scope

Human approval is scoped to the gate explicitly awaiting approval.

A short reply such as `I approve`, `yes`, or `go ahead` advances only that immediately pending gate unless the human explicitly names additional actions.

Do not advance more than one human-controlled gate from one approval unless the human message explicitly authorizes those multiple gates.

For image generation specifically, never treat image-brief approval as generation authorization.

## Stage 1 — image necessity gate

An approved story does **not** automatically require a generated hero image.

The image brief must answer:

> What useful job would an image perform here that the headline, dek, body, data or real source material does not already perform?

Valid reasons may include:

- giving a conceptual story a memorable visual entry point;
- expressing a tension or mechanism that is difficult to communicate with literal source imagery;
- establishing consistent editorial hierarchy on story/archive/social surfaces;
- helping a reader distinguish one story from another visually;
- illustrating a process or environment without pretending to document a specific real scene.

Invalid reasons include:

- every article needs something colorful;
- the page looks empty;
- the model can make something cool;
- a generic AI/startup/business visual will improve engagement;
- another publication uses hero images.

Allowed gate outcomes:

`GENERATED ILLUSTRATION` | `REAL / VERIFIED IMAGE` | `DATA / DIAGRAM` | `BRAND GRAPHIC` | `NO IMAGE`

## Stage 2 — visual research / story extraction

Before concept generation, extract the visual problem from the approved editorial material.

For a researched factual story, use:

- approved body;
- evidence ledger;
- contradiction/caveat record;
- source material relevant to the proposed visual.

For a Perspective, use:

- approved premise;
- approved body;
- institutional-provenance boundaries;
- factual material actually authorized in the piece.

Record:

- the story's central idea;
- the central tension/change/mechanism;
- what readers must **not** infer from the image;
- which details are factual vs generic illustration;
- what visual clichés would distort the assignment.

Do not begin with an image prompt.

## Stage 3 — choose one image job

Select one primary job.

### Conceptual

Expresses the story's core idea or tension without depicting a claimed real event.

### Situational

Creates a generic, plausible environment in which the story's subject makes sense, without claiming the scene is real.

### Object / system

Uses tools, physical objects, infrastructure, documents-as-shapes, interfaces-as-unreadable-form, materials or systems as the main subject.

### Human-presence

Uses an anonymous partial figure, silhouette, hands or body presence when human action materially improves the concept.

No generated likeness of a real identifiable person is authorized for v0 editorial imagery.

### Brand / social

A brand-led visual for a non-story surface or a fallback social preview.

Data graphics are a separate evidence-driven category and should not be generated by an image model.

## Stage 4 — concept candidates

Develop **2-3 genuinely different concepts** from the approved story material.

Each concept must state:

- visual subject;
- why it represents the story;
- what it deliberately leaves out;
- factual/misreading risk;
- expected crop behavior;
- whether a brand accent is justified.

AI may help propose candidates after being given the approved story/evidence position.

AI does not choose the winner.

Louda Tuppal or another explicitly authorized human editor selects the concept before image generation.

## Stage 5 — image brief

Create:

`research/stories/<story-slug>/image-brief.md`

Use:

`research/IMAGE_BRIEF_TEMPLATE.md`

The image brief is the source of authority for generation.

A prompt is only a derived execution artifact.

If a generated prompt adds an object, claim, person, location, brand, interface, mood or symbolism that the approved brief did not authorize, revise the prompt rather than treating the model's addition as creative precedent.

Brief approval completes the brief gate only. It does not authorize candidate generation.

## Portfilo visual language

### Core treatment

Default visual treatment:

- monochrome / grayscale base;
- high but readable contrast;
- low-key, directional or backlit lighting where appropriate;
- visible texture or grain;
- strong geometry and composition;
- ordinary work/building environments rather than polished advertising sets;
- restrained visual information density;
- editorial still rather than glossy campaign image.

The system may vary subject matter substantially while preserving these treatment rules.

### Preferred subject families

Use when the story supports them:

- hands, tools and process;
- desks/workspaces and objects;
- architecture and infrastructure;
- material traces of work such as sketches, cables, notebooks, equipment and prototypes;
- anonymous partial figures or silhouettes;
- negative space;
- strong lines, shadows and structural forms;
- real-world physical constraints rather than abstract floating icons.

### People

Generated people should be used sparingly.

Default:

- anonymous;
- non-identifiable;
- partial, silhouetted, distant or environment-led;
- no implication that the figure is a quoted/reported person;
- no implication that a generated workplace belongs to a named company.

Do not generate a likeness of a real identifiable subject for a Portfilo editorial hero in v0.

If a real person is visually central, use an owned/licensed/verified real image or use a non-portrait concept.

## Palette

Current implemented Portfilo palette is the visual authority for the v0 image system:

- paper: `#f4f0e8`;
- ink: `#171614`;
- muted neutral: `#69655e`;
- line neutral: `#cbc5bb`;
- Portfilo blue: `#0050a4`;
- light blue on dark surfaces: `#8fc7ff`;
- Portfilo red: `#b42318`.

### Color rule

Default story image:

- grayscale / neutral base;
- **zero or one** chromatic Portfilo accent;
- blue or red, not both, unless a specific approved composition genuinely requires both;
- no unrelated hue.

A useful default target is roughly `85-100%` neutral visual area and `0-15%` accent area.

This is an art-direction constraint, not a mathematical compliance score.

### Exact-color rule

Do not rely on a generator to reproduce an exact brand hex value.

Preferred workflow:

1. generate/select a monochrome base;
2. name the intended accent object/region in the approved image brief;
3. apply/normalize the final accent in a controlled post-generation step;
4. inspect the export for stray chromatic colors;
5. reject or desaturate non-approved hues.

The model may suggest where an accent could appear. The approved brief decides whether it exists and where.

## Text inside images

Default: **none**.

Do not ask image generation to render:

- headlines;
- charts;
- labels;
- article quotations;
- UI copy;
- readable reports/documents;
- Portfilo wordmark typography.

Reasons:

- title/dek should remain real HTML;
- social previews already carry metadata text;
- generated lettering is unreliable;
- text-in-image weakens crop flexibility and accessibility.

If a social or brand composition requires typography, render approved text deterministically with HTML/CSS, SVG or another controlled layout process.

The Portfilo wordmark/logo is a brand asset and will be governed by the separate brand-asset system.

## Prohibited / high-risk visual shortcuts

Reject by default:

- generic smiling corporate teams;
- handshake imagery;
- robot heads;
- glowing AI brains;
- neon circuitry;
- cyberpunk city/office visuals as a technology default;
- hooded-hacker cliché;
- floating translucent UI panels;
- generic server racks for every infrastructure story;
- random editorial collage with no story logic;
- fake readable screenshots;
- fake source documents;
- fake company/product logos;
- fake headlines/newspaper pages;
- generated public-figure likenesses;
- invented documentary scenes of real incidents;
- national/cultural symbols used only as decorative Filipino signaling;
- unapproved colors;
- dramatic symbolism that creates a factual implication the story does not support.

## Composition system

### Canonical web cut

Canonical v0 pilot story-image ratio:

**16:9 landscape**

Recommended high-resolution delivery target:

**1600 x 900 minimum** for the canonical article image when source quality allows.

Why:

- consistent story surface;
- technically aligned with Google Discover's large-image recommendation;
- adaptable to desktop and mobile;
- close enough to Open Graph landscape to support a derivative crop;
- avoids importing the portrait-heavy aspect ratios of the supplied inspiration board into a web context.

This ratio is approved as the pilot baseline. The pilot may still justify a documented revision before rollout to all stories.

### Crop-safe composition

The same approved visual concept should survive:

- `16:9` article/card use;
- `1200 x 630` Open Graph / X large-card use;
- `4:3` structured-data/search derivative;
- `1:1` structured-data/search derivative.

Keep critical visual information near the composition center by default.

A striking edge-weighted composition is allowed only when the image brief specifies how alternate crops will preserve meaning.

### Open Graph

Required v0 social derivative:

**1200 x 630**

Do not rely on a social platform to make a useful crop from a portrait or square source.

Story-specific approved art should replace the current universal default social image when implemented.

### Structured-data crops

When the image implementation is built, prepare representative high-resolution variants from the same approved visual concept for:

- `16:9`;
- `4:3`;
- `1:1`.

The crops may reframe the same approved asset. They must not silently introduce different symbolism or factual content.

## File and delivery direction

Approved v0 implementation direction:

- source/approved story assets live in the repository;
- story image references are validated by the Astro Content Collection schema;
- article/card images use Astro's local image pipeline for responsive optimization;
- stable social derivatives are exposed through crawlable URLs;
- no external image CDN/DAM is added for v0;
- no client-side image library is added.

Exact paths and schema fields are implementation decisions after this system is approved and piloted.

## Accessibility decision

The image brief must classify the final image as:

`INFORMATIVE` | `DECORATIVE` | `COMPLEX`

### Informative illustration

Use concise alt text that conveys the image's editorial meaning in context.

Do not write alt text by having a model inspect pixels and publish its description without editorial review.

### Decorative hero

If the image contributes atmosphere/identity but the headline/dek/body already carry the entire useful meaning, use an empty alt value.

Do not stuff keywords into alt text merely for SEO.

### Complex image / chart

Do not try to fit the data into a short alt attribute. Provide the meaningful data/description in adjacent text or an appropriate extended representation.

## Disclosure and credit

Generated story imagery must be visibly identified as generated illustration rather than documentary photography.

Required principle:

- readers can determine that the image is synthetic without inspecting hidden metadata.

Exact visible credit/disclosure wording will be finalized during implementation, but it must explicitly communicate AI generation or synthetic illustration.

If Content Credentials/C2PA provenance is present, preserve it when practical. Do not treat embedded provenance as a substitute for visible editorial transparency.

## Generator-instruction rules

The generation instruction must be derived from the approved image brief and include:

- approved subject/scene;
- approved visual job;
- factual boundaries;
- visual treatment;
- composition/crop constraints;
- palette constraint;
- must-not-show list;
- no generated text;
- no real logos or named-person likenesses unless an exceptional separate approval exists.

The prompt itself must be inspectable.

After the image brief is approved:

1. derive the generator instruction from the approved brief;
2. record it in the story image brief or another approved research artifact;
3. present the actual generator instruction to the human editor;
4. keep generation blocked until a separate explicit generation authorization is given.

Before invoking any image-generation tool, all of the following must be true:

1. an approved image brief exists;
2. the exact generator instruction has already been presented for human inspection;
3. the current human message explicitly authorizes generation, or directly answers yes to the immediately preceding question asking whether to generate.

A brief-approval response cannot satisfy condition 3 by itself.

Never invoke image generation in the same turn in which the human approves the image brief unless that same human message explicitly says to approve the brief **and** generate candidates.

Do not use:

- `make something cool`;
- `surprise me`;
- `use your judgment` for the visual concept;
- named living/dead artist or photographer style imitation;
- `exactly like this reference`;
- instructions that invite the model to add whatever background details feel realistic.

## Post-generation review

Every candidate must be audited before human selection.

### Editorial/factual implication

Check:

- Does it imply a real event/place/person/company that the story does not establish?
- Does a screen/document/logo accidentally look like factual evidence?
- Does symbolism overstate causality, danger, success, failure, scale or certainty?
- Does the image make a generic example look like a named real example?

### Brief compliance

Check:

- correct image job;
- selected concept preserved;
- required subject present;
- forbidden details absent;
- crop works;
- mood/treatment matches the system;
- brand accent, if any, is controlled.

### Visual quality

Check:

- anatomy/physical plausibility;
- impossible object geometry;
- duplicated/repeated objects;
- unreadable or accidental text;
- fake logos/marks;
- compression defects;
- excessive smoothing;
- obvious generative artifacts;
- accidental resemblance to a supplied reference or known publication image.

### Color gate

Check:

- grayscale base preserved;
- no stray chroma;
- accent matches an approved Portfilo color after final treatment;
- no gratuitous second accent.

### Human selection

AI may rank candidates against the brief as an advisory exercise.

AI may not make the final publication selection.

## Image-version record

For each generated visual, retain in the research packet:

- approved image brief;
- generation instruction version;
- generation authorization by/date;
- generation date;
- candidate IDs/file names;
- rejection reasons for material failures;
- selected asset;
- crop/export record;
- final alt/disclosure/credit decision;
- human approval/date.

The goal is reproducibility and accountability, not saving every low-value intermediate file forever.

## Pilot requirement

Do not roll the system across all stories immediately.

After this system is approved:

1. choose **one published story** as a visual pilot;
2. create its image research/brief;
3. approve the brief;
4. derive and review the generator instruction;
5. obtain separate explicit generation authorization;
6. generate a small candidate set;
7. evaluate visual consistency, factual risk, crop behavior and site fit;
8. revise the system if the pilot reveals a structural problem;
9. only then extend the process to the remaining stories.

The first generated image must not become style authority merely because it was first.

## Implementation items after system approval

The later implementation phase should evaluate:

- story schema fields for image source/type/alt/credit/disclosure;
- local asset folder convention;
- reusable responsive story image component;
- story-card/homepage image placement;
- per-story Open Graph image override;
- Article structured-data image arrays;
- `max-image-preview:large`;
- default site social image redesign after the brand-asset/logo pass;
- image sitemap/discovery behavior if needed;
- performance/LCP impact;
- final social preview testing.

Do not implement these across the site until the pilot direction is approved and the pilot has been reviewed.

## Approval gate

Research complete:

`YES`

Visual system decision:

`APPROVED / CANONICAL`

Approved by/date:

`Louda Tuppal / 2026-09-04`

No actual Portfilo editorial image generation is authorized solely by image-brief approval. Each generated candidate set requires a separate explicit human generation authorization after the generator instruction has been presented.