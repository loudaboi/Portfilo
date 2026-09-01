# Portfilo Publishing Standard

## Principle

The website publishes journalism. It does not generate journalism.

Publishing is the final part of a research and verification process.

## Pipeline

```text
IDEA
  ↓
RESEARCH BRIEF
  ↓
SOURCE MAP
  ↓
PRIMARY / SECONDARY RESEARCH
  ↓
EVIDENCE LEDGER
  ↓
CONTRADICTION SEARCH
  ↓
STORY DECISION
  ↓
DRAFT
  ↓
ADVERSARIAL REVIEW
  ↓
CLAIM AUDIT
  ↓
EDITORIAL PASS
  ↓
HEADLINE AUDIT
  ↓
PUBLISH
  ↓
DISTRIBUTE
  ↓
CORRECT / UPDATE WHEN NEEDED
```

## Stage 1 - Idea

An idea is not an assignment and not a headline.

Record the question worth investigating.

## Stage 2 - Research brief

Create a research packet and define:

- question;
- reader payoff;
- hypothesis;
- disproof condition;
- scope;
- potential sources;
- potential interviews.

## Stage 3 - Research

Follow `RESEARCH_STANDARD.md`.

Do not begin long-form drafting simply because enough material exists to produce plausible prose.

## Stage 4 - Story decision

Select one:

- publish;
- reframe;
- continue research;
- kill.

Record the decision and reasoning in the research packet.

## Stage 5 - Draft

The draft may only rely on verified/qualified claims from the research packet.

If a new factual assertion is needed, return to research.

## Stage 6 - Adversarial review

Challenge:

- sourcing;
- framing;
- causality;
- representativeness;
- missing context;
- stale data;
- headline strength.

Resolve material findings before publication.

## Stage 7 - Claim audit

Trace consequential factual assertions back to evidence.

No source or evidence:
- source it;
- qualify it;
- remove it.

## Stage 8 - Editorial pass

After facts are stable:

- improve structure;
- remove repetition;
- remove generic AI language;
- sharpen explanations;
- preserve caveats;
- improve transitions;
- ensure Philippine context is relevant rather than decorative.

Do not trade accuracy for style.

## Stage 9 - Headline audit

The headline must:

- reflect the actual story;
- preserve important scope;
- avoid false universality;
- avoid fake certainty;
- avoid causal claims the evidence cannot establish.

## Stage 10 - Prepare content entry

The v0 content schema will be implemented in Astro. At minimum a publishable story should support:

```yaml
title:
description:
contentType:
topic:
author:
publishedAt:
updatedAt:
status:
featured:
series:
seriesOrder:
methodology:
correction:
```

The exact schema is defined during the Content Architecture phase.

## Status rules

### draft

Not public.

May contain unfinished prose but should not contain fabricated placeholder reporting.

### published

Eligible for production routes and indexes.

Must have passed the required editorial/research checks for its content type.

### archived

Optional future state if needed. Do not implement unless required.

Scheduled publishing is not a v0 requirement.

## Series

A series is metadata, not a separate hardcoded site.

A story may optionally reference:

- series identifier;
- series order.

The website should assemble series pages from structured content.

The first real Portfilo series will be selected through separate Editorial Launch Research, not during the website build.

## Publishing operation in v0

Initial authoring is repository-based.

Expected workflow:

1. create/edit Markdown content;
2. validate locally;
3. commit;
4. push;
5. Cloudflare Pages builds/deploys.

No admin dashboard or CMS is required for v0.

## Distribution rule

Research once, publish many.

Derivative formats such as newsletter, social posts, video scripts, carousels, and excerpts must derive from the same verified research packet.

Do not allow downstream social content to introduce unsupported factual claims simply because it is shorter or more promotional.

## Corrections and updates

Material factual correction:

- correct the story;
- add a visible correction note;
- include correction date and what changed.

Meaningful factual update:

- update `updatedAt`;
- note the update if readers would reasonably need to know the story materially changed.

Do not silently erase the history of a consequential error.

## Publication checklist

Before changing a story to `published`:

- [ ] central question answered fairly;
- [ ] research packet exists when required;
- [ ] consequential claims verified;
- [ ] important caveats retained;
- [ ] contradictions considered;
- [ ] quotations checked;
- [ ] numbers checked;
- [ ] headline audited;
- [ ] content type is accurate;
- [ ] methodology included when useful;
- [ ] commercial disclosure included when relevant;
- [ ] article renders correctly;
- [ ] links work;
- [ ] mobile layout checked;
- [ ] metadata/description set.
