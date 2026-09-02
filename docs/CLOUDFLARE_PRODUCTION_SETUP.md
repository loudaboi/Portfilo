# Portfilo Cloudflare Production Setup

_Status: production account configuration pending_

This document records the approved v0 production configuration for Cloudflare Pages.

Do not invent or hard-code a production domain. Apply the domain-specific values only after the final public Portfilo domain is selected and connected.

## Pages project

Production branch:

`build/portfilo-v0`

Build command:

`npm run build`

Build output directory:

`dist`

Runtime architecture:

- static Astro output;
- one Pages Function at `/api/subscribe`;
- no database;
- no auth service;
- no custom subscriber store.

## Production environment variables

Set these in the Cloudflare Pages production environment, not in source control.

### `SITE_URL`

Value:

`https://<final-production-domain>`

Requirements:

- use the canonical public HTTPS origin only;
- do not use a preview deployment URL;
- do not use `CF_PAGES_URL` as the canonical production origin;
- do not set this until the final domain is known.

`SITE_URL` controls canonical URLs, social URLs, sitemap generation, and the production sitemap reference in `robots.txt`.

### `BEEHIIV_API_KEY`

Store the dedicated Portfilo beehiiv API key as a production secret/environment variable.

Requirements:

- never commit the key;
- never expose it through a public Astro environment variable;
- never paste it into public logs, issues, screenshots, or client-side code;
- rotate it immediately if exposure is suspected.

## Custom domain

After the final domain is selected:

1. Attach it to the Portfilo Pages project.
2. Confirm HTTPS is active.
3. Decide one canonical hostname if both apex and `www` are used.
4. Redirect the non-canonical hostname to the canonical hostname.
5. Set production `SITE_URL` to the canonical HTTPS origin.
6. Deploy and verify generated canonical URLs, Open Graph URLs, `robots.txt`, and sitemap URLs use only that origin.

## `/api/subscribe` edge rate limiting

The v0 protection should stay simple and should not introduce Turnstile unless actual abuse requires it.

Cloudflare Free provides one rate limiting rule. Use that rule for the subscription endpoint.

Recommended initial rule:

- matching path: `/api/subscribe`;
- counting characteristic: IP;
- threshold: 5 requests;
- period: 10 seconds;
- action: Block;
- mitigation duration: 10 seconds.

On the Free plan, URI Path is available as a matching field and IP is available as the counting characteristic. Method matching is not available on the Free-plan rate limiting rule, so the path-level rule will count all requests to `/api/subscribe`. The endpoint itself still rejects non-POST requests with `405`.

This threshold is deliberately tolerant of normal signup retries while stopping simple high-rate automation. Review Cloudflare security events after launch and adjust only if real traffic shows false positives or abuse.

Do not add Turnstile by default. Revisit it only if the existing honeypot, same-origin browser check, body-size limit, and edge rate limiting are insufficient.

## Web Analytics

Enable Cloudflare Web Analytics for the production Pages project and verify the production deployment is reporting traffic.

Do not add a separate analytics backend for v0.

If the implementation method changes from Cloudflare's Pages integration to a manually inserted beacon, update the Privacy page before launch.

## beehiiv production redirect

After the production domain is stable, set beehiiv's Opt-in Redirect URL to:

`https://<final-production-domain>/confirmed`

Do not point the redirect at a preview or temporary Pages URL.

## Production email QA

Run one real end-to-end production test after deployment:

1. Open `/subscribe` on the canonical production domain.
2. Submit a real test address.
3. Confirm the Portfilo page shows the pending-confirmation state.
4. Confirm beehiiv sends the double-opt-in email.
5. Click the confirmation link.
6. Confirm beehiiv redirects to the production `/confirmed` route.
7. Confirm the subscriber is Active in beehiiv.
8. Send or use an appropriate test email containing beehiiv's unsubscribe link.
9. Confirm unsubscribe works and the subscriber state updates as expected.
10. Confirm no API key, raw beehiiv response, or sensitive value appears in browser-visible output.

## Security verification

Repository-side Task 1B hardening:

- `/api/subscribe` enforces the 4 KB request cap against actual body bytes as well as the `Content-Length` fast-path;
- JSON signup: validated;
- URL-encoded form fallback: validated;
- multipart form parsing: validated;
- cross-origin request rejection when `Origin` is supplied: validated;
- oversized actual body without relying on `Content-Length`: validated;
- honeypot requests remain accepted without forwarding to beehiiv: validated;
- `npm audit`: zero vulnerabilities reported on 2026-09-02;
- production Astro build: PASS;
- build with validation `SITE_URL`: PASS.

## Still pending

These items cannot be completed correctly until the production account/domain is available in the execution environment:

- final public domain selection;
- Cloudflare custom-domain connection;
- production `SITE_URL` value;
- production `BEEHIIV_API_KEY` configuration;
- Cloudflare rate limiting rule creation;
- Cloudflare Web Analytics production verification;
- beehiiv production Opt-in Redirect URL;
- deployed end-to-end signup/confirmation/unsubscribe QA.

Mailing-address/compliance clearance and replacement of development fixture content remain separate launch requirements.
