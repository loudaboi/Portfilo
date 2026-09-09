# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REMEDIATION IMPLEMENTED — VALIDATION PENDING**

The founder-approved full-site remediation pass has been implemented on `build/portfilo-v0` at source level.

The latest runtime/asset-changing commit before documentation reconciliation is:

`281153849d737206ca0602aa1e52d2ab9ec5d428` — `Remove retired subscribe campaign image`

Documentation-only reconciliation commits follow that runtime state on the same working branch.

The last previously fully validated runtime remains:

`c63d5f0fd295acca12fbf420ed9ebf5b2e591440` — `Reset subscribe page to responsive editorial layout`

That older validation does **not** validate the new remediation implementation.

No deployment, merge to `main`, or release is authorized.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard/approved decision relevant to the task
6. current source code for actual runtime behavior

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Intended Cloudflare branch model:

- `build/portfilo-v0` -> preview/test
- `main` -> production

The actual Cloudflare Pages production-branch setting still requires external verification/correction before release readiness.

## Approved product direction

- Portfilo is a business and technology publication.
- News is the current/day-to-day editorial layer.
- Stories is the deeper editorial layer.
- Public topics: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0.
- Newsletter acquisition remains important but must not dominate the publication identity.
- Approved newsletter promise: latest news, a 7-minute read, three times per week.
- Exact send days/times remain open.
- `briefing` is rejected as website acquisition language.
- No individual public author/byline system is part of v0.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Current public route model

Keep:

- `/`
- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`
- `/robots.txt`
- `/api/subscribe`

Retired:

- `/subscribe` as a standalone page; Cloudflare redirect target is `/#newsletter`.
- `/about`; Cloudflare redirect target is `/`.
- public `/series/[slug]` presentation.

## Current implementation contract

### Shared foundation

`src/styles/global.css` now owns font loading, current palette, the 84rem shell variables, shared responsive gutter, base focus behavior, and other global foundations.

The shared shell gutter is designed to provide about 32px of breathing room at 1024px while remaining fluid at desktop/tablet/phone widths.

### Header

Final masthead:

`Portfilo | News | Stories`

The persistent Subscribe CTA, ClientRouter, header persistence, and custom route-state synchronization have been removed.

### Homepage

Current structure remains:

- top newsletter acquisition;
- Latest News strip when inventory exists;
- primary Feature + contextual blue rail;
- News section;
- shared footer acquisition and compact footer.

Real published News receives `/news/[slug]` links. Development-only synthetic News remains non-clickable and cannot create fake article routes.

Real secondary Story content now takes precedence over the synthetic development Story rail fallback.

### Newsletter forms

All visible newsletter forms continue to use `NewsletterSignup.astro` and `/api/subscribe`.

Forms are measure-constrained so tablet stacking does not produce uncontrolled full-width inputs.

The standalone `/subscribe` page has been removed. The homepage `/#newsletter` section is the direct signup destination.

### Responsive model

Acceptance widths:

`1440 / 1366 / 1024 / 768 / 390 / 375 / 320`

Approved interpretation:

- desktop, laptop, and tablet are one layout family;
- 1024 preserves compact-desktop structure with more side breathing room;
- 768 uses selective reflow instead of blanket mobile stacking;
- phone is the main structural simplification point;
- important typography scales progressively rather than waiting for one abrupt mobile breakpoint.

The homepage, shared archives, and footer acquisition now preserve multi-column structure through tablet widths where viable and stack near phone widths instead.

### Archives

`EditorialArchive.astro` remains the shared News/Stories archive system.

Current behavior:

- explicit image and image-less lead/supporting states;
- supporting archive images do **not** use repeated blue top rules;
- contextual acquisition remains;
- supporting layouts preserve desktop-family structure through tablet where viable.

### Articles

`EditorialArticle.astro` remains the shared News/Stories article system.

Current behavior:

- centered header package;
- no visible author/byline;
- content schema no longer contains an individual `author` field;
- Article structured data uses Portfilo Organization as author/publisher;
- no neutral divider between article header and hero;
- tighter deliberate header-to-image whitespace;
- primary article hero retains its thin blue top rule;
- 54rem header/hero geometry and 41.5rem reading measure retained;
- News remains sans reading mode;
- Stories remains serif reading mode;
- conditional Story `In this story` rail remains when at least three real `h2` sections exist;
- methodology/corrections remain supported;
- real article hero image now feeds article social/structured metadata when available.

### Institutional and utility pages

- Standards and Privacy now use the shared publication foundation rather than redeclaring a competing root/font system.
- `/confirmed` uses current `Portfilo newsletter` language and restrained shared utility styling.
- `/404` uses the same restrained utility family.

### Retired fixtures/assets

Removed:

- public Series route and Series fixture collection;
- obsolete `portfilo-*` architecture/order fixtures;
- old homepage source/background image variants;
- retired Subscribe campaign image.

The approved `public/images/homepage-feature-16x9.png` remains the canonical Feature/Story asset. It is still a large PNG and requires a separate binary optimization step if/when tooling permits without altering the approved visual.

### Node

`.node-version` pins Node `22.12.0` for the current Astro toolchain.

## Validation status

**NOT YET VALIDATED.**

No new `npm run check`, `npm run build`, or rendered cross-device QA has been recorded against this remediation state.

Do not reuse older PASS results as evidence for the current implementation.

## Exact next task

Perform the remediation validation gate without introducing new product/design changes:

1. verify current branch/HEAD;
2. run `npm run check`;
3. run `npm run build`;
4. run `npm run preview` and inspect the actual production inventory;
5. inspect DEV separately for synthetic News and the Story TOC stress case;
6. inspect at `1440 / 1366 / 1024 / 768 / 390 / 375 / 320`;
7. verify no horizontal overflow, broken type wrapping, giant tablet form fields, or premature stacking;
8. verify supporting News/Stories imagery has no blue top rule while primary Feature/article heroes retain approved treatment;
9. verify every distinct visible signup form handles validation/success/error correctly;
10. verify real News links route to `/news/[slug]`;
11. verify no public individual author appears and no individual author metadata remains in the runtime/content schema;
12. verify `/confirmed`, `/404`, Standards, Privacy, archives, homepage, and articles at the target widths;
13. verify production excludes drafts/DEV fixtures;
14. on an actual Cloudflare Pages deployment, verify `/subscribe` and `/about` redirects;
15. record only checks that actually ran.

If validation reveals a concrete defect, fix only that defect and re-run the affected checks.

## Release work not authorized

Do not perform without a separate approval:

- merge to `main`;
- production deployment/release;
- Cloudflare dashboard branch/domain changes;
- final-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send.
