# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Voice & Positioning Reset — ARCHITECTURE APPROVED / COPY CANDIDATE NEXT**

The user approved **Architecture C: Content-first / no tagline** after rejecting the previous public-copy revision during QA.

The current public templates still contain the rejected implementation. They are preserved only until the next coordinated replacement is approved. Do not treat the visible `from the Philippines` copy as current direction.

The canonical copy guide has now been rewritten around the approved content-first architecture.

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
- Voice & Positioning architecture research

## Voice reset history

The previous public-copy revision was rejected because it became vague, geographically forced, over-explained, and recognizably AI-shaped.

Rejected lines include:

- `Practical intelligence for ambitious Filipinos.`
- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`
- `Some stories start here. Others start somewhere else and matter here anyway.`

Do not iterate on these lines.

The failure was partly structural. The existing Homepage identity hero created pressure to fill the site's largest visual moment with a large brand statement even when the publication did not need one.

## Approved positioning architecture

Canonical decision document:

`docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`

Canonical copy guide:

`docs/COPY_STYLE.md`

### Architecture C: Content-first / no tagline

Approved rules:

- no permanent public tagline by default;
- no geographic slogan in the masthead or hero;
- no audience-flattering slogan;
- the wordmark establishes the publication;
- a small taxonomy descriptor may orient readers when useful;
- the featured story becomes the main Homepage statement;
- About explains the publication plainly;
- Standards demonstrates editorial rigor;
- Subscribe explains the email product only;
- story selection, headlines, deks, and editorial writing carry most of the personality.

### Temporary coverage descriptor

While fixture journalism remains, the site may use functional coverage copy such as:

> Business / Technology / Startups / AI / Building

or, if a sentence is genuinely needed:

> Stories about companies, products, markets, and the people building them.

These are not permanent taglines.

## Geography rule

Philippine relevance remains part of Portfilo's reporting and early distribution strategy, but geography is no longer required brand copy.

Do not force `Philippines`, `Filipino`, `here`, `local`, or similar wording into the masthead, hero, About, or newsletter merely to establish identity.

Use Philippine context when the actual subject or reporting requires it.

A global story does not need a manufactured Philippine justification to belong on Portfilo.

## Audience

The early audience remains younger readers around the founder's peer group who are curious about business, technology, startups, AI, companies, careers, and building.

This is an internal editorial/distribution focus, not a public label.

Do not brand Portfilo as `Gen Z media`, `for young Filipinos`, or `for ambitious Filipinos` by default.

## Canonical voice rules

`docs/COPY_STYLE.md` is authoritative.

Core internal editing rule:

> **Say the thing. Then stop.**

Human-language gate:

1. Does this sentence add information?
2. Would a normal person say it aloud?
3. Can it be shorter without losing meaning?
4. Is it describing the product or explaining internal strategy?
5. Does the reader need this before seeing a story?
6. Would removing it make the page clearer?

If removing a sentence makes the page clearer, remove it.

The project treats recognizably machine-shaped brand prose as a product-quality failure even when grammar is correct.

Avoid:

- vague connective language;
- geographic philosophy in marketing copy;
- symmetrical slogans;
- repeated `not X, but Y` structures;
- three-part mission sentences;
- generic claims about intelligence, clarity, trust, usefulness, or ambition;
- explanatory bridge sentences added only to make positioning logically complete;
- over-polished copy where every sentence sounds campaign-ready.

## Homepage visual exception

The broader visual system remains approved and frozen.

Architecture C specifically reopens the **function and scale of the Homepage identity block**.

The next candidate may:

- reduce the identity block substantially; or
- repurpose it into the lead story/current editorial focus.

Do not preserve the giant brand-headline area by inventing another slogan.

Typography, wordmark, color system, 12-column grid, dark evidence module, editorial rules, and overall visual language remain approved.

## Locked editorial taxonomy

The v0 topics remain:

- Business
- Technology
- Startups
- AI
- Building

One primary topic per story remains the rule. Founders are a recurring lens rather than a top-level topic. Funding/capital normally sits under Business or Startups. `Latest` remains broader than breaking news. Portfilo Brief remains the email product.

The voice reset does not reopen taxonomy.

## Brand and visual system

Locked unless a concrete implementation issue appears:

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

### Remaining Subscribe validation

After beehiiv identity verification is complete:

- create the dedicated API key;
- configure local `.dev.vars`;
- run a production build;
- test with `wrangler pages dev dist`;
- verify invalid-email and loading states;
- complete one real double-opt-in signup;
- confirm the subscriber appears in beehiiv;
- run final responsive QA after the approved copy replacement is implemented.

## Zero-budget infrastructure posture

Current direction remains:

- Cloudflare Pages;
- one Cloudflare Pages Function solely for newsletter subscription forwarding;
- Cloudflare Web Analytics;
- beehiiv;
- GitHub;
- local Markdown + Astro Content Collections;
- no database, authentication system, custom subscriber store, custom newsletter platform, or custom analytics backend.

## Exact next task

**Prepare a coordinated implementation candidate. Do not modify public pages yet.**

The candidate must cover:

1. Homepage information hierarchy and exact copy;
2. the specific reduction or repurposing of the current Homepage identity block;
3. About exact copy;
4. Subscribe exact copy;
5. shared masthead/footer language;
6. Standards, Story, and Series shared brand language only;
7. removal of the rejected geographic positioning from all current public surfaces.

The candidate must be evaluated as a full system before implementation.

Do not create another tagline exercise. The candidate should minimize copy and let the lead story do more work.

After the candidate is approved:

1. implement the coordinated public replacement;
2. run production-build and responsive QA;
3. finish Subscribe credential/end-to-end QA when the beehiiv API key is available;
4. complete Global Navigation & Public Surface Integration;
5. continue to analytics/deployment preparation;
6. begin editorial launch research and the first real article.

## Relevant voice-reset commits

- `f348937dd6594ecdc07bbdc75f4263821c1b6071` - mark previous copy revision rejected and reopen research
- `609dae0dae803357e5b0086b422ffa05ca40fc03` - add positioning architecture exploration
- `4a99047bca4112fb8f89acd65d04531dc79e1d11` - record Architecture C recommendation for review
- `a26b2cdc21b98cf6db9b8ca3a8fb85b96abdb54f` - rewrite canonical copy style around content-first architecture
- `41576056d7b53148c25d027694ebe05609a68c12` - record approved Architecture C decision

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
| Homepage visual direction | PASS, identity-block function reopened only |
| Series visual/system | PASS |
| Research & Standards | PASS |
| About visual direction | PASS |
| Previous Voice & Positioning implementation | REJECTED |
| Architecture C: Content-first / no tagline | **APPROVED** |
| Revised canonical copy guide | **UPDATED** |
| Coordinated replacement candidate | **NEXT** |
| Subscribe native architecture | IMPLEMENTED, credential/functional QA pending |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
