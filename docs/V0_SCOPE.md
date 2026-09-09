# Portfilo v0 Scope

_Last updated: 2026-09-09_

## Objective

Ship the smallest credible Portfilo business-and-technology publication that can publish current News and deeper Stories, build a direct newsletter relationship, and operate cleanly without unnecessary application infrastructure.

Portfilo v0 remains free.

## Product direction

Current founder-approved direction:

- Portfilo is a business and technology publication.
- **News** is the current/day-to-day editorial layer.
- **Stories** is the deeper editorial layer.
- Public topics are `Business / Technology / Startup / AI`.
- Newsletter acquisition is important, but it must not make the publication feel like a marketing funnel.
- Approved newsletter promise: the latest news, a 7-minute read, three times per week.
- Exact send days and times remain open.
- `briefing` is not approved public acquisition language.
- No individual author/byline system is part of v0. Public editorial identity is Portfilo.

## Public route surface

Keep:

- `/`
- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`
- `/robots.txt`
- `/api/subscribe`

Retired in v0:

- `/subscribe` as a standalone page. It redirects to `/#newsletter`.
- `/about`. It redirects to `/`.
- public Series presentation. Series can return only when real editorial inventory justifies it.

## Homepage

The homepage is the primary publication and newsletter entry point.

Current structure:

- compact `Portfilo | News | Stories` header;
- newsletter signup at the top of the page;
- Latest News strip when inventory exists;
- one primary Feature/Story treatment with an adjacent contextual newsletter/Stories rail;
- News section;
- shared footer acquisition and compact institutional footer.

Production must not manufacture News density. Clearly labeled synthetic News fixtures are development-only and must never create fake published article routes.

## News and Stories

### News

News is concise current reporting. Real published News items route to `/news/[slug]` and are clickable wherever presented.

### Stories

Stories are deeper editorial work. The shared article system supports long-form reading, optional hero imagery, methodology/corrections, and a conditional in-page section rail when a Story contains enough real `h2` sections.

### Authors

Individual authors are not part of the public v0 product or content schema. Article structured data identifies Portfilo as the organizational author/publisher.

## Newsletter

All visible signup forms use the shared `NewsletterSignup.astro` component and the same `/api/subscribe` endpoint.

The website does not maintain a separate subscriber database. beehiiv owns double opt-in confirmation, subscriber storage, delivery, and unsubscribe handling.

`/confirmed` remains required as the post-double-opt-in destination.

## Content system

Portfilo uses one Astro Content Collection backed by local Markdown.

Required editorial dimensions include:

```yaml
section: news | stories
contentType: reported | explained | guide | profile | analysis | perspective | field-notes | partner
topic: business | technology | startup | ai
status: draft | published
```

Story packaging requires:

- `title`
- `dek`

Optional metadata includes:

- `metaDescription`
- `publishedAt`
- `updatedAt`
- `featured`
- `image`
- `methodology`
- `correction`

Published entries require `publishedAt`.

Do not add author, Series, CMS, database, or other fields merely to anticipate future scale.

## Responsive contract

Responsive behavior is part of v0 completion.

- 1440 / 1366: full desktop composition.
- 1024: compact desktop/laptop. Preserve desktop structure where it fits and provide deliberate side breathing room.
- 768: tablet remains in the desktop layout family. Selective reflow is allowed, but tablet must not automatically become a large phone layout.
- 390 / 375 / 320: deliberate phone simplification and stacking.

Forms must remain sensibly constrained when layouts stack. A stacked tablet form must not expand into an unnecessarily wide input.

Important typography must scale progressively through desktop, laptop, tablet, and phone rather than waiting for one abrupt mobile breakpoint.

## Visual system

- 84rem / 1344px publication shell.
- Instrument Sans for hierarchy and interface.
- Source Serif 4 for long-form/deeper reading where appropriate.
- IBM Plex Mono only for utility/data/source use where justified.
- Portfilo blue is structural, not decorative.
- The primary homepage Feature and primary article hero may use the approved thin blue top rule.
- Supporting News/Stories archive and secondary images do not use repeated blue top rules.
- No gradients, glass, glow, rounded card systems, SaaS component soup, faux newspaper styling, or unnecessary decorative motion.

## Technical architecture

In scope:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections;
- local Markdown;
- custom CSS;
- minimal client-side JavaScript;
- semantic HTML;
- sitemap and robots.txt;
- canonical/Open Graph/social metadata;
- Article structured data;
- custom 404;
- reduced-motion support;
- Cloudflare Pages;
- one narrow Cloudflare Pages Function for `/api/subscribe`;
- beehiiv for newsletter infrastructure.

Explicitly out of scope without a newly validated requirement:

- database;
- authentication/accounts;
- comments/reactions/bookmarks;
- recommendation/personalization systems;
- custom CMS/admin dashboard;
- custom newsletter platform;
- search/pagination/topic filters before inventory requires them;
- paywall/membership;
- job board/events/community platform;
- AI assistant;
- frontend framework or component library by default;
- complex animation framework;
- WebGL/3D;
- monorepo/microservices/general-purpose API/background jobs.

Valid future ideas remain in `BACKLOG.md` until promoted.

## Release boundary

`build/portfilo-v0` is the working branch.

`main` remains the release boundary and should be the Cloudflare production branch. Working-branch pushes should be preview/test deployments, not production releases.

A merge to `main`, deployment decision, and release remain separate approval gates.

## Definition of v0 complete

Before release readiness can be declared:

- content schema validates;
- `npm run check` passes;
- `npm run build` passes;
- production preview is inspected;
- responsive layouts are inspected at `1440 / 1366 / 1024 / 768 / 390 / 375 / 320`;
- no horizontal overflow or broken typography is present;
- keyboard/focus behavior works;
- every distinct newsletter form placement works;
- one real production-configured beehiiv double-opt-in flow is validated;
- sitemap/robots/canonical/social metadata are correct;
- retired routes redirect correctly on Cloudflare;
- production fixtures are excluded;
- final domain/deployment settings are correct;
- release receives explicit founder approval before merge to `main`.
