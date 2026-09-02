# C017 Implementation-Basis Audit - Zero-Fee Small-Merchant Payments

_Last updated: 2026-09-03_

## Purpose

This file records the second C017 public-document pass. The goal was to locate the authoritative implementation basis for the phrase used in BSP Memorandum No. M-2026-025:

> `implementation of zero fees for small merchant payments`

The audit distinguishes what the final 2026 rules actually say from proposal-stage language, public summaries, current QR Ph operating information, and provider pricing.

This is internal research, not a draft article.

## Research outcome

**Public-document search:** SUBSTANTIALLY EXHAUSTED FOR CURRENTLY INDEXED BSP/PPMI MATERIAL  
**Original C017 question:** NOT READY TO DRAFT  
**Reframed C017 question:** CONTINUE  
**Decisive remaining gap:** narrow BSP/PPMI clarification or a presently non-public/non-indexed implementation instrument

The second pass did not locate a public BSP circular, memorandum, PPMI rulebook, ACH rule, or participant document that reproduces the 2024 proposed micro-merchant fee waiver as a final operative 2026 rule.

That absence is not proof that no industry arrangement exists. It means Portfilo should not state that Circular 1238 itself created or contains such a waiver.

## What the primary record establishes

### 1. Circular 1238 permits merchant fees

Final BSP Circular No. 1238, signed 17 June 2026, states that Operators of Payment Systems with Merchant Acquisition Licenses may charge merchant fees for merchant payment acceptance activities.

The fees must be reasonable, transparent, market-based, proportionate to service cost, and supported by cost analysis.

The final circular does not contain the `micro-merchant` definition or explicit micro-merchant fee-waiver clause that appeared in the 2024 exposure draft.

Source:
https://www.bsp.gov.ph/Regulations/Issuances/2026/1238.pdf

### 2. M-2026-025 nevertheless says zero fees for small merchant payments have been implemented

BSP Memorandum No. M-2026-025, also dated 17 June 2026, says the lifting of the InstaPay/PESONet fee-increase moratorium is grounded in the `implementation of zero fees for small merchant payments`.

The memorandum does not define:

- `small merchant`;
- an eligibility threshold;
- the payment rail;
- the fee layer that is zero;
- the party whose fee is waived;
- the implementation instrument.

Source:
https://www.bsp.gov.ph/Regulations/Issuances/2026/M-2026-025.pdf

### 3. The earlier 2023 moratorium used broader `small e-payments` language

BSP Memorandum No. M-2023-037 said the fee moratorium would be lifted, subject to BSP review, once the payments industry operationalized zero fees for `small e-payments`.

That memorandum did not limit the phrase to merchant MDRs.

Source:
https://www.bsp.gov.ph/Regulations/Issuances/2023/M-2023-037.pdf

### 4. The 2024 pricing guidance treated zero-fee microenterprise payments as an inclusive-pricing practice

BSP Memorandum No. M-2024-015 states that P2M or biller EFTs may carry merchant fees under agreed clearing rules.

It separately describes inclusive pricing practices such as zero fees for small P2P payments or P2M payments for microenterprises. In that memorandum, the footnote uses the RA 9501 microenterprise definition based on total assets not exceeding PHP3 million.

This guidance also recognizes that payment-service costs may be recovered through related products or subsidized from other revenue.

Source:
https://www.bsp.gov.ph/Regulations/Issuances/2024/M-2024-015.pdf

### 5. The 2024 exposure draft proposed a much more explicit waiver

The exposure draft would have:

- defined a `micro-merchant`;
- required microenterprise status;
- added a monthly aggregate gross-receipts ceiling of PHP250,000;
- waived merchant fees for classified micro-merchants;
- set a planned compliance date.

That explicit language does not appear in signed Circular 1238.

Source:
https://www.bsp.gov.ph/Regulations/Issuances%20of%20Policy%20Exposure%20Drafts/Exposure_Draft_Circular_on_the_Policy_on_Zero_Fees.pdf

## What current QR Ph materials establish

### 6. PPMI says QR Ph P2M is free to the consumer

PPMI's current InstaPay/QR Ph page states that consumers do not pay a fee when making QR Ph P2M payments. It explicitly contrasts QR Ph P2M with InstaPay QR P2P, where the sending institution may charge the user.

The page does not say that every merchant receives QR Ph P2M payments free of merchant charges.

Source:
https://www.philpayments.org.ph/instapay

### 7. BSP's July 2026 launch material says merchants shoulder QR Ph transaction fees

At the 29 July 2026 BSP/PPMI payment-services launch, BSP stated that QR Ph refers to P2M payments `where merchants shoulder the transaction fees`, while InstaPay QR refers to P2P transfers that may be subject to fees depending on the account used.

That is later than Circular 1238 and directly relevant to the interpretation of merchant-side pricing.

Source:
https://pia.gov.ph/press-release/bsp-ppmi-launch-new-digital-payment-services/

### 8. The July 2026 QR Ph rebranding FAQ did not change operating rules

The BSP FAQ says the 2026 rebranding did not change QR Ph technical standards, operating rules, infrastructure, interoperability, or merchant payment functionality.

It also says the purpose is partly to reduce cases in which consumers mistakenly use P2P QR codes for merchant payments and incur unnecessary transfer fees.

Source:
https://www.bsp.gov.ph/Media_And_Research/Primers%20Faqs/FAQs-QR-Ph-Rebranding.pdf

