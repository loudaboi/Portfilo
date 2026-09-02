# Portfilo Email System & Confirmation Experience

_Status: APPROVED / v0 email system locked_

_Last updated: 2026-09-02_

## Decision

Portfilo v0 uses beehiiv to own subscriber confirmation, confirmed-subscriber storage, newsletter sending, unsubscribe handling, and deliverability infrastructure.

Portfilo owns the signup interface, the narrow subscription proxy, the post-confirmation website experience, and the editorial design of Portfilo Brief.

Portfilo does not operate a transactional email service, custom confirmation-token system, pending-subscriber store, subscriber database, or custom newsletter backend.

This is the canonical v0 architecture.

## Runtime flow

```text
Portfilo /subscribe
        ↓
POST /api/subscribe
        ↓
beehiiv subscription API
        ↓
Pending subscriber
        ↓
beehiiv double-opt-in email
        ↓
reader confirms
        ↓
Active subscriber in beehiiv
        ↓
Portfilo /confirmed after production redirect is configured
```

Implementation:

- signup page: `src/pages/subscribe.astro`
- subscription proxy: `functions/api/subscribe.js`
- post-confirmation page: `src/pages/confirmed.astro`

The API intentionally uses:

```js
reactivate_existing: true
send_welcome_email: false
double_opt_override: "on"
```

and preserves Portfilo website attribution through the existing UTM values.

## Ownership boundaries

### Portfilo owns

- the native `/subscribe` UI;
- browser-side email validation;
- server-side email validation;
- the honeypot filter;
- the narrow Cloudflare Pages Function that forwards the signup to beehiiv;
- `/confirmed` as the eventual post-confirmation destination;
- Portfilo Brief editorial selection, design, copy, and QA.

### beehiiv owns

- Pending subscriber state;
- confirmation-token generation and validation;
- double-opt-in email delivery;
- Pending → Active transition;
- confirmed subscriber storage;
- newsletter delivery;
- unsubscribe handling;
- provider footer/compliance mechanisms;
- newsletter operations and deliverability infrastructure.

## Rejected custom confirmation architecture

A Portfilo-owned confirmation system using Resend, Turnstile, custom encrypted tokens, and a second confirmation endpoint was researched and briefly implemented, then rejected as overengineering for v0.

Reasons:

- it added another email provider and credentials;
- it introduced confirmation-token security and expiry behavior;
- it expanded the narrow newsletter proxy into custom confirmation infrastructure;
- email-security scanners can prefetch confirmation links, requiring additional user-action safeguards for a robust custom flow;
- the already-tested beehiiv flow solves the underlying confirmation problem correctly;
- the visual limitations of one utility email are not a sufficient reason to rebuild commodity newsletter infrastructure.

The custom runtime code and configuration have been removed.

Do not reintroduce Resend, custom confirmation tokens, KV, or Turnstile for this problem unless a new validated requirement justifies them.

## Double opt-in policy

Keep double opt in enabled for v0.

The purpose is list quality and verified consent. It protects against obvious typos, unwanted signups, and invalid addresses before they become active newsletter recipients.

Do not switch to single opt in merely because of editor preference.

A future single-opt-in decision should be based on real conversion and deliverability evidence.

## Published confirmation email

The beehiiv double-opt-in email is now intentionally designed and published.

Copy:

**Subject**

`Confirm your Portfilo Brief subscription`

**Preview text**

`Confirm your email to finish subscribing.`

**Visible content**

> PORTFILO BRIEF / CONFIRMATION
>
> Confirm your subscription.
>
> Click below to finish signing up for Portfilo Brief.
>
> Confirm subscription

Design rule:

- paper background `#F4F0E8`;
- Arial for structural text and CTA;
- Georgia for body copy;
- ink `#171614`;
- muted text `#69655E`;
- Portfilo blue `#0050A4`;
- square CTA, no rounded card treatment;
- footer aligned with the recurring Portfilo Brief system.

This remains a utility email with one job: confirm the subscription. Do not expand it into a brand manifesto, founder note, topic list, illustration, or multi-section marketing email.

## Post-confirmation destination

Portfilo owns:

`/confirmed`

Implementation:

`src/pages/confirmed.astro`

Current copy:

> Subscription confirmed.
>
> You’re subscribed to Portfilo Brief. New stories will arrive by email.
>
> Read the latest ↗

The route uses shared Portfilo site chrome and is marked `noindex`.

Once Portfilo has a stable production domain, configure beehiiv's Opt-in Redirect URL to the full production `/confirmed` URL.

Do not point beehiiv to localhost, a Wrangler development URL, or a temporary preview URL.

The production redirect remains pending until the stable public domain is known.

## Welcome email

Keep the Welcome Email disabled for v0.

The API remains:

```js
send_welcome_email: false
```

A welcome email should only be introduced when real launch stories make it useful, for example by giving a new subscriber a small set of strong starting stories.

Do not send a generic second email merely to explain the brand again.

## Smart Nudge

Keep Smart Nudge disabled for v0.

