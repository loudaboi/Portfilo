# Portfilo Reference Sources

_Last reviewed: 2026-09-01_

This file records the primary external references used to establish current v0 technical and editorial choices. It is not a substitute for re-checking changing product documentation later.

## Technical

### Astro installation

Official documentation:
https://docs.astro.build/en/install-and-setup/

Current relevant point at review:
- Node.js v22.12.0 or higher is required.
- `create astro` is the official setup path.

### Astro Content Collections

Official documentation:
https://docs.astro.build/en/guides/content-collections/
https://docs.astro.build/en/reference/modules/astro-content/

Current relevant points at review:
- Content Collections are intended for sets of structured content.
- Schemas provide validation and TypeScript type safety.
- Build-time collections are recommended for relatively static content where performance matters.
- Content can later be sourced locally or remotely.

### Astro sitemap

Official documentation:
https://docs.astro.build/en/guides/integrations-guide/sitemap/

Current relevant point at review:
- the official sitemap integration generates sitemap files from site routes during builds.

### Cloudflare Pages with Astro

Official documentation:
https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/

Current relevant points at review:
- Astro can be deployed through Cloudflare Pages.
- Git pushes can trigger builds/deployments.
- `npm run build` and `dist` are the documented static build settings.
- preview deployments are available for pull requests.

### Cloudflare custom domains

Official documentation:
https://developers.cloudflare.com/pages/configuration/custom-domains/

### Cloudflare Web Analytics

Official documentation:
https://developers.cloudflare.com/pages/how-to/web-analytics/

Current relevant point at review:
- Web Analytics is described by Cloudflare as free and privacy-first.
- Pages supports a simple enablement flow.

### beehiiv pricing

Official pricing:
https://www.beehiiv.com/pricing

Current relevant points at review:
- Launch: $0/month.
- up to 2,500 subscribers.
- unlimited email sends.
- custom domains.
- subscribe forms.

These terms can change. Re-check before making a financial or launch decision.

### beehiiv embedded subscribe forms

Official help:
https://www.beehiiv.com/support/article/12977090590487

Current relevant point at review:
- beehiiv supports embedded subscribe forms on external websites.

## Editorial / AI

### Reuters Journalistic Standards

Official standards:
https://reutersagency.com/about/standards-values/

Relevant principle:
- AI-generated facts, sources, and claims must not be trusted without independent verification.
- responsibility remains with the journalist/publication.

### Associated Press AI standards

Official 2026 update:
https://www.ap.org/the-definitive-source/announcements/ap-updates-newsroom-standards-for-artificial-intelligence/

Official principles:
https://www.ap.org/about/news-values-and-principles/

Relevant principles:
- AI may assist with specific tasks including early research and summarization.
- AI does not replace reporting, sourcing, editorial judgment, verification, or accountability.

## Maintenance rule

Re-check changing documentation when:

- installing/upgrading core dependencies;
- changing hosting or newsletter plans;
- relying on a plan limit or price;
- changing AI/editorial policy;
- beginning a new major product phase.

Do not assume values in this file remain current indefinitely.
