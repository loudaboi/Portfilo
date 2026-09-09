# Portfilo Document Status

_Last updated: 2026-09-09_

This file prevents historical implementation notes and research records from being mistaken for current authority.

## Authority order

When documents disagree, use:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. this status map
4. `docs/V0_SCOPE.md`
5. the canonical standard for the subject
6. current runtime source
7. historical research/decision records for provenance only

`docs/PROJECT_STATE.md` owns the current phase and exact next task. Do not create a competing execution plan.

## Current canonical documents

### Contributor and decision control

- `AGENTS.md`
- `skills/portfilo-anti-slop/SKILL.md`

### Product and implementation state

- `docs/PROJECT_STATE.md` — current phase, validation state, and exact next task.
- `docs/V0_SCOPE.md` — current v0 product/technical boundaries.
- `docs/DESIGN_DIRECTION.md` — current visual/responsive contract.
- `README.md` — current repository overview.
- `BACKLOG.md` — ideas outside current scope only.

### Editorial, research, writing, packaging, publishing

Current:

- `docs/CONTENT_PLANNING.md`
- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/EDITORIAL_PACKAGING_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `docs/PORTFILO_TEST_STANDARD.md`

`docs/EDITORIAL_PACKAGING_STANDARD.md` remains canonical v1 authority for headline/dek/metadata packaging until the founder approves the next refinement.

When an older clause conflicts with the current route model, taxonomy, author policy, newsletter acquisition model, responsive contract, or current packaging architecture, `PROJECT_STATE`, `V0_SCOPE`, the relevant current standard, and runtime source take precedence.

### Design and imagery

Current:

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`

The current approved editorial source asset is under:

`src/assets/editorial/homepage-feature-16x9.png`

The old unprocessed `public/images/homepage-feature-16x9.png` path is retired.

Astro's native image pipeline is the current runtime authority for editorial image rendering. Whether published News/Stories should normally require an image is intentionally still open and belongs to the next Editorial Packaging Standard Refinement gate.

### Email and deployment

Current:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

Important boundary:

- website-facing acquisition language uses `Portfilo newsletter`, not `Portfilo Brief`;
- `docs/BEEHIIV_EMAIL_SETUP.md` may still record provider-side historical `Portfilo Brief` naming;
- repository edits do not imply provider-side beehiiv settings were changed;
- any provider-side naming migration is a separate operational action.

Cloudflare production behavior was verified by the founder on 2026-09-09:

- Production branch: `main`
- automatic deployments: enabled
- `build/portfilo-v0` remains the preview/test working branch

## Current runtime authority

### Header

`src/components/SiteHeader.astro`

Current masthead:

`Portfilo | News | Stories`

There is no persistent Subscribe CTA and no ClientRouter/persisted-header navigation machinery.

### Public route set

Current editorial/institutional routes:

- `/`
- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`

Retired routes:

- `/subscribe` -> `/#newsletter` via Cloudflare `_redirects`
- `/about` -> `/` via Cloudflare `_redirects`
- `/series/[slug]` removed from v0

### Newsletter

`src/components/NewsletterSignup.astro` is the canonical signup UI/behavior.

Every visible form submits through:

`/api/subscribe`

The homepage `/#newsletter` section is the direct signup destination.

### Archives

`src/components/EditorialArchive.astro` owns both News and Stories archive presentation.

Current contract includes:

- one 84rem shared shell;
- explicit image and image-less lead/supporting states;
- contextual acquisition;
- supporting archive imagery without repeated blue top rules;
- laptop/tablet preservation of the desktop-family composition while viable;
- phone as the primary structural simplification point.

### Articles

`src/components/EditorialArticle.astro` owns News and Stories article presentation.

Current contract includes:

- centered classification/headline/dek package;
- no visible individual author/byline;
- Portfilo Organization as structured author/publisher identity;
- optional 54rem 16:9 primary hero with thin blue top rule;
- 41.5rem reading measure;
- News using Instrument Sans reading mode;
- Stories using Source Serif 4;
- optional Stories in-page section rail when enough real `h2` sections exist;
- methodology/corrections preserved.

### Shared foundation

`src/styles/global.css` owns the shared font loading, palette, shell variables, responsive gutter, base box sizing/body/link/focus/skip-link behavior.

Core publication pages should not recreate competing root palettes, font-face declarations, or shell definitions.

### Responsive contract

Acceptance widths:

`1440 / 1366 / 1024 / 768 / 390 / 375 / 320`

Interpretation:

- desktop/laptop/tablet form one family;
- 1024 keeps compact-desktop structure and deliberate side breathing room;
- 768 uses selective reflow rather than blanket mobile stacking;
- phone is the main structural simplification point;
- stacked forms remain measure-constrained until narrow phone widths.

## Historical/provenance records

Files under `research/` and older implementation/copy records remain useful for provenance only unless explicitly promoted by a current canonical document.

Rejected or superseded designs/copy do not become precedent merely because they remain in Git history or research files.

## Current validation status

The corrected and performance-optimized v0 release is founder-approved and production-verified.

Do not use older pending-validation language to reopen the closed release. `docs/PROJECT_STATE.md` now owns the next gate: Editorial Packaging Standard Refinement.
