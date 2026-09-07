# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — HOMEPAGE VISUAL CORRECTION PASS IMPLEMENTED / LOCAL VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder has reviewed multiple homepage passes. Rejected implementation choices have zero visual authority. The current working branch reflects the latest focused correction pass only.

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
- **Features** remains the deeper editorial layer internally/currently;
- intended eventual coverage taxonomy remains `Business / Technology / Startup / AI`, but those labels are **not homepage header navigation**;
- `Building` is removed from the intended public coverage set;
- `Startups` becomes singular `Startup` in the intended public coverage set;
- Portfilo has **no geographic product promise**;
- Portfilo remains free in v0;
- public newsletter acquisition promises **latest news**, a **7-minute** read, and delivery **three times per week**;
- exact send days/times remain open;
- `briefing` is rejected as public homepage/newsletter acquisition language;
- the four-issue newsletter pilot remains parked until the core site is built, then validates whether the newsletter promise is operationally sustainable before recurring public sends and final launch readiness.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only. It is not homepage copy or a tagline.

## Information architecture state

The earlier discussion about removing `Latest` / `Stories` from the header was exploratory, not a founder decision.

Current homepage header is approved to show:

`Latest | Stories`

Current behavior:

- `Latest` links to the homepage Latest/ticker area;
- `Stories` links to the existing `/stories` route;
- topic labels do not appear in the header;
- no Subscribe CTA appears in the header.

The deeper News / Features / Stories information architecture is still an open later task. Do **not** create `/news`, delete/redirect `/stories`, or migrate schema/taxonomy during homepage visual QA.

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

## Current homepage composition

Latest founder-approved correction direction:

```text
HEADER
Portfilo wordmark at the earlier/larger restrained scale
Latest | Stories
no topic/category labels
no header Subscribe CTA

WHITE / WARM-NEUTRAL NEWSLETTER AREA
Get ahead in business and tech in 7 minutes.
approved support line
email + Send me the news
no hero image

FULL-WIDTH LATEST STRIP
only the Latest label is near-black/ink
headline rail returns to the light page treatment
static during current visual QA

FEATURED AREA
left: full, uncropped Feature image + headline + short dek
right: newsletter signup card
no Feature eyebrow / no A CLOSER LOOK title

NEWS
plain News heading
lead current story + supporting current stories

BLACK FOOTER ENDCAP
compact newsletter signup
minimal institutional/legal links
```

Morning Brew and BackScoop screenshots supplied by the founder are **composition references only**. Transfer useful publication logic, not their branding, styling, colors, or copy.

## Latest visual review corrections

The founder explicitly corrected these implementation choices:

- removing `Latest | Stories` from the header was based on a question, not approval;
- topic labels must stay out of the header;
- the entire ticker must not be black: only the `Latest` label is ink/black while the headline rail remains light;
- the muted-blue hero/signup surface was rejected; return to the earlier white/warm-neutral treatment;
- the Feature image must not be aggressively cropped;
- the Feature + newsletter-card side-by-side composition remains desired.

Current runtime correction pass implements:

- restored `Latest | Stories` in the header;
- retained the earlier/larger wordmark scale and shared page alignment;
- removed all topic labels and header Subscribe CTA;
- restored the newsletter area to the warm near-white page treatment;
- restored the hero form to the normal white-input / blue-CTA treatment;
- made only the ticker `Latest` label near-black while the rest of the strip is light;
- preserved blue category accents in the ticker;
- removed the fixed-height `object-fit: cover` Feature crop;
- Feature image now renders at its natural aspect ratio with `height: auto` / `object-fit: contain`;
- retained the Feature + newsletter-card side-by-side desktop composition and mobile stacking;
- kept News below the Feature area;
- kept the black footer endcap;
- kept ticker movement deferred until static layout approval;
- performed no schema/taxonomy/route migration.

## Why the Feature image was cropped

The rejected pass set a fixed responsive height on `.featured-story__media` and used `object-fit: cover` on the image. That combination intentionally fills a shorter rectangle by cropping image edges. The current correction removes that behavior so the full approved Feature image composition is visible.

## Newsletter copy and behavior

Approved primary acquisition copy remains:

```text
Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

Homepage signup action label currently uses:

`Send me the news`

Underlying newsletter behavior remains:

- email input;
- `/api/subscribe` Cloudflare Pages Function;
- beehiiv owns double opt-in, subscriber storage, delivery, unsubscribe, and deliverability;
- `reactivate_existing: true`;
- `send_welcome_email: false`;
- `double_opt_override: "on"`;
- confirmation success state remains `Check your inbox. Confirm your email to finish subscribing.`.

### Feature-side newsletter card copy

The founder wants the restored side card to use a different, more contextual acquisition message, structurally similar to the role played by BackScoop's side card, with a working direction around:

`There's more to it than the headline.`

That wording is **NOT YET APPROVED AS FINAL COPY**.

The current card therefore uses the already-approved primary newsletter copy temporarily. Exact card headline/support copy remains an open copy gate after the corrected composition is visually reviewed.

The coordinated public/email `Portfilo Brief` -> `Newsletter` migration remains deferred.

## Motion state

Automatic Latest ticker movement is **not implemented yet by design**.

Current sequence:

1. correct static homepage composition;
2. visually review desktop/mobile;
3. approve/fix remaining static issues;
4. then add ticker movement.

Planned ticker motion after static approval:

- slow continuous horizontal movement;
- pause on hover/focus where applicable;
- touch-safe mobile behavior;
- stationary/manual `prefers-reduced-motion` fallback;
- CSS first;
- no obsolete `<marquee>`.

## Current implementation sequence

1. Homepage redesign/reference work — COMPLETE.
2. Newsletter primary acquisition copy — COMPLETE.
3. Earlier homepage static passes — SUPERSEDED WHERE REJECTED BY FOUNDER REVIEW.
4. Focused homepage visual correction pass — IMPLEMENTED IN REPOSITORY.
5. **Local validation + desktop/mobile visual QA — ACTIVE NEXT GATE.**
6. Approve or correct the current static composition.
7. Approve exact Feature-side newsletter card copy.
8. Add Latest ticker motion after static approval.
9. News/Feature/Stories content architecture + taxonomy migration plan, separate approval, implementation, validation.
10. Reading surfaces and archive presentation.
11. Subscribe/Standards simplification and About retirement only if dependencies are safely resolved.
12. Coordinated `Portfilo Brief` -> `Newsletter` public/email naming migration.
13. Four-issue newsletter pilot.
14. Full QA, domain/release readiness, then intentional `main` release review.
15. Resume Social Visual System work.

## Exact next task

### Corrected homepage local validation + visual QA

Required local commands:

```text
npm run check
npm run build
npm run dev
```

Then inspect at minimum:

- common desktop viewport around 1440×900;
- smaller desktop/laptop around 1366×768 if available;
- mobile viewport.

Review specifically:

- restored header scale and `Latest | Stories` navigation;
- absence of topic labels and header Subscribe CTA;
- white/warm-neutral newsletter area;
- black `Latest` label with light ticker rail;
- full uncropped Feature image;
- Feature + newsletter-card desktop pairing;
- News below Feature;
- black footer endcap;
- no horizontal overflow;
- signup form usability.

Do not treat the temporary Feature-card copy as final during this visual review.

## Validation authority

Fresh local `npm run check` and `npm run build` have **not yet been run against this correction pass**.

Do not infer a pass until the commands actually run successfully.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
