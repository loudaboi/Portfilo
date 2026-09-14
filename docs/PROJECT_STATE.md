# Portfilo Project State

_Last updated: 2026-09-14_

## Current phase

**PORTFILO V1 PHASE 3E HOMEPAGE QA ACTIVE**

Approved and completed:

- v1 studio repositioning;
- Obsidian Precision;
- concrete v1 design system;
- clean v1 working-tree strategy;
- Journal migration;
- Work / Services / Hustle / Journal / Contact route foundations;
- namespaced newsletter API;
- removal of obsolete v0 routes/content/assets/docs/research;
- Phase 3A homepage positioning + narrative research;
- founder-approved **Problem-led software** positioning territory and claim boundaries;
- Phase 3B homepage copy approval;
- Phase 3C homepage composition + interaction approval;
- Phase 3D homepage implementation.

## Branches

Working branch:

`build/portfilo-v1`

Release boundary:

`main`

No merge or deployment is authorized.

## Product architecture

`Work / Services / Hustle / Journal / Contact`

Newsletter is embedded.

News, Why, and the public Standards page are retired.

## Phase 3A result

Founder-approved positioning authority:

`docs/V1_HOMEPAGE_POSITIONING.md`

Locked territory:

**Problem-led software**

Portfilo starts with the business problem and determines the appropriate software response. AI remains a capability, not the company category. Work remains the primary proof surface.

## Phase 3B result

Founder-approved copy authority:

`docs/V1_HOMEPAGE_COPY.md`

Approved hero:

**Software built around the problem.**

Approved supporting sentence:

Portfilo designs and develops software around business needs and constraints, from internal systems and automation to practical AI integrations and customer-facing products.

Approved section framing, newsletter message, and Contact CTA are recorded in the copy authority.

## Phase 3C result

Founder-approved composition authority:

`docs/V1_HOMEPAGE_COMPOSITION.md`

The homepage composition, responsive behavior, motion hierarchy, reduced-motion behavior, and conditional-rendering rules are locked.

## Phase 3D result

The legacy editorial homepage was replaced at `/` with the approved v1 studio homepage.

Implemented:

- restrained typographic hero;
- conditional Selected Work sourced from published `work` entries;
- problem-led Services composition;
- conditional single-feature Hustle surface;
- conditional three-item Journal preview;
- embedded newsletter acquisition surface;
- homepage Contact section held back until a real public contact path exists;
- GSAP hero/section reveal behavior with Astro navigation cleanup;
- reduced-motion behavior;
- responsive desktop/tablet/mobile composition;
- removal of the legacy homepage ticker/news presentation.

Final validated runtime commit:

`4de81ee79f8a5bd3dc73d2dcc7d6897674064c67`

GitHub Actions run:

`34805811760`

Result:

**PASS**

Passed:

- dependency installation;
- `astro check`;
- production build.

No merge to `main` or deployment occurred.

## Intentionally unresolved before release

- Phase 3E visual/interaction QA;
- real Work case-study evidence/media;
- final Services page copy beyond the approved homepage framing;
- public Contact destination/email;
- v1 favicon/icon replacement;
- v1 default social preview replacement;
- final newsletter cadence;
- optional move from `/confirmed` to `/newsletter/confirmed`, coordinated with beehiiv.

## Exact next task

**PHASE 3E HOMEPAGE QA**

Validate:

- desktop/tablet/mobile composition;
- keyboard/focus behavior;
- reduced motion;
- Astro navigation lifecycle and GSAP cleanup;
- overflow/layout stability;
- homepage performance;
- metadata and conditional rendering.

Do not merge to `main` or deploy.

The homepage hierarchy remains:

`Hero -> Selected Work -> Services -> Hustle -> Journal -> Newsletter -> Contact -> Footer`

Sections with no real public content remain omitted from the homepage.
