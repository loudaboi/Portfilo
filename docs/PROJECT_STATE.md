# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Third Launch Story Direction Research - AWAITING APPROVAL**

The publishing system, editorial standards, first published stories, homepage real-content integration, and Portfilo Brief foundation are in place.

Two real stories are published:

- C027, `Build things that make the next thing easier`, by Louda Tuppal;
- C009, `What 'higher-value work' means in Philippine IT-BPM`, by Portfilo.

C027 is the first homepage featured story. C009 is the current Latest story.

Recent share-readiness fixes are committed:

- the three synthetic development story fixtures that were still marked `published` have been changed to `draft`, so they should no longer appear on the homepage or generate public story routes after deployment;
- the homepage wordmark red variable was restored after `lo` temporarily inherited black;
- Subscribe CTAs now visually use a CSS-drawn northeast arrow so iOS cannot render the Unicode arrow as an emoji-style glyph.

The user still needs to verify the newest Cloudflare deployment on mobile. Do not claim those live fixes as verified until the user confirms them.

C027 visual sourcing remains planned but is not the immediate editorial priority. No hero image has been selected, generated, licensed, or published yet.

First-phase research on the possible third launch story is complete. The research does **not** support a generic `Why we built Portfilo`, `news needs more context`, or jargon-focused launch story. The strongest surviving direction is an independent AI/Technology story about the second information step after first exposure to news: some users increasingly ask follow-up questions, simplify complicated stories, combine sources, and evaluate what they first encountered. A Philippine-specific original evidence layer is required before this can proceed to structure or drafting.

Research note:

`research/editorial-launch/third-story-information-problem-evaluation.md`

The core direction now awaits Louda Tuppal's approval. Do not design the detailed reporting structure or draft the article until that approval is granted.

## Current branch

Authoritative branch:

`build/portfilo-v0`

Latest handoff head before this state update:

`cd9b95b9449ad0a54d7a0739b5d05ed1e793c056`

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

## Homepage and fixture state

Homepage file:

`src/pages/index.astro`

Current hierarchy:

1. coverage identity block;
2. C027 as the dominant Featured story;
3. C009 under Latest;
4. About;
5. Portfilo Brief.

Implementation behavior:

- homepage reads the `stories` collection;
- only `status: published` stories are eligible;
- published stories are sorted by `publishedAt`;
- the first `featured: true` story becomes the homepage feature;
- other published stories populate Latest;
- story titles/actions link to real story routes.

The following development fixtures remain in the repository for testing/history but are now `draft`, not public:

- `src/content/stories/portfilo-content-architecture-test.md`;
- `src/content/stories/portfilo-series-ordering-test-two.md`;
- `src/content/stories/portfilo-series-ordering-test-three.md`.

No fake stories should be reintroduced simply to fill space. The homepage should grow as real published stories are added.

## Shared UI fixes pending live verification

### Wordmark

The current wordmark is HTML/CSS, not a locked SVG asset. `Port` is ink, `fi` is blue, and `lo` is red. The homepage red custom property regression was fixed. A dedicated SVG/brand-asset refactor can be handled later and is not the current task.

### Subscribe arrows

The homepage Portfilo Brief Subscribe CTA and `/subscribe` form button still contain an accessibility-hidden Unicode arrow in markup, but shared header CSS suppresses the glyph visually and draws the northeast arrow with CSS pseudo-elements. This avoids iOS emoji-style rendering while preserving the current CTA design.

Commit implementing this fix:

`36982294c5c5cd10810417379978e391a3fcedf5`

Live mobile verification is pending.

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

## Possible third launch story

First-phase research is complete and recorded in:

`research/editorial-launch/third-story-information-problem-evaluation.md`

### What the research supports

- audiences broadly value explanation and perspective in addition to timely updates;
- younger news avoiders are more likely than older news avoiders to report that news is difficult to understand;
- weekly AI-chatbot use for news remains a minority behaviour, but users increasingly employ chatbots for follow-up questions, summarisation, source evaluation, easier understanding, and combining information from multiple outlets;
- Philippine news discovery is heavily platform-mediated, making first exposure increasingly likely to happen through a feed, creator, clip, headline, or other intermediary.

