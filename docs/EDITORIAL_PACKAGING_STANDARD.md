# Portfilo Editorial Packaging Standard

_Last updated: 2026-09-10_

_Status: EDITORIAL PACKAGING ARCHITECTURE V2 / FOUNDER-EDITOR APPROVED_

## Purpose

This standard governs the reader-facing editorial package around Portfilo News, Why, and Hustle work, plus the separate metadata and visual-presentation decisions used across article, homepage, archive, search, social, and structured-data surfaces.

The reader-facing textual package is:

1. headline;
2. dek.

Metadata is infrastructure. It is not a mandatory third piece of reader-facing editorial copy.

An editorial image is a separate visual-presentation layer. It may strengthen a package, but it is not a mandatory third element and must never be manufactured merely because a publishing surface supports one.

This standard refines and, where necessary, supersedes older wording in:

- `docs/COPY_STYLE.md`;
- `docs/WRITING_SYSTEM.md`;
- `docs/PUBLISHING_STANDARD.md`;
- `AGENTS.md`;
- `research/STYLE_BRIEF_TEMPLATE.md`;
- `research/STYLE_RESEARCH_TEMPLATE.md`.

If older wording treats `description` as a required third reader-facing summary layer, or treats `Stories` as the current public archive architecture, use this standard instead.

The image-integrity, generation, treatment, crop, disclosure, and approval rules in `docs/IMAGE_SYSTEM.md` and `docs/PHOTO_TREATMENT.md` remain authoritative for imagery.

## Core rule

> **A Portfilo piece has a headline and a dek. Do not manufacture a third visible sentence or a decorative image merely because the platform can display one.**

The headline and dek should work together as one textual editorial package.

The metadata description should normally reuse the dek. A separate metadata description is an exception for a concrete metadata problem, not a routine writing exercise.

An image is optional at the publication level across News, Why, and Hustle. A piece must not be blocked from publication solely because no suitable image is available.

AI output has zero stylistic or visual authority. A generated headline, dek, metadata override, image concept, or image is a proposal until it passes the relevant human editorial gate.

## 1. Headline job

The headline names the development, finding, question, tension, or argument.

It should give the reader the clearest useful entry into the piece without outrunning the evidence.

A headline may be broad when the piece genuinely answers a broad question. The dek can then narrow, answer, orient, qualify, or add the most useful missing information.

## 2. Dek job

The dek is the supporting reader-facing copy attached to the headline.

It may appear wherever Portfilo presents the editorial package, including:

- the article page;
- homepage feature treatment;
- homepage News presentation;
- News, Why, and Hustle archives;
- other editorial index/card surfaces when the layout calls for it.

The dek should add useful editorial information the headline does not carry.

Possible jobs include:

- give the clearest defensible answer;
- narrow scope;
- establish the concrete situation;
- state a meaningful finding;
- surface a material limitation;
- explain why the subject matters now;
- identify what was examined when the reporting method itself is useful context.

One or two sentences will usually be enough.

Do not force the dek to become:

- a second headline;
- a slogan;
- a curiosity gap;
- a compressed abstract of the article;
- a list of every mechanism or conclusion.

Read the headline and dek together. The package should make sense without requiring a third sentence to explain what the article is doing.

## 3. Metadata description job

### Default behavior

Editorial metadata uses:

```text
metaDescription ?? dek
```

The dek is therefore the default source for:

- HTML meta description;
- Open Graph description;
- Twitter description;
- Article structured-data description.

### Optional override

An entry may define an optional `metaDescription` only when there is a concrete reason the approved dek is a poor metadata string.

Legitimate reasons may include:

- the dek depends heavily on visible headline context and becomes unclear when separated from it;
- the dek contains formatting or wording unsuitable for a metadata surface;
- a materially more self-contained metadata sentence is needed without changing the visible editorial package.

A separate override is **not** justified merely because:

- every piece should have three different packaging sentences;
- SEO folklore suggests a target character count;
- the writer wants another opportunity to summarize the article;
- the dek already performs the reader-facing job well.

### Metadata is not card copy

`metaDescription` is not the default homepage or archive summary.

Do not write metadata first and then force the visible site to display it.

## 4. Editorial image job

An editorial image is not automatically required by publication status.

For any News, Why, or Hustle piece, first ask:

