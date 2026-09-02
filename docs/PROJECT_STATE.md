# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Voice & Positioning Revision — IMPLEMENTED / QA PENDING**

The user approved a research-led revision of Portfilo's positioning and public voice. The canonical copy guide was updated first, a coordinated public-copy candidate was reviewed as a package, and the user explicitly approved that candidate for implementation.

The approved rewrite is now implemented across Homepage, About, Subscribe, Standards shared brand copy, Story shared brand copy, and Series shared brand copy. The approved visual layouts were not reopened.

Subscribe engineering remains implemented but is still blocked on beehiiv identity verification and API-key creation. Do not remove or redesign the native Subscribe architecture while waiting for that external credential.

Completed phases:

- Foundation
- Content Architecture
- Editorial Design
- Wordmark Exploration & Lock
- Public Copy Style - initial standard
- Editorial Taxonomy Alignment
- Homepage Visual Design
- Series Page Foundation & Visual Design
- Research & Standards Page
- About Page

The story, homepage, Series, Research & Standards, About, and native Subscribe visual directions remain frozen for v0 unless a concrete implementation problem is discovered.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Validate the implemented Voice & Positioning Revision in the production build and across responsive layouts.

The revised copy should feel knowledgeable, conversational, specific, and human without trying to sound young, corporate, academic, or AI-polished.

## Approved positioning

The approved v0 positioning line is:

> **Business and tech, from the Philippines.**

This replaces the retired line:

> Practical intelligence for ambitious Filipinos.

The retired line may remain in internal documentation only when explicitly identified as retired or historical. It should not appear as current public copy.

### Scope meaning

`From the Philippines` defines Portfilo's point of view, not the geographic ceiling of its reporting.

Portfilo starts from the Philippines, not necessarily with a Philippine subject.

Global companies, AI systems, markets, capital, technology, and regional developments belong when the subject matters to readers here and the Philippine perspective materially improves the story.

Do not force a Philippine angle where it adds nothing.

## Initial audience

The v0 beachhead audience is younger Filipinos who are curious about business and technology and are beginning to build careers, companies, products, or a better understanding of how these things work.

This may include students, early-career operators, developers, designers, sellers, aspiring founders, and readers interested in companies, startups, AI, markets, money, and work without already belonging to an insider network.

Age is not a permanent public boundary. Portfilo should not brand itself as `Gen Z media` or repeatedly call readers young.

The important reader traits are **curiosity and momentum**, not a flattering label such as `ambitious`.

## Canonical public copy standard

`docs/COPY_STYLE.md` is canonical for public-facing copy.

Internal voice test:

> **A smart Filipino friend who actually did the reading.**

This is an editing test, not public brand copy.

Core direction:

- clear before clever;
- know the subject without performing intelligence;
- conversational without trying to sound trendy;
- concrete nouns and active verbs before abstractions;
- let the journalism prove that Portfilo is useful, rigorous, and trustworthy;
- do not flatter the reader;
- Philippine character comes from perspective and context, not decorative slang;
- break repeated three-part mission sentences and symmetrical slogan structures;
- avoid unnatural levels of polish where every sentence resolves like campaign copy;
- allow specific, asymmetric, occasionally skeptical personality when earned;
- preserve uncertainty exactly as the evidence requires.

Working principle:

> **Say what happened. Explain what matters. Don't perform intelligence.**

## Implemented public-copy revision

### Homepage `/`

Implemented:

- metadata now uses the new business-and-tech positioning;
- masthead: `Business and tech, from the Philippines.`;
- hero: `Business and tech make more sense when you start from here.`;
- scope copy explicitly allows stories that start elsewhere but matter to readers here;
- `Clear enough to use. Careful enough to trust.` was retired;
- institutional headline now says `We do the reporting before we tell you what it means.`;
- Portfilo Brief copy is shorter and reader-facing;
- CTA is the familiar `Subscribe` label;
- development-only footer action was replaced with `About Portfilo`;
- footer center line is `Portfilo / Philippines`.

### About `/about`

Implemented:

- metadata aligned with the new positioning;
- hero: `You shouldn't need an insider network to follow business and tech.`;
- global-versus-Philippine scope is explained directly;
- `What we do` now starts from announcements, claims, policy changes, and market numbers rather than abstract brand language;
- topic descriptions were rewritten in more concrete language;
- audience headline: `You don't need to already know the room.`;
- reader note: `If a term matters, we explain it.`;
- Philippine context headline: `A global story can land differently here.`;
- Standards bridge: `The conclusion comes after the reporting.`;
- founder treatment remains only `Founder / Louda Tuppal`.

