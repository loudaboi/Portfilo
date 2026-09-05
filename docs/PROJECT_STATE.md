# Portfilo Project State

_Last updated: 2026-09-06_

## Current phase

**Portfilo v0 / Product Finalization - PHASE 4C TRACK 6 RELEASE READINESS OPEN / VISION ALIGNMENT V1 COMPLETE / PORTFILO TEST METHODOLOGY V0 COMPLETE / TEST EXECUTION DEFERRED**

Portfilo's publishing system, editorial/research/writing standards, three published launch stories, newsletter foundation, core visual direction, universal homepage feature image, v0 brand asset system, Phase 4C engineering/SEO/performance/accessibility/security/release-integrity work through Track 5, the approved Vision Alignment v1, and Portfilo Test Methodology v0 are in place. Portfilo Test execution is intentionally deferred until there is an audience and/or a specific high-value Test candidate.

Current parallel sequence:

- product release: `Track 6 remaining pre-domain work -> final-domain work when available -> intentional release review -> main release boundary`;
- editorial strategy: `Vision Alignment v1 COMPLETE -> Portfilo Test Methodology v0 COMPLETE / DEFERRED -> Audience / Social Distribution Strategy NEXT`.

Core rules remain:

> **Help through reporting and evidence, not generic advice.**

> **Say the thing. Then stop.**

> **AI output has zero evidentiary authority for factual claims about the outside world.**

> **A Portfilo Test execution record may evidence how the tested system behaved under recorded conditions.**

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
- repository metadata now points to `loudaboi/Portfilo`;
- `package.json` is explicitly `UNLICENSED` by founder decision;
- no dependency upgrade was mixed into the hygiene or Track 5 metadata work.

Known release-integrity follow-up:

- `package-lock.json` root package metadata still carries the earlier ISC license snapshot and should be synchronized to `UNLICENSED` before final release. Runtime code and dependency resolution are unaffected.

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
- editorial/writing: `docs/EDITORIAL_STANDARD.md`, `docs/RESEARCH_STANDARD.md`, `docs/WRITING_SYSTEM.md`, `docs/STYLE_RESEARCH_STANDARD.md`, `docs/PUBLISHING_STANDARD.md`, `docs/COPY_STYLE.md`, `docs/PORTFILO_TEST_STANDARD.md`;
- design/image: `docs/DESIGN_DIRECTION.md`, `docs/IMAGE_SYSTEM.md`, `docs/PHOTO_TREATMENT.md`, `research/image-system/homepage-featured-cover-decision.md`;
- brand: `research/brand-system/wordmark-svg.md`, `research/brand-system/icon-system.md`, `research/brand-system/social-preview.md`;
- email/deployment: `docs/EMAIL_SYSTEM_PLAN.md`, `docs/BEEHIIV_EMAIL_SETUP.md`, `docs/CLOUDFLARE_PRODUCTION_SETUP.md`;
- research workspace: `research/README.md`, `research/PORTFILO_TEST_TEMPLATE.md`, and the relevant story or Test packet.

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

Intentionally deferred to Phase 4C at that point:

- dependency upgrades;
- broad CSS/font/token refactoring;
- image delivery/LCP optimization;
- full security/SEO/accessibility/performance review.

The approved homepage feature PNG is about 2.58 MB and remains the approved master/provenance asset. The production homepage serves the optimized WebP derivative rather than the PNG as the feature-panel background.

The hygiene pass itself did not rerun local validation. Later Phase 4C work has since been validated with fresh `npm run check` and `npm run build` passes reported by the user on 2026-09-05.

## Phase 4

### 4A - editorial image system

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

### 4B - brand asset system

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

### 4C - full engineering / security / SEO / quality audit

Status: **TRACKS 1-5 COMPLETE / TRACK 6 OPEN**

Completed audit sequence:

#### Track 1 - Technical SEO foundation

Status: **COMPLETE**

- canonical, robots, sitemap, social metadata, Article structured-data baseline, icon metadata, and related search-facing implementation reviewed and corrected where needed;
- Google indexing/search visibility is not yet established and is not being treated as equivalent to technical SEO readiness.

#### Track 2 - Performance

Status: **COMPLETE**

- homepage feature-image delivery optimized while retaining the approved PNG master/provenance asset;
- production feature-panel image delivery uses the optimized WebP derivative;
- no speculative design replacement was introduced.

