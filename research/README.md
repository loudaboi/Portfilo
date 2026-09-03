# Portfilo Research Workspace

Research is intentionally separate from public story content.

The purpose is to preserve the messy evidence-gathering process without allowing unfinished or unverified material to leak into publishable articles.

Story selection before research follows:

`docs/CONTENT_PLANNING.md`

Writing-form and writing-style preparation before drafting follows:

- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`

The planning system decides which questions deserve research time. This workspace holds the strategy research and story evidence that follow those decisions, plus the pre-draft style research and style brief that determine how approved evidence will be presented.

## Two research layers

### 1. Editorial launch research

Answers:

> What should Portfilo investigate first?

This is strategy research, not an article.

Use `docs/CONTENT_PLANNING.md` as the decision framework.

Suggested structure:

```text
research/
└── editorial-launch/
    ├── brief.md
    ├── audience-signals.md
    ├── competitor-map.md
    ├── information-gaps.md
    ├── candidate-stories.md
    ├── candidate-series.md
    ├── evaluation.md
    └── recommendation.md
```

The research should evaluate candidate stories and, where justified, candidate series by:

- reader importance;
- primary reader need;
- information gap;
- timing / why now;
- evidence availability;
- potential originality;
- Portfilo fit;
- reporting feasibility;
- useful lifespan;
- derivative/distribution potential as a secondary consideration;
- series depth where a series is actually justified;
- commercial audience relevance without compromising editorial independence.

`candidate-stories.md` is required. Do not assume that Portfilo must launch with a series.

The research may recommend:

- one standalone flagship;
- several unrelated strong stories;
- one coherent launch package;
- a real series.

The first real launch package should not be selected until this research is complete.

### 2. Individual story research and writing preparation

Every substantial story gets its own packet.

That includes Reported, Explained, Profile, Guide, Analysis, Perspective, and Field Notes work. The depth of factual reporting can vary by content type, but the writing approach must still be researched before Draft 1.

Suggested structure:

```text
research/
└── stories/
    └── story-slug/
        ├── brief.md
        ├── sources.md
        ├── evidence.md
        ├── contradictions.md
        ├── notes.md
        ├── style-research.md
        ├── style-brief.md
        └── fact-check.md
```

The required pre-draft sequence is:

```text
subject research
  -> evidence / contradictions
  -> story decision
  -> reader need / audience assumptions
  -> professional form research
  -> human-edited style exemplar research
  -> style-research.md
  -> style-brief.md
  -> human approval
  -> Draft 1
```

`style-research.md` and `style-brief.md` are created **before Draft 1**. They are not post-hoc explanations of prose that has already been generated.

Use:

- `research/STYLE_RESEARCH_TEMPLATE.md`
- `research/STYLE_BRIEF_TEMPLATE.md`

## File responsibilities

### `brief.md`

Contains:

- research question;
- reader payoff;
- hypothesis;
- disproof condition;
- scope;
- definitions;
- potential sources;
- potential interviews.

### `sources.md`

Source inventory.

Record:

- source name;
- URL or identifier;
- source type/tier;
- publication/data date;
- access date when relevant;
- why it matters;
- known limitations.

Prefer primary sources.

### `evidence.md`

Claim ledger.

Suggested format:

```text
## C01

Candidate claim:

Evidence:

Source:

Tier:

Confidence:

Caveat:

Status:
VERIFIED | QUALIFY | UNVERIFIED | REJECT
```

A draft should not invent new consequential factual claims outside this ledger.

### `contradictions.md`

Evidence, methodologies, cases, or interpretations that challenge the emerging story.

This file is mandatory for substantial investigations even if the final conclusion remains unchanged.

### `notes.md`

Working material:

- interview notes;
- observations;
- calculations;
- follow-up questions;
- unused leads;
- possible future stories.

Label speculation and unverified claims clearly.

### `style-research.md`

Pre-draft research record for the writing problem.

At minimum record:

- story purpose;
- primary reader need;
- audience knowledge assumptions;
- which audience-interest assumptions are established, researched, or merely editorial hypotheses;
- evidence shape;
- professional form references actually used;
- by default 2-4 relevant human-edited exemplars chosen for a similar writing job;
- opening behavior observed;
- answer/thesis timing;
- paragraph development;
- evidence/example handling;
- transitions;
- first/second person use;
- rhetorical-question use;
- subhead/section behavior;
- counterargument/limitation handling;
- ending behavior;
- vocabulary/assumed knowledge;
- patterns notably absent;
- cross-example findings;
- explicit no-imitation boundaries;
- proposed writing mechanics;
- research confidence.

This file records what the research showed. It does not authorize copied voice or sentence patterns.

Use:

`research/STYLE_RESEARCH_TEMPLATE.md`

### `style-brief.md`

Pre-draft editorial decision record.

It converts the style research and story evidence into the constraints the draft must follow.

At minimum record:

- content type;
- primary reader need;
- writing job;
- evidence shape;
- selected Portfilo recipe from `docs/WRITING_SYSTEM.md`;
- why the form fits;
- deviations;
- relevant findings from `style-research.md`;
- lead job;
- central answer/thesis position;
- middle logic;
- counterevidence/limitation position;
- ending job;
- paragraph/rhythm constraints where material;
- institutional-copy provenance when Portfilo itself is discussed;
- headline, dek, and description jobs;
- assignment-specific AI-slop risks;
- approval state.

A substantial story is not authorized for Draft 1 until `style-research.md` exists and `style-brief.md` is approved.

AI may propose forms and wording. AI output has zero stylistic authority: the recorded decisions must be justified by material, professional practice, human-edited research, or explicit editorial judgment.

### `fact-check.md`

Final verification record.

At minimum check:

- names;
- titles;
- dates;
- numbers;
- quotations;
- legal/regulatory claims;
- company claims;
- historical claims;
- causal language;
- headline/dek;
- material institutional statements where applicable.

## Research outcome

Every story packet should end with one explicit outcome:

- `PUBLISH`
- `REFRAME`
- `CONTINUE`
- `KILL`

Do not force research into publication merely because time has already been spent.

Editorial launch research should end with a clear recommendation about the first real launch package and why the selected questions survived the planning gates.

## AI rules

### Evidence

AI can assist with the research process but is not a source.

Any claim, citation, quotation, number, or attribution produced by AI must be verified against an actual source before use.

### Writing form and style

AI can assist with research organization, structural alternatives, drafting, and editing but is not a style source.

Do not cite `the model wrote it` or `the model recommended it` as the reason for:

- a story structure;
- voice;
- paragraph rhythm;
- rhetorical device;
- institutional claim;
- headline/dek style;
- ending.

Do not ask AI to `write this like [named writer]`.

Do not use human-edited exemplars to harvest phrases, cadence, metaphors, jokes, branded terminology, or another publication's institutional voice.

Follow:

- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`

## Public content boundary

Public stories should live in the website's structured content system.

Do not publish directly from `research/`.

The research workspace may contain unfinished claims, sensitive notes, rejected structures, or material that does not meet publication standards.