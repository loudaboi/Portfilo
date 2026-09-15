# Portfilo Project State

_Last updated: 2026-09-15_

## Current phase

**PORTFILO V1 HERO LAYOUT STORYBOARD SELECTION**

## Founder-approved current direction

**Responsive Identity**

Current creative authority:

`docs/V1_CREATIVE_DIRECTION.md`

The Portfilo identity should behave like software: responsive, stateful, and capable of changing across Work, Services, Hustle, Journal, and studio contexts while remaining recognizably Portfilo.

## Product decisions retained

Still current:

- Portfilo is a software design and development studio with supporting editorial surfaces;
- primary public architecture is `Work / Services / Hustle / Journal / Contact`;
- newsletter remains embedded distribution/acquisition;
- News and Why remain retired;
- **Problem-led software** remains the approved positioning territory;
- AI remains a capability, not the company category;
- current homepage copy remains approved copy authority unless explicitly reopened;
- Work remains the primary proof surface;
- no fabricated Work/Hustle evidence.

## Design reset

Founder-rendered review rejected the previous visual system.

Superseded/rejected as current design authority:

- Obsidian Precision;
- `docs/V1_DESIGN_DIRECTION.md`;
- `docs/V1_DESIGN_SYSTEM.md`;
- `docs/V1_HOMEPAGE_COMPOSITION.md`;
- the Phase 3C visual composition;
- the Phase 3D rendered homepage as a design/release candidate;
- the current wordmark geometry as a required foundation;
- the current favicon/symbol as a required foundation;
- the old v1 design implementation skill.

The rejected homepage may remain temporarily in runtime while replacement identity and prototypes are developed. Do not refine it as the future design.

## Why the reset happened

The rendered homepage was technically valid but visually failed the intended standard.

Observed failure:

- generic dark creative-tech composition;
- oversized white sans-serif typography carrying too much of the identity;
- flat black/gray hierarchy;
- insufficient visual authorship;
- weak signature behavior;
- reveal animation mistaken for meaningful motion;
- no convincing relationship between identity and software.

This is a creative-direction failure, not a small Phase 3E QA defect.

## Branches

Working branch:

`build/portfilo-v1`

Release boundary:

`main`

No merge or deployment is authorized.

## Runtime baseline

Last validated runtime before the creative reset:

`ffdfbbef0340d412feb5c6f8d41468b05ae99af9`

GitHub Actions run:

`34807816064`

Result:

**PASS**

The runtime remains useful engineering scaffolding, but its homepage visual design is rejected.

## Approved identity

Current identity authority:

`docs/V1_IDENTITY_SYSTEM.md`

Founder-approved direction:

**Sharp Ornamental 01**

Locked at the creative level:

- independent sharp ornamental emblem;
- restrained premium wordmark;
- monochrome-first application;
- transparent-background emblem favicon;
- horizontal and stacked lockups;
- optional neutral silver treatment.

The generated identity study is reference artwork only. Production vector geometry and exact wordmark resolution remain to be finalized.

## Design process

Use:

`idea -> identity -> signature behavior -> prototype -> content/media -> composition -> system -> implementation`

Do not return to:

`tokens -> grid -> sections -> CSS -> reveal motion`

## Vector production status

Production candidates now exist under:

`research/identity/sharp-ornamental-01/`

Completed for review:

- symmetric emblem master SVG;
- transparent-background favicon candidate;
- 16px / 24px / 32px / 48px small-size validation;
- three vector wordmark candidates;
- production notes.

Current recommendation:

**Wordmark B — Noto Serif Display Regular**

No runtime brand assets have been replaced.

## Final identity asset status

Founder-approved production identity:

**Sharp Ornamental 01 + PORTFILO all-caps Noto Serif Display**

Approved production assets:

`research/identity/sharp-ornamental-01/final/`

- emblem;
- all-caps wordmark;
- horizontal lockup;
- stacked lockup;
- transparent adaptive favicon.

## Runtime brand replacement

**COMPLETE / VALIDATED**

Current validated branch state:

`a32c093d8b55be9a49dad2ddd1d6ef430f0ba092`

GitHub Actions run:

`34864948342`

