# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — STATIC HOMEPAGE REBUILD AUTHORIZED**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, technical SEO/performance/accessibility/security work through the prior Phase 4C audit, and one current published Feature are in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

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
- internal research may still describe the model as focused business/technology briefing + original reporting, but **`briefing` is rejected as public homepage/newsletter acquisition language**;
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
- public newsletter acquisition now promises **latest news**, a **7-minute** read, and delivery **three times per week**;
- exact newsletter send days and times remain open;
- the four-issue newsletter pilot remains parked until the core site is built, then validates whether the 7-minute / three-times-per-week promise is sustainable before recurring public sends and final launch readiness.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only. It is not homepage copy or a tagline.

## Current implementation vs approved target

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

Target public taxonomy:

`Business / Technology / Startup / AI`

The taxonomy direction is approved but **not yet migrated**. Schema/content/route migration requires its own later plan and approval.

Current `SiteHeader.astro` on the working branch renders:

`Latest / Features / Subscribe free`

Development News fixtures are guarded by `import.meta.env.DEV` and are not public production journalism.

### Current content set

Published on the working branch:

- `src/content/stories/what-actually-makes-starting-a-business-hard.md`

Withdrawn to draft and retained for possible rework/abandonment:

- `src/content/stories/build-things-that-make-the-next-thing-easier.md`;
- `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`;
- `src/content/stories/what-actually-changed.md`.

The published starting-business story remains the real Feature candidate for redesign QA.

## Homepage redesign state

Canonical composition contract:

`research/homepage-redesign-v1.md`

Founder-approved composition as of 2026-09-08:

```text
HEADER
Portfilo + Business / Technology / Startup / AI
Latest | Features | Subscribe free

HERO
newsletter label
approved acquisition copy
email form
selected architectural hero visual

LATEST STRIP

THE LATEST
lead current item
supporting current items / compact feed as justified

FEATURED / A CLOSER LOOK
one deeper Feature / featured editorial story
newsletter signup card paired beside it on desktop
newsletter card follows it on mobile

FOOTER
compact newsletter signup
minimal institutional / legal links
```

The previously planned standalone full-width final newsletter CTA is removed.

The founder approved the BackScoop screenshot shared on 2026-09-08 as a **composition reference only** for the editorial-content + newsletter-card pairing. Do not copy BackScoop styling, colors, copy, branding, or proprietary visual identity.

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
- rounded-card and pill-heavy systems;
- card soup;
- fake newspaper styling;
- decorative black panels;
- `01 / 02 / 03` section-decoration systems;
- excessive monospace;
- stock-business clichés;
- generic AI imagery;
- decorative motion before static approval.

Typography baseline remains Instrument Sans + Source Serif 4 + IBM Plex Mono only for true utility roles.

## Approved newsletter copy

Canonical hero copy record:

`research/homepage-hero-copy-v3.md`

Exact approved copy:

```text
NEWSLETTER

Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

Form behavior remains:

- email input;
- `Subscribe free` action;
- double-opt-in confirmation;
- unsubscribe support.

### Signup reuse decision

On 2026-09-08 the founder explicitly chose speed over another copy gate and approved **reusing the hero copy for the first static build** in:

1. the hero signup;
2. the editorial-paired newsletter card;
3. the compact footer signup.

This **supersedes the earlier section-specific-copy requirement** recorded in `research/homepage-hero-copy-v3.md` for the first static build.

Context-specific copy for the editorial card and footer may be refined later after visual QA. Do not block the static build on that copy refinement.

## Hero image

Founder selected generated architectural candidate 2.

Selection/provenance record:

`research/image-system/homepage-hero-selection-v1.md`

Approved character:

- grayscale / monochrome;
- premium print-like grain;
- contemporary architectural/city geometry;
- no embedded text or logos;
- no documentary claim;
- small live HTML disclosure such as `AI-generated editorial image`.

Exact selected source asset:

- filename: `cinematic_monochrome_city_architecture.png`;
- dimensions: `1586 × 992`;
- SHA-256: `855e089805034e0b4bb37fc701164a09cd3e3431e39af51350e9d49e540b7f56`.

Prepared WebP derivative:

- filename: `homepage-hero-v1-selected.webp`;
- dimensions: `1586 × 992`;
- SHA-256: `8759dcd49c3757ba014e439009e0818c8fff7e37e61b8ff25a6e581db19fc1a0`.

**The exact selected binary is still not committed to the repository. Do not regenerate or silently substitute it.**

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

Existing public/email surfaces still use the operational name `Portfilo Brief` in places. The approved redesign direction is to use **Newsletter** publicly, but the naming migration is intentionally deferred until it can be performed consistently across site + beehiiv-facing copy. Do not migrate piecemeal during the homepage rebuild.

## Current implementation sequence

1. Homepage redesign / visual direction — COMPLETE.
2. Hero visual selection — COMPLETE.
3. Homepage newsletter copy — COMPLETE.
4. Homepage acquisition placement — COMPLETE.
5. **Static Homepage Rebuild v1 — AUTHORIZED / BLOCKED ONLY ON EXACT HERO ASSET.**
6. Desktop / large-tablet / mobile visual QA and correction pass.
7. News/Feature content architecture + taxonomy migration plan, separate approval, implementation, validation.
8. News/Feature reading surfaces, `/latest`, and Features archive/presentation.
9. Subscribe/Standards simplification and About retirement only if dependencies are safely resolved.
10. Coordinated `Portfilo Brief` -> `Newsletter` public/email naming migration.
11. Four-issue newsletter pilot to validate the approved 7-minute / three-times-per-week operating promise before recurring public sends and final launch readiness.
12. Motion pass: Latest ticker + approved micro-interactions only.
13. Full QA, domain/release readiness, then intentional `main` release review.
14. Resume Social Visual System v0.

Do not skip ahead because a later task is easier or more interesting.

## Exact next task

### Static Homepage Rebuild v1

**IMPLEMENTATION AUTHORIZED. CURRENT BLOCKER: REQUIRED HERO BINARY.**

Before editing runtime code, obtain the exact approved hero image and verify its hash when practical. If it is unavailable, ask the founder to upload/provide the approved image. Do not regenerate, recreate, reinterpret, or substitute another visual.

Once the asset is available:

- rebuild `src/pages/index.astro` from the approved composition rather than patching the rejected layout into shape;
- reuse sound underlying newsletter/content/brand behavior where helpful;
- implement the hero + Latest strip + The Latest + Featured/A Closer Look + editorial-paired signup card + compact footer signup;
- use the approved hero copy in all three signup placements for this first build;
- preserve the selected hero-image disclosure;
- no motion;
- no taxonomy/schema migration;
- no article/route redesign;
- no site-wide `Portfilo Brief` -> `Newsletter` migration;
- run actual `npm run check` and `npm run build` before claiming validation;
- stop after implementation for desktop / large-tablet / mobile visual QA.

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

Latest recorded local validation before the current documentation-only decision updates:

- `npm run check`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes;
- `npm run build`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes.

Do not infer a later build pass that was not run.

The current homepage composition and authorization updates are documentation/workflow-only and do not themselves create a new runtime validation result.