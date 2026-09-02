# Portfilo Content-First Copy Replacement

_Status: approved and implemented. Local build and responsive QA pending._

_Last updated: 2026-09-02_

## Governing decision

This implementation follows the approved **content-first / no-tagline** architecture in `docs/COPY_STYLE.md` and `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

The main principle is deletion before replacement.

The previous public copy was rejected because it tried to explain geography, audience, editorial philosophy, usefulness, and brand personality inside the same public-facing system. The approved replacement removes that burden from the brand copy and gives more visual and editorial weight to actual stories.

## Approved primary navigation

Global navigation is part of this implementation rather than a later pass.

Primary navigation:

- `Latest` → `/#latest` from non-home pages and `#latest` from the Homepage;
- `Standards` → `/standards`;
- `About` → `/about`;
- `Subscribe` → `/subscribe`.

The Portfilo wordmark links to `/` and therefore acts as Home.

Do not add a redundant `Home` link to the primary nav.

Do not add Business, Technology, Startups, AI, or Building to primary navigation until real topic-index routes exist.

Do not add Series to primary navigation while Series is represented only by development fixtures.

There is no hamburger menu in v0 while these four short links fit as visible navigation. On narrow layouts, navigation becomes a visible second row rather than being hidden behind JavaScript.

`Subscribe` may use the signal-blue accent but should remain editorial rather than becoming a rounded SaaS-style button.

## Shared brand changes

Across public templates:

- remove the rejected geographic/tagline strapline;
- do not replace it with another slogan;
- use the masthead space for navigation;
- remove `Portfilo / Philippines` from footers;
- keep page-context labels on Story, Series, and Standards where they still help orientation;
- use active-page styling on About, Subscribe, and Standards where applicable.

## Homepage `/`

Implemented:

- metadata title: `Portfilo`;
- metadata description: `Portfilo covers business, technology, startups, AI, and building.`;
- compact coverage strip instead of a giant institutional hero;
- coverage label: `Business / Technology / Startups / AI / Building`;
- temporary fixture-era descriptor: `Stories about companies, products, markets, and the people building them.`;
- the existing feature story is promoted to the primary page `h1` and main visual statement;
- feature preview dek: `A design preview for a future business story. No reported findings are being presented.`;
- `Latest` now has a stable `#latest` anchor used by global navigation;
- the dark institutional block is simplified into an About bridge;
- About bridge headline: `Portfilo is a business and technology publication.`;
- About bridge body: `We cover companies, startups, AI, markets, products, and the work of building them.`;
- Homepage Portfilo Brief copy is reduced to `Portfilo Brief` and `New stories by email.`;
- footer positioning copy is removed.

The temporary coverage descriptor is not a tagline. It may be deleted after visual QA or when real launch stories make it unnecessary.

## About `/about`

Implemented:

- hero: `Portfilo is a business and technology publication.`;
- intro: `We cover companies, startups, AI, markets, products, and the work of building them.`;
- standalone positioning block removed;
- Philippine-context manifesto section removed entirely;
- Section 01: `Stories take different forms.`;
- body: `Portfilo publishes news, explanations, profiles, analysis, guides, and field notes. The subject decides the format.`;
- topic descriptions simplified to concrete coverage nouns;
- Section 02: `People curious about business and technology.`;
- body: `That includes people learning the subject, already working in it, or building something themselves.`;
- reader note retained: `If a term matters, we explain it.`;
- Standards bridge: `Our standards are public.`;
- founder remains only `Founder / Louda Tuppal`;
- footer positioning copy removed.

## Subscribe `/subscribe`

Implemented while preserving the native form and API behavior:

- hero: `Portfilo Brief`;
- intro: `New Portfilo stories by email.`;
- signup headline: `Subscribe`;
- support: `Enter your email. We’ll send a confirmation link.`;
- form hint: `No fixed schedule yet. Unsubscribe any time.`;
- topic-list hero block removed;
- geographic `Perspective` explanation removed;
- product facts are now Schedule, Confirmation, and Unsubscribe;
- provider note is literal: beehiiv handles delivery and unsubscribe requests;
- validation, loading, honeypot, endpoint, and double-opt-in success behavior remain unchanged;
- footer positioning copy removed.

## Standards, Story, and Series

Substantive Standards copy, story content, story metadata, and Series fixture content were intentionally left unchanged.

All three now include the same primary navigation and no longer carry the rejected brand strapline.

The Series template still exposes `Series ID` publicly. That remains a separate pre-launch cleanup item and was not silently folded into this voice/navigation implementation.

## What this implementation intentionally does not do

- no permanent tagline;
- no geographic positioning slogan;
- no topic-index navigation before topic routes exist;
- no hamburger menu while visible navigation fits;
- no rewrite of substantive Standards copy;
- no rewrite of story fixtures or Series editorial fixtures;
- no change to the Subscribe backend;
- no claim that local production build or browser QA has passed.

## QA gate

Before this implementation can be closed, require:

1. `npm run build` PASS locally;
2. Homepage, About, Subscribe, Standards, Series, and at least one Story reviewed in a browser;
3. desktop, intermediate/tablet, 390px, and 360px widths checked;
4. navigation links work from every reviewed route;
5. `Latest` reaches the Homepage `#latest` section;
6. active-page styling is legible where present;
7. no horizontal overflow or broken header wrapping;
8. wordmark still returns Home;
9. no rejected tagline/geographic positioning remains on a current public surface;
10. Subscribe visual/form states remain intact.

Subscribe end-to-end delivery is a separate gate that resumes when the beehiiv API key becomes available.
