# Portfilo Publishing Standard

## Principle

The website publishes journalism. It does not generate journalism.

Publishing is the final part of a research, reader-need, style-research, writing-form, verification, and editorial process.

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
READER NEED / AUDIENCE ASSUMPTIONS
  ↓
PROFESSIONAL FORM + HUMAN-EDITED STYLE RESEARCH
  ↓
STYLE-RESEARCH.MD
  ↓
WRITING FORM / STYLE BRIEF
  ↓
HUMAN APPROVAL
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

The writing gates are governed by:

- `docs/WRITING_SYSTEM.md`;
- `docs/STYLE_RESEARCH_STANDARD.md`.

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

## Stage 5 - Reader need and style research

Before choosing final prose mechanics, follow `docs/STYLE_RESEARCH_STANDARD.md`.

Every substantial story must identify:

- primary reader need;
- what the intended reader can reasonably be expected to know already;
- what requires explanation;
- which audience-interest assumptions are established, researched, or merely editorial hypotheses;
- the actual shape of the evidence.

Then research the writing problem.

Create:

`style-research.md`

using:

`research/STYLE_RESEARCH_TEMPLATE.md`

The research must include:

- professional guidance appropriate to the form;
- by default 2-4 relevant human-edited exemplars chosen because they solve a similar writing problem;
- observed lead behavior;
- answer/thesis timing;
- paragraph development;
- evidence/example handling;
- transitions;
- first/second person use;
- rhetorical-question use;
- subhead/section behavior;
- limitation/counterargument handling;
- ending behavior;
- vocabulary/assumed knowledge;
- patterns notably absent;
- explicit no-imitation boundaries.

The purpose is to study transferable editorial decisions, not to imitate a writer or publication.

Do not copy distinctive wording, cadence, metaphors, jokes, branded terminology, rhetorical quirks, or another publication's institutional voice.

Do not instruct AI to `write like` a named writer.

## Stage 6 - Writing form and style brief

After `style-research.md` exists, follow `WRITING_SYSTEM.md` and convert the research into an editorial decision.

For substantial stories, create or revise:

`style-brief.md`

using:

`research/STYLE_BRIEF_TEMPLATE.md`

The brief must establish:

- content type;
- primary reader need;
- writing job;
- audience assumptions;
- evidence shape;
- findings from `style-research.md` actually used;
- selected Portfilo recipe;
- why that form fits;
- deviations;
- lead, paragraph, middle, transition, limitation/counterevidence, and ending jobs;
- evidence/example handling;
- first/second person and rhetorical-device limits;
- headline, dek, and description jobs;
- assignment-specific AI-slop risks.

The form is selected from the material, reader need, professional practice, and researched examples. AI may assist with alternatives but has zero automatic structural or stylistic authority.

Draft 1 is not authorized until `style-research.md` exists and the style brief is explicitly approved.

## Stage 7 - Draft

The draft may only rely on verified/qualified claims from the research packet or, for a Perspective, the approved premise plus supported factual material.

If a new factual assertion is needed, return to research.

If a new institutional position about Portfilo is needed, return to the canonical institutional source or explicit editor/founder approval.

If a new writing device or prose pattern materially changes the approved approach, return to the style research/brief rather than allowing generated prose to become its own justification.

Do not let Draft 1 silently redefine the approved structure merely because generated prose flows differently.

## Stage 8 - Adversarial review

Challenge:

- sourcing;
- framing;
- causality;
- representativeness;
- missing context;
- stale data;
- headline strength;
- whether the selected form distorts the evidence;
- whether audience assumptions are being presented as facts;
- whether generated rhetoric creates claims or implications the evidence/brief did not authorize;
- whether the prose has drifted toward the style of one researched exemplar.

Resolve material findings before publication.

## Stage 9 - Claim audit

Trace consequential factual assertions back to evidence.

No source or evidence:
- source it;
- qualify it;
- remove it.

Also trace consequential institutional statements about Portfilo back to approved institutional authority.

## Stage 10 - Structure and editorial pass

After facts are stable:

- verify the selected form still fits the material and reader need;
- compare the draft with the approved style brief;
- ensure each section has a distinct job;
- ensure examples are developed in the way the style research justified rather than merely listed;
- move caveats/counterevidence to the position where readers need them;
- remove repetition;
- remove generic AI language;
- sharpen explanations;
- preserve caveats;
- improve transitions only when the reader actually needs one;
- ensure Philippine context is relevant rather than decorative.

Do not trade accuracy for style.

Do not line-edit around a structural failure. Fix the architecture first.

If the draft repeatedly fights the selected form, re-research the writing problem rather than forcing the draft through.

## Stage 11 - AI-slop and human-language pass

Follow the audit in `WRITING_SYSTEM.md` and the assignment-specific risks in the approved style brief.

At minimum:

- read only headings/subheads;
- read only the first sentence of each paragraph;
- read the piece aloud;
- delete sentences that only explain the strategy behind the previous sentence;
- scan for repeated rhetorical patterns and institutional self-description;
- compare the draft against `style-research.md` for unauthorized cadence or imitation;
- test whether a generic AI publication could publish the line unchanged.

AI-shaped prose is not fixed merely by replacing a few adjectives. Rewrite or delete the underlying pattern.

## Stage 12 - Headline, dek, and description audit

The headline must:

- reflect the actual story;
- preserve important scope;
- avoid false universality;
- avoid fake certainty;
- avoid causal claims the evidence cannot establish.

The dek must add editorial information rather than simply restate the headline.

The compact description/summary must serve cards, indexes, SEO, and social metadata without being forced to carry the rhetorical job of the dek.

Headline, dek, and description may require their own reference research when the writing job is materially different from the body.

Do not generate them by merely compressing the article or copying each other.

## Stage 13 - Prepare content entry

The v0 content schema is implemented in Astro. At minimum a publishable story supports:

```yaml
title:
dek:
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

1. create/edit research packet;
2. create/edit `style-research.md`;
3. create/edit and approve `style-brief.md`;
4. create/edit Markdown content;
5. validate locally;
6. commit;
7. push;
8. Cloudflare Pages builds/deploys.

No admin dashboard or CMS is required for v0.

## Distribution rule

Research once, publish many.

Derivative formats such as newsletter, social posts, video scripts, carousels, and excerpts must derive from the same verified research packet and approved writing position.

Do not allow downstream social content to introduce unsupported factual claims or new institutional promises simply because it is shorter or more promotional.

A derivative format with a materially different audience need or writing job may require its own lightweight style research rather than blindly copying the article's prose style.

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
- [ ] primary reader need and audience assumptions recorded;
- [ ] `style-research.md` exists for substantial stories;
- [ ] professional form research completed;
- [ ] relevant human-edited exemplars reviewed by default;
- [ ] no-imitation boundaries recorded;
- [ ] `style-brief.md` exists and is approved;
- [ ] selected writing form still fits the material;
- [ ] draft matches the researched writing mechanics unless a documented editorial change was approved;
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