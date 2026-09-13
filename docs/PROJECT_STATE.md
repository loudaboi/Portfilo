# Portfilo Project State

_Last updated: 2026-09-14_

## Current phase

**PORTFILO V1 PHASE 0 + PHASE 1 FOUNDATION COMPLETE / PHASE 2 APPROVAL GATE**

The founder has approved:

- the Portfilo v1 studio repositioning;
- the Obsidian Precision design direction;
- the concrete v1 design system and information architecture;
- the targeted v0 -> v1 runtime/content migration plan;
- retirement of the public Standards page;
- Phase 0 + Phase 1 foundation implementation.

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

Implementation skill:

`skills/portfilo-v1-design/SKILL.md`

Approved standard:

**High visual ambition. Low visual noise.**

## Approved migration authority

`research/migration/v1-runtime-content-migration-plan.md`

## Phase 0 completion

Completed:

- created the reusable v1 design implementation skill;
- verified the inherited runtime baseline through CI;
- baseline install/check/build passed before v1 runtime changes.

## Phase 1 completion

Foundation commit:

`b88550e5e705e6d02a9db60fc2777429f692c43c`

Implemented:

- GSAP dependency;
- locally bundled variable Instrument Sans;
- locally bundled IBM Plex Mono;
- Obsidian Precision global tokens;
- accessibility/reduced-motion base;
- SiteHead dark-system adaptation;
- v1 desktop/mobile SiteHeader;
- v1 SiteFooter with Standards removed;
- cold-white monochrome wordmark application;
- shared GSAP motion lifecycle utility.

No page-specific spectacle, homepage content redesign, route/content migration, Work claims, Hustle publication, contact backend, provider-side beehiiv change, merge, or deployment was included.

## Validation

GitHub Actions CI run:

`34777682809`

Result:

**PASS**

Passed:

- dependency installation;
- `astro check`;
- production build.

The v1 foundation is validated at commit `b88550e5e705e6d02a9db60fc2777429f692c43c`.

The current branch may contain later documentation-only commits; those do not change the validated runtime foundation.

## Exact next task

**PHASE 2 ROUTE + CONTENT FOUNDATION APPROVAL GATE**

If approved, Phase 2 may implement:

- Journal section/schema and Why -> Journal migration;
- `/journal` and `/journal/[slug]`;
- Hustle archive/article rebuild while preserving route names;
- temporary legacy News article handling and News archive retirement;
- redirect updates;
- Work collection schema and route foundation;
- Services route foundation;
- Contact route with direct-email fallback;
- removal of the public Standards route.

Do not begin Phase 3 homepage replacement until Phase 2 is implemented, validated, and separately approved.
