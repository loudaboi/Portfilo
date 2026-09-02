# Portfilo Email System & Confirmation Experience

_Status: research complete / candidate pending user approval_

_Last updated: 2026-09-02_

## Goal

Make the email experience feel like Portfilo without turning beehiiv into a second website or recreating the web design inside an inbox.

The system covers:

1. double-opt-in confirmation email;
2. post-confirmation destination;
3. welcome-email policy;
4. Portfilo Brief newsletter template;
5. sender/reply identity;
6. required footer/address treatment;
7. QA before public sending.

The subscription plumbing itself is already validated and closed.

## Constraints confirmed by research

### beehiiv can customize the important email surfaces

The Double Opt-in Email can customize subject line, preview text, author, body content, button text, button position, and Style settings. The confirmation button cannot be removed because it performs the opt-in action.

beehiiv also supports an Opt-in Redirect URL after confirmation. Without one, the reader is sent to the beehiiv publication homepage.

Newsletter templates can be saved and reused. The Post Builder supports colors, typography, spacing, borders, headers, body styles, widgets, and footer styling.

References:

- https://www.beehiiv.com/support/article/13081072798743
- https://www.beehiiv.com/support/article/30974963947031-creating-and-using-newsletter-templates
- https://www.beehiiv.com/support/article/31258673154455

### Exact web fonts should not be a requirement

beehiiv's Post Builder uses a curated set of email-safe fonts because inbox clients have limited font support. Website custom fonts do not carry into newsletters.

Portfilo should match the website through hierarchy, spacing, rules, color, and restraint rather than forcing Instrument Sans or Source Serif 4 into email clients.

Reference:

- https://www.beehiiv.com/support/article/39642263350935

### Welcome email behavior is explicit

The Portfilo API currently sends:

`send_welcome_email: false`

beehiiv documents that API-created subscribers need `send_welcome_email: true` for a welcome email to send. With double opt-in, an enabled welcome email would send only after confirmation.

References:

- https://developers.beehiiv.com/api-reference/subscriptions/create
- https://www.beehiiv.com/support/article/12314708619159-why-are-my-welcome-emails-not-being-sent

### Footer/address is mandatory

beehiiv requires a physical mailing address in the email footer. If Portfilo does not provide one, beehiiv uses its own business address as a fallback. Do not replace that fallback with a fake address.

The footer can still be styled around the required address and unsubscribe controls.

References:

- https://www.beehiiv.com/support/article/12293012097175-how-to-update-the-address-and-copyright-text-in-your-email-footer
- https://www.beehiiv.com/support/article/6049111808279-how-to-customize-your-beehiiv-publication-footer

## Recommended journey

### 1. Signup

Reader submits the native form on `/subscribe`.

Portfilo responds:

> Check your inbox. Confirm your email to finish subscribing to Portfilo Brief.

No change required.

### 2. Double-opt-in email

This becomes the only immediate email.

Recommended sender name:

`Portfilo`

Recommended subject:

`Confirm your Portfilo Brief subscription`

Recommended preview text:

`One click to finish signing up.`

Recommended body:

**PORTFILO BRIEF / CONFIRMATION**

# Confirm your subscription.

Click below to finish signing up for Portfilo Brief.

**Confirm subscription**

If you did not sign up, you can ignore this email.

Rules:

- no mission statement;
- no coverage manifesto;
- no geographic positioning;
- no decorative intro paragraph;
- one required action only;
- the button label should describe the action literally;
- keep legal/footer material visually separate from the action.

### 3. Post-confirmation redirect

Create a Portfilo-owned static route:

`/confirmed`

Candidate page copy:

# Subscription confirmed.

You're subscribed to Portfilo Brief. New stories will arrive by email.

**Read the latest →**

The page should use the existing `SiteHeader` and `SiteFooter` and remain visually minimal. It does not need another signup form, newsletter explanation, or brand manifesto.

After the production domain is stable, configure beehiiv's Opt-in Redirect URL to the public `/confirmed` route.

Do not point beehiiv to localhost.

Do not invest in redesigning the beehiiv-hosted publication homepage for v0. The Astro/Cloudflare site remains Portfilo's primary website.

### 4. Welcome email

Recommendation for v0: **keep disabled**.

Reasoning:

- double opt-in already creates an immediate transactional email;
- a second email immediately after confirmation is only worthwhile if it has useful onboarding content;
- Portfilo does not yet have the final launch story set or a fixed newsletter cadence;
- sending a generic welcome note would recreate the over-explaining problem the public copy architecture just removed.

Keep `send_welcome_email: false` in `functions/api/subscribe.js` for now.

Revisit only when real launch content exists. A future welcome email should earn its send by doing something concrete, such as linking to a small set of strong starting stories and explaining how often Portfilo Brief actually sends.

When that decision changes, both conditions must be handled deliberately:

1. configure/enable the Welcome Email in beehiiv;
2. change API `send_welcome_email` to `true` and re-run subscription QA.

### 5. Smart Nudge

beehiiv can send a follow-up confirmation reminder to subscribers still Pending after 48 hours.

Recommendation: **optional but useful after the main confirmation email is branded**.

It is not required to launch the v0 subscription flow. Do not let it block the core email system.

Reference:

