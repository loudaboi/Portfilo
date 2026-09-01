# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Editorial Design Implemented — Validation Pending**

The minimum Portfilo v0 editorial visual system for the existing generic story surface has been implemented on `build/portfilo-v0` without changing the validated content architecture.

This phase is **not complete** until the post-change production build passes and the story is inspected in a real browser with the selected fonts across desktop and mobile viewports.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Complete **Portfilo v0 / Editorial Design QA & Font Freeze**.

Validate the implemented story surface, correct only concrete design or rendering problems that QA exposes, freeze the typography decision if it survives browser inspection, update this file with final results, and stop at the phase boundary.

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
- The Content Architecture phase was previously validated locally before this design change: production build passed, the published fixture generated, and the draft fixture remained absent from production output.

### Editorial design implementation

- Inspected the canonical project, design, editorial, and publishing standards before implementation.
- Audited current editorial/design references for separate strengths rather than cloning one publication, including Rest of World, ProPublica, The Pudding, Quanta, The Guardian Long Read, and The New Yorker.
- Evaluated three typography directions: all-sans editorial; sans headline plus serif reading face; expressive serif display plus sans reading/interface.
- Selected a large grotesk headline/interface direction with a dedicated serif reading face and mono evidence metadata.
- Rejected an expressive serif as the primary headline treatment because the long fixture becomes less controlled and the treatment moves Portfilo toward an increasingly generic contemporary editorial/AI-site visual pattern.
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

Font files are currently loaded from pinned Fontsource CDN WOFF2 URLs with local fallbacks and no package dependency. Self-hosting the final WOFF2 files remains preferable before public launch if a clean binary-asset workflow is available, but it is not required to perform the current visual QA.

The typography selection is provisional until the actual fixture is inspected with the real fonts loaded in a browser.

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

- Post-change production build validation.
- Real-browser typography inspection with the selected fonts loaded.
- Desktop/tablet/mobile visual QA.
- Horizontal-overflow check.
- Browser-level keyboard/focus QA.

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

- The post-design production build has not been run in the current remote execution environment because the repository dependencies are not locally installed and outbound package/repository network access is unavailable there.
- The selected font combination has not yet been visually inspected against the long fixture with the real webfonts loaded in a functioning browser. Typography is therefore not fully frozen.
- Final responsive QA, horizontal-overflow QA, and browser-level keyboard/focus QA remain local validation requirements.
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
| Content architecture changed | PASS — no schema/routing/content-model change |
| New package dependency | PASS — none added |
| Client-side runtime JavaScript | PASS — none added by story design |
| Static CSS structure sanity check | PASS |
| Text contrast for core palette | PASS — ink/paper ~15.9:1; violet/paper ~6.75:1; muted/paper ~5.10:1; light-violet/ink ~8.75:1 |
| Reduced-motion requirement | PASS — no motion introduced |
| Visible focus treatment present | PASS — static source inspection; browser QA pending |
| Methodology treatment present | PASS — static source inspection; visual QA pending |
| Correction treatment present | PASS — static source inspection; visual QA pending |
| Production build after editorial design | NOT RUN — local validation required |
| Published fixture generated after editorial design | NOT RUN — local validation required |
| Draft fixture excluded after editorial design | NOT RUN — local validation required |
| Selected fonts render correctly against long fixture | NOT RUN — local browser validation required |
| Responsive visual QA | NOT RUN — local browser validation required |
| No horizontal overflow | NOT RUN — local browser validation required |
| Browser keyboard/focus QA | NOT RUN — local browser validation required |
| Deployment | NOT STARTED |

## Exact next task

Begin and complete:

**Portfilo v0 / Editorial Design QA & Font Freeze**

On `build/portfilo-v0`:

1. Pull the latest branch and install from the existing lockfile with `npm ci`.
2. Run `npm run build`.
3. Confirm `dist/stories/portfilo-content-architecture-test/index.html` exists.
4. Confirm `dist/stories/portfilo-draft-filtering-test/index.html` does not exist.
5. Run `npm run dev` and inspect the published fixture with real fonts loaded.
6. Inspect at minimum: `1440x900`, `1280x800`, `768x1024`, `390x844`, and `360x800`.
7. Check the deliberately long headline, dek, metadata, body measure, section heading, list, methodology, correction notice, and mobile stacking.
8. Check `document.documentElement.scrollWidth === document.documentElement.clientWidth` at each representative viewport.
9. Navigate the page by keyboard and verify the skip link and visible link focus state.
10. Confirm the font requests load successfully and compare the real rendering against the intended Instrument Sans + Source Serif 4 + IBM Plex Mono direction.
11. If QA exposes a concrete problem, change only what is necessary on the story surface and rerun the checks.
12. If all required checks pass, update this file to **Editorial Design Complete**, record exact validation results, freeze or revise the font decision based on actual rendering, record the next phase task, commit, and stop.

Do not begin homepage design during the QA task.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- note validation results;
- note unresolved issues;
- state one concrete next task.
