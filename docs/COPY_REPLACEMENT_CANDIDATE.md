# Portfilo Content-First Copy Replacement Candidate

_Status: candidate for user review. Do not implement until approved._

_Last updated: 2026-09-02_

## Governing decision

This candidate follows the approved content-first / no-tagline architecture in `docs/COPY_STYLE.md` and `docs/POSITIONING_ARCHITECTURE_EXPLORATION.md`.

The main principle is deletion before replacement.

The rejected implementation filled too many visual slots with positioning copy. This candidate does not assume every current copy block needs new words.

## What changes structurally

### Shared header

Current center strapline is removed.

Do not replace it with another slogan.

Until Global Navigation is implemented, the header can remain:

- Portfilo wordmark on the left;
- no center positioning line;
- current page label on the right.

On the Homepage only, the topic taxonomy may appear below the header as coverage context.

### Shared footer

Remove `Portfilo / Philippines` from the center.

Do not replace it with a slogan.

Keep the wordmark/brand at left and the useful page action at right until the later navigation/footer pass.

### Homepage identity block

Remove the current giant institutional headline and explanatory paragraph.

Do not replace them with another giant brand sentence.

Repurpose the top of the Homepage into a compact publication/coverage strip followed immediately by the featured story.

The featured story becomes the page's primary `h1` and main visual statement.

### About positioning block

Remove the standalone positioning block entirely.

### About Philippine-context section

Remove the entire section.

Geographic context belongs in stories when it is part of the subject. About does not need a philosophy explaining why Portfilo can cover global subjects.

### Subscribe explanatory sections

Remove the topic-list hero index and the `Perspective` explanation.

Reduce the page to product facts: what Portfilo Brief is, how to subscribe, schedule status, confirmation, and unsubscribe behavior.

---

# Homepage `/`

## Metadata

Title:

> **Portfilo**

Description:

> **Portfilo covers business, technology, startups, AI, and building.**

No geographic positioning in metadata.

## Header

Left:

> **Portfilo**

Center:

> *(empty until navigation is implemented)*

Right:

> **Home**

## Compact publication strip

Replace the current large identity hero with a much smaller strip.

Coverage label:

> **Business / Technology / Startups / AI / Building**

Optional temporary descriptor while fixtures remain:

> **Stories about companies, products, markets, and the people building them.**

This sentence is not a tagline. If the Homepage reads clearly without it after the lead-story hierarchy is implemented, delete it.

Fixture notice remains because the current homepage still uses synthetic story previews:

> **Preview mode**
>
> Launch stories are still being selected.
>
> The story headlines on this page are design previews, not published journalism.

## Lead story

The existing feature moves into the primary hero role.

Section label:

> **01 / Feature preview**

Classification:

> **Explained / Business**

Status:

> **Not published**

Primary page headline / `h1`:

> **What should a founder know before entering a crowded market?**

Dek:

> **A design preview for a future business story. No reported findings are being presented.**

Reason for changing the current dek: `It is here to test how a real business feature will read and feel` is internal design language. The shorter dek states only what the reader needs to know.

Keep the existing Editorial type / Topic / Status metadata.

Keep the evidence preview module because it demonstrates a real Portfilo story pattern, but keep its current explicit preview disclaimer.

## Latest

Keep the current structure and synthetic fixture copy for now.

The section does not need additional brand copy.

## About bridge

Current dark institutional section is retained visually but stripped of manifesto language.

Section label:

> **03 / About**

Headline:

> **Portfilo is a business and technology publication.**

Body:

> **We cover companies, startups, AI, markets, products, and the work of building them.**

Remove the repeated five-topic side list from this section if it duplicates the compact coverage strip at the top. If the side list is visually useful, keep it without adding another explanatory paragraph.

Action:

> **About Portfilo**

Target:

`/about`

The section should not make claims about trust, rigor, usefulness, or evidence. `/standards` handles that job.

## Newsletter

Section label:

> **04 / Portfilo Brief**

Secondary label:

> **Email / Subscribe**

Headline:

> **Portfilo Brief**

Body:

> **New stories by email.**

CTA:

> **Subscribe**

No frequency sentence on the Homepage. The Subscribe page can state that there is no fixed schedule yet.

## Footer

Left:

> Portfilo wordmark

Center:

> *(remove current center line)*

Right:

> **About Portfilo**

---

# About `/about`

## Metadata

Description:

> **About Portfilo, a business and technology publication.**

## Header

Remove the center strapline.

Keep:

> **About**

as the right-side page label until navigation is implemented.

## Hero

Kicker:

> **About Portfilo**

Headline:

> **Portfilo is a business and technology publication.**

Intro:

> **We cover companies, startups, AI, markets, products, and the work of building them.**

Remove the current positioning block entirely.

## Section 01

Label:

> **01 / What we publish**

Secondary label:

> **Coverage**

Headline:

> **Stories take different forms.**

Body:

> **Portfilo publishes news, explanations, profiles, analysis, guides, and field notes. The subject decides the format.**

This is intentionally plain. The topic cards immediately below provide the concrete subject detail.

### Topic cards

Business:

> **Companies, money, markets, strategy, and business models.**

Technology:

> **Software, fintech, platforms, infrastructure, and devices.**

Startups:

> **New companies, funding, growth, failure, acquisitions, and early-stage decisions.**

