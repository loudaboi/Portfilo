# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — HOMEPAGE ALIGNMENT + DEV MEDIA + ARCHIVE SIGNUPS + TICKER MOTION IMPLEMENTED / FRESH TECHNICAL + RENDERED QA PENDING**

The founder previously approved the News + Stories content architecture, approved the News + Stories visual system, and separately authorized its runtime implementation.

During the first rendered review of that implementation, the founder identified a concrete homepage alignment defect and requested a bounded correction pass before judging News and Stories. The founder then explicitly authorized that correction pass, including ticker motion.

Current runtime correction commits on `build/portfilo-v0`:

- `6e19872d70575609542003a4813f1a93d1f79c1c` — homepage editorial alignment, DEV editorial imagery, archive signup units, contextual Feature copy, and ticker motion;
- `4ae88632629596738f627866b32f4b64dea4ea73` — keeps DEV editorial-image fallback presentation-only rather than changing the content schema;
- `1070c480dc013367ae9d646a395b30039e67a739` — fixes the DEV editorial-image fixture typing so optional image credit remains type-safe on article routes.

Fresh `npm run check`, `npm run build`, development rendered QA, and production-equivalent preview have **not** yet been recorded against the current correction tree.

No deployment, merge to `main`, or release is authorized.

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

## Homepage contract after the approved correction pass

The homepage composition remains frozen except for the founder-approved corrections listed here. Do not reopen unrelated layout, type, color, copy, or navigation decisions during QA.

Current system includes:

- shared 84rem / 1344px homepage shell;
- matched 5.8rem header/footer wordmarks;
- full Portfilo-blue newsletter hero;
- Instrument Sans homepage direction;
- square newsletter controls;
- stacked hero signup expands to the full shared-shell width at the stacked breakpoint so its left and right edges align with the editorial shell;
- full-bleed Latest-news ticker with fixed black `Latest news` label, light headline rail and blue metadata;
- automatic ticker movement at approximately 30 px/sec when there is enough inventory to form a meaningful loop;
- ticker pauses on hover, focus and active manual interaction, retains manual horizontal scrolling, and disables automatic movement under `prefers-reduced-motion`;
- ticker duplicate sequence is loop mechanics only and is hidden from accessibility semantics;
- insufficient ticker inventory remains static;
- approved 16:9 monochrome Feature image with 3px blue top rule and AI-image disclosure;
- Feature + blue Stories rail composition;
- Feature and homepage News now use the same desktop editorial grid: 52rem primary column, same right-column start and same gap;
- Feature and News both stack at 64rem / 1024px and below;
- homepage News remains one lead plus supporting items;
- development-only News fixtures remain clearly synthetic;
- production never fabricates News;
- black footer endcap remains `Stories | Standards | Privacy`.

Founder-approved contextual Feature signup copy is now:

**Headline:** `There's more to it than the headline.`

**Support:** `Who made the move, what changed, and the details behind it.`

CTA remains `Subscribe`.

## Implemented News + Stories architecture

### Collection model

The existing Astro editorial collection remains one collection and requires:

```yaml
section: news | stories
```

`section`, `contentType`, and `topic` remain separate dimensions.

Current topic values:

`business / technology / startup / ai`

Optional shared editorial image metadata:

```yaml
image:
  src: /images/...
  alt: ...
  credit: ...        # optional
  generated: true    # optional, defaults false
```

Schema safeguards enforce:

- `section` required;
- published entries require `publishedAt`;
- `updatedAt` cannot precede `publishedAt`;
- `seriesOrder` requires `series`;
- News cannot be `featured`;
- News cannot define `series` or `seriesOrder`.

### Existing-content migration

Existing genuine editorial content remains in `section: stories` unless explicitly classified otherwise.

The published Story `What actually makes starting a business hard?` remains at its existing `/stories/...` route and retains its selected 16:9 generated editorial image through real image metadata.

Legacy `building` topics were audited individually during the architecture implementation.

The draft-filtering synthetic fixture remains a development-only News route fixture and does not create production News inventory.

### Routes and page families

Implemented:

- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`

`/news` remains the denser chronological News surface. `/stories` remains the deeper editorial archive. News article body copy remains Instrument Sans; Story long-form body copy remains Source Serif 4.

The dedicated visual review of News and Stories is **not yet complete**. The founder explicitly deferred judgment until the homepage alignment/media correction could be reviewed first.

### Archive newsletter acquisition

One contextual signup unit now appears after the lead package and before the remaining archive on both editorial archive pages.

News archive copy:

- heading: `Get Portfilo news in your inbox.`
- support: `The latest news on companies, startups, products, markets, AI, and technology. Three times a week.`

Stories archive copy:

- heading: `Get Portfilo stories in your inbox.`
- support: `Deeper reporting, explainers, and analysis on business and technology.`

Both reuse the existing `NewsletterSignup` behavior, square controls, free/unsubscribe microcopy, validation and double-opt-in success state.

### Development editorial imagery

For visual QA only, the existing approved 16:9 asset is reused as a DEV fixture:

`/images/homepage-feature-16x9.png`

DEV fixture imagery is presentation-only and does not modify production story metadata or the content schema.

In development it fills existing image-capable slots when real metadata is absent:

- homepage News lead through shared synthetic News fixtures;
- `/news` lead;
- `/news/[slug]` hero;
- `/stories` lead;
- supporting Story image slots;
- `/stories/[slug]` hero.

The homepage Feature continues to use its real selected image metadata.

Supporting News rows remain text-only because no supporting-thumbnail slot was added.

Production still shows an image only when a real editorial entry contains image metadata. No generic production fallback image is allowed.

### Header and homepage sourcing

Header remains:

`Portfilo | News | Stories | Subscribe free`

Homepage sourcing remains:

- Feature: published Stories only;
- blue rail: Stories only;
- homepage News: published News only;
- Latest-news ticker: News only, linking to `/news/[slug]`;
- no Stories fallback into News/ticker.

At the current inventory level there are **no published News entries**. Production therefore retains the factual News empty state and no ticker until real News is published. Development uses clearly synthetic News fixtures for layout and motion QA.

## Deferred items

Not included in the current correction pass:

- `/latest`;
- pagination;
- topic filters;
- search;
- CMS/database/framework changes;
- `/subscribe` redesign;
- `/standards` redesign;
- `/privacy` redesign;
- dedicated News/Stories visual corrections beyond the approved DEV imagery and archive signup additions;
- deployment;
- merge to `main`;
- release.

## Remaining sequence

1. static homepage foundation — **FOUNDER-REPORTED PASS / PREVIOUSLY FROZEN**;
2. News + Stories architecture + visual system — **FOUNDER-APPROVED**;
3. News + Stories implementation — **IMPLEMENTED**;
4. homepage alignment + stacked-signup correction — **IMPLEMENTED / QA PENDING**;
5. DEV 16:9 editorial imagery across existing slots — **IMPLEMENTED / QA PENDING**;
6. contextual Feature support copy — **IMPLEMENTED / QA PENDING**;
7. News/Stories archive signup units — **IMPLEMENTED / QA PENDING**;
8. ticker motion — **IMPLEMENTED / QA PENDING**;
9. **fresh technical + rendered QA — ACTIVE NEXT TASK**;
10. founder homepage review of alignment, imagery and ticker motion;
11. founder News + Stories visual review, then a separate bounded correction plan if needed;
12. rework `/subscribe`;
13. rework `/standards`;
14. rework `/privacy`;
15. site-wide desktop/tablet/mobile/accessibility/runtime QA;
16. release-readiness review;
17. Social Visual System / distribution work after core site completion.

## Exact next task

### Validate and visually review the approved correction pass

Pull the current branch and run:

```text
npm run check
npm run build
npm run dev
```

Development QA must inspect at minimum:

### Homepage

- 1440px;
- 1366px;
- 1024px;
- approximately 390px;
- 375px;
- 320px.

Confirm:

- Feature and News lead image left/right edges align on desktop;
- supporting News begins on the same right-column edge as the blue Feature rail;
- Feature and News both stack at 1024px and below;
- stacked hero signup spans the shared shell rather than remaining width-capped;
- the homepage News placeholder is gone and the real 16:9 DEV fixture is visible;
- Feature contextual support says `Who made the move, what changed, and the details behind it.`;
- ticker moves smoothly at a restrained constant speed;
- fixed `Latest news` label does not move;
- hover/focus/manual interaction pauses movement;
- manual horizontal scrolling still works;
- reduced-motion mode leaves the ticker static;
- no horizontal page overflow appears.

### News and Stories

Inspect:

- `/news`;
- `/news/portfilo-draft-filtering-test`;
- `/stories`;
- `/stories/what-actually-makes-starting-a-business-hard`.

Confirm:

- the approved 16:9 DEV image appears in every existing image-capable slot when real metadata is absent;
- News supporting rows remain text-only;
- News archive signup appears between lead and archive stream;
- Stories archive signup appears between lead and archive stream;
- article hero DEV fixtures appear without altering real production metadata;
- keyboard focus, active navigation, newsletter forms and generated-image disclosure remain usable.

Then run:

```text
npm run preview
```

Production-equivalent review must confirm:

- synthetic News fixtures are absent;
- DEV-only fallback imagery is absent where no real image metadata exists;
- the real published Story image still renders through its real metadata;
- `/news` remains present with a factual empty state;
- draft News does not generate a production route;
- homepage News remains present with a factual empty state;
- ticker does not fall back to Stories;
- no fabricated production journalism appears;
- no legacy `Building` or plural taxonomy value leaks through editorial metadata;
- no production-only layout regression appears.

## Validation authority

Fresh validation against the current correction tree has **not** yet been recorded as passing.

The founder-reported earlier homepage validation applies to the pre-correction tree and does not constitute a pass for this changed tree.

## Deployment / release boundary

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` as the production branch. Deployment, domain finalization, public newsletter sending and merge to `main` remain separate explicit gates.
