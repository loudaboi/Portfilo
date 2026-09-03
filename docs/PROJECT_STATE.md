# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - SITE COPY + IA AUDIT COMPLETE / PHASE 2A IMPLEMENTATION AWAITING APPROVAL**

Portfilo's publishing system, research standards, first published stories, homepage integration, and Portfilo Brief foundation remain in place.

A system-level writing problem was identified on 2026-09-03: Portfilo had strong rules preventing AI from becoming factual evidence, but the workflow still allowed AI to invent structure, institutional phrasing, and polished prose before an explicit writing-form decision existed.

The corrective writing system is established.

Canonical writing document:

`docs/WRITING_SYSTEM.md`

Supporting research:

`research/writing-system/research.md`

Reusable pre-draft template:

`research/STYLE_BRIEF_TEMPLATE.md`

Site copy/information-architecture audit:

`docs/SITE_COPY_AND_IA_AUDIT.md`

Core writing rule:

> **AI output has zero stylistic authority.**

This does not ban AI-assisted drafting. It means a model cannot silently decide the story form, house voice, institutional position, rhetorical pattern, or sentence style and then treat its own output as precedent.

Professional examples and guidance may be used to study structural decisions. They must not be used to imitate distinctive wording, cadence, metaphors, jokes, or another publication's voice.

The site-copy/IA audit is complete. No public copy, article prose, or application implementation was changed during the audit.

## Current branch

Authoritative branch:

`build/portfilo-v0`

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Canonical documents

Project/product:

- `docs/V0_SCOPE.md`
- `docs/PROJECT_STATE.md`
- `docs/CONTENT_PLANNING.md`
- `docs/SITE_COPY_AND_IA_AUDIT.md`

Editorial/research/writing:

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `research/README.md`
- `research/STYLE_BRIEF_TEMPLATE.md`

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

Core editorial rule:

> **Help through reporting and evidence, not generic advice.**

Core copy rule:

> **Say the thing. Then stop.**

Writing rule:

> **AI output has zero stylistic authority.**

No permanent tagline by default.

## Updated editorial workflow

```text
IDEA
↓
RESEARCH BRIEF
↓
SOURCE MAP / APPROPRIATE EVIDENCE PLAN
↓
RESEARCH / EVIDENCE LEDGER / CONTRADICTION SEARCH
↓
STORY DECISION
↓
WRITING JOB / FORM SELECTION / STYLE BRIEF
↓
DRAFT
↓
ADVERSARIAL REVIEW
↓
CLAIM AUDIT
↓
STRUCTURE / EDITORIAL PASS
↓
AI-SLOP / HUMAN-LANGUAGE PASS
↓
HEADLINE / DEK / DESCRIPTION AUDIT
↓
VISUAL REVIEW
↓
PUBLISH
↓
DISTRIBUTE
↓
CORRECT / UPDATE WHEN NEEDED
```

For substantial stories, `style-brief.md` is a **pre-draft gate** using `research/STYLE_BRIEF_TEMPLATE.md`.

The brief must justify the writing form from the material, reader need, approved Portfilo recipe, documented professional practice, or explicit editorial judgment.

`AI suggested it` is not sufficient justification.

## Writing-system research outcome

Research outcome:

**ADOPT / FORM-FIRST WRITING SYSTEM**

The system does **not** create one universal `proven Portfilo voice`.

Reason:

Professional journalism uses multiple established forms for different jobs. Poynter documents forms including inverted pyramid, nut-graf/analytical feature, hourglass, narrative, and related structures and explicitly uses the principle that form should follow content. The OpEd Project documents an evidence-backed argument form for opinion/Perspective work while noting it is not a universal rule. GOV.UK and Microsoft content-design guidance support user/task-first, clear, concise interface writing and explicit final editing checks.

These references support form discipline and editing practice. They do not establish a universally superior prose voice.

Research record:

`research/writing-system/research.md`

## Writing recipes now available

`docs/WRITING_SYSTEM.md` contains initial recipes for:

- Reported — update-led;
- Reported — feature/enterprise;
- Explained;
- Analysis;
- Perspective;
- Guide;
- Profile;
- Field Notes;
- Partner;
- navigation/actions;
- status/error copy;
- About/institutional copy;
- Standards/methodology/privacy copy;
- Subscribe/newsletter copy.

These are defaults, not templates to fill mechanically.

## Institutional-copy provenance

Nontrivial public lines that speak for Portfilo must now be classified as:

- `FUNCTIONAL`;
- `OPERATIONAL`;
- `EDITORIAL / INSTITUTIONAL`;
- `LEGAL / PRIVACY`;
- `PROMOTIONAL`.

Institutional claims require canonical repository authority or explicit founder/editor approval.

Generated wording such as `Portfilo believes`, `Portfilo wants`, `Portfilo cares`, `Portfilo is interested in`, `Portfilo exists to`, or `Portfilo aims to` is not valid merely because it sounds consistent with strategy.

Promotional quality claims are rejected by default unless specifically approved and supported.

