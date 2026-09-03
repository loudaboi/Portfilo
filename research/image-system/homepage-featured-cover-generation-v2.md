# Homepage Featured Cover Generation Instructions — v2

_Last updated: 2026-09-04_

_Status: AUTHORIZED / EXECUTED / EXECUTION FAILED / NO VALID V2 CANDIDATES_

## Authority

- `research/image-system/homepage-featured-cover-brief-v2.md`
- `research/image-system/homepage-featured-cover-candidate-audit-v1.md`
- `research/image-system/image-generation-prompt-research.md`

Selected system remains:

`Working Worlds / Material Anchors`

Representative test pair:

1. `Building`
2. `AI`

## V2 change isolation

V2 preserves the strongest subject/composition logic from Building 01 and AI 01 and changes the primary failed variable:

`rendering/detail discipline`

V2 does not use either v1 candidate as a style reference.

The test also lowers scene complexity so physical/logical errors are easier to detect.

## Building instruction v2

### Purpose / medium

Create a realistic monochrome **editorial illustration**, clearly illustrated rather than photographic, for Portfilo's compact homepage `Building` cover.

### Scene / composition

In a simple generic workshop, show one unfinished curved wooden structural assembly as the only dominant object, with visible joined construction in progress. Place it near center-right and leave broad dark, low-detail negative space across the left/central area for the real HTML topic label.

### Treatment / constraints

Use large grayscale tonal shapes, simplified but believable edges, directional light, and restrained print-like grain. No person unless necessary, no extra tools or props, no hard hats, blueprints, text, logos, screens, identifiable workplace details, photorealism, camera/lens language, shallow depth of field, bokeh, or cinematic effects.

## AI instruction v2

### Purpose / medium

Create a realistic monochrome **editorial illustration**, clearly illustrated rather than photographic, for Portfilo's compact homepage `AI` cover.

### Scene / composition

In a simple generic work cell, show one machine-assisted inspection setup: one inspection head above a short process/conveyor surface with only 3-4 identical neutral parts. Keep the apparatus near center-right and leave broad dark, low-detail negative space across the left/central area for the real HTML topic label.

### Treatment / constraints

Use large grayscale tonal shapes, simplified but believable edges, geometric repetition, directional light, and restrained print-like grain. No person unless necessary, no extra machinery, screens, interfaces, robots, server racks, text, logos, identifiable workplace details, photorealism, camera/lens language, shallow depth of field, bokeh, or cinematic effects.

## Candidate plan

Authorized generation set:

- `1` Building v2 candidate;
- `1` AI v2 candidate.

Do not generate four candidates immediately.

This pass tests whether the controlled change fixes the v1 failure. If the rendering still looks photographic or the simplified scenes fail logically, revise before spending another generation pass.

If both pass the rendering/logic gate, then decide whether a second candidate per topic is necessary for final composition choice.

## Evaluation priorities

Audit in this order:

1. clearly editorial illustration, not fake documentary photography;
2. one dominant anchor and one understandable relationship;
3. physical/logical plausibility;
4. no unnecessary semantic clutter;
5. topic distinction;
6. shared Portfilo visual language;
7. negative space for HTML topic label;
8. responsive crop viability;
9. prohibited text/logo/UI/brand checks.

## Prompt-research basis

Current OpenAI image-generation guidance supports:

- clear, maintainable prompt structure;
- explicit visual medium and composition;
- explicit constraints/invariants;
- small targeted revisions;
- avoiding photorealistic/photo/camera vocabulary when photographic rendering is not the desired mode.

Research record:

`research/image-system/image-generation-prompt-research.md`

## V2 generation authorization gate

V2 generator instructions prepared:

`YES`

V2 generator instructions presented to human:

`YES`

V2 image generation authorized:

`YES`

Authorized by:

`Louda Tuppal`

Authorization date:

`2026-09-04`

Authorization evidence:

Louda explicitly replied `i approve` to the immediately preceding request to authorize generation of the two v2 tests from these exact instructions.

## V2 execution record

Execution attempted:

`YES`

Valid Building v2 candidate produced:

`NO`

Valid AI v2 candidate produced:

`NO`

Execution failure:

The generation layer repeatedly merged Building and AI into a single diptych/comparison layout and added generated typography/brand copy despite explicit topic isolation and no-text constraints. A corrective retry again produced the same class of failure.

Candidate authority:

`ZERO`

Detailed audit:

`research/image-system/homepage-featured-cover-candidate-audit-v2.md`

The v2 authorization is exhausted by this failed execution. No further generation is authorized until a revised execution method or instruction is presented and separately approved.
