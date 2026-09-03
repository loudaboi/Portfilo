# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - STYLE RESEARCH GATE ADDED / PHASE 3 C027 STYLE RESEARCH COMPLETE / REVISED BRIEF AWAITING APPROVAL**

Portfilo's publishing system, research standards, first published stories, `/stories` archive, site-copy correction, and Portfilo Brief foundation remain in place.

The current system-level correction addresses a specific failure mode: verified ideas and product decisions being presented through generic, invented, or AI-shaped prose.

Core rules:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero stylistic authority.**

> **Research the writing problem before asking AI to write.**

No permanent tagline by default.

## Current branch

Authoritative branch:

`build/portfilo-v0`

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Canonical documents

Project/product:

- `docs/V0_SCOPE.md`
- `docs/PROJECT_STATE.md`
- `docs/CONTENT_PLANNING.md`
- `docs/SITE_COPY_AND_IA_AUDIT.md`
- `docs/SITE_COPY_IMPLEMENTATION.md`

Editorial/research/writing:

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `research/README.md`
- `research/STYLE_RESEARCH_TEMPLATE.md`
- `research/STYLE_BRIEF_TEMPLATE.md`

Design:

- `docs/DESIGN_DIRECTION.md`

Email/deployment:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

## Writing-system state

The writing system now distinguishes four separate questions before prose:

1. **What can the story say?** -> subject research, evidence, contradictions.
2. **What must the story do for the reader?** -> reader need and audience assumptions.
3. **Which professional form and writing mechanics fit?** -> professional guidance plus human-edited style research.
4. **Which decisions will Portfilo use?** -> approved `style-brief.md`.

Required substantial-story sequence:

```text
subject research
  -> evidence / contradictions
  -> story decision
  -> reader need / audience assumptions
  -> professional form research
  -> human-edited exemplar research
  -> style-research.md
  -> style-brief.md
  -> human approval
  -> Draft 1
```

`docs/STYLE_RESEARCH_STANDARD.md` is canonical for the new per-story style-research gate.

Every substantial story must create `style-research.md` using `research/STYLE_RESEARCH_TEMPLATE.md` before the final style brief is approved.

Default human-edited exemplar target:

**2-4 relevant pieces chosen because they solve a similar writing problem.**

Exemplars are used to study transferable editorial decisions such as lead behavior, thesis timing, paragraph development, evidence handling, transitions, person, rhetorical devices, counterargument, and ending.

They are not used to copy distinctive wording, cadence, metaphors, jokes, branded terminology, rhetorical quirks, or another publication's institutional voice.

A model may execute approved editorial decisions. It may not supply missing style decisions from bare statistical intuition.

Existing published Portfilo prose is not automatically an approved style exemplar.

If the assignment materially changes, re-research the writing approach.

## Phase 2 - site structure and copy

Status:

**COMPLETE / DEPLOYED USER REVIEW PASS**

Phase 2A implemented:

- `title` / `dek` / `description` separation;
- `/stories` archive;
- global `Stories` navigation;
- production fixture exclusion for synthetic series;
- stable archive links from confirmation/404;
- stale package positioning cleanup.

Phase 2B implemented:

- removed temporary/repeated homepage copy rather than replacing it with slogans;
- aligned About with actual editorial types;
- removed slogan-like Standards closing;
- aligned public AI-use copy with the writing system;
- simplified Subscribe copy and removed duplicated provider explanation;
- checked Privacy against the current Cloudflare -> beehiiv signup flow.

Louda Tuppal approved the deployed Phase 2 result on 2026-09-03.

A local `npm run build` for Phase 2A/2B remains **NOT RECORDED**. Do not convert deployed user review into a local-build claim.

One final-release check remains: directly confirm `/series/content-architecture-fixtures` and any sitemap entry are absent from production.

## Phase 3 - story writing repair

Status:

**ACTIVE / C027 STYLE RESEARCH COMPLETE / REVISED STYLE BRIEF AWAITING USER APPROVAL**

Repair order:

1. C027 Perspective;
2. C009 Explained;
3. C030 founding Perspective.

Do not rewrite all three in one undifferentiated pass.

### C027 - current repair state

Published story:

**Build things that make the next thing easier**

Packet:

`research/stories/building-the-foundation/`

Style research:

`research/stories/building-the-foundation/style-research.md`

Revised decision brief:

`research/stories/building-the-foundation/style-brief.md`

Current state:

`STYLE RESEARCH COMPLETE / STYLE BRIEF PROPOSED / USER APPROVAL REQUIRED / NO NEW DRAFT AUTHORIZED`

The earlier C027 form approval occurred before the mandatory style-research gate existed and is superseded for drafting purposes.

The pre-standard `rewrite-v1.md` and `rewrite-v2.md` are diagnostic artifacts only. They must not be used as final prose or as style exemplars.

The currently published C027 remains live and has not been replaced.

#### C027 research basis

Reader need:

`Interpret`

Audience principle:

Reuters Institute's audience/user-needs research supports planning different pieces around different reader needs. It does not establish a demographic prevalence claim for C027.

Professional form guidance used:

- Poynter form-follows-material guidance;
- Poynter opinion-writing guidance;
- The OpEd Project argument/counterargument guidance.

Human-edited exemplars reviewed:

1. The Atlantic / Derek Thompson — `Workism Is Making Americans Miserable`;
2. WIRED UK / John Gerzema — `'Embracing failure' isn't the right way to succeed`.

