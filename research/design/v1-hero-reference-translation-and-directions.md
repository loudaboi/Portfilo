# Portfilo v1 — Hero Reference Translation + Complete Directions

_Last updated: 2026-09-15_

## Status

**FOUNDER-SELECTED / QUIET SURFACE + ACTIVE INTERFACE**

## Decision job

Choose between two complete first-viewport systems for Portfilo before any new hero implementation.

This follows the visual-direction method in:

`skills/portfilo-visual-direction/SKILL.md`

No direction below is a mockup or implementation approval.

---

# Reference extraction

## OpenAI Business

Reference:
https://openai.com/business/

### Learn

- a dark resting surface can remain visually quiet;
- fine grain and soft tonal variation can create depth without becoming the concept;
- the background can support large foreground hierarchy without demanding attention.

### Do not copy

- OpenAI page structure;
- announcement bar;
- navigation;
- customer-card composition;
- exact blue/teal palette;
- headline styling.

### Portfilo translation

Use a restrained near-black / blue-black grain field as **surface material only**.

The background should not be presented for approval as a standalone artwork.

Its success is judged inside the complete hero composition.

### Implementation consequence

CSS gradients or one static raster plate + a lightweight grain layer are sufficient.

No WebGL is required.

---

## MERSI

Reference:
https://www.mersi-architecture.com/

Technical case study:
https://tympanus.net/codrops/2026/07/27/between-print-and-digital-the-making-of-mersis-website/

### Learn

- motion can create material continuity rather than decorative spectacle;
- the same image can become a transitional object between states/routes;
- clip paths and GSAP Flip can make layout changes feel physical;
- a calm resting composition can coexist with strong interaction;
- projects gain presence when the interface creates conditions around them instead of adding more decoration.

### Do not copy

- architecture-editorial visual language;
- split-screen architecture imagery;
- print/book metaphor;
- horizontal case-study navigation;
- exact white-space and typography.

### Portfilo translation

Real Work media should eventually move, crop, and relocate between homepage and case-study states rather than disappearing between page loads.

The hero itself should introduce this continuity language without pretending fake Work exists.

### Implementation consequence

Prefer:

- CSS/SVG masks;
- clip-path;
- GSAP;
- GSAP Flip for real Work transitions;
- native scroll first.

---

## 4WIDE

Reference:
https://4wide.jp/

Technical case study:
https://tympanus.net/codrops/2026/04/23/building-4wide-turning-distortion-blur-and-motion-into-a-coherent-experience/

### Learn

- expressive interaction can coexist with a clear business message;
- one visual can have more than one state;
- changing information state and visual-material state together makes interaction feel intentional;
- the top page uses default and focus modes rather than treating every effect as permanent.

### Do not copy

- reel-style video;
- fisheye;
- RGB shift;
- Three.js/WebGL stack;
- exact focus-mode treatment;
- 4WIDE typography or grid.

### Portfilo translation

Portfilo can have a calm default hero and a more active interaction state without continuously animating the background.

A state change should reveal more information or context, not merely add visual intensity.

### Implementation consequence

GSAP + CSS/SVG can handle the first version.

WebGL is optional only if a later approved material behavior cannot be expressed otherwise.

---

## Dash

Reference:
https://www.dashcreative.co/

Technical case study:
https://tympanus.net/codrops/2026/07/21/magnetic-commerce-building-the-dash-creative-website/

### Learn

- pointer behavior works best when it follows a brand concept;
- pointer movement can affect a full-screen surface without becoming a cursor gimmick;
- persistence/momentum makes response feel continuous rather than mechanical;
- restraint matters: their effect stays behind typography and is intentionally bounded.

### Do not copy

- magnetic-commerce metaphor;
- Dash logo behavior;
- live video texture;
- sine-wave distortion;
- Shopify/ecommerce styling;
- custom shader implementation.

### Portfilo translation

If the hero surface responds to the pointer, it should feel like a subtle material response in the background or selected content, not a custom-cursor trick.

The native pointer may remain unchanged.

### Implementation consequence

Start with a bounded CSS/GSAP response.

Only consider a shader if a selected Portfilo material concept truly requires directional distortion.

---

## MetaLab

Reference:
https://www.metalab.com/

Implementation account:
https://tympanus.net/codrops/2026/01/08/from-whats-a-string-to-sites-of-the-day-nathan-dallaires-high-end-web-experiences/

### Learn

- the page can alternate between open black space and authored visual states;
- frames/portals are triggered by interaction rather than permanently filling the screen;
- strong project/content media can do the visual work;
- exploratory behavior remains usable because the frame system has a clear interaction model.

### Do not copy

