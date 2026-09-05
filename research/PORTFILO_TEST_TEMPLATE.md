# Portfilo Test Template

Use this template for a Portfilo Test packet under:

`research/tests/<slug>/`

The governing standard is `docs/PORTFILO_TEST_STANDARD.md`.

Do not begin final scored runs until the brief is complete and the protocol is frozen.

---

# brief.md

## Test identity

**Working title:**

**Test slug:**

**Primary story question:**

**Primary topic:**
Business / Technology / Startups / AI / Building

**Strategic lane:**
AI + Work / Digital Economy Infrastructure / Building Companies / None

**Primary reader need:**
Update / Understand / Interpret / Decide

**Owner:**

**Protocol status:**
DRAFT / FROZEN / AMENDED

**Protocol frozen at:**

## Reader payoff

What useful question will this Test answer for the reader?

## Hypothesis

What does Portfilo currently expect before final testing?

Treat this as a hypothesis, not a conclusion.

## Disproof condition

What result or evidence would materially weaken or overturn the hypothesis?

## Scope

### In scope

-

### Out of scope

-

### Claim boundary

What will this Test **not** attempt to establish?

## Existing coverage / information gap

What credible evaluations, reviews, benchmarks, vendor material, or prior reporting already exist?

What can Portfilo add that is not already answered well?

## Systems under test

Create one record per tested system.

### System A

**Provider:**

**Product:**

**Displayed model name:**

**Model identifier/version if exposed:**

**Access method:**
Web / app / API / CLI / agent harness / other

**Plan/tier:**

**Reasoning/effort mode:**

**Sampling settings if exposed/material:**

**Enabled tools/integrations:**

**Relevant limits:**

**Version uncertainty:**
What material implementation detail is not visible to Portfilo?

## Test window

**Planned final-test date/window:**

**Location when material:**

## Environment

Record only conditions that could materially affect results.

**Device / OS:**

**Browser/app/CLI version:**

**Network/location condition:**

**Files/fixtures:**

**Agent runtime/resources:**

**Time limits:**

**Token/context limits:**

**Other material configuration:**

## Task design

**Number of final tasks:**

**Task families:**

**Why these task families fit the story question:**

**Task provenance:**
Original / adapted / public benchmark / mixed

**Contamination/leakage considerations:**

### Task table

| Task ID | Family | Task | Starting material | Required outcome | Objective success check | Subjective rubric needed? |
|---|---|---|---|---|---|---|
| T01 |  |  |  |  |  |  |

## Pilot / development phase

What will be validated before the protocol freezes?

-

Pilot attempts are not final evidence unless explicitly designated as final before execution.

## Success criteria

Define success before final runs.

### PASS


### PARTIAL

Delete this category if the Test is binary.


### FAIL


## Trial rule

**Default final trials per non-deterministic task/system:**
3

**Approved exception, if any:**

**Why:**

## Retry / rerun rule

Define before final testing.

### System/task failure

How will it be scored?

### Product/integration failure

How will it be scored?

### Portfilo infrastructure failure

When is a rerun valid?

How will invalidated attempts remain recorded?

## Evaluation method

### Objective checks

-

### Structured rubric

Delete if not needed.

| Criterion | Definition | Scale |
|---|---|---|
|  |  |  |

### Human evaluation

**Is model/vendor identity hidden where practical?**
Yes / No / Not applicable

**Is output order randomized where practical?**
Yes / No / Not applicable

**Primary evaluator qualification:**

**Second reviewer required?**
Yes / No

**Reason:**

### Model-assisted grading

If used, what role does it play?

It must not be treated as unquestioned authority.

## Filipino / Philippine context

**Is Philippine context materially relevant?**
Yes / No

**Why:**

**Is Filipino/Taglish/Cebuano/another Philippine language materially relevant?**
Yes / No

**Language/task authorship or reviewer competence:**

**How translationese or unnatural translated tasks are avoided:**

## Business-workflow conditions

Delete if not applicable.

**Starting state:**

**Requested deliverable/final state:**

**Allowed tools:**

**Human correction allowed during task:**

**What counts as usable completion:**

## Cost and timing

**Are cost/timing material to the reader decision?**
Yes / No

If yes, record:

**Wall-clock timing method:**

**Time-to-usable-outcome method:**

**Token/call usage method:**

**Direct cost method:**

**Subscription-plan context:**

**What the cost explicitly excludes:**

## Data provenance and privacy

**Data class:**
Public / synthetic / explicitly permissioned / mixed

**Source/provenance:**

**Personal information present?**
Yes / No

**Sensitive/confidential material present?**
Yes / No

**Privacy/legal review required?**
Yes / No

**Retention/redaction rule:**

## Safety and external actions

**Can the tested system take external actions?**
Yes / No

If yes:

