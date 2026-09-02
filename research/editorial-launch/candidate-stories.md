# Portfilo Editorial Launch Research - Candidate Stories

_Last updated: 2026-09-02_

## Purpose

This file is the durable inventory of story questions produced by Stage 5 of Editorial Launch Research.

It is not a list of approved assignments and it is not a public editorial calendar.

The candidate pool is derived from:

- `brief.md`;
- `audience-signals.md`;
- `competitor-map.md`;
- `information-gaps.md`;
- `docs/CONTENT_PLANNING.md`.

The deeper research files explain why these questions exist and contain the current source trail. This file gives Portfilo a compact view of what may be worth investigating.

No factual claim in this planning inventory becomes publishable merely because it appears here. Assigned stories must still receive their own research packet under `research/stories/`.

## Stable IDs

Every candidate receives a permanent ID in the form `C###`.

Do not reuse an ID after a candidate is killed, reframed, or archived.

If a substantially different question emerges from a reframe, create a new candidate ID and link the two records.

## Record state

`OPEN`
: Still part of the planning inventory. It may be awaiting evaluation, passed but not assigned, or undergoing reframe work.

`ACTIVE`
: Selected and assigned to an individual story research packet.

`ARCHIVED`
: Retained for editorial history but no longer part of the active candidate pool. Killed ideas should normally be archived rather than deleted. Held ideas may also be archived until a stated revisit trigger occurs.

## Gate decision

Before Stage 6 evaluation, use `PENDING`.

After evaluation, use the canonical outcomes from `docs/CONTENT_PLANNING.md`:

- `PASS`;
- `REFRAME`;
- `HOLD`;
- `KILL`.

Priority remains `PENDING` until a candidate passes the editorial gate. Passed candidates then receive `HIGH`, `MEDIUM`, or `LOW`.

## Current inventory

| ID | Candidate question | Primary topic | Reader need | State | Decision | Priority |
|---|---|---|---|---|---|---|
| C001 | What separates an AI pilot from a production system inside a Philippine company? | AI | Understand | OPEN | PENDING | PENDING |
| C002 | What does it actually cost to put one AI customer-support workflow into production? | AI | Decide | OPEN | PENDING | PENDING |
| C003 | How are Philippine companies deciding whether a production AI workflow is actually paying off? | Business | Decide | OPEN | PENDING | PENDING |
| C004 | How much human review remains after a company automates a workflow with generative AI? | AI | Understand | OPEN | PENDING | PENDING |
| C005 | What data work has to happen before a Philippine company can put an AI workflow into production? | Building | Understand | OPEN | PENDING | PENDING |
| C006 | Why do Philippine AI pilots get abandoned before production? | AI | Interpret | OPEN | PENDING | PENDING |
| C007 | When should a small company buy an AI product, hire an integrator, or build the workflow itself? | Building | Decide | OPEN | PENDING | PENDING |
| C008 | What security and governance controls do companies add before moving AI from experiment to production? | AI | Understand | OPEN | PENDING | PENDING |
| C009 | What does "higher-value work" actually mean inside Philippine IT-BPM? | Business | Understand | OPEN | PENDING | PENDING |
| C010 | Are the IT-BPM roles described as higher-value actually paid more? | Business | Interpret | OPEN | PENDING | PENDING |
| C011 | How are AI-related skill requirements changing Philippine IT-BPM job postings? | Business | Interpret | OPEN | PENDING | PENDING |
| C012 | Do IT-BPM AI reskilling programs lead to actual role transitions? | Business | Interpret | OPEN | PENDING | PENDING |
| C013 | Are Philippine BPO contracts actually moving away from per-seat or per-hour pricing because of AI? | Business | Interpret | OPEN | PENDING | PENDING |
| C014 | How is AI changing the staffing mix inside Philippine customer-service operations? | Business | Understand | OPEN | PENDING | PENDING |
| C015 | Are the new higher-skill IT-BPM roles as geographically accessible as the jobs they are supposed to replace or augment? | Business | Interpret | OPEN | PENDING | PENDING |
| C016 | What does one real transition from routine BPO work into an AI-enabled higher-skill role require? | Building | Decide | OPEN | PENDING | PENDING |
| C017 | Who ultimately pays when qualifying small-merchant digital payments become free to the merchant? | Business | Understand | OPEN | PENDING | PENDING |
| C018 | What does Direct Debit PH actually change for a business that collects recurring payments? | Technology | Decide | OPEN | PENDING | PENDING |
| C019 | How do the new digital-payment fee rules change the incentives of banks, e-wallets, and payment providers? | Business | Interpret | OPEN | PENDING | PENDING |
| C020 | For a small recurring-revenue business, how do Direct Debit PH, cards, and transfer-based collection compare in cost and operations? | Business | Decide | OPEN | PENDING | PENDING |
| C021 | How much Philippine data-center capacity is operating, under construction, committed, and merely announced? | Technology | Update | OPEN | PENDING | PENDING |
| C022 | How much power is actually secured for the Philippine data-center projects currently in the pipeline? | Business | Understand | OPEN | PENDING | PENDING |
| C023 | What makes a Philippine data center genuinely AI-ready rather than simply newly built? | Technology | Understand | OPEN | PENDING | PENDING |
| C024 | How much announced Philippine data-center capacity is backed by identifiable customer demand? | Business | Interpret | OPEN | PENDING | PENDING |
| C025 | What happens to Philippine startups in the 18-24 months after they announce a seed or Series A round? | Startups | Interpret | OPEN | PENDING | PENDING |
| C026 | What financing structures are Philippine startups using when traditional equity funding is harder to obtain? | Startups | Understand | OPEN | PENDING | PENDING |
| C027 | After a Philippine startup raises capital, what measurable operating changes follow? | Startups | Interpret | OPEN | PENDING | PENDING |
| C028 | What does capital efficiency actually look like among Philippine startups after the recent funding reset? | Startups | Decide | OPEN | PENDING | PENDING |

