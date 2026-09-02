# Portfilo beehiiv Email Setup

_Status: approved implementation specification_

_Last updated: 2026-09-02_

This document translates `docs/EMAIL_SYSTEM_PLAN.md` into the exact beehiiv settings to use for Portfilo v0.

Do not change the subscription API architecture while applying these settings.

## 1. Double opt-in email

Navigate in beehiiv:

`Settings > Emails > Preset Emails > Double Opt-in Email > View Opt in Email > Edit Email`

### Details

**Author / sender name**

`Portfilo`

**Subject line**

`Confirm your Portfilo Brief subscription`

**Preview text**

`One click to finish signing up.`

### Body

Use this content only:

`PORTFILO BRIEF / CONFIRMATION`

# Confirm your subscription.

`Click below to finish signing up for Portfilo Brief.`

**Confirmation button**

`Confirm subscription`

After the button:

`If you did not sign up, you can ignore this email.`

Do not add a mission statement, topic list, geographic positioning, founder message, social links, or promotional paragraph to this transactional email.

## 2. Visual settings

The goal is to translate Portfilo into email-safe primitives rather than reproduce the website exactly.

### Core colors

- background / paper: `#f4f0e8`
- primary text / ink: `#171614`
- muted text where supported: `#69655e`
- links and primary action / signal blue: `#0050a4`
- light divider / line: `#cbc5bb`
- correction red `#b42318` is not needed in the confirmation email

### Typography

For maximum cross-client consistency:

- headings: **Helvetica** if available, otherwise **Arial**;
- paragraphs/body/button text: **Georgia** if the pairing looks clean in preview;
- if the serif pairing feels inconsistent, use **Helvetica/Arial throughout** rather than a forced font combination.

Do not use a font merely because it resembles Instrument Sans if it falls back unpredictably in Gmail or Outlook.

### Layout

- left aligned;
- single column;
- generous whitespace;
- no card container if beehiiv allows the body to sit directly on the background;
- radius: `0` wherever radius is configurable;
- no gradient;
- no decorative hero image;
- no centered marketing layout;
- no multiple CTA buttons.

### Confirmation button

- label: `Confirm subscription`;
- background: `#0050a4`;
- text: white;
- corner radius: `0` if configurable;
- left aligned;
- medium visual weight, not oversized;
- this remains the only primary action.

### Rules / borders

Use thin neutral rules or a signal-blue rule only where the editor supports them cleanly. Do not add decoration simply to mimic the website grid.

## 3. Footer

Required footer elements stay enabled:

- physical mailing address;
- unsubscribe link;
- beehiiv branding where required by the active plan.

Style direction:

- left aligned if available;
- small, quiet typography;
- paper or neutral background;
- thin top border;
- no social icon row unless Portfilo later has intentionally maintained social accounts worth linking.

### Mailing address

Do not enter a fake address.

beehiiv currently uses its New York business address as fallback when no Portfilo publication address is configured. A real physical mailing address that Portfilo is authorized to use remains a launch blocker for public newsletter sending.

Publication address settings are under:

`Settings > Emails > Email Footer Details`

## 4. Opt-in redirect

The Portfilo-owned target route is:

`/confirmed`

Implementation file:

`src/pages/confirmed.astro`

Do **not** set the beehiiv Opt-in Redirect URL to localhost or a temporary local Wrangler URL.

After Portfilo has a stable production domain, configure:

`Settings > Emails > Preset Emails > Double Opt-in Email > Opt-in Redirect URL`

with the full production URL, for example:

`https://<production-domain>/confirmed`

The `/confirmed` route is intentionally `noindex` and contains only:

- confirmation state;
- a short Portfilo Brief sentence;
- `Read the latest` back into Portfilo journalism.

## 5. Welcome email

Keep disabled for v0.

The subscription API must continue to use:

`send_welcome_email: false`

Do not enable the beehiiv Welcome Email as part of this pass.

A future welcome email should only be introduced once Portfilo has real launch stories that make a useful onboarding email possible. If that happens, update both beehiiv and the API deliberately and repeat end-to-end subscription QA.

## 6. Smart Nudge

Optional after the main confirmation email has passed QA.

If enabled, it should only remind Pending subscribers to complete confirmation. It is not required for the v0 email system to pass.

## 7. Confirmation email QA

Before approving the email:

1. use beehiiv Preview;
2. send a test to a real Gmail inbox;
3. inspect desktop Gmail;
4. inspect Gmail mobile;
5. check dark mode if available;
6. confirm the subject and preview text do not repeat each other;
7. confirm the action is obvious without images loading;
8. confirm the button remains readable and usable;
9. confirm the footer address and unsubscribe controls render;
10. confirm no default beehiiv copy remains above the Portfilo message;
11. complete one new double-opt-in test after the production redirect is configured;
12. confirm the button lands on the production `/confirmed` route.

## 8. Newsletter template comes next

Do not build the reusable Portfilo Brief newsletter template until the double-opt-in email and `/confirmed` route pass visual QA.

Canonical references:

- https://www.beehiiv.com/support/article/13081072798743
- https://www.beehiiv.com/support/article/31258673154455
- https://www.beehiiv.com/support/article/12293012097175-how-to-update-the-address-and-copyright-text-in-your-email-footer
- https://www.beehiiv.com/support/article/13092274099735
