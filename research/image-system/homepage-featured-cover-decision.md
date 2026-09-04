# Homepage Featured Cover Decision

_Status: CURRENT / CANONICAL FOR V0_

_Date: 2026-09-04_

## Decision

Portfilo will use one universal generated editorial image in the homepage featured-story cover panel for v0.

The image does not vary by story topic. Business, Technology, Startups, AI, and Building all use the same approved image when a story occupies the homepage featured position.

Canonical asset:

`public/images/homepage-feature-image.png`

Current presentation stylesheet:

`public/homepage-feature.css`

## Approved treatment

The selected image is the human-approved edited version with:

- monochrome / grayscale presentation;
- visible print-like grain;
- strong geometry and directional contrast;
- a darker lower region to protect light homepage text;
- no generated typography, logos, screens, or documentary claims.

The stored image asset is the approved final image. Homepage CSS may crop it with `cover` and may apply restrained edge/bottom darkening for legibility. CSS must not recolor it or introduce decorative effects that change the approved visual character.

## Homepage behavior

The feature panel continues to render story metadata and navigation as live HTML. The image is a universal visual layer, not a topic illustration or factual depiction of the featured story.

Generated imagery requires a visible synthetic/AI disclosure under `docs/IMAGE_SYSTEM.md`. The homepage implementation therefore includes a visible `AI-generated image` disclosure.

## Superseded direction

The earlier proposed system:

`featured story -> topic -> canonical topic cover asset`

with five separate Business, Technology, Startups, AI, and Building assets is superseded for v0.

The earlier `Working Worlds / Material Anchors` briefs, Building/AI representative-test plans, candidate audits, generated-image experiments, and the rejected Astra preview remain in repository history only as research/process records. They are not current implementation authority and must not be treated as approved visual precedent.

The rejected Astra production asset and temporary preview stylesheet have been removed from active source.

## Validation still required

Before this homepage-image implementation is considered fully passed:

- run `npm run check`;
- run `npm run build`;
- inspect the deployed homepage on desktop and mobile;
- verify headline/metadata/read-link legibility against the image;
- verify the image crop remains acceptable at responsive breakpoints;
- verify the visible AI-generated disclosure is readable but subordinate;
- verify no rejected preview asset is requested by the deployed page.

A later human decision may replace the universal image or reinstate a multi-image system. That would require a new explicit decision and corresponding canonical-state update.