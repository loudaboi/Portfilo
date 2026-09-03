# Portfilo v0 Scope

## Objective

Ship the smallest credible Portfilo editorial product that can publish high-quality research, establish a distinct visual identity, collect an owned audience, and scale structurally without premature infrastructure.

The v0 should be good enough to launch publicly. It does not need to contain the eventual Portfilo product ecosystem.

## Product principle

**Build the publishing machine before deciding what it should investigate first.**

The first real editorial series will be chosen through a separate research project after the site and publishing workflow are ready.

## In scope

### Public surfaces

1. **Homepage**
   - one dominant editorial feature;
   - latest/select stories;
   - clear Portfilo identity;
   - newsletter call to action.

2. **Stories index**
   - `/stories` route;
   - all published stories in reverse chronological order;
   - publication date;
   - content type/topic;
   - headline;
   - short story description;
   - author;
   - no search, filters, or pagination until volume creates a real need.

3. **Story page**
   - headline and dek;
   - author;
   - publish/update dates;
   - content type/topic;
   - optional series metadata;
   - long-form body;
   - images/data figures;
   - pull quotes;
   - source/methodology section;
   - correction notice;
   - related stories;
   - newsletter call to action.

4. **Series page**
   - generic series metadata;
   - ordered story list;
   - active/completed state.

5. **Research & Standards**
   - sourcing;
   - verification;
   - AI usage;
   - corrections;
   - commercial/editorial separation.

6. **About**
   - who Portfilo serves;
   - what it does;
   - concise company/editorial thesis.

7. **Subscribe**
   - Portfilo Brief;
   - native Portfilo newsletter signup UI;
   - one narrow Cloudflare Pages Function that forwards confirmed-opt-in subscription requests to beehiiv.

### Content system

- Astro build-time Content Collections
- local Markdown stories
- schema validation
- draft/published state
- topic
- content type
- distinct story `dek` and short `description` writing jobs
- optional series relationship
- featured state
- publish/update dates
- optional methodology/correction metadata

### Technical

- Astro
- TypeScript
- custom CSS
- minimal client-side JavaScript
- semantic HTML
- responsive images where appropriate
- sitemap
- robots.txt
- canonical URLs
- Open Graph/social metadata
- Article structured data where appropriate
- custom 404
- reduced-motion support
- one single-purpose Cloudflare Pages Function for newsletter subscription forwarding

### External infrastructure

- GitHub repository
- Cloudflare Pages
- Cloudflare Pages Functions for the single newsletter subscription endpoint
- Cloudflare Web Analytics
- beehiiv for subscriber storage, confirmation, delivery, and unsubscribe handling

## Explicitly out of scope

Do not build in v0:

- database
- authentication
- user accounts
- member profiles
- comments
- likes
- bookmarks
- reading history
- recommendation engine
- personalization
- native app
- AI assistant
- custom CMS
- admin dashboard
- custom newsletter platform or backend beyond the single approved beehiiv subscription proxy
- custom analytics backend
- advanced site search
- paywall
- membership
- job board
- opportunity database
- events platform
- community features
- sponsorship management
- complex animation framework
- WebGL/3D
- monorepo
- microservices
- dedicated general-purpose API
- background jobs

Valid future ideas belong in `BACKLOG.md`.

## Stack decision

### Astro + TypeScript

Rationale:

- Portfilo v0 is content-first.
- Astro is optimized for content-heavy sites and static generation.
- Build-time Content Collections provide schemas, type safety, and structured querying.
- The content layer can later read from remote sources if a CMS becomes justified.
- Static output minimizes runtime complexity.

Do not add a frontend framework unless a current interaction clearly requires one.

### Local Markdown + Content Collections

Rationale:

- one source-controlled publishing workflow;
- no database or CMS administration;
- easy ChatGPT handoff through repository snapshots;
- schema validation reduces metadata errors;
- migration to a remote content source remains possible later.

### Custom CSS

Rationale:

Portfilo's visual identity should not inherit a generic component-library aesthetic. A small set of CSS tokens and editorial components is sufficient for v0.

### Cloudflare Pages

Rationale:

- Git-based Astro deployment;
- preview deployments;
- static CDN delivery;
- custom domains;
- simple build command and output;
- integrates cleanly with Cloudflare Web Analytics;
- Pages Functions allow the approved newsletter subscription proxy without converting the publication to a dynamic application.

### beehiiv

Rationale:

Newsletter sending, subscriber management, confirmation, deliverability, and unsubscribe handling are commodity infrastructure and should not be rebuilt.

The current free Launch tier is sufficient for v0 audience validation. Portfilo renders the signup form itself because the third-party embed did not meet the approved visual and responsive standard; the server-side proxy only forwards subscription requests to beehiiv's official API.

## Scale philosophy

Portfilo is not engineering for hypothetical millions of users.

It is avoiding decisions that would block growth.

### Content scale

Structured content collections mean story #500 follows the same authoring model as story #1.

### Traffic scale

Static delivery minimizes application-server load. The newsletter endpoint is isolated to subscription requests rather than moving the site onto an application server.

### Editorial scale

Research packets and canonical publishing standards create repeatable newsroom operations.

### Product scale

Future authenticated or personalized applications can be introduced when validated. They do not need to dictate the v0 architecture.

## Revisit triggers

A frozen v0 choice may be reconsidered when:

- a real editorial workflow is materially impaired;
- a validated product feature requires dynamic state;
- publishing volume makes repository-based authoring operationally inefficient;
- multiple editors need a safer authoring interface;
- newsletter needs exceed the current provider;
- analytics questions cannot be answered by the lightweight stack;
- performance measurements identify a real bottleneck.

Do not revisit architecture because of hypothetical future complexity.

## Definition of v0 complete

v0 is complete when:

- all in-scope public surfaces exist;
- at least one clearly labeled design fixture proves the story system without being publicly exposed in production;
- content schema validates;
- production build passes;
- desktop/mobile layouts are manually inspected;
- keyboard navigation works;
- reduced motion is respected;
- newsletter capture is functional;
- sitemap/robots/canonical/social metadata are present;
- 404 works;
- no obvious broken links or console errors remain;
- deployment is live or deployment-ready;
- `docs/PROJECT_STATE.md` records the final validation state.

A real launch series is not required to declare the publishing system complete.