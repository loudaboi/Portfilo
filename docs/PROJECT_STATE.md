# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Voice & Positioning Reset — RESEARCH IN PROGRESS**

The most recent public-copy revision was **rejected by the user during copy QA**. It must not be treated as approved direction.

The rejected revision introduced lines such as:

- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`
- `Some stories start here. Others start somewhere else and matter here anyway.`

The user found this copy vague, over-explained, geographically forced, and recognizably AI-shaped. That assessment is now authoritative for the current phase.

Do not continue polishing that positioning. Do not defend or iterate on the `from the Philippines` framing by default. Re-research the voice and product proposition from first principles before another public-copy implementation.

The current public templates still contain the rejected implementation because no replacement has been approved yet. Treat them as a failed candidate preserved only until the next approved rewrite is ready.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Completed phases

- Foundation
- Content Architecture
- Editorial Design
- Wordmark Exploration & Lock
- Editorial Taxonomy Alignment
- Homepage Visual Design
- Series Page Foundation & Visual Design
- Research & Standards Page
- About Page visual direction

The visual system remains approved. The current failure is copy/positioning, not the core visual direction.

## Active blocker

Portfilo does not yet have an approved public voice or positioning line.

The previous strategy over-indexed on explaining:

- why the publication is Philippine;
- how global stories relate back to the Philippines;
- why the journalism is useful, evidence-aware, or trustworthy;
- who the audience should imagine themselves to be.

This created abstract connective language instead of product clarity.

The new research direction is inspired primarily by **BackScoop** and other publications that reach younger readers through direct product language rather than elaborate brand manifestos.

## Research direction

### BackScoop lesson

BackScoop is the primary reference for the current reset because it began with a young founder from the Philippines solving a concrete information problem and built a regional audience without making the founder's nationality or a geographic philosophy carry the brand copy.

Current BackScoop public copy is direct and product-led. It typically does four things:

1. names the subject;
2. states what the reader gets;
3. states cadence or format;
4. shows real stories immediately.

Its personality comes primarily from headlines, story writing, and product execution rather than from a long positioning explanation.

Portfilo should study that model without copying BackScoop's exact tone or scope.

### New working hypothesis

Portfilo may not need a traditional tagline at all for v0.

The wordmark, topics, homepage content, newsletter product, and story selection may be enough to establish the brand. If a short descriptor is used, it should behave like product information rather than a mission statement.

Geography does not need to appear in the masthead or hero unless it performs a clear reader-facing job.

Philippine relevance can instead emerge through:

- what Portfilo chooses to cover;
- examples and reporting;
- distribution and community;
- local companies, markets, people, institutions, prices, and constraints when genuinely relevant.

Do not force `Philippines`, `Filipino`, `here`, `local`, or similar language into brand copy merely to prove identity.

## Audience

The intended early audience remains younger readers around the founder's peer group who are curious about business, technology, startups, AI, companies, careers, and building.

This is an internal distribution/editorial focus, not necessarily public-facing brand copy.

Do not label the publication `Gen Z media`, `for young Filipinos`, or `for ambitious Filipinos` unless future evidence gives a concrete reason.

The public copy should make the product interesting and legible without asking readers to identify with a flattering demographic label.

## Voice reset rules

Until a revised copy guide is approved, use these temporary constraints for new brand-copy exploration:

- prefer nouns, verbs, facts, formats, and schedules over abstractions;
- say what the publication covers before explaining why it exists;
- do not write geographic philosophy into the homepage hero;
- do not explain Portfilo's global-versus-local permission in marketing copy;
- avoid slogans built around `clarity`, `intelligence`, `insight`, `context`, `ambition`, `what matters`, `what comes next`, or `making sense` unless a specific line proves unusually strong;
- avoid balanced `X, Y, and Z` mission sentences when a shorter concrete sentence works;
- avoid symmetrical contrast slogans and repeated `not X, but Y` constructions;
- do not claim trust, usefulness, rigor, or intelligence when the product can demonstrate them;
- one short sentence is preferable to a paragraph that pre-answers objections;
- allow copy to be plain when plain is stronger;
- personality should come from specific word choice and editorial taste, not forced cleverness;
- Standards, corrections, methodology, and disclosures remain literal and restrained.

## AI-writing concern

The project treats recognizably machine-shaped brand prose as a product-quality failure even when the grammar is correct.

Research on LLM-assisted writing has found tendencies toward greater lexical formality, recurring preferred vocabulary, formulaic phrasing, repetition, and more uniform stylistic patterns. Portfilo's practical editing concern is broader than detecting specific AI words: the site should avoid prose that feels excessively polished, explanatory, symmetrical, generic, or structurally predictable.

The previous rejected lines are examples of this failure because they used vague deictic language (`here`) and explanatory bridge sentences to make the positioning logically complete rather than simply useful to a reader.

## Exact next task

**Research and plan only. Do not implement another public-copy rewrite yet.**

Research should:

1. study BackScoop's current homepage, newsletter, archive, section naming, headlines, and founder explanation of the original product problem;
2. compare a small set of useful references such as Morning Brew, The Hustle, The Peak, Sherwood, Semafor newsletters, and Every without averaging their voices together;
3. identify what each publication says above the fold and what it deliberately does not say;
4. separate product proposition from editorial mission and internal audience strategy;
5. evaluate whether Portfilo needs any tagline at all;
6. create 2–3 positioning architectures rather than 20 slogan options;
7. test each architecture against the actual Homepage, About, and Subscribe layouts;
8. present the strategy to the user before updating `docs/COPY_STYLE.md` or public templates.

A new copy guide should be written only after the user approves the new architecture.

## Locked editorial taxonomy

The v0 topics remain:

- Business
- Technology
- Startups
- AI
- Building

One primary topic per story remains the rule. Founders are a recurring lens rather than a top-level topic. Funding/capital normally sits under Business or Startups. `Latest` remains broader than breaking news. Portfilo Brief remains the email product.

The copy reset does not reopen the taxonomy unless later research identifies a concrete problem.

## Brand and visual system

Locked for v0 unless a concrete implementation issue appears:

- wordmark-first identity;
- Instrument Sans, Source Serif 4, IBM Plex Mono;
- paper `#f4f0e8`;
- ink `#171614`;
- muted `#69655e`;
- signal blue `#0050a4`;
- evidence blue `#8fc7ff`;
- correction red `#b42318`;
- 12-column editorial grid;
- strong typography and restrained rules;
- no card-heavy SaaS treatment, gradients, glassmorphism, or decorative motion;
- red remains primarily wordmark/corrections.

