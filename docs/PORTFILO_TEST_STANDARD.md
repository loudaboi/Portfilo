# Portfilo Test Standard

_Last updated: 2026-09-06_

## Purpose

This standard governs `Portfilo Test`, Portfilo's format for independently testing an AI model, product, agent, workflow, or comparison and reporting what Portfilo actually observed under defined conditions.

A Portfilo Test is evidence-producing editorial work. It is not a vendor demo, casual prompting session, product launch recap, review based only on impressions, permanent leaderboard, or claim that one test establishes universal model quality.

This document extends, and does not replace:

- `docs/EDITORIAL_STANDARD.md`;
- `docs/RESEARCH_STANDARD.md`;
- `docs/PUBLISHING_STANDARD.md`;
- `docs/CONTENT_PLANNING.md`;
- `docs/COPY_STYLE.md`.

The existing Portfilo editorial gate, research packet, contradiction search, claim audit, writing system, publication approval, correction rules, and commercial-independence rules continue to apply.

## Core principle

**Test a narrow question under recorded conditions, preserve the evidence, and claim no more than the test can establish.**

A Portfilo Test may establish what a system did in the recorded test conditions. It does not automatically establish what the system will do for every user, version, language, market, workflow, occupation, or future release.

AI-generated factual assertions still have zero evidentiary authority merely because a model produced them. In a Portfilo Test, the retained execution record and resulting artifact may be direct evidence of **how the tested system behaved**. Any factual claim inside that output about the outside world must still be independently verified under the normal research standard.

## What qualifies as a Portfilo Test

A proposed Test must have:

1. a specific editorial question;
2. a plausible reader payoff;
3. a testable task or workflow connected to that question;
4. a frozen protocol before final scored runs;
5. retained evidence sufficient to audit the reported result;
6. a result that Portfilo can describe within the limits of the test.

Examples of appropriate questions include:

- Can these AI assistants correctly complete a defined Philippine small-business spreadsheet workflow?
- How reliably does this agent complete a specified multi-step research task?
- How do selected models handle naturally written Filipino or Taglish customer-support tasks?
- What happens when a coding agent is given the same repository task under comparable conditions?

Weak questions include:

- Which AI is the smartest?
- Which AI is best overall?
- Can AI replace this job?

unless the question is narrowed into something Portfilo can actually test and support.

## Assignment gate

A Test idea follows the normal planning gate in `docs/CONTENT_PLANNING.md`.

The `Portfilo Test` label does not rescue a weak question, create originality by itself, or lower the evidence standard.

Before a Test assignment is approved, record:

- the story question;
- why the answer matters;
- why now, where relevant;
- the proposed original contribution;
- likely systems to test;
- likely task families;
- feasibility, access, cost, privacy, safety, and technical constraints;
- existing coverage and whether another evaluation already answers the question well.

Approval of this methodology does **not** authorize any specific Portfilo Test. Each Test requires its own assignment approval and frozen test brief.

## Test packet

Use this v0 structure unless the assignment has a concrete reason to differ:

```text
research/tests/<slug>/
├── brief.md
├── runs.csv
├── evaluation.md
└── evidence/
```

Use `research/PORTFILO_TEST_TEMPLATE.md` when creating the packet.

Do not build a database, benchmark service, automated leaderboard, or custom evaluation platform for v0 unless a later validated need justifies it.

## Freeze the protocol before final runs

The final test protocol must be written before final scored runs begin.

The frozen brief must record:

- test question;
- reader payoff;
- hypothesis;
- disproof condition;
- scope and exclusions;
- systems being tested;
- product/model/version information available to Portfilo;
- date or test window;
- plan/tier and access method;
- setup and environment;
- enabled tools and integrations;
- task set and task families;
- success criteria;
- trial count;
- retry/rerun rule;
- evaluation method;
- human-evaluation rule where relevant;
- timing/cost method where relevant;
- data provenance and privacy conditions;
- known limitations before testing.

A protocol may be corrected after freezing only when a material defect is discovered, such as an impossible task, broken environment, grader bug, or ambiguous success condition.

