# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — HOMEPAGE VISUAL CORRECTION PASS IMPLEMENTED / LOCAL VALIDATION + VISUAL QA PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority is still: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder reviewed Homepage v2 on 2026-09-08 and rejected several implementation choices from that pass. Those rejected choices have zero visual authority. A focused correction pass now replaces them.

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
- intended reader-facing coverage labels remain `Business / Technology / Startup / AI` for the eventual taxonomy, but **those labels are not approved as homepage header navigation/presentation**;
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

Current interpretation:

- **News** = current/day-to-day editorial content;
- **Features** = deeper editorial content;
- **Latest** = chronological view/ticker concept, not a content type;
- **Stories** = current technical route terminology, not the intended public product label.

Homepage header currently keeps only `Features` as the explicit editorial navigation link.

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

## Current homepage composition

Founder-approved correction direction as of the latest 2026-09-08 review:

```text
HEADER
Portfilo wordmark at the earlier/larger restrained scale
Features
no topic/category labels in the header
no header Subscribe CTA

MUTED-BLUE NEWSLETTER BAND
Get ahead in business and tech in 7 minutes.
approved support line
email + Send me the news
white CTA
no hero image

FULL-WIDTH BLACK LATEST TICKER
static during current visual QA

FEATURED AREA
left: Feature image + headline + short dek
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

The founder explicitly rejected these Homepage v2 choices:

- undersized wordmark/header proportions;
- topic labels `Business / Technology / Startup / AI` in the header;
- the resulting header/content alignment drift;
- Portfilo red as the Latest ticker treatment;
- the overly pale hero newsletter background;
- removing the Feature-paired newsletter card.

Current correction pass implements:

- restored the earlier header padding/wordmark scale;
- removed all topic labels from the header;
- retained only `Features` in primary header navigation;
- retained no header Subscribe CTA;
- changed the newsletter band to the Portfilo light/muted blue `#8fc7ff`;
- changed the hero signup CTA surface to white;
- changed the entire Latest ticker to near-black/ink with light text and blue category accents;
- restored the Feature + newsletter-card side-by-side composition on desktop;
- preserved Feature image -> headline -> short dek hierarchy;
- restored shared page gutters for the Feature area instead of the over-indented centered 78rem treatment;
- preserved mobile stacking and horizontal ticker safety;
- kept the black footer endcap;
- kept ticker movement deferred until static layout approval;
- performed no schema/taxonomy/route migration.

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

The founder wants the restored card to use a **different, more contextual acquisition message**, structurally similar to the role played by BackScoop's side card, with the working idea:

`There's more to it than the headline.`

That wording is **NOT YET APPROVED AS FINAL COPY**.

The correction pass therefore restores the card layout using the already-approved primary newsletter copy temporarily rather than inventing a new public claim during implementation.

Exact card headline/support copy is an open copy gate after the corrected composition is visible.

The coordinated public/email `Portfilo Brief` -> `Newsletter` migration remains deferred. Do not perform it piecemeal during homepage work.

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
3. Homepage v1 static rebuild — SUPERSEDED.
4. Homepage v2 correction plan — SUPERSEDED BY FOUNDER VISUAL REVIEW.
5. Focused homepage visual correction pass — IMPLEMENTED IN REPOSITORY.
6. **Local validation + desktop/mobile visual QA — ACTIVE NEXT GATE.**
7. Approve or correct the current static composition.
8. Approve exact Feature-side newsletter card copy.
9. Add Latest ticker motion after static approval.
10. News/Feature content architecture + taxonomy migration plan, separate approval, implementation, validation.
11. News/Feature reading surfaces, Latest archive if still justified, and Features archive/presentation.
12. Subscribe/Standards simplification and About retirement only if dependencies are safely resolved.
13. Coordinated `Portfilo Brief` -> `Newsletter` public/email naming migration.
14. Four-issue newsletter pilot.
15. Full QA, domain/release readiness, then intentional `main` release review.
16. Resume Social Visual System work.

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

- restored header scale and alignment;
- absence of topic labels in the header;
- muted-blue newsletter band and white CTA;
- full-width black ticker;
- Feature + newsletter-card desktop pairing;
- Feature-first hierarchy with no eyebrow spam;
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