---

# Candidate records

## AI implementation and operating economics

### C001 - What separates an AI pilot from a production system inside a Philippine company?

**Primary topic:** AI  
**Likely content type:** Reported / Explained  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Philippine organizations are already experimenting with AI, but experimentation is not the same as reliable deployment. Readers need to understand the organizational and technical steps between the two.

**Why now / information gap:** Current coverage establishes shallow production deployment but usually stops before reconstructing how successful deployments crossed the pilot-to-production boundary.

**Possible Portfilo contribution:** Compare a small set of successful, stalled, and abandoned deployments and identify what materially differed.

**Evidence path:** Company operators, implementation teams, process maps, governance material, before/after workflow evidence, DOST AI implementation programs, and independent technical interviews.

**Scope / likely difficulty:** Medium-high. Access to failed projects may be harder than access to success cases.

**Related candidates:** C005, C006, C008.  
**Research references:** `information-gaps.md` Gap 1; `audience-signals.md` AI implementation signals.

### C002 - What does it actually cost to put one AI customer-support workflow into production?

**Primary topic:** AI  
**Likely content type:** Guide / Analysis  
**Primary reader need:** Decide  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Subscription or API pricing alone does not tell a company what an operational AI workflow costs.

**Why now / information gap:** Adoption reporting discusses barriers and ROI, but all-in implementation economics remain poorly documented in public Philippine coverage.

**Possible Portfilo contribution:** Build an auditable cost model from one real workflow, including integration, data work, human review, training, monitoring, security, rework, and maintenance.

**Evidence path:** Consenting company case, public vendor/API pricing, engineering time, workflow metrics, invoices where available, and transparent sensitivity analysis.

**Scope / likely difficulty:** High if private cost data cannot be obtained. Could be reframed as a transparent model rather than a claimed case-study result.

