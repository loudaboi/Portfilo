# Editorial Packaging Architecture v1 Decision

_Last updated: 2026-09-07_

_Status: FOUNDER-EDITOR APPROVED / IMPLEMENTATION AUTHORIZED_

## Question

Should Portfilo continue requiring three story-package strings — headline, dek, and description — when the current site displays the dek on the story page but displays description on homepage/archive cards and also reuses description for metadata?

## Problem found

The previous implementation created a structural conflict:

- story page: `title + dek` are visible;
- homepage feature: `title + description` are visible;
- homepage latest list: `title + description` are visible;
- Stories archive: `title + description` are visible;
- story metadata: `description` is reused for HTML, Open Graph, Twitter, and Article structured data.

That made `description` responsible for both a second reader-facing summary system and technical metadata.

The editorial standard then tried to justify a distinct third sentence after headline and dek. This produced pressure to invent a `missing layer` even when headline + dek already formed a complete package.

The starting-a-business story exposed the failure clearly. Its approved description was:

> Using weak sales as the main example, this explainer shows how the same early business result can point to very different problems.

The sentence was accurate, but the founder-editor later rejected the underlying approach as unnecessary article-explanation scaffolding.

## Professional-pattern review

A small review of current human-edited publication packaging was used to test the architecture rather than to imitate wording.

Examples reviewed included current work from:

- WIRED;
- Rest of World;
- The Atlantic.

Observed pattern relevant to this decision:

- the primary visible article package is normally headline/title plus a standfirst/dek/supporting line;
- the supporting line commonly adds the answer, situation, finding, contradiction, scope, or reporting context;
- the publications do not need a mandatory third visible sentence whose job is to explain what the article will do;
- metadata exists as a separate technical surface and should not force another visible editorial layer.

Examples were selected to study packaging behavior only. Their voice, cadence, phrasing, and institutional style are not Portfilo precedent.

## Search-metadata review

Google Search Central's snippet guidance was also reviewed.

Relevant conclusion for Portfilo:

- a meta description is useful page metadata but does not need to be a separate visible story-card sentence;
- Google may generate snippets from page content and may use the meta description when it better describes the page;
- there is therefore no search requirement that justifies forcing every story to carry a third reader-facing summary.

Reference:

https://developers.google.com/search/docs/appearance/snippet

Open Graph description is likewise metadata describing the object; it does not require a separate reader-facing package layer.

Reference:

https://ogp.me/

## Approved architecture

### Reader-facing editorial package

A Portfilo story has two required editorial packaging fields:

1. `title` / headline;
2. `dek`.

The same dek should be used consistently with the headline on:

- story page;
- homepage feature;
- homepage latest-story list;
- Stories archive.

### Metadata

Story metadata uses:

```text
metaDescription ?? dek
```

`metaDescription` is optional and metadata-only.

It should be written only when the approved dek has a concrete metadata problem when separated from the headline.

### Retired story field

The required story `description` field is retired.

This does not remove generic `description` props or fields used for other purposes, such as:

- the shared `SiteHead` component API;
- series descriptions;
- site/page metadata.

## Why this is preferred

- it matches the actual reader-facing hierarchy already used on Portfilo story pages;
- it removes the need to manufacture a third editorial sentence;
- it makes homepage/archive packaging consistent with the story page;
- it separates editorial packaging from metadata infrastructure;
- it keeps metadata override capability without adding routine work;
- it is simpler and more resistant to generic AI summary prose.

## Starting-a-business migration

For:

`src/content/stories/what-actually-makes-starting-a-business-hard.md`

retain the approved:

Headline:

> What actually makes starting a business hard?

Dek:

> New businesses have to make important decisions with very little information about what is working and what is not.

Remove the old `description` field.

Do not create a replacement `metaDescription` unless a later metadata-specific review finds an actual need. The dek becomes the default metadata description.

No body wording is reopened by this decision.

## Earlier withdrawn stories

The three earlier withdrawn story files should also migrate away from the retired `description` field so the content collection uses one consistent schema.

Their draft status does not change by virtue of this architecture decision.

## Implementation scope approved

The founder-editor approved the following narrow implementation:

- revise `docs/EDITORIAL_PACKAGING_STANDARD.md`;
- update story-writing research/brief templates;
- update the Astro story schema;
- render `dek` on homepage and Stories archive story packages;
- use `metaDescription ?? dek` for story metadata;
- remove retired `description` fields from existing story entries;
- synchronize directly conflicting repository instructions where required;
- run local `npm run check` and `npm run build` before considering implementation validated.

No article body, approved headline, or approved dek is changed by this decision.

## Approval boundary

Architecture and implementation are approved.

This decision does not authorize:

- rewriting withdrawn stories;
- republishing withdrawn stories;
- changing the current story body/headline/dek;
- merging to `main`;
- a final public release.
