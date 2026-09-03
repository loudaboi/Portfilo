# Portfilo Site Copy Implementation

_Last updated: 2026-09-03_

## Status

**PHASE 2B IMPLEMENTED / DEPLOYED VISUAL REVIEW REQUIRED**

This file records the implementation that followed `docs/SITE_COPY_AND_IA_AUDIT.md`.

The audit remains the decision record. This file records what was actually changed.

Core rule used during implementation:

> Remove unsupported or redundant copy first. Rewrite only when the remaining page would otherwise be inaccurate or unclear.

No article body prose was changed in Phase 2B.

## Homepage

File:

`src/pages/index.astro`

Changes:

- removed the temporary fixture-era descriptor `Stories about companies, products, markets, and the people building them.`;
- kept the approved topic taxonomy `Business / Technology / Startups / AI / Building`;
- removed the repeated `Featured story` label;
- removed the repeated `Published stories` label from the Latest section while keeping the story count;
- kept the literal About statement and operational Portfilo Brief copy.

No replacement tagline or brand slogan was introduced.

## About

File:

`src/pages/about.astro`

Changes:

- replaced the generic `Stories take different forms.` heading with the literal `Editorial types`;
- replaced the stale format paragraph with copy grounded in `docs/EDITORIAL_STANDARD.md`;
- normal editorial formats are now listed as Reported, Explained, Guide, Profile, Analysis, Perspective, and Field Notes;
- Partner is described separately as commercial partner content because the editorial standard classifies it as commercial content rather than ordinary editorial journalism.

Unchanged because already grounded:

- product definition;
- coverage statement;
- topic descriptions;
- audience statement;
- public-standards bridge;
- founder attribution.

## Research & Standards

File:

`src/pages/standards.astro`

Changes:

- removed the stylized closing `The evidence sets the limit.` rather than replacing it with a new slogan;
- retained the substantive sourcing, verification, correction, and commercial-independence procedures;
- aligned the public AI section with `docs/WRITING_SYSTEM.md`;
- AI assistance is now described as drafting/editing after the writing form is chosen;
- AI is explicitly not treated as editorial authority for structure, voice, or institutional claims;
- factual material surfaced by AI still requires independent verification.

## Subscribe

File:

`src/pages/subscribe.astro`

Changes:

- retained the literal product promise `New Portfilo stories by email.`;
- retained form instructions, validation/status copy, confirmation requirement, unsubscribe statement, and schedule status;
- replaced the repeated `New stories by email.` section headline with the functional `Subscription details`;
- removed the extra provider/unsubscribe section because beehiiv handling already belongs on Privacy and the form already states unsubscribe availability.

No signup behavior or API copy was changed.

## Confirmation and 404

Files:

- `src/pages/confirmed.astro`
- `src/pages/404.astro`

Phase 2A had already changed their archive actions to `Browse stories` -> `/stories`.

Phase 2B found no further copy change necessary.

## Privacy

File:

`src/pages/privacy.astro`

Decision:

**KEEP / VERIFIED AGAINST CURRENT REPOSITORY FLOW**

The current signup implementation in `functions/api/subscribe.js` receives the submitted email through the Cloudflare Pages Function and forwards the subscription request to beehiiv. The site does not maintain a separate subscriber database in the current architecture.

The Privacy page remains consistent with that implementation and was not rewritten for personality.

Re-verify Privacy before final launch if Cloudflare Web Analytics or any additional data-processing feature is enabled.

## Stories index and story UI

Phase 2A already established:

- `/stories` as the stable archive;
- `Stories` in global navigation;
- separate `dek` and `description` metadata jobs.

Phase 2B did not rewrite article deks, descriptions, or bodies.

C027, C009, and C030 remain separate Phase 3 writing-system assignments.

## Validation state

Repository/source consistency review: **PASS**.

A local `npm run build` was not run from the connected GitHub workspace and must not be claimed as passed.

Cloudflare deployment/visual review of these Phase 2B changes is still required.
