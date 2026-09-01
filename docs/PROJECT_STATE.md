# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Homepage Visual Design**

**Wordmark Exploration & Lock is complete.**

The Editorial Design phase remains complete and frozen. The provisional symbol-based identity is retired. Portfilo now uses the approved wordmark-first v0 identity on the story surface.

The user completed the required local validation pass and reported that the production build, fixture routing checks, desktop/mobile masthead review, and interaction checks are all good. These validation results are user-reported local results rather than independently executed in the connected repository environment.

No homepage code was changed while closing the wordmark phase.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Begin **Portfilo v0 / Homepage Visual Design** using the frozen editorial system and locked v0 wordmark.

The homepage should establish Portfilo as a contemporary editorial institution, not a generic news site, SaaS landing page, or card-heavy content grid.

Do not start series pages, newsletter integration, analytics, deployment, editorial launch research, or another product surface before the homepage design phase is complete enough for review.

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

## Wordmark phase validation

The user ran the required local validation and reported all checks good.

Recorded results:

- `npm run build` — **PASS, user-reported**;
- published synthetic story generated — **PASS, user-reported**;
- draft synthetic story excluded — **PASS, user-reported**;
- desktop masthead/wordmark review — **PASS, user-reported**;
- narrow mobile masthead/wordmark review — **PASS, user-reported**;
- no visible clipping/overlap/horizontal-overflow issue — **PASS, user-reported**;
- keyboard focus behavior remained acceptable — **PASS, user-reported**;
- final colored wordmark treatment visually approved — **PASS**.

This closes **Wordmark Exploration & Lock** for v0.

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

The story surface is frozen for v0 unless a concrete implementation problem is discovered:

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

### Brand / wordmark

- provisional symbol retired;
- wordmark-first identity locked;
- `Port / fi / lo` black/blue/red treatment locked for v0;
- no paid logo font or separate mark required;
- wordmark implementation locally validated by the user.

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

- homepage visual design implementation
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
| Editorial Design complete | PASS |
| Wordmark Exploration & Lock complete | PASS |
| Production build after wordmark integration | PASS — user-reported local validation |
| Published fixture generated | PASS — user-reported local validation |
| Draft fixture excluded | PASS — user-reported local validation |
| Desktop/mobile wordmark QA | PASS — user-reported local validation |
| Horizontal-overflow recheck | PASS — user-reported local validation |
| Keyboard/focus recheck | PASS — user-reported local validation |
| Final wordmark visual approval | PASS |
| Homepage implementation | NOT STARTED |

## Exact next task

Begin **Homepage Visual Design**.

Before implementation:

1. inspect the current `src/pages/index.astro` placeholder and the frozen story-page design;
2. use the existing v0 scope and design direction as constraints;
3. define the homepage editorial hierarchy around one dominant feature, selected/latest stories, Portfilo identity, and newsletter CTA;
4. avoid repeated generic cards, SaaS hero patterns, decorative AI aesthetics, and unnecessary libraries;
5. preserve the locked wordmark, typography, palette, grid logic, accessibility requirements, and zero-budget architecture;
6. implement only after the homepage direction is coherent enough to defend visually.

Editorial media/figure primitives should be added when the homepage or first real article creates a concrete requirement, not as speculative infrastructure.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
