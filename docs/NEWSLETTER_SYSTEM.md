# Portfilo v1 Newsletter System

_Last updated: 2026-09-14_

## Status

Current runtime architecture is approved.

The newsletter's final public promise, cadence, and monetization are still open.

## Runtime flow

```text
Portfilo signup form
  -> POST /api/newsletter/subscribe
  -> Cloudflare Pages Function
  -> beehiiv subscription API
  -> beehiiv double opt-in
  -> subscriber confirms
  -> active subscriber in beehiiv
```

Runtime file:

`functions/api/newsletter/subscribe.js`

Internal attribution:

`utm_source: portfilo`
`utm_medium: website`
`utm_campaign: portfilo_newsletter_signup`

## Security / validation

Keep:

- API key server-side only;
- same-origin check;
- bounded request body;
- email validation;
- honeypot;
- provider timeout;
- generic provider-error responses.

## Confirmation route

Current site route:

`/confirmed`

A future move to `/newsletter/confirmed` is structurally cleaner but must be coordinated with the beehiiv confirmation redirect setting.

Do not maintain both routes without a demonstrated need.

## Provider boundary

Portfilo owns the signup UI and narrow proxy.

beehiiv owns:

- double opt-in;
- subscriber records;
- newsletter sending;
- unsubscribe infrastructure.

Do not build a custom subscriber database or confirmation-token system without a new requirement.
