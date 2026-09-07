# Portfilo Editorial Packaging Standard

_Last updated: 2026-09-07_

_Status: EDITORIAL PACKAGING ARCHITECTURE V1 / FOUNDER-EDITOR APPROVED_

## Purpose

This standard governs the editorial package around a Portfilo story and the separate metadata description used by search, social, and structured-data surfaces.

For stories, the reader-facing editorial package is:

1. headline;
2. dek.

Metadata is infrastructure. It is not a mandatory third piece of reader-facing editorial copy.

This standard refines and, where necessary, supersedes older wording in:

- `docs/COPY_STYLE.md`;
- `docs/WRITING_SYSTEM.md`;
- `docs/PUBLISHING_STANDARD.md`;
- `AGENTS.md`;
- `research/STYLE_BRIEF_TEMPLATE.md`;
- `research/STYLE_RESEARCH_TEMPLATE.md`.

If older wording treats `description` as a required third reader-facing story-summary layer, use this standard instead.

Decision record:

`research/editorial-packaging/architecture-v1-decision.md`

Historical description-system research remains useful for provenance but does not override this v1 architecture.

## Core rule

> **A Portfilo story has a headline and a dek. Do not manufacture a third visible sentence merely because metadata exists.**

The headline and dek should work together as one editorial package.

The metadata description should normally reuse the dek. A separate metadata description is an exception for a concrete metadata problem, not a routine writing exercise.

AI output has zero stylistic authority. A generated headline, dek, or metadata override is a proposal until it passes the relevant human editorial gate.

## 1. Headline job

The headline names the development, finding, question, tension, or argument.

It should give the reader the clearest useful entry into the story without outrunning the evidence.

A headline may be broad when the story genuinely answers a broad question. The dek can then narrow, answer, orient, qualify, or add the most useful missing information.

## 2. Dek job

The dek is the supporting reader-facing copy attached to the headline.

It appears wherever Portfilo presents the story package, including:

- the story page;
- homepage feature treatment;
- homepage story listings;
- Stories archive.

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

Story metadata uses:

```text
metaDescription ?? dek
```

The dek is therefore the default source for:

- HTML meta description;
- Open Graph description;
- Twitter description;
- Article structured-data description.

### Optional override

A story may define an optional `metaDescription` only when there is a concrete reason the approved dek is a poor metadata string.

Legitimate reasons may include:

- the dek depends heavily on visible headline context and becomes unclear when separated from it;
- the dek contains formatting or wording unsuitable for a metadata surface;
- a materially more self-contained metadata sentence is needed without changing the visible editorial package.

A separate override is **not** justified merely because:

- every story should have three different packaging sentences;
- SEO folklore suggests a target character count;
- the writer wants another opportunity to summarize the article;
- the dek already performs the reader-facing job well.

### Metadata is not card copy

`metaDescription` is not displayed as the homepage or Stories-archive summary.

Do not write metadata first and then force the visible site to display it.

## 4. Package-first workflow

For every nontrivial story package:

1. read the approved body or final evidence position;
2. state the headline job;
3. state the dek job;
4. draft a small number of materially different headline/dek proposals when needed;
5. read headline + dek together;
6. verify that the dek adds useful information rather than translating the headline;
7. check the dek in the actual card/index context;
8. check whether the dek also works as metadata;
9. add `metaDescription` only if a real conflict remains;
10. require human approval at the story-specific gate.

Do not move from `body approved` to `AI, summarize this story`.

Do not ask what a third description can say that the headline and dek have not said. If headline + dek already form a complete package, stop.

## 5. Human-edited exemplar use

When packaging research is needed, choose examples because they solve a comparable editorial problem, not because the publication is famous.

Study:

- what the headline establishes;
- what the standfirst/dek adds;
- how dependent the supporting copy is on the headline;
- whether it states an answer, situation, finding, scope, limitation, or reporting context;
- how the pair behaves on article and index/card surfaces.

When metadata is inspectable and relevant, study it separately from the visible package.

Do not imitate:

- wording;
- cadence;
- metaphors;
- jokes;
- branded terminology;
- another publication's institutional voice.

Examples teach decisions, not sentences.

## 6. Failure modes

### Manufactured third layer

Reject a workflow that assumes a story needs a third visible summary after a complete headline + dek package.

Warning pattern:

`Using X as the main example, this article/explainer shows how Y...`

This construction is not banned, but it is a strong warning sign when its main job is to describe the article as an object rather than tell the reader something useful.

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

## 7. Editorial-package audit

Read in order:

1. headline;
2. dek.

Ask:

- Does the headline accurately establish the story?
- Does the dek add a different useful layer?
- Does the pair tell the reader enough to decide whether the story is relevant?
- Does either field merely translate the other?
- Is the subject concrete enough?
- Does the package create interest through the subject rather than copywriting tricks?
- Could a generic AI publication reuse the wording unchanged under an unrelated story?

Then audit metadata separately:

- Does the dek remain understandable when used as metadata?
- If yes, do not add `metaDescription`.
- If no, what exact metadata problem requires an override?
- Does the override accurately describe the page without becoming SEO filler?

## 8. Current implementation contract

The story schema uses:

```yaml
title: required
dek: required
metaDescription: optional
```

The old required story `description` field is retired.

This change applies to the **stories** collection only. Other content types, such as series or site-level page metadata, may still legitimately use a field or prop named `description` for their own purpose.

Reader-facing story listings use `dek`.

Story-page metadata resolves to:

```ts
metaDescription ?? dek
```

The shared `SiteHead` component may continue to receive a generic prop named `description`; story routes are responsible for supplying the resolved metadata value.

## 9. Research and approval boundary

Headline/dek research may happen after body approval when the packaging problem materially differs from the body-writing problem.

Approval of the body does not automatically approve headline or dek.

Approval of headline/dek does not authorize publication.

A metadata override does not become required merely because one was useful for a different story.

Public-story assembly and publication remain later gates under `docs/PUBLISHING_STANDARD.md`.

## Research basis

See:

- `research/editorial-packaging/architecture-v1-decision.md`;
- `research/editorial-packaging/description-system-research.md` for historical research provenance;
- Google Search Central, `Control your snippets in search results`;
- the human-edited publication examples recorded in the architecture decision.

These sources justify editorial and implementation behavior only. They do not authorize imitation of another publication's voice.
