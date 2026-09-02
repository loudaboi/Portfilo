# C001 Contradictions and Challenge Log

_Last updated: 2026-09-02_

This file records evidence or structural problems that could weaken the emerging story. It is not a list of objections to dismiss.

## X01 - Swarm report: 65% narrative vs 40% chart

The public Philippine AI Report 2025 page states that 65% of organizations remain at proof-of-concept stage. On the same page, the displayed chart for `What is the nature of your AI project(s)?` labels Proof of Concept at 40%.

Possible explanations include different denominators, multiple-response logic, or an editorial/chart inconsistency. None should be assumed.

**Required action:** obtain the methodology appendix/question-level results or clarification from the report team before using the 65% figure as a Portfilo claim.

**Effect on story:** does not eliminate the broader question, but weakens any opening that depends on the exact 65% statistic.

## X02 - Success-case selection bias

Most detailed public implementation material found so far comes from company reports, technology vendors, cloud providers, or implementation partners. These sources have incentives to publish successful projects and positive metrics.

**Required action:** source at least one stalled, abandoned, materially constrained, or mixed-outcome case if feasible. If failure-side evidence cannot be obtained, disclose the sample limitation and avoid a universal `what separates winners from losers` conclusion.

## X03 - `Production` may be used inconsistently

A company may describe any live tool as production, including a limited employee pilot, a chatbot serving a narrow subset of users, or a system that still depends on extensive human intervention.

**Required action:** use the working production criteria in `brief.md` and test them with independent practitioners. Record each case's actual operating scope rather than accepting the label.

## X04 - Large enterprises may not generalize to MSMEs

Globe and PLDT/Smart are large organizations with substantial IT, procurement, data, security, and integration capacity. Their implementation path may not resemble that of a smaller Philippine business.

**Required action:** seek at least one smaller-company/MSME implementation attempt through DOST AIgnite, DOST regional programs, integrators, or direct sourcing. If the story remains enterprise-only, narrow the scope explicitly.

## X05 - Model capability may matter more than the working hypothesis assumes

The current hypothesis emphasizes process, integration, data, governance, ownership, and measurement. It remains possible that a project's transition was primarily enabled by a specific product/model capability becoming reliable or affordable enough.

**Required action:** for each case, ask what technically changed and whether the same project would have failed with the prior model/product generation. Do not force organizational explanations where technical capability is the material cause.

## X06 - Human labor may be hidden inside `automation`

A production AI system can still rely on substantial review, escalation, exception handling, prompt maintenance, data labeling, QA, or rework.

**Required action:** measure or describe the human work that remains. Avoid equating automated resolution, containment, or AI-assisted handling with fully autonomous work.

## X07 - Outcome metrics may use non-comparable baselines

Vendor/company case studies report metrics such as faster resolution, productivity gains, cost savings, or reduced workload. Definitions, periods, sample sizes, and baselines may differ or be unavailable.

**Required action:** request the metric definition, baseline period, measurement period, denominator, exclusions, and who calculated it. If unavailable, attribute the claim and do not combine unlike metrics into a comparative scorecard.

## X08 - Governance requirements vary by use case

NPC AI/privacy guidance is directly relevant when personal data is processed, but not every AI workflow raises the same privacy, automated-decision, or security obligations.

**Required action:** map regulatory/governance requirements to the facts of each case. Do not imply that every production AI system requires the same control set.

## X09 - Broad employee AI use is not the same as production integration

Companies may report high employee adoption of general AI tools while still having few deeply integrated production systems.

**Required action:** separate tool access, individual use, sanctioned enterprise tooling, workflow integration, and operational production in the reporting taxonomy.

## X10 - No national causal conclusion from a small case set

Even a strong comparative case study cannot establish which factors determine AI production success across all Philippine companies.

**Required action:** frame findings as patterns in the reported cases unless a broader dataset independently supports generalization. Preserve case-selection limitations in methodology.

## X11 - Candidate cases span different workflow and risk classes

The strongest current leads include telecom customer/service operations, banking onboarding/underwriting/fraud systems, internal enterprise workflows, and an energy company's POC program. Their data sensitivity, regulatory exposure, error costs, system architecture, and operational cadence differ substantially.

**Required action:** define a common comparison frame before treating the cases as comparable. If only superficial dimensions overlap, narrow the story rather than manufacture one pilot-to-production formula.

**Effect on story:** this is now one of the main structural risks to the flagship framing.

## X12 - `AI` may bundle materially different technologies

Company reports often use `AI` as an umbrella term that can include conventional predictive machine learning, rules-plus-ML systems, generative AI, retrieval systems, and agentic workflows. A mature fraud model and a generative contact-center agent may have very different deployment requirements.

**Required action:** identify the relevant system, model class, product/vendor, version or deployment architecture where material. Do not infer that a lesson from one AI class automatically transfers to another.

## X13 - POC or not-yet-launched does not mean failure

First Gen explicitly describes POC evaluation before broader deployment, and UnionBank's 2025 report describes RIA as soon to be launched. Deliberate review, staged rollout, governance approval, or a scheduled future launch may be evidence of disciplined implementation rather than inability to scale.

**Required action:** distinguish `failed`, `stalled`, `constrained`, `still evaluating`, `approved for rollout`, and `scheduled but not launched`. Ask why the system remains in its current stage and what would change that state.

## X14 - Public-case sourcing may bias the sample toward large enterprises

The extended reconnaissance now has several credible large-company leads but no publicly reconstructable MSME production case. If the only companies willing to provide operational evidence are large firms, adding a shallow MSME example merely for balance would lower the reporting quality.

**Required action:** use DOST AIgnite and regional programs to seek a smaller-company case, but narrow the scope to larger Philippine organizations if MSME evidence remains too thin. Do not imply SME applicability without evidence.

## X15 - Company report language can establish disclosure, not underlying performance

UnionBank, First Gen, Globe, Ayala, and PLDT materials are useful primary records of what companies say about their programs and stages. They do not independently establish productivity, quality, ROI, causation, or the absence of hidden costs.

**Required action:** distinguish stage facts that can be corroborated operationally from performance claims that require baselines, methods, or independent evidence. Treat annual reports as primary company testimony, not neutral evaluation.

## Current challenge assessment

The new case leads make C001 source-access plausible, but they also sharpen the central methodological risk: the story can only make a useful cross-case comparison if the reporting finds common implementation dimensions beneath materially different workflows.

**Current outcome remains:** `CONTINUE`.
