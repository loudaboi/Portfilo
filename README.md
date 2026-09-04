# Portfilo

Portfilo is a business and technology publication.

The current v0 product is deliberately small: a research-led editorial website, a structured publishing system, and Portfilo Brief for email distribution. The v0 is a publication, not a platform.

## Current objective

Build the smallest credible Portfilo publication that:

- publishes deeply researched stories cleanly;
- has a distinctive editorial identity;
- collects an owned audience through email;
- is easy to operate without a CMS or database;
- preserves a clean path for later expansion without adding premature infrastructure.

## Source of truth

The repository is authoritative. Chat conversations are working sessions, not project memory.

Before starting work in a new chat or environment, read:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/V0_SCOPE.md`
4. `docs/DOCUMENT_STATUS.md`
5. the canonical document relevant to the current task

If a conversation conflicts with a committed canonical document, the repository wins unless that document is explicitly updated.

## Current branch

The active v0 development branch is:

`build/portfilo-v0`

`main` remains the release boundary until an intentional release review.

## Canonical documents

- `docs/PROJECT_STATE.md` — current phase, status, next task, validation state
- `docs/DOCUMENT_STATUS.md` — current vs historical/superseded documentation map
- `docs/V0_SCOPE.md` — v0 boundaries and technical choices
- `docs/CONTENT_PLANNING.md` — story-selection and assignment system
- `docs/EDITORIAL_STANDARD.md` — editorial quality and trust rules
- `docs/RESEARCH_STANDARD.md` — evidence, sourcing, verification, and AI rules
- `docs/WRITING_SYSTEM.md` — pre-draft form and writing decision system
- `docs/PUBLISHING_STANDARD.md` — workflow from idea to published story
- `docs/COPY_STYLE.md` — public-copy and headline/dek style rules
- `docs/DESIGN_DIRECTION.md` — visual and interaction direction
- `docs/IMAGE_SYSTEM.md` — editorial imagery rules
- `docs/EMAIL_SYSTEM_PLAN.md` — newsletter architecture
- `docs/CLOUDFLARE_PRODUCTION_SETUP.md` — production deployment requirements
- `BACKLOG.md` — valid ideas intentionally outside current scope
- `research/README.md` — research packet structure

## Technical direction

For v0:

- Astro + TypeScript
- static-first output
- local Markdown through Astro Content Collections
- custom CSS
- minimal client-side JavaScript
- Cloudflare Pages for deployment
- one narrow Pages Function at `/api/subscribe`
- beehiiv for subscriber storage, confirmation, delivery, and unsubscribe handling
- GitHub for versioned source control

These choices are frozen for v0 unless implementation uncovers a concrete blocker. They are not permanent commitments for every future Portfilo product.

## Local development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run check
npm run build
```

## Security

Never commit or upload:

- `.env` or `.env.*`
- `.dev.vars`
- API keys
- access tokens
- passwords
- private credentials
- `node_modules`
- build output unless explicitly required

Use `.dev.vars.example` only as a local configuration template.

For clean handoffs, prefer a Git archive from a stable commit:

```bash
git archive --format=zip --output=portfilo-context.zip HEAD
```

This keeps project context portable without including Git internals or untracked secrets.
