# Portfilo Compact Symbol

_Last updated: 2026-09-04_

_Status: USER APPROVED / PRODUCTION ASSETS IMPLEMENTED / PHASE 4B BRAND DECISION CLOSED_

## Decision

Phase 4B has an approved compact Portfilo symbol for surfaces where the full wordmark is too wide.

The approved symbol is the monochrome **pinched rectangle** selected by Louda Tuppal during the Phase 4B icon gate on 2026-09-04.

The wordmark remains Portfilo's primary identity. The compact symbol is a reduced-space brand asset, not a replacement for the wordmark.

## Geometry source

The approved Concept B presentation is the visual source of truth for this symbol.

The production SVG preserves that selected silhouette as a clean, symmetric vector construction:

- horizontally compact, wider than tall;
- near-vertical left and right edges;
- softly rounded outer corners;
- matched concave top and bottom pinches;
- one continuous solid shape;
- no lettering;
- no internal detail;
- no decorative stroke.

Do not substitute later exploratory generations if their geometry differs from the approved Concept B silhouette.

## Palette

The compact symbol is intentionally monochrome.

Allowed colors:

- ink: `#171614`;
- paper: `#f4f0e8`.

Approved inversions:

- ink symbol on paper/light surfaces;
- paper symbol on ink/dark surfaces.

Do not add blue, red, gradients, shadows, texture, or secondary details to the compact symbol.

## Asset set

Master symbol SVGs:

- `public/brand/portfilo-symbol-ink.svg`
- `public/brand/portfilo-symbol-paper.svg`

Avatar assets:

- `public/brand/portfilo-avatar-ink-on-paper.svg`
- `public/brand/portfilo-avatar-paper-on-ink.svg`

Favicon/site-icon assets:

- `public/favicon.svg` — adaptive paper/ink SVG favicon;
- `public/favicon.ico` — 16/32/48px legacy fallback;
- `public/favicon-16.png`;
- `public/favicon-32.png`;
- `public/apple-touch-icon.png` — 180px touch icon.

All derivatives use the same approved master geometry. Small-size assets change only scale, canvas, and foreground/background inversion.

## Runtime implementation

`src/components/SiteHead.astro` declares:

- SVG favicon;
- 32px and 16px PNG fallbacks;
- `.ico` fallback;
- 180px Apple touch icon.

The site header and footer continue using the approved Portfilo wordmark. The compact symbol is not inserted into primary navigation.

## Usage rule

Use the full wordmark whenever horizontal space reasonably permits it.

Use the compact symbol for:

- browser favicon/site icon;
- social/profile avatar;
- compact square or circular brand surfaces;
- future platform surfaces where the full wordmark would become illegible.

Do not use the compact symbol merely as decoration beside the wordmark.

## Validation state

Brand decision and source implementation: **COMPLETE**

Validated during Phase 4B:

- master compact-symbol geometry: USER APPROVED;
- SVG favicon wiring: IMPLEMENTED;
- 16px and 32px PNG fallback assets: PRESENT;
- `.ico` legacy fallback: PRESENT;
- Apple touch icon: corrected to a valid 180 x 180 PNG after the first derivative was found malformed, then USER APPROVED and IMPLEMENTED;
- social/avatar derivatives: IMPLEMENTED from the approved compact-symbol system.

Broad browser/device integrity checking of every legacy derivative remains part of the Phase 4C engineering/accessibility/performance/release audit. That technical QA does not reopen the approved symbol design.

## Phase 4B closeout

The remaining Phase 4B brand-system decisions are now resolved:

1. canonical color, ink, and light wordmarks are approved and implemented;
2. compact symbol, favicon/site-icon derivatives, Apple touch icon, and social/avatar derivatives are approved and implemented;
3. the default `1200 x 630` Portfilo social preview is approved, implemented, and recorded in `research/brand-system/social-preview.md`;
4. site/email/social usage follows the rule that the full wordmark is primary and the compact symbol is reserved for constrained square/compact surfaces;
5. duplicate live wordmark markup will **not** be consolidated as a Phase 4B refactor. Revisit only if Phase 4C identifies a concrete maintainability or consistency defect.

No additional logo, symbol, or social-preview concept generation is required unless Louda explicitly reopens a brand decision.
