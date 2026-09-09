# Portfilo Reference Sources

_Last reviewed: 2026-09-10_

This file records primary external references used to establish current technical, product, and editorial operating choices.

It is **not** Portfilo's newsroom monitoring source map and is not a substitute for re-checking changing product documentation later.

The operational source universe for News discovery is governed by `docs/EDITORIAL_INTELLIGENCE.md` and should be maintained separately from this reference file.

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

Current relevant points at earlier review:
- Launch is the free tier.
- subscriber/send limits and included features can change.

Re-check the current plan before relying on a specific financial or feature limit.

### beehiiv embedded subscribe forms

Official help:
https://www.beehiiv.com/support/article/12977090590487

Current relevant point at review:
- beehiiv supports embedded subscribe forms on external websites.

## Editorial / AI

### Reuters Journalistic Standards

Official standards:
https://reutersagency.com/about/standards-values/

Relevant principles:
- accuracy takes precedence over speed;
- sourcing should be honest and transparent;
- named sources are preferred where possible;
- information should be cross-checked where appropriate;
- AI does not remove human editorial responsibility.

### Associated Press news values and AI standards

Official principles:
https://www.ap.org/about/news-values-and-principles/

Official AI standards/update:
https://www.ap.org/the-definitive-source/announcements/ap-updates-newsroom-standards-for-artificial-intelligence/

Relevant principles:
- internet information should be vetted and attributed to its original source where possible;
- AI may assist with specific tasks including research and summarization;
- AI does not replace reporting, sourcing, editorial judgment, verification, or accountability.

## Editorial-intelligence tools

These are operational tool references, not editorial evidence sources.

### Inoreader

Official pricing:
https://www.inoreader.com/pricing

Current relevant point at 2026-09-10 review:
- the free plan is sufficient to test a small Portfilo RSS/news-monitoring workflow before paying for advanced monitoring, rules, integrations, or larger limits.

Do not encode a permanent feed-count or paid-price assumption into editorial policy. Re-check the current plan when the free tier becomes a real constraint.

### Google Alerts

Official help:
https://support.google.com/websearch/answer/4815696

Current relevant point at review:
- Google Alerts can provide email alerts for new Search results and allows configuration such as frequency, source type, language, region, and result volume.

Portfilo should use alerts only to fill demonstrated monitoring gaps rather than creating broad alert volume by default.

## Maintenance rule

Re-check changing documentation when:

- installing/upgrading core dependencies;
- changing hosting or newsletter plans;
- relying on a plan limit or price;
- changing AI/editorial policy;
- changing the editorial-intelligence tool stack;
- a free tool limit becomes an operational constraint;
- beginning a new major product phase.

Do not assume values in this file remain current indefinitely.