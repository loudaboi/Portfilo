# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Brand Mark Exploration & Lock — approved and implemented; final local build/browser revalidation pending.**

The Editorial Design phase remains complete and frozen. The approved v0 brand-mark direction has now been converted into reusable SVG assets and wired into the existing story masthead without beginning homepage design.

The v0 mark is intentionally **provisional**. It is based on a user-supplied Pinterest reference and remains visually close enough to that reference that Portfilo should not describe it as a fully original or legally cleared identity. The user explicitly chose to accept that tradeoff for v0 rather than delay the product and intends to invest in a stronger custom identity later.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Finish validation of the approved provisional v0 brand integration, then begin **Homepage Visual Design** as a separate phase.

Do not start series pages, newsletter integration, analytics, deployment, editorial launch research, or another product surface before the brand integration revalidation is complete.

## Brand mark decision

Approved for v0:

- a compact forward-slanted two-part symbol that implies a `P`;
- near-black `#171614` as the default mark color on the warm paper field;
- reversed paper `#f4f0e8` mark on near-black for the avatar asset;
- signal blue `#0050a4` remains an optional brand application, not required for recognition;
- **Instrument Sans** remains the Portfilo wordmark type in the application;
- the story masthead uses `mark + Portfilo` rather than introducing a paid wordmark font;
- the standalone mark is suitable for compact/avatar use;
- the identity remains provisional until Portfilo commissions or develops a more defensible original mark.

### Provenance / risk note

The symbol direction was chosen after comparison with a user-provided Pinterest reference. Multiple attempts to move materially farther from that construction were rejected visually by the user. The approved v0 symbol therefore preserves much of the reference's broad construction.

This repository records that fact deliberately:

- the asset is a **working v0 identity**, not a claim of original authorship;
- no trademark or copyright clearance has been performed;
- the source/owner of the Pinterest reference is not verified;
- the mark should be reconsidered before substantial brand investment, trademark filing, merchandising, or other high-exposure commercial use.

## Implemented in the brand-mark phase

- Added reusable vector symbol asset at `public/brand/portfilo-mark.svg`.
- Added compact square avatar asset at `public/brand/portfilo-avatar.svg`.
- Kept the wordmark as live Instrument Sans text rather than embedding a commercial font in an SVG.
- Updated the existing story masthead to pair the approved symbol with the `Portfilo` wordmark.
- Added the mark as the SVG favicon on the current story surface.
- Preserved the existing desktop-centered and mobile-left-aligned masthead strapline behavior.
- Preserved the existing editorial typography, grid, evidence hierarchy, correction treatment, content schema, route generation, and fixtures.
- Added no framework, UI library, animation library, runtime script, or package dependency.
- Did **not** modify `src/pages/index.astro`; homepage design has not started.

## Completed before this phase

### Foundation and content architecture

- Astro 7.2.10 with TypeScript.
- Static output.
- One build-time `stories` Content Collection using local Markdown.
- Controlled content types and topics.
- Authorship, draft/published state, featured state, publish/update dates, optional series metadata, methodology metadata, and structured correction metadata.
- Published stories require `publishedAt`.
- `seriesOrder` is rejected unless `series` is present.
- `updatedAt` is rejected when earlier than `publishedAt`.
- Generic static story route at `/stories/[slug]`.
- Production route generation filters to `status: published`.
- Synthetic published and draft fixtures remain in place.

### Editorial design

The story surface was implemented and validated before the brand-mark phase. The following remain frozen for v0 unless a concrete implementation problem is discovered:

- Instrument Sans for wordmark, headline, interface, and editorial headings;
- Source Serif 4 for dek and long-form reading;
- IBM Plex Mono for metadata and technical/editorial labels;
- warm paper `#f4f0e8`;
- near-black ink `#171614`;
- muted text `#69655e`;
- signal blue `#0050a4`;
- evidence blue on dark fields `#8fc7ff`;
- correction red `#b42318`;
- correction soft field `#f6e7e3`;
- twelve-column wide-screen editorial grid;
- dedicated body measure around `42rem`;
- desktop metadata rail and single-path mobile reading layout;
- methodology as a high-contrast evidence module;
- corrections as a semantically separate red treatment;
- skip link and visible keyboard focus treatment.

Previous editorial-design validation confirmed production build success, published-route generation, draft-route exclusion, responsive/browser QA, no horizontal overflow at the required viewports, keyboard/focus behavior, exact selected webfont loading, and final signal-blue visual review.

## Technical decisions frozen for v0

- Astro + TypeScript
- build-time Content Collections
- local Markdown stories
- custom CSS
- minimal client-side JavaScript
- static deployment first
- Cloudflare Pages deployment
- Cloudflare Web Analytics
- beehiiv newsletter infrastructure
- GitHub source control

Do not add React, Vue, Svelte, server rendering, a database, authentication, or application-state infrastructure without a specific current requirement.

## Scope still not started

- homepage visual design
- series page implementation
- Research & Standards page
- About page
- Subscribe surface / beehiiv integration
- analytics
- deployment
- editorial launch research
- first real article

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch access | PASS |
| Canonical project/design guidance inspected | PASS |
| Explicit final user approval for v0 identity | PASS |
| Homepage untouched during brand task | PASS |
| New package dependency | PASS — none added |
| New runtime JavaScript | PASS — none added |
| Content architecture changed | PASS — no schema/routing/content-model change |
| Reusable mark SVG added | PASS |
| Reusable avatar SVG added | PASS |
| Story masthead integration authored | PASS |
| Existing Instrument Sans wordmark retained | PASS |
| Provisional-reference provenance recorded | PASS |
| Production build after brand integration | **PENDING — not run in the current tool environment** |
| Responsive browser QA after brand integration | **PENDING** |
| Horizontal-overflow recheck after brand integration | **PENDING** |
| Final masthead visual check with exact webfont | **PENDING** |

## Exact next task

Validate the approved brand integration on `build/portfilo-v0`:

1. run `npm run build`;
2. confirm the published synthetic story is generated and the draft fixture is still excluded;
3. inspect the story masthead at desktop and narrow mobile widths with the exact fonts loaded;
4. confirm the new mark/wordmark lockup introduces no horizontal overflow and preserves keyboard focus behavior;
5. if those checks pass, update this file to mark **Brand Mark Exploration & Lock Complete**, commit the validation note if needed, and begin **Portfilo v0 / Homepage Visual Design**.

Do not begin homepage implementation before this validation pass.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
