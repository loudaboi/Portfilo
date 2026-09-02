# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Email System & Confirmation Experience — IMPLEMENTATION / QA ACTIVE**

Subscribe end-to-end functionality is **PASS / CLOSED**.

The email-system architecture in `docs/EMAIL_SYSTEM_PLAN.md` is **APPROVED**.

The Portfilo-owned `/confirmed` route is implemented and the user has completed local browser review with a **PASS**.

The immediate task is now to configure and test the branded beehiiv Double Opt-in Email. Do not set the production Opt-in Redirect URL until Portfilo has a stable public production domain.

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

The Portfilo wordmark links Home. The same shared header/footer system is used across public pages. Global navigation uses Instrument Sans and remains visible on mobile.

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

### Confirmation `/confirmed` — PASS

Implementation: `src/pages/confirmed.astro`

Purpose:

- Portfilo-owned post-double-opt-in destination;
- transactional, not a new marketing surface;
- uses shared SiteHeader/SiteFooter;
- marked `noindex`;
- one confirmation statement and one CTA back to `/#latest`.

Current copy:

> Subscription confirmed.
>
> You’re subscribed to Portfilo Brief. New stories will arrive by email.
>
> Read the latest ↗

Local browser review: **PASS, user reported 2026-09-02**.

Do not configure beehiiv's Opt-in Redirect URL to localhost or any temporary development URL. Set it only after a stable public Portfilo production domain exists.

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
- production `npm run build`: PASS, 8 pages at the time of Subscribe QA
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

## Email System & Confirmation Experience — APPROVED

Canonical plan:

`docs/EMAIL_SYSTEM_PLAN.md`

Exact beehiiv setup specification:

`docs/BEEHIIV_EMAIL_SETUP.md`

Approved decisions:

1. Keep double opt-in.
2. Brand the confirmation email around one literal action: confirm the subscription.
3. Use sender name `Portfilo`.
4. Use Portfilo-owned `/confirmed` after production redirect configuration.
5. Do not invest in beehiiv's hosted publication website for v0.
6. Keep the Welcome Email disabled for v0 and retain API `send_welcome_email: false`.
7. Treat Smart Nudge as optional after confirmation-email QA, not a blocker.
8. Build one reusable Portfilo Brief newsletter template rather than multiple formats at launch.
9. Translate the website visually through color, hierarchy, rules, spacing, and restraint instead of forcing exact web fonts into email clients.
10. Choose a real authorized mailing address before the first public newsletter send. Never invent one.
11. Run real inbox QA, not beehiiv Preview only.

Approved double-opt-in copy:

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

Approved email colors:

- background `#f4f0e8`
- text `#171614`
- primary `#0050a4`
- divider `#cbc5bb`

Use square corners, left alignment, restrained whitespace, and one primary CTA.

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

Local-only/generated files:

- `.dev.vars` remains ignored;
- `.wrangler/` is ignored and must not be committed.

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
| Subscribe end-to-end | PASS / CLOSED |
| Email-system research | PASS |
| Email-system architecture | APPROVED |
| Portfilo `/confirmed` route | PASS, local browser QA |
| Branded confirmation email | NEXT TASK |
| Welcome email | DISABLED by approved v0 policy |
| Production Opt-in Redirect URL | PENDING stable production domain |
| Publication mailing address | PENDING before public newsletter launch |
| Newsletter template | PENDING |

## Exact next task

**Configure and QA the beehiiv Double Opt-in Email using `docs/BEEHIIV_EMAIL_SETUP.md`.**

Sequence:

1. update sender/subject/preview/body in beehiiv;
2. apply the approved Portfilo email colors and restrained layout;
3. send a beehiiv test/preview email to a real inbox;
4. review desktop and mobile inbox rendering;
5. if visual QA passes, test one fresh double-opt-in subscription to verify the actual transactional email still works;
6. leave the Welcome Email disabled;
7. leave the Opt-in Redirect URL unset until the production domain is stable;
8. after confirmation-email QA, build the reusable Portfilo Brief newsletter template.

## Relevant latest commits

- `28b98e8f36964b010af93605b4fcc8547321ff71` - final About founder spacing correction
- `dd9a527312e48562442dd7995d7a704e7a240311` - advance project to Subscribe end-to-end QA
- `51bd213f759f211c6a1078e0583bfaebd6c10eee` - close Subscribe QA and advance to email-system planning
- `4e6bbe31512972d607449eef27ff6f9cc7b76c68` - add email-system candidate
- `d17f941dfb5c4a32b7cfd20d3c220da16b440cff` - mark email-system candidate ready for review
- `7fb27968067f95505f722018b0a18bbd8ac2586f` - add Portfilo confirmation page
- `68e6deb14afc31ed5ffb3c0c8b96c54a63a9dba5` - add beehiiv email setup specification

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
