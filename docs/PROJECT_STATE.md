# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / C030 Founding Perspective - SITE DRAFT READY FOR VISUAL REVIEW**

Portfilo's publishing system, editorial standards, homepage real-content integration, and Portfilo Brief foundation are in place.

Two real stories are published:

- C027, `Build things that make the next thing easier`, by Louda Tuppal;
- C009, `What 'higher-value work' means in Philippine IT-BPM`, by Portfilo.

C027 is the homepage Featured story. C009 is the current Latest story.

C030 is the approved third launch article. It is a concise founding/editorial Perspective rather than a research-heavy audience study.

Approved C030 title:

> **What actually changed?**

Approved dek:

> **An update tells you something happened. Portfilo is interested in what changes when the announcement meets operating reality.**

The final claim/copy audit passed. C030 now exists as a draft Astro content entry for local visual review:

`src/content/stories/what-actually-changed.md`

Current metadata:

- `contentType: perspective`;
- `topic: building` - provisional until publication approval;
- `author: Louda Tuppal`;
- `status: draft`;
- `featured: false`;
- no `publishedAt` while draft.

Production safety remains intact: the story route includes drafts only when `import.meta.env.DEV` is true. Production builds still generate story routes only for `status: published` entries.

No publication approval has been given yet.

## Current branch

Authoritative branch:

`build/portfilo-v0`

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Canonical documents

Project/product:

- `docs/V0_SCOPE.md`
- `docs/PROJECT_STATE.md`
- `docs/CONTENT_PLANNING.md`

Editorial:

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `research/README.md`

Design:

- `docs/DESIGN_DIRECTION.md`

Email/deployment:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

## Locked editorial model

Portfilo is the publication. Articles are the journalism. Portfilo Brief distributes published work by email.

Top-level topics:

- Business
- Technology
- Startups
- AI
- Building

Content types:

- Reported
- Explained
- Guide
- Profile
- Analysis
- Perspective
- Field Notes

Primary reader needs:

- Update
- Understand
- Interpret
- Decide

Core rule:

> **Help through reporting and evidence, not generic advice.**

Copy rule:

> **Say the thing. Then stop.**

No permanent tagline by default.

## Editorial workflow

```text
IDEA
↓
RESEARCH BRIEF
↓
SOURCE MAP / APPROPRIATE EVIDENCE PLAN
↓
RESEARCH OR CLAIM-SPECIFIC VERIFICATION
↓
STORY DECISION
↓
DRAFT
↓
ADVERSARIAL REVIEW
↓
CLAIM AUDIT
↓
EDITORIAL PASS
↓
HEADLINE AUDIT
↓
PUBLISH
↓
DISTRIBUTE
↓
CORRECT / UPDATE WHEN NEEDED
```

For Perspective pieces, the argument itself is editorial judgment, but every concrete factual claim still requires support.

AI output has zero evidentiary weight.

## Published stories

### C027 - PUBLISHED / FEATURED

Title:

> **Build things that make the next thing easier**

Topic: `Building`  
Content type: `Perspective`  
Author: `Louda Tuppal`  
Published: `2026-09-03`  
Featured: `true`

Story:

`src/content/stories/build-things-that-make-the-next-thing-easier.md`

Packet:

`research/stories/building-the-foundation/`

Editorial pipeline and publication approval: PASS.

No final hero image has been selected. The newest share-readiness/mobile deployment fixes still require fresh live verification.

### C009 - PUBLISHED / LATEST

Title:

> **What 'higher-value work' means in Philippine IT-BPM**

Topic: `Business`  
Content type: `Explained`  
Author: `Portfilo`  
Published: `2026-09-03`  
Featured: `false`

Story:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

Packet:

`research/stories/it-bpm-higher-value-work/`

Editorial pipeline and publication approval: PASS.

Fresh full build/live render QA is still not recorded as complete.

## Active editorial/research assignments

### C001 - ACTIVE / FLAGSHIP / CONTINUE

Question:

> What separates an AI pilot from a production system inside a Philippine company?

Topic: `AI`  
Priority: `HIGH`  
Packet: `research/stories/ai-pilot-to-production/`

Current state:

`CONTINUE / OUTREACH READY`.

Important unresolved contradiction:

The Swarm Philippine AI Report 2025 narrative says 65% remain at proof-of-concept while a chart on the same page shows 40%. Do not use 65% as a clean factual anchor until reconciled.

No draft is authorized until the reporting threshold is met.

### C021 - ACTIVE / SOURCE RECONNAISSANCE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Topic: `Technology`  
Priority: `HIGH`  
Packet: `research/stories/data-center-capacity-ledger/`

Current state:

`CONTINUE / SOURCE RECONNAISSANCE ACTIVE`.

Measurement rules:

- prefer IT-load MW;
- keep current and future phases separate;
- never silently equate IT load with utility/energized/facility power;
- exclude unresolved metrics/statuses from clean subtotals.

No national subtotal is publication-ready.

