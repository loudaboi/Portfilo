# C009 Pre-Publish Review

_Last updated: 2026-09-03_

## Purpose

This is the final editorial gate before C009 can be authorized for publication.

It applies the publication checklist in `docs/PUBLISHING_STANDARD.md` to the current draft and records any revisions made after a fresh source/currentness check.

Public draft:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

## Gate result

**EDITORIAL PRE-PUBLISH GATE: PASS**  
**TECHNICAL PRE-PUBLISH GATE: PENDING**  
**PUBLICATION AUTHORIZATION: NOT GRANTED**

The article remains `status: draft`.

## Publication checklist

| Check | Result | Notes |
|---|---|---|
| Central question answered fairly | PASS | The article explains the jobs/characteristics behind the industry phrase rather than claiming an official category exists. |
| Research packet exists | PASS | Brief, sources, sample, evidence, contradictions, adversarial review, fact-check and notes are present. |
| Consequential claims verified | PASS | Current public examples and core framework claims were rechecked on 2026-09-03. |
| Important caveats retained | PASS | No prevalence, wage-premium, growth, displacement or transition claim is made from the illustrative sample. |
| Contradictions considered | PASS | Includes source-category limits, GCC/BPO distinction, role-title noise, salary limits, sample limits and current pre-publish discrepancies. |
| Quotations checked | PASS | Final article uses no long verbatim quotation. `capacity to capability` is a short attributed phrase from IBPAP. |
| Numbers checked | PASS | 15-role sample and J&J 0-2 years checked. Nonessential disputed/variable sector headcount removed. |
| Headline audited | PASS | Does not promise wage, growth, displacement or prevalence findings. |
| Content type accurate | PASS | `explained` matches the documentary synthesis and structured sample. |
| Topic accurate | PASS | `business`; AI is context, not the primary subject. |
| Methodology useful and included | PASS | Method, sample design, access window and limitations are stated in frontmatter. |
| Commercial disclosure required | N/A | No commercial relationship identified in the reporting packet. |
| Article renders correctly | PENDING | Requires safe local/preview render before `published`. |
| Links work | EDITORIAL PASS / FINAL CLICK PENDING | Key current source/job pages rechecked 2026-09-03; final rendered-page click-through still required. |
| Mobile layout checked | PENDING | Requires rendered story. |
| Metadata/description set | PASS | Title, description, content type, topic, author, methodology and draft status are present. |
| Explicit publication approval | PENDING | Must come from Louda Tuppal after this revision is reviewed. |

## Fresh pre-publish research findings

### 1. IBPAP primary source strengthens the opening

IBPAP's official July 17, 2026 2028-outlook article directly states that the sector's next phase is intended to rely less on workforce scale and increasingly on higher-value capabilities and AI-enabled talent.

Action:

- use the primary IBPAP article for the opening strategy statement;
- keep independent reporting as a cross-check in the research packet;
- preserve attribution because this is an industry strategy/forecast, not an established labor-market outcome.

### 2. Exact 2025 headcount is not necessary and is not clean enough for this story

OECD's 2026 survey reports approximately 1.8 million workers using IBPAP 2025 data. July 2026 reporting on IBPAP's updated outlook refers to 1.9 million employees as of 2025.

The distinction is not central to C009 and may reflect timing, rounding or revised data.

Action:

- remove the exact headcount from the article;
- retain OECD's directly relevant finding about concentration in contact-center/back-office work and diversification into GCC, healthcare information management and IT/software.

### 3. Concentrix workforce-management experience requirements conflict internally

The current posting contains two thresholds: one block says more than seven years is preferred, while another says 3+ years in a similar role.

Action:

- keep the clearly described forecasting/planning duties;
- remove the experience threshold from public copy;
- record the inconsistency in `sources.md`, `sample.md`, `contradictions.md` and `fact-check.md`.

### 4. Link/currentness cleanup

Current public examples were rechecked on 2026-09-03. The Wells Fargo analytics link was normalized to the English canonical URL. The methodology now records the final check date because live job postings can later expire or change.

## Copy revision result

The pre-publish edit also:

- replaces the vague opening `the industry keeps talking about...` with a concrete IBPAP strategy statement;
- makes the sample construction clearer by identifying the frontline baselines and contrasting role families;
- removes unnecessary abstraction from the five analytical dimensions;
- replaces `AI-versus-non-AI taxonomy` with plainer language;
- tightens the workforce-management section;
- shortens the conclusion and ends on the three empirical questions the current evidence cannot answer.

## Visual decision

**No visual is required for publication.**

A five-dimension role matrix could be useful later, but the current evidence does not support a prevalence chart and a decorative visual would add little. Do not delay the first article solely to create graphics.

## Remaining technical gate

Before actual publication:

1. run `npm run build`;
2. render the story safely outside production while it is being checked;
3. inspect desktop and mobile;
4. click all public article links;
5. verify methodology and metadata rendering;
6. then request/apply explicit publication authorization.

## Final decision

**C009 is editorially ready for publication approval.**

Do not publish yet.