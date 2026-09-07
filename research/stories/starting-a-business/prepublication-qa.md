# Starting a Business Pre-Publication QA

_Last updated: 2026-09-07_

_Status: PRE-PUBLICATION QA PASS / FINAL PUBLICATION APPROVAL PENDING_

## Scope

This QA reviews the assembled draft story at:

`src/content/stories/what-actually-makes-starting-a-business-hard.md`

against the current Portfilo content schema, routing behavior, metadata implementation, approved editorial package, responsive story-page implementation, and publication checklist.

## Canonical branch state reviewed

Branch:

`build/portfilo-v0`

Assembly commit reviewed:

`9ca4e36c6006e033a8c7c0795cda4ddba6a01335`

Repository-side QA record commit before local runtime validation:

`4af8ec42ad89e2c62ab439c13746751ac856fa06`

## Content-entry integrity

Result: **PASS BY REPOSITORY INSPECTION**

The assembled story contains the approved:

- headline;
- dek;
- description;
- `explained` content type;
- `building` topic;
- `Portfilo` byline;
- `status: draft`;
- `featured: false`;
- public body beginning with `Low sales are an easy example.` after the approved packaging trim.

No unapproved body rewrite was introduced during assembly.

## Schema compatibility

Result: **PASS BY REPOSITORY INSPECTION AND LOCAL ASTRO CHECK**

`src/content.config.ts` permits:

- `contentType: explained`;
- `topic: building`;
- any non-empty author string;
- `status: draft`;
- `featured: false`;
- omission of `publishedAt` while status remains `draft`.

The schema requires `publishedAt` only after the story is changed to `published`.

Local `astro check` later confirmed the assembled content passes the current schema and Astro diagnostics with zero errors, warnings, or hints.

## Draft isolation

Result: **PASS BY REPOSITORY INSPECTION AND PRODUCTION BUILD OUTPUT**

Production homepage and Stories index queries include only stories whose status is `published`.

The individual story route includes draft stories only when `import.meta.env.DEV` is true.

Therefore the current draft is available for local development review but is excluded from production story routes and indexes while it remains `status: draft`.

The local production build generated the three existing published story routes and did **not** generate `/stories/what-actually-makes-starting-a-business-hard/`, which is the expected behavior for a draft.

## Metadata wiring

Result: **PASS BY REPOSITORY INSPECTION**

The story route passes the approved description into `SiteHead.astro`.

`SiteHead.astro` reuses that description for:

- HTML meta description;
- Open Graph description;
- Twitter description;
- Article structured data.

Because the author is `Portfilo`, Article structured data identifies the author as an Organization.

No publication date is emitted while the draft has no `publishedAt`.

## Editorial package audit

Result: **PASS**

Headline job:

> Ask the broad question the story answers.

Dek job:

> Give the broad answer that a new business must make important decisions while information remains limited.

Description job:

> Add concrete scope by naming weak sales as the main explanatory example.

Body job:

> Develop the result-versus-cause problem through the weak-sales example, different responses, accumulating clues, learning through action, resource cost, and the final signal-versus-diagnosis distinction.

The approved removal of the first two Draft 8 sentences prevents the public body from repeating the final headline and dek.

## Structure / human-language / slop review

Result: **PASS**

The assembled body remains a continuous causal explanation rather than a listicle or framework.

No subheads were added for visual completeness.

No new slogan, motivational ending, source-heavy block, or generic entrepreneurship advice was introduced during assembly.

The final paragraph remains explanatory rather than becoming a broad startup framework.

## Links

Result: **NOT APPLICABLE**

The assembled public body contains no outbound or internal links requiring link validation.

## Methodology and commercial disclosure

Methodology: **NOT REQUIRED FOR THIS VERSION**

Commercial disclosure: **NOT APPLICABLE**

The public story makes no commercial or sponsored claim and does not rely on an original Portfilo Test methodology.

## Responsive implementation review

Result: **PASS BY CSS INSPECTION AND FOUNDER-EDITOR VISUAL QA**

The existing story template contains responsive breakpoints at 64rem, 50rem, and 28rem.

At mobile widths the template:

- converts the story header from the desktop grid to block layout;
- removes the sticky story rail;
- allows the headline to use the full available width;
- makes the story body full width;
- changes metadata to two columns and then one column at the narrowest breakpoint;
- reduces heading sizes and adjusts story spacing.

No story-specific markup in this draft introduces an obvious responsive exception.

Founder-editor approved the desktop and mobile visual QA gate on 2026-09-07. No visual defect was reported at that gate.

## Automated/runtime validation

Local environment:

`D:\Projects\Portfilo`

### `npm run check`

Result: **PASS**

Observed output on 2026-09-07:

- Astro content synced successfully;
- diagnostics completed across 18 files;
- `0 errors`;
- `0 warnings`;
- `0 hints`.

### `npm run build`

Result: **PASS**

Observed output on 2026-09-07:

- the build's `astro check` stage completed with `0 errors`, `0 warnings`, and `0 hints`;
- Astro static build completed successfully;
- 11 production pages were generated;
- build completed with no reported error.

The absence of the new story route from the production static-route list is expected because the story remains `status: draft`.

## Visual QA

Desktop browser render: **PASS BY FOUNDER-EDITOR APPROVAL — 2026-09-07**

Mobile browser render: **PASS BY FOUNDER-EDITOR APPROVAL — 2026-09-07**

The visual QA gate covered:

- headline wrapping;
- dek measure and spacing;
- metadata row;
- first body paragraph transition from the dek;
- body line length and paragraph rhythm;
- absence of horizontal overflow;
- narrow-screen headline behavior;
- final paragraph spacing.

No visual revision was requested.

## Publication checklist status

Repository, editorial, schema, runtime, and visual QA are complete.

The story must **not** be changed to `published` until explicit founder-editor publication approval is obtained.

## Current verdict

> **PRE-PUBLICATION QA PASS. READY FOR FINAL PUBLICATION APPROVAL.**

No editorial, runtime, or visual revision is currently required.
