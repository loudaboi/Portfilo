# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Voice & Positioning Revision**

The user approved a positioning and copy-strategy revision after a research-led review of Portfilo's current public voice, younger initial audience, comparable business/technology publications, and recurring patterns that make brand copy feel machine-written.

The canonical copy guide has been revised. Public page copy has **not** yet been rewritten under the new standard.

Subscribe engineering remains implemented but temporarily blocked on beehiiv identity verification and API-key creation. Do not remove or redesign the native Subscribe architecture while this copy phase is active.

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

The story, homepage, Series, Research & Standards, About, and native Subscribe visual directions remain frozen for v0 unless a concrete implementation problem is discovered. **Copy is explicitly reopened** for Homepage, About, Subscribe, and shared brand surfaces during the current Voice & Positioning Revision.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Bring all major public brand copy into one coherent voice before navigation integration and launch work.

The revised copy system should feel knowledgeable, conversational, specific, and human without trying to sound young, corporate, academic, or AI-polished.

## Approved positioning

The approved v0 positioning line is:

> **Business and tech, from the Philippines.**

This replaces:

> Practical intelligence for ambitious Filipinos.

Do not add the retired line to new public surfaces.

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

`docs/COPY_STYLE.md` is canonical for public-facing copy and has been revised for the new positioning.

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

## Exact next task

Perform a coordinated public-copy audit and prepare a candidate rewrite under the revised `docs/COPY_STYLE.md`.

Audit in this order:

1. Homepage `/`
2. About `/about`
3. Subscribe `/subscribe`
4. shared masthead strapline, page titles/descriptions, and footer copy
5. Standards `/standards` only where the retired positioning or unnecessary brand language appears
6. Series and Story fixtures only for shared brand copy, not editorial fixture content unless required

The candidate rewrite must:

- replace every public use of `Practical intelligence for ambitious Filipinos`;
- use `Business and tech, from the Philippines.` sparingly rather than repeating it everywhere;
- remove or rewrite generic symmetrical slogans such as `Clear enough to use. Careful enough to trust.`;
- reduce repeated `report / explain / evidence / useful` brand-language loops;
- avoid repeatedly listing all five topics when the surrounding context already establishes them;
- make the younger beachhead audience feel welcome without naming or imitating an age cohort;
- keep Standards, methodology, corrections, and disclosures more literal than the rest of the site;
- preserve the approved page layouts unless copy length reveals a concrete layout problem.

**Do not implement the public-page rewrite until the candidate copy has been evaluated as a coherent package.**

After the revised public copy is approved and implemented, resume Subscribe credential/functional QA when the beehiiv API key is available. Then complete Global Navigation & Public Surface Integration.

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

## Homepage Visual Design - COMPLETE / COPY REOPENED

Final user-reported visual validation on 2026-09-02 included a clean production build, correct homepage rendering, published/draft fixture behavior, desktop/mobile review, and explicit approval.

The visual design remains closed.

The homepage copy is reopened because it still contains the retired positioning line and several brand sentences that do not meet the revised voice standard.

During Subscribe integration, the existing `Join Portfilo Brief` action was changed from a design-preview paragraph into a real `/subscribe` link and its label changed from `Email / Preview` to `Email / Subscribe`. No homepage composition redesign was introduced.

## Series Page Foundation & Visual Design - COMPLETE

Generic route:

`src/pages/series/[slug].astro`

The Series page generates static routes from structured Series entries, includes only published stories, sorts by `seriesOrder`, supports empty states, and uses no client-side JavaScript.

Synthetic validation route:

`/series/content-architecture-fixtures`

Implementation commits:

- `799f0d8ca03a72998488b7521e03c8f98559c71f` - Series Content Collection
- `68109c0bef0d3a83194c9220a0c58a964efcb927` - synthetic Series fixture
- `4e9c872fdb91c45cff1eebfa24e1d2fb6318ba44` - ordering fixture Part 2
- `ea25f432125e17123553c356f3d37163a2431fda` - ordering fixture Part 3
- `241be4fdcd783117ecd2b75af808fc5b23e29151` - generic Series page

User-reported final QA PASS on 2026-09-02.

## Research & Standards Page - COMPLETE

Route:

`/standards`

Implementation file:

`src/pages/standards.astro`

The page translates the internal standards into reader-facing explanations of Sources, Verification, AI use, Corrections, and Commercial independence.

Implementation commits:

- `df26a6df07e17324a5af7d78c018866544745e9b` - initial public Research & Standards page
- `70c4a593aa828078c60b402510076b02eaaf4bea` - responsive/CSS compatibility refinement
- `4bec0d2d37b158cfff8775fba7a18d2cbc30d1c9` - implementation candidate and QA gate

User-reported final QA PASS on 2026-09-02.

Standards copy should remain literal during the current voice revision. Change it only where shared/retired brand language requires correction.

## About Page - COMPLETE / COPY REOPENED

Route:

`/about`

Implementation file:

`src/pages/about.astro`

The visual direction remains approved and institution-first.

Founder treatment remains restrained:

> Founder / Louda Tuppal

No founder portrait, long biography, founder letter, personal-brand hero, or unsupported ownership claim should be added.

The About copy is reopened because the current audience description and several institutional slogans predate the revised positioning.

Implementation commits:

- `3c172cf1cadf24551380fa0dc432e6283fccad8d` - initial About page
- `402eed67aa3b4090803ec8e3a7981d4dad42a678` - reduce founder attribution and remove unsupported independence wording

User-reported final visual QA PASS on 2026-09-02.

## Subscribe Surface & beehiiv Integration - NATIVE FORM IMPLEMENTED / EXTERNAL CREDENTIAL WAIT

### Current status

The third-party beehiiv embed was retired after user visual QA found that its typography, border treatment, sizing, whitespace, and responsive behavior remained visibly disconnected from Portfilo.

The user approved a native Portfilo form backed by one narrow Cloudflare Pages Function.

### Native route

`/subscribe`

Implementation file:

`src/pages/subscribe.astro`

The page:

- uses only Portfilo HTML/CSS for the visible signup UI;
- contains no beehiiv iframe or loader script;
- uses Portfilo typography and tokens;
- uses square geometry;
- uses a horizontal editorial form on desktop and a deliberately stacked form on mobile;
- has visible focus states;
- has invalid-email, submitting, confirmation, and API-error states;
- uses a hidden honeypot field;
- tells successful submissions to check the inbox rather than claiming completion before double opt-in confirmation.

### Subscription endpoint

`functions/api/subscribe.js`

The Cloudflare Pages Function:

- accepts POST only;
- rejects cross-origin browser requests;
- limits request size;
- accepts JSON or form payloads;
- validates email input server-side;
- quietly drops honeypot submissions;
- requires only `BEEHIIV_API_KEY` from the server-side environment;
- binds the verified Portfilo Brief API V2 Publication ID in server code because it is a public identifier;
- calls beehiiv's subscription API;
- sets `double_opt_override: "on"`;
- can reactivate a previously unsubscribed address after explicit form submission;
- exposes no beehiiv credential to the browser;
- stores no subscriber data in Portfilo.

### Secret handling

`.dev.vars.example` documents the only required local secret variable: `BEEHIIV_API_KEY`.

`.gitignore` excludes `.dev.vars` and environment-specific `.dev.vars.*` while allowing the example file to remain committed.

Production secrets will later be configured in Cloudflare environment settings rather than GitHub.

### Relevant native-form commits

- `5a4e49742dd9d5a93aaba51636d83b4e03e14706` - last embed-layout refinement before rejection
- `e85ed39c9bc2c432a1ca5d7d5cbfaa0f4e4148ad` - secure beehiiv subscription proxy
- `d656fcc924aa6e5d16f05e3b27c36963fa9365da` - native Portfilo subscribe form
- `6c9f1053325aabe14c3b0517dfc2d1cd9a602da1` - local secret template
- `efc4597438c08ecf6664e4d47f862c33ab8798b1` - protect local Cloudflare secrets
- `4b695ed4066c62a2776818f62c9854fe7713b422` - architecture-rule exception
- `8503a19652e03cf351c4462c00db1b100610e041` - v0 scope alignment
- `270a5f49031a66be404b8c0ce41504e580ecec78` - bind verified Portfilo Brief publication ID in the proxy
- `31f4a71a0ace1bbfead539f3656054f05916374c` - reduce local configuration to the private API key only

### Remaining Subscribe validation

Still required after beehiiv identity verification is complete:

- dedicated API key creation;
- local `.dev.vars` API-key configuration;
- local `npm run build` PASS;
- local Cloudflare Pages Function runtime test;
- invalid-email state PASS;
- real subscription request PASS;
- double-opt-in email + confirmation PASS;
- subscriber visible in beehiiv PASS;
- desktop/tablet/390px/360px visual QA after revised copy is applied;
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

- public copy implementation under revised positioning - current phase after candidate approval
- Subscribe credential connection + final functional/browser QA - waiting on beehiiv identity verification
- global navigation / public-surface integration pass
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
| Initial Public Copy Style | PASS - superseded by active Voice & Positioning Revision |
| Voice & Positioning Revision | GUIDE UPDATED - public-page rewrite pending |
| Editorial Taxonomy Alignment | PASS |
| Homepage Visual Design | PASS - copy reopened only |
| Series Page Foundation & Visual Design | PASS - final local QA + visual approval user-reported 2026-09-02 |
| Research & Standards Page | PASS - final local production build + responsive/browser QA + visual approval user-reported 2026-09-02 |
| About Page | PASS - visual design retained, copy reopened |
| Subscribe Surface & beehiiv Integration | NATIVE FORM IMPLEMENTED - API key + revised copy + functional signup + final QA pending |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
