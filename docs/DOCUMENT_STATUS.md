# Portfilo Document Status

_Last updated: 2026-09-14_

This file distinguishes current v1 authority from historical v0 publication material.

## Authority order

When documents disagree, use:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. this status map
4. `docs/V1_SCOPE.md`
5. `docs/V1_DESIGN_DIRECTION.md`
6. `docs/V1_DESIGN_SYSTEM.md`
7. task-specific current standards/approved decisions
8. current runtime source
9. historical provenance

`docs/PROJECT_STATE.md` owns the current phase and exact next task.

## Current v1 authority

### Contributor and decision control

- `AGENTS.md`
- `skills/portfilo-anti-slop/SKILL.md`
- `skills/portfilo-v1-design/SKILL.md`

### Product and state

- `docs/PROJECT_STATE.md`
- `docs/V1_SCOPE.md`
- `docs/V1_DESIGN_DIRECTION.md`
- `docs/V1_DESIGN_SYSTEM.md`
- `README.md`
- `BACKLOG.md`

### Migration authority

- `research/migration/v1-runtime-content-migration-plan.md` — founder-approved targeted v0 -> v1 migration plan.

### Research provenance

- `research/design/v1-design-direction-research.md`
- `research/design/v1-design-system-ia-research.md`

Research supports decisions but does not override canonical documents.

## Approved v1 product model

Primary architecture:

`Work / Services / Hustle / Journal / Contact`

Newsletter remains embedded distribution/acquisition.

News is retired as a primary product.

Why evolves into Journal.

Hustle remains and broadens to founders, CTOs, engineers, operators, independent builders, and other relevant people.

The public Standards page is retired from v1.

Portfilo's internal category is a software design and development studio focused on solving business problems through custom software, automation, and practical AI. This is not final public positioning copy.

## Current v1 design authority

### Direction

`docs/V1_DESIGN_DIRECTION.md`

Approved direction:

**Obsidian Precision**

### Concrete system

`docs/V1_DESIGN_SYSTEM.md`

Locked decisions include:

- Instrument Sans + IBM Plex Mono;
- Obsidian / graphite / muted-silver / cold-white tokens;
- 12 / 8 / 4 responsive grid;
- sharp geometry;
- direct desktop navigation and mobile MENU pattern;
- homepage IA;
- Work/Services/Hustle/Journal visual hierarchy;
- newsletter/contact placement;
- motion timing/easing families;
- software-media hierarchy;
- current wordmark geometry retained;
- GSAP approved;
- native scrolling;
- no foundation WebGL/Three.js.

Final public copy remains separate.

## Editorial integrity rules carried forward

Applicable internal standards include:

- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/COPY_STYLE.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`

These remain internal authority where applicable. A public `/standards` route is not required.

## Historical v0 authority

Historical unless explicitly promoted:

- `docs/V0_SCOPE.md`
- `docs/DESIGN_DIRECTION.md`
- News/Why/Hustle combined publication model;
- News scanner/source-map documents;
- publication-era content planning/taxonomy;
- old newsletter cadence/acquisition copy;
- old homepage/masthead composition;
- publication-specific runtime/schema decisions.

Do not delete historical documentation merely because it is superseded.

## Runtime status

Phase 0 + Phase 1 foundation implementation is complete.

Validated runtime foundation commit:

`b88550e5e705e6d02a9db60fc2777429f692c43c`

Validation:

- GitHub Actions run `34777682809`;
- dependency install PASS;
- Astro check PASS;
- build PASS.

Implemented foundation includes:

- GSAP;
- local variable Instrument Sans + IBM Plex Mono;
- v1 tokens/accessibility base;
- SiteHead adaptation;
- new v1 header/footer;
- cold-white wordmark application;
- shared motion lifecycle utility.

The inherited v0 homepage and editorial route/content model still exist and are intentionally awaiting Phase 2/Phase 3 migration.

## Branches

Active v1 working branch:

`build/portfilo-v1`

Historical v0 branch:

`build/portfilo-v0`

Release boundary:

`main`

## Exact next task

**PHASE 2 ROUTE + CONTENT FOUNDATION APPROVAL GATE**

Phase 2 is not authorized until founder approval.

No merge to `main` or deployment is authorized.
