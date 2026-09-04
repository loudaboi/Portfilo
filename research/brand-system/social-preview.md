# Portfilo Default Social Preview

_Last updated: 2026-09-04_

_Status: USER APPROVED / IMPLEMENTED / DEPLOYED VALIDATION PASS_

## Decision

Phase 4B uses one default Portfilo social-preview image for the v0 site.

Canonical asset:

`public/social/portfilo-default.png`

Required dimensions:

`1200 x 630`

The approved composition uses the monochrome staircase scene with the Portfilo wordmark centered at large scale. No tagline, topic list, compact symbol, gradient, glow, fake shadow, or additional promotional copy is part of the approved composition.

This file is the default site-level sharing image. Story-specific social images are not part of the current v0 implementation.

## Runtime implementation

`src/components/SiteHead.astro` resolves the social image from:

`/social/portfilo-default.png`

When `Astro.site` is available, the same absolute image URL is used for:

- `og:image`;
- `twitter:image`;
- Article structured-data image fallback.

The head also declares the approved `1200 x 630` Open Graph dimensions and `summary_large_image` for X/Twitter cards.

`Astro.site` is supplied by the `SITE_URL` environment variable in `astro.config.mjs`.

For the current temporary production deployment, `SITE_URL` is configured as:

`https://portfilo-app.pages.dev`

That value must be replaced by the final canonical public domain when the domain is connected.

## Validation

Validated on 2026-09-04:

- approved final PNG present in the repository: PASS;
- exact output dimensions `1200 x 630`: PASS;
- direct deployed image URL loads: PASS;
- deployed homepage source contains `og:image`: PASS;
- Facebook sharing post renders the preview: PASS;
- Discord renders the preview: PASS;
- Messenger may omit the preview in some client contexts despite the same valid page metadata and publicly reachable image.

Messenger-only inconsistency is treated as client/platform behavior and does not block the Portfilo implementation because the page metadata, image delivery, and independent preview consumers validate correctly.

## Usage rule

Use this image as the default site social preview until Portfilo intentionally creates a new approved default or introduces story-specific social-card art.

Do not create platform-specific copies solely to chase client cache behavior unless a repeatable site-side defect is demonstrated.

Do not add a permanent tagline or extra promotional copy to the default preview without a new human approval gate.

When the final Portfilo domain is connected:

1. update production `SITE_URL` to the canonical HTTPS origin;
2. redeploy;
3. confirm the generated `og:url`, `og:image`, canonical URL, sitemap, and structured-data URLs use the final domain;
4. run one fresh Facebook/Meta sharing check and one independent preview check.

## Phase 4B closeout note

The social-preview design gate is closed. Further work on social metadata, crawler behavior, performance, or final-domain QA belongs to Phase 4C unless Louda explicitly reopens the design decision.
