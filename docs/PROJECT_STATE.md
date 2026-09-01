# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Subscribe Surface & beehiiv Integration**

The third-party beehiiv embed was rejected during user visual QA because its typography, spacing, borders, sizing, and mobile behavior did not integrate with the approved Portfilo design system. The user explicitly approved replacing it with a native Portfilo form backed by one narrow Cloudflare Pages Function that forwards subscriptions to beehiiv.

The native form and server-side proxy are now committed as an implementation candidate. The Portfilo Brief API V2 Publication ID has also been verified from the user's beehiiv account and bound in the server-side proxy. The phase remains open for beehiiv API-key creation/configuration, a real end-to-end confirmed-opt-in subscription, production build, and responsive/browser QA.

Completed phases:

- Foundation
- Content Architecture
- Editorial Design
- Wordmark Exploration & Lock
- Public Copy Style
- Editorial Taxonomy Alignment
- Homepage Visual Design
- Series Page Foundation & Visual Design
- Research & Standards Page
- About Page

The story, homepage, Series, Research & Standards, and About visual directions are frozen for v0 unless a concrete implementation problem is discovered. The homepage newsletter block received only the minimum functional change required to link the approved Portfilo Brief CTA to `/subscribe` and remove its obsolete preview status.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Finish and validate the native public **Subscribe** surface required by `docs/V0_SCOPE.md`.

Portfilo owns the visible signup form and its responsive interaction design. beehiiv remains the newsletter system of record for subscriber storage, confirmation, delivery, and unsubscribe handling. One Cloudflare Pages Function at `/api/subscribe` is the only approved newsletter server-side code.

## Exact next task

Complete beehiiv API credential setup and end-to-end Subscribe validation in this order:

1. In beehiiv, complete the required account identity verification so API-key creation is enabled.
2. Go to `Settings > Workspace Settings > API` and create a dedicated API key for the Portfilo website subscription endpoint. Save it securely when beehiiv shows it; the key is only displayed once. **Do not paste the API key into ChatGPT, GitHub, browser code, or any public file.**
3. Pull the latest `build/portfilo-v0` branch.
4. Copy `.dev.vars.example` to a local `.dev.vars` file and replace the placeholder with the private key:

   `BEEHIIV_API_KEY="<private key>"`

   `.dev.vars` is ignored by Git and must remain local. The Portfilo Brief API V2 Publication ID is already bound in the server-side proxy and does not need to be configured locally.
5. Run `npm run build` and require a clean static production build.
6. For full local API testing, run Cloudflare Pages locally against the built `dist` directory with Wrangler, for example `npx wrangler pages dev dist`. Astro's normal `npm run dev` is sufficient for visual form review but does not execute the root Cloudflare Pages Function.
7. Open the locally served `/subscribe` page through the Wrangler server and verify the native Portfilo form renders with no beehiiv iframe/widget UI.
8. Test invalid email handling and keyboard focus without creating a subscriber.
9. Submit a real test email. The expected Portfilo success state is: `Check your inbox. Confirm your email to finish subscribing to Portfilo Brief.`
10. Confirm the beehiiv double-opt-in email arrives, complete the confirmation, and verify the subscriber appears in beehiiv with the expected state.
11. Review `/subscribe` at desktop, intermediate/tablet, 390px, and 360px widths. The desktop form is an editorial horizontal control; mobile intentionally becomes a stacked full-width input and button rather than shrinking the desktop control.
12. Check loading state, success state, API failure state, horizontal overflow, tap targets, visible focus, font loading, and reduced-motion behavior.
13. Confirm the homepage Portfilo Brief link still routes to `/subscribe` and existing `/`, `/about`, `/standards`, Series, and published story routes remain acceptable.
14. Do not mark Subscribe complete until the real confirmed-opt-in signup and final local QA pass.

After Subscribe passes final local QA, perform a **Global Navigation & Public Surface Integration pass** so readers can move coherently among Home, Standards, About, Subscribe, and future story/index surfaces.

Do not begin analytics, deployment, or editorial launch research until the Subscribe phase is complete.

## Portfilo editorial direction

Portfilo helps ambitious Filipinos understand business, technology, startups, AI, and what it takes to build in the Philippines through useful, specific, evidence-aware journalism and analysis.

Current positioning line:

> **Practical intelligence for ambitious Filipinos**

This remains the current positioning line and masthead strapline, but is not permanently frozen as the final long-term public tagline.

### Locked primary topics

The controlled v0 story taxonomy is:

- **Business** — companies, industries, markets, business models, economics, and strategy;
- **Technology** — software, fintech, infrastructure, platforms, devices, and emerging technology where Philippine relevance is concrete;
- **Startups** — new companies, startup ecosystems, funding, growth, failure, acquisitions, and early-stage company development;
- **AI** — models, products, agents, adoption, infrastructure, economics, policy, and the effects of AI on Philippine companies and work;
- **Building** — product, distribution, sales, pricing, hiring, operations, and the practical work of creating companies and products.

