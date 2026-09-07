# Portfilo Project State

_Last updated: 2026-09-07_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — HOMEPAGE FINALIZATION**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, technical SEO/performance/accessibility/security work through the prior Phase 4C audit, and one current published Feature are in place.

The active product priority changed on 2026-09-07: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The current homepage implementation on `build/portfilo-v0` is transitional and visually rejected. It may contain reusable behavior, but it is **not design or copy precedent**.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

`docs/PROJECT_STATE.md` alone owns the current phase and exact next task. Do not create a competing execution-plan document.

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

`main` remains the release boundary. No merge to `main` without an intentional release review.

## Approved current product direction

Founder-approved at this boundary:

- brand: **Portfilo**;
- product category: business and technology media product;
- working model: **focused business/technology briefing + original reporting**;
- newsletter/email acquisition is a primary conversion and recurring-reader relationship;
- **News** is the intended current/day-to-day editorial layer;
- **Features** are the deeper editorial layer;
- intended reader-facing coverage labels: `Business / Technology / Startup / AI`;
- `Building` is removed from the intended public coverage set;
- `Startups` becomes singular `Startup` in the intended public coverage set;
- Portfilo has **no geographic product promise**;
- do not impose a Philippines-first, Southeast-Asia-first, or other geographic positioning requirement;
- geography can still be material to individual reporting;
- Portfilo remains free in v0;
- no public newsletter cadence or reading-time promise is approved;
- the four-issue newsletter pilot is approved as a later validation exercise and is **parked until the core site is built**.

Approved internal selection lens for later newsletter/product validation:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only. It is not homepage copy or a tagline.

Research basis:

- `research/newsletter-copy-reference-corpus-v1.md`;
- `research/portfilo-product-model-research-v1.md`;
- `research/editorial-lens-four-issue-pilot-v1.md`.

## Current implementation vs approved target

The repository is deliberately between the old product and the approved redesign.

### Current runtime facts

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

The target taxonomy migration to:

`Business / Technology / Startup / AI`

is **approved as product direction but not yet implemented**. Schema/content/route migration requires its own later plan and approval.

Current `SiteHeader.astro` on the working branch renders:

`Latest / Features / Subscribe free`

Current homepage code contains the rejected first redesign attempt and rejected generated copy. It remains only until the clean static rebuild replaces it.

Development News fixtures are guarded by `import.meta.env.DEV` and are not public production journalism.

### Current content set

Published on the working branch:

- `src/content/stories/what-actually-makes-starting-a-business-hard.md`

Withdrawn to draft and retained for possible rework/abandonment:

- `src/content/stories/build-things-that-make-the-next-thing-easier.md`;
- `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`;
- `src/content/stories/what-actually-changed.md`.

The published starting-business story remains the current real Feature candidate for redesign QA.

## Homepage redesign state

Canonical composition contract:

`research/homepage-redesign-v1.md`

Founder-approved static architecture:

```text
COMPACT HEADER
Portfilo + Business / Technology / Startup / AI
Latest | Features | Subscribe free

COMPACT NEWSLETTER HERO
newsletter label
approved copy package (still open)
email form
selected grainy architectural hero visual

LATEST STRIP

THE LATEST
lead current item
supporting current items / compact feed as justified

A CLOSER LOOK
one deeper Feature

FINAL NEWSLETTER SIGNUP

MINIMAL FOOTER
```

Hard desktop/large-tablet rule for side-by-side text/image modules:

- top edges align;
- bottom edges align;
- one shared rectangular composition;
- do not fix imbalance with arbitrary spacer blocks.

Mobile stacking is exempt from equal-height alignment.

### Visual direction

Working direction:

**premium editorial restraint + digital immediacy**

Use:

- warm near-white canvas;
- near-black ink;
- Portfilo blue as primary functional accent;
- red rare and intentional;
- square geometry by default;
- thin rules;
- strong sans-led homepage typography;
- Source Serif 4 selectively for slower editorial/Feature contrast;
- visible grain on selected editorial imagery;
- restrained information density.

Avoid:

- generic SaaS hero composition;
- gradients/glow/glass;
- default shadows;
- rounded-card systems and pill-heavy UI;
- card soup;
- fake newspaper styling;
- decorative black panels;
- `01 / 02 / 03` section-decoration systems;
- excessive monospace;
- stock-business clichés;
- generic AI imagery;
- decorative motion before static approval.

The current typography baseline remains Instrument Sans + Source Serif 4 + IBM Plex Mono for true utility roles. Typography can be reopened only after the first faithful static composition exposes a concrete problem.

### Hero image

Founder approved Concept A, authorized candidate generation, and selected **candidate 2** from the generated architectural set.

Selection/provenance record:

`research/image-system/homepage-hero-selection-v1.md`

Approved character:

- grayscale/monochrome;
- premium print-like grain;
- contemporary architectural/city geometry;
- no embedded text or logos;
- no documentary claim;
- small live HTML disclosure such as `AI-generated editorial image`.

The exact selected binary is not yet committed to the repository. **Do not regenerate or silently substitute it.** At implementation, obtain the approved binary and verify the recorded hash when practical.

