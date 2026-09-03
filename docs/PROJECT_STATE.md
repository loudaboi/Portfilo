# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 2 COMPLETE / PHASE 3 C027 STYLE BRIEF PROPOSED**

Portfilo's publishing system, research standards, first published stories, `/stories` archive, and Portfilo Brief foundation remain in place.

The current system-level correction addresses a specific failure mode: verified ideas and product decisions being presented through generic, invented, or AI-shaped prose.

Core rules:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero stylistic authority.**

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
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `research/README.md`
- `research/STYLE_BRIEF_TEMPLATE.md`

Design:

- `docs/DESIGN_DIRECTION.md`

Email/deployment:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

## Writing-system state

Phase 1 is complete.

`docs/WRITING_SYSTEM.md` is canonical for writing-form selection and stylistic authority.

Every substantial story requires a pre-draft `style-brief.md` using `research/STYLE_BRIEF_TEMPLATE.md`.

AI may assist with drafting and editing after the writing form is selected. It does not establish facts, silently choose the authoritative structure or voice, or invent Portfilo's institutional position.

Existing published Portfilo prose is not automatically an approved style exemplar.

## Phase 2A - metadata and information architecture

Status:

**IMPLEMENTED / DEPLOYED USER REVIEW PASS**

Implemented:

- story schema split into `title`, `dek`, and `description`;
- story pages render `dek`;
- cards/archive/search/social metadata use `description`;
- `/stories` archive exists and lists published stories newest first;
- global navigation uses `Stories` -> `/stories`;
- homepage retains `Latest` as a section label;
- confirmation and 404 actions use `Browse stories` -> `/stories`;
- synthetic `fixture: true` series are excluded from production static paths while remaining available in development;
- retired package positioning was replaced with the literal package description `Portfilo is a business and technology publication.`

User deployed review on Cloudflare Pages confirmed `/stories` was visible and usable and normal article pages did not show synthetic series treatment.

A local `npm run build` was not run or reported for Phase 2A. Do not convert deployed visual review into a claim that local build validation passed.

One narrow final-release check remains: directly confirm that `/series/content-architecture-fixtures` and any corresponding sitemap entry are absent from production.

## Phase 2B - site copy

Status:

**IMPLEMENTED / DEPLOYED USER REVIEW PASS**

Implementation record:

`docs/SITE_COPY_IMPLEMENTATION.md`

Louda Tuppal approved the deployed Phase 2B result on 2026-09-03.

### Homepage

- removed the temporary fixture-era descriptor;
- removed repeated `Featured story` labeling;
- removed repeated `Published stories` labeling while retaining the Latest story count;
- kept the approved topic taxonomy, literal About statement, story metadata, and operational Portfilo Brief copy;
- introduced no replacement tagline or marketing slogan.

### About

- replaced `Stories take different forms.` with the literal `Editorial types`;
- aligned format copy with the editorial standard;
- normal editorial formats are Reported, Explained, Guide, Profile, Analysis, Perspective, and Field Notes;
- commercial Partner content is described separately because it is classified as commercial content.

### Research & Standards

- removed the slogan-like closing `The evidence sets the limit.` rather than replacing it;
- preserved substantive sourcing, verification, correction, and commercial-independence procedures;
- aligned the public AI section with the Writing System;
- public copy now states that AI is not editorial authority for structure, voice, or institutional claims.

### Subscribe

- retained the literal product promise, form instructions, status/error copy, schedule status, confirmation requirement, and unsubscribe statement;
- replaced repeated `New stories by email.` section copy with `Subscription details`;
- removed the duplicate beehiiv/provider explanation from Subscribe because provider handling already belongs on Privacy.

### Confirmation / 404

No additional Phase 2B copy change was required after Phase 2A changed their archive action to `Browse stories`.

### Privacy

Privacy was checked against `functions/api/subscribe.js` and remains consistent with the current Cloudflare -> beehiiv signup flow.

No personality rewrite was made.

