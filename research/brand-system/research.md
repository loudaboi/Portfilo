# Portfilo Brand Asset System Research

_Last updated: 2026-09-04_

_Status: RESEARCH COMPLETE / DIRECTION DECISION REQUIRED / NO BRAND-ASSET IMPLEMENTATION AUTHORIZED_

## Task

Establish the minimum reusable brand-asset system Portfilo needs for v0 after the homepage image pilot was paused without a selected asset.

This task covers:

- primary wordmark;
- compact small-size identity for favicon/platform use;
- social avatar;
- monochrome/light-dark usage;
- default site social-preview composition.

It does not reopen the retired standalone logo exploration unless a compact technical asset genuinely requires a reduced form.

## Current repository facts

### Primary wordmark

`src/components/SiteHeader.astro` and `src/components/SiteFooter.astro` currently render the brand as live text:

- `Port` in ink;
- `fi` in Portfilo blue;
- `lo` in Portfilo red;
- bold sans treatment;
- tight negative tracking;
- approximately `-12deg` horizontal skew.

The same visual logic is already used in both header and footer.

This is the strongest existing brand authority in implementation.

### Brand philosophy already established

`docs/DESIGN_DIRECTION.md` says:

- typography should carry the brand;
- Portfilo should feel like a contemporary editorial institution;
- identity should come from composition, typography, evidence, whitespace and disciplined color rather than decorative effects;
- Portfilo blue is the primary functional accent;
- Portfilo red is a sparse secondary editorial accent;
- no gradient-first identity.

### Current small/platform assets

`public/` currently has no favicon asset and no dedicated social-avatar asset.

`src/components/SiteHead.astro` currently has no `<link rel="icon">` or Apple touch icon declaration.

Therefore v0 currently lacks a deliberate small-size brand identity.

### Current default social preview

`public/social/portfilo-default.png` exists and `SiteHead.astro` exposes it as the universal Open Graph/Twitter image at `1200 x 630`.

The current implementation uses one fallback social image for both pages and article structured data.

A later story-image system may replace the universal image for individual stories, but the publication still needs a strong default site-level social asset.

## External professional research

### 1. Rest of World: primary wordmark first, reduced forms only when required

Rest of World's current public style guide uses:

1. a primary one-line wordmark whenever possible;
2. a square icon when the wordmark is too wide or insufficiently legible;
3. a simplified lettermark only for extremely small use such as favicons.

Transferable lesson for Portfilo:

> Do not invent multiple competing logos. Keep the wordmark primary and derive the smallest necessary technical forms only when the surface demands them.

Source:

https://restofworld.org/style-guide/

### 2. Fast Company: small-scale legibility can justify a separate reduced mark

Fast Company's 2018 identity work preserved its main wordmark but created progressively adjusted small-size forms plus an `FC` monogram for social/avatar use because thin wordmark details would disappear at small sizes.

Transferable lesson for Portfilo:

> A compact mark is justified by legibility constraints, not by a desire to add another logo.

Source:

https://www.fastcompany.com/90249961/fast-company-magazine-has-a-new-look

### 3. Fast Company: evolve from established visual principles instead of redesigning for novelty

Fast Company's later redesign work describes retaining sound existing typographic structure and using explicit visual principles as a North Star rather than replacing the identity wholesale.

Transferable lesson for Portfilo:

> The current approved wordmark should be treated as the starting point. The v0 brand-asset task should refine and operationalize it rather than launch another identity search without evidence that the wordmark fails.

Sources:

https://www.fastcompany.com/90490678/inside-the-redesign-of-fast-company-magazine
https://www.fastcompany.com/90946499/how-to-redesign-a-magazine-fast-company-style

### 4. Google Search: favicon must be a stable, representative square asset

Google's current favicon guidance says:

- favicon must be square;
- minimum supported size is `8 x 8`;
- larger than `48 x 48` is recommended for quality across surfaces;
- the favicon should visually represent the site's brand;
- its URL should remain stable;
- the home page should include a supported favicon `<link>` declaration.

Transferable lesson for Portfilo:

> The favicon needs a deliberately simplified brand form tested at very small sizes. Trying to squeeze the full `Portfilo` wordmark into a favicon is not appropriate.

Source:

https://developers.google.com/search/docs/appearance/favicon-in-search

## Research synthesis

### What should remain stable

The research does not justify replacing Portfilo's current primary wordmark.

