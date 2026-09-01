# Portfilo Research Workspace

Research is intentionally separate from public story content.

The purpose is to preserve the messy evidence-gathering process without allowing unfinished or unverified material to leak into publishable articles.

## Two research layers

### 1. Editorial launch research

Answers:

> What should Portfilo investigate first?

This is strategy research, not an article.

Suggested structure:

```text
research/
└── editorial-launch/
    ├── brief.md
    ├── audience-signals.md
    ├── competitor-map.md
    ├── information-gaps.md
    ├── candidate-series.md
    ├── evaluation.md
    └── recommendation.md
```

It should evaluate potential series by:

- reader importance;
- information gap;
- evidence availability;
- potential originality;
- Portfilo fit;
- shareability;
- series depth;
- longevity;
- commercial audience relevance without compromising editorial independence.

The first real series should not be selected until this research is complete.

### 2. Individual story research

Every substantial reported/explained/profile/guide investigation should get its own packet.

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
        └── fact-check.md
```

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
- headline/dek.

## Research outcome

Every packet should end with one explicit outcome:

- `PUBLISH`
- `REFRAME`
- `CONTINUE`
- `KILL`

Do not force research into publication merely because time has already been spent.

## AI rule

AI can assist with the research process but is not a source.

Any claim, citation, quotation, number, or attribution produced by AI must be verified against an actual source before use.

## Public content boundary

Public stories should live in the website's structured content system once implemented.

Do not publish directly from `research/`.

The research workspace may contain unfinished claims, sensitive notes, or material that does not meet publication standards.
