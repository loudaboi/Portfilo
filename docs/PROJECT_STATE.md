# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Content Architecture Complete**

The minimum Portfilo v0 content architecture is implemented and locally validated on `build/portfilo-v0`.

Local validation on 2026-09-02 confirmed that the production build passes, the published fixture generates its expected static story route, and the draft fixture does not generate a public production route.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Begin the Portfilo v0 Editorial Design phase without expanding technical scope or beginning real editorial research.

## Completed

- Portfilo canonical foundation documents established.
- Foundation committed and pushed to GitHub.
- `build/portfilo-v0` branch created.
- Astro 7.2.10 installed.
- Strict TypeScript configuration established.
- `.gitignore` added.
- Baseline static production build previously validated.
- Baseline development server previously validated.
- Root route `/` previously validated.
- Build-time `stories` Content Collection configured with local Markdown.
- Story schema added with controlled content types, controlled topics, authorship, status, featured state, publish/update dates, optional series metadata, optional methodology metadata, and structured correction metadata.
- Published stories require `publishedAt`.
- `seriesOrder` is rejected unless `series` is present.
- `updatedAt` is rejected when earlier than `publishedAt`.
- Generic static story route added at `/stories/[slug]`.
- Production route generation explicitly filters to `status: published`.
- One synthetic published fixture added to exercise long titles, optional metadata, Markdown body rendering, and generic routing.
- One synthetic draft fixture added to exercise draft filtering.
- Production build validated locally after the content architecture implementation.
- Published fixture route validated at `dist/stories/portfilo-content-architecture-test/index.html`.
- Draft fixture confirmed absent at `dist/stories/portfilo-draft-filtering-test/index.html`.
- No new dependencies, framework integrations, CMS, database, analytics, newsletter infrastructure, or visual-design system were added.

## In progress

None. The Content Architecture phase is complete.

## Not started

- website design implementation
- final story visual design
- homepage visual design
- series page implementation
- newsletter integration
- analytics
- deployment
- editorial launch research
- first real article

## Frozen decisions for v0

### Product

Portfilo v0 is an editorial publication and publishing system.

It is not an application platform, social network, membership product, jobs platform, or AI product.

### Editorial

- research before prose;
- AI output is not evidence;
- publishable factual claims require source support;
- uncertainty and caveats must be preserved;
- editorial launch series will be selected through a separate research project after the publishing system exists.

### Technical

- Astro + TypeScript
- build-time Content Collections
- local Markdown stories
- custom CSS
- minimal client-side JavaScript
- static deployment first
- Cloudflare Pages deployment
- Cloudflare Web Analytics
- beehiiv newsletter infrastructure
- GitHub source control

These are frozen for v0 unless a concrete blocker is discovered.

### Content architecture

- one `stories` collection for v0;
- no separate author collection;
- no separate series collection yet;
- story filenames provide the URL slug;
- public story URLs use `/stories/[slug]`;
- drafts remain in the collection for validation/authoring but are excluded from public static paths;
- series remains optional story metadata until real editorial requirements justify normalization.

## Known issues / unresolved decisions

- No separate Astro type-check package was added because it is not currently part of the repository and is not required to satisfy the implementation itself.
- Final production domain is not required for this phase.
- beehiiv publication/account configuration has not been created yet.
- exact production fonts are not frozen yet.
- first editorial series is intentionally not selected.
- no publishable journalism has been researched yet.

## Next task

Begin:

**Portfilo v0 / Editorial Design**

The next phase should establish the minimum credible editorial visual system for the existing generic story surface while preserving the validated content architecture.

Do not begin real editorial research, newsletter work, analytics, or deployment as part of that phase.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch access | PASS |
| Canonical docs inspected | PASS |
| Content collection configured | PASS |
| Story schema present | PASS |
| Published fixture present | PASS |
| Draft route filtering present | PASS |
| No new dependencies | PASS |
| No runtime client JavaScript added | PASS |
| Production build for this phase | PASS — local validation 2026-09-02 |
| Published fixture generated in `dist/` | PASS — local validation 2026-09-02 |
| Draft fixture absent from public `dist/` | PASS — local validation 2026-09-02 |
| Responsive QA | NOT STARTED |
| Deployment | NOT STARTED |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- note validation results;
- note unresolved issues;
- state one concrete next task.