Result:

**PASS**

Runtime identity now uses:

- approved `PORTFILO` all-caps wordmark geometry in shared header/footer;
- approved transparent Sharp Ornamental 01 favicon;
- Sharp Ornamental 01 structured-data organization emblem.

The all-caps wordmark replacement passed CI together with the current authority updates.

## Homepage design reset

The Aperture visual direction is **founder-rejected** after prototype review.

The prior Aperture, Relay, and Cut Scene concepts have no current homepage design authority.

The failure mode is now treated as a process problem as well as a visual problem: broad image generation repeatedly translated research into generic agency/editorial website conventions.

Current homepage generation authority:

`docs/V1_HOMEPAGE_GENERATION_PLAN.md`

Key process rule:

**Do not ask image generation to render the complete website screen.**

Exact identity, typography, copy, spacing, navigation, and layout must be built with real SVG + HTML/CSS or an exact design tool. Generative imagery is optional and limited to non-text visual material.

## Brand asset delivery status

A durable brand package now exists under:

`brand/`

It includes:

- currentColor SVG masters;
- fixed ink SVG exports;
- fixed off-white SVG exports;
- approved transparent adaptive favicon.

A 33-file raster/export delivery pack was regenerated after the all-caps wordmark approval.

## Generation plan status

`docs/V1_HOMEPAGE_GENERATION_PLAN.md`

**FOUNDER-APPROVED**

## Website typography

Current authority:

`docs/V1_TYPOGRAPHY_DIRECTION.md`

Status:

**REOPENED FOR HERO REVIEW**

Mona Sans is no longer locked as the hero display solution after rendered review.

The Noto Serif Display Portfilo wordmark remains independent and approved.

## Structural hero wireframes

Founder-selected direction:

**A — Perimeter Field**

The selection locks the structural idea only. It does not lock final spacing, color, motion, or visual material.

## Wordmark refinement

**COMPLETE / FOUNDER-APPROVED / ADOPTED**

Current wordmark:

**PORTFILO / Noto Serif Display SemiCondensed Medium / ALL CAPS**

The exact production geometry and lockups are now adopted in:

- canonical final identity assets;
- repository brand masters;
- fixed ink/off-white exports;
- runtime shared wordmark asset.

Sharp Ornamental 01 remains unchanged.

## Exact hero prototype

The first polished Perimeter Field prototype exposed two incorrect assumptions and is rejected as visual authority:

- the wordmark does not belong in homepage/header chrome;
- the homepage should not be light-first.

Founder-approved corrected contract:

- 1440 × 900 desktop reference;
- selected Perimeter Field structure;
- **dark-first near-black environment**;
- **Sharp Ornamental 01 emblem at upper-left perimeter**;
- **approved `PORTFILO` wordmark at upper-right perimeter**;
- Mona Sans;
- exact approved hero copy;
- exact navigation labels;
- no fake Work;
- no generated imagery;
- no CTA;
- no below-fold sections.

## Hero visual diagnosis

The central-object visual experiments are **founder-rejected**:

- Responsive geometric field;
- Sculptural graphic object;
- System-resolution visual.

The rejection exposed the actual requirement:

**the hero visual should be considered at the full-viewport level, not as a decorative object placed in the middle of a dark layout.**

Deep reference/implementation research is recorded at:

`research/design/v1-fullscreen-hero-reference-research.md`

Key outcome:

- art direction must be selected before rendering technology;
- authored video, WebGL, Three.js, canvas, and GSAP are implementation options rather than directions;
- Perimeter Field remains useful evidence but is no longer protected if a stronger full-screen visual requires another composition;
- current technical recommendation, if the art direction supports it, is authored full-screen motion + lightweight shader + semantic HTML/GSAP interface.

## Full-screen hero art direction

Founder-selected:

**B — Assembly**

Current selection record:

`research/design/v1-fullscreen-hero-art-directions.md`

Assembly means one full-screen visual composition whose large layers begin misregistered, then resolve into a coherent hero. The loader is the first Assembly event, not a separate splash screen.

This selection does not lock final artwork, layer geometry, or implementation technology.

## Assembly motion outcome

**FOUNDER-APPROVED**

