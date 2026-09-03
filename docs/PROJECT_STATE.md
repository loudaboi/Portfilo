# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 2A DEPLOYED REVIEW PASS / PHASE 2B AWAITING APPROVAL**

Portfilo's publishing system, research standards, first published stories, homepage integration, and Portfilo Brief foundation remain in place.

A system-level writing correction is underway. Portfilo now separates factual authority from stylistic authority and requires writing-form decisions before drafting.

Core rules:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero stylistic authority.**

No permanent tagline by default.

Phase 1 writing-system work is complete.

Phase 2 site-copy/information-architecture audit is complete and approved.

Phase 2A structural implementation is complete and has passed user review on the deployed Cloudflare Pages site. The user confirmed on 2026-09-03 that `/stories` is visible and usable on the deployed site and that normal article pages do not display synthetic series treatment.

A local `npm run build` was not run or reported for Phase 2A. Do not convert the deployed visual review into a claim that local build validation passed.

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

## Editorial model

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

Current editorial workflow:

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

Every substantial story requires a pre-draft `style-brief.md`. `AI suggested it` is not sufficient structural or stylistic justification.

## Phase 2A - implemented

### Story metadata split

The Astro story schema now requires:

```yaml
title:
dek:
description:
```

- `dek` is visible story-header copy.
- `description` is the compact card/archive/SEO/social/structured-data summary.

The story route renders `dek`; homepage/archive/series cards and metadata use `description`.

There is no permanent `dek ?? description` fallback.

Migration note: C027, C009, C030, and the synthetic fixtures temporarily preserve their old description text in both fields. This was done to avoid inventing new prose during a structural migration. It is not final editorial approval. Each real story must separately author its final dek and description during its writing-system re-audit.

### Stories index

`src/pages/stories/index.astro` exists.

It lists published stories only, newest first, with date, content type, topic, headline, description, author, and story link.

No filters, search, pagination, popularity ranking, or recommendation system were added.

User deployed review: **PASS**.

### Navigation

Header/footer navigation is:

- Stories -> `/stories`
- Standards
- About
- Subscribe
- Privacy remains footer-only

Homepage `Latest` remains a homepage section label.

User deployed review: **PASS**.

### Confirmation / 404 utility links

`/confirmed` and the custom 404 now point to `/stories` using the functional action `Browse stories`.

### Synthetic series fixture exclusion

`src/pages/series/[slug].astro` filters `fixture: true` entries out of production static paths while allowing them in development mode.

The user confirmed that normal deployed article pages do not display series treatment, which passes the visible article-route review.

The direct production fixture URL and generated sitemap entry have not been independently checked in this session, and no local production build was reported. Keep this narrower verification gap recorded for final release QA.

### Package metadata

Retired positioning copy was removed from `package.json`.

Current literal package description:

`Portfilo is a business and technology publication.`

## Phase 2B - site-copy remediation

Status:

**NOT STARTED / AWAITING USER APPROVAL**

Detailed decisions are in:

`docs/SITE_COPY_AND_IA_AUDIT.md`

Phase 2B must be implemented surface by surface under `docs/WRITING_SYSTEM.md`, not as a free-form site-wide rewrite.

Highest-priority changes:

- homepage: remove or rejustify the temporary descriptor and repeated labels;
- About: replace generic section copy and make the published-format description match the actual taxonomy;
- Standards: preserve procedural authority and reconsider the slogan-like closing;
- Subscribe: remove duplicated product explanation and keep provider handling on Privacy;
- confirmation/404: keep functional wording unless visual review exposes a real issue;
- Privacy: verify against the actual deployed data flow, not rewrite for personality;
- keep functional controls and status/error copy literal unless a usability problem exists.

For every institutional line changed in Phase 2B, record authority from actual behavior, a canonical document, or explicit editor/founder approval.

## Existing stories under the writing system

Existing prose is not automatically a style exemplar merely because it was previously published or approved.

### C027 - PUBLISHED / FEATURED / WRITING RE-AUDIT REQUIRED

**Build things that make the next thing easier**

- topic: Building
- content type: Perspective
- author: Louda Tuppal
- published: 2026-09-03
- story: `src/content/stories/build-things-that-make-the-next-thing-easier.md`
- packet: `research/stories/building-the-foundation/`

The premise remains available. Structure, rhythm, examples, headline, dek, description, and prose require a Perspective style brief and writing-system audit. Do not unpublish automatically.

### C009 - PUBLISHED / WRITING RE-AUDIT REQUIRED

**What 'higher-value work' means in Philippine IT-BPM**