- MetaLab's frame geometry;
- project imagery;
- exact hover animation;
- exact portal/window compositions;
- client universe metaphor.

### Portfilo translation

Portfilo can rest in a quiet black/grain state, then open **contextual surface previews** using only real Portfilo material:

- Work -> real project interface/media;
- Hustle -> real founder/interview photography when available;
- Journal -> real editorial visual/content state;
- Services -> a controlled typographic/system state rather than fake imagery.

This also gives Responsive Identity a concrete job: the surrounding visual state changes while the emblem/wordmark remain recognizably Portfilo.

### Implementation consequence

HTML/SVG/CSS + GSAP is enough for frame opening, masks, clips, and preview positioning.

No WebGL is required.

---

# Shared constraints for both directions

Locked:

- Sharp Ornamental 01 remains approved;
- PORTFILO wordmark remains approved;
- exact approved hero headline remains **Software built around the problem.**
- approved support copy remains unchanged;
- public navigation remains `Work / Services / Hustle / Journal / Contact`;
- dark-first environment;
- no fake Work/media/evidence;
- no generated complete website screenshot;
- no giant display type as the entire concept;
- no Bricolage Grotesque;
- no isolated background test;
- no shader-as-concept.

Hero typography remains unselected.

Both directions require a calmer, sharper sans/grotesk that is evaluated **inside the selected composition**.

---

# Direction A — Quiet Surface / Active Interface

## Thesis

**A quiet grainy dark surface keeps Portfilo calm at rest, while masks, spatial continuity, and subtle material response make the interface feel alive when the visitor acts.**

## Resting frame

The viewport uses a near-black / very dark blue-black field with:

- visible fine grain;
- soft uneven tonal variation;
- no obvious radial blob;
- no central visual object;
- no constant animation.

The background treatment takes only the **surface role** from OpenAI Business.

It should look complete even when still.

## Identity

- Sharp Ornamental 01 acts as the compact primary chrome identity;
- PORTFILO wordmark remains visible but restrained;
- they should not form the old rigid Perimeter Field composition by default;
- exact placement is resolved with the selected typography, not inherited from rejected prototypes.

## Headline / support hierarchy

Headline:

- moderate display scale;
- one or two deliberate lines;
- calm enough that it does not become a poster;
- positioned as the primary commercial statement, not the graphic object.

Support copy:

- belongs to the same compositional group or adjoining information zone;
- readable contrast;
- no detached gray paragraph treatment;
- should explain Portfilo without competing with the statement.

Typography is selected inside this composition after this direction is chosen.

## Navigation relationship

Navigation is part of the hero's interface state rather than decorative perimeter text.

Possible resting behavior:

- compact;
- stable;
- clearly accessible;
- spatially connected to identity.

On hover/focus, the selected item may trigger a small contextual state change in the surface rather than moving the nav itself dramatically.

## Motion thesis

**The resting frame is quiet. State changes are where the craft appears.**

First load:

- one controlled identity/content reveal;
- mask/clip behavior rather than generic fade-up;
- no elaborate splash screen.

First scroll:

- hero foreground gives way through one clear mask/crop boundary;
- background remains continuous;
- the next surface appears to occupy the same spatial world.

Later Work navigation:

- real Work media becomes the shared transition object;
- GSAP Flip is a strong candidate.

## Pointer behavior

Native pointer remains.

The surface may respond subtly to pointer movement:

- very small local light/grain displacement;
- bounded depth shift;
- slow settling after movement.

The response must stay behind the content.

No cursor blob, ring, magnetic cursor, spotlight, or obvious ripple.

On touch, omit it cleanly.

## Implementation path

- Astro / semantic HTML;
- custom CSS;
- static gradient or authored background plate;
- grain texture;
- GSAP;
- clip-path / masks;
- GSAP Flip later for Work;
- no WebGL initially.

## Why it could belong to Portfilo

The identity remains calm while the **software-like state behavior** carries Responsive Identity.

The page does not need a permanent graphic object to prove it is digital.

## Honest risk

If the static composition and typography are too conventional, this can collapse into a polished but generic dark software-studio site.

The motion and spatial system therefore have to be genuinely precise.

---

# Direction B — Context Frames

## Thesis

**Portfilo rests mostly black and quiet, then interaction opens real contextual visual states around a stable identity, letting Work, Services, Hustle, and Journal temporarily reshape the same first viewport.**

## Resting frame

The default hero is darker and emptier than Direction A:

- black / near-black field;
- very restrained grain;
- little or no visible gradient;
- identity and proposition are clearly readable;
- no permanent hero artwork.

This explicitly embraces the pattern the founder noticed on strong sites: **graphics alternate with black rather than filling every moment**.

## Identity

