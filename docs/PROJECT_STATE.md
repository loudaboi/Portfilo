# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 3 C027 COMPLETE / C009 STYLE BRIEF APPROVED / C009 V3 BODY AWAITING USER REVIEW**

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

**ACTIVE / C027 COMPLETE / C009 V3 BODY USER REVIEW REQUIRED**

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

### C009 - ACTIVE / BODY REVIEW

Published story:

**What 'higher-value work' means in Philippine IT-BPM**

Published source:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

Packet:

`research/stories/it-bpm-higher-value-work/`

Writing-system records:

- `style-research.md`
- `style-brief.md`
- `rewrite-v1-researched.md`
- `rewrite-v2-researched.md`
- `rewrite-v3-researched.md`
- `rewrite-review.md`

Current state:

**STYLE RESEARCH COMPLETE / STYLE BRIEF APPROVED / V3 BODY CANDIDATE AWAITING USER REVIEW / LIVE STORY UNCHANGED.**

The current published prose remains live until a complete replacement body and later framing package are separately approved.

#### C009 subject direction

Reader need:

`Understand`

Content type:

`Explained`

Publishable question:

> What does `higher-value work` actually mean when translated into Philippine IT-BPM roles and responsibilities?

Fresh 2026 source verification retained the story direction:

- IBPAP's July 2026 outlook says the industry's next phase should depend less on workforce scale and more on higher-value capabilities and AI-enabled talent;
- OECD's 2026 Philippines survey describes a sector still concentrated in contact centers/back-office operations while diversifying into GCCs, healthcare information management, IT and software.

These sources support explaining the phrase. They do not prove prevalence, wage premiums or worker-transition outcomes.

Existing packet files remain factual authority for the rewrite, especially `sources.md`, `sample.md`, `evidence.md`, `contradictions.md`, and `fact-check.md`.

Any new factual claim must return to research.

#### C009 style research and approved brief

Professional guidance used:

- Poynter civic-clarity guidance;
- Poynter reader-question/focus guidance;
- Poynter alternative-story-form research;
- Poynter structure guidance.

Human-edited explainer examples reviewed:

1. Reuters — `U.S. vaccine rollout's next challenge: Verifying who is 'essential'`;
2. Reuters — `Why is mpox an emergency again, and how worried should I be?`;
3. The Guardian — `What is neijuan, and why is China worried about it?`.

Approved transferable decisions:

- answer the literal definition near the top;
- organize around actual reader questions rather than the research taxonomy;
- make ambiguity part of the answer because the phrase is not a formal occupation class;
- use a small number of role examples to prove distinctions rather than catalogue all 15 postings;
- put caveats where they constrain the relevant answer;
- do not publish the five analytical dimensions as a branded Portfilo framework;
- use normal multi-sentence explanatory paragraphs;
- end on the evidence boundary rather than an upskilling or AI-opportunity slogan.

Louda Tuppal approved `style-brief.md` on 2026-09-03.

Anti-imitation boundary:

Do not copy Reuters wire cadence/all-caps Q&A styling, Guardian phrasing, or sentence-level language from any comparator.

#### C009 approved structure

1. What does `higher-value work` mean here?
2. Is it basically AI or non-voice work?
3. What jobs actually fit the phrase?
4. Does specialized work have to be senior?
5. Does `higher value` mean higher pay or a better job?
6. Can workers move into these roles, and how common are they?

These are functional reader-question section jobs.

#### C009 rewrite history

`rewrite-v1-researched.md` was rejected internally as a user-review candidate because:

- `IT-BPM` was not expanded on first use;
- the opening IBPAP strategy claim lacked its primary-source link in the body;
- the ending partially restated the internal analytical dimensions.

`rewrite-v2-researched.md` was rejected internally because it reused the same Citi, Optum and Concentrix examples across consecutive question sections, creating repetition beneath an otherwise clean structure.

`rewrite-v3-researched.md` is the current body candidate.

V3 changes:

- links IBPAP's verified primary strategy source in the opening;
- expands IT-BPM on first use;
- gives the core answer in the opening four paragraphs;
- separates framework evidence from employer examples;
- uses Concentrix workforce management and Cognizant Systems Engineer as AI/non-voice/technical boundary cases;
- uses Citi credit risk, Optum clinical informatics and Cognizant capital-markets operations as distinct role examples;
- uses Johnson & Johnson finance masterdata only for the seniority question;
- places pay/job-quality limits only where they are relevant;
- closes on prevalence/pay/transition evidence limits.

`rewrite-review.md` records the claim, structure, imitation and AI-slop audit.

Internal result:

**V3 BODY CANDIDATE / USER REVIEW REQUIRED.**

#### C009 evidence boundaries retained in V3

- `higher-value work` is not presented as an official occupation class;
- 15-role sample is purposefully selected and illustrative, not random or weighted;
- no percentages or market-share estimates are derived from the sample;
- employer postings are described as advertised responsibilities, not direct observation of lived work;
- technical/non-voice/AI labels are not treated as automatic definitions;
- no wage-premium or better-job conclusion;
- no claim that specialist roles are growing fast enough to absorb displacement;
- no claim that frontline workers can transition into these roles at a measured rate;
- no Concentrix experience threshold is used because the source is internally inconsistent on that point.

#### C009 framing state

Current published headline remains a **strong candidate**, not yet locked:

`What 'higher-value work' means in Philippine IT-BPM`

Current mechanically duplicated `dek` and `description` are **not protected**.

Headline/dek/description research begins only after the replacement body is approved.

#### C009 exact gate

**Obtain Louda Tuppal's approval or revision of `rewrite-v3-researched.md`.**

If approved:

1. lock the body direction;
2. conduct dedicated headline research/audit;
3. conduct dek-specific research;
4. conduct description/card/metadata research;
5. obtain complete package approval before replacing the live story;
6. verify the deployed result before marking C009 complete.

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
| C009 style brief | APPROVED |
| C009 V1 | REJECTED INTERNALLY |
| C009 V2 | REJECTED INTERNALLY |
| C009 V3 body | USER REVIEW REQUIRED |
| C009 current public story | PUBLISHED / OLD PROSE STILL LIVE |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Obtain Louda Tuppal's approval or revision of the researched C009 V3 body.**

Do not change the live C009 story or begin framing work until that body decision.