**Related candidates:** C003, C004, C007.  
**Research references:** `information-gaps.md` Gap 2.

### C003 - How are Philippine companies deciding whether a production AI workflow is actually paying off?

**Primary topic:** Business  
**Likely content type:** Analysis / Reported  
**Primary reader need:** Decide  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** A deployment can work technically while failing economically.

**Why now / information gap:** Current adoption discussions frequently invoke ROI without showing which metrics firms use, what baseline they compare against, or how long they allow before deciding to keep or stop a system.

**Possible Portfilo contribution:** Compare the metrics used in real deployments, including processing time, labor hours, error rates, conversion, revenue, service quality, and rework.

**Evidence path:** Finance/operations leaders, before/after dashboards where available, workflow owners, implementation teams, and explicit calculations.

**Scope / likely difficulty:** High because firms may disclose benefits more readily than failed ROI tests.

**Related candidates:** C002, C006.  
**Research references:** `information-gaps.md` Gaps 1-2.

### C004 - How much human review remains after a company automates a workflow with generative AI?

**Primary topic:** AI  
**Likely content type:** Reported / Explained  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Automation claims can hide substantial review, exception handling, and correction work.

**Why now / information gap:** Existing adoption coverage rarely quantifies the human work that remains after a workflow is described as AI-enabled or automated.

**Possible Portfilo contribution:** Reconstruct one or more workflows and measure where humans still review, approve, correct, escalate, or redo output.

**Evidence path:** Process documentation, worker/operator interviews, task samples, quality-control rules, error/rework logs where available.

**Scope / likely difficulty:** Medium-high. Requires access below executive-summary level.

**Related candidates:** C001, C002, C014.  
**Research references:** `information-gaps.md` Gap 1.

### C005 - What data work has to happen before a Philippine company can put an AI workflow into production?

**Primary topic:** Building  
**Likely content type:** Explained / Guide  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** AI deployment often depends on data quality, access, integration, permissions, and process ownership rather than model choice alone.

**Why now / information gap:** Data readiness appears repeatedly as a barrier, but public coverage usually treats it as a label rather than a concrete operating problem.

**Possible Portfilo contribution:** Show the actual preparation required in several narrow use cases and distinguish reusable requirements from company-specific ones.

**Evidence path:** Data/engineering teams, integrators, internal process documentation, schemas or system descriptions that can be shared safely, and implementation retrospectives.

**Scope / likely difficulty:** Medium. Technical detail needs to remain useful to non-specialist readers.

**Related candidates:** C001, C008.  
**Research references:** `information-gaps.md` Gap 1.

### C006 - Why do Philippine AI pilots get abandoned before production?

**Primary topic:** AI  
**Likely content type:** Reported / Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Failed or stalled deployments may teach readers more than vendor success stories.

**Why now / information gap:** The current evidence shows many organizations remain in proof-of-concept stages, but public reporting rarely documents why specific pilots stop.

**Possible Portfilo contribution:** Build a failure taxonomy grounded in actual projects rather than generic implementation advice.

**Evidence path:** Former project owners, integrators, internal retrospectives, budget decisions, security reviews, abandoned prototypes, and anonymized cases where necessary.

**Scope / likely difficulty:** High. Sources may be reluctant to discuss internal failure.

**Related candidates:** C001, C003.  
**Research references:** `information-gaps.md` Gap 1.

### C007 - When should a small company buy an AI product, hire an integrator, or build the workflow itself?

**Primary topic:** Building  
**Likely content type:** Guide / Analysis  
**Primary reader need:** Decide  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Implementation method changes cost, control, technical burden, maintenance, data exposure, and lock-in.

**Why now / information gap:** Current coverage promotes AI adoption but rarely compares the operating tradeoffs among packaged software, integration services, and internal builds for a concrete business workflow.

**Possible Portfilo contribution:** Compare three implementation paths using one defined use case and transparent assumptions.