If a material protocol change could affect comparative results, record the change and rerun all affected systems under the corrected protocol. Do not silently edit a task because one system performed badly on it.

## Pilot and final phases

Separate setup validation from evidence-producing final runs.

### Pilot / development phase

Use a small pilot set or pilot attempts to detect:

- unclear instructions;
- impossible or malformed tasks;
- broken files or fixtures;
- incorrect graders;
- environment failures;
- missing permissions;
- configuration mistakes;
- unrealistic time or token limits.

Pilot results do not belong in the final score or success denominator unless the protocol explicitly designated them as final before they were run.

### Final phase

After the protocol is frozen, final runs are evidence.

Do not remove a valid final run because it makes a system look worse or because a later run looks more impressive.

## Task design

Tasks should reflect the actual editorial question rather than every capability a product can demonstrate.

For a normal v0 Test, a useful default is:

- about **6-12 final tasks**;
- across roughly **2-4 relevant task families**.

These are defaults, not quotas. A narrower question may require fewer tasks. A higher-consequence comparison may require more.

Prefer tasks that produce an independently checkable outcome, artifact, or state change.

Examples:

- a spreadsheet with verifiable formulas and totals;
- a document whose required facts can be checked;
- a code change that can be tested;
- a workflow whose final state can be inspected;
- a classification task with a defined answer key;
- a research task whose citations can be verified.

Do not add unrelated task categories merely to make a Test appear comprehensive.

## Benchmark contamination and task leakage

Portfilo Tests should normally use original tasks created for the editorial question rather than recycled public benchmark items.

Public benchmarks may be useful context, but their scores are evidence about those benchmarks, not automatic evidence of real-world usefulness.

To reduce contamination and cherry-picking risk:

- author or adapt original final tasks before seeing final comparative results;
- keep pilot/dev tasks distinct from the final set where practical;
- avoid selecting only examples already known to favor a particular system;
- record any task sourced or adapted from public material;
- do not repeatedly rewrite a failed task until a preferred system passes;
- if an unpublished final task set is retained to reduce future contamination, disclose that the tasks were withheld and why.

A benchmark result from another organization remains an external source claim. Portfilo should not present it as a Portfilo observation.

## Systems, versions, and environment

Record the system actually tested, not merely the vendor brand.

Capture where available:

- provider;
- product;
- displayed model name;
- model identifier or dated version;
- app, API, CLI, or agent harness;
- plan/tier;
- reasoning/effort mode;
- temperature or sampling settings when exposed and material;
- tools, browsing, memory, connectors, file access, or integrations;
- operating system, browser, device, region, or network condition when material;
- resource limits, timeouts, token limits, or compute constraints when material.

If a consumer product does not expose the underlying model build or setting, say so. Do not invent precision Portfilo cannot observe.

For comparisons, hold material conditions constant where practical. If systems require genuinely different native workflows, document the difference rather than pretending the setups are identical.

Agentic tests require special care because runtime resources, tool availability, time limits, and environment configuration can materially change outcomes.

## Non-determinism and multiple trials

Generative models and agents can produce different results from the same task.

For tasks where that variation matters, the v0 default is **three independent final trials per task per system**.

Use fewer only when:

- the operation is effectively deterministic;
- the test cost makes repetition disproportionate and the limitation is disclosed;
- the editorial question concerns a single observable event rather than reliability.

Use more when:

- the central claim is about reliability or consistency;
- results are close or unstable;
- the consequence of a false conclusion is high;
- five or more trials materially improve the evidence at reasonable cost.

A single striking success or failure may be shown as an example, but one run must not support a general reliability claim.

Report denominators where useful, for example:

> The system completed 8 of 9 final trials without correction.

Prefer that over vague phrases such as `usually worked`.

## Retry and rerun rule

Define before final testing what counts as a valid retry or rerun.

Distinguish at least:

### System/task failure

The tested system received a valid task under the protocol and failed to complete it correctly.

### Product/integration failure

A vendor interface, tool, connector, or integration failed in a way that is part of the user-facing product being tested.

