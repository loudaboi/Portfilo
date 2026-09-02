# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / First Story Approval - ACTIVE**

The publishing system, launch-selection system, and first launch research slate are in place.

C009 is the first launch assignment to complete research, drafting, adversarial review, claim audit, editorial pass, and headline/dek audit.

A real story content entry has been prepared with `status: draft`. It is **not published** and must remain unpublished until Louda Tuppal explicitly approves the finished article.

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

## Active launch assignments

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

### C009 - ACTIVE / SUPPORTING / PUBLISH / DRAFT READY

Original question:

> What does "higher-value work" actually mean inside Philippine IT-BPM?

Current publishable question:

> What jobs are Philippine IT-BPM employers actually talking about when they say `higher-value work`?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/it-bpm-higher-value-work/`

Research packet now includes:

- `brief.md`
- `sources.md`
- `sample.md`
- `evidence.md`
- `contradictions.md`
- `notes.md`
- `draft.md`
- `adversarial-review.md`
- `fact-check.md`

Prepared public content entry:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

Current content-entry state:

`status: draft`

No `publishedAt` is set. The current story route only emits entries whose status is `published`, so this story is intentionally excluded from public story routes pending approval.

Completed editorial checks:

- research decision: `PUBLISH`;
- draft: complete;
- adversarial review: complete and resolved;
- claim audit: `PASS`;
- editorial/copy pass: `PASS`;
- headline/dek audit: `PASS`;
- methodology wording: `PASS`.

Main supported finding:

`Higher-value work` is not one occupation or a clean synonym for non-voice, technical, or AI work. The current evidence is better explained through domain expertise, technical/data depth, judgment/control responsibility, process/system ownership, and stakeholder scope.

The article deliberately does **not** establish:

- representative sector-wide job shares;
- a universal wage premium;
- specialist-role growth sufficient to absorb routine-work displacement;
- worker-transition probabilities or timelines;
- that every specialist role is intrinsically a better job.

**Publication approval: PENDING USER REVIEW.**

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

### C021 - OPEN / FIRST RESERVE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Topic: `Technology`  
Priority: `HIGH`

Do not activate while all three active research slots remain occupied.

## Public product state

Validated public surfaces remain:

- shared `SiteHeader` / `SiteFooter`;
- Homepage `/`;
- About `/about`;
- Research & Standards `/standards`;
- Story template;
- Series template;
- Confirmation `/confirmed`;
- Subscribe `/subscribe` and single-purpose Cloudflare Pages subscription proxy.

Fixture stories remain development/preview material until deliberately retired or replaced by approved real stories.

## Email system

Portfilo Brief reusable template remains `PASS` based on prior desktop/mobile/inbox testing.

Validated state includes:

- double opt-in flow: PASS;
- sender name: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email: OFF;
- Smart Nudge: OFF for v0.

beehiiv remains responsible for subscriber storage, confirmation, delivery, unsubscribe handling, and deliverability infrastructure.

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
| C009 research | PUBLISH |
| C009 adversarial review | PASS after revisions |
| C009 claim audit | PASS |
| C009 content entry | DRAFT / NOT PUBLIC |
| C009 publication approval | PENDING USER APPROVAL |
| C017 | ACTIVE / REFRAME / CONTINUE |
| C021 | OPEN / QUEUED |
| Current application build after C009 draft entry | NOT YET RUN / DO NOT CLAIM PASS |
| Final-domain configuration | PENDING DOMAIN |

A new Markdown content entry was added for C009, so a fresh `npm run build` is required before publication. No new application build is claimed at this checkpoint.

## Exact next task

**Louda reviews the finished C009 article and decides whether to approve publication.**

Until explicit approval:

- keep `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md` as `status: draft`;
- do not set `publishedAt`;
- do not mark it featured;
- do not replace the public fixture/homepage presentation with this story;
- do not distribute it through Portfilo Brief.

If publication is approved:

1. set the story to `published` and add `publishedAt`;
2. decide whether it should be `featured`;
3. run `npm run build` and fix any content/schema/rendering problems;
4. inspect the rendered desktop/mobile story and outbound links;
5. then proceed to fixture replacement/homepage integration and newsletter distribution as separately approved.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