### What the research does not support

- a general claim that Philippine business/technology journalism lacks context;
- a general claim that jargon is the primary problem;
- a claim that most young people cannot understand news;
- a claim that platformisation causes misunderstanding;
- a claim that AI is a trustworthy replacement for original journalism;
- a claim that Portfilo solves the problem.

### Direction evaluation

**Recommended: Direction A - The second question after the headline**

Core:

> For a small but growing group of news users, getting informed increasingly includes a second step after first exposure: asking follow-up questions, simplifying complicated stories, combining sources, and checking what the original update did not answer.

Why it survives:

- clear 2026 timing trigger;
- independently fits AI/Technology even if Portfilo is never mentioned;
- more specific and falsifiable than `news needs context`;
- can connect to the reader problem without making Portfilo the hero.

Critical condition:

Reuters Institute has already established the global AI-news behaviour. A Portfilo story must add a material Philippine-specific original evidence layer. If the next reporting phase cannot produce that contribution, reframe or kill rather than publish a derivative summary.

**Strong alternative: Direction B - Context debt**

Core:

> Long-running business and technology stories often assume background knowledge that a new reader has never accumulated, so the cost of understanding rises before the reader reaches the actual new development.

This framing is potentially more durable and less AI-centric, but it requires original evidence before `context debt` can be treated as more than a useful hypothesis.

Killed as current third-story directions:

- jargon / insider-language story: too generic and redundant with `/about` plus C009;
- `updates are abundant; understanding is scarce`: too close to a Portfilo manifesto and insufficiently original;
- generic `Why we built Portfilo`: institutional/promotional rather than independent journalism.

Held:

- fragmented/assembly problem: plausible, but the current evidence does not establish the causal mechanism strongly enough.

Founder/launch note:

- not needed yet because a substantive editorial direction survives;
- retain a 500-800 word institutional founder note only as a fallback if the approved direction fails its original-reporting threshold.

No headline, article structure, final candidate ID, content type, or draft is approved yet.

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

The newest share-readiness fixes are committed but require live deployment verification before a final share-ready PASS.

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

Do not claim a newest deployment/render as verified until it is actually checked.

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
| Homepage synthetic fixtures hidden | PASS IN REPOSITORY / LIVE RECHECK PENDING |
| Homepage C027 feature integration | PASS IN REPOSITORY / USER HAS VIEWED PAGE, NEWEST RECHECK PENDING |
| Homepage C009 Latest integration | PASS IN REPOSITORY / NEWEST RECHECK PENDING |
| Wordmark red `lo` regression | FIXED IN REPOSITORY / LIVE RECHECK PENDING |
| Subscribe emoji-arrow issue | FIXED IN REPOSITORY / MOBILE LIVE RECHECK PENDING |
| C027 final hero image | NOT SELECTED |
| C027 hero-image schema | NOT IMPLEMENTED YET |
| C009 repository content entry | PUBLISHED / `featured: false` / by `Portfilo` |
| C009 fresh application build | NOT VERIFIED / DO NOT CLAIM PASS |
| C009 full live deployment/render QA | INCOMPLETE |
| Third-story problem-space research | COMPLETE / DIRECTION A RECOMMENDED / AWAITING USER APPROVAL |
| C001 | ACTIVE / CONTINUE |
| C017 | ACTIVE / REFRAME / CONTINUE |
| C021 | OPEN / QUEUED |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Wait for Louda Tuppal's approval of the third-story core direction.**

Recommended choice:

- **Direction A - The second question after the headline**.

Strong alternative:

- **Direction B - Context debt: why some stories are hard to enter midway**.

After approval, and only after approval:

1. assign a final candidate ID if appropriate;
2. create a dedicated story research packet;
3. design a Philippine-specific original evidence plan;
4. execute source mapping / primary-secondary research / contradiction search;
5. decide `PUBLISH / REFRAME / CONTINUE / KILL`;
6. only then research article structure and draft if the evidence supports publication.

C027 visual sourcing can resume after this editorial exploration or when the user explicitly returns to it.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
