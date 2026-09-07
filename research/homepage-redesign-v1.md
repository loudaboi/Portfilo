# Portfilo Homepage Redesign v1

_Last updated: 2026-09-08_

_Status: FOUNDER APPROVED / STATIC REBUILD AUTHORIZED / HERO ASSET REQUIRED_

## Purpose

Portfilo is being redesigned as a premium, newsletter-first business and technology news product.

The homepage must prioritize:

1. a clear newsletter value proposition and email signup;
2. current business and technology news as the primary repeat-visit surface;
3. deeper Features as a secondary, more art-directed editorial layer;
4. newsletter acquisition placed naturally around editorial content rather than as repeated landing-page sections;
5. a premium but restrained visual system that feels current rather than static or institutional.

This decision supersedes the visual authority of the currently implemented homepage composition created during the first redesign attempt. That implementation may contain reusable behavior, but its layout, scale, spacing, hierarchy, copy, and visual treatment are rejected as precedent.

## Public coverage labels

Approved reader-facing coverage labels:

`Business / Technology / Startup / AI`

Changes from the earlier system:

- remove `Building` from the intended public coverage set;
- rename `Startups` to singular `Startup`.

This decision is approved at the product/design level. Schema, content taxonomy, routes, existing story metadata, and canonical editorial documents must not be migrated during the homepage rebuild. That remains a later separately approved architecture task.

## Brand

Keep the existing approved Portfilo brand assets.

Canonical wordmarks remain:

- `public/brand/portfilo-wordmark-color.svg`;
- `public/brand/portfilo-wordmark-ink.svg`;
- `public/brand/portfilo-wordmark-light.svg`.

Do not create or substitute a new logo or wordmark for the redesign.

## Homepage composition contract

Founder-approved composition as of 2026-09-08:

```text
HEADER
Portfilo | Business / Technology / Startup / AI
Latest | Features | Subscribe free

HERO
Newsletter label
Approved acquisition headline + support line
Email + Subscribe free
Selected architectural hero visual

LATEST STRIP
Current headlines / updates

THE LATEST
Primary current story
Supporting current stories / compact feed as justified

FEATURED / A CLOSER LOOK
One deeper Feature / featured editorial story
Newsletter signup card paired beside the editorial module on desktop
Newsletter card follows the story on mobile

FOOTER
Compact newsletter signup
Minimal institutional / legal links
```

The previously planned standalone full-width `FINAL NEWSLETTER CTA` section is removed.

The founder approved using the BackScoop screenshot shared on 2026-09-08 as a **composition reference only** for pairing editorial content with a newsletter signup card. Do not copy BackScoop styling, copy, branding, colors, or proprietary visual identity.

## Newsletter acquisition placement

Homepage v1 now uses three signup moments:

1. **Hero signup** — primary acquisition surface with the approved full hero copy.
2. **Editorial-paired signup card** — placed beside the Featured / `A CLOSER LOOK` editorial module on desktop and after it on mobile.
3. **Compact footer signup** — a small final fallback integrated into the footer rather than a separate oversized section.

For the first static build, the founder approved reusing the already approved hero newsletter copy in all three placements so implementation can proceed without another copy gate. Context-specific card/footer copy may be refined later after the full homepage can be reviewed as a composition.

Do not turn the second or third signup into another large landing-page hero. Hierarchy must remain: hero first, editorial content second, supporting acquisition moments subordinate.

## Hard alignment rule

For desktop and large-tablet side-by-side modules, especially the Hero and Featured/newsletter-card pairing:

- columns share the same outer row;
- top edges align;
- bottom edges align when the composition calls for a shared rectangle;
- do not fix imbalance with arbitrary spacer blocks.

On mobile, once modules stack vertically, equal-height alignment is no longer required.

## Header

The header should be compact and editorial, not a billboard.

Requirements:

- use the canonical Portfilo wordmark;
- keep the wordmark visually restrained;
- expose current coverage as `Business / Technology / Startup / AI` where the composition supports it;
- primary navigation focuses on `Latest`, `Features`, and `Subscribe free`;
- `Subscribe free` is an action, not an institutional navigation label;
- About and Standards do not receive primary-navigation emphasis.

## Hero

The hero is a compact newsletter-first editorial introduction, not a full-screen SaaS landing page.

Approved copy:

```text
NEWSLETTER

Get ahead in business and tech in 7 minutes.

The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.
```

Requirements:

- compact desktop height rather than viewport-filling hero;
- get to actual journalism quickly;
- embedded email form;
- no duplicate signup immediately after the hero;
- no decorative black placeholder panel;
- no gradient;
- no giant startup illustration;
- no oversized logo treatment;
- `briefing` is rejected as public acquisition language.

The 7-minute and three-times-per-week statements are approved public operating promises, not placeholder marketing copy.

## Hero visual

Founder selected generated architectural candidate 2.

Canonical selection/provenance record:

`research/image-system/homepage-hero-selection-v1.md`

Approved character:

- grayscale / monochrome;
- premium print-like grain;
- contemporary architectural/city geometry;
- no embedded text;
- no logos;
- no documentary claim;
- small live HTML disclosure such as `AI-generated editorial image`.

The exact binary is not committed to the repository. **Do not regenerate, recreate, reinterpret, or substitute it.** Static homepage implementation must obtain the exact approved asset and verify the recorded hash when practical.

## Latest strip

Static phase:

- horizontally laid out headlines;
- no automatic movement during static design approval.

Motion is deferred until after static desktop/mobile approval. Later motion must include reduced-motion behavior and a usable pause/stop mechanism where applicable.

Do not fabricate production headlines to make the strip look active.

## The Latest

News is the primary editorial surface.

Use a small flexible hierarchy rather than equal card grids:

- Lead News;
- supporting News cluster;
- compact chronological/feed treatment when justified by available content.

Editorial importance determines scale.

Development fixtures may be used locally only when they are unmistakably synthetic and excluded from production.

## Featured / A Closer Look

The deeper Feature layer should feel slower and more art-directed than current News.

Current published Feature candidate:

`What actually makes starting a business hard?`

Requirements:

- strong image-led, split-editorial, or type-led composition;
- serif may be used selectively for meaningful editorial contrast;
- do not expose unnecessary internal taxonomy or metadata UI;
- use the existing approved story headline/dek unless a separate editorial gate reopens them;
- pair the newsletter signup card with this editorial module in the first static build, using the founder-approved BackScoop composition logic without copying its visual identity.

## Visual rules

Working visual direction:

**premium editorial restraint + digital immediacy**

Use:

- warm near-white canvas;
- near-black ink;
- Portfilo blue as the dominant functional/editorial accent;
- Portfilo red rarely and intentionally;
- square geometry by default;
- thin rules;
- strong sans-led homepage typography;
- Source Serif 4 selectively for Feature/editorial contrast;
- visible grain on selected editorial imagery;
- restrained information density.

Avoid:

- generic SaaS composition;
- gradients/glow/glass;
- default shadows;
- rounded-card and pill-heavy systems;
- card soup;
- fake newspaper styling;
- decorative black panels;
- `01 / 02 / 03` section-decoration systems;
- excessive monospace;
- stock-business clichés;
- generic AI imagery;
- decorative motion before static approval.

Typography baseline remains Instrument Sans + Source Serif 4 + IBM Plex Mono only for true utility roles.

## Mobile

Mobile receives its own editorial reading order rather than a shrunken desktop grid.

Expected order:

1. compact header;
2. newsletter hero;
3. hero visual;
4. Latest strip;
5. lead News;
6. supporting News;
7. Featured / `A CLOSER LOOK` story;
8. newsletter signup card;
9. footer with compact signup + institutional links.

## Static Homepage Rebuild v1

**AUTHORIZED by the founder on 2026-09-08.**

Implementation requirements:

- rebuild the homepage from this approved composition rather than patching the rejected layout into shape;
- preserve reusable underlying content/newsletter/brand behavior where sound;
- use the approved hero copy;
- reuse that copy in the editorial-paired card and compact footer signup for this first build;
- use the exact selected hero binary only;
- no motion;
- no News/Feature schema or taxonomy migration;
- no site-wide `Portfilo Brief` -> `Newsletter` migration in this task;
- no article-route redesign in this task;
- run `npm run check` and `npm run build` before claiming implementation validation;
- stop after the static build for desktop / large-tablet / mobile visual QA.

## Current blocker

The exact selected hero asset binary is not committed.

The static rebuild may begin only once the exact approved hero image is supplied. If the asset is unavailable, ask the founder for it rather than generating or substituting another image.

## Approval boundary

Founder approval now covers this design contract and authorizes Static Homepage Rebuild v1 once the required hero asset is available.

It does not authorize:

- schema/taxonomy migration;
- hero-image regeneration/substitution;
- article redesign;
- route deletion/redirects;
- public `Portfilo Brief` naming migration;
- motion implementation;
- deployment;
- merge to `main`;
- release.