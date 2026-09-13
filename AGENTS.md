# Portfilo Working Instructions

_Last updated: 2026-09-14_

These instructions apply to any AI or human contributor working in this repository.

## Authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V1_SCOPE.md`
5. `docs/V1_DESIGN_DIRECTION.md`
6. `docs/V1_DESIGN_SYSTEM.md`
7. the current task-specific decision record
8. current runtime source

The repository is the durable source of truth. Chat is a working session.

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

For v1 UI/runtime implementation, also read:

`skills/portfilo-v1-design/SKILL.md`

## Technical baseline

Unless current authority explicitly changes it:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections where useful;
- custom CSS;
- semantic HTML;
- Cloudflare Pages;
- GSAP for approved motion;
- local Instrument Sans Variable + IBM Plex Mono;
- beehiiv behind the narrow newsletter proxy.

Do not add React, Tailwind, a database, auth, CMS, WebGL/Three.js, smooth-scroll infrastructure, or other major dependencies without a concrete approved requirement.

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

Final positioning, service promises, newsletter promise/cadence, case-study claims, and other material public copy require their own approval gate.

Implementation may use literal functional labels and clearly temporary development copy where needed. Do not silently turn temporary copy into final brand language.

## Design

Obsidian Precision is locked.

Follow `docs/V1_DESIGN_SYSTEM.md` and `skills/portfilo-v1-design/SKILL.md`.

Do not introduce generic dark-SaaS styling, card soup, glow, glass, gradients, decorative 3D, fake terminals, scroll hijacking, or motion without a clear hierarchy/state/product job.

## Clean-cut v1 migration

The founder explicitly approved a clean v1 working tree.

For material that has no v1 responsibility, current evidence value, or real external dependency:

- remove it from the active v1 branch;
- do not preserve compatibility for hypothetical traffic;
- rely on Git history for historical recovery.

Before deleting, confirm the file is not still referenced by current runtime or current authority.

Do not delete the existing homepage until its approved Phase 3 replacement is ready at the same route.

## Validation

After runtime edits:

- run/check CI or equivalent install/check/build evidence;
- inspect obvious routing and dependency regressions;
- never claim a command passed unless it actually ran.

## Release

Do not merge to `main`, deploy, or cut over domains without explicit founder approval.
