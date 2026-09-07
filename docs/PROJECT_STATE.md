# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — HOMEPAGE FINALIZATION**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, technical SEO/performance/accessibility/security work through the prior Phase 4C audit, and one current published Feature are in place.

The active product priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

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
- internal working model may still be described in research as focused business/technology briefing + original reporting, but **`briefing` is rejected as public homepage/newsletter acquisition language**;
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
- the newsletter now has a founder-approved public acquisition promise of **latest news**, a **7-minute** reading-time target, and delivery **three times per week**;
- exact newsletter send days and times are not yet approved;
- the four-issue newsletter pilot remains a later validation exercise and is **parked until the core site is built**, but it must validate the sustainability of the 7-minute / three-times-per-week promise before the first recurring public newsletter run and before final launch readiness is declared.

Approved internal selection lens for later newsletter/product validation:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only. It is not homepage copy or a tagline.

Research basis:

- `research/newsletter-copy-reference-corpus-v1.md`;
- `research/portfilo-product-model-research-v1.md`;
- `research/editorial-lens-four-issue-pilot-v1.md`;
- `research/homepage-copy-evidence-matrix-v1.md`;
- `research/homepage-hero-copy-v3.md`.

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
approved hero copy
email form
selected grainy architectural hero visual

LATEST STRIP

THE LATEST
lead current item
supporting current items / compact feed as justified

A CLOSER LOOK
one deeper Feature

FINAL NEWSLETTER SIGNUP
section-specific copy still open

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

**HERO COPY APPROVED. FINAL SECTION-SPECIFIC SIGNUP COPY STILL OPEN.**

Current approved hero decision record:

`research/homepage-hero-copy-v3.md`

Exact approved hero marketing copy:

```text
NEWSLETTER

Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

The email form retains its functional behavior:

- email input;
- `Subscribe free` action;
- double-opt-in confirmation;
- unsubscribe support.

This founder approval intentionally changes the prior product constraint. The 7-minute read and three-times-per-week cadence are now public operating commitments, not merely candidate copy.

Exact send days/times remain open.

The founder also established a homepage copy rule: **signup copy should differ by section and should be written for the context around that signup.** Do not repeat the hero headline/support line in the final lower-page signup.

The final homepage signup appears after the editorial modules / `A CLOSER LOOK` area, so its copy must be written for that later-page context.

### Superseded copy research

`research/homepage-copy-evidence-matrix-v1.md` remains useful research/provenance, but its earlier selection of Architecture A as the final hero structure is superseded by the founder's later preference for a stronger BackScoop/Morning Brew-style reader-facing acquisition structure.

`research/homepage-copy-v2.md` is **REJECTED / HISTORICAL / ZERO CURRENT HERO AUTHORITY**. Its briefing-led hero must not be restored.

`research/homepage-copy-v1.md` also remains **REJECTED / HISTORICAL / ZERO AUTHORITY**.

Rejected generated directions include, among others:

- `A clearer picture of what's next.`;
- `A briefing on business and technology, with original reporting from Portfilo.`;
- `Keep up with business and technology.`;
- `Business and technology, by email.`;
- `Follow the latest in business and technology.`;
- `News and deeper stories from Portfilo.`;
- `Get Portfilo in your inbox.`;
- `The important moves...`;
- `...with the context to understand what they mean.`;
- invented Philippines/SEA positioning;
- generic newsroom-format language used instead of describing what subscribers receive.

Substantial homepage/newsletter copy must continue to use:

- `skills/portfilo-anti-slop/SKILL.md`;
- `docs/COPY_STYLE.md`;
- `docs/WRITING_SYSTEM.md`.

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

Status: **DESIGN APPROVED / PARKED UNTIL CORE SITE IS BUILT**

Canonical pilot record:

`research/editorial-lens-four-issue-pilot-v1.md`

The founder has now approved a 7-minute reading-time promise and three-times-per-week cadence before the pilot. Therefore the pilot no longer decides whether those promises may exist; it validates whether Portfilo can reliably sustain them before recurring public sends and final launch readiness.

The pilot may still refine:

- exact issue construction;
- operational workflow;
- exact send days/times;
- what must be cut or compressed to stay within the 7-minute promise;
- whether the three-times-per-week schedule is operationally sustainable enough for launch.

It does **not** block static homepage construction.

## Social distribution

Audience & Social Distribution Strategy v0 remains valid.

**Social Visual System work is deferred until the redesigned website is stable** so social inherits the actual final website system.

Do not let social work interrupt the current website redesign.

## Current implementation sequence

This sequence is the current active roadmap. Update this section when the phase changes rather than creating another plan file.

1. Homepage newsletter copy research / evidence work — COMPLETE.
2. Hero acquisition direction selection — COMPLETE.
3. **Homepage hero copy — FOUNDER APPROVED** in `research/homepage-hero-copy-v3.md`.
4. **Final section-specific homepage signup copy — ACTIVE NEXT GATE.**
5. Founder approves the final lower-page signup copy so the homepage copy package is complete.
6. **Static Homepage Rebuild v1** from the approved composition, approved hero copy, contextual final signup copy, and selected hero asset. No motion.
7. Desktop / large-tablet / mobile visual QA and correction pass.
8. News/Feature content architecture + taxonomy migration plan, separate approval, implementation, validation.
9. News/Feature reading surfaces, `/latest`, and Features archive/presentation.
10. Subscribe/Standards simplification and About retirement only if dependencies are safely resolved.
11. Coordinated `Portfilo Brief` -> `Newsletter` public/email naming migration.
12. Four-issue newsletter pilot to validate the approved 7-minute / three-times-per-week operating promise before recurring public sends and final launch readiness.
13. Motion pass: Latest ticker + approved micro-interactions only.
14. Full QA, domain/release readiness, then intentional `main` release review.
15. Resume Social Visual System v0.

Do not skip ahead because a later task is easier or more interesting.

## Exact next task

### Final homepage newsletter signup — section-specific copy gate

**No runtime code change. No implementation authorization yet.**

The hero copy is approved and must not be reopened unless the founder explicitly changes it.

The next copy decision is only the final newsletter signup after the editorial content / `A CLOSER LOOK` area.

Requirements:

- do not repeat `Get ahead in business and tech in 7 minutes.`;
- do not repeat the hero support sentence verbatim;
- write for the reader who has already seen the homepage's News and Feature content;
- keep the now-approved 7-minute / three-times-per-week promises consistent if referenced;
- do not use `briefing` as public acquisition language;
- do not fall back to generic `reporting / Features / deeper stories / insights` language;
- keep form behavior functional and familiar;
- stop for founder approval before Static Homepage Rebuild v1.

After that exact lower-page copy is approved, the next gate is Static Homepage Rebuild v1. At implementation, the exact selected hero binary remains a required input. If it is unavailable, ask the founder for the approved image rather than regenerating or substituting it.

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
- validate the approved 7-minute / three-times-per-week newsletter promise through the parked pilot before recurring public sends and final launch readiness;
- final responsive/accessibility/link/console/security/SEO/performance QA;
- MFA/passkeys where applicable;
- intentional release review before `main`.

## Validation authority

Latest recorded local validation before this state-reconciliation cleanup:

- `npm run check`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes;
- `npm run build`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes.

Do not infer a later build pass that was not run.

The repository-state cleanup and copy/product-decision documentation updates are documentation/workflow-only and do not themselves create a new runtime validation result.