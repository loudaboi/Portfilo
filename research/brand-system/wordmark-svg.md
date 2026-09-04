# Portfilo Wordmark SVG Source

_Last updated: 2026-09-04_

_Status: COLOR GEOMETRY APPROVED / MONOCHROME VARIANTS DERIVED / LIVE SITE WORDMARK UNCHANGED_

## Approved wordmark geometry

The user-approved raster reference supplied during Phase 4B governs the wordmark shape, slant, spacing, and overall silhouette.

Approved outlined color asset:

- `public/brand/portfilo-wordmark-color.svg`

This is a path-outlined vector reconstruction of that reference. It does not depend on editable SVG text or a substitute local font.

The color geometry passed human review on 2026-09-04 after an optical-spacing correction.

## Optical spacing correction

The outline was checked across the neighboring pairs:

- `Po`;
- `or`;
- `rt`;
- `tf`;
- `fi`;
- `il`;
- `lo`.

The `i` -> `l` transition was the clear outlier. The complete red `lo` group was moved 6 SVG units left while preserving the internal `lo` relationship and all letter shapes.

The outer viewBox was reduced by the same 6 units so the corrected wordmark keeps approximately balanced left/right canvas margins.

The correction uses optical consistency rather than mechanically identical numeric gaps.

## Approved color treatment

Canonical palette:

- ink: `#171614`;
- blue: `#0050a4`;
- red: `#b42318`;
- paper/light: `#f4f0e8`.

## Derived monochrome variants

The following variants use the exact same approved paths, transforms, spacing, and viewBox as the approved color wordmark:

- `public/brand/portfilo-wordmark-ink.svg` — all-ink for light surfaces;
- `public/brand/portfilo-wordmark-light.svg` — all-paper/light for dark surfaces.

No geometry was redrawn for the monochrome versions. Only the fill treatment changes.

## Usage roles

### Color

Default presentation on paper/light neutral surfaces when full brand color is appropriate.

### Ink

One-color treatment for restrained editorial, technical, print, legal, or other light-background uses.

### Light

One-color treatment for dark surfaces.

Do not mechanically force both accent colors onto every brand surface.

## Runtime status

The website header and footer remain unchanged and continue using the existing live HTML/CSS wordmark implementation.

This approval locks the master wordmark geometry, but does not by itself authorize replacing the live site implementation. Any later consolidation into a shared Wordmark component must preserve the approved appearance.

## Next Phase 4B gate

Continue the separate simple-symbol icon exploration for favicon, social-avatar, and other compact square surfaces.

The compact icon should be:

- a simple symbol/illustration rather than a forced lettermark;
- highly legible at small sizes;
- visually related to Portfilo's restrained editorial/technical identity;
- evaluated separately from the approved primary wordmark.

No favicon, social avatar, or default social-preview replacement is finalized yet.
