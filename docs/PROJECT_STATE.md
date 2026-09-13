# Portfilo Project State

_Last updated: 2026-09-14_

## Current phase

**PORTFILO V1 REPOSITIONING / AUTHORITY RESET ACTIVE**

The founder has approved a material repositioning of Portfilo.

Portfilo is no longer being developed primarily as a business-and-technology publication. The v1 direction is a software design and development studio focused on solving real business problems through custom software, automation, and practical AI, with Hustle, Journal, and the newsletter acting as supporting editorial/distribution products.

The existing production site on `main` remains the released v0 publication until a separately approved v1 release replaces it.

## Active branch and release boundary

Active v1 working branch:

`build/portfilo-v1`

Historical v0 working branch:

`build/portfilo-v0`

Release boundary:

`main`

No merge to `main`, production deployment, custom-domain cutover, or v1 release is authorized by the current reset.

## Approved v1 product direction

Primary public architecture:

`Work / Services / Hustle / Journal / Contact`

Newsletter remains an important homepage/editorial acquisition and distribution layer, but does not need a primary-nav destination or standalone page.

News is retired as a primary v1 product.

Why is retired as a public section name and evolves into Journal.

Hustle remains and is broadened to people-led reporting about founders, CTOs, technical leaders, engineers, operators, independent builders, and other people materially involved in building or operating businesses and technology.

Hustle may be inspiring, but must remain substantive and reported rather than becoming generic motivation content.

## Approved visual-research brief

The old v0 publication design does not constrain v1.

The founder-approved target feeling is:

- alive;
- technically excellent;
- expensive;
- highly capable;
- confident without empty agency posturing.

Directional visual territory:

- dark / near-black foundation;
- graphite, silver, and cold-white material language;
- very limited color;
- strong typography;
- sharp, controlled geometry;
- sophisticated motion;
- Work as the primary visual showcase;
- low visual noise despite high visual ambition.

The old `docs/DESIGN_DIRECTION.md` is historical v0 authority and must not be treated as the v1 design contract.

No final v1 design system is approved yet.

## Technical direction

The current technical foundation remains the default because the new product does not justify a platform rewrite:

- Astro + TypeScript;
- static-first output;
- Content Collections where useful;
- custom CSS;
- semantic HTML;
- Cloudflare Pages;
- existing beehiiv integration where useful.

Motion may justify a dedicated animation library after research. GSAP is allowed for evaluation, but is not yet an approved dependency.

React, a database, authentication, CMS, WebGL/3D, and other major infrastructure remain unapproved unless a concrete v1 requirement establishes the need.

## Authority impact

Canonical v1 product authority is now:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V1_SCOPE.md`
5. task-specific current standards/decision records
6. runtime source

`docs/V0_SCOPE.md`, the old publication design direction, News systems, and other v0 publication-specific documents remain historical provenance unless `docs/DOCUMENT_STATUS.md` explicitly carries a rule forward.

## Current validation state

The v1 reset is documentation/workspace work only.

The existing v0 runtime was not redesigned or migrated by this reset.

Do not claim v1 runtime QA from prior v0 CI or production verification.

## Exact next task

**V1 DESIGN DIRECTION RESEARCH AND DECISION GATE**

Research strong current references across:

- software studios and product consultancies;
- creative technology studios;
- premium/luxury digital product sites where the material language is relevant;
- motion-heavy but usable sites;
- high-quality case-study systems;
- dark neutral/silver visual systems;
- typography and navigation patterns;
- mobile/responsive motion behavior;
- performance/accessibility implications of advanced motion.

The goal is not to copy references. Extract the structural and interaction patterns that create a premium, technically capable impression, then define a Portfilo-specific design direction.

Do not implement the new UI during the research gate.

Do not perform broad runtime cleanup before the approved v1 information architecture and design system determine what should be retained.

## Later migration work

After design direction and information architecture are approved:

- design the new homepage and core page system;
- define Work content architecture;
- migrate Why -> Journal where appropriate;
- preserve/reframe Hustle;
- retire News runtime and redirects deliberately;
- clean obsolete publication components, CSS, assets, content, and docs;
- update newsletter placement/product rules;
- validate motion, responsive behavior, accessibility, performance, metadata, redirects, and build output;
- release only after explicit approval.
