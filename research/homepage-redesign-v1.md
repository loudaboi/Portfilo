# Portfilo Homepage Redesign v1

_Last updated: 2026-09-07_

_Status: FOUNDER APPROVED / DESIGN CONTRACT LOCKED / IMPLEMENTATION NOT YET AUTHORIZED_

## Purpose

Portfilo is being redesigned as a premium, newsletter-first business and technology news product.

The homepage must prioritize:

1. a clear newsletter value proposition and email signup;
2. current business and technology news as the primary repeat-visit surface;
3. deeper Features as a secondary, more art-directed editorial layer;
4. a premium but restrained visual system that feels current rather than static or institutional.

This decision supersedes the visual authority of the currently implemented homepage composition created during the first redesign attempt. That implementation may contain reusable code, but its layout, scale, spacing, hierarchy, and visual treatment are rejected as design precedent.

## Public coverage labels

Approved reader-facing coverage labels:

`Business / Technology / Startup / AI`

Changes from the earlier system:

- remove `Building` from the public coverage set;
- rename `Startups` to singular `Startup`.

This decision is approved at the product/design level. Schema, content taxonomy, routes, existing story metadata, and canonical editorial documents should not be changed until the relevant implementation step is explicitly approved and migration impacts are reviewed.

## Brand

Keep the existing approved Portfilo brand assets.

Canonical wordmarks remain:

- `public/brand/portfilo-wordmark-color.svg`;
- `public/brand/portfilo-wordmark-ink.svg`;
- `public/brand/portfilo-wordmark-light.svg`.

Do not create or substitute a new logo or wordmark for the redesign.

The compact symbol remains for constrained surfaces only.

## Homepage composition contract

The approved homepage composition is:

```text
HEADER
Portfilo | Business / Technology / Startup / AI
Latest | Features | Subscribe free

HERO
Newsletter label
Primary promise
One supporting sentence
Email + Subscribe free
Hero visual

LATEST STRIP
Current headlines / updates

THE LATEST
Primary current story
Supporting current stories
Category controls where useful
Secondary utility area only when justified by real content

A CLOSER LOOK
One premium Feature

FINAL NEWSLETTER CTA
One final signup

FOOTER
Minimal institutional links
```

The approved visual mockup shown during the 2026-09-07 review is the composition reference for proportions and hierarchy. It is not a source of factual story content, final copy, final imagery, or a replacement wordmark.

## Hard alignment rule

For desktop and large-tablet two-column modules, especially the Hero and Feature module:

- text and image columns share the same outer row;
- top edges align;
- bottom edges align;
- the text stack must be composed to finish within the same visual frame as the image;
- do not allow one side to hang materially lower than the other;
- do not fill imbalance with arbitrary spacer blocks.

On mobile, once modules stack vertically, equal-height alignment is no longer required.

## Header

The header should be compact and editorial, not a billboard.

Requirements:

- use the canonical Portfilo wordmark;
- keep the wordmark visually restrained;
- expose current coverage as `Business / Technology / Startup / AI` where the composition supports it;
- primary navigation focuses on `Latest`, `Features`, and `Subscribe free`;
- `Subscribe free` is an action, not just another institutional navigation label;
- About and Standards do not receive primary-navigation emphasis.

## Hero

The hero is a compact newsletter-first editorial introduction, not a full-screen SaaS landing page.

Requirements:

- target roughly 220–300 px of core desktop content height before image/form-dependent variation rather than a viewport-filling hero;
- get to actual journalism quickly;
- one small newsletter/coverage label;
- one strong, researched reader-benefit headline;
- one concise supporting sentence;
- one embedded email form;
- no duplicate signup immediately after the hero;
- no decorative black placeholder panel;
- no gradient;
- no giant startup illustration;
- no oversized logo treatment.

The final hero copy remains a separate editorial-copy gate.

## Hero visual decision

The hero visual has a different job from the previously approved homepage Feature image.

The current decision is to compare three directions before production use:

A. a new universal Portfilo editorial visual designed for the homepage/newsletter proposition;
B. the existing approved homepage image, tested in the new crop and context rather than assumed suitable;
C. a typography-only hero with no image.

The existing homepage image remains available for the Feature section and retains its prior provenance. It is not automatically approved for the new hero.

No new hero asset should be published merely because it looks plausible. The selected hero treatment requires explicit visual approval.

## Latest strip

The Latest strip is a signature digital-news element.

Static phase:

- horizontally laid out headlines;
- no automatic movement during static design approval.

Motion phase, only after static approval:

- slow horizontal movement;
- headline links;
- visible pause/stop control;
- reduced-motion fallback becomes stationary or manually scrollable;
- no obsolete HTML marquee;
- use performant CSS transform-based movement where practical.

Do not fabricate production headlines to make the strip look active.

## Latest News composition

News is the primary editorial surface.

The homepage uses a small flexible system rather than equal card grids:

- Lead News;
- News Cluster;
- compact chronological/feed treatment;
- optional supporting utility block only when real content justifies it.

Editorial importance determines scale.

Development fixtures may be used locally to test layout but must:

- be unmistakably synthetic;
- avoid realistic fabricated company/news claims;
- remain excluded from production.

## Feature composition

The Feature section is the slower, more art-directed layer.

Current published Feature candidate:

`What actually makes starting a business hard?`

Requirements:

- strong image-led, split-editorial, or type-led composition;
- no forced image if typography is stronger;
- image and text edges align when side by side;
- serif may be used selectively to create a slower editorial pace;
- do not expose unnecessary internal taxonomy or metadata UI;
- use the existing approved story headline/dek unless a separate editorial gate reopens them.

## Newsletter acquisition

Homepage v1 uses two newsletter signup moments at the current content volume:

1. Hero signup;
2. final signup after editorial content and before the footer.

Do not insert a middle signup until enough real editorial content exists between asks to justify it.

Repeated acquisition must be separated by meaningful editorial value.

A dedicated `/subscribe` route remains as a simplified utility landing page for direct links, social bios, QR codes, and campaign use, but embedded signup is the primary normal-reader path.

Public naming direction:

- `Portfilo` is the brand;
- call the email product `Newsletter`, not `Portfilo Brief`.

The public naming migration will be performed consistently in a later approved step across website and email-facing surfaces. Do not perform a partial naming migration.

## Visual rules

Working visual direction:

**premium editorial restraint + digital immediacy**

Use:

- clean warm-white / near-white canvas;
- near-black ink;
- Portfilo blue as the dominant functional/editorial accent;
- Portfilo red rarely and intentionally;
- square geometry by default;
- thin rules;
- strong sans-led homepage typography;
- serif primarily for meaningful Feature/reading contrast;
- deliberate but not excessive whitespace;
- image scale and hierarchy based on editorial importance.

Avoid:

- gradients;
- shadows by default;
- glassmorphism;
- rounded newsletter cards;
- giant hero sections;
- card soup;
- numbered `01 / 02 / 03` section systems;
- excessive monospace;
- fake newspaper styling;
- decorative black panels;
- decorative parallax;
- generic fade-up animation everywhere;
- blue/red split layouts;
- stock-business clichés;
- random AI-generated hero art.

## Typography

Start the static prototype with the existing open typography stack:

- Instrument Sans for primary homepage/news/interface work;
- Source Serif 4 for Feature/body/editorial contrast;
- IBM Plex Mono only for true utility/data roles.

The redesign may reopen typography after the first faithful static composition is reviewed. Do not add font dependencies merely to signal redesign.

## Motion

Motion is deferred until static desktop/mobile composition is founder-approved.

Initial implementation contains no decorative motion.

Later candidate motion:

- Latest ticker;
- restrained link/CTA responses;
- small image interactions only when useful.

No GSAP or other animation dependency unless a concrete approved interaction cannot be achieved cleanly with CSS.

## Mobile

Mobile receives its own editorial reading order rather than a shrunken desktop grid.

Expected order:

1. compact header;
2. newsletter hero;
3. hero visual if retained;
4. Latest strip;
5. lead News;
6. supporting News;
7. Feature;
8. final newsletter signup;
9. footer.

Two-column equal-edge alignment rules do not apply after content stacks.

## Implementation sequence

1. **Hero Visual Direction v1**
   - compare new universal visual vs existing homepage image vs typography-only;
   - choose one for the static homepage.

2. **Homepage Copy v1**
   - research and approve hero promise, supporting sentence, signup microcopy, and final CTA copy.

3. **Static Homepage Rebuild v1**
   - rebuild `src/pages/index.astro` composition from the approved mockup contract;
   - reuse sound underlying newsletter/content/brand code where helpful;
   - do not patch the rejected current composition into shape;
   - no motion.

4. **Desktop + mobile visual QA**
   - compare implementation directly against the approved composition;
   - verify text/image top and bottom alignment;
   - verify density and scale.

5. **News content model + routes**
   - decide and implement the minimal News/Feature presentation distinction;
   - migrate taxonomy only after reviewing impact.

6. **Feature/article redesign**
   - redesign long-form reading surface;
   - add newsletter acquisition at the appropriate article position.

7. **Latest/Features archives**
   - build or refine browsing surfaces.

8. **Subscribe + Standards simplification / About retirement**
   - keep `/subscribe` as a focused utility page;
   - simplify public Standards;
   - remove or redirect About only after author/byline/metadata dependencies are migrated safely.

9. **Newsletter public naming migration**
   - migrate `Portfilo Brief` to `Newsletter` consistently across public website/email-facing surfaces.

10. **Motion pass**
    - Latest ticker and approved micro-interactions only after static approval.

11. **Full QA**
    - responsive;
    - accessibility;
    - reduced motion;
    - route integrity;
    - newsletter flow;
    - metadata/SEO;
    - performance;
    - production fixture exclusion.

12. **Resume Social Visual System v0**
    - social inherits the redesigned Portfilo system.

## Current active task

**Hero Visual Direction v1**

Goal: determine the production hero treatment before rebuilding the homepage.

Required comparison:

- new universal editorial hero visual;
- existing approved homepage image in the new hero crop/context;
- typography-only hero.

Approval output:

- one recommended direction;
- the exact visual job;
- crop/composition behavior;
- whether a new asset must be generated;
- desktop/mobile behavior.

Do not rebuild the homepage or generate/publish a new hero asset from this decision record alone.

## Approval boundary

Founder approval covers this design contract and sequence.

It does not by itself authorize:

- schema/taxonomy migration;
- production homepage rebuild;
- new hero asset generation or publication;
- article redesign;
- route deletion/redirects;
- public `Portfilo Brief` naming migration;
- motion implementation;
- merge to `main`;
- release.