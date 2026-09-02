# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Launch Story Research - ACTIVE**

The publishing machine and launch-selection system are ready. Editorial Launch Research is complete and the first research slate is approved.

The active editorial question is now:

> Can the approved launch assignments produce evidence strong enough to publish?

Do not draft a launch article before its individual research packet supports a story decision.

## Current branch

Use `build/portfilo-v0` for the authoritative v0 application and editorial state.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

Historical implementation and validation detail remains in git history and the canonical documents referenced below.

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

## Approved product direction

Portfilo v0 is a content-first business and technology publication.

Public-brand rules:

- no permanent tagline by default;
- no forced geographic slogan;
- no audience-flattering slogan;
- the wordmark establishes the publication;
- the Homepage leads with journalism rather than a brand manifesto;
- About explains Portfilo plainly;
- Standards demonstrates editorial rigor;
- Subscribe explains the email product only.

Canonical copy rule:

> **Say the thing. Then stop.**

Rejected positioning must not be restored, including:

- `Practical intelligence for ambitious Filipinos.`
- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`

Philippine relevance remains part of reporting and early distribution strategy, but geography is not required brand copy and should not be forced into global stories.

## Locked taxonomy

Top-level v0 topics:

- Business
- Technology
- Startups
- AI
- Building

Rules:

- one primary topic per story;
- AI is primary only when AI itself is the main subject;
- founders are a recurring lens, not a top-level topic;
- capital/funding normally sits under Business or Startups;
- `Latest` is broader than breaking news;
- Portfilo Brief is the email product.

## Content Planning System v0 - APPROVED / PASS

Canonical guide:

`docs/CONTENT_PLANNING.md`

Planning boundary:

```text
Signal -> Story question -> Editorial gate -> Priority -> Research assignment
```

Research/publishing boundary:

```text
Research brief -> Sources -> Evidence -> Contradictions -> Story decision -> Draft -> Verification -> Publish
```

Substantial candidates are checked for question, importance, timing, contribution, evidence, and feasibility. Gate outcomes remain `PASS`, `REFRAME`, `HOLD`, or `KILL`. Passed candidates receive `HIGH`, `MEDIUM`, or `LOW` priority.

Default work-in-progress limits remain:

- maximum one flagship investigation in active production at once;
- generally no more than three substantial stories in active research at once;
- no mandatory article quota.

## Editorial Launch Research - COMPLETE / APPROVED

Workspace:

`research/editorial-launch/`

Completed outputs:

- `brief.md`
- `audience-signals.md`
- `competitor-map.md`
- `information-gaps.md`
- `candidate-stories.md`
- `evaluation.md`
- `candidate-series.md`
- `recommendation.md`
- `assignments.md`

Stage 5 produced 28 stable candidate IDs. Stage 6 produced 11 passes, 6 reframes, 7 holds, and 4 killed standalone candidates. The series check found no formal launch series justified.

Louda Tuppal approved the final launch recommendation on 2026-09-02.

Approved approach:

**Launch with a small package of independent stories, not a formal series.**

## Active launch assignments

Operational assignment state is recorded in:

`research/editorial-launch/assignments.md`

### C001 - ACTIVE / FLAGSHIP

Question:

> What separates an AI pilot from a production system inside a Philippine company?

Topic: `AI`  
Priority: `HIGH`  
Packet: `research/stories/ai-pilot-to-production/`

Current packet includes:

- `brief.md`
- `sources.md`
- `evidence.md`
- `contradictions.md`

Current story outcome: `CONTINUE`.

The central unresolved viability test is access below the marketing layer, especially direct operator evidence and at least one stalled, abandoned, or materially constrained implementation if possible.

### C009 - ACTIVE / SUPPORTING

Question:

> What does "higher-value work" actually mean inside Philippine IT-BPM?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/it-bpm-higher-value-work/`

Current packet stage: research brief created. Detailed source reconnaissance follows while remaining within the active-story limit.

### C017 - ACTIVE / SUPPORTING

Question:

> Who ultimately pays when qualifying small-merchant digital payments become free to the merchant?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/zero-fee-merchant-payments/`

Current packet stage: research brief created. Detailed source reconnaissance follows while remaining within the active-story limit.

### C021 - OPEN / FIRST RESERVE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Topic: `Technology`  
Priority: `HIGH`

Do not activate C021 while C001, C009, and C017 occupy the three substantial active-research slots.

## C001 initial source-reconnaissance status

The first C001 pass identified plausible source paths through:

- the Philippine AI Report 2025 as industry-survey landscape evidence;
- DOST AIgnite and ACABAI-PH implementation programs;
- DOST's August 2026 MSME AI capacity-building work;
- National Privacy Commission AI/privacy guidance;
- Globe public/company reporting on deployed AI use cases;
- PLDT/Smart filings and named production initiatives;
- vendor/partner case studies as leads only.

Important contradiction already recorded:

The public Swarm report page says 65% of surveyed organizations remain at proof-of-concept, while a displayed chart on the same page labels proof-of-concept at 40%. The packet must resolve the denominator/methodology before Portfilo uses the 65% figure as a factual claim.

Vendor/company success metrics remain reported claims until independently verified.

## Public surfaces - PASS

Current validated surfaces remain:

- shared `SiteHeader` / `SiteFooter`;
- Homepage `/`;
- About `/about`;
- Research & Standards `/standards`;
- Story template;
- Series template;
- Confirmation `/confirmed`;
- Subscribe `/subscribe` plus the approved single-purpose Cloudflare Pages Function.

Fixture story language remains preview material until real launch stories are researched, approved, and published.

## Email system - PASS

Reusable template:

`Portfilo Brief v0`

Canonical instructions:

`docs/BEEHIIV_EMAIL_SETUP.md`

Validated state remains:

- desktop preview: PASS;
- mobile preview: PASS;
- long-headline wrapping: PASS;
- one-story behavior: PASS;
- optional correction treatment: PASS;
- optional lead-image treatment: PASS;
- real inbox test: PASS, user reported;
- double-opt-in confirmation flow: PASS;
- Welcome Email: OFF;
- Smart Nudge: OFF for v0;
- sender name: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`.

