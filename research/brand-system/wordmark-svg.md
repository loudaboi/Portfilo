# Portfilo Wordmark SVG Source

_Last updated: 2026-09-04_

_Status: CREATED FOR PHASE 4B REVIEW / RUNTIME REPLACEMENT NOT AUTHORIZED_

## Decision

The existing Portfilo live-text wordmark remains the primary brand identity for v0.

Phase 4B now has reusable SVG source variants derived from the same implemented construction:

- Instrument Sans Bold;
- tight negative tracking equivalent to `-0.085em` at the source size;
- `-12deg` horizontal skew;
- `Port` in ink `#171614`;
- `fi` in Portfilo blue `#0050a4`;
- `lo` in Portfilo red `#b42318`.

Files:

- `public/brand/portfilo-wordmark-color.svg`
- `public/brand/portfilo-wordmark-ink.svg`
- `public/brand/portfilo-wordmark-light.svg`

## Usage roles

### Color

Default brand presentation on paper/light neutral surfaces.

### Ink

One-color mark for restrained print, editorial, legal, or technical use on light surfaces.

### Light

One-color paper/light mark for dark surfaces.

Do not mechanically force both blue and red onto every brand application. The full-color wordmark is the default identity; monochrome variants exist for surfaces where color is inappropriate or loses clarity.

## Source format note

These Phase 4B SVGs intentionally preserve the exact currently implemented typography by referencing the same Instrument Sans variable webfont used by the site. They are vector text source assets, not yet path-outlined distribution exports.

Do not substitute a different local font merely to create outlines. A path-outlined export should be produced only from the approved Instrument Sans Bold rendering so the canonical wordmark does not silently change shape.

The website header and footer remain live HTML/CSS for now. These SVG files do not authorize replacing that implementation before visual review.

## Next gate

Review the SVG wordmark variants for fidelity to the approved live wordmark.

After approval:

1. lock the primary wordmark construction;
2. continue Phase 4B with the separate simple-symbol icon exploration for favicon/social-avatar use;
3. create path-outlined distribution exports when the exact approved rendering can be converted without a font substitution;
4. consolidate duplicated header/footer wordmark markup only as a later implementation step.

No favicon/icon/social-preview implementation is authorized by this wordmark-source gate alone.
