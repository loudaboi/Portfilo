---
name: portfilo-anti-slop
description: Mandatory decision-quality gate for nontrivial Portfilo product, copy, design, editorial packaging, newsletter, naming, social, and other discretionary public-facing decisions.
---

# Portfilo Anti-Slop Decision Gate

## Job

Prevent AI-generated plausibility from becoming Portfilo strategy, copy, design, or product authority.

This skill is a decision-control workflow. It does not replace the canonical editorial, writing, design, image, publishing, or engineering standards.

Use it before the first nontrivial discretionary recommendation in a task or conversation, and apply the gate again whenever the artifact class or decision job changes materially.

Routine factual retrieval, literal maintenance, narrow bug fixes, and implementation of an already decision-complete approved contract do not require a fresh research exercise. They still must not introduce new discretionary choices silently.

## Authority

Before using this skill, read the current repository authority in this order:

1. `AGENTS.md` for contributor and approval rules;
2. `docs/PROJECT_STATE.md` for current phase and exact next task;
3. `docs/DOCUMENT_STATUS.md` for current vs historical authority;
4. `docs/V0_SCOPE.md` for product boundaries;
5. the canonical standard and approved decision record relevant to the task.

Explicit founder instructions at the current gate can change a decision. Record material changes in the proper canonical file rather than relying on chat memory.

This skill never expands approval scope.

## Gate 1 — State the exact decision job

Write one sentence describing the decision being made.

Examples:

- choose a homepage acquisition-message structure;
- choose whether a Feature module needs an image;
- choose a newsletter issue model;
- choose a navigation label;
- choose between two visual compositions.

If the job contains several independent decisions, split them. Do not hide a bundle of new choices inside one recommendation.

## Gate 2 — Separate four evidence classes

Before proposing a solution, separate:

### Approved facts and constraints

What the repository, implementation, evidence, or founder has already established.

### Reference evidence

What strong real products, professional practice, user research, or relevant exemplars actually do.

Use references to learn structures, tradeoffs, and decision patterns. Do not copy distinctive language, visual identity, or voice.

### Assumptions and unknowns

What has not been established yet.

Do not silently convert assumptions into product promises or design requirements.

### Candidate choices

Only after the first three categories are clear, define the smallest useful set of options.

## Gate 3 — Research before invention

If a material decision depends on current product practice, copy practice, visual practice, market convention, or professional form and the repository does not already contain enough relevant research, research strong real references before recommending.

Do not start by generating a polished Portfilo answer and then search for evidence that makes it sound justified.

For significant public copy, follow this order:

`reference corpus -> Portfilo claim sheet -> message architecture -> founder direction approval -> wording`

Do not draft the final Portfilo headline, positioning line, newsletter promise, About statement, campaign line, or similar discretionary prose before the structural/reference direction is selected.

## Gate 4 — No invented authority

Do not invent any of the following merely because it would make the product easier to describe:

- a reader benefit;
- a differentiator;
- a geographic emphasis;
- an audience identity;
- a cadence;
- a reading-time promise;
- a mission;
- a quality claim;
- an institutional belief;
- a trend claim;
- a recurring content section;
- a decorative design motif;
- a feature needed only to make a layout feel complete.

If a claim is useful but unsupported, label it as an open hypothesis or leave the gate open.

## Gate 5 — Rejected work has zero authority

Rejected generated copy, layouts, concepts, images, naming ideas, and strategies are historical evidence of what failed. They are not ingredients for the next attempt.

Do not:

- lightly paraphrase a rejected line;
- preserve a rejected composition and change its cosmetics;
- reintroduce a rejected trope under different wording;
- use a previous AI-generated recommendation as evidence for itself.

Start from the approved job, evidence, and selected reference direction.

## Gate 6 — Generic-AI red team

Before presenting a recommendation, ask:

1. Could this appear unchanged on a generic AI-made newsletter, SaaS site, agency site, news brand, or startup landing page?
2. Did we generate the option first and rationalize it afterward?
3. Which material claims are directly supported, and which are assumptions?
4. Did we add a section, benefit, phrase, or visual device only because the composition felt empty?
5. Is this a coherent model, or a feature soup assembled from several references?
6. Is any abstract phrase doing work that a concrete noun, behavior, or product fact should do?
7. Would deleting something make the result stronger?
8. Does the recommendation follow the approved Portfilo contract, or is AI silently redesigning it?
9. Are we mistaking polish for quality?
10. If the model had not suggested this, what evidence would still justify it?

If the answer exposes unsupported invention, revise before presenting.

## Gate 7 — Implementation fidelity

Once a design, copy package, image, architecture, or product decision is approved, treat it as a contract.

Implementation may resolve low-level technical details needed to execute the contract. It may not silently introduce a new material choice because it seems better, more complete, or more conventional.

A missing material decision is a gap. Stop and surface it rather than inventing the answer.

## Required decision output

For a nontrivial discretionary recommendation, present enough of the following for inspection:

- exact decision job;
- evidence basis;
- candidate choices and material tradeoffs;
- recommendation and why the evidence supports it;
- assumptions or unresolved questions;
- exact approval gate.

For public copy before the wording gate, show structure and claims without drafting final Portfilo prose.

For implementation of an already approved contract, show only new material decisions that genuinely require approval.

## Stop conditions

Stop instead of filling the gap when:

- evidence is insufficient;
- two canonical authorities conflict;
- a required asset is missing;
- a public claim cannot be traced to authority;
- a design reference is ambiguous;
- the requested approval does not cover the next consequential step;
- the only rationale is that the generated result sounds or looks good.

A clean unresolved gate is better than plausible AI filler.
