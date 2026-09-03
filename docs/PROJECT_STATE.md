# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / C030 Founding Perspective - DRAFT V2 COMPLETE / HEADLINE-DEK REVIEW**

Portfilo's publishing system, editorial standards, first published stories, homepage real-content integration, and Portfilo Brief foundation are in place.

Two real stories are published:

- C027, `Build things that make the next thing easier`, by Louda Tuppal;
- C009, `What 'higher-value work' means in Philippine IT-BPM`, by Portfilo.

C027 is the homepage Featured story. C009 is the current Latest story.

C030 is the approved third launch article. It is a concise founding/editorial Perspective rather than a research-heavy audience study.

Working headline:

> **What actually changed?**

Recommended dek:

> **An update tells you something happened. Portfilo is interested in what changes when the announcement meets operating reality.**

C030 explains why Portfilo's Business, Technology, Startups, AI, and Building coverage belongs together through one editorial instinct: after an update establishes that something happened, ask whether implementation, economics, consequence, or operating reality materially changes what the update means.

This does **not** claim that ordinary news updates are deficient. Updates can be useful precisely because they are fast and narrow.

C030 packet:

`research/stories/what-actually-changed/`

Current C030 state:

`DRAFT V2 COMPLETE / HEADLINE-DEK RECOMMENDATION READY / USER REVIEW REQUIRED`

No public C030 story file exists yet.

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

No final hero image has been selected. The newest share-readiness/mobile deployment fixes still require re-verification.

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

C021 remains valuable active research but is no longer the designated third launch article.

### C030 - ACTIVE / THIRD LAUNCH PERSPECTIVE

Working headline:

> **What actually changed?**

Topic: `Building` - provisional  
Content type: `Perspective`  
Author: `Louda Tuppal`  
Primary reader need: `Interpret`.

Packet:

`research/stories/what-actually-changed/`

Purpose:

Explain the connective editorial lens behind Portfilo without duplicating `/about`, restating the Standards page, or becoming a promotional `Why we built Portfilo` essay.

The approved distinction is:

- About explains what Portfilo is and what it covers;
- C030 explains why those subjects belong together and what Portfilo keeps looking for across them.

The article must not claim:

- that journalism is broken;
- that readers are confused;
- that young Filipinos behave a particular way;
- that every update requires deeper explanation;
- that Portfilo is uniquely trustworthy or superior.

No heavy research package is required. Any concrete factual example must still be verified.

#### C030 editorial history

Approved:

- core idea;
- six-part structure;
- substance of Draft 1.

Files:

- `brief.md`;
- `structure.md`;
- `draft-v1.md`;
- `adversarial-review.md`;
- `draft-v2.md`;
- `headline-dek.md`.

Adversarial review outcome:

`PASS WITH REVISION`.

Main Draft 1 issues:

- repeated the same editorial motion too many times;
- Building section was longer than necessary;
- ending drifted toward brand-promise language;
- working question risked becoming slogan-like if repeated as a branded framework.

Draft 2 addresses those issues by compressing the middle and keeping the closing focused on the editorial distinction rather than a grand mission promise.

Recommended metadata for the current gate:

- title: `What actually changed?`;
- dek/description: `An update tells you something happened. Portfilo is interested in what changes when the announcement meets operating reality.`

`What actually changed?` remains article-specific and is not a permanent tagline.

Current state:

`DRAFT V2 COMPLETE / HEADLINE-DEK RECOMMENDATION READY / USER REVIEW REQUIRED`.

Do not create a public story file until Louda Tuppal approves this version.

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

The six-event Reddit desk pilot is preserved as research history. Its proposed Reddit-led full corpus is rejected as the evidentiary backbone for the launch article.

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

Only `status: published` story entries should render publicly.

Synthetic development fixtures remain drafts.

Wordmark remains HTML/CSS:

- `Port`: ink;
- `fi`: blue;
- `lo`: red.

Subscribe CTAs use a CSS-drawn northeast arrow to avoid iOS emoji rendering.

Newest live/mobile re-verification is pending.

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
| C030 structure | APPROVED |
| C030 Draft 1 substance | APPROVED |
| C030 adversarial review | PASS WITH REVISION |
| C030 Draft 2 | COMPLETE / USER REVIEW REQUIRED |
| C030 headline/dek | RECOMMENDATION READY / USER REVIEW REQUIRED |
| C030 public story file | NOT CREATED |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C001 | ACTIVE / CONTINUE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Newest mobile/share-readiness deployment verification | PENDING |
| Final-domain configuration | PENDING DOMAIN |

No code or public story file changed during the C030 Draft 2 task, so no application build was required for this phase boundary.

## Exact next task

**Obtain Louda Tuppal's approval or revision of C030 Draft 2 and the recommended headline/dek.**

If approved:

1. perform a final claim/copy audit on the approved text;
2. create the public Markdown story entry with `status: draft` first;
3. confirm final topic/metadata and article ordering implications;
4. run the Astro build and inspect the generated story route before any publication approval;
5. do not set `status: published` until Louda Tuppal explicitly approves publication.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