## Subscribe engineering status

The native Subscribe architecture remains valid and is not part of the copy failure.

Portfilo renders a native signup form backed by one Cloudflare Pages Function at `/api/subscribe`.

beehiiv remains responsible for subscriber storage, double-opt-in confirmation, sending, deliverability, and unsubscribe handling.

The server-side function requires only `BEEHIIV_API_KEY`; the verified Publication ID is already bound in server code. The private key must never be committed or pasted into ChatGPT.

Functional Subscribe QA remains blocked on beehiiv identity verification and API-key creation.

Do not reintroduce the beehiiv iframe/embed.

## Remaining Subscribe validation

After beehiiv identity verification is complete:

- create the dedicated API key;
- configure local `.dev.vars`;
- run a production build;
- test with `wrangler pages dev dist`;
- verify invalid-email and loading states;
- complete one real double-opt-in signup;
- confirm the subscriber appears in beehiiv;
- run final responsive QA after the next copy revision is approved.

## Zero-budget infrastructure posture

Current direction remains:

- Cloudflare Pages;
- one Cloudflare Pages Function solely for newsletter subscription forwarding;
- Cloudflare Web Analytics;
- beehiiv;
- GitHub;
- local Markdown + Astro Content Collections;
- no database, authentication system, custom subscriber store, custom newsletter platform, or custom analytics backend.

## Next phases after the blocker is resolved

1. approve a new Voice & Positioning architecture;
2. update the canonical copy guide;
3. implement coordinated Homepage / About / Subscribe / shared-copy revision;
4. production-build and responsive copy QA;
5. finish Subscribe credential and end-to-end QA;
6. Global Navigation & Public Surface Integration;
7. analytics and deployment preparation;
8. editorial launch research and first real article.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Foundation | PASS |
| Content Architecture | PASS |
| Editorial Design | PASS |
| Wordmark | PASS |
| Editorial Taxonomy | PASS |
| Homepage visual direction | PASS |
| Series visual/system | PASS |
| Research & Standards | PASS |
| About visual direction | PASS |
| Latest Voice & Positioning implementation | **REJECTED** |
| New Voice & Positioning architecture | **RESEARCH IN PROGRESS** |
| Subscribe native architecture | IMPLEMENTED, credential/functional QA pending |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
