# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**WEBSITE / PRODUCT REMEDIATION IMPLEMENTED — RENDERED QA PASSED / FUNCTIONAL QA PENDING**

The founder-approved full-site remediation pass has been implemented on `build/portfilo-v0` at source level.

The latest runtime-changing commit is:

`0ef0fad49b7eddbcc6a1de0d7808944143ee689d` — `Remove stale blue rule from homepage News image`

This narrow cleanup removed only the stale blue top rule from the homepage News image treatment. The primary homepage Feature and primary article hero blue rules remain intact.

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

The homepage News lead image now follows the approved supporting-image treatment and does not carry a repeated blue top rule. The primary homepage Feature retains its approved blue rule.

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

The founder has visually accepted the homepage responsive behavior across desktop, laptop, tablet, and phone. The 84rem shell behavior at 1440, including approximately 48px side margins, is intentional and accepted. 1024 compact-desktop spacing and 768 tablet composition are accepted. Homepage behavior at 390 and lower was founder-inspected and accepted. The Latest News ticker intentionally keeps a stable compact utility scale through desktop/laptop/tablet widths rather than shrinking with editorial headline typography.

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

**PRIOR TECHNICAL PASS / RENDERED ROUTE PASS / NARROW FIX RE-VALIDATION + FUNCTIONAL QA PENDING.**

Founder-reported local validation on 2026-09-09 against the remediation branch before the final one-line homepage News image cleanup:

- `npm run check`: **PASS** — 23 files, 0 errors, 0 warnings, 0 hints;
- `npm run build`: **PASS** — Astro static build completed successfully;
- production build generated 8 pages: `/`, `/404`, `/confirmed`, `/news`, `/privacy`, `/standards`, `/stories`, and the published Story route;
- removed `/subscribe`, `/about`, and Series pages were not generated by the production build.

Because commit `0ef0fad49b7eddbcc6a1de0d7808944143ee689d` changes runtime CSS, those technical PASS results should not be represented as post-fix validation until the affected checks are re-run.

Rendered homepage QA before the final one-line cleanup:

- 1440 desktop shell behavior: **FOUNDER ACCEPTED**;
- 1024 compact-desktop spacing: **FOUNDER ACCEPTED**;
- 768 tablet spacing/composition: **FOUNDER ACCEPTED**;
- 390 and lower phone behavior: **FOUNDER ACCEPTED**;
- ticker stable utility sizing through desktop/laptop/tablet: **FOUNDER ACCEPTED**.

Rendered route QA:

- `/news`: **FOUNDER ACCEPTED**;
- `/stories`: **FOUNDER ACCEPTED**;
- representative Story article: **FOUNDER ACCEPTED**;
- `/standards`: **FOUNDER ACCEPTED**;
- `/privacy`: **FOUNDER ACCEPTED**;
- `/confirmed`: **FOUNDER ACCEPTED**;
- `/404`: **FOUNDER ACCEPTED**;
- responsive editorial typography behavior was technically reviewed in source and founder accepted the rendered result.

The previously known homepage News image blue-rule defect is now **IMPLEMENTED / FIXED IN SOURCE**, pending the narrow post-fix validation run.

Do not treat the site as release-ready until the narrow re-validation and remaining functional/deployment QA are resolved.

## Exact next task

Complete the remediation validation gate without introducing new product/design changes:

1. pull the latest `build/portfilo-v0` commit locally and re-run `npm run check` and `npm run build` after the one-line homepage News image cleanup;
2. visually confirm the homepage News image no longer has the blue top rule while the Feature/article hero rules remain intact;
3. verify every distinct visible signup form handles validation/success/error correctly through the shared `/api/subscribe` path;
4. verify production excludes drafts/DEV fixtures and DEV-only synthetic News remains non-clickable;
5. verify real News links route to `/news/[slug]` when real News inventory exists;
6. verify no public individual author appears and no individual author metadata remains in the runtime/content schema;
7. on an actual Cloudflare Pages deployment, verify `/subscribe` -> `/#newsletter` and `/about` -> `/` redirects;
8. verify the actual Cloudflare production-branch setting is aligned with the intended `main` production boundary before release;
9. record only checks that actually ran.

If validation reveals a concrete defect, fix only that defect and re-run the affected checks.

## Release work not authorized

Do not perform without a separate approval:

- merge to `main`;
- production deployment/release;
- Cloudflare dashboard branch/domain changes;
- final-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send.
