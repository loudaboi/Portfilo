# Portfilo v1 Full-Screen Hero Reference Research

_Last updated: 2026-09-15_

## Status

**RESEARCH COMPLETE / DECISION GATE READY**

## Decision job

Study strong contemporary full-screen hero experiences and, critically, how they are implemented before Portfilo commits to another visual direction.

This research does **not** force Portfilo into a full-screen graphic, WebGL, video, or 3D direction.

It exists to answer:

1. what makes the strongest references feel visually complete;
2. what role the hero visual actually performs;
3. how that visual is technically delivered;
4. which implementation families fit Portfilo's existing Astro architecture;
5. what should be explored next without repeating generic visual experiments.

## Research correction

The previously explored central-object systems are rejected:

- responsive geometric field;
- sculptural graphic object;
- system-resolution visual.

Failure:

**they treated the hero as a dark layout with a decorative object in the middle.**

The strongest references instead treat the entire viewport as a visual environment or media surface and layer the interface over or through it.

Perimeter Field remains useful evidence, but it is no longer protected as a final composition. If a stronger full-screen visual concept requires a different composition, the composition may change.

---

## Reference 1 — MetaLab

Live:

https://www.metalab.com/

Implementation/source:

https://tympanus.net/codrops/2026/01/08/from-whats-a-string-to-sites-of-the-day-nathan-dallaires-high-end-web-experiences/

### What the visual does

MetaLab's homepage behaves less like a conventional hero and more like an exploratory interface.

The live homepage exposes:

- Hover;
- Drag;
- a large sequence of numbered visual states;
- the proposition over a changing visual world.

The selected concept was **Frames**: portals/windows that open into different MetaLab/client/project universes.

### How it is made

Published implementation stack:

- Next.js;
- GSAP;
- Sanity.

The Frames system is triggered through:

- scroll;
- hover;
- movement.

The important point is not the framework. The visual is built from media and spatial interaction choreography rather than treating the hero as a static layout plus decoration.

### Portfilo lesson

**High relevance.**

Borrow:

- full-viewport visual thinking;
- media/interface choreography;
- interaction tied to the identity concept;
- visual states that feel like one system.

Do not copy:

- the Frames motif itself;
- their portal/window geometry;
- project-media behavior without real Portfilo Work content.

---

## Reference 2 — Cloudflare

Live:

https://www.cloudflare.com/

### What the visual does

Cloudflare currently uses motion directly in the homepage hero. The live page exposes a message that the **hero video** is disabled in low-quality preview and should be viewed in high mode for full motion.

Elsewhere on the homepage, Cloudflare uses a hardware-accelerated 3D globe to explain the network.

### How it is made

The important evidence is architectural rather than framework-specific:

- hero motion is delivered as video/media;
- realtime hardware-accelerated graphics are used where they have a specific explanatory job;
- the site does not require every visual to use the same rendering technology.

### Portfilo lesson

**Very high relevance.**

This demonstrates that a technically sophisticated company does not need to prove sophistication by rendering the hero entirely in WebGL.

A high-quality authored video background can be the right tool.

Realtime 3D can remain available for later surfaces where it earns the dependency.

---

## Reference 3 — Dash Creative

Live:

https://www.dashcreative.co/

Implementation case study:

https://tympanus.net/codrops/2026/07/21/magnetic-commerce-building-the-dash-creative-website/

### What the visual does

The hero is a full-screen moving surface rather than an isolated object.

The visual remains cinematic but reacts to pointer movement.

### How it is made

Published implementation:

- fullscreen video is used as a texture;
- a WebGL canvas sits above it;
- a fragment shader remaps the video's texture coordinates;
- pointer direction and velocity influence the distortion;
- a single fullscreen quad is used;
- JavaScript smooths and decays the interaction values;
- GSAP is used elsewhere for precise interaction/sequencing;
- Webflow carries the main site.

This is intentionally lightweight WebGL:

**video + one texture + one fullscreen quad + shaders**

rather than a full 3D scene graph.

### Portfilo lesson

**Highest technical relevance.**

This is the clearest proof of the hybrid route:

**authored motion quality + realtime responsiveness.**

It gives us a full-screen graphic that can feel alive without requiring Portfilo to become a Three.js showcase.

---

## Reference 4 — Stripe animated gradient

Reference implementation research:

https://kevinhufnagl.com/how-to-stripe-website-gradient-effect/

https://github.com/sa3dany/wave-gradient

### What the visual does

A procedural full-screen color/material field creates atmosphere across the entire hero without a discrete central object.

### How it is made

