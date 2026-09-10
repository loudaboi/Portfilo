# Portfilo Project State

_Last updated: 2026-09-10_

## Current phase

**RELEASE COMPLETE / PRODUCTION VERIFIED / EDITORIAL PACKAGING + IMAGE RUNTIME REVIEW + SOCIAL PREVIEW REFRESH COMPLETE**

The News / Why / Hustle section migration, client-side navigation enhancement, newsletter acquisition copy refinement, signup-heading width correction, release to `main`, and external Cloudflare production verification are complete and founder-validated.

The validated release state passed GitHub Actions CI on `main` and the founder confirmed the production Pages deployment passed the release verification checklist. This closes that release cycle.

The subsequent **Editorial Packaging Standard Refinement** research and decision gate is complete and founder-approved. Canonical documentation has been reconciled around the approved image policy.

The founder later explicitly promoted the editorial-image runtime/schema refinement workstream together with a default social-preview refresh. The implementation-impact review concluded that the current optional image schema, shared article/archive components, per-article social-image behavior, and no-image fallbacks are already sufficient for v0. No schema expansion or article/archive component change was justified.

The default social fallback asset at `public/social/portfilo-default.png` was replaced with the founder-selected Portfilo stairs/wordmark composition, prepared as a `1200 x 630` PNG. `SiteHead.astro` continues to use that same path for non-article pages and for articles without an approved article image. Articles with an approved image continue to use that article image for Open Graph/X metadata and Article structured data.

Working-branch CI run `#41` on commit `5bc981c65dd6a50db9d020ed4d8f8e4c4cd5a9d9` passed `npm ci`, `npm run check`, and `npm run build` for the social-preview replacement. The resulting release state at commit `99c8275e403bcd2155093fb3d5b5ac581b2e0d0c` was promoted to `main`; main CI run `#44` passed, and the founder confirmed the production result is working. The social-preview refresh is therefore released and production-verified.

The current founder-approved publication-level image policy is:

- News imagery is optional;
- Why imagery is preferred when it performs a real explanatory, documentary, or conceptual job, but is not required;
- Hustle authentic subject/operating-context imagery is strongly preferred when available, but is not required;
- no News, Why, or Hustle piece may be blocked from publication solely because no suitable image is available;
- `NO IMAGE` remains a valid editorial outcome;
- imagery must not be manufactured merely to fill a visual slot;
- generated imagery remains editorial illustration, never documentary evidence;
- one approved story visual may be reused across article/homepage/archive/share derivatives where appropriate, while individual surfaces may remain text-led.

This closure does not authorize provider-side beehiiv template changes, a final custom-domain cutover, broad-audience launch, individual editorial publication, further runtime image-system changes, schema expansion, or other deferred/post-v0 workstreams.

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

Verified Cloudflare model:

- `build/portfilo-v0` -> preview/test
- `main` -> production

The validated release candidate was fast-forwarded into `main` after explicit founder approval and the resulting production deployment passed founder verification. Further working-branch changes remain preview/test work and do not imply another production release.

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

## Approved editorial packaging direction

Canonical packaging authority:

`docs/EDITORIAL_PACKAGING_STANDARD.md`

Canonical image-integrity authority:

- `docs/IMAGE_SYSTEM.md`;
- `docs/PHOTO_TREATMENT.md`.

The reader-facing textual package remains:

1. headline;
2. dek.

Metadata remains infrastructure and normally resolves from:

```text
metaDescription ?? dek
```

Imagery is a separate visual-presentation layer, not a mandatory third packaging element.

Section defaults:

### News imagery

Optional. Fast/current News must not be delayed or blocked merely to obtain or manufacture an image.

### Why imagery

Preferred when it performs a meaningful explanatory, documentary, data, or conceptual job, but not required.

### Hustle imagery

Authentic subject, company, workplace, product, process, or operating-context imagery is strongly preferred when available, but not required.

Missing visual access must not be replaced with generated likenesses, invented workplaces, fake documentary scenes, or generic promotional filler.

Across all sections, `NO IMAGE` is an acceptable editorial outcome and absence of a suitable image alone does not block publication.

When a piece has an approved visual identity, the same approved image or crop-safe derivative may be reused across article, homepage/archive, social-preview, and structured-data surfaces. A surface may remain text-led when that better serves hierarchy or scanning.

The implemented schema-level `image` field remains optional. The approved runtime impact review found no justified need to expand the schema or modify shared article/archive rendering for v0. The only implemented visual change in this workstream was replacement of the default social fallback asset at the existing path.

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

The founder-approved migration has been implemented, validated, released to `main`, and production-verified.

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

The `image` field remains optional for all sections.

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

Current archive/article components already support image and no-image states. The later image-runtime impact review preserved these components unchanged because the existing behavior already satisfies the approved v0 packaging policy.

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

Implemented and founder-validated:

- `NewsletterSignup.astro` default copy uses the approved general acquisition message;
- homepage acquisition uses the approved general message;
- shared footer acquisition uses the approved general message;
- News archive acquisition uses the approved News-specific message;
- Why archive acquisition uses the approved Why-specific message;
- Hustle archive acquisition uses the approved Hustle-specific message;
- `docs/V0_SCOPE.md` and `docs/COPY_STYLE.md` retire the 7-minute promise and record the contextual acquisition model.

