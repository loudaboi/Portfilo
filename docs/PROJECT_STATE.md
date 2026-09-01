# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Homepage Visual Design**

**The final homepage direction is implemented and approved in principle. Local production-build and browser QA remain required before this phase may be formally closed.**

Foundation, Content Architecture, Editorial Design, Wordmark Exploration & Lock, and the Portfilo public copy standard remain complete. The story surface remains frozen for v0 unless a concrete implementation problem is discovered.

The homepage visual-design candidate was implemented on `build/portfilo-v0` in commit `8c2dbb31e4f35050e2b43d313d9a22a247abddea`.

Subsequent homepage refinement work addressed reader-facing `v0` language, headline word-boundary problems, mobile evidence-panel spacing, public-copy quality, navigation clarity, the editorial subject direction, and brand-color balance.

The current final homepage positioning pass is implemented in commit `57f3fb45a756dab2bb38e156f2a2f82f7cd227a8`.

The connected GitHub environment exposes repository reads/writes and commit status, but this repository currently reports no CI/status checks for the homepage commits. Production build validation and browser-based responsive/interaction QA therefore remain required locally before this phase may be marked complete.

Do not proceed to Series pages, Research & Standards, About, Subscribe integration, analytics, deployment, editorial launch research, or another product surface until the homepage is locally validated.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Perform final local QA on the implemented **Portfilo v0 / Homepage Visual Design** and formally close the phase if validation passes.

The design direction itself is no longer open-ended. The remaining work is validation, not another redesign.

## Homepage final direction

Implemented and approved direction:

- the locked `Port / fi / lo` black/blue/red wordmark remains the masthead identity;
- the masthead page label uses the familiar interface term `Home` rather than invented navigation language;
- the positioning line `Practical intelligence for ambitious Filipinos` remains the primary homepage editorial statement;
- `for ambitious Filipinos.` is deliberately rendered as a separate blue line so the word boundary cannot visually collapse under aggressive headline tracking;
- reader-facing navigation/identity copy does not expose the internal `v0` project label;
- the layout uses the same 12-column wide-screen grid logic, gutters, rule system, and mobile collapse behavior as the frozen story page;
- one dominant editorial feature occupies the primary hierarchy;
- the dominant feature is paired with a dark typography-led evidence panel rather than a generic image/card placeholder;
- the evidence panel keeps the large `01` treatment on desktop but reduces and explicitly spaces it on small screens so it does not crowd the panel heading;
- the Latest + Selected area uses one larger secondary story and two compact text-led entries instead of identical cards;
- the institutional dark section keeps the asymmetric editorial-topic rail on the right;
- the visible homepage editorial territory is now `Business / Technology / Founders / Building / Capital`;
- homepage preview stories now test business, technology, founder, and building subject matter rather than salary/career/self-improvement framing;
- a Portfilo Brief newsletter CTA remains present as a clearly labeled preview only;
- no fake newsletter submission behavior was introduced before beehiiv integration;
- all homepage editorial headlines remain clearly identified as previews because real launch journalism has not been selected;
- one real footer link points to the existing published synthetic story-system fixture so the frozen story route remains directly testable from the homepage;
- no React, Vue, Svelte, Tailwind, UI kit, animation library, CMS, database, authentication, or new package dependency was added;
- the implementation remains Astro + custom CSS with no client-side JavaScript requirement.

The candidate intentionally uses typography and evidence-style composition as visual material. It does not add a speculative editorial-media framework.

## Editorial direction

The working editorial direction is now more focused than the original broad `work / money / skills / building / life` framing.

Portfilo should primarily help ambitious Filipinos understand:

- **Business** — companies, industries, business models, economics, strategy, and markets;
- **Technology** — software, AI, fintech, infrastructure, platforms, and emerging technology where Philippine relevance is concrete;
- **Founders** — reported profiles, decisions, failures, ownership, funding, and company-building without founder worship;
- **Building** — product, distribution, sales, pricing, hiring, operations, and the practical work of making companies/products;
- **Capital** — funding, investing, acquisitions, ownership, and market economics.

Career, salary, skills, and personal-work topics are not categorically banned, but they should be supporting subjects when they connect to the stronger business/technology/building mission rather than the publication's primary identity.

News is a **story format**, not Portfilo's identity. Portfilo may cover important business/technology/founder developments when it can add explanation, evidence, context, or decision value beyond the event itself. The homepage should therefore keep a broad `Latest` treatment rather than becoming a commodity breaking-news feed.

Portfilo Brief remains the planned email product and may become the faster channel for useful updates without forcing the website into a breaking-news operation.

### Important unresolved architecture alignment

The visible homepage direction now uses `Business / Technology / Founders / Building / Capital`, but the current Content Collection schema still has the older controlled topic taxonomy.

This mismatch must not be left implicit.

Do **not** silently change the schema as part of Homepage Visual Design. After homepage QA and formal closure, perform a dedicated **Editorial Taxonomy Alignment** task before building the Series page so the content model, documentation, fixtures, and public positioning agree.

## Portfilo public copy standard

`docs/COPY_STYLE.md` is now the canonical standard for public-facing site copy, and `AGENTS.md` requires contributors to follow it.

The style was derived from established web-usability, plain-language, and journalism guidance rather than copied from another publication's voice.

Core rules:

- clear before clever;
- smart without sounding academic;
- confident without hype;
- useful before self-descriptive;
- Filipino by concrete context, not costume;
- familiar interface language over invented brand terminology;
- avoid generic AI/product-copy patterns and internal project language;
- never strengthen uncertainty or factual claims for stronger copy.

The working principle is:

> **Make the useful thing clear. Keep the personality in the precision.**

## Brand-color rule

The final color hierarchy should be asymmetric rather than numerically balanced.

### Publication base

- warm paper `#f4f0e8` and near-black `#171614` carry most of the visual system.

### Blue

- signal blue `#0050a4` is the primary functional/editorial accent;
- evidence blue `#8fc7ff` is used on dark evidence fields;
- blue may carry evidence, structure, links, section markers, methodology, navigation/action cues, and other informational emphasis.

### Red

- correction/brand red `#b42318` is intentionally rarer;
- correction soft `#f6e7e3` remains the correction field color;
- on story/journalism surfaces, red remains reserved for corrections aside from the Portfilo wordmark;
- on institutional/non-story surfaces, red may appear as a sparse Portfilo signature accent so the brand does not visually collapse into black + blue;
- red should not be alternated mechanically with blue or used for generic links, evidence, data, or random headings.

The homepage now uses a restrained red structural marker in the institutional section and a red rule in the Portfilo Brief label while keeping the CTA/action language blue.

The intent is: **paper/black dominate, blue is the primary accent, red is rare but unmistakable.**

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

### Public copy style

- `docs/COPY_STYLE.md` created as the canonical public-copy standard;
- `AGENTS.md` requires contributors to follow it;
- homepage copy has been refined away from internal strategy/AI-shaped language;
- interface labels use familiar terms such as `Home` rather than invented section names.

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

- editorial taxonomy alignment to the new subject direction
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
| Public copy standard | PASS — `docs/COPY_STYLE.md` |
| Homepage information hierarchy/composition defined | PASS |
| Initial homepage implementation candidate | PASS — `8c2dbb31e4f35050e2b43d313d9a22a247abddea` |
| First user visual review | PASS — actionable feedback recorded |
| First homepage refinement | PASS — `dcef23d6abfcf7b821dfb17ed055fe6eee70dc0c` |
| Reader-facing `v0` labels removed | PASS |
| Masthead page label changed to `Home` | PASS |
| Hero word-boundary fix | PASS — blue phrase is a separate block line |
| Mobile evidence-panel spacing fix | IMPLEMENTED — requires final browser recheck |
| Homepage copy anti-slop refinement | PASS — direction approved |
| Homepage editorial direction | PASS — Business / Technology / Founders / Building / Capital approved in principle |
| Homepage preview stories aligned to new direction | PASS — `57f3fb45a756dab2bb38e156f2a2f82f7cd227a8` |
| Homepage red-signature treatment | PASS — restrained institutional use implemented |
| New frontend/package dependencies | NONE |
| Production build after final homepage pass | REQUIRED — local validation |
| Homepage desktop responsive review after final pass | REQUIRED — local browser QA |
| Homepage mobile responsive review after final pass | REQUIRED — local browser QA |
| Horizontal-overflow review | REQUIRED — local browser QA |
| Keyboard/skip-link/focus review | REQUIRED — local browser QA |
| Exact font loading review | REQUIRED — local browser/network QA |
| Existing published story route after homepage change | REQUIRED — local build/browser QA |
| Draft fixture remains excluded | REQUIRED — local production-build QA |
| Final rendered homepage approval after latest pass | REQUIRED — user browser review |
| Homepage Visual Design phase complete | NO — awaiting final technical/rendered QA |

## Exact next task

Perform **Homepage Final QA & Closure** on the current `build/portfilo-v0` branch after commit `57f3fb45a756dab2bb38e156f2a2f82f7cd227a8`.

Required local validation:

1. run `git pull`;
2. run `npm run build` and require a clean production build;
3. confirm `/` builds and renders;
4. confirm `/stories/portfilo-content-architecture-test` still builds and renders;
5. confirm the draft fixture does not generate a public story route;
6. inspect the homepage at a wide desktop viewport, an intermediate/tablet viewport, and narrow mobile viewports around 390px and 360px;
7. confirm the positioning statement has a deliberate two-line black/blue treatment with no collapsed word boundary;
8. confirm the mobile evidence panel has comfortable spacing around `01`;
9. review the new Business / Technology / Founders / Building / Capital eyebrow and institutional rail for wrapping/collision;
10. review the new business/technology/founder preview headlines for visual rhythm;
11. confirm the red institutional marker and Portfilo Brief red rule feel sparse and intentional rather than correction-like or decorative noise;
12. check for clipping, overlap, awkward headline wrapping, or horizontal overflow;
13. keyboard through the page and verify the skip link, wordmark home link, and story-fixture link show usable focus states;
14. verify Instrument Sans, Source Serif 4, and IBM Plex Mono actually load rather than silently falling back;
15. either approve the final rendered homepage or record a concrete defect.

If all checks pass, update this file to mark **Homepage Visual Design** complete.

The next task after homepage closure is **Editorial Taxonomy Alignment**: decide and implement the controlled content-topic model that supports the approved Business / Technology / Founders / Building / Capital direction, including schema, documentation, fixtures, and any affected labels. Only after that alignment should Series Page Visual Design & Implementation begin.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
