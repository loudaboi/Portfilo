# Portfilo Launch Assignments

_Last updated: 2026-09-03_

## Purpose

Current operational view for Portfilo launch research and editorial production.

Historical planning remains in `candidate-stories.md`, `evaluation.md`, and `recommendation.md`. Individual story packets supersede those snapshots for current state.

## Active assignments

| ID | Role | Current question / idea | Topic | Priority | Current outcome | Packet |
|---|---|---|---|---|---|---|
| C001 | Flagship research | What separates an AI pilot from a production system inside a Philippine company? | AI | HIGH | CONTINUE / OUTREACH READY | `research/stories/ai-pilot-to-production/` |
| C021 | Supporting research | How much Philippine data-center capacity is operating, under construction, committed, and merely announced? | Technology | HIGH | CONTINUE / SOURCE RECONNAISSANCE | `research/stories/data-center-capacity-ledger/` |
| C030 | Third launch Perspective | What actually changed? | Building - provisional | HIGH / LAUNCH | DRAFT V2 APPROVED / SITE DRAFT READY FOR VISUAL REVIEW | `research/stories/what-actually-changed/` |

Current operational WIP is `C001 + C021 + C030`.

C030 is lighter editorial production rather than a large reported investigation, but it occupies the third launch-story slot until publication or a deliberate reframe.

## Published launch stories

| ID | Role | Published title | Topic | State | Story file |
|---|---|---|---|---|---|
| C027 | Perspective / homepage feature | Build things that make the next thing easier | Building | PUBLISHED / FEATURED | `src/content/stories/build-things-that-make-the-next-thing-easier.md` |
| C009 | Supporting Explained | What 'higher-value work' means in Philippine IT-BPM | Business | PUBLISHED | `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md` |

C027 and C009 have passed their editorial pipelines. Fresh final deployment/render QA remains incomplete for the newest site changes; do not overstate live verification.

## C001 checkpoint

Current outcome:

`CONTINUE / OUTREACH READY`.

Important unresolved contradiction:

The Swarm Philippine AI Report 2025 narrative says 65% remain at proof-of-concept while a chart on the same page shows 40%. Do not use 65% as a clean factual anchor until reconciled.

No draft is authorized until the reporting threshold is met.

## C021 checkpoint

Current outcome:

`CONTINUE / SOURCE RECONNAISSANCE ACTIVE`.

Locked measurement rules:

- prefer IT-load MW;
- keep current and future phases separate;
- do not silently equate IT load with utility/energized/facility power;
- exclude unresolved metrics/statuses from clean subtotals.

No national subtotal is publication-ready.

If the bottom-up total cannot be established defensibly, the evidence-led reframe remains:

> Why Philippine data-center capacity numbers conflict — and what operating, energized, planned, and announced megawatts actually mean.

C021 remains active research but is not the designated third launch article while C030 occupies that role.

## C030 checkpoint

Louda Tuppal approved C030 as the third launch article on 2026-09-03.

Approved metadata for the current visual-review draft:

- title: `What actually changed?`;
- description: `An update tells you something happened. Portfilo is interested in what changes when the announcement meets operating reality.`;
- content type: `Perspective`;
- topic: `Building` - provisional until publication approval;
- author: `Louda Tuppal`.

Packet:

`research/stories/what-actually-changed/`

Editorial state:

- direction: APPROVED;
- structure: APPROVED;
- Draft 1 substance: APPROVED;
- adversarial review: PASS WITH REVISION;
- Draft 2: APPROVED;
- headline/dek: APPROVED;
- final claim/copy audit: PASS;
- draft Astro content entry: CREATED;
- publication: NOT YET APPROVED.

Draft story:

`src/content/stories/what-actually-changed.md`

It remains `status: draft`, `featured: false`, with no `publishedAt`.

The shared story route includes draft entries only in Astro development mode. Production builds still include only `status: published` stories.

Next gate:

Local visual review at `/stories/what-actually-changed` under `npm run dev`, followed by any final typography/copy adjustment and explicit publication approval.

## Waiting external clarification

### C017 - WAITING / EXTERNAL CLARIFICATION

Question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Packet:

`research/stories/zero-fee-merchant-payments/`

Underlying research outcome remains `REFRAME / CONTINUE`.

The decisive remaining need is one narrow written clarification from BSP and/or PPMI about the final implementation and fee layer. C017 is not abandoned; it is operationally removed from active production while that evidence is unavailable.

## Held / future research

### C029 - HOLD / FUTURE AUDIENCE RESEARCH

Working label:

`The second question after the headline`

Packet:

`research/stories/second-question-after-headline/`

The original reader-behavior question remains potentially valuable as a future reported study. The six-event Reddit desk pilot is preserved as research history, but its Reddit-led full corpus is rejected as the evidentiary backbone for a Portfilo launch article.

Revisit when Portfilo can recruit at least 10 suitable participants without relying almost entirely on the founder's immediate circle, or another professional primary-data route becomes available.

No C029 draft is authorized.

## Passed but unassigned

Available after an active slot opens:

- C002 - all-in cost of one AI customer-support workflow;
- C007 - buy vs integrate vs build for a defined AI workflow;
- C011 - AI-related skills in IT-BPM job postings;
- C018 - Direct Debit PH operating implications;
- C020 - recurring-payment method comparison;
- C023 - technical meaning of AI-ready data centers;
- C026 - startup financing structures beyond traditional equity.

## Work-in-progress rule

Portfilo v0 should generally keep no more than three substantial stories in active research/production and no more than one flagship investigation in active production at once.

Current active:

- C001;
- C021;
- C030.

Waiting external:

- C017.

Held/future:

- C029.
