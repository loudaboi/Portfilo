# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: POST-V3 HOMEPAGE CORRECTION PLAN FOUNDER-APPROVED / IMPLEMENTATION NOT YET AUTHORIZED_

## Purpose

Portfilo is being redesigned as a contemporary business-and-technology publication with strong newsletter acquisition and clear editorial hierarchy.

The homepage must behave like a publication first and a signup funnel second.

Morning Brew and BackScoop remain composition references only. The approved lesson is their compact publication/signup relationship and hierarchy, not their branding, colors, typography, wording, or proprietary layout details.

## Governing homepage composition

```text
SHARED CONTENT SHELL
one common alignment for header, hero, Feature area, News, footer-inner
working desktop content width roughly 1280–1360 px
only ticker is full-bleed

HEADER
Portfilo
Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
left: approved headline + support copy
right: signup form
Instrument Sans
hero CTA: Send me the news

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

MAIN FEATURE AREA
left: development image placeholder + Feature headline + dek
right: stacked rail
  blue contextual signup block
  square Portfilo brand/editorial placeholder

NEWS
plain News heading + current development hierarchy

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

## Global shell invariant

The homepage now has one hard alignment rule:

- header inner content, top signup inner content, Feature area, News, and footer inner content use the same shell;
- the preferred left edge is the Feature image/placeholder edge shown in the founder-approved screenshots;
- working large-desktop content width is roughly **1280–1360 px**, responsive downward;
- individual sections must not invent independent global centering/max-width rules;
- internal grids may vary inside the shell;
- **only the Latest ticker is full-bleed**.

This is a frozen structural invariant for the next implementation pass.

## Header

Approved target:

- Portfilo wordmark at the earlier restrained scale;
- `Latest | Stories` navigation;
- `Subscribe free` CTA button at the right;
- no topic labels;
- no unrelated header redesign;
- header inner content aligns to the same shared shell as the Feature placeholder.

## Top newsletter signup

The approved behavior is a compact two-column publication signup:

`[content] [signup]`

Requirements:

- warm paper / near-white surface;
- no hero image;
- no blue full-section background;
- no `NEWSLETTER` eyebrow;
- **Instrument Sans**, not Source Serif 4, for the hero headline;
- approved headline remains `Get ahead in business and tech in 7 minutes.`;
- approved support copy remains `The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`;
- internal desktop relationship roughly 52–55% content / 45–48% signup;
- internal gap roughly 40–56 px on large desktop;
- content and signup must feel like one compact unit rather than opposite ends of a large empty canvas;
- hero CTA is **`Send me the news`**;
- free/unsubscribe note stays with the form;
- no independent hero max-width that breaks the shared shell;
- mobile stacks naturally.

The header and hero deliberately use different CTA labels:

- header: `Subscribe free`;
- hero: `Send me the news`.

## Latest ticker

Keep the corrected static ticker:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- category labels may use Portfilo blue;
- no red ticker treatment;
- no automatic movement during this static correction pass;
- ticker motion remains a separate post-static approval task.

## Feature + stacked right rail

The next pass should approve geometry without depending on the current Feature artwork.

### Left Feature column

- use a clearly synthetic/development image placeholder;
- landscape proportion around 16:9 or slightly wider;
- Feature should be prominent but must not dominate the viewport;
- target roughly 64% of the shared module;
- placeholder -> headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` title;
- do not source/generate a final image during this layout pass.

### Right rail

- target roughly 32% of the shared module;
- gap from Feature roughly 32–40 px;
- stack two distinct blocks vertically;
- top block: blue contextual newsletter signup;
- bottom block: square brand/editorial visual placeholder;
- square placeholder may center the approved ink/black Portfilo wordmark;
- do not generate or source a final right-rail image during this layout pass;
- mobile order: Feature -> contextual signup -> square brand visual -> News.

## Contextual newsletter block

Founder-approved headline:

`There's more to it than the headline.`

A support description beneath that headline is **structurally required**.

The exact one-sentence support wording is still **OPEN / NOT YET APPROVED**.

Do not copy BackScoop's support copy and do not silently invent a new Portfilo public claim during implementation.

Until wording is approved, preserve the description slot as a clearly non-public development placeholder or stop before public-copy completion. Do not omit the slot entirely.

The contextual block then contains:

- email field;
- contextual subscribe action using already approved subscription language unless separately reopened;
- no eyebrow spam.

## News

News stays below the Feature/right-rail composition.

Requirements:

- one plain `News` heading;
- lead current item + supporting items;
- development fixtures remain synthetic and excluded from production;
- do not redesign News unless the new shared shell exposes a concrete defect.

## Footer

Keep the near-black footer endcap.

Requirements:

- compact newsletter signup;
- minimal institutional/legal links;
- footer inner content aligns to the same shared shell;
- no unrelated footer redesign during this pass.

## Explicitly rejected recent choices

The following recent choices have zero forward homepage authority:

- Source Serif 4 hero headline;
- current Homepage v3 hero composition;
- independently centered/narrowed Feature shell that changes the global page edge;
- oversized Feature treatment;
- using the current Feature image as a layout dependency for the next pass;
- muted/light-blue full hero background;
- red ticker treatment;
- entire ticker rendered black;
- topic labels in the header;
- removing `Latest | Stories` from the header based on an exploratory question;
- implementation-time gutter/max-width changes that were not explicitly approved.

## Implementation discipline for this pass

Before editing runtime code, treat these as frozen:

- shared content shell/alignment;
- header target;
- Instrument Sans hero baseline;
- hero CTA `Send me the news`;
- only ticker is full-bleed;
- ticker black only on `Latest` identifier;
- Feature uses a development image placeholder;
- right rail is signup + square brand placeholder;
- contextual headline stays `There's more to it than the headline.`;
- support-description slot must exist;
- News and footer remain structurally unchanged;
- no ticker motion.

Do not introduce a new font, color surface, image crop, route, taxonomy field, public claim, or section-specific global max-width during implementation without a separate approval.

## Implementation boundary

This correction plan is founder-approved as of 2026-09-08.

Approval of the plan does **not** itself authorize runtime implementation.

Once the founder explicitly authorizes implementation, changes are limited to this contract:

- one shared homepage shell/alignment;
- header `Subscribe free` CTA;
- compact Instrument Sans `[content] [signup]` hero with `Send me the news`;
- Feature development placeholder and reduced Feature scale;
- stacked contextual-signup + square-brand right rail;
- responsive behavior required by those changes.

Do not add ticker motion, taxonomy/schema migration, new routes, article redesign, final imagery generation, or unrelated visual changes.

After runtime changes, run actual `npm run check` and `npm run build`, then stop for desktop/mobile visual QA before ticker motion.
