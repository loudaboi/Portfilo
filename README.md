# Portfilo

Portfilo is a Filipino-first media and community company built around practical intelligence for ambitious Filipinos.

The long-term opportunity may extend into research, events, opportunities, community, membership, education, recruiting, and software. The v0 product is deliberately smaller: a high-quality editorial website and publishing system.

## Current objective

Build the smallest credible Portfilo publication that:

- can publish deeply researched stories cleanly;
- has a distinctive editorial identity;
- collects an owned audience through email;
- is easy to operate without a CMS or database;
- does not create technical debt that forces an immediate rewrite if traction arrives.

The v0 is a publication, not a platform.

## Source of truth

The repository is authoritative. Chat conversations are working sessions, not project memory.

Before starting work in a new chat or environment, read:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/V0_SCOPE.md`
4. the canonical document relevant to the current task

If a conversation conflicts with a committed canonical document, the repository wins unless the document is explicitly updated.

## Canonical documents

- `docs/PROJECT_STATE.md` - current phase, status, next task, validation state
- `docs/V0_SCOPE.md` - v0 boundaries and technical choices
- `docs/EDITORIAL_STANDARD.md` - editorial quality and trust rules
- `docs/RESEARCH_STANDARD.md` - evidence, sourcing, verification, and AI rules
- `docs/PUBLISHING_STANDARD.md` - workflow from idea to published story
- `docs/DESIGN_DIRECTION.md` - visual and interaction direction
- `docs/REFERENCE_SOURCES.md` - primary external references behind current technical/editorial choices
- `BACKLOG.md` - valid ideas that are intentionally not in current scope
- `research/README.md` - research packet structure

## Working model

Portfilo should optimize for:

1. trust before volume;
2. research before prose;
3. useful specificity before generic advice;
4. owned audience before platform dependence;
5. structural scalability before infrastructure complexity.

## Initial technical direction

For v0:

- Astro with TypeScript
- local Markdown content through Astro Content Collections
- custom CSS
- minimal client-side JavaScript
- Cloudflare Pages for static deployment
- Cloudflare Web Analytics
- beehiiv for newsletter infrastructure
- GitHub for versioned source control

These choices are frozen for v0 unless implementation uncovers a concrete blocker. They are not permanent commitments for every future Portfilo product.

## Security

Never commit or upload:

- `.env` or `.env.*`
- API keys
- access tokens
- passwords
- private credentials
- `node_modules`
- build output unless explicitly required

For clean ChatGPT handoffs, prefer a Git archive from a stable commit:

```bash
git archive --format=zip --output=portfilo-context.zip HEAD
```

This keeps the project context portable without including Git internals or untracked secrets.
