# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — NEWS + STORIES IMPLEMENTED / FRESH TECHNICAL + RENDERED QA PENDING**

The founder reported the final static-homepage validation and rendered review as passing before this phase. The static homepage remains frozen unless a concrete regression is found.

The founder approved the News + Stories content architecture, approved the News + Stories visual system, and then separately authorized the decision-complete runtime implementation scope. That implementation is now committed on `build/portfilo-v0` at:

`f1e4b634d3675f99cec8e121b442509e28874c08`

No fresh `npm run check`, `npm run build`, development rendered QA, or production-equivalent preview has yet been recorded against this implementation commit. No ticker motion, deployment, merge to `main`, or release has been authorized.

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

`main` remains the release boundary. No merge to `main` without intentional release review.

## Approved product direction

- Brand: **Portfilo**.
- Product: business and technology media product.
- **News** is the current/day-to-day editorial layer.
- **Stories** is the deeper editorial layer.
- Current header: `Portfilo | News | Stories | Subscribe free`.
- `News` is a first-class `/news` destination.
- Homepage ticker label remains **Latest news**.
- Public topic taxonomy: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0 and has no geographic product promise.
- Newsletter acquisition remains primary; approved public promise is latest news, a 7-minute read, three times per week.
- Exact newsletter send days/times remain open.
- `briefing` remains rejected as public acquisition language.
- Four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Frozen homepage contract

Do not reopen the composition during QA unless the implementation exposed a concrete defect.

Frozen visual system includes:

- shared 84rem / 1344px homepage shell;
- matched 5.8rem header/footer wordmarks;
- full Portfilo-blue newsletter hero;
- Instrument Sans homepage direction;
- square newsletter controls;
- static/manual full-bleed Latest-news ticker with black fixed label, light rail and blue metadata;
- approved 16:9 monochrome Feature image with 3px blue top rule and AI-image disclosure;
- Feature + blue Stories rail composition, stacking at 64rem / 1024px and below;
- homepage News one-lead-plus-supporting hierarchy;
- canonical 16:9 News lead imagery;
- development-only News fixtures and no fabricated production journalism;
- black footer endcap with `Stories | Standards | Privacy`.

News/Stories implementation was allowed to change homepage **data sourcing and links only**. Homepage layout, spacing, typography, newsletter copy, Feature/rail composition, and ticker visual treatment remain frozen.

## Implemented News + Stories architecture

### Collection model

The existing Astro editorial collection remains one collection and now requires:

```yaml
section: news | stories
```

`section`, `contentType`, and `topic` remain separate dimensions.

Current topic values are now:

`business / technology / startup / ai`

The optional shared editorial image metadata is now:

```yaml
image:
  src: /images/...
  alt: ...
  credit: ...        # optional
  generated: true    # optional, defaults false
```

Schema safeguards now enforce:

- `section` is required;
- published entries require `publishedAt`;
- `updatedAt` cannot precede `publishedAt`;
- `seriesOrder` requires `series`;
- News cannot be `featured`;
- News cannot define `series` or `seriesOrder`.

### Existing-content migration

Existing genuine editorial content was kept in `section: stories`.

The published Story `What actually makes starting a business hard?` remains at its existing `/stories/...` route. Its already-selected homepage Feature image is now represented through the shared image metadata and retains generated-image disclosure.

Legacy `building` topics were audited individually:

- `Build things that make the next thing easier` -> `technology`;
- `What actually changed?` -> `technology`;
- the synthetic series-ordering fixture using `building` -> `technology`.

The draft-filtering synthetic fixture was explicitly classified as a **draft News fixture** so development can verify `/news/[slug]` routing while production draft filtering remains testable. It does not create production News inventory.

### Routes and page families

Implemented:

- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`

`/news` is dense, chronological and sans-led. Production shows a factual empty state when no published News exists. Development uses the shared synthetic News fixtures when real published News inventory is absent.

`/stories` now uses the approved deeper-editorial archive treatment and no longer uses the old giant-number/experimental archive layout.

News articles use the compact Instrument Sans reading mode. Story articles use Instrument Sans display/dek and Source Serif 4 for sustained long-form body reading. Old sticky metadata rails, duplicated metadata blocks, numbered body-heading decoration, and report-like article scaffolding were removed from these routes.

Both article families support optional 16:9 editorial imagery, optional credits, generated-image disclosure, methodology/correction modules when present, and one post-article signup using the existing newsletter component and approved newsletter wording.

### Header and shared shell

The shared header now reads:

`Portfilo | News | Stories | Subscribe free`

`News` links to `/news` and receives the active-page state on News surfaces.

News and Stories pages use the same 84rem / 1344px outer publication shell and responsive gutter logic as the frozen homepage. The existing SiteFooter alignment rule now recognizes these editorial pages as well.

### Homepage data wiring

Homepage sourcing now follows the approved separation:

- Feature: published Stories only;
- blue rail: Stories only;
- homepage News: published News only;
- Latest-news ticker: News only, linking to `/news/[slug]`;
- development News fixtures are centralized and reused by homepage and `/news`;
- no production News is fabricated.

At the current inventory level there are **no published News entries**. Therefore production is expected to show the factual News empty state and no News-derived ticker items until real News is published. Development continues to expose clearly synthetic fixtures for layout QA.

## Approved News + Stories visual system

The implemented editorial surfaces inherit:

- 84rem / 1344px outer shell;
- Instrument Sans display/interface language;
- Source Serif 4 only for Stories long-form body reading;
- IBM Plex Mono only for genuine utility/code roles;
- Portfilo blue / ink / paper palette;
- square geometry and flat surfaces;
- restrained thin rules and 3px blue image-top rule;
- optional imagery with no fabricated production fallback;
- responsive-first single-column collapse on narrow screens;
- no generic card grid, rounded SaaS treatment, gradients, glow, giant index numbers, or decorative mono scaffolding.

The previous `/stories` archive/article visual implementation has no forward authority.

## Deferred items

Not included in the implementation commit:

- ticker motion;
- `/latest`;
- pagination;
- topic filters;
- search;
- CMS/database/framework changes;
- `/subscribe` redesign;
- `/standards` redesign;
- `/privacy` redesign;
- deployment;
- merge to `main`;
- release.

## Ticker motion

Ticker motion remains the next narrow product pass **only after the current News + Stories implementation passes fresh technical and rendered QA**.

Approved later behavior remains:

- fixed `Latest news` label;
- slow constant headline-rail velocity;
- seamless loop;
- pause on hover/focus/manual interaction;
- manual scrolling retained;
- no automatic movement under `prefers-reduced-motion`;
- no marquee element, snapping, fades, parallax or entrance animation.

## Remaining sequence

1. static homepage validation — **FOUNDER-REPORTED PASS**;
2. static homepage freeze — **COMPLETE**;
3. News + Stories content architecture — **FOUNDER-APPROVED**;
4. News + Stories visual/system plan — **FOUNDER-APPROVED**;
5. News + Stories implementation authorization — **FOUNDER-APPROVED**;
6. News + Stories runtime/schema implementation — **IMPLEMENTED**;
7. **fresh technical + rendered QA — ACTIVE NEXT TASK**;
8. ticker motion narrow pass after QA approval;
9. rework `/subscribe`;
10. rework `/standards`;
11. rework `/privacy`;
12. site-wide desktop/tablet/mobile/accessibility/runtime QA;
13. release-readiness review;
14. Social Visual System / distribution work after core site completion.

## Exact next task

### Validate and visually review the News + Stories implementation

Pull the current branch and run:

```text
npm run check
npm run build
npm run dev
```

Development QA must inspect at minimum:

- homepage at 1440, 1366, 1024, approximately 390, 375 and 320px to confirm the frozen composition did not regress;
- `/news` at desktop, tablet and mobile using the clearly labeled synthetic fixtures;
- `/news/portfilo-draft-filtering-test` in development to verify the compact News article template;
- `/stories` at desktop, tablet and mobile;
- `/stories/what-actually-makes-starting-a-business-hard` at desktop, tablet and mobile;
- keyboard focus and header active states;
- post-article newsletter units;
- generated-image disclosure and alt behavior;
- no horizontal page overflow.

Then run:

```text
npm run preview
```

Production-equivalent review must confirm:

- development News fixtures are absent;
- `/news` remains present with a factual empty state;
- draft News does not generate a production route;
- homepage News remains present with a factual empty state;
- the ticker does not fall back to Stories;
- Stories archive contains only published Stories;
- the existing published Story URL remains valid;
- no legacy `Building` or plural taxonomy value leaks through editorial metadata;
- no production-only layout regression appears.

If these checks pass, the next gate is founder approval of the implemented News + Stories system before ticker motion begins.

## Validation authority

Fresh validation against implementation commit `f1e4b634d3675f99cec8e121b442509e28874c08` has **not** yet been recorded as passing.

The prior homepage validation applies to the pre-implementation tree and does not constitute a pass for this changed tree.

## Deployment / release boundary

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` as the production branch. Deployment, domain finalization, public newsletter sending and merge to `main` remain separate explicit gates.