#### Track 3 - Accessibility + responsive QA

Status: **COMPLETE**

- accessibility and responsive implementation reviewed through the Phase 4C pass;
- approved layout/brand decisions were not reopened without a concrete defect.

#### Track 4 - Security + reliability

Status: **COMPLETE / VALIDATED**

Subscription endpoint hardening includes:

- true streaming 4 KB request-body limit;
- 10-second beehiiv upstream timeout;
- tighter server-side email validation;
- POST-only behavior;
- same-origin check when `Origin` is supplied;
- honeypot handling;
- provider failure/rate-limit handling.

Validation recorded for Track 4:

- `npm run check`: PASS, user-reported;
- `npm run build`: PASS, user-reported;
- `npm audit`: 0 vulnerabilities, user-reported;
- normal signup: PASS;
- non-POST request: 405 PASS;
- malformed email: 400 PASS;
- oversized body: 413 PASS.

Cloudflare edge rate limiting remains intentionally deferred to final-domain setup in Track 6.

#### Track 5A - Code & Release Integrity Audit

Status: **COMPLETE**

Findings/changes:

- no broken internal route construction found in the inspected production source;
- production fixture leakage checks passed by source inspection;
- no obvious temporary files, secrets, committed build output, or rejected preview assets found in the audited tree;
- historical documents remain intentionally retained and mapped rather than treated as dead files;
- repository URL metadata corrected from the obsolete owner path to `loudaboi/Portfilo`;
- package license explicitly changed to `UNLICENSED` after founder approval;
- `package-lock.json` root license snapshot synchronization remains a Track 6 release-integrity follow-up.

#### Track 5B - Search + Institutional Copy Refinement

Status: **COMPLETE / IMPLEMENTED / VALIDATED**

Implemented narrowly from approved/publicly grounded copy:

- homepage title: `Portfilo | Business and Technology Publication`;
- homepage meta description now uses the approved publication identity plus approved coverage language;
- About meta description now describes the actual About-page contents;
- existing Louda Tuppal founder block now has the stable `#louda-tuppal` anchor;
- Louda Tuppal story bylines link to `/about#louda-tuppal`;
- Article structured data supports a human `author.url` while `Portfilo` remains a valid Organization author.

No About-body rewrite, generic mission, permanent tagline, contact email, keyword stuffing, filler page, author CMS, or speculative SEO surface was added.

Fresh post-Track-5 validation on 2026-09-05:

- `npm run check`: PASS, user-reported;
- `npm run build`: PASS, user-reported.

Track 6 remains responsible for final deployment/domain/runtime verification. Do not infer final production readiness from source inspection or local build validation alone.

## Editorial model

Topics:

`Business / Technology / Startups / AI / Building`

Normal editorial types:

`Reported / Explained / Guide / Profile / Analysis / Perspective / Field Notes`

Primary reader needs:

`Update / Understand / Interpret / Decide`

Partner content is commercial and must be unmistakably labeled.

## Vision Alignment v1

Status: **COMPLETE / FOUNDER APPROVED / CANONICAL DOCS ALIGNED**

Approved internal editorial thesis:

> **Portfilo focuses on understanding how technology is changing companies, industries, work, and the process of building businesses, with the Philippines as its primary reporting context and AI as its strongest current acquisition and reporting wedge.**

This is an internal editorial and prioritization statement, not a public tagline or automatic public-copy change.

Priority lanes:

1. **AI + Work** - models, products, adoption, implementation, workflows, jobs, economics, governance, and company/industry consequences;
2. **Digital Economy Infrastructure** - payments, fintech, IT-BPM, cloud, data centers, platforms, cybersecurity, connectivity, and enabling systems;
3. **Building Companies** - product, distribution, sales, pricing, hiring, funding, operations, business models, and company-building decisions.

The existing public topics remain unchanged:

`Business / Technology / Startups / AI / Building`

AI is a reporting/acquisition wedge, not Portfilo's entire identity. Strategic-lane fit affects prioritization only after the normal editorial gate is passed.

Approved two-speed operating model:

- **fast factual layer:** narrow, verified updates when the value is establishing what materially changed;
- **deep layer:** explanation, analysis, reporting, datasets, interviews, investigations, and other substantial work using the existing full pipeline.

