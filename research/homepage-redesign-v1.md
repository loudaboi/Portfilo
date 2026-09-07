# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: FOLLOW-UP HOMEPAGE CORRECTION FOUNDER-APPROVED / STATIC IMPLEMENTATION COMPLETE / VALIDATION + VISUAL QA PENDING_

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
- runtime uses `--content-max: 84rem` with a responsive shell gutter;
- individual sections must not invent independent global centering/max-width rules;
- internal grids may vary inside the shell;
- **only the Latest ticker is full-bleed**.

This invariant remains frozen during visual QA.

## Header

Current runtime retains:

- approved Portfilo wordmark;
- `Latest | Stories` navigation;
- `Subscribe free` CTA button;
- no topic labels;
- shared-shell alignment;
- no unrelated header redesign.

## Top newsletter signup

Current runtime retains the compact two-column behavior:

`[content] [signup]`

Implemented follow-up treatment:

- warm paper / near-white surface;
- **Instrument Sans** for headline/support/form UI;
- approved headline remains `Get ahead in business and tech in 7 minutes.`;
- approved support copy remains `The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`;
- hero CTA remains `Send me the news`;
- 2 px Portfilo-primary-blue rule above the shared acquisition unit;
- 2 px Portfilo-primary-blue rule below the shared acquisition unit;
- rules frame the shared hero unit and do not create a boxed card;
- no vertical divider, colored hero background, shadow, gradient, eyebrow, or rounded shell;
- mobile stacks naturally.

The header and hero deliberately use different CTA labels:

- header: `Subscribe free`;
- hero: `Send me the news`.

## Form-system consistency

Hero and contextual rail signup forms use the same `NewsletterSignup` component and therefore share:

- input/button height;
- border rhythm;
- typography;
- square geometry;
- submission states;
- validation behavior;
- vertical spacing conventions.

The hero form is capped at the shared signup control width while the contextual rail fills its narrower available column. Exact pixel widths intentionally do not need to match.

## Latest ticker

Current static treatment remains unchanged:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- category labels may use Portfilo blue;
- no red treatment;
- no automatic movement during this static pass.

Ticker motion remains a separate post-static approval task.

## Feature column

Implemented follow-up correction:

- existing homepage Feature image has returned;
- image preserves its natural responsive aspect ratio;
- no fixed-height crop and no `object-fit: cover` crop;
- 3 px Portfilo-primary-blue rule sits at the **top edge of the Feature image only**;
- AI-generated editorial-image disclosure remains present;
- homepage Feature headline uses **Instrument Sans**;
- homepage Feature dek uses **Instrument Sans**;
- Feature remains image -> headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` heading.

The existing homepage image is a valid visual/layout asset for this pass and does not prevent a later editorial-image decision.

## Editorial image-top rule

Current approved brand device:

- Feature and News imagery may use a restrained 2–3 px Portfilo-primary-blue line along the top edge;
- the rule tracks the responsive image width;
- no border on the other three sides;
- do not apply it indiscriminately to non-editorial visuals.

Current runtime applies this to the Feature image and to the existing News development image placeholder treatment.

## Right editorial/newsletter rail

The rejected square Portfilo brand placeholder has been removed.

Current runtime uses one continuous blue editorial/newsletter rail.

Content order:

1. contextual newsletter headline + temporary approved-description reuse;
2. email field + `Subscribe` action;
3. thin internal divider;
4. one current-news teaser when an eligible item exists;
5. short teaser description;
6. `See the latest news →`.

Behavior:

- desktop/tablet: the rail stretches with the Feature grid so the two columns read as one composition;
- signup content remains top-aligned;
- Latest teaser is positioned toward the lower part of the rail using the remaining vertical space;
- no nested card exists inside the blue rail;
- only one current-news teaser is shown;
- mobile/tablet stacking breakpoint removes desktop equal-height behavior;
- mobile rail becomes normal content-height flow;
- mobile order: Feature -> blue rail -> News.

Founder-approved contextual signup headline:

`There's more to it than the headline.`

A support description remains structurally required.

Exact final contextual support wording is still **OPEN / NOT YET APPROVED**. Current runtime temporarily reuses the already-approved primary newsletter support line rather than inventing a new public claim. That temporary reuse is not final contextual copy authority.

### Rail news-source behavior

- in development, the rail teaser uses the clearly synthetic first News fixture so the complete layout can be visually reviewed;
- outside development, it uses the newest additional published story when available;
- if no additional eligible published item exists, the teaser is omitted rather than fabricating production news.

## News

News remains below the Feature/rail composition.

- one plain `News` heading;
- existing lead + supporting development hierarchy retained;
- development fixtures remain synthetic and excluded from production;
- current News development imagery retains the approved blue top-image rule;
- no unrelated News redesign occurred.

## Footer

The near-black footer endcap remains.

- compact newsletter signup retained;
- minimal institutional/legal links retained;
- footer inner content follows the shared homepage shell;
- no unrelated footer redesign occurred.

## Responsive contract

Responsiveness is required in every implementation pass.

Current implementation is designed so:

- shared shell scales fluidly;
- hero remains `[content] [signup]` while space permits, then stacks;
- blue hero top/bottom rules remain aligned to the shared shell;
- ticker remains the only full-bleed element;
- Feature + blue rail remain side-by-side only while both are readable;
- tablet/mobile stack Feature then rail;
- Feature image uses responsive width and natural height;
- image-top rule follows image width;
- blue rail is content-height on mobile;
- forms fill available width without overflow;
- header CTA remains governed by the existing responsive header behavior;
- no intentional horizontal page scrolling is introduced.

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
- synthetic Feature placeholder as the current visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero background;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- unapproved implementation-time gutter/max-width changes.

## Implementation state

The founder explicitly authorized this follow-up implementation on 2026-09-08.

Static runtime implementation is complete on `build/portfilo-v0` and limited to:

- blue hero top/bottom rules;
- return of existing homepage Feature image with blue top-image rule;
- Instrument Sans homepage Feature headline/dek;
- removal of square right-rail placeholder;
- one continuous blue editorial/newsletter rail with one current-news teaser + latest-news link;
- shared form-system consistency;
- responsive behavior required by those changes.

Not implemented in this pass:

- ticker motion;
- taxonomy/schema migration;
- new routes;
- article redesign;
- new final imagery;
- final contextual support sentence;
- deployment or release.

Fresh `npm run check` and `npm run build` are still required before validation can be claimed. After validation, stop for desktop/tablet/mobile visual QA before ticker motion.
