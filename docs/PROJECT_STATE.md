# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 3 C027 BODY + HEADLINE APPROVED / DEK RESEARCH COMPLETE / DEK AWAITING USER APPROVAL**

Portfilo's publishing system, research standards, `/stories` archive, site-copy correction, first published stories, and Portfilo Brief foundation remain in place.

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

The writing system now separates four questions before prose:

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
  -> draft
  -> adversarial / claim / structure / imitation / AI-slop review
  -> headline / dek / description research and audit
  -> final human approval
  -> publish / update
```

`docs/STYLE_RESEARCH_STANDARD.md` is canonical for the per-story style-research gate.

Default human-edited exemplar target:

**2-4 relevant pieces chosen because they solve a similar writing problem.**

More examples may be used for a narrow sub-problem such as headline/dek framing when the initial comparison is insufficient.

Exemplars are used to study transferable editorial decisions. They are never wording, cadence, metaphor, joke, branded-term, or house-voice authority.

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

A local `npm run build` for Phase 2 remains **NOT RECORDED**. Do not convert deployed user review into a local-build claim.

One final-release check remains: directly confirm `/series/content-architecture-fixtures` and any sitemap entry are absent from production.

## Phase 3 - story writing repair

Status:

**ACTIVE / C027 BODY + HEADLINE APPROVED / DEK RESEARCH COMPLETE / DEK USER REVIEW REQUIRED**

Repair order:

1. C027 Perspective;
2. C009 Explained;
3. C030 founding Perspective.

Do not rewrite all three in one undifferentiated pass.

### C027 - current repair state

Published story currently live:

**Build things that make the next thing easier**

Packet:

`research/stories/building-the-foundation/`

Style research:

`research/stories/building-the-foundation/style-research.md`

Research-derived decision brief:

`research/stories/building-the-foundation/style-brief.md`

Approved researched body candidate:

`research/stories/building-the-foundation/rewrite-v5-researched.md`

Deeper framing research:

`research/stories/building-the-foundation/headline-dek-description-research-v2.md`

Dek-specific research:

`research/stories/building-the-foundation/dek-research.md`

#### C027 approvals already granted

- mandatory per-story style research: COMPLETE;
- revised style brief: APPROVED by Louda Tuppal on 2026-09-03;
- researched body V5: APPROVED by Louda Tuppal on 2026-09-03;
- headline `Build things that make the next thing easier`: APPROVED by Louda Tuppal on 2026-09-03.

The currently published C027 has **not** yet been replaced. Its older prose remains live until the remaining framing and final package are approved.

#### C027 body direction

Reader need:

`Interpret`

Content type:

`Perspective`

Body principles now approved:

- thesis early;
- two developed hypothetical examples by default;
- normal multi-sentence paragraphs;
- no named framework such as `carryover`;
- no rhetorical-question lead or ending;
- minimal second person;
- structural constraints inside the argument;
- explicit `I learned a lot` rationalization challenge;
- declarative, bounded ending;
- no unverified factual examples.

#### C027 framing history

First framing research:

`headline-dek-description-research.md`

Status:

**REJECTED BY USER / SUPERSEDED.**

The rejected package over-centered failure with the proposed headline:

`A failed project can still change what comes next`

The first pass used legitimate general headline guidance but the comparison set was too small for the exact framing problem, and the final wording narrowed the story more than the approved body justified.

#### C027 deeper framing research V2

The second pass expanded the human-edited headline comparison across The Atlantic, Harvard Business Review, and WIRED and classified headline patterns rather than treating one publication as a voice model.

Key finding:

**imperative headlines are not automatically Guide headlines.** Edited Perspectives/advice-analysis pieces use imperatives when the imperative itself is the argument.

Louda approved retaining:

`Build things that make the next thing easier`

The V2 dek was then rejected by Louda as weak, overly structured AI-shaped prose:

`The result still comes first. Beyond that, the work should only count if it changes how the next attempt begins in a concrete way.`

Status:

**HEADLINE APPROVED / V2 DEK REJECTED / DESCRIPTION NOT YET APPROVED.**

#### C027 dek-specific research

The dek pass reviewed the actual second-line behavior of human-edited argumentative pieces from The Atlantic and WIRED rather than relying on general headline guidance.

Key findings:

- a strong dek normally does one additional job beneath the headline: scope, consequence, mechanism, tension, or concrete entry point;
- it does not need to summarize every caveat or reproduce the style brief;
- the rejected V2 dek failed because it exposed the internal proposition -> transition -> proposition scaffold;
- C027's most useful missing layer under the optimistic headline is the anti-rationalization tension around `I learned a lot`;
- one sentence is sufficient; no two-sentence structure is required.

Proposed dek:

`An early project should leave you with more than a story about what you learned.`

Status:

**USER APPROVAL REQUIRED.**

Description remains pending until headline + dek are locked.

No live-story change is authorized until the complete C027 package is approved.

### C009 - PUBLISHED / WRITING RE-AUDIT REQUIRED

**What 'higher-value work' means in Philippine IT-BPM**

Packet:

`research/stories/it-bpm-higher-value-work/`

Its evidence base remains valuable.

When C009 begins, it must receive fresh Explained-purpose research plus its own professional-form and human-edited exemplar study. Do not reuse C027's Perspective mechanics.

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
| C027 revised style brief | APPROVED |
| C027 researched body V5 | APPROVED |
| C027 headline | APPROVED |
| C027 first framing package | REJECTED / SUPERSEDED |
| C027 V2 dek | REJECTED |
| C027 dek-specific research | COMPLETE / USER REVIEW REQUIRED |
| C027 description | PENDING |
| C027 public story | PUBLISHED / OLD PROSE STILL LIVE |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Obtain Louda Tuppal's approval or revision of the C027 dek candidate.**

If approved:

1. lock headline + dek;
2. research/audit the compact description as its own metadata/card job;
3. assemble the complete candidate with the already approved researched body;
4. obtain final package approval before replacing the live public story;
5. verify the deployed story before calling C027 repair complete;
6. only then begin C009.
