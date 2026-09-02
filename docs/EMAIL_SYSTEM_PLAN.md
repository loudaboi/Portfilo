# Portfilo Email System & Confirmation Experience

_Status: APPROVED / simplified after architecture review_

_Last updated: 2026-09-02_

## Decision

Portfilo v0 uses beehiiv to own subscriber confirmation.

Portfilo owns the signup interface and the post-confirmation website experience. It does not operate a transactional email service, confirmation-token system, pending-subscriber store, or custom newsletter backend.

This is the deliberately simpler architecture.

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
- Portfilo Brief editorial/newsletter design decisions.

### beehiiv owns

- Pending subscriber state;
- confirmation-token generation and validation;
- double-opt-in email delivery;
- Pending → Active transition;
- confirmed subscriber storage;
- newsletter delivery;
- unsubscribe handling;
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

Keep double opt-in for v0.

The purpose is list quality and verified consent, not visual branding. It protects against obvious typos, unwanted signups, and invalid addresses before they become active newsletter recipients.

Do not switch to single opt-in merely because the confirmation-email editor is inconvenient.

A future single-opt-in decision should be based on real conversion/deliverability evidence rather than editor preference.

## Confirmation email product rule

The confirmation email is a utility surface with one job:

> Confirm the subscription.

It does **not** need to reproduce the Portfilo website or become a miniature editorial product.

Visual perfection in beehiiv's preset-email editor is not a v0 blocker.

If simple customization is easy, preferred copy is:

**Subject**

`Confirm your Portfilo Brief subscription`

**Body**

> Confirm your subscription.
>
> Click below to finish signing up for Portfilo Brief.
>
> Confirm subscription

No brand manifesto, founder note, topic list, illustration, or complex layout is required.

If the editor makes further customization cumbersome, preserve a functional confirmation email and move on. Do not add infrastructure to solve a styling inconvenience.

## Current unpublished beehiiv edits

The user made experimental changes in the beehiiv Opt in email editor while evaluating the visual limitations.

Those changes were shown as **Unpublished changes**.

Do not publish those experimental edits merely to complete this phase. The previously published functional confirmation flow remains the baseline.

A later minimal cleanup can be done in beehiiv if it is straightforward, but it is not required before continuing site/deployment work.

## Post-confirmation destination

Portfilo already has:

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

Do not point beehiiv to localhost or a temporary development URL.

Until that production redirect exists, beehiiv's hosted confirmation destination is an accepted temporary test artifact.

## Welcome email

Keep the Welcome Email disabled for v0.

The API remains:

```js
send_welcome_email: false
```

A welcome email should only be introduced when real launch stories make it useful, for example by giving a new subscriber a small set of strong starting stories.

Do not send a generic second email merely to explain the brand again.

## Smart Nudge

Not required for v0.

It may be evaluated later if Pending subscriber drop-off becomes a measurable problem.

## Portfilo Brief newsletter design

The recurring Portfilo Brief newsletter is a more important design surface than the one-time confirmation email.

Use one reusable v0 template rather than multiple formats at launch.

Recommended structure:

1. Portfilo Brief/date identity;
2. strongest lead story;
3. short dek or explanation;
4. `Read →`;
5. optional additional Portfilo stories when useful;
6. compliant footer.

Do not create empty sections to satisfy a template.

Subject lines should normally lead with the strongest concrete story rather than issue numbering or generic phrases such as `Your weekly dose of...`.

## Mailing address

A legitimate physical mailing address remains required before the first public Portfilo Brief newsletter send.

Do not invent an address.

Do not casually publish a private/home address without considering privacy.

The exact authorized address must be resolved before public newsletter sending.

## V0 QA

The already-completed local end-to-end test proved:

- native Portfilo signup submission;
- Cloudflare Pages Function execution;
- beehiiv API acceptance;
- Pending confirmation state;
- beehiiv confirmation-email delivery;
- confirmation click;
- Active subscriber state;
- Portfilo website/API acquisition attribution.

After the current simplification cleanup, require a clean production build. A full new subscription test is only necessary if the restored subscription files change again or deployment configuration differs from local QA.

Before public launch, additionally verify:

- production `BEEHIIV_API_KEY` configuration;
- production signup submission;
- production confirmation email delivery;
- production Opt-in Redirect URL to `/confirmed`;
- Active subscriber after confirmation;
- legitimate newsletter footer mailing address;
- unsubscribe behavior;
- sender/reply identity;
- one real newsletter test send.

## Architecture principle

Use commodity infrastructure for commodity problems.

Portfilo should spend its design and engineering effort on the publication, journalism, and recurring reader experience, not on rebuilding subscriber-confirmation infrastructure that beehiiv already provides.
