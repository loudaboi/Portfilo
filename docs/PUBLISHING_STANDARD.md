# Portfilo Publishing Standard

_Last updated: 2026-09-09_

## Principle

The website publishes journalism. It does not generate journalism.

Publishing is the final part of a research, reader-need, style-research, writing-form, verification, and editorial process.

The writing gates are governed by:

- `docs/WRITING_SYSTEM.md`;
- `docs/STYLE_RESEARCH_STANDARD.md`;
- `docs/EDITORIAL_PACKAGING_STANDARD.md`.

## Pipeline

```text
IDEA
  ↓
RESEARCH BRIEF
  ↓
SOURCE MAP / PRIMARY + SECONDARY RESEARCH
  ↓
EVIDENCE LEDGER / CONTRADICTION SEARCH
  ↓
STORY DECISION
  ↓
READER NEED + STYLE RESEARCH
  ↓
WRITING FORM / STYLE BRIEF
  ↓
HUMAN APPROVAL
  ↓
DRAFT
  ↓
ADVERSARIAL REVIEW / CLAIM AUDIT
  ↓
STRUCTURE + HUMAN-LANGUAGE PASS
  ↓
HEADLINE / DEK / METADATA AUDIT
  ↓
PUBLISH
  ↓
DISTRIBUTE
  ↓
CORRECT / UPDATE WHEN NEEDED
```

## Two operating speeds

Portfilo supports two editorial speeds without creating two standards of evidence.

### Substantial work

Reported stories, explainers, analysis, guides, profiles, perspectives, field notes, datasets, and other work requiring meaningful research or interpretation use the full pipeline.

### Fast factual work

A narrow update may use a lighter path when the value is establishing a verified development rather than producing analysis:

```text
SIGNAL
  ↓
AUTHORITATIVE SOURCE / DIRECT EVIDENCE
  ↓
VERIFY WHAT CHANGED
  ↓
DEFINE NARROW READER NEED + SCOPE
  ↓
HUMAN EDITORIAL APPROVAL
  ↓
CLAIM / COPY CHECK
  ↓
PUBLISH OR DISTRIBUTE
  ↓
CORRECT / UPDATE WHEN NEEDED
```

Fast does not mean speculative. Use this path only when the development itself is verifiable, the evidence is authoritative/direct, the scope is narrow, and Portfilo does not infer consequences that have not been researched.

`AI Update` may be used internally for a fast factual item about a material AI model, product, company, policy, research, or market development. It is not a public topic or Astro `contentType`.

An AI Update may live only on a social or newsletter surface when a website story would add no meaningful value. If the development requires explanation, testing, comparison, or consequential interpretation, create a separate assignment and use the deeper path.

## Portfilo Test

`Portfilo Test` is the approved internal format for an original product, model, agent, workflow, or comparison test intended to establish what Portfilo actually observed rather than repeat vendor claims.

The governing methodology is:

`docs/PORTFILO_TEST_STANDARD.md`

Methodology approval does not authorize a specific Test or publication. Every Test must still pass the normal planning, evidence, contradiction, writing, claim-audit, and publication gates.

## Research and story decision

An idea is not an assignment and not a headline.

For substantial work, create the appropriate research packet and define:

- question;
- reader payoff;
- hypothesis where relevant;
- disproof condition where relevant;
- scope;
- potential sources/interviews.

Follow `docs/RESEARCH_STANDARD.md`.

Then select one:

- publish;
- reframe;
- continue research;
- kill.

Do not begin long-form drafting simply because enough material exists to produce plausible prose.

## Reader need and style research

Before choosing final prose mechanics, follow `docs/STYLE_RESEARCH_STANDARD.md`.

For substantial stories, record:

- primary reader need;
- audience assumptions;
- evidence shape;
- professional guidance appropriate to the form;
- relevant human-edited exemplars chosen for the writing problem;
- lead, paragraph, transition, evidence/example, limitation, and ending behavior;
- patterns notably absent;
- explicit no-imitation boundaries.

The purpose is to study transferable editorial decisions, not to imitate another writer or publication.

Create `style-research.md`, then an approved `style-brief.md` using the repository templates where required.

AI may assist with alternatives but has zero automatic structural or stylistic authority.

## Draft

The draft may rely only on verified/qualified claims from the research packet or, for a Perspective, the approved premise plus supported factual material.

If a new factual assertion is needed, return to research.

If a new institutional position about Portfilo is needed, return to canonical institutional authority or explicit founder/editor approval.

Do not let generated prose silently redefine the approved structure.

## Adversarial review and claim audit

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
- whether generated rhetoric creates unsupported claims or implications.

Trace consequential factual assertions back to evidence.

No source or evidence:

- source it;
- qualify it;
- remove it.

Also trace consequential institutional statements about Portfilo back to approved institutional authority.

For Portfilo Tests, separately challenge protocol fit, confounds, reruns, valid failures, sample size/non-determinism, infrastructure failures, and whether conclusions extend beyond tested conditions.

## Structure and human-language pass

After facts are stable:

- verify the selected form still fits the material and reader need;
- compare the draft with the approved style brief;
- ensure each section has a distinct job;
- move caveats/counterevidence where readers need them;
- remove repetition and generic AI language;
- preserve material limitations;
- use transitions only when needed;
- ensure Philippine context is relevant rather than decorative.

Do not trade accuracy for style.

Do not line-edit around a structural failure.

At minimum, the AI-slop/human-language pass should:

- read only headings/subheads;
- read only first sentences of paragraphs;
- read the piece aloud;
- remove sentences that merely explain the strategy behind previous sentences;
- scan for repeated rhetorical templates and institutional self-description;
- test whether generic AI publishing could reuse the wording unchanged.

## Headline, dek, and metadata

The headline must reflect the actual story, preserve important scope, avoid fake certainty, and avoid causal claims the evidence cannot establish.

The dek must add useful editorial information rather than restate the headline.

Headline + dek form the reader-facing story package.

Default metadata behavior:

```text
metaDescription ?? dek
```

Add `metaDescription` only when the approved dek has a concrete metadata problem when separated from the headline.

`docs/EDITORIAL_PACKAGING_STANDARD.md` owns the detailed packaging rules.

## Prepare content entry

The exact implemented schema is defined in `src/content.config.ts`.

Current v0 story fields are:

```yaml
title: required
dek: required
metaDescription: optional
section: news | stories
contentType: reported | explained | guide | profile | analysis | perspective | field-notes | partner
topic: business | technology | startup | ai
publishedAt: required when published
updatedAt: optional
status: draft | published
featured: optional
image: optional
methodology: optional
correction: optional
```

There is no individual author field and no Series metadata in the current v0 schema.

## Status rules

### draft

Not public. May contain unfinished prose but should not contain fabricated placeholder reporting.

### published

Eligible for production routes and indexes. Must have passed the required editorial/research/writing checks for its content type and must have `publishedAt`.

Scheduled publishing and an archived state are not v0 requirements.

## Publishing operation in v0

Initial authoring is repository-based:

1. create/edit research packet where required;
2. create/edit `style-research.md` where required;
3. create/edit and approve `style-brief.md` where required;
4. create/edit Markdown content;
5. validate locally;
6. commit;
7. push to the working branch;
8. inspect preview/test output;
9. merge to `main` only after explicit release approval.

No admin dashboard or CMS is required for v0.

A working-branch push must not be treated as authorization for production release.

## Distribution

Research once, publish many.

Newsletter, social posts, video scripts, carousels, excerpts, and other derivatives must derive from the same verified research/evidence position.

Do not let downstream content introduce unsupported factual claims or new institutional promises merely because it is shorter or more promotional.

A derivative with a materially different audience need or writing job may require its own lightweight style research.

Fast factual items may originate from direct authoritative evidence rather than a substantial story packet, but source/evidence, date/version, and scope must remain recoverable.

## Corrections and updates

For a material factual correction:

- correct the story;
- add a visible correction note;
- include correction date and what changed.

For a meaningful factual update:

- update `updatedAt`;
- note the update if readers reasonably need to know the story materially changed.

Do not silently erase the history of a consequential error.

## Publication checklist

Before changing a Story or News item to `published`:

- [ ] central question/job is handled fairly;
- [ ] research packet exists when required;
- [ ] consequential claims are verified;
- [ ] important caveats and contradictions are retained;
- [ ] quotations and numbers are checked;
- [ ] reader need/audience assumptions are recorded where required;
- [ ] style research and style brief are complete where required;
- [ ] selected writing form still fits the evidence;
- [ ] structure pass is complete;
- [ ] AI-slop/human-language pass is complete;
- [ ] institutional claims have provenance;
- [ ] headline and dek are audited together;
- [ ] optional `metaDescription` is justified if present;
- [ ] schema values are correct;
- [ ] methodology/commercial disclosure is present when relevant;
- [ ] article renders correctly;
- [ ] links work;
- [ ] responsive/mobile layout is checked;
- [ ] metadata resolves correctly;
- [ ] explicit publication approval is obtained when required.

For fast factual work, also retain the authoritative/direct source, material date/version, narrow scope, and distinction between vendor claims and Portfilo statements.

For Portfilo Tests, also follow every required protocol/evidence/limitation check in `docs/PORTFILO_TEST_STANDARD.md`.
