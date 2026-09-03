# Portfilo Launch Assignments

_Last updated: 2026-09-03_

## Purpose

This is the current operational assignment view for Portfilo's launch research.

Historical planning remains in:

- `candidate-stories.md` - Stage 5 inventory;
- `evaluation.md` - Stage 6 gate decisions;
- `recommendation.md` - approved launch recommendation.

Individual story packets supersede those planning snapshots for current research state.

## Active assignments

| ID | Role | Current research question | Topic | Decision | Priority | Current outcome | Packet |
|---|---|---|---|---|---|---|---|
| C001 | Flagship | What separates an AI pilot from a production system inside a Philippine company? | AI | PASS | HIGH | CONTINUE | `research/stories/ai-pilot-to-production/` |
| C017 | Supporting | What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules? | Business | PASS | HIGH | REFRAME / CONTINUE | `research/stories/zero-fee-merchant-payments/` |
| C021 | Supporting / next launch research | How much Philippine data-center capacity is operating, under construction, committed, and merely announced? | Technology | PASS | HIGH | CONTINUE / SOURCE RECONNAISSANCE | `research/stories/data-center-capacity-ledger/` |

C001, C017, and C021 remain `ACTIVE`. This fills the normal v0 three-story active-research limit.

C029 is not active. Its approved desk-research pilot has now passed feasibility and produced a reframe, but the full corpus has not been authorized as an active assignment and C021 has not been displaced.

## Published launch stories

| ID | Role | Published question / idea | Topic | Research outcome | Publication state | Story file |
|---|---|---|---|---|---|---|
| C027 | Perspective / first homepage feature | Build things that make the next thing easier | Building | PUBLISH | `status: published`; `featured: true`; newest live share-readiness verification pending | `src/content/stories/build-things-that-make-the-next-thing-easier.md` |
| C009 | Supporting | What jobs are Philippine IT-BPM employers actually talking about when they say `higher-value work`? | Business | PUBLISH | `status: published`; `featured: false`; technical live verification pending | `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md` |

## C027 checkpoint

C027 passed research, drafting, adversarial review, claim audit, editorial/copy pass, headline/dek audit, user publication approval, and homepage feature approval.

Final metadata:

- title: `Build things that make the next thing easier`;
- topic: `building`;
- content type: `perspective`;
- author: `Louda Tuppal`;
- publishedAt: `2026-09-03`;
- status: `published`;
- featured: `true`.

Research packet:

`research/stories/building-the-foundation/`

The user has viewed the deployed article. The newest share-readiness fixes still require live re-verification. Do not claim the newest homepage/mobile deployment is fully verified until the user confirms it.

No final C027 hero image has been selected or published.

## C009 checkpoint

C009 passed the full editorial pre-publication pipeline and received user publication approval on 2026-09-03.

The published question is narrower than the original planning language:

> What jobs are Philippine IT-BPM employers actually talking about when they say `higher-value work`?

The evidence supports explaining `higher-value work` through observable dimensions including domain expertise, technical/data depth, judgment/control responsibility, process/system ownership, and stakeholder scope.

The story deliberately does not claim representative sector-wide job shares, a universal wage premium, a guaranteed transition path, or that specialist jobs can absorb routine-work displacement on a particular timetable.

Research packet:

`research/stories/it-bpm-higher-value-work/`

Technical full live deployment/render QA remains incomplete.

## C001 checkpoint

Current outcome:

`CONTINUE / OUTREACH READY`

The Swarm Philippine AI Report 2025 discrepancy remains unresolved: narrative text says 65% remain at proof-of-concept while a chart on the same page shows 40%. Do not use 65% as a clean factual anchor until reconciled.

Drafting threshold is not met.

## C017 checkpoint

Current outcome:

`REFRAME / CONTINUE`

The decisive remaining need is a narrow written clarification from BSP and/or PPMI about what `zero fees for small merchant payments` means in the final 2026 implementation and which fee layer/instrument establishes it.

Do not let that clarification block the rest of the publishing schedule.

## C021 checkpoint

C021 was activated on 2026-09-03 when the original fieldwork-dependent version of C029 was paused.

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Packet:

`research/stories/data-center-capacity-ledger/`

Current packet includes:

- `brief.md` - measurement rules, status definitions, originality and drafting threshold;
- `sources.md` - initial operator/government source map;
- `evidence.md` - preliminary evidence ledger;
- `contradictions.md` - status and metric conflicts to reconcile;
- `capacity-ledger.csv` - seeded project-level ledger.

Current outcome:

`CONTINUE / SOURCE RECONNAISSANCE ACTIVE`

### Measurement rules

Prefer `IT load MW` when available.

Never silently combine:

- IT load;
- utility power;
- facility electrical capacity;
- powered-shell/energized capacity;
- rack or cabinet counts.

Project phases must also be separated. A campus with 6 MW live and 30 MW planned is not 36 MW operating.

Current status labels:

- `OPERATING`;
- `UNDER CONSTRUCTION`;
- `COMMITTED`;
- `ANNOUNCED`;
- `STATUS TO RECONCILE`.

### Preliminary research finding

The first source pass already shows that public Philippine data-center numbers are difficult to compare directly because sources can mix:

1. operating capacity with future/full-buildout capacity;
2. IT load with utility or energized power;
3. portfolio figures from different commissioning dates.

This is a promising information gap, not yet a publishable conclusion.

No national subtotal is authorized yet.

If a clean bottom-up subtotal cannot be built, C021 may validly reframe to:

> Why Philippine data-center capacity numbers conflict — and what operating, energized, planned, and announced megawatts actually mean.

Do not draft until the major operator census and contradiction search are substantially complete.

## Reframed / decision-pending research

### C029 - REFRAME / DESK PILOT PASS / FULL CORPUS REQUIRED / NOT ACTIVE

Working label:

`The second question after the headline`

Current desk-research question:

> What questions surface in public Reddit discussion around preselected Philippine business and technology news events after the initial update?

Packet:

`research/stories/second-question-after-headline/`

Planning history:

`PASS TO RESEARCH -> HOLD FOR ACCESS -> REFRAME / DESK PILOT PASS`

The original fieldwork version remains preserved, but fieldwork is no longer a prerequisite for the narrower desk version because the research question itself has changed.

Pilot files:

- `desk-pilot.md` - six events locked before discussion search;
- `desk-pilot-questions.csv` - question-level coding ledger;
- `desk-pilot-results.md` - pilot evaluation and full-corpus design.

Pilot sample counts:

- 6 preselected events;
- 4 with eligible related public discussion traces;
- 3 with at least one usable information-seeking question;
- 14 usable questions coded;
- 3 zero-question / no-clean-discussion cases preserved.

Question-to-source-story relation in the pilot:

- `ANSWERED`: 2;
- `PARTIAL`: 4;
- `UNANSWERED`: 5;
- `EXPANDS_FRAME`: 3.

These are corpus counts only. They are not estimates of Filipino reader behavior or prevalence.

The pilot's strongest methodological finding is that public follow-up questions do not all indicate missing reporting. Some are already answered by the source story, some are partly answered, some ask for information the update did not establish, and some expand into a different but relevant frame.

That comparison is the desk version's potential original contribution:

`selected news event -> visible public question -> what the source story already established`

### Full-corpus threshold

Before a new C029 story decision, the recommended method is a 24-event Reddit-only corpus with four clusters of six preselected events:

1. AI / work / enterprise adoption;
2. companies / startups / markets;
3. fintech / platforms / regulation;
4. infrastructure / data centers / semiconductors.

All events must be selected before discussion search. Use a fixed 0-7 day primary discussion window, preserve zero-result cases, require a clear event match, and code each genuine information-seeking question as both a question type and `ANSWERED / PARTIAL / UNANSWERED / EXPANDS_FRAME / UNCLEAR` relative to the selected source story.

Do not claim:

- that the sample represents Filipino readers;
- that commenters are young;
- what commenters read first;
- what private search/AI path they used;
- why they missed information already in an article;
- that every unanswered question is a reporting failure;
- that Portfilo is the solution.

Current outcome:

`REFRAME / PILOT PASS / FULL CORPUS REQUIRED`.

No article draft is authorized. C021 remains active until Louda Tuppal deliberately chooses whether C029 should receive an active slot for the full corpus.

## Passed but unassigned

These remain available after an active slot opens:

- C002 - all-in cost of one AI customer-support workflow;
- C007 - buy vs integrate vs build for a defined AI workflow;
- C011 - AI-related skills in IT-BPM job postings;
- C018 - Direct Debit PH operating implications;
- C020 - recurring-payment method comparison;
- C023 - technical meaning of AI-ready data centers;
- C026 - startup financing structures beyond traditional equity.

Reframed, held, and killed candidates remain preserved in `evaluation.md` and `candidate-stories.md`.

## Work-in-progress rule

Portfilo v0 should generally keep no more than three substantial stories in active research and no more than one flagship investigation in active production at once.

Current active WIP:

- C001;
- C017;
- C021.

C029 is decision-pending research and does not currently occupy an active slot.
