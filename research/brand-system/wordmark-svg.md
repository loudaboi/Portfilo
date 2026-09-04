# Portfilo Wordmark SVG Source

_Last updated: 2026-09-04_

_Status: USER REFERENCE ACCEPTED / OUTLINED COLOR CANDIDATE SPACING-CORRECTED / RUNTIME REPLACEMENT NOT AUTHORIZED_

## Source of truth for this gate

The first Phase 4B SVG attempt was rejected because its standalone rendering did not faithfully match the previously approved/generated Portfilo wordmark.

The user supplied the approved raster reference directly in the Phase 4B review conversation on 2026-09-04. That reference now governs the wordmark geometry for this gate.

The active review candidate is:

- `public/brand/portfilo-wordmark-color.svg`

It is a path-outlined vector reconstruction of the supplied reference, not editable SVG text and not a font-substitution approximation.

The previous text-based `color / ink / light` SVG source files are retired. The monochrome variants will be derived only after the color geometry passes visual review.

## Color treatment

The reconstructed geometry uses the current canonical Portfilo palette:

- ink: `#171614`;
- blue: `#0050a4`;
- red: `#b42318`.

The supplied raster reference governs letter shape, slant, and overall silhouette. Existing canonical brand colors remain unchanged by this gate.

## Optical spacing correction

The reference-derived outline was checked pair-by-pair across:

- `Po`;
- `or`;
- `rt`;
- `tf`;
- `fi`;
- `il`;
- `lo`.

The `i` -> `l` transition was the clear spacing outlier. The red `lo` group was moved 6 SVG units left while preserving the internal `lo` relationship and the existing letter shapes.

The intent is optical consistency rather than identical numeric sidebearings: different italic letterforms need different geometric overlaps to read as evenly spaced.

The outer viewBox was reduced by the same 6 units so the corrected wordmark keeps approximately balanced left/right canvas margins.

No other pair was changed because the remaining neighbor clearances already formed a coherent optical rhythm and further equalization would risk over-tightening the rounded or diagonal forms.

## Runtime status

The website header and footer remain unchanged and continue using their current live HTML/CSS wordmark implementation.

The outlined SVG is a review asset only. It does not authorize replacing the live site wordmark, adding a favicon, or finalizing the social avatar.

## Next gate

Review `public/brand/portfilo-wordmark-color.svg` for:

1. spacing rhythm;
2. overall balance;
3. silhouette against the supplied reference.

If it passes:

1. lock the outlined wordmark geometry;
2. derive ink and light monochrome SVG variants from the exact same paths;
3. continue the separate simple-symbol icon exploration for favicon/social-avatar use;
4. later consolidate the duplicated header/footer wordmark implementation without changing its approved appearance.
