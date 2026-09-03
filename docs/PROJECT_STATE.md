# Portfilo Project State

_Last updated: 2026-09-04_

## Current phase

**Portfilo v0 / Product Finalization - IMAGE SYSTEM APPROVED / HOMEPAGE FEATURED COVER PILOT / CONCEPT SELECTION REQUIRED**

Portfilo's publishing system, research standards, writing system, published launch stories, and Portfilo Brief foundation are in place. Phase 4 finalizes the visual/brand system and then performs the full engineering, security, SEO, accessibility, performance, and release audit before v0 is declared a working product.

Core rules:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero evidentiary authority.**

> **AI output has zero stylistic authority.**

> **Research the writing problem before asking AI to write.**

> **Research the visual problem before asking AI to generate the image.**

> **AI output has zero visual authority.**

> **Human approval is scoped to the gate explicitly awaiting approval.**

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

Design / imagery:

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `research/image-system/research.md`
- `research/image-system/homepage-featured-cover-research.md`
- `research/IMAGE_BRIEF_TEMPLATE.md`

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

**COMPLETE / C027 + C009 + C030 DEPLOYED USER REVIEW PASS**

Repair order completed:

1. C027 Perspective — COMPLETE;
2. C009 Explained — COMPLETE;
3. C030 founding Perspective — COMPLETE.

All three stories went through assignment-specific style/form research rather than inheriting one another's mechanics.

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

### C030 - COMPLETE

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
- Cloudflare deployed user review: **PASS** — Louda Tuppal confirmed C030 passed on 2026-09-04;
- local `npm run build`: **NOT RUN / NOT CLAIMED**.

The title is story-specific. `What actually changed?` is not a permanent Portfilo tagline, recurring framework, or mandatory question for every story.

## Phase 4 - product finalization

Status:

**ACTIVE / IMAGE SYSTEM APPROVED / HOMEPAGE FEATURED COVER PILOT / CONCEPT SELECTION REQUIRED**

The remaining v0 product-finalization work is intentionally kept on `build/portfilo-v0`.

### 4A - editorial image system

Canonical standard:

`docs/IMAGE_SYSTEM.md`

Research basis:

`research/image-system/research.md`

Homepage featured-cover research:

`research/image-system/homepage-featured-cover-research.md`

Reusable per-story brief:

`research/IMAGE_BRIEF_TEMPLATE.md`

Louda Tuppal approved the image system on 2026-09-04.

Non-negotiable rules:

- AI output has zero visual authority;
- do not begin with an image prompt;
- story/evidence extraction and an image-necessity decision come first for story imagery;
- develop materially different concepts before visual execution;
- a human selects the concept/system direction;
- brief approval and generation authorization are separate human-controlled gates;
- the derived generator instruction must be presented before generation authorization;
- no image-generation call may occur unless the current human message explicitly authorizes generation or directly answers yes to the immediately preceding question asking whether to generate;
- generated images are editorial illustration, never documentary evidence;
- a human selects final generated imagery after factual-implication, artifact, crop, color, accessibility, and disclosure review;
- the first generated image does not become visual precedent merely because it was first.

Approved image-system baseline:

- monochrome / grayscale editorial treatment;
- strong geometry, directional/low-key light, visible texture/grain;
- zero or one chromatic accent;
- approved accents only: Portfilo blue `#0050a4` or Portfilo red `#b42318`;
- no unrelated hue;
- no generated typography;
- generated imagery requires visible synthetic/AI disclosure when published.

Current homepage implementation facts:

- `src/pages/index.astro` selects the featured story from `featured: true`, otherwise the newest published story;
- the black `feature-panel` currently renders the featured story's editorial type, topic, and author;
- the large central word is the story `topic`;
- canonical topics in `src/content.config.ts` are Business, Technology, Startups, AI, and Building;
- therefore a deterministic topic-cover pilot has five v0 contexts;
- no image asset is currently used inside the black feature panel.

### Active pilot - homepage featured cover system

Louda Tuppal approved the pivot to start with the homepage black featured cover before continuing C030 story-image generation on 2026-09-04.

Research status:

- current panel behavior inspected: **YES**;
- professional/editorial visual-system research: **COMPLETE**;
- research packet: `research/image-system/homepage-featured-cover-research.md`;
- proposed v0 asset count: **5 canonical topic assets**;
- system logic to evaluate: `featured story -> topic -> topic cover asset`;
- shared grammar: realistic editorial illustration, grayscale, strong geometry, directional/low-key light, restrained grain, no generated typography, no fake logos/screens/documents;
- topic should change subject/context, not create five unrelated art styles;
- image generation authorization: **NO**;
- implementation authorization: **NO**.

