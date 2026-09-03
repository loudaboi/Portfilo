# Portfilo Writing-System Research

_Last updated: 2026-09-03_

## Decision

**ADOPT / FORM-FIRST WRITING SYSTEM**

Portfilo should not solve AI-shaped prose by inventing a more detailed artificial `house voice` prompt.

The stronger approach is:

1. preserve evidence and institutional authority separately from prose;
2. choose a documented writing form before drafting;
3. use professional guidance and human-edited examples to study structural decisions, not wording;
4. require a story-specific style brief;
5. treat AI output as a proposal with zero automatic stylistic authority;
6. run structural, provenance, human-language, and repeated-pattern audits before publication.

## Problem identified

The existing system had strong evidentiary controls but a weaker prose-origin control.

`docs/RESEARCH_STANDARD.md` correctly established that AI output has zero evidentiary weight.

`docs/COPY_STYLE.md` already warned against AI-shaped copy.

But the workflow could still become:

```text
verified idea/evidence
-> AI invents structure and wording
-> editorial cleanup
```

That permits unsupported institutional phrasing, generic rhetorical patterns, and polished but unearned voice even when every factual claim is accurate.

## Research question

What kind of writing-control system can reduce free-form AI prose without pretending that one publication voice or one story formula is universally correct?

## Main finding

There is no single professionally established or empirically universal prose style that Portfilo should copy.

Professional journalism instead uses multiple recognizable forms selected according to what the material needs to do.

Poynter's writing guidance explicitly treats forms such as the inverted pyramid, nut-graf/analytical feature, hourglass, narrative, and other structures as tools rather than one mandatory shape. Its hourglass guidance uses the principle `form follows content`: decide what the material contains before selecting the container.

For Perspective/opinion work, The OpEd Project documents a useful argument pattern—lede/news hook, argument, evidence-backed points, meaningful counterargument, conclusion—while explicitly noting that the structure is not a universal rule.

For product/interface copy, GOV.UK content-design guidance starts from user need and appropriate format rather than brand voice, while GOV.UK interface guidance emphasizes functional headings and accessible link/action text. Microsoft writing guidance similarly emphasizes leading with important information, active actions, concise UI text, and final editing scans for repetition.

These sources support **form discipline**, not sentence imitation.

## Sources reviewed

### Journalism form

Poynter — Story Forms and Shapes  
https://www.poynter.org/reporting-editing/2008/story-forms-and-shapes/

Use:

- establishes that journalism has multiple recognized forms;
- supports selecting a form rather than using one default.

Limitation:

- professional writing guidance, not proof that one form maximizes outcomes for every reader/story.

Poynter — The hourglass: serving the news, serving the reader  
https://www.poynter.org/reporting-editing/2003/the-hourglass-serving-the-news-serving-the-reader/

Use:

- explicit `form follows content` principle;
- supports matching structure to material before drafting.

Poynter — The nut graf tells the reader what the writer is up to  
https://www.poynter.org/archive/2003/the-nut-graf-part-i/

Use:

- documents the analytical/news-feature form;
- shows the nut section's job of orienting the reader after a non-summary opening;
- useful for Reported, Profile, and some explanatory enterprise stories.

Poynter — Fundamentals of Editing: Structure  
https://www.poynter.org/educators-students/2016/fundamentals-of-editing-structure/

Use:

- provides structural audit questions around logical order, context, terms, relationships, impact, and voice.

Poynter — Profile analysis  
https://www.poynter.org/reporting-editing/2013/atlanta-journal-constitution-writer-shows-what-it-takes-to-write-an-excellent-profile/

Use:

- profile understood as selective reported portrait built from detail, observation, history, reading, and research rather than an exhaustive biography.

### Perspective / opinion

The OpEd Project — Op-Ed Writing: The Basics  
https://www.theopedproject.org/resources

Use:

- lede;
- identifiable argument;
- evidence-backed points;
- meaningful counterargument / `to be sure` section;
- conclusion.

Limitation:

- explicitly presented by the source as one possible approach, not a universal formula.

### Product and site copy

GOV.UK — Understand content design  
https://guidance.publishing.service.gov.uk/writing-to-gov-uk-standards/plan-manage-content/understand-content-design/

Use:

- start with user need;
- choose amount, format, and publishing location based on the need;
- remove duplicate/unnecessary content;
- use clear, accessible language.

GOV.UK — Writing for user interfaces  
https://www.gov.uk/service-manual/design/writing-for-user-interfaces

Use:

- functional page headings;
- clear links/actions;
- avoid decorative or humorous UI language when it interferes with the task;
- make interface text work independently for accessibility.

Microsoft — Writing style  
https://learn.microsoft.com/en-us/windows/apps/design/style/writing-style

Use:

- lead with important information;
- emphasize actions;
- concise interface text;
- clear error and button language.

Microsoft — Final publishing review  
https://learn.microsoft.com/en-us/style-guide/final-publishing-review

Use:

- read aloud;
- inspect headings alone;
- inspect first sentences of paragraphs;
- remove unnecessary/redundant elements.

These became explicit Portfilo anti-slop editing checks.

## Rejected approach: one `proven Portfilo style`

Do not create a universal prompt such as:

> Write all Portfilo stories in this proven voice.

Reasons:

- different editorial types solve different reader needs;
- style examples can encourage imitation rather than judgment;
- a single voice prompt can reproduce the same rhetorical patterns across unrelated stories;
- professional references document multiple forms rather than one universal structure;
- `proven` would overstate what the research establishes.

## Rejected approach: exemplar imitation

Portfilo may review human-edited examples from reputable publications.

It may learn from:

- answer placement;
- sequencing;
- use of evidence;
- treatment of counterevidence;
- section architecture;
- ending function.

It must not imitate:

- distinctive wording;
- signature rhythm;
- metaphors;
- jokes;
- branded vocabulary;
- identifiable writer voice.

No one exemplar becomes a house template.

## System consequence

The new workflow is:

```text
QUESTION / APPROVED PREMISE
-> EVIDENCE / AUTHORITY
-> STORY DECISION
-> WRITING JOB
-> FORM SELECTION
-> STYLE BRIEF
-> DRAFT
-> ADVERSARIAL REVIEW
-> CLAIM AUDIT
-> STRUCTURE / EDITORIAL PASS
-> AI-SLOP / HUMAN-LANGUAGE PASS
-> HEADLINE / DEK / DESCRIPTION AUDIT
-> VISUAL REVIEW
-> PUBLISH
```

## Existing-work consequence

The new system does not retroactively certify existing Portfilo prose.

Required follow-up:

1. inventory and provenance-audit all public site copy;
2. separate story `dek` from compact `description` in the content model;
3. build a proper `/stories` index and update navigation as part of the site-copy/information-architecture pass;
4. create new style briefs for C027, C009, and C030;
5. restructure/rewrite each only after its style brief is approved;
6. do not publish C030 until it passes the new system.

## Current outcome

**PASS / IMPLEMENT WRITING SYSTEM BEFORE PUBLIC-COPY REWRITE**