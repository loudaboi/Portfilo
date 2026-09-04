# Portfilo Project State

_Last updated: 2026-09-04_

## Current phase

**Portfilo v0 / Product Finalization — REPOSITORY HYGIENE AUDIT COMPLETE / BRAND ASSET SYSTEM NEXT**

Portfilo's publishing system, editorial/research/writing standards, three published launch stories, newsletter foundation, core visual direction, and universal homepage feature image are in place.

Next sequence:

`Phase 4B brand assets -> Phase 4C engineering/security/SEO/accessibility/performance/release audit -> intentional release review`

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

## Branch and repository state

Authoritative branch:

`build/portfilo-v0`

`main` remains the release boundary. Do not merge until an intentional release review.

Repository cleanup state:

- only `main` and `build/portfilo-v0` remain as remote branches;
- ten stale remote branches were deleted and independently verified;
- rejected Astra preview assets and temporary homepage preview files are removed;
- accidental `tmp-test.txt` is removed;
- root package metadata is cleaned and the project is explicitly `private`;
- no dependency upgrade was mixed into the hygiene pass.

## Documentation authority

Read first:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/V0_SCOPE.md`
4. `docs/DOCUMENT_STATUS.md`
5. the canonical document relevant to the task

`docs/DOCUMENT_STATUS.md` distinguishes current authority from historical/superseded implementation records. Old pending-QA language, fixture-era copy, and the earlier `Latest` navigation contract do not override current runtime code or current canonical documents.

Canonical groups:

- product: `docs/V0_SCOPE.md`, `docs/CONTENT_PLANNING.md`, `BACKLOG.md`;
- editorial/writing: `docs/EDITORIAL_STANDARD.md`, `docs/RESEARCH_STANDARD.md`, `docs/WRITING_SYSTEM.md`, `docs/STYLE_RESEARCH_STANDARD.md`, `docs/PUBLISHING_STANDARD.md`, `docs/COPY_STYLE.md`;
- design/image: `docs/DESIGN_DIRECTION.md`, `docs/IMAGE_SYSTEM.md`, `docs/PHOTO_TREATMENT.md`, `research/image-system/homepage-featured-cover-decision.md`;
- email/deployment: `docs/EMAIL_SYSTEM_PLAN.md`, `docs/BEEHIIV_EMAIL_SETUP.md`, `docs/CLOUDFLARE_PRODUCTION_SETUP.md`;
- research workspace: `research/README.md` and the relevant story packet.

Historical copy/navigation/audit records remain for provenance and are mapped in `docs/DOCUMENT_STATUS.md`.

## Completed product work

### Foundation and content architecture

Status: **COMPLETE**

- Astro + TypeScript;
- static-first output;
- local Markdown through Astro Content Collections;
- custom CSS;
- minimal client-side JavaScript;
- one narrow Cloudflare Pages Function for newsletter signup forwarding;
- beehiiv for subscriber storage, confirmation, delivery, and unsubscribe handling;
- synthetic content-architecture fixtures remain development-only and are excluded from public production routes where required.

### Site structure and copy

Status: **COMPLETE / DEPLOYED USER REVIEW PASS**

Public surfaces in place:

- Homepage
- Stories archive
- Story route
- Series route
- Standards
- About
- Subscribe
- Confirmation
- Privacy
- 404
- shared header/footer

Current global navigation:

`Stories / Standards / About / Subscribe`

The wordmark links Home. The earlier `Latest` global-navigation contract is historical.

### Published launch stories

Status: **COMPLETE / DEPLOYED USER REVIEW PASS**

1. `src/content/stories/build-things-that-make-the-next-thing-easier.md`
2. `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`
3. `src/content/stories/what-actually-changed.md`

Story research packets and final reviews remain authoritative for story-specific evidence.

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

Completed 2026-09-04 before Phase 4B.

Changes:

- root `README.md` rewritten to current product definition and architecture;
- `docs/DOCUMENT_STATUS.md` added as the current-vs-historical document map;
- `package.json` marked `private`, placeholder `test` removed, and irrelevant npm-init metadata removed;
- `docs/DESIGN_DIRECTION.md` synchronized with the implemented Instrument Sans / Source Serif 4 / IBM Plex Mono baseline;
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md` synchronized with the existing `portfilo-app.pages.dev` baseline and remaining final-domain work;
- `research/README.md` updated so editorial-launch research is correctly treated as completed historical strategy work;
- historical implementation/research records preserved rather than deleted.

Intentionally deferred to Phase 4C:

- dependency upgrades;
- broad CSS/font/token refactoring;
- image delivery/LCP optimization;
- full security/SEO/accessibility/performance review.

The approved homepage feature PNG is about 2.58 MB and is currently delivered as a CSS background. It passed visual review; optimization must be a measured Phase 4C performance task rather than an unreviewed visual replacement.

No runtime source, dependency version, build command, or dependency set changed in this hygiene pass. The latest hygiene commit has **not** been rerun through the user's local `npm run check` / `npm run build`; the most recent local passes occurred immediately before this documentation/package-metadata-only cleanup.

## Phase 4

### 4A — editorial image system