> What useful job would an image perform here that the headline, dek, body, data, or verified source material does not already perform?

Valid image jobs may include:

- documenting a real person, place, object, event, product, or operating environment when verified imagery is available;
- helping readers identify the subject quickly;
- explaining a process, relationship, mechanism, or dataset;
- giving substantial conceptual work a useful visual entry point;
- distinguishing one substantial piece from another across visual index surfaces;
- carrying one approved visual identity into social/share derivatives.

Invalid reasons include:

- every article needs a hero;
- the page feels empty;
- a generated image would make the piece look more complete;
- another publication uses images heavily;
- visual consistency requires filling every image slot.

`NO IMAGE` remains a legitimate editorial outcome.

A missing image must not lower the evidentiary or writing standard, but it must not by itself block an otherwise publication-ready piece.

## 5. Section-specific image defaults

The publication-level rule is the same across all three sections: imagery is optional and no piece is blocked solely because no suitable image is available.

The editorial preference can still differ by job.

### News

Image expectation: **optional**.

News should prioritize verification, clarity, and speed. A narrow factual update does not need an image to be complete.

Use an image when it materially helps establish or identify the development, for example:

- verified documentary photography;
- a verified product or interface screenshot;
- a relevant source document or evidence artifact;
- an evidence-driven chart or diagram;
- a justified editorial illustration that cannot reasonably be mistaken for documentary evidence.

Do not delay fast factual News merely to obtain or manufacture a hero image.

### Why

Image expectation: **preferred when it performs a real explanatory, documentary, or conceptual job, but not required**.

Substantial Why work often benefits from a useful visual entry point, diagram, source visual, data graphic, verified photograph, or editorial illustration. That preference does not create a publication blocker.

If the available concepts would be decorative, generic, misleading, clichéd, or less useful than the text/data, publish without an image.

### Hustle

Image expectation: **strongly preferred when authentic subject or operating-context imagery is available, but not required**.

Because Hustle is people-led reported work, verified imagery of the founder, operator, business owner, workplace, product, process, or operating environment can materially strengthen the reporting package.

Prefer real, verified, rights-cleared imagery when the person or operating context is visually central.

Do not block publication when that imagery is unavailable. Do not replace missing access with a generated likeness, invented workplace, fake documentary scene, or generic promotional stock image.

A non-portrait concept, verified object/process image, diagram, or `NO IMAGE` outcome is preferable to misleading specificity.

## 6. Acceptable image types by editorial job

Use the smallest truthful category that performs the job.

### Verified photography

Use when a real scene, person, object, workplace, event, or environment materially helps the reader.

Follow rights, provenance, verification, credit, and `docs/PHOTO_TREATMENT.md` requirements.

### Verified screenshots, documents, and source material

Use when the artifact itself is relevant evidence or context.

Do not fabricate or reconstruct source material through image generation.

### Data graphics and diagrams

Use when relationships, quantities, processes, systems, or comparisons are better understood visually.

Data graphics are evidence-driven artifacts. Their underlying sources and methodology must remain traceable. Do not ask an image model to generate factual charts.

### Commissioned or generated editorial illustration

Use when a conceptual or explanatory visual genuinely performs a useful job without pretending to document a real event.

Generated imagery remains editorial illustration, never documentary evidence, and must follow `docs/IMAGE_SYSTEM.md` including explicit approval and generation gates.

### Brand graphic

Use only when the surface/job is genuinely brand-led rather than story-documentary.

Do not use a generic brand graphic as a routine substitute for missing editorial imagery.

### No image

Use when no available image category adds enough value to justify its evidentiary, rights, production, disclosure, or visual cost.

## 7. Image exceptions and stop conditions

`NO IMAGE` is especially justified when:

- image rights or provenance cannot be established;
- visual access would compromise privacy or safety;
- available photography is promotional or materially misleading;
- a real-person or real-company story would require invented documentary specificity;
- the only generated concepts are generic business/AI/startup imagery;
- a screenshot or document cannot be verified;
- the image would overstate what the reporting established;
- the article is a narrow fast-News update and imagery adds no material reader value;
- text, data, or source material already performs the communication job better.

Do not downgrade the editorial decision simply to avoid an empty image slot. The layout should support the honest no-image state.

## 8. Disclosure, credit, and provenance