Re-verify Privacy before final launch if Cloudflare Web Analytics or another data-processing feature is enabled.

## Phase 3 - story writing repair

Status:

**ACTIVE / C027 STYLE BRIEF PROPOSED / USER APPROVAL REQUIRED**

Repair order remains:

1. C027 Perspective;
2. C009 Explained;
3. C030 founding Perspective.

Do not rewrite all three in one undifferentiated pass.

### C027 style brief

New pre-rewrite brief:

`research/stories/building-the-foundation/style-brief.md`

Current state:

`PROPOSED / USER APPROVAL REQUIRED / NO REWRITE AUTHORIZED`

The brief uses the Portfilo Perspective recipe plus professional form guidance from Poynter, The OpEd Project, Nieman Storyboard, and the existing C027 structure research.

Key decisions proposed:

- keep the central changed-starting-point argument;
- use a contrast-led argumentative funnel;
- establish the thesis early;
- use a maximum of two developed example domains unless the material genuinely requires another;
- attack the strongest failure mode directly: retrospective `I learned a lot` rationalization;
- keep structural constraints inside the argument rather than adding them as a late disclaimer;
- remove dependence on the coined `carryover` term;
- use normal paragraph prose instead of dramatic one-line rhythm;
- avoid repeated rhetorical questions, `not X, but Y` scaffolding, exhaustive asset lists, and motivational escalation;
- do not use human-edited exemplars as sentence-level voice models;
- re-audit headline, dek, and description only after the new body survives the writing gates.

No public C027 prose has been changed in Phase 3 yet.

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

## Existing story state

### C027 - PUBLISHED / FEATURED / STYLE BRIEF PROPOSED

**Build things that make the next thing easier**

Packet:

`research/stories/building-the-foundation/`

Style brief:

`research/stories/building-the-foundation/style-brief.md`

The premise remains available. Current public prose remains live while the rewrite is gated.

Do not rewrite until Louda approves or revises the proposed style brief.

Do not automatically unpublish it.

### C009 - PUBLISHED / WRITING RE-AUDIT REQUIRED

**What 'higher-value work' means in Philippine IT-BPM**

Packet:

`research/stories/it-bpm-higher-value-work/`

Its evidence base remains valuable. After C027 is completed, the next writing task is an Explained style brief, reader-question structure review, and deliberate separation of final `dek` from compact `description`.

### C030 - DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED

Working title:

**What actually changed?**

Packet:

`research/stories/what-actually-changed/`

The core editorial idea remains available, but the previous prose is reopened under the new writing system.

The old migration-preserved dek is not final.

C030 remains `status: draft`, `featured: false`, with no `publishedAt`. Production must continue to exclude it.

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

No draft is authorized until the reporting threshold is met and a writing style brief is approved.

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
| Writing system | PASS / CANONICAL |
| Site copy + IA audit | PASS / APPROVED |
| Phase 2A deployed user review | PASS |
| Phase 2A local `npm run build` | NOT RECORDED |
| Phase 2B repository/source review | PASS |
| Phase 2B Cloudflare visual review | PASS / USER APPROVED |
| Privacy vs current signup code | PASS |
| Synthetic fixture direct production/sitemap check | PENDING FINAL RELEASE QA |
| C027 style brief | PROPOSED / USER REVIEW REQUIRED |
| C027 public story | PUBLISHED / CURRENT PROSE STILL LIVE |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Obtain Louda Tuppal's approval or revision of the proposed C027 style brief.**

If approved:

1. mark `research/stories/building-the-foundation/style-brief.md` as approved;
2. rewrite C027 from the approved argument and form rather than line-editing the current prose;
3. preserve the current evidence/claim boundaries and do not introduce unverified factual examples;
4. run adversarial, claim, structure, and AI-slop passes;
5. author headline, dek, and description as three separate jobs;
6. present the rewritten C027 for user review before replacing the live public story text;
7. do not begin C009 until C027 is approved or deliberately paused.