- https://www.beehiiv.com/support/article/13081072798743

## Portfilo Brief newsletter design

### Product role

Portfilo Brief should distribute Portfilo journalism, not become a second publication with a separate brand voice.

The email should feel like a compact issue of Portfilo that happens to arrive in an inbox.

BackScoop is useful here because its newsletter promise stays concrete: startup deals, what the company does, and why it matters. Its product copy does not require a long brand explanation before the reader gets to the stories.

References:

- https://backscoop.com/
- https://backscoop.com/search?sector=Agritech

### V0 template structure

Use one reusable default template rather than multiple newsletter formats at launch.

Recommended structure:

1. `PORTFILO BRIEF / [DATE]` small label;
2. Portfilo/Portfilo Brief identity;
3. lead story headline;
4. short dek or two-sentence explanation;
5. `Read →` link;
6. `Also in Portfilo` with 2-4 additional story links when available;
7. short sign-off or no sign-off;
8. compliant footer.

The content count should be allowed to vary. Do not create empty sections just to preserve a template.

### Subject-line rule

Subject lines should usually lead with the strongest concrete story or development rather than issue numbering.

Avoid default patterns such as:

- `Portfilo Brief #001`;
- `Your weekly dose of...`;
- `What you need to know today`;
- clickbait curiosity gaps;
- emoji as a permanent subject-line device.

Preview text should add information rather than repeat the subject.

### Visual direction

Translate the site system instead of duplicating it.

Use:

- paper-like or white/light background;
- ink/dark text;
- signal blue for primary links and rules;
- restrained red only where it has a real semantic role, such as a correction;
- sharp corners;
- thin rules;
- generous whitespace;
- strong type hierarchy;
- mostly single-column content.

Do not use:

- rounded card stacks;
- gradients;
- glass effects;
- heavy illustration as decoration;
- multiple competing button styles;
- large hero graphics just to make the email feel designed.

### Typography

Use the closest available email-safe sans for headings/interface text and the closest available readable serif for editorial body copy if beehiiv's curated options support a good pair.

If the serif pairing renders poorly across clients, prefer one strong email-safe sans throughout rather than a forced mismatch.

The Portfilo wordmark may be used as a small image asset if needed, but critical information must remain readable when images are blocked.

## Sender and reply identity

Recommended sender name:

`Portfilo`

Reason: the publication is the durable identity; `Portfilo Brief` is the email product.

Before public launch, set a deliberate reply-to address. Prefer a verified address on Portfilo's eventual domain when available rather than relying indefinitely on the beehiiv/account default.

Do not require a custom-domain sender to complete the design phase, but include sender-domain/reply-to verification in deployment QA.

References:

- https://www.beehiiv.com/support/article/12293357892503
- https://www.beehiiv.com/support/article/12283814343831-how-to-set-or-change-your-publications-reply-to-address

## Mailing address policy

Before the first public newsletter send, choose a real physical mailing address Portfilo is authorized to publish and that satisfies beehiiv's requirements and applicable law.

Do not:

- invent an address;
- use a random office;
- publish a private/home address casually without considering privacy;
- remove the required unsubscribe/address controls.

A business address, registered office, PO box, or mailbox service may be options depending on the service and applicable rules, but the exact choice should be verified before launch rather than assumed.

Until then, beehiiv's fallback address is acceptable only as a temporary test-state artifact.

## Email footer direction

Keep the footer visually quiet.

Recommended hierarchy:

1. thin divider;
2. `Portfilo Brief` or Portfilo identity;
3. required address;
4. unsubscribe link;
5. optional contact/reply instruction only if useful;
6. beehiiv branding if the active plan requires it.

Do not pack the footer with social icons or generic promotional links before those destinations matter.

## QA standard

No email surface is approved from beehiiv Preview alone.

Before public sending, test:

- confirmation email on desktop and mobile;
- actual confirmation button behavior;
- `/confirmed` redirect on production URL;
- Gmail rendering;
- at least one additional client if available, preferably Outlook or Apple Mail;
- dark mode where available;
- images blocked/off;
- all links;
- unsubscribe link;
- physical address;
- sender name;
- reply-to behavior;
- subject and preview text together in the inbox;
- no horizontal overflow or clipped text;
- body text readable without zoom;
- buttons/links easy to tap on mobile;
- no essential information encoded only in an image;
- footer remains readable and compliant.

For every real Portfilo Brief issue, send a test email before the public send.

## Recommended implementation order

After user approval:

1. build `/confirmed` in Astro using shared site chrome;
2. customize the beehiiv Double Opt-in Email to the approved copy/style;
3. preview and send a test confirmation email;
4. keep the Welcome Email disabled and leave API `send_welcome_email: false`;
5. optionally enable Smart Nudge after confirmation-email QA;
6. build and save one Portfilo Brief newsletter template in beehiiv;
7. choose a legitimate mailing address before public newsletter launch;
8. once the production Portfilo domain exists, set Opt-in Redirect URL to `/confirmed` and run one production confirmation test;
9. revisit welcome email only when real launch stories make it useful.

## Recommendation

Approve this as the v0 email architecture.

The core principle is the same as the website copy reset:

> **Say the thing. Then stop.**

Email should add utility, not another layer of brand explanation.