## Site copy + information-architecture audit outcome

Audit outcome:

**PASS / IMPLEMENTATION PLAN READY / USER APPROVAL REQUIRED**

Canonical audit:

`docs/SITE_COPY_AND_IA_AUDIT.md`

The audit reviewed:

- global header/footer;
- homepage;
- About;
- Research & Standards;
- Subscribe;
- confirmation;
- 404;
- Privacy;
- story-page UI;
- series-page UI;
- signup API/error copy;
- story metadata architecture;
- repository/package positioning metadata;
- story and series routing relationships.

Main findings:

1. functional/operational copy is generally stronger than institutional copy because its job and authority are concrete;
2. homepage temporary descriptor should not survive simply because the layout has space for it;
3. About contains generic and taxonomy-stale copy that needs a literal rewrite;
4. Standards is mostly grounded and should receive only restrained tightening rather than a personality rewrite;
5. Subscribe repeats the same promise and includes beehiiv/provider detail better kept on Privacy;
6. `package.json` still contains retired positioning language and must be replaced with a literal repository description;
7. existing story prose remains outside this site-copy audit and will be handled individually under style briefs.

No public copy was rewritten during the audit.

## Headline / dek / description architecture

The current Astro story schema uses one `description` field for multiple writing jobs:

- visible story dek;
- homepage/story-card summary;
- series story summary;
- SEO description;
- social description;
- structured-data description.

The audit confirms the approved migration to:

```yaml
title:
dek:
description:
```

`dek` = visible editorial story-header copy.  
`description` = compact, page-specific summary for cards/indexes/SEO/social/structured data.

Rules:

- do not encode a hard SEO character maximum solely because snippets are commonly truncated; Google documents no fixed required maximum;
- do not add a permanent runtime `dek ?? description` fallback after migration;
- deliberately author both fields for all current story entries;
- story page uses `dek`;
- cards, `/stories`, series listings, search/social metadata, and structured data use `description`.

This migration is approved in scope but **not implemented yet**.

## `/stories` index decision

The audit confirms the information-architecture gap:

Story URLs live under `/stories/<slug>` but no `/stories` parent index exists.

`docs/V0_SCOPE.md` now explicitly includes a Stories index in v0 scope.

Approved implementation direction:

- create `/stories`;
- list all `status: published` stories newest first;
- show date, content type, topic, headline, short `description`, author, and link;
- no search, filters, pagination, popularity ranking, or recommendation logic in v0;
- change global header/footer navigation `Latest` -> `Stories`;
- keep `Latest` as a homepage section label;
- update relevant utility actions currently linking to `/#latest` when their real job is to browse published work.

Implementation has not started.

## Synthetic series fixture routing issue

A release-blocking implementation inconsistency was found during the audit.

Current route:

`src/pages/series/[slug].astro`

generates static paths for every series entry, including:

`src/content/series/content-architecture-fixtures.md`

which is marked:

`fixture: true`.

Because the route does not exclude fixtures in production, `/series/content-architecture-fixtures` can be generated publicly. If `SITE_URL` enables sitemap generation, the current sitemap filter also does not exclude that route.

Required fix during Phase 2A:

- fixture series may remain available in local development if useful;
- `fixture: true` series entries must be excluded from production routes;
- fixture routes must not enter production sitemap output.

Do not claim production fixture exclusion is currently correct until this is fixed and built.

No `/series` index is required in v0 until a real reader need exists.

## Existing stories under the new system

Existing prose is not automatically an approved style exemplar merely because it is already published or approved.

### C027 - PUBLISHED / FEATURED / WRITING RE-AUDIT REQUIRED

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

Its factual/editorial premise is not being discarded. Its structure, paragraph rhythm, examples, headline/dek, and prose must receive a new Perspective style brief and writing-system audit before the launch copy is considered final.

Do not unpublish it automatically. Revision will be deliberate and claim-preserving.

No final hero image has been selected. Newest share-readiness/mobile verification remains pending.

### C009 - PUBLISHED / WRITING RE-AUDIT REQUIRED

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

Its research/evidence base remains valuable. The main future writing task is to build an Explained style brief, reassess reader-question structure, and separately author the visible `dek` and compact `description`.

Fresh full build/live render QA remains incomplete.

### C030 - DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED

Current working title:

> **What actually changed?**

Content type: `Perspective`  
Topic: `Building` - provisional  
Author: `Louda Tuppal`

Packet:

`research/stories/what-actually-changed/`

Draft content entry:

`src/content/stories/what-actually-changed.md`

Current metadata remains:

- `status: draft`;
- `featured: false`;
- no `publishedAt`.

The earlier Draft 2 and headline/dek approval occurred **before** the new writing system.

The core editorial idea remains available, but the prose is reopened.

The earlier dek is specifically no longer presumed final:

> `An update tells you something happened. Portfilo is interested in what changes when the announcement meets operating reality.`

Reason:

`Portfilo is interested in...` was generated institutional phrasing rather than wording grounded in an approved style source or explicit authored institutional statement.

