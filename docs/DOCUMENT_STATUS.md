# Portfilo Document Status

_Last updated: 2026-09-14_

This file distinguishes current v1 authority from historical v0 publication material.

## Authority order

When documents disagree, use:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. this status map
4. `docs/V1_SCOPE.md`
5. `docs/V1_DESIGN_DIRECTION.md` for current visual/interaction direction
6. the task-specific current standard or approved decision record
7. current runtime source
8. historical records for provenance only

`docs/PROJECT_STATE.md` owns the current phase and exact next task.

## Current v1 authority

### Contributor and decision control

- `AGENTS.md`
- `skills/portfilo-anti-slop/SKILL.md`

### Product and state

- `docs/PROJECT_STATE.md` - current phase, active branch, next task, approval boundary.
- `docs/V1_SCOPE.md` - approved v1 company/product/technical boundaries.
- `docs/V1_DESIGN_DIRECTION.md` - founder-approved Obsidian Precision design direction.
- `README.md` - repository overview.
- `BACKLOG.md` - future ideas only unless explicitly promoted.

### Research provenance

- `research/design/v1-design-direction-research.md` - reference corpus, candidate directions, tradeoffs, technical implications, and rationale behind the approved design direction. Research supports the decision but does not override the canonical design-direction document.

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

- Portfilo's internal category is a software design and development studio;
- the studio focuses on solving business problems through custom software, automation, and practical AI;
- this internal category phrase is not approved public positioning copy;
- services should be framed around real business needs rather than a generic technology menu.

## Design status

### Current v1 design authority

`docs/V1_DESIGN_DIRECTION.md`

Approved direction:

**Obsidian Precision**

Key rules:

- near-black / graphite / muted silver / cold-white territory;
- minimal persistent brand color;
- precision and project evidence over decorative spectacle;
- Work receives the strongest motion and visual expression;
- Services is quieter;
- Hustle introduces authentic human imagery and may retain natural color;
- Journal remains reading-first;
- motion is controlled and purposeful;
- silver is hierarchy/material, not literal chrome;
- no foundation-level WebGL/Three.js;
- current wordmark is tested in monochrome before redesign.

Still open:

- exact typography;
- exact palette values;
- navigation composition;
- homepage composition;
- spacing/grid tokens;
- detailed motion system;
- case-study structure;
- media framing;
- wordmark refinement;
- GSAP dependency approval.

### Historical v0 design authority

`docs/DESIGN_DIRECTION.md` describes the released publication-era system and is **historical for v1**.

It may be consulted for provenance or reusable implementation details, but it does not constrain v1 visual decisions.

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

Do not delete these merely because they are historical.

## Runtime status

The runtime currently inherited on `build/portfilo-v1` is still the v0 publication implementation.

That is expected.

Current runtime structures such as `/news`, `/why`, the old homepage/masthead, current article schema, and publication-specific archive/article components do not become v1 product authority merely because they still exist in source.

Runtime migration begins only after the v1 design system and information architecture are approved.

## Branches

Active v1 working branch:

`build/portfilo-v1`

Historical v0 working branch:

`build/portfilo-v0`

Production/release boundary:

`main`

## Validation

No new v1 runtime behavior has been implemented or validated.

Prior v0 CI and production verification remain valid only for the released v0 implementation.

## Exact next decision gate

`V1 DESIGN SYSTEM + INFORMATION ARCHITECTURE RESEARCH AND DECISION`

No production UI implementation is authorized by this gate.
