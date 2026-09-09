# Portfilo Project State

_Last updated: 2026-09-10_

## Current phase

**NEWSLETTER ACQUISITION COPY COMPLETE / VALIDATED**

The News / Why / Hustle section migration, the client-side navigation enhancement, and the newsletter acquisition copy refinement are complete and founder-validated on `build/portfilo-v0`.

Before the release decision, the founder approved one additional pre-release copy refinement: retire the 7-minute reading-time promise, strengthen the general newsletter acquisition message, and make the News / Why / Hustle archive acquisition copy reflect the editorial job of each section.

The approved copy has been implemented and visually validated on the working branch. This validation does not authorize deployment, publication, provider-side beehiiv template changes, or merge to `main`.

`Editorial Packaging Standard Refinement` remains deferred, not canceled.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard/approved decision relevant to the task
6. current runtime source

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

The repository is the durable source of truth. Do not override current canonical decisions with assumptions from previous chats.

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Verified Cloudflare model from the closed website release:

- `build/portfilo-v0` -> preview/test
- `main` -> production

The current validated migration, navigation, and acquisition-copy work remain on the working branch. Validation does not authorize merge to `main`.

## Approved product direction

Portfilo is a business and technology publication.

Public editorial sections are now:

### News

> **What changed?**

Current/day-to-day reporting and verified developments.

### Why

> **Why is this happening? How does this work? What is changing underneath?**

Question-led deeper work about mechanisms, systems, industries, patterns, causes, consequences, and contradictions.

### Hustle

> **Who is building or operating it, and how?**

People-led reported work about founders, operators, and business owners. Hustle should examine real decisions, constraints, operations, failures, pivots, growth, and outcomes. It is not a motivation feed, promotional success-story section, or hustle-culture product.

`Stories` is retired as a public section name. The generic journalistic word `story` remains valid internally when it refers to an editorial artifact, research packet, or reporting process rather than navigation or public routing.

Public topics remain unchanged:

`Business / Technology / Startup / AI`

Runtime topic values remain:

`business / technology / startup / ai`

Section and topic are separate dimensions. Do not infer a topic-taxonomy migration from this section change.

Portfilo remains free in v0.

Newsletter acquisition remains important but must not dominate publication identity.

The former 7-minute reading-time promise is retired. The approved newsletter cadence remains three times per week; exact send days/times remain open.

No individual public author/byline system is part of v0.

## Approved newsletter acquisition copy

### General

Heading:

`Get ahead in business and tech.`

Description:

`Reporting on what changed, why it’s happening, and how companies are built and run. Three times a week, straight to your inbox.`

### News

Heading:

`Stay on top of what’s changing.`

Description:

`Current reporting on the developments moving companies, technology, work, and the digital economy.`

### Why

Heading:

`Understand what’s underneath.`

Description:

`The forces, systems, incentives, and decisions behind changes in business and technology.`

### Hustle

Heading:

`See how businesses actually get built.`

Description:

`Reported stories about the decisions, constraints, pivots, and operating work behind founders and companies.`

The News, Why, and Hustle messages are contextual acquisition copy for the same Portfilo newsletter. They do not create separate section newsletters or separate delivery promises. The general acquisition surface carries the three-times-per-week cadence; the contextual archive banners do not repeat it.

## Approved internal editorial direction

Portfilo's strongest areas of editorial attention remain:

### AI + Work

AI products, deployment, workflows, jobs, economics, governance, and practical consequences inside companies and industries.

### Startups + Building Companies

Startups, founders, accelerators, funding, products, distribution, sales, pricing, hiring, operations, business models, expansion, acquisitions, failure, and the mechanics of building companies.

### Digital Economy + Infrastructure

Payments, fintech, IT-BPM, cloud, data centers, connectivity, cybersecurity, platforms, digital regulation, and other systems underneath technology and business activity.

### Major business and technology developments

A material development outside the priority lanes can still belong when it changes companies, products, markets, infrastructure, work, or the process of building businesses.

Geographic rule:

> **The Philippines is Portfilo's primary reporting ground, not an artificial boundary.**

Use Philippine context when geography materially affects the subject. Global developments can belong without a manufactured Philippine angle.

## Editorial intelligence v0

Canonical upstream operating contract:

`docs/EDITORIAL_INTELLIGENCE.md`

Canonical operating source registry:

`docs/EDITORIAL_SOURCE_MAP.md`

Canonical reusable scanner prompt:

