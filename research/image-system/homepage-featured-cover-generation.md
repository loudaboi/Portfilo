# Homepage Featured Cover Generation Instructions

_Last updated: 2026-09-04_

_Status: V1 GENERATED / AUDIT COMPLETE / NO FINAL ASSET SELECTED_

Authority:

- `docs/IMAGE_SYSTEM.md`
- `research/image-system/homepage-featured-cover-brief.md`
- current responsive implementation in `src/pages/index.astro`

Selected system:

`Working Worlds / Material Anchors`

Representative test pair:

1. `Building`
2. `AI`

## Responsive composition decision

The current homepage feature panel is tall/narrow on desktop and becomes much wider on mobile. The topic label remains real HTML and should not be generated into the artwork.

For the pilot, use a **square master composition** with:

- critical subject and anchor near the crop-safe center;
- enough environmental context to survive both portrait-like and landscape-like `object-fit: cover` crops;
- low-detail dark negative space through part of the central area so the existing HTML topic label can remain readable;
- no essential meaning at the extreme edges;
- no generated text.

This square-master decision is a reversible pilot choice derived from the actual panel behavior. It is not a permanent site-wide image ratio rule.

## Shared generator constraints

Both topics must share the same visual grammar:

- realistic editorial illustration;
- monochrome / grayscale only;
- deep near-black shadows and off-white/gray highlights compatible with the Portfilo black panel;
- high but readable contrast;
- strong structural geometry and negative space;
- directional or low-key light;
- restrained visible grain / texture;
- ordinary, plausible work/process environment;
- one dominant material/process anchor;
- zero or one anonymous human presence, always secondary;
- quiet, observational, serious editorial atmosphere;
- no glossy advertising polish;
- no cartoon, anime, comic, fantasy, or sci-fi spectacle;
- no generated typography;
- no logos or branded products;
- no readable screens, interfaces, documents, signs, charts, dashboards, or headlines;
- no named-person likenesses;
- no unrelated hue;
- no imitation of a named artist, photographer, publication, or supplied reference;
- must read as synthetic editorial illustration, not documentary evidence.

## Building instruction v1

Create a realistic monochrome editorial illustration for the **Building** topic in Portfilo's homepage featured-cover system. Show a generic, plausible making or assembly environment, not a literal construction site. The environment should feel actively used and in progress, with strong structural lines, work surfaces, materials, and deep directional shadows. Use **one dominant material/process anchor**: a partially assembled, unfinished physical structure or object at a work surface, with clearly visible fitted or joined parts that communicate making and assembly without requiring labels, blueprints, or explanatory text. Human presence is optional; if present, show only one anonymous partial or distant person as a secondary element engaged in ordinary assembly work, never as a portrait or staged hero.

Compose as a **square crop-flexible master**. Keep the unfinished assembly and the main structural relationship near the center so the image survives both a tall/narrow desktop crop and a wider mobile crop. Preserve some low-detail dark negative space through the central region so the existing HTML topic label can overlay the artwork legibly. Use grayscale only, high but readable contrast, low-key directional light, restrained grain, tactile material detail, and a quiet observational editorial mood.

Do not show hard hats as category symbolism, cranes, construction-site spectacle, blueprints, inspirational maker clichés, logos, branded tools, readable documents, screens, diagrams, arrows, typography, polished showroom styling, dramatic sparks, danger, celebration, or anything that implies a specific real workplace, company, project, or person. The result should communicate **building as tactile, grounded, in-progress creation** and should read as editorial illustration rather than documentary photography.

## AI instruction v1

Create a realistic monochrome editorial illustration for the **AI** topic in Portfilo's homepage featured-cover system. Show a generic, plausible work environment where a machine-assisted or semi-automated process is physically present, without using fantasy AI symbolism. Use **one dominant material/process anchor**: a restrained automated inspection or processing setup in which a small set of repeated neutral physical units moves through a clear input/process/output relationship. The apparatus should feel practical and ordinary rather than futuristic. One anonymous partial or distant person may appear as a secondary observer or reviewer of the process, but the person must not dominate the composition and no readable interface should be visible.

Compose as a **square crop-flexible master**. Keep the automated process and its primary input/output relationship near the center so the image survives both a tall/narrow desktop crop and a wider mobile crop. Preserve some low-detail dark negative space through the central region so the existing HTML topic label can overlay the artwork legibly. Use grayscale only, high but readable contrast, low-key directional light, restrained grain, strong geometric repetition, and a quiet observational editorial mood.

Do not show robot heads, humanoid androids, glowing brains, neon neural networks, magical screens, floating UI, cyberpunk styling, server-rack shorthand, readable screens or interfaces, branded hardware, logos, text, charts, diagrams, arrows, dramatic sci-fi lighting, or anything that implies a specific real AI product, company, deployment, workplace, or person. Do not make the process look dangerous, magical, autonomous in a human-like sense, or guaranteed to be correct. The result should communicate **AI as an operational machine-assisted process entering work**, not AI as mythology, and should read as editorial illustration rather than documentary photography.

## Cross-pair evaluation target

The pair succeeds only if:

- both images unmistakably belong to one Portfilo visual system;
- Building and AI still feel materially different;
- neither depends on category clichés;
- neither looks like generic stock photography;
- neither implies a real reported workplace;
- the dominant anchor remains legible at homepage size;
- the center-safe composition survives both desktop and mobile crops;
- existing HTML metadata/topic text can remain readable over or alongside the imagery;
- grayscale treatment is strong enough that no topic color is required.

## Candidate-set plan

Authorized v1 generation:

- `2` Building candidates from Building instruction `v1`;
- `2` AI candidates from AI instruction `v1`.

Generated candidates:

### Building 01

Generator ID: `f6fd91a5-58cc-4ee9-a8be-0ccfc1ee35a0`

Working file: `monochrome_workshop_curved_wood_structure.png`

### Building 02

Generator ID: `49dedb90-b96f-4fcb-b09f-d214d65d34ae`

Working file: `monochrome_carpentry_workshop_assembly.png`

### AI 01

Generator ID: `86d919f0-6586-47c2-9477-7b7dc4e931ae`

Working file: `industrial_conveyor_inspection_scene.png`

### AI 02

Generator ID: `dd8935a2-cf42-49bf-a434-54c7968718c7`

Working file: `monochrome_industrial_assembly_workshop.png`

Candidate audit:

`research/image-system/homepage-featured-cover-candidate-audit-v1.md`

Audit result:

`NO V1 CANDIDATE CLEARS FINAL PUBLICATION GATE`

Strongest execution references:

- Building 01 for composition/material-anchor logic;
- AI 01 for negative space/automated-process logic.

Decisive failure:

All four read too strongly as black-and-white documentary/workplace photography rather than unmistakably synthetic editorial illustration.

## Prompt review

- [x] derived from approved visual brief
- [x] no new factual claim
- [x] no named-person likeness
- [x] no fake brand/logo
- [x] no generated text
- [x] no unapproved colors
- [x] no named-style imitation
- [x] responsive crop constraint included
- [x] existing HTML overlay considered
- [x] must-not-show constraints included
- [x] Building / AI distinction explicit

## Generation authorization gate

Generator instructions prepared:

`YES`

Generator instructions presented to human:

`YES`

Image generation authorized:

`YES / V1 ONLY`

Authorized by:

`Louda Tuppal`

Authorization date:

`2026-09-04`

Authorization evidence:

Louda explicitly wrote: `i approve generation`.

Generation executed:

`YES`

Final asset selected:

`NO`

Any revised v2 generator instruction is a new execution artifact and requires presentation plus separate human generation authorization before another image-generation call.
