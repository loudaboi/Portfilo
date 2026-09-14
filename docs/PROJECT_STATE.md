# Portfilo Project State

_Last updated: 2026-09-14_

## Current phase

**PORTFILO V1 PHASE 3B HOMEPAGE COPY APPROVAL ACTIVE**

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
- founder-approved **Problem-led software** positioning territory and claim boundaries.

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

## Phase 2 result

The active v1 branch now:

- keeps only the three durable former Why articles, migrated to `journal`;
- removes all nine News articles and News routes;
- removes Why routes;
- removes the public Standards route;
- removes the old v0 redirects file;
- removes legacy publication-only article/archive/footer components;
- removes News-only media;
- removes legacy v0 wordmark/symbol variants;
- uses `/api/newsletter/subscribe`;
- updates Privacy for local font delivery;
- updates 404/confirmation links away from `/stories`;
- adds the `work` content collection and route foundation;
- adds Services and Contact foundations;
- prunes obsolete v0 docs/research from the active branch.

Tracked-file count moved from **306** at audit time to **87** after cleanup.

Approximate tracked size moved from **7.69 MB** to **3.29 MB**.

Git history remains the historical archive.

## Phase 3A result

Founder-approved positioning authority:

`docs/V1_HOMEPAGE_POSITIONING.md`

Locked territory:

**Problem-led software**

Portfilo starts with the business problem and determines the appropriate software response. AI remains a capability, not the company category. Work remains the primary proof surface.

Final public wording is not yet approved.

## Validation

Validated runtime/head:

`a0f6878bcd205c3ebd0089ac2730195d9a806281`

GitHub Actions run:

`34781911660`

Result:

**PASS**

Passed:

- dependency installation;
- `astro check`;
- production build.

No runtime changes occurred during Phase 3A documentation advancement.

No merge to `main` or deployment occurred.

## Intentionally unresolved before release

- final homepage copy;
- Phase 3 homepage implementation;
- real Work case-study evidence/media;
- final Services copy;
- public Contact destination/email;
- v1 favicon/icon replacement;
- v1 default social preview replacement;
- final newsletter promise/cadence;
- optional move from `/confirmed` to `/newsletter/confirmed`, coordinated with beehiiv.

## Exact next task

**PHASE 3B HOMEPAGE COPY APPROVAL**

Use the approved Phase 3A positioning authority to develop and approve:

- hero headline;
- hero supporting sentence;
- section framing;
- newsletter message;
- Contact CTA.

Do not implement the homepage during Phase 3B.

The homepage hierarchy remains:

`Hero -> Selected Work -> Services -> Hustle -> Journal -> Newsletter -> Contact -> Footer`
