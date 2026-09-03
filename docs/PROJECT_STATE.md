# Portfilo Project State

_Last updated: 2026-09-03_

## Current phase

**Portfilo v0 / Writing System Upgrade - PHASE 2A IMPLEMENTED / LOCAL BUILD + VISUAL QA REQUIRED**

Portfilo's publishing system, research standards, first published stories, homepage integration, and Portfilo Brief foundation remain in place.

A system-level writing correction is underway. Portfilo now separates factual authority from stylistic authority and requires writing-form decisions before drafting.

Canonical writing document:

`docs/WRITING_SYSTEM.md`

Supporting research:

`research/writing-system/research.md`

Reusable pre-draft template:

`research/STYLE_BRIEF_TEMPLATE.md`

Site copy/information-architecture audit:

`docs/SITE_COPY_AND_IA_AUDIT.md`

Core rules:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero stylistic authority.**

No permanent tagline by default.

Phase 1 writing-system work is complete.

Phase 2 site-copy/IA audit is complete and approved.

Phase 2A structural implementation is now in the repository. A local Astro build and desktop/mobile visual inspection are still required before Phase 2B public-copy rewrites begin.

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

## Editorial workflow

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

For substantial stories, `style-brief.md` is a pre-draft gate using `research/STYLE_BRIEF_TEMPLATE.md`.

`AI suggested it` is not sufficient structural or stylistic justification.

## Phase 2A implementation

### Story metadata split - IMPLEMENTED

The Astro story schema now requires:

```yaml
title:
dek:
description:
```

Jobs:

- `dek` = visible editorial story-header copy;
- `description` = card/archive/SEO/social/structured-data summary.

The generic story route now renders `dek` in the visible header and continues to pass `description` to `SiteHead` and structured metadata.

Homepage and series cards continue to use `description`.

All current story fixtures and real story entries now contain both fields.

Important migration note:

For C027, C009, C030, and the synthetic fixtures, Phase 2A preserved the exact pre-existing description text in both fields rather than inventing replacement prose during a structural phase. This is deliberate temporary parity, not final editorial approval of the duplicated copy.

C027, C009, and C030 must separately author final `dek` and `description` during their writing-system re-audits.

There is no runtime `dek ?? description` fallback.

### `/stories` - IMPLEMENTED

New route:

`src/pages/stories/index.astro`

Page behavior:

- published stories only;
- reverse chronological order;
- date;
- content type;
- topic;
- headline;
- `description`;
- author;
- story link.

No filters, search, pagination, popularity ranking, or recommendation system were added.

### Global navigation - IMPLEMENTED

Header/footer navigation is now:

- Stories -> `/stories`;
- Standards;
- About;
- Subscribe;
- Privacy remains footer-only.

Homepage `Latest` remains the label for its newest-story section.

`SiteHeader` now accepts `stories` as a current-page state and `/stories` uses it.

Story detail routes are structurally children of `/stories`; current-page highlighting on individual story pages may be reviewed during visual QA but is not required for route correctness.

### Confirmation / 404 utility links - IMPLEMENTED

`/confirmed` and the custom 404 now link to `/stories` with the functional action `Browse stories` instead of jumping to the homepage `#latest` anchor.

### Synthetic series fixture exclusion - IMPLEMENTED / BUILD VERIFICATION REQUIRED

`src/pages/series/[slug].astro` now filters `fixture: true` series entries out of production static paths while still allowing them in Astro development mode.

Because a fixture series no longer receives a production static path, it should not be emitted into the production sitemap.

This behavior must still be confirmed with a local production build before it is marked fully validated.

### Package metadata - IMPLEMENTED

The retired package description:

`Portfilo is a Filipino-first media and community company built around practical intelligence for ambitious Filipinos.`

was removed.

Current literal package description:

`Portfilo is a business and technology publication.`

No new marketing line was introduced.

## Phase 2B site-copy remediation

Detailed decisions remain in:

`docs/SITE_COPY_AND_IA_AUDIT.md`

Phase 2B has **not started**.

Highest-priority public-copy changes after Phase 2A validates:

- remove or rejustify the homepage temporary descriptor;
- remove repeated Featured/Latest labels where they add no information;
- replace About's generic `Stories take different forms` treatment with literal section copy;
- make About's content-type description match the configured taxonomy;
- keep Standards procedural and reconsider its stylized closing rather than making it more branded;
- reduce Subscribe duplication and keep provider-specific handling on Privacy;
- verify Privacy against the final deployed data flow;
- keep functional controls and status/error copy literal unless a real usability issue exists.

Do not start Phase 2B by free-form rewriting. Follow the audit and institutional-copy provenance rules.

## Existing stories under the new writing system

Existing prose is not automatically a style exemplar merely because it is already published or previously approved.

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

The premise remains available. Structure, rhythm, examples, headline, dek, description, and prose must receive a Perspective style brief and writing-system audit before launch copy is considered final.

