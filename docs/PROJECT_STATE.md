# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Content Architecture Implemented — Local Validation Pending**

The minimum Portfilo v0 content architecture has been implemented on `build/portfilo-v0`.

The GitHub-connected environment can inspect and write repository files but cannot install or execute the repository's Astro dependencies, so the production build and generated `dist/` routes still require local validation before this phase is considered fully complete.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` until the current phase is validated and intentionally reviewed.

## Current objective

Validate the new content architecture locally, then begin the Editorial Design phase without expanding technical scope.

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
- No new dependencies, framework integrations, CMS, database, analytics, newsletter infrastructure, or visual-design system were added.

## In progress

Local validation of the Content Architecture phase:

```bash
npm ci
npm run build
test -f dist/stories/portfilo-content-architecture-test/index.html
test ! -e dist/stories/portfilo-draft-filtering-test/index.html
```

The build must pass and the route checks must return success before moving to Editorial Design.

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

- Production build for this content-architecture change has not been executed in the GitHub-connected ChatGPT environment.
- Generated route output has not been inspected because `dist/` is produced only by the pending local build.
- No separate Astro type-check package was added because it is not currently part of the repository and is not required to satisfy the implementation itself.
- Final production domain is not required for this phase.
- beehiiv publication/account configuration has not been created yet.
- exact production fonts are not frozen yet.
- first editorial series is intentionally not selected.
- no publishable journalism has been researched yet.

## Next task

Run the local validation commands above on `build/portfilo-v0`.

If all checks pass, the Content Architecture phase is complete and the exact next phase is:

**Portfilo v0 / Editorial Design**

Do not begin real editorial research, newsletter work, analytics, or deployment as part of that design phase.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch access | PASS |
| Canonical docs inspected | PASS |
| Content collection configured | IMPLEMENTED |
| Story schema present | IMPLEMENTED |
| Published fixture present | IMPLEMENTED |
| Draft route filtering present | IMPLEMENTED |
| No new dependencies | PASS |
| No runtime client JavaScript added | PASS |
| Production build for this phase | PENDING LOCAL VALIDATION |
| Published fixture generated in `dist/` | PENDING LOCAL VALIDATION |
| Draft fixture absent from public `dist/` | PENDING LOCAL VALIDATION |
| Responsive QA | NOT STARTED |
| Deployment | NOT STARTED |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- validate the production build;
- confirm the published and draft route checks;
- record any validation failure here if one occurs;
- commit any required fix;
- then begin the Editorial Design phase from the validated branch state.
