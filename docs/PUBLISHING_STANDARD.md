# Portfilo Publishing Standard

## Principle

The website publishes journalism. It does not generate journalism.

Publishing is the final part of a research, writing-form, verification, and editorial process.

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
WRITING FORM / STYLE BRIEF
  ↓
DRAFT
  ↓
ADVERSARIAL REVIEW
  ↓
CLAIM AUDIT
  ↓
STRUCTURE / EDITORIAL PASS
  ↓
AI-SLOP / HUMAN-LANGUAGE PASS
  ↓
HEADLINE / DEK / DESCRIPTION AUDIT
  ↓
PUBLISH
  ↓
DISTRIBUTE
  ↓
CORRECT / UPDATE WHEN NEEDED
```

`docs/WRITING_SYSTEM.md` governs the writing-form and language gates.

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

## Stage 5 - Writing form and style brief

Before Draft 1, follow `WRITING_SYSTEM.md`.

For substantial stories, create:

`style-brief.md`

using:

`research/STYLE_BRIEF_TEMPLATE.md`

The brief must establish:

- content type;
- primary reader need;
- writing job;
- evidence shape;
- selected Portfilo recipe;
- why that form fits;
- deviations;
- any professional form research or human-edited exemplars used;
- lead, middle, limitation/counterevidence, and ending jobs;
- headline, dek, and description jobs;
- assignment-specific AI-slop risks.

The form is selected from the material. AI may assist with alternatives but has zero automatic structural or stylistic authority.

Do not copy another writer's distinctive wording, cadence, metaphors, jokes, or house voice.

## Stage 6 - Draft

The draft may only rely on verified/qualified claims from the research packet or, for a Perspective, the approved premise plus supported factual material.

If a new factual assertion is needed, return to research.

If a new institutional position about Portfilo is needed, return to the canonical institutional source or explicit editor/founder approval.

Do not let Draft 1 silently redefine the approved structure merely because generated prose flows differently.

## Stage 7 - Adversarial review

Challenge:

- sourcing;
- framing;
- causality;
- representativeness;
- missing context;
- stale data;
- headline strength;
- whether the selected form distorts the evidence;
- whether generated rhetoric creates claims or implications the evidence/brief did not authorize.

Resolve material findings before publication.

## Stage 8 - Claim audit

Trace consequential factual assertions back to evidence.

No source or evidence:
- source it;
- qualify it;
- remove it.

Also trace consequential institutional statements about Portfilo back to approved institutional authority.

## Stage 9 - Structure and editorial pass

After facts are stable:

- verify the selected form still fits the material;
- ensure each section has a distinct job;
- move caveats/counterevidence to the position where readers need them;
- remove repetition;
- remove generic AI language;
- sharpen explanations;
- preserve caveats;
- improve transitions only when the reader actually needs one;
- ensure Philippine context is relevant rather than decorative.

Do not trade accuracy for style.

Do not line-edit around a structural failure. Fix the architecture first.

## Stage 10 - AI-slop and human-language pass

Follow the audit in `WRITING_SYSTEM.md`.

At minimum:

- read only headings/subheads;
- read only the first sentence of each paragraph;
- read the piece aloud;
- delete sentences that only explain the strategy behind the previous sentence;
- scan for repeated rhetorical patterns and institutional self-description;
- test whether a generic AI publication could publish the line unchanged.

AI-shaped prose is not fixed merely by replacing a few adjectives. Rewrite or delete the underlying pattern.

## Stage 11 - Headline, dek, and description audit

The headline must:

- reflect the actual story;
- preserve important scope;
- avoid false universality;
- avoid fake certainty;
- avoid causal claims the evidence cannot establish.

The dek must add editorial information rather than simply restate the headline.

The compact description/summary must serve cards, indexes, SEO, and social metadata without being forced to carry the rhetorical job of the dek.

The current content schema still uses one `description` field for multiple jobs. Splitting `dek` and `description` is a planned content-schema change and should be implemented deliberately in the site-copy phase.

## Stage 12 - Prepare content entry

The v0 content schema is implemented in Astro. At minimum a publishable story supports:

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

The exact current schema is defined in `src/content.config.ts`.

When the planned dek/description split is implemented, update this standard and the schema together.

## Status rules

### draft

Not public.

May contain unfinished prose but should not contain fabricated placeholder reporting.

### published

Eligible for production routes and indexes.

Must have passed the required editorial/research/writing checks for its content type.

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

1. create/edit research and style packet;
2. create/edit Markdown content;
3. validate locally;
4. commit;
5. push;
6. Cloudflare Pages builds/deploys.

No admin dashboard or CMS is required for v0.

## Distribution rule

Research once, publish many.

Derivative formats such as newsletter, social posts, video scripts, carousels, and excerpts must derive from the same verified research packet and approved writing position.

Do not allow downstream social content to introduce unsupported factual claims or new institutional promises simply because it is shorter or more promotional.

## Corrections and updates

Material factual correction:

- correct the story;
- add a visible correction note;
- include correction date and what changed.

Meaningful factual update:

- update `updatedAt`;
- note the update if readers would reasonably need to know the story materially changed.

Do not silently erase the history of a consequential error.

A later style rewrite that does not change factual meaning does not require a correction note, but it must not silently alter material claims or conclusions.

## Publication checklist

Before changing a story to `published`:

- [ ] central question answered fairly;
- [ ] research packet exists when required;
- [ ] consequential claims verified;
- [ ] important caveats retained;
- [ ] contradictions considered;
- [ ] quotations checked;
- [ ] numbers checked;
- [ ] `style-brief.md` exists and is approved when required;
- [ ] selected writing form still fits the material;
- [ ] structure pass completed;
- [ ] AI-slop/human-language pass completed;
- [ ] institutional claims have provenance;
- [ ] headline audited;
- [ ] dek audited;
- [ ] description/summary audited for its actual job;
- [ ] content type is accurate;
- [ ] methodology included when useful;
- [ ] commercial disclosure included when relevant;
- [ ] article renders correctly;
- [ ] links work;
- [ ] mobile layout checked;
- [ ] metadata/description set;
- [ ] explicit publication approval obtained when the workflow requires it.