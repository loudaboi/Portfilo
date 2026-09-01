# Portfilo Project State

_Last updated: 2026-09-01_

## Current phase

**Technical Foundation Complete**

Astro 7.2.10 has been manually installed into the existing Portfilo repository and the baseline static application has been validated.

## Current branch

Use `main` for the canonical foundation commit.

After the foundation is committed and pushed, create:

```bash
git switch -c build/portfilo-v0
```

The v0 application build should happen on `build/portfilo-v0`.

## Current objective

Establish a portable, versioned source of truth for Portfilo, then scaffold the smallest production-capable editorial website.

## Completed

- Portfilo canonical foundation documents established.
- Foundation committed and pushed to GitHub.
- `build/portfilo-v0` branch created.
- Astro 7.2.10 installed.
- Strict TypeScript configuration established.
- `.gitignore` added.
- `node_modules/`, `dist/`, `.astro/`, and environment files excluded from Git.
- Static production build validated.
- Development server validated.
- Root route `/` returns successfully.

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
- Markdown stories
- custom CSS
- minimal client-side JavaScript
- Cloudflare Pages deployment
- Cloudflare Web Analytics
- beehiiv newsletter infrastructure
- GitHub source control

These are frozen for v0 unless a concrete blocker is discovered.

### Operating model

- repository is the source of truth;
- use fresh ChatGPT chats at phase boundaries or when context becomes bloated;
- update this file before a major chat handoff;
- use `git archive` for clean project snapshots when useful.

## In progress

1. Add canonical Markdown files to the repository.
2. Commit the foundation on `main`.
3. Push the foundation commit to GitHub.
4. Create `build/portfilo-v0`.
5. Verify Node and npm.
6. Scaffold Astro.
7. Validate the untouched production build.

## Not started

- Astro application
- content schema
- website design implementation
- story template
- homepage
- series template
- newsletter integration
- analytics
- deployment
- editorial launch research
- first real article

## Known issues / unresolved decisions

- Final production domain is not required for the foundation phase.
- beehiiv publication/account configuration has not been created yet.
- exact production fonts are not frozen yet.
- first editorial series is intentionally not selected.
- no publishable journalism has been researched yet.

## Next task

Implement the minimum Portfilo v0 content architecture using Astro Content Collections.

The next phase should establish:

- story schema;
- content types;
- topics;
- draft/published state;
- authorship;
- publish/update dates;
- optional series membership;
- methodology metadata;
- correction metadata;
- scalable story routing.

Do not begin visual design or real editorial research in this phase.

## Validation status

| Check | Status |
|---|---|
| Local Git initialized | PASS |
| Foundation docs present | PASS |
| Foundation committed | PASS |
| GitHub push | PASS |
| v0 branch created | PASS |
| Astro installed | PASS |
| Production build | PASS |
| Development server | PASS |
| `.gitignore` configured | PASS |
| Content architecture | NOT STARTED |
| Responsive QA | NOT STARTED |
| Deployment | NOT STARTED |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- note validation results;
- note unresolved issues;
- state one concrete next task.