The loader → unresolved layers → alignment → resolved hero behavior passed founder review.

The motion language remains active authority.

## Latest founder visual review

Current review record:

`research/design/v1-hero-visual-review-reset.md`

Still strong:

- Sharp Ornamental 01 emblem;
- approved PORTFILO wordmark;
- Assembly loader-to-resolved-hero behavior as an interaction idea.

Reopened / rejected:

- Mona Sans as a locked hero display treatment;
- support paragraph placement/treatment;
- Crossfield;
- Refraction;
- Strata;
- the latest total hero composition.

## Latest hero review

The Stateful Typeset / Constraint Fit specimen is **founder-rejected** as the current hero direction.

Rejected:

- stepped headline composition as the primary visual event;
- Bricolage Grotesque as hero display typography;
- typography-only hero strategy.

Onest has no current typography authority.

The review established a stronger direction:

**restrained static atmosphere + excellent identity/typography + high-quality motion/transitions**

4WIDE remains useful motion/experience evidence, but its Three.js/WebGL background complexity is not a Portfilo requirement.

MERSI is especially relevant for:

- clean shared-element transitions;
- project media acting as transition material;
- GSAP Flip layout continuity;
- deliberate masks and page transitions.

Current research authority:

`research/design/v1-background-atmosphere-motion-language.md`

## Latest background / process review

The isolated **Graphite Exposure** specimen is **founder-rejected**.

Why:

- it read as generic dark-gradient AI design;
- the background-only gate was not meaningful enough to judge the hero;
- the background was incorrectly treated as the design concept rather than a supporting surface.

Do not tune or revive Graphite Exposure.

Founder clarification:

- use the grainy dark-gradient treatment on **OpenAI Business** as a background/material reference only, not as a structural reference;
- the resting surface may remain relatively simple;
- motion, transitions, continuity, and selective pointer response should carry more of the authored experience;
- MERSI, 4WIDE, Dash, and MetaLab remain useful references for those behaviors;
- a more authored MetaLab-like graphic-state direction is a fallback if the restrained resting frame cannot carry enough identity.

Current research record:

`research/design/v1-background-atmosphere-motion-language.md`

## Visual-direction process

A new mandatory visual methodology now exists:

`skills/portfilo-visual-direction/SKILL.md`

Research provenance:

`research/design/v1-impeccable-method-study.md`

The skill was informed by Impeccable's process strengths but is Portfilo-specific and does not import Impeccable as a dependency.

It requires:

- current authority before visual invention;
- preserve / extend / replace classification;
- mechanism-first reference extraction;
- one visual thesis;
- minimum meaningful prototype;
- Portfilo-specific AI-slop red team;
- purposeful motion thesis;
- rendered critique before founder review;
- hard rejection protocol.

## Typography

Hero typography remains open.

Bricolage Grotesque is rejected for the hero.

Mona Sans remains reopened and unprotected.

Do not run another disconnected font specimen merely to choose a font.

Hero typography should be evaluated inside the selected complete first-viewport direction.

The approved `PORTFILO` wordmark remains unchanged.

## Reference translation outcome

Current record:

`research/design/v1-hero-reference-translation-and-directions.md`

Mechanism roles are now explicit:

- OpenAI Business — quiet grainy background/material only;
- MERSI — continuity, masks, shared-media transitions;
- 4WIDE — deliberate interaction states and motion quality;
- Dash — concept-bound pointer/material response;
- MetaLab — interaction-triggered alternate visual worlds.

Two complete first-viewport directions are ready:

1. **A — Quiet Surface / Active Interface** — recommended;
2. **B — Context Frames** — more ambitious MetaLab-derived challenger.

Both retain the approved identity, copy, product architecture, and no-fake-evidence constraints.

Hero typography remains open and will be selected inside the chosen direction.

## Founder-selected hero direction

**A — Quiet Surface / Active Interface**

Current direction record:

`research/design/v1-hero-reference-translation-and-directions.md`

Selected thesis:

**A quiet grainy dark surface keeps Portfilo calm at rest, while masks, spatial continuity, and subtle material response make the interface feel alive when the visitor acts.**