C030 publication is paused until a new `style-brief.md` is created and the story passes the new writing gates.

The development-only draft route may remain for later visual review. Production must continue to exclude the draft.

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

No draft is authorized until the reporting threshold is met **and** a writing style brief is approved under the new system.

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

No draft is authorized until the evidence supports a story decision **and** a writing style brief is approved.

If a defensible bottom-up total cannot be established, the evidence-led reframe remains:

> **Why Philippine data-center capacity numbers conflict — and what operating, energized, planned, and announced megawatts actually mean.**

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

The original behavior question remains potentially valuable as a future reported study.

The six-event Reddit desk pilot is preserved as research history. Its proposed Reddit-led full corpus is rejected as the evidentiary backbone for a Portfilo launch article.

Revisit when Portfilo can recruit at least 10 suitable participants without relying almost entirely on the founder's immediate circle, or another professional primary-data route becomes available.

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

Current global navigation still uses:

- Latest -> `/#latest`;
- Standards;
- About;
- Subscribe.

Approved but not implemented navigation direction:

- Stories -> `/stories`;
- Standards;
- About;
- Subscribe.

Homepage `Latest` remains a section label.

Wordmark remains HTML/CSS:

- `Port`: ink;
- `fi`: blue;
- `lo`: red.

Subscribe CTAs use a CSS-drawn northeast arrow to avoid iOS emoji rendering.

Newest live/mobile re-verification remains pending.

## Site-copy remediation decisions

Detailed audit:

`docs/SITE_COPY_AND_IA_AUDIT.md`

Highest-priority public-copy changes after Phase 2A:

- remove or rejustify the homepage temporary descriptor;
- remove repeated Featured/Latest labeling where it adds no information;
- replace About's generic `Stories take different forms` treatment with literal section copy;
- make About's content-type description match the actual configured taxonomy;
- avoid turning Standards into a slogan page; reconsider the stylized closing while preserving procedures;
- reduce Subscribe duplication and keep provider-specific handling on Privacy where it belongs;
- verify Privacy against final deployed data flow rather than rewriting it for personality.

Functional controls and operational status/error copy are generally KEEP.

Do not rewrite these surfaces from intuition. Implementation must follow the audit and institutional-copy provenance rules.

## Known stale/internal copy issue

`package.json` still contains the old description:

> `Portfilo is a Filipino-first media and community company built around practical intelligence for ambitious Filipinos.`

That language conflicts with the current no-tagline/content-first architecture.

Required Phase 2A fix:

Replace it with a literal repository/package description consistent with the current product definition. Do not introduce a new marketing sentence.

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

Current active story WIP:

- C001;
- C021;
- C030.

Waiting external:

- C017.

Held/future:

- C029.

The writing/site-copy remediation is a project/system phase and does not create a fourth substantial story assignment.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Writing-system research | PASS / RECORDED |
| `docs/WRITING_SYSTEM.md` | CREATED / CANONICAL |
| Story style-brief template | CREATED |
| Publishing workflow integration | UPDATED |
| Copy provenance rules | UPDATED |
| Site-wide copy + IA audit | PASS / RECORDED |
| `docs/SITE_COPY_AND_IA_AUDIT.md` | CREATED |
| `/stories` index | APPROVED IN SCOPE / NOT IMPLEMENTED |
| `dek` + `description` schema split | APPROVED / NOT IMPLEMENTED |
| Synthetic series fixture production exclusion | FAIL / FIX REQUIRED |
| Stale `package.json` positioning copy | FIX REQUIRED |
| Public site copy rewrite | NOT STARTED |
| C027 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C001 | ACTIVE / CONTINUE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Newest mobile/share-readiness deployment verification | PENDING |
| Final-domain configuration | PENDING DOMAIN |

No application code or public copy was changed during the site-copy/IA audit, so a new local Astro build is not required solely to validate this documentation phase.

The prior local dependency/build check remains unresolved from the previous phase; when code changes resume, run `npm install` if dependencies are missing and then `npm run build`.

## Exact next task

**Obtain Louda Tuppal's approval or revision of `docs/SITE_COPY_AND_IA_AUDIT.md`.**

If approved, implement **Phase 2A — metadata and information architecture**, before rewriting public prose:

1. add required `dek` field to the story schema;
2. deliberately author `dek` and `description` for all current story entries without treating old prose as style authority;
3. update the story route to render `dek` and keep cards/meta on `description`;
4. add the simple `/stories` index;
5. change global navigation `Latest` -> `Stories` while keeping homepage `Latest`;
6. update relevant confirmation/404 actions to the stable story index;
7. exclude `fixture: true` series entries from production routes and sitemap;
8. replace stale `package.json` positioning description with literal repository metadata;
9. run `npm run build` and inspect the affected routes before starting Phase 2B copy rewrites.

After Phase 2A passes, implement Phase 2B site-copy changes surface by surface under the Writing System. After that, create separate style briefs and re-audit C027, C009, and C030 one at a time.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.