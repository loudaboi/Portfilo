# Portfilo Project State

_Last updated: 2026-09-14_

## Current phase

**PORTFILO V1 RUNTIME + CONTENT MIGRATION PLANNING ACTIVE**

The founder has approved:

- the Portfilo v1 studio repositioning;
- the Obsidian Precision design direction;
- the concrete v1 design system and information architecture.

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

## Approved design authority

Direction:

`docs/V1_DESIGN_DIRECTION.md`

Concrete system:

`docs/V1_DESIGN_SYSTEM.md`

Research provenance:

- `research/design/v1-design-direction-research.md`
- `research/design/v1-design-system-ia-research.md`

Approved system summary:

- Instrument Sans + IBM Plex Mono;
- Obsidian / graphite / silver / cold-white neutral system;
- 12 / 8 / 4 responsive grid;
- sharp geometry and thin structural rules;
- direct navigation;
- homepage hierarchy: Hero -> Work -> Services -> Hustle -> Journal -> Newsletter -> Contact;
- Work carries the strongest motion/visual expression;
- Services remains quieter;
- Hustle supplies human imagery/context;
- Journal remains reading-first;
- real software interfaces are the preferred Work media;
- existing wordmark is retained for initial monochrome testing;
- GSAP is approved for v1 motion;
- native scrolling remains the default;
- no foundation WebGL/Three.js.

Approved standard:

**High visual ambition. Low visual noise.**

## Current runtime state

The inherited runtime is still the v0 publication implementation.

That is expected.

No v1 production UI implementation has begun yet.

Prior v0 CI/production verification does not count as v1 runtime validation.

## Exact next task

**TARGETED V0 -> V1 RUNTIME + CONTENT MIGRATION PLAN**

Before editing the production UI, inspect the inherited runtime and produce a concrete migration plan covering:

1. current route inventory;
2. component/layout inventory;
3. global CSS/tokens/fonts/assets;
4. content collections and schema;
5. existing Why content -> Journal migration;
6. existing Hustle state/content preservation;
7. News content/infrastructure retirement;
8. new Work content architecture;
9. Services implementation model;
10. Contact route/form approach;
11. newsletter component/API reuse;
12. header/footer replacement;
13. redirects and legacy URL behavior;
14. metadata/sitemap/robots implications;
15. dependency changes, including GSAP;
16. assets/media that can be reused;
17. obsolete code/docs/assets to remove only after replacements exist;
18. phased implementation order;
19. validation plan.

The migration plan must distinguish:

- keep as-is;
- adapt;
- replace;
- retire;
- defer.

Do not perform broad deletion or UI implementation during the planning gate.

After founder approval of the migration plan, targeted cleanup/restructuring and v1 foundation implementation may begin.
