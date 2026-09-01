# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Wordmark Exploration & Lock — approved and implemented; final local build/browser revalidation pending.**

The Editorial Design phase remains complete and frozen. The previously implemented provisional symbol-based identity has been retired from active use after review. Portfilo now uses a wordmark-first v0 identity on the story surface, and homepage design has still not started.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Finish validation of the approved wordmark integration, then begin **Homepage Visual Design** as a separate phase.

Do not start series pages, newsletter integration, analytics, deployment, editorial launch research, or another product surface before the wordmark integration revalidation is complete.

## Wordmark decision

Approved for v0:

- Portfilo uses a **wordmark-first identity** for v0.
- The approved direction is a forward-leaning editorial sans with a slight streetwear influence.
- The live masthead wordmark is segmented as:
  - `Port` in near-black `#171614`
  - `fi` in signal blue `#0050a4`
  - `lo` in correction red `#b42318`
- The wordmark is currently implemented as styled live text rather than as a purchased-font logo asset or a custom outlined vector wordmark.
- Instrument Sans remains the typographic base in the application and for the current masthead implementation.
- The color treatment is a deliberate brand exception; red still remains the correction color elsewhere in the editorial system.
- `Practical intelligence for ambitious Filipinos` remains the current masthead strapline and positioning line, but it is **not yet frozen** as an immutable long-term tagline.
- No standalone `P`, `PF`, avatar mark, or favicon is locked for v0.

### Practical implication

This means the current Portfilo identity is intentionally lightweight:

- strong wordmark first;
- no separate symbol required;
- no paid logo-font dependency introduced;
- room to commission a more bespoke identity later if desired.

## Retired symbol note

The previously approved provisional v0 symbol has now been retired from active code use.

It remains part of repository history only.

What changed:

- the Pinterest-derived symbol is no longer used in the story masthead;
- the symbol and avatar SVG assets were removed from the active branch;
- the symbol is no longer used as the favicon;
- the active v0 identity is now the wordmark only.

## Implemented in the wordmark phase

- Removed the provisional symbol from the active story masthead.
- Removed the provisional `public/brand/portfilo-mark.svg` asset from active use.
- Removed the provisional `public/brand/portfilo-avatar.svg` asset from active use.
- Removed the custom favicon link that referenced the retired symbol.
- Updated the story masthead to a wordmark-only treatment.
- Implemented the approved segmented color treatment directly in the wordmark.
- Kept the existing editorial typography, grid, evidence hierarchy, correction treatment, content schema, route generation, and fixtures.
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

The story surface was implemented and validated before the branding phases. The following remain frozen for v0 unless a concrete implementation problem is discovered:

- Instrument Sans for wordmark base, headline, interface, and editorial headings;
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
| Explicit final user approval for wordmark direction | PASS |
| Previous symbol retired from active use | PASS |
| Homepage untouched during wordmark task | PASS |
| New package dependency | PASS — none added |
| New runtime JavaScript | PASS — none added |
| Content architecture changed | PASS — no schema/routing/content-model change |
| Wordmark-only masthead authored | PASS |
| Approved `Port / fi / lo` color treatment authored | PASS |
| Favicon reference to retired symbol removed | PASS |
| Provisional symbol assets removed from active branch | PASS |
| Production build after wordmark integration | **PENDING — not run in the current tool environment** |
| Responsive browser QA after wordmark integration | **PENDING** |
| Horizontal-overflow recheck after wordmark integration | **PENDING** |
| Final masthead visual check with exact webfont | **PENDING** |

## Exact next task

Validate the approved wordmark integration on `build/portfilo-v0`:

1. run `npm run build`;
2. confirm the published synthetic story is generated and the draft fixture is still excluded;
3. inspect the story masthead at desktop and narrow mobile widths with the exact fonts loaded;
4. confirm the new wordmark introduces no horizontal overflow and preserves keyboard focus behavior;
5. decide after QA whether the blue/red segmented wordmark feels correct in-context or whether the same form should also be tested in one color;
6. if those checks pass, update this file to mark **Wordmark Exploration & Lock Complete**, commit the validation note if needed, and begin **Portfilo v0 / Homepage Visual Design**.

Do not begin homepage implementation before this validation pass.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