Status: **HOMEPAGE SYSTEM APPROVED / IMPLEMENTED / VALIDATED**

Canonical homepage asset:

`public/images/homepage-feature-image.png`

Rules:

- one universal image for the homepage feature panel;
- no topic-specific mapping for Business, Technology, Startups, AI, or Building;
- story metadata and navigation remain live HTML;
- restrained edge/bottom darkening is allowed for legibility;
- visible `AI-generated image` disclosure remains required;
- rejected Astra/Pinterest/earlier candidates have no current authority.

The earlier five-topic homepage image system is **SUPERSEDED FOR V0**.

Validation recorded before the hygiene pass:

- remote branch cleanup: PASS;
- `npm run check`: PASS, user-reported;
- `npm run build`: PASS, user-reported;
- deployed desktop homepage: PASS, user-approved;
- deployed mobile homepage: PASS, user-approved;
- crop/text/read-link/disclosure: PASS, user-approved.

Per-story generated-image pilot: **PAUSED**. No C030 or other story image is currently authorized for implementation.

### 4B — brand asset system

Status: **NEXT / PENDING HUMAN-CONTROLLED DESIGN WORK**

Required v0 outcomes:

- final wordmark/brand-mark decision;
- favicon/site icon;
- social avatar;
- monochrome and light/dark usage;
- default site social-preview composition;
- usage rules for site/email/social consistency.

### 4C — full engineering / security / SEO / quality audit

Status: **PENDING AFTER 4B**

Must cover:

- Astro/content architecture and code quality;
- dependency freshness/compatibility and secret exposure;
- Cloudflare subscription function and abuse controls;
- accessibility and responsive behavior;
- performance and image delivery;
- canonical/robots/sitemap metadata;
- Open Graph/X previews;
- Article structured data and image metadata;
- internal links and 404/error states;
- browser console;
- fixture leakage;
- final deployment/domain configuration.

Do not infer a pass from code inspection alone.

## Editorial model

Topics:

`Business / Technology / Startups / AI / Building`

Normal editorial types:

`Reported / Explained / Guide / Profile / Analysis / Perspective / Field Notes`

Primary reader needs:

`Update / Understand / Interpret / Decide`

Partner content is commercial and must be unmistakably labeled.

## Active research assignments

### C001 — ACTIVE / FLAGSHIP / CONTINUE

Question: What separates an AI pilot from a production system inside a Philippine company?

Packet: `research/stories/ai-pilot-to-production/`

State: `CONTINUE / OUTREACH READY`.

The Swarm Philippine AI Report 2025 contains an unresolved 65% vs 40% proof-of-concept contradiction. Do not use 65% as a clean factual anchor until reconciled. No draft is authorized until reporting and style-research gates are met.

### C021 — ACTIVE / SOURCE RECONNAISSANCE

Question: How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Packet: `research/stories/data-center-capacity-ledger/`

Keep capacity categories distinct. No national subtotal is publication-ready.

### C017 — WAITING / EXTERNAL CLARIFICATION

Question: What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Packet: `research/stories/zero-fee-merchant-payments/`

Needs narrow written BSP/PPMI clarification. It does not block v0 finalization.

### C029 — HOLD / FUTURE AUDIENCE RESEARCH

Packet: `research/stories/second-question-after-headline/`

The Reddit-led launch corpus is rejected as the evidentiary backbone. Revisit when professional primary-data collection is feasible.

## Deployment state

Cloudflare Pages project: `portfilo-app`

Temporary production URL: `https://portfilo-app.pages.dev`

Production branch: `build/portfilo-v0`

Pending before final public launch:

- final public domain;
- final production `SITE_URL`;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enable/verification;
- final beehiiv opt-in redirect to `/confirmed`;
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
- Smart Nudge OFF.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Remote branch cleanup | PASS / ONLY `main` + `build/portfilo-v0` REMAIN |
| Repository/documentation hygiene audit | PASS / COMPLETE |
| Document authority map | PASS / `docs/DOCUMENT_STATUS.md` |
| Package metadata cleanup | PASS / NO DEPENDENCY OR BUILD-SCRIPT CHANGE |
| Content architecture | PASS / STABLE |
| Site copy + IA | PASS / DEPLOYED USER APPROVED |
| Universal homepage feature image | PASS / IMPLEMENTED + DEPLOYED USER APPROVED |
| Latest pre-hygiene `npm run check` | PASS / USER-REPORTED |
| Latest pre-hygiene `npm run build` | PASS / USER-REPORTED |
| Post-hygiene local check/build | NOT RERUN / DOCS + PACKAGE METADATA ONLY |
| Brand asset system | NEXT |
| Full engineering/security/SEO/performance audit | PENDING AFTER BRAND ASSETS |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Begin Phase 4B: finalize the Portfilo brand asset system.**

Before implementation, inspect current wordmark/brand usage, `research/brand-system/research.md`, and `docs/DESIGN_DIRECTION.md`. Define the smallest v0 brand-asset set needed for favicon/site icon, social avatar, light/dark/monochrome use, default social preview, and consistent site/email/social application.

Do not reopen the five-topic homepage image plan unless Louda explicitly makes a new decision.
