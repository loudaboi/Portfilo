# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — HOMEPAGE V2 IMPLEMENTED / LOCAL VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority is still: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

Homepage v1 was reviewed by the founder and judged directionally acceptable but in need of substantial hierarchy and composition correction. Homepage v2 implements that approved correction plan.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

`docs/PROJECT_STATE.md` alone owns the current phase and exact next task.

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

`main` remains the release boundary. No merge to `main` without intentional release review.

## Approved current product direction

Founder-approved at this boundary:

- brand: **Portfilo**;
- product category: business and technology media product;
- newsletter/email acquisition is a primary conversion and recurring-reader relationship;
- **News** is the intended current/day-to-day editorial layer;
- **Features** is the deeper editorial layer;
- intended reader-facing coverage labels: `Business / Technology / Startup / AI`;
- `Building` is removed from the intended public coverage set;
- `Startups` becomes singular `Startup` in the intended public coverage set;
- Portfilo has **no geographic product promise**;
- Portfilo remains free in v0;
- public newsletter acquisition promises **latest news**, a **7-minute** read, and delivery **three times per week**;
- exact send days/times remain open;
- `briefing` is rejected as public homepage/newsletter acquisition language;
- the four-issue newsletter pilot remains parked until the core site is built, then validates whether the approved newsletter promise is operationally sustainable before recurring public sends and final launch readiness.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only. It is not homepage copy or a tagline.

## Information architecture clarification

Founder review on 2026-09-08 identified that `Latest` and `Stories` were becoming conceptually redundant.

Current interpretation:

- **News** = current/day-to-day editorial content;
- **Features** = deeper editorial content;
- **Latest** = chronological view, not a content type;
- **Stories** = current technical route terminology, not the intended public product label.

Homepage v2 therefore removes `Latest` from primary header navigation and keeps `Features` as the reader-facing deeper-content link.

Do **not** create `/news`, delete/redirect `/stories`, or migrate schema/taxonomy during homepage visual work. Those remain for the later News/Feature architecture gate.

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

The migration is approved as direction but not yet implemented.

## Current content set

Published on the working branch:

- `src/content/stories/what-actually-makes-starting-a-business-hard.md`

Withdrawn to draft:

- `src/content/stories/build-things-that-make-the-next-thing-easier.md`;
- `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`;
- `src/content/stories/what-actually-changed.md`.

The published starting-business story remains the real Feature used for homepage visual QA.

## Homepage v2 authority

Canonical composition contract:

`research/homepage-redesign-v1.md`

Founder-approved Homepage v2 composition:

```text
COMPACT HEADER
smaller Portfilo wordmark
Business / Technology / Startup / AI
Features
no header Subscribe CTA
no primary Latest nav item

LIGHT-BLUE NEWSLETTER BAND
Get ahead in business and tech in 7 minutes.
approved support line
email + Send me the news
no hero image

FULL-WIDTH LATEST TICKER
static during Homepage v2 visual QA

FEATURED STORY
image first
headline directly below
no section eyebrow / no A CLOSER LOOK title

NEWS
plain News heading
lead current story + supporting current stories

BLACK FOOTER ENDCAP
compact newsletter signup
minimal institutional/legal links
```

Morning Brew and BackScoop screenshots supplied by the founder are composition references only. Do not copy their styling, brand identity, colors, or wording.

## Homepage v2 implementation state

Implemented on `build/portfilo-v0`:

- smaller header wordmark;
- removed header `Subscribe free`;
- removed header `Latest` link;
- retained presentation labels `Business / Technology / Startup / AI` on wider screens;
- retained `Features` header navigation;
- compact no-image light-blue newsletter band;
- homepage signup button label changed to `Send me the news` while preserving existing form behavior;
- full-width static Latest ticker with restrained Portfilo red label accent;
- mobile-safe horizontal ticker rail;
- Feature moved immediately below ticker;
- removed Feature eyebrow and `A CLOSER LOOK` title;
- Feature image followed directly by headline and short dek;
- removed Feature-paired newsletter card;
- News moved below Feature with one plain `News` heading;
- black footer newsletter endcap;
- site footer changed to near-black with light wordmark and minimal links;
- no hero image;
- no taxonomy/schema migration;
- no new routes;
- no ticker auto-motion yet.

