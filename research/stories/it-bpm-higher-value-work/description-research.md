# C009 Description / Card / Metadata Research

_Last updated: 2026-09-03_

_Status: COMPLETE / BODY APPROVED / DESCRIPTION CANDIDATE PROPOSED / USER APPROVAL REQUIRED_

## Purpose

Research the C009 `description` after the body was approved.

The description is not the dek. It has a separate product job.

## Actual Portfilo product job

Repository implementation confirms that `description` is used as:

1. visible story-card copy on the homepage;
2. visible story-card copy on `/stories`;
3. the story-page description passed into `SiteHead` for search/social metadata.

Relevant implementation:

- `src/pages/index.astro` renders `featuredStory.data.description` beneath the headline;
- `src/pages/stories/index.astro` renders `story.data.description` beneath archive headlines;
- `src/pages/stories/[slug].astro` passes `description` to `SiteHead`.

Implication:

The description must read naturally as publication copy beside the headline. It cannot be written as hidden SEO text or as a schema wrapper such as `An Explained story about...`.

## Platform guidance

### Google Search Central — meta descriptions/snippets

https://developers.google.com/search/docs/appearance/snippet

Relevant guidance:

- write a short, relevant summary of the specific page;
- use unique page-level descriptions;
- descriptions should be human-readable;
- news/media publishers can use a hand-written one-sentence description;
- there is no fixed required character limit;
- Google may choose page content instead when it better matches a query.

## C009-specific description job

The headline already says the article explains `higher-value work` in Philippine IT-BPM.

The dek candidate adds concrete role contrast.

The description should therefore expose the **reporting method and practical promise** in one natural sentence: Portfilo used official Philippine skills frameworks plus a structured current employer-posting sample to translate the phrase into actual jobs.

This is useful on cards because it tells readers why the story is more than a generic definition.

It also avoids forcing the description to carry every limitation about pay, prevalence and mobility.

Those limits are visible in the body and methodology field.

## Candidate development

### Candidate A — recommended

> **Portfilo reviewed official Philippine skills frameworks and 15 current employer postings to see what `higher-value work` looks like in actual jobs.**

Why it fits:

- one sentence;
- literal and page-specific;
- transparent about the reporting method;
- makes clear the article is grounded in actual roles rather than generic industry language;
- no content-type/schema wrapper;
- no marketing claim;
- no invented framework;
- works as visible card copy;
- works as search/social metadata;
- does not claim the 15 postings are representative.

Risk:

The sentence does not independently state that the sample is illustrative. That limitation remains in the body and methodology field. Adding the entire non-representativeness disclaimer here would make the card copy read like a methodology note rather than a useful description.

### Candidate B — hold

> **Philippine skills frameworks and current employer postings show how the industry's `higher-value work` phrase maps onto actual responsibilities.**

Strengths:

- concise;
- summary-led;
- no newsroom self-reference.

Weaknesses:

- `maps onto` is abstract;
- hides the original reporting step;
- sounds more like analytical memo language than card copy.

Decision: `HOLD / NOT RECOMMENDED.`

### Candidate C — reject

> **An Explained story about higher-value work in Philippine IT-BPM.**

Decision: `REJECT.`

Reason:

Exposes schema metadata instead of telling the reader anything useful.

### Candidate D — reject

> **Official skills frameworks and a structured sample of 15 current job postings point to specialized work in finance, healthcare, data, operations, risk and global capability centers. The phrase does not tell us how common those jobs are or whether they pay more.**

Decision: `REJECT.`

Reason:

This is the current mechanically duplicated description/dek. It is accurate but overloaded, list-heavy, and shaped like an evidence summary rather than natural card copy.

## Recommendation

> **Portfilo reviewed official Philippine skills frameworks and 15 current employer postings to see what `higher-value work` looks like in actual jobs.**

## Gate

`USER DESCRIPTION APPROVAL REQUIRED.`

Approval of this description does not authorize live replacement until the full framing package is approved.
