# Portfilo Style Research Standard

_Last updated: 2026-09-03_

## Purpose

This standard closes a remaining failure mode in the Portfilo writing system:

> a story can have verified facts and an approved structure while the actual prose is still generated from an AI model's default statistical idea of what an article should sound like.

Portfilo does not accept that as sufficient editorial craft.

Every substantial article must research its **purpose, audience need, professional form, and writing mechanics** before Draft 1.

This standard is a companion to:

- `docs/EDITORIAL_STANDARD.md`;
- `docs/RESEARCH_STANDARD.md`;
- `docs/WRITING_SYSTEM.md`;
- `docs/PUBLISHING_STANDARD.md`;
- `docs/COPY_STYLE.md`.

## Core rule

> **Research the writing problem before asking AI to write.**

AI may execute researched editorial decisions. It may not supply the missing editorial craft from its own defaults.

A model's ability to produce fluent prose is not evidence that the prose is appropriate for the story, audience, topic, or publication.

## Why every story gets fresh research

Stories can differ in:

- reader need;
- audience familiarity with the subject;
- urgency;
- evidence shape;
- emotional distance;
- complexity;
- subject vocabulary;
- degree of authorial judgment;
- usefulness of narrative, modular, chronological, analytical, or argumentative structure;
- amount and placement of context;
- appropriate paragraph rhythm;
- need for counterargument, caveat, or explanation;
- ending job.

Therefore Portfilo must not assume that a style that worked for one article should govern the next one.

Existing Portfilo stories are not automatic style precedent.

## Research basis

The system is informed by professional journalism and audience research, including:

- Reuters Institute for the Study of Journalism, `More than ‘just the facts’: How news audiences think about 'user needs'`: https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2024/more-just-facts-how-news-audiences-think-about-user-needs
- Poynter, `The hourglass: serving the news, serving the reader`: https://www.poynter.org/reporting-editing/2003/the-hourglass-serving-the-news-serving-the-reader/
- Poynter, `Story Forms and Shapes`: https://www.poynter.org/reporting-editing/2008/story-forms-and-shapes/
- Nieman Journalism Lab, `Why 2025 is all about user needs`: https://www.niemanlab.org/2024/12/why-2025-is-all-about-user-needs/

These sources support two principles Portfilo adopts:

1. audiences have different information needs, so commissioning and presentation should respond to the actual reader job;
2. writing form should follow the material and reader need rather than a universal article template.

They do **not** prove that one prose style is universally best.

## Required pre-draft sequence

For every substantial story:

```text
TOPIC / QUESTION
  ↓
SUBJECT RESEARCH
  ↓
EVIDENCE + CONTRADICTIONS
  ↓
STORY DECISION
  ↓
READER NEED / AUDIENCE INTEREST
  ↓
PROFESSIONAL FORM RESEARCH
  ↓
HUMAN-EDITED STYLE EXEMPLARS
  ↓
STYLE-RESEARCH.MD
  ↓
STYLE-BRIEF.MD
  ↓
HUMAN APPROVAL
  ↓
DRAFT
```

Do not skip from `STORY DECISION` directly to prose.

## 1. Research the story's purpose and reader need

Before style research, state:

- what the reader should know, understand, interpret, or be able to decide after reading;
- what the intended reader is likely to know already;
- which concepts require explanation;
- which parts of the subject are likely to hold attention because they affect the reader's understanding, decision, or curiosity;
- what the piece is **not** trying to do.

Portfilo's internal reader-need labels remain:

- `Update`;
- `Understand`;
- `Interpret`;
- `Decide`.

These labels are planning tools, not public copy.

Do not invent demographic psychology. If an audience-interest claim matters to the assignment and is not obvious from the product's approved audience definition, research it or phrase it as an editorial hypothesis rather than fact.

## 2. Research the professional form

Use documented professional guidance appropriate to the writing job.

Examples:

- newsroom/editorial manuals;
- journalism-education guidance;
- domain-specific reporting guidance;
- technical-writing or content-design standards for guides/product copy;
- legal/regulatory writing guidance when the subject requires it.

The purpose is to determine structural choices such as:

- lead type;
- answer/thesis position;
- chronological vs modular vs analytical motion;
- placement of context;
- placement of caveats and counterarguments;
- sectioning;
- ending function.

Record the sources actually used.

## 3. Research human-edited writing mechanics

Every substantial article must review a small set of relevant human-edited exemplars before Draft 1.

Default target:

**2-4 exemplars.**

Choose exemplars because they solve a similar **writing problem**, not merely because they cover the same topic.

Examples:

- a Perspective should study strong argument/idea essays;
- an Explained story should study strong explainers for readers with similar assumed knowledge;
- an Analysis should study evidence-led analysis rather than opinion columns;
- a Reported feature should study reported features with similar evidence shape;
- a Guide should study operational guidance, not essays about the task.

Prefer reputable publications with visible editorial standards or established professional editing.

## What to study in exemplars

Study decisions, not voice imitation.

At minimum record:

- what the opening does;
- how soon the central answer/thesis appears;
- what a normal paragraph is doing;
- whether paragraphs tend to develop one sentence or several related sentences;
- how examples are introduced and developed;
- how facts, quotations, interpretation, and context are separated;
- how transitions work;
- whether rhetorical questions are used and how sparingly;
- first-person and second-person use;
- use or avoidance of subheads;
- how limitations or counterarguments enter;
- how the ending functions;
- vocabulary level and assumed subject knowledge;
- patterns notably absent from the prose.

Do not reduce this to mechanical averages such as a required sentence count per paragraph. The purpose is to understand editorial behavior, not to create a statistical imitation engine.

## No-imitation boundary

Style research does not authorize copying.

Do not copy or closely mimic:

- distinctive phrases;
- sentence sequences;
- metaphors;
- jokes;
- signature cadence;
- branded terminology;
- rhetorical quirks associated with a particular writer;
- another publication's institutional voice.

The research output should describe transferable decisions in plain terms.

Good:

> The exemplars state the thesis within the first several paragraphs and let developed examples carry the middle; they do not repeatedly restate the thesis after each example.

Bad:

> Write this like [named writer].

## 4. Create `style-research.md`

Each substantial story packet must contain:

`style-research.md`

Use:

`research/STYLE_RESEARCH_TEMPLATE.md`

This file is the **research record**.

It records what professional guidance and human-edited examples actually showed.

It must distinguish:

- observed practice;
- Portfilo's interpretation of that practice;
- final editorial decisions.

Do not write the draft inside `style-research.md`.

## 5. Create or revise `style-brief.md`

`style-brief.md` is the **decision record**.

It converts the research into explicit constraints for this story.

The brief must cite the relevant findings from `style-research.md` and state:

- selected form;
- lead job;
- answer/thesis position;
- middle logic;
- counterevidence placement;
- ending job;
- paragraph/rhythm constraints where material;
- voice/person constraints;
- terminology constraints;
- headline/dek/description jobs;
- assignment-specific AI-slop risks.

A story may not begin Draft 1 until both files exist and the brief is approved.

## 6. Drafting rule

When AI assists with a draft, it receives the approved research packet, `style-research.md`, and `style-brief.md` as constraints.

The drafting instruction is not:

> Write a strong article about this.

It is effectively:

> Execute these researched editorial decisions using only the authorized evidence and argument.

If the generated draft introduces a new structural device, voice pattern, factual claim, institutional position, or rhetorical strategy not supported by the brief, that addition has no authority merely because it reads smoothly.

## 7. Re-research when the story changes

Style research is not permanent if the assignment materially changes.

Return to research when:

- the reader need changes;
- the content type changes;
- new reporting changes the evidence shape;
- the story is reframed;
- a draft repeatedly fights the selected form;
- the audience assumption proves wrong;
- the piece becomes substantially shorter, longer, more technical, or more argumentative than planned.

Do not force an obsolete style brief onto a changed story.

## Site and product copy

Significant site-copy rewrites should use the same principle with the appropriate source class.

Research the writing job before rewriting:

- navigation/actions -> interface and content-design guidance;
- signup/newsletter -> subscription UX and actual product behavior;
- About -> comparable publication About pages plus approved Portfilo institutional facts;
- Standards -> newsroom standards/transparency pages plus actual Portfilo procedure;
- Privacy -> actual data flow and applicable policy/legal requirements;
- errors/status -> interface-writing guidance plus actual system state.

For small literal maintenance changes, a full multi-exemplar packet is unnecessary when the wording is dictated by actual behavior. The research burden should match the editorial discretion involved.

## Final rule

> **No substantial story is drafted from bare AI intuition.**

Research establishes what can be said.

Reader need establishes what the piece must do.

Professional practice and human-edited examples establish defensible options for how to do it.

Human editorial judgment chooses among those options.

AI may then help execute the choice.