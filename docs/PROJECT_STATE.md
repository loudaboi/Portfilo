# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Editorial Design Complete**

The minimum Portfilo v0 editorial visual system for the existing generic story surface is implemented and validated on `build/portfilo-v0` without changing the validated content architecture.

The story surface has now passed production-build validation, published/draft route validation, responsive/browser QA, horizontal-overflow QA, keyboard/focus QA, exact-webfont verification, and final visual review on desktop and mobile.

Typography and the core editorial color system are frozen for v0 unless a concrete implementation problem is discovered later.

The standalone Portfilo logo/brand mark is **not** frozen. A text wordmark remains in the masthead because the first SVG/logo exploration was rejected and removed. Logo exploration is now a separate brand task rather than a reason to keep the story-design phase open.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Begin **Portfilo v0 / Brand Mark Exploration & Lock**.

Create and compare a small number of credible Portfilo logo/mark directions that can work both as a masthead identity and as a square social/avatar mark. Do not wire a new mark into the site until one direction is explicitly approved.

Do not begin homepage design, series pages, newsletter work, analytics, deployment, editorial launch research, or another product surface during the brand-mark task.

## Completed

### Foundation and content architecture

- Portfilo canonical foundation documents established.
- Foundation committed and pushed to GitHub.
- `build/portfilo-v0` branch created.
- Astro 7.2.10 installed.
- Strict TypeScript configuration established.
- Static output established.
- Build-time `stories` Content Collection configured with local Markdown.
- Story schema supports controlled content types, controlled topics, authorship, draft/published state, featured state, publish/update dates, optional series metadata, optional methodology metadata, and structured correction metadata.
- Published stories require `publishedAt`.
- `seriesOrder` is rejected unless `series` is present.
- `updatedAt` is rejected when earlier than `publishedAt`.
- Generic static story route exists at `/stories/[slug]`.
- Production route generation explicitly filters to `status: published`.
- Synthetic published and draft fixtures remain in place.
- Content Architecture validation passed before editorial design work.

### Editorial design implementation

- Inspected the canonical project, design, editorial, and publishing standards before implementation.
- Audited current editorial/design references for separate strengths rather than cloning one publication, including Rest of World, ProPublica, The Pudding, Quanta, The Guardian Long Read, and The New Yorker.
- Evaluated three typography directions: all-sans editorial; sans headline plus serif reading face; expressive serif display plus sans reading/interface.
- Selected a large grotesk headline/interface direction with a dedicated serif reading face and mono evidence metadata.
- Rejected an expressive serif as the primary headline treatment because the long fixture becomes less controlled and the treatment moves Portfilo toward a more generic contemporary editorial/AI-site visual pattern.
- Implemented a restrained Portfilo masthead on the story surface only.
- Centered the desktop masthead strapline relative to the masthead while retaining the intentional left-aligned mobile treatment.
- Implemented editorial type/topic kicker treatment and optional series treatment.
- Implemented a deliberately oversized, tightly set long headline composition.
- Implemented a dedicated serif reading measure and long-form typography for paragraphs, headings, links, lists, blockquotes, rules, code, and embedded media.
- Implemented a desktop metadata rail that disappears on smaller screens to preserve one clear mobile reading path.
- Implemented methodology as a high-contrast evidence module rather than fine print.
- Implemented correction metadata as a semantically separate notice.
- Implemented responsive layouts for desktop, tablet, and narrow mobile rather than simply shrinking the desktop grid.
- Added a skip link and visible keyboard focus styling.
- Added no framework, UI library, animation library, runtime client script, or package dependency.
- Did not change the story schema, fixtures, homepage, content routing rules, or broader content architecture.

### Editorial design QA

- Rendered the current story markup and CSS through headless Chromium using Playwright without adding anything to the repository.
- Inspected the synthetic long-title story composition at `1440x900`, `1280x800`, `768x1024`, `390x844`, and `360x800`.
- Confirmed no horizontal overflow at all five required viewport sizes in browser QA.
- Confirmed the desktop metadata rail is present at wide viewports and intentionally removed at tablet/mobile widths.
- Confirmed the mobile layout becomes a single reading path rather than a squeezed desktop grid.
- Inspected the long headline, dek, story metadata, reading measure, section marker, list treatment, methodology block, correction notice, and mobile stacking.
- Confirmed the skip link becomes visible as the first keyboard focus target.
- Found that the original skip link scrolled to the body but did not transfer focus to the target.
- Fixed that defect by making `#story-body` programmatically focusable with `tabindex="-1"`.
- Re-tested the fix: activating the skip link scrolls to and focuses `#story-body`.
- Confirmed visible keyboard focus styling.
- No substantive motion exists on the story page; no animation library or reading-blocking motion was introduced.