### Portfilo infrastructure failure

Portfilo's own test environment failed independently of the tested system, for example a broken local fixture, lost network connection unrelated to the product, or grader defect.

A genuine Portfilo infrastructure failure may justify a rerun under the predeclared rule. Record the invalidated attempt and reason rather than deleting its existence from the research packet.

Do not reclassify an inconvenient product failure as infrastructure failure merely to improve a result.

## Evaluation order

Prefer evaluation methods in this order when the task allows it:

1. deterministic or independently verifiable outcome checks;
2. structured rubric checks;
3. blinded human judgment;
4. model-assisted grading as a secondary aid, not unquestioned authority.

The final artifact or state matters more than a persuasive transcript claiming success.

Where an agent says it completed an action, verify whether the requested action or state actually exists.

## Scoring

Portfilo v0 does **not** use a universal `0-100` AI score or permanent overall intelligence index.

Use the simplest score that matches the question.

### Binary outcome

`PASS / FAIL`

Use when success is objectively defined.

### Compound workflow

`PASS / PARTIAL / FAIL`

Define `PARTIAL` before final runs. Do not invent partial credit after seeing the results.

### Subjective quality

Use a small assignment-specific rubric only for dimensions that genuinely require human judgment, such as:

- factual accuracy;
- completeness;
- instruction adherence;
- usefulness of the artifact;
- language naturalness;
- clarity or presentation quality when those are part of the task.

Do not average unrelated qualities into a grand score merely to create one winner.

A valid conclusion may be multi-dimensional, for example one system may be more reliable while another is faster or produces stronger prose.

## Human evaluation

When the central result depends on subjective judgment:

- define the rubric before final evaluation;
- hide model/vendor identity where practical;
- randomize output order where practical;
- judge the work against the rubric rather than brand preference;
- retain a short reason for consequential judgments.

One evaluator is acceptable for a small v0 Test when objective outcome checks carry most of the conclusion.

If a central or close conclusion depends primarily on subjective judgment, use a second competent reviewer for the decisive items or adjudication where practical.

For Filipino, Taglish, Cebuano, or other language-quality judgments, use reviewers competent in the language variety being evaluated. Do not treat literal machine translation as equivalent to naturally written local-language material.

## Philippine-specific testing

Philippine context is valuable when it materially affects the product question.

Relevant dimensions may include:

- Philippine prices and plan availability;
- local regulations or institutions;
- payments and business processes;
- connectivity or regional access;
- Philippine documents or market conditions;
- Filipino, Taglish, Cebuano, or other Philippine-language use;
- workflows common to Philippine companies or workers.

Do not force a Philippine or Filipino-language section into a Test where geography or language does not materially affect the question.

When local-language testing is relevant, prefer naturally authored tasks or native-speaker validation. Avoid creating supposedly Filipino tasks by mechanically translating English benchmark items when the translation changes the language task or introduces unnatural `translationese`.

## Business-workflow tests

For workplace and business tests, define the actual unit of work.

Record:

- starting materials;
- requested deliverable or final state;
- allowed tools;
- time or interaction limits;
- what human correction is allowed;
- what counts as usable completion.

Where practical, measure **time to usable outcome**, not only token-generation speed.

Do not infer that success on a bounded workflow proves an occupation, team, or business function can be replaced.

## Cost and latency

Record cost and timing when they materially affect the reader's decision or the comparison.

Possible measures include:

- wall-clock time to completion;
- time to usable outcome after required checking/correction;
- API calls;
- token usage when exposed;
- direct API cost;
- subscription tier and relevant limits.

State what the number includes.

Do not present API inference cost as the total organizational cost of deploying an AI workflow if human review, integration, setup, or correction is excluded.

When network location materially affects latency, record the test location and avoid presenting the result as universal model speed.

## Evidence retention

Retain enough evidence that Portfilo can reconstruct the reported finding.

Depending on the Test, this may include:

- exact user prompts or task instructions;
- system/setup notes available to Portfilo;
- raw transcripts;
- model outputs;
- exported files;
- screenshots;
- code diffs;
- grader output;
- calculation sheets;
- timestamps;
- usage/cost records;
- final-state verification.

