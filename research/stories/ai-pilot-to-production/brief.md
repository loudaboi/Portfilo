# C001 Research Brief - AI Pilot to Production

_Last updated: 2026-09-02_

## Assignment

**Candidate ID:** C001  
**State:** ACTIVE  
**Role:** Flagship  
**Primary topic:** AI  
**Primary reader need:** Understand  
**Likely content type:** Reported / Explained

## Research question

> What separates an AI pilot from a production system inside a Philippine company?

This is a working research question, not a headline and not an assumed conclusion.

## Reader payoff

Readers should come away understanding what materially changes when an AI experiment becomes a system used in real operations: process ownership, integration, data, human review, security/privacy, governance, cost control, measurement, maintenance, and organizational responsibility.

The story should replace generic "AI adoption" language with concrete operating evidence.

## Working hypothesis

**Hypothesis, not conclusion:** AI projects are more likely to move from pilot to reliable production when the organization has a clearly owned business process, usable data and system integration, explicit governance and human-review rules, measurable success criteria, and operational ownership beyond the initial technical experiment.

Model capability or vendor selection may matter, but the working hypothesis is that organizational and systems factors often determine whether a technically plausible pilot becomes repeatable operational capability.

## Disproof condition

The hypothesis should be materially weakened or abandoned if the reporting shows that:

- model/product capability is the dominant differentiator across comparable cases;
- successful and stalled cases do not meaningfully differ on process, data, governance, ownership, or measurement;
- the available cases are too heterogeneous to support a useful cross-case comparison;
- access is limited to success-only marketing cases and cannot support a fair comparison;
- the term `production` cannot be defined consistently enough for the selected cases.

If those conditions occur, reframe or kill the assignment rather than forcing the planned story.

## Scope

### Geography

Philippine organizations or Philippine operating units where the deployment and decision-making can be reported with meaningful local evidence.

Do not force Philippine geography when it does not affect the implementation question. The geography matters here because the assignment is testing actual implementation inside Philippine organizations and the local policy, talent, infrastructure, and operating environment may affect the result.

### Period

Primary focus: 2024 through September 2026.

Older deployments may be included when they provide a useful before/after path and the current production state can be verified.

### Target case set

Aim for approximately 3-5 implementation attempts with enough detail to reconstruct what happened.

The ideal set includes:

- at least two systems credibly used in routine production work;
- at least one stalled, abandoned, materially constrained, or still-pilot case;
- more than one company size or operating context if comparability remains useful;
- evidence from operators or technical staff, not only senior executives or vendors.

This is a target, not a quota. Fewer cases may be sufficient if the evidence is unusually deep; more shallow cases do not automatically improve the story.

### In scope

Potential workflows include:

- customer service;
- internal operations;
- billing/reconciliation;
- employee or frontline assistance tied to real systems;
- data analysis or decision support where the system is embedded in an operational process;
- other business workflows where production status can be defined and verified.

### Exclusions

Do not treat the following as production evidence by themselves:

- an employee having access to ChatGPT, Gemini, Copilot, or another general tool;
- a workshop or training program;
- an executive announcement;
- a prototype demo;
- a vendor proof of concept;
- a product procurement announcement;
- a claimed productivity benefit with no traceable baseline or method.

The story will not attempt to establish a national AI adoption rate, economy-wide productivity effect, or sector-wide employment effect.

## Working definitions

### Pilot / proof of concept

A bounded experiment intended to test technical or business feasibility but not yet relied on as a routine operational system.

### Production

For this story, a system should normally meet most of the following before being described as production:

- used in routine or recurring real work;
- connected to the actual operating workflow or systems it needs;
- has identifiable ownership and support responsibility;
- has controls for errors, exceptions, access, and human intervention where relevant;
- is monitored or evaluated against defined operational criteria;
- has moved beyond a temporary demo/test population.

The final definition must be tested against practitioner and technical interviews before publication.

### AI system

A deployed software workflow in which AI materially performs, assists, classifies, generates, predicts, retrieves, or decides something within the operating process. The story should identify the relevant product/model/system when material rather than use `AI` as an undifferentiated label.

## Required reporting threshold

C001 should not move to drafting until reporting establishes a credible path to:

- multiple real implementations or attempts;
- evidence below vendor-marketing and executive-summary level;
- at least one non-success-only case where possible;
- operational detail on process, data, human review, governance, cost, or measurement;
- independent technical/domain expertise capable of challenging subject claims.

Source reconnaissance can establish that these routes plausibly exist. It does not itself satisfy the threshold.

If direct reporting cannot meet this threshold, record `REFRAME`, `CONTINUE`, or `KILL`.

## Source map

The working source inventory is in `sources.md`. The extended reconnaissance and outreach map are in `notes.md`.

Priority source classes:

1. operating companies and staff directly involved in deployments;
2. internal/public process and governance documentation where available;
3. DOST AI implementation programs and participating MSMEs/technical teams;
4. company filings and official reports for declared use cases;
5. National Privacy Commission requirements where personal data is processed;
6. independent engineers, security/privacy specialists, and implementation practitioners;
7. industry surveys for landscape and lead generation, with methodology caveats;
8. vendor case studies only as leads and reported claims requiring independent verification.

## Current case leads after extended reconnaissance

### Priority production leads