`AI Update` is an internal label for the fast path, not a new public topic or content type.

At the Vision Alignment v1 gate, `Portfilo Test` remained provisional pending dedicated methodology research. That dependency has since been resolved by the separately approved Portfilo Test Methodology v0 recorded below.

Vision Alignment v1 did **not** change:

- brand identity;
- wordmark;
- navigation;
- public topic taxonomy;
- website design;
- Portfilo Brief name;
- current homepage/About body copy;
- content schema;
- technical architecture.

Canonical changes for Vision Alignment v1 were limited to `docs/CONTENT_PLANNING.md`, `docs/COPY_STYLE.md`, `docs/PUBLISHING_STANDARD.md`, and this project-state record.

## Portfilo Test Methodology v0

Status: **COMPLETE / FOUNDER APPROVED / IMPLEMENTED / EXECUTION DEFERRED**

Governing standard:

`docs/PORTFILO_TEST_STANDARD.md`

Reusable packet template:

`research/PORTFILO_TEST_TEMPLATE.md`

Methodology v0 establishes:

- question-first, narrow real-world testing;
- normal planning/assignment gate before any Test;
- frozen protocol before final scored runs;
- original task design by default rather than dependence on public benchmark items;
- pilot/dev separation from final evidence;
- about 6-12 final tasks across about 2-4 relevant task families as defaults, not quotas;
- three independent final trials per task/system by default when non-determinism matters;
- predeclared retry/rerun rules;
- objective outcome checks before subjective judgment where possible;
- `PASS/FAIL` or `PASS/PARTIAL/FAIL` rather than a universal 0-100 intelligence score;
- blinded/randomized human evaluation where practical when subjective judgment matters;
- second human review for central/close subjective conclusions where practical;
- explicit version, plan/tier, setup, tools, environment, and material resource recording;
- cost and time-to-usable-outcome measurement when material;
- retention of all valid final runs, including failures;
- distinction among system/task, product/integration, and Portfilo-infrastructure failures;
- vendor claims separated from Portfilo observations and interpretation;
- public/synthetic/explicitly permissioned data by default;
- sandbox/test accounts for consequential external agent actions;
- Philippine, Filipino, Taglish, Cebuano, or other local testing only when materially relevant;
- naturally authored/native-validated local-language tasks preferred over mechanical translation;
- no claim broader than the tested conditions;
- `AI Showcase` treated only as a derivative presentation format from completed Test evidence, not a separate evidence standard.

The methodology does **not** create:

- a permanent model leaderboard;
- a universal Portfilo AI score;
- custom benchmark infrastructure;
- a database;
- an automated judge pipeline;
- weekly retesting;
- automatic authorization to publish any Test.

No specific Portfilo Test is currently approved for publication by virtue of methodology approval alone.

Portfilo Test execution is intentionally deferred. A standalone methodology dry run is not required now. Reopen this subject when Portfilo has an audience and/or a specific high-value Test candidate; at that point, use the Test's pilot/dev phase to validate any remaining operational questions before final evidence-producing runs.

## Active research assignments

### C001 - ACTIVE / FLAGSHIP / CONTINUE

Question: What separates an AI pilot from a production system inside a Philippine company?

Packet: `research/stories/ai-pilot-to-production/`

State: `CONTINUE / OUTREACH READY`.

Vision fit: **STRONG / AI + WORK**.

The Swarm Philippine AI Report 2025 contains an unresolved 65% vs 40% proof-of-concept contradiction. Do not use 65% as a clean factual anchor until reconciled. No draft is authorized until reporting and style-research gates are met.

### C021 - ACTIVE / SOURCE RECONNAISSANCE

Question: How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

Packet: `research/stories/data-center-capacity-ledger/`

Vision fit: **STRONG / DIGITAL ECONOMY INFRASTRUCTURE**.

Keep capacity categories distinct. No national subtotal is publication-ready.

### C017 - WAITING / EXTERNAL CLARIFICATION

Question: What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

Packet: `research/stories/zero-fee-merchant-payments/`

Vision fit: **POTENTIAL / DIGITAL ECONOMY INFRASTRUCTURE**.

Needs narrow written BSP/PPMI clarification. It does not block v0 finalization.

