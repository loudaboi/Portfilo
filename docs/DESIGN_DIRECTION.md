# Portfilo Design Direction

_Last updated: 2026-09-10_

## Objective

Portfilo should feel like a contemporary editorial product built for the internet, not a generic news template, SaaS landing page, AI-content product, or fake newspaper.

Current direction:

> **Premium editorial restraint + digital immediacy**

The design should make current News easy to scan, deeper Why and Hustle work pleasant to read, and newsletter acquisition easy to act on without turning the site into a marketing funnel with journalism underneath it.

For nontrivial discretionary visual/product decisions, apply `skills/portfilo-anti-slop/SKILL.md`.

## Core principles

### Editorial hierarchy before components

Use scale, typography, image treatment, placement, and whitespace to express importance. Avoid equal-card grids and component repetition unless a real information problem requires them.

### Typography carries the identity

- Instrument Sans leads hierarchy and interface.
- Source Serif 4 supports deeper Why/Hustle long-form reading.
- IBM Plex Mono is reserved for utility/data/source roles where justified.
- Type must scale progressively across desktop, laptop, tablet, and phone.

Do not use repeated eyebrows, oversized display type, or typographic tricks merely to make a page feel designed.

### Whitespace is structural

Whitespace separates editorial jobs and protects reading rhythm. It should not become oversized marketing emptiness.

The site should feel intentionally dense enough to read as a publication.

### One publication shell

The primary publication shell is 84rem / 1344px maximum.

Header, homepage modules, archives, institutional pages, footer acquisition, and footer align to the shared shell and shared responsive gutter unless a section is deliberately full bleed.

The Latest News ticker is the main approved full-bleed exception.

### Brand color is structural

Current palette:

- paper: `#f4f0e8`
- ink: `#171614`
- muted: `#69655e`
- line: `#cbc5bb`
- Portfilo blue: `#0050a4`
- light blue: `#8fc7ff`
- Portfilo red: `#b42318`

Blue is the primary structural/editorial accent. Red remains rare and intentional.

Do not mechanically repeat blue rules on every image.

Approved image-rule hierarchy:

- homepage primary Feature image: thin blue top rule;
- primary News/Why/Hustle article hero: thin blue top rule;
- supporting News/Why/Hustle archive/list/secondary images: **no blue top rule**.

### Responsive behavior

Desktop, laptop, and tablet belong to one layout family.

- 1440 / 1366: full desktop composition.
- 1024: compact desktop/laptop. Preserve desktop structure and increase side breathing room rather than collapsing prematurely.
- 768: tablet still derives from desktop. Selectively reflow only where readability or fit requires it.
- 390 / 375 / 320: phone is the major structural simplification point.

A stacked layout does not imply unlimited width. Newsletter forms and other controls should remain sensibly constrained, especially on tablet.

Mobile remains first-class: readable line lengths, intentional order, usable controls, accessible tap targets, and no horizontal page overflow.

## Header

Current masthead:

`Portfilo | News | Why | Hustle`

No persistent Subscribe CTA and no hamburger by default.

A hamburger is justified only if real narrow-width testing shows the compact masthead cannot fit accessibly.

## Homepage

Current composition:

```text
HEADER
Portfilo | News | Why | Hustle

TOP NEWSLETTER SIGNUP
blue acquisition band
message + working signup

PAPER SPACE

LATEST NEWS STRIP
full bleed when inventory exists

PAPER SPACE

FEATURE + CONTEXTUAL BLUE RAIL
left: primary 16:9 Why/Hustle image + headline + dek
right: contextual newsletter signup + another Why/Hustle item

NEWS
lead News + supporting News hierarchy

DARK FOOTER ACQUISITION

COMPACT FOOTER
Why | Hustle | Standards | Privacy
```

Do not add separate Why and Hustle homepage sections by default. The existing Feature hierarchy may draw from either section and should remain the primary long-form homepage treatment until inventory proves another need.

### Newsletter acquisition

The homepage is the direct newsletter destination. `/subscribe` is retired and redirects to `/#newsletter`.

All visible signup forms use the shared form/backend behavior.

Avoid giant tablet-width fields. When a form stacks, its measure should remain deliberately constrained until phone widths justify full-width controls.

### Latest News strip

Use deliberate paper space above and below the ticker so the acquisition band, ticker, and Feature remain distinct layers.

Motion is restrained and only justified when inventory supports an actual moving rail. Reduced-motion and manual interaction must remain respected.

### Feature

- canonical 16:9 landscape image;
- primary image may retain the thin blue top rule;
- Instrument Sans headline/dek;
- no decorative eyebrow required;
- no arbitrary tall crop or fixed-height image repair;
- desktop/laptop/tablet should preserve the Feature + rail relationship while space remains viable;
- phone may stack deliberately;
- the Feature may point to either Why or Hustle based on actual published inventory.

### News

Real published News is clickable and routes to `/news/[slug]`.

Development-only News fixtures are clearly synthetic and non-clickable.

Supporting News imagery should be quiet: no repeated blue image rules.

## Archives

News, Why, and Hustle use one shared archive system.

- 84rem shared shell;
- lead item + supporting stream;
- optional 16:9 imagery;
- explicit image-less states;
- contextual newsletter acquisition;
- supporting images without blue top rules;
- laptop/tablet preserve desktop-family composition as long as it remains readable;
- phone uses deliberate single-column stacking.

An empty Hustle archive is acceptable until real reporting exists. Do not add fake cards or sample founder profiles to fill it.

## Articles

One shared article component serves News and long-form Why/Hustle pieces.

Preserve:

- centered classification/headline/dek package;
- header/hero max width around 54rem;
- reading measure around 41.5rem;
- News uses Instrument Sans reading mode;
- Why and Hustle use Source Serif 4 long-form reading mode;
- optional long-form section rail when enough real `h2` headings exist;
- methodology/corrections;
- optional 16:9 hero.

Current hero treatment:

- no neutral divider between article header and hero;
- deliberate whitespace connects the header package to the image;
- primary hero retains its thin blue top rule.

No public individual author/byline system.

## Institutional and utility pages

Standards and Privacy remain restrained text-led editorial pages inside the same shared shell.

Confirmed and 404 are compact utility pages using the same foundation rather than a separate oversized visual system.

About, standalone Subscribe, and Stories are retired as public destinations in v0.

## Anti-patterns

Do not introduce without a demonstrated requirement:

- SaaS card soup;
- rounded newsletter cards as a default;
- gradients;
- glassmorphism;
- glow;
- shadows as decoration;
- fake terminal UI;
- faux newspaper styling;
- decorative numbers/indexes;
- repeated color rules on every module;
- unnecessary animation;
- a new component/design framework.