- **PLDT/Smart - Store Genie:** partner materials describe a live frontline system integrated with existing operating systems. High-value case if PLDT/Smart can provide operator access and metric methodology.
- **UnionBank - onboarding / underwriting / fraud AI:** the bank's 2025 report describes these as embedded uses while separately describing RIA voice AI as still forthcoming, giving a useful within-company stage distinction.
- **Globe - AIRA / QualiAI:** named operational/internal use cases remain plausible production leads, but current public evidence is still thin below the company-report layer.

### Priority non-success-only / pre-scaling lead

- **First Gen - AI Proof of Concept program:** the 2025 integrated report explicitly describes POC evaluation for technical viability, operational alignment, and strategic fit before broader deployment, with review/approval and process-owner accountability. Direct reporting must establish the individual POCs and their outcomes before this can function as a real comparison case.

### Smaller-company route

- **DOST AIgnite:** current government programs provide a credible gatekeeper route to participating MSMEs and technical teams. Public program participation alone is not a case.

### Context / secondary leads

- **PLDT Procure-to-Pay:** AWS quotes PLDT describing current agentic workflow activity and claimed operating improvement, but scope/method remain unclear.
- **Ayala group:** official 2026 meeting minutes say AI capabilities exist across operating units while realization of results remains a work in progress. Useful challenge context, not a case by itself.

## Initial interview targets

### Case operators

Prioritize requests for the people who own or operate the workflow rather than only communications or senior executives:

- PLDT/Smart frontline, IT, transformation, or process owners responsible for Store Genie and related systems;
- UnionBank technology/transformation and business-process owners responsible for onboarding, underwriting, fraud systems, and RIA;
- Globe AI/operations teams responsible for AIRA, QualiAI, or another reconstructable production workflow;
- First Gen process owners/IT teams responsible for the 2025 AI POC program;
- DOST AIgnite participating MSMEs and paired technical teams.

Vendor-produced cases involving Cebu Pacific, RCBC, Tonik, or other Philippine companies remain backup leads and may not be treated as independent proof.

### Independent challenge sources

Seek one or more of:

- AI systems engineer or architect with production deployment experience;
- data engineer / integration specialist;
- data protection officer or privacy lawyer familiar with AI deployment;
- security practitioner;
- operations leader able to assess process redesign and measurement;
- researcher able to challenge the distinction between broad AI use and institutionalized production capability.

Dominic Vincent Ligot is a current challenge-source candidate on enterprise capability, data/integration, governance, and talent. Because he contributed to the Swarm report, he is not independent for resolving that report's disputed 65% statistic.

## Swarm survey verification issue

The public Swarm page currently contains an unresolved inconsistency:

- narrative text says 65% of organizations remain at proof-of-concept;
- Exhibit 2 on the same page shows Proof of Concept at 40% for `What is the nature of your AI project(s)?`.

The page says the full methodology/data appendix contains question-by-question results and publicly lists `pia@swarm.work` for research inquiries.

Until the denominator/question logic is reconciled, do not use `65% remain stuck at POC` as a Portfilo factual anchor.

## Core reporting questions

For each implementation attempt, establish as many of the following as the evidence permits:

1. What exact workflow existed before the AI system?
2. What problem was the pilot meant to solve?
3. What counted as success during the pilot?
4. Who owned the project technically and operationally?
5. What data and system access were required?
6. What integration work was necessary?
7. What privacy, security, governance, and approval controls were added?
8. Where does human review or escalation remain?
9. What changed between the pilot and production architecture or process?
10. What did implementation cost in money, engineering time, employee time, and maintenance?
11. What operational metrics are monitored now?
12. What errors, exceptions, or failure modes appeared after real use began?
13. What nearly stopped the deployment?
14. What actually stopped stalled/abandoned cases?
15. What would the organization do differently if starting again?

## Known risks

- selection bias toward companies willing to publicize successful AI projects;
- vendor metrics presented without reproducible baselines;
- inconsistent definitions of `pilot`, `production`, `automation`, and `agentic AI`;
- inability to access internal cost, error, or workflow data;
- comparing very different workflows as if they were equivalent;
- conventional ML, generative AI, and agentic systems being bundled under one `AI` label;
- mistaking a deliberate POC/governance stage for project failure;
- survivorship bias if failed projects cannot be sourced;
- confidentiality and privacy constraints around internal processes and customer data;
- a large-enterprise-heavy source set that cannot support claims about MSMEs.

These risks must be actively tested in `contradictions.md` and the evidence ledger.

## Reconnaissance decision

**Source reconnaissance:** `PASS / OUTREACH READY`  
**Drafting threshold:** `NOT YET MET`

Reason: the extended reconnaissance now identifies multiple plausible production cases, a credible still-POC/pre-scaling comparison, an MSME gatekeeper route, independent challenge-source candidates, and public organizational contact routes. The main unresolved viability test has shifted from finding cases to obtaining direct operator/technical access and comparable operating evidence.

## Current research outcome

`CONTINUE`

Do not draft the story yet.

## Exact next task

Prepare and obtain approval for source outreach. If approved, begin outreach in parallel to:

1. Swarm for the 65% vs 40% methodology clarification;
2. PLDT/Smart for Store Genie operator access;
3. UnionBank for production/forthcoming AI workflow access;
4. First Gen for its POC program and project outcomes;
5. DOST Caraga for AIgnite MSME/technical-team introductions;
6. at least one independent challenge source.

After responses begin, reassess whether C001 meets the reporting threshold, needs a narrower reframe, or should be stopped.
