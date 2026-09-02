# C017 Evidence Ledger - Zero-Fee Small-Merchant Payments

_Last updated: 2026-09-03_

This is a working claim ledger under `docs/RESEARCH_STANDARD.md`.

`VERIFIED` means the narrow claim is supported by the cited source. It does not mean a broader interpretation is established. The original C017 premise is being tested rather than assumed.

## E01

**Candidate claim:** Final BSP Circular No. 1238 permits merchant fees for merchant payment acceptance activities, subject to cost-based and transparency requirements.

**Evidence:** Section 503.7(c) says an Ops-MAL shall adopt a pricing mechanism whereby merchant fees may be charged. The mechanism must be reasonable, transparent, market-based, proportionate to the cost of the services offered, and supported by cost analysis.

**Source:** S001 - BSP Circular No. 1238  
**Tier:** A  
**Date:** 2026-06-17  
**Confidence:** HIGH  
**Caveat:** This establishes the signed circular's text. It does not by itself resolve whether a separate rule, clearing arrangement, or program creates a zero-fee treatment for a defined small-merchant segment.  
**Status:** VERIFIED

## E02

**Candidate claim:** BSP Memorandum No. M-2026-025 says the lifting of the InstaPay/PESONet fee-increase moratorium is grounded in the implementation of zero fees for small merchant payments.

**Evidence:** The memorandum uses that wording directly while linking the change to Circular 1238 and the new P2P pricing structure.

**Source:** S002 - BSP Memorandum No. M-2026-025  
**Tier:** A  
**Date:** 2026-06-17  
**Confidence:** HIGH for what the memorandum states  
**Caveat:** The memorandum does not specify the small-merchant eligibility test, payment rail, waived fee layer, or operational instrument implementing the zero-fee condition.  
**Status:** VERIFIED / QUALIFY

## E03

**Candidate claim:** The 2024 BSP exposure draft proposed an explicit micro-merchant fee waiver and a PHP250,000 monthly gross-receipts threshold.

**Evidence:** The draft defined a micro-merchant as a qualifying micro-enterprise whose monthly aggregate gross receipts do not exceed PHP250,000 and proposed that merchant fees be waived for entities classified as micro-merchants.

**Source:** S004 - 2024 BSP exposure draft  
**Tier:** A for proposal history  
**Date:** 2024  
**Confidence:** HIGH  
**Caveat:** An exposure draft is not a final binding issuance.  
**Status:** VERIFIED

## E04

**Candidate claim:** The explicit micro-merchant definition and waiver language in the 2024 exposure draft do not appear in signed Circular No. 1238.

**Evidence:** A text comparison of the exposure draft and final circular shows that the final circular instead provides that merchant fees may be charged under a reasonable, transparent, market-based, cost-proportionate pricing mechanism. The final circular's glossary does not include the draft's micro-merchant definition.

**Source:** S001 and S004  
**Tier:** A  
**Date:** 2024 proposal compared with 2026-06-17 final circular  
**Confidence:** HIGH for the documentary comparison  
**Caveat:** This does not establish that no separate BSP, PPMI, ACH, contractual, or program rule provides zero-fee treatment. It establishes only what these two documents contain.  
**Status:** VERIFIED

## E05

**Candidate claim:** BSP pricing guidance recognizes that electronic-payment services have real costs and that providers may recover or subsidize those costs through related services.

**Evidence:** Memorandum M-2024-015 describes cost allocation for payment services and states that payment services may be subsidized by revenues from main or related products and services. It also identifies inclusive pricing, including zero fees for small e-payments, as a possible adoption-supporting practice.

**Source:** S003 - BSP Memorandum No. M-2024-015  
**Tier:** A  
**Date:** 2024-05-24  
**Confidence:** HIGH  
**Caveat:** The guidance establishes permitted/recognized economic mechanisms, not which mechanism any particular provider actually uses.  
**Status:** VERIFIED

## E06

**Candidate claim:** Final Circular No. 1238 recognizes multiple nonzero cost components in providing electronic payments.

**Evidence:** Appendix 201-2 identifies payment handling, authorization, return/cancellation, payment-specific infrastructure and IT, clearing, switch, settlement, security/fraud, marketing, customer support, and overhead costs.

**Source:** S001 - BSP Circular No. 1238  
**Tier:** A  
**Date:** 2026-06-17  
**Confidence:** HIGH  
**Caveat:** The appendix defines relevant cost categories but does not disclose provider-specific cost amounts.  
**Status:** VERIFIED