`docs/NEWS_SCANNER_PROMPT.md`

Current core flow:

```text
SOURCE MAP + CURRENT WEB SEARCH
  ↓
CHATGPT SCAN / DISCOVERY
  ↓
INTERESTING SIGNAL
  ↓
TRACE TO ORIGINAL / AUTHORITATIVE SOURCE
  ↓
HUMAN EDITORIAL REVIEW
  ↓
NEWS / WATCH / STORY IDEA / IGNORE
```

`STORY IDEA` remains a private scanner/Sheet label. If promoted into substantial reporting, the public section is chosen later as Why or Hustle based on the actual editorial job.

ChatGPT remains the primary v0 discovery surface. AI output has zero evidentiary authority.

RSS/Inoreader, Gmail, alerts, and direct manual checks remain optional supporting inputs.

## Current section/runtime migration state

The founder-approved migration has been implemented and validated on `build/portfilo-v0`.

### Content schema

`src/content.config.ts` now owns:

```text
section: news | why | hustle
contentType: reported | explained | guide | profile | analysis | perspective | field-notes | partner
topic: business | technology | startup | ai
status: draft | published
```

The internal Astro collection remains named `stories`. That implementation name is not a public section.

News entries cannot be `featured`; Why/Hustle entries may be featured when editorially justified.

### Existing content migration

All four existing non-News entries were reclassified from `section: stories` to `section: why`.

Current Why inventory therefore contains:

- one published article;
- three draft previews.

There is currently no Hustle inventory. `/hustle` intentionally renders an honest empty state rather than synthetic founder/business-owner content.

### Public routes

Current target route set:

- `/`
- `/news`
- `/news/[slug]`
- `/why`
- `/why/[slug]`
- `/hustle`
- `/hustle/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`

Retired routes are redirected:

- `/stories` -> `/why`
- `/stories/*` -> `/why/:splat`
- `/subscribe` -> `/#newsletter`
- `/about` -> `/`

### Navigation

Current masthead implementation:

`Portfilo | News | Why | Hustle`

Footer navigation exposes Why and Hustle instead of Stories.

### Homepage

The existing homepage composition is preserved.

There are **not** separate Why and Hustle homepage blocks.

The existing primary long-form Feature draws from published Why/Hustle inventory and generates its route from the entry's section.

The contextual rail can identify another Why/Hustle item without reintroducing Stories as a public destination.

### Shared archive/article system

`src/components/EditorialArchive.astro` remains the shared archive implementation.

`src/components/EditorialArticle.astro` uses:

- `news` mode for News;
- `longform` mode for Why/Hustle.

Why and Hustle preserve the long-form Source Serif reading treatment and optional section rail/table-of-contents behavior without duplicating components.

### Short-page footer behavior

Preview QA exposed a short-page layout defect on the empty Hustle archive: the footer stack could end above the viewport bottom.

The defect was fixed through the shared page shell rather than a Hustle-specific patch:

- the global `body` owns the minimum viewport-height flex-column contract;
- `SiteFooter.astro` groups the existing footer acquisition and compact footer into one shared stack;
- that stack consumes remaining vertical space on short pages and follows content normally on long pages.

No route-specific fixed height, absolute positioning, JavaScript, new dependency, or alternate Hustle composition was introduced.

## Client-side navigation enhancement

The founder approved a pre-release navigation enhancement after observing that internal navigation still performed visible full-document reloads.

Implemented behavior:

- `SiteHead.astro` enables Astro's built-in `ClientRouter` site-wide with `fallback="swap"`;
- no new dependency or frontend framework was added;
- pages remain Astro/static-first outputs, with the client router acting as a lightweight navigation layer;
- no custom slide/wipe/app-style transition system was added;
- Astro's built-in reduced-motion handling remains authoritative;
- `NewsletterSignup.astro` rebinds forms on `astro:page-load` and keeps form fallback outside client-router interception;
- the homepage ticker reruns when the homepage is revisited and cleans its window/media-query listeners on `astro:before-swap` as well as real `pagehide`.

Founder browser QA passed for the navigation lifecycle, including navigation across the main sections, return navigation, homepage ticker behavior, and newsletter-form behavior after internal navigation.

## Newsletter acquisition copy implementation

Implemented and founder-validated on the working branch:

