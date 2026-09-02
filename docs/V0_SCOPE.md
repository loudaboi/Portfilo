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

2. **Story page**
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

3. **Series page**
   - generic series metadata;
   - ordered story list;
   - active/completed state.

4. **Research & Standards**
   - sourcing;
   - verification;
   - AI usage;
   - corrections;
   - commercial/editorial separation.

5. **About**
   - who Portfilo serves;
   - what it does;
   - concise company/editorial thesis.

6. **Subscribe**
   - Portfilo Brief;
   - native Portfilo newsletter signup UI;
   - Turnstile-protected signup submission;
   - Portfilo-owned transactional confirmation email through Resend;
   - Portfilo-owned `/confirmed` destination;
   - verified subscriber creation in beehiiv only after confirmation.

### Content system

- Astro build-time Content Collections
- local Markdown stories
- schema validation
- draft/published state
- topic
- content type
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
- Cloudflare Pages Functions only for the narrow newsletter confirmation bridge
- stateless encrypted confirmation tokens with a short expiry
- no pending-subscriber database or KV store

### External infrastructure

- GitHub repository
- Cloudflare Pages
- Cloudflare Pages Functions for newsletter confirmation endpoints
- Cloudflare Turnstile for signup abuse protection
- Cloudflare Web Analytics
- Resend for transactional confirmation-email delivery only
- beehiiv for confirmed subscriber storage, newsletter delivery, and unsubscribe handling

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
- custom newsletter platform or backend beyond the approved stateless confirmation bridge
- permanent Portfilo subscriber store
- pending-subscriber database
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
- Pages Functions allow the narrow confirmation bridge without converting the publication to a dynamic application.

### Cloudflare Turnstile

Rationale:

The public signup endpoint can trigger transactional email, so abuse protection is required. Turnstile provides server-verified bot protection while its `interaction-only` appearance keeps the normal reader experience visually unobtrusive.

### Resend

Rationale:

Portfilo needs full control over the transactional confirmation email without operating an SMTP server or rebuilding newsletter delivery. Resend is limited to confirmation-email delivery; it is not Portfilo's newsletter platform or subscriber database.

### beehiiv

Rationale:

Newsletter sending, confirmed subscriber management, deliverability, and unsubscribe handling remain commodity infrastructure and should not be rebuilt.

Portfilo verifies the email address before creating the beehiiv subscriber. The confirmation endpoint therefore creates the verified subscriber with beehiiv double opt-in disabled, while the beehiiv welcome email remains disabled under the current v0 policy.

## Scale philosophy

Portfilo is not engineering for hypothetical millions of users.

It is avoiding decisions that would block growth.

### Content scale

Structured content collections mean story #500 follows the same authoring model as story #1.

### Traffic scale

Static delivery minimizes application-server load. The newsletter confirmation endpoints are isolated to signup/confirmation requests rather than moving the site onto an application server.

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
- newsletter needs exceed the current providers;
- analytics questions cannot be answered by the lightweight stack;
- performance measurements identify a real bottleneck.

Do not revisit architecture because of hypothetical future complexity.

## Definition of v0 complete

v0 is complete when:

- all in-scope public surfaces exist;
- at least one clearly labeled design fixture proves the story system;
- content schema validates;
- production build passes;
- desktop/mobile layouts are manually inspected;
- keyboard navigation works;
- reduced motion is respected;
- newsletter capture and confirmation are functional;
- sitemap/robots/canonical/social metadata are present;
- 404 works;
- no obvious broken links or console errors remain;
- deployment is live or deployment-ready;
- `docs/PROJECT_STATE.md` records the final validation state.

A real launch series is not required to declare the publishing system complete.
