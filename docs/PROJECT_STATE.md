# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Editorial Design Implemented - Final Validation Pending**

The minimum Portfilo v0 editorial visual system for the existing generic story surface is implemented on `build/portfilo-v0` without changing the validated content architecture.

Browser-based layout and accessibility QA has now been performed against a static render reconstructed from the current story markup and CSS. The required desktop, tablet, and mobile compositions were inspected, horizontal overflow was checked at all required viewports, and one skip-link focus defect found during QA was fixed.

This phase is still **not complete** because two required checks cannot be truthfully completed in the current execution environment:

1. the post-design Astro production build has not been run;
2. the final Instrument Sans + Source Serif 4 + IBM Plex Mono combination has not been rendered with all three exact selected webfonts loaded in the browser.

Do not begin the homepage until those checks pass and this file is updated to **Editorial Design Complete**.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Complete **Portfilo v0 / Editorial Design Final Validation**.

The remaining work is validation, not redesign. Run the actual Astro production build, verify published/draft route generation, load the published fixture through Astro with the exact selected webfonts, correct only concrete failures if any appear, then freeze typography and close the phase.

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
- The Content Architecture phase was previously validated locally before the design change: production build passed, the published fixture generated, and the draft fixture remained absent from production output.

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

### Editorial design QA completed in current environment

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

The QA environment could render IBM Plex Mono exactly because it was locally available. Instrument Sans was not locally installed, and the available serif was Source Serif Pro rather than Source Serif 4, so local metric proxies were used to evaluate layout mechanics. This is sufficient to validate the composition and responsive behavior, but it is not sufficient to declare the final typography frozen.

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

- Post-design Astro production build validation.
- Published fixture generation check after the design change.
- Draft fixture exclusion check after the design change.
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

- The post-design production build has not been run in the current execution environment. The repository cannot be cloned there because outbound GitHub/DNS access is unavailable, Astro is not globally installed, and the local npm cache does not contain the required Astro package. This is an environment limitation, not a passing build result.
- Exact final webfont rendering remains unverified. Instrument Sans is not installed in the QA runtime and Source Serif 4 is not available there, so the browser QA used local metric proxies for those two roles and exact IBM Plex Mono for the mono role.
- Because the actual Astro build is still unrun, post-design production route generation and draft exclusion cannot be marked as passing even though the underlying filtering implementation is unchanged.
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
| Production build after editorial design | NOT RUN - actual Astro environment required |
| Published fixture generated after editorial design | NOT RUN - actual Astro build required |
| Draft fixture excluded after editorial design | NOT RUN - actual Astro build required |
| Exact selected fonts render correctly against long fixture | NOT RUN - real Instrument Sans and Source Serif 4 browser load still required |
| Deployment | NOT STARTED |

## Exact next task

Begin and complete:

**Portfilo v0 / Editorial Design Final Validation**

On `build/portfilo-v0`:

1. Pull the latest branch and install from the existing lockfile with `npm ci`.
2. Run `npm run build`.
3. Confirm `dist/stories/portfilo-content-architecture-test/index.html` exists.
4. Confirm `dist/stories/portfilo-draft-filtering-test/index.html` does not exist.
5. Run `npm run dev` and open `/stories/portfilo-content-architecture-test`.
6. Confirm Instrument Sans, Source Serif 4, and IBM Plex Mono requests load successfully and the browser is actually using those font families.
7. Recheck the long headline at `1440x900`, `768x1024`, `390x844`, and `360x800`. The layout mechanics have already passed proxy-font QA, so revise only if the exact fonts expose a concrete wrapping, collision, measure, or legibility problem.
8. Recheck `document.documentElement.scrollWidth === document.documentElement.clientWidth` after the exact fonts load.
9. Keyboard-test the skip link once on the actual Astro page and confirm focus reaches `#story-body`.
10. If all required checks pass, update this file to **Editorial Design Complete**, record exact build/route/font results, freeze the typography decision, record the next phase task, commit, and stop.

Do not begin homepage design during the final validation task.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- note validation results;
- note unresolved issues;
- state one concrete next task.
