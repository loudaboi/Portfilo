# C017 Working Notes - Zero-Fee Small-Merchant Payments

_Last updated: 2026-09-03_

## Purpose

Working synthesis for C017. This file records the premise audit, document comparison, calculations, source-access judgment, and story-decision rationale.

It is not the evidence ledger. Material factual claims must remain traceable to `sources.md` and `evidence.md`.

## Research checkpoint

**Original question:** Who ultimately pays when qualifying small-merchant digital payments become free to the merchant?  
**Public-evidence pass:** COMPLETE, first pass  
**Original framing:** NOT READY TO DRAFT  
**Recommended outcome:** `REFRAME`

### Reframed working question

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

The first pass found that the economic-incidence question is premature because the public regulatory record reviewed does not yet establish the exact scope and implementation of the stated zero-fee treatment.

## Premise audit

The original candidate inherited a plausible but insufficiently tested premise:

> qualifying small merchants receive covered digital payments for zero merchant fee.

The public documents complicate that premise.

| Evidence | What it establishes | What it does not establish |
|---|---|---|
| 2024 BSP exposure draft | Proposed a `micro-merchant` definition, PHP250,000 monthly gross-receipts threshold, and explicit waiver of merchant fees | Final 2026 rule |
| BSP M-2024-015 | Payment services have real costs; cost recovery and cross-subsidy through related/main products are contemplated; inclusive zero-fee pricing can support adoption | Provider-specific incidence or a mandatory 2026 micro-merchant waiver |
| BSP M-2026-025 | Says lifting the InstaPay/PESONet fee moratorium is grounded in implementation of `zero fees for small merchant payments` | Eligibility, payment rail, waived fee layer, exact implementation mechanism |
| Final Circular 1238 | Requires cost-supported payment pricing and says Ops-MAL merchant fees may be charged under reasonable, transparent, market-based, cost-proportionate pricing | An explicit micro-merchant definition or waiver matching the 2024 draft |
| Current GCash/Maya/PayMongo public pricing | Standard QR/QRPh merchant pricing remains visibly nonzero | What every qualifying small merchant actually pays under any special arrangement |

### Editorial implication

Before Portfilo asks who bears a waived cost, it needs to establish:

1. Who qualifies as a `small merchant` for this policy?
2. Which payment types or rails are covered?
3. Which fee is actually zero: MDR, transfer fee, gateway fee, or another charge?
4. Which party would otherwise pay that fee?
5. What authoritative instrument implements the condition described in M-2026-025?

Without those answers, an incidence story would risk explaining the economics of a rule that has not been defined accurately enough.

## What can already be said internally with confidence

- Electronic payments have identifiable operating costs under the BSP's own cost framework.
- The 2024 BSP exposure draft proposed a concrete micro-merchant fee waiver.
- The final 2026 Circular 1238 does not reproduce that waiver language in the reviewed text and instead expressly permits cost-based merchant fees.
- M-2026-025 nevertheless says `zero fees for small merchant payments` have been implemented.
- Standard public QR/QRPh merchant rate cards from major providers remain nonzero.
- Therefore the implementation/scope question must be resolved before economic incidence can be established.

Do not turn the final point into a legal conclusion that no zero-fee regime exists. A separate implementation instrument may exist.

## Illustrative merchant-cost arithmetic

These calculations show why the fee definition matters. They are **illustrations only**, not evidence that a merchant classified under any BSP small-merchant rule actually pays these rates.

If a merchant processed PHP250,000 in a month at a 1.0% MDR:

`PHP250,000 × 0.01 = PHP2,500`

If the same amount were charged a 1.34% MDR:

`PHP250,000 × 0.0134 = PHP3,350`

The difference is PHP850 per PHP250,000 processed.

These examples may become useful later if a story compares observed merchant pricing, but they should not be used to imply that the exposure draft's PHP250,000 threshold remains operative or that a qualifying merchant pays either public rack rate.

## Economic-incidence pathways to test later

If a genuine merchant fee waiver is established, the cost could in principle be handled through several mechanisms already consistent with the documentary framework:

- provider margin absorption;
- lower per-transaction costs from scale/efficiency;
- cross-subsidy from related banking/payment products;
- different pricing for non-exempt merchant segments;
- other explicit provider fees;
- commercial arrangements among acquiring, issuing, switching, clearing, and settlement participants.

These are hypotheses and mechanism categories, not findings about any provider.

## Access and reachability assessment

### Public-document route

`NOT REQUIRED` for interviews to establish the current documentary contradiction.

The regulatory text, proposal history, and public provider rate cards are sufficient to justify the `REFRAME` decision.

### BSP / PPMI clarification

`PLAUSIBLE` and materially useful.

A direct documentary or written clarification would improve the reframed story by identifying:

- the authoritative implementation basis;
- the definition of `small merchant`;
- the covered payment channel/rail;
- the fee that is zero;
- the date and participant scope;
- whether the condition is implemented through an ACH/PPMI rule rather than Circular 1238 itself.

This should be pursued if the reframed C017 continues, but the current story decision does not require waiting for a reply.

### Provider interviews

`NOT REQUIRED` for the current reframe decision.

They may become useful later if the question returns to observed economic incidence. Provider-specific claims about who absorbs costs should not be inferred from general BSP guidance.

## Verification-disclosure note

The future public story should not automatically say `Portfilo could not verify` merely because the implementation instrument has not yet been located.

First determine whether the missing instrument can be found. If the final story needs to describe a genuine documentary ambiguity, state the documents and the unresolved element specifically. For example, the relevant fact may be that M-2026-025 uses zero-fee language while Circular 1238's merchant-pricing section permits merchant fees, rather than centering the newsroom's search process.

## Story-decision rationale

### Why not `PUBLISH` yet

The original question assumes too much. Public evidence does not yet establish a sufficiently precise zero-fee merchant rule to support a defensible incidence conclusion.

### Why not `KILL`

The contradiction creates a stronger reader question. There is clear public value in explaining what the 2026 policy language actually means and how it relates to current merchant pricing.

### Why `REFRAME`

The antecedent question is more answerable, more document-driven, and more important to resolve first:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

If that question is resolved, the original `who pays` economics may return as a second layer or follow-on story.

## Next research requirements

1. locate any BSP circular, memorandum, FAQ, advisory, PPMI/ACH rule, participant rule, or other authoritative text that operationalizes `zero fees for small merchant payments`;
2. establish the final eligibility definition and whether the 2024 `micro-merchant` threshold survived elsewhere;
3. establish which payment rail and fee layer are covered;
4. compare the rule with current provider merchant terms without assuming standard rate cards apply to the qualifying segment;
5. decide whether the reframed question can reach `PUBLISH` from public documents or requires a narrow official clarification;
6. only after that, reassess whether the economic-incidence question is supportable.

## Current story decision

`REFRAME`

Do not draft the original C017 article.