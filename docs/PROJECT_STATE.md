# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Homepage Visual Design**

**Homepage implementation candidate is complete and awaiting local QA + explicit visual approval.**

Foundation, Content Architecture, Editorial Design, and Wordmark Exploration & Lock remain complete. The story surface remains frozen for v0 unless a concrete implementation problem is discovered.

The homepage visual-design candidate was implemented on `build/portfilo-v0` in commit `8c2dbb31e4f35050e2b43d313d9a22a247abddea`.

The connected GitHub environment exposes repository reads/writes and commit status, but this repository currently reports no CI/status checks for the homepage commit. Production build validation and browser-based responsive/interaction QA therefore remain required locally before this phase may be marked complete.

Do not proceed to Series pages, Research & Standards, About, Subscribe integration, analytics, deployment, editorial launch research, or another product surface until the homepage candidate is locally validated and explicitly approved.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Validate and visually approve the implemented **Portfilo v0 / Homepage Visual Design** candidate.

The homepage now translates the frozen story-page visual language into an editorial index without turning the publication into a repeated card grid or SaaS-style landing page.

The next work is QA and approval, not expansion into another surface.

## Homepage visual-design candidate

Implemented direction:

- the locked `Port / fi / lo` black/blue/red wordmark remains the masthead identity;
- the positioning line `Practical intelligence for ambitious Filipinos` is promoted into the primary homepage editorial statement;
- the layout uses the same 12-column wide-screen grid logic, gutters, rule system, and mobile collapse behavior as the frozen story page;
- one dominant editorial feature occupies the primary hierarchy;
- the dominant feature is paired with a dark typography-led evidence panel rather than a generic image/card placeholder;
- the Latest + Selected area uses one larger secondary story and two compact text-led entries instead of identical cards;
- an institutional dark section states what Portfilo is for and carries the controlled v0 topic set;
- a Portfilo Brief newsletter CTA is present as a clearly labeled design fixture only;
- no fake newsletter submission behavior was introduced before beehiiv integration;
- all homepage editorial headlines are explicitly labeled synthetic design fixtures because real launch journalism has not been selected;
- one real footer link points to the existing published synthetic story-system fixture so the frozen story route remains directly testable from the homepage;
- no React, Vue, Svelte, Tailwind, UI kit, animation library, CMS, database, authentication, or new package dependency was added;
- the implementation remains Astro + custom CSS with no client-side JavaScript requirement.

The candidate intentionally uses typography and evidence-style composition as visual material. It does not add a speculative editorial-media framework.

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
| Homepage information hierarchy/composition defined | PASS |
| Homepage implementation candidate committed | PASS — `8c2dbb31e4f35050e2b43d313d9a22a247abddea` |
| New frontend/package dependencies | NONE |
| Production build after homepage implementation | REQUIRED — not available from connected GitHub environment |
| Homepage desktop responsive review | REQUIRED — local browser QA |
| Homepage mobile responsive review | REQUIRED — local browser QA |
| Horizontal-overflow review | REQUIRED — local browser QA |
| Keyboard/skip-link/focus review | REQUIRED — local browser QA |
| Exact font loading review | REQUIRED — local browser/network QA |
| Existing published story route after homepage change | REQUIRED — local build/browser QA |
| Draft fixture remains excluded | REQUIRED — local production-build QA |
| Homepage visual approval | PENDING |
| Homepage Visual Design phase complete | NO — awaiting validation + approval |

## Exact next task

Perform **Homepage Visual Design QA & Approval** on the current `build/portfilo-v0` branch.

Required local validation:

1. run `npm run build` and require a clean production build;
2. confirm `/` builds and renders;
3. confirm `/stories/portfilo-content-architecture-test` still builds and renders;
4. confirm the draft fixture does not generate a public story route;
5. inspect the homepage at a wide desktop viewport, an intermediate/tablet viewport, and narrow mobile viewports around 390px and 360px;
6. check for clipping, overlap, awkward headline wrapping, or horizontal overflow;
7. keyboard through the page and verify the skip link, wordmark home link, and story-fixture link show usable focus states;
8. verify Instrument Sans, Source Serif 4, and IBM Plex Mono actually load rather than silently falling back;
9. review the visual hierarchy: identity → dominant feature → Latest + Selected → institutional statement → newsletter CTA;
10. either explicitly approve the homepage candidate or record concrete visual changes required.

Only after those checks pass and the homepage is explicitly approved should this file mark **Homepage Visual Design** complete and name the next product-surface task.

Do not begin Series pages or another phase before that approval.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
