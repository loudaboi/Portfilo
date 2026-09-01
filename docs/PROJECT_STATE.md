# Portfilo Project State

_Last updated: 2026-09-01_

## Current phase

**Foundation / Phase 0**

The local Git repository has been initialized. Canonical project documents are being established before application scaffolding.

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

- Portfilo chosen as working brand.
- Long-term company thesis established: Filipino-first media/community company for ambitious Filipinos.
- Decision made to separate website/product construction from editorial launch research.
- Decision made to use repository files as durable project context across ChatGPT conversations.
- Local Git repository initialized.
- Initial v0 architecture evaluated against current official documentation.

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

After these foundation files are copied into the repository:

```bash
git add .
git commit -m "docs: establish Portfilo project foundation"
git push -u origin main
git switch -c build/portfilo-v0
node --version
npm --version
```

Then scaffold Astro only if the current Node version satisfies Astro's current minimum requirement.

## Validation status

| Check | Status |
|---|---|
| Local Git initialized | PASS - user confirmed |
| Foundation docs present | PENDING |
| Foundation committed | PENDING |
| GitHub push | PENDING |
| v0 branch created | PENDING |
| Node requirement verified | PENDING |
| Astro scaffolded | NOT STARTED |
| Production build | NOT STARTED |
| Responsive QA | NOT STARTED |
| Deployment | NOT STARTED |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- note validation results;
- note unresolved issues;
- state one concrete next task.