### C029 - HOLD / FUTURE AUDIENCE RESEARCH

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
- synchronize the root `package-lock.json` license snapshot to `UNLICENSED`;
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
| Package metadata cleanup | PASS / `package.json` PRIVATE + UNLICENSED / LOCKFILE LICENSE SNAPSHOT PENDING SYNC |
| Content architecture | PASS / STABLE |
| Site copy + IA | PASS / DEPLOYED USER APPROVED |
| Universal homepage feature image | PASS / OPTIMIZED WEBP DELIVERY + APPROVED PNG MASTER RETAINED |
| Phase 4C Track 1 - Technical SEO | PASS / COMPLETE |
| Phase 4C Track 2 - Performance | PASS / COMPLETE |
| Phase 4C Track 3 - Accessibility + responsive | PASS / COMPLETE |
| Phase 4C Track 4 - Security + reliability | PASS / COMPLETE |
| Phase 4C Track 5A - Code + release integrity | PASS / COMPLETE |
| Phase 4C Track 5B - Search + institutional copy | PASS / COMPLETE |
| Vision Alignment v1 | PASS / FOUNDER APPROVED / DOCS ALIGNED |
| Portfilo Test Methodology v0 | PASS / FOUNDER APPROVED / IMPLEMENTED / EXECUTION DEFERRED / NO SPECIFIC TEST AUTHORIZED |
| Latest `npm run check` | PASS / USER-REPORTED / 2026-09-05 / PRE-VISION-DOCS |
| Latest `npm run build` | PASS / USER-REPORTED / 2026-09-05 / PRE-VISION-DOCS |
| Brand asset system | PASS / PHASE 4B CLOSED |
| Default social preview | PASS / 1200 x 630 / OG METADATA + FACEBOOK + DISCORD VALIDATED |
| Apple touch icon | PASS / CORRECTED + USER APPROVED + IMPLEMENTED |
| Track 6 final production/release readiness | OPEN / DOMAIN-DEPENDENT ITEMS PENDING |
| Final-domain configuration | PENDING DOMAIN |

The Portfilo Test Methodology v0 implementation is documentation-only. It changes no runtime code, dependencies, content schema, routes, navigation, design, or public Test output. No new `npm run check` or `npm run build` result is inferred from this documentation change.

## Exact next tasks

### Editorial strategy

**Subject 03: research and define Portfilo's Audience / Social Distribution Strategy.**

Treat this as a separate research -> evaluation -> approval -> implementation cycle. The objective is to determine how Portfilo should begin building and serving an audience before launch and after launch without turning the publication into a generic content account.

The research should determine, at minimum:

- which social/distribution platforms are worth maintaining at v0;
- the role of Louda's personal account versus Portfilo's brand accounts;
- which formats belong on each selected platform;
- how website stories, Portfilo Brief, fast factual updates, and future deeper work should feed distribution;
- a realistic posting cadence for limited editorial capacity;
- what can begin before the final domain and what should wait for public launch;
- how to avoid posting quotas, low-value filler, generic AI-content behavior, and unsupported derivative claims;
- the initial launch/distribution sequence and what evidence should later trigger changes to the strategy.

Do not begin an official posting cadence merely because this strategy subject has started. Research and approve the operating plan first. Portfilo Test execution remains deferred unless a later specific Test candidate justifies reopening it.

### Product release

**Continue the remaining pre-domain portion of Phase 4C Track 6 without inventing a final domain.**

Current actionable items before the domain exists:

1. synchronize `package-lock.json` root license metadata to `UNLICENSED` and rerun local validation if that file changes;
2. enable/verify Cloudflare Web Analytics on the temporary Pages deployment;
3. continue temporary-production QA where useful.

Domain-dependent items remain deferred until the final public domain exists:

- final production `SITE_URL`;
- custom-domain/canonical-host configuration;
- Cloudflare zone-level `/api/subscribe` rate limiting;
- beehiiv production opt-in redirect;
- final-domain subscribe/confirm/unsubscribe QA;
- final release browser/metadata/security/performance verification.

Do not merge to `main` merely because local checks pass. Final release still requires the environment-dependent Track 6 checks and explicit release approval.

Do not reopen approved Phase 4A image design, Phase 4B brand design, Track 5 institutional copy, Vision Alignment v1, or Portfilo Test Methodology v0 unless a concrete implementation defect or new evidence justifies a new decision.