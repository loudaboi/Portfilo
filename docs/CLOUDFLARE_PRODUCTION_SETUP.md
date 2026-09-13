# Portfilo Cloudflare Production Setup

_Last updated: 2026-09-14_

## Release model

Working branch:

`build/portfilo-v1`

Release boundary:

`main`

Cloudflare production should track `main`.

Working-branch pushes may create previews but are not release authorization.

## Build

Recommended Pages configuration:

```text
Build command: npm run build
Build output: dist
Node version: from .node-version
```

## Environment

Required for newsletter signup:

`BEEHIIV_API_KEY`

Optional/required for canonical sitemap behavior:

`SITE_URL`

Secrets remain in Cloudflare environment configuration and local `.dev.vars`, never in Git.

## Functions

Newsletter endpoint:

`/api/newsletter/subscribe`

Source:

`functions/api/newsletter/subscribe.js`

## Release check

Before production release verify:

- production branch is `main`;
- required environment variables exist;
- canonical `SITE_URL` matches the intended public domain;
- `npm ci`, `npm run check`, and `npm run build` pass;
- newsletter signup is tested against the production/preview environment as appropriate.