**Evidence path:** Public pricing/documentation, integrators, SME operators, developers, security considerations, and total-cost calculations.

**Scope / likely difficulty:** Medium. Must avoid turning into product marketing or unsupported recommendation.

**Related candidates:** C002, C005, C008.  
**Research references:** `information-gaps.md` Gaps 1-2.

### C008 - What security and governance controls do companies add before moving AI from experiment to production?

**Primary topic:** AI  
**Likely content type:** Explained / Reported  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Privacy, security, approvals, access controls, and accountability can determine whether an experiment can become an operational system.

**Why now / information gap:** Governance is widely named as a barrier, but the actual controls introduced before production are less visible in general coverage.

**Possible Portfilo contribution:** Document concrete controls across several deployments and explain what risk each control addresses.

**Evidence path:** Company policies, security teams, DPOs, technical teams, vendor documentation, relevant regulation, and independent security experts.

**Scope / likely difficulty:** Medium-high because internal controls can be sensitive.

**Related candidates:** C001, C005.  
**Research references:** `information-gaps.md` Gap 1.

---

## IT-BPM, jobs, and business-model transition

### C009 - What does "higher-value work" actually mean inside Philippine IT-BPM?

**Primary topic:** Business  
**Likely content type:** Explained / Reported  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** The phrase is central to the industry's strategy but remains abstract for workers, students, and readers evaluating the sector's transition.

**Why now / information gap:** Industry and policy sources repeatedly describe a move toward higher-value work without consistently defining the actual jobs, tasks, skills, and compensation behind the phrase.

**Possible Portfilo contribution:** Build a concrete role map from job postings, employers, recruiters, workers, and compensation evidence.

**Evidence path:** Career pages, job boards, employers, recruiters, IBPAP/TESDA/DICT material, workers, and salary evidence with methodology caveats.

**Scope / likely difficulty:** Medium. Requires clear inclusion criteria because job titles vary widely.

**Related candidates:** C010, C011, C015, C016.  
**Research references:** `information-gaps.md` Gap 3.

### C010 - Are the IT-BPM roles described as higher-value actually paid more?

**Primary topic:** Business  
**Likely content type:** Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** A shift toward more complex work matters differently if it does or does not translate into better compensation.

**Why now / information gap:** Public strategy language emphasizes value and skills, but compensation outcomes are not normally quantified alongside those claims.

**Possible Portfilo contribution:** Build a transparent advertised-compensation sample across defined role groups and supplement it with recruiter and worker evidence.

**Evidence path:** Job listings, employer pages, recruiters, salary platforms with caveats, and worker interviews.

**Scope / likely difficulty:** Medium. Advertised compensation is not realized compensation and would need careful labeling.

**Related candidates:** C009, C011, C016.  
**Research references:** `information-gaps.md` Gap 3.

### C011 - How are AI-related skill requirements changing Philippine IT-BPM job postings?

**Primary topic:** Business  
**Likely content type:** Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Hiring requirements are a more concrete signal of changing work than broad statements about future skills.

**Why now / information gap:** The sector is actively discussing AI-enabled roles and reskilling, but a structured view of what employers are asking applicants to know is less visible.

**Possible Portfilo contribution:** Build a reproducible sample of current job postings and classify AI, data, domain, communication, and technical requirements.

**Evidence path:** Employer career pages, JobStreet/LinkedIn/Indeed samples, recruiters, and archived listings where available.

**Scope / likely difficulty:** Medium. Sampling and representativeness must be explicit.

**Related candidates:** C009, C010, C012.  
**Research references:** `information-gaps.md` Gap 3.

### C012 - Do IT-BPM AI reskilling programs lead to actual role transitions?

**Primary topic:** Business  
**Likely content type:** Reported / Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Training counts do not establish labor-market outcomes.

**Why now / information gap:** Government and industry sources document substantial reskilling activity, but completion, placement, compensation, retention, and actual skill use are much more important outcome measures.

