# C017 Contradictions and Challenge Log - Zero-Fee Small-Merchant Payments

_Last updated: 2026-09-03_

This file records evidence and structural problems that challenge the original C017 framing. Contradictions are not problems to smooth over. They determine whether the question survives, changes, or stops.

## X01 - Final Circular 1238 vs M-2026-025 wording

BSP Memorandum M-2026-025 says the lifting of the InstaPay/PESONet fee-increase moratorium is grounded in the `implementation of zero fees for small merchant payments`.

Signed Circular 1238, issued the same date and explicitly referenced by the memorandum, says Ops-MALs may charge merchant fees under a reasonable, transparent, market-based, cost-proportionate pricing mechanism.

The circular does not reproduce an explicit small-merchant waiver provision.

**Required action:** locate the authoritative implementation instrument or official explanation that reconciles the two documents before treating `zero fees for small merchant payments` as a fully specified regulatory rule.

**Effect on story:** central. The original incidence question cannot safely assume a universal or clearly defined zero-fee merchant regime.

## X02 - Exposure draft language did not carry over visibly into the signed circular

The 2024 exposure draft defined `micro-merchant`, used a PHP250,000 monthly aggregate gross-receipts threshold, and proposed that merchant fees be waived for micro-merchants.

Those provisions are not visible in the final signed Circular 1238.

**Required action:** do not cite the exposure-draft definition or waiver as final 2026 law unless another final issuance expressly adopts it.

**Effect on story:** high. Some public summaries may be carrying forward proposal-stage mechanics that cannot be assumed from the final circular itself.

## X03 - Current provider price cards remain nonzero

GCash, Maya, and PayMongo currently publish nonzero QR/QRPh merchant rates.

A simple interpretation that all qualifying small merchants now universally receive merchant digital payments for zero merchant fee does not fit those public price cards without an additional eligibility or implementation layer.

**Required action:** determine whether qualifying merchants receive special treatment not shown in standard public pricing, whether the `zero fee` applies to a different payment fee, or whether the phrase refers to a narrower arrangement.

**Effect on story:** high. Provider rate cards make the definition question unavoidable.

## X04 - P2P fee rules are easy to conflate with merchant-payment rules

Circular 1238 separately addresses P2P EFT pricing and merchant acquisition pricing. P2P recipients must receive the full transferred amount without deduction, but that rule is not equivalent to a merchant MDR waiver.

**Required action:** maintain separate terminology for:

- P2P sender fees;
- P2P recipient deductions;
- merchant/acquirer fees or MDR;
- gateway/product fees;
- switch and clearing costs.

**Effect on story:** high. A story that collapses these fee layers would misdescribe the regulatory change.

## X05 - `Free to the merchant` would not mean zero underlying system cost

Circular 1238 itself enumerates multiple payment-system cost categories. M-2024-015 contemplates cost allocation and subsidy through related services.

**Required action:** if a fee waiver is established, distinguish the price seen by the merchant from the economic cost of operating the payment service.

**Effect on story:** preserves the original incidence question as a possible second-stage story, but only after the waived price is clearly established.

## X06 - Public rack rates may not represent qualifying small merchants

Provider websites show standard rates and sometimes custom or volume pricing. They do not necessarily expose every regulatory, promotional, negotiated, or segment-specific arrangement.

**Required action:** do not infer from a 1.0% or 1.34% public rate that every qualifying merchant pays that exact fee.

**Effect on story:** prevents the provider-rate comparison from becoming a false proof that the BSP memorandum is wrong.

## X07 - Permitted cross-subsidy is not observed incidence

BSP guidance says payment services can be supported by revenue from related/main services. That establishes a possible mechanism, not evidence that a specific provider recovers waived merchant fees through loans, deposits, subscriptions, consumer transfer fees, or another product.

**Required action:** label any incidence pathway as observed, provider-disclosed, modeled, or theoretical.

**Effect on story:** the original `who pays` question cannot be answered by economic intuition alone.

## X08 - Provider products and prices are not perfectly comparable

Merchant pricing can differ by acceptance product, payment channel, settlement arrangement, contract, VAT treatment, and custom pricing. Maya, for example, lists different merchant products with rate tables rather than one universal acquiring rate.

**Required action:** compare like with like and preserve VAT/product distinctions.

**Effect on story:** discourages a superficial provider leaderboard.

## X09 - `Small merchant` is not yet a stable working definition in the reviewed final documents

The exposure draft used `micro-merchant` and a specific threshold. M-2026-025 uses the phrase `small merchant payments`. Circular 1238 does not define that phrase in the reviewed text.

**Required action:** do not interchange `small merchant`, `micro-merchant`, `microenterprise`, and `MSME` without an authoritative definition for the relevant rule.

**Effect on story:** central to the reframe.

## X10 - Absence from Circular 1238 is not proof that no zero-fee implementation exists

A separate ACH rule, PPMI operating rule, BSP directive, bilateral/participant implementation, or other document could create the condition described in M-2026-025.

**Required action:** search for that instrument before drawing a negative legal conclusion.

**Effect on story:** Portfilo can report the documentary mismatch if useful, but must not turn `not found in this circular` into `does not exist`.

## X11 - The original headline-shaped premise risks outrunning the evidence

The phrase `who ultimately pays when qualifying small-merchant digital payments become free to the merchant` presupposes that the qualifying class and waived charge are known.

They are not yet established from the public record reviewed.

**Required action:** reframe before drafting.

## Current contradiction decision

The contradictions are strong enough to reject the original question **as currently framed**, but not the underlying subject.

Recommended research outcome: `REFRAME`.

Reframed working question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

This question should be resolved before returning to economic incidence.