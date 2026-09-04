# Portfilo Project State

_Last updated: 2026-09-04_

## Current phase

**Portfilo v0 / Product Finalization — PHASE 4B BRAND ASSET SYSTEM COMPLETE / PHASE 4C AUDIT NEXT**

Portfilo's publishing system, editorial/research/writing standards, three published launch stories, newsletter foundation, core visual direction, universal homepage feature image, and v0 brand asset system are in place.

Next sequence:

`Phase 4C engineering/security/SEO/accessibility/performance/release audit -> intentional release review`

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
- brand: `research/brand-system/wordmark-svg.md`, `research/brand-system/icon-system.md`, `research/brand-system/social-preview.md`;
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

Status: **COMPLETE / USER APPROVED / IMPLEMENTED / DEPLOYED SOCIAL-PREVIEW PASS**

Canonical wordmarks:

- `public/brand/portfilo-wordmark-color.svg`;
- `public/brand/portfilo-wordmark-ink.svg`;
- `public/brand/portfilo-wordmark-light.svg`.

Compact brand system:

- approved pinched-rectangle symbol;
- ink and paper master symbol SVGs;
- social/profile avatar derivatives;
- adaptive SVG favicon;
- 16px and 32px PNG favicon fallbacks;
- 16/32/48px `.ico` legacy fallback;
- corrected and reapproved 180 x 180 Apple touch icon.

Default social preview:

`public/social/portfilo-default.png`

Required and implemented dimensions:

`1200 x 630`

Validation completed during the Phase 4B closeout:

- final social-preview composition: USER APPROVED;
- repository social-preview asset: IMPLEMENTED;
- direct deployed image URL: PASS;
- production `SITE_URL` set to temporary canonical origin `https://portfilo-app.pages.dev`: PASS FOR CURRENT TEMPORARY DEPLOYMENT;
- generated homepage `og:image`: PASS;
- Facebook sharing post preview: PASS;
- Discord preview: PASS;
- Messenger-only omission observed in some client contexts, treated as non-blocking platform/client behavior after independent metadata and delivery validation;
- malformed first Apple touch PNG was corrected, visually approved, and replaced.

Brand usage rules:

- full wordmark is the primary identity whenever horizontal space permits;
- compact symbol is reserved for favicon, avatar, touch-icon, and other constrained square/compact surfaces;
- no permanent tagline is part of the v0 identity;
- do not use the compact symbol as decoration beside the wordmark;
- default social preview remains the approved `1200 x 630` asset until a new design gate intentionally replaces it.

Phase 4B records:

- `research/brand-system/wordmark-svg.md`;
- `research/brand-system/icon-system.md`;
- `research/brand-system/social-preview.md`.

Duplicate live wordmark markup is intentionally **not** being refactored during Phase 4B. Revisit only if Phase 4C finds a concrete maintainability or consistency problem.

The Phase 4B brand design decisions are closed unless Louda explicitly reopens them.

### 4C — full engineering / security / SEO / quality audit

Status: **NEXT**

Must cover:

- Astro/content architecture and code quality;
- dependency freshness/compatibility and secret exposure;
- Cloudflare subscription function and abuse controls;
- accessibility and responsive behavior;
- performance and image delivery;
- canonical/robots/sitemap metadata;
- Open Graph/X previews;
- Article structured data and image metadata;
- favicon/legacy-icon technical integrity across relevant browser/device surfaces;
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

Current temporary production `SITE_URL`:

`https://portfilo-app.pages.dev`

This temporary value is intentional for current metadata validation and must be replaced by the final canonical public domain before release.

Pending before final public launch:

- final public domain;
- final production `SITE_URL` replacement with that domain;
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
| Post-hygiene / post-Phase-4B local check/build | NOT YET RERUN |
| Brand asset system | PASS / PHASE 4B CLOSED |
| Default social preview | PASS / 1200 x 630 / OG METADATA + FACEBOOK + DISCORD VALIDATED |
| Apple touch icon | PASS / CORRECTED + USER APPROVED + IMPLEMENTED |
| Full engineering/security/SEO/performance audit | NEXT / PHASE 4C |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

**Begin Phase 4C: full engineering, security, SEO, accessibility, performance, and release-readiness audit.**

Start with repository and runtime inspection before changing code. Establish a measured baseline, run fresh local `npm run check` and `npm run build`, then audit the site systematically rather than mixing unrelated fixes into one pass.

The first Phase 4C pass should inventory findings by severity and evidence before implementation. Prioritize release blockers, security/correctness defects, broken metadata or routing, accessibility failures, and major performance regressions. Treat cosmetic refactors and speculative cleanup as lower priority.

Do not reopen approved Phase 4A image design or Phase 4B brand design unless the audit finds a concrete implementation defect or Louda explicitly requests a new design decision.