Primary implementation files changed in Homepage v2:

- `src/pages/index.astro`;
- `src/components/SiteHeader.astro`;
- `src/components/NewsletterSignup.astro`;
- `src/components/SiteFooter.astro`;
- `research/homepage-redesign-v1.md`;
- `docs/DESIGN_DIRECTION.md`;
- `docs/PROJECT_STATE.md`.

## Newsletter copy and behavior

Approved acquisition copy:

```text
Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

Homepage v2 uses `Send me the news` as the signup action label.

Underlying newsletter behavior remains:

- email input;
- `/api/subscribe` Cloudflare Pages Function;
- beehiiv owns double opt-in, subscriber storage, delivery, unsubscribe, and deliverability;
- `reactivate_existing: true`;
- `send_welcome_email: false`;
- `double_opt_override: "on"`;
- existing confirmation success state remains `Check your inbox. Confirm your email to finish subscribing.`.

The coordinated public/email `Portfilo Brief` -> `Newsletter` migration remains deferred. Do not perform it piecemeal during homepage work.

## Motion state

Automatic Latest ticker movement is **not implemented yet by design**.

The founder approved the sequence:

1. correct Homepage v2 static hierarchy;
2. visually review desktop/mobile;
3. then add ticker movement immediately after static approval.

Planned ticker motion after approval:

- slow continuous horizontal movement;
- pause on hover/focus where applicable;
- touch-safe mobile behavior;
- stationary/manual `prefers-reduced-motion` fallback;
- CSS first;
- no obsolete `<marquee>`.

## Current implementation sequence

1. Homepage redesign/reference work — COMPLETE.
2. Newsletter acquisition copy — COMPLETE.
3. Homepage v1 static rebuild — COMPLETE / SUPERSEDED BY FOUNDER REVIEW.
4. Homepage v2 correction plan — FOUNDER APPROVED.
5. Homepage v2 static implementation — COMPLETE IN REPOSITORY.
6. **Local validation + desktop/mobile visual QA — ACTIVE NEXT GATE.**
7. Correct Homepage v2 visual issues found in QA.
8. Add Latest ticker motion after static approval.
9. News/Feature content architecture + taxonomy migration plan, separate approval, implementation, validation.
10. News/Feature reading surfaces, Latest archive if still justified, and Features archive/presentation.
11. Subscribe/Standards simplification and About retirement only if dependencies are safely resolved.
12. Coordinated `Portfilo Brief` -> `Newsletter` public/email naming migration.
13. Four-issue newsletter pilot.
14. Full QA, domain/release readiness, then intentional `main` release review.
15. Resume Social Visual System work.

## Exact next task

### Homepage v2 local validation + visual QA

No new design invention before seeing the actual implementation.

Required local commands:

```text
npm run check
npm run build
npm run dev
```

Then inspect at minimum:

- common desktop viewport, ideally around 1440×900;
- smaller desktop/laptop around 1366×768 if available;
- mobile viewport.

Review specifically:

- smaller header scale;
- light-blue newsletter band height and form balance;
- whether Feature image + headline appears early enough in the first viewport;
- full-width ticker behavior and mobile horizontal safety;
- Feature-before-News hierarchy;
- absence of decorative eyebrow spam;
- black footer endcap strength;
- no horizontal overflow;
- signup form usability.

After static Homepage v2 is founder-approved visually, the immediate next implementation is Latest ticker motion.

## Validation authority

Fresh local `npm run check` and `npm run build` have **not yet been run against Homepage v2**.

An attempt to clone the branch into the assistant container for validation failed because that runtime could not resolve `github.com`; therefore no validation claim is made from that attempt.

Do not infer a pass until the commands actually run successfully.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.