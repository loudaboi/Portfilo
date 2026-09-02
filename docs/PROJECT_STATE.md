# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / C027 Publication Verification + First Feature Decision - ACTIVE**

The publishing system, launch-selection system, first launch research slate, and first two published stories are now in repository publication state.

C009 remains a published supporting story by `Portfilo` and is intentionally not the first homepage feature.

C027, **Build things that make the next thing easier**, has completed topic research, structure research, drafting, adversarial review, claim audit, editorial/copy review, headline/dek review, and explicit user publication approval. Its public story entry now exists with `status: published`, `publishedAt: 2026-09-03`, author `Louda Tuppal`, topic `building`, content type `perspective`, and `featured: false`.

`featured: false` is deliberate. The user approved publication, not homepage featuring or fixture replacement. The next product/editorial decision is whether C027 becomes Portfilo's first featured homepage story after technical publication verification.

C027's fresh build/deployed render QA is not yet recorded as complete. Do not claim a fresh build, desktop/mobile pass, or final live deployment QA until those checks are actually completed.

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

Canonical pipeline:

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

AI output has zero evidentiary weight. Factual claims must be supported by verified/qualified evidence from the reporting process.

## Editorial Launch Research - COMPLETE / APPROVED

Workspace:

`research/editorial-launch/`

Approved approach:

**Launch with a small package of independent stories, not a formal series.**

Operational assignment state:

`research/editorial-launch/assignments.md`

Default WIP limits remain:

- maximum one flagship investigation in active production;
- generally no more than three substantial stories in active research;
- no mandatory article quota.

## Active assignments

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

The Swarm Philippine AI Report 2025 discrepancy remains unresolved: narrative text says 65% remain at proof-of-concept while a chart on the same page shows proof-of-concept at 40%. Do not use 65% as a clean factual anchor until reconciled.

### C017 - ACTIVE / SUPPORTING / REFRAME / CONTINUE