The older `public/images/homepage-feature-image.*` assets remain valid historical/current-runtime Feature assets. They are not the selected new hero.

## Homepage copy state

**OPEN. NO FINAL HERO COPY APPROVED.**

The earlier `research/homepage-copy-v1.md` candidate set is **REJECTED / HISTORICAL / ZERO AUTHORITY**.

Rejected generated directions include, among others:

- `A clearer picture of what's next.`;
- `News and deeper stories from Portfilo.`;
- `The important moves...`;
- `...with the context to understand what they mean.`;
- invented Philippines/SEA positioning;
- close paraphrases of those directions.

The real newsletter reference corpus is retained as research:

`research/newsletter-copy-reference-corpus-v1.md`

Substantial homepage/newsletter copy must use the research-bound process in:

- `skills/portfilo-anti-slop/SKILL.md`;
- `docs/COPY_STYLE.md`;
- `docs/WRITING_SYSTEM.md`.

Do not draft polished Portfilo hero copy before the message/reference structure is selected.

## Newsletter infrastructure state

Technical baseline remains valid:

- native Portfilo signup UI;
- one narrow `/api/subscribe` Cloudflare Pages Function;
- beehiiv owns double opt-in, subscriber storage, sending, unsubscribe, and deliverability;
- `reactivate_existing: true`;
- `send_welcome_email: false`;
- `double_opt_override: "on"`;
- Welcome Email OFF;
- Smart Nudge OFF;
- sender: `Portfilo`;
- Reply-To: `portfilo.ph@gmail.com`.

Existing public/email surfaces still use the operational name `Portfilo Brief` in places. The approved redesign direction is to use **Newsletter** publicly, but the naming migration is intentionally deferred until it can be performed consistently across site + beehiiv-facing copy. Do not migrate piecemeal.

## Four-issue newsletter pilot

Status: **DESIGN APPROVED / PARKED**

Canonical pilot record:

`research/editorial-lens-four-issue-pilot-v1.md`

It does **not** block homepage/site construction.

Run it later before committing to:

- a public recurring cadence;
- a reading-time promise;
- a fixed recurring issue structure as a public promise;
- the first recurring public newsletter send unless sequencing is explicitly reopened.

## Social distribution

Audience & Social Distribution Strategy v0 remains valid.

**Social Visual System work is deferred until the redesigned website is stable** so social inherits the actual final website system.

Do not let social work interrupt the current website redesign.

## Current implementation sequence

This sequence is the current active roadmap. Update this section when the phase changes rather than creating another plan file.

1. **Homepage Copy Evidence Matrix** — ACTIVE NEXT TASK.
2. Founder selects one researched structural/reference direction.
3. Draft the minimum Homepage Copy v1 from approved facts + selected structure, with line provenance.
4. Founder approves exact homepage copy package.
5. **Static Homepage Rebuild v1** from the approved composition and selected hero asset. No motion.
6. Desktop / large-tablet / mobile visual QA and correction pass.
7. News/Feature content architecture + taxonomy migration plan, separate approval, implementation, validation.
8. News/Feature reading surfaces, `/latest`, and Features archive/presentation.
9. Subscribe/Standards simplification and About retirement only if dependencies are safely resolved.
10. Coordinated `Portfilo Brief` -> `Newsletter` public/email naming migration.
11. Four-issue newsletter pilot.
12. Motion pass: Latest ticker + approved micro-interactions only.
13. Full QA, domain/release readiness, then intentional `main` release review.
14. Resume Social Visual System v0.

Do not skip ahead because a later task is easier or more interesting.

## Exact next task

### Homepage Copy Evidence Matrix

**No final Portfilo hero wording yet. No runtime code change.**

Required deliverable:

- exact Portfilo facts currently supportable on the homepage/newsletter acquisition surface;
- relevant structures from the real newsletter reference corpus;
- 2-4 structural/message architectures without final Portfilo prose;
- what each architecture requires Portfilo to claim;
- each required claim marked `SUPPORTED`, `UNSUPPORTED`, or `NOT YET TESTED`;
- reference products that demonstrate the structure;
- one evidence-based recommendation;
- then stop for founder approval of the direction.

The next approval does not automatically authorize the wording gate unless explicitly stated.

## Deployment / release readiness

Cloudflare Pages project:

`portfilo-app`

Temporary production URL and current temporary `SITE_URL`:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Remaining final-launch items include:

- final public domain;
- replace temporary `SITE_URL`;
- Cloudflare `/api/subscribe` edge rate limit where applicable;
- Cloudflare Web Analytics enable/verification;
- beehiiv opt-in redirect to final `/confirmed` URL;
- final-domain subscribe/confirm/unsubscribe QA;
- mailing-address/compliance clearance before first public newsletter send;
- final responsive/accessibility/link/console/security/SEO/performance QA;
- MFA/passkeys where applicable;
- intentional release review before `main`.

## Validation authority

Latest recorded local validation before this state-reconciliation cleanup:

- `npm run check`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes;
- `npm run build`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes.

Do not infer a later build pass that was not run.

This repository-state cleanup is documentation/workflow-only and does not itself create a new runtime validation result.
