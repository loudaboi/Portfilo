# Portfilo Editorial Packaging Standard

_Last updated: 2026-09-07_

## Purpose

This standard governs the editorial package around a Portfilo story:

- headline;
- dek;
- description / story summary.

It exists because accurate copy can still fail when each field is generated as a compressed version of the same thesis.

For these three fields, this document refines the relevant guidance in:

- `docs/COPY_STYLE.md`;
- `docs/WRITING_SYSTEM.md`;
- `docs/PUBLISHING_STANDARD.md`.

Where older wording in those documents implies that a description is adequately defined by being merely `short, literal, and specific`, use this standard's more complete description-job process.

Research basis:

`research/editorial-packaging/description-system-research.md`

## Core rule

> **Editorial packaging is not article compression.**

The headline, dek, and description are three different editorial jobs.

They should be evaluated as one package, but they should not be produced by paraphrasing one another or by repeatedly compressing the body.

AI output has zero stylistic authority. A generated field is a proposal until it passes the story-specific editorial gate.

## 1. Headline job

The headline names the development, finding, question, tension, or argument.

It should give the reader the clearest useful entry into the story without outrunning the evidence.

A headline may be broad when the story genuinely answers a broad question. The supporting fields can then narrow or orient the reader.

## 2. Dek job

The dek adds editorial information the headline does not carry.

Possible jobs include:

- narrowing scope;
- locating the reader in the specific situation;
- stating what was examined;
- adding a meaningful finding;
- adding a material limitation;
- explaining why the question is being examined now.

The dek is visible article copy. It does not need to stand alone as a slogan or quotation.

Do not force tension, cleverness, aphorism, or a second headline when plain context does the job better.

## 3. Description / story-summary job

### Primary function

Under Portfilo's current implementation, `description` is visible reader-facing copy on the homepage and Stories archive and is also reused for search/social metadata and Article structured data.

Therefore:

> **Write the description as reader-facing editorial packaging first. Check metadata compatibility second.**

Do not start from `write an SEO description`.

Do not start from `summarize the article in 150 characters`.

Do not default to restating the thesis or conclusion.

### Choose the job before wording

Before generating description copy, choose the most useful job for the specific story.

A description may:

1. **Establish the situation**
   - name the concrete problem, event, stage, or circumstance the story examines.

2. **State the reporting or explanation promise**
   - tell the reader what Portfilo examined, tested, compared, reviewed, or set out to explain.

3. **Define the scope**
   - identify the specific part of a broad subject that the story actually covers.

4. **Surface distinctive evidence**
   - mention a case, dataset, source set, experiment, example, or reporting method when it helps the reader understand what is distinctive about the story.

5. **State a bounded finding**
   - use the finding when it is the clearest and most useful reason to read, provided the wording does not simply duplicate the headline or dek.

6. **Frame the reader's practical question**
   - use when the story genuinely helps a reader understand or decide something and the question is supported by the article's actual scope.

One job is usually enough. Two may be combined when the sentence remains natural.

Do not combine several modes merely to make the description feel comprehensive.

### Description length

There is no Portfilo character-count formula.

One sentence will often be enough. Two sentences are allowed when the story needs them.

The description must remain compact enough to work on the homepage and Stories archive, but editing should be based on what the reader needs rather than an arbitrary metadata target.

Search snippets may truncate. That is a presentation constraint, not a writing form.

## 4. Package-first workflow

For every nontrivial story package:

1. read the approved body or final evidence position;
2. read the proposed/approved headline;
3. read the proposed/approved dek;
4. state what information the package still needs;
5. choose the description job before drafting wording;
6. when the job is not obvious, review a small set of relevant human-edited headline/dek/description or headline/standfirst/summary examples;
7. generate only a small number of materially different proposals;
8. read the complete package aloud;
9. test the description alone as card copy;
10. check metadata/social compatibility;
11. require human approval at the story-specific gate.

Do not move directly from `body approved` to `AI, summarize this story`.

## 5. Human-edited exemplar use

Examples are selected because they solve a comparable editorial-packaging problem, not because the publication is famous.

Study:

- what new information the supporting copy adds;
- whether it frames a situation, scope, finding, method, or reader question;
- how much it depends on the headline;
- whether it reveals the conclusion or only the premise;
- what concrete nouns/details make it specific;
- how it behaves when read as card copy.

Do not imitate:

- wording;
- cadence;
- metaphors;
- jokes;
- branded voice;
- another publication's repeated sentence construction.

## 6. Description failure modes

Reject a description when it behaves like any of these without a story-specific reason:

### Thesis compression

It takes the body conclusion, replaces concrete material with abstractions, and calls the result a summary.

Warning pattern:

`X can have several causes, and choosing the wrong response can create costs.`

The statement may be true while still failing to tell the reader what is distinctive about this story.

### Dek duplication

The headline and dek already establish the problem, and the description merely says it again with synonyms.

### Generic abstraction

The sentence relies on words such as:

- results;
- factors;
- challenges;
- outcomes;
- decisions;
- uncertainty;
- change;
- impact;

when the story contains more concrete material that would better establish its scope or premise.

These words are not banned. They are warning signs when they replace the actual subject.

### Mechanical article language

Phrases such as `This article explores`, `This story looks at`, or `This piece examines` are allowed when the verb introduces useful concrete information.

Reject them when they merely hide a generic summary behind editorial-sounding scaffolding.

### SEO-shaped prose

Reject:

- keyword stuffing;
- unnatural repetition of headline terms;
- filler written only to hit an imagined character count;
- wording selected for search engines at the expense of the visible reader-facing card.

### Comprehensive-in-one-sentence pressure

Do not force every mechanism, cause, example, limitation, and conclusion into the description.

A good description selects the most useful entry into the story.

### Manufactured intrigue

Do not turn the description into a curiosity gap, slogan, or fake tension merely because a literal sentence feels too simple.

## 7. Package audit

Read in order:

1. headline;
2. dek;
3. description.

Ask:

- Does each field add a different useful layer?
- Is the subject clear without reading the body?
- Does any field merely translate another?
- Does the description tell me what this particular story is, or only summarize its thesis?
- Is there a concrete situation, scope, method, case, or finding that would orient the reader better?
- Does the package create interest through the subject itself rather than copywriting tricks?
- Could a generic AI publication publish the description unchanged under a different business article?
- Does the description still work when shown alone on a card?

If the last two answers are `yes` and `no` respectively, rewrite the description job before rewriting the sentence.

## 8. Current implementation boundary

The current content schema already separates `dek` and `description`.

The `description` field is reused across visible card copy and metadata surfaces.

Do not describe splitting `dek` and `description` as a future schema task. That split already exists.

A future dedicated `metaDescription` field may be considered only if a real conflict appears between strong reader-facing card copy and metadata requirements. Do not add another field preemptively.

## 9. Research and approval boundary

Headline/dek/description research may happen after body approval when those jobs materially differ from the body form.

Approval of one field does not approve the others.

Approval of the editorial package does not itself authorize publication.

Public-story assembly and publication remain later gates under `docs/PUBLISHING_STANDARD.md`.

## Research basis

See:

- `research/editorial-packaging/description-system-research.md`;
- Poynter guidance already recorded in Portfilo's writing-system research;
- Google Search Central, `Control your snippets in search results`;
- the human-edited WIRED, The Guardian, Harvard Business Review, and McKinsey examples recorded in the research file.

The examples justify editorial behaviors only. They do not authorize imitation of another publication's voice.