Do not unpublish automatically. Revision must preserve claims and editorial intent deliberately.

No final hero image is selected. Newest share-readiness/mobile verification remains pending.

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

Its evidence base remains valuable. The next writing task is an Explained style brief, reader-question structure review, and deliberate separation of final `dek` from compact `description`.

Fresh full build/live render QA remains incomplete.

### C030 - DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED

Working title:

> **What actually changed?**

Content type: `Perspective`  
Topic: `Building` - provisional  
Author: `Louda Tuppal`

Packet:

`research/stories/what-actually-changed/`

Draft entry:

`src/content/stories/what-actually-changed.md`

Metadata remains:

- `status: draft`;
- `featured: false`;
- no `publishedAt`.

The core editorial idea remains available, but the prose is reopened under the new writing system.

The old dek remains in the draft only as migration-preserved text and is **not final**:

> `An update tells you something happened. Portfilo is interested in what changes when the announcement meets operating reality.`

C030 publication remains paused until a new `style-brief.md` is created and the story passes the new writing gates.

Production must continue to exclude the draft.

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

No draft is authorized until the reporting threshold is met and a writing style brief is approved.

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

No draft is authorized until the evidence supports a story decision and a writing style brief is approved.

Possible evidence-led reframe remains:

> **Why Philippine data-center capacity numbers conflict — and what operating, energized, planned, and announced megawatts actually mean.**

### C017 - WAITING / EXTERNAL CLARIFICATION

Question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Packet:

`research/stories/zero-fee-merchant-payments/`

Underlying outcome remains `REFRAME / CONTINUE`.

The decisive remaining need is a narrow written BSP/PPMI clarification. C017 should not block launch work.

### C029 - HOLD / FUTURE AUDIENCE RESEARCH

Working label:

`The second question after the headline`

Packet:

`research/stories/second-question-after-headline/`

The original behavior question remains potentially valuable as a future reported study.

The six-event Reddit desk pilot is preserved as research history; a Reddit-led full corpus is rejected as the evidentiary backbone for a Portfilo launch article.

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

Only `status: published` entries are eligible for homepage story placement.

Wordmark remains HTML/CSS:

- `Port`: ink;
- `fi`: blue;
- `lo`: red.

Subscribe CTAs use a CSS-drawn northeast arrow to avoid iOS emoji rendering.

Newest live/mobile re-verification remains pending.

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

Writing/site-copy remediation is a system phase and does not add another story assignment.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Writing system | PASS / CANONICAL |
| Site copy + IA audit | PASS / APPROVED |
| `dek` + `description` schema split | IMPLEMENTED / BUILD PENDING |
| Story route uses `dek` visibly | IMPLEMENTED / BUILD PENDING |
| `/stories` index | IMPLEMENTED / VISUAL QA PENDING |
| Global nav `Stories` | IMPLEMENTED / VISUAL QA PENDING |
| Confirmation/404 archive links | IMPLEMENTED / QA PENDING |
| Synthetic series fixture production exclusion | IMPLEMENTED / PRODUCTION BUILD PENDING |
| Stale `package.json` positioning | FIXED |
| Public site copy Phase 2B | NOT STARTED |
| C027 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C009 | PUBLISHED / WRITING RE-AUDIT REQUIRED |
| C030 | DRAFT / PUBLICATION PAUSED / WRITING RE-AUDIT REQUIRED |
| C021 | ACTIVE / SOURCE RECONNAISSANCE |
| C001 | ACTIVE / CONTINUE |
| C017 | WAITING / EXTERNAL CLARIFICATION |
| C029 | HOLD / FUTURE STUDY |
| Newest mobile/share-readiness deployment verification | PENDING |
| Final-domain configuration | PENDING DOMAIN |

The connected GitHub workspace cannot execute the local Astro toolchain. No `npm run build` has been run for Phase 2A from this session.

The user previously encountered missing local check dependencies. After pulling the latest branch, run `npm install` if needed, then `npm run build`.

## Exact next task

**Validate Phase 2A locally before Phase 2B copy rewrites.**

After pulling `build/portfilo-v0`:

1. run `npm install` if dependencies are not already synchronized;
2. run `npm run build`;
3. confirm the build contains `/stories`;
4. confirm production does **not** generate `/series/content-architecture-fixtures`;
5. run `npm run dev`;
6. inspect `/stories` on desktop and mobile;
7. inspect one published story and confirm the visible dek still renders;
8. inspect `/confirmed` and the 404 action links;
9. inspect header/footer navigation at desktop and mobile widths;
10. report any regression before starting Phase 2B.

If Phase 2A passes, the next implementation phase is **Phase 2B: site-copy remediation**, surface by surface under `docs/SITE_COPY_AND_IA_AUDIT.md` and `docs/WRITING_SYSTEM.md`.

After Phase 2B passes, create separate style briefs and re-audit C027, C009, and C030 one at a time.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
