# C009 Pre-Publish Review

_Last updated: 2026-09-03_

## Purpose

This is the final editorial gate for C009.

It applies the publication checklist in `docs/PUBLISHING_STANDARD.md` to the approved article and records revisions and remaining technical verification.

Public story:

`src/content/stories/what-higher-value-work-means-in-philippine-it-bpm.md`

## Gate result

**EDITORIAL PRE-PUBLISH GATE: PASS**  
**USER PUBLICATION AUTHORIZATION: GRANTED 2026-09-03**  
**REPOSITORY PUBLICATION STATE: APPLIED**  
**TECHNICAL LIVE VERIFICATION: PENDING**

Louda Tuppal explicitly approved the revised article on 2026-09-03. The story entry has been changed to `status: published`, given `publishedAt: 2026-09-03`, and left `featured: false`.

Homepage fixture replacement, featuring, and Portfilo Brief distribution were **not** implicitly authorized by this approval and remain separate decisions.

## Publication checklist

| Check | Result | Notes |
|---|---|---|
| Central question answered fairly | PASS | The article explains the jobs/characteristics behind the industry phrase rather than claiming an official category exists. |
| Research packet exists | PASS | Brief, sources, sample, evidence, contradictions, adversarial review, fact-check and notes are present. |
| Consequential claims verified | PASS | Current public examples and core framework claims were rechecked on 2026-09-03. |
| Important caveats retained | PASS | No prevalence, wage-premium, growth, displacement or transition claim is made from the illustrative sample. |
| Contradictions considered | PASS | Includes source-category limits, GCC/BPO distinction, role-title noise, salary limits, sample limits and current pre-publish discrepancies. |
| Quotations checked | PASS | Final article uses no long verbatim quotation. `capacity to capability` is a short attributed phrase from IBPAP. |
| Numbers checked | PASS | 15-role sample and J&J 0-2 years checked. Nonessential disputed/variable sector headcount removed. |
| Headline audited | PASS | Does not promise wage, growth, displacement or prevalence findings. |
| Content type accurate | PASS | `explained` matches the documentary synthesis and structured sample. |
| Topic accurate | PASS | `business`; AI is context, not the primary subject. |
| Methodology useful and included | PASS | Method, sample design, access window and limitations are stated in frontmatter. |
| Commercial disclosure required | N/A | No commercial relationship identified in the reporting packet. |
| Explicit publication approval | PASS | Louda Tuppal approved the revised article on 2026-09-03. |
| Repository publication metadata | PASS | `status: published`, `publishedAt: 2026-09-03`, `featured: false`. |
| Application build | PENDING | A fresh `npm run build` has not been independently completed in the active assistant environment. |
| Live story render | PENDING | Temporary-production deployment should be checked after Cloudflare processes the publication commit. |
| Desktop/mobile layout | PENDING | Requires live or safe preview inspection. |
| Outbound link click-through | EDITORIAL PASS / LIVE CLICK PENDING | Source pages were rechecked before approval; rendered-page click-through remains. |

## Fresh pre-publish research findings

### 1. IBPAP primary source strengthens the opening

IBPAP's official July 17, 2026 2028-outlook article directly states that the sector's next phase is intended to rely less on workforce scale and increasingly on higher-value capabilities and AI-enabled talent.

Action taken:

- use the primary IBPAP article for the opening strategy statement;
- keep independent reporting as a cross-check in the research packet;
- preserve attribution because this is an industry strategy/forecast, not an established labor-market outcome.

### 2. Exact 2025 headcount is not necessary and is not clean enough for this story

OECD's 2026 survey reports approximately 1.8 million workers using IBPAP 2025 data. July 2026 reporting on IBPAP's updated outlook refers to 1.9 million employees as of 2025.

The distinction is not central to C009 and may reflect timing, rounding or revised data.

Action taken:

- remove the exact headcount from the article;
- retain OECD's directly relevant finding about concentration in contact-center/back-office work and diversification into GCC, healthcare information management and IT/software.

### 3. Concentrix workforce-management experience requirements conflict internally

The current posting contains two thresholds: one block says more than seven years is preferred, while another says 3+ years in a similar role.

Action taken:

- keep the clearly described forecasting/planning duties;
- remove the experience threshold from public copy;
- record the inconsistency in `sources.md`, `sample.md`, `contradictions.md` and `fact-check.md`.

### 4. Link/currentness cleanup

Current public examples were rechecked on 2026-09-03. The Wells Fargo analytics link was normalized to the English canonical URL. The methodology records the final check date because live job postings can later expire or change.

## Copy revision result

The pre-publish edit also:

- replaced the vague opening with a concrete IBPAP strategy statement;
- made the sample construction clearer by identifying the frontline baselines and contrasting role families;
- removed unnecessary abstraction from the five analytical dimensions;
- replaced `AI-versus-non-AI taxonomy` with plainer language;
- tightened the workforce-management section;
- shortened the conclusion and ended on the three empirical questions the current evidence cannot answer.

## Visual decision

**No visual is required for publication.**

A five-dimension role matrix could be useful later, but the current evidence does not support a prevalence chart and a decorative visual would add little.

## Technical verification note

The assistant attempted to obtain a safe local checkout for a fresh build, but the active container could not resolve GitHub and does not contain Astro/dependencies. Therefore no local `npm run build` pass is claimed.

The publication commit is on the configured Cloudflare Pages production branch, so Cloudflare is expected to run its normal build/deployment process. The result still needs to be confirmed from the live deployment or by running `npm run build` from an available local checkout.

## Final decision

**C009 is editorially approved and the repository publication state has been applied.**

Do not mark the technical gate as passed until the live or local build/render checks are completed.