## E07

**Candidate claim:** GCash currently publishes a nonzero QRPH merchant discount rate for GCash for Business.

**Evidence:** GCash's current help page lists a 1.0% VAT-inclusive MDR for QRPH and says the MDR is deducted from each successful merchant payment before settlement.

**Source:** S005 - GCash Help Center  
**Tier:** A for published provider terms  
**Date:** Current page accessed 2026-09-03  
**Confidence:** HIGH for the public rate shown  
**Caveat:** Public rack pricing does not establish the rate paid by every merchant, including any merchant covered by a special regulatory, negotiated, or promotional arrangement.  
**Status:** VERIFIED / QUALIFY

## E08

**Candidate claim:** Maya currently publishes nonzero QRPh merchant pricing.

**Evidence:** Maya Business's pricing page lists QRPh at a rate starting at 1.0% MDR across several merchant products.

**Source:** S007 - Maya Business pricing  
**Tier:** A for published provider terms  
**Date:** Current page accessed 2026-09-03  
**Confidence:** HIGH for the public pricing page  
**Caveat:** Maya offers customized pricing. Public rate cards do not establish treatment for every merchant or any special small-merchant arrangement.  
**Status:** VERIFIED / QUALIFY

## E09

**Candidate claim:** PayMongo currently publishes a nonzero QR Ph transaction rate.

**Evidence:** PayMongo's pricing page lists QR Ph at 1.34% for both in-store and online transactions, exclusive of VAT.

**Source:** S008 - PayMongo pricing  
**Tier:** A for published provider terms  
**Date:** Current page accessed 2026-09-03  
**Confidence:** HIGH for the public pricing page  
**Caveat:** PayMongo also offers custom pricing, and the public page does not establish any special zero-fee treatment for a qualifying small-merchant category.  
**Status:** VERIFIED / QUALIFY

## E10

**Candidate claim:** Current public provider price cards are inconsistent with a simple interpretation that all small merchants universally pay zero merchant fees for digital payments.

**Evidence:** Current GCash, Maya, and PayMongo public merchant-pricing pages display nonzero QR/QRPh merchant rates after the 2026 regulatory changes.

**Source:** S005, S007, S008  
**Tier:** A for each provider's published pricing  
**Date:** Accessed 2026-09-03  
**Confidence:** MEDIUM-HIGH  
**Caveat:** The providers' public pages do not establish merchant eligibility under the BSP phrase `small merchant payments`. A qualifying subset could receive different treatment that is not shown on standard price cards.  
**Status:** QUALIFY

## E11

**Candidate claim:** The public documentary record reviewed so far is insufficient to determine who economically bears the cost of the stated zero-fee small-merchant treatment.

**Evidence:** BSP documents establish payment cost categories and possible cross-subsidy mechanisms, but the reviewed materials do not identify the exact small-merchant implementation rule or disclose provider-level cost incidence for that treatment.

**Source:** S001-S012  
**Tier:** Mixed, primary sources prioritized  
**Date:** Through 2026-09-03  
**Confidence:** HIGH as a research-status assessment  
**Caveat:** A clearing rule, PPMI document, BSP implementation note, merchant agreement, or other authoritative source not yet located could resolve the question.  
**Status:** UNRESOLVED

## E12

**Candidate claim:** The original C017 question is downstream of an unresolved definitional and implementation question.

**Evidence:** To determine `who pays`, Portfilo first needs to establish what `zero fees for small merchant payments` covers: who qualifies, which payment rail and transaction type are included, which fee is waived, and which party would otherwise have paid it. The reviewed primary documents do not yet answer all of those elements consistently.

**Source:** S001-S004, S005-S008  
**Tier:** A-focused synthesis  
**Date:** Through 2026-09-03  
**Confidence:** HIGH  
**Caveat:** This is an editorial/research inference from the documentary record, not a legal conclusion about the full regulatory regime.  
**Status:** VERIFIED AS RESEARCH INFERENCE

## Current evidence decision

The evidence does **not** support drafting the original incidence story yet.

The packet supports a reframe toward the antecedent question:

> What does `zero fees for small merchant payments` actually mean under the BSP's 2026 payment rules?

The economic-incidence question may reopen after the exact eligibility, fee layer, and implementation mechanism are established.