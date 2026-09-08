# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — STATIC HOMEPAGE FROZEN / NEWS + STORIES ARCHITECTURE APPROVED / VISUAL-SYSTEM PLANNING ACTIVE**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and technical v0 foundation remain in place.

The founder reported that the final static-homepage local validation and rendered review passed. The static homepage is frozen unless a later concrete regression is found.

The founder has now approved the News + Stories content architecture. The active next task is to plan the new News and Stories visual/system treatment before any schema, route, homepage-source, or header implementation.

No News/Stories runtime implementation, ticker motion, deployment, merge to `main`, or release has been authorized by this architecture approval alone.

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

Current branch includes the matched 5.8rem header/footer wordmark-size correction. `main` remains the release boundary. No merge to `main` without intentional release review.

## Approved product direction

- Brand: **Portfilo**.
- Product category: business and technology media product.
- Newsletter/email acquisition is a primary recurring-reader relationship.
- **News** is the current/day-to-day editorial layer.
- **Stories** is the public deeper-editorial layer.
- Header target after the News route exists: `Portfilo | News | Stories | Subscribe free`.
- `News` is a first-class browsing destination, not a homepage anchor.
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

The current static homepage composition is frozen. Do not reopen it during News/Stories work unless implementation exposes a concrete contradiction.

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

This remains intentional until `/news` exists. Do not change the label to `News` before the route is implemented.

## Approved News + Stories content architecture

The founder approved the following architecture contract.

### One collection, explicit section discriminator

Keep one Astro editorial collection rather than splitting News and Stories into duplicate technical collections.

Add an explicit field:

```yaml
section: news | stories
```

Keep `contentType` and `topic` as separate concepts:

- `section` = product destination / News-vs-Stories distinction;
- `contentType` = editorial form such as reported, explained, analysis, perspective;
- `topic` = subject classification.

### News

Target routes:

- `/news`
- `/news/[slug]`

Behavior:

- reverse chronological;
- current/day-to-day developments;
- no pagination or filters until real volume justifies them;
- no fabricated production inventory;
- factual empty state when no published News exists.

### Stories

Routes remain:

- `/stories`
- `/stories/[slug]`

Behavior:

- deeper reporting, explainers, analysis, perspectives, and other longer editorial work;
- preserve existing published `/stories/[slug]` URLs;
- reader-facing package remains headline + dek;
- metadata behavior remains `metaDescription ?? dek`.

### Homepage sourcing

Homepage Feature:

- Stories only;
- `featured: true` may only apply to Stories;
- fallback is newest published Story, never a News item.

Blue Stories rail:

- newest additional published Story;
- excludes the homepage Feature;
- never sources News.

Homepage News:

- published `section: news` items only;
- newest item becomes lead;
- subsequent items become supporting News;
- development fixtures remain development-only until real News inventory exists.

Latest-news ticker:

- News entries only;
- links to `/news/[slug]`;
- label remains `Latest news`;
- Stories do not enter the ticker merely because they are recent.

### Header

After `/news` exists, target header becomes:

`Portfilo | News | Stories | Subscribe free`

`News` links to `/news` and `Stories` links to `/stories`.

### Taxonomy migration

Target topic values:

`business / technology / startup / ai`

Migration rules:

- `startups` -> `startup`;
- `building` entries are audited individually instead of blindly remapped;
- remove legacy `building` and `startups` from the schema only after content migration is complete.

### Existing content migration

- existing genuine deeper editorial pieces default to `section: stories` unless there is a clear reason otherwise;
- the currently published `What actually makes starting a business hard?` remains a Story and keeps its `/stories/...` URL;
- drafts are not reclassified as News merely to populate `/news`;
- test/fixture content is handled explicitly and must not become accidental production inventory.

### Schema safeguards

Implementation should enforce:

- every editorial entry requires `section`;
- `featured: true` is legal only for `section: stories`;
- `series` and `seriesOrder` are legal only for `section: stories`;
- current publication-date, correction, and series-order validation remains intact.

### `/latest`

Do not implement `/latest` in the current pass. Revisit only when combined News + Stories volume makes a cross-stream archive useful.

### Pagination / filters

Do not add pagination, topic filters, or search in v0 without actual inventory pressure.

## Approved visual-system direction for the next planning task

News and Stories must adopt the **new Portfilo design system** rather than preserve or clone the older current `/stories` page styling.

The planning baseline is:

- Instrument Sans as the primary display/UI face;
- current Portfilo blue / ink / paper palette;
- current header/footer system;
- matched 5.8rem wordmarks;
- square geometry;
- restrained blue editorial rules;
- tighter homepage-derived spacing discipline;
- responsive behavior treated as first-class;
- no oversized experimental typography;
- no random mono-heavy design scaffolding;
- no generic rounded cards, gradients, glow, or SaaS visual language.

The page families may differ by job while clearly belonging to one publication:

- `/news` should be denser and more current-oriented;
- `/stories` can provide more breathing room for deeper editorial packages;
- `/news/[slug]` should support concise factual/current reading;
- `/stories/[slug]` should support longer-form reading.

The current old Stories archive/article presentation has no forward visual authority merely because it exists in runtime.

## Ticker motion

Ticker motion remains deferred until after News/Stories architecture implementation, so it can run on the real News stream rather than development fixtures.

Approved motion direction remains:

- fixed `Latest news` label;
- slow constant horizontal velocity for the headline rail;
- seamless loop;
- pause on hover/focus/manual interaction;
- manual horizontal scrolling retained;
- automatic movement disabled under `prefers-reduced-motion`;
- no marquee element, snapping, fades, parallax, or decorative entrance animation.

## Remaining site sequence

1. static homepage final validation / rendered QA — **FOUNDER-REPORTED PASS**;
2. static homepage freeze — **COMPLETE**;
3. News + Stories content architecture — **FOUNDER-APPROVED**;
4. **News + Stories visual/system planning — ACTIVE NEXT TASK**;
5. schema/routes/header/homepage-source implementation after separate approval and authorization;
6. ticker motion narrow pass;
7. rework `/subscribe`;
8. finish/refine Stories presentation as required by the approved editorial system;
9. rework `/standards`;
10. rework `/privacy`;
11. site-wide desktop/tablet/mobile/accessibility/runtime QA;
12. release-readiness review;
13. Social Visual System / distribution work after the core site is finished.

## Exact next task

### Plan the News + Stories visual/system treatment

Inspect the frozen homepage system, current `/stories` archive and article page, image system, design direction, relevant publication references already in repo, and any additional strong real editorial references needed under the anti-slop gate.

Produce a decision-complete plan for:

- `/news` archive composition;
- `/news/[slug]` article composition;
- `/stories` archive composition;
- `/stories/[slug]` article composition;
- shared editorial primitives across the four surfaces;
- typography roles;
- spacing/shell behavior;
- imagery treatment;
- metadata treatment;
- responsive behavior;
- empty/development states;
- what old runtime styling must be discarded rather than copied;
- implementation boundaries that preserve the frozen homepage.

Do **not** modify schema, routes, header labels, homepage sourcing, or editorial page runtime until the visual/system plan is approved and implementation is separately authorized.

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