- `NewsletterSignup.astro` default copy uses the approved general acquisition message;
- homepage acquisition uses the approved general message;
- shared footer acquisition uses the approved general message;
- News archive acquisition uses the approved News-specific message;
- Why archive acquisition uses the approved Why-specific message;
- Hustle archive acquisition uses the approved Hustle-specific message;
- `docs/V0_SCOPE.md` and `docs/COPY_STYLE.md` retire the 7-minute promise and record the contextual acquisition model.

Preview QA exposed one presentation issue inherited from the previous copy: hard `ch`-based heading width caps forced unnecessary line breaks even when the signup column had enough room. The approved correction removed those artificial caps from the homepage, shared footer, shared archive acquisition, and default newsletter heading while preserving the intentionally narrow homepage feature-card treatment.

No copy changes, font-size changes, signup behavior changes, layout redesign, new signup component, separate section newsletter, or new delivery promise were introduced by that correction.

## Continuous integration

A minimal GitHub Actions workflow exists at:

`.github/workflows/ci.yml`

It runs on pushes to and pull requests targeting:

- `build/portfilo-v0`;
- `main`.

The workflow uses the repository `.node-version`, installs from the lockfile with `npm ci`, then runs:

```text
npm run check
npm run build
```

It does not deploy or publish anything.

## Supporting editorial stack

### ChatGPT News Scanner

Primary v0 discovery surface. The scanner prompt remains founder-approved and operational, with Why/Hustle routing reconciled.

### Private signal list

The private Google Sheet `Portfilo Signals` remains outside the repository with:

`Date / Signal / Source URL / Decision / Note or Watch trigger`

Decision values remain:

`NEWS / WATCH / STORY IDEA / IGNORE`

### Gmail

The external label `Portfilo / Signals` exists. Automatic filters are not assumed or required.

### Inoreader

First-pass feed setup exists but remains optional supporting infrastructure only.

### Alerts

No broad alert set is currently required. Add an alert only when repeated scanner use demonstrates a specific gap.

## Validation status

**AUTOMATED VALIDATION PASS / NEWSLETTER ACQUISITION COPY VISUAL QA PASS.**

The News / Why / Hustle migration, short-page footer correction, client-side navigation enhancement, and newsletter acquisition copy refinement are validated on the working branch.

Final CI run `#26` on commit `818bf45372a0a01b9673f5c0c1632ecc30fa86e2` completed successfully on 2026-09-10.

Verified by CI:

- checkout/setup: PASS;
- `npm ci`: PASS;
- `npm run check`: PASS;
- `npm run build`: PASS.

Founder visual QA is PASS for the newsletter acquisition copy refinement and the signup-heading width correction. This closes the copy-refinement gate.

## Active work plan

1. **News scanner/source-map system** - operational.
2. **News / Why / Hustle architecture decision** - founder-approved.
3. **Repository impact audit** - complete.
4. **Schema/frontmatter migration** - complete.
5. **Why + Hustle route migration** - complete.
6. **Header/footer/homepage migration** - complete.
7. **Shared long-form article-mode migration** - complete.
8. **Legacy Stories redirects/internal-link migration** - complete.
9. **Canonical documentation reconciliation** - complete.
10. **Minimal GitHub Actions CI** - complete / PASS.
11. **Preview visual/responsive QA** - complete / founder PASS.
12. **News / Why / Hustle migration** - COMPLETE / VALIDATED.
13. **Client-side navigation enhancement** - COMPLETE / VALIDATED.
14. **Newsletter acquisition copy refinement** - COMPLETE / VALIDATED.
15. **Release decision / merge to `main`** - exact next gate; requires separate explicit founder approval.

## Exact next task

**Decide whether to release the validated working-branch state to `main`.**

The release candidate now includes the validated News / Why / Hustle migration, short-page footer correction, client-side navigation enhancement, and newsletter acquisition copy refinement.

If release is approved, preserve `main` as the production boundary, merge only the validated working-branch state, confirm CI on the release state, and verify production deployment after the merge.

Do not merge to `main` without a separate explicit founder release approval.

## Deferred / separate workstreams

Remain separate unless explicitly promoted:

- Editorial Packaging Standard Refinement, including the editorial-image requirement question;
- individual News reporting and publication;
- individual Why development and publication;
- individual Hustle reporting and publication;
- distribution execution and platform posting;
- provider-side newsletter naming/template changes;
- final custom-domain cutover;
- broad-audience launch;
- topic taxonomy migration;
- search, filters, accounts, CMS, community, analytics infrastructure, or other post-v0 expansion.