Reframed question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/zero-fee-merchant-payments/`

Current state:

- Circular 1238 permits cost-based merchant fees and does not reproduce the 2024 exposure draft's explicit micro-merchant waiver;
- M-2026-025 still says `zero fees for small merchant payments` have been implemented but does not identify the fee layer or implementation instrument;
- current PPMI/BSP material distinguishes consumer-side QR Ph fee treatment from merchant-side transaction fees;
- decisive remaining need is narrow written clarification from BSP and/or PPMI.

Do not let that clarification block the publishing schedule.

## C027 - PUBLISHED PERSPECTIVE / FIRST-FEATURE CANDIDATE

Published title:

> **Build things that make the next thing easier**

Description:

> We judge early work by what it becomes. Another question matters too: what does it make easier to do next?

Topic: `Building`  
Content type: `Perspective`  
Primary reader need: `Interpret`  
Author: `Louda Tuppal`  
Packet: `research/stories/building-the-foundation/`

Public story file:

`src/content/stories/build-things-that-make-the-next-thing-easier.md`

Current metadata:

- `status: published`;
- `publishedAt: 2026-09-03`;
- `featured: false`;
- author: `Louda Tuppal`;
- content type: `perspective`;
- topic: `building`.

Development history:

- Draft v1: rejected for forcing too many discovery inputs into one article;
- Draft v2: preserved as a one-thread experiment but not selected;
- topic-space research: complete;
- approved core idea: `Build things that make the next thing easier`;
- structure research: complete;
- approved structure: contrast-led argumentative funnel;
- Draft v3: direction pass from user;
- adversarial review: complete;
- claim audit: `PASS`;
- editorial/copy pass: `PASS`;
- headline/dek audit: `PASS`;
- Draft v4: final approved public prose;
- user publication approval: **GRANTED 2026-09-03**;
- repository publication state: applied.

Claim profile:

- central thesis is Perspective/opinion, not an empirical population claim;
- examples are hypothetical/general rather than reported case studies;
- no consequential external numbers, quotations, company claims, legal claims, historical claims, or current-event assertions appear in the article;
- no reader-facing methodology section is required.

### Remaining C027 technical verification

Still verify when practical:

1. Cloudflare Pages deployed the publication commit from `build/portfilo-v0`;
2. `npm run build` passes in a usable checkout/dependency environment;
3. the story route renders correctly;
4. desktop and mobile layouts are clean;
5. title, description, byline, publication date, topic/content-type labels, and body formatting are correct;
6. there are no obvious console/rendering errors.

Do not mark this technical gate `PASS` until checked.

### C027 homepage-feature decision

C027 is the preferred editorial candidate for the first highlighted story, but homepage integration is **not yet authorized or implemented**.

After technical verification, deliberately decide whether to:

- set `featured: true` for C027 if the homepage/content system uses that field;
- replace current homepage fixture/preview content with real published stories;
- use C027 as the lead story;
- keep C009 as a supporting/latest story;
- update any preview labels that no longer reflect the real content state.

Do not make these changes solely because C027 is published.

## C009 - PUBLISHED SUPPORTING STORY / LIVE QA INCOMPLETE

Published title:

> What 'higher-value work' means in Philippine IT-BPM

Topic: `Business`  
Author: `Portfilo`  
Packet: `research/stories/it-bpm-higher-value-work/`

Story file:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

Current metadata:

- `status: published`;
- `publishedAt: 2026-09-03`;
- `featured: false`;
- author: `Portfilo`;
- content type: `explained`;
- topic: `business`.

The user has viewed the deployed C009 article, confirming the route was reachable in their environment. Full build/desktop/mobile/link/console QA is still not recorded as complete.

C009 should remain a supporting story and unfeatured unless deliberately reopened.

## C021 - OPEN / FIRST RESERVE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Topic: `Technology`  
Priority: `HIGH`

C027 publication frees one substantial-research slot. Do **not** activate C021 automatically. The next assignment remains a deliberate editorial decision.

## Public product state

Validated public surfaces from prior work remain:

- shared `SiteHeader` / `SiteFooter`;
- Homepage `/`;
- About `/about`;
- Research & Standards `/standards`;
- Story template;
- Series template;
- Confirmation `/confirmed`;
- Subscribe `/subscribe` and single-purpose Cloudflare Pages subscription proxy.

The Homepage still contains fixture/preview content. Publishing C009 and C027 does not automatically replace that presentation.

## Email system

Portfilo Brief reusable template remains `PASS` based on prior desktop/mobile/inbox testing.

Validated state includes:

- double opt-in flow: PASS;
- sender name: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email: OFF;
- Smart Nudge: OFF for v0.

beehiiv remains responsible for subscriber storage, confirmation, delivery, unsubscribe handling, and deliverability infrastructure.

No C009 or C027 newsletter distribution has been authorized or sent.

## Deployment state

Cloudflare Pages project:

`portfilo-app`

Temporary URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Previously user-validated temporary deployment state remains PASS.

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
| Public pages / shared chrome | PASS from prior validation |
| Story and series templates | PASS from prior validation |
| Subscribe temporary live flow | PASS, user reported |
| Portfilo Brief reusable template | PASS |
| Editorial Launch Research | COMPLETE / APPROVED |
| C001 | ACTIVE / CONTINUE |
| C017 | ACTIVE / REFRAME / CONTINUE |
| C027 editorial pipeline | PASS |
| C027 publication approval | GRANTED 2026-09-03 |
| C027 repository content entry | PUBLISHED / `featured: false` / by `Louda Tuppal` |
| C027 fresh application build | NOT VERIFIED / DO NOT CLAIM PASS |
| C027 live deployment/render QA | PENDING |
| C027 homepage feature | NOT YET AUTHORIZED / NOT IMPLEMENTED |
| C009 repository content entry | PUBLISHED / `featured: false` / by `Portfilo` |
| C009 full live deployment/render QA | INCOMPLETE |
| C021 | OPEN / QUEUED; one research slot available but not activated |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Complete C027 technical publication verification.**

Then, if the story renders correctly, make a separate explicit decision on whether C027 becomes Portfilo's first homepage featured story and whether the homepage fixtures should be replaced with C027 + C009 real content.

C009's remaining technical verification can be completed alongside C027 where practical.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
