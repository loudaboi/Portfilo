# Homepage Featured Background Visual Brief

_Last updated: 2026-09-04_

_Status: APPROVED DIRECTION / PRIMARY TEST SELECTED / GENERATION INSTRUCTION REQUIRED / NO IMAGE GENERATION AUTHORIZED_

## Purpose

Define the visual role of the black featured-story panel on the Portfilo homepage after rejecting topic-specific illustration as unnecessary for this surface.

The homepage already supplies the featured story's meaning through real HTML, including topic, editorial type, author, headline/context, and link behavior.

The generated image therefore does **not** need to explain Business, Technology, Startups, AI, Building, or the featured article itself.

Its job is aesthetic and editorial:

- give the black panel visual atmosphere;
- strengthen Portfilo's publication identity;
- remain subordinate to the real light-blue/white HTML content;
- avoid semantic or physical-logic burden that the UI does not require.

## Human decision

Approved by:

`Louda Tuppal`

Approval date:

`2026-09-04`

Approved direction:

`OBSERVED SPACES`

Working description:

`Dark monochrome editorial spaces with anonymous blurred human presence.`

The user-supplied reference set establishes the desired taste characteristics only. No supplied image, composition, photographer, publication, artwork, or distinctive scene should be copied.

## Why this supersedes topic covers

Previous topic-specific tests required the generated image to carry semantic meaning that the homepage HTML already communicates. That increased pressure to invent objects, workflows, symbolic scenes, or structural relationships, which produced unnecessary complexity and logic failures.

The approved replacement is one publication-level background system.

New system logic:

`featured story -> same approved homepage background family`

The topic no longer determines the image.

## V0 asset strategy

Start with **one canonical background image**.

Do not build five topic assets.

If the first image passes actual homepage-context review, the system may later expand to a maximum of **three related variants**.

Variants exist for visual freshness, not topic semantics.

Do not automatically rotate variants until a later implementation decision establishes whether selection is manual or deterministic.

## Shared visual grammar

Approved characteristics:

- monochrome / grayscale;
- dark, subdued overall tonality;
- architecture or spatial setting is primary;
- anonymous human presence may appear only as motion, silhouette, partial body, or indistinct blur;
- no recognizable face or portrait subject;
- people are secondary to the setting;
- editorial, observational atmosphere;
- strong spatial geometry;
- visible but restrained grain/texture;
- low semantic burden;
- no generated text;
- no logos;
- no readable documents/screens/signage;
- no topic icons or symbolic explanation;
- no poster, card, publication-cover, or UI layout inside the generated image.

## Surface behavior

The current homepage panel contains large light-blue topic typography and other real HTML content.

The background should therefore:

- remain predominantly dark;
- avoid bright high-detail forms behind the primary text area;
- keep the most visually active material away from the dominant overlay text where practical;
- preserve broad calm tonal regions;
- survive the panel's desktop and mobile crop changes;
- remain visually useful even when partially obscured by HTML.

The artwork is support, not the focal information layer.

## Human-presence rule

Unlike the rejected object-only v3 direction, human presence is now permitted because the approved references use anonymous movement to give spaces life without making a person the subject.

Controls:

- maximum approximately 2-3 discernible figures in the first test;
- figures should be blurred by motion, silhouetted, distant, cropped, or otherwise non-identifiable;
- no visible face as a focal point;
- no staged expressions or gestures;
- no implied real employee, visitor, company, or documented event;
- no generated readable clothing marks or badges.

## Rendering boundary

The desired references are photographic, but Portfilo-generated imagery must remain synthetic editorial art rather than documentary evidence.

Target:

`PHOTOGRAPHIC SPATIAL REALISM + CLEARLY ART-DIRECTED / SYNTHETIC EDITORIAL TREATMENT`

Preserve:

- believable architecture and perspective;
- believable movement and scale;
- monochrome light/shadow;
- intentional motion blur;
- restrained grain.

Avoid:

- fake reportage cues tied to a named organization/event;
- hyper-specific workplace branding;
- recognizable artworks or public-figure portraits;
- fake documentary captions;
- generated metadata/text;
- glossy commercial-ad treatment.

Visible synthetic/AI disclosure remains required if the asset is published.

## Three-variant family

These are related variants within one art direction, not separate topic concepts.

### Variant A — Dark Institutional Interior

**PRIMARY V0 TEST**

A dark architectural interior viewed from an elevated or slightly high angle. Strong wall/floor geometry and directional pools of light. Approximately 2-3 anonymous motion-blurred figures move through the space without any one person becoming the subject.

No recognizable art, portraits, exhibits, brands, signs, or readable labels.

Why primary:

- closest to the strongest user-supplied taste reference;
- strongest dark-field behavior for homepage text;
- architecture carries the image while human blur supplies life and movement;
- avoids requiring the scene to explain a business/technology topic.

### Variant B — Working Interior

A darker studio, office, workshop, or shared working interior where architecture/work surfaces are primary and one or two anonymous blurred figures imply activity.

No readable plans, screens, binders, signage, brands, or identifiable organization.

Role:

A more practical/work-oriented member of the same family if the system expands.

### Variant C — Urban Motion

A dark exterior or transitional urban setting with one or two anonymous motion-blurred silhouettes and restrained environmental lights/geometry.

No identifiable landmark, business, vehicle plate, logo, sign, or event.

Role:

An atmospheric exterior variant if the system later needs broader visual range.

## First-test decision

Generate only:

`Variant A — Dark Institutional Interior`

Do not generate B or C in the same execution.

Do not generate multiple panels or a contact sheet.

## Success criteria for Variant A

The first candidate passes only if:

- the space is aesthetically strong without needing topic symbolism;
- architecture remains the dominant subject;
- people are anonymous and visually secondary;
- no face is a focal point;
- overall tone is sufficiently dark for the homepage panel;
- calm/dark regions support the light-blue HTML overlay;
- no generated text, signage, logos, artwork copies, publication layout, or UI appears;
- the scene's basic architecture and human movement make immediate physical sense;
- it does not look like a documented real Portfilo event or named workplace;
- it feels consistent with the supplied taste direction without copying a reference.

## Implementation state

Homepage implementation authorization:

`NO`

Do not change `src/pages/index.astro` or add image-variant logic until a candidate is approved in actual homepage context.

## Gate

Direction approval: `YES`

Primary test selected: `YES — Variant A`

Generator instruction prepared: `NO`

Generator instruction presented: `NO`

Image generation authorized: `NO`
