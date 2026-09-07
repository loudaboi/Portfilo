# Starting a Business Pre-Publication QA

_Last updated: 2026-09-07_

_Status: PUBLICATION APPROVED / STORY MARKED PUBLISHED / FINAL POST-PUBLICATION BUILD VERIFICATION PENDING_

## Scope

This QA reviews the story at:

`src/content/stories/what-actually-makes-starting-a-business-hard.md`

against the current Portfilo content schema, routing behavior, metadata implementation, approved editorial package, responsive story-page implementation, and publication checklist.

## Canonical branch state reviewed

Branch:

`build/portfilo-v0`

Assembly commit reviewed:

`9ca4e36c6006e033a8c7c0795cda4ddba6a01335`

Repository-side QA record commit before local runtime validation:

`4af8ec42ad89e2c62ab439c13746751ac856fa06`

Publication commit:

`6262dc2ec894bd056bae2a4daf1cc07355ecc355`

## Content-entry integrity

Result: **PASS**

The story contains the approved:

- headline;
- dek;
- description;
- `explained` content type;
- `building` topic;
- `Portfilo` byline;
- `publishedAt: 2026-09-07`;
- `status: published`;
- `featured: false`;
- public body beginning with `Low sales are an easy example.` after the approved packaging trim.

No unapproved body rewrite was introduced during assembly or publication.

## Schema compatibility

Result before publication status change: **PASS BY REPOSITORY INSPECTION AND LOCAL ASTRO CHECK**

The schema requires `publishedAt` when `status` is `published`. The publication change supplied both fields together.

A final local build after the publication status change remains required to confirm the production route is generated under the actual runtime.

## Publication routing

Before publication, the production build correctly excluded the story while it was `draft`.

After founder-editor publication approval on 2026-09-07, the story was changed to:

- `status: published`;
- `publishedAt: 2026-09-07`.

The next production build should therefore include:

`/stories/what-actually-makes-starting-a-business-hard/`

This expected route must be confirmed by final local build output.

## Metadata wiring

Result: **PASS BY REPOSITORY INSPECTION**

The story route passes the approved description into `SiteHead.astro`.

`SiteHead.astro` reuses that description for:

- HTML meta description;
- Open Graph description;
- Twitter description;
- Article structured data.

Because the author is `Portfilo`, Article structured data identifies the author as an Organization.

With `publishedAt` now present, the article metadata is expected to emit the publication date in the rendered production page.

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

The public body contains no outbound or internal links requiring link validation.

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

No story-specific markup introduces an obvious responsive exception.

Founder-editor approved the desktop and mobile visual QA gate on 2026-09-07. No visual defect was reported at that gate.

## Automated/runtime validation before publication status change

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

The story was still `draft` during that build, so its route was correctly absent.

## Visual QA

Desktop browser render: **PASS BY FOUNDER-EDITOR APPROVAL — 2026-09-07**

Mobile browser render: **PASS BY FOUNDER-EDITOR APPROVAL — 2026-09-07**

No visual revision was requested.

## Publication authorization

Founder-editor publication approval: **GRANTED — 2026-09-07**

Publication state change: **COMPLETE**

The story is now marked `published` on `build/portfilo-v0` with publication date `2026-09-07`.

This approval does not merge the branch to `main`. `main` remains the release boundary.

## Remaining verification

Final post-publication local build: **PENDING**

Confirm that:

1. `npm run check` still passes;
2. `npm run build` still passes;
3. the build output now includes `/stories/what-actually-makes-starting-a-business-hard/`;
4. the story appears in the generated Stories index/homepage ordering as expected for `featured: false`;
5. no unrelated production route regresses.

## Current verdict

> **PUBLICATION APPROVED AND STORY MARKED PUBLISHED ON THE WORKING BRANCH. FINAL POST-PUBLICATION BUILD VERIFICATION PENDING. MAIN REMAINS UNCHANGED.**