Community reverse-engineering of Stripe's gradient describes:

- a WebGL canvas;
- plane geometry filling the viewport;
- vertex + fragment shaders;
- simplex-noise-driven deformation/color blending;
- a minimal rendering system rather than a full 3D environment.

This is reverse-engineered community evidence, not an official Stripe implementation contract.

### Portfilo lesson

**Medium-high relevance.**

A custom shader can own the whole viewport with relatively little scene complexity.

But the gradient/material itself must be conceptually Portfilo-specific. A generic animated gradient would fail the anti-slop bar.

---

## Reference 5 — Lusion

Live:

https://lusion.co/

Implementation references:

https://www.commarts.com/webpicks/lusion

https://discourse.threejs.org/t/full-on-webgl-studio-website/7823

### What the visual does

Lusion treats much of the site as a realtime visual world.

3D, motion, media, and transitions are part of the site identity rather than isolated decoration.

### How it is made

Published implementation evidence includes:

- Three.js for WebGL scenes;
- Houdini FX for generated/baked vertex animations;
- Redshift3D for rendered video;
- combinations of video and realtime graphics;
- custom optimization to make complex scenes web-viable.

### Portfilo lesson

**Useful upper bound, not default recommendation.**

This shows what a full realtime pipeline can achieve.

It also demonstrates the production burden: custom 3D assets, offline simulation/rendering, WebGL engineering, transitions, and optimization.

Portfilo should not adopt this complexity unless the visual concept clearly requires it.

---

## Reference 6 — Apple-style scroll image sequence

Implementation study:

https://gsapvault.com/blog/scroll-image-sequence-tutorial

### What the visual does

Pre-rendered cinematic imagery becomes scroll-responsive while retaining exact art direction.

It appears realtime to the visitor, but the expensive visual work was rendered offline.

### How it is made

Typical implementation:

- sequence of pre-rendered WebP/images;
- canvas renders the current frame;
- GSAP ScrollTrigger maps scroll progress to frame number;
- sticky/pinned full-viewport section;
- staged image preloading;
- representative still fallback;
- device-pixel-ratio cap for performance.

### Portfilo lesson

**Medium relevance.**

Useful if we eventually create a precise cinematic sequence that needs scroll scrubbing.

Not suitable as the first choice if all we need is an ambient looping hero because a normal video is simpler.

---

## Reference 7 — Buffer homepage hero

Implementation case study:

https://buffer.com/resources/how-we-designed-and-built-the-new-buffer-homepage-hero/

### Why it is included

Buffer is not our primary visual reference.

It is a **process reference**.

### How they worked

The team:

- defined the visual concept first: floating tiles based on social grids;
- moved into the live implementation early;
- paired design and engineering rather than completing a high-fidelity handoff first;
- built the effect with responsive CSS Grid;
- prototyped cursor interaction on one tile before componentizing;
- used spring-like cursor behavior;
- disabled animation by default and enables it when reduced motion is not requested;
- A/B tested the new hero before full rollout.

### Portfilo lesson

**Very high process relevance.**

The visual concept should be explainable before selecting WebGL/video/Canvas.

The final medium should be tested as a webpage early, rather than repeatedly generating static website mockups.

---

## Reference 8 — Spline

Live/docs:

https://spline.design/

https://docs.spline.design/

### What it offers

Spline can create:

- interactive 3D scenes;
- materials and lighting;
- states/events;
- timeline animation;
- particles/physics;
- web embeds.

Its web output can be embedded through a `spline-viewer` custom element, and its Code API can connect scene variables/properties/transitions to a site's own interface.

### Portfilo lesson

**Prototype option, not production default.**

Spline could be useful for quickly proving a 3D art direction before committing to custom WebGL.

For a highly tailored responsive identity system, custom runtime control may still be preferable.

---

# Cross-reference findings

## Finding 1 — The best visual is usually the environment

The recurring pattern is:

**the visual owns the viewport; interface content sits above, within, or through it.**

This is materially different from:

**dark layout + decorative object in the middle.**

That distinction explains why the rejected Portfilo visual studies felt weak.

## Finding 2 — Art direction comes before rendering technology

Strong examples begin with a concept:

- MetaLab: Frames;
- Dash: Magnetic Commerce / pulled surface;
- Buffer: social-grid tiles.

Technology follows the visual job.

Selecting Three.js, WebGL, particles, gradients, or video first produces effects without identity.

## Finding 3 — Video is not the inferior option

Cloudflare and Dash demonstrate that authored video can be the visual foundation even on highly technical sites.

Video provides:

- precise art direction;
- predictable rendering;
- high visual richness;
- comparatively low implementation complexity.

The visual can then become responsive through masks, transforms, shaders, or interaction.

## Finding 4 — WebGL is most valuable when it changes behavior

WebGL earns its complexity when it provides something static media cannot:

- realtime deformation;
- pointer-responsive material;
- live procedural generation;
- true 3D camera/object behavior.

Using WebGL merely to show a decorative object is insufficient justification.

## Finding 5 — Hybrid systems are common and credible

A production hero does not need one rendering method.

A strong architecture can combine:

- HTML for copy/navigation/identity;
- video or pre-rendered frames for visual fidelity;
- WebGL for one responsive surface effect;
- GSAP for composition and transition choreography.

## Finding 6 — Existing Portfilo stack does not need replacement

Astro can remain the page/framework layer.

Portfilo can add one isolated interactive island for the hero if needed.

Potential architecture:

```
Astro / semantic HTML
├── emblem / wordmark
├── headline / support
├── navigation
│
├── full-screen visual layer
│   ├── poster
│   ├── video OR canvas
│   └── optional lightweight WebGL shader
│
└── GSAP interaction / scroll choreography
```

Do not move to Next.js simply because MetaLab used it.

---

# Implementation families for Portfilo

## Family A — Authored full-screen motion

Implementation:

- high-quality pre-rendered motion loop;
- AVIF/WebP poster for immediate first paint;
- muted / autoplay / playsinline video;
- semantic HTML interface over it;
- GSAP for interface and scroll transitions.

Strength:

- best visual predictability;
- lowest graphics-engine complexity;
- easiest to art-direct.

Risk:

- less realtime behavior unless presentation is manipulated.

## Family B — Authored motion + lightweight shader

Implementation:

- full-screen authored video;
- hidden/underlying video used as GPU texture;
- WebGL fullscreen quad;
- custom fragment shader for restrained distortion;
- pointer/scroll state sent as uniforms;
- GSAP for composition.

Strength:

**best current balance for Portfilo.**

It combines cinematic quality with Responsive Identity behavior.

Risk:

- still requires shader engineering and strong fallback strategy.

## Family C — Fully procedural WebGL / Three.js

Implementation:

- realtime shader or Three.js scene;
- generated geometry/material/light;
- pointer and scroll state;
- HTML overlay.

Strength:

- maximum realtime freedom.

Risk:

- highest engineering/art-direction burden;
- easiest route to generic WebGL-demo aesthetics;
- more performance/device work.

Use only if the concept cannot be expressed convincingly with A or B.

## Family D — Pre-rendered scroll sequence

Implementation:

- offline-rendered frames;
- canvas;
- GSAP ScrollTrigger;
- pinned viewport.

Strength:

- exact cinematic art direction with deterministic scroll control.

Risk:

- many assets;
- preload/memory work;
- unnecessary for an ambient loop.

---

# Performance/accessibility constraints

Any full-screen motion direction must include:

- real HTML text and navigation above the visual layer;
- poster/static fallback;
- `prefers-reduced-motion` handling;
- mobile quality strategy;
- pause/stop rendering or media when offscreen where applicable;
- no essential information conveyed only by decorative motion;
- GPU buffer cap if using WebGL/Three.js;
- video without an audio track when decorative.

Relevant implementation references:

- https://web.dev/learn/performance/video-performance
- https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion
- https://threejs.org/manual/en/responsive.html

---

# Portfilo conclusion

Do **not** choose a rendering technology yet.

The research supports a new sequence:

1. define what the full-screen visual actually is;
2. create no more than three art-direction concepts;
3. judge them as full-viewport visual worlds, not center graphics;
4. select one concept;
5. choose the lightest implementation family that can express it;
6. build one real browser prototype;
7. evaluate visual quality, motion, performance, and readability together.

## Current technical recommendation

If the selected concept permits it, start from:

**Family B — authored full-screen motion + lightweight shader + HTML/GSAP interface**

because it most closely combines:

- Cloudflare's practical use of authored hero motion;
- MetaLab's responsive spatial behavior;
- Dash's proven video + fragment-shader architecture.

This is a recommendation, not a locked technical decision.

## Exact next gate

**FULL-SCREEN HERO ART-DIRECTION CONCEPTS**

Produce up to three concepts describing:

- what fills the entire viewport;
- what visual metaphor/system it uses;
- what the resting state looks like;
- what moves;
- what responds to cursor/scroll;
- what remains HTML;
- likely implementation family;
- why the concept belongs to Portfilo specifically.

Do not generate another website mockup yet.
