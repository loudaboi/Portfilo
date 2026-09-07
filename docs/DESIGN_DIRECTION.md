# Portfilo Design Direction

_Last updated: 2026-09-08_

## Objective

Portfilo should feel like a contemporary editorial product built for the internet, not a generic news template, SaaS landing page, AI-content product, or fake newspaper.

Current direction:

> **Premium editorial restraint + digital immediacy**

The design should make current News easy to scan, deeper editorial work pleasant to read, and newsletter acquisition easy to act on without turning the site into a marketing funnel with journalism underneath it.

For nontrivial discretionary visual/product decisions, apply:

`skills/portfilo-anti-slop/SKILL.md`

## Current homepage authority

Current founder-approved homepage contract:

`research/homepage-redesign-v1.md`

`docs/PROJECT_STATE.md` owns the current phase and exact next task.

The previously implemented Homepage v3 composition was visually rejected. The current authority is the later founder-approved production-safety correction implemented on the working branch.

## Core visual principles

### 1. Editorial hierarchy before components

Use scale, typography, image treatment, placement, and whitespace to express editorial importance.

Avoid equal-card grids as the default. Cards are allowed only when they solve a real information problem.

### 2. Typography carries most of the identity

Prefer:

- strong sans-led publication hierarchy;
- disciplined reading typography;
- serif contrast only where it creates a meaningful reading/editorial mode;
- compact utility/metadata typography;
- natural variation in scale based on editorial importance.

For the current homepage:

- hero uses **Instrument Sans**;
- Feature headline and dek use **Instrument Sans**;
- Source Serif 4 remains available for long-form reading and selective deeper editorial contrast, not the current homepage Feature presentation.

Do not use repeated eyebrows, index labels, or typography tricks merely to make the page feel designed.

### 3. Whitespace is structural, not ornamental

Use deliberate whitespace to separate editorial jobs and protect reading rhythm.

The Latest strip now has explicit paper breathing room above and below it so the hero blue rule, ticker, and Feature read as three distinct layers.

Target rhythm:

- approximately 24 px above and below the ticker on desktop;
- approximately 16 px on narrow mobile.

Do not use oversized empty marketing regions to signal premium design. Portfilo should feel intentionally dense enough to read as a publication.

### 4. One global homepage shell

The homepage has a hard alignment invariant:

- header inner content, hero inner content, Feature area, News, and footer inner content share one common shell;
- current large-desktop shell is 84rem / 1344 px maximum;
- individual homepage sections must not invent independent global max-width/centering rules;
- internal grids may vary inside the shell;
- **only the Latest ticker is full-bleed**.

This rule exists to prevent repeated gutter/indent drift.

### 5. Brand color is structural, not decorative

Current palette:

- paper/off-white: `#f4f0e8` baseline, with restrained near-white variation allowed;
- ink: `#171614`;
- muted neutral: `#69655e`;
- line neutral: `#cbc5bb`;
- Portfilo blue: `#0050a4`;
- light blue: `#8fc7ff` as a brand reference/accent where justified;
- Portfilo red: `#b42318`.

Blue is the primary functional/editorial accent.

Red is rare and intentional. Do not mechanically balance blue and red across page regions.

Approved blue structural devices on the homepage include:

- thin blue rule above and below the top newsletter acquisition area;
- thin 2–3 px blue rule at the top edge of Feature and News imagery;
- the continuous blue editorial/newsletter rail beside the Feature.

Do not turn these into boxed card systems or decorative color spam.

### 6. Mobile is first-class

Mobile is not a shrunken desktop composition.

Preserve readable line lengths, editorial order, usable form controls, accessible tap targets, and no horizontal page overflow.

Responsiveness is a hard completion requirement for every visual pass.

## Current homepage visual contract

Implemented structure:

```text
SHARED CONTENT SHELL
Header / Hero / Feature / News / Footer-inner

HEADER
Portfilo | Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
blue rule above
[content] [signup]
Instrument Sans
hero CTA: Send me the news
blue rule below

PAPER SPACE

LATEST STRIP
black Latest label only
light headline rail
full viewport width

PAPER SPACE

FEATURE + CONTINUOUS BLUE RAIL
left: restrained 16:9 Feature image + headline + dek
right: contextual signup + divider + Latest block in normal top-down flow

NEWS
plain News heading
local development hierarchy when fixtures exist
production-safe empty state when real News inventory does not yet exist

BLACK FOOTER ENDCAP
compact signup + minimal links
```

### Header

Use:

- approved Portfilo wordmark asset at the restrained scale;
- `Latest | Stories` navigation;
- `Subscribe free` CTA button;
- no topic labels;
- shared-shell alignment;
- no unrelated header redesign.

### Top newsletter acquisition area

The top signup behaves as a compact publication acquisition unit:

`[content] [signup]`

Use:

- warm paper background;
- Instrument Sans headline/support/UI;
- approved headline `Get ahead in business and tech in 7 minutes.`;
- approved support line;
- hero CTA `Send me the news`;
- blue rule above and below the hero unit;
- free/unsubscribe note close to the form;
- no hero image;
- no `NEWSLETTER` eyebrow;
- no huge independent hero container;
- no colored full-section background block;
- no vertical divider;
- no gradient, shadow, card shell, or decorative icon.

Hero and Feature-rail forms share the same component/control system: height, border rhythm, typography, padding, square geometry, validation, and submission states. Exact widths may differ because the parent columns differ.

### Latest strip

Use:

- full viewport width;
- near-black `Latest` identifier only;
- light headline rail;
- blue category accents where useful;
- static behavior until the corrected homepage is visually approved;
- deliberate paper space above and below it.

Do not use the whole strip as a black bar and do not use red as the ticker treatment.

### Feature + continuous blue rail

Feature column:

- use `public/images/homepage-feature-16x9.png`;
- homepage Feature presentation uses the canonical **16:9 landscape** format already defined by `docs/IMAGE_SYSTEM.md`;
- large-desktop media should not exceed roughly 52rem / 832 px;
- scale fluidly downward on smaller widths;
- do not display arbitrary tall source ratios on the homepage;
- do not use a fixed-height crop to repair a badly chosen source asset;
- add a 2–3 px Portfilo-blue top rule to the image only;
- use Instrument Sans for Feature headline and dek;
- image -> headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` heading.

Blue rail:

- no square Portfilo brand placeholder;
- use one continuous blue panel;
- contextual signup comes first;
- then a thin internal divider;
- then one Latest block;
- show a real teaser title + short description when eligible inventory exists;
- otherwise keep the block present with a restrained factual empty state rather than fabricating news;
- then `See the latest news →`;
- no nested card inside the rail;
- content stays in normal top-to-bottom document flow;
- **do not use `margin-top:auto` or any device that pushes Latest content to the bottom because the Feature image is tall**;
- desktop/tablet rail may stretch with the Feature module, but content must remain top-flowing;
- mobile rail becomes content-height and must not preserve desktop equal-height behavior.

Approved contextual signup headline:

`There's more to it than the headline.`

A one-sentence support description remains required, but exact final wording is a separate copy gate. Runtime temporarily reuses the already-approved primary newsletter support line rather than inventing a new public claim.

### Editorial image-top rule

Use a restrained 2–3 px Portfilo-primary-blue rule at the top edge of Feature and News imagery when appropriate.

The line:

- follows the responsive image width;
- does not extend to the other three edges;
- should not be applied to non-editorial visuals by default.

### News and footer

News remains below the Feature/rail composition with its plain `News` heading.

Development fixtures may test the News hierarchy locally only. They must remain excluded from production. Production must not hide the entire News section simply because no real News inventory exists yet; use a restrained factual empty state until the later News/Feature architecture is implemented and populated.

The near-black footer endcap remains. Its inner content uses the same shared shell.

Do not redesign either section unless the approved shell exposes a concrete defect.

## Geometry and surfaces

Default toward:

- square or nearly square geometry;
- thin rules rather than heavy borders;
- flat surfaces;
- composition and spacing rather than shadows;
- image scale based on editorial importance;
- tighter publication density rather than oversized landing-page whitespace.

Avoid by default:

- rounded newsletter cards;
- pill-heavy navigation;
- glassmorphism;
- default shadows;
- glow;
- decorative black panels in the page body;
- gradient blocks;
- `01 / 02 / 03` decoration;
- fake terminal styling;
- faux-print/newsprint texture on the UI itself.

## Typography

Baseline:

1. `Instrument Sans` for homepage interface/navigation/metadata and current homepage display work;
2. `Source Serif 4` for long-form reading and selective deeper editorial contrast;
3. `IBM Plex Mono` only for true utility/data/source/timestamp roles.

Avoid excessive monospace and repeated eyebrow systems.

## Images

Editorial imagery follows `docs/IMAGE_SYSTEM.md`.

Preferred modes when the editorial job supports them:

- owned/licensed/verified photography;
- approved generated editorial illustration;
- data/document/evidence visuals;
- typography-led/no-image treatment.

The current top acquisition area uses no hero image.

The homepage Feature now uses the approved 16:9 asset rather than the previous tall natural-ratio rendering. The canonical v0 story-image ratio remains 16:9 landscape; article-body imagery may still vary when the editorial job requires it.

## Responsive contract

Every visual change must work across wide desktop, standard desktop/laptop, tablet, and mobile.

Required behavior:

- shared shell scales fluidly;
- hero remains two-column while space permits, then stacks;
- hero blue rules remain aligned to the shared shell;
- ticker remains the only full-bleed element;
- ticker breathing room reduces appropriately on mobile;
- Feature + blue rail remain side-by-side only while readable;
- Feature media is capped on large desktop instead of expanding arbitrarily;
- tablet/mobile stack Feature then rail;
- 16:9 Feature image scales responsively;
- blue image-top rule follows image width;
- blue rail becomes content-height on mobile;
- forms fill available width without overflow;
- header CTA remains usable on narrow screens;
- no horizontal page scrolling.

## Motion

Motion remains subordinate to static composition.

The corrected static homepage must be validated and visually approved before automatic ticker motion is added.

Later ticker motion should use:

- slow horizontal movement;
- pause behavior on hover/focus where applicable;
- stationary/manual reduced-motion fallback;
- touch-safe mobile behavior;
- CSS first;
- no obsolete `<marquee>`.

Avoid scroll-jacking, decorative parallax, fade-up on every section, or motion that delays reading.

## Accessibility

Required:

- semantic document structure;
- keyboard navigation;
- visible focus;
- sufficient contrast;
- meaningful link text;
- appropriate alt text;
- reduced-motion behavior;
- responsive text/layout without horizontal overflow.

Accessibility is part of completion, not later polish.

## Development fixture rule

Synthetic content may be used to test hierarchy, wrapping, density, and responsive structure only when clearly synthetic, clearly labeled, and excluded from production.

Do not fabricate realistic company/news claims merely to make a layout look populated.
