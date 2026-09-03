# Portfilo Project State

_Last updated: 2026-09-04_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 3 C027 + C009 COMPLETE / C030 PUBLISHED IN SOURCE / DEPLOYED VERIFICATION PENDING**

Portfilo's publishing system, research standards, `/stories` archive, site-copy correction, published launch stories, and Portfilo Brief foundation remain in place.

Core rules:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero evidentiary authority.**

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

Existing Portfilo prose is not automatically a style exemplar merely because it was previously published.

If an assignment materially changes, re-research the writing approach.

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

**ACTIVE / C027 COMPLETE / C009 COMPLETE / C030 SOURCE PUBLISHED / C030 DEPLOYED VERIFICATION PENDING**

Repair order:

1. C027 Perspective — COMPLETE;
2. C009 Explained — COMPLETE;
3. C030 founding Perspective — SOURCE PUBLISHED / DEPLOYED VERIFICATION PENDING.

Phase 3 becomes complete only after C030's deployed story route and `/stories` listing pass review.

### C027 - COMPLETE

Story:

**Build things that make the next thing easier**

Packet:

`research/stories/building-the-foundation/`

Final review:

`research/stories/building-the-foundation/final-review.md`

Published source:

`src/content/stories/build-things-that-make-the-next-thing-easier.md`

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

### C009 - COMPLETE

Story:

**What 'higher-value work' means in Philippine IT-BPM**

Packet:

`research/stories/it-bpm-higher-value-work/`

Final review:

`research/stories/it-bpm-higher-value-work/final-review.md`

Published source:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

Approved headline:

`What 'higher-value work' means in Philippine IT-BPM`

Approved dek:

`The same industry phrase can point to credit analysis, clinical informatics or workforce planning.`

Approved description:

`Portfilo reviewed official Philippine skills frameworks and 15 current employer postings to see what higher-value work looks like in actual jobs.`

Evidence boundaries remain:

- `higher-value work` is not an official occupation class;
- the 15-role sample is purposefully selected and illustrative, not representative;
- postings show advertised responsibilities rather than observed day-to-day work;
- no general wage-premium, prevalence, growth-rate, or worker-transition claim is supported.

Validation:

- repository/source: **PASS**;
- Cloudflare deployed user review: **PASS**;
- local `npm run build`: **NOT RUN / NOT CLAIMED**.

C009's Explained mechanics are not precedent for later stories.

### C030 - PUBLISHED IN SOURCE / DEPLOYED VERIFICATION PENDING

Story:

**What actually changed?**

Packet:

`research/stories/what-actually-changed/`

Final review:

`research/stories/what-actually-changed/final-review.md`

Published source:

`src/content/stories/what-actually-changed.md`

Content type:

`Perspective`

Topic:

`Building`

Author:

`Louda Tuppal`

Approved headline:

`What actually changed?`

Approved dek:

`A business or technology development can mean something different once it changes what someone has to do or decide.`

Approved description:

`The meaning of a development often becomes clearer when it is followed into the choices and constraints it creates.`

Writing-system gates completed:

- C030-specific professional form research;
- human-edited founding/editorial exemplar research;
- `style-research.md`;
- approved `style-brief.md`;
- fresh body rewrite;
- structural, claim, institutional-provenance, imitation, and AI-slop review;
- body approval;
- dedicated headline research and approval;
- dedicated dek research and approval;
- dedicated description/card/metadata research and approval;
- explicit publication authorization from Louda Tuppal on 2026-09-04.

Publication state:

- `status: published`;
- `publishedAt: 2026-09-04`;
- `featured: false`.

Publication commit:

`9fa4eba2f55239d5560e4d3804db5f099fae2422`

Validation:

- repository/source publication: **PASS**;
- Cloudflare deployed story route: **PENDING**;
- Cloudflare `/stories` listing: **PENDING**;
- local `npm run build`: **NOT RUN / NOT CLAIMED**.

The title is story-specific. `What actually changed?` is not a permanent Portfilo tagline, recurring framework, or mandatory question for every story.

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

**AI output has zero evidentiary authority.**

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
- no C027/C009/C030 distribution authorized or sent as part of this repair phase.

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
| C009 editorial repair | COMPLETE |
| C009 deployed review | PASS / USER APPROVED |
| C030 editorial package | COMPLETE / APPROVED |
| C030 source publication | PASS |
| C030 deployed review | PENDING |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Verify C030 on the deployed Cloudflare site:**

1. story route renders the approved headline, dek and body;
2. `/stories` includes C030 with the approved description and publication date;
3. internal C009 link works;
4. mobile/desktop rendering is normal.

Do not mark Phase 3 complete until that deployed verification passes.
