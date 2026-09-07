# Starting a Business Pre-Publication QA

_Last updated: 2026-09-07_

_Status: REPOSITORY-SIDE QA PASS / LOCAL RUNTIME AND VISUAL QA PENDING_

## Scope

This QA reviews the assembled draft story at:

`src/content/stories/what-actually-makes-starting-a-business-hard.md`

against the current Portfilo content schema, routing behavior, metadata implementation, approved editorial package, responsive story-page implementation, and publication checklist.

This record does **not** claim that `npm run check`, `npm run build`, or browser rendering has passed unless those commands or renders are actually executed.

## Canonical branch state reviewed

Branch:

`build/portfilo-v0`

Assembly commit reviewed:

`9ca4e36c6006e033a8c7c0795cda4ddba6a01335`

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

Result: **PASS BY REPOSITORY INSPECTION**

`src/content.config.ts` permits:

- `contentType: explained`;
- `topic: building`;
- any non-empty author string;
- `status: draft`;
- `featured: false`;
- omission of `publishedAt` while status remains `draft`.

The schema requires `publishedAt` only after the story is changed to `published`.

## Draft isolation

Result: **PASS BY REPOSITORY INSPECTION**

Production homepage and Stories index queries include only stories whose status is `published`.

The individual story route includes draft stories only when `import.meta.env.DEV` is true.

Therefore the current draft is available for local development review but is excluded from production story routes and indexes while it remains `status: draft`.

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

Result: **PASS BY CSS INSPECTION / ACTUAL VISUAL QA PENDING**

The existing story template contains responsive breakpoints at 64rem, 50rem, and 28rem.

At mobile widths the template:

- converts the story header from the desktop grid to block layout;
- removes the sticky story rail;
- allows the headline to use the full available width;
- makes the story body full width;
- changes metadata to two columns and then one column at the narrowest breakpoint;
- reduces heading sizes and adjusts story spacing.

No story-specific markup in this draft introduces an obvious responsive exception.

This inspection is not a substitute for rendering the page in a browser on desktop and mobile.

## Automated/runtime validation

`npm run check`: **PENDING LOCAL EXECUTION**

`npm run build`: **PENDING LOCAL EXECUTION**

Reason:

The connected repository provides source inspection but does not provide the user's local Windows runtime. The repository currently has no `.github/workflows` directory and the assembly commit has no associated GitHub Actions workflow runs, so there is no CI execution result that can substitute for local commands.

The current `package.json` defines:

- `npm run check` -> `astro check`;
- `npm run build` -> `astro check && astro build`.

## Visual QA

Desktop browser render: **PENDING LOCAL EXECUTION**

Mobile browser render: **PENDING LOCAL EXECUTION**

Items to inspect locally:

- headline wrapping;
- dek measure and spacing;
- metadata row;
- first body paragraph transition from the dek;
- body line length and paragraph rhythm;
- absence of horizontal overflow;
- narrow-screen headline behavior;
- final paragraph spacing;
- page metadata in the generated HTML if needed.

## Publication checklist status

Repository/editorial checks completed sufficiently to continue to runtime QA.

The story must **not** be changed to `published` until all of the following are complete:

1. `npm run check` passes;
2. `npm run build` passes;
3. desktop render is inspected;
4. mobile render is inspected;
5. any runtime/visual defects are resolved;
6. explicit founder-editor publication approval is obtained.

## Current verdict

> **GO FOR LOCAL RUNTIME + VISUAL QA. NOT YET AUTHORIZED TO PUBLISH.**

No editorial rewrite is currently required based on repository-side QA.
