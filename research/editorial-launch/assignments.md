# Portfilo Launch Assignments

_Last updated: 2026-09-03_

## Purpose

This file is the current assignment view for the first Portfilo launch slate.

`candidate-stories.md` preserves the Stage 5 candidate inventory. `evaluation.md` preserves Stage 6 planning decisions. `recommendation.md` preserves the approved launch recommendation. Individual research packets may later produce `PUBLISH`, `REFRAME`, `CONTINUE`, or `KILL` without rewriting the planning history.

This file answers the operational question:

> What is Portfilo actively researching now?

Assignment state here supersedes the pre-evaluation `OPEN / PENDING` snapshot retained in the Stage 5 inventory.

## Active assignments

| ID | Role | Current research question | Topic | Planning decision | Priority | Research outcome | Research packet |
|---|---|---|---|---|---|---|---|
| C001 | Flagship | What separates an AI pilot from a production system inside a Philippine company? | AI | PASS | HIGH | CONTINUE | `research/stories/ai-pilot-to-production/` |
| C009 | Supporting | What does "higher-value work" actually mean inside Philippine IT-BPM? | Business | PASS | HIGH | CONTINUE | `research/stories/it-bpm-higher-value-work/` |
| C017 | Supporting | What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules? | Business | PASS | HIGH | REFRAME | `research/stories/zero-fee-merchant-payments/` |

State for C001, C009, and C017 remains `ACTIVE`.

C017's original planning question asked who ultimately bears the cost when qualifying small-merchant payments become free to the merchant. The first full public-evidence pass found that the zero-fee implementation itself must be defined before economic incidence can be reported. The original question remains preserved in the C017 packet.

## First reserve

| ID | Role | Question | Topic | Decision | Priority | State |
|---|---|---|---|---|---|---|
| C021 | First reserve | How much Philippine data-center capacity is operating, under construction, committed, and merely announced? | Technology | PASS | HIGH | OPEN / QUEUED |

Do not activate C021 while all three active slots are occupied.

## Passed but unassigned

These candidates remain in the planning inventory and may be revisited after the initial slate:

- C002 - all-in cost of one AI customer-support workflow;
- C007 - buy vs integrate vs build for a defined AI workflow;
- C011 - AI-related skills in IT-BPM job postings;
- C018 - Direct Debit PH operating implications;
- C020 - recurring-payment method comparison;
- C023 - technical meaning of AI-ready data centers;
- C026 - startup financing structures beyond traditional equity.

Reframed, held, and killed candidates remain preserved in `evaluation.md` and `candidate-stories.md`. Do not delete them.

## Work-in-progress rule

Portfilo v0 should generally keep no more than three substantial stories in active research at once and no more than one flagship investigation in active production at once.

An active assignment can still end in `PUBLISH`, `REFRAME`, `CONTINUE`, or `KILL` after story research.
