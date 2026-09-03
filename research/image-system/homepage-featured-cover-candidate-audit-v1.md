# Homepage Featured Cover Candidate Audit — v1

_Last updated: 2026-09-04_

_Status: AUDIT COMPLETE / NO FINAL ASSET SELECTED / REGENERATION RECOMMENDED_

Authority:

- `docs/IMAGE_SYSTEM.md`
- `research/image-system/homepage-featured-cover-brief.md`
- `research/image-system/homepage-featured-cover-generation.md`
- current responsive implementation in `src/pages/index.astro`

## Generation authorization record

Human generation authorization:

`YES`

Authorized by:

`Louda Tuppal`

Authorization date:

`2026-09-04`

Authorization evidence:

Louda explicitly wrote: `i approve generation` after the Building + AI generator instructions were presented.

## Candidate set

### Building 01

Generator ID:

`f6fd91a5-58cc-4ee9-a8be-0ccfc1ee35a0`

Working file name:

`monochrome_workshop_curved_wood_structure.png`

### Building 02

Generator ID:

`49dedb90-b96f-4fcb-b09f-d214d65d34ae`

Working file name:

`monochrome_carpentry_workshop_assembly.png`

### AI 01

Generator ID:

`86d919f0-6586-47c2-9477-7b7dc4e931ae`

Working file name:

`industrial_conveyor_inspection_scene.png`

### AI 02

Generator ID:

`dd8935a2-cf42-49bf-a434-54c7968718c7`

Working file name:

`monochrome_industrial_assembly_workshop.png`

## Audit method

Candidates were reviewed against:

- selected topic meaning;
- `Working Worlds / Material Anchors` composition rule;
- physical/anatomical plausibility;
- fake text/logo/document/UI risk;
- monochrome/color gate;
- generic-stock risk;
- documentary-misreading risk;
- small-panel readability;
- crop flexibility implied by the current homepage CSS;
- compatibility with the existing HTML topic label;
- Building/AI differentiation;
- suitability as a reusable canonical topic cover.

Crop observations are based on the square source and representative center-crop simulations derived from the current desktop/mobile panel proportions. They are not a substitute for later deployed implementation QA.

## System-level finding

The selected **Working Worlds / Material Anchors** concept is promising. Building and AI are materially distinguishable while sharing one grayscale, low-key, geometric visual grammar.

However, all four v1 candidates have a material compliance problem:

> They read primarily as polished black-and-white workplace/documentary photographs rather than unmistakably synthetic editorial illustrations.

The approved brief allows realistic materials, perspective, and lighting but requires the asset to remain editorial illustration rather than invite a reader to read the scene as documentary evidence. Visible disclosure is required but should not be the only thing preventing documentary misreading.

Therefore no v1 candidate is recommended for canonical public use.

The correct pilot response is to preserve the strongest composition/subject logic and revise the rendering treatment rather than abandon the selected system direction.

## Candidate audit

### Building 01

**Topic meaning:** `PASS`

Strong reading of tactile, in-progress creation. The unfinished curved wooden structure clearly communicates making and assembly.

**One environment + one anchor:** `PASS`

The large unfinished structure dominates clearly; the distant person remains secondary.

**Physical plausibility / artifacts:** `PASS WITH RESERVATION`

The structure is broadly plausible at homepage scale. Some joinery/detail is ambiguous, but no major impossible geometry dominates the image.

**Fake text/logo/document/UI:** `PASS`

No meaningful generated text, logo, interface, or source-document implication is visible.

**Color:** `PASS`

Monochrome treatment is consistent.

**Small-panel readability:** `PASS`

Excellent silhouette and strong light/dark structure survive reduction.

**Crop flexibility:** `PASS WITH RESERVATION`

The dominant curve survives representative portrait-like and wide crops. The large `building` HTML label is likely to cross the bright wood region in some crops, so final implementation would require deliberate crop/object positioning or controlled contrast treatment.

**Topic breadth:** `PASS WITH RESERVATION`

The scene is memorable but may read specifically as boat-building, curved joinery, or specialist woodworking. This is acceptable as a topic expression only if the overall five-cover system avoids treating one trade as the definition of `Building`.

**Stock/documentary misread:** `FAIL`

The photographic depth, material rendering, lighting, and distant worker make the image look like a real documented workshop photograph.

**Overall:** `REJECT AS FINAL / KEEP AS STRONG COMPOSITION REFERENCE`

Building 01 is the strongest Building candidate, but it does not clear the illustration-vs-documentary gate.

### Building 02

**Topic meaning:** `HOLD`

It communicates assembly, but the object is ambiguous and can read as furniture/model-making rather than broader building/making.

**One environment + one anchor:** `PASS`

The central unfinished wooden object is clearly dominant.

**Physical plausibility / artifacts:** `PASS WITH RESERVATION`

Broadly plausible, though some joinery/slots and object logic are visually uncertain.

**Fake text/logo/document/UI:** `PASS`

No meaningful fake text, logo, interface, or document is visible.

**Color:** `PASS`

Monochrome treatment is consistent.

**Small-panel readability:** `PASS`

The vertical structure remains visible when reduced.

