# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Email System & Confirmation Experience — CANDIDATE PREPARED / USER REVIEW PENDING**

Subscribe end-to-end functionality is **PASS / CLOSED**.

The user completed one real native Portfilo subscription through the local Cloudflare Pages Function and beehiiv API. The flow produced the expected pending-confirmation state, delivered the double-opt-in email, completed confirmation, and showed the subscriber as Active in beehiiv. beehiiv recorded the acquisition source as `api: portfilo / website`.

The remaining email work is product/design work, not subscription plumbing.

Canonical email-system candidate:

`docs/EMAIL_SYSTEM_PLAN.md`

Do not change beehiiv email settings, enable a welcome email, change the API welcome-email flag, or build the confirmation route until the user approves that plan.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Approved product direction

Portfilo v0 is a content-first business and technology publication.

Public-brand rules:

- no permanent tagline by default;
- no forced geographic slogan;
- no audience-flattering slogan;
- the wordmark establishes the publication;
- the Homepage leads with journalism rather than a brand manifesto;
- About explains Portfilo plainly;
- Standards demonstrates editorial rigor;
- Subscribe explains the email product only.

Canonical copy guide:

`docs/COPY_STYLE.md`

Internal editing rule:

> **Say the thing. Then stop.**

Rejected positioning must not be restored, including:

- `Practical intelligence for ambitious Filipinos.`
- `Business and tech, from the Philippines.`
- `Business and tech make more sense when you start from here.`

Philippine relevance remains part of reporting and early distribution strategy, but geography is not required brand copy.

## Locked taxonomy

Top-level v0 topics:

- Business
- Technology
- Startups
- AI
- Building

Rules:

- one primary topic per story;
- AI is primary only when AI itself is the main subject;
- founders are a recurring lens, not a top-level topic;
- capital/funding normally sits under Business or Startups;
- `Latest` is broader than breaking news;
- Portfilo Brief is the email product.

## Shared site chrome — PASS

Runtime components:

- `src/components/SiteHeader.astro`
- `src/components/SiteFooter.astro`

Primary navigation:

- `Latest` → `/#latest`
- `Standards` → `/standards`
- `About` → `/about`
- `Subscribe` → `/subscribe`

The Portfilo wordmark links Home. The same header/footer components render on Homepage, About, Subscribe, Standards, Story, and Series. Global navigation uses Instrument Sans and remains visible on mobile.

User visual QA is a PASS, including:

- stable navigation across routes;
- About topic-card alignment;
- compact `Founder / Louda Tuppal` attribution;
- removal of legacy `Back to home` links.

## Public surfaces

### Homepage `/`

Implementation: `src/pages/index.astro`

Approved direction:

- page title `Portfilo`;
- compact topic/coverage strip;
- feature story is the primary `h1` and visual hero;
- `Latest` section has `id="latest"`;
- factual About bridge;
- Portfilo Brief copy reduced to the email product itself;
- no geographic/tagline positioning.

Fixture story language remains clearly marked as preview material until launch stories are selected.

### About `/about`

Implementation: `src/pages/about.astro`

Current public framing:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

No founder portrait, long biography, founder letter, or unsupported ownership/independence claim should be added without a new decision.

### Research & Standards `/standards`

Implementation: `src/pages/standards.astro`

Substantive standards remain unchanged:

- Sources
- Verification
- AI use
- Corrections
- Commercial independence

### Story template

Implementation: `src/pages/stories/[slug].astro`

Story content, metadata, methodology, corrections, and Content Collection behavior remain intact.

### Series template

Implementation: `src/pages/series/[slug].astro`

Series ordering and fixture behavior remain intact.

Pre-launch cleanup still required:

- remove reader-facing `Series ID` before public launch.

Do not expand that cleanup into an unapproved Series redesign.

## Subscribe `/subscribe` — END-TO-END PASS

Visible page: `src/pages/subscribe.astro`

Server endpoint: `functions/api/subscribe.js`

Local secret template: `.dev.vars.example`

Architecture:

- native Portfilo form;
- one Cloudflare Pages Function;
- official beehiiv API V2;
- same-origin browser check;
- server-side validation;
- honeypot handling;
- no subscriber database in Portfilo;
- publication ID bound in source;
- only `BEEHIIV_API_KEY` is secret;
- `reactivate_existing: true`;
- `send_welcome_email: false`;
- `double_opt_override: "on"`;
- website UTM attribution.

Validated results:

- beehiiv identity verification: PASS
- dedicated API key: PASS
- `.dev.vars` secret loading: PASS
- production `npm run build`: PASS, 8 pages
- `npx wrangler pages dev dist`: PASS
- Cloudflare Pages Function compilation: PASS
- native form submission: PASS
- `POST /api/subscribe`: 200 OK
- pending-confirmation UI: PASS
- double-opt-in email delivery: PASS
- confirmation: PASS
- subscriber status: Active
- acquisition source: `api: portfilo / website`

