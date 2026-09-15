# Portfilo Design

_Last updated: 2026-09-15_

This file is the concise visual implementation brief for Portfilo.

For visual work, use this file before older design exploration records.

## Brand

Portfilo is a software design and development studio with supporting editorial surfaces.

Public architecture:

`Work / Services / Hustle / Journal / Contact`

Positioning:

**Problem-led software.**

## Locked identity

Use the approved production assets:

- Sharp Ornamental 01 emblem;
- PORTFILO all-caps wordmark.

For the homepage hero:

- keep emblem and wordmark separate;
- do not combine them into a horizontal lockup;
- do not invent replacement marks.

## Hero palette

Use only:

- black;
- near-black;
- graphite;
- neutral silver-gray;
- off-white.

Do not introduce:

- blue;
- navy;
- teal;
- purple;
- colored glow;
- aurora gradients;
- chrome effects.

## Material reference

The supplied OpenAI Business screenshot is a reference only for:

- visible fine grain;
- dark tonal depth;
- broad uneven illumination.

Translate it to neutral Portfilo values.

The background should read as:

**black -> graphite -> faint neutral silver**

No visible spotlight, orb, blob, glow source, or obvious radial-gradient shape.

Grain must actually be visible.

## Approved opening copy

Headline:

**Software built around the problem.**

Support:

**We design and develop software around business needs and constraints.**

Do not add capability enumeration, CTA copy, kickers, or extra explanatory text to the opening screen without a separate founder decision.

## Avoid

Do not default to:

- generic agency hero;
- giant left-aligned sans headline as the whole design;
- combined logo lockup;
- bento/card filler;
- thin-rule luxury grid;
- abstract center object;
- decorative 3D;
- orb/blob/shader art;
- glass;
- AI gradients;
- fake project UI;
- fake Work media;
- filler labels;
- arbitrary kicker copy;
- custom cursor gimmicks;
- generic fade-up animation.

## Selected opening structural reference

**MetaLab** is the founder-selected single structural reference for Portfilo's opening-screen composition.

Use MetaLab to study:

- opening-screen hierarchy;
- relationship between identity, proposition, navigation, and work;
- how quickly real work/content enters the experience;
- how interface elements are distributed without a conventional agency-hero feel;
- how the opening remains commercially understandable while still feeling authored.

Do not copy:

- MetaLab branding;
- exact typography;
- exact colors;
- proprietary graphics;
- project imagery;
- literal frame/portal motifs;
- copy.

For this phase, do not mix Obys, MERSI, PX PUSH, or other sites into the macro opening geometry. They may remain later supporting references for specific mechanisms only.

## Reference roles

Use real references as structural evidence, not mood words.

- **Obys**: identity embedded into composition and interface;
- **MERSI**: composed layout, spatial continuity, masks, transitions;
- **OpenAI Business screenshot**: grain density and neutralized material depth only;
- **MetaLab**: contextual state changes, not its portal graphics;
- **Dash**: restrained pointer-to-material response;
- **PX PUSH**: identity changing role from hero composition to interface.

Do not copy their palette, typography, branded graphics, photography, or motifs.


## Agent role boundary

For visual authorship, Codex is **not** the art director.

Codex may:

- inspect the running page;
- measure layout;
- compare rendered output against an approved reference/spec;
- implement exact approved geometry;
- run responsive/build/QA checks;
- report visual defects.

Codex must not independently decide:

- the macro first-viewport composition;
- where identity should live;
- which empty region should be filled;
- headline scale as an art-direction choice;
- decorative visual motifs;
- the structural layout direction.

Those decisions must come from a founder-approved reference-pinned geometry spec.

Current workflow:

`real reference -> measured geometry -> founder approval -> Codex implementation -> browser QA`

Do not return to:

`abstract constraints -> Codex invents layout -> critique after the fact`

## Browser-first visual workflow

The browser is the source of visual truth.

Do not create detached HTML specimens, generated website screenshots, abstract layout diagrams, or named visual concepts as a substitute for the real homepage.

For each visual task:

1. inspect the real running page;
2. inspect the real references;
3. report the largest structural differences;
4. propose one bounded change;
5. wait for approval when the change is consequential;
6. implement in the real Astro homepage;
7. inspect the rendered result at fixed viewports;
8. critique the actual result;
9. make one consolidated correction pass;
10. present the rendered page for founder review.

Do not commit a visual candidate merely because the source code is clean.

## Current implementation target

Work only on the real first viewport in:

`src/pages/index.astro`

and the minimum existing styles/components needed to support it.

Do not redesign below-fold sections yet.

Do not add hero motion yet.

The current goal is to make the **static real first viewport visually strong in-browser** before interaction work resumes.

## Opening-screen hierarchy

Treat the first screen as **Portfilo's opening screen**, not as a conventional marketing hero.

Only five content elements are currently justified:

1. approved PORTFILO wordmark;
2. Sharp Ornamental 01 emblem;
3. navigation;
4. approved headline;
5. approved short support sentence.

Current hierarchy:

- PORTFILO wordmark is the primary textual identity;
- headline is the primary proposition;
- support clarifies the proposition;
- navigation is secondary interface;
- emblem is a secondary independent identity marker.

Do not force equal visual weight between emblem and wordmark.

Do not give every element its own rail or visual event.

The opening is **not required** to be exactly 100vh.

The next section may be partially visible when that continuation is intentional and visually useful.

Do not place the support sentence on a separate rail merely because a reference uses descriptive copy there.

Do not copy Obys coordinates literally. Use its measurements to understand structure, not to reproduce its page.

## First-viewport constraints

Use:

- real approved emblem;
- real approved wordmark;
- real approved copy;
- real navigation labels;
- neutral black / graphite / silver grain surface.

Do not assume:

- a conventional top-left logo;
- top-right navigation;
- a giant left headline;
- a visible split seam;
- vertical navigation;
- a large wordmark.

Those are all open and must be justified by the actual rendered composition.

## Typography

Hero/interface typography is open.

Do not run a detached font specimen.

Judge type only inside the real first viewport.

## Visual review questions

At each browser review, answer only:

1. Does this look recognizably authored rather than category-generic?
2. Does the identity feel embedded in the composition rather than attached to it?
3. Is every area of negative space structurally intentional?
4. What are the three largest visible problems?

If the answer to #1 is no, do not polish. Change the composition.

## Interaction later

Only after the static first viewport is founder-approved, resume:

- pointer/material response;
- navigation state changes;
- first-scroll continuity;
- shared-element motion.

Prefer CSS/SVG/GSAP/Flip before WebGL.

Native scroll remains default.

## Release boundary

No merge to `main` and no deployment without explicit founder approval.