AI:

> **Models, products, adoption, economics, policy, and work.**

Building:

> **Product, sales, distribution, pricing, hiring, and operations.**

## Section 02

Label:

> **02 / Who it is for**

Do not use a large audience slogan.

Headline:

> **People curious about business and technology.**

Body:

> **That includes people learning the subject, already working in it, or building something themselves.**

Side note:

> **Reader note**
>
> **If a term matters, we explain it.**

This is the only audience explanation needed.

## Remove current Section 03 / Philippine context

Delete the entire section.

Do not replace it.

## Standards bridge

Renumber to:

> **03 / How we work**

Secondary label:

> **Research & Standards**

Headline:

> **Our standards are public.**

Body:

> **They cover sourcing, verification, AI use, corrections, and commercial independence.**

Link:

> **Read our standards**

Do not restate the standards themselves on About.

## Founder

Keep exactly:

> **Founder / Louda Tuppal**

No biography, portrait, founder letter, or personal-brand section.

## Footer

Remove the center line.

Keep:

> **Back to home**

---

# Subscribe `/subscribe`

## Metadata

Keep the current description:

> **Subscribe to Portfilo Brief for new Portfilo stories, sent by email.**

This is already concrete and accurate.

## Header

Remove the center strapline.

Keep right-side label:

> **Subscribe**

## Hero

Kicker:

> **Portfilo Brief / Email**

Headline:

> **Portfilo Brief**

Intro:

> **New Portfilo stories by email.**

Remove the current `What it covers` topic list from the hero. The reader is already on Portfilo and does not need the entire taxonomy repeated before the form.

## Signup

Section label:

> **01 / Subscribe**

Secondary label:

> **Email signup**

Headline:

> **Subscribe**

Support:

> **Enter your email. We’ll send a confirmation link.**

Keep field label:

> **Email address**

Keep button:

> **Subscribe**

Form hint:

> **No fixed schedule yet. Unsubscribe any time.**

Keep validation:

> **Enter a valid email address.**

Keep successful double-opt-in state:

> **Check your inbox. Confirm your email to finish subscribing to Portfilo Brief.**

## Product facts

The current large `What to expect` editorial section is reduced.

Label:

> **02 / Portfilo Brief**

Headline:

> **New stories by email.**

Facts:

- **Schedule / No fixed schedule yet.**
- **Confirmation / Required before the subscription is active.**
- **Unsubscribe / Any time.**

No `Coverage`, `Perspective`, standards claim, or geographic explanation here.

## Email provider note

The current privacy section can be reduced to a small operational note rather than another large slogan section.

Label:

> **03 / Email**

Body:

> **beehiiv handles delivery and unsubscribe requests. Every Portfilo Brief email includes an unsubscribe link.**

No headline is necessary if the layout can support a small note. If the existing layout requires one during implementation, use the literal label `Email and unsubscribe`, not a slogan.

## Footer

Remove the center line.

Keep:

> **Back to home**

---

# Standards `/standards`

Do not rewrite substantive Standards copy.

Shared changes only:

- remove the center masthead strapline;
- remove the footer center positioning line;
- keep `Standards` as the current page label until navigation is implemented.

The existing Standards page is already performing its job.

---

# Story template

Do not rewrite story content or editorial metadata in this phase.

Shared change only:

- remove the center masthead positioning line.

The right-side `Story / {contentType}` label remains useful.

---

# Series template

Do not rewrite Series fixture content in this phase.

Shared changes:

- remove the center masthead positioning line;
- remove the footer center positioning line.

Separate pre-launch cleanup still required:

> `Series ID`

should not remain reader-facing in the final public Series template, but that is not part of this copy candidate.

---

# Why this candidate is different from the rejected round

The rejected round tried to improve nearly every sentence.

This candidate removes entire categories of sentence:

- no tagline;
- no geographic positioning;
- no giant homepage brand statement;
- no explanation of why global stories belong;
- no audience-flattering language;
- no trust slogan;
- no About positioning block;
- no Philippine-context manifesto section;
- no newsletter perspective statement;
- no footer slogan.

The remaining copy mostly names:

- the publication;
- the subjects;
- the story format;
- the email product;
- the action available to the reader.

## Human-language gate

Key proposed lines:

> Portfilo is a business and technology publication.

> We cover companies, startups, AI, markets, products, and the work of building them.

> Stories take different forms.

> People curious about business and technology.

> Our standards are public.

> Portfilo Brief.

> New Portfilo stories by email.

These lines are deliberately less clever than the rejected copy.

If a line feels almost too plain, that is not automatically a problem. The goal is to give the journalism more room.

## Implementation implications if approved

Approval of this candidate would authorize:

1. removing/reducing the Homepage identity block;
2. promoting the feature headline to the Homepage primary `h1`;
3. updating Homepage metadata and copy;
4. simplifying the dark About bridge;
5. simplifying Homepage Portfilo Brief copy;
6. rewriting About and removing the Philippine-context section;
7. simplifying Subscribe while preserving the native form and API behavior;
8. removing masthead/footer positioning lines across public templates;
9. leaving Standards substantive copy, Story content, Series content, taxonomy, and Subscribe backend architecture unchanged;
10. running production-build and responsive QA before the voice reset can close.

No public page should be changed until the user approves this candidate.