**Possible Portfilo contribution:** Follow one accessible cohort or obtain program-level outcome data rather than inventorying training programs.

**Evidence path:** TESDA/DICT/IBPAP or provider data, employer records, participant interviews, and program methodology.

**Scope / likely difficulty:** High. Keep only if outcome data or an accessible cohort can be found.

**Related candidates:** C011, C016.  
**Research references:** `information-gaps.md` Gap 4.

### C013 - Are Philippine BPO contracts actually moving away from per-seat or per-hour pricing because of AI?

**Primary topic:** Business  
**Likely content type:** Reported / Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** A real change in contract economics would affect incentives, staffing, productivity investment, and how outsourcing firms capture value from automation.

**Why now / information gap:** Outcome-based pricing is being promoted by industry participants, but current public evidence appears more claim-driven than independently established at market scale.

**Possible Portfilo contribution:** Test the claim against buyers, providers, procurement advisers, contract examples, and industry data.

**Evidence path:** Outsourcing buyers, BPO providers, procurement/legal advisers, anonymized contract structures, RFPs, investor material, and interviews.

**Scope / likely difficulty:** High because commercial contracts are private.

**Related candidates:** C003, C014.  
**Research references:** `information-gaps.md` Gap 5 and `competitor-map.md`.

### C014 - How is AI changing the staffing mix inside Philippine customer-service operations?

**Primary topic:** Business  
**Likely content type:** Reported  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Aggregate job counts cannot show whether teams are adding reviewers, automation specialists, escalation agents, analysts, or fewer entry-level seats.

**Why now / information gap:** Existing reporting establishes worker exposure and AI-assisted work, but team-level staffing changes across actual operations remain difficult to see.

**Possible Portfilo contribution:** Reconstruct the before/after staffing design of a small number of customer-service operations.

**Evidence path:** Operations leaders, workers, job postings, organization charts where available, hiring data, and workflow documentation.

**Scope / likely difficulty:** High because companies may treat staffing ratios as commercially sensitive.

**Related candidates:** C004, C009, C013.  
**Research references:** `information-gaps.md` IT-BPM gaps; `competitor-map.md` Rest of World coverage notes.

### C015 - Are the new higher-skill IT-BPM roles as geographically accessible as the jobs they are supposed to replace or augment?

**Primary topic:** Business  
**Likely content type:** Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** A national workforce transition looks different if new roles concentrate in a few cities or require relocation and credentials unavailable to much of the existing workforce.

**Why now / information gap:** Industry strategy emphasizes upgrading work, but geographic accessibility is not usually examined alongside the skills transition.

**Possible Portfilo contribution:** Map sampled job openings by role family, city, remote/hybrid status, and required experience.

**Evidence path:** Job postings, employer locations, IBPAP regional information, PSA labor context, recruiters, and worker interviews.

**Scope / likely difficulty:** Medium. Must avoid treating job-posting geography as total employment geography.

**Related candidates:** C009, C011.  
**Research references:** `information-gaps.md` Gap 3.

### C016 - What does one real transition from routine BPO work into an AI-enabled higher-skill role require?

**Primary topic:** Building  
**Likely content type:** Profile / Reported  
**Primary reader need:** Decide  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Readers may understand a labor transition more clearly through a verified path showing time, training, prior experience, compensation, and obstacles.

**Why now / information gap:** Industry-level reskilling narratives rarely show the full path of an individual transition and independently verify what changed.

**Possible Portfilo contribution:** A deeply reported case with employer/recruiter corroboration rather than a motivational profile.

**Evidence path:** Worker records/interview, training provider, employer or recruiter verification, job descriptions, and compensation evidence where the subject is willing to share it.

**Scope / likely difficulty:** Medium-high. Avoid implying one person's path is representative of the whole workforce.

**Related candidates:** C009, C010, C012.  
**Research references:** `information-gaps.md` Gaps 3-4.

---

## Payments and operating infrastructure

