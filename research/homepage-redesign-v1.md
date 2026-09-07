# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: FOLLOW-UP HOMEPAGE CORRECTION PLAN FOUNDER-APPROVED / IMPLEMENTATION NOT YET AUTHORIZED_

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
blue rule above
left: approved headline + support copy
right: signup form
Instrument Sans
hero CTA: Send me the news
blue rule below

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

FEATURE AREA
left: existing homepage Feature image + Feature headline + dek
right: one continuous blue editorial/newsletter rail

NEWS
plain News heading + current development hierarchy

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

## Global shell invariant

The homepage has one hard alignment rule:

- header inner content, top signup inner content, Feature area, News, footer newsletter inner content, and site footer align to the same shared shell;
- current implementation uses `--content-max: 84rem` with a responsive shell gutter;
- individual sections must not invent independent global centering/max-width rules;
- internal grids may vary inside the shell;
- **only the Latest ticker is full-bleed**.

This invariant is frozen during the next implementation pass.

## Header

Retain:

- approved Portfilo wordmark;
- `Latest | Stories` navigation;
- `Subscribe free` CTA button;
- no topic labels;
- shared-shell alignment;
- no unrelated header redesign.

## Top newsletter signup

Retain the compact two-column behavior:

`[content] [signup]`

Founder-approved follow-up treatment:

- warm paper / near-white surface;
- **Instrument Sans** for headline/support/form UI;
- approved headline remains `Get ahead in business and tech in 7 minutes.`;
- approved support copy remains `The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`;
- hero CTA remains `Send me the news`;
- add a thin Portfilo-primary-blue rule above the acquisition unit;
- add a thin Portfilo-primary-blue rule below the acquisition unit;
- the rules frame the shared hero unit and do not create a boxed card;
- no vertical divider, colored hero background, shadow, gradient, eyebrow, or rounded shell;
- keep the section compact and publication-dense;
- mobile stacks naturally.

The header and hero deliberately use different CTA labels:

- header: `Subscribe free`;
- hero: `Send me the news`.

## Form-system consistency

Hero and contextual rail signup forms should visibly belong to one system.

Use:

- same input/button heights;
- same border thickness;
- same typography and horizontal padding rhythm;
- same square geometry;
- same vertical spacing behavior;
- each form fills 100% of its available form column;
- exact pixel widths do not need to match because the parent columns differ.

## Latest ticker

Keep the corrected static treatment:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- category labels may use Portfilo blue;
- no red treatment;
- no automatic movement during this static correction pass.

Ticker motion remains a separate post-static approval task.

## Feature column

The synthetic Feature placeholder is rejected for the next pass. Use the existing homepage Feature image during visual/layout QA.

Requirements:

- existing homepage Feature image returns;
- preserve the image responsively with natural aspect ratio;
- no fixed-height crop and no `object-fit: cover` crop;
- add a restrained 2–3 px Portfilo-primary-blue rule to the **top edge of the image only**;
- use **Instrument Sans** for the homepage Feature headline and dek;
- Feature remains prominent without dominating the viewport;
- image -> headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` heading.

The existing homepage image is a valid visual/layout asset for this pass and does not prevent a later editorial-image decision.

## Editorial image-top rule

Founder-approved brand device:

- Feature and News imagery may use a restrained 2–3 px Portfilo-primary-blue line along the top edge;
- the rule tracks the responsive image width;
- no border on the other three sides;
- do not apply it indiscriminately to non-editorial visuals.

## Right editorial/newsletter rail

The square Portfilo brand placeholder is rejected and must be removed.

Replace the two-block right stack with one continuous blue editorial/newsletter rail.

Approved content order:

1. contextual newsletter headline + description;
2. email field + subscribe action;
3. thin internal divider;
4. one current-news teaser;
5. short teaser description;
6. `See the latest news →` or equivalent clear latest-news link.

Behavior:

- desktop/tablet: rail may stretch to approximately the bottom edge of the full Feature module so both columns read as one composition;
- rail content stays top-aligned rather than vertically centered;
- no nested card inside the blue rail;
- only one current-news teaser so the rail does not compete with the News section;
- mobile: rail becomes normal content-height flow with no desktop equal-height requirement;
- mobile order: Feature -> blue rail -> News.

Founder-approved contextual signup headline:

`There's more to it than the headline.`

A support description remains structurally required.

Exact final contextual support wording is still **OPEN / NOT YET APPROVED**. Do not copy BackScoop wording and do not invent a new unsupported Portfilo public claim during implementation.

Current contextual signup action may remain within already approved subscription language unless separately reopened.

## News

News remains below the Feature/rail composition.

- one plain `News` heading;
- existing lead + supporting development hierarchy retained;
- development fixtures remain synthetic and excluded from production;
- editorial News imagery may use the approved blue top-image rule;
- do not otherwise redesign News unless the approved shell exposes a concrete defect.

## Footer

The near-black footer endcap remains.

- compact newsletter signup retained;
- minimal institutional/legal links retained;
- footer inner content follows the shared homepage shell;
- no unrelated footer redesign.

## Responsive contract

Responsiveness is required in every implementation pass.

Minimum behavior:

- shared shell scales fluidly;
- hero remains `[content] [signup]` while space permits, then stacks;
- blue hero top/bottom rules remain aligned to the shared shell;
- ticker remains the only full-bleed element;
- Feature + blue rail remain side-by-side only while both are readable;
- tablet/mobile stack Feature then rail;
- Feature/News images use responsive width and natural height;
- image-top rule follows image width;
- blue rail is content-height on mobile;
- forms fill available width without overflow;
- header CTA remains usable at narrow widths;
- no horizontal page scrolling.

Required visual QA after implementation:

- wide desktop/current normal browser viewport;
- 1440 px desktop;
- 1366 px laptop;
- tablet;
- approximately 390 px mobile.

## Explicitly rejected recent choices

These have zero forward homepage authority:

- Source Serif 4 hero headline;
- Source Serif 4 homepage Feature headline/dek;
- prior Homepage v3 hero composition;
- independently centered/narrowed Feature shell that changes the global page edge;
- oversized Feature treatment;
- synthetic Feature placeholder as the next-pass target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero background;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- unapproved implementation-time gutter/max-width changes.

## Implementation boundary

This follow-up correction plan is founder-approved as of 2026-09-08.

Approval of the plan does **not** itself authorize runtime implementation.

Once the founder explicitly authorizes implementation, changes are limited to:

- blue hero top/bottom rules;
- return of existing homepage Feature image with blue top-image rule;
- Instrument Sans homepage Feature headline/dek;
- removal of square right-rail placeholder;
- one continuous blue editorial/newsletter rail with one current-news teaser + latest-news link;
- shared form-system consistency;
- responsive behavior required by those changes.

Do not add ticker motion, taxonomy/schema migration, new routes, article redesign, new final imagery, final contextual-copy invention, or unrelated visual changes.

After runtime changes, run actual `npm run check` and `npm run build`, then stop for desktop/tablet/mobile visual QA before ticker motion.