Do not retain or publish secrets, credentials, unnecessary personal data, or material Portfilo has no right to redistribute.

Evidence must include failures, not just successful or visually impressive runs.

## Prompt and setup disclosure

Publish the actual user-facing tasks/prompts and material setup information by default when legally and ethically practical.

A full prompt may be withheld or summarized when necessary because of:

- copyright or redistribution limits;
- confidential or permissioned material;
- privacy;
- security-sensitive test cases;
- hidden system prompts Portfilo cannot access;
- deliberate withholding of an unpublished task set to reduce contamination.

If material information is withheld, state what category was withheld and why when that limitation affects interpretation.

Do not claim Portfilo controlled or observed hidden system instructions, internal routing, model weights, or undisclosed vendor configuration.

## Vendor claims and observed behavior

Keep these categories separate:

### Vendor claim

What the company says its model or product can do.

### Portfilo observation

What happened in Portfilo's recorded Test under the defined conditions.

### Portfilo interpretation

What the evidence reasonably suggests, with scope and uncertainty preserved.

A vendor may be asked to clarify configuration, identify a factual error, or respond to an observed failure. The vendor may not determine the task set, remove valid failures, choose favorable weights, or control the editorial conclusion.

If Portfilo receives free credits, loaned access, travel, sponsorship, affiliate consideration, employment/ownership exposure, or another relationship that could materially affect a reader's interpretation, disclose it under the normal commercial-independence rules.

Vendor review for factual accuracy is not editorial approval.

## Cherry-picking

Portfilo must not choose the prettiest or most dramatic run and imply that it represents the full test.

When showing an individual run, identify where material whether it was:

- representative;
- a best-case success;
- an unusual failure;
- one of a stated number of trials.

The aggregate finding must use the frozen final-run set, not a curated screenshot set.

## Safety, privacy, and real-world actions

Use public, synthetic, or explicitly permissioned data by default.

Do not upload real customer databases, credentials, confidential company files, private communications, medical records, financial account data, government identifiers, or other sensitive personal information merely to make a Test realistic.

Where personal data is genuinely necessary, perform a separate privacy/legal assessment before testing and follow applicable Philippine law and Portfilo's privacy obligations.

For agents capable of external actions, prefer sandboxed or test accounts for:

- email;
- calendars;
- CRMs;
- payments;
- purchases;
- file deletion;
- public posting;
- messaging;
- form submission;
- production systems.

Do not create real-world harm, unauthorized transactions, privacy violations, or security incidents in order to produce an editorial demonstration.

External content presented to agents, including webpages, emails, files, and documents, may contain hostile or manipulative instructions. Treat prompt-injection and data-exfiltration risk as part of the test environment where relevant.

## Reproducibility

Portfilo should make a Test reproducible **as far as the product permits**, not claim deterministic replication when the system is non-deterministic or opaque.

A reader should be able to understand:

- what was tested;
- when;
- with which visible version/configuration;
- under what task conditions;
- how many times;
- how the outcome was judged;
- which important conditions Portfilo could not control.

If the vendor silently changes a hosted model or product after publication, the article remains evidence of the recorded test window, not a permanent statement about the current product.

Meaningful retests should be dated and treated as new evidence. Do not silently replace historical results.

## Claim boundaries

Appropriate formulations include:

> In Portfilo's nine-task test...

> Across three trials per task...

> Under the configuration Portfilo tested...

> The system completed 8 of 9 final trials correctly.

> Two of six research runs contained unsupported citations.

Usually inappropriate without much broader evidence:

> This is the best AI.

> This model is 20% smarter.

> Filipino businesses can automate this role.

> This proves the model cannot perform the task.

> AI can replace this occupation.

A Test can support a narrow conclusion about tested behavior. Broader claims require broader evidence.

## Public methodology disclosure

A published Portfilo Test should include a concise methodology section when needed for readers to interpret the result.

At minimum, disclose material information about:

