# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — STATIC HOMEPAGE FROZEN / NEWS + STORIES ARCHITECTURE + VISUAL SYSTEM APPROVED / IMPLEMENTATION AUTHORIZATION PENDING**

The founder reported the final static-homepage local validation and rendered review as passing. The static homepage is frozen unless a later concrete regression is found.

The founder has approved both the News + Stories content architecture and the News + Stories visual/system plan. The next gate is a separate explicit authorization for runtime/schema implementation. No runtime implementation, ticker motion, deployment, merge to `main`, or release is authorized by the visual-system approval alone.

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
- Header target after `/news` exists: `Portfilo | News | Stories | Subscribe free`.
- `News` is a first-class destination, not a homepage anchor.
- Homepage ticker label remains **Latest news**.
- Target public topics: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0 and has no geographic product promise.
- Newsletter acquisition remains primary; approved public promise is latest news, a 7-minute read, three times per week.
- Exact send days/times remain open.
- `briefing` remains rejected as public acquisition language.
- Four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Frozen homepage contract

Do not reopen during News/Stories implementation unless implementation exposes a concrete contradiction.

Frozen system includes:

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

Current runtime header still says `Portfilo | Latest | Stories | Subscribe free` until `/news` is implemented.

## Approved News + Stories content architecture

### Collection model

Keep one Astro editorial collection and add:

```yaml
section: news | stories
```

Keep `contentType` and `topic` separate:

- `section` = product destination;
- `contentType` = editorial form;
- `topic` = subject classification.

### Routes

News:

- `/news`
- `/news/[slug]`

Stories:

- `/stories`
- `/stories/[slug]`

Existing published Story URLs remain stable.

### Homepage sourcing

- Feature: Stories only; fallback newest published Story.
- `featured: true`: Stories only.
- Blue Stories rail: newest additional Story, excluding Feature.
- Homepage News: published News only, newest lead then supporting items.
- Latest-news ticker: News only and links to `/news/[slug]`.

### Taxonomy

Target topic values:

`business / technology / startup / ai`

Migration:

- `startups` -> `startup`;
- audit `building` entries individually;
- remove legacy values only after content migration.

### Schema safeguards

Implementation must enforce:

- `section` required;
- `featured: true` only for Stories;
- `series` and `seriesOrder` only for Stories;
- current published-date, correction and series-order validation retained.

### Deferred

Do not add `/latest`, pagination, topic filters, search, CMS, database, or new framework in this pass.

## Approved News + Stories visual system

All four editorial surfaces inherit the new Portfilo design language. The old current `/stories` archive/article styling has no forward visual authority.

### Shared system

Use:

- 84rem / 1344px outer publication shell with the same responsive gutter logic as the frozen homepage;
- Instrument Sans for navigation, page titles, archive/article headlines, deks, controls, section headings and News body copy;
- Source Serif 4 for sustained Stories long-form body reading and substantial quotations where useful;
- IBM Plex Mono only for genuine utility/data/timestamp roles;
- Portfilo blue / ink / paper palette;
- square geometry and flat surfaces;
- restrained thin rules, including 2–3px blue editorial-image top rules where appropriate;
- responsive-first composition with no horizontal overflow;
- no oversized experimental typography, giant numbered archive rows, mono-heavy decorative scaffolding, generic rounded cards, gradients, glow or SaaS visual language.

### `/news`

Dense, current-oriented, chronological.

- restrained page title;
- newest News item is lead;
- optional 16:9 lead image only when an approved image exists;
- no manufactured placeholder when no image exists;
- remaining items are text-first chronological rows;
- listing metadata is topic + publication date/time;
- each row presents headline + dek;
- no numbered rows and no equal-card grid.

### `/stories`

More breathing room for deeper editorial packages.

- lead Story receives the strongest hierarchy;
- optional approved 16:9 lead/supporting imagery;
- supporting Story package includes content type + topic + date, headline, dek and author where useful;
- archive must still work without imagery;
- no equal three-column card grid, giant index numbers or zig-zag novelty layout.

### `/news/[slug]`

Compact digital-news reading mode.

Order:

1. topic + publication date/time;
2. headline;
3. dek;
4. author / update information;
5. optional approved 16:9 media;
6. article body;
7. methodology/correction only when present;
8. one post-article newsletter acquisition unit;
9. footer.