**Sandbox/test account used:**

**Actions permitted:**

**Actions prohibited:**

**Prompt-injection/data-exfiltration controls where relevant:**

## Vendor relationship and independence

**Vendor access/support received:**

**Free credits, loaned access, sponsorship, affiliate, travel, ownership/employment, or other material relationship:**

**Disclosure required:**
Yes / No

**Vendor factual-review opportunity planned:**
Yes / No / Not needed

Vendor review does not grant editorial approval or allow removal of valid failures.

## Evidence retention plan

Retain as applicable:

- [ ] exact user prompts/tasks;
- [ ] setup/configuration notes;
- [ ] raw transcripts;
- [ ] model outputs;
- [ ] exported files;
- [ ] screenshots;
- [ ] code diffs;
- [ ] grader output;
- [ ] timestamps;
- [ ] cost/usage records;
- [ ] final-state verification;
- [ ] failed final runs;
- [ ] invalidated infrastructure attempts and reasons.

**Evidence path:**
`research/tests/<slug>/evidence/`

## Known limitations before testing

-

## Protocol approval

**Protocol decision:**
APPROVE / REVISE / HOLD / KILL

**Approved by:**

**Approval date:**

**Frozen protocol notes:**

---

# runs.csv

Create one row per final trial. A useful v0 header is:

```csv
task_id,system_id,trial,started_at,completed_at,outcome,elapsed_seconds,cost,usage,correction_needed,failure_type,evidence_ref,notes
```

`outcome` should follow the frozen scoring rule.

`failure_type` should distinguish, where applicable:

- `SYSTEM_TASK`
- `PRODUCT_INTEGRATION`
- `PORTFILO_INFRA`
- `NONE`

Do not delete failed final trials from the file.

---

# evaluation.md

## Evaluation status

DRAFT / COMPLETE

## Protocol integrity check

- Was the final protocol frozen before scored runs?
- Were all systems run under the intended comparable conditions?
- Were any tasks amended after final testing began?
- Were all affected systems rerun after any material amendment?
- Were invalidated attempts retained with reasons?
- Were valid failures retained?

## Aggregate results

Present the simplest result that answers the Test question.

Do not create a universal 0-100 score.

### Outcome table

| System | Pass | Partial | Fail | Total valid trials |
|---|---:|---:|---:|---:|
|  |  |  |  |  |

Delete `Partial` if the Test is binary.

## Reliability / variation

What changed across repeated runs?

Were successes stable, intermittent, or highly variable?

## Task-level findings

### T01

**Observed result:**

**Representative evidence:**

**Failure/variation notes:**

**Material caveat:**

## Human evaluation findings

Delete if not applicable.

Record consequential judgments and short reasons.

Note whether grading was blinded/randomized and whether a second reviewer adjudicated decisive items.

## Cost and timing findings

Delete if not material.

State exactly what was measured and what was excluded.

## Failure analysis

Separate:

### System/task failures

-

### Product/integration failures

-

### Portfilo infrastructure failures

-

## Contradictions and alternative explanations

What could make the apparent conclusion wrong or narrower than it first appears?

Consider:

- setup differences;
- version opacity;
- task design defects;
- sample size;
- non-determinism;
- grader subjectivity;
- contamination;
- network/runtime effects;
- vendor-specific product constraints;
- selection bias;
- missing task families;
- conflicting external evaluations.

## Vendor claims versus Portfilo observations

### Vendor claims relevant to the story

-

### Portfilo observations

-

### Portfilo interpretation

-

Do not collapse these categories.

## Philippine / language findings

Delete if not applicable.

What did the Test actually establish about Philippine conditions, Filipino/Taglish/Cebuano language use, or local workflows?

Avoid claims broader than the tested task set.

## Privacy / safety outcome

Were any privacy, security, prompt-injection, unsafe-action, or data-handling issues observed?

Were all test accounts/data handled according to the brief?

## Limitations

List only limitations that materially affect interpretation.

-

## Claim boundary after testing

### Supported

What can Portfilo now say?

### Not supported

What stronger conclusions remain unsupported?

## Story decision

PUBLISH / REFRAME / CONTINUE / KILL

**Reason:**

A technically completed Test does not require publication if the result is weak, ambiguous, redundant, or not useful.

## Public methodology facts

Prepare the reader-facing facts that may be needed in the article:

**Tested:**

**When:**

**Tasks:**

**Trials:**

**Setup:**

**Evaluation:**

**Location if material:**

**Cost/time if material:**

**Data provenance if material:**

**Main limitations:**

## Derivative / showcase notes

If a video, carousel, screenshot sequence, social post, or Brief item is produced, identify which runs are shown and whether each is representative, best-case, or unusual.

Derivatives must preserve the Test's setup, limitations, and vendor-claim/observation distinction.