- topic: Business
- content type: Explained
- author: Portfilo
- published: 2026-09-03
- story: `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`
- packet: `research/stories/it-bpm-higher-value-work/`

Its evidence base remains valuable. Future work requires an Explained style brief, reader-question structure review, and deliberate final dek/description separation.

### C030 - DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED

Working title:

**What actually changed?**

- content type: Perspective
- topic: Building - provisional
- author: Louda Tuppal
- story: `src/content/stories/what-actually-changed.md`
- packet: `research/stories/what-actually-changed/`
- status: draft
- featured: false
- no `publishedAt`

The core editorial idea remains available, but the prose is reopened under the new writing system.

The migration-preserved old dek is not final:

`An update tells you something happened. Portfilo is interested in what changes when the announcement meets operating reality.`

C030 publication remains paused until a new style brief is created and the story passes the new writing gates.

## Active research/editorial assignments

### C001 - ACTIVE / CONTINUE / OUTREACH READY

Question:

What separates an AI pilot from a production system inside a Philippine company?

Important unresolved contradiction: the Swarm Philippine AI Report 2025 narrative says 65% remain at proof-of-concept while a chart on the same page shows 40%. Do not use 65% as a clean factual anchor until reconciled.

No draft until the reporting threshold and writing-style gate are both met.

### C021 - ACTIVE / SOURCE RECONNAISSANCE

Question:

How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Measurement rules:

- prefer IT-load MW;
- keep current and future phases separate;
- never silently equate IT load with utility/energized/facility power;
- exclude unresolved metrics/statuses from clean subtotals.

No national subtotal is publication-ready. No draft until evidence and writing-style gates are met.

### C017 - WAITING / EXTERNAL CLARIFICATION

Zero-fee merchant-payment story remains `REFRAME / CONTINUE`; decisive remaining need is narrow written BSP/PPMI clarification. It should not block launch work.

### C029 - HOLD / FUTURE AUDIENCE RESEARCH

The original audience-behavior study remains potentially valuable. The Reddit-led corpus is rejected as the evidentiary backbone for a launch article. Revisit when professional primary-data collection is feasible.

## Homepage / email / deployment

Homepage hierarchy remains:

1. coverage identity;
2. C027 Featured;
3. C009 Latest;
4. About;
5. Portfilo Brief.

Only `status: published` stories are eligible for public homepage placement.

Portfilo Brief remains operationally validated from prior testing:

- double opt-in: PASS;
- sender: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email: OFF;
- Smart Nudge: OFF.

No newsletter distribution has been authorized or sent for C027 or C009.

Cloudflare Pages:

- project: `portfilo-app`;
- temporary production URL: `https://portfilo-app.pages.dev`;
- production branch: `build/portfilo-v0`.

Still pending before final public launch:

- final public domain;
- production `SITE_URL` after domain connection;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enable/verification;
- final beehiiv opt-in redirect to canonical `/confirmed`;
- final-domain subscribe/confirm/unsubscribe QA;
- mailing-address/compliance clearance before first public newsletter send;
- final browser/responsive/link/console QA;
- MFA/passkeys where applicable;
- direct verification that the synthetic series fixture route/sitemap entry is absent from production.

Do not add Turnstile unless real traffic demonstrates abuse after honeypot and edge rate limiting are active.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Writing system | PASS / CANONICAL |
| Site copy + IA audit | PASS / APPROVED |
| `dek` + `description` schema split | IMPLEMENTED |
| Story route uses `dek` visibly | IMPLEMENTED |
| `/stories` index | DEPLOYED / USER REVIEW PASS |
| Global nav `Stories` | DEPLOYED / USER REVIEW PASS |
| Normal article route without series treatment | DEPLOYED / USER REVIEW PASS |
| Confirmation/404 archive links | IMPLEMENTED / FINAL RELEASE QA LATER |
| Synthetic series fixture direct production exclusion | IMPLEMENTED / DIRECT URL + SITEMAP QA STILL PENDING |
| Stale `package.json` positioning | FIXED |
| Local Phase 2A `npm run build` | NOT RECORDED |
| Public site copy Phase 2B | NOT STARTED |
| C027 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C001 | ACTIVE / CONTINUE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Obtain Louda Tuppal's approval to start Phase 2B: public site-copy remediation.**

When approved, implement the audit decisions surface by surface under `docs/SITE_COPY_AND_IA_AUDIT.md` and `docs/WRITING_SYSTEM.md`.

Do not rewrite C027, C009, or C030 during Phase 2B. Their prose repair remains a separate Phase 3 with individual style briefs.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
