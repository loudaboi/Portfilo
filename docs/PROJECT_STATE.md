# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Wordmark Exploration & Lock — approved and locked; local build/browser revalidation pending.**

The Editorial Design phase remains complete and frozen. The provisional symbol-based identity is retired. Portfilo now uses a wordmark-first v0 identity on the story surface.

The user has explicitly approved the current visual direction and asked to lock progress. Homepage design has not started.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Complete the local validation pass for the approved wordmark integration, then begin **Portfilo v0 / Homepage Visual Design**.

Do not start series pages, newsletter integration, analytics, deployment, editorial launch research, or another product surface before the wordmark validation pass is recorded.

## Locked v0 wordmark decision

Approved and locked for v0:

- Portfilo uses a **wordmark-first identity**.
- No standalone logo symbol is required for v0.
- The wordmark direction is a forward-leaning editorial sans with a slight streetwear influence.
- The live masthead wordmark is segmented as:
  - `Port` in near-black `#171614`
  - `fi` in signal blue `#0050a4`
  - `lo` in correction red `#b42318`
- The wordmark is implemented as styled live text rather than as a purchased-font logo asset or custom outlined vector artwork.
- Instrument Sans remains the typographic base for the current wordmark implementation and the wider editorial system.
- The color treatment is a deliberate brand exception; red still retains its correction role elsewhere in the editorial system.
- `Practical intelligence for ambitious Filipinos` remains the current positioning line and masthead strapline, but is **not permanently frozen** as the final long-term public tagline.
- No standalone `P`, `PF`, avatar mark, or favicon is locked for v0.

Do not reopen logo/symbol exploration during v0 unless a concrete production problem appears.

## Retired symbol note

The previously approved provisional v0 symbol is retired from active code use and remains repository history only.

The Pinterest-derived symbol:

- is no longer used in the story masthead;
- is no longer used as a favicon;
- has no active avatar role;
- should not be revived as a production identity without a new explicit brand decision.

## Implemented in the wordmark phase

- Removed the provisional symbol from the active story masthead.
- Removed the provisional mark/avatar SVG assets from the active branch.
- Removed the custom favicon link that referenced the retired symbol.
- Updated the story masthead to a wordmark-only treatment.
- Implemented the approved `Port / fi / lo` color treatment.
- Preserved the existing editorial typography, grid, evidence hierarchy, correction treatment, content schema, route generation, and fixtures.
- Added no framework, UI library, animation library, runtime script, or package dependency.
- Did **not** modify `src/pages/index.astro`; homepage design has not started.

## Editorial media / graphics readiness

Article visuals are in scope for v0.

The existing story surface already supports responsive inline images, SVGs, and video. The design direction explicitly allows original/relevant photography, documentary imagery, charts, diagrams, source-document details where legally appropriate, and typography-led compositions.

Before the first real visual-heavy article, add only the editorial media primitives actually needed, likely:

- `Figure` with image, caption, credit/source, and meaningful alt text;
- optional wider media/data treatment;
- chart / diagram styling;
- `DataPoint` where editorially justified;
- consistent asset naming/storage conventions;
- responsive image optimization.

Do not build a complex visualization framework in advance.

AI-generated imagery must not be presented as documentary evidence or imply facts that the reporting does not support.

## Zero-budget infrastructure posture

The v0 plan remains intentionally compatible with a near-zero operating budget.

Locked infrastructure direction:

- **Cloudflare Pages** for static hosting/deployment;
- **Cloudflare Web Analytics** for lightweight analytics;
- **beehiiv** for newsletter sending, subscriber management, deliverability, unsubscribe handling, and embedded signup;
- **GitHub** for source control;
- local Markdown + Astro Content Collections instead of a paid CMS;
- no database, authentication system, custom newsletter backend, or custom analytics backend.

Use free tiers while they remain sufficient for v0 validation. Do not introduce paid infrastructure merely for hypothetical future scale.

Business inbox hosting is not yet a v0 product requirement. If a branded inbound address is needed before paid mailbox hosting is justified, a free forwarding/routing approach may be used, subject to the domain/DNS setup available at that time.

The likely unavoidable cash cost for a public launch is the domain registration if a suitable domain is not already owned.

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
- polished editorial figure/data primitives

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch access | PASS |
| Canonical project/design guidance inspected | PASS |
| Explicit user approval to lock current wordmark direction | PASS |
| Previous symbol retired from active use | PASS |
| Homepage untouched during wordmark task | PASS |
| New package dependency | PASS — none added |
| New runtime JavaScript | PASS — none added |
| Content architecture changed | PASS — no schema/routing/content-model change |
| Wordmark-only masthead authored | PASS |
| Approved `Port / fi / lo` color treatment authored | PASS |
| Favicon reference to retired symbol removed | PASS |
| Provisional symbol assets removed from active branch | PASS |
| Zero-budget infrastructure direction recorded | PASS |
| Editorial media readiness recorded | PASS |
| Production build after wordmark integration | **PENDING — local validation required** |
| Responsive browser QA after wordmark integration | **PENDING** |
| Horizontal-overflow recheck after wordmark integration | **PENDING** |
| Final masthead visual check with exact webfont | **USER VISUALLY APPROVED; local responsive recheck still pending** |

## Exact next task

Validate the locked wordmark integration on `build/portfilo-v0`:

1. run `npm run build`;
2. confirm the published synthetic story is generated and the draft fixture is still excluded;
3. inspect the story masthead at desktop and narrow mobile widths with the exact fonts loaded;
4. confirm the wordmark introduces no horizontal overflow and preserves keyboard focus behavior;
5. record the validation result in this file.

If those checks pass, mark **Wordmark Exploration & Lock Complete** and begin **Portfilo v0 / Homepage Visual Design**.

Do not reopen branding during homepage design unless implementation exposes a concrete problem.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
