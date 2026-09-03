# C030 Description / Card / Metadata Research — Post-Body / Post-Headline / Post-Dek

_Last updated: 2026-09-04_

_Status: COMPLETE / BODY APPROVED / HEADLINE APPROVED / DEK APPROVED / DESCRIPTION APPROVED_

## Purpose

Research the `description` for C030 after the body, headline and dek were approved.

Approved headline:

> **What actually changed?**

Approved dek:

> **A business or technology development can mean something different once it changes what someone has to do or decide.**

The description is a separate product surface and must not be treated as a duplicate dek.

## Actual Portfilo product job

Repository implementation confirms that `description` is used as:

1. visible story-card copy on the homepage when a story is featured;
2. visible story-card copy on `/stories`;
3. the story-page description passed into `SiteHead` for search/social metadata.

Relevant implementation:

- `src/pages/index.astro` renders `featuredStory.data.description` under the featured headline;
- `src/pages/stories/index.astro` renders `story.data.description` under each story headline;
- `src/pages/stories/[slug].astro` passes `description` into `SiteHead`.

Implication:

Because the approved headline `What actually changed?` is intentionally context-light, the description has to work directly beside that headline even when the dek is absent.

It should read as publication copy, not hidden SEO text and not an internal content-type wrapper.

## Platform guidance

### Google Search Central — `Control your snippets in search results`

https://developers.google.com/search/docs/appearance/snippet

Relevant guidance checked on 2026-09-04:

- Google primarily creates snippets from page content but may use the meta description when it more accurately describes the page;
- a meta description should be a short, relevant summary of the particular page;
- descriptions should be unique and page-specific;
- news/media sources can use a hand-written one-sentence description for each article;
- descriptions should be human-readable rather than keyword strings;
- Google may still choose different page text for a particular query.

## C030-specific description job

The headline supplies the question.

The dek supplies business/technology context and translates the essay into ordinary consequence language: what someone has to do or decide.

The description should therefore give the **literal central argument** in a sentence that can stand beneath the headline on `/stories`.

It should not:

- repeat the dek with synonyms;
- list Business, Technology, Startups, AI, and Building merely because those are coverage categories;
- say `A Perspective on...`;
- explain Portfilo's mission;
- promise that Portfilo always goes deeper;
- contain a subscription or quality claim;
- turn the essay into a generic argument that long-form reporting is superior.

## Strongest available source for wording

The approved V3 body already contains this sentence:

> **The meaning of a development often becomes clearer when it is followed into the choices and constraints it creates.**

This sentence was approved by Louda Tuppal as part of the C030 body on 2026-09-04.

Using it directly has an important advantage under the current writing system: the description does not require the model to generate a third synthetic paraphrase after the article's argument has already been approved in public-ready prose.

## Candidate development

### Candidate A — APPROVED

> **The meaning of a development often becomes clearer when it is followed into the choices and constraints it creates.**

Why it fits:

- exact sentence from the approved researched body;
- one sentence;
- page-specific summary of the essay's central argument;
- works directly beneath `What actually changed?`;
- avoids institutional `Portfilo believes / Portfilo follows` language;
- avoids repeating the approved dek's `do or decide` construction;
- preserves conditionality through `often`, rather than claiming every update needs additional reporting;
- applies to announcements, funding, AI adoption, products, rules, and broad labels without listing them;
- human-readable for visible card copy;
- suitable as search/social metadata;
- no new stylistic authority is being invented at the metadata stage.

Known risk:

`development` is deliberately broad and the sentence does not independently say `business or technology`. On Portfilo's visible `/stories` card, content type/topic metadata surrounds the title and description. On external search/social surfaces, the page title includes Portfilo and Google may also choose page content instead of the meta description. The approved dek and opening body provide the fuller domain context on the article page.

Research judgment:

This tradeoff is preferable to writing a more explicit but newly synthesized metadata sentence that repeats the dek or turns the piece into institutional positioning.

### Candidate B — hold

> **Additional reporting earns its place when implementation, economics or constraints change the meaning of the development.**

Source:

Exact sentence from the approved body.

Strengths:

- highly specific to the editorial argument;
- preserves the article's limiting principle;
- no fresh paraphrase.

Weaknesses:

- `additional reporting` makes the card more media-about-media;
- `implementation, economics or constraints` reads more like professional/editorial vocabulary than ordinary card copy;
- less natural directly below the question headline.

Decision: `HOLD / NOT RECOMMENDED.`

### Candidate C — reject

> **Portfilo covers Business, Technology, Startups, AI, and Building because changes in one area can alter decisions in another.**

Source:

Exact sentence from the approved body.

Strength:

- clear institutional context;
- approved wording.

Weaknesses:

- reads too much like About-page copy;
- list-heavy on a story card;
- describes coverage architecture more than the essay's central argument;
- risks making the story look like a brand-positioning document.

Decision: `REJECT FOR DESCRIPTION.`

### Candidate D — reject

> **A Perspective on why business and technology stories can change meaning after an announcement reaches real decisions and constraints.**

Decision: `REJECT.`

Reason:

- exposes the content-type schema;
- freshly synthesizes the argument despite approved body wording already being available;
- over-centers announcements;
- `reaches real decisions and constraints` is abstract and model-shaped.

## Final approved framing

Headline:

> **What actually changed?**

Dek:

> **A business or technology development can mean something different once it changes what someone has to do or decide.**

Description:

> **The meaning of a development often becomes clearer when it is followed into the choices and constraints it creates.**

Approved by Louda Tuppal on 2026-09-04.

## Gate

`DESCRIPTION APPROVED / COMPLETE EDITORIAL PACKAGE LOCKED.`

The approved package may be assembled in the C030 content entry while preserving `status: draft`, `featured: false`, and no `publishedAt`.

Changing `status` to `published` or adding a publication date requires a separate explicit publication authorization.
