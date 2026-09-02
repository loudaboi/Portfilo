# C001 Working Notes - AI Pilot to Production

_Last updated: 2026-09-02_

## Purpose

This file records working source-reconnaissance decisions, case viability, outreach routes, and follow-up questions for C001.

It is not an evidence ledger and does not establish publishable facts. Material claims still belong in `evidence.md` and must be traced to `sources.md`.

## Reconnaissance checkpoint - 2026-09-02

### Current assessment

**Source reconnaissance:** PASS / OUTREACH READY  
**Drafting threshold:** NOT YET MET  
**Story outcome:** CONTINUE

The first extended reconnaissance pass found enough distinct case leads and independent challenge routes to justify direct source outreach. It did not produce enough below-marketing operating evidence to begin drafting.

The main unresolved viability test is now source access rather than absence of plausible cases.

## Case viability matrix

| Case lead | Current stage signal | Why useful | Main weakness | Recon status |
|---|---|---|---|---|
| PLDT/Smart - Store Genie | Publicly described by Amdocs/AWS as live across frontline operations | Concrete workflow, named integrations, operating user/location counts, measurable vendor claims | Partner/vendor source; needs PLDT/Smart operator confirmation and metric methods | PRIORITY OUTREACH |
| UnionBank - onboarding / underwriting / fraud AI | Annual report says AI is embedded in several customer-journey functions | Company-owned disclosure distinguishes operational uses from a voice-AI system that was still described as forthcoming | Performance claims are self-reported; need system/process ownership, baselines, model details, controls | PRIORITY OUTREACH |
| Globe - AIRA / QualiAI | Integrated report names operational/internal use cases | Potential case below generic employee AI use; useful telecom comparison | Current evidence remains company-originated and thin on architecture, metrics, failure modes | PRIORITY OUTREACH |
| First Gen - AI Proof of Concept program | Integrated report explicitly places POC evaluation before broader deployment | Strong non-success-only / still-pre-scaling comparison and concrete governance gate | Public report does not identify the individual POCs, outcomes, or whether any later scaled | PRIORITY OUTREACH |
| DOST AIgnite MSMEs | Government program pairs MSMEs with technical teams around real business problems | Best current route toward smaller-company attempts and possible incomplete projects | Public program material does not name enough individual businesses or establish production | GATEKEEPER OUTREACH |
| PLDT - Procure-to-Pay agentic workflow | AWS quotes PLDT saying manual work is being reduced today while broader agentic systems are being built | Potential second PLDT workflow and useful stage-definition test | Partner marketing, unclear operating scope and measurement | SECONDARY LEAD |
| Ayala group | 2026 meeting record says capabilities exist across operating units while results remain a work in progress | Useful challenge to simplistic group-wide scaling claims and possible route to multiple operating units | Group-level statement, not a reconstructable case by itself | CONTEXT / BACKUP |

## Preferred case-set logic

Do not choose cases simply because they are the easiest companies to contact.

An ideal reported set would contain:

1. one deeply integrated large-enterprise production workflow;
2. a second production workflow in a materially different operating context;
3. one still-POC, stalled, constrained, or abandoned attempt;
4. one smaller-company/MSME attempt if evidence is deep enough;
5. independent technical challenge sources who are not vendors to the selected cases.

The final set may be smaller if access is unusually deep. More shallow cases do not improve the story.

## Public outreach routes identified

These are public organizational or author contact routes found during reconnaissance. Recording them does not authorize sending outreach.

### Swarm report clarification

- Research inquiries: `pia@swarm.work`
- Purpose: reconcile the narrative `65% remain at proof-of-concept` statement with the same page's chart showing `Proof of Concept` at 40%, including denominator, question wording, multiple-response logic, and appendix table.

### First Gen

- Integrated-report inquiries: `investorrelations@firstgen.com.ph`
- Purpose: identify the 2025 AI Proof of Concept projects, their review criteria, which advanced or stopped, who owned the business process, and whether any moved to broader deployment.