The Content Collection schema enforces:

`business / technology / startups / ai / building`

Classification rules:

- one primary topic per story in v0;
- AI is primary only when AI itself is the main thing the reader needs to understand;
- founders are a recurring subject/lens, not a top-level topic;
- capital/venture/funding live primarily under Business or Startups;
- secondary tags are deferred until real publishing volume proves a need;
- career, salary, skills, work, and broader life questions are supporting subjects rather than Portfilo's primary identity;
- News is a format, not Portfilo's identity;
- `Latest` remains broader than a breaking-news feed;
- Portfilo Brief is the email product.

## Public copy standard

`docs/COPY_STYLE.md` is canonical for reader-facing copy and `AGENTS.md` requires contributors to follow it.

Core rules:

- clear before clever;
- smart without academic affect;
- confident without hype;
- useful before self-descriptive;
- Filipino by concrete context, not costume;
- familiar interface language over invented brand terminology;
- avoid generic AI/product-copy patterns and internal project language;
- never strengthen uncertainty or factual claims for stronger copy.

Working principle:

> **Make the useful thing clear. Keep the personality in the precision.**

For factual journalism, Copy Style does not replace the stricter Editorial, Research, and Publishing standards.

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

## Homepage Visual Design — COMPLETE

Final user-reported validation on 2026-09-02 included a clean production build, correct homepage rendering, published/draft fixture behavior, desktop/mobile review, and explicit approval.

Current Portfilo Brief homepage copy:

> **Portfilo Brief, by email.**
>
> Get new reporting and clear explanations on business, technology, startups, AI, and building in the Philippines.

During Subscribe integration, the existing `Join Portfilo Brief` action was changed from a design-preview paragraph into a real `/subscribe` link and its label changed from `Email / Preview` to `Email / Subscribe`. No homepage composition redesign was introduced.

Homepage Visual Design remains closed.

## Series Page Foundation & Visual Design — COMPLETE

Generic route:

`src/pages/series/[slug].astro`

The Series page generates static routes from structured Series entries, includes only published stories, sorts by `seriesOrder`, supports empty states, and uses no client-side JavaScript.

Synthetic validation route:

`/series/content-architecture-fixtures`

Implementation commits:

- `799f0d8ca03a72998488b7521e03c8f98559c71f` — Series Content Collection
- `68109c0bef0d3a83194c9220a0c58a964efcb927` — synthetic Series fixture
- `4e9c872fdb91c45cff1eebfa24e1d2fb6318ba44` — ordering fixture Part 2
- `ea25f432125e17123553c356f3d37163a2431fda` — ordering fixture Part 3
- `241be4fdcd783117ecd2b75af808fc5b23e29151` — generic Series page

User-reported final QA PASS on 2026-09-02.

**Series Page Foundation & Visual Design is formally closed.**

## Research & Standards Page — COMPLETE

Route:

`/standards`

Implementation file:

`src/pages/standards.astro`

The page translates the internal standards into reader-facing explanations of Sources, Verification, AI use, Corrections, and Commercial independence. It is static Astro with no client-side JavaScript and no new dependency.

Implementation commits:

- `df26a6df07e17324a5af7d78c018866544745e9b` — initial public Research & Standards page
- `70c4a593aa828078c60b402510076b02eaaf4bea` — responsive/CSS compatibility refinement
- `4bec0d2d37b158cfff8775fba7a18d2cbc30d1c9` — implementation candidate and QA gate

User-reported final QA PASS on 2026-09-02, including a clean static production build, route generation, responsive/browser review, and explicit visual approval.

**Research & Standards Page is formally closed.**

## About Page — COMPLETE

Route:

`/about`

Implementation file:

`src/pages/about.astro`

The page is institution-first and explains:

- what Portfilo is and does;
- the five locked coverage areas;
- who the publication is for;
- why Philippine context can materially change an answer;
- a short bridge to `/standards` for research methodology.

Founder treatment is intentionally restrained. The only personal attribution is:

> Founder / Louda Tuppal

No founder portrait, long biography, founder letter, personal-brand hero, or unsupported ownership claim was added.

Implementation commits:

- `3c172cf1cadf24551380fa0dc432e6283fccad8d` — initial About page
- `402eed67aa3b4090803ec8e3a7981d4dad42a678` — reduce founder attribution and remove unsupported independence wording

User-reported final QA PASS on 2026-09-02.

**About Page is formally closed.**

## Subscribe Surface & beehiiv Integration — NATIVE FORM IMPLEMENTED / CREDENTIAL + QA PENDING

