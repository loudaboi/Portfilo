# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — STATIC HOMEPAGE FROZEN / NEWS + STORIES ARCHITECTURE DECISION ACTIVE**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and technical v0 foundation remain in place.

The founder reported that the final static-homepage local validation and rendered review passed and explicitly instructed the project to proceed. The static homepage is therefore treated as frozen unless a later concrete regression is found.

The next substantive product task is to settle the smallest clean **News + Stories content architecture** before any route/schema implementation.

No News/Stories schema migration, `/news` implementation, ticker motion, deployment, merge to `main`, or release has been authorized by this phase change alone.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

`docs/PROJECT_STATE.md` owns the current phase and exact next task.

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

Current known branch state includes the matched header/footer wordmark-size correction. `main` remains the release boundary. No merge to `main` without intentional release review.

## Approved product direction

- Brand: **Portfilo**.
- Product category: business and technology media product.
- Newsletter/email acquisition is a primary recurring-reader relationship.
- **News** is the current/day-to-day editorial layer.
- **Stories** is the public deeper-editorial layer.
- Header target after the News route exists: `Portfilo | News | Stories | Subscribe free`.
- `News` must be a first-class browsing destination, not merely a homepage anchor.
- The homepage ticker remains labeled **Latest news**.
- Intended public coverage taxonomy: `Business / Technology / Startup / AI`.
- Portfilo has no geographic product promise.
- Portfilo remains free in v0.
- Public newsletter acquisition promises latest news, a 7-minute read, and delivery three times per week.
- Exact send days/times remain open.
- `briefing` remains rejected as public acquisition language.
- The four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Static homepage freeze

The current static homepage composition is frozen. Do not reopen it during News/Stories architecture work unless implementation exposes a concrete contradiction.

Frozen system includes:

- shared 84rem / 1344px homepage shell;
- matched 5.8rem header/footer Portfilo wordmark size across viewports;
- full Portfilo-blue newsletter hero;
- Instrument Sans homepage direction;
- square newsletter controls;
- compact full-bleed Latest-news ticker with black fixed label area, light rail, and blue category metadata;
- approved 16:9 monochrome Feature image with 3px blue top rule and AI-image disclosure;
- Feature + blue Stories rail composition, stacking at 64rem / 1024px and below;
- rail order: signup -> divider -> Stories -> teaser -> `Read more stories →`;
- News homepage hierarchy: one lead plus supporting items;
- canonical 16:9 News lead imagery;
- development-only News fixture policy;
- production rule against fabricated journalism;
- black footer endcap with `Stories | Standards | Privacy`.

Current runtime header still says:

`Portfilo | Latest | Stories | Subscribe free`

This remains intentional until `/news` actually exists. Do not change the label to `News` before the route is implemented.

## Current content architecture

Current `src/content.config.ts` has one `stories` collection using:

- `title`;
- `dek`;
- optional `metaDescription`;
- `contentType`;
- `topic`;
- `author`;
- publish/update dates;
- draft/published state;
- `featured`;
- optional series relationship;
- optional methodology;
- optional correction metadata.

Current topics still permit:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

Current reader-facing story package remains `headline + dek`; metadata defaults to `metaDescription ?? dek` under `docs/EDITORIAL_PACKAGING_STANDARD.md`.

## News + Stories architecture gate

The architecture decision must settle, before runtime implementation:

1. the smallest clean News-vs-Stories distinction in the content model;
2. whether to keep one collection with an explicit discriminator or split into separate collections;
3. `/news` archive behavior;
4. `/news/[slug]` article routing;
5. `/stories` archive inclusion rules;
6. `/stories/[slug]` route preservation for deeper Stories;
7. homepage Feature sourcing rules;
8. homepage Stories-rail sourcing rules;
9. homepage News sourcing rules;
10. Latest-news ticker sourcing/linking rules;
11. target taxonomy migration from legacy `startups / building`;
12. treatment of existing published/draft/test content during migration;
13. whether `/latest` should be implemented in this pass or remain a later low-volume archive task;
14. v0 pagination/filtering requirements;
15. the minimum shared article primitives needed without redesigning every editorial page at once.

Architecture approval does not itself authorize implementation. Runtime/schema changes require a separate implementation gate.

## Ticker motion

Ticker motion remains deferred until after the News/Stories content architecture is implemented, so motion can operate on the real News stream rather than development fixtures.

Approved motion direction remains:

- fixed `Latest news` label;
- slow constant horizontal velocity for the headline rail;
- seamless loop;
- pause on hover/focus/manual interaction;
- manual horizontal scrolling retained;
- automatic movement disabled under `prefers-reduced-motion`;
- no marquee element, snapping, fades, parallax, or decorative entrance animation.

## Remaining site sequence

Current intended sequence:

1. static homepage final validation / rendered QA — **FOUNDER-REPORTED PASS**;
2. static homepage freeze — **COMPLETE**;
3. **News + Stories architecture decision — ACTIVE NEXT TASK**;
4. News + Stories schema/routes/homepage wiring implementation after separate approval;
5. ticker motion narrow pass;
6. rework `/subscribe`;
7. rework `/stories` presentation as needed after architecture implementation;
8. rework `/standards`;
9. rework `/privacy`;
10. site-wide desktop/tablet/mobile/accessibility/runtime QA;
11. release-readiness review;
12. Social Visual System / distribution work after the core site is finished.

## Exact next task

### Decide the News + Stories content architecture

Inspect the current schema, existing content, routing, V0 scope, editorial packaging rules, and prior product-model research.

Produce a narrow architecture recommendation covering:

- data model;
- routes;
- homepage/ticker sourcing;
- taxonomy migration;
- existing-content migration;
- `/latest` decision;
- pagination/filtering decision;
- implementation boundaries and risks.

Do **not** modify runtime/schema/routes until the founder approves the architecture and separately authorizes implementation.

## Validation authority

The founder reported the final static-homepage `npm run check`, `npm run build`, development rendered review, and production-equivalent preview as passing before instructing the project to proceed.

This is a user-reported local validation result. The remote session did not independently execute those local commands.

Any later News/Stories runtime implementation will require fresh validation against the changed tree.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
