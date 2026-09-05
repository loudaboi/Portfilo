# Portfilo Wordmark SVG Source

_Last updated: 2026-09-06_

_Status: MASTER GEOMETRY APPROVED / FOUR TEAM WORDMARK VARIANTS APPROVED / LIVE SITE WORDMARK UNCHANGED_

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

## Approved palette

Canonical wordmark colors:

- ink: `#171614`;
- blue: `#0050a4`;
- red: `#b42318`;
- paper/light: `#f4f0e8`.

## Approved wordmark variants

All approved variants use the exact same master paths, transforms, spacing, and `0 0 865 219` viewBox. No variant redraws or repositions the wordmark geometry.

- `public/brand/portfilo-wordmark-color.svg` — ink `Port`, blue `fi`, red `lo`; default full-color treatment for paper/light neutral surfaces.
- `public/brand/portfilo-wordmark-ink.svg` — all-ink treatment for light surfaces.
- `public/brand/portfilo-wordmark-light.svg` — all-paper/light treatment for dark surfaces.
- `public/brand/portfilo-wordmark-port-paper.svg` — paper/light `Port`, blue `fi`, red `lo`; approved 2026-09-06 as a dark-surface full-color team/social variant.

The monochrome and paper-Port variants change fill treatment only. The approved master silhouette remains unchanged.

## Consistency verification

The 2026-09-06 team logo-pack review checked the four variants for:

- identical `865 x 219` SVG viewBox;
- identical path geometry and transforms;
- unchanged optical spacing;
- exact canonical fills;
- transparent PNG export behavior;
- identical raster alpha silhouette at the reviewed export size.

A perceived difference in the light wordmark around the `i` and its dot was investigated. No geometry or spacing difference was found; the light and ink versions use the same outlined geometry. The difference was treated as an optical contrast effect rather than a reason to create a special-case light geometry.

## Usage roles

### Color

Default presentation on paper/light neutral surfaces when full brand color is appropriate.

### Ink

One-color treatment for restrained editorial, technical, print, legal, or other light-background uses.

### Light

One-color treatment for dark surfaces.

### Paper Port + blue/red

Full-color dark-surface variant for approved team, social, or other brand use where the original ink `Port` would not maintain sufficient contrast.

Do not mechanically force both accent colors onto every brand surface. Use the full wordmark whenever horizontal space reasonably permits it.

## Runtime status

The website header and footer remain unchanged and continue using the existing live HTML/CSS wordmark implementation.

Approval of the additional team-use variant does not authorize replacing the live site implementation. Any later consolidation into a shared Wordmark component must preserve the approved appearance.

## Compact symbol relationship

The separately approved pinched-rectangle compact symbol remains reserved for favicon, avatar, touch-icon, and other constrained square/compact surfaces. See `research/brand-system/icon-system.md`.

Do not place the compact symbol beside the wordmark merely as decoration.

## Team distribution

The canonical SVG masters remain in the repository. Team-facing copies and ready-to-use PNG exports may be synchronized to the approved Portfilo Google Drive Brand kit for easier access by employees, contractors, writers, marketers, and designers.

If a Drive copy and repository master ever conflict, the repository master governs.
