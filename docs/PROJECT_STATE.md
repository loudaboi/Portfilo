# Portfilo Project State

_Last updated: 2026-09-04_

## Current phase

**Portfilo v0 / Product Finalization - REPOSITORY HYGIENE AUDIT COMPLETE / BRAND ASSET SYSTEM NEXT**

Portfilo's publishing system, editorial/research/writing standards, three published launch stories, newsletter foundation, core visual direction, and approved universal homepage feature image are in place. The repository/documentation hygiene pass is complete. Phase 4 proceeds next to the remaining brand asset system, followed by the full engineering, security, SEO, accessibility, performance, and release audit.

Core rules remain:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero evidentiary authority.**

> **AI output has zero stylistic authority.**

> **Research the writing problem before asking AI to write.**

> **Research the visual problem before asking AI to generate the image.**

> **AI output has zero visual authority.**

> **Human approval is scoped to the gate explicitly awaiting approval.**

No permanent tagline by default.

## Current branch

Authoritative branch:

`build/portfilo-v0`

Do not merge to `main` until an intentional later release review.

Repository cleanup state:

- only `main` and `build/portfilo-v0` remain as remote branches;
- the ten audited stale remote branches were deleted on 2026-09-04;
- branch cleanup was independently confirmed through the connected GitHub repository view;
- rejected Astra preview assets and temporary homepage preview files are removed;
- the accidental `tmp-test.txt` repository probe is removed;
- root package metadata has been cleaned and the package is explicitly marked `private`;
- no dependency upgrade was mixed into the hygiene pass.

## Documentation authority

Read first:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/V0_SCOPE.md`
4. `docs/DOCUMENT_STATUS.md`
5. the canonical document relevant to the task

`docs/DOCUMENT_STATUS.md` distinguishes current authority from historical/superseded implementation records. Old status lines such as `implementation pending`, old fixture-era homepage copy, or the earlier `Latest` global-navigation contract do not override current runtime code or current canonical documents.

## Canonical documents

Project/product:

- `docs/PROJECT_STATE.md`
- `docs/DOCUMENT_STATUS.md`
- `docs/V0_SCOPE.md`
- `docs/CONTENT_PLANNING.md`
- `BACKLOG.md`

Editorial/research/writing:

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`
- `docs/COPY_STYLE.md`
- `research/README.md`
- `research/STYLE_RESEARCH_TEMPLATE.md`
- `research/STYLE_BRIEF_TEMPLATE.md`

Design / imagery:

- `docs/DESIGN_DIRECTION.md`
- `docs/IMAGE_SYSTEM.md`
- `docs/PHOTO_TREATMENT.md`
- `research/image-system/homepage-featured-cover-decision.md`
- `research/IMAGE_BRIEF_TEMPLATE.md`

Email/deployment:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

Historical copy/navigation/audit records remain in the repository for provenance and are mapped in `docs/DOCUMENT_STATUS.md`.

## Completed product work

### Site foundation and content architecture

Status: **COMPLETE**

Current v0 architecture:

- Astro + TypeScript;
- static-first output;
- local Markdown through Astro Content Collections;
- custom CSS;
- minimal client-side JavaScript;
- one narrow Cloudflare Pages Function for newsletter signup forwarding;
- beehiiv for subscriber storage, confirmation, delivery, and unsubscribe handling.

Synthetic development fixtures remain intentionally in source and are excluded from public production routes where required.

### Site structure and copy

Status: **COMPLETE / DEPLOYED USER REVIEW PASS**

The homepage, Stories archive, Story route, Series route, Standards, About, Subscribe, confirmation, Privacy, 404, navigation, and footer are in place.

Current global navigation:

- Stories
- Standards
- About
- Subscribe

The Portfilo wordmark links Home. The earlier `Latest` global-navigation contract is historical.

### Published launch stories

Status: **COMPLETE / DEPLOYED USER REVIEW PASS**

Published stories:

1. `src/content/stories/build-things-that-make-the-next-thing-easier.md`
2. `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`
3. `src/content/stories/what-actually-changed.md`