Subscribe functionality is closed unless deployment QA later exposes an environment/configuration regression.

## Email System & Confirmation Experience — CANDIDATE

Canonical candidate:

`docs/EMAIL_SYSTEM_PLAN.md`

Research confirms:

- beehiiv Double Opt-in Email supports custom subject, preview text, author, body, confirmation-button text/position, and visual styling;
- the required confirmation button cannot be removed;
- beehiiv supports an Opt-in Redirect URL;
- beehiiv newsletter templates can be saved/reused and styled extensively;
- email clients have limited font support, so beehiiv uses curated email-safe fonts rather than the website's custom font set;
- API signups require `send_welcome_email: true` for the beehiiv welcome email to send;
- a physical mailing address is required in email footers; beehiiv's address is only a fallback when Portfilo has not supplied one.

Candidate recommendations pending user approval:

1. Keep double opt-in.
2. Brand the confirmation email around one literal action: confirm the subscription.
3. Use sender name `Portfilo`.
4. Create a minimal Portfilo-owned `/confirmed` route using shared site chrome.
5. After a stable production URL exists, set beehiiv's Opt-in Redirect URL to `/confirmed`.
6. Do not invest in beehiiv's hosted publication website for v0.
7. Keep the Welcome Email disabled for v0 and retain API `send_welcome_email: false` until real launch stories make a welcome email useful.
8. Treat Smart Nudge as optional after confirmation-email QA, not a blocker.
9. Build one reusable Portfilo Brief newsletter template rather than multiple formats at launch.
10. Translate the site visually through color, hierarchy, rules, spacing, and restraint instead of forcing exact web fonts into email clients.
11. Choose a real authorized mailing address before the first public newsletter send. Never invent one.
12. Run real inbox QA, not beehiiv Preview only.

Candidate double-opt-in copy:

Subject:

`Confirm your Portfilo Brief subscription`

Preview:

`One click to finish signing up.`

Body:

> PORTFILO BRIEF / CONFIRMATION
>
> Confirm your subscription.
>
> Click below to finish signing up for Portfilo Brief.
>
> Confirm subscription
>
> If you did not sign up, you can ignore this email.

Candidate `/confirmed` copy:

> Subscription confirmed.
>
> You're subscribed to Portfilo Brief. New stories will arrive by email.
>
> Read the latest →

No implementation is approved yet.

## Brand and visual system

Locked unless QA exposes a concrete implementation problem:

- wordmark-first identity;
- Instrument Sans, Source Serif 4, IBM Plex Mono on the website;
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

Email should translate this system rather than reproduce unsupported website typography exactly.

## Zero-budget infrastructure posture

Current direction:

- Cloudflare Pages;
- one Cloudflare Pages Function solely for newsletter subscription forwarding;
- Cloudflare Web Analytics;
- beehiiv;
- GitHub;
- local Markdown + Astro Content Collections;
- no database;
- no authentication system;
- no custom subscriber store;
- no custom newsletter platform;
- no custom analytics backend.

Do not make v0 depend on paid beehiiv automation features.

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
| Architecture C / content-first | APPROVED |
| Shared SiteHeader/SiteFooter | PASS |
| Production Astro build | PASS |
| Subscribe end-to-end | PASS / CLOSED |
| Email-system research | PASS |
| Email-system candidate | PREPARED, user review pending |
| Branded confirmation email | NOT IMPLEMENTED |
| Portfilo `/confirmed` route | NOT IMPLEMENTED |
| Welcome email | DISABLED by current API policy |
| Publication mailing address | PENDING before public newsletter launch |
| Newsletter template | NOT IMPLEMENTED |

## Exact next task

**User review of `docs/EMAIL_SYSTEM_PLAN.md`.**

If approved, implement in this order:

1. build `/confirmed` in Astro;
2. customize the beehiiv Double Opt-in Email;
3. test the branded confirmation email;
4. leave the Welcome Email disabled and API flag unchanged;
5. optionally enable/test Smart Nudge;
6. build one reusable Portfilo Brief newsletter template;
7. choose/verify the legitimate mailing address before public sending;
8. set the production Opt-in Redirect URL only after the Portfilo production domain is stable.

## Relevant latest commits

- `28b98e8f36964b010af93605b4fcc8547321ff71` - final About founder spacing correction
- `dd9a527312e48562442dd7995d7a704e7a240311` - advance project to Subscribe end-to-end QA
- `51bd213f759f211c6a1078e0583bfaebd6c10eee` - close Subscribe QA and advance to email-system planning
- `4e6bbe31512972d607449eef27ff6f9cc7b76c68` - add email-system candidate

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
