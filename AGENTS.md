# Portfilo Working Instructions

_Last updated: 2026-09-14_

These instructions apply to any AI or human contributor working in this repository.

## 1. Repository authority

The repository is the durable source of truth. Chat is a working session, not project memory.

Read current authority in this order:

1. `AGENTS.md` — contributor, approval, and execution rules;
2. `docs/PROJECT_STATE.md` — current phase, validated state, and exact next task;
3. `docs/DOCUMENT_STATUS.md` — current vs historical/superseded document map;
4. `docs/V1_SCOPE.md` — current v1 product boundaries;
5. the canonical standard and approved decision record relevant to the task;
6. current source code for actual runtime behavior.

Historical v0 files remain provenance, not current authority, unless `docs/DOCUMENT_STATUS.md` explicitly carries a rule forward.

Do not create a second execution plan, roadmap, phase-state, or competing source of truth. If the sequence changes, update `docs/PROJECT_STATE.md` and the status map.

## 2. Approval scope

Human approval applies only to the artifact, decision, or gate explicitly awaiting approval.

A short response such as `I approve`, `yes`, or `go ahead` advances only that immediately pending gate unless the message explicitly authorizes additional named actions.

Do not infer authorization for implementation from research approval, publication from drafting approval, deployment from local validation, or merge to `main` from preview readiness.

`main` remains the release boundary.

## 3. Mandatory anti-slop decision gate

Before the first nontrivial discretionary Portfilo recommendation in a task or conversation, read and apply:

`skills/portfilo-anti-slop/SKILL.md`

Apply it again whenever the decision job changes materially.

This includes product direction, information architecture, homepage structure, positioning, naming, services, Work presentation, editorial structure, newsletter product, design direction, motion, imagery, and other public-facing choices.

Do not generate the answer first and rationalize it afterward.

## 4. Current technical architecture

Unless `docs/PROJECT_STATE.md` records an explicitly approved change:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections where useful;
- local content where appropriate;
- custom CSS;
- semantic HTML;
- no frontend framework by default;
- no database;
- no authentication;
- no custom CMS;
- Cloudflare Pages;
- existing narrow beehiiv subscription proxy may remain while useful.

V1 may legitimately require a motion library. Evaluate one only when the design system establishes a real sequencing/interaction need and the dependency is simpler and more maintainable than bespoke infrastructure.

Do not add React, a database, authentication, WebGL/3D, or other major infrastructure for hypothetical scale or visual novelty.

Before adding any dependency, establish the requirement, why the current stack cannot meet it cleanly, maintenance/runtime cost, and reversibility.

## 5. Editorial, research, and case-study integrity

Do not fabricate journalism, quotes, interviews, statistics, sources, screenshots, client outcomes, documents, metrics, or findings.

AI output has zero evidentiary authority.

For Hustle, Journal, newsletter editorial work, or factual Work case studies, use the applicable research/writing standards identified as current in `docs/DOCUMENT_STATUS.md`.

Prefer primary sources, preserve contradictions and caveats, distinguish fact from inference, and do not imply client or business outcomes that cannot be supported.

## 6. Writing and public copy

AI output has zero automatic stylistic, structural, or institutional authority.

For significant public copy, apply the anti-slop gate and current copy/writing standards.

Do not jump directly from strategy to polished homepage positioning, service promises, case-study claims, or newsletter promises. Establish the communication job, approved claims, reference patterns, and message architecture first.

Existing v0 copy is not precedent merely because it is committed or deployed.

## 7. Design, motion, and imagery

V1 design authority is defined by `docs/PROJECT_STATE.md`, `docs/V1_SCOPE.md`, and the future approved v1 design-direction record.

The old publication-era `docs/DESIGN_DIRECTION.md` is historical for v1.

Do not default to generic SaaS layout, card soup, gradients, glassmorphism, glow, rounded-everything UI, fake terminal interfaces, meaningless marquees, decorative 3D, scroll hijacking, or generic business/AI imagery.

High visual ambition is allowed. Motion must reinforce control, hierarchy, product understanding, or technical craft rather than exist as decoration.

Mobile, reduced motion, accessibility, and performance are first-class constraints.

Generated editorial imagery is illustration, not documentary evidence.

## 8. Implementation discipline

Before editing runtime code:

- verify the current branch and HEAD;
- read the current phase and exact task;
- inspect nearby implementation;
- identify locked decisions;
- modify only what the task requires.

An approved design/copy/product contract is not an invitation for implementation-time improvisation.

If a material choice is missing, surface the gap instead of inventing it.

After runtime edits, run the relevant checks, inspect affected behavior, fix regressions introduced by the change, and record validation accurately.

Never claim a check passed unless it actually ran.

## 9. Scope and migration discipline

Do not perform broad cleanup simply because a file belongs to v0.

During the v1 migration:

- preserve useful engineering;
- preserve valuable content/research;
- retire obsolete product assumptions deliberately;
- delete or redirect runtime surfaces only when the approved migration plan calls for it;
- avoid cleaning code that may shortly be replaced by the approved v1 architecture.

Do not implement items from `BACKLOG.md` unless explicitly promoted.

## 10. Chat handoffs

At a meaningful boundary:

1. commit stable work;
2. update `docs/PROJECT_STATE.md` if current phase/next task changed;
3. update `docs/DOCUMENT_STATUS.md` when authority changed;
4. record unresolved issues and required assets;
5. provide a handoff prompt that names the exact next task and approval boundary.

A new conversation should be able to continue from the repository without the previous transcript.

## 11. Definition of done

A task is done only when:

- the requested job is actually complete;
- scope did not silently expand;
- discretionary decisions passed the evidence/anti-slop gate;
- relevant validation actually ran;
- obvious regressions were checked;
- documentation/state is synchronized when necessary;
- the next gate is explicit;
- no publication, deployment, send, or release boundary was crossed without approval.
