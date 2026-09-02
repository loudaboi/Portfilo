# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Launch Story Research - ACTIVE**

The publishing machine and launch-selection system are ready. Editorial Launch Research is complete and the first research slate is approved.

C009 is now the first launch assignment whose research packet has reached a `PUBLISH` story decision. `PUBLISH` means evidence supports drafting; it does not mean the story is publicly published yet.

Do not create public story content before drafting, adversarial review, claim audit, and headline/methodology review are complete.

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

### Access-aware source planning

Before making a story depend on interviews, Portfilo evaluates current source reachability using the present relationships, warm introductions, known response history, public routes, publication visibility, reporting window, and alternative evidence paths.

Operational access labels are:

- `DIRECT / LIKELY`;
- `PLAUSIBLE`;
- `LOW-PROBABILITY`;
- `NOT REQUIRED`.

These labels measure reachability, not credibility. They should be reevaluated as Portfilo's relationships, publication history, and influence change.

Interviews remain one form of original reporting, not a mandatory ingredient in every substantial story.

### Verification-disclosure judgment

Generic language such as `Portfilo could not independently verify`, `Portfilo was unable to confirm`, or `Portfilo did not receive a response` is not default credibility copy.

The research packet should record uncertainty aggressively. Public copy should disclose a verification limit only when it materially helps the reader understand the evidence, fairness, or limitation of the story.

Preferred order:

1. verify;
2. remove an unnecessary unsupported claim;
3. attribute a reported claim precisely;
4. state the specific missing/conflicting evidence if materially relevant;
5. use newsroom-centered verification language only when it is the clearest accurate formulation;
6. research professional/legal requirements for unusual fairness-sensitive or high-risk cases.

Canonical details are in `docs/EDITORIAL_STANDARD.md` and `docs/RESEARCH_STANDARD.md`.

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

### C001 - ACTIVE / FLAGSHIP / CONTINUE

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
- `notes.md`

Current story outcome: `CONTINUE`.

Source reconnaissance is `PASS / OUTREACH READY`, while the drafting threshold remains unmet. The packet evaluates source reachability relative to Portfilo's current position rather than assuming large-company interviews will arrive on a launch timetable.

C001 remains active and may pursue realistic outreach, but it must not make Portfilo's publishing schedule depend indefinitely on low-probability corporate replies.

The Swarm Philippine AI Report 2025 discrepancy remains unresolved: narrative text says 65% remain at proof-of-concept while a chart on the same page labels proof-of-concept at 40%. Do not use the 65% figure as a Portfilo factual anchor until the denominator/question logic is reconciled.

### C009 - ACTIVE / SUPPORTING / PUBLISH

Original planning question:

> What does "higher-value work" actually mean inside Philippine IT-BPM?

Current publishable question:

> What jobs are Philippine IT-BPM employers actually talking about when they say `higher-value work`?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/it-bpm-higher-value-work/`

Current packet includes:

- `brief.md`;
- `sources.md`;
- `sample.md`;
- `evidence.md`;
- `contradictions.md`;
- `notes.md`.

The first full public-data/source pass is complete and produced the first `PUBLISH` decision in the launch slate.

### C009 findings now established

- `higher-value work` is not a standardized occupation category;
- official Philippine skills frameworks show specialized work across contact-center/BPM, GCC/shared services, healthcare information management, software/security and related capability areas;
- specialized roles can exist inside traditional contact-center/BPM operations, including workforce management, quality, transformation and security;
- a 15-role structured illustrative sample of current employer postings shows domain-intensive finance/healthcare work, data/technology work, process/control work and GCC/capability-ownership work;
- the most defensible explanatory dimensions are domain depth, technical/data depth, judgment/control responsibility, process/system ownership and stakeholder scope;
- `voice vs non-voice`, `AI vs non-AI`, job title and `technical vs non-technical` are inadequate shortcuts by themselves;
- some specialist work is accessible earlier in a career while other roles require professional credentials or substantial experience.

The packet does **not** establish representative sector-wide job shares, wage premiums, displacement/absorption, worker-transition probabilities, or that every specialist role is a better job.

Compensation was removed from the central C009 conclusion because the current employer-primary sample lacks sufficiently comparable salary disclosure and broad official wage data do not map cleanly onto the role taxonomy.

Interviews are `NOT REQUIRED` for this documentary Explained/Analysis version. They may become important for later worker-transition, realized-pay, job-quality, or employer-strategy questions.

**Drafting status: READY TO DRAFT FROM VERIFIED PACKET.**

### C017 - ACTIVE / SUPPORTING / REFRAME / CONTINUE

Original planning question:

> Who ultimately pays when qualifying small-merchant digital payments become free to the merchant?

Reframed working question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/zero-fee-merchant-payments/`

