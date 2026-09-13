# Portfilo Project State

_Last updated: 2026-09-14_

## Current phase

**PORTFILO V1 DESIGN SYSTEM + INFORMATION ARCHITECTURE GATE ACTIVE**

The founder has approved the Portfilo v1 repositioning and the first canonical v1 design direction.

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

Newsletter remains an important homepage/editorial acquisition and distribution layer, but does not need a primary-nav destination or standalone page.

News is retired as a primary v1 product.

Why is retired as a public section name and evolves into Journal.

Hustle remains and is broadened to people-led reporting about founders, CTOs, technical leaders, engineers, operators, independent builders, and other people materially involved in building or operating businesses and technology.

Hustle may be inspiring, but must remain substantive and reported rather than becoming generic motivation content.

## Approved v1 design direction

Canonical authority:

`docs/V1_DESIGN_DIRECTION.md`

Founder-approved direction:

**Obsidian Precision**

Core principles:

- near-black / graphite / silver / cold-white system;
- minimal persistent brand color;
- precision over decoration;
- Work carries the strongest visual and motion expression;
- Services remains quieter and structured;
- Hustle brings authentic human imagery and may retain contextual color;
- Journal is reading-first and lower-motion;
- navigation remains direct and legible;
- motion feels fast, weighted, deliberate, and precise;
- silver is treated as tonal/material hierarchy, not chrome effects;
- no foundation-level WebGL/Three.js;
- existing wordmark is tested first in monochrome before any redesign decision.

Approved standard:

**High visual ambition. Low visual noise.**

Research provenance:

`research/design/v1-design-direction-research.md`

## Technical direction

The current technical foundation remains:

- Astro + TypeScript;
- static-first output;
- Content Collections where useful;
- custom CSS;
- semantic HTML;
- Cloudflare Pages;
- existing beehiiv integration where useful.

A dedicated motion library is likely justified. GSAP is the leading candidate, but dependency approval remains part of the later implementation-planning gate.

React, a database, authentication, CMS, WebGL/3D, and other major infrastructure remain unapproved unless a concrete v1 requirement establishes the need.

## Current validation state

The v1 product and design direction are documentation/decision work.

The inherited runtime is still the v0 publication implementation.

No v1 UI implementation or runtime QA has occurred yet.

## Exact next task

**V1 DESIGN SYSTEM + INFORMATION ARCHITECTURE RESEARCH AND DECISION GATE**

Resolve the concrete system required to design the site:

1. typography candidates and roles;
2. exact neutral palette and contrast hierarchy;
3. grid, shell, spacing, and geometry rules;
4. navigation composition and behavior;
5. homepage information hierarchy and pacing;
6. Work preview and case-study model;
7. Services page structure;
8. Hustle archive/article presentation;
9. Journal archive/article presentation;
10. newsletter placement;
11. contact/start-project flow;
12. motion grammar, timing families, and responsive/reduced-motion behavior;
13. media framing and project UI presentation;
14. current wordmark testing inside the selected system;
15. technical implications, including whether GSAP is justified.

This gate may use references, low-fidelity structural sketches, and design tokens/prototypes where useful.

Do not implement the production UI yet.

Do not perform broad v0 runtime cleanup yet.

After this gate is approved, create the runtime/content migration plan and then clean/restructure only what that plan requires.
