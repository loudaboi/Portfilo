# Portfilo Project State

_Last updated: 2026-09-04_

## Current phase

**Portfilo v0 / Product Finalization - UNIVERSAL HOMEPAGE FEATURE IMAGE IMPLEMENTED / DEPLOYED REVIEW + FRESH LOCAL VALIDATION PENDING**

Portfilo's publishing system, editorial/research/writing standards, three published launch stories, newsletter foundation, and core visual direction are in place. Phase 4 is now focused on validating the approved universal homepage feature image, completing the remaining brand assets, then performing the full engineering, security, SEO, accessibility, performance, and release audit.

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

Repository cleanup note:

- `main` and `build/portfilo-v0` are the only branches intended to remain;
- ten stale remote branches were audited as having zero unique commits relative to `build/portfilo-v0` and are safe deletion candidates;
- remote branch deletion still requires the user's local authenticated Git client because the connected GitHub tooling does not expose branch deletion.

## Canonical documents

Project/product:

- `docs/V0_SCOPE.md`
- `docs/PROJECT_STATE.md`
- `docs/CONTENT_PLANNING.md`
- `docs/SITE_COPY_AND_IA_AUDIT.md`
- `docs/SITE_COPY_IMPLEMENTATION.md`

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
- `research/image-system/research.md`
- `research/image-system/homepage-featured-cover-decision.md`
- `research/IMAGE_BRIEF_TEMPLATE.md`

The earlier homepage featured-cover research, multi-topic briefs, candidate audits, and generation records remain historical research only. They do not override `homepage-featured-cover-decision.md`.

Email/deployment:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/BEEHIIV_EMAIL_SETUP.md`
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md`

## Completed product work

### Site foundation and content architecture

Status: **COMPLETE**

Current v0 architecture remains:

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

The homepage, Stories archive, Story route, Series route, Standards, About, Subscribe, confirmation, Privacy, 404, navigation, and footer are in place. Public copy follows the current writing/copy standards and the approved newsletter flow.

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

## Phase 4 - product finalization

Status: **ACTIVE**

### 4A - editorial image system

Canonical standard:

`docs/IMAGE_SYSTEM.md`

Current homepage decision:

`research/image-system/homepage-featured-cover-decision.md`

The image system itself remains approved. Generated imagery is editorial illustration, not documentary evidence, and requires human approval plus visible synthetic/AI disclosure when published.

#### Universal homepage feature image

Status: **APPROVED / IMPLEMENTED / DEPLOYED REVIEW PENDING**

Canonical asset:

`public/images/homepage-feature-image.png`

Implementation behavior:

- one universal image is used for the homepage featured-story cover panel;
- the image does not vary by Business, Technology, Startups, AI, or Building;
- story type, topic, author, and Read navigation remain live HTML;
- the asset is displayed with `cover` cropping;
- presentation may use restrained edge/bottom darkening for legibility;
- the generated image requires a visible `AI-generated image` disclosure;
- the rejected Astra image is removed;
- the temporary preview stylesheet is removed;
- the accidental `tmp-test.txt` repository probe is removed.

Implementation commit:

`b4b4db86482ec3c2e0d56f83b708b15d5a230853`

Decision-record commit:

`4774688ad48b83eab91b53386bb00098ad83a0b0`

The earlier five-topic system:

`featured story -> topic -> canonical topic cover asset`

is **SUPERSEDED FOR V0**.

Earlier Building, AI, Pinterest, Astra, and other candidate imagery has no current project authority unless explicitly re-approved in a later decision.

Required validation before pass:

- `npm run check`;
- `npm run build`;
- deployed desktop homepage inspection;
- deployed mobile homepage inspection;
- text/read-link/disclosure legibility;
- crop quality at responsive breakpoints;
- no request for rejected preview assets.

#### C030 story-image pilot

Status: **PAUSED**

The previous C030-specific image brief remains a historical approved brief, but no C030 story image is currently authorized for implementation. Resume only through a new explicit decision after the homepage/brand work is stable.

### 4B - brand asset system

Status: **PENDING**

Required v0 outcomes include:

- final Portfilo wordmark/brand-mark decision;
- favicon/site icon;
- social avatar;
- monochrome and light/dark usage;
- default site social-preview composition;
- usage rules sufficient for site/email/social consistency.

### 4C - full engineering / security / SEO / quality audit

Status: **PENDING**

The final audit must cover:

- Astro/content architecture and code quality;
- dependencies and secret exposure;
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
- production `SITE_URL` after domain connection;
- Cloudflare `/api/subscribe` edge rate limit;
- Cloudflare Web Analytics enable/verification;
- final beehiiv opt-in redirect to canonical `/confirmed`;
- final-domain subscribe/confirm/unsubscribe QA;
- mailing-address/compliance clearance before first public newsletter send;
- final browser/responsive/link/console QA;
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
| Content architecture | PASS / STABLE |
| Writing system | PASS / CANONICAL |
| Site copy + IA | PASS / DEPLOYED USER APPROVED |
| C027 editorial repair | COMPLETE / DEPLOYED USER APPROVED |
| C009 editorial repair | COMPLETE / DEPLOYED USER APPROVED |
| C030 editorial repair | COMPLETE / DEPLOYED USER APPROVED |
| Editorial image system | APPROVED / CANONICAL |
| Universal homepage feature image | IMPLEMENTED / DEPLOYED REVIEW PENDING |
| Rejected Astra asset | REMOVED |
| Temporary homepage preview stylesheet | REMOVED |
| `tmp-test.txt` | REMOVED |
| Stale remote branches | AUDITED / DELETION PENDING LOCAL GIT |
| Fresh `npm run check` | PENDING |
| Fresh `npm run build` | PENDING |
| Brand asset system | PENDING |
| Full engineering/security/SEO audit | PENDING |
| Final-domain configuration | PENDING DOMAIN |

## Exact next task

Validate the universal homepage feature-image implementation before moving into additional visual work.

Required sequence:

1. finish the visible AI-generated disclosure in the homepage presentation;
2. user pulls the latest `build/portfilo-v0` locally;
3. delete the ten audited stale remote branches;
4. run `npm run check`;
5. run `npm run build`;
6. inspect the Cloudflare-deployed homepage on desktop and mobile;
7. record pass/fail and fix only issues found in that validation;
8. after a pass, proceed to the remaining brand asset system.

Do not reopen the five-topic homepage image plan unless Louda explicitly makes a new decision.