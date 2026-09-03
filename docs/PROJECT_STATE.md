# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 3 C027 COMPLETE / C009 STYLE RESEARCH COMPLETE / C009 STYLE BRIEF AWAITING USER APPROVAL**

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
  -> deployed verification
```

`docs/STYLE_RESEARCH_STANDARD.md` is canonical for the per-story style-research gate.

Default human-edited exemplar target:

**2-4 relevant pieces chosen because they solve a similar writing problem.**

More examples may be used for a narrow sub-problem such as headline/dek framing when the initial comparison is insufficient.

Exemplars authorize transferable editorial decisions only. They do not authorize copying wording, cadence, metaphors, jokes, branded terminology, rhetorical quirks, or house voice.

A model may execute approved editorial decisions. It may not supply missing style decisions from bare statistical intuition.

Existing Portfilo prose is not automatically a style exemplar merely because it was previously published.

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

**ACTIVE / C027 COMPLETE / C009 STYLE BRIEF PROPOSED**

Repair order:

1. C027 Perspective — COMPLETE;
2. C009 Explained — ACTIVE;
3. C030 founding Perspective — PENDING.

Do not rewrite all three in one undifferentiated pass.

### C027 - COMPLETE

Story:

**Build things that make the next thing easier**

Packet:

`research/stories/building-the-foundation/`

Final review:

`research/stories/building-the-foundation/final-review.md`

Published source:

`src/content/stories/build-things-that-make-the-next-thing-easier.md`

Louda Tuppal approved:

- per-story style research;
- research-derived Perspective brief;
- researched V5 body;
- headline;
- dedicated dek result;
- dedicated description/card/metadata result;
- final source package;
- deployed review.

Approved headline:

`Build things that make the next thing easier`

Approved dek:

`An early project should leave you with more than a story about what you learned.`

Approved description:

`A project deserves credit beyond its direct result only when the work itself changes a later choice or produces something that can actually be used again.`

Validation:

- repository/source: **PASS**;
- Cloudflare deployed user review: **PASS**;
- local `npm run build`: **NOT RUN / NOT CLAIMED**.

C027's Perspective mechanics are not precedent for later stories.

### C009 - ACTIVE / STYLE RESEARCH COMPLETE / STYLE BRIEF PROPOSED

Published story:

**What 'higher-value work' means in Philippine IT-BPM**

Published source:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

Packet:

`research/stories/it-bpm-higher-value-work/`

New writing-system records:

- `style-research.md`
- `style-brief.md`

Current state:

**STYLE RESEARCH COMPLETE / STYLE BRIEF PROPOSED / USER APPROVAL REQUIRED / NO REWRITE AUTHORIZED.**

The current published prose remains live until a complete replacement package is separately approved.

#### C009 subject direction

Reader need:

`Understand`

Content type:

`Explained`

Current publishable question:

> What does `higher-value work` actually mean when translated into Philippine IT-BPM roles and responsibilities?

Fresh 2026 source verification retained the story direction:

- IBPAP's July 2026 outlook says the industry's next phase should depend less on workforce scale and more on higher-value capabilities and AI-enabled talent, naming specialized areas including analytics, engineering, finance, healthcare information management, digital services and GCCs;
- OECD's 2026 Philippines survey describes a sector still concentrated in contact centers/back-office operations while diversifying into GCCs, healthcare information management, IT and software.

These sources support explaining the phrase. They do not prove prevalence, wage premiums or worker-transition outcomes.

Existing evidence packet remains the factual authority for the rewrite. Any new factual claim must return to `sources.md`, `sample.md`, `evidence.md` and `contradictions.md`.

#### C009 style research

Professional guidance used:

- Poynter civic-clarity guidance;
- Poynter reader-question/focus guidance;
- Poynter alternative-story-form research;
- Poynter structure guidance.

Human-edited explainer examples reviewed:

1. Reuters — `U.S. vaccine rollout's next challenge: Verifying who is 'essential'`;
2. Reuters — `Why is mpox an emergency again, and how worried should I be?`;
3. The Guardian — `What is neijuan, and why is China worried about it?`.

Selected transferable findings:

- answer the literal definition near the top;
- organize around actual reader questions rather than research taxonomy;
- make ambiguity part of the answer when a term is not a formal universal category;
- use a small number of examples to prove distinctions rather than catalogue the sample;
- put caveats where they constrain the relevant answer;
- reduce public-facing framework language when it reflects internal synthesis more than reader need.

Anti-imitation boundary:

Do not copy Reuters wire cadence/all-caps Q&A styling, Guardian phrasing, or sentence-level language from any comparator.

#### C009 proposed structure awaiting approval

1. What does `higher-value work` mean here?
2. Is it basically AI or non-voice work?
3. What jobs actually fit the phrase?
4. Does specialized work have to be senior?
5. Does `higher value` mean higher pay or a better job?
6. Can workers move into these roles, and how common are they?

These are section jobs, not locked polished headings.

Likely role examples, subject to final evidence check:

- Citi credit-risk analyst;
- Optum clinical informatics analyst;
- Concentrix workforce management;
- Johnson & Johnson finance masterdata analyst;
- Wells Fargo data analytics only if it performs a distinct explanatory job.

Method rule:

The 15-job sample remains illustrative, not random or weighted, and cannot estimate prevalence, growth, representative pay or transition rates.

Known writing risks:

- five analytical dimensions becoming an invented public framework;
- generic AI-future lead;
- `not X, but Y` definition loops;
- role/employer catalogue prose;
- repeated sample caveats;
- commercial `value` being confused with worker pay/job quality;
- ending with an upskilling or AI-opportunity slogan;
- reusing C027 Perspective cadence.

#### C009 framing state

Current published headline remains a **strong candidate**, not yet locked:

`What 'higher-value work' means in Philippine IT-BPM`

Current mechanically duplicated `dek` and `description` are **not protected**. They will be researched/audited as separate jobs only after the replacement body is approved.

#### C009 exact gate

**Obtain Louda Tuppal's approval or revision of `research/stories/it-bpm-higher-value-work/style-brief.md`.**

If approved:

1. write a fresh body from the approved reader-question explainer architecture rather than line-editing the published prose;
2. preserve all existing factual/evidence boundaries;
3. run adversarial, claim, structure, imitation and AI-slop reviews;
4. research headline/dek/description separately after body approval;
5. obtain complete package approval before replacing the current live story.

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

Core editorial rule:

**Help through reporting and evidence, not generic advice.**

Research rule:

**AI output has zero evidentiary weight.**

Writing rule:

**AI output has zero stylistic authority.**

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

Newsletter state:

- reusable Portfilo Brief foundation exists;
- double opt-in tested previously;
- sender: Portfilo;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email OFF;
- Smart Nudge OFF;
- no C027/C009 distribution authorized or sent as part of this repair phase.

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
| C027 editorial repair | COMPLETE |
| C027 deployed review | PASS / USER APPROVED |
| C009 subject-direction recheck | PASS |
| C009 style research | COMPLETE |
| C009 style brief | PROPOSED / USER REVIEW REQUIRED |
| C009 current public story | PUBLISHED / OLD PROSE STILL LIVE |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Obtain Louda Tuppal's approval or revision of the C009 research-derived style brief.**

No C009 rewrite is authorized until that approval.