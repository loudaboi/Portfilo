# Portfilo Cloudflare Production Setup

_Status: PARTIALLY CONFIGURED / TRACK 6 IN PROGRESS / FINAL DOMAIN PENDING_

_Last updated: 2026-09-05_

This document records the approved v0 production configuration for Cloudflare Pages.

Current Pages project:

`portfilo-app`

Current temporary production URL:

`https://portfilo-app.pages.dev`

Current production branch:

`build/portfilo-v0`

The Pages deployment and subscription baseline exist. Cloudflare Web Analytics can be enabled on the current Pages project before the final domain exists. Final public-domain configuration, zone-level rate limiting, beehiiv redirect, compliance, and final-domain QA remain pending.

Do not invent or hard-code a final production domain. Apply domain-specific values only after the final public Portfilo domain is selected and connected.

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

Final value:

`https://<final-production-domain>`

Requirements:

- use the canonical public HTTPS origin only;
- do not use a preview deployment URL as the final canonical origin;
- do not use `CF_PAGES_URL` as the canonical production origin;
- keep the current temporary `https://portfilo-app.pages.dev` value until the final domain is known;
- replace the temporary deployment-origin configuration only after the final domain is connected and ready for canonical cutover.

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

Cloudflare rate limiting rules are deployed at the zone level. The temporary `portfilo-app.pages.dev` hostname is not a Portfilo-owned zone, so this WAF rule should be created only after the final custom domain is attached to a Cloudflare zone.

Current Cloudflare Free-plan constraints verified during Track 6:

- one rate limiting rule;
- URI Path is available as a rule-expression field;
- IP is available as the counting characteristic;
- the Free-plan counting period is 10 seconds;
- the Free-plan mitigation timeout is 10 seconds;
- HTTP Method is not available as a Free-plan rule-expression field.

Recommended initial rule after the final domain is active:

- matching path: `/api/subscribe`;
- counting characteristic: IP;
- threshold: 5 requests;
- period: 10 seconds;
- action: Block;
- mitigation duration: 10 seconds.

Because Method matching is not available on the Free-plan rate limiting rule, the path-level rule will count all requests to `/api/subscribe`. The endpoint itself still rejects non-POST requests with `405`.

This threshold is deliberately tolerant of normal signup retries while stopping simple high-rate automation. Review Cloudflare security events after launch and adjust only if real traffic shows false positives or abuse.

Do not add Turnstile by default. Revisit it only if the existing honeypot, same-origin browser check, body-size limit, and edge rate limiting are insufficient.

## Web Analytics

Cloudflare Pages provides a one-click Web Analytics integration and does not require the final public domain to be selected first.

Current Track 6 action:

1. In Cloudflare, open **Workers & Pages**.
2. Select the `portfilo-app` Pages project.
3. Open **Metrics**.
4. Select **Enable** under **Web Analytics**.
5. Trigger or wait for the next production deployment.
6. Verify the Pages deployment is reporting traffic in Cloudflare Web Analytics.

Cloudflare automatically injects the Web Analytics JavaScript snippet into valid HTML on the next deployment. Do not add a separate analytics backend or manually insert a second beacon for v0.

If the implementation method changes from Cloudflare's Pages integration to a manually inserted beacon, review and update the Privacy page before launch.

## beehiiv production redirect

After the final public domain is stable, set beehiiv's Opt-in Redirect URL to:

`https://<final-production-domain>/confirmed`

Do not use the temporary Pages URL as the permanent redirect.

## Production email QA

Run one real end-to-end final-domain test after the custom domain is connected:

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

Repository-side subscription hardening:

- `/api/subscribe` enforces the 4 KB request cap against actual body bytes as well as the `Content-Length` fast-path;
- JSON signup: validated;
- URL-encoded form fallback: validated;
- multipart form parsing: validated;
- cross-origin request rejection when `Origin` is supplied: validated;
- oversized actual body without relying on `Content-Length`: validated;
- honeypot requests remain accepted without forwarding to beehiiv: validated;
- upstream beehiiv requests use a 10-second timeout;
- latest recorded `npm audit`: zero vulnerabilities;
- latest post-Track-5 `npm run check`: PASS, user-reported 2026-09-05;
- latest post-Track-5 `npm run build`: PASS, user-reported 2026-09-05.

These checks do not replace the final deployed Track 6 runtime QA.

## Still pending

Can be completed before the final domain:

- enable and verify Cloudflare Web Analytics on the `portfilo-app` Pages project;
- synchronize the root `package-lock.json` package license snapshot from `ISC` to `UNLICENSED`;
- continue temporary-production browser/mobile/link/404/console/metadata QA where the environment permits.

Blocked on the final public domain:

- final public domain selection;
- Cloudflare custom-domain connection;
- final production `SITE_URL` value;
- Cloudflare zone-level `/api/subscribe` rate limiting rule;
- beehiiv final production Opt-in Redirect URL;
- final-domain signup/confirmation/unsubscribe QA;
- final canonical-host metadata/redirect verification.

Also required before first public newsletter send:

- mailing-address/compliance clearance.

The existing `portfilo-app.pages.dev` deployment remains the working temporary production baseline, not the final public-domain configuration.