**Crop / HTML overlay:** `FAIL FOR CURRENT COMPOSITION`

The brightest and most important structure occupies the same central/left region used by the large `building` HTML label. Representative crop tests create unnecessary text/image competition.

**Editorial character:** `HOLD`

Cleaner than Building 01 but closer to a product/model study and less distinctive as an editorial cover.

**Stock/documentary misread:** `FAIL`

It reads as a photographed real workshop/model scene rather than clearly synthetic illustration.

**Overall:** `REJECT`

### AI 01

**Topic meaning:** `PASS WITH RESERVATION`

The inspection/sensor process communicates machine-assisted automation without robot or sci-fi clichés. It can also read as ordinary machine vision or industrial automation, but the explicit `AI` HTML topic label makes this acceptable if future `Technology` imagery is kept focused on tools/infrastructure rather than automated inspection.

**One environment + one anchor:** `PASS`

The inspection apparatus and repeated units form one clear process anchor.

**Physical plausibility / artifacts:** `PASS`

The machine-vision/conveyor setup is visually plausible at the intended scale. No major geometry failure dominates.

**Fake text/logo/document/UI:** `PASS`

No meaningful fake interface, readable screen, logo, or document is visible.

**Color:** `PASS`

Monochrome treatment is consistent.

**Small-panel readability:** `PASS`

Strongest of the AI candidates. The machinery remains legible while the large dark left field supports the short `ai` HTML label.

**Crop flexibility:** `PASS`

The process remains readable in representative tall and wide center crops.

**AI / Technology distinction:** `PASS WITH FUTURE CONTROL`

This works for AI only if the later Technology cover does not use the same automation/inspection visual territory.

**Stock/documentary misread:** `FAIL`

The image strongly resembles a real industrial machine-vision photograph and could reasonably be read as a documented facility without the disclosure.

**Overall:** `REJECT AS FINAL / KEEP AS STRONG COMPOSITION REFERENCE`

AI 01 is the strongest AI candidate but does not clear the illustration-vs-documentary gate.

### AI 02

**Topic meaning:** `FAIL / TOO GENERIC`

The centered machine communicates industrial automation but the input/process/output relationship is weak. It can read simply as generic manufacturing equipment.

**One environment + one anchor:** `PASS`

The central apparatus is clear.

**Human presence:** `FAIL FOR HIERARCHY`

The worker sits inside a bright pool of light and becomes a competing focal point rather than an unambiguously secondary presence.

**Physical plausibility / artifacts:** `PASS WITH RESERVATION`

The apparatus is plausible enough at homepage scale, though its exact function is unclear.

**Fake text/logo/document/UI:** `PASS`

No meaningful fake text, logo, interface, or document is visible.

**Color:** `PASS`

Monochrome treatment is consistent.

**Small-panel readability:** `PASS WITH RESERVATION`

The machine silhouette survives reduction, but its meaning becomes even more generic.

**Crop flexibility:** `PASS`

The centered anchor survives representative crop families.

**Stock/documentary misread:** `FAIL`

The image reads as a real industrial-workplace photograph.

**Overall:** `REJECT`

## Pair-level evaluation

### Visual-system cohesion

`PASS`

Building and AI clearly share:

- monochrome treatment;
- low-key directional light;
- serious work/process atmosphere;
- strong geometry;
- material/process anchors;
- restrained human presence.

### Topic differentiation

`PASS WITH CONTROL`

Building reads as making/assembly. AI 01 reads as automated inspection/process. The distinction is useful enough to continue the system.

The future Technology cover must avoid machine-vision/automation subject matter or AI and Technology will collapse into the same territory.

### Anti-cliche gate

`PASS`

The set avoids the prohibited robot-brain, handshake, startup-rocket, hard-hat, neon-circuitry, and floating-UI shortcuts.

### Editorial-illustration distinction

`FAIL`

This is the decisive v1 failure. The rendering is too photographic/documentary across the set.

## Recommendation

Do **not** select or implement a v1 candidate as a canonical topic cover.

Retain these only as execution references:

- `Building 01` for composition, material anchor, geometry, and topic reading;
- `AI 01` for negative space, automated-process logic, small-panel readability, and Building/AI differentiation.

Prepare `v2` generator instructions that preserve those strengths while making the output visibly editorial and non-documentary without becoming cartoon/anime.

Recommended v2 rendering controls:

- explicitly request `realistically rendered editorial illustration`, not photorealistic photography;
- remove camera-language cues such as shallow depth-of-field and photographic bokeh;
- use subtly simplified material edges and deliberately graphic tonal blocks;
- introduce visible print/graphite/photogravure-like mark texture or another restrained illustrative surface treatment;
- preserve realistic anatomy, perspective, materials, and lighting logic;
- preserve grayscale, strong geometry, negative space, and one dominant anchor;
- do not add typography, collage, surreal symbolism, or overt painterly flourish.

A v2 instruction is a new execution artifact and requires presentation plus separate human generation authorization before another image-generation call.

## Human final selection

Selected Building asset:

`NONE`

Selected AI asset:

`NONE`

Human selection status:

`PENDING PASSING CANDIDATES`
