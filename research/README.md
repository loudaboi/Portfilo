# Portfilo Research Workspace

Research is intentionally separate from public story content.

The purpose is to preserve the messy evidence-gathering process without allowing unfinished or unverified material to leak into publishable articles.

Story selection before research follows:

`docs/CONTENT_PLANNING.md`

Writing-form selection before drafting follows:

`docs/WRITING_SYSTEM.md`

The planning system decides which questions deserve research time. This workspace holds the strategy research and story evidence that follow those decisions, plus the pre-draft style brief that records how approved evidence will be presented.

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

Every substantial reported/explained/profile/guide investigation should get its own packet. Analysis, Perspective, and Field Notes pieces should also use a packet whenever they make material factual claims or require a deliberate writing-form decision.

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
        ├── style-brief.md
        └── fact-check.md
```

`style-brief.md` is created **after the story decision and before Draft 1**. It is not a post-hoc explanation of prose that has already been generated.

Use:

`research/STYLE_BRIEF_TEMPLATE.md`

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

### `style-brief.md`

Pre-draft writing decision record.

At minimum record:

- content type;
- primary reader need;
- writing job;
- evidence shape;
- selected Portfilo recipe from `docs/WRITING_SYSTEM.md`;
- why the form fits;
- deviations;
- professional form references actually used;
- optional human-edited exemplars and structural lessons;
- explicit no-imitation boundaries;
- lead job;
- central answer/thesis position;
- middle logic;
- counterevidence/limitation position;
- ending job;
- institutional-copy provenance when Portfilo itself is discussed;
- headline, dek, and description jobs;
- assignment-specific AI-slop risks;
- approval state.

A substantial story is not authorized for Draft 1 until this brief is approved.

AI may propose forms. AI output has zero stylistic authority: the recorded form must be justified by material, professional practice, or explicit editorial judgment.

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

### Writing form

AI can assist with structural alternatives, drafting, and editing but is not a style source.

Do not cite `the model wrote it` or `the model recommended it` as the reason for:

- a story structure;
- voice;
- rhetorical device;
- institutional claim;
- headline/dek style;
- ending.

Follow `docs/WRITING_SYSTEM.md`.

## Public content boundary

Public stories should live in the website's structured content system.

Do not publish directly from `research/`.

The research workspace may contain unfinished claims, sensitive notes, rejected structures, or material that does not meet publication standards.