Retained implementation territory:

- neutral near-black / graphite grainy resting surface;
- Sharp Ornamental 01 + approved PORTFILO wordmark;
- restrained hero typography;
- approved headline and support copy;
- compact stable navigation;
- GSAP / masks / clip-path / Flip before WebGL;
- subtle pointer response tied to material, not cursor gimmicks;
- no constant background spectacle.

Direction B — Context Frames remains future expansion evidence only.

## Typography + composition research outcome

Current record:

`research/design/v1-quiet-surface-hero-typography-composition.md`

Three systems remain:

1. **Schibsted Grotesk** — recommended;
2. **Instrument Sans** — control candidate;
3. **Hanken Grotesk** — restrained alternate.

Recommended resting composition:

- compact identity lockup upper-left;
- primary navigation upper-right;
- two-line headline in the lower half;
- support copy directly beneath the headline as part of the same group;
- quiet right side;
- grainy dark surface with no hero object;
- later motion uses clean clipping / continuity boundaries.

## Latest founder rejection

The Quiet Surface static hero prototype is **founder-rejected**.

Rejected:

- blue / blue-black tint;
- weak/invisible grain treatment;
- generic top-nav + large left headline + empty right-side composition;
- treating motion and pointer behavior as post-static decoration;
- using the static frame as if the design could be judged without the interaction language.

Do not tune or cosmetically revise that prototype.

Retain:

- Sharp Ornamental 01;
- approved PORTFILO wordmark;
- approved homepage copy;
- dark-first direction;
- **neutral black / graphite resting surface**;
- **visible refined grain** as material reference from OpenAI Business;
- MERSI / 4WIDE / Dash / MetaLab as mechanism references;
- motion, transitions, and pointer response as core design material rather than polish.

Schibsted Grotesk is reopened. The failed prototype does not prove or disprove the family in another materially different composition.

## Identity composition correction

For the homepage hero, the combined horizontal emblem + wordmark lockup is **founder-rejected**.

Do not join the two approved assets into one conventional header logo.

Use them as independent compositional elements:

- Sharp Ornamental 01 may act as the compact interface identity;
- PORTFILO wordmark may appear separately where the composition benefits;
- their relationship comes from placement, scale, state, and motion.

This does not reject either asset individually.

## Founder-approved hero experience contract

Current authority:

`docs/V1_HERO_EXPERIENCE_CONTRACT.md`

Locked hero fundamentals:

- black / near-black / graphite / neutral silver / off-white only;
- no blue / teal / purple or other signal color;
- grain must be clearly visible and refined;
- OpenAI Business is a material reference only;
- emblem and wordmark remain independent;
- combined horizontal lockup is rejected for the hero;
- giant-left-headline agency topology is rejected;
- motion / pointer / navigation / first-scroll behavior are part of the design itself;
- typography remains open until storyboard approval.

## Four-state storyboard

Current review record:

`research/design/v1-hero-four-state-storyboard.md`

States:

1. Rest;
2. Pointer;
3. Navigation / Selection;
4. First Scroll.

Current proposed identity behavior:

- emblem remains the compact stable anchor;
- wordmark carries more visual presence;
- wordmark becomes the primary first-scroll continuity object;
- pointer affects the neutral material field rather than the cursor;
- navigation selection reorganizes the identity field without fake media.

## Layout storyboard comparison

Research:

`research/design/v1-hero-layout-architecture-study.md`

Comparison review:

`research/design/v1-hero-layout-storyboard-comparison.md`

Candidates:

- **B — Split Tension** — lead / recommended;
- **A — Identity Spine** — challenger;
- Context Field remains parked.

Important storyboard notation boundary:

- visible seam lines are explanatory only;
- vertical navigation is not locked;
- placeholder typography is not authority;
- context boxes are not production components.

## Exact next task

**FOUNDER LAYOUT ARCHITECTURE SELECTION**

Choose:

- B — Split Tension;
- A — Identity Spine;
- reject both.

If B is selected, define exact desktop geometry next while keeping the seam implicit.

Do not select typography or build another hero prototype before layout architecture is selected.

No runtime homepage replacement.

No merge to `main` or deployment is authorized.
