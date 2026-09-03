# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 2B IMPLEMENTED / DEPLOYED VISUAL REVIEW REQUIRED**

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

**IMPLEMENTED / DEPLOYED VISUAL REVIEW REQUIRED**

Implementation record:

`docs/SITE_COPY_IMPLEMENTATION.md`

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

### C027 - PUBLISHED / FEATURED / WRITING RE-AUDIT REQUIRED

**Build things that make the next thing easier**

Packet:

`research/stories/building-the-foundation/`

The premise remains available. Structure, rhythm, examples, headline, dek, description, and prose must receive a Perspective style brief and writing-system re-audit before launch copy is considered final.

Do not automatically unpublish it.

### C009 - PUBLISHED / WRITING RE-AUDIT REQUIRED

**What 'higher-value work' means in Philippine IT-BPM**

Packet:

`research/stories/it-bpm-higher-value-work/`

Its evidence base remains valuable. The next writing task is an Explained style brief, reader-question structure review, and deliberate separation of final `dek` from compact `description`.

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
| Phase 2B Cloudflare visual review | PENDING |
| Privacy vs current signup code | PASS |
| Synthetic fixture direct production/sitemap check | PENDING FINAL RELEASE QA |
| C027 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Review Phase 2B on the deployed Cloudflare Pages site.**

Check:

1. homepage spacing after removal of the temporary descriptor and repeated labels;
2. About's `Editorial types` section on desktop and mobile;
3. Standards AI section and the transition from Commercial independence directly to the footer;
4. Subscribe's `Subscription details` section and removal of the duplicate provider section;
5. header/footer and `/stories` for regressions.

If Phase 2B passes deployed review, begin **Phase 3: three-story writing repair**, one story at a time under a new style brief.

Recommended order:

1. C027 Perspective;
2. C009 Explained;
3. C030 founding Perspective.

Do not rewrite all three in one undifferentiated pass.
