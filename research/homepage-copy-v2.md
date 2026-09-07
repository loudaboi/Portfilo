# Portfilo Homepage Copy v2

_Status: CANDIDATE / AWAITING FOUNDER APPROVAL / NO RUNTIME COPY CHANGE AUTHORIZED_

_Date: 2026-09-07_

## Purpose

Draft the minimum homepage newsletter copy package from the founder-approved **Architecture A — Product/output first** structure.

This record does not authorize implementation. The earlier `research/homepage-copy-v1.md` remains rejected historical material with zero current authority.

## Decision job

Produce one exact, evidence-supported homepage copy package that states what the Portfilo newsletter is without inventing a reader benefit, cadence, reading-time promise, geography, social proof, quality claim, public narrow lens, or permanent slogan.

## Governing evidence

Current authority and supporting records:

- `docs/PROJECT_STATE.md`;
- `research/homepage-copy-evidence-matrix-v1.md`;
- `research/newsletter-copy-reference-corpus-v1.md`;
- `research/portfilo-product-model-research-v1.md`;
- `research/homepage-redesign-v1.md`;
- `docs/COPY_STYLE.md`;
- `docs/WRITING_SYSTEM.md`;
- `skills/portfilo-anti-slop/SKILL.md`;
- actual newsletter form behavior in `src/components/NewsletterSignup.astro`.

Approved Architecture A:

```text
[NEWSLETTER / PRODUCT LABEL]
[BUSINESS-AND-TECHNOLOGY SUBJECT OR APPROVED COVERAGE FRAME]
[FOCUSED BRIEFING + ORIGINAL REPORTING PRODUCT MODE]
[EMAIL FORM + FREE ACTION]
```

Closest reference family:

- Bloomberg Tech In Depth;
- Platformer;
- Stratechery.

The transferable structural lesson is to let concrete editorial output and subject define the product instead of manufacturing a slogan or unsupported benefit promise.

## Exact candidate package

### Hero

Label:

`NEWSLETTER`

Headline / primary line:

> **A briefing on business and technology, with original reporting from Portfilo.**

Supporting sentence:

**Omit.**

Reason: the primary line already carries the subject and approved product mode. A second sentence would most likely restate the same information or require an unsupported benefit claim.

Input placeholder:

`you@email.com`

Button:

`Subscribe free`

Microcopy:

`Free newsletter. Unsubscribe anytime.`

Existing post-submit success state remains operationally accurate:

`Check your inbox. Confirm your email to finish subscribing.`

### Final newsletter signup

Heading:

> **Get the Portfilo newsletter.**

Supporting sentence:

**Omit.**

Use the same email field, button, and microcopy:

- placeholder: `you@email.com`;
- button: `Subscribe free`;
- microcopy: `Free newsletter. Unsubscribe anytime.`

The final CTA deliberately does not repeat the hero's product description after the reader has already moved through the editorial page.

## Line provenance

| Line / decision | Provenance class | Authority |
| --- | --- | --- |
| `NEWSLETTER` | Functional / product label | Approved homepage composition and public naming direction. This does not itself perform the later site/email naming migration. |
| `A briefing on business and technology, with original reporting from Portfilo.` | Editorial / institutional | Approved product category: business and technology. Approved working model: focused business/technology briefing + original reporting. `Portfilo` is the approved brand. |
| Omit hero support sentence | Structural | Architecture A plus deletion/repetition rules in `COPY_STYLE.md` and `WRITING_SYSTEM.md`. No additional supported claim is necessary. |
| `you@email.com` | Functional | Current `NewsletterSignup.astro` implementation. |
| `Subscribe free` | Functional + operational | Current implementation and approved free v0 status. |
| `Free newsletter. Unsubscribe anytime.` | Operational | Current implementation; v0 is free; unsubscribe behavior is part of the established newsletter infrastructure. |
| `Check your inbox. Confirm your email to finish subscribing.` | Operational status | Current implementation and double-opt-in configuration. |
| `Get the Portfilo newsletter.` | Functional acquisition copy | Newsletter/email is an approved primary reader relationship; the line describes the requested action without adding a product claim. |
| Omit final supporting sentence | Structural | Repetition audit: the product definition already appears in the hero and editorial content separates the two signup moments. |

## Rejected-language separation

This candidate does not use or lightly paraphrase the rejected directions in `research/homepage-copy-v1.md`, including:

- `Keep up with business and technology.`;
- `Business and technology, by email.`;
- `Follow the latest in business and technology.`;
- `News and deeper stories from Portfilo...`;
- `Get Portfilo in your inbox.`;
- `A clearer picture of what's next.`;
- `The important moves...`;
- unsupported Philippines/Southeast Asia positioning.

## Anti-slop red-team result

The candidate survives the current gate because:

1. every material noun maps to an approved product fact;
2. it contains no unsupported reader outcome;
3. it contains no cadence, reading-time, quantity, delivery-moment, social-proof, geographic, or superiority claim;
4. it does not convert the internal editorial lens into public positioning;
5. it uses one complete product sentence rather than a slogan plus explanatory restatement;
6. the supporting sentence is deleted because it adds no necessary information;
7. the final CTA is functional rather than another branded promise;
8. form/status copy is grounded in actual implementation behavior.

## Known tradeoff

The hero line is deliberately descriptive rather than slogan-like. Its distinctiveness must come from Portfilo's journalism, visual system, selected hero image, and overall composition rather than from an invented marketing claim.

That is consistent with the approved content-first/no-permanent-tagline rule.

## Approval gate

Founder approval at this gate approves the exact homepage copy package above.

It does **not** authorize:

- homepage implementation;
- selected hero binary substitution or regeneration;
- site-wide `Portfilo Brief` -> `Newsletter` migration;
- News/Feature schema or taxonomy migration;
- article/reading-surface redesign;
- motion;
- deployment;
- merge to `main`;
- release.

After explicit copy approval, the next task is **Static Homepage Rebuild v1**, but implementation still requires the exact selected hero asset to be available and must stop for the asset if it is missing.
