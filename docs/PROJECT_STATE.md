# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / C021 Data-Center Capacity Source Reconnaissance - ACTIVE**

Portfilo's publishing system, editorial standards, first published stories, homepage real-content integration, and Portfilo Brief foundation are in place.

Two real stories are published:

- C027, `Build things that make the next thing easier`, by Louda Tuppal;
- C009, `What 'higher-value work' means in Philippine IT-BPM`, by Portfilo.

C027 is the first homepage featured story. C009 is the current Latest story.

The newest share-readiness fixes remain committed but still require fresh live/mobile verification:

- synthetic development fixtures are drafts rather than public stories;
- homepage wordmark is `Port` ink / `fi` blue / `lo` red;
- Subscribe CTAs use a CSS-drawn northeast arrow to avoid iOS emoji-style rendering.

Do not claim those newest live fixes as verified until the user confirms them or a deployed check is performed.

C027 visual sourcing remains planned. No final hero image has been selected, generated, licensed, or published.

### Current editorial decision

C029, `The second question after the headline`, is now **HOLD / FIELDWORK REQUIRED**. Its original contribution depends on participant diaries and real-time reader walkthroughs, and suitable recruitment is not practical at Portfilo's current stage. The packet is preserved for later rather than weakened into a derivative desk-only story.

C021 has been activated in the freed research slot:

> **How much Philippine data-center capacity is operating, under construction, committed, and merely announced?**

Its first source pass already shows a credible information gap: public capacity figures can mix different project statuses and different power metrics. C021 is therefore proceeding as a bottom-up project-status ledger, with a possible reframe to explaining why national MW totals conflict if a clean national subtotal cannot be supported.

C021 packet:

`research/stories/data-center-capacity-ledger/`

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

No permanent tagline by default. Do not restore previously rejected positioning copy.

## Editorial workflow

```text
IDEA
↓
RESEARCH BRIEF
↓
SOURCE MAP
↓
PRIMARY / SECONDARY RESEARCH
↓
EVIDENCE LEDGER
↓
CONTRADICTION SEARCH
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

AI output has zero evidentiary weight. Drafts must be built from verified/qualified packet evidence.

## Published stories

### C027 - PUBLISHED / FEATURED HOMEPAGE STORY

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

The user has viewed the deployed article. The newest share-readiness/mobile fixes still require re-verification.

Visual state:

- no final hero image;
- typography-led dark feature fallback remains in use;
- preferred visual direction is original `carryover` / next-starting-point editorial illustration;
- do not use generic startup, hustle, laptop, staircase, ladder, mountain, or success imagery.

### C009 - PUBLISHED / LATEST HOMEPAGE STORY

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

The full fresh application build/live render checklist is not recorded as complete. Do not claim complete live QA.

## Active research assignments

### C001 - ACTIVE / FLAGSHIP / CONTINUE

Question:

> What separates an AI pilot from a production system inside a Philippine company?

Topic: `AI`  
Priority: `HIGH`  
Packet: `research/stories/ai-pilot-to-production/`

Current state:

- source reconnaissance: `PASS / OUTREACH READY`;
- drafting threshold: not met;
- research outcome: `CONTINUE`.

Important unresolved contradiction:

The Swarm Philippine AI Report 2025 narrative says 65% remain at proof-of-concept while a chart on the same page shows 40%. Do not use 65% as a clean factual anchor until reconciled.

### C017 - ACTIVE / SUPPORTING / REFRAME / CONTINUE

Question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/zero-fee-merchant-payments/`

Decisive remaining need:

A narrow written clarification from BSP and/or PPMI about the final implementation and fee layer. Do not let that clarification block the rest of Portfilo's publishing schedule.

### C021 - ACTIVE / SUPPORTING / SOURCE RECONNAISSANCE

Question:

> **How much Philippine data-center capacity is operating, under construction, committed, and merely announced?**

Topic: `Technology`  
Priority: `HIGH`  
Likely content type: `Analysis / Reported`  
Packet: `research/stories/data-center-capacity-ledger/`

Current packet:

- `brief.md`;
- `sources.md`;
- `evidence.md`;
- `contradictions.md`;
- `capacity-ledger.csv`.

Current outcome:

`CONTINUE / SOURCE RECONNAISSANCE ACTIVE`

### C021 measurement rules

Prefer `IT load MW` whenever available.

Do not silently equate or add together:

- IT load;
- utility power;
- facility electrical capacity;
- powered-shell / energized capacity;
- racks or cabinets.

Keep phases separate. Full-campus design capacity is not current operating supply unless the whole amount is verified live.

Current status vocabulary:

- `OPERATING`;
- `UNDER CONSTRUCTION`;
- `COMMITTED`;
- `ANNOUNCED`;
- `STATUS TO RECONCILE`.

### C021 first-pass evidence

The source reconnaissance already identifies a real measurement/status problem:

- government-linked 2026 descriptions put current Philippine capacity around or below 200 MW;
- operator portfolio numbers and identifiable operating sites create apparent tension with that baseline;
- some operator pages report IT load while others report utility power, energized capacity, or unspecified MW;
- several campuses disclose full-buildout numbers larger than the currently live phase;
- facility status labels and dated reporting do not always line up cleanly.

Priority contradiction work includes:

1. reconcile STT's portfolio-level >140/nearly 150 MW figures with current facility labels such as `Launching Soon` and `Under Development`;
2. establish the current live IT-load phase of VITRO Sta. Rosa rather than assuming the full 36 MW is commissioned;
3. establish YCO Malvar One's current IT load rather than treating 30 MW energized/powered-shell capacity as equivalent;
4. verify whether any Evolution/Megawide phase actually reached service after its stated Q3 2026 RFS target;
5. expand the census to significant operators/projects not yet fully mapped, including current VITRO portfolio sites, Converge/Digital Halo and other material facilities;
6. prevent double counting and identify operating facilities for which comparable public MW is unavailable, such as Equinix.

No national subtotal is publication-ready.

Possible evidence-led reframe if clean subtotals remain impossible:

> **Why Philippine data-center capacity numbers conflict — and what operating, energized, planned, and announced megawatts actually mean.**

Do not research article structure or draft C021 until the operator census, evidence ledger and contradiction search support a story decision.

## Held research

### C029 - HOLD / FIELDWORK REQUIRED

Working label:

`The second question after the headline`

Question:

> What questions do younger Filipino readers ask after first encountering a business or technology news story, and what do they do next to answer them?

Packet:

`research/stories/second-question-after-headline/`

Why held:

The current documentary research cannot provide the story's intended original contribution. That contribution requires observing actual reader behavior:

`encounter -> unanswered question -> next action -> stopping point`

The ready fieldwork method targets 12-15 participants, with 10 complete records minimum. Suitable recruitment is not currently practical.

Do not substitute public comments or desk research while keeping the stronger behavior claim.

Revisit trigger:

Resume when Portfilo can recruit at least 10 suitable participants without relying almost entirely on Louda Tuppal's immediate friend/founder/supporter circle.

No C029 draft exists or is authorized.

## Homepage and fixture state

Homepage:

`src/pages/index.astro`

Current hierarchy:

1. coverage identity;
2. C027 Featured;
3. C009 Latest;
4. About;
5. Portfilo Brief.

Homepage behavior:

- reads the `stories` collection;
- only `status: published` entries are eligible;
- sorts by `publishedAt`;
- first `featured: true` story becomes Featured;
- remaining published stories populate Latest.

Development fixtures remain in the repository but are `draft` and should not be public:

- `src/content/stories/portfilo-content-architecture-test.md`;
- `src/content/stories/portfilo-series-ordering-test-two.md`;
- `src/content/stories/portfilo-series-ordering-test-three.md`.

Do not reintroduce fake stories merely to fill homepage space.

## Shared UI state

### Wordmark

Current HTML/CSS wordmark:

- `Port`: ink;
- `fi`: blue;
- `lo`: red.

Newest deployed re-verification remains pending.

### Subscribe arrow

Header/homepage/subscribe visual arrows use CSS drawing rather than relying on the Unicode northeast-arrow glyph, avoiding iOS emoji rendering.

Fix commit from prior work:

`36982294c5c5cd10810417379978e391a3fcedf5`

Mobile live recheck remains pending.

## Email system

Portfilo Brief reusable template remains `PASS` from prior testing.

Validated state:

- double opt-in: PASS;
- sender: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email: OFF;
- Smart Nudge: OFF for v0.

beehiiv handles subscriber storage, confirmation, delivery, unsubscribe and deliverability infrastructure.

No newsletter distribution has been authorized or sent for C027 or C009.

## Deployment state

Cloudflare Pages project:

`portfilo-app`

Temporary URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Do not claim the newest deployment/render is fully verified.

Still pending before final public launch:

- final public domain;
- production `SITE_URL` after domain connection;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enable/verification;
- final beehiiv Opt-in Redirect to canonical `/confirmed`;
- final-domain subscribe/confirm/unsubscribe QA;
- mailing-address/compliance clearance before first public newsletter send;
- final browser/responsive/link/console QA;
- MFA/passkeys where applicable.

Do not add Turnstile unless real traffic demonstrates abuse after honeypot and edge rate limiting are active.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Foundation / Content Architecture / Editorial Design | PASS |
| C027 editorial pipeline | PASS / PUBLISHED / FEATURED |
| C009 editorial pipeline | PASS / PUBLISHED |
| Newest homepage/share-readiness live recheck | PENDING |
| Subscribe emoji-arrow mobile live recheck | PENDING |
| C027 final hero image | NOT SELECTED |
| C029 | HOLD / FIELDWORK REQUIRED |
| C001 | ACTIVE / CONTINUE |
| C017 | ACTIVE / REFRAME / CONTINUE |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C021 national capacity subtotal | NOT READY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Continue C021's comprehensive operator/project census and contradiction reconciliation.**

Priority sequence:

1. reconcile STT facility/portfolio status;
2. establish current VITRO live-phase IT load;
3. verify Evolution/Megawide current service status;
4. map omitted material operators/projects and BOI/PEZA records;
5. distinguish IT load from utility/energized power for every row;
6. update `capacity-ledger.csv`, evidence and contradictions;
7. decide `CONTINUE / REFRAME / PUBLISH-CANDIDATE / KILL` before any article structure or draft.

C027 visual sourcing may resume later when deliberately reprioritized.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