### C017 - Who ultimately pays when qualifying small-merchant digital payments become free to the merchant?

**Primary topic:** Business  
**Likely content type:** Explained / Analysis  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** A zero merchant fee does not make payment processing costless.

**Why now / information gap:** BSP's new fee framework is already being explained at the rule level. The unresolved layer is fee incidence and how providers recover processing costs.

**Possible Portfilo contribution:** Trace the payment economics across merchant, sending institution, receiving institution, network, and customer using official rules and provider pricing.

**Evidence path:** BSP circulars, PPMI rules, bank/e-wallet fee schedules, payment economists, provider interviews, and worked transaction examples.

**Scope / likely difficulty:** Medium. Provider economics may require careful inference if internal cost data are unavailable.

**Related candidates:** C019.  
**Research references:** `information-gaps.md` payment-fee gap; `competitor-map.md` GMA coverage.

### C018 - What does Direct Debit PH actually change for a business that collects recurring payments?

**Primary topic:** Technology  
**Likely content type:** Guide / Explained  
**Primary reader need:** Decide  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Recurring collection affects cash flow, failed-payment handling, reconciliation, customer experience, and operating cost.

**Why now / information gap:** Direct Debit PH is new. Existing coverage explains the service at a high level, but not the end-to-end operating impact for a real merchant.

**Possible Portfilo contribution:** Follow implementation at one business or build a verified operational comparison once participating-bank/provider details are available.

**Evidence path:** BSP/PPMI documentation, participating institutions, merchant implementation, provider pricing, settlement/reconciliation workflow, and failed-payment rules.

**Scope / likely difficulty:** Medium-high because the service is new and real merchant cases may still be limited.

**Related candidates:** C020.  
**Research references:** `information-gaps.md` Direct Debit PH gap; `audience-signals.md` payment signals.

### C019 - How do the new digital-payment fee rules change the incentives of banks, e-wallets, and payment providers?

**Primary topic:** Business  
**Likely content type:** Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Pricing rules can change product design, cross-subsidies, customer acquisition, merchant strategy, and which payment rails providers promote.

**Why now / information gap:** Immediate coverage explains the rules but has less detail on strategic provider response and second-order effects.

**Possible Portfilo contribution:** Compare public fee changes, product terms, and provider incentives before and after implementation.

**Evidence path:** Official circulars, provider fee schedules, product pages, earnings/investor material where available, and industry interviews.

**Scope / likely difficulty:** Medium. Avoid asserting internal strategy without evidence.

**Related candidates:** C017, C020.  
**Research references:** `information-gaps.md` payment-fee gap.

### C020 - For a small recurring-revenue business, how do Direct Debit PH, cards, and transfer-based collection compare in cost and operations?

**Primary topic:** Business  
**Likely content type:** Guide  
**Primary reader need:** Decide  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** The best payment method depends on more than headline transaction fees.

**Why now / information gap:** The launch of Direct Debit PH creates a new comparison set for businesses collecting memberships, subscriptions, installments, insurance premiums, or other recurring payments.

**Possible Portfilo contribution:** Build a transparent comparison around fees, settlement, failed payments, reconciliation, integration, customer authorization, and operational burden.

**Evidence path:** Official service rules, bank/payment-provider pricing, merchant interviews, integration documentation, and worked examples.

**Scope / likely difficulty:** Medium. Availability and pricing may change quickly during rollout.

**Related candidates:** C018, C019.  
**Research references:** `information-gaps.md` Direct Debit PH gap.

---

## Data centers, power, and AI infrastructure

### C021 - How much Philippine data-center capacity is operating, under construction, committed, and merely announced?

**Primary topic:** Technology  
**Likely content type:** Analysis / Reported  
**Primary reader need:** Update  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Pipeline figures can make infrastructure growth appear more certain than it is.

**Why now / information gap:** Philippine data-center coverage frequently cites large future capacity numbers, but operating, construction, permitting, committed, and aspirational capacity are not interchangeable.