- system/model/product and visible version;
- test date/window;
- task count and task families;
- trials/sample size;
- setup and enabled tools;
- evaluation method;
- location when materially relevant;
- cost/time when material;
- data provenance where material;
- limitations that could change interpretation.

Do not turn the public methodology section into a dump of every internal action. The research packet remains more detailed than the article.

## Showcase and derivative formats

`AI Showcase` is not a separate evidence standard.

A showcase, video, carousel, screenshot sequence, social post, or newsletter item may present evidence from a completed Portfilo Test, but it is a derivative format.

The hierarchy is:

```text
PORTFILO TEST
Original evidence-producing process
        ↓
article / analysis / reported finding
        ↓
showcase / video / carousel / screenshots / social / Brief
```

Derivative formats must preserve:

- the relevant tested setup;
- material limitations;
- the difference between vendor claims and Portfilo observations;
- the representativeness of any highlighted run.

Do not convert an unstructured demo into evidence by calling the presentation a showcase.

## Publication gate

A Portfilo Test is not publishable merely because final runs exist.

Before publication:

- the Test followed this standard;
- final evidence is retained;
- evaluation is complete;
- infrastructure anomalies are resolved or disclosed;
- contradictions and alternative explanations were considered;
- vendor claims are separated from observed behavior;
- privacy/safety issues are resolved;
- material limitations are preserved;
- the story passes the normal research, writing, claim-audit, and publication gates;
- explicit publication approval is obtained when required.

A valid Test may still end in `REFRAME`, `CONTINUE`, or `KILL` if the evidence cannot support a useful story.

## V0 defaults

Unless a Test brief documents a justified exception, use these defaults:

| Dimension | V0 default |
|---|---|
| Final tasks | About 6-12 |
| Task families | About 2-4 |
| Non-deterministic trials | 3 per task/system |
| Main scoring | PASS/FAIL or PASS/PARTIAL/FAIL |
| Universal 0-100 score | Do not use |
| Objective verification | Prefer where possible |
| Subjective comparison | Blinded/randomized where practical |
| Second human review | Use for central/close subjective conclusions where practical |
| Data | Public, synthetic, or explicitly permissioned by default |
| Task source | Original to the editorial question by default |
| Evidence | Retain all valid final runs, including failures |
| Public claim | Limited to tested conditions |

These defaults exist to reduce arbitrary decisions, not to create fake precision. Change them when the editorial question genuinely requires a different design and record why.

## Research basis

This v0 methodology was developed after reviewing Portfilo's existing editorial/research standards and current practices from evaluation labs, benchmark designers, model developers, and Philippine-language research.

Key reference points include:

- Anthropic, `Demystifying evals for AI agents` (2026): https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- Anthropic, `Quantifying infrastructure noise in agentic coding evals` (2026): https://www.anthropic.com/engineering/infrastructure-noise
- METR, `Task-Completion Time Horizons of Frontier AI Models`: https://metr.org/time-horizons/
- Stanford CRFM, HELM Capabilities: https://crfm.stanford.edu/helm/capabilities/latest/
- MLCommons, MLPerf Inference: https://mlcommons.org/working-groups/benchmarks/inference/
- OpenAI, `Measuring the performance of our models on real-world tasks` / GDPval: https://openai.com/index/gdpval/
- OpenAI and SWE-bench, `Introducing SWE-bench Verified`: https://openai.com/index/introducing-swe-bench-verified/
- Montalan et al., `Batayan: A Filipino NLP benchmark for evaluating Large Language Models` (ACL 2025): https://aclanthology.org/2025.acl-long.1509/
- Miranda et al., `FilBench: Can LLMs Understand and Generate Filipino?` (EMNLP 2025): https://aclanthology.org/2025.emnlp-main.127/
- NIST, `Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile` (2024, updated 2026): https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
- National Privacy Commission, `Data Privacy Act of 2012`: https://privacy.gov.ph/data-privacy-act/

These sources are methodological inputs, not authorities that Portfilo copies wholesale. Portfilo deliberately uses a smaller editorial testing system suited to a small publication rather than reproducing a laboratory benchmark stack.