### Subscribe `/subscribe`

Implemented:

- metadata simplified to what the subscriber receives;
- hero: `Portfilo Brief, in your inbox.`;
- intro: `New Portfilo stories, sent by email. No fixed schedule yet.`;
- signup headline: `Get Portfilo Brief.`;
- form hint: `No fixed schedule yet. Unsubscribe any time.`;
- What to Expect now describes Coverage, Perspective, and Frequency rather than abstract editorial principles;
- perspective explicitly says the publication is from the Philippines but not limited to Philippine subjects;
- email section now says `Unsubscribe whenever you want.`;
- native form, validation, confirmation state, API endpoint, and responsive form architecture remain unchanged.

### Standards, Story, and Series

The substantive Standards copy and fixture/editorial content were intentionally left unchanged.

Shared positioning was updated to:

> **Business and tech, from the Philippines.**

Footer center lines where present now use:

> **Portfilo / Philippines**

The Series template still exposes `Series ID` publicly. That remains a separate pre-launch cleanup item and was not folded into this copy revision.

## Voice revision commits

- `6ed9093524e2f3fb549dc894cc6191cfc93a1d53` - revise canonical Portfilo voice and positioning
- `5b1a9c16b4c659c9ed78d292d98d398d1bf375a4` - advance project state to Voice & Positioning Revision
- `e7ff47c9c05cd6de6f1db50c9b688bbbcf5450f3` - prepare coordinated public-copy candidate
- `0fe0f00ebf7f48400d1231585d6b690a7973b707` - revise Homepage copy
- `750fb355fc6de23bb644d5d5da11b27c09976315` - revise About copy
- `713d900302c5a5c517ebae1f908e0c46057b0ae9` - revise Subscribe copy
- `c282fe310b72bd758d57a51be832c9e09ccfccc3` - update Standards shared positioning
- `8cc25466bec1b51505f57311932531d783167807` - update Story shared positioning
- `8984a5443b16853dc912ad2fab2d36934ea03276` - update Series shared positioning
- `10a8313aea6063addaef4d0998bcfb52108db159` - remove the now-stale candidate review file after approval

A compare from the approved candidate commit through the implementation head showed exactly six public templates changed: Homepage, About, Subscribe, Standards, Story, and Series. No CSS/layout or schema files were changed in that implementation sweep.

## Exact next task

Perform local production-build and responsive copy QA:

1. Pull the latest `build/portfilo-v0` branch.
2. Run `npm run build` and require a clean production build.
3. Run `npm run dev` for visual review.
4. Review `/`, `/about`, `/subscribe`, and `/standards`.
5. Review the synthetic Series route and at least one published story fixture to confirm the shared masthead copy did not disturb those layouts.
6. Check desktop, intermediate/tablet, 390px, and 360px widths.
7. Pay particular attention to masthead strapline wrapping, Homepage hero line breaks, About hero and topic cards, Subscribe hero/form/What to Expect copy, footer alignment, and horizontal overflow.
8. Confirm the Homepage footer action now routes to `/about`.
9. Confirm no current public surface still presents `Practical intelligence for ambitious Filipinos` as active positioning.
10. Do not submit a real Subscribe request through normal Astro dev while the beehiiv API key is unavailable. Functional Subscribe QA resumes after identity verification and API-key creation.
11. Do not close Voice & Positioning Revision until the user reports build + responsive visual/copy QA PASS.

After Voice & Positioning Revision passes, resume the still-open Subscribe credential/functional QA when the beehiiv API key is available.

Global Navigation & Public Surface Integration remains after Subscribe is formally closed.

## Locked primary topics

The controlled v0 story taxonomy remains:

- **Business** - companies, industries, markets, business models, economics, and strategy;
- **Technology** - software, fintech, infrastructure, platforms, devices, and emerging technology where Philippine relevance is concrete;
- **Startups** - new companies, startup ecosystems, funding, growth, failure, acquisitions, and early-stage company development;
- **AI** - models, products, agents, adoption, infrastructure, economics, policy, and the effects of AI on Philippine companies and work;
- **Building** - product, distribution, sales, pricing, hiring, operations, and the practical work of creating companies and products.

The Content Collection schema enforces:

`business / technology / startups / ai / building`

Classification rules remain:

- one primary topic per story in v0;
- AI is primary only when AI itself is the main thing the reader needs to understand;
- founders are a recurring subject/lens, not a top-level topic;
- capital/venture/funding live primarily under Business or Startups;
- secondary tags are deferred until real publishing volume proves a need;
- career, salary, skills, work, and broader life questions are supporting subjects rather than Portfilo's primary identity;
- News is a format, not Portfilo's identity;
- `Latest` remains broader than a breaking-news feed;
- Portfilo Brief is the email product.

