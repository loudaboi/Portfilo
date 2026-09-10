# Portfilo v0 Scope

_Last updated: 2026-09-10_

## Objective

Ship the smallest credible Portfilo business-and-technology publication that can publish current News, deeper Why pieces, and reported Hustle profiles, build a direct newsletter relationship, and operate cleanly without unnecessary application infrastructure.

Portfilo v0 remains free.

## Product direction

Current founder-approved direction:

- Portfilo is a business and technology publication.
- **News** is the current/day-to-day editorial layer: what changed.
- **Why** is the question-led deeper layer: why something is happening, how it works, what a pattern means, and what is changing underneath.
- **Hustle** is the people-led reported layer: founders, operators, and business owners, usually examining how something was built, grown, survived, pivoted, or operated.
- Public topics remain `Business / Technology / Startup / AI`.
- Newsletter acquisition is important, but it must not make the publication feel like a marketing funnel.
- Approved newsletter cadence remains three times per week. The former 7-minute reading-time promise is retired and must not be used in public acquisition copy.
- General newsletter acquisition describes Portfilo through its editorial jobs: what changed, why it is happening, and how companies are built and run.
- News, Why, and Hustle archive acquisition may use section-specific copy, but they do not create separate newsletters or separate delivery promises.
- Exact send days and times remain open.
- `briefing` is not approved public acquisition language.
- No individual author/byline system is part of v0. Public editorial identity is Portfilo.

`Stories` is retired as a public section name. The generic journalistic word `story` may still be used internally where it describes an editorial artifact rather than a public navigation section.

## Public route surface

Keep:

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
- `/robots.txt`
- `/api/subscribe`

Retired in v0:

- `/stories` as a public archive; it redirects to `/why`.
- `/stories/[slug]` as a public article route; legacy links redirect to the corresponding `/why/[slug]` path because all existing Story inventory was reclassified as Why.
- `/subscribe` as a standalone page. It redirects to `/#newsletter`.
- `/about`. It redirects to `/`.
- public Series presentation. Series can return only when real editorial inventory justifies it.

## Homepage

The homepage is the primary publication and newsletter entry point.

Current structure:

- compact `Portfilo | News | Why | Hustle` header;
- newsletter signup at the top of the page;
- Latest News strip when inventory exists;
- one primary long-form Feature treatment drawn from published Why/Hustle inventory with an adjacent contextual newsletter/editorial rail;
- News section;
- shared footer acquisition and compact institutional footer.

Do not add separate Why and Hustle homepage blocks merely because they are separate public sections. The existing Feature hierarchy remains the v0 homepage model until real inventory proves another need.

Until real News inventory exists, clearly labeled sample News fixtures may render in production strictly as non-clickable layout placeholders. They must be visibly identified as sample content and not Portfilo reporting, must never create fake article routes or Article metadata, and real published News replaces them automatically.

## News, Why, and Hustle

### News

News is concise current reporting. Real published News items route to `/news/[slug]` and are clickable wherever presented.

### Why

Why is deeper question-led editorial work. It can examine mechanisms, causes, systems, patterns, contradictions, and consequences. Existing explained, analysis, perspective, reported, and other valid content types can live under Why when the section job fits.

Why routes to `/why/[slug]` and uses the shared long-form article treatment.

During the current pre-audience staging period, existing Why drafts may also render as explicit previews so the Why archive can use the inventory already in the repository. Draft status must remain visible, draft routes must be `noindex, nofollow`, and draft routes must not emit the canonical/social/article metadata reserved for published work. This staging visibility does not change `status: draft` to `published` and does not replace a later editorial publication decision.

### Hustle

Hustle is people-led reported work about founders, operators, and business owners. It should focus on what was actually built or operated, the decisions and constraints involved, and what the reporting can establish. It is not a motivation feed or hustle-culture section.

Hustle routes to `/hustle/[slug]` and uses the same shared long-form article treatment as Why. An empty Hustle archive is acceptable until real reporting exists; do not create synthetic inventory to make the section look populated.

### Authors

Individual authors are not part of the public v0 product or content schema. Article structured data identifies Portfilo as the organizational author/publisher.

## Newsletter

All visible signup forms use the shared `NewsletterSignup.astro` component and the same `/api/subscribe` endpoint.

The website does not maintain a separate subscriber database. beehiiv owns double opt-in confirmation, subscriber storage, delivery, and unsubscribe handling.

`/confirmed` remains required as the post-double-opt-in destination.

Current acquisition model:

- general homepage/shared acquisition uses the founder-approved general newsletter message;
- News, Why, and Hustle archives use founder-approved section-specific acquisition messages;
- contextual archive copy explains the editorial job of that section without implying a separate section newsletter;
- cadence is stated on the general acquisition surface rather than repeated in every contextual archive banner;
- no reading-time promise is part of the current newsletter product.

## Content system

Portfilo uses one Astro Content Collection named `articles`, backed by local Markdown. News, Why, and Hustle remain values of the required `section` field rather than separate collections; the collection name is implementation plumbing, not a public section label.

Required editorial dimensions include:

```yaml
section: news | why | hustle
contentType: reported | explained | guide | profile | analysis | perspective | field-notes | partner
topic: business | technology | startup | ai
status: draft | published
```

All editorial entries require:

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

News entries cannot be `featured`. Why and Hustle entries may be featured when editorially justified.

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
- Source Serif 4 for Why/Hustle long-form reading where appropriate.
- IBM Plex Mono only for utility/data/source use where justified.
- Portfilo blue is structural, not decorative.
- The primary homepage Feature and primary article hero may use the approved thin blue top rule.
- Supporting News/Why/Hustle archive and secondary images do not use repeated blue top rules.
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
- any temporary production sample News fixtures are clearly labeled, non-clickable, route-less, and replaced before broad audience launch;
- any temporarily exposed Why/Hustle drafts remain visibly labeled and noindex until separately approved for publication;
- final domain/deployment settings are correct;
- release receives explicit founder approval before merge to `main`.