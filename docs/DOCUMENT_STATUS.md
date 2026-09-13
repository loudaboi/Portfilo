# Portfilo Document Status

_Last updated: 2026-09-14_

This file distinguishes current v1 authority from historical v0 publication material.

## Authority order

When documents disagree, use:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. this status map
4. `docs/V1_SCOPE.md`
5. the task-specific current standard or approved decision record
6. current runtime source
7. historical records for provenance only

`docs/PROJECT_STATE.md` owns the current phase and exact next task.

## Current v1 authority

### Contributor and decision control

- `AGENTS.md`
- `skills/portfilo-anti-slop/SKILL.md`

### Product and state

- `docs/PROJECT_STATE.md` - current phase, active branch, next task, approval boundary.
- `docs/V1_SCOPE.md` - approved v1 company/product/technical boundaries.
- `README.md` - repository overview.
- `BACKLOG.md` - future ideas only unless explicitly promoted.

### Current editorial integrity rules carried forward

The v1 repositioning does not lower editorial standards.

These remain usable where applicable to Hustle, Journal, newsletter editorial work, and case-study factual claims:

- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/COPY_STYLE.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`

Other publication-specific editorial documents may contain useful methods, but are not automatically v1 product authority.

## Approved v1 product model

Primary studio architecture:

`Work / Services / Hustle / Journal / Contact`

Newsletter:

- important owned-distribution and potential monetization layer;
- may appear on the homepage and editorial surfaces;
- does not require a primary-navigation destination;
- old v0 cadence/acquisition copy is not automatically carried forward.

Editorial:

- `News` is retired as a primary v1 product;
- `Why` is retired as a public section name and evolves into `Journal`;
- `Hustle` remains and broadens to founders, CTOs, engineers, operators, independent builders, and other relevant people building/operating businesses and technology.

Commercial:

- Portfilo is a software design and development studio;
- the studio focuses on solving business problems through custom software, automation, and practical AI;
- services should be framed around real business needs rather than a generic technology menu.

## Design status

### Historical v0 design authority

`docs/DESIGN_DIRECTION.md` describes the released publication-era system and is now **historical for v1**.

It may be consulted for provenance or reusable implementation details, but it does not constrain v1 visual decisions.

### Current v1 visual brief

Current approved direction for research:

- dark / near-black;
- graphite / silver / cold white;
- minimal color;
- alive and technically excellent;
- expensive and controlled;
- high visual ambition with low visual noise;
- sophisticated motion;
- strong Work presentation;
- no generic SaaS/agency gimmicks.

No final typography, palette values, animation library, motion grammar, page composition, or component system is approved yet.

## Historical v0 publication authority

The following remain historical unless explicitly promoted into v1:

- `docs/V0_SCOPE.md`
- publication-era sections `News / Why / Hustle` as a combined product model;
- `docs/EDITORIAL_INTELLIGENCE.md`
- `docs/EDITORIAL_SOURCE_MAP.md`
- `docs/NEWS_SCANNER_PROMPT.md`
- publication-era `docs/CONTENT_PLANNING.md` assumptions;
- publication-era `docs/EDITORIAL_STANDARD.md` section taxonomy;
- `docs/EDITORIAL_PACKAGING_STANDARD.md` where it assumes News/Why/Hustle publication packaging;
- `docs/PUBLISHING_STANDARD.md` where it assumes v0 section/schema behavior;
- old newsletter cadence/acquisition copy;
- old homepage/masthead composition.

Do not delete these merely because they are historical. Git history and retained documents preserve useful provenance while migration decisions are made.

## Runtime status

The runtime currently inherited on `build/portfilo-v1` is still the v0 publication implementation.

That is expected.

Current runtime structures such as:

- `/news`
- `/why`
- `/hustle`
- the old homepage;
- the old masthead;
- the current `articles` schema;
- publication-specific archive/article components

do not become v1 product authority merely because they still exist in source.

Runtime migration begins only after v1 design direction and information architecture are approved.

## Branches

Active v1 working branch:

`build/portfilo-v1`

Historical v0 working branch:

`build/portfilo-v0`

Production/release boundary:

`main`

## Validation

The v1 authority reset is documentation/workspace work.

No new v1 visual/runtime behavior has been validated or released.

Prior v0 CI and production verification remain valid only for the released v0 implementation.

## Exact next decision gate

`V1 DESIGN DIRECTION RESEARCH AND DECISION`

No implementation is authorized by that gate until the founder approves a specific design direction and subsequent implementation plan.
