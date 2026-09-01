# Portfilo Project State

_Last updated: 2026-09-02_

## Current phase

**Portfilo v0 / Wordmark Exploration & Lock**

The Editorial Design phase remains complete and frozen. The previously approved provisional symbol has been retired from active use after visual review showed that the symbol and wordmark did not form a coherent identity and the symbol remained too close to its Pinterest reference.

The story surface is restored to the clean text-only `Portfilo` masthead baseline while wordmark exploration is in progress. Homepage design has not started.

## Current branch

Use `build/portfilo-v0` for the v0 application build.

Do not merge to `main` unless intentionally reviewed as part of a later release decision.

## Current objective

Develop and compare a small number of credible **wordmark-first Portfilo identity directions**. The wordmark itself should carry the identity; do not introduce another unrelated standalone logo.

Present the directions for explicit approval before implementing a final wordmark in the application.

Do not begin homepage design, series pages, newsletter integration, analytics, deployment, editorial launch research, or another product surface during this wordmark task.

## Current brand decision

### Retired

The forward-slanted two-part provisional `P` symbol is retired from active Portfilo use.

Reasons:

- it did not pair naturally with the Portfilo wordmark;
- the combined lockup felt like two unrelated identities;
- the symbol remained visually close to the user-provided Pinterest reference;
- further symbol exploration was not worth delaying v0.

The former SVG mark/avatar assets are removed from the active branch rather than carried forward as dormant production identity assets.

### Current baseline

Until a new wordmark is explicitly approved:

- the masthead uses text-only `Portfilo`;
- Instrument Sans remains the temporary application wordmark because it is already part of the frozen editorial type system;
- no standalone logo is active;
- a future social/avatar treatment should be derived from the approved wordmark, most likely a `P` or `PF` monogram from the same lettering system.

### Positioning / strapline

`Practical intelligence for ambitious Filipinos` remains Portfilo's current positioning line and masthead strapline.

It is **not permanently frozen as the final public tagline**. The underlying positioning is strong and remains part of the product thesis, but the exact public-facing strapline may be refined later through a separate brand/editorial decision.

## Wordmark exploration brief

The approved direction for this phase is a **wordmark-first identity** with more personality than the current plain Instrument Sans treatment.

The visual reference supplied by the user points toward:

- forward motion or controlled slant;
- compact, confident proportions;
- tight optical spacing;
- custom-feeling lowercase forms;
- a contemporary creative-studio/editorial character.

Do not copy the reference lettering. Portfilo should retain editorial credibility and avoid becoming sportswear, gaming, fintech, or generic tech branding.

Each finalist should be judged on:

1. recognizability as `Portfilo`;
2. editorial credibility;
3. distinctiveness without gimmickry;
4. strength in one color;
5. masthead legibility at small sizes;
6. compatibility with the frozen story typography and signal-blue system;
7. whether a coherent compact `P` or `PF` social treatment can be derived from the same lettering;
8. licensing practicality for a commercial v0 publication.

## Researched type directions

Primary foundry/source research for this exploration identified several credible families:

- **Instrument Sans** — open-source OFL 1.1; variable width/weight/italic axes and multiple stylistic sets. Strongest low-cost basis for a tailored custom wordmark.
- **Founders Grotesk** — commercial grotesk with dedicated italics and strong headline spacing; credible and editorial, but requires licensing.
- **ABC Diatype** — commercial warm/sharp neo-grotesk with italics; contemporary and screen-oriented without being overtly technological.
- **Scto Grotesk A/B** — commercial grotesk with animated, reader-friendly details and italics; distinctive while remaining matter-of-fact.
- **PP Editorial Sans** — commercial sans with true italics and more expressive editorial character; useful as a higher-personality comparison.
- **PP Neue Montreal** — commercial grotesk with italics; clean and capable but more neutral and widely recognizable, so it is a secondary reference rather than the leading choice.

No commercial font is approved or added to the repository at this stage.

## Exploration directions to present

Develop four visual wordmark studies:

1. **Tailored Instrument** — use Instrument Sans italic/slant and width variation as the base, then refine spacing and selected forms so the result feels custom while preserving an open-license path.
2. **Forward Grotesk** — compact medium/semibold italic grotesk treatment informed by Founders Grotesk / Scto Grotesk proportions; confident and editorial rather than sporty.
3. **Sharp Editorial Italic** — a more expressive slanted sans direction informed by PP Editorial Sans / Diatype, with sharper rhythm and more visible personality.
4. **Controlled Roman** — a non-italic but tightly spaced custom grotesk option to test whether Portfilo needs literal slant at all, or whether forward energy can come from cuts, spacing, and letter construction.

These are design directions, not approvals of specific commercial typefaces.

## Completed before this phase

### Foundation and content architecture

- Astro 7.2.10 with TypeScript.
- Static output.
- One build-time `stories` Content Collection using local Markdown.
- Controlled content types and topics.
- Authorship, draft/published state, featured state, publish/update dates, optional series metadata, methodology metadata, and structured correction metadata.
- Generic static story route at `/stories/[slug]`.
- Production route generation filters to `status: published`.
- Synthetic published and draft fixtures remain in place.

### Editorial design

The story surface remains frozen for v0 unless a concrete implementation problem is discovered:

- Instrument Sans for headline/interface/editorial headings;
- Source Serif 4 for dek and long-form reading;
- IBM Plex Mono for metadata and technical/editorial labels;
- warm paper `#f4f0e8`;
- near-black ink `#171614`;
- muted text `#69655e`;
- signal blue `#0050a4`;
- evidence blue on dark fields `#8fc7ff`;
- correction red `#b42318`;
- correction soft field `#f6e7e3`;
- twelve-column wide-screen editorial grid;
- dedicated body measure around `42rem`;
- desktop metadata rail and single-path mobile reading layout;
- methodology and correction treatments;
- skip link and visible keyboard focus treatment.

Previous editorial-design validation confirmed production build success, published-route generation, draft-route exclusion, responsive/browser QA, no horizontal overflow at required viewports, keyboard/focus behavior, exact selected webfont loading, and final signal-blue visual review.

## Technical decisions frozen for v0

- Astro + TypeScript
- build-time Content Collections
- local Markdown stories
- custom CSS
- minimal client-side JavaScript
- static deployment first
- Cloudflare Pages
- Cloudflare Web Analytics
- beehiiv newsletter infrastructure
- GitHub source control

## Validation status

| Check | Status |
|---|---|
| Repository access | PASS |
| `build/portfilo-v0` branch access | PASS |
| Homepage untouched | PASS |
| Provisional symbol retired from masthead | PASS — source restored to text-only baseline |
| Provisional symbol/avatar assets removed | PASS |
| Content architecture changed | PASS — no schema/routing/content-model change |
| New package dependency | PASS — none added |
| Commercial font added | PASS — none added |
| Wordmark research | PASS — primary foundry/source review completed |
| Final wordmark | PENDING — requires explicit user approval |
| Production build after symbol retirement | PENDING — local validation required |

## Exact next task

Present the four wordmark studies for visual approval. Each study should show:

- the `Portfilo` wordmark alone;
- masthead-scale use;
- black on warm paper;
- reversed use on near-black;
- a compact `P` or `PF` treatment derived from the same lettering logic;
- a brief assessment of strengths, risks, and licensing path.

Do not implement a final wordmark until one direction is explicitly approved.

Do not begin homepage design during this task.

## Phase handoff rule

Before moving to a new phase or fresh chat:

- update this file;
- commit stable work;
- record validation results;
- record unresolved issues;
- state one concrete next task.