News body uses Instrument Sans, approximately 18–19px with a restrained digital reading line-height. Remove old sticky metadata rails, duplicated metadata blocks, decorative story rules, numbered body headings by default and oversized report-like scaffolding.

### `/stories/[slug]`

Long-form reading mode.

Order:

1. content type + topic;
2. headline;
3. dek;
4. author + publish/update metadata;
5. optional approved 16:9 hero;
6. long-form body;
7. methodology/correction when present;
8. one post-article newsletter acquisition unit;
9. footer.

Headline/dek remain Instrument Sans. Long-form body uses Source Serif 4 at approximately 18.5–20px with roughly 1.65–1.75 line height and an effective reading width around 40–44rem. Section headings remain Instrument Sans.

### Editorial imagery

- canonical primary image ratio remains 16:9;
- images are optional, never required to fill layout space;
- no generic production fallback image;
- approved generated imagery remains editorial illustration and must disclose generated status;
- real image credit/attribution remains visible when required;
- article-body imagery may use another ratio when the editorial job requires it.

Add the minimum optional shared image metadata during implementation:

```yaml
image:
  src: /images/...
  alt: ...
  credit: ...        # optional
  generated: true    # optional, default false
```

Rules:

- no `image` means no image;
- if `image` exists, `src` and `alt` are required;
- `credit` only when needed;
- `generated: true` triggers the standardized generated-editorial-image disclosure.

Do not add galleries, focal-point systems, multiple hero variants, image databases or CMS-style media infrastructure in v0.

### Newsletter treatment on article pages

Use one post-article acquisition unit before the footer. Reuse existing signup behavior and already-approved newsletter claims/copy. Use the current square-control system. Do not invent new public copy during this implementation pass.

### Responsive behavior

Desktop may use compact editorial grids. Tablet simplifies those grids. Mobile becomes one editorial column with metadata -> headline -> dek -> image when applicable. Preserve readable line lengths, natural metadata wrapping, 16:9 imagery, usable controls and no horizontal page overflow.

### Empty/development behavior

- `/news` production with no News uses a restrained factual empty state.
- Development fixtures may test News density but must remain clearly synthetic and excluded from production.
- `/stories` uses eligible real Story inventory and requires no artificial minimum count.
- Draft/test entries may support development QA but remain excluded from production according to publishing rules.

## Ticker motion

Deferred until after the News/Stories runtime architecture exists.

Approved later motion direction:

- fixed `Latest news` label;
- slow constant headline-rail velocity;
- seamless loop;
- pause on hover/focus/manual interaction;
- manual scrolling retained;
- no automatic motion under `prefers-reduced-motion`;
- no marquee element, snapping, fades, parallax or entrance animation.

## Remaining sequence

1. static homepage validation — **FOUNDER-REPORTED PASS**;
2. static homepage freeze — **COMPLETE**;
3. News + Stories content architecture — **FOUNDER-APPROVED**;
4. News + Stories visual/system plan — **FOUNDER-APPROVED**;
5. **News + Stories implementation authorization — ACTIVE NEXT GATE**;
6. schema/routes/header/homepage-source + editorial-page implementation after explicit authorization;
7. fresh technical/rendered QA;
8. ticker motion narrow pass;
9. rework `/subscribe`;
10. rework `/standards`;
11. rework `/privacy`;
12. site-wide desktop/tablet/mobile/accessibility/runtime QA;
13. release-readiness review;
14. Social Visual System / distribution work after core site completion.

## Exact next task

### Present the decision-complete News + Stories implementation scope and await explicit founder authorization

The implementation scope must remain faithful to the approved architecture and visual contract. It may include only the minimum schema/content migration, shared editorial primitives, `/news` and `/stories` routes, header change, homepage data wiring, image metadata support and production-safe development states required to execute the approved system.

Do not implement until the founder separately authorizes this implementation scope.

## Validation authority

The founder reported the final static-homepage `npm run check`, `npm run build`, development rendered review and production-equivalent preview as passing before this phase.

This is user-reported local validation. The remote session did not independently execute those local commands.

Any News/Stories implementation requires fresh validation against the changed tree.

## Deployment / release boundary

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` as the production branch. Deployment, domain finalization, public newsletter sending and merge to `main` remain separate explicit gates.
