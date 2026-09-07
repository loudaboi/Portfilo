# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — STATIC HOMEPAGE REBUILD IMPLEMENTED / VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, technical SEO/performance/accessibility/security work through the prior Phase 4C audit, and one current published Feature are in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The rejected first homepage composition has been replaced on `build/portfilo-v0` by Static Homepage Rebuild v1. The new rebuild is **not yet founder-approved visually and has not yet received fresh local `npm run check` / `npm run build` validation in this session**.

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

Current `SiteHeader.astro` on the working branch now renders:

- the Portfilo wordmark;
- presentation labels `Business / Technology / Startup / AI` on wider screens;
- `Latest / Features / Subscribe free` primary navigation.

This header presentation does **not** perform the later schema/taxonomy migration.

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

Canonical composition provenance:

`research/homepage-redesign-v1.md`

Founder-approved composition as of 2026-09-08:

```text
HEADER
Portfilo + Business / Technology / Startup / AI
Latest | Features | Subscribe free

COMPACT NEWSLETTER HERO
newsletter label
approved acquisition copy
email form
no hero image

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

The founder supplied Morning Brew and BackScoop screenshots on 2026-09-08 as **composition references**. Transfer only the useful publication logic: compact acquisition before editorial content, fast transition into current stories, strong static latest strip, and editorial-content + newsletter-card pairing. Do not copy their styling, colors, copy, branding, or proprietary visual identity.

### Hero treatment

On 2026-09-08 the founder explicitly chose a **no-image hero treatment for the first static build**.

The hero is an acquisition area, not a full-screen or oversized marketing hero. It should:

- stay compact enough that editorial content appears quickly;
- use the approved newsletter copy and email form;
- rely on typography, spacing, thin rules, and the Portfilo visual system rather than a decorative hero image;
- reserve substantial imagery for actual News and Feature content.

The previously selected architectural hero image remains historical provenance only. It is **not required for Static Homepage Rebuild v1 and must not block implementation**.

### Static Homepage Rebuild v1 implementation

Current runtime implementation now includes:

- compact no-image newsletter hero;
- static/manual Latest strip with no automatic motion;
- development-only synthetic News fixtures for testing the intended current-news hierarchy;
- a lead News layout plus compact supporting list in development;
- the published Feature using the existing approved Feature image;
- a Feature + newsletter-card paired composition modeled on the approved publication logic;
- compact footer newsletter signup;
- the approved hero copy reused in all three signup placements for this first build;
- responsive desktop/tablet/mobile stacking rules;
- no schema/taxonomy migration;
- no article/route redesign;
- no motion dependency or decorative animation.

Implementation files changed in this rebuild:

- `src/pages/index.astro`;
- `src/components/NewsletterSignup.astro`;
- `src/components/SiteHeader.astro`.

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

## Historical hero image selection

Founder previously selected generated architectural candidate 2, recorded in:

`research/image-system/homepage-hero-selection-v1.md`

That record remains useful for provenance, but the selected image is **not part of the current no-image homepage hero treatment**. Do not regenerate, substitute, or add it to Static Homepage Rebuild v1 unless the founder explicitly reopens the hero-image decision later.

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
2. Hero visual exploration — COMPLETE; current v1 treatment is no image.
3. Homepage newsletter copy — COMPLETE.
4. Homepage acquisition placement — COMPLETE.
5. **Static Homepage Rebuild v1 — IMPLEMENTED / FRESH VALIDATION PENDING.**
6. **Desktop / large-tablet / mobile visual QA and correction pass — ACTIVE NEXT GATE after validation.**
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

### Validate Static Homepage Rebuild v1, then perform visual QA

**RUNTIME IMPLEMENTATION EXISTS. FRESH VALIDATION IS REQUIRED BEFORE CLAIMING PASS.**

Required validation:

```bash
npm run check
npm run build
```

Then run the site locally and inspect the homepage at desktop, large-tablet, and mobile widths.

Visual QA should specifically inspect:

- hero remains compact and does not dominate the first viewport;
- Latest strip reads like a publication utility, not decoration;
- lead/supporting News hierarchy is clear in development fixtures;
- Feature image and Feature copy feel like one editorial story treatment;
- Feature + newsletter card pair has balanced desktop height/weight without arbitrary spacers;
- newsletter card follows the Feature on mobile;
- footer signup remains compact;
- no horizontal overflow;
- no rounded-card/SaaS drift;
- typography and spacing feel closer to the approved Morning Brew / BackScoop publication logic without copying either product.

Do not begin motion, taxonomy migration, article redesign, or another phase before this static visual QA gate is resolved.

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

Latest recorded local validation before Static Homepage Rebuild v1:

- `npm run check`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes and before this homepage rebuild;
- `npm run build`: PASS, user-reported 2026-09-07, before the final publication/withdrawal metadata changes and before this homepage rebuild.

**No fresh `npm run check` or `npm run build` pass has been established for Static Homepage Rebuild v1 yet.**

The current tool environment does not contain the repository dependencies needed to truthfully claim those commands passed. The next validation result must come from an actual local or CI run.
