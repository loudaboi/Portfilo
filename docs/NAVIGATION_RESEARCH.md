# Portfilo Navigation Research & Reset

_Status: replacement implemented. Local build and visual QA pending._

_Last updated: 2026-09-02_

## Why this reset exists

The first global-navigation implementation failed visual QA because the masthead changed position, typography, and structure between public pages.

This was not a minor spacing issue. The repository contained two different header systems.

### Rejected variant A: Homepage / About / Subscribe

These pages used:

- a two-column header: `auto 1fr`;
- the wordmark on the left;
- a right-aligned navigation;
- Instrument Sans;
- sentence-case labels;
- a mobile layout with navigation below the wordmark.

### Rejected variant B: Standards / Story / Series

These pages used:

- the older three-column masthead: `3fr 6fr 3fr`;
- the wordmark on the left;
- centered navigation;
- a page/type label in the right column;
- IBM Plex Mono and uppercase navigation inherited from the former strapline role;
- a different mobile composition.

The result was visible movement between routes, different fonts, different header heights, and inconsistent active states.

## Research conclusion

Repeated global navigation should remain predictable in order, position, typography, and responsive behavior. Portfilo has only four useful global destinations in v0, so it does not need multiple masthead variants or a hidden menu.

Research references used for the reset:

- BackScoop: https://backscoop.com/
- Rest of World product/masthead work: https://restofworld.org/inside/rest-of-worlds-product-team-looks-back-at-2023/
- WCAG consistent navigation: https://www.w3.org/WAI/WCAG21/Understanding/consistent-navigation
- Nielsen Norman Group menu guidance: https://media.nngroup.com/media/articles/attachments/PDF_Menu-Design-Checklist.pdf

## Approved navigation contract

Primary navigation is exactly:

- `Latest` → `/#latest`
- `Standards` → `/standards`
- `About` → `/about`
- `Subscribe` → `/subscribe`

The Portfilo wordmark links to `/` and is the Home control.

Do not add a redundant `Home` text link.

Do not add topic links until real topic-index routes exist.

Do not add Series to global navigation while Series is represented only by fixtures.

## Implemented shared site chrome

### `src/components/SiteHeader.astro`

The header is now one reusable component used by Homepage, About, Subscribe, Standards, Story, and Series.

Contract:

- desktop: wordmark left, four links right;
- Instrument Sans for all global navigation;
- sentence case;
- stable link order;
- default links use ink;
- hover and current top-level destination use signal blue;
- current state uses a blue underline that does not alter layout;
- Subscribe is not permanently blue;
- Story and Series do not falsely mark a top-level destination current;
- no route-specific `Story`, `Series`, `Standards`, or other label is inserted into the global header.

At the mobile breakpoint the same component becomes:

- row 1: Portfilo wordmark;
- row 2: Latest / Standards / About / Subscribe;
- navigation remains visible;
- no hamburger menu;
- no route-specific page label in the masthead.

### `src/components/SiteFooter.astro`

The footer is also now shared across all six public routes.

It uses the same destination vocabulary and order as the header:

- Latest
- Standards
- About
- Subscribe

The wordmark links Home.

Legacy `Back to home` links were removed rather than adding a separate Home label to the navigation system.

## About-page fixes included in the same pass

The user identified two additional layout problems while reviewing the About page.

### Topic-card alignment

The five editorial topic containers were retained.

On desktop, the description area now reserves a consistent minimum height so:

- all five topic numbers align;
- all five topic names align;
- all five descriptions begin on the same baseline;
- longer descriptions may still end lower without changing the container composition.

That minimum description height is removed on narrower layouts where horizontal baseline alignment no longer provides value.

### Founder attribution

The previous `2fr 10fr` split placed `Founder` too far from `Louda Tuppal`.

The attribution now uses a bounded label column plus a controlled gap so the label and name read as one metadata pair rather than separate grid regions.

## Architecture result

The global header and footer are no longer duplicated inside each page template.

The two component files are the runtime source of truth for global site chrome:

- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

Page-specific navigation remains separate below the global header. For example, Standards keeps its `On this page` index, and Story/Series keep their editorial metadata.

## QA acceptance criteria

The reset is not closed until local browser QA confirms all of the following:

1. Moving between Homepage, About, Subscribe, Standards, Story, and Series at the same viewport does not visibly move the wordmark or navigation.
2. Header height and navigation baseline are consistent across routes.
3. Navigation font, size, weight, case, spacing, order, and color logic are identical everywhere.
4. Active/current state does not shift neighboring links.
5. `Latest` reaches the Homepage Latest section from every route.
6. The wordmark always returns Home.
7. Keyboard focus is visible.
8. 390px and 360px use the same mobile header geometry on every route.
9. No horizontal overflow appears at 360px.
10. Footer vocabulary is consistent across routes and no `Back to home` link remains.
11. About topic titles/descriptions align cleanly on desktop without flattening their containers.
12. `Founder` and `Louda Tuppal` read as a related metadata pair.

## Validation status

Repository-level implementation review confirms the reset changed only:

- the two new shared chrome components;
- Homepage;
- About;
- Subscribe;
- Standards;
- Story;
- Series.

No Content Collection schema, newsletter function, backend, or infrastructure configuration changed in this pass.

A production Astro build has **not** yet been validated in this phase. Browser/responsive QA has also not yet been completed.

## Next task

Run local production-build and visual QA before making any further navigation or layout changes.
