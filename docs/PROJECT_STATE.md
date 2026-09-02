# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Voice & Positioning Reset — ARCHITECTURE REVIEW**

The most recent public-copy revision was **rejected by the user during copy QA**. It must not be treated as approved direction.

The rejected revision introduced lines such as:

- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`
- `Some stories start here. Others start somewhere else and matter here anyway.`

The user found this copy vague, over-explained, geographically forced, and recognizably AI-shaped. That assessment is authoritative for the current phase.

The current public templates still contain the rejected implementation because no replacement has been approved yet. Treat them as a failed candidate preserved only until the next approved rewrite is ready.

Research has now been completed for a new positioning architecture. Three architectures are documented in `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`. No public page or copy guide has been changed as a result of that research.

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

The core visual system remains approved. The current blocker is voice/positioning architecture. Research also identified that the large homepage identity hero may itself be contributing to the copy problem by creating pressure for a large brand slogan.

## Active blocker

Portfilo does not yet have an approved public voice or positioning architecture.

The previous strategy over-indexed on explaining:

- why the publication is Philippine;
- how global stories relate back to the Philippines;
- why the journalism is useful, evidence-aware, or trustworthy;
- who the audience should imagine themselves to be.

This created abstract connective language instead of product clarity.

The new research direction is inspired primarily by **BackScoop** and other publications that reach younger readers through direct product language rather than elaborate brand manifestos.

## Research result

### BackScoop lesson

BackScoop is the primary reference for the reset because it began with a young founder from the Philippines solving a concrete information problem and built a regional audience without making the founder's nationality or a geographic philosophy carry the brand copy.

Current BackScoop public copy is direct and product-led. It generally:

1. names the subject;
2. states what the reader gets;
3. states cadence or format;
4. shows real stories immediately.

Its personality comes primarily from story selection, headlines, writing, and product execution rather than from a long positioning explanation.

Amanda Cua has also described the original problem in concrete terms: following Southeast Asian tech required checking too many places, and existing articles could provide a funding number without explaining the product, positioning, or problem being solved.

Portfilo should learn from that model without copying BackScoop's exact scope, tone, or wording.

### Other useful references

Morning Brew uses a short reader benefit tied to a real product cadence and then moves quickly into content.

The Hustle uses a compact personality line and relies heavily on story selection and headlines for its voice.

The common lesson is not that Portfilo needs a cleverer slogan. It is that brand copy can be much smaller when the product and journalism do the explanatory work.

## Positioning architectures under review

`docs/POSITIONING_ARCHITECTURE_EXPLORATION.md` contains three complete systems:

### Architecture A — Coverage-first

A conventional publication approach with no geographic philosophy and no aspirational audience label. It tells readers what Portfilo covers and keeps the rest plain.

Strength: highest immediate clarity and easiest fit with the current large hero.

Risk: can become a generic enlarged topic list.

### Architecture B — Reader-job-first

Starts from the reader problem of keeping up with and understanding fragmented business/tech information.

Strength: gives Portfilo a direct reason to exist beyond taxonomy.

Risk: because Portfilo does not yet publish at high frequency, a strong `keep up` promise may outrun the current product and invite more explanatory marketing copy.

### Architecture C — Content-first / no tagline

Removes the assumption that Portfilo needs a large public positioning sentence. The wordmark, small coverage descriptor, featured story, latest stories, About page, Standards page, and newsletter each do one job.

Strength: lowest AI-copy risk, highest flexibility, and best alignment with the research.

Risk: it requires reopening the function of the current large homepage identity block even though the broader visual system remains approved.

### Current recommendation

**Architecture C: Content-first / no tagline.**

Recommended direction:

- no permanent public tagline in v0;
- no `Philippines`, `Filipino`, `here`, or geographic philosophy in the masthead/hero by default;
- use the topic taxonomy as a small descriptor when useful, not as a mission statement;
- make the featured story the main homepage statement;
- keep About plain and factual;
- keep Subscribe product-only;
- let Standards prove rigor;
- let story selection, headlines, and editorial writing create personality.

A temporary one-line coverage descriptor may be useful while Portfilo still relies on launch fixtures, but it should not automatically become a permanent tagline.

## Audience

The intended early audience remains younger readers around the founder's peer group who are curious about business, technology, startups, AI, companies, careers, and building.

This is an internal distribution/editorial focus, not necessarily public-facing brand copy.

Do not label the publication `Gen Z media`, `for young Filipinos`, or `for ambitious Filipinos` unless future evidence gives a concrete reason.

The public copy should make the product interesting and legible without asking readers to identify with a flattering demographic label.

## Temporary voice reset rules

Until a revised copy guide is approved:

- prefer nouns, verbs, facts, formats, and schedules over abstractions;
- say what the publication covers before explaining why it exists;
- do not write geographic philosophy into the homepage hero;
- do not explain Portfilo's global-versus-local permission in marketing copy;
- avoid slogans built around `clarity`, `intelligence`, `insight`, `context`, `ambition`, `what matters`, `what comes next`, or `making sense` unless a specific line proves unusually strong;
- avoid balanced mission sentences when a shorter concrete sentence works;
- avoid symmetrical contrast slogans and repeated `not X, but Y` constructions;
- do not claim trust, usefulness, rigor, or intelligence when the product can demonstrate them;
- one short sentence is preferable to a paragraph that pre-answers objections;
- allow copy to be plain when plain is stronger;
- personality should come from specific word choice and editorial taste, not forced cleverness;
- Standards, corrections, methodology, and disclosures remain literal and restrained.

## AI-writing concern

The project treats recognizably machine-shaped brand prose as a product-quality failure even when the grammar is correct.

The practical editing concern is broader than detecting specific AI words. Portfilo should avoid prose that feels excessively polished, explanatory, symmetrical, generic, or structurally predictable.

The rejected lines are useful negative examples because they used vague connective language (`here`) and extra bridge sentences to make an internal strategy logically complete rather than giving the reader useful information.

Human-language gate for future copy:

1. Does this sentence add information?
2. Would a normal person say it aloud?
3. Can it be shorter without losing meaning?
4. Is it describing the product, or explaining internal strategy?
5. Does the reader need it before seeing a story?
6. Would removing it make the page clearer?

If removal makes the page clearer, remove it.

## Exact next task

**Architecture decision only. Do not implement another public-copy rewrite yet.**

Review `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md` and decide whether to:

1. approve Architecture C as the basis for v0;
2. combine Architecture C with the strongest coverage descriptor from Architecture A;
3. request a revision to one of the three architectures.

After the user approves an architecture:

1. revise `docs/COPY_STYLE.md` around the chosen architecture;
2. decide whether the homepage identity block must be reduced/reworked;
3. prepare a coordinated Homepage / About / Subscribe / shared-copy candidate;
4. review that candidate before implementation;
5. only then replace the rejected public copy.

## Locked editorial taxonomy

The v0 topics remain:

- Business
- Technology
- Startups
- AI
- Building

One primary topic per story remains the rule. Founders are a recurring lens rather than a top-level topic. Funding/capital normally sits under Business or Startups. `Latest` remains broader than breaking news. Portfilo Brief remains the email product.

The positioning reset does not reopen the taxonomy unless later research identifies a concrete problem.

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

The broad visual system remains approved. Architecture C, if approved, would specifically reopen the **function and scale of the Homepage identity block**, not the overall visual language.

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
3. prepare and approve coordinated public copy;
4. implement Homepage / About / Subscribe / shared-copy revision;
5. production-build and responsive copy QA;
6. finish Subscribe credential and end-to-end QA;
7. Global Navigation & Public Surface Integration;
8. analytics and deployment preparation;
9. editorial launch research and first real article.

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
| Homepage visual direction | PASS — identity-block function may reopen if Architecture C is approved |
| Series visual/system | PASS |
| Research & Standards | PASS |
| About visual direction | PASS |
| Latest Voice & Positioning implementation | **REJECTED** |
| Positioning architecture research | **COMPLETE — Architecture C recommended, user decision pending** |
| Subscribe native architecture | IMPLEMENTED, credential/functional QA pending |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
