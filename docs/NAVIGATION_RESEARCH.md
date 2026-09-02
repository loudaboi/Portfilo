# Portfilo Navigation Research & Reset

_Status: research complete. Current navigation implementation rejected pending replacement._

_Last updated: 2026-09-02_

## Why this reset exists

The first global-navigation implementation failed visual QA because the masthead changes position, typography, and structure between public pages.

This is not a minor spacing issue. The repository currently contains two different header systems.

## Repository diagnosis

### Variant A: Homepage / About / Subscribe

These pages use:

- a two-column header: `auto 1fr`;
- the wordmark on the left;
- a right-aligned `site-nav`;
- Instrument Sans for nav links;
- nav text at `0.76rem`;
- sentence-case labels;
- mobile behavior that changes the entire header to one column and places the nav underneath the wordmark.

### Variant B: Standards / Story / Series

These pages use:

- the older three-column masthead: `3fr 6fr 3fr`;
- the wordmark on the left;
- a centered nav in the middle column;
- a page/type label in the right column;
- the nav reusing the old `site-header__strapline` class;
- IBM Plex Mono at `0.68rem`, uppercase, because the nav inherits the strapline typography;
- a different mobile composition: wordmark and page label stay on the first row while the nav becomes a second row.

This explains the user-visible failures directly:

- the navigation moves horizontally between pages;
- the header height and first-row composition change;
- the navigation font changes;
- the active/current treatment feels like a different design;
- some pages preserve a right-side page label while others do not.

## Structural cause

`src/` currently contains `pages/` and content configuration, but no shared `components/` or `layouts/` directory.

The header is therefore duplicated inside page templates instead of being rendered from one shared `SiteHeader` component.

This conflicts with the design direction, which already identified `SiteHeader` as an expected v0 primitive.

The replacement should fix the architecture, not just make six copies look similar again.

## External research

### BackScoop

BackScoop remains the closest editorial/product reference for Portfilo's current scale.

Its current public information architecture is compact. The product emphasizes stories and the newsletter rather than exposing a large site taxonomy in the primary experience. Current public navigation/content groupings remain simple, with reader-facing labels such as `Startup News`, `Scoop of Success`, `Ice Breakers`, `Full archive`, `Newsletter`, and `Events`.

Lesson for Portfilo:

> A young publication does not need a complicated masthead to prove that it is a publication.

Portfilo currently has only four useful global destinations. They should remain visible and stable.

Reference:

- https://backscoop.com/

### Rest of World

Rest of World's product team has publicly documented its masthead work.

For its homepage, it gave prominence to the most-visited links such as About, Latest, and Newsletters. It uses a broader menu for regions, sections, and beats because its catalog is large enough to justify that complexity. It also intentionally simplified article mastheads while retaining orientation.

The useful lesson is not to copy its exact header. It is to separate global navigation from deeper taxonomy and to make each masthead variation intentional.

Portfilo v0 does not yet have enough public taxonomy or archive depth to justify multiple masthead variants or a hidden global menu.

References:

- https://restofworld.org/inside/rest-of-worlds-product-team-looks-back-at-2023/
- https://restofworld.org/inside/product-updates-narration-plugin-recirculation-experiments/

### W3C / WCAG

WCAG 2.2 guidance on consistent navigation says repeated navigation should occur in the same relative order across a set of pages. The purpose is predictability and the ability to use spatial memory to find repeated controls.

Portfilo should exceed the minimum by keeping not only link order but also visual position, typography, spacing, and breakpoint behavior consistent across every v0 surface.

References:

- https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation
- https://www.w3.org/WAI/WCAG22/Understanding/predictable

### Nielsen Norman Group

NN/g's menu guidance recommends visible primary navigation on larger screens, familiar and concise labels, standardized terminology, and a clear current-location cue. Its research also finds that hidden navigation is used less than visible or partially visible navigation.