beehiiv remains responsible for subscriber storage, confirmation, delivery, unsubscribe handling, and deliverability infrastructure.

## Site launch foundation / repository hardening - PASS

Task 1A and Task 1B remain validated, including:

- optional production `SITE_URL` contract;
- canonical/social metadata when `SITE_URL` is set;
- sitemap/robots behavior when `SITE_URL` is set;
- Article structured data;
- custom 404 and Privacy page;
- static security headers;
- `astro check` in production build;
- 4 KB subscribe request cap;
- same-origin, honeypot, validation, safe-error, and beehiiv behavior;
- prior dependency audit at 0 vulnerabilities on 2026-09-02.

No new application code changed during launch selection or the current research-packet work, so no new build validation is claimed for these documentation/research commits.

## Temporary production deployment - PASS / final domain pending

Cloudflare Pages project:

`portfilo-app`

Temporary URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Previously validated, user reported:

- Pages deployment: PASS;
- production `BEEHIIV_API_KEY` secret: PASS;
- live signup: PASS;
- beehiiv confirmation email: PASS;
- Pending -> Active subscriber state: PASS;
- cross-platform link-arrow rendering: PASS on iOS.

Still pending:

- final public domain;
- production `SITE_URL` after the final domain is live;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enablement/verification;
- final beehiiv Opt-in Redirect URL;
- final-domain subscribe -> confirm -> `/confirmed` -> Active -> unsubscribe QA;
- mailing-address/compliance clearance before the first public newsletter send.

The temporary beehiiv redirect target was identified during testing but its saved configuration was not separately re-verified. Do not claim it is configured unless explicitly tested/confirmed.

Do not add Turnstile unless deployed traffic shows a real abuse problem after the existing honeypot and edge rate limit are active.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Foundation / Content Architecture / Editorial Design | PASS |
| Shared chrome and public pages | PASS |
| Story and series templates | PASS |
| Subscribe end-to-end | PASS, local + temporary live flow through Active |
| beehiiv double opt in | PASS |
| Portfilo Brief reusable template | PASS |
| Portfilo Brief inbox test | PASS, user reported |
| Task 1A site launch foundation | PASS |
| Task 1B request-body hardening | PASS |
| Dependency audit | PASS, 0 vulnerabilities on 2026-09-02 |
| Cloudflare temporary production deployment | PASS, user reported |
| Content Planning System v0 | APPROVED / PASS |
| Editorial Launch Research | COMPLETE / APPROVED |
| First real launch package | APPROVED |
| C001 flagship packet | ACTIVE / CONTINUE |
| C009 supporting packet | ACTIVE / brief started |
| C017 supporting packet | ACTIVE / brief started |
| C021 reserve | OPEN / QUEUED |
| Fixture content replacement | PENDING verified launch stories |
| Final-domain Cloudflare configuration | PENDING domain |
| Production Opt-in Redirect | PENDING final canonical domain; temporary target not separately re-verified |
| Cloudflare edge rate limiting | PENDING |
| Cloudflare Web Analytics | PENDING verification |
| Production unsubscribe QA | PENDING |
| Mailing-address/compliance clearance | PENDING before first public send |

## Remaining launch scope

### Editorial track

- continue C001 source reconnaissance and access testing;
- secure real case/operator evidence below vendor-marketing level;
- resolve the Swarm 65% vs 40% discrepancy before using that statistic;
- develop C001 evidence ledger and contradiction search;
- run source reconnaissance for C009 and C017;
- make story decisions separately for each active packet;
- draft only from verified/qualified packet evidence;
- run adversarial review and claim audit;
- prepare visuals/graphics only where evidence makes them useful;
- replace fixture content with verified stories;
- populate the homepage and Portfilo Brief from published work.

### Deployment track

When the canonical domain is available:

- connect the public domain;
- set `SITE_URL`;
- configure edge rate limiting;
- enable/verify Web Analytics;
- update beehiiv Opt-in Redirect to canonical `/confirmed`;
- complete final subscribe/confirm/unsubscribe QA;
- verify canonical/social/sitemap/robots behavior;
- complete mailing-address/compliance clearance;
- run final browser, responsive, link, and console QA.

Do not treat post-launch enhancements as v0 blockers.

## Exact next task

**Continue C001 flagship source reconnaissance and test whether the required reporting threshold is achievable.**

Immediate priorities:

1. identify and verify 3-5 plausible implementation attempts;
2. seek evidence below executive and vendor marketing layers;
3. find at least one stalled/failed/mixed case if possible;
4. establish direct operator and independent challenge-source targets;
5. reconcile the Swarm report's POC figures;
6. update the evidence and contradiction ledgers before any drafting decision.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
