# Portfilo v1 — Impeccable Method Study

_Last updated: 2026-09-15_

## Status

**COMPLETE / USED TO DEFINE PORTFILO VISUAL-DIRECTION SKILL**

## Decision job

Study Impeccable as a design-agent methodology, identify why it resists generic AI frontend output, compare that method with Portfilo's current process, and extract only the parts that materially improve Portfilo visual work.

This is not an adoption of Impeccable as a dependency.

## Sources reviewed

Primary:

- https://github.com/pbakaus/impeccable
- https://impeccable.style/

Reviewed upstream material included:

- main Impeccable skill contract;
- new-work / replacement-world method;
- critique method;
- craft floor;
- layout;
- typography;
- motion;
- bolder / quieter / distill refinement methods.

Upstream version observed during this study:

**4.3.1**

## What Impeccable solves well

### 1. It separates durable truth from visual invention

Impeccable distinguishes product truth, durable design authority, and the concept for a particular surface.

This prevents an agent from treating every visual task as greenfield.

Portfilo already has an equivalent authority model through:

- `AGENTS.md`;
- `docs/PROJECT_STATE.md`;
- `docs/DOCUMENT_STATUS.md`;
- `docs/V1_CREATIVE_DIRECTION.md`;
- `docs/V1_IDENTITY_SYSTEM.md`;
- task-specific research and decision records.

**Portfilo adaptation:** do not add PRODUCT.md / DESIGN.md. Use the repository authority that already exists.

### 2. It distinguishes redesign from refinement

A rejected visual world should not survive through cosmetic changes.

This is directly relevant to Portfilo. Several failed hero directions were unintentionally preserved by changing:

- shader material;
- opacity;
- spacing;
- typography;
- background treatment.

The underlying composition remained wrong.

**Portfilo adaptation:** when founder feedback rejects the concept or visual world, incremental polish is prohibited. Diagnose the failed premise and return to reference/translation work.

### 3. It judges design specificity

Impeccable explicitly asks whether a visual result belongs to the product or could be used unchanged by an unrelated product.

This is more useful for Portfilo than generic taste words such as premium, futuristic, minimal, or creative.

**Portfilo adaptation:** every consequential visual review must include a category-interchangeability test.

### 4. It gives references and design systems different jobs

Strong references are treated as systems and mechanisms rather than as a bag of motifs.

That matches the correction the founder has repeatedly made:

- MERSI is valuable for transitions and continuity, not for copying its architecture-site surface;
- 4WIDE is valuable for motion quality and interaction, not for reproducing its WebGL stack;
- MetaLab is valuable for authored visual states and alternate graphics, not for cloning its imagery;
- OpenAI Business is useful as a background/material reference, not as a page-structure reference.

**Portfilo adaptation:** every reference must be decomposed into:

1. mechanism to learn;
2. surface treatment not to copy;
3. Portfilo translation;
4. implementation consequence.

### 5. It establishes a craft floor

Impeccable names recurring model defaults and refuses to treat them as design decisions.

Useful examples include:

- card repetition as default structure;
- decorative glass/blur;
- gradient text;
- arbitrary section numbering;
- generic fade/reveal motion;
- typography chosen as costume;
- texture applied without a subject-specific reason.

Portfilo already has many project-specific versions of this problem.

**Portfilo adaptation:** maintain a Portfilo-specific slop test rather than importing Impeccable's detector catalog.

### 6. Motion has to communicate something

Impeccable's motion guidance distinguishes:

- continuity;
- reveal/composition;
- focus/depth;
- state/feedback;
- material behavior.

It also prefers one authored focal sequence over repeated effects.

This directly supports the founder's response to MERSI and 4WIDE: much of their quality comes from transition choreography rather than constant visual spectacle.

**Portfilo adaptation:** every motion proposal must state the motion thesis and why pointer/scroll behavior exists.

### 7. It uses bounded verification

The method does not assume that correct code equals good design. It requires inspecting the rendered result and limits polishing loops.

**Portfilo adaptation:** consequential visual output receives:

- one deliberate visual critique pass;
- one consolidated correction pass when authorized;
- then founder review.

Do not self-polish indefinitely.

---

# What Portfilo should not copy

## Do not import the command suite

Portfilo does not need 20+ design commands.

The repository already uses explicit decision gates.

Adding a second command ontology would create competing authority.

## Do not import random concept selection

Impeccable uses randomized concept seeding to fight model convergence.

Portfilo's founder is already actively steering references and direction.

For this project, deliberate reference-derived alternatives are clearer than random assignment.

## Do not import generic design-world catalogs

Portfilo already has substantial founder-reviewed evidence.

A generic catalog could pull the work back toward unrelated visual worlds.

## Do not import numeric design scores

A number can create false precision in an aesthetic decision.

Portfilo should use explicit pass/fail questions with concrete visual evidence.

## Do not let anti-pattern rules override a pinned founder reference

A founder-approved visual behavior may legitimately use a pattern that is normally generic.

The problem is unexamined default behavior, not the existence of gradients, dark surfaces, grain, asymmetry, or motion.

---

# Portfilo failure analysis

The recent hero exploration exposed recurring model behavior.

## Failure A — effect-first concepting

Examples:

- Crossfield;
- Refraction;
- Strata;
- Graphite Exposure as an isolated atmosphere exercise.

Problem:

The effect became the design task.

Correction:

Start from the complete experience and the mechanism learned from references.

## Failure B — empty-frame compensation

Examples:

- central abstract objects;
- oversized display type;
- stepped typography;
- decorative background material.

Problem:

Elements were introduced because the viewport felt empty.

Correction:

Empty space is allowed. Add only what serves hierarchy, identity, evidence, interaction, or the selected visual thesis.

## Failure C — isolated tests that were not meaningful in isolation

The background-only plate forced the founder to evaluate something whose value depends on typography, composition, and motion.

Correction:

Prototype the **minimum meaningful unit**.

A component may be isolated only when it has an independent decision job.

If the user can reasonably ask “what am I supposed to look at?”, the gate is invalid.

## Failure D — reference surface copied instead of mechanism

Research sometimes became:

reference -> aesthetic adjectives -> generic approximation

instead of:

reference -> mechanism -> Portfilo translation -> exact composition

Correction:

Reference extraction is mandatory before visual invention.

## Failure E — rejection followed by cosmetic iteration

Rejected concepts repeatedly returned under another font, gradient, shader, or spacing treatment.

Correction:

A rejected concept loses authority. Only explicitly retained mechanisms survive.

---

# Extracted Portfilo method

The new visual-direction skill should enforce this sequence for consequential visual work:

1. resolve current authority;
2. state the exact visual decision;
3. classify the task as preserve / extend / replace;
4. inspect the actual reference or rendered evidence;
5. extract mechanisms from references;
6. write one Portfilo visual thesis;
7. define the minimum meaningful prototype;
8. red-team it for category interchangeability and AI defaults;
9. build only after the decision gate is approved;
10. inspect the rendered output, not just source;
11. if rejected, record why and do not cosmetically revive it.

## Central principle

**Study excellent work deeply. Extract the mechanism. Translate it into Portfilo's own identity and product truth. Do not imitate the surface and do not fill empty space with model defaults.**

## Result

Implemented as:

`skills/portfilo-visual-direction/SKILL.md`
