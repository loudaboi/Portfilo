# Portfilo Research Standard

## Purpose

This standard exists to prevent hallucination, confirmation bias, weak sourcing, and high-volume low-value publishing.

The research packet is the source of truth for a factual story. The article is a presentation layer built from that evidence.

## Rule zero

**AI output has zero evidentiary weight.**

AI may help locate, organize, compare, calculate, challenge, and draft. A claim becomes publishable because reliable evidence supports it, not because a model produced it.

## Research sequence

### 1. Question

Begin with an answerable question.

Avoid framing that assumes the conclusion.

Weak:
> Why job hopping is the best way to increase your salary.

Better:
> Under what conditions does changing employers materially improve compensation for Filipino workers?

### 2. Reader payoff

State why the question matters to Portfilo's audience.

### 3. Hypothesis

Record the current expectation as a hypothesis, not a conclusion.

### 4. Disproof condition

State what evidence would materially weaken or overturn the hypothesis.

This is mandatory for substantial investigations.

### 5. Scope

Define:

- geography;
- period;
- population;
- exclusions;
- key terms;
- what the story will not attempt to establish.

### 6. Source map

Identify likely primary and secondary sources before broad browsing.

## Source hierarchy

The hierarchy is guidance, not an automatic credibility score. Relevance and methodology still matter.

### Tier A - Primary evidence

Prefer where available:

- Philippine government agencies and official datasets;
- laws, regulations, court decisions;
- company filings and official records;
- audited or official financial reports;
- peer-reviewed research and original datasets;
- direct interviews;
- official documentation;
- full speeches/transcripts;
- records created by the event being reported.

A subject's own statement is primary evidence that they made the statement, not necessarily that the underlying claim is true.

### Tier B - Strong independent secondary sources

Examples:

- Reuters;
- Associated Press;
- reputable national or specialist reporting;
- respected academic/research institutions;
- high-quality industry reporting with transparent sourcing.

Use for corroboration, context, and reporting that cannot be reconstructed from primary material.

### Tier C - Market and platform evidence

Examples:

- job listings;
- salary platforms;
- LinkedIn;
- Jobstreet;
- Indeed;
- company career pages;
- marketplace data;
- industry surveys.

Useful, but sampling, self-selection, methodology, and representativeness must be examined.

### Tier D - Anecdotal/community evidence

Examples:

- Reddit;
- Facebook;
- TikTok;
- X;
- forums;
- individual posts.

Use to discover questions, experiences, language, and leads.

Do not convert anecdotal prevalence into population-level fact without stronger evidence.

## Evidence ledger

Every material factual story should maintain an evidence ledger.

Minimum fields:

| Field | Meaning |
|---|---|
| Claim ID | Stable identifier such as `C01` |
| Candidate claim | What the story may say |
| Evidence | Relevant finding |
| Source | Exact source |
| Source tier | A/B/C/D |
| Date | Publication/data date |
| Confidence | High/Medium/Low |
| Caveat | Limitation that affects interpretation |
| Status | Verified / Qualify / Unverified / Reject |

Example:

```text
C01

Candidate claim:
[claim]

Evidence:
[evidence]

Source:
[exact source]

Tier:
A

Confidence:
HIGH

Caveat:
[important limitation]

Status:
VERIFIED
```

## Contradiction search

After an initial body of evidence forms a narrative, deliberately search for evidence that challenges it.

Ask:

- What would make this conclusion wrong?
- Is there a competing dataset?
- Does a different methodology produce a different result?
- Are we observing selection bias?
- Are successful anecdotes hiding a larger base rate?
- Is a causal claim only correlational?
- Is the time period distorting the result?
- Is the source financially interested in the conclusion?

Record meaningful counterevidence in `contradictions.md`.

Do not bury contrary evidence merely because it complicates the article.

## Numbers and calculations

For every consequential statistic or calculated figure, preserve:

- source;
- period;
- unit;
- population/sample;
- methodology where relevant;
- calculation formula for derived values;
- assumptions;
- rounding.

Recalculate important derived numbers independently where practical.

Never quote a model-generated calculation without verifying it.

## Interviews

For each interview, retain:

- subject identity and relevance;
- date/method;
- recording or notes where permitted;
- exact quotations selected for publication;
- claims requiring independent verification;
- disclosure or conflict information.

A compelling interview does not override contradictory documentary evidence.

## Company/person claims

For profiles or business stories:

- verify role/title where practical;
- distinguish funding from revenue and personal income;
- distinguish company claims from independently verified metrics;
- avoid speculative net worth;
- avoid inferring ownership/equity without evidence;
- note when financial information is private or unavailable.

## Story decision

Research can end in four outcomes:

### Publish

Evidence supports a useful story.

### Reframe

The original hypothesis was weak, but a better story emerged.

### Continue research

Evidence is incomplete but the question remains promising.

### Kill

There is not enough evidence, originality, or reader value.

Killing a weak story is a successful editorial outcome.

## Drafting rule

Draft from the verified research packet.

Do not introduce new factual claims during prose generation unless they are added to and verified in the packet.

## Adversarial review

After drafting, run a separate skeptical pass.

Instruction concept:

> Assume this article is wrong. Identify unsupported claims, stale information, missing context, misleading framing, weak causal reasoning, inaccurate quotations, exaggerated headlines, selection bias, and conclusions stronger than the evidence.

The adversarial review is a lead generator for verification. It is not itself evidence.

## Final claim audit

Before publication, verify material:

- numbers;
- dates;
- names;
- titles;
- quotations;
- company claims;
- legal/regulatory claims;
- historical claims;
- rankings;
- percentages;
- causal language.

For unsupported material:

1. find evidence;
2. qualify the statement; or
3. remove it.

## Sources and method

Serious stories should include a reader-facing methodology section when it materially improves transparency.

It may explain:

- datasets used;
- collection period;
- sample size;
- interview count;
- inclusion/exclusion criteria;
- known limitations;
- distinction between advertised and actual values;
- calculation methodology.

## Research packet structure

See `research/README.md`.

The research packet stays separate from the public story files so unfinished notes and unverified claims cannot accidentally become publication content.
