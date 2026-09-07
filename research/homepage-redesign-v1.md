# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: POST-V3 HOMEPAGE CORRECTION FOUNDER-APPROVED / STATIC IMPLEMENTATION COMPLETE / VALIDATION + VISUAL QA PENDING_

## Purpose

Portfilo is being redesigned as a contemporary business-and-technology publication with strong newsletter acquisition and clear editorial hierarchy.

The homepage must behave like a publication first and a signup funnel second.

Morning Brew and BackScoop remain composition references only. The approved lesson is their compact publication/signup relationship and hierarchy, not their branding, colors, typography, wording, or proprietary layout details.

## Governing homepage composition

```text
SHARED CONTENT SHELL
one common alignment for header, hero, Feature area, News, footer-inner
84rem / 1344px maximum working desktop shell
only ticker is full-bleed

HEADER
Portfilo
Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
left: approved headline + support copy
right: stacked signup form
Instrument Sans
hero CTA: Send me the news

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

MAIN FEATURE AREA
left: development image placeholder + Feature headline + dek
right: stacked rail
  blue contextual signup block
  square Portfilo brand visual placeholder

NEWS
plain News heading + current development hierarchy

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

## Global shell invariant

The homepage has one hard alignment rule:

- header inner content, top signup inner content, Feature area, News, footer newsletter inner content, and site footer align to the same shared shell;
- current implementation uses `--content-max: 84rem` with a responsive `--shell-gutter`;
- individual sections must not invent independent global centering/max-width rules;
- internal grids may vary inside the shell;
- **only the Latest ticker is full-bleed**.

This invariant is frozen during visual QA.

## Header

Implemented target:

- approved Portfilo wordmark;
- `Latest | Stories` navigation;
- `Subscribe free` CTA button;
- no topic labels;
- shared-shell alignment;
- no unrelated header redesign.

## Top newsletter signup

Implemented compact two-column behavior:

`[content] [signup]`

Requirements now in runtime:

- warm paper / near-white surface;
- no hero image;
- no blue full-section background;
- no `NEWSLETTER` eyebrow;
- **Instrument Sans**, not Source Serif 4, for the hero headline;
- approved headline: `Get ahead in business and tech in 7 minutes.`;
- approved support copy unchanged;
- right-column stacked email field + CTA;
- hero CTA: **`Send me the news`**;
- free/unsubscribe note stays with the form;
- no independent hero shell;
- mobile stacks naturally.

The header and hero deliberately use different CTA labels:

- header: `Subscribe free`;
- hero: `Send me the news`.

## Latest ticker

Preserved static treatment:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- category labels may use Portfilo blue;
- no red treatment;
- no automatic movement during this static correction pass.

Ticker motion remains a separate post-static approval task.

## Feature + stacked right rail

### Left Feature column

Implemented:

- clearly synthetic/development 16:9 image placeholder;
- actual Feature artwork is not used during this geometry pass;
- placeholder -> Feature headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` title;
- scale is governed by the shared shell and the left/right grid rather than an independent Feature max-width.

### Right rail

Implemented:

- stacked two-block rail;
- top block: blue contextual newsletter signup;
- bottom block: square brand visual placeholder;
- square placeholder centers the approved ink/black Portfilo wordmark;
- no final right-rail artwork generated or sourced;
- mobile/tablet order preserves Feature -> contextual signup -> brand visual -> News.

## Contextual newsletter block

Founder-approved headline:

`There's more to it than the headline.`

A support description beneath that headline is structurally required and is now present.

The exact contextual one-sentence wording remains **OPEN / NOT YET APPROVED**. To avoid inventing a new public claim, the static implementation temporarily reuses the already-approved primary newsletter support copy. This is not final contextual card wording.

Current contextual CTA:

`Subscribe`

## News

News stays below the Feature/right-rail composition.

- one plain `News` heading;
- existing lead + supporting development hierarchy retained;
- development fixtures remain synthetic and excluded from production;
- only shared-shell alignment changed.

## Footer

The near-black footer endcap remains.

- compact newsletter signup retained;
- minimal institutional/legal links retained;
- footer inner content now follows the shared homepage shell;
- no unrelated footer redesign.

## Explicitly rejected recent choices

These have zero forward homepage authority:

- Source Serif 4 hero headline;
- prior Homepage v3 hero composition;
- hero CTA `Subscribe free` as the in-page hero action;
- independently centered/narrowed Feature shell that changes the global page edge;
- oversized Feature treatment;
- current Feature artwork as a required layout dependency during this QA pass;
- muted/light-blue full hero background;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time gutter/max-width changes not covered by the approved contract.

## Implementation state

The founder explicitly authorized this correction implementation on 2026-09-08.

Static runtime implementation is complete on `build/portfilo-v0` and limited to:

- shared homepage shell/alignment;
- header `Subscribe free` CTA;
- compact Instrument Sans `[content] [signup]` hero with `Send me the news`;
- Feature development placeholder and reduced Feature scale;
- stacked contextual-signup + square-brand right rail;
- responsive behavior required by those changes;
- footer/homepage alignment needed to preserve the shared-shell invariant.

Not implemented in this pass:

- ticker motion;
- taxonomy/schema migration;
- new routes;
- article redesign;
- final Feature/right-rail imagery;
- final contextual support sentence;
- deployment or release.

Fresh `npm run check` and `npm run build` are still required before validation can be claimed. After validation, stop for desktop/mobile visual QA before ticker motion.