## Brand and visual system

### Wordmark

Locked for v0:

- wordmark-first identity;
- no standalone logo symbol required;
- forward-leaning Instrument Sans treatment with slight streetwear influence;
- `Port` near-black `#171614`;
- `fi` signal blue `#0050a4`;
- `lo` correction red `#b42318`.

### Color rule

Paper/black carry the publication. Blue is the active editorial accent. Red is the wordmark signature and correction signal until a better institutional role is earned.

Do not add red merely to create numerical color balance.

## Homepage Visual Design - COMPLETE / COPY QA PENDING

The visual design remains approved and frozen. Only public copy was revised in the current phase.

## Series Page Foundation & Visual Design - COMPLETE

Generic route:

`src/pages/series/[slug].astro`

Synthetic validation route:

`/series/content-architecture-fixtures`

User-reported final visual QA PASS on 2026-09-02 before the shared-positioning copy change. Recheck the masthead during current copy QA.

## Research & Standards Page - COMPLETE

Route:

`/standards`

The substantive standards copy remains unchanged. Only shared masthead/footer positioning changed during Voice & Positioning Revision.

User-reported final visual QA PASS on 2026-09-02 before the shared-positioning copy change. Recheck the masthead/footer during current copy QA.

## About Page - COMPLETE / COPY QA PENDING

Route:

`/about`

The visual direction and restrained founder treatment remain approved. Public copy was revised under the new canonical voice and now requires responsive review.

## Subscribe Surface & beehiiv Integration - NATIVE FORM IMPLEMENTED / EXTERNAL CREDENTIAL WAIT

### Architecture

Portfilo renders a native signup form backed by one narrow Cloudflare Pages Function at `/api/subscribe`.

beehiiv remains responsible for subscriber storage, confirmation, newsletter sending, deliverability, and unsubscribe handling.

The function:

- accepts POST only;
- rejects cross-origin browser requests;
- limits request size;
- validates email server-side;
- quietly drops honeypot submissions;
- requires only `BEEHIIV_API_KEY` from the server-side environment;
- binds the verified Portfilo Brief API V2 Publication ID in server code;
- calls beehiiv's subscription API;
- sets double opt-in on;
- stores no subscriber data in Portfilo.

### Remaining Subscribe validation

Still required after beehiiv identity verification is complete:

- dedicated API key creation;
- local `.dev.vars` API-key configuration;
- local Cloudflare Pages Function runtime test;
- invalid-email state PASS;
- real subscription request PASS;
- double-opt-in email + confirmation PASS;
- subscriber visible in beehiiv PASS;
- final Subscribe responsive QA with the revised copy;
- existing-route regression check.

Do not close Subscribe until the real confirmed-opt-in signup and final local QA pass.

## Zero-budget infrastructure posture

Current locked direction:

- Cloudflare Pages for static hosting/deployment;
- one Cloudflare Pages Function solely for newsletter subscription forwarding;
- Cloudflare Web Analytics;
- beehiiv for subscriber storage, confirmation, newsletter sending, deliverability, and unsubscribe handling;
- GitHub source control;
- local Markdown + Astro Content Collections;
- no database, authentication system, custom subscriber store, custom newsletter platform, or custom analytics backend.

Use free tiers while sufficient for v0 validation.

## Scope still not started

- Voice & Positioning final local QA - current task
- Subscribe credential connection + final functional/browser QA - waiting on beehiiv identity verification
- global navigation / public-surface integration pass - after Subscribe closes
- analytics
- deployment
- editorial launch research
- first real article
- polished editorial figure/data primitives

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch | PASS |
| Foundation | PASS |
| Content Architecture | PASS |
| Editorial Design | PASS |
| Wordmark Exploration & Lock | PASS |
| Initial Public Copy Style | PASS - superseded by revised canonical guide |
| Voice & Positioning Revision | IMPLEMENTED - production build + responsive copy QA pending |
| Editorial Taxonomy Alignment | PASS |
| Homepage Visual Design | PASS - revised copy QA pending |
| Series Page Foundation & Visual Design | PASS - shared masthead copy needs current QA |
| Research & Standards Page | PASS - shared masthead/footer copy needs current QA |
| About Page | PASS - revised copy QA pending |
| Subscribe Surface & beehiiv Integration | NATIVE FORM IMPLEMENTED - API key + functional signup + final QA pending |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
