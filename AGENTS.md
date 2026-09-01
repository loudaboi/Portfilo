# Portfilo Working Instructions

These instructions apply to any AI or human contributor working in this repository.

## 1. Repository authority

The repository is the source of truth.

Before making changes, read:

1. `docs/PROJECT_STATE.md`
2. `docs/V0_SCOPE.md`
3. the relevant canonical standard
4. nearby implementation files before editing them

Do not rely on remembered chat context when repository files are available.

## 2. Scope discipline

Portfilo v0 is a publication, not a platform.

Do not implement items from `BACKLOG.md` unless they are explicitly promoted into the current scope.

Do not add a dependency, service, framework, database, or abstraction merely because it may be useful later.

Before adding a dependency, ask:

- What current requirement needs it?
- Can the requirement be met clearly with the existing stack?
- What maintenance or runtime cost does it introduce?
- Is the added complexity reversible?

Prefer the simplest implementation that preserves a clean migration path.

## 3. Current architecture rules

For v0:

- Astro + TypeScript
- build-time Astro Content Collections
- Markdown for stories
- custom CSS
- no frontend framework by default
- no database
- no authentication
- no custom CMS
- no custom newsletter backend beyond the approved single-purpose beehiiv subscription proxy in `functions/api/subscribe.js`
- static deployment first

The newsletter proxy exists only so Portfilo can render its own accessible signup UI while beehiiv remains responsible for subscriber storage, confirmation, delivery, unsubscribe handling, and newsletter operations. Do not expand the proxy into a newsletter platform, subscriber database, account system, or general API layer without a new validated requirement.

React, Vue, Svelte, server rendering, database infrastructure, and application state libraries require a specific current need, not hypothetical scale.

## 4. Editorial integrity

Do not fabricate journalism, quotes, interviews, statistics, sources, or placeholder findings.

Design fixtures may use clearly labeled fictional structure, but must not look like real reported claims.

Any publishable factual story must follow:

- `docs/EDITORIAL_STANDARD.md`
- `docs/RESEARCH_STANDARD.md`
- `docs/PUBLISHING_STANDARD.md`

AI is an assistant for research organization, analysis, challenge, drafting, and editing. AI output is not evidence.

## 5. Research integrity

For factual work:

- prefer primary sources;
- record evidence before drafting;
- distinguish fact, reported claim, estimate, inference, and opinion;
- search for contradictory evidence;
- verify material claims against sources;
- preserve meaningful caveats;
- never strengthen a headline beyond the evidence.

If evidence is insufficient, say so or do not publish the claim.

## 6. Design discipline

Follow `docs/DESIGN_DIRECTION.md`.

Public-facing copy must also follow `docs/COPY_STYLE.md`.

Do not default to generic SaaS components, card grids, gradients, glassmorphism, or decorative motion.

Prefer typography, composition, photography, data, whitespace, and evidence as the visual language.

Mobile is a first-class layout, not a compressed desktop design.

For public copy:

- use familiar interface labels before branded alternatives;
- keep internal project language out of production surfaces;
- prefer clear, concrete, useful language over promotional or AI-shaped phrasing;
- express Filipino specificity through real context rather than decorative slang or clichés.

## 7. Implementation discipline

Before editing:

- inspect the current code;
- understand the existing pattern;
- modify only what the task requires.

After editing:

- run the relevant build/type checks;
- inspect the affected pages;
- fix errors introduced by the change;
- update `docs/PROJECT_STATE.md` at meaningful phase boundaries.

Never claim validation passed unless it was actually run.

## 8. Chat handoffs

A new ChatGPT conversation should not need the previous transcript.

At a phase boundary:

1. commit stable work;
2. update `docs/PROJECT_STATE.md`;
3. record unresolved issues;
4. record the exact next task;
5. optionally create `portfilo-context.zip` from the stable commit.

Suggested new-chat instruction:

> Continue Portfilo from this repository snapshot. Read `AGENTS.md` and `docs/PROJECT_STATE.md` completely first, then read `docs/V0_SCOPE.md` and the canonical documents relevant to the current phase. Inspect the repository before proposing or changing implementation. Treat repository files as authoritative.

## 9. Definition of done

A task is not done because code exists.

It is done when:

- the requested behavior is implemented;
- scope has not silently expanded;
- relevant validation passes;
- obvious regressions have been checked;
- documentation/state is updated when necessary.
