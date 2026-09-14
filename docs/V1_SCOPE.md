# Portfilo v1 Scope

_Last updated: 2026-09-14_

## Objective

Reposition Portfilo from a business-and-technology publication into a software design and development studio with a supporting editorial platform.

The studio is the primary product. Editorial exists to deepen Portfilo's understanding of businesses and technology, build audience and trust, and create durable distribution. It must not obscure the commercial product.

## Approved company direction

Portfilo is a software design and development studio focused on solving real business problems through custom software, automation, and practical AI.

This is an internal product definition, not approved homepage copy.

Portfilo should compete on understanding business problems and designing the right software response, not on selling a generic menu of technologies.

Current capability direction:

- custom business software;
- workflow automation;
- practical AI integration;
- customer-facing digital products and web software where justified.

Website work remains possible when it solves a real business need, but Portfilo is not positioned primarily as a website agency.

## Primary public architecture

Approved primary navigation:

- Work
- Services
- Hustle
- Journal
- Contact

Newsletter remains an important owned-distribution and monetization layer, but does not require a primary navigation destination or standalone page.

The homepage should ultimately prioritize:

1. what Portfilo does;
2. proof through selected Work;
3. Services/capabilities;
4. selected Hustle;
5. selected Journal;
6. newsletter acquisition;
7. Contact.

Homepage composition is governed by `docs/V1_HOMEPAGE_PLAN.md`. The approved hierarchy is `Hero -> Selected Work -> Services -> Hustle -> Journal -> Newsletter -> Contact -> Footer`.

## Work

Work is the primary proof surface.

Case studies should emphasize:

- business context;
- problem;
- constraints;
- what Portfilo learned;
- solution;
- system/product built;
- measurable or clearly evidenced outcome where available.

Technology may be shown where useful, but the work should not be reduced to a stack showcase.

A dedicated `work` Content Collection and route foundation are now implemented. Case-study claims and media still require project-specific evidence and approval.

## Services

Services should be organized around business problems and outcomes rather than a commodity technology menu.

Current service categories are directional, not final public copy:

- Custom Software
- Automation
- AI Integration
- Digital Products

Do not create additional service categories merely to make the page feel complete.

## Hustle

Hustle remains a major Portfilo editorial property.

It is broadened beyond founders and business owners to include people materially involved in building, operating, or shaping businesses and technology, including:

- founders and cofounders;
- CTOs and technical leaders;
- engineers and independent builders;
- operators;
- designers or creators when their work materially fits the subject.

Hustle may be inspiring, but it must not become generic motivational content.

The editorial job is to examine what the subject actually built or operated, the constraints they faced, the decisions they made, how they learned or adapted, and what can be established from their experience.

A subject's disability, background, identity, or personal circumstances may be relevant when they materially shaped the work or path, but should not automatically become the sole framing.

## Journal

Journal replaces Why as the primary general editorial/research destination.

Journal may include:

- software and business systems;
- AI implementation;
- automation;
- product and engineering;
- operations;
- case-derived lessons;
- original tests and experiments;
- durable business/technology analysis.

Journal should favor durable, useful work over commodity SEO content or generic trend commentary.

The existing Why inventory should be reviewed during migration. Useful work may be migrated; rejected or obsolete work has no authority merely because it exists.

## News

News is retired as a primary Portfilo product for v1.

The clean-cut migration is complete. News routes, News content, and News-specific runtime were removed from the active v1 branch. Git history is the archive.

## Newsletter

The newsletter remains strategically important as:

- owned distribution;
- audience relationship;
- editorial delivery;
- a possible future sponsorship/advertising surface;
- a channel that can support studio credibility and demand generation.

It should not dominate Portfilo's identity.

The existing beehiiv integration may be preserved if it remains the simplest valid infrastructure.

The previous three-times-per-week cadence is not automatically carried into v1. Cadence, format, and monetization require a later product decision.

## Visual direction

The previous v0 visual direction, "premium editorial restraint + digital immediacy," is retired as current authority for v1.

Approved directional intent for research:

- alive;
- technically excellent;
- expensive;
- high visual ambition with low visual noise;
- predominantly dark and neutral;
- silver / graphite / cold-white material language;
- minimal color;
- motion used as evidence of craft and control;
- strong project presentation;
- no generic SaaS or creative-agency gimmicks.

The finished v1 design direction and system are governed by `docs/V1_DESIGN_DIRECTION.md` and `docs/V1_DESIGN_SYSTEM.md`.

## Technical architecture

Preserve unless research or implementation proves a requirement to change:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections;
- local content where appropriate;
- custom CSS;
- semantic HTML;
- Cloudflare Pages;
- the existing narrow beehiiv subscription proxy if still useful;
- minimal framework surface.

GSAP is the approved v1 motion dependency. Native scrolling remains the default.

Do not add React, a database, authentication, CMS, 3D/WebGL, or other major infrastructure by default.

## Branch and release boundary

Active v1 working branch:

`build/portfilo-v1`

Release boundary:

`main`

The old `build/portfilo-v0` branch is retained as historical v0 working-state provenance.

No v1 merge to `main`, production deployment, or release is authorized by this scope reset.

## Migration principles

- preserve useful engineering;
- preserve strong editorial work and research where it still fits;
- retire obsolete product assumptions;
- do not preserve old UI merely because it exists;
- keep the active v1 working tree focused on current product responsibilities and evidence;
- use Git history as the archive instead of carrying obsolete runtime structures forward indefinitely.

## Current sequence

Completed: authority reset, design research, information architecture/design system, migration planning, clean-cut migration, foundation implementation, and route/content foundation.

Current: Phase 3 homepage rebuild.

Later: Work proof/case studies, remaining page/content refinement, and release QA.

`docs/PROJECT_STATE.md` owns the exact current task and approval gate.
