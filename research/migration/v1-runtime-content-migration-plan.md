# Portfilo v1 Runtime + Content Migration Plan

_Last updated: 2026-09-14_

## Status

**FOUNDER-APPROVED / CURRENT MIGRATION PLAN**

This plan translates the approved v1 product, Obsidian Precision direction, and concrete design system into a targeted migration from the inherited v0 publication runtime.

Founder approval authorizes Phase 0 + Phase 1 foundation implementation only, subject to the boundaries in this plan.

Canonical inputs:

- `docs/V1_SCOPE.md`
- `docs/V1_DESIGN_DIRECTION.md`
- `docs/V1_DESIGN_SYSTEM.md`

## Migration principle

Do not "clean the repo" before replacements exist.

Classify each inherited surface as:

- **KEEP** — behavior remains useful with little/no change;
- **ADAPT** — preserve underlying behavior/data but change its contract/presentation;
- **REPLACE** — old implementation conflicts with v1 and should be rebuilt;
- **RETIRE** — remove after no active code/content depends on it;
- **DEFER** — intentionally unresolved until a real requirement or asset exists.

---

# 1. Current runtime inventory

## Current public routes

Inherited v0:

- `/`
- `/news`
- `/news/[slug]`
- `/why`
- `/why/[slug]`
- `/hustle`
- `/hustle/[slug]`
- `/privacy`
- `/confirmed`
- `/404`
- `/robots.txt`
- `/api/subscribe`

Legacy redirects:

- `/subscribe -> /#newsletter`
- `/about -> /`
- `/stories -> /why`
- `/stories/* -> /why/:splat`

## Current components

- `SiteHead.astro`
- `SiteHeader.astro`
- `SiteFooter.astro`
- `FooterAcquisition.astro`
- `NewsletterSignup.astro`
- `EditorialArchive.astro`
- `EditorialArticle.astro`

There is no shared layout directory.

## Current content

One collection:

`articles`

Current schema:

`section: news | why | hustle`

Current active inventory:

- 9 News entries;
- 3 published Why entries:
  - BYD Philippines;
  - TikTok commerce Philippines;
  - digital-bank savings rates Philippines;
- no current Hustle entries.

Current editorial media include BYD, TikTok, Kita, and one additional editorial image asset.

## Current dependencies

Runtime:

- Astro 7
- `@astrojs/sitemap`

Development:

- `@astrojs/check`
- TypeScript

No current motion dependency.

## Current infrastructure

Useful inherited systems:

- Cloudflare Pages;
- static-first Astro build;
- sitemap generation when `SITE_URL` exists;
- `robots.txt`;
- security headers;
- Astro `ClientRouter`;
- beehiiv subscription Pages Function;
- double-opt-in confirmation route;
- newsletter anti-spam honeypot and client validation.

---

# 2. Target v1 route surface

## Primary routes

Create/keep:

- `/`
- `/work`
- `/work/[slug]`
- `/services`
- `/hustle`
- `/hustle/[slug]`
- `/journal`
- `/journal/[slug]`
- `/contact`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`
- `/robots.txt`
- `/api/subscribe`

Possible later endpoint:

- `/api/contact` — **DEFER** until a real contact-delivery provider/contract is selected.

## Primary navigation

`Work / Services / Hustle / Journal / Contact`

`/privacy` remains a footer/institutional route.

Newsletter remains embedded.

---

# 3. Route migration decisions

## Homepage `/`

**REPLACE**

The current homepage is tightly coupled to:

- top newsletter acquisition;
- Latest News ticker;
- featured Why/Hustle story;
- News lead/supporting grid;
- publication-era blue/paper visual system.

Do not incrementally restyle it.

Build a new v1 homepage from the approved IA:

`Hero -> Selected Work -> Services -> Hustle -> Journal -> Newsletter -> Contact -> Footer`

The current homepage file should remain until the v1 homepage can replace it in one controlled change.

## `/why` and `/why/[slug]`

**REPLACE + REDIRECT**

Create:

- `/journal`
- `/journal/[slug]`

Migrate the three existing published Why entries to `section: journal`.

Permanent redirects after the Journal routes exist:

- `/why -> /journal 301`
- `/why/* -> /journal/:splat 301`
- `/stories -> /journal 301`
- `/stories/* -> /journal/:splat 301`

This preserves existing article slugs.

## `/hustle` and `/hustle/[slug]`

**REPLACE PRESENTATION / KEEP ROUTE**

The public route names already match v1.

Rebuild the archive and article presentation around the approved Hustle-specific system.

Do not manufacture placeholder subjects.

The existing content model can remain empty until the first real Hustle piece is ready.

## `/news`

**RETIRE AS A PUBLIC PRODUCT**

Remove the News archive and all homepage/nav dependencies.

### Recommended legacy bridge for `/news/[slug]`

For the first v1 release, **KEEP ONLY AS LEGACY ROUTES**:

- preserve the nine existing News files;
- keep `/news/[slug]` renderable;
- remove News from navigation and homepage;
- add `noindex, follow` to legacy News pages;
- exclude `/news/*` from the sitemap;
- render them through the new neutral article shell rather than preserving the v0 design.

Reason:

- avoids breaking existing links immediately;
- avoids bad article-to-archive redirects;
- keeps News retired as a product;
- costs only one legacy route and the existing files.

After one v1 release cycle, assess whether any legacy News URL deserves a specific redirect. Otherwise remove the legacy route/files from active runtime and leave them in Git history.

`/news` itself should redirect permanently to `/journal` once v1 launches.

This bridge is intentionally temporary and should be documented as such.

## `/standards`

**RETIRE**

The public Standards page is not part of v1.

Preserve the useful research, verification, corrections, and editorial-integrity rules internally in canonical repo documentation. Do not maintain a public institutional page for them.

Remove `/standards` from the footer and route surface during v1 migration.

## `/privacy`

**ADAPT / KEEP**

Keep current newsletter/Cloudflare/beehiiv disclosures where still accurate.

Update after v1 implementation to reflect:

- font delivery changes;
- any contact-form provider or endpoint;
- any new client-side services introduced.

## `/confirmed`

**ADAPT / KEEP**

Required by the current beehiiv double-opt-in flow.

Restyle and update copy to v1.

## `/404`

**ADAPT / KEEP**

Restyle only.

## `/robots.txt`

**KEEP / SMALL ADAPTATION**

Keep current implementation.

If legacy News routes remain for the first release, sitemap filtering rather than robots blocking should exclude them.

---

# 4. Component decisions

## `SiteHead.astro`

**ADAPT**

Keep:

- canonical handling;
- social metadata;
- Article structured data;
- Organization/WebSite structured data;
- sitemap link;
- Astro `ClientRouter`.

Change:

- theme color to Obsidian;
- v1 default descriptions when copy is approved;
- social fallback asset before release;
- lifecycle hooks needed for GSAP page transitions;
- article metadata to support Journal/Hustle/legacy News routes without v0 assumptions.

Do not add complex Work structured data at foundation level unless there is a concrete SEO need.

## `SiteHeader.astro`

**REPLACE**

Build the approved:

- monochrome wordmark;
- desktop Work / Services / Hustle / Journal / Contact nav;
- mobile `MENU` overlay;
- scroll-state transition;
- accessibility and reduced-motion behavior.

Do not preserve v0 News/Why navigation code.

## `SiteFooter.astro`

**REPLACE**

Decouple newsletter acquisition from the footer stack.

V1 footer should handle:

- wordmark;
- primary/institutional links;
- Privacy;
- copyright/contact detail as approved.

Newsletter remains a separate explicit homepage/editorial module.

## `FooterAcquisition.astro`

**RETIRE**

Its coupling to the publication footer model is no longer useful.

Remove only after all pages stop importing it through `SiteFooter`.

## `NewsletterSignup.astro`

**ADAPT**

Preserve:

- form semantics;
- honeypot;
- validation;
- loading/error/success states;
- `/api/subscribe` contract;
- Astro page-load rebinding where needed.

Replace:

- v0 default copy;
- old variants/styles;
- blue/paper presentation.

Prefer one composable neutral form rather than multiple publication-era variants.

Public newsletter promise/cadence stays a separate copy/product decision.

## `EditorialArchive.astro`

**RETIRE AFTER REPLACEMENT**

A single News/Why/Hustle archive system conflicts with v1 because Hustle and Journal now have intentionally different visual jobs.

Replace with:

- Journal-specific archive/page presentation;
- Hustle-specific archive/page presentation.

Do not create a new abstraction until repeated implementation proves one is useful.

## `EditorialArticle.astro`

**REPLACE PRESENTATION / REUSE LOGIC SELECTIVELY**

Useful logic to preserve:

- article image handling;
- methodology/correction rendering concepts;
- heading extraction;
- optional table of contents;
- semantic body rendering.

Do not preserve:

- v0 visual styles;
- Source Serif long-form mode;
- News/longform mode distinction as the primary architecture.

Start with section-specific Journal/Hustle page implementations. Extract shared article primitives only where repetition becomes clear.

---

# 5. Global CSS, fonts, and motion

## `src/styles/global.css`

**REPLACE FOUNDATION TOKENS / ADAPT ACCESSIBILITY BASE**

Keep:

- box sizing;
- minimum viewport behavior;
- skip link concept;
- focus-visible support;
- reduced-motion base.

Replace:

- paper/ink/blue/red variables;
- 84rem publication shell;
- Source Serif role;
- old focus accent;
- old typography assumptions.

Introduce canonical v1 tokens from `docs/V1_DESIGN_SYSTEM.md`.

## Font delivery

**ADAPT**

The current Instrument Sans CDN declaration exposes the weight axis but the approved v1 display system requires the width axis.

Recommended implementation:

- add `@fontsource-variable/instrument-sans`;
- add `@fontsource/ibm-plex-mono`;
- import the local bundled font CSS;
- remove Source Serif 4;
- remove the jsDelivr font preconnect and privacy disclosure once no longer used.

Fontsource documents Instrument Sans as supporting `wdth` 75–100 and `wght` 400–700.

## GSAP

**ADD**

Add `gsap` during v1 foundation implementation.

Rules:

- native scroll;
- no ScrollSmoother at foundation;
- no Lenis/smooth-scroll dependency;
- no Three.js/WebGL;
- scope ScrollTrigger primarily to Work/project demos;
- clean up timelines/triggers on Astro navigation;
- respect reduced motion and mobile simplification.

---

# 6. Content model

## Articles collection

**ADAPT**

Target active section model after legacy News retirement:

`journal | hustle`

During the first release bridge, the schema may temporarily keep:

`news | journal | hustle`

where News exists only to serve legacy article URLs.

Keep useful fields:

- `title`
- `dek`
- `metaDescription`
- `contentType`
- `topic`
- `publishedAt`
- `updatedAt`
- `status`
- `featured`
- `image`
- `methodology`
- `correction`

Change:

- `why -> journal`;
- remove News-specific `featured` validation once News is fully removed.

### Hustle subject metadata

Add only when the first real Hustle piece requires it.

Recommended minimal optional object:

```yaml
subject:
  name:
  role:
  organization:
```

Do not expand this before real reporting exposes the need.

## Why -> Journal content

**MIGRATE**

Current three pieces:

- BYD Philippines;
- TikTok commerce Philippines;
- digital-bank savings rates Philippines.

Change only the section/routing metadata unless a separate editorial review authorizes content changes.

Preserve existing slugs.

## News content

**LEGACY TEMPORARY / THEN RETIRE**

Do not automatically convert News stories into Journal pieces.

They are event-driven and should not gain Journal authority merely because the section changed.

Keep them only for the temporary legacy route described above, then remove them from the active collection when the bridge closes.

## Hustle content

**KEEP EMPTY STATE / FUTURE CONTENT**

No synthetic inventory.

First real Hustle content should enter through the existing research/editorial integrity standards.

---

# 7. New Work architecture

Create a separate `work` Content Collection.

Reason:

A client/project case study has different factual and presentation needs from an editorial article.

## Minimal proposed schema

```yaml
title:
dek:
year:
status: draft | published
featured: true | false
client: optional
capabilities:
  - custom-software
  - automation
  - ai-integration
  - digital-product
cover:
  src:
  alt:
outcome: optional
```

Slug comes from the filename/id.

Do **not** add:

- tech-stack fields by default;
- testimonial fields before real testimonials exist;
- fake metrics;
- process-step arrays;
- CMS-style blocks for hypothetical projects.

The Markdown body owns the factual case-study narrative.

Interactive/demo media can be implemented as project-specific Astro components when a project actually needs them rather than forcing every project through a universal block schema.

## M7

M7 is the obvious first Work candidate, but its case-study evidence and media are not present in this Portfilo repository.

Before publishing the case study:

- inspect the M7 repository;
- identify real screens/workflows;
- establish which business claims/outcomes can be supported;
- import only approved media/assets.

Do not invent operational impact numbers.

---

# 8. Services implementation

**NEW STATIC ROUTE**

Use `src/pages/services.astro`.

No Content Collection is justified for four directional capabilities.

Structure follows the approved system:

- intro;
- problem territories;
- capabilities;
- how work starts;
- related Work;
- contact.

Final service copy requires its own copy gate.

---

# 9. Contact implementation

## Route

**NEW**

Create `/contact`.

## Delivery

**DEFER BACKEND PROVIDER DECISION**

Do not ship a visually functional-looking form that does nothing.

Until a provider/endpoint is approved:

- expose a clear direct email contact path;
- the final form UI can wait.

If a form backend is later approved, update Privacy before release.

Do not add Calendly or another scheduling dependency at foundation level.

---

# 10. Newsletter infrastructure

## `functions/api/subscribe.js`

**KEEP + SMALL ADAPTATION**

The current endpoint already provides:

- bounded request size;
- origin check;
- email validation;
- honeypot;
- timeout;
- beehiiv double opt-in;
- error handling.

Keep the backend.

Later update internal UTM campaign naming from the historical `portfilo_brief_signup` label to a v1-neutral newsletter attribution value.

Provider-side beehiiv changes remain a separate external-system gate.

---

# 11. Brand/assets

## Wordmark

**KEEP / ADAPT APPLICATION**

Current wordmark geometry survives.

Use the existing monochrome/light geometry as the basis for cold-white/silver testing.

Create a v1-specific monochrome asset or inline treatment only after visual prototype testing confirms the exact value.

Do not modify the source geometry during foundation work.

## Old symbol/avatar assets

**DEFER CLEANUP**

They are not part of the approved v1 identity, but do not delete them before favicon/social/identity replacement is complete.

## Favicon / Apple touch icon

**ADAPT LATE**

Keep current assets during migration.

Replace only after the v1 identity application is visually verified.

## Default social image

**REPLACE BEFORE RELEASE**

`public/social/portfilo-default.png` reflects the publication-era visual system.

Create the new v1 fallback after the homepage/brand system is implemented.

## Editorial images

Keep the assets referenced by Journal-migrated articles.

News-only assets may be removed from active source only after the legacy News bridge closes and reference audit confirms they are unused.

Run an orphan-asset audit at cleanup time.

---

# 12. Metadata, sitemap, and redirects

## Sitemap

**ADAPT**

Keep `@astrojs/sitemap`.

Exclude:

- `/confirmed`
- `/404`
- temporary legacy `/news/*` routes during the bridge.

New public routes should enter automatically once generated.

## Redirect target state

At v1 release:

```text
/subscribe      -> /#newsletter         301
/about          -> /                    301
/stories        -> /journal             301
/stories/*      -> /journal/:splat      301
/why            -> /journal             301
/why/*          -> /journal/:splat      301
/news           -> /journal             301
```

Temporary legacy `/news/[slug]` pages remain actual pages during the first release bridge and therefore should not have a wildcard redirect yet.

When the bridge is retired, decide per URL whether a specific destination exists. Do not automatically redirect every old article to an unrelated Journal article.

## Structured data

Keep Organization/WebSite + Article support.

Do not add elaborate Work schema until real case-study data justifies it.

---

# 13. Utility/institutional pages

## Standards

**RETIRE**

Remove the public `/standards` route during migration.

Keep the useful editorial-integrity rules in internal documentation rather than as a public site surface.

## Privacy

**ADAPT**

Remove jsDelivr disclosure if fonts become local.

Add contact processing disclosures only when a form backend actually exists.

## Confirmed / 404

**ADAPT VISUALLY**

No product-architecture change.

---

# 14. Package/repository metadata

## `package.json`

**ADAPT**

- update publication-era description;
- add GSAP;
- add Fontsource packages needed by the approved type system;
- preserve Astro/sitemap/check/TypeScript;
- do not add React/Tailwind/component libraries.

## CI

**KEEP**

Current `npm ci -> npm run check -> npm run build` remains correct.

Add tests only when a concrete runtime behavior warrants them.

---

# 15. Implementation phases

## Phase 0 — Guardrails and baseline

Before runtime edits:

1. create a reusable `portfilo-v1-design` implementation skill from the approved design documents;
2. record current branch/HEAD;
3. run `npm ci`;
4. run `npm run check`;
5. run `npm run build`;
6. record the baseline accurately.

No visual change.

## Phase 1 — Foundation

Implement:

- GSAP dependency;
- variable Instrument Sans + IBM Plex Mono delivery;
- v1 global tokens;
- accessible base styles;
- SiteHead adaptation;
- new SiteHeader;
- new SiteFooter;
- monochrome wordmark application;
- shared motion utilities/lifecycle;
- no page-specific spectacle yet.

Validate before continuing.

## Phase 2 — Content and route foundation

Implement:

- `journal` section/schema;
- migrate three Why frontmatters to Journal;
- create `/journal` + `/journal/[slug]`;
- rebuild `/hustle` + `/hustle/[slug]`;
- set up temporary legacy News article handling;
- add redirect changes that are safe before release;
- create Work collection schema;
- create `/work` + `/work/[slug]` foundation;
- create `/services`;
- create `/contact` with direct-email fallback.

Do not publish invented Work/Hustle content.

## Phase 3 — Homepage

Replace `src/pages/index.astro` entirely.

Build approved order:

- Hero;
- Selected Work;
- Services;
- Hustle;
- Journal;
- Newsletter;
- Contact;
- Footer.

Do not reuse the News ticker or v0 homepage modules.

Final homepage positioning copy requires its own approved copy gate.

## Phase 4 — Work proof layer

Inspect/import the first real project evidence, initially M7 if approved.

Build:

- real interface media;
- case-study content;
- selective GSAP product demonstrations;
- no fake outcome claims.

This is the main visual-craft phase.

## Phase 5 — Editorial + newsletter polish

- Journal reading treatment;
- Hustle portrait/feature treatment;
- newsletter neutral redesign;
- retire the public Standards route;
- Confirmed/Privacy/404 visual migration.

## Phase 6 — Motion refinement

Add only motion justified by the approved grammar.

Audit:

- mobile;
- reduced motion;
- keyboard;
- lifecycle after Astro client navigation;
- ScrollTrigger cleanup;
- layout stability.

## Phase 7 — Cleanup

Only after replacements pass QA:

- remove `EditorialArchive.astro`;
- remove old `EditorialArticle.astro` if fully replaced;
- remove `FooterAcquisition.astro`;
- remove retired News archive;
- remove v0-only CSS;
- remove Source Serif;
- remove orphaned editorial/brand assets;
- update package metadata;
- reconcile active docs.

Historical documentation/research stays as provenance unless separately approved for removal.

## Phase 8 — Release QA

Run:

- `npm ci`;
- `npm run check`;
- `npm run build`.

Inspect at minimum:

- 1440;
- 1366;
- 1024;
- 768;
- 390;
- 375;
- 320.

Verify:

- no horizontal overflow;
- type hierarchy;
- Work media;
- navigation/menu;
- keyboard/focus;
- reduced motion;
- newsletter signup;
- contact path;
- Journal/Hustle routing;
- legacy redirects;
- temporary News bridge;
- canonical/social metadata;
- sitemap/robots;
- Privacy;
- 404/Confirmed;
- performance regressions caused by media/motion.

Production release remains a separate explicit approval gate.

---

# 16. Keep / adapt / replace / retire / defer summary

## KEEP

- Astro + TypeScript
- static-first output
- Cloudflare Pages
- sitemap integration
- robots route
- security headers
- CI
- beehiiv subscription backend
- ClientRouter
- core editorial integrity mechanics
- current wordmark geometry
- three durable Why articles as content

## ADAPT

- SiteHead
- NewsletterSignup
- global accessibility base
- content schema
- Hustle routes
- Privacy
- Confirmed
- 404
- font delivery
- wordmark application
- redirects
- package metadata

## REPLACE

- homepage
- SiteHeader
- SiteFooter
- Journal archive/article presentation
- Hustle archive/article presentation
- v0 visual tokens
- v0 default social image

## RETIRE

- News archive/product
- Why public section name/routes
- Stories -> Why redirect model
- FooterAcquisition
- generic EditorialArchive after replacements
- v0 EditorialArticle presentation after replacements
- Source Serif 4
- News ticker
- paper/blue publication UI
- v0 newsletter copy/variants

## DEFER

- contact form backend/provider
- Work rich-media schema beyond the minimal collection
- advanced Work structured data
- WebGL/Three.js
- scheduling/Calendly
- CMS/database/auth
- final favicon/icon decision
- final newsletter cadence/monetization
- final public positioning/service copy

---

# 17. Key migration risks

## Risk 1 — visual rebuild before real Work media

Mitigation:

Do not hide weak evidence behind motion. Prepare the M7 case-study evidence/media before the Work showcase is treated as complete.

## Risk 2 — turning every page into the same spectacle

Mitigation:

Preserve the approved hierarchy:

- Work = spectacle;
- Services = precision;
- Hustle = humanity;
- Journal = clarity.

## Risk 3 — GSAP lifecycle bugs with Astro navigation

Mitigation:

Centralize lifecycle/cleanup and test repeated navigation, back/forward, mobile, and reduced-motion paths.

## Risk 4 — mixing obsolete publication assumptions into v1

Mitigation:

Use current v1 docs as authority and remove old runtime modules only after their replacements exist.

## Risk 5 — commercial/editorial conflict

Mitigation:

Keep the conflict/disclosure rule internally in editorial standards. A public Standards page is not required.

---

# 18. Approval gate

Founder approval of this plan authorizes moving to **Phase 0 + Phase 1 foundation implementation only**.

It does not automatically authorize:

- final public positioning copy;
- M7 case-study claims;
- Hustle publication;
- contact-provider signup;
- beehiiv provider-side changes;
- merge to `main`;
- production deployment.
