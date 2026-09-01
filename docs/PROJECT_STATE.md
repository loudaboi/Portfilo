# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Editorial Design Implemented - Typography Verification Pending**

The minimum Portfilo v0 editorial visual system for the existing generic story surface is implemented on `build/portfilo-v0` without changing the validated content architecture.

Browser-based layout and accessibility QA has been performed against a static Chromium render reconstructed from the current story markup and CSS. The required desktop, tablet, and mobile compositions were inspected, horizontal overflow was checked at all required viewports, and one skip-link focus defect found during QA was fixed.

Local Astro validation on 2026-09-02 has now also confirmed that the post-design production build passes, the published fixture generates its expected route, and the draft fixture remains excluded from production output.

This phase is still **not complete** until the final Instrument Sans + Source Serif 4 + IBM Plex Mono combination is verified with all three exact selected webfonts loaded through the actual Astro story page.

Do not begin the homepage until that check passes and this file is updated to **Editorial Design Complete**.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Complete **Portfilo v0 / Editorial Design Typography Verification**.

The remaining work is validation, not redesign. Load the published fixture through Astro with the exact selected webfonts, confirm the fonts are available and visually sound against the long-title fixture, correct only a concrete font-induced layout or legibility failure if one appears, freeze typography, update this file, commit, and stop.

Do not begin homepage design, editorial launch research, newsletter work, analytics, deployment, or another product surface as part of this validation task.

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
- Content Architecture validation previously passed before the design change.

### Editorial design implementation

- Inspected the canonical project, design, editorial, and publishing standards before implementation.
- Audited current editorial/design references for separate strengths rather than cloning one publication, including Rest of World, ProPublica, The Pudding, Quanta, The Guardian Long Read, and The New Yorker.
- Evaluated three typography directions: all-sans editorial; sans headline plus serif reading face; expressive serif display plus sans reading/interface.
- Selected a large grotesk headline/interface direction with a dedicated serif reading face and mono evidence metadata.
- Rejected an expressive serif as the primary headline treatment because the long fixture becomes less controlled and the treatment moves Portfilo toward a more generic contemporary editorial/AI-site visual pattern.
- Implemented a restrained Portfilo masthead on the story surface only.
- Implemented editorial type/topic kicker treatment and optional series treatment.
- Implemented a deliberately oversized, tightly set long headline composition.
- Implemented a dedicated serif reading measure and long-form typography for paragraphs, headings, links, lists, blockquotes, rules, code, and embedded media.
- Implemented a desktop metadata rail that disappears on smaller screens to preserve one clear mobile reading path.
- Implemented methodology as a high-contrast evidence module rather than fine print.
- Implemented correction metadata as a distinct semantic violet notice.
- Implemented responsive layouts for desktop, tablet, and narrow mobile rather than simply shrinking the desktop grid.
- Added a skip link and visible keyboard focus styling.
- Added no framework, UI library, animation library, runtime client script, or package dependency.
- Did not change the story schema, fixtures, homepage, content routing rules, or broader content architecture.

### Editorial design QA completed

- Rendered the current story markup and CSS through headless Chromium using Playwright without adding anything to the repository.
- Inspected the synthetic long-title story composition at `1440x900`, `1280x800`, `768x1024`, `390x844`, and `360x800`.
- Confirmed no horizontal overflow at all five required viewport sizes in the QA render.
- Confirmed the desktop metadata rail is present at wide viewports and intentionally removed at tablet/mobile widths.
- Confirmed the mobile layout becomes a single reading path rather than a squeezed desktop grid.
- Inspected the long headline, dek, story metadata, reading measure, section marker, list treatment, methodology block, correction notice, and mobile stacking.
- Confirmed the skip link becomes visible as the first keyboard focus target.
- Confirmed visible violet keyboard focus styling on links.
- Found that the original skip link scrolled to the body but did not transfer focus to the target.
- Fixed that defect by making `#story-body` programmatically focusable with `tabindex="-1"`.
- Re-tested the fix in headless Chromium: activating the skip link now scrolls to and focuses the `#story-body` element.
- Re-ran horizontal-overflow checks after the accessibility fix; all required viewport widths remain overflow-free.
- No substantive motion exists on the story page; no animation library or reading-blocking motion was introduced.

### Post-design Astro validation

Local Windows PowerShell validation on 2026-09-02 confirmed:

- `npm run build` passes on Astro 7.2.10.
- Astro reports static output mode.
- `/stories/portfilo-content-architecture-test/index.html` is generated during the production build.
- `Test-Path dist/stories/portfilo-content-architecture-test/index.html` returns `True`.
- `Test-Path dist/stories/portfilo-draft-filtering-test/index.html` returns `False`.
- The build produced exactly two public pages in the current repository state: the root route and the published synthetic story fixture.

## Design decisions for the current story surface

### Visual grammar

- Warm off-white paper: `#f4f0e8`.
- Near-black ink: `#171614`.
- Muted neutral text: `#69655e`.
- Sparse semantic violet: `#5635c8`.
- Violet is reserved for evidence/series signals, links and focus, section numbering, and correction treatment.
- Identity comes primarily from typography, grid composition, rules, whitespace, and evidence hierarchy, not cards, gradients, shadows, or decorative effects.

### Typography

Current implementation uses:

- **Instrument Sans** for the Portfilo wordmark, headline, interface, and editorial headings.
- **Source Serif 4** for the dek and long-form reading.
- **IBM Plex Mono** for metadata, dates, source/evidence labels, and technical editorial signals.

Only the roles needed by the current story page were introduced.

Font files are currently loaded from pinned Fontsource CDN WOFF2 URLs with local fallbacks and no package dependency. Self-hosting the final WOFF2 files remains preferable before public launch if a clean binary-asset workflow is available, but it is not required to complete the current design phase.

The QA environment could render IBM Plex Mono exactly because it was locally available. Instrument Sans was not locally installed, and the available serif was Source Serif Pro rather than Source Serif 4, so local metric proxies were used to evaluate layout mechanics. This was sufficient to validate composition and responsive behavior, but it is not sufficient to declare the final typography frozen.

The typography direction remains provisionally selected pending one real-browser pass with the exact webfonts loaded through the actual Astro page.

### Layout

- Twelve-column editorial grid on wide screens.
- Fluid page gutters and type sizing using `clamp()`.
- Headline deliberately offsets from the left metadata plane on desktop.
- Dedicated body measure capped at approximately `42rem`.
- Wider grid remains available for future media/data needs without broadening the current component system.
- Mobile becomes a single reading path, removes the sticky metadata rail, preserves strong headline scale, and stacks evidence modules.

### Evidence and corrections

- Methodology is treated as primary editorial material with a near-black field and a violet evidence label.
- Corrections receive a separate violet rule and soft violet field so a factual correction cannot disappear into ordinary body copy.
- Existing methodology and correction metadata remain authoritative; no new content model was introduced for design convenience.

## In progress

- Final real-browser typography inspection with exact Instrument Sans, Source Serif 4, and IBM Plex Mono loaded through the actual Astro page.

## Not started

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

## Known issues / unresolved decisions

- Exact final webfont rendering remains unverified on the actual Astro page. Instrument Sans and Source Serif 4 were not available in the headless QA runtime, so responsive QA used local metric proxies for those two roles and exact IBM Plex Mono for the mono role.
- Font delivery currently uses pinned Fontsource CDN WOFF2 URLs. Self-host the final WOFF2 assets before public launch if the repository workflow can write and validate binary font assets cleanly.
- No separate Astro type-check package has been added because it is not currently part of the repository and is not required by this phase.
- Final production domain is not required for this phase.
- beehiiv publication/account configuration has not been created yet.
- first editorial series is intentionally not selected.
- no publishable journalism has been researched yet.

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch access | PASS |
| Canonical docs inspected | PASS |
| Current source tree and branch history inspected before editing | PASS |
| Current editorial reference audit | PASS |
| Content architecture preserved | PASS - no schema/routing/content-model change |
| New package dependency | PASS - none added |
| Client-side runtime JavaScript | PASS - none added by story design |
| Static CSS/source structure sanity check | PASS |
| Text contrast for core palette | PASS - ink/paper ~15.9:1; violet/paper ~6.75:1; muted/paper ~5.10:1; light-violet/ink ~8.75:1 |
| Reduced-motion requirement | PASS - no substantive motion introduced |
| Responsive composition QA | PASS WITH QUALIFICATION - headless Chromium static render of current markup/CSS, exact final webfonts not all available |
| `1440x900` horizontal overflow | PASS - `scrollWidth === clientWidth` |
| `1280x800` horizontal overflow | PASS - `scrollWidth === clientWidth` |
| `768x1024` horizontal overflow | PASS - `scrollWidth === clientWidth` |
| `390x844` horizontal overflow | PASS - `scrollWidth === clientWidth` |
| `360x800` horizontal overflow | PASS - `scrollWidth === clientWidth` |
| Methodology treatment visual QA | PASS WITH QUALIFICATION - static Chromium render |
| Correction treatment visual QA | PASS WITH QUALIFICATION - static Chromium render |
| Skip-link visibility/focus | PASS - defect found, fixed, and re-tested |
| Visible link focus treatment | PASS - headless Chromium QA |
| Production build after editorial design | PASS - local Astro build on 2026-09-02 |
| Published fixture generated after editorial design | PASS - generated and `Test-Path` returned `True` |
| Draft fixture excluded after editorial design | PASS - `Test-Path` returned `False` |
| Exact selected fonts render correctly against long fixture | NOT RUN - real Instrument Sans and Source Serif 4 browser load still required |
| Deployment | NOT STARTED |

## Exact next task

Begin and complete:

**Portfilo v0 / Editorial Design Typography Verification**

On `build/portfilo-v0`:

1. Run `npm run dev`.
2. Open `/stories/portfilo-content-architecture-test` in a normal browser.
3. Wait for `document.fonts.ready`, then confirm Instrument Sans, Source Serif 4, and IBM Plex Mono are available to the page.
4. Inspect the deliberately long headline at desktop and narrow mobile width with the exact fonts loaded.
5. Confirm the body remains comfortable to read, the mono metadata remains legible, and no font-induced wrapping, collision, overflow, or hierarchy problem appears.
6. Recheck `document.documentElement.scrollWidth === document.documentElement.clientWidth` once with the exact fonts loaded.
7. Keyboard-test the skip link once on the actual Astro page and confirm focus reaches `#story-body`.
8. If no concrete failure appears, freeze the current typography combination.
9. Update this file to **Editorial Design Complete**, record the exact font/browser result, record the next phase task, commit, and stop.

Do not begin homepage design during the typography verification task.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- note validation results;
- note unresolved issues;
- state one concrete next task.