For v0, the strongest direction is:

`ONE PRIMARY WORDMARK -> ONLY THE REDUCED FORMS NECESSARY FOR SMALL SURFACES`

This aligns with:

- the current implementation;
- the design-direction rule that typography carries the brand;
- established editorial-brand practice;
- the user's earlier decision to retire the standalone logo concept in favor of the wordmark.

### What should not happen

Do not:

- restart a broad logo-design exercise;
- create unrelated symbols for favicon, avatar and social preview;
- use the generated-image system to make logos;
- rely on detail that disappears below roughly 32-48 px;
- use both brand accent colors mechanically on every asset;
- turn the default social preview into a generic promotional ad.

## V0 asset architecture recommendation

### Tier 1 — Primary wordmark

Purpose:

- site header/footer;
- newsletters;
- large brand surfaces;
- default social preview where space permits.

Direction:

- preserve the current `Port / fi / lo` color logic;
- normalize the wordmark into one reusable implementation rather than duplicating styling in header/footer;
- test one-color ink, white-on-dark, and full-color variants;
- retain live text where appropriate for web UI rather than replacing it with a raster image.

### Tier 2 — Compact platform mark

Purpose:

- social avatar;
- app/platform square surfaces;
- possible Apple touch icon.

This must be derived from the wordmark system, not treated as a new standalone logo concept.

It should be evaluated at actual small sizes before approval.

Potential approaches to evaluate, not yet selected:

A. a very short typographic crop/letterform derived from the current wordmark;
B. a stacked/compact treatment of a distinctive part of `Portfilo`;
C. another reduced typographic construction only if it remains recognizably tied to the primary wordmark.

Do not select a `P` monogram automatically merely because initials are common. The compact form needs its own visual test and human approval.

### Tier 3 — Favicon

Purpose:

- browser tabs;
- search-result favicon;
- very small technical surfaces.

The favicon may be an even simpler derivative of Tier 2 if necessary for legibility below `32 px`.

Required properties:

- square;
- stable URL;
- recognizable at `16`, `32`, and `48+ px`;
- simple geometry;
- sufficient contrast on common light browser UI;
- no tiny internal detail;
- implementation via `SiteHead.astro`.

### Tier 4 — Default social preview

Purpose:

- publication-level Open Graph/Twitter fallback;
- pages without story-specific approved artwork.

Recommended direction:

- typography-led;
- Portfilo wordmark dominant;
- restrained paper/ink/blue/red palette;
- no generic generated editorial image;
- no permanent tagline required;
- should still read clearly when shown as a small link preview.

The default social asset should look like Portfilo even when separated from the website UI.

## Candidate decision directions

### Direction A — Wordmark-first / minimal derivatives

Primary wordmark remains exactly the identity center.

Compact assets use the smallest typographic derivative that remains legible.

Social preview is wordmark-led and typographic.

Strengths:

- strongest continuity with the current site;
- least brand proliferation;
- closest to the approved `typography carries the brand` principle;
- easiest to keep coherent across site/email/social.

Risk:

- the compact mark requires careful testing so it does not feel like a newly invented logo.

### Direction B — Wordmark + more assertive compact mark

Keep the wordmark primary but deliberately develop a stronger square secondary mark for avatar/favicon use.

Strengths:

- more recognizable on social platforms and tiny surfaces;
- clearer asset hierarchy.

Risk:

- easy to accidentally reopen the logo problem the project already chose to avoid;
- a secondary mark can begin competing with the wordmark.

## Recommendation

Choose **Direction A — Wordmark-first / minimal derivatives** for v0.

Reason:

Portfilo already has a functioning, distinctive typographic identity in production code. The actual product gap is not `we need a better logo`; it is `we need to operationalize the existing wordmark across the surfaces where a full wordmark cannot fit`.

The next design exercise should therefore be narrow:

1. consolidate the current wordmark into a reusable brand primitive;
2. explore 2-3 compact typographic derivatives for avatar/favicon use;
3. test them at real small sizes;
4. select one human-approved compact form;
5. create monochrome/light-dark variants;
6. redesign the default `1200 x 630` social preview around the approved wordmark system;
7. only then implement favicon/avatar/social assets.

## Gate

Research complete: `YES`

Recommended direction: `A — WORDMARK-FIRST / MINIMAL DERIVATIVES`

Human direction approval: `NO`

Brand asset implementation authorized: `NO`
