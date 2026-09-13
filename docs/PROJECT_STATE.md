# Portfilo Project State

_Last updated: 2026-09-14_

## Current phase

**PORTFILO V1 PHASE 0 + PHASE 1 FOUNDATION IMPLEMENTATION ACTIVE**

The founder has approved:

- the Portfilo v1 studio repositioning;
- the Obsidian Precision design direction;
- the concrete v1 design system and information architecture;
- the targeted v0 -> v1 runtime/content migration plan, with the public Standards page explicitly retired.

Portfilo is being developed primarily as a software design and development studio focused on solving real business problems through custom software, automation, and practical AI, with Hustle, Journal, and the newsletter acting as supporting editorial/distribution products.

"Software design and development studio" remains an internal category definition, not approved public-facing positioning copy.

The existing production site on `main` remains the released v0 publication until a separately approved v1 release replaces it.

## Active branch and release boundary

Active v1 working branch:

`build/portfilo-v1`

Historical v0 working branch:

`build/portfilo-v0`

Release boundary:

`main`

No merge to `main`, production deployment, custom-domain cutover, or v1 release is authorized.

## Approved v1 product direction

Primary public architecture:

`Work / Services / Hustle / Journal / Contact`

Newsletter remains an embedded acquisition/distribution layer rather than a primary-nav destination.

News is retired as a primary v1 product.

Why evolves into Journal.

Hustle remains and broadens to people-led reporting about founders, CTOs, technical leaders, engineers, operators, independent builders, and other relevant people.

The public `/standards` page is retired from v1. Relevant editorial-integrity rules remain internal repo authority.

## Approved design authority

Direction:

`docs/V1_DESIGN_DIRECTION.md`

Concrete system:

`docs/V1_DESIGN_SYSTEM.md`

Approved standard:

**High visual ambition. Low visual noise.**

## Approved migration authority

`research/migration/v1-runtime-content-migration-plan.md`

Key migration decisions:

- keep Astro/TypeScript/Cloudflare/beehiiv infrastructure;
- replace the homepage/header/footer rather than incrementally restyling v0;
- Why -> Journal with slug-preserving redirects;
- retire News as a public product while temporarily preserving article URLs as legacy noindex pages;
- preserve Hustle routes but rebuild their presentation;
- add a separate Work collection;
- keep Services static;
- create Contact with direct-email fallback before any form backend is approved;
- retire the public Standards route;
- clean obsolete files only after replacements exist.

## Current implementation authorization

Founder approval authorizes **Phase 0 + Phase 1 only**.

### Phase 0

- create `skills/portfilo-v1-design/SKILL.md`;
- record branch/HEAD;
- verify the inherited baseline with install/check/build evidence.

### Phase 1

Implement only the v1 foundation:

- GSAP dependency;
- variable Instrument Sans + IBM Plex Mono delivery;
- v1 global tokens and accessibility base;
- SiteHead adaptation;
- new SiteHeader;
- new SiteFooter;
- monochrome wordmark application;
- shared motion lifecycle/utilities;
- no page-specific spectacle.

Do not yet:

- replace the homepage content model;
- migrate Why -> Journal;
- create Work case-study claims;
- publish Hustle;
- add a contact-form provider;
- change beehiiv provider-side configuration;
- merge to `main`;
- deploy.

## Current validation state

No v1 production runtime changes have been validated yet.

Phase 0 must establish the baseline before Phase 1 runtime changes are considered validated.

## Exact next task

**EXECUTE AND VALIDATE PHASE 0 + PHASE 1 FOUNDATION**

After foundation validation, stop at the next approval gate before Phase 2 route/content migration.
