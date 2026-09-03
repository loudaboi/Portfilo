# C027 Description / Card / Metadata Research

_Last updated: 2026-09-03_

_Status: COMPLETE / DESCRIPTION CANDIDATE PROPOSED / USER APPROVAL REQUIRED_

## Purpose

Research the final C027 `description` after the headline, dek, and body were approved.

Approved framing:

Headline:

> **Build things that make the next thing easier**

Dek:

> **An early project should leave you with more than a story about what you learned.**

Approved body:

`rewrite-v5-researched.md`

This pass does not reopen those decisions.

## Actual product job

The repository shows that `description` is used in multiple places:

1. homepage Featured/Latest story copy;
2. `/stories` archive story copy;
3. story-page `SiteHead` metadata used for search/social surfaces.

Therefore the description is **visible editorial card copy**, not merely an invisible SEO field.

Relevant implementation:

- `src/pages/index.astro` renders `story.data.description` beneath story headlines;
- `src/pages/stories/index.astro` renders `story.data.description` in archive items;
- `src/pages/stories/[slug].astro` passes `description` into `SiteHead`.

Implication:

The description must first read naturally beside the headline. It must also remain a literal, page-specific summary suitable for metadata.

## Professional / platform guidance

### Google Search Central — snippets and meta descriptions

URL:

https://developers.google.com/search/docs/appearance/snippet

Relevant guidance:

- meta descriptions should accurately describe the specific page;
- they should be short, relevant, and human-readable;
- Google may use the page content instead when it better answers a query;
- news/media pages can use a hand-written one-sentence description;
- there is no fixed required character limit.

Implication for C027:

Do not write a keyword string, generic marketing sentence, or artificial SEO pitch. A natural one-sentence summary is appropriate.

### 404 Media — homepage/category card summaries

URLs:

- https://www.404media.co/
- https://www.404media.co/tag/news/

Observed current card behavior:

404 Media commonly places one concise sentence beneath a headline. The sentence usually states the distinguishing fact, mechanism, or angle of the story directly.

Examples of structural behavior observed:

- a card summary can state what an incident demonstrates;
- a card summary can state what an article/company argues;
- a card summary can identify the concrete event or evidence behind the headline;
- the summary does not normally begin with a wrapper such as `A News story about...` merely to repeat the content type.

Transferable lesson:

For a publication card, the summary should read like useful editorial copy, not database metadata exposed to the reader.

## Rejection of the earlier description pattern

Earlier proposal:

> `A Perspective on judging early projects by their result and by whether the work changes how a later attempt begins.`

Decision:

**REJECT.**

Problems:

- `A Perspective on...` is a metadata wrapper rather than natural card copy;
- the page already exposes `Perspective` as structured content-type metadata;
- it sounds generated from the schema rather than written for a reader;
- it paraphrases the editorial brief instead of summarizing the article naturally.

## Description pattern selected

**Headline + literal article summary.**

The headline can remain memorable and argumentative. The description should state the article's actual standard plainly enough to work without the visible dek.

Because the article body has already been researched, audited, and human-approved, the description should prefer approved body language when that language already performs the summary job. This avoids unnecessary paraphrase generation.

## Candidate development

### Candidate A — recommended / body-derived

> **A project deserves credit beyond its direct result only when the work itself changes a later choice or produces something that can actually be used again.**

Source inside approved body:

The final paragraph of `rewrite-v5-researched.md` contains this sentence as the article's bounded conclusion.

Why it fits:

- already passed human review as body prose;
- literal summary of the argument;
- does not repeat the dek's `story about what you learned` language;
- makes the strict condition visible on cards where the dek is absent;
- no content-type wrapper;
- no marketing language;
- no newly invented framework term;
- works as a complete sentence in search/social metadata;
- does not require another AI paraphrase of an already stable idea.

Risk:

`deserves credit` is explicitly evaluative. That is acceptable because C027 is a Perspective and this is the article's actual judgment, but it should not be treated as Portfilo's universal institutional rule.

### Candidate B — hold / newly paraphrased

> **An early project can matter beyond its immediate result when the work changes a later choice or leaves something useful for the next attempt.**

Strengths:

- clear;
- compact;
- natural card length.

Weaknesses:

- newly generated paraphrase adds no editorial value over the already approved body sentence;
- `can matter beyond` is more abstract;
- weakens the article's `only when` standard.

Decision:

`HOLD / NOT RECOMMENDED.`

### Candidate C — reject / schema wrapper

> **A Perspective on judging early projects by their result and by whether the work changes how a later attempt begins.**

Decision:

`REJECT.`

Reason:

Reads like exposed content-model metadata rather than editorial card copy.

## Recommended complete framing if approved

Headline:

> **Build things that make the next thing easier**

Dek:

> **An early project should leave you with more than a story about what you learned.**

Description:

> **A project deserves credit beyond its direct result only when the work itself changes a later choice or produces something that can actually be used again.**

## Why reuse is appropriate here

The writing system requires headline, dek, and description to perform different jobs. It does **not** require all three to contain freshly invented sentences.

For this assignment:

- headline = memorable argument;
- dek = counterpressure/tension;
- description = literal summary used on cards and metadata.

The approved body already contains a sentence that exactly performs the third job. Reusing it is preferable to generating a cosmetic variation solely to make the fields look different.

## Gate

`USER DESCRIPTION APPROVAL REQUIRED.`

If approved:

1. lock the complete C027 framing package;
2. replace the live article body with the approved V5 body;
3. apply the approved headline/dek/description;
4. preserve existing content type/topic/author/publication metadata unless separately changed;
5. update the final C027 editorial review record;
6. verify the deployed story before calling C027 repair complete;
7. only then begin C009.