### 9. BSP's original QR Ph P2M FAQ already distinguished consumer-side free use from merchant economics

The BSP's QR Ph P2M FAQ states that customers using QR Ph P2M to purchase goods and services do not pay a fee for using the facility.

Its merchant-benefit discussion focuses on low-cost acceptance and avoidance of expensive point-of-sale equipment, rather than stating that all merchant MDRs are zero.

Source:
https://www.bsp.gov.ph/Media_and_Research/Primers%20Faqs/QR_Ph_P2M_FAQs.pdf

## Provider-pricing cross-check

Current public pricing continues to show merchant-side charges for QR/QR Ph products, including examples already recorded in `sources.md` from GCash, Maya, PayMongo, and UnionBank.

This does not prove that no qualifying subset receives special treatment. It does reinforce that `QR Ph is free` cannot be translated automatically into `the merchant pays no MDR`.

Historical provider programs also show that micro-merchant MDR waivers can be implemented voluntarily and with provider-specific thresholds. For example, GCash publicly waived QR Ph MDRs for certain micro-merchants in 2023 for a limited period. Such a program is evidence that a provider can create a targeted waiver, not evidence of the final 2026 regulatory rule.

## Existing-coverage audit

Several June/July 2026 news summaries state that Circular 1238 exempts small merchants from digital-payment charges.

That interpretation is not reproduced in the merchant-pricing text of Circular 1238 reviewed by Portfilo.

Other later material is more cautious:

- BSP's late-July clarification emphasized fair/cost-based pricing rather than a blanket zero-fee transfer mandate;
- PayMongo's August 2026 regulatory tracker notes that the small-merchant zero-fee condition appears to have been treated by BSP as already implemented before the moratorium was lifted, rather than as a new obligation created by Circular 1238's text.

The mismatch between the signed circular, the memorandum, and public summaries is therefore a genuine information-quality issue rather than a trivial wording difference.

## Best current interpretation

The public evidence supports the following narrow conclusions:

1. **Do not say Circular 1238 itself contains a PHP250,000 micro-merchant fee waiver.** It does not in the reviewed signed text.
2. **Do not say QR Ph is universally free to merchants.** Current BSP/PPMI materials distinguish free consumer use from merchant-side transaction fees.
3. **Do say M-2026-025 explicitly refers to implementation of zero fees for small merchant payments.** That statement is authoritative but underdefined in the memorandum.
4. **Do not infer which fee is waived or which merchants qualify without the implementation basis.** The older proposal cannot be silently promoted into the final rule.
5. **A separate industry/ACH arrangement may exist.** No indexed public rule found in this pass was sufficient to establish it.

## Competing explanations still open

At least three interpretations remain possible and must not be collapsed into one without authoritative clarification:

### A. Consumer-side zero fee for merchant payments

`Small merchant payments` could refer to low-value P2M payments in which the payer pays no transfer fee, consistent with current QR Ph materials saying P2M payments are free to consumers.

Problem: this does not fully explain the earlier microenterprise-specific policy language.

### B. Merchant-side microenterprise waiver implemented outside Circular 1238

PPMI, ACH participants, or another BSP/industry instrument could implement a targeted merchant-fee waiver that is not reproduced in Circular 1238 or public rate cards.

Problem: the operative document was not found in the current public record.

### C. Policy shorthand carried forward from the earlier zero-fee design

M-2026-025 could be summarizing a broader industry outcome using language inherited from the 2023-2024 policy process even though the final circular uses a different legal mechanism.

Problem: this cannot be asserted without BSP clarification.

## Story decision after second pass

### Reframed C017 remains `CONTINUE`

The reframed question is still useful:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

The documentary contradiction is now well established. What remains unresolved is the one point that determines the answer: the intended and operative meaning of the phrase in M-2026-025.

### Why not `PUBLISH` yet

Publishing now would require Portfilo to choose among the competing interpretations above or make a negative claim that no separate implementation exists. The public evidence does not justify either move.

### Why not `KILL`

The discrepancy itself is meaningful and several public summaries appear to overstate what Circular 1238 contains. A narrow official clarification could convert this packet into a strong, useful explainer quickly.

## Access judgment

A broad interview campaign is unnecessary.

The remaining source need is narrow and institutional:

- BSP Payments Policy and Development Department: `PLAUSIBLE`;
- PPMI: `PLAUSIBLE`.

A written response identifying the operative rule/arrangement and fee layer would be sufficient. Provider interviews are not required unless the story later returns to provider-specific economic incidence.

No outreach has been sent as part of this checkpoint.

## Clarification questions if outreach is approved

1. In M-2026-025, what exactly does `zero fees for small merchant payments` mean?
2. Does it refer to fees paid by the consumer/payer, merchant/acquirer fees, or another fee layer?
3. What final definition determines which merchants or transactions qualify?
4. Is the PHP250,000 monthly gross-receipts threshold from the 2024 exposure draft operative anywhere in the final framework?
5. Which BSP issuance, PPMI rule, ACH rule, or participant arrangement operationalizes the zero-fee condition?
6. How should the condition be reconciled with Circular 1238 Section 503.7(c), which permits cost-based merchant fees?
7. How should it be reconciled with current BSP/PPMI materials describing QR Ph P2M as free to consumers while merchants shoulder transaction fees?

## Operational implication

C017 should remain active, but Portfilo should not let this narrow clarification block the launch publishing schedule.

While a clarification request is pending, the next substantial public-data assignment can proceed in parallel.