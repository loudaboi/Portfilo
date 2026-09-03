# Image Generation Prompt Research

_Last updated: 2026-09-04_

_Status: RESEARCH COMPLETE / APPLIES TO GENERATED PORTFILO IMAGERY_

## Purpose

Record current prompt-generation guidance relevant to Portfilo's editorial image workflow after the first homepage featured-cover candidate set exposed two recurring risks:

1. excessive scene detail can create visual/logical inconsistency;
2. realistic prompts can drift into documentary-looking photorealism when the intended output is editorial illustration.

This research informs prompt execution only. It does not replace story research, visual concept selection, image briefs, human approval gates, or candidate review.

## Primary sources

### OpenAI Academy — Creating images with ChatGPT

Source:

https://openai.com/academy/image-generation/

Relevant guidance:

- a good image prompt does not need to be long; in many cases 1-3 clear sentences are enough;
- ground the prompt in a small number of useful details: purpose, main subject, action, environment, visual style, and framing/lighting constraints when they matter;
- clarity is more useful than clever phrasing;
- explicit constraints help keep unwanted text, logos, or changes out;
- improve an image through small, targeted revisions rather than broad simultaneous changes;
- a small set of reference images is easier to manage than a large set when references are actually needed.

### OpenAI Developers — GPT Image Generation Models Prompting Guide

Source:

https://developers.openai.com/cookbook/examples/multimodal/image-gen-models-prompting-guide

Relevant guidance:

- use a consistent prompt order such as background/scene -> subject -> key details -> constraints;
- for more complex requests, use short labeled segments or line breaks rather than one long dense paragraph;
- minimal prompts, descriptive paragraphs, and structured prompts can all work when intent and constraints are clear;
- be concrete about the visual medium, materials, shapes, texture, framing, viewpoint, lighting, and placement when these affect the result;
- explicitly state exclusions and invariants;
- composition instructions such as subject placement and negative space are useful when layout matters;
- photorealistic/photo/camera vocabulary strongly steers generation toward photographic output;
- preserve invariants and make small, targeted changes during iteration to reduce drift.

### OpenAI model guidance — lean prompts

Source:

https://developers.openai.com/api/docs/guides/latest-model

Transferable prompting principle:

- state each important instruction once;
- remove repeated or low-value instructions;
- keep style guidance and examples only when they encode a real product requirement or correct a measured failure.

This is general model guidance rather than image-specific evidence, so it is used only as supporting prompt-discipline guidance.

## Portfilo conclusions

### 1. Simplicity is a production control

For compact editorial covers, simplicity is not merely an aesthetic preference. It reduces:

- impossible object relationships;
- duplicated or unexplained objects;
- competing focal points;
- anatomy/interaction errors;
- crop failures;
- accidental documentary specificity;
- generated detail that has no editorial purpose.

Portfilo should therefore use a **complexity ceiling** for generated editorial scenes by default:

- one environment;
- one dominant subject/material/process anchor;
- one core visual relationship or action;
- zero or one secondary human presence;
- no additional semantic detail unless the approved visual job requires it.

This ceiling is a Portfilo editorial rule derived from the product surface and observed pilot failure modes. It is not claimed as a universal OpenAI rule.

### 2. Use a detail budget

Additional detail must earn its place by improving the approved visual job.

Do not add objects simply to make a scene feel richer, more realistic, more cinematic, or more complete.

Background detail should usually function as texture/context rather than carry additional meaning.

### 3. Avoid accidental photorealism when illustration is required

If the required output is editorial illustration:

- name the medium as `editorial illustration`;
- do not use `photorealistic`, `real photograph`, `professional photography`, camera/lens specifications, shallow depth of field, bokeh, or similar photographic quality cues unless photography-like rendering is explicitly approved;
- use realistic perspective, materials, anatomy, and lighting without asking the model to simulate a real captured photograph;
- prefer larger tonal shapes, simplified edges, restrained surface detail, and visible illustration/print texture when needed to keep the result visibly illustrative.

### 4. Use a stable prompt order

Default Portfilo execution prompt structure:

1. **Purpose / medium** — what the image is for and that it is editorial illustration;
2. **Scene / anchor** — one environment, one dominant anchor, one relationship;
3. **Composition** — framing, placement, negative space, crop requirement;
4. **Treatment** — grayscale, geometry, lighting, texture, realism level;
5. **Constraints** — only the high-value must-not-show rules relevant to the assignment.

Do not repeat the same instruction in multiple phrasings.

### 5. Revise one variable at a time

After candidate review, identify the primary failure and change one major variable per iteration when practical:

- subject logic;
- composition;
- rendering medium/treatment;
- crop/negative-space behavior;
- topic distinction.

Preserve the other approved decisions so the iteration produces evidence about what actually improved.

## Application to homepage featured-cover v2

The v1 Building + AI pilot established that:

- `Working Worlds / Material Anchors` is viable as a concept system;
- Building 01 and AI 01 provide useful composition/subject lessons;
- v1 rendering was too photographic;
- v2 should preserve the strongest subject/composition logic while simplifying detail and changing the rendering medium only.

Therefore v2 should:

- use Building 01 and AI 01 only as composition/subject lessons, not style references;
- reduce scene/object count;
- remove camera-like photographic cues;
- increase clearly illustrative tonal/edge treatment;
- keep grayscale, negative space, strong geometry, and one dominant anchor;
- generate a small pair and audit again before scaling to the remaining topics.