Preview QA exposed one presentation issue inherited from the previous copy: hard `ch`-based heading width caps forced unnecessary line breaks even when the signup column had enough room. The approved correction removed those artificial caps from the homepage, shared footer, shared archive acquisition, and default newsletter heading while preserving the intentionally narrow homepage feature-card treatment.

No copy changes, font-size changes, signup behavior changes, layout redesign, new signup component, separate section newsletter, or new delivery promise were introduced by that correction.

## Editorial-image runtime review and social preview refresh

The founder promoted this workstream after the Editorial Packaging Standard Refinement was decision-complete.

Impact-review conclusion:

- keep the current optional `image` schema;
- keep current article and archive image/no-image behavior;
- keep per-article Open Graph/X image behavior in `SiteHead.astro`;
- keep Article structured-data image behavior when an article image exists;
- keep the default fallback path `/social/portfilo-default.png` for non-article pages and articles without an approved image;
- do not add dynamic OG-card generation or a new image-type taxonomy in v0 merely for completeness.

Implemented change:

- `public/social/portfilo-default.png` was replaced with the founder-selected Portfilo stairs/wordmark image;
- the replacement is a `1200 x 630` PNG and retains the existing path expected by `SiteHead.astro`;
- no schema, route, article, archive, homepage, or metadata-plumbing change was required.

CI run `#41` on working-branch commit `5bc981c65dd6a50db9d020ed4d8f8e4c4cd5a9d9` passed.

The release state at `99c8275e403bcd2155093fb3d5b5ac581b2e0d0c` is on `main`. Main CI run `#44` passed, and founder production verification is PASS. This workstream is closed.

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

**RELEASE CI PASS / FOUNDER PREVIEW QA PASS / PRODUCTION VERIFICATION PASS / SOCIAL PREVIEW RELEASE PASS.**

The News / Why / Hustle migration, short-page footer correction, client-side navigation enhancement, newsletter acquisition copy refinement, and signup-heading width correction passed founder preview QA before release.

Working-branch CI run `#27` on release candidate commit `36b431e7c8a93974e7c9ca94f37120065eb39af5` completed successfully on 2026-09-10.

After explicit founder release approval, `main` was fast-forwarded from `46859fd932b15769be5a9106c8febc610ff1d5ce` to release candidate commit `36b431e7c8a93974e7c9ca94f37120065eb39af5`.

Release CI run `#28` on `main` completed successfully on the same release state. Later documentation-only release-state synchronization also passed CI.

Verified by release CI:

- checkout/setup: PASS;
- `npm ci`: PASS;
- `npm run check`: PASS;
- `npm run build`: PASS.

Founder production verification on the Cloudflare Pages deployment is PASS for the released state, including the main navigation and routes, client-side navigation behavior, newsletter acquisition copy and heading wrapping, legacy Stories redirects, and absence of an obvious production-only regression.

The original release cycle is closed.

The later Editorial Packaging Standard Refinement is decision-complete and canonically reconciled. The subsequently promoted image-runtime impact review found no justified schema or component expansion. The default social-preview replacement passed working-branch CI run `#41`, was released to `main` in the `99c8275e403bcd2155093fb3d5b5ac581b2e0d0c` state, passed main CI run `#44`, and passed founder production verification.

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
15. **Release decision / merge to `main`** - COMPLETE.
16. **Production deployment verification** - COMPLETE / founder PASS.
17. **Editorial Packaging Standard Refinement research and decision** - COMPLETE / founder-approved.
18. **Editorial Packaging canonical-document reconciliation** - COMPLETE / documentation only.
19. **Editorial-image runtime/schema impact review** - COMPLETE / no schema or component expansion justified.
20. **Default Portfilo social-preview refresh** - COMPLETE / RELEASED / CI PASS / founder production PASS.

## Exact next task

**No further implementation workstream is currently promoted. Await explicit founder promotion of the next task.**

The following image invariants remain locked:

- `image` remains optional across News, Why, and Hustle;
- no piece is blocked solely because no suitable image exists;
- `NO IMAGE` is a valid outcome;
- section preferences must not become hard schema invariants;
- generated imagery remains visibly disclosed editorial illustration;
- current no-image runtime states must remain functional;
- future mobile hierarchy changes require a separately justified task rather than assuming image-first ordering everywhere.

Do not generate editorial images, publish content, alter topic taxonomy, change the News / Why / Hustle architecture, or expand the runtime image schema without a separately authorized task.

## Deferred / separate workstreams

Remain separate unless explicitly promoted:

- individual News reporting and publication;
- individual Why development and publication;
- individual Hustle reporting and publication;
- distribution execution and platform posting;
- provider-side newsletter naming/template changes;
- final custom-domain cutover;
- broad-audience launch;
- topic taxonomy migration;
- search, filters, accounts, CMS, community, analytics infrastructure, or other post-v0 expansion.