**Possible Portfilo contribution:** Build a project-level ledger with a clearly defined status methodology.

**Evidence path:** Company filings/releases, DOE/PEZA/LGU permitting where available, project sites, construction evidence, power agreements, operator interviews, and industry datasets.

**Scope / likely difficulty:** Medium-high. Status definitions must be explicit and independently checked.

**Related candidates:** C022, C024.  
**Research references:** `information-gaps.md` data-center pipeline gap; `competitor-map.md`.

### C022 - How much power is actually secured for the Philippine data-center projects currently in the pipeline?

**Primary topic:** Business  
**Likely content type:** Reported / Analysis  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Electricity access and interconnection can determine whether announced capacity is economically and physically feasible.

**Why now / information gap:** Power demand is central to current data-center policy, but project announcements do not always establish how much firm power capacity has been secured.

**Possible Portfilo contribution:** Connect project-level capacity claims to utility/DOE/grid evidence and identify where power is secured, planned, or unresolved.

**Evidence path:** DOE/ERC/NGCP/utility material, connection agreements where public, company disclosures, energy experts, and project interviews.

**Scope / likely difficulty:** High. Some contracts and grid details may not be public.

**Related candidates:** C021, C024.  
**Research references:** `information-gaps.md` data-center infrastructure gaps.

### C023 - What makes a Philippine data center genuinely AI-ready rather than simply newly built?

**Primary topic:** Technology  
**Likely content type:** Explained / Guide  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** "AI-ready" is increasingly used in infrastructure marketing, but the technical requirements differ materially from conventional rack deployments.

**Why now / information gap:** Local expansion announcements frequently invoke AI demand without giving readers a consistent way to evaluate power density, cooling, networking, redundancy, and deployment readiness.

**Possible Portfilo contribution:** Define practical criteria with independent engineers and test current Philippine operator claims against them.

**Evidence path:** Operator technical specifications, engineering experts, equipment documentation, facility tours where possible, and independent standards.

**Scope / likely difficulty:** Medium. Must avoid turning vendor specifications into a ranking without enough comparable data.

**Related candidates:** C021, C022.  
**Research references:** `information-gaps.md` data-center gap; `competitor-map.md` infrastructure coverage.

### C024 - How much announced Philippine data-center capacity is backed by identifiable customer demand?

**Primary topic:** Business  
**Likely content type:** Reported / Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Large infrastructure pipelines are economically different when supported by contracted or clearly identified demand rather than projections alone.

**Why now / information gap:** Global power markets are already confronting questions about duplicate or speculative data-center demand. That does not prove the same problem exists locally, but it makes verification of Philippine demand assumptions timely.

**Possible Portfilo contribution:** Separate public customer commitments, pre-leasing, signed hyperscaler demand, operator forecasts, and purely announced capacity.

**Evidence path:** Operator disclosures, tenant announcements, filings, lender/investor material, power commitments, interviews, and project-level status evidence.

**Scope / likely difficulty:** High. Customer contracts are often confidential, so the final conclusion may need to remain bounded by what can be established publicly.

**Related candidates:** C021, C022.  
**Research references:** `information-gaps.md` data-center demand gap; `competitor-map.md` Reuters/global context.

---

## Startup capital and post-funding outcomes

### C025 - What happens to Philippine startups in the 18-24 months after they announce a seed or Series A round?

**Primary topic:** Startups  
**Likely content type:** Analysis / Reported  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Funding announcements measure financing events, not whether companies subsequently grow, survive, shrink, pivot, or raise again.

**Why now / information gap:** Deal publications document rounds well, while post-round operating outcomes are much more fragmented.

**Possible Portfilo contribution:** Build a defined historical cohort and track observable outcomes after funding rather than selecting only prominent successes.

**Evidence path:** Deal databases, company filings/pages, employee counts used cautiously, subsequent rounds, shutdown/acquisition records, interviews, and public operating metrics where available.