### Post-design Astro validation

Local Windows PowerShell validation on 2026-09-02 confirmed:

- `npm run build` passes on Astro 7.2.10.
- Astro reports static output mode.
- `/stories/portfilo-content-architecture-test/index.html` is generated during the production build.
- `Test-Path dist/stories/portfilo-content-architecture-test/index.html` returns `True`.
- `Test-Path dist/stories/portfilo-draft-filtering-test/index.html` returns `False`.
- The build produced exactly two public pages in the validated repository state: the root route and the published synthetic story fixture.

### Exact webfont and final visual validation

Normal-browser validation against the actual Astro story page on 2026-09-02 confirmed:

- `document.fonts.status` is `loaded`.
- `document.fonts.check('16px "Instrument Sans"')` returns `true`.
- `document.fonts.check('16px "Source Serif 4"')` returns `true`.
- `document.fonts.check('16px "IBM Plex Mono"')` returns `true`.
- Network resource entries show WOFF2 requests for Instrument Sans, Source Serif 4, and IBM Plex Mono.
- `document.documentElement.scrollWidth === document.documentElement.clientWidth` returns `true` with the exact fonts loaded.
- `#story-body` reports `tabIndex: -1`.
- Desktop and narrow-mobile screenshots with the exact fonts loaded were reviewed and passed.
- The selected typography direction is therefore frozen for v0.

### Editorial palette refinement

- The initial violet accent was reviewed and rejected during final visual QA.
- Current editorial/color references were evaluated before selecting a replacement rather than simply following the first cyan suggestion.
- Deep signal blue was selected over cyan/teal because it preserves technical sharpness without pushing the publication toward a SaaS/fintech/dashboard aesthetic.
- Primary editorial signal is frozen at `#0050a4`.
- Methodology/evidence signal on dark fields uses `#8fc7ff`.
- Corrections use a separate deep red `#b42318` with soft correction field `#f6e7e3` so error/correction semantics are not conflated with ordinary editorial navigation.
- Final blue palette was visually reviewed in the actual story page and explicitly passed.

### Rejected brand-mark experiment

- A first SVG experiment that colored parts of the Portfilo wordmark in Philippine blue/red was created and tested.
- The experiment was rejected because it behaved like colored text rather than a credible standalone identity.
- Both experimental SVG assets were deleted from the repository.
- The site reverted to the clean Instrument Sans text wordmark.
- No rejected logo asset remains in the current branch state.

## Frozen design decisions for the current story surface

### Visual grammar

- Warm off-white paper: `#f4f0e8`.
- Near-black ink: `#171614`.
- Muted neutral text: `#69655e`.
- Primary editorial signal blue: `#0050a4`.
- Light evidence blue on dark fields: `#8fc7ff`.
- Correction red: `#b42318`.
- Correction soft field: `#f6e7e3`.
- Signal blue is reserved for editorial navigation/signaling: links, focus, series markers, section numbering, evidence labels, bullets, and related emphasis.
- Red is reserved for correction/error semantics rather than ordinary brand decoration.
- Identity comes primarily from typography, grid composition, rules, whitespace, evidence hierarchy, and eventually a dedicated brand mark, not cards, gradients, shadows, or decorative effects.

### Typography

Frozen for v0:

- **Instrument Sans** for the Portfilo wordmark, headline, interface, and editorial headings.
- **Source Serif 4** for the dek and long-form reading.
- **IBM Plex Mono** for metadata, dates, source/evidence labels, and technical editorial signals.

Only the roles needed by the current story page were introduced.

Font files are currently loaded from pinned Fontsource CDN WOFF2 URLs with local fallbacks and no package dependency. Self-hosting the final WOFF2 files remains preferable before public launch if a clean binary-asset workflow is available, but it is not a blocker for the completed design phase.

### Layout

- Twelve-column editorial grid on wide screens.
- Fluid page gutters and type sizing using `clamp()`.
- Headline deliberately offsets from the left metadata plane on desktop.
- Dedicated body measure capped at approximately `42rem`.
- Wider grid remains available for future media/data needs without broadening the current component system.
- Mobile becomes a single reading path, removes the sticky metadata rail, preserves strong headline scale, and stacks evidence modules.
- Desktop masthead strapline is centered; mobile masthead strapline is left-aligned.

### Evidence and corrections

- Methodology is treated as primary editorial material with a near-black field and light-blue evidence label.
- Corrections receive a separate red rule and pale red field so a factual correction cannot disappear into ordinary body copy.
- Existing methodology and correction metadata remain authoritative; no new content model was introduced for design convenience.

## Unresolved / intentionally deferred

- A standalone Portfilo logo/brand mark is not yet approved. The current masthead uses the clean Instrument Sans text wordmark.
- Font delivery still uses pinned Fontsource CDN WOFF2 URLs; self-host final files before public launch if practical.
- No separate Astro type-check package has been added because it is not currently part of the repository and was not required by this phase.
- Final production domain is not required yet.
- beehiiv publication/account configuration has not been created yet.
- first editorial series is intentionally not selected.
- no publishable journalism has been researched yet.

## Not started

- approved standalone logo/brand mark
- homepage visual design
- series page implementation
- newsletter integration
- analytics
- deployment
- editorial launch research
- first real article

## Frozen decisions for v0

### Product

Portfilo v0 is an editorial publication and publishing system.

It is not an application platform, social network, membership product, jobs platform, or AI product.

### Editorial

- research before prose;
- AI output is not evidence;
- publishable factual claims require source support;
- uncertainty and caveats must be preserved;
- editorial launch series will be selected through a separate research project after the publishing system exists.

### Technical

- Astro + TypeScript
- build-time Content Collections
- local Markdown stories
- custom CSS
- minimal client-side JavaScript
- static deployment first
- Cloudflare Pages deployment
- Cloudflare Web Analytics
- beehiiv newsletter infrastructure
- GitHub source control

These remain frozen for v0 unless a concrete blocker is discovered.

### Content architecture

- one `stories` collection for v0;
- no separate author collection;
- no separate series collection yet;
- story filenames provide the URL slug;
- public story URLs use `/stories/[slug]`;
- drafts remain in the collection for validation/authoring but are excluded from public static paths;
- series remains optional story metadata until real editorial requirements justify normalization.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch access | PASS |
| Canonical docs inspected | PASS |
| Current editorial reference audit | PASS |
| Content architecture preserved | PASS - no schema/routing/content-model change |
| New package dependency | PASS - none added |
| Client-side runtime JavaScript | PASS - none added by story design |
| Static CSS/source structure sanity check | PASS |
| Core palette contrast | PASS |
| Reduced-motion requirement | PASS - no substantive motion introduced |
| Responsive composition QA | PASS |
| `1440x900` horizontal overflow | PASS |
| `1280x800` horizontal overflow | PASS |
| `768x1024` horizontal overflow | PASS |
| `390x844` horizontal overflow | PASS |
| `360x800` horizontal overflow | PASS |
| Methodology treatment visual QA | PASS |
| Correction treatment visual QA | PASS |
| Skip-link visibility/focus | PASS - defect found, fixed, and re-tested |
| Visible link focus treatment | PASS |
| Production build after editorial design | PASS |
| Published fixture generated after editorial design | PASS |
| Draft fixture excluded after editorial design | PASS |
| Exact selected fonts loaded | PASS |
| Exact selected fonts render correctly against long fixture | PASS |
| Final signal-blue palette visual review | PASS |
| Standalone logo/brand mark | NOT STARTED - previous experiment rejected and removed |
| Deployment | NOT STARTED |

## Exact next task

Begin and complete:

**Portfilo v0 / Brand Mark Exploration & Lock**

On `build/portfilo-v0`:

1. Treat the current masthead text wordmark as the baseline, not as a finished standalone logo.
2. Develop a small number of genuinely different brand-mark directions rather than recoloring the existing wordmark.
3. Each direction must work in both horizontal masthead use and a compact square/avatar context.
4. Keep the frozen editorial system intact: Instrument Sans / Source Serif 4 / IBM Plex Mono, warm paper, near-black ink, and signal blue `#0050a4`.
5. Filipino cultural confidence may inform the mark, but avoid literal flag graphics, patriotic clip-art, generic sun/star symbolism, or government-portal aesthetics unless there is a strong design rationale.
6. Present the directions for visual approval before modifying the site header.
7. After one direction is approved, implement it as clean reusable vector assets, validate it at small and large sizes, update the masthead only if the approved mark is clearly stronger than the text baseline, update this file, commit, and stop.

Do not begin homepage design during the brand-mark task.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- note validation results;
- note unresolved issues;
- state one concrete next task.
