# Portfilo Working Instructions

_Last updated: 2026-09-07_

These instructions apply to any AI or human contributor working in this repository.

## 1. Repository authority

The repository is the durable source of truth. Chat is a working session, not project memory.

Read current authority in this order:

1. `AGENTS.md` — contributor, approval, and execution rules;
2. `docs/PROJECT_STATE.md` — current phase, validated state, and **exact next task**;
3. `docs/DOCUMENT_STATUS.md` — current vs historical/superseded document map;
4. `docs/V0_SCOPE.md` — current v0 product boundaries;
5. the canonical standard and approved decision record relevant to the task;
6. current source code for actual runtime behavior.

Research records support decisions. They do not become current-phase authority merely because they are newer than an old implementation note. `docs/DOCUMENT_STATUS.md` records which research decisions have been promoted.

Do **not** create a second execution-plan, roadmap, phase-state, or other file that competes with `docs/PROJECT_STATE.md` for the current phase or next task. If the sequence changes, update `docs/PROJECT_STATE.md` and the status map instead.

When a current founder decision conflicts with a canonical file, reconcile the repository before relying on chat memory in a later session.

## 2. Approval scope

Human approval applies only to the artifact, decision, or gate explicitly awaiting approval.

A short response such as `I approve`, `yes`, or `go ahead` advances only that immediately pending gate unless the message explicitly authorizes additional named actions.

Do not infer authorization for:

- drafting from research approval;
- implementation from copy or design research approval;
- image generation from image-brief approval;
- publication from drafting or QA approval;
- newsletter sending from template approval;
- taxonomy migration from homepage approval;
- deployment from local validation;
- merge to `main` from publication or release readiness.

Publishing and release remain separate explicit boundaries. `main` is the release boundary.

When uncertain, stop at the current gate.

## 3. Mandatory anti-slop decision gate

Before the first **nontrivial discretionary** Portfilo recommendation in a task or conversation, read and apply:

`skills/portfilo-anti-slop/SKILL.md`

Apply the skill again whenever the decision job or artifact class changes materially.

This includes significant decisions about:

- product direction;
- information architecture;
- homepage structure;
- public copy and positioning;
- newsletter product/format;
- naming;
- design direction;
- imagery and visual concepts;
- social creative systems;
- editorial packaging;
- other public-facing choices where several plausible answers exist.

The skill is not a reason to add ceremony to literal maintenance, factual retrieval, or narrow bug fixes. But implementation of an approved contract may not silently introduce new material choices.

Core rule:

> **Do not generate the answer first and rationalize it afterward.**

If the evidence is insufficient, leave the gate open instead of filling the space with plausible AI output.

## 4. Current technical architecture

For v0, unless `docs/PROJECT_STATE.md` records an explicitly approved change:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections;
- local Markdown;
- custom CSS;
- minimal client-side JavaScript;
- no frontend framework by default;
- no database;
- no authentication;
- no custom CMS;
- no custom newsletter backend beyond the existing narrow beehiiv subscription proxy in `functions/api/subscribe.js`;
- Cloudflare Pages deployment;
- beehiiv owns subscriber confirmation, storage, delivery, and unsubscribe handling.

Do not add a dependency, service, framework, database, abstraction, or runtime layer for hypothetical scale.

Before adding a dependency, establish:

- the current requirement;
- why the existing stack cannot meet it cleanly;
- maintenance/runtime cost;
- reversibility.

## 5. Editorial and research integrity

Do not fabricate journalism, quotes, interviews, statistics, sources, screenshots, documents, or findings.

For substantial publishable factual work, follow the applicable standards:

- `docs/CONTENT_PLANNING.md`;
- `docs/EDITORIAL_STANDARD.md`;
- `docs/RESEARCH_STANDARD.md`;
- `docs/WRITING_SYSTEM.md`;
- `docs/STYLE_RESEARCH_STANDARD.md`;
- `docs/EDITORIAL_PACKAGING_STANDARD.md`;
- `docs/PUBLISHING_STANDARD.md`.