**Scope / likely difficulty:** High. Private-company data create survivorship and disclosure bias.

**Related candidates:** C027, C028.  
**Research references:** `information-gaps.md` startup post-funding gap; `competitor-map.md` BackScoop/DealStreetAsia notes.

### C026 - What financing structures are Philippine startups using when traditional equity funding is harder to obtain?

**Primary topic:** Startups  
**Likely content type:** Explained / Reported  
**Primary reader need:** Understand  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Founders and operators need to understand the actual financing instruments appearing in the market, not only aggregate funding totals.

**Why now / information gap:** Current reporting documents tighter funding conditions but gives less systematic visibility into debt, venture debt, SAFEs/convertibles, strategic financing, revenue-based structures, and other alternatives where they are actually being used.

**Possible Portfilo contribution:** Build a verified sample of recent Philippine startup financing structures and explain the economic tradeoffs without endorsing a product.

**Evidence path:** Deal announcements/documents, founders, investors, lenders, lawyers, SEC filings where available, and term-sheet examples that can be discussed safely.

**Scope / likely difficulty:** High because detailed financing terms are often private.

**Related candidates:** C025, C028.  
**Research references:** `information-gaps.md` startup-capital gaps; `competitor-map.md` funding coverage.

### C027 - After a Philippine startup raises capital, what measurable operating changes follow?

**Primary topic:** Startups  
**Likely content type:** Reported / Analysis  
**Primary reader need:** Interpret  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** Readers frequently see what capital was raised and what companies say they plan to do with it, but not whether those plans materialize.

**Why now / information gap:** Existing deal coverage is strong at the event level. The gap is verification of subsequent hiring, product expansion, market entry, customer growth, or other stated uses of proceeds.

**Possible Portfilo contribution:** Take a defined sample of funding rounds and compare stated use-of-funds claims with observable outcomes after a fixed period.

**Evidence path:** Original funding announcements, company updates, hiring data, product launches, market-entry records, later filings/rounds, founder interviews, and independent corroboration.

**Scope / likely difficulty:** High. Observable outcomes will vary widely and may not reveal underlying financial performance.

**Related candidates:** C025, C028.  
**Research references:** `information-gaps.md` startup post-funding gap.

### C028 - What does capital efficiency actually look like among Philippine startups after the recent funding reset?

**Primary topic:** Startups  
**Likely content type:** Analysis  
**Primary reader need:** Decide  
**State:** OPEN  
**Decision:** PENDING  
**Priority:** PENDING

**Why it matters:** "Capital efficiency" is frequently invoked when funding becomes harder, but it requires measurable inputs and outcomes to be useful.

**Why now / information gap:** Funding conditions have tightened relative to the prior boom, yet private-company revenue, burn, and runway data are difficult to observe. The question is valuable only if a defensible sample can be built.

**Possible Portfilo contribution:** Use a transparent cohort and clearly defined proxies or disclosed company data to compare what different amounts of capital produced.

**Evidence path:** Founders willing to disclose operating data, investor portfolios, public filings where available, funding history, revenue/customer metrics, employee/hiring data used cautiously, and explicit methodology.

**Scope / likely difficulty:** Very high. This candidate should be held or reframed if comparable financial data cannot be obtained.

**Related candidates:** C025, C026, C027.  
**Research references:** `information-gaps.md` startup-capital gap.

---

## Stage 5 notes

The pool intentionally contains overlapping questions. Stage 6 should eliminate duplicates, merge questions where one investigation can answer both, and kill candidates whose evidence path does not survive closer scrutiny.

The pool is not balanced to create equal representation across the five Portfilo topics. It reflects the information gaps that survived Stages 1-4.

No candidate is approved simply because it appears here.

Next stage:

**Stage 6 - Editorial Evaluation**

Apply the six gates in `docs/CONTENT_PLANNING.md`, assign decisions, and give priority bands only to candidates that pass.