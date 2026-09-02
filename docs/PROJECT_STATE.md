# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / First Featured Perspective Development - ACTIVE**

The publishing system, launch-selection system, and first launch research slate are in place.

C009 is published in repository state and remains a supporting story rather than the first homepage feature. Its byline is `Portfilo`, `publishedAt` is `2026-09-03`, and `featured` remains `false`.

C027 remains the active featured-story candidate, but its first draft has been rejected. A fresh topic-and-structure review selected a narrower reader-centered idea, and Draft v2 is now ready for user review. Nothing for C027 is public.

C009's full technical deployment/render checklist is still not recorded as complete. Do not claim a fresh local build, final desktop/mobile pass, or exhaustive live-link QA until those checks are actually completed.

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

AI output has zero evidentiary weight. Drafts must be built from verified/qualified packet evidence.

Before making a story depend on interviews, evaluate current source reachability using existing relationships, warm introductions, response history, public routes, publication visibility, reporting window, and alternative evidence paths.

Operational access labels:

- `DIRECT / LIKELY`
- `PLAUSIBLE`
- `LOW-PROBABILITY`
- `NOT REQUIRED`

These measure reachability, not source credibility.

Generic `Portfilo could not independently verify...` language is not default credibility copy. Use specific evidence limitations when they materially help the reader.

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
- research outcome: `CONTINUE`;
- realistic outreach may proceed, but launch must not wait indefinitely on low-probability corporate replies.

The Swarm Philippine AI Report 2025 discrepancy remains unresolved: narrative text says 65% remain at proof-of-concept while a chart on the same page shows proof-of-concept at 40%. Do not use 65% as a clean factual anchor until reconciled.

### C017 - ACTIVE / SUPPORTING / REFRAME / CONTINUE

