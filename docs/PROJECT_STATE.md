# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — NEWS/STORIES ARCHIVE UNIFICATION + SHARED ACQUISITION PLAN FOUNDER-APPROVED / IMPLEMENTATION AUTHORIZATION PENDING**

The homepage desktop alignment correction has now passed the founder's visual review, including the final hero-signup alignment to the same right-column geometry as the blue Feature rail.

Current working-branch runtime HEAD before this documentation sync:

`598c15bd6f4cb5dd2fec4b29836a0d60f18957dd` — `Align hero signup with editorial rail`

The founder has now approved the next design/system plan described below. That approval records the plan only. It does **not** authorize runtime implementation. The next session must verify current branch/HEAD, inspect the relevant authority/source, present the exact bounded implementation scope for the first implementation pass, and wait for explicit implementation approval before editing runtime code.

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
- Header: `Portfilo | News | Stories | Subscribe free`.
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

## Homepage current contract

The homepage remains the visual reference for the rest of the site. Do not reopen unrelated homepage decisions during later page work.

Current founder-approved desktop composition includes:

- shared 84rem / 1344px shell;
- matched 5.8rem header/footer wordmarks;
- Portfilo-blue newsletter hero;
- Instrument Sans homepage direction;
- square newsletter controls;
- hero desktop grid aligned to the same `52rem primary column + shared gap + right column` geometry used by Feature/News;
- hero signup fills that right column so its left and right edges match the blue Feature rail;
- full-bleed Latest-news ticker with fixed black `Latest news` label, light headline rail and blue metadata;
- automatic ticker movement at approximately 30 px/sec with linear transform motion when inventory is sufficient;
- ticker pauses on hover, focus and active manual interaction, retains manual horizontal scrolling, and disables automatic movement under `prefers-reduced-motion`;
- approved 16:9 monochrome Feature image with 3px blue top rule and AI-image disclosure;
- Feature + continuous blue Stories rail composition;
- Feature and homepage News share the same desktop editorial grid;
- homepage News remains one lead plus supporting items;
- development-only News fixtures remain synthetic and production never fabricates News;
- compact black footer endcap remains `Stories | Standards | Privacy`.

Founder-approved contextual Feature signup copy:

**Headline:** `There's more to it than the headline.`

**Support:** `Who made the move, what changed, and the details behind it.`

CTA remains `Subscribe`.

The dedicated site-wide responsive typography/sizing audit is intentionally deferred until the remaining page structures are stable.

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

### Routes

Implemented:

- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`

At the current inventory level there are no published News entries. Production therefore keeps the factual News empty state and no ticker until real News exists. Development uses clearly synthetic News fixtures for layout/motion QA.

DEV-only editorial imagery may use `/images/homepage-feature-16x9.png` in existing image-capable slots for visual QA. Production still renders imagery only from real editorial metadata.

## Founder-approved next design/system plan

### 1. One archive layout for News and Stories

The current `/stories` archive is the structural reference.

`/news` and `/stories` should use the same archive composition and responsive structure:

- same page-title treatment;
- same 84rem shell;
- same lead package grid;
- same 16:9 image treatment;
- same headline/dek placement;
- same metadata slot geometry;
- same supporting-row geometry;
- same spacing/dividers;
- same optional supporting-image slot;
- same breakpoint behavior.

Editorial metadata values may differ by section, but they occupy the same visual slots. News and Stories remain different editorial products, not different layout systems.

Prefer one narrow shared Astro archive implementation/component rather than maintaining two parallel CSS/layout systems. Do not introduce a component framework, design library, or dependency.

### 2. Replace archive blue-line signup with a full blue acquisition band

The current paper-background archive newsletter section with a 3px blue top rule is rejected for the next pass.

Both `/news` and `/stories` should instead use one shared Portfilo-blue acquisition band modeled on the homepage hero's structural logic:

- full-width blue background;
- inner 84rem shell;
- desktop grid aligned to the publication system;
- copy in the primary column;
- signup form in the right column;
- square controls;
- form fills its right column exactly;
- stacked one-column treatment on smaller widths;
- no card shell, rounded container, gradient, or decorative device.

Reuse the already-approved archive copy. No new copywriting is authorized or needed for this change.

### 3. One shared site-wide footer acquisition section

All substantive content pages should end with a newsletter acquisition section immediately before the compact `SiteFooter`, except `/subscribe`, which is already the dedicated acquisition destination and should not duplicate the same footer signup form.

The shared footer-acquisition section should preserve the existing dark/ink character and use the approved main newsletter promise. It should use the same 84rem shell and desktop grid geometry as the rest of the publication rather than an independent alignment system.

The homepage footer-newsletter area must be migrated to this same shared structure so its copy/form edges align to the homepage grid.

`SiteFooter` itself remains compact: wordmark, `Stories | Standards | Privacy`, copyright. Do not turn it into a large navigation/footer product.

### 4. Article pages are a separate design gate

The current `/news/[slug]` and `/stories/[slug]` layouts are considered weak and are **not** the final article direction.

Do not patch or freely redesign those article routes during the archive/footer implementation pass.

After archive unification and shared acquisition are implemented/QA'd, the next design job is to plan one improved shared article template for both News and Stories. It should share page geometry, metadata framework, hero placement, reading shell, notes/correction treatment, newsletter treatment, and footer alignment. Legitimate content-mode differences such as metadata fields and reading typography may remain, but separate page geometry should not.

The article-layout plan requires founder approval before implementation.

### 5. Remaining simple pages

After the article system is approved and implemented:

1. simplify `/subscribe` around the current Portfilo shell/grid/form system and remove stale `Portfilo Brief` / `No fixed schedule yet` presentation;
2. simplify `/standards` while preserving substantive standards content;
3. simplify `/privacy` while preserving factual/legal requirements;
4. keep all of these pages structurally restrained and within the same publication system.

### 6. Responsive audit comes after page structures are stable

Do not perform the deep site-wide responsive typography/sizing audit before the remaining page structures are finished.

Each page must still be basically responsive while it is built, but the dedicated cross-site audit happens afterward across at least:

`1440 / 1366 / 1024 / 768 / 390 / 375 / 320`

That audit will reconcile typography scale, tablet-to-mobile progression, gutters, spacing, image widths, form widths, metadata, line lengths, controls, breakpoints, and overflow across the whole site.

## Approved execution sequence

A. unify `/news` with the approved `/stories` archive layout;

B. replace both archive blue-line signup units with the shared full-blue grid acquisition band;

C. establish the shared site-wide footer acquisition section and migrate the homepage footer-newsletter area to the same grid alignment;

D. perform technical + rendered QA for those archive/footer changes;

E. plan one improved shared News/Stories article template and stop for founder approval;

F. after separate approval, implement the shared article template;

G. simplify `/subscribe`, then `/standards`, then `/privacy`;

H. run the dedicated site-wide responsive typography/layout audit;

I. run final site-wide QA and release-readiness review.

## Exact next task

### Prepare the bounded implementation scope for A–C and wait for implementation authorization

The next session must first:

1. verify `build/portfilo-v0` and current HEAD;
2. read `AGENTS.md`, this file, `docs/DOCUMENT_STATUS.md`, `docs/V0_SCOPE.md`, `skills/portfilo-anti-slop/SKILL.md`, `docs/DESIGN_DIRECTION.md`, and the relevant current source;
3. inspect `/stories`, `/news`, the homepage footer newsletter, `SiteFooter`, and `NewsletterSignup`;
4. define the smallest implementation scope that executes approved sequence items A–C without touching article layouts or unrelated pages;
5. state any concrete technical risks or missing decision that would block faithful implementation;
6. **wait for explicit founder implementation approval before editing runtime code**.

Do not create a new execution-plan file. This file owns the current sequence and next task.

## Deferred / not authorized in the next implementation pass

- article-layout redesign or implementation;
- `/subscribe` redesign;
- `/standards` redesign;
- `/privacy` redesign;
- deep site-wide responsive typography audit;
- `/latest`;
- pagination;
- topic filters;
- search;
- CMS/database/framework changes;
- new dependencies;
- fabricated production content;
- deployment;
- merge to `main`;
- release.

## Validation authority

The founder has visually accepted the latest desktop hero/signup alignment at the current runtime tree.

Fresh full `npm run check`, `npm run build`, complete multi-width rendered QA, and production-equivalent preview have not been recorded as a complete pass against the current branch state. Do not claim them as passed unless actually run and observed.

## Deployment / release boundary

Cloudflare Pages project remains `portfilo-app` with `build/portfilo-v0` as the production branch. Deployment, domain finalization, public newsletter sending and merge to `main` remain separate explicit gates.