If a defensible bottom-up total cannot be established, the evidence-led reframe remains:

> **Why Philippine data-center capacity numbers conflict — and what operating, energized, planned, and announced megawatts actually mean.**

C021 remains valuable active research but is not the designated third launch article while C030 occupies that role.

### C030 - ACTIVE / THIRD LAUNCH PERSPECTIVE / VISUAL REVIEW

Packet:

`research/stories/what-actually-changed/`

Purpose:

Explain why Portfilo's Business, Technology, Startups, AI, and Building coverage belongs together without duplicating `/about`, restating Standards, or becoming a promotional founder manifesto.

Approved editorial state:

- core direction: PASS / APPROVED;
- structure: APPROVED;
- Draft 1 substance: APPROVED;
- adversarial review: PASS WITH REVISION;
- Draft 2: APPROVED;
- headline/dek: APPROVED;
- claim/copy audit: PASS;
- draft content entry: CREATED;
- publication: NOT APPROVED YET.

Files:

- `research/stories/what-actually-changed/brief.md`;
- `research/stories/what-actually-changed/draft-v1.md`;
- `research/stories/what-actually-changed/adversarial-review.md`;
- `research/stories/what-actually-changed/draft-v2.md`;
- `research/stories/what-actually-changed/headline-dek.md`;
- `research/stories/what-actually-changed/claim-audit.md`;
- `src/content/stories/what-actually-changed.md`.

Visual-review behavior:

- `npm run dev` may render draft story routes;
- production builds still render only `status: published` story routes;
- C030 remains absent from homepage Latest/Featured eligibility because it is a draft.

Topic `building` remains provisional. Revisit only if the visual/editorial review makes the classification feel misleading.

## Waiting external evidence

### C017 - WAITING / EXTERNAL CLARIFICATION

Question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Packet:

`research/stories/zero-fee-merchant-payments/`

Underlying outcome remains `REFRAME / CONTINUE`.

The decisive remaining need is a narrow written BSP/PPMI clarification. C017 should not block the launch schedule while that evidence is unavailable.

## Held / future research

### C029 - HOLD / FUTURE AUDIENCE RESEARCH

Working label:

`The second question after the headline`

Packet:

`research/stories/second-question-after-headline/`

The original behavior question remains potentially valuable as a future reported study, but it is no longer responsible for explaining Portfilo's mission.

The six-event Reddit desk pilot is preserved as research history. Its proposed Reddit-led full corpus is rejected as the evidentiary backbone for a Portfilo launch article.

Revisit when Portfilo can recruit at least 10 suitable participants without relying almost entirely on the founder's immediate circle, or another professional primary-data route becomes available.

No C029 draft is authorized.

## Homepage / product state

Homepage:

`src/pages/index.astro`

Current hierarchy:

1. coverage identity;
2. C027 Featured;
3. C009 Latest;
4. About;
5. Portfilo Brief.

Only `status: published` entries are eligible for public homepage story placement.

Synthetic development fixtures remain drafts.

Wordmark remains HTML/CSS:

- `Port`: ink;
- `fi`: blue;
- `lo`: red.

Subscribe CTAs use a CSS-drawn northeast arrow to avoid iOS emoji rendering.

Newest live/mobile re-verification remains pending.

## Email system

Portfilo Brief reusable template remains PASS from prior testing.

Validated:

- double opt-in: PASS;
- sender: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email: OFF;
- Smart Nudge: OFF.

No newsletter distribution has been authorized or sent for C027 or C009.

## Deployment state

Cloudflare Pages project:

`portfilo-app`

Temporary URL:

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

Do not add Turnstile unless real traffic demonstrates abuse after honeypot and edge rate limiting are active.

## Work-in-progress

Current active WIP:

- C001;
- C021;
- C030.

Waiting external:

- C017.

Held/future:

- C029.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| C027 | PUBLISHED / FEATURED |
| C009 | PUBLISHED |
| C030 core direction | APPROVED |
| C030 Draft 2 | APPROVED |
| C030 headline/dek | APPROVED |
| C030 claim/copy audit | PASS |
| C030 content entry | DRAFT / CREATED |
| C030 production exposure | MUST REMAIN EXCLUDED |
| C030 local visual review | PENDING USER CHECK |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C001 | ACTIVE / CONTINUE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Newest mobile/share-readiness deployment verification | PENDING |
| Final-domain configuration | PENDING DOMAIN |

A local `npm run build` has not been executed from this connected-repository session. The next local check must include `npm run build` after pulling the latest branch changes.

## Exact next task

**Local C030 visual review and build validation.**

After pulling `build/portfilo-v0`:

1. run `npm run build`;
2. run `npm run dev`;
3. open `/stories/what-actually-changed`;
4. inspect desktop and mobile typography, headline/dek balance, paragraph rhythm, metadata, and topic label;
5. report any visual/copy issue;
6. if visual review passes, obtain explicit publication approval before changing `status` to `published` or adding `publishedAt`.

Do not publish C030 merely because the draft renders successfully.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
