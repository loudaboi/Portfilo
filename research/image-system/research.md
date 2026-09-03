# Portfilo Editorial Image System Research

_Last updated: 2026-09-04_

_Status: RESEARCH COMPLETE / SYSTEM DECISION PROPOSED SEPARATELY / NO IMAGE GENERATION AUTHORIZED_

## Purpose

Research a repeatable Portfilo editorial-image system for v0 before any story artwork is generated.

The governing requirement is explicit:

> AI may execute an approved visual decision. It does not get to invent the visual decision on its own.

The image system must therefore behave like the writing system: research and editorial judgment first, generation second.

## Repository context inspected

- `AGENTS.md`
- `docs/PROJECT_STATE.md`
- `docs/V0_SCOPE.md`
- `docs/DESIGN_DIRECTION.md`
- `research/README.md`
- `src/content.config.ts`
- `src/components/SiteHead.astro`
- current homepage tokens in `src/pages/index.astro`
- current `public/social/` assets

Important current-state findings:

1. Story pages can support images under v0 scope, but the current story content schema has no image fields.
2. `SiteHead.astro` already emits Open Graph and X/Twitter metadata, but every page currently uses `/social/portfilo-default.png`.
3. That default social image is declared as `1200 x 630` in metadata.
4. Current implemented palette is:
   - paper `#f4f0e8`;
   - ink `#171614`;
   - muted neutral `#69655e`;
   - line neutral `#cbc5bb`;
   - Portfilo blue `#0050a4`;
   - light blue `#8fc7ff` for use on dark surfaces;
   - Portfilo red `#b42318`.
5. `docs/DESIGN_DIRECTION.md` still contains an older violet-accent direction. That is stale relative to the current implementation and explicit current visual direction. It should be reconciled only after the new image system is approved.

## User-supplied visual references

Five supplied references were analyzed as visual-direction inputs, not as works to copy.

Observed common behavior:

- four of five references are effectively grayscale;
- one reference introduces a single strong red object against an otherwise grayscale scene;
- high tonal contrast and large black areas are common;
- grain/noise is visible or implied;
- lighting is often low-key or backlit;
- subjects are ordinary working/building environments rather than polished commercial setups;
- recurring subject families include workspaces, tools, laptops, sketches, anonymous figures, architecture and infrastructure;
- people are often partial, silhouetted or visually subordinate to the environment;
- compositions feel observed/art-directed rather than posed stock photography;
- the references avoid bright multicolor palettes and glossy startup/technology advertising aesthetics.

Measured source shapes:

- two approximately `9:16` portrait images;
- one approximately `5:7` portrait image;
- one approximately `4:5` portrait image;
- one `1:1` square image.

Research conclusion:

The **visual treatment** is transferable. The reference aspect ratios are not automatically transferable to Portfilo's website. They come from a portrait-heavy inspiration context and should not dictate web delivery.

## No-imitation boundary

The references authorize only high-level traits such as:

- monochrome base;
- restrained brand-color accent;
- low-key lighting;
- strong geometry;
- editorial/documentary mood;
- grain;
- ordinary work/building environments;
- anonymous figures where appropriate.

Do not recreate a supplied image's exact composition, room, objects, camera position, person, clothing, book/page design, architecture, or other distinctive arrangement.

Do not ask a model to reproduce any supplied image `exactly`, `in the style of` a named photographer, or as a near-copy.

## Professional / technical research

### 1. Open Graph protocol

Source:

https://ogp.me/

Relevant findings:

- core share metadata includes `og:title`, `og:type`, `og:image`, and `og:url`;
- `og:image` can include width, height, MIME type and alt text;
- if `og:image` is supplied, `og:image:alt` should describe what is in the image rather than act as a caption;
- multiple image values are possible, with the first receiving preference in conflicts.

Portfilo implication:

The existing social metadata foundation is structurally sound, but story-specific images should replace the universal default when a story has approved artwork.

### 2. Google Search Central — image SEO

Source:

https://developers.google.com/search/docs/appearance/google-images

Relevant findings:

- image discovery depends on crawlable/indexable image URLs and useful surrounding page context;
- high-quality relevant images are preferred;
- image landing pages and image metadata should accurately represent the image and page;
- descriptive alt text and accessible image handling support both users and search understanding.

Portfilo implication:

Story art should be relevant to the article, locally controlled, crawlable, correctly described and placed in the story context. Decorative mood art should not be given fake factual alt text merely for SEO.

### 3. Google Article structured data

Source:

https://developers.google.com/search/docs/appearance/structured-data/article

Relevant findings:

- `Article` structured data can include one or more representative image URLs;
- Google recommends relevant article images rather than logos or captions;
- for best results Google recommends multiple high-resolution variants in `16:9`, `4:3`, and `1:1` ratios;
- image URLs must be crawlable and indexable.

Portfilo implication:

A single visual concept can have multiple delivery crops. This is technical adaptation, not permission to invent different visual ideas for each platform.

### 4. Google Discover

Source:

https://developers.google.com/search/docs/appearance/google-discover

Relevant findings:

- large, relevant images should be at least `1200px` wide;
- Google specifically recommends a `16:9` landscape image for Discover presentation;
- the important content must survive landscape crop behavior;
- large image previews require `max-image-preview:large` (or AMP, which Portfilo does not use).

Portfilo implication:

For v0, a **canonical 16:9 story-art crop** is technically stronger than adopting the portrait ratios of the inspiration images. A separate `1200 x 630` Open Graph derivative can come from the same approved visual concept.

### 5. W3C WAI image accessibility guidance

Sources:

https://www.w3.org/WAI/tutorials/images/
https://www.w3.org/WAI/tutorials/images/decision-tree/
https://www.w3.org/WAI/tutorials/images/decorative/

Relevant findings:

- alt text depends on the image's purpose in its actual context;
- informative images need a concise text alternative conveying their meaning/function;
- purely decorative images should use an empty alt value;
- images of text should generally be avoided when actual HTML text can perform the job;
- complex diagrams/charts require a fuller text equivalent rather than a tiny alt attribute carrying all the data.

Portfilo implication:

Alt text cannot be auto-generated from pixels and accepted blindly. The image brief must classify the image's role first, then an editor decides informative vs decorative treatment.

### 6. Astro image pipeline

Sources:

https://docs.astro.build/en/guides/images/
https://docs.astro.build/en/reference/modules/astro-assets/

Relevant findings:

- local images under `src/` can be optimized by Astro's image pipeline;
- `<Image />` and `<Picture />` can generate optimized/responsive output;
- Content Collections support the `image()` schema helper for validated local image references;
- responsive image layouts and generated breakpoints are available without adding a new frontend framework.

Portfilo implication:

The v0 image system can stay inside the existing Astro stack. There is no current need for an image CDN, DAM, CMS, client-side image library or new framework.

### 7. Editorial trust and synthetic imagery

Sources:

Associated Press — newsroom AI standards:
https://www.ap.org/the-definitive-source/announcements/ap-updates-newsroom-standards-for-artificial-intelligence/

C2PA — Content Credentials / AI-ML guidance:
https://spec.c2pa.org/

Relevant findings:

- AP's current standard keeps editorial judgment, verification and accountability with human journalists and prohibits generative AI from creating or altering news photography;
- AP requires generated/manipulated material to be clearly identified and contextualized when material to published journalism;
- C2PA treats provenance as a way to communicate how digital media was created or modified, including trained-algorithmic media, while noting that provenance alone does not establish factual truth.

Portfilo interpretation:

Portfilo is not required to copy AP's no-generated-images policy, but the trust problem it protects against is directly relevant. If Portfilo uses generated images, they must be treated as **editorial illustrations**, not documentary evidence or purported photographs of real events.

A visible disclosure is a stronger v0 safeguard than relying on embedded provenance metadata alone. Content Credentials should be preserved when practical, but a future C2PA implementation is not required to establish the initial system.

## Cross-research conclusions

### Conclusion 1 — visual decision authority must be separated from image generation

A model may:

- propose visual concepts after being given the approved story/evidence;
- translate an approved image brief into generator instructions;
- generate candidate images;
- help identify deviations from the approved brief.

A model may **not**:

- decide by itself that a story needs an image;
- choose the final visual concept by itself;
- invent factual visual details because they make an image more interesting;
- choose the final candidate by itself;
- silently establish a new house style from one successful generation.

### Conclusion 2 — generated imagery must be illustration, never evidence

For v0:

- generated imagery may illustrate an idea, environment, process or tension;
- it must not be described or styled as documentary photography;
- it must not purport to depict a real event that was not photographed;
- it must not fabricate a real subject's likeness, workspace, office, factory, data center, interface, product, document or quote;
- a real photograph, screenshot, source document or chart remains evidence and follows normal editorial verification rules.

### Conclusion 3 — one visual concept, multiple delivery crops

Recommended v0 delivery family:

- canonical story image: `16:9`, at least `1600 x 900` master delivery where source quality allows;
- Open Graph / X large-card derivative: `1200 x 630`;
- structured-data derivatives from the same approved concept: `16:9`, `4:3`, and `1:1` when implemented;
- newsletter: use the canonical `16:9` image unless email testing establishes a real need for a separate crop.

This satisfies the user's desire for a consistent `cut` on Portfilo itself while still supporting platform-specific technical crops.

### Conclusion 4 — composition must be crop-safe

Because the same concept will be adapted across `16:9`, `1.91:1`, `4:3` and `1:1`, critical visual information should stay near the composition's center unless a separate human-approved crop is prepared.

Do not allow a generator to put the only meaningful object at the extreme edge merely because the initial image looks dramatic.

### Conclusion 5 — monochrome should be enforced, not merely requested

Recommended Portfilo art treatment:

- grayscale / near-monochrome base;
- current Portfilo ink/paper/neutral family;
- at most one Portfilo accent color in a normal story image;
- blue `#0050a4` or red `#b42318` as the default accent choices;
- no uncontrolled chromatic color;
- final asset should be desaturated/rejected if the generator introduces unrelated colors.

The safest method is to generate/select a monochrome base first and treat any color accent as a controlled post-generation design decision. This keeps exact brand color under deterministic human/design control rather than trusting the model to reproduce a hex value.

### Conclusion 6 — do not use AI-generated text as design

Default story art should contain **no text**.

Reasons:

- article title/dek already exist as real HTML;
- social cards already carry title/description metadata;
- model-generated lettering is error-prone;
- W3C guidance favors real text over images of text;
- avoiding text makes crops more robust.

If a future social card needs typography, render it deterministically from approved copy with HTML/CSS or another controlled layout process rather than asking image generation to typeset it.

### Conclusion 7 — v0 can use Astro's existing local-image pipeline

Recommended implementation direction after system approval:

- keep source editorial assets in the repository;
- validate story image metadata through the Content Collection schema;
- use Astro's local image pipeline for responsive article/card delivery;
- keep a stable, broadly compatible social derivative for `og:image`;
- do not add an image SaaS/CDN unless a measured need appears.

## Visual-system proposal derived from the research

Recommended high-level Portfilo visual language:

> Monochrome editorial stills with strong geometry, low-key light, visible texture/grain, ordinary business/technology/building environments, and one highly restrained Portfilo-color accent when the image brief justifies it.

Preferred subject families:

- hands/tools/process;
- workspaces and objects;
- architecture/infrastructure;
- documents/sketches/material traces when not pretending to be real evidence;
- anonymous partial figures or silhouettes;
- physical systems and constraints;
- negative space and geometric environment.

Reject by default:

- smiling corporate stock setups;
- handshakes;
- generic robot heads/brains;
- neon cyberpunk technology imagery;
- glowing circuitry as a default AI metaphor;
- hooded-hacker cliché;
- floating UI panels;
- generic server-rack image for every infrastructure story;
- random collage assembled only because it looks editorial;
- fake screenshots or fake readable documents;
- fake logos/brand marks;
- generated likenesses of real identifiable people;
- invented documentary scenes of real incidents;
- color outside the approved Portfilo palette;
- text generated inside the image.

## Remaining decision gate

Research is complete.

The proposed system must still be reviewed and approved by Louda Tuppal before:

- `docs/IMAGE_SYSTEM.md` becomes canonical;
- `docs/DESIGN_DIRECTION.md` is reconciled with the current blue/red palette;
- `AGENTS.md` is amended to enforce the image-generation gate for future contributors;
- story schema changes are implemented;
- any actual Portfilo story image is generated.
