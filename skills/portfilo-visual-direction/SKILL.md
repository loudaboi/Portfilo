---
name: portfilo-visual-direction
description: Mandatory visual-direction and anti-slop skill for consequential Portfilo website, identity, layout, typography, motion, interaction, visual-material, image-treatment, and design-review work.
metadata:
  version: 1.0.0
---

# Portfilo Visual Direction

This skill controls **how visual decisions are made**.

It does not choose the current design direction by itself.

Current repository authority and explicit founder decisions always win.

Use together with:

`skills/portfilo-anti-slop/SKILL.md`

---

# 1. Read authority before taste

For consequential visual work, read:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V1_SCOPE.md`
5. `docs/V1_CREATIVE_DIRECTION.md`
6. `docs/V1_IDENTITY_SYSTEM.md`
7. the current task-specific research / decision record
8. the relevant rendered implementation when one exists

Also read `docs/V1_HOMEPAGE_GENERATION_PLAN.md` for homepage visual work.

Never let an older prototype outrank a later founder rejection.

---

# 2. State the visual decision

Before researching or building, write one sentence:

**Decision job:** what exactly is being judged?

Do not combine materially independent decisions unless they only make sense together.

Use the **minimum meaningful unit** rule:

> Prototype the smallest thing that can actually answer the decision question.

Do not isolate an element when its quality depends on the surrounding composition.

Examples:

- a favicon can be judged independently;
- a wordmark can be judged independently;
- a hero background often cannot be judged meaningfully without the foreground composition;
- motion cannot be judged from a static frame;
- typography may need its real compositional context when the question is visual fit rather than font anatomy.

If you cannot tell the founder exactly what to observe, the gate is badly defined. Stop and redefine it.

---

# 3. Classify the task

Choose one:

### Preserve

The current visual world is approved. Fix or improve a bounded issue without changing identity.

### Extend

The current visual world is approved, but a new surface/state needs to join it.

### Replace

The founder rejected the underlying visual world or concept.

A replacement task must not preserve the rejected composition under new cosmetics.

When the task is Replace:

- preserve product truth;
- preserve explicitly retained identity assets and behaviors;
- treat rejected visuals as anti-reference/evidence;
- return to reference extraction and a new visual thesis.

Do not “meet in the middle” with rejected work.

---

# 4. Research mechanisms, not vibes

For a consequential new direction, inspect strong real references before proposing the visual.

Do not research after generating.

Do not reduce references to adjectives such as:

- premium;
- futuristic;
- editorial;
- minimal;
- cinematic;
- experimental.

For every important reference, extract four things:

### Mechanism

What actually makes it work?

Examples:

- shared-element continuity;
- alternating visual states;
- authored full-screen media;
- quiet resting surface;
- mask-based transitions;
- typography integrated with media;
- pointer response tied to material;
- project media becoming navigation.

### Surface not to copy

What belongs specifically to that reference and should not become Portfilo costume?

Examples:

- its palette;
- photography;
- exact grid;
- exact typography;
- object shapes;
- branded imagery;
- WebGL effect.

### Portfilo translation

How does the mechanism behave with:

- Sharp Ornamental 01;
- the approved PORTFILO wordmark;
- Problem-led software;
- real Work evidence;
- Portfilo's current content architecture?

### Implementation consequence

What does the mechanism actually require?

Prefer:

`HTML / CSS / SVG -> GSAP / Flip / View Transition -> authored media -> WebGL only when earned`

Technology is never the direction.

---

# 5. Write one visual thesis

Before a prototype, write the direction in one sentence.

It must describe a behavior/composition, not an aesthetic mood.

Weak:

> Premium dark software studio with grain and motion.

Strong:

> A quiet resting frame keeps the identity and proposition legible, while selection and navigation reorganize the same media and type through continuous masked transitions.

A valid thesis should explain:

- the resting frame;
- the primary visual hierarchy;
- the focal transition or interaction;
- why the result belongs to Portfilo.

One visual world owns the surface.

Do not combine several unrelated “cool ideas.”

---

# 6. Portfilo anti-slop test

Before presenting any consequential direction or prototype, run this test.

## A. Category interchangeability

Could the same composition be relabeled for a random:

- AI startup;
- software agency;
- design studio;
- crypto company;
- SaaS landing page

without meaningful structural change?

If yes, stop.

## B. Empty-frame compensation

Was any element added mainly because the page felt empty?

Common failures:

- abstract center object;
- decorative shader;
- giant logo wallpaper;
- arbitrary photograph;
- giant type without compositional reason;
- unnecessary rule/grid;
- extra label/kicker;
- filler card;
- gradient blob.

If yes, remove it and reevaluate.

## C. Model-default detection

Reject unearned defaults such as:

- giant white grotesk on black as the entire idea;
- black/off-white minimalism treated as authorship;
- bento/card grids;
- generic agency section stacking;
- gray support copy floating under a statement;
- arbitrary asymmetry;
- arbitrary stepped typography;
- gradient text;
- glassmorphism;
- aurora/neon “AI” gradients;
- chrome/orb/blob/sculpture used as mood;
- fake terminal/developer UI;
- floating devices;
- random particles;
- meaningless 3D;
- fake project screens;
- fake case studies or metrics;
- numbered decorative sections;
- repeated fade-up-on-scroll;
- cursor effects with no relationship to the visual material or interaction.

A pinned founder reference can legitimately contain a normally generic device.

The failure is reaching for it automatically.

## D. Identity test

Do the emblem, wordmark, typography, surface, media, and interaction feel like one system?

Do not make the identity fight a separately designed “cool background.”

## E. Specificity test

Name the one decision that makes this composition specifically Portfilo.

If the answer is only “the logo,” stop.

## F. Removal test

Would removing an element improve clarity or authorship?

If yes, remove it.

## G. Reviewability test

Can the founder understand in seconds:

- what this artifact is;
- what is being judged;
- what is intentionally not being judged?

If not, do not present it.

---

# 7. Typography

Typography is part of composition and identity.

Do not select a typeface because it is:

- fashionable;
- technically variable;
- “modern”;
- “creative”;
- associated with startups.

Evaluate:

- drawing character;
- proportions;
- hierarchy;
- display behavior;
- body/read behavior;
- contrast with the approved wordmark;
- relationship to the selected surface;
- whether it reads software-first;
- actual line breaks with real copy.

Do not force typography to become the visual spectacle because the background/composition lacks an idea.

When the decision is **hero fit**, evaluate typography inside the hero environment.

When the decision is **type-system anatomy**, an isolated specimen is valid.

---

# 8. Background and material

A background is usually a supporting surface, not a standalone concept.

Before creating visual material, name its job.

Valid jobs:

- establish contrast;
- create depth;
- support legibility;
- respond to pointer/state;
- carry continuity through transitions;
- hold a specific authored media idea.

Invalid job:

> make the empty hero look interesting.

Do not create a standalone background review unless the background has an independent visual decision that can be judged without the foreground.

Grain, gradient, blur, texture, shaders, photography, and generative imagery are materials.

They are not directions by themselves.

---

# 9. Motion and interaction

Motion must have a thesis.

Before implementation, state:

### Focal moment

The one sequence that carries the strongest authored behavior.

### Continuity

What changes state, location, crop, hierarchy, or route while remaining perceptually connected?

### Pointer behavior

What does the pointer affect and why?

Do not add a custom cursor or magnetic behavior because a reference had one.

The response should belong to the selected material or interaction.

### Feedback

What small interactions need acknowledgement?

Prefer one strong motion idea with quiet supporting motion.

For Portfilo, investigate first:

- masks / clip paths;
- crop changes;
- shared-element transitions;
- GSAP Flip;
- deliberate spatial movement;
- subtle material response.

Do not default to:

- fade + rise;
- bounce;
- elastic motion;
- excessive stagger;
- parallax everywhere;
- scroll hijacking;
- random character animation;
- perpetual background movement.

Use native scrolling unless an approved concept requires otherwise.

Always provide a reduced-motion path in production implementation.

---

# 10. Reference translation record

Before proposing a direction from references, produce a compact record:

| Reference | Learn | Do not copy | Portfilo translation |
| --- | --- | --- | --- |
| X | mechanism | reference-owned surface | exact Portfilo behavior |

This can live in the task research file.

Do not proceed from mood board directly to code.

---

# 11. Prototype contract

Before making a visual prototype, state:

### Question

One sentence describing the pass/fail decision.

### Includes

Only the inputs necessary to answer it.

### Excludes

What is deliberately not being judged.

### What to observe

No more than four concrete observations.

Then create the artifact.

Do not make the founder reverse-engineer the purpose of the prototype.

---

# 12. Rendered critique before founder review

Source correctness is not visual correctness.

Before presenting a consequential visual prototype, inspect the actual rendered output.

Critique in this order:

1. **Specificity** — is it recognizably Portfilo rather than category-average?
2. **Hierarchy** — what wins first, second, third?
3. **Coherence** — do identity, type, material, and interaction belong together?
4. **Restraint** — what is decorative or compensating for emptiness?
5. **Craft** — spacing, line breaks, alignment, contrast, edge behavior.
6. **Motion** — if applicable, does movement explain state/continuity or merely signal “premium”?

If a major failure is visible, do not present the artifact as a candidate.

Either correct it within the approved concept or report that the concept failed.

---

# 13. Rejection protocol

Founder rejection has high authority.

After rejection:

1. record exactly what failed;
2. separate rejected elements from any explicitly retained mechanism;
3. stop tuning the rejected premise;
4. return to the latest approved evidence;
5. propose a materially different solution only after the failure is understood.

Do not revive rejected work through:

- another font;
- another gradient;
- another shader;
- lower opacity;
- different blur;
- slightly different spacing;
- new labels;
- cosmetic motion.

If the concept is wrong, change the concept.

---

# 14. Bounded iteration

Do not self-polish indefinitely.

For a built visual:

1. inspect once across the relevant viewport(s);
2. collect defects together;
3. make one consolidated correction pass if still inside the approved concept;
4. recheck;
5. present for founder review.

A failed concept is not a polishing task.

---

# 15. Portfilo current learned failures

These are durable warning signs from v1 exploration, not permanent aesthetic bans.

Treat them as anti-reference unless a later founder decision explicitly rehabilitates them:

- generic permanent-black creative-tech composition;
- oversized white sans carrying the entire identity;
- thin-rule luxury minimalism;
- gray hierarchy;
- central decorative hero objects;
- abstract shader material presented as the concept;
- Crossfield / Refraction / Strata;
- arbitrary typographic poster composition;
- Bricolage Grotesque as hero display;
- isolated Graphite Exposure background specimen;
- support copy treated as a detached muted paragraph;
- generated complete website screenshots;
- polishing a rejected hero instead of replacing the premise.

Read `docs/PROJECT_STATE.md` for the latest status before relying on this list.

---

# 16. Stop conditions

Stop and surface the gap when:

- the reference has not actually been inspected;
- the visual decision is unclear;
- the prototype is not meaningful in isolation;
- product/identity authority conflicts;
- the design depends on fake evidence;
- a required asset is missing;
- a rejected concept is being cosmetically revived;
- the visual thesis cannot be stated in one sentence;
- the only reason for an element is “it looks cool”;
- the founder would not know what to judge.

Do not invent through the gap.
