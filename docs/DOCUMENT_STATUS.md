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

- `docs/PROJECT_STATE.md` — current phase, validation state, and next task.
- `docs/V0_SCOPE.md` — current v0 product/technical boundaries.
- `docs/DESIGN_DIRECTION.md` — current visual/responsive contract.
- `README.md` — current repository overview.
- `BACKLOG.md` — ideas outside current scope only.

### Editorial, research, writing, publishing

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

When an older clause in one of these documents conflicts with the current route model, taxonomy, author policy, newsletter acquisition model, or responsive contract, `PROJECT_STATE`, `V0_SCOPE`, and current source take precedence until that historical clause is separately cleaned.

### Design and imagery

Current:

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`

The current canonical homepage/Story asset is:

`public/images/homepage-feature-16x9.png`

Retired image assets removed from the current tree include the old homepage source/background variants and the old Subscribe campaign image. Git history retains provenance.

### Email and deployment

Current:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

Important boundary:

- website-facing acquisition language uses `Portfilo newsletter`, not `Portfilo Brief`;
- `docs/BEEHIIV_EMAIL_SETUP.md` still records the existing provider-side beehiiv template/confirmation configuration, including its historical operational `Portfilo Brief` naming;
- repository edits do not imply that provider-side beehiiv copy has been changed;
- any provider-side naming migration is a separate operational action.

Cloudflare intent is now `build/portfilo-v0` for preview/test and `main` for production. The external Pages production-branch setting still requires dashboard verification/correction before release.

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

Current contract:

- one 84rem shared shell;
- explicit image and image-less lead/supporting states;
- contextual acquisition;
- supporting archive imagery has no repeated blue top rule;
- laptop/tablet preserve desktop-family composition while viable;
- phone performs the major single-column simplification.

### Articles

`src/components/EditorialArticle.astro` owns News and Stories article presentation.

Current contract:

- centered classification/headline/dek package;
- no visible individual author/byline;
- no individual author field in the content schema;
- Portfilo Organization used for Article structured author/publisher identity;
- optional 54rem 16:9 primary hero with thin blue top rule;
- no neutral divider between header and hero;
- deliberate tighter header-to-image spacing;
- 41.5rem reading measure;
- News uses Instrument Sans reading mode;
- Stories use Source Serif 4;
- optional Stories in-page section rail when at least three real `h2` headings exist;
- methodology/corrections preserved.

### Shared foundation

`src/styles/global.css` owns:

- font loading;
- current palette;
- 84rem publication shell variables;
- shared responsive gutter;
- base box sizing/body/link/focus/skip-link behavior.

Core publication pages should not recreate competing root palettes, font-face declarations, or shell definitions.

### Responsive contract

Acceptance widths:

`1440 / 1366 / 1024 / 768 / 390 / 375 / 320`

Interpretation:

- desktop/laptop/tablet form one family;
- 1024 keeps compact-desktop structure and about 32px shell breathing room;
- 768 uses selective reflow rather than blanket mobile stacking;
- phone is the main structural simplification point;
- stacked forms remain measure-constrained until narrow phone widths.

## Historical/provenance records

Files under `research/` and older implementation/copy records remain useful for provenance only unless explicitly promoted by a current canonical document.

Examples include earlier homepage concepts, image-selection records, positioning exploration, copy candidates, old Subscribe campaign work, and prior Series/content-architecture fixtures.

Rejected or superseded designs/copy do not become precedent merely because they remain in Git history or research files.

## Current validation status

The current remediation implementation is newer than the last fully validated runtime.

Do not treat prior `npm run check`, `npm run build`, or founder visual approvals as validation of the current remediation state.

`docs/PROJECT_STATE.md` records the exact current validation gate.