With only four short links, Portfilo does not currently need a hamburger menu.

References:

- https://media.nngroup.com/media/articles/attachments/PDF_Menu-Design-Checklist.pdf
- https://www.nngroup.com/articles/hamburger-menus/

## Recommended Portfilo navigation contract

### 1. One component

Create one shared `SiteHeader.astro`.

Every public surface uses the same component. No page may define its own global-nav typography, spacing, order, breakpoint, or active-state CSS.

A shared stylesheet or component-scoped stylesheet becomes the only source of header styling.

### 2. One information architecture

Use exactly:

- `Latest`
- `Standards`
- `About`
- `Subscribe`

The Portfilo wordmark links Home.

Do not add topic links until topic index pages actually exist.

Do not add Series until real public series warrant a global destination.

Do not add a separate `Home` text link.

### 3. One desktop geometry

Recommended desktop composition:

`Portfilo` on the left and the four navigation links on the right.

Do not center the navigation on some pages.

Do not reserve a third column for page labels.

Do not let the active item change the width or position of surrounding items.

The global header should have one stable height and one stable baseline across Homepage, About, Subscribe, Standards, Story, and Series.

### 4. One navigation typeface

Use **Instrument Sans** for global navigation.

Reason: the canonical design direction assigns the primary sans to interface/editorial UI and mono to data, timestamps, sources, and technical labels. Navigation is interface, not metadata.

Do not use IBM Plex Mono for global navigation.

Recommended direction:

- sentence case;
- approximately `0.82rem` to `0.875rem` after visual testing;
- regular or medium weight;
- no tracking-heavy uppercase treatment.

The wordmark remains its own expressive treatment.

### 5. One state system

Default links should look the same.

Recommended state hierarchy:

- default: ink;
- hover/focus: blue plus visible focus treatment where applicable;
- current top-level destination: blue underline or rule that does not affect layout;
- no font-weight jump on current state;
- no movement when a state changes.

For the reset, do not permanently color `Subscribe` differently from every other link. A persistent blue Subscribe plus blue active links makes action emphasis and current-location semantics compete with each other. Conversion emphasis can be reconsidered later with a stable base system.

On Story and Series pages, no top-level item needs to be falsely marked current. The page heading and story/series metadata provide local orientation.

### 6. One mobile geometry

Keep navigation visible.

Recommended mobile structure:

- row 1: Portfilo wordmark;
- row 2: Latest / Standards / About / Subscribe;
- same order and typography on every page;
- no page label inserted into row 1;
- no hamburger for four short links;
- no wrapping at target v0 widths if it can be avoided;
- tune gaps and type size so 360px remains stable.

A breakpoint may legitimately change desktop to mobile geometry, but the same geometry must be used by every page at that breakpoint.

### 7. Page-specific navigation is separate

Standards may keep its `On this page` navigation because that is local navigation within Standards.

Story metadata, Series metadata, and section indexes remain page-specific UI below the global header.

Do not mix page-specific labels into the global masthead.

## Proposed QA acceptance criteria

The replacement navigation is not approved until all of the following are true:

1. Header position does not visibly jump when moving between Homepage, About, Subscribe, Standards, Story, and Series at the same viewport width.
2. Wordmark position and apparent size are identical across those pages.
3. Nav uses the same font, size, weight, case, color logic, spacing, and order everywhere.
4. Desktop uses the same header geometry everywhere.
5. 390px and 360px use the same mobile geometry everywhere.
6. Active/current state does not shift neighboring links.
7. Keyboard focus is visible.
8. `Latest` works from every route.
9. No horizontal overflow at 360px.
10. No page-specific header CSS duplicates the global navigation rules.

## Recommendation

Reject the current navigation implementation as a prototype.

Do not iterate separately on six headers.

The next implementation should first create a single shared `SiteHeader` primitive and then replace every copied header with it in one controlled pass.

This is both a UX fix and a code-architecture fix.
