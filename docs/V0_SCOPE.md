# Portfilo v0 Scope

_Last updated: 2026-09-07_

## Objective

Ship the smallest credible Portfilo business-and-technology media product that can:

- publish high-quality current News and deeper Features;
- establish a distinctive editorial identity;
- make email/newsletter acquisition a primary reader relationship;
- operate cleanly without a CMS, database, or unnecessary application infrastructure;
- preserve a clear path for later scale without pretending Portfilo already has newsroom-scale throughput.

The v0 should be good enough to launch publicly. It does not need to contain the eventual Portfilo product ecosystem.

## Product direction

Current founder-approved v0 direction:

- Portfilo is the brand;
- Portfilo is a business-and-technology media product;
- the working product model is **focused business/technology briefing + original reporting**;
- Portfilo has **no geographic product promise**;
- News is the intended current/day-to-day editorial layer;
- Features are the deeper editorial layer;
- newsletter/email acquisition is a primary conversion and recurring-reader relationship;
- intended reader-facing coverage labels are `Business / Technology / Startup / AI`;
- no public newsletter cadence or reading-time promise is approved yet;
- v0 remains free.

The current runtime has not completed every migration implied by this direction. `docs/PROJECT_STATE.md` records the distinction between approved target and implemented state.

## Target public surfaces

### 1. Homepage

The redesigned homepage should provide:

- compact Portfilo header and primary navigation;
- compact newsletter-first hero with embedded signup;
- one approved universal hero visual or approved no-image treatment;
- Latest strip;
- current News hierarchy;
- one deeper Feature treatment;
- one final newsletter signup after editorial content;
- minimal footer.

The homepage must not manufacture production news density. Clearly labeled development-only fixtures may be used locally and must remain excluded from production.

### 2. Latest

Target route:

`/latest`

Purpose:

- reverse-chronological browsing across the relevant current News and Feature content once the News/Feature model is implemented;
- simple, useful archive behavior before search/filter/pagination are justified by volume.

The exact implementation is a later approved content-architecture gate.

### 3. News

Target route family:

`/news/[slug]`

Purpose:

- concise factual/current developments;
- enough sourcing/context for the item’s verified job;
- newsletter acquisition at an appropriate point;
- no forced long-form treatment.

The exact schema and route migration are not authorized merely by this scope file. They require the later News/Feature architecture plan and approval.

### 4. Features

Current stable story route may remain:

`/stories/[slug]`

The public presentation can call this deeper layer **Features** while preserving URL stability unless a later migration has a concrete reason to change it.

Feature pages should support:

- headline + dek;
- author;
- publish/update dates where applicable;
- content type/topic where useful;
- long-form body;
- verified imagery/data figures;
- methodology/correction material where applicable;
- newsletter signup;
- related material only when inventory justifies it.

The existing `/stories` archive can be refined into the Features browsing surface.

### 5. Series

Keep generic series capability while actual editorial use justifies it.

Do not expand series into a separate product system.

### 6. Standards

Keep public editorial standards/trust infrastructure available but visually subordinate to the main editorial product.

### 7. Subscribe

Keep `/subscribe` as a focused utility landing page for direct links, social bios, QR codes, and campaigns.

Embedded signup remains the normal browsing path.

The current operational `Portfilo Brief` naming remains until the separately approved coordinated migration to `Newsletter` across website and beehiiv-facing surfaces.

### 8. Confirmation

Keep `/confirmed` as the post-double-opt-in website destination once production redirect configuration is complete.

### 9. Privacy

Keep the privacy surface required by the actual data flow.

### 10. About

`/about` currently exists.

The redesign direction is to absorb most product explanation into the homepage and potentially retire/redirect About later. Do not remove it until author/byline/metadata dependencies are inspected and safely migrated.

### 11. 404

Keep a custom accessible 404.

## Content system

Current v0 content architecture remains Astro Content Collections + local Markdown.

### Story packaging

The reader-facing package is:

- required `title`;
- required `dek`.

Optional metadata-only override:

- `metaDescription?` when the approved dek has a concrete metadata problem.

Default metadata behavior:

`metaDescription ?? dek`

Do not reintroduce a required separate story `description` field.

### Current schema vs target migration

Current implemented topics remain:

`business / technology / startups / ai / building`

Approved intended public coverage set:

`Business / Technology / Startup / AI`

The current collection also uses editorial `contentType` values such as Reported, Explained, Analysis, Perspective, etc.

The later architecture gate must decide the smallest clean News-vs-Feature distinction, including whether a separate field such as `format: news | feature` remains the right implementation. Do not add fields or migrate content before that review/approval.

### Publication states

Keep:

- draft/published state;
- publish/update dates;
- optional series relationship;
- featured state where still justified;
- optional methodology/correction metadata.

## Technical architecture

### In scope

- Astro;
- TypeScript;
- static-first output;
- Astro Content Collections;
- local Markdown;
- custom CSS;
- minimal client-side JavaScript;
- semantic HTML;
- responsive images where appropriate;
- sitemap;
- robots.txt;
- canonical URLs;
- Open Graph/social metadata;
- Article structured data where appropriate;
- custom 404;
- reduced-motion support;
- one narrow Cloudflare Pages Function for newsletter subscription forwarding.

### External infrastructure

- GitHub repository;
- Cloudflare Pages;
- Cloudflare Pages Function for `/api/subscribe`;
- Cloudflare Web Analytics;
- beehiiv for subscriber confirmation, storage, sending, deliverability, and unsubscribe handling.

### Explicitly out of scope for v0

Do not build without a newly validated requirement:

- database;
- authentication;
- user accounts;
- member profiles;
- comments/likes/reactions;
- bookmarks;
- reading history;
- recommendation engine;
- personalization;
- native app;
- AI assistant;
- custom CMS/admin dashboard;
- custom newsletter platform/backend beyond the existing subscription proxy;
- custom analytics backend;
- advanced site search;
- paywall/membership;
- job board/opportunity database;
- events platform;
- community features;
- sponsorship-management software;
- complex animation framework;
- WebGL/3D;
- monorepo;
- microservices;
- general-purpose API;
- background jobs.

Valid future ideas belong in `BACKLOG.md` until promoted.

## Stack principles

### Astro + TypeScript

Portfilo is content-first. Static generation and typed content schemas minimize runtime complexity while preserving a migration path to a remote source later if justified.

### Local Markdown + Content Collections

Use source-controlled authoring while the team is small. Do not add CMS administration before volume or collaboration creates a real problem.

### Custom CSS

Portfilo’s visual identity should not inherit a generic component-library aesthetic. Use a small set of editorial primitives and build variants only when real pages require them.

### Cloudflare Pages

Use static CDN delivery, preview deployments, custom domains, and the narrow newsletter function without converting the site into a dynamic application.

### beehiiv

Use commodity newsletter infrastructure for subscriber management, confirmation, delivery, unsubscribe, and deliverability. Do not rebuild it.

## Scale philosophy

Portfilo is not engineering for hypothetical millions of users. It is avoiding choices that unnecessarily block growth.

- content scale comes from structured collections;
- traffic scale comes from static delivery;
- editorial scale comes from repeatable research/publishing standards;
- future dynamic product features can be added when validated.

## Revisit triggers

Reconsider a frozen v0 choice only when:

- a real editorial workflow is materially impaired;
- a validated feature requires dynamic state;
- publishing volume makes repository-based authoring inefficient;
- multiple editors need safer authoring;
- newsletter needs exceed the current provider;
- analytics questions cannot be answered by the lightweight stack;
- performance measurements identify a real bottleneck;
- implementation reveals a concrete contradiction with an approved product decision.

## Definition of v0 complete

v0 is complete when the approved target surfaces and migrations required for launch are implemented and:

- content schema validates;
- production build passes;
- desktop/mobile layouts are manually inspected;
- keyboard navigation works;
- reduced motion is respected;
- newsletter capture/confirmation flow is validated on production configuration;
- sitemap/robots/canonical/social metadata are present;
- 404 works;
- production fixtures are excluded;
- no obvious broken links or console errors remain;
- final-domain/deployment requirements are satisfied;
- `docs/PROJECT_STATE.md` records final validation state;
- release receives explicit approval before merge to `main`.

The four-issue newsletter pilot validates the recurring email product before public cadence promises and recurring sends, but it does not block building the core website.