Current packet includes:

- `brief.md`;
- `sources.md`;
- `evidence.md`;
- `contradictions.md`;
- `notes.md`;
- `implementation-basis.md`.

The first public-evidence pass reframed the story. A second implementation-basis audit substantially exhausted the currently indexed BSP/PPMI documentary route.

### C017 findings now established

- the 2024 BSP exposure draft proposed a `micro-merchant` definition, a PHP250,000 monthly gross-receipts threshold, and an explicit merchant-fee waiver;
- signed Circular No. 1238 does not reproduce that definition or waiver and instead permits cost-based merchant fees under Section 503.7(c);
- same-day BSP Memorandum No. M-2026-025 nevertheless says the fee moratorium was lifted in view of the `implementation of zero fees for small merchant payments` without defining the eligibility test, payment rail, fee layer, or implementation instrument;
- earlier BSP guidance used broader `small e-payments` language and treated zero-fee P2M payments for microenterprises as an inclusive-pricing practice rather than establishing the final 2026 mechanism;
- current PPMI material says QR Ph P2M is free to consumers;
- BSP's 29 July 2026 launch material separately says merchants shoulder QR Ph transaction fees;
- current standard public merchant pricing remains nonzero for QR/QR Ph products.

These findings do **not** prove that no separate small-merchant zero-fee arrangement exists. They establish that Portfilo should not attribute the 2024 proposed waiver to Circular 1238 or equate consumer-side fee-free QR Ph use with universal zero merchant MDR.

The decisive remaining C017 source need is now a narrow written clarification from BSP and/or PPMI identifying the intended meaning and operative instrument. A broad interview campaign is unnecessary.

C017 remains active while that clarification path is available, but the publishing schedule must not wait on the response.

**Drafting status: DO NOT DRAFT YET.**

### C021 - OPEN / FIRST RESERVE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Topic: `Technology`  
Priority: `HIGH`

Do not activate C021 while C001, C009, and C017 occupy the three substantial active-research slots.

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

No application code changed during launch research or the current research-packet work, so no new build validation is claimed for these research/documentation commits.

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
| C001 flagship packet | ACTIVE / CONTINUE / outreach ready, not draft ready |
| C009 supporting packet | ACTIVE / PUBLISH / ready to draft from packet |
| C017 supporting packet | ACTIVE / REFRAME / CONTINUE / public-document route substantially exhausted |
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

- draft C009 from its verified/qualified research packet;
- run C009 adversarial review, claim audit, headline/dek audit and methodology/source presentation decision;
- only then create the public C009 story file and replace the relevant fixture content;
- pursue a narrow BSP/PPMI clarification for C017 when appropriate, without blocking the publishing schedule;
- keep C001 active with access-aware outreach/document research rather than waiting indefinitely for low-probability replies;
- prepare visuals/graphics only where evidence makes them useful;
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

**Draft C009 from the verified research packet.**

Drafting requirements:

1. use the narrowed question and supported finding recorded in `research/stories/it-bpm-higher-value-work/brief.md`;
2. use official skills frameworks as the structural backbone and the 15-role sample as concrete evidence;
3. do not introduce unsupported salary, prevalence, displacement, growth or worker-transition claims;
4. distinguish industry claims from Portfilo's analytical synthesis;
5. keep the structured sample's non-prevalence limitation visible where it materially affects interpretation;
6. after drafting, run adversarial review and a claim-by-claim audit before creating public story content.

C001 and C017 remain active in parallel, but C009 is now the first story ready to move from research into drafting.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