### UnionBank

- Investor Relations: `investorrelations@unionbankph.com`
- Purpose: route a reporting request to the teams responsible for AI in onboarding, underwriting, fraud detection, and the RIA contact-center project.
- Relevant executives in the 2025 report include Manish Chawla, EVP - Chief Technology and Operations Officer, and Dennis D. Omila, EVP - Chief Transformation Officer. Confirm current responsibilities before any interview request.

### DOST Caraga / AIgnite

- Technical Support Services Division: `tss@caraga.dost.gov.ph`
- Field Operations Division: `fod@caraga.dost.gov.ph`
- Office of the Regional Director: `ord@caraga.dost.gov.ph`
- Jennifer J. Dejarme is publicly listed as Chief of the Technical Support Services Division.
- Purpose: identify participating MSMEs and technical teams, their current project stages, and whether any AIgnite work moved past workshop/prototype stage or was stopped.

### DOST-ASTI

- General inquiries: `info@asti.dost.gov.ph`
- Purpose: route questions on ACABAI/AI prototype-to-pilot projects and identify teams willing to discuss stage transitions and implementation constraints.

### Independent challenge source

- Dominic Vincent Ligot, CirroLytix Research Services / Data Ethics PH
- Public corresponding-author address in his 2026 paper: `doc@ethics.ph`
- Use: challenge definitions and working hypothesis around enterprise capability, data/integration, governance, talent, and the difference between AI tool adoption and institutionalized production capability.
- Caveat: Ligot contributed to the Swarm report, so he is not independent for validating that report's disputed survey statistic.

## Swarm clarification questions

Before using either the 65% narrative figure or drawing a majority-at-POC conclusion, ask:

1. What exact survey question and denominator produce the 65% figure?
2. Why does Exhibit 2 label Proof of Concept at 40%?
3. Was the `nature of AI project(s)` question multiple-response?
4. Does 65% combine POC with vendor evaluation, early engagement, or another stage?
5. Can the question-level appendix or underlying tabulation be shared?
6. Which wording should an external publication use if describing the result accurately?

Until reconciled, the story should avoid using `65% stuck at POC` as a factual anchor.

## Core outreach questions for case operators

Initial requests should seek an operator or technical owner, not only corporate communications.

For each case, prioritize:

- exact workflow before AI;
- pilot objective and success criteria;
- dates for pilot, limited rollout, and routine production use;
- business-process owner and technical owner;
- systems/data integrated;
- architecture or product/model changes between stages;
- security/privacy/governance approval gates;
- human review and exception handling;
- measured baseline, current metric, period, denominator, and measurement owner;
- implementation and recurring cost where shareable;
- failure modes and what nearly stopped the project;
- what did stop or delay any related pilot;
- ongoing maintenance and model/process monitoring.

## Go / no-go rule after outreach

### Continue toward reporting

Continue C001 if outreach produces a credible path to:

- at least two genuinely reconstructable production attempts;
- at least one non-success-only attempt or a clearly constrained/still-pilot comparison;
- operator/technical sources below the executive or vendor layer;
- enough common dimensions to compare cases without pretending unlike workflows are equivalent;
- at least one independent challenge source.

### Reframe

Reframe if useful operating evidence exists but the cases are too heterogeneous for the broad `what separates pilot from production` comparison. Possible narrower reframes include one workflow class, one industry, or a single deeply reported case with explicit limits.

### Kill or hold

Kill or hold the flagship framing if outreach yields only promotional cases, unverifiable performance claims, or no credible non-success-side evidence.

## Next task

Prepare and obtain approval for source outreach. Do not send outreach automatically. After approval, contact the highest-value routes in parallel, beginning with Swarm clarification plus PLDT/Smart, UnionBank, First Gen, DOST Caraga, and one independent challenge source.