System-level concepts awaiting human selection:

- **A — Working Worlds:** realistic generic environments, environment-led, anonymous people secondary;
- **B — Material Evidence of Work:** realistic tools/materials/components/process traces, close/medium views;
- **C — Human Work, Environment Secondary:** anonymous partial people/hands performing topic-relevant work.

Exact gate:

**Select or revise homepage featured-cover Direction A, B, or C.**

After direction selection:

1. define the five topic expressions inside the selected shared grammar;
2. create a concise homepage featured-cover visual brief;
3. obtain human brief approval;
4. derive and present generation instructions;
5. obtain separate explicit generation authorization;
6. generate only a small representative set before producing all five if that reduces rework;
7. audit the assets together in the actual homepage context before implementation is locked.

### Paused C030 story-image pilot

C030 remains valid but intentionally paused while the homepage featured-cover pilot establishes the broader visual direction.

Current C030 state:

- pilot story: `C030 — What actually changed?`;
- image-necessity gate: `GENERATED ILLUSTRATION`;
- human-selected concept: `Concept B — The Reconfigured Path`;
- selected treatment: realistic grayscale editorial illustration, not cartoon/anime or overtly symbolic art;
- `research/stories/what-actually-changed/image-brief.md`: **APPROVED**;
- generator instruction `v1`: **PRESENTED**;
- image generation authorization: **NO**;
- valid candidate set: **NONE**;
- resume only after the homepage cover pilot or a later explicit human decision.

Workflow correction recorded on 2026-09-04:

Two accidental image-generation calls occurred in chat immediately after C030 image-brief approval. They produced document-style mockups rather than valid C030 editorial candidates. Those outputs have **zero project authority**, were not committed, are not candidates, and must not be used as visual precedent. The canonical image workflow was corrected so image-brief approval cannot silently authorize generation.

### 4B - brand asset system

Pending after the image-pilot direction is established.

Required v0 outcomes include:

- final Portfilo wordmark/brand-mark decision;
- favicon/site icon;
- social avatar;
- monochrome and light/dark usage;
- default site social-preview composition;
- usage rules sufficient for consistent site/email/social application.

### 4C - full site engineering / security / SEO / quality audit

Pending after the visual and brand layers are implemented.

The audit must cover the complete v0 product, including:

- Astro/content architecture and code quality;
- dependencies and secret exposure;
- Cloudflare subscription function and security controls;
- accessibility and responsive behavior;
- performance and image delivery;
- canonical/robots/sitemap metadata;
- Open Graph/X previews;
- structured data and story-specific image metadata;
- internal links, 404/error states, browser console, and fixture leakage;
- final deployment/domain configuration.

A successful audit must record actual checks and findings. Do not infer a pass from code inspection alone.

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
- no C027/C009/C030 distribution authorized or sent as part of the story-repair phase.

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
| C030 editorial repair | COMPLETE |
| C030 deployed review | PASS / USER APPROVED |
| Phase 3 story writing repair | COMPLETE |
| Editorial image system | APPROVED / CANONICAL / SEPARATE GENERATION AUTHORIZATION REQUIRED |
| Homepage featured-cover pilot | RESEARCH COMPLETE / DIRECTION SELECTION REQUIRED |
| C030 story-image pilot | PAUSED / BRIEF APPROVED / GENERATION NOT AUTHORIZED |
| Brand asset system | PENDING |
| Full engineering/security/SEO audit | PENDING |
| C001 | ACTIVE / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Production build for final release | PENDING FRESH VALIDATION |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Select or revise one shared visual direction for the homepage featured-cover system.**

Candidates:

- `A — Working Worlds`;
- `B — Material Evidence of Work`;
- `C — Human Work, Environment Secondary`.

Current gate state:

- homepage panel behavior: **INSPECTED**;
- five topic contexts: **CONFIRMED**;
- professional/editorial visual-system research: **COMPLETE**;
- system concepts: **READY FOR HUMAN SELECTION**;
- image generation authorization: **NO**;
- implementation authorization: **NO**;
- C030 generation authorization: **NO / PAUSED**.

After human direction selection, create the five-topic visual brief and stop for approval before any image-generation instruction is authorized.

Fresh local production-build validation and final-release QA remain required later in Phase 4; they have not been waived or converted into a pass.