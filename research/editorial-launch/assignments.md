# Portfilo Launch Assignments

_Last updated: 2026-09-03_

## Purpose

This file is the current assignment view for the first Portfilo launch slate.

`candidate-stories.md` preserves the Stage 5 candidate inventory. `evaluation.md` preserves Stage 6 planning decisions. `recommendation.md` preserves the approved launch recommendation. Individual research packets may later produce `PUBLISH`, `REFRAME`, `CONTINUE`, or `KILL` without rewriting the planning history.

This file answers the operational question:

> What is Portfilo actively researching, and what has reached publication?

Assignment state here supersedes the pre-evaluation `OPEN / PENDING` snapshot retained in the Stage 5 inventory.

## Active assignments

| ID | Role | Current research question | Topic | Planning decision | Priority | Research outcome | Research packet |
|---|---|---|---|---|---|---|---|
| C001 | Flagship | What separates an AI pilot from a production system inside a Philippine company? | AI | PASS | HIGH | CONTINUE | `research/stories/ai-pilot-to-production/` |
| C017 | Supporting | What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules? | Business | PASS | HIGH | REFRAME / CONTINUE | `research/stories/zero-fee-merchant-payments/` |
| C027 | Featured Perspective candidate | What is a first project actually for when you are still figuring out what you can build and where you want to go? | Building | PASS | HIGH | REFRAME / DRAFT V2 FOR USER REVIEW | `research/stories/building-the-foundation/` |

C001, C017, and C027 are `ACTIVE`.

## C027 checkpoint

C027 was added after the first published story because the early-audience review identified a separate need: a more accessible, reader-centered story about building that can carry Louda Tuppal's byline without becoming a founder profile or personal-brand post.

Likely content type: `Perspective`.

Primary reader need: `Interpret`.

### Draft v1 decision

**REJECT / DO NOT POLISH.**

The first internal draft tried to combine too many ideas from the discovery conversation: starting without leverage, bottleneck migration, AI, skills, habits, relationships, trust, reputation, and user understanding. Reader review found the message difficult to identify and the structure unnecessarily complicated.

That diagnosis is accepted. Draft v1 is preserved only as editorial history in:

`research/stories/building-the-foundation/draft-v1-review.md`

### Topic + structure reset

A fresh craft/topic review was completed before redrafting.

Research file:

`research/stories/building-the-foundation/topic-structure-research.md`

The reset reviewed essay guidance and examples from Longreads, Nieman Storyboard, Paul Graham, Morgan Housel, current 2026 builder coverage, and community signals from early builders.

Key decision:

- use one clear thread rather than forcing every relevant idea into the article;
- use a single-thread funnel: tension -> reframe -> concrete development -> implication -> counterargument -> resolution;
- keep the reader, not the author, at the center;
- do not make AI central because that angle is already crowded and it weakened the original message;
- do not turn the piece into a checklist about skills, habits, networking, or hustle.

### Selected C027 idea

> An early project does not have to become your future. It should teach you something real about what to do next.

Current reader question:

> What is a first project actually for when you are still figuring out what you can build and where you want to go?

Draft v2:

`research/stories/building-the-foundation/draft-v2.md`

Draft v2 evaluation:

`research/stories/building-the-foundation/draft-v2-evaluation.md`

Current result:

**DIRECTION PASS FOR USER REVIEW / NOT A PUBLICATION DECISION.**

Draft v2 deliberately excludes AI, `starting from nothing`, a universal bottleneck model, biography, grind framing, and a catalogue of skills/habits/network/reputation. Those ideas may be valid elsewhere but are not required for this thread.

No C027 file exists under `src/content/stories/`. Nothing is public and no publication approval has been requested.

## Published launch stories

| ID | Role | Published question | Topic | Research outcome | Publication state | Story file |
|---|---|---|---|---|---|---|
| C009 | Supporting | What jobs are Philippine IT-BPM employers actually talking about when they say `higher-value work`? | Business | PUBLISH | `status: published`; technical live verification pending | `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md` |

## C009 publication checkpoint

C009 is the first launch assignment to reach a `PUBLISH` story decision, pass the editorial pre-publication pipeline, receive explicit user approval, and be moved to repository publication state.

The original planning question asked what `higher-value work` means inside Philippine IT-BPM. The full public-data/source pass narrowed the publishable question to:

> What jobs are Philippine IT-BPM employers actually talking about when they say `higher-value work`?

The packet contains official Philippine skills-framework evidence and a 15-role structured illustrative sample of current employer postings.

The main supported finding is that `higher-value work` is not a single occupation or a clean synonym for non-voice, technical, or AI work. In the current evidence it is better explained through observable dimensions such as domain expertise, technical/data depth, judgment/control responsibility, process/system ownership, and stakeholder scope.

Completed C009 stages:

- story decision: `PUBLISH`;
- draft: complete;
- adversarial review: complete and resolved;
- claim audit: pass;
- editorial/copy pass: pass;
- headline/dek audit: pass;
- methodology: pass;
- fresh currentness/source recheck: pass;
- pre-publish editorial gate: pass;
- user publication approval: granted 2026-09-03;
- repository content state: `published` with `publishedAt: 2026-09-03`;
- featured status: `false`;
- byline: `Portfilo`.

The current story deliberately does **not** claim:

- representative sector-wide job shares;
- a universal wage premium;
- that specialist jobs are growing fast enough to absorb routine-work displacement;
- that frontline workers can transition into the roles on a particular timetable;
- that every specialist role is intrinsically a better job.

Technical live verification remains pending. Do not claim a fresh `npm run build`, desktop/mobile render check, or final live-link QA until completed.

Homepage featuring, fixture replacement, and Portfilo Brief distribution remain separate approval/implementation decisions.

## C017 checkpoint

C017's original planning question asked who ultimately bears the cost when qualifying small-merchant payments become free to the merchant.

The first public-evidence pass reframed the question because the final 2026 rule set did not define the presumed merchant-side waiver cleanly enough.

The second implementation-basis audit establishes that:

- Circular 1238 permits cost-based merchant fees and does not reproduce the 2024 exposure draft's explicit micro-merchant waiver;
- M-2026-025 still says zero fees for small merchant payments have been implemented but does not identify the fee layer or implementation instrument;
- current PPMI/BSP QR Ph material says QR Ph P2M is free to consumers while BSP's July 2026 launch material says merchants shoulder QR Ph transaction fees;
- no indexed public BSP/PPMI rule located in the audit resolves those statements into a final micro-merchant fee-waiver mechanism.

The reframed C017 therefore remains `CONTINUE`, with one narrow BSP/PPMI clarification now the decisive remaining source need. No broad interview campaign is required and Portfilo's publishing schedule should not wait on that response.

## First reserve

| ID | Role | Question | Topic | Decision | Priority | State |
|---|---|---|---|---|---|---|
| C021 | First reserve | How much Philippine data-center capacity is operating, under construction, committed, and merely announced? | Technology | PASS | HIGH | OPEN / QUEUED |

C009's publication freed one substantial-research slot. C027 now occupies that slot. Do not activate C021 while all three active slots are occupied.

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