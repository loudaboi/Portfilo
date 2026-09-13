# Portfilo

Portfilo is being repositioned as a software design and development studio focused on solving real business problems through custom software, automation, and practical AI.

The studio is the primary product. Hustle, Journal, and the newsletter form the supporting editorial and distribution layer.

## Repository authority

Read current authority in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V1_SCOPE.md`
5. task-specific current standards/decision records
6. current source

Historical v0 publication files remain useful provenance but do not override the v1 authority map.

For nontrivial product, copy, design, motion, naming, editorial, or other public-facing decisions, apply:

`skills/portfilo-anti-slop/SKILL.md`

## Branches

Active v1 working branch:

`build/portfilo-v1`

Historical v0 working branch:

`build/portfilo-v0`

Release boundary:

`main`

Do not merge to `main`, deploy, or release without explicit approval.

## Approved v1 public architecture

Primary navigation:

`Work / Services / Hustle / Journal / Contact`

Newsletter remains an important embedded acquisition/distribution layer rather than a required primary page.

News is retired as a primary v1 product.

Why evolves into Journal.

Hustle remains people-led reporting and may cover founders, CTOs, engineers, operators, independent builders, and other relevant people building or operating businesses and technology.

## Design status

The inherited runtime still uses the v0 publication design.

That is temporary.

V1 design research is the next active phase. Current approved research direction is dark, neutral, silver/graphite, minimal color, highly crafted motion, strong Work presentation, and an overall feeling of technical excellence and premium control.

No final v1 design system is approved yet.

## Technical baseline

Default foundation:

- Astro + TypeScript
- static-first output
- Astro Content Collections where useful
- custom CSS
- semantic HTML
- Cloudflare Pages
- existing beehiiv integration where useful

A dedicated motion library may be evaluated after the design system establishes a real need.

Do not add major infrastructure for hypothetical scale.

## Local development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run check
npm run build
npm run preview
```

Never report a command as passing unless it actually ran against the relevant state.

## Security

Never commit credentials, tokens, secrets, `.env` files, `.dev.vars`, `node_modules`, or build output unless explicitly required.
