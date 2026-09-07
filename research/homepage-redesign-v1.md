# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: HOMEPAGE V3 PLAN FOUNDER-APPROVED / IMPLEMENTATION NOT YET AUTHORIZED_

## Purpose

Portfilo is being redesigned as a contemporary business-and-technology publication with strong newsletter acquisition and clear editorial hierarchy.

The homepage must behave like a publication first and a signup funnel second.

Morning Brew and BackScoop remain composition references only. Use their page logic and hierarchy where useful, but do not copy their branding, colors, layout details, or wording.

## Homepage v3 approved composition

```text
HEADER
Portfilo
Latest | Stories

EDITORIAL NEWSLETTER ACQUISITION AREA
warm white / paper surface
large editorial proposition
support line
stacked email field + Subscribe free
thin structural rule / restrained blue accent

LATEST STRIP
black Latest label only
light headline rail

FEATURE + CONTEXTUAL NEWSLETTER CARD
left: smaller full Feature image, headline, dek
right: blue newsletter card

NEWS
plain News heading
lead current story + supporting current stories

BLACK FOOTER ENDCAP
compact newsletter signup
minimal institutional/legal links
```

## Header

Freeze the current header unless visual QA exposes an actual defect.

Requirements:

- use the approved Portfilo wordmark at the current larger restrained scale;
- primary navigation is `Latest | Stories`;
- no topic labels in the header;
- no Subscribe CTA in the header;
- preserve shared page alignment and mobile usability.

## Primary newsletter acquisition area

The top signup should not look like a generic white marketing block or a large colored hero.

Approved direction:

- warm white / paper background;
- no hero image;
- no `NEWSLETTER` eyebrow;
- no card container, shadow, rounded panel, gradient, or decorative icon;
- editorial composition carried by typography, spacing, and one restrained blue rule/accent;
- headline may use Source Serif 4 to establish a publication/editorial tone;
- support copy remains Instrument Sans;
- target large-desktop headline roughly 44–48 px, responsive downward;
- target total desktop section height roughly 170–200 px;
- copy/form columns remain balanced and compact;
- form is stacked on desktop rather than a stretched horizontal input/button row;
- form width roughly 420–480 px maximum on desktop;
- input and CTA share the same width;
- CTA text is exactly `Subscribe free`;
- CTA uses Portfilo blue with white text;
- one small line such as `Free newsletter. Unsubscribe anytime.` remains below the form;
- mobile stacks naturally without forcing desktop equal-height behavior.

Approved primary acquisition copy remains:

```text
Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

The 7-minute and three-times-per-week statements remain public operating promises.

## Latest strip

Keep the corrected strip structure:

- full viewport width;
- only the `Latest` identifier uses the near-black/ink block;
- headline rail remains on the light page treatment;
- category labels may use Portfilo blue;
- no red ticker treatment;
- no fabricated production headlines;
- no automatic movement during Homepage v3 static implementation.

Ticker motion remains a separate post-static approval task.

## Feature + contextual newsletter card

The current Feature is too large on wide desktop because the story column receives too much of the `100rem` page width while preserving the full image aspect ratio.

Homepage v3 solves this by constraining the module rather than cropping the image.

Approved direction:

- dedicated Feature composition maximum roughly 88–92 rem;
- desktop story/card relationship roughly 62–65% story and 30–34% newsletter card;
- gap roughly 32–48 px;
- Feature image target roughly 800–850 px wide on large desktop rather than approximately 1000 px+;
- preserve the full image composition;
- no fixed-height crop;
- no `object-fit: cover` crop for this approved Feature image;
- image → headline → short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` title;
- Feature headline roughly 40–48 px serif on large desktop, responsive downward;
- do not stretch the newsletter card to match the image height;
- mobile stacks Feature first, then newsletter card.

## Feature-side newsletter card

Founder-approved card headline:

```text
There's more to it than the headline.
```

The card should explain why a reader would subscribe after seeing the Feature, rather than repeating the hero proposition.

Open item:

- exact one-sentence support copy is not yet approved.

Do not copy BackScoop's supporting wording. The support sentence must state a concrete Portfilo value using approved claims.

Until that sentence is approved, do not treat temporary runtime copy as final authority.

## News

News remains below the Feature composition.

Requirements:

- one plain `News` heading;
- lead current item + supporting current items;
- no repeated decorative eyebrow system;
- no redesign of News during Homepage v3 unless the new Feature scale exposes a concrete layout problem;
- development fixtures remain clearly synthetic and excluded from production.

## Footer

Keep the near-black footer endcap for the Homepage v3 static pass.

Requirements:

- compact newsletter signup;
- minimal institutional/legal links;
- light wordmark where used;
- no new footer redesign during this pass unless QA exposes a defect.

## Mobile

Mobile remains first-class.

Expected order:

1. header;
2. editorial newsletter acquisition area;
3. Latest strip;
4. Feature image + headline + dek;
5. contextual newsletter card;
6. News;
7. black footer endcap.

No horizontal page overflow. No desktop equal-height assumptions. Preserve the Feature image composition.

## Implementation boundary

This Homepage v3 design plan is founder-approved as of 2026-09-08.

Approval of this plan does **not** by itself authorize runtime implementation.

If the founder explicitly opens Homepage v3 implementation, the implementation may change only what this contract requires:

- top newsletter acquisition composition and `Subscribe free` CTA;
- Feature module width/ratio/type scale;
- contextual newsletter-card placement/headline;
- responsive behavior required by those changes.

Do not silently redesign the header, ticker, News section, footer, taxonomy, routes, article surfaces, or motion.

After runtime changes, run actual `npm run check` and `npm run build`, then stop for desktop/mobile visual QA before ticker motion.
