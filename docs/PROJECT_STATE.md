# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Published Launch Package + Featured Visual Development - ACTIVE**

The publishing system, editorial standards, first published stories, homepage real-content integration, and Portfilo Brief foundation are in place.

Two real stories are now published in repository state:

- C027, `Build things that make the next thing easier`, by Louda Tuppal;
- C009, `What 'higher-value work' means in Philippine IT-BPM`, by Portfilo.

C027 is the first homepage featured story. C009 appears as the current Latest story. The old homepage story fixtures and preview-status notice have been removed.

C027 visual sourcing is now the active design task. No hero image has been selected, generated, licensed, or published yet.

## Current branch

Authoritative branch:

`build/portfilo-v0`

Current homepage/visual-plan head at this state:

`cad86b1a230759c460ab5185b58d103a460d7d4d`

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

## Published stories

### C027 - PUBLISHED / FEATURED HOMEPAGE STORY

Title:

> **Build things that make the next thing easier**

Topic: `Building`  
Content type: `Perspective`  
Author: `Louda Tuppal`  
Published: `2026-09-03`  
Featured: `true`

Story file:

`src/content/stories/build-things-that-make-the-next-thing-easier.md`

Research packet:

`research/stories/building-the-foundation/`

Completed editorial stages:

- topic-space research: complete;
- core idea: user approved;
- structure research: complete;
- contrast-led argumentative funnel: user approved;
- Draft v3 direction: user approved;
- adversarial review: complete;
- claim audit: pass;
- editorial/copy pass: pass;
- headline/dek audit: pass;
- publication approval: granted 2026-09-03;
- public content entry: published;
- homepage feature authorization: granted 2026-09-03;
- `featured: true`: applied.

The public article is reader-centered and intentionally not autobiographical. It contains no forced AI section, no numbered framework, and no external factual claims requiring reader-facing citations.

Visual plan:

`research/stories/building-the-foundation/visual-plan.md`

Current visual state:

- no final hero image exists;
- homepage uses a typography-led dark feature panel as the fallback;
- recommended visual direction is an original conceptual editorial illustration built around `carryover` / the next starting point;
- do not use generic startup, hustle, laptop, staircase, ladder, mountain, or success imagery.

### C009 - PUBLISHED / LATEST HOMEPAGE STORY

Title:

> **What 'higher-value work' means in Philippine IT-BPM**

Topic: `Business`  
Content type: `Explained`  
Author: `Portfilo`  
Published: `2026-09-03`  
Featured: `false`

Story file:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

Research packet:

`research/stories/it-bpm-higher-value-work/`

C009 remains a supporting story. Do not promote it above C027 on the homepage unless deliberately reopened.

The user has viewed the deployed article successfully, but the full technical deployment/render checklist is still not recorded as complete.

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

The Swarm Philippine AI Report 2025 discrepancy remains unresolved: narrative text says 65% remain at proof-of-concept while a chart on the same page shows proof-of-concept at 40%. Do not use 65% as a clean factual anchor until reconciled.

### C017 - ACTIVE / SUPPORTING / REFRAME / CONTINUE

Reframed question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Topic: `Business`  
Priority: `HIGH`  
Packet: `research/stories/zero-fee-merchant-payments/`

Decisive remaining need: narrow written clarification from BSP and/or PPMI. Do not let that clarification block the publishing schedule.

### C021 - FIRST RESERVE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Topic: `Technology`  
Priority: `HIGH`

Do not activate C021 while the WIP limit is occupied by current substantial research.

## Homepage state

File:

`src/pages/index.astro`

The homepage now reads the published `stories` collection instead of synthetic story fixtures.

Current hierarchy:

1. coverage identity block;
2. C027 as the dominant Featured story;
3. C009 under Latest;
4. About;
5. Portfilo Brief.

Implementation behavior:

- published stories are sorted by `publishedAt`;
- the first `featured: true` story becomes the homepage feature;
- other published stories populate Latest;
- story titles and actions link to real story routes;
- the temporary feature visual is typography-led and contains no fabricated evidence or preview copy.

No fake stories should be reintroduced simply to fill space. The homepage should grow as real published stories are added.

## C027 visual implementation plan

Before attaching a final visual:

1. research a small set of editorial visual references for composition, texture, and restraint without copying another artist's style;
2. lock one concrete `Modular carryover` art direction;
3. create 2-3 original concept variants;
4. evaluate the variants at homepage and article crop sizes;
5. select one;
6. add optional hero-image metadata to the story schema;
7. render that asset on both the homepage feature and story page with a typography fallback;
8. add meaningful alt text and appropriate credit/caption metadata;
9. later pass the same image into Open Graph/social metadata when implemented;
10. run responsive and render QA.

The preferred v0 metadata shape is currently:

```yaml
heroImage:
  src: /images/stories/<slug>/hero.webp
  alt: "..."
  credit: "Portfilo illustration"
  caption: "..." # optional
```

Do not add this schema until an actual selected asset requires it.

## Public product state

Validated public surfaces from prior work include:

- shared `SiteHeader` / `SiteFooter`;
- Homepage `/`;
- About `/about`;
- Research & Standards `/standards`;
- Story template;
- Series template;
- Confirmation `/confirmed`;
- Subscribe `/subscribe` and single-purpose Cloudflare Pages subscription proxy.

Homepage source is now real-content based. Deployment/render verification of the newest homepage change is still required before claiming a final live PASS.

## Email system

Portfilo Brief reusable template remains `PASS` based on prior desktop/mobile/inbox testing.

Validated state includes:

- double opt-in flow: PASS;
- sender name: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email: OFF;
- Smart Nudge: OFF for v0.

beehiiv remains responsible for subscriber storage, confirmation, delivery, unsubscribe handling, and deliverability infrastructure.

No newsletter distribution has been authorized or sent for C027 or C009.

## Deployment state

Cloudflare Pages project:

`portfilo-app`

Temporary URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

The branch is updated for the homepage integration, but the active assistant environment has no Cloudflare deployment-status connector and GitHub exposes no CI/status checks for the commit. Do not claim the newest homepage deployment/render as verified until it is actually checked.

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
| C027 editorial pipeline | PASS |
| C027 publication approval | GRANTED |
| C027 repository content entry | PUBLISHED / `featured: true` / by `Louda Tuppal` |
| C027 article route | USER-VIEWED / PASS |
| Homepage fixtures removed | PASS IN REPOSITORY |
| Homepage C027 feature integration | PASS IN REPOSITORY / LIVE RENDER NOT YET VERIFIED |
| Homepage C009 Latest integration | PASS IN REPOSITORY / LIVE RENDER NOT YET VERIFIED |
| C027 final hero image | NOT SELECTED |
| C027 hero-image schema | NOT IMPLEMENTED YET |
| C009 repository content entry | PUBLISHED / `featured: false` / by `Portfilo` |
| C009 fresh application build | NOT VERIFIED / DO NOT CLAIM PASS |
| C009 full live deployment/render QA | INCOMPLETE |
| C001 | ACTIVE / CONTINUE |
| C017 | ACTIVE / REFRAME / CONTINUE |
| C021 | OPEN / QUEUED |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**C027 visual reference and sourcing pass.**

Use `research/stories/building-the-foundation/visual-plan.md` as the constraint set.

The target direction is:

> **Modular carryover:** an original, restrained editorial illustration in which something from one attempt visibly remains usable in the next.

Do not generate the final image until the concrete art direction has been reviewed. After selection, implement the reusable image metadata/rendering path rather than hardcoding C027 into the story template.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