AI output has zero evidentiary authority.

Prefer primary sources, record evidence before drafting, search for contradictory evidence, distinguish fact/claim/estimate/inference/opinion, preserve material caveats, and do not strengthen a headline beyond the evidence.

If evidence is insufficient, say so, continue research, narrow the claim, or do not publish it.

## 6. Writing and public copy

AI output has zero automatic stylistic, structural, or institutional authority.

For significant public copy, follow:

- `skills/portfilo-anti-slop/SKILL.md`;
- `docs/COPY_STYLE.md`;
- `docs/WRITING_SYSTEM.md`;
- `docs/EDITORIAL_PACKAGING_STANDARD.md` where story packaging is involved.

For substantial stories, use the style-research and style-brief workflow before Draft 1.

For significant homepage, newsletter, About, positioning, campaign, or other institutional copy, do not jump directly from strategy to polished prose. Research the communication problem, separate approved Portfilo claims from reference patterns, obtain the required direction approval, then draft.

Existing Portfilo copy is not precedent merely because it is committed or deployed. Rejected copy has zero authority and must not be lightly paraphrased back into a later draft.

## 7. Design and imagery

Follow:

- `skills/portfilo-anti-slop/SKILL.md` for discretionary visual/product decisions;
- `docs/DESIGN_DIRECTION.md`;
- `docs/IMAGE_SYSTEM.md`;
- the current approved design/image records named in `docs/DOCUMENT_STATUS.md`.

Do not default to generic SaaS layout, card soup, gradients, glassmorphism, glow, rounded-everything UI, fake newspaper styling, decorative motion, or generic business/AI imagery.

Mobile is a first-class layout.

Generated editorial imagery is illustration, not documentary evidence. For substantial generated imagery:

1. establish the image job;
2. research/extract the visual problem;
3. select a concept;
4. create/approve the brief;
5. prepare the exact generator instruction;
6. obtain separate explicit generation authorization;
7. generate candidates;
8. audit physical logic, factual implication, crop, artifacts, disclosure, and system fit;
9. require human image selection;
10. implement only after the relevant implementation gate.

Do not silently regenerate or substitute an approved image when the exact selected asset is missing. Ask for the asset.

## 8. Implementation discipline

Before editing runtime code:

- verify the current branch/HEAD;
- read the current phase and exact task;
- inspect nearby implementation;
- identify which decisions are already locked;
- modify only what the task requires.

An approved design/copy/product contract is not an invitation for implementation-time creative improvisation.

If a material choice is missing, surface the gap instead of inventing it.

After runtime edits:

- run the relevant checks;
- inspect the affected pages/behavior;
- fix regressions introduced by the change;
- record validation accurately.

Never claim a check passed unless it actually ran. Documentation-only work does not create a new runtime validation pass.

## 9. Scope discipline

Do not implement items from `BACKLOG.md` unless they are explicitly promoted into current scope.

Do not reopen completed decisions merely because a later task is difficult. Reopen only when:

- the founder explicitly changes the decision;
- implementation exposes a concrete contradiction/defect;
- new evidence materially changes the basis of the decision.

Keep historical records for provenance when useful, but mark them clearly so they cannot override current authority.

## 10. Chat handoffs

A new conversation should be able to continue from the repository without the previous transcript.

At a meaningful boundary:

1. commit stable work;
2. update `docs/PROJECT_STATE.md` if current phase/next task changed;
3. update `docs/DOCUMENT_STATUS.md` when authority changed;
4. record unresolved issues and required assets;
5. provide a handoff prompt that names the exact next task and approval boundary.

The new chat should verify branch/HEAD before any write.

## 11. Definition of done

A task is done only when:

- the requested job is actually complete;
- scope did not silently expand;
- discretionary decisions passed the anti-slop/evidence gate;
- relevant validation was actually performed;
- obvious regressions were checked;
- documentation/state is synchronized when necessary;
- the next gate is explicit;
- no publication, send, deployment, or release boundary was crossed without the required approval.
