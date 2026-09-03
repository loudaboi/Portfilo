# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 3 C027 EDITORIAL REPAIR COMPLETE IN SOURCE / DEPLOYED VERIFICATION REQUIRED**

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

The writing system separates four questions before substantial public prose:

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
  -> deployed verification
```

`docs/STYLE_RESEARCH_STANDARD.md` is canonical for the per-story style-research gate.

Default human-edited exemplar target:

**2-4 relevant pieces chosen because they solve a similar writing problem.**

More examples may be used for a narrow framing problem when the initial comparison is insufficient.

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

**ACTIVE / C027 EDITORIAL REPAIR COMPLETE IN SOURCE / DEPLOYED VERIFICATION REQUIRED**

Repair order:

1. C027 Perspective;
2. C009 Explained;
3. C030 founding Perspective.

Do not rewrite all three in one undifferentiated pass.

### C027 - source updated / deployed verification pending

Story:

**Build things that make the next thing easier**

Packet:

`research/stories/building-the-foundation/`

Key records:

- `style-research.md`
- `style-brief.md`
- `rewrite-v5-researched.md`
- `headline-dek-description-research.md` — first framing pass, rejected/superseded
- `headline-dek-description-research-v2.md`
- `dek-research.md`
- `description-research.md`
- `final-review.md`

Published source:

`src/content/stories/build-things-that-make-the-next-thing-easier.md`

#### C027 approvals

Louda Tuppal approved on 2026-09-03:

- mandatory per-story style-research direction;
- research-derived Perspective style brief;
- researched V5 body;
- headline;
- final dek;
- final description/card/metadata summary;
- complete publication package.

Approved headline:

`Build things that make the next thing easier`

Approved dek:

`An early project should leave you with more than a story about what you learned.`

Approved description:

`A project deserves credit beyond its direct result only when the work itself changes a later choice or produces something that can actually be used again.`

#### C027 research/writing decisions

Reader need:

`Interpret`

Content type:

`Perspective`

Approved mechanics:

- argument becomes clear early;
- two developed hypothetical examples by default;
- normal multi-sentence paragraphs rather than dramatic compression;
- no named framework such as `carryover`;
- no rhetorical-question lead or ending;
- minimal second-person coaching;
- structural constraints remain inside the argument;
- explicit attack on retrospective `I learned a lot` rationalization;
- declarative, bounded ending;
- no unverified factual examples;
- human-edited examples used for function/mechanics only, never voice imitation.

The first framing proposal that centered failure was rejected and superseded. The later two-sentence dek beginning `The result still comes first. Beyond that...` was also rejected as weak, overly structured AI-shaped prose.

Dedicated dek research found that the second line should do one additional job rather than reproduce the article's internal logic. Dedicated description research confirmed that `description` is visible card copy on the homepage and `/stories`, while also serving metadata, so schema-like copy such as `A Perspective on...` was rejected.

#### C027 implementation

The complete approved package was written to the published story source on `build/portfilo-v0`.

Source update commit:

`b98922ea1ce8f780ef32cefda4e647db05b5f0f7`

Repository re-fetch confirmed:

- approved headline present;
- approved dek present;
- approved description present;
- approved V5 body present;
- `contentType: perspective` preserved;
- `topic: building` preserved;
- author `Louda Tuppal` preserved;
- `publishedAt: 2026-09-03` preserved;
- `status: published` preserved;
- `featured: true` preserved.

Final review record commit:

`954dbf6c1f3b5292d1e144d6b57d193686e852b4`

#### C027 validation boundary

Repository/source verification: **PASS**.

Local `npm run build`: **NOT RUN / NOT CLAIMED**.

Cloudflare deployed-page verification: **PENDING**.

A direct deployed-page check could not be completed from the available web/runtime path in the implementation session. Do not treat the GitHub source update as proof that Cloudflare already serves the new build.

Deployed verification must confirm:

1. approved headline;
2. approved dek;
3. opening begins `Imagine two people each spend several months on a small software product.`;
4. approved description appears correctly on homepage and `/stories` card surfaces;
5. no obvious rendering/regression issue on the article page.

Do not begin C009 until C027 deployed verification passes or Louda explicitly chooses to proceed while recording that validation debt.

### C009 - PUBLISHED / WRITING RE-AUDIT REQUIRED

**What 'higher-value work' means in Philippine IT-BPM**

Packet:

`research/stories/it-bpm-higher-value-work/`

Its evidence base remains valuable.

When C009 begins, it must receive fresh research for its own reader purpose and writing mechanics. Do not reuse C027's Perspective mechanics.

Expected form remains `Explained`, subject to fresh per-story verification.

Known prior issues:

- current dek/description were mechanically duplicated during schema migration;
- reader-question flow needs deliberate review;
- caveats currently repeat;
- the evidence can support an explainer but cannot establish population shares, pay premiums, growth rates, or transition probabilities from the existing non-random job-posting sample.

No new research is required merely to rewrite existing supported claims, but any new factual claim must return to the evidence packet.

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
| C027 style research | COMPLETE |
| C027 style brief | APPROVED |
| C027 researched body V5 | APPROVED |
| C027 headline | APPROVED |
| C027 dek | APPROVED |
| C027 description | APPROVED |
| C027 source implementation | PASS |
| C027 deployed verification | PENDING |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Verify the deployed C027 rewrite on Cloudflare Pages.**

Check:

1. story page headline/dek/body opening and overall rendering;
2. homepage Featured card description;
3. `/stories` archive description;
4. desktop and mobile readability if available;
5. no obvious navigation or metadata regression.

If deployed verification passes, record **C027 DEPLOYED USER REVIEW: PASS** and begin C009 only after explicit Phase 3 continuation approval or an explicit instruction to proceed.
