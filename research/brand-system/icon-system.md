# Portfilo Compact Symbol

_Last updated: 2026-09-04_

_Status: USER APPROVED / PRODUCTION ASSETS IMPLEMENTED / DEPLOYED REVIEW PENDING_

## Decision

Phase 4B now has an approved compact Portfilo symbol for surfaces where the full wordmark is too wide.

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

`src/components/SiteHead.astro` now declares:

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

Repository/source implementation: **COMPLETE**

Still required before this gate is fully closed:

- local `npm run check`;
- local `npm run build`;
- deployed desktop/browser favicon review;
- iOS/touch-icon review;
- avatar crop review on a circular profile mask.

## Remaining Phase 4B work

After this compact-symbol implementation passes runtime review:

1. design and approve the default `1200 x 630` Portfilo social-preview composition;
2. record final site/email/social asset usage rules;
3. decide whether consolidating duplicate live wordmark markup into a reusable component is worth doing before Phase 4C.

No additional icon concept generation is required unless Louda explicitly reopens the compact-symbol decision.
