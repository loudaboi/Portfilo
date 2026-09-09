# Portfilo Cloudflare Production Setup

_Status: REPOSITORY CONFIGURATION DEFINED / CLOUDFLARE BRANCH SETTING MUST BE VERIFIED_

_Last updated: 2026-09-09_

This document records the intended v0 Cloudflare Pages configuration. It does not claim the external Cloudflare dashboard currently matches every setting below.

Current Pages project:

`portfilo-app`

Current temporary Pages URL:

`https://portfilo-app.pages.dev`

## Release branch model

Repository authority defines:

- working branch: `build/portfilo-v0`
- release boundary: `main`

Therefore the intended Pages model is:

```text
build/portfilo-v0 -> preview/test deployment
main              -> production deployment
```

An earlier Cloudflare setup used `build/portfilo-v0` as the Pages production branch. That conflicts with the repository release boundary and must be verified/corrected in the Cloudflare dashboard before release readiness is declared.

Do not treat a push to the working branch as release authorization.

## Build configuration

Build command:

`npm run build`

Build output directory:

`dist`

Node version is pinned by `.node-version`.

Runtime architecture:

- static Astro output;
- one Pages Function at `/api/subscribe`;
- Cloudflare `_redirects` for retired `/subscribe` and `/about` routes;
- no database;
- no authentication;
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
- replace any temporary pages.dev value only after the final domain is connected and ready for canonical cutover.

`SITE_URL` controls canonical URLs, social URLs, sitemap generation, and the production sitemap reference in `robots.txt`.

### `BEEHIIV_API_KEY`

Store the dedicated Portfilo beehiiv API key as a production secret/environment variable.

Never commit or expose the key through public Astro variables, logs, issues, screenshots, or client-side code. Rotate it immediately if exposure is suspected.

## Retired route redirects

Cloudflare Pages should honor the repository `public/_redirects` rules:

```text
/subscribe /#newsletter 301
/about / 301
```

These redirects must be checked on an actual Pages deployment before release. Astro's local preview server is not the authority for Cloudflare Pages redirect behavior.

## Temporary pages.dev indexing

The temporary/pre-release deployment must not become the unintended canonical public site.

Before public launch, verify that preview/test deployments are not indexable and that the configured production branch/domain is the only intended crawlable origin. Do not add a repository-wide `noindex` header that would also block the final production site.

## Custom domain

After the final domain is selected:

1. Attach it to the Portfilo Pages project.
2. Confirm HTTPS is active.
3. Choose one canonical hostname if both apex and `www` are used.
4. Redirect the non-canonical hostname to the canonical hostname.
5. Set production `SITE_URL` to the canonical HTTPS origin.
6. Deploy from `main` only after explicit release approval.
7. Verify canonical URLs, Open Graph URLs, `robots.txt`, and sitemap URLs use only that origin.

## `/api/subscribe` edge rate limiting

Keep v0 protection simple. Do not add Turnstile unless actual abuse requires it.

After the final custom domain is attached to a Cloudflare zone, the intended initial rate-limit rule remains:

- matching path: `/api/subscribe`;
- counting characteristic: IP;
- threshold: 5 requests;
- period: 10 seconds;
- action: Block;
- mitigation duration: 10 seconds.

The endpoint itself rejects non-POST requests with `405`.

Review real security events after launch before changing the threshold.

## Web Analytics

Cloudflare Web Analytics remains optional/pending verification for v0. The public Privacy notice does not claim it is active.

If enabled through the Pages integration, verify the actual deployment is reporting before treating analytics as operational. Do not add a second analytics backend or duplicate beacon.

If analytics implementation changes materially, review the Privacy page before launch.

## beehiiv production redirect

After the final public domain is stable, set beehiiv's Opt-in Redirect URL to:

`https://<final-production-domain>/confirmed`

Do not use a temporary preview URL as the permanent redirect.

## Production email QA

Run one real end-to-end test after the final domain is connected:

1. Open the homepage newsletter form at `/#newsletter` on the canonical production domain.
2. Submit a real test address.
3. Confirm the form shows the pending-confirmation state.
4. Repeat the submission test from each distinct visible newsletter form placement.
5. Confirm beehiiv sends the double-opt-in email for a valid new test address.
6. Click the confirmation link.
7. Confirm beehiiv redirects to `/confirmed`.
8. Confirm the subscriber is Active in beehiiv.
9. Verify an unsubscribe link works and subscriber state updates as expected.
10. Confirm no API key, raw beehiiv response, or sensitive value appears in browser-visible output.

## Security baseline

The current repository subscription endpoint includes:

- 4 KB request-size cap against actual body bytes plus `Content-Length` fast path;
- JSON and form request handling;
- same-origin browser check when `Origin` is supplied;
- honeypot handling;
- server-side beehiiv API key;
- upstream timeout;
- double opt-in behavior;
- safe client-facing errors;
- no-store response behavior.

Do not rewrite the endpoint without a concrete defect.

## Release checklist still pending

Before final release:

- verify Cloudflare production branch is `main`;
- verify `build/portfilo-v0` behaves as preview/test only;
- run and pass local/source validation;
- inspect actual Pages redirects;
- protect temporary/pre-release origins from indexing;
- select/connect final domain;
- set final production `SITE_URL`;
- configure final-domain rate limiting;
- set beehiiv production confirmation redirect;
- run final-domain signup/confirmation/unsubscribe QA;
- verify canonical host and metadata;
- complete mailing-address/compliance requirements before first public newsletter send.

No Cloudflare dashboard change, deployment, or release is implied by repository edits alone.
