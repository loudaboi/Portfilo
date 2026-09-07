# Portfilo Project State

_Last updated: 2026-09-08_

## Current phase

**WEBSITE / PRODUCT REDESIGN ACTIVE — POST-V3 HOMEPAGE CORRECTION PLAN FOUNDER-APPROVED / IMPLEMENTATION AUTHORIZATION PENDING**

Portfilo's publishing foundation, editorial/research/writing standards, newsletter signup infrastructure, brand assets, and prior technical foundation remain in place.

The active priority remains: **finish the redesigned Portfilo website before Social Visual System work and before running the four-issue newsletter pilot.**

The founder visually rejected the implemented Homepage v3 composition. That rejected runtime remains in the branch until the next implementation pass, but its rejected design choices have zero forward visual authority. A new focused homepage correction plan is founder-approved and is now the governing target.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

`docs/PROJECT_STATE.md` alone owns the current phase and exact next task.

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

## Branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

`main` remains the release boundary. No merge to `main` without intentional release review.

## Approved current product direction

Founder-approved at this boundary:

- brand: **Portfilo**;
- product category: business and technology media product;
- newsletter/email acquisition is a primary conversion and recurring-reader relationship;
- **News** is the intended current/day-to-day editorial layer;
- **Features** remains the deeper editorial layer internally/currently;
- intended eventual coverage taxonomy remains `Business / Technology / Startup / AI`, but those labels are not homepage header navigation;
- `Building` is removed from the intended public coverage set;
- `Startups` becomes singular `Startup` in the intended public coverage set;
- Portfilo has no geographic product promise;
- Portfilo remains free in v0;
- public newsletter acquisition promises **latest news**, a **7-minute** read, and delivery **three times per week**;
- exact send days/times remain open;
- `briefing` is rejected as public homepage/newsletter acquisition language;
- the four-issue newsletter pilot remains parked until the core site is built.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only. It is not homepage copy or a tagline.

## Homepage information architecture state

The approved homepage header target is now:

`Portfilo | Latest | Stories | Subscribe free`

Rules:

- `Latest` links to the homepage Latest/ticker area;
- `Stories` continues to use the existing `/stories` route;
- topic labels do not appear in the header;
- `Subscribe free` is a header CTA again;
- deeper News / Features / Stories information architecture remains a later task;
- do not create `/news`, delete/redirect `/stories`, or migrate schema/taxonomy during this homepage correction pass.

Current `src/content.config.ts` still uses topics:

`business / technology / startups / ai / building`

Target public taxonomy remains:

`Business / Technology / Startup / AI`

## Current content set

Published on the working branch:

- `src/content/stories/what-actually-makes-starting-a-business-hard.md`

Withdrawn to draft:

- `src/content/stories/build-things-that-make-the-next-thing-easier.md`;
- `src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`;
- `src/content/stories/what-actually-changed.md`.

The published starting-business story remains useful for headline/dek layout testing, but the next homepage correction pass should use a **development image placeholder** for the Feature instead of the current editorial image so geometry can be approved independently of artwork.

## Governing homepage correction plan

Canonical composition record:

`research/homepage-redesign-v1.md`

Founder-approved target:

```text
SHARED CONTENT SHELL
one common left/right alignment for header, hero, Feature area, News, footer-inner
working desktop content width roughly 1280–1360 px
Feature-placeholder left edge is the canonical content edge
only the Latest ticker is full-bleed

HEADER
Portfilo logo
Latest | Stories | Subscribe free

TOP NEWSLETTER SIGNUP
warm paper background
left: approved acquisition headline + support copy
right: signup form
Instrument Sans, not Source Serif 4
hero CTA: Send me the news
compact content/signup relationship

FULL-WIDTH LATEST TICKER
black Latest identifier only
light headline rail

MAIN FEATURE AREA
left: development Feature image placeholder + headline + dek
right: stacked rail
  1. blue contextual newsletter block
  2. square Portfilo brand/editorial visual placeholder

NEWS
plain News heading + existing development hierarchy

BLACK FOOTER ENDCAP
existing compact signup + minimal links
```

Morning Brew and BackScoop remain **composition references only**. The approved lesson from BackScoop is the compact `[content] [signup]` relationship and editorial/signup adjacency, not its color palette, typography, exact wording, or proprietary visual identity.

## Global shell / alignment invariant

This is now a hard homepage implementation invariant.

- Header inner content, top signup inner content, Feature area, News, and footer inner content must use the same shared shell/alignment.
- The preferred canonical left edge is the left edge represented by the Feature image/placeholder in the founder screenshots.
- Working large-desktop content width should be roughly **1280–1360 px**, responsive downward.
- Do not give individual homepage sections independent centering/max-width rules that move their global left or right edges.
- Internal module grids may vary inside the shell.
- **Only the Latest ticker may escape the shell to full viewport width.**

This invariant exists specifically to prevent the repeated indent drift seen in recent rejected passes.

## Header target

Freeze these requirements for the next pass:

- retain the approved Portfilo wordmark/brand asset;
- use the earlier restrained header proportions rather than an undersized logo;
- navigation: `Latest | Stories`;
- add a clear `Subscribe free` CTA button at the right;
- no topic/category labels;
- align header inner content to the same shared shell as the Feature placeholder;
- no unrelated header redesign during implementation.

## Top newsletter signup target

The founder approved returning to the compact BackScoop-like **behavior**, not its visual styling:

`[content] [signup]`

Requirements:

- warm paper / near-white background;
- no hero image;
- no blue full-section background;
- no serif hero experiment;
- **Instrument Sans** is the homepage hero baseline;
- approved headline remains `Get ahead in business and tech in 7 minutes.`;
- approved support copy remains `The latest news on companies, startups, products, markets, AI, and technology. Three times a week, straight to your inbox.`;
- left content and right signup should feel close enough to belong to one compact unit, not float at opposite ends of an oversized container;
- internal desktop relationship roughly 52–55% content / 45–48% signup;
- internal gap roughly 40–56 px on large desktop;
- hero CTA returns to **`Send me the news`**;
- free/unsubscribe note stays immediately associated with the form;
- no `NEWSLETTER` eyebrow;
- no independent hero max-width that breaks the global shell;
- target density should feel publication-like, not spacious SaaS marketing.

The header CTA and hero CTA deliberately serve different roles:

- header: `Subscribe free`;
- hero: `Send me the news`.

## Latest ticker target

Keep the currently approved ticker presentation:

- full viewport width;
- only the `Latest` identifier is near-black/ink;
- headline rail remains light;
- blue category labels may remain;
- no red treatment;
- ticker remains static during this correction pass;
- automatic motion remains a separate post-static approval task.

## Feature + stacked right rail target

The next pass should not depend on the current Feature image.

Left column:

- use a clearly synthetic/development image placeholder for layout QA;
- placeholder should approximate a restrained editorial landscape proportion, around 16:9 or slightly wider;
- do not let the Feature dominate the viewport;
- target Feature/left-column width roughly 64% of the shared module;
- placeholder -> Feature headline -> short dek;
- no Feature eyebrow;
- no `A CLOSER LOOK` title.

Right rail:

- target roughly 32% of the shared module with about 32–40 px gap from the Feature;
- stack two blocks vertically rather than stretching one signup card to Feature height;
- top block is the blue contextual newsletter signup;
- bottom block is a **square brand/editorial visual placeholder**;
- the square placeholder may center the approved **ink/black Portfilo wordmark**;
- do not generate or source a final right-rail image during this layout pass;
- mobile order is Feature -> contextual signup -> square brand visual -> News.

### Contextual newsletter block

Founder-approved headline:

`There's more to it than the headline.`

A support description is **required** beneath it.

The exact one-sentence support wording remains **OPEN / NOT YET APPROVED**. Do not copy BackScoop's supporting sentence and do not invent a new public claim during implementation.

Until that sentence is approved, implementation may use a clearly marked development-only placeholder for the support-copy slot or stop before public-copy completion, but it must not silently omit the structural description slot.

The block then contains:

- email field;
- contextual signup CTA, exact wording to remain within already approved subscription language unless separately reopened;
- no eyebrow spam.

## News and footer

News remains below the Feature/right-rail composition. Do not redesign News unless the new shared shell exposes a concrete defect.

The near-black footer endcap remains approved. Align its inner content to the same shared shell. Do not redesign the footer during this pass unless QA exposes a defect.

## Explicitly rejected recent choices

The following have zero forward homepage authority:

- Source Serif 4 hero headline;
- independently centered/narrowed Feature shell that breaks the shared page edge;
- oversized Feature presentation;
- current Homepage v3 hero composition;
- muted/light-blue full hero background;
- red ticker treatment;
- entire ticker black;
- topic labels in the header;
- removing `Latest | Stories` based on an exploratory question;
- implementation-time changes to global gutters without explicit approval.

## Process invariants for the next implementation

To stop repeated visual regressions:

1. Treat the shared content shell as immutable during section work.
2. Do not change typography, global width, header, ticker, Feature, News, or footer unless the approved task explicitly names that change.
3. Do not introduce a new font, color treatment, max-width, crop, or public copy during implementation merely because it seems better.
4. Only the ticker is allowed to be full-bleed.
5. After implementation, review desktop and mobile screenshots before freezing any changed section.
6. Ticker motion remains blocked until the corrected static homepage is visually approved.

## Current runtime vs approved target

Current runtime still contains the rejected Homepage v3 implementation, including the Source Serif hero, `Subscribe free` hero CTA, independently constrained Feature shell, actual Feature image, and contextual card without its required support-description slot.

Those runtime choices remain only because the new correction plan has **not yet been authorized for implementation**. They are not current design authority.

## Current sequence

1. Post-v3 homepage correction plan — **FOUNDER APPROVED**.
2. Explicit implementation authorization — **ACTIVE NEXT GATE**.
3. Implement only the approved correction contract.
4. Run fresh `npm run check` and `npm run build`.
5. Desktop + mobile visual QA.
6. Correct only visible regressions against the approved contract.
7. Freeze the static homepage.
8. Add ticker motion as a separate narrow pass.
9. Later News/Feature/Stories architecture and taxonomy work.

## Exact next task

### Post-v3 homepage correction implementation authorization gate

No runtime edits are authorized by this design approval alone.

The founder may explicitly authorize:

`Proceed with the approved homepage correction implementation.`

Once authorized, do not expand scope into taxonomy, routes, article surfaces, ticker motion, final imagery generation, or unrelated design work.

## Validation authority

The previous Homepage v3 runtime has not received a fresh recorded `npm run check` / `npm run build` pass after this new plan, and this docs-only decision creates no validation result.

Do not claim the corrected homepage is implemented or validated until the authorized implementation occurs and the relevant commands actually succeed.

## Deployment / release boundary

Cloudflare Pages project remains:

`portfilo-app`

Temporary production URL:

`https://portfilo-app.pages.dev`

Production branch:

`build/portfilo-v0`

Deployment, domain finalization, public newsletter sending, and merge to `main` remain separate explicit gates.