Image disclosure depends on what the image is.

### Generated imagery

Readers must be able to determine that a synthetic image is synthetic without inspecting hidden metadata.

Visible wording must explicitly communicate AI generation or synthetic/editorial illustration.

Content Credentials/C2PA provenance should be preserved when practical, but embedded provenance does not replace visible disclosure.

### Material photo-illustration or compositing

If a real photograph has been materially composited or transformed beyond ordinary editorial treatment in a way that changes what a reasonable reader might infer, identify it appropriately as photo-illustration or equivalent.

### Ordinary photographic treatment

Approved crop, grayscale, exposure, tonal work, grain, mild sharpening, and other non-generative treatment under `PORTFILO EDITORIAL MONOCHROME v1` do not by themselves convert a verified photograph into illustration.

### Credits and source attribution

Real photography, screenshots, documents, supplied assets, commissioned work, and third-party imagery should carry the credit/source information required by rights, provenance, or reader understanding.

Data graphics should identify the underlying source when readers need it to evaluate the graphic.

## 9. Homepage, archive, article, and share reuse

Portfilo should normally establish **one approved visual identity per piece**, not a different decorative image for every surface.

The same approved image or crop-safe derivative may be reused across:

- article hero;
- homepage Feature;
- homepage News lead when appropriate;
- News/Why/Hustle archive cards or leads;
- Open Graph/social preview;
- structured-data/search derivatives.

Repetition of the same story image across these surfaces is not itself a design defect. It reinforces the identity of the same editorial artifact.

Reuse does **not** mean every surface must display the image.

Text-led treatments remain valid, including:

- Latest News ticker/headline strips;
- secondary News lists;
- dense archive/index treatments;
- mobile layouts where visual hierarchy or scanning is better served without repeating the image.

Do not:

- generate unrelated alternate art merely to avoid repetition;
- reuse one generic illustration across unrelated pieces as filler;
- change the visual implication between surfaces;
- crop away the material subject or disclosure in a derivative.

The image system's crop-safe composition and derivative rules remain authoritative.

## 10. Mobile and hierarchy

Mobile is a first-class editorial surface.

An image must not automatically outrank the headline merely because an image exists.

For each surface, preserve the editorial job:

- fast News should remain easy to scan;
- substantial Why/Hustle work may use stronger visual entry when the image is meaningful;
- text-only/no-image states should remain deliberate rather than look broken;
- generated-image disclosure must remain legible on mobile;
- credits/captions must remain readable where displayed.

Exact runtime ordering is an implementation decision and must be reviewed separately before changing current components.

## 11. Package-first workflow

For every nontrivial editorial package:

1. read the approved body or final evidence position;
2. state the headline job;
3. state the dek job;
4. draft a small number of materially different headline/dek proposals when needed;
5. read headline + dek together;
6. verify that the dek adds useful information rather than translating the headline;
7. check the dek in the actual card/index context;
8. check whether the dek also works as metadata;
9. add `metaDescription` only if a real conflict remains;
10. run the image-necessity gate;
11. if an image is justified, choose the truthful image category and follow the relevant image workflow;
12. if no suitable image exists, record or accept `NO IMAGE` and continue without treating that as a publication defect;
13. require human approval at the story-specific gate.

Do not move from `body approved` to `AI, summarize this story`.

Do not ask what a third description can say that the headline and dek have not said. If headline + dek already form a complete package, stop.

Do not ask an image model to fill an empty visual slot.

## 12. Human-edited exemplar use

When packaging research is needed, choose examples because they solve a comparable editorial problem, not because the publication is famous.

Study:

- what the headline establishes;
- what the standfirst/dek adds;
- how dependent the supporting copy is on the headline;
- whether it states an answer, situation, finding, scope, limitation, or reporting context;
- whether an image is documentary, explanatory, conceptual, or absent;
- what job the image performs on article and index surfaces;
- how the pair behaves on article and index/card surfaces.

When metadata is inspectable and relevant, study it separately from the visible package.

Do not imitate:

- wording;
- cadence;
- metaphors;
- jokes;
- branded terminology;
- visual identity;
- another publication's institutional voice.

Examples teach decisions, not sentences or art direction.

## 13. Failure modes

### Manufactured third layer