Reframed question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/zero-fee-merchant-payments/`

The public-document route is substantially exhausted for currently indexed BSP/PPMI materials.

Established tension:

- the 2024 exposure draft proposed a micro-merchant definition and explicit merchant-fee waiver;
- signed Circular 1238 does not reproduce that waiver and permits cost-based merchant fees;
- M-2026-025 still says `zero fees for small merchant payments` have been implemented without defining the fee layer or implementation instrument;
- current PPMI/BSP material distinguishes consumer-side QR Ph fee treatment from merchant-side transaction fees.

Decisive remaining need: narrow written clarification from BSP and/or PPMI. Do not let that clarification block the publishing schedule.

### C027 - ACTIVE / FEATURED PERSPECTIVE CANDIDATE / REFRAME-DRAFT V2

Current reader question:

> What is a first project actually for when you are still figuring out what you can build and where you want to go?

Topic: `Building`  
Likely content type: `Perspective`  
Primary reader need: `Interpret`  
Priority: `HIGH`  
Packet: `research/stories/building-the-foundation/`

C027 was deliberately reframed away from a personal `grind` story. It should share a perspective readers can map onto themselves, not narrate Louda Tuppal's life or present Portfilo as a personal blog.

#### Draft v1 decision

**REJECT / DO NOT POLISH.**

Reader review found that Draft v1 forced too many discovery inputs into one article. It combined bottlenecks, AI, skills, habits, network, trust, reputation, user understanding, and starting position, leaving the main message unclear.

The problem is treated as a topic-selection failure, not a prose-editing problem.

Review:

`research/stories/building-the-foundation/draft-v1-review.md`

#### Topic + structure reset

Fresh craft and topic research reviewed Longreads, Nieman Storyboard, Paul Graham, Morgan Housel, current 2026 builder coverage, and early-builder community signals.

Research:

`research/stories/building-the-foundation/topic-structure-research.md`

The selected writing discipline is:

- one clear thread;
- main tension near the top;
- a single-thread funnel from tension to reframe to concrete development to counterargument to resolution;
- concrete situations instead of a multi-part abstract framework;
- exclude material merely because it was mentioned during discovery.

AI is deliberately not central to Draft v2. Current 2026 commentary already heavily covers AI making execution easier, and that thread weakened C027's clarity.

#### Selected C027 idea

> An early project does not have to become your future. It should teach you something real about what to do next.

Draft v2:

`research/stories/building-the-foundation/draft-v2.md`

Draft v2 evaluation:

`research/stories/building-the-foundation/draft-v2-evaluation.md`

Current result:

**DIRECTION PASS FOR USER REVIEW / NOT A PUBLICATION DECISION.**

Draft v2 deliberately excludes:

- AI as a theme;
- `starting from nothing`;
- a universal bottleneck model;
- biography;
- grind/hustle framing;
- a catalogue of skills, habits, network, and reputation;
- a claim that failure is automatically useful.

Current state:

- planning: `PASS`;
- Draft v1: `REJECTED`;
- topic/structure reset: complete;
- Draft v2: complete / internal;
- Draft v2 self-evaluation: `DIRECTION PASS FOR USER REVIEW`;
- adversarial review: not yet run;
- public story entry: **does not exist**;
- publication approval: **not requested / not granted**.

## C009 - PUBLISHED SUPPORTING STORY / LIVE VERIFICATION INCOMPLETE

Published question:

> What jobs are Philippine IT-BPM employers actually talking about when they say `higher-value work`?

Topic: `Business`  
Role: Supporting  
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

Completed editorial checks:

- research decision: `PUBLISH`;
- draft: complete;
- adversarial review: complete and resolved;
- claim audit: `PASS`;
- editorial/copy pass: `PASS`;
- headline/dek audit: `PASS`;
- methodology wording: `PASS`;
- fresh source/currentness recheck: `PASS`;
- pre-publish editorial gate: `PASS`;
- user publication approval: **GRANTED 2026-09-03**;
- repository publication state: applied.

Main supported finding:

`Higher-value work` is not one occupation or a clean synonym for non-voice, technical, or AI work. The current evidence is better explained through domain expertise, technical/data depth, judgment/control responsibility, process/system ownership, and stakeholder scope.

The article deliberately does **not** establish:

- representative sector-wide job shares;
- a universal wage premium;
- specialist-role growth sufficient to absorb routine-work displacement;
- worker-transition probabilities or timelines;
- that every specialist role is intrinsically a better job.

Visual decision: no visual is required for C009. Do not create a prevalence chart from the illustrative sample.

### Remaining C009 technical verification

A fresh local `npm run build` could not be completed from the active assistant environment because the container cannot resolve GitHub and does not have Astro/dependencies installed. No build pass is claimed.

The user has viewed the deployed article, which confirms the route was reachable in their environment, but the full technical checklist is still not recorded as complete. Still verify when practical:

- deployment status;
- desktop and mobile layout;
- methodology module;
- article metadata/date;
- outbound links;
- console/rendering errors.

Homepage featuring, fixture replacement, and Portfilo Brief distribution remain separate decisions. C009 should remain unfeatured unless deliberately reopened.

## C021 - OPEN / FIRST RESERVE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Topic: `Technology`  
Priority: `HIGH`

C027 occupies the research slot opened by C009's publication. Do not activate C021 while all three active slots are occupied.

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

The Homepage still contains fixture/preview content. C009 publication does not automatically replace that presentation because homepage integration remains a separate task.

## Email system

Portfilo Brief reusable template remains `PASS` based on prior desktop/mobile/inbox testing.

Validated state includes:

- double opt-in flow: PASS;
- sender name: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email: OFF;
- Smart Nudge: OFF for v0.

beehiiv remains responsible for subscriber storage, confirmation, delivery, unsubscribe handling, and deliverability infrastructure.

No C009 newsletter distribution has been authorized or sent.

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
| C027 Draft v1 | REJECTED / DO NOT POLISH |
| C027 topic + structure reset | COMPLETE |
| C027 Draft v2 | INTERNAL / DIRECTION PASS FOR USER REVIEW |
| C027 adversarial review | PENDING |
| C027 public content entry | DOES NOT EXIST |
| C009 repository content entry | PUBLISHED / `featured: false` / by `Portfilo` |
| C009 fresh application build | NOT VERIFIED / DO NOT CLAIM PASS |
| C009 full live deployment/render QA | INCOMPLETE |
| C021 | OPEN / QUEUED; no slot available |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Louda reviews the selected C027 idea and Draft v2 for message clarity and Portfilo fit.**

Do not run the adversarial/headline/publication pipeline merely because the prose is cleaner. First decide whether the selected idea itself deserves to be the first featured Perspective.

If the idea passes:

1. run adversarial review against `docs/EDITORIAL_STANDARD.md`, `docs/RESEARCH_STANDARD.md`, and `docs/COPY_STYLE.md`;
2. remove any generic `just start` or motivational drift;
3. run the editorial/copy pass;
4. audit headline and dek;
5. present the revised article to Louda for explicit publication approval;
6. only after approval create a public story entry and proceed through technical publication QA.

If the idea does not pass, return to `topic-structure-research.md` and select/research another candidate rather than polishing Draft v2.

C009's remaining technical verification can be completed independently and should not block C027 editorial development.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