### Rejected embed approach

A real beehiiv inline embed was initially connected and tested visually. User QA found that its internal typography, border treatment, sizing, whitespace, and responsive behavior remained visibly disconnected from the Portfilo design system even after both Portfilo-side and beehiiv-side styling adjustments.

The embed approach is therefore retired. Do not reintroduce it unless beehiiv materially changes its external-form capabilities and a future review explicitly approves it.

### Approved architecture exception

The user explicitly approved a narrow exception to the prior `no custom newsletter backend` rule:

- Portfilo renders a native signup form;
- `functions/api/subscribe.js` accepts only the newsletter signup request;
- the function validates the request and sends it to beehiiv's official subscription API;
- the beehiiv API key remains server-side only;
- beehiiv remains the system of record;
- no database, subscriber store, account system, newsletter sending, or unsubscribe implementation is added to Portfilo.

`AGENTS.md` and `docs/V0_SCOPE.md` have been updated to record this exception and prevent scope creep.

### Native route

`/subscribe`

Implementation file:

`src/pages/subscribe.astro`

The page now:

- uses only Portfilo HTML/CSS for the visible signup UI;
- contains no beehiiv iframe or loader script;
- uses Instrument Sans for the form control typography;
- uses Portfilo paper/ink/signal-blue tokens;
- uses square geometry rather than third-party rounded widget styling;
- has a large editorial horizontal email control on desktop;
- intentionally stacks input and full-width action on mobile;
- has visible focus states;
- has client-side invalid-email, submitting, confirmation, and API-error states;
- uses a hidden honeypot field as a lightweight bot filter;
- tells successful submissions to check the inbox rather than falsely claiming subscription is complete before double opt-in confirmation.

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
- binds the verified Portfilo Brief API V2 Publication ID in server code because it is a public identifier rather than a credential;
- calls beehiiv `POST /v2/publications/:publicationId/subscriptions`;
- sets `double_opt_override: "on"`;
- treats an explicit form submission as consent to reactivate a previously unsubscribed address;
- does not expose beehiiv API errors or credentials to the browser;
- stores no subscriber data in Portfilo.

### Secret handling

`.dev.vars.example` documents the only required local secret variable: `BEEHIIV_API_KEY`.

`.gitignore` excludes `.dev.vars` and environment-specific `.dev.vars.*` while allowing the example file to remain committed.

Production secrets will later be configured in Cloudflare Pages/Workers environment settings rather than GitHub.

### Relevant commits in the native-form transition

- `5a4e49742dd9d5a93aaba51636d83b4e03e14706` — last embed-layout refinement before the embed approach was rejected
- `e85ed39c9bc2c432a1ca5d7d5cbfaa0f4e4148ad` — secure beehiiv subscription proxy
- `d656fcc924aa6e5d16f05e3b27c36963fa9365da` — native Portfilo subscribe form
- `6c9f1053325aabe14c3b0517dfc2d1cd9a602da1` — local secret template
- `efc4597438c08ecf6664e4d47f862c33ab8798b1` — protect local Cloudflare secrets
- `4b695ed4066c62a2776818f62c9854fe7713b422` — architecture-rule exception
- `8503a19652e03cf351c4462c00db1b100610e041` — v0 scope alignment
- `270a5f49031a66be404b8c0ce41504e580ecec78` — bind verified Portfilo Brief publication ID in the proxy
- `31f4a71a0ace1bbfead539f3656054f05916374c` — reduce local configuration to the private API key only

### Remaining validation

Still required before closure:

- beehiiv account identity verification for API-key access;
- dedicated API key creation;
- local `.dev.vars` API-key configuration;
- local `npm run build` PASS;
- local Cloudflare Pages Function runtime test;
- invalid-email state PASS;
- real subscription request PASS;
- double-opt-in email + confirmation PASS;
- subscriber visible in beehiiv PASS;
- desktop/tablet/390px/360px visual QA;
- existing-route regression check.

**Do not close this phase until the real confirmed-opt-in signup succeeds and the user reports final local QA pass.**

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

- Subscribe credential connection + final functional/browser QA — current phase remainder
- global navigation / public-surface integration pass — after Subscribe
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
| Public Copy Style | PASS |
| Editorial Taxonomy Alignment | PASS |
| Homepage Visual Design | PASS |
| Series Page Foundation & Visual Design | PASS — final local QA + visual approval user-reported 2026-09-02 |
| Research & Standards Page | PASS — final local production build + responsive/browser QA + visual approval user-reported 2026-09-02 |
| About Page | PASS — final local production build + responsive/browser QA + visual approval user-reported 2026-09-02 |
| Subscribe Surface & beehiiv Integration | NATIVE FORM IMPLEMENTED — API key + functional signup + final QA pending |

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