Their research packets and final reviews remain authoritative for story-specific evidence and writing decisions. Story-specific mechanics are not automatic precedent for later stories.

### Newsletter foundation

Status: **IMPLEMENTED / FUNCTIONAL BASELINE**

- native Portfilo signup UI;
- `/api/subscribe` Cloudflare Pages Function;
- beehiiv double opt-in;
- server-side secret usage;
- request-size limit;
- same-origin check when `Origin` is present;
- honeypot;
- provider error handling;
- no custom subscriber database.

Final-domain and first-send compliance QA remain pending.

## Repository hygiene audit

Status: **COMPLETE**

Audit completed on 2026-09-04 before Phase 4B.

Changes made:

- root `README.md` rewritten to match the current business-and-technology publication definition and current v0 architecture;
- `docs/DOCUMENT_STATUS.md` added as the authoritative map for current vs historical/superseded documentation;
- `package.json` marked `private`, fake placeholder test command removed, and irrelevant npm-init metadata removed without changing runtime dependencies;
- `docs/DESIGN_DIRECTION.md` synchronized with the implemented Instrument Sans / Source Serif 4 / IBM Plex Mono baseline and current fixture/image state;
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md` synchronized with the existing `portfilo-app.pages.dev` baseline and the remaining final-domain work;
- `research/README.md` updated so the first editorial-launch research is correctly described as completed historical strategy work rather than a future task;
- historical copy/navigation/IA implementation records preserved for provenance rather than deleted.

Intentionally deferred to Phase 4C:

- dependency upgrades;
- broad CSS/font/token refactoring;
- image delivery/LCP optimization;
- final security/SEO/accessibility/performance review.

The approved homepage feature PNG is currently about 2.58 MB and is used as a CSS background. It passed visual review, so optimization must be handled as a measured performance task rather than silently changing the approved visual during this hygiene pass.

## Phase 4 - product finalization

Status: **ACTIVE**

### 4A - editorial image system

Canonical standard:

`docs/IMAGE_SYSTEM.md`

Current homepage decision:

`research/image-system/homepage-featured-cover-decision.md`

Generated imagery is editorial illustration, not documentary evidence, and requires human approval plus visible synthetic/AI disclosure when published.

#### Universal homepage feature image

Status: **APPROVED / IMPLEMENTED / VALIDATED**

Canonical asset:

`public/images/homepage-feature-image.png`

Implementation behavior:

- one universal image is used for the homepage featured-story cover panel;
- the image does not vary by Business, Technology, Startups, AI, or Building;
- story type, topic, author, and Read navigation remain live HTML;
- the asset is displayed with `cover` cropping;
- presentation uses restrained edge/bottom darkening for legibility;
- the generated image carries a visible `AI-generated image` disclosure;
- rejected Astra imagery is removed;
- the temporary preview stylesheet is removed.

The earlier five-topic system:

`featured story -> topic -> canonical topic cover asset`

is **SUPERSEDED FOR V0**.

Validation recorded on 2026-09-04:

- stale branch cleanup: **PASS / independently verified in GitHub**;
- `npm run check`: **PASS / user-reported local validation**;
- `npm run build`: **PASS / user-reported local validation**;
- deployed desktop homepage inspection: **PASS / user approved**;
- deployed mobile homepage inspection: **PASS / user approved**;
- text/read-link/disclosure legibility and responsive crop: **PASS / user approved**.

#### Per-story generated-image pilot

Status: **PAUSED**

The previous C030-specific image work remains historical. No C030 or other per-story generated image is currently authorized for implementation. Resume only through a new explicit decision after the homepage/brand work is stable.

### 4B - brand asset system

Status: **NEXT / PENDING HUMAN-CONTROLLED DESIGN WORK**

Required v0 outcomes include:

- final Portfilo wordmark/brand-mark decision;
- favicon/site icon;
- social avatar;
- monochrome and light/dark usage;
- default site social-preview composition;
- usage rules sufficient for site/email/social consistency.

### 4C - full engineering / security / SEO / quality audit

Status: **PENDING AFTER 4B**

The final audit must cover:

- Astro/content architecture and code quality;
- dependency freshness, compatibility, and secret exposure;
- Cloudflare subscription function and abuse controls;
- accessibility and responsive behavior;
- performance and image delivery, including the universal homepage feature asset;
- canonical/robots/sitemap metadata;
- Open Graph/X previews;
- Article structured data and image metadata;
- internal links and 404/error states;
- browser console;
- fixture leakage;
- final deployment/domain configuration.

Do not infer a pass from code inspection alone. Record actual checks.

## Editorial model

Top-level topics:

- Business
- Technology
- Startups
- AI
- Building

Normal editorial types:

- Reported
- Explained
- Guide
- Profile
- Analysis
- Perspective
- Field Notes

Partner content is commercial and must be unmistakably labeled.

Primary reader needs:

- Update
- Understand
- Interpret
- Decide

## Active research assignments

### C001 - ACTIVE / FLAGSHIP / CONTINUE

Question:

> What separates an AI pilot from a production system inside a Philippine company?

Packet:

`research/stories/ai-pilot-to-production/`

State: `CONTINUE / OUTREACH READY`.

The Swarm Philippine AI Report 2025 contains an unresolved 65% vs 40% proof-of-concept contradiction. Do not use 65% as a clean factual anchor until reconciled. No draft is authorized until reporting and style-research gates are met.

### C021 - ACTIVE / SOURCE RECONNAISSANCE

Question:

> How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Packet:

`research/stories/data-center-capacity-ledger/`

Keep capacity categories distinct. No national subtotal is publication-ready.

### C017 - WAITING / EXTERNAL CLARIFICATION

Question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Packet:

`research/stories/zero-fee-merchant-payments/`

Needs narrow written BSP/PPMI clarification. It does not block v0 finalization.

### C029 - HOLD / FUTURE AUDIENCE RESEARCH

Packet:

`research/stories/second-question-after-headline/`

The Reddit-led launch corpus is rejected as the evidentiary backbone. Revisit when professional primary-data collection is feasible.

## Deployment state

Cloudflare Pages project:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Still pending before final public launch:

- final public domain;
- final production `SITE_URL` after domain connection;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enable/verification;
- final beehiiv opt-in redirect to canonical `/confirmed`;
- final-domain subscribe/confirm/unsubscribe QA;
- mailing-address/compliance clearance before first public newsletter send;
- final browser/responsive/link/console/security/SEO/performance QA;
- MFA/passkeys where applicable.

Newsletter state:

- reusable Portfilo Brief foundation exists;
- double opt-in previously tested;
- sender: Portfilo;
- Reply-To: `portfilo.ph@gmail.com`;
- Welcome Email OFF;
- Smart Nudge OFF;
- no story distribution authorized by the current product-finalization work.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Remote branch cleanup | PASS / ONLY `main` + `build/portfilo-v0` REMAIN |
| Repository/documentation hygiene audit | PASS / COMPLETE |
| README current-state alignment | PASS |
| Document authority map | PASS / `docs/DOCUMENT_STATUS.md` |
| Package metadata cleanup | PASS / NO DEPENDENCY CHANGE |
| Content architecture | PASS / STABLE |
| Writing system | PASS / CANONICAL |
| Site copy + IA | PASS / DEPLOYED USER APPROVED |
| Editorial image system | APPROVED / CANONICAL |
| Universal homepage feature image | PASS / IMPLEMENTED + DEPLOYED USER APPROVED |
| Fresh `npm run check` | PASS / USER-REPORTED LOCAL VALIDATION |
| Fresh `npm run build` | PASS / USER-REPORTED LOCAL VALIDATION |
| Brand asset system | NEXT |
| Full engineering/security/SEO/performance audit | PENDING AFTER BRAND ASSETS |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Begin Phase 4B: finalize the Portfilo brand asset system.**

Before implementation, inspect the current wordmark/brand usage, `research/brand-system/research.md`, and canonical design direction. Define the smallest v0 brand-asset set needed for favicon/site icon, social avatar, light/dark/monochrome use, default social preview, and consistent site/email/social application.

Do not reopen the five-topic homepage image plan unless Louda explicitly makes a new decision.
