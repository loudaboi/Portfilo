# Portfilo Working Instructions

_Last updated: 2026-09-15_

These instructions apply to any AI or human contributor working in this repository.

## Authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V1_SCOPE.md`
5. `docs/V1_CREATIVE_DIRECTION.md`
6. `docs/V1_HOMEPAGE_POSITIONING.md`
7. `docs/V1_HOMEPAGE_COPY.md`
8. `DESIGN.md` for visual implementation work
9. the current task-specific decision record
10. current runtime source

The repository is the durable source of truth. Chat is a working session.

Superseded design documents may remain in the repository as historical evidence but have no current design authority.

## Approval scope

Approval advances only the gate explicitly awaiting approval.

Do not infer authorization for:

- final public copy from structural approval;
- publication from drafting approval;
- provider changes from code approval;
- merge to `main` from validation;
- deployment from merge readiness.

`main` remains the release boundary.

## Required skills

For nontrivial discretionary Portfilo decisions, read:

`skills/portfilo-anti-slop/SKILL.md`

For any consequential visual work, including layout, typography, motion, interaction, background/material, image treatment, identity application, prototype review, or frontend art direction, also read:

`skills/portfilo-visual-direction/SKILL.md`

The visual-direction skill is mandatory before visual invention or implementation. For current homepage work, `DESIGN.md` additionally requires browser-first iteration on the real Astro page. Do not substitute detached specimens, generated website screens, abstract diagrams, or conceptual naming for inspection of the real rendered page.

The old `skills/portfilo-v1-design/SKILL.md` contract is superseded and must not be used as current visual implementation authority.

A future implementation contract may be added only after the current hero direction and interaction prototype are founder-approved.

## Technical baseline

Current runtime foundation remains:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections where useful;
- custom CSS;
- semantic HTML;
- Cloudflare Pages;
- GSAP for approved motion;
- beehiiv behind the narrow newsletter proxy.

The current runtime also contains Instrument Sans Variable + IBM Plex Mono, but those typefaces are not locked for the redesign.

Do not add React, Tailwind, a database, auth, CMS, smooth-scroll infrastructure, WebGL/Three.js, or other major dependencies without a concrete approved requirement.

WebGL/canvas/shaders/Three.js are not categorically prohibited. They require a specific founder-approved concept that materially benefits from them.

## Product model

Primary public architecture:

`Work / Services / Hustle / Journal / Contact`

Newsletter is embedded distribution/acquisition.

News and Why are retired v0 product surfaces.

## Integrity

Do not fabricate:

- reporting;
- quotes;
- sources;
- statistics;
- screenshots;
- client outcomes;
- case-study metrics;
- testimonials;
- interviews;
- project evidence.

AI output has zero evidentiary authority.

Use the current research/writing/image standards for factual Journal, Hustle, newsletter, and Work claims.

## Public copy

The approved Problem-led software positioning and current homepage copy remain valid unless explicitly reopened.

Final service promises, newsletter promise/cadence, case-study claims, and other material public copy still require their own approval gates.

Do not silently turn temporary copy into final brand language.

## Design

**Responsive Identity is the current founder-approved creative direction.**

Read:

`docs/V1_CREATIVE_DIRECTION.md`

The previous Obsidian Precision direction, concrete design system, Phase 3C composition, and rendered homepage design are superseded/rejected.

Do not:

- continue polishing the rejected homepage as the new design;
- preserve the current wordmark geometry merely because it exists;
- preserve the current favicon/symbol merely because it exists;
- treat permanent black, oversized white sans-serif typography, thin rules, or gray hierarchy as Portfilo identity requirements;
- implement a new homepage before the identity/prototype gates are approved.

Current homepage visual work must happen in the real runtime first viewport. Keep changes bounded, inspect the rendered browser result, and do not expand below the hero or add motion until the static first viewport is founder-approved.

## Clean-cut v1 migration

The founder explicitly approved a clean v1 working tree.

For material that has no v1 responsibility, current evidence value, or real external dependency:

- remove it from the active v1 branch;
- do not preserve compatibility for hypothetical traffic;
- rely on Git history for historical recovery.

Before deleting, confirm the file is not still referenced by current runtime or current authority.

The rejected homepage may remain temporarily as runtime scaffolding while the replacement is designed. It must not be treated as release-ready.

## Validation

After runtime edits:

- run/check CI or equivalent install/check/build evidence;
- inspect obvious routing and dependency regressions;
- never claim a command passed unless it actually ran.

## Release

Do not merge to `main`, deploy, or cut over domains without explicit founder approval.