Reject a workflow that assumes a piece needs a third visible summary after a complete headline + dek package.

Warning pattern:

`Using X as the main example, this article/explainer shows how Y...`

This construction is not banned, but it is a strong warning sign when its main job is to describe the article as an object rather than tell the reader something useful.

### Decorative-image requirement

Reject any rule that blocks publication because an otherwise publication-ready piece has no image.

Reject image production whose only rationale is that a card, archive, or hero slot exists.

### Headline/dek duplication

Reject a dek that simply restates the headline with synonyms.

### Thesis compression

Reject supporting copy that turns the article conclusion into a vague abstract summary when a clearer answer, situation, scope, or finding exists.

### Mechanical article language

Phrases such as `This article explores`, `This story looks at`, or `This explainer shows` require a concrete editorial reason.

Reject them when they merely hide generic summary prose behind editorial scaffolding.

### SEO-shaped prose

Reject:

- keyword stuffing;
- unnatural repetition of headline terms;
- filler written to hit an imagined character count;
- metadata wording promoted into visible copy solely because it exists.

### Comprehensive-in-one-sentence pressure

Do not force every cause, mechanism, example, limitation, and conclusion into the dek or metadata override.

### Manufactured intrigue

Do not create curiosity gaps, slogans, or fake tension merely because literal supporting copy feels too simple.

### Manufactured visual specificity

Do not invent a person's likeness, workplace, product state, event scene, screenshot, document, or evidence artifact merely to make a package feel complete.

## 14. Editorial-package audit

Read in order:

1. headline;
2. dek.

Ask:

- Does the headline accurately establish the piece?
- Does the dek add a different useful layer?
- Does the pair tell the reader enough to decide whether the piece is relevant?
- Does either field merely translate the other?
- Is the subject concrete enough?
- Does the package create interest through the subject rather than copywriting tricks?
- Could a generic AI publication reuse the wording unchanged under an unrelated piece?

Then audit metadata separately:

- Does the dek remain understandable when used as metadata?
- If yes, do not add `metaDescription`.
- If no, what exact metadata problem requires an override?
- Does the override accurately describe the page without becoming SEO filler?

Then audit imagery separately:

- Does an image perform a useful editorial job?
- Is the proposed image category truthful for that job?
- Is provenance/rights/verification sufficient?
- Could a reasonable reader mistake illustration for documentary evidence?
- Is disclosure required and visible?
- Does the same approved visual survive article/card/share crops?
- If no suitable image exists, is the no-image state intentional and functional?

The correct answer to the final question may be `NO IMAGE`.

## 15. Current implementation contract

The editorial schema uses:

```yaml
title: required
dek: required
metaDescription: optional
image: optional
```

The old required `description` field is retired.

The internal Astro Content Collection remains named `stories`; that is implementation plumbing, not a public section label.

Reader-facing editorial listings use `dek`.

Story-page metadata resolves to:

```ts
metaDescription ?? dek
```

The shared `SiteHead` component may continue to receive a generic prop named `description`; editorial routes are responsible for supplying the resolved metadata value.

The schema-level `image` field remains optional. Do not encode News/Why/Hustle image preferences as hard publication invariants.

Current runtime already supports image and no-image states. This decision does not authorize runtime changes.

## 16. Research and approval boundary

Headline/dek research may happen after body approval when the packaging problem materially differs from the body-writing problem.

Approval of the body does not automatically approve headline or dek.

Approval of headline/dek does not automatically approve an image concept or image generation.

Approval of an image brief does not authorize image generation.

Approval of the package does not authorize publication.

A metadata override does not become required merely because one was useful for a different piece.

An image does not become required merely because one was useful for a different piece.

Public editorial assembly and publication remain later gates under `docs/PUBLISHING_STANDARD.md`.

## Research basis

See:

- `research/editorial-packaging/architecture-v1-decision.md`;
- `research/editorial-packaging/description-system-research.md` for historical research provenance;
- `docs/IMAGE_SYSTEM.md` and its research basis;
- Google Search Central, `Control your snippets in search results`;
- current human-edited business/technology publication packaging reviewed at the 2026-09-10 refinement gate, including fast-news feeds, analytical/explanatory features, and founder/operator reporting.

These sources justify editorial and implementation behavior only. They do not authorize imitation of another publication's voice or visual identity.
