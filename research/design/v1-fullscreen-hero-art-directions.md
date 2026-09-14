# Portfilo v1 Full-Screen Hero Art-Direction Concepts

_Last updated: 2026-09-15_

## Status

**READY FOR FOUNDER SELECTION**

Parent authority:

- `docs/V1_CREATIVE_DIRECTION.md`
- `docs/V1_HOMEPAGE_POSITIONING.md`
- `docs/V1_HOMEPAGE_COPY.md`
- `docs/V1_IDENTITY_SYSTEM.md`
- `research/design/v1-fullscreen-hero-reference-research.md`

## Decision job

Choose what the Portfilo homepage hero actually becomes as a full-screen visual experience before implementation technology is locked.

This gate is intentionally conceptual.

No polished homepage mockup, shader, video, Three.js scene, or runtime implementation is authorized yet.

## Shared locked inputs

Across all three concepts:

- Portfilo remains a software design and development studio;
- positioning remains **Problem-led software**;
- approved headline remains **Software built around the problem.**;
- approved support copy remains unchanged;
- Sharp Ornamental 01 remains the emblem;
- `PORTFILO` all-caps wordmark remains approved;
- Mona Sans remains website typography;
- dark-first remains the current preferred environment;
- no fake Work, fake UI, client claims, testimonials, or invented imagery;
- loader should feel like the opening state of the same visual system, not a separate splash screen;
- real text/navigation remain semantic HTML above the visual layer;
- reduced-motion and static fallback are required.

The current Perimeter Field layout is **provisional evidence**, not a constraint. Any concept may retain, simplify, or replace it if the full-screen visual needs a different composition.

---

# Concept A — PRESSURE FIELD

## Core idea

**The whole viewport behaves like a material under controlled tension.**

Portfilo builds software around real business constraints. Instead of representing that with diagrams, the screen itself behaves as though invisible constraints are pulling, compressing, bending, and releasing one continuous dark material.

The visual is not a blob floating on black.

**The entire black surface is the object.**

## What fills the viewport

A near-black continuous field with subtle depth, tonal variation, and directional light.

Across the full screen, broad invisible forces create:

- tension lines;
- soft folds;
- compressed regions;
- stretched regions;
- occasional bright seams where the material is under the most pressure.

Nothing is centered as an object.

The graphic extends beyond every edge of the viewport.

## Resting state

At rest:

- the screen is almost black;
- one or two very broad pressure zones slowly move beneath the surface;
- a restrained silver/off-white seam may cross part of the viewport;
- the composition feels calm, expensive, and alive rather than busy.

Text sits directly over the field.

The visual should still look strong if the animation is paused.

## Loader

The loader begins as a completely flat near-black screen.

Sequence:

1. Sharp Ornamental emblem appears at center or slightly off-center;
2. `PORTFILO` appears with it;
3. the surface behind them begins to show the first hint of pressure/depth;
4. the emblem and wordmark move to their final interface positions;
5. the surface tension expands to fill the viewport;
6. the hero copy becomes visible only after the visual field is established.

The loader is therefore the **first physical state of the Pressure Field**, not a branded screen placed before it.

Fast cached visits may skip most of the sequence.

## Continuous motion

Very slow.

The field:

- breathes;
- stretches;
- changes tension;
- shifts highlights.

No looping object rotation.

No particles.

No obvious repeating cycle.

The motion should be difficult to notice frame-to-frame but obvious after several seconds.

## Cursor response

Cursor movement creates a restrained local pull in the field.

Not a circular mouse-follow distortion.

The pointer slightly changes the directional pressure of the whole surface, as if the material is attached to the cursor through tension rather than directly touching it.

The response should lag and decay naturally.

## Scroll response

On first scroll:

- the field stretches vertically;
- one seam or pressure boundary opens;
- the hero text reorganizes or moves away;
- the surface becomes the transition into the next homepage state.

This preserves the useful idea from Perimeter Field:

**the interface transforms rather than simply scrolling past sections.**

## HTML layer

HTML remains:

- emblem;
- wordmark;
- headline;
- support copy;
- navigation.

Nothing textual is baked into the visual.

## Likely implementation family

**Preferred: Family B — authored motion + lightweight shader.**

Possible production:

- authored monochrome motion texture/video establishes high-quality material;
- fullscreen WebGL quad uses that media as a texture;
- fragment shader adds pointer-responsive displacement/tension;
- GSAP controls loader, typography, navigation, and first-scroll transition.

A fully procedural shader is possible if it can match the visual quality without becoming a generic noise field.

## Why it belongs to Portfilo

It translates **software built around constraints** into physical behavior without illustrating software literally.

The screen itself responds to constraint.

That relationship is strong enough to support the Responsive Identity direction later on other surfaces.

## Primary risk

If art direction is weak, this becomes:

- a generic liquid shader;
- an Apple-style fabric effect;
- a trendy monochrome distortion background.

Reject it if the visual cannot be made recognizably Portfilo through motion behavior, composition, and restraint.

---

# Concept B — ASSEMBLY

## Core idea

**The entire viewport begins fragmented and continuously organizes itself into useful structure.**

This is not a grid of cards.

The full screen is made from large visual regions, masks, planes, and cropped material that seem initially disconnected but repeatedly find alignment.

The metaphor is not "building blocks."

It is:

**clarity emerging from an imperfect system.**

## What fills the viewport

The screen is divided by large irregular cuts and masks that extend beyond the viewport edges.

Different regions may contain:

- subtle monochrome textures;
- blurred light/material studies;
- deep black;
- graphite;
- off-white edge highlights.

At first glance it should read as one cinematic composition, not many tiles.

Large areas slide behind one another and align.

## Resting state

The resting hero catches the composition **mid-resolution**.

Some major boundaries align exactly.

Others remain slightly displaced.

This creates visual tension across the whole viewport.

The hero copy can occupy one calm region while the rest of the screen remains visually active.

No obvious container surrounds the copy.

## Loader

The loader starts with the viewport visibly unresolved:

- visual regions are offset;
- wordmark/emblem may appear in separate locations;
- there is no complete composition yet.

During load:

1. large regions move toward alignment;
2. emblem and wordmark find their final positions;
3. visual seams lock together;
4. the hero resolves into one coherent screen.

The final 10–15% of alignment can happen as the loader exits.

This makes "loading" literally become **assembly**.

## Continuous motion

Once resolved, the screen never becomes perfectly static.

Large regions drift by a few pixels/degrees over long periods.

Occasionally one boundary loses alignment and slowly resolves again.

The motion remains structural, not decorative.

## Cursor response

Cursor proximity can create slight misregistration:

- one visual layer shifts relative to another;
- a seam opens;
- local depth becomes visible.

Moving away allows the screen to settle back into alignment.

This should feel tactile but controlled.

## Scroll response

First scroll deliberately **breaks the resolved composition**.

Large regions pull apart and become transition masks for the next content state.

The next surface is revealed through those same moving boundaries.

This can create a powerful transition into Work or Services without traditional section scrolling.

## HTML layer

HTML remains:

- identity;
- copy;
- navigation;
- later real content.

The visual regions are media/masks only.

## Likely implementation family

**Family A or Family B.**

Simpler route:

- several authored video/image layers;
- CSS/GSAP masks and transforms.

More responsive route:

- layers composited in WebGL;
- shader introduces controlled misregistration/refraction;
- GSAP controls macro composition.

This concept does **not** require Three.js.

## Why it belongs to Portfilo

Portfilo's commercial promise is not abstract creativity for its own sake.

It is taking:

- manual work;
- disconnected systems;
- repetitive workflows;
- software that no longer fits;
- new product needs;

and creating something coherent.

Assembly turns that into a visual behavior without showing fake dashboards or process diagrams.

## Primary risk

It can drift toward:

- fashion campaign art direction;
- collage;
- generic brutalist panel animation;
- MetaLab-style frame imitation.

Reject it if the composition starts looking like portals, cards, or editorial image windows.

---

# Concept C — SIGNAL

## Core idea

**Portfilo's hero is a full-screen signal that moves from noise to legibility.**

The screen is a digital material rather than a physical object.

Instead of generic particles or "AI network" graphics, the visual is built from dense image/signal behavior:

- interference;
- phase shifts;
- scan-like structures;
- controlled moiré;
- compression;
- spectral bands;
- sharp moments of clarity.

The visual language suggests information becoming usable.

## What fills the viewport

A full-screen dark signal field.

At any instant, the viewport may contain:

- deep black;
- subtle graphite;
- dense fine structure;
- directional bands;
- one controlled bright region;
- momentary pockets where the signal resolves into clean space.

The screen should feel digital at native resolution, not like a photographed texture.

## Resting state

The hero rests in a mostly resolved state:

- enough signal behavior remains to make the screen alive;
- copy sits over a naturally calm region;
- identity remains readable;
- no discrete graphic object exists.

At moments the signal briefly shifts, then settles.

## Loader

This concept has the strongest loader relationship.

Initial state:

**raw unresolved signal.**

Sequence:

1. field begins as controlled noise/interference;
2. emblem appears only when a clear region resolves;
3. wordmark sharpens from the field;
4. visual signal reaches a stable state;
5. headline/support appear as the interface becomes "legible."

The loader does not need a percentage counter unless later justified.

## Continuous motion

The field changes continuously at a low amplitude.

Possible behaviors:

- slow phase movement;
- horizontal or diagonal spectral drift;
- interference patterns that form and disappear;
- clean regions opening and closing.

No television-static effect.

No glitch aesthetic.

No cyberpunk treatment.

## Cursor response

Cursor changes the local signal quality rather than moving an object.

Possible response:

- signal sharpens around the pointer;
- or becomes slightly more unstable;
- directional bands bend based on velocity.

The interaction should be subtle enough that users may discover it rather than immediately recognizing a mouse effect.

## Scroll response

On scroll, signal density can increase until the first hero state disappears into the field.

The signal then resolves again into the next content surface.

This could become a recurring Portfilo transition language across pages.

## HTML layer

All identity and text remain HTML.

The visual is one full-screen render layer only.

## Likely implementation family

**Family C-lite — custom procedural WebGL shader.**

Not a Three.js 3D scene.

Likely implementation:

- single fullscreen triangle/quad;
- fragment shader;
- procedural noise/interference functions;
- pointer/scroll uniforms;
- GSAP for loader and interface choreography.

Poster/static image fallback for reduced motion and unsupported/low-power contexts.

## Why it belongs to Portfilo

This is the most explicitly digital of the three.

It connects to:

- software;
- AI;
- information;
- systems;
- making complexity legible;

without depicting code, terminals, nodes, or fake interfaces.

It also offers a natural responsive identity system that could evolve across Services, Journal, and Work.

## Primary risk

This is the easiest concept to make look like:

- generic tech branding;
- AI startup visuals;
- glitch art;
- shader demo;
- Stripe-inspired gradient/noise.

It requires extremely disciplined art direction.

---

# Comparative assessment

| Criterion | A — Pressure Field | B — Assembly | C — Signal |
| --- | ---: | ---: | ---: |
| Full-screen visual impact | 9.5 | 9.5 | 9 |
| Portfilo problem-led fit | **10** | **10** | 8.5 |
| Responsive Identity potential | 10 | 9.5 | **10** |
| Loader integration | 9 | 10 | **10** |
| Distinct from generic agency site | 9 | 9 | 7.5 |
| Can work without fake content | **10** | 9.5 | **10** |
| Art-direction controllability | 9.5 | **10** | 8 |
| Engineering risk | Medium | Low-medium / Medium | Medium-high |
| Risk of trend/slop | Medium | Medium | High |
| Current recommendation | **1** | **2** | 3 |

## Recommendation

**A — Pressure Field** is the strongest current direction.

Reason:

- it makes the **whole viewport** the visual;
- it directly connects to software being built around constraints;
- it can remain dark and premium without darkness becoming the concept;
- it works with authored motion, which gives us visual quality;
- a lightweight shader can make it genuinely responsive;
- it does not require fake Work/media;
- the loader can naturally become the first state of the same visual;
- the underlying interaction idea is simple enough to remember: **the surface is under tension and responds to forces.**

**B — Assembly** is the strongest alternative if the founder prefers a more graphic/art-directed and less fluid/material experience.

**C — Signal** is technically interesting but has the highest probability of collapsing into generic technology aesthetics.

---

# Founder selection gate

Select:

- **A — Pressure Field**
- **B — Assembly**
- **C — Signal**
- or reject all three.

After selection:

1. lock the art-direction concept;
2. decide the lightest technical implementation that can express it;
3. define loader state + resting hero + one response behavior;
4. build one real browser prototype using the Portfilo stack;
5. do not design the rest of the homepage yet.