Cross-example findings selected for C027:

- establish the argumentative position early;
- let developed examples carry the middle;
- use normal multi-sentence paragraphs by default for this assignment;
- do not use second-person coaching as the organizing voice;
- use a real counterargument/concession;
- do not require rhetorical questions or quippy metaphors;
- end by narrowing/resolving the argument rather than motivating the reader.

Anti-imitation boundary:

Do not copy Thompson's religious metaphor system/coinage or Gerzema's quippy failure metaphors/rhetorical cadence. Do not reproduce sentence sequences or house voice from either publication.

#### Revised C027 writing decisions awaiting approval

- Perspective form remains correct;
- thesis within the first 3-5 paragraphs;
- ordinary hypothetical contrast is allowed and must be obviously hypothetical;
- maximum two developed examples by default;
- normal multi-sentence paragraphs, with one-sentence paragraphs only for genuine structural turns;
- no named framework such as `carryover`;
- no rhetorical-question lead or ending;
- minimal second person;
- structural constraints appear before the main counterargument;
- `I learned a lot` rationalization is the main adversarial turn;
- ending is declarative and bounded;
- headline, dek, and description remain separate later jobs.

### C009 - PUBLISHED / WRITING RE-AUDIT REQUIRED

**What 'higher-value work' means in Philippine IT-BPM**

Packet:

`research/stories/it-bpm-higher-value-work/`

Its evidence base remains valuable.

When C009 begins, it must receive fresh Explained-purpose research plus its own professional-form and 2-4 human-edited exemplar study. Do not reuse C027's Perspective mechanics.

### C030 - DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED

Working title:

**What actually changed?**

Packet:

`research/stories/what-actually-changed/`

The core editorial idea remains available, but previous prose is reopened under the upgraded writing system.

C030 must receive its own founding/editorial-Perspective style research before another draft.

The migration-preserved dek is not final.

C030 remains `status: draft`, `featured: false`, with no `publishedAt`. Production must continue to exclude it.

## Current editorial model

Top-level topics:

- Business
- Technology
- Startups
- AI
- Building

Normal editorial types:

- Reported
- Explained
- Guide
- Profile
- Analysis
- Perspective
- Field Notes

Partner is commercial content and must be unmistakably labeled.

Primary reader needs:

- Update
- Understand
- Interpret
- Decide

## Active research assignments

### C001 - ACTIVE / FLAGSHIP / CONTINUE

Question:

> What separates an AI pilot from a production system inside a Philippine company?

Packet:

`research/stories/ai-pilot-to-production/`

Current state:

`CONTINUE / OUTREACH READY`.

Important unresolved contradiction:

The Swarm Philippine AI Report 2025 narrative says 65% remain at proof-of-concept while a chart on the same page shows 40%. Do not use 65% as a clean factual anchor until reconciled.

No draft is authorized until the reporting threshold is met and the per-story style-research + style-brief gates are complete.

### C021 - ACTIVE / SOURCE RECONNAISSANCE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Packet:

`research/stories/data-center-capacity-ledger/`

Keep operating, under-construction, committed, and announced capacity separate. Prefer IT-load MW and do not silently equate it with utility, energized, or facility power.

No national subtotal is publication-ready.

### C017 - WAITING / EXTERNAL CLARIFICATION

Question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Packet:

`research/stories/zero-fee-merchant-payments/`

Needs narrow written BSP/PPMI clarification. It should not block launch work.

### C029 - HOLD / FUTURE AUDIENCE RESEARCH

Packet:

`research/stories/second-question-after-headline/`

The original behavior question remains potentially valuable. The Reddit-led launch corpus is rejected as the evidentiary backbone. Revisit when professional primary-data collection is feasible.

## Deployment state

Cloudflare Pages project:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Still pending before final public launch:

- final public domain;
- production `SITE_URL` after domain connection;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enable/verification;
- final beehiiv opt-in redirect to canonical `/confirmed`;
- final-domain subscribe/confirm/unsubscribe QA;
- mailing-address/compliance clearance before first public newsletter send;
- final browser/responsive/link/console QA;
- MFA/passkeys where applicable.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Writing system | PASS / UPGRADED |
| Per-story style-research standard | PASS / CANONICAL |
| Site copy + IA | PASS / DEPLOYED USER APPROVED |
| Phase 2 local `npm run build` | NOT RECORDED |
| Privacy vs current signup code | PASS |
| Synthetic fixture direct production/sitemap check | PENDING FINAL RELEASE QA |
| C027 style research | COMPLETE |
| C027 revised style brief | PROPOSED / USER REVIEW REQUIRED |
| C027 public story | PUBLISHED / OLD PROSE STILL LIVE |
| C027 pre-standard rewrite v1/v2 | DIAGNOSTIC ONLY / NOT FINAL |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Obtain Louda Tuppal's approval or revision of the research-derived C027 style brief.**

If approved:

1. mark `style-brief.md` approved;
2. write a **new** C027 draft after the style research gate, not by polishing `rewrite-v2.md`;
3. use only the authorized evidence/argument and researched writing mechanics;
4. run adversarial, claim, structure, imitation, and AI-slop passes;
5. research/audit headline, dek, and description as separate jobs;
6. present the complete candidate for user review before replacing the live public story;
7. do not begin C009 until C027 is approved or deliberately paused.