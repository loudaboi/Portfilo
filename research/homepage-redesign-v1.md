# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: PRODUCTION-SAFETY HOMEPAGE CORRECTION FOUNDER-APPROVED / IMPLEMENTED / VALIDATION + VISUAL QA PENDING_

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

PAPER SPACE

FULL-WIDTH LATEST TICKER
black Latest label only
light headline rail

PAPER SPACE

FEATURE AREA
left: approved 16:9 homepage Feature image + Feature headline + dek
right: one continuous blue editorial/newsletter rail

NEWS
plain News heading + development hierarchy locally
production-safe empty state when no real News inventory exists yet

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

Use:

- warm paper / near-white surface;
- **Instrument Sans** for headline/support/form UI;
- approved headline `Get ahead in business and tech in 7 minutes.`;
- approved support copy `The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`;
- hero CTA `Send me the news`;
- 2 px Portfilo-primary-blue rule above and below the shared acquisition unit;
- no vertical divider, colored hero background, shadow, gradient, eyebrow, or rounded shell;
- responsive stacking on narrow screens.

Header CTA remains `Subscribe free`; hero CTA remains `Send me the news`.

## Form-system consistency

Hero and contextual rail signup forms use the same `NewsletterSignup` component and therefore share input/button height, border rhythm, typography, square geometry, submission states, validation behavior, and vertical spacing conventions.

The hero form is capped at the shared signup control width while the contextual rail fills its narrower available column. Exact pixel widths intentionally do not need to match.

## Latest ticker

Current static treatment:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- category labels may use Portfilo blue;
- no red treatment;
- no automatic movement during this static pass;
- deliberate paper breathing room exists above and below the ticker;
- target spacing is approximately 24 px on desktop and 16 px on narrow mobile.

Ticker motion remains a separate post-static approval task.

## Feature column

Current founder-approved correction:

- use `public/images/homepage-feature-16x9.png`;
- homepage Feature uses a **16:9 landscape editorial cut** rather than an arbitrary source aspect ratio;
- large-desktop Feature media is capped at approximately 52rem / 832 px wide and scales fluidly downward;
- no fixed-height crop is used;
- the approved asset itself supplies the intended landscape composition;
- 3 px Portfilo-primary-blue rule sits at the top edge of the Feature image only;
- AI-generated editorial-image disclosure remains present;
- homepage Feature headline and dek use **Instrument Sans**;
- Feature remains image -> headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` heading.

This aligns the homepage with the canonical 16:9 landscape story-image format already defined in `docs/IMAGE_SYSTEM.md`.

## Editorial image-top rule

Current approved brand device:

- Feature and News imagery may use a restrained 2–3 px Portfilo-primary-blue line along the top edge;
- the rule tracks the responsive image width;
- no border on the other three sides;
- do not apply it indiscriminately to non-editorial visuals.

## Right editorial/newsletter rail

The rejected square Portfilo brand placeholder remains removed.

Current runtime uses one continuous blue editorial/newsletter rail.

Content order:

1. contextual newsletter headline + temporary approved-description reuse;
2. email field + `Subscribe` action;
3. thin internal divider;
4. Latest block;
5. real teaser title + description when an eligible item exists, otherwise a restrained factual empty state;
6. `See the latest news →`.

Behavior:

- signup content remains top-aligned;
- Latest content follows the signup in normal top-to-bottom document flow;
- **no `margin-top:auto` or other bottom-push behavior is allowed**;
- no nested card exists inside the blue rail;
- only one current-news teaser is shown;
- desktop/tablet rail may stretch with the Feature grid, but its content must not be forced to the bottom by image height;
- mobile/tablet stacking removes equal-height behavior;
- mobile rail becomes normal content-height flow;
- mobile order: Feature -> blue rail -> News.

Founder-approved contextual signup headline:

`There's more to it than the headline.`

A support description remains structurally required. Exact final contextual support wording is still **OPEN / NOT YET APPROVED**. Runtime temporarily reuses the already-approved primary newsletter support line rather than inventing a new public claim.

### Rail news-source behavior

- in development, the rail teaser uses the clearly synthetic first News fixture so the complete layout can be visually reviewed;
- outside development, it uses the newest additional published story when available;
- if no additional eligible published item exists, the lower Latest block remains present with a restrained factual empty state rather than disappearing or fabricating journalism.

## News

News remains below the Feature/rail composition and must remain structurally present in production.

- one plain `News` heading;
- development uses the existing clearly synthetic lead + supporting hierarchy;
- development fixtures remain excluded from production;
- if production has no real News inventory yet, show a restrained factual empty state instead of removing the section or manufacturing stories;
- current News development imagery retains the approved blue top-image rule;
- no unrelated News redesign is authorized.

## Current published Feature topic correction

The currently published Feature now uses `topic: business` so the rejected public `Building` label no longer leaks into the production ticker.

This is a narrow content-metadata correction only. The full schema/taxonomy migration remains a later architecture task.

## Footer

The near-black footer endcap remains unchanged:

- compact newsletter signup retained;
- minimal institutional/legal links retained;
- footer inner content follows the shared homepage shell.

## Responsive contract

Responsiveness is required in every implementation pass.

Current implementation is designed so:

- shared shell scales fluidly;
- hero remains `[content] [signup]` while space permits, then stacks;
- blue hero rules remain aligned to the shared shell;
- ticker remains the only full-bleed element;
- ticker spacing reduces from roughly 24 px desktop to 16 px narrow mobile;
- Feature + blue rail remain side-by-side only while both are readable;
- large-desktop Feature media is constrained instead of expanding arbitrarily;
- tablet/mobile stack Feature then rail;
- Feature image scales fluidly within the approved 16:9 format;
- image-top rule follows image width;
- blue rail is content-height on mobile;
- forms fill available width without overflow;
- no intentional horizontal page scrolling is introduced.

Required visual QA:

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
- arbitrary tall/natural-ratio homepage Feature rendering;
- rail Latest content pushed to the bottom by `margin-top:auto`;
- synthetic Feature placeholder as the current visual target;
- square Portfilo right-rail placeholder;
- muted/light-blue full hero background;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- unapproved implementation-time gutter/max-width changes;
- hiding the News section in production simply because development fixtures are excluded;
- fabricating production News or rail stories to fill space.

## Implementation state

The founder explicitly approved and authorized this production-safety correction on 2026-09-08.

Implemented on `build/portfilo-v0`:

- approved 16:9 homepage Feature asset;
- constrained large-desktop Feature image geometry;
- normal-flow blue-rail Latest content with no bottom push;
- production-safe lower rail fallback when no second eligible story exists;
- deliberate ticker breathing room above and below;
- current published Feature topic corrected from `building` to `business`;
- News section remains structurally present in production;
- development fixtures remain excluded from production;
- production News uses a restrained factual empty state until real News inventory exists;
- responsive behavior preserved as a hard requirement.

Not implemented in this pass:

- ticker motion;
- full taxonomy/schema migration;
- News/Feature route or schema architecture;
- article redesign;
- final contextual support sentence;
- deployment or release.

Fresh `npm run check`, `npm run build`, and production-equivalent preview/visual QA are still required before validation can be claimed.