- emblem remains the constant compact anchor;
- wordmark remains a stable secondary brand anchor;
- identity stays fixed enough that the changing surrounding state still reads as Portfilo.

This is the clearest direct expression of Responsive Identity.

## Headline / support hierarchy

At rest:

- headline is smaller and more controlled than a traditional agency hero;
- support copy is integrated into the same structured text zone;
- type does not attempt to be the spectacle.

During contextual states:

- headline/support may compress, shift, or mask to make room for the preview state;
- content remains readable and recoverable;
- no arbitrary typography distortion.

## Navigation relationship

Navigation becomes the trigger system.

Examples, using **real material only**:

- hover/focus `Work` -> a frame/window opens with real project media when available;
- `Hustle` -> real Hustle photography/editorial material when available;
- `Journal` -> real editorial visual or reading state;
- `Services` -> a typographic/system state using the actual approved service capabilities;
- `Contact` -> a restrained contact-state transition.

On touch, this becomes tap/selection rather than hover dependency.

Nothing fake is invented just to populate a state.

## Motion thesis

**The viewport changes context without feeling like it changes websites.**

State transition:

- frame grows/reveals from a clear spatial origin;
- identity remains stable;
- text reorganizes around the visual;
- exit returns cleanly to black/resting state.

Route transition:

- when the selected state has real media, that media can continue into the destination page;
- MERSI-like shared continuity becomes possible later.

This uses MetaLab's idea of triggered visual worlds without copying its frame design.

## Pointer behavior

Pointer position can influence:

- frame crop;
- preview position;
- small parallax inside the opened state;
- opening direction or reveal progress within a bounded range.

The pointer changes **content state**, not the cursor itself.

No effect exists when no contextual state is active.

## Implementation path

- Astro / semantic HTML;
- CSS/SVG masks and clip paths;
- absolute/fixed preview layers;
- GSAP for opening/repositioning;
- GSAP Flip for later shared-media routing;
- real responsive fallbacks for touch;
- no WebGL required.

## Why it could belong to Portfilo

Portfilo has multiple public surfaces with intentionally different atmospheres.

This direction turns that product architecture into the visual behavior itself.

The homepage becomes a controlled gateway into those states rather than a generic software-studio poster.

## Honest risk

This direction depends on having enough **real media and content** to make the contextual states strong.

Before Work/Hustle/Journal assets are mature, some states may need to remain deliberately minimal.

It is more ambitious and easier to execute badly than Direction A.

---

# Comparison

| | Direction A — Quiet Surface / Active Interface | Direction B — Context Frames |
| --- | --- | --- |
| Resting frame | grainy dark atmospheric field | mostly black / minimal field |
| Main source of character | transitions + material response | changing contextual states |
| OpenAI Business influence | stronger | very light |
| MERSI influence | strong | strong |
| 4WIDE influence | restrained state/motion logic | state logic |
| Dash influence | subtle pointer material response | pointer controls active frame |
| MetaLab influence | low | high |
| Dependence on real media | low initially | high |
| Technical complexity | lower | medium |
| Risk of generic result | medium | lower if executed well |
| Risk of overdesign | lower | higher |
| Fit with Responsive Identity | strong | **strongest** |
| Recommended first build | **yes** | challenger / bolder route |

---

# Recommendation

**Direction A — Quiet Surface / Active Interface** is the recommended first prototype.

Reason:

It matches the founder's clarified preference for a quiet grainy resting background while keeping the technically ambitious part where the founder has responded most positively: motion, transitions, and interaction.

It is also honest with Portfilo's current asset maturity.

**Direction B — Context Frames** is the stronger identity system in the long run and the better MetaLab-derived alternative.

It should be selected now only if the founder wants the homepage interaction itself to carry significantly more of the brand and accepts the dependency on real Work/Hustle/Journal material.

---

# Selection gate

Founder selects:

- **A — Quiet Surface / Active Interface**
- **B — Context Frames**
- reject both

After selection:

1. resolve hero typography inside the chosen complete direction;
2. define the exact first-viewport composition;
3. build one exact desktop hero prototype;
4. run rendered visual critique under `portfilo-visual-direction`;
5. only after static approval, prototype the focal interaction/motion.

No runtime homepage replacement yet.

No merge to `main`.

No deployment.


## Founder selection outcome

**A — Quiet Surface / Active Interface** is selected.

Direction B — Context Frames remains useful future expansion evidence, especially once stronger real Work / Hustle / Journal media exists, but it has no current implementation authority.

Current next gate:

**HERO TYPOGRAPHY + FIRST-VIEWPORT COMPOSITION INSIDE DIRECTION A**

Do not build the hero until typography and static composition are selected.
