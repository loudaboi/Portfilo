# Portfilo Research Workspace

_Last updated: 2026-09-04_

Research is intentionally separate from public story content.

The purpose is to preserve the evidence-gathering and writing-preparation process without allowing unfinished or unverified material to leak into publishable articles.

Story selection follows:

`docs/CONTENT_PLANNING.md`

Writing-form and writing-style preparation follows:

- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`

## Research layers

### Editorial planning / launch research

`research/editorial-launch/` records the completed first application of Portfilo's launch-planning process. It is historical strategy research and remains useful as provenance, but it is no longer a future launch task.

Current active editorial assignments and their states are recorded in:

`docs/PROJECT_STATE.md`

### Individual story research and writing preparation

Every substantial story gets its own packet under:

`research/stories/<story-slug>/`

That includes Reported, Explained, Profile, Guide, Analysis, Perspective, and Field Notes work. The depth of factual reporting can vary by content type, but the writing approach must still be researched before Draft 1.

A normal packet may contain:

```text
brief.md
sources.md
evidence.md
contradictions.md
notes.md
style-research.md
style-brief.md
fact-check.md
```

Additional working files are allowed when a story genuinely needs them, including datasets, ledgers, calculations, interview records, rewrite reviews, visual plans, and image briefs.

## Required pre-draft sequence

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

Normally records:

- research question;
- reader payoff;
- hypothesis;
- disproof condition;
- scope;
- definitions;
- potential sources;
- potential interviews.

### `sources.md`

Source inventory. Record source name, URL or identifier, source type/tier, publication/data date, access date when relevant, why it matters, and known limitations.

Prefer primary sources.

### `evidence.md`

Claim ledger. Consequential factual claims should be grounded here or in another explicit evidence record before publication.

Suggested status vocabulary:

`VERIFIED | QUALIFY | UNVERIFIED | REJECT`

### `contradictions.md`

Evidence, methodologies, cases, or interpretations that challenge the emerging story.

This file is mandatory for substantial factual investigations even if the final conclusion remains unchanged.

### `notes.md`

Working material such as interview notes, observations, calculations, follow-up questions, unused leads, and possible future stories.

Label speculation and unverified claims clearly.

### `style-research.md`

Pre-draft research record for the writing problem.

At minimum, record:

- story purpose;
- primary reader need;
- audience knowledge assumptions;
- evidence shape;
- professional form references actually used;
- by default 2-4 relevant human-edited exemplars chosen for a similar writing job;
- opening behavior;
- answer/thesis timing;
- paragraph and evidence handling;
- transitions;
- person and rhetorical-device use;
- counterargument/limitation handling;
- ending behavior;
- vocabulary/assumed knowledge;
- explicit no-imitation boundaries;
- proposed writing mechanics;
- research confidence.

This file records what the research showed. It does not authorize copied voice or sentence patterns.

### `style-brief.md`

Pre-draft editorial decision record.

It converts style research and story evidence into constraints the draft must follow. A substantial story is not authorized for Draft 1 until `style-research.md` exists and `style-brief.md` is approved.

### `fact-check.md`

Final verification record. At minimum, check names, titles, dates, numbers, quotations, legal/regulatory claims, company claims, historical claims, causal language, headline/dek, and material institutional statements where applicable.

## Research outcome

Every substantial story packet should end with one explicit outcome:

- `PUBLISH`
- `REFRAME`
- `CONTINUE`
- `KILL`

Do not force research into publication merely because time has already been spent.

## Image research

Editorial imagery follows:

`docs/IMAGE_SYSTEM.md`

Story-specific generated imagery requires the separate visual-research, brief, approval, generation-authorization, candidate-review, and final-selection gates defined there.

Historical homepage image experiments under `research/image-system/` do not override the current homepage decision in:

`research/image-system/homepage-featured-cover-decision.md`

## AI rules

### Evidence

AI can assist with research organization and analysis but is not a source.

Any claim, citation, quotation, number, or attribution produced by AI must be verified against an actual source before use.

### Writing form and style

AI can assist with research organization, structural alternatives, drafting, and editing but is not a style source.

Do not cite `the model wrote it` or `the model recommended it` as the reason for a story structure, voice, paragraph rhythm, rhetorical device, institutional claim, headline/dek style, or ending.

Do not ask AI to `write this like [named writer]`.

Do not use human-edited exemplars to harvest phrases, cadence, metaphors, jokes, branded terminology, or another publication's institutional voice.

Follow:

- `docs/WRITING_SYSTEM.md`
- `docs/STYLE_RESEARCH_STANDARD.md`

## Public content boundary

Public stories live in the website's structured content system under `src/content/`.

Do not publish directly from `research/`.

The research workspace may contain unfinished claims, sensitive notes, rejected structures, or material that does not meet publication standards.