Revisit only if Pending subscriber drop-off becomes a measurable problem.

## Sender and reply identity

Current v0 settings:

- sender name: `Portfilo`;
- do not use the individual post author as sender;
- Reply-To: `portfilo.ph@gmail.com`;
- beehiiv remains the sending provider;
- do not make the v0 architecture depend on a paid custom sending-domain feature.

A custom Portfilo domain can replace the provider-managed sender domain later if the production domain and plan make that practical.

## Portfilo Brief v0

The recurring newsletter uses one reusable beehiiv template named:

`Portfilo Brief v0`

It was built from a blank beehiiv Visual Editor template rather than the stock newsletter template. Custom HTML is not a foundational dependency.

The master template contains:

1. `PORTFILO BRIEF` identity;
2. issue date;
3. blue editorial rule;
4. one lead-story module;
5. one reusable secondary-story Section;
6. beehiiv-managed footer.

Optional correction and image treatments are inserted only when needed. They are not permanent empty modules in the master.

### Editorial structure

Lead story:

- topic;
- headline;
- one- or two-sentence dek;
- optional lead image;
- blue `Read story →` button.

Secondary story:

- neutral top separator;
- topic;
- smaller headline;
- optional dek;
- blue underlined `Read story →` text link.

Story-count rule:

- 1 story: delete the entire secondary Section;
- 2 stories: use the one secondary Section in the template;
- 3 stories: duplicate the whole secondary Section once;
- 4 stories: duplicate it twice;
- 5+ available stories: curate the strongest few rather than dumping every story into the email.

Never leave empty optional sections or empty dek blocks.

### Image rule

Default lead-photo ratio: `16:9`.

Recommended export: approximately `1200 × 675` px, compressed without obvious quality loss.

Use `3:2` only when the composition genuinely benefits from additional height. Charts and data graphics may use an appropriate native ratio such as `4:3`.

Lead images are full-column, square-cornered, borderless, shadowless, and optional. Live headline, dek, and CTA must remain sufficient if images are blocked.

### Correction rule

Corrections are optional and appear after the masthead rule and before the lead story.

Use a restrained correction treatment:

- `2 px` top rule in correction red `#B42318`;
- `CORRECTION` label in the same red;
- correction copy in the normal muted Georgia paragraph style;
- no red background;
- no red CTA;
- optional blue `Read corrected story →` link only when a corrected destination is useful.

### Subject and preview rule

Subject lines should normally lead with the strongest concrete story, not issue numbering or generic newsletter language.

Preview text should add useful context rather than repeat the subject.

The internal post title may remain operational, for example:

`Portfilo Brief / YYYY-MM-DD`

Native beehiiv title, subtitle, and date display elements are hidden from the email because the template supplies its own masthead.

### Placeholder-link rule

The master template may retain `https://example.com` in CTA placeholders because it is deliberately conspicuous during QA.

Before every real send, replace every placeholder URL with the exact Portfilo story URL it describes. Lead image links, when used, should point to the same lead story.

Never ship a public issue with an `example.com` link.

## Mailing address

The beehiiv publication address field is currently left unset. beehiiv may show its provider fallback address in test/output email.

Do not represent that fallback address as Portfilo's own address, and do not invent a Portfilo address.

The user has accepted this temporary configuration for v0 setup and testing. Whether the provider fallback is sufficient for the first public send under all applicable requirements has not been established in this repository. Treat mailing-address clearance as a deployment-readiness item before public newsletter sending.

## QA status

Validated locally and in beehiiv:

- native Portfilo signup submission: PASS;
- Cloudflare Pages Function execution: PASS;
- beehiiv API acceptance: PASS;
- Pending confirmation state: PASS;
- double-opt-in email delivery: PASS;
- confirmation click: PASS;
- Active subscriber state: PASS;
- Portfilo website/API acquisition attribution: PASS;
- `/confirmed` local browser experience: PASS;
- production Astro build after architecture simplification: PASS;
- Portfilo Brief desktop preview: PASS;
- Portfilo Brief mobile preview: PASS;
- long-headline wrapping: PASS;
- one-story issue behavior: PASS;
- optional correction treatment: PASS;
- optional 16:9 image treatment: PASS;
- real inbox test send: PASS, user reported;
- published confirmation-email revision: PASS.

A specific dark-mode pass was not separately recorded and should not be inferred from the general inbox pass.

Before the first public newsletter send, additionally verify the production environment itself:

- production `BEEHIIV_API_KEY` configuration;
- production signup submission;
- production confirmation email delivery;
- production Opt-in Redirect URL to `/confirmed`;
- Active subscriber after confirmation;
- unsubscribe behavior;
- sender/reply identity in the deployed flow;
- mailing-address/compliance clearance;
- all real issue links and content;
- final test send from the production issue.

## Architecture principle

Use commodity infrastructure for commodity problems.

Portfilo should spend design and engineering effort on the publication, journalism, and recurring reader experience, not on rebuilding subscriber-confirmation infrastructure that beehiiv already provides.
