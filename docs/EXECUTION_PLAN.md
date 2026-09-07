# Portfilo v0 Execution Plan

_Last updated: 2026-09-07_

_Status: CURRENT / CANONICAL ACTIVE-SEQUENCE PLAN_

## Purpose

This document exists to stop phase drift.

Portfilo has accumulated strong research, editorial standards, product decisions, design decisions, and implementation work, but the redesign sequence became unclear when homepage-copy work exposed deeper product questions. Those questions have now been researched far enough to resume the website redesign.

This file governs **what happens next and in what order**.

If an older research document, old chat handoff, or stale `docs/PROJECT_STATE.md` sequence names a different immediate next task, follow this execution plan for the active redesign sequence unless Louda explicitly reopens it.

The repository remains the durable source of truth. Existing canonical editorial, engineering, image, publishing, and approval standards remain in force.

---

# 1. Current product direction

Founder-approved direction at this boundary:

- Portfilo remains the brand.
- Portfilo remains a business-and-technology media product.
- The product is **not geographically defined**. Do not impose a Philippines-first, Southeast-Asia-first, or other geographic promise unless a future explicit decision introduces one.
- The working product model is **focused business/technology briefing + original reporting**.
- Newsletter/email acquisition is a primary product goal.
- News is the primary day-to-day editorial surface.
- Features are the deeper editorial layer.
- Public coverage labels for the redesign are `Business / Technology / Startup / AI`.
- `Building` is removed from the intended public coverage set.
- `Startups` becomes singular `Startup` in the intended public coverage set.
- The taxonomy migration itself is **not yet implemented** and requires its own later review/approval.
- Portfilo remains free in v0.
- No public newsletter cadence or reading-time promise is approved.
- The four-issue newsletter pilot is approved as a later validation exercise. It does **not** block the website redesign.

Research basis:

- `research/newsletter-copy-reference-corpus-v1.md`
- `research/portfilo-product-model-research-v1.md`
- `research/editorial-lens-four-issue-pilot-v1.md`

The internal editorial lens approved for later newsletter/product validation is:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

That sentence is **internal only**. It is not homepage copy, a tagline, a newsletter promise, or public positioning.

---

# 2. Current design direction

The approved homepage composition remains the visual authority:

```text
COMPACT HEADER
Portfilo | Business / Technology / Startup / AI
Latest | Features | Subscribe free

COMPACT NEWSLETTER HERO
newsletter label
primary promise
supporting line
email form
approved hero visual

LATEST STRIP

THE LATEST
lead current item
supporting current items
compact feed as justified by real content

A CLOSER LOOK
one deeper Feature

FINAL NEWSLETTER SIGNUP

MINIMAL FOOTER
```

Canonical design record:

`research/homepage-redesign-v1.md`

Hard visual rules:

- the currently implemented first redesign attempt is **rejected visual precedent**;
- rebuild from the approved composition instead of patching the rejected layout into shape;
- existing canonical Portfilo wordmark remains;
- warm near-white canvas;
- near-black ink;
- Portfilo blue as primary functional accent;
- red rare and intentional;
- predominantly square geometry;
- no gradients;
- no glass;
- no default shadows;
- no card soup;
- no pill-heavy UI;
- no fake newspaper treatment;
- no generic SaaS hero;
- no decorative black panel;
- no generic fade-up motion;
- no motion until static composition is approved;
- desktop/large-tablet text-image modules must align at both top and bottom edges;
- mobile stacking is exempt from equal-height alignment.

## Hero visual

Founder selected the **second generated architectural candidate** during the 2026-09-07 review.

Approved character:

- monochrome/grayscale;
- premium editorial grain;
- contemporary architectural/city geometry;
- no text baked into the image;
- no logos;
- no documentary claim;
- small live-HTML disclosure such as `AI-generated editorial image` rather than baked-in disclosure text.

The grain treatment is a continuing Portfilo visual trait, not a one-off filter.

The selected chat-generated image still needs to be preserved/imported as a repository asset during the implementation handoff. **Do not regenerate, replace, or reinterpret it merely because a new chat cannot see the old conversation.** If the exact selected asset is unavailable to the implementation session, stop and ask for the approved asset rather than silently generating a substitute.

---

# 3. Hard anti-AI-slop rule for public copy

The failed homepage-copy attempts exposed a process defect: the model was allowed to invent the message before the product evidence and reference structure were fixed.

That process is now prohibited.

## Research-bound public copy workflow

For substantial homepage, newsletter, About, campaign, positioning, CTA, or institutional copy, use this sequence:

```text
REAL REFERENCE CORPUS
    ↓
PORTFILO FACT / CLAIM SHEET
    ↓
PATTERN / MESSAGE ARCHITECTURE
    ↓
FOUNDER SELECTS THE REFERENCE DIRECTION
    ↓
ONLY THEN DRAFT PORTFILO WORDING
    ↓
TRACE EVERY MATERIAL LINE
    ↓
SLOP / PROVENANCE REVIEW
    ↓
FOUNDER COPY APPROVAL
```

### Rule 1: no prose before the direction gate

Do **not** jump from research directly into polished Portfilo copy.

Before drafting, present:

- the exact relevant reference patterns;
- the Portfilo facts that can truthfully support a line;
- the structural choices available;
- what each choice would communicate.

Louda chooses the direction first.

### Rule 2: every material public claim needs authority

A final candidate must be traceable to:

1. an approved Portfilo fact/decision; and
2. a researched communication pattern or an ordinary literal interface need.

Do not invent:

- a benefit;
- a differentiator;
- a cadence;
- a reading-time promise;
- a geography;
- an audience identity;
- a mission;
- a slogan;
- a quality claim;
- an institutional belief.

### Rule 3: rejected generated copy has zero authority

The following rejected phrases/directions are not starting points and must not be polished, paraphrased, or smuggled back into later drafts:

- `A clearer picture of what’s next.`
- `News and deeper stories from Portfilo.`
- `The important moves...`
- `...with the context to understand what they mean.`
- `stronger attention to the Philippines / Southeast Asia`
- similar vague constructions involving `what matters`, `what’s next`, `important moves`, `deeper stories`, `insights`, or invented geographic emphasis.

This is not a mechanical banned-word list. The problem is unsupported generated positioning.

### Rule 4: stop on unsupported invention

If the assistant cannot trace a proposed material phrase to the approved facts + selected research direction, **do not write it**.

If the homepage needs wording but the evidence is insufficient, leave the copy gate open rather than filling the space with plausible language.

---

# 4. Approval discipline

All normal repository approval rules continue.

A short `I approve`, `yes`, or `go ahead` advances **only the gate explicitly awaiting approval**.

Do not infer authorization for:

- drafting from research approval;
- implementation from copy approval;
- image generation from image-brief approval;
- taxonomy migration from design approval;
- newsletter sending from template approval;
- deployment from local QA;
- merge to `main` from publication or release readiness.

When uncertain, stop at the current gate rather than advancing the sequence.

---

# 5. Execution sequence

## PHASE A — Product + redesign foundation

Status: **COMPLETE ENOUGH TO BUILD / DO NOT KEEP RESEARCHING BY DEFAULT**

Completed/approved inputs:

- Vision Alignment v1;
- Audience & Social Distribution Strategy v0;
- Editorial Packaging Architecture v1;
- homepage redesign composition contract;
- newsletter copy reference corpus;
- Portfilo product-model research;
- focused briefing + original reporting direction;
- no geographic product promise;
- internal editorial lens;
- four-issue pilot design;
- new architectural hero direction;
- second hero candidate selected;
- grain treatment retained.

Important rule:

**Do not reopen broad product research merely because implementation feels difficult.** Reopen only when a concrete contradiction or new founder decision requires it.

---

## PHASE B — Homepage finalization

Status: **ACTIVE**

This is the current project phase.

### B1 — Homepage Copy Evidence Matrix

Status: **NEXT**

Goal:

Turn the existing newsletter reference corpus and approved Portfilo facts into a small set of communication structures **without drafting final Portfilo hero copy yet**.

Required output:

- exact Portfilo facts available for the hero;
- relevant reference structures from established newsletter/news products;
- 2-4 structural/message directions;
- what each direction requires Portfilo to claim;
- which claims are currently supportable vs unsupported;
- no final hero sentence.

Approval gate:

Louda selects one structural/reference direction.

### B2 — Homepage Copy v1

Blocked until B1 direction is approved.

Goal:

Draft the minimum necessary homepage copy from the selected research structure and approved Portfilo facts.

Scope:

- hero label;
- hero headline/promise;
- one supporting line if needed;
- form placeholder/button/microcopy;
- final newsletter CTA copy.

Requirements:

- line-by-line provenance/trace;
- no cadence/read-time/geography claim unless actually approved;
- no generic newsletter slogan;
- no fabricated subscriber count/social proof;
- no `Portfilo Brief` naming migration yet unless that migration is explicitly opened.

Approval gate:

Founder approves the exact copy package.

### B3 — Static Homepage Rebuild v1

Blocked until B2 copy approval and exact hero asset availability.

Goal:

Cleanly rebuild the homepage from the approved mockup/composition contract.

Implementation rules:

- do not patch the rejected homepage into visual compliance;
- reuse only sound underlying code such as subscription behavior or fixture guards;
- use the canonical wordmark;
- use the selected hero image;
- disclosure remains live HTML;
- preserve development-only fixture protection;
- two homepage newsletter signups only at current inventory;
- no motion;
- no public fake news density.

Validation:

- `npm run check`;
- `npm run build`;
- desktop inspection;
- large-tablet inspection;
- mobile inspection;
- verify hero/Feature text-image top and bottom alignment;
- verify selected hero crop;
- verify no rejected decorative patterns returned.

Approval gate:

Founder static visual QA.

### B4 — Homepage correction pass

Only defects identified during B3 visual QA may be corrected without reopening unrelated design decisions.

Static homepage must be founder-approved before motion or broader site redesign continues.

---

## PHASE C — News + Feature product architecture

Status: **BLOCKED BY HOMEPAGE STATIC APPROVAL**

Goal:

Make the content model match the approved product direction.

Sequence:

1. inspect current story schema/routes/content;
2. define the minimum News vs Feature distinction;
3. decide whether a `format: news | feature` field remains the best implementation;
4. review migration impact;
5. review public taxonomy migration to `Business / Technology / Startup / AI`;
6. present migration plan;
7. obtain founder approval;
8. implement;
9. validate existing content and routes.

Do not change taxonomy or schema because the redesign document mentions the intended result. The migration is its own gate.

---

## PHASE D — Editorial reading surfaces

Status: **BLOCKED BY PHASE C**

Build/refine:

- News story page;
- Feature/article reading page;
- `/latest` reverse-chronological feed;
- Features archive/presentation;
- relevant story/series behavior;
- newsletter signup on every News and Feature page;
- related-content behavior only when inventory justifies it.

Principles:

- News is faster and more compact;
- Features get more generous editorial staging;
- do not force images where they are not justified;
- no card soup;
- no invented production content to fill layouts.

Each major surface receives static visual QA before motion.

---

## PHASE E — Institutional + newsletter surface cleanup

Status: **BLOCKED BY CORE EDITORIAL SURFACES**

Tasks:

- simplify `/subscribe` into a focused utility landing page;
- simplify Standards presentation without weakening substantive standards;
- retire/redirect About only after author/byline/metadata dependencies are safely resolved;
- consistently migrate public `Portfilo Brief` naming to `Newsletter` across website and email-facing surfaces;
- update confirmation and beehiiv-facing copy/templates only as part of the same naming migration;
- preserve beehiiv double opt-in and existing infrastructure unless a new requirement justifies change.

Do not perform a piecemeal naming migration.

---

## PHASE F — Four-issue newsletter pilot

Status: **APPROVED DESIGN / PARKED UNTIL CORE SITE IS BUILT**

Canonical pilot:

`research/editorial-lens-four-issue-pilot-v1.md`

The pilot does **not** block Phases B-E.

It is required before:

- committing to a public recurring cadence;
- making a reading-time promise;
- finalizing a recurring issue structure as a public promise;
- treating two issues/week as an operating commitment;
- first recurring public newsletter send unless founder explicitly reopens launch sequencing.

Pilot goal:

Test whether the focused briefing model is genuinely sustainable without filler.

After four dry runs, choose among:

- Model 2 confirmed;
- lower frequency;
- shift toward analysis-led Model 3;
- reopen/narrow the lens.

Do not change the website design simply because a dry-run issue differs in minor editorial detail. Only material product findings should reopen earlier work.

---

## PHASE G — Motion + final product polish

Status: **BLOCKED BY STATIC SITE APPROVAL**

Only after static surfaces are approved:

- implement Latest ticker motion;
- add visible pause/stop control;
- respect `prefers-reduced-motion`;
- add restrained interaction feedback where useful;
- keep CSS first;
- add no animation dependency without a concrete need.

No decorative motion pass.

---

## PHASE H — Full QA + release readiness

Status: **LATER**

Required review:

- responsive/layout;
- accessibility;
- keyboard behavior;
- reduced motion;
- route integrity;
- production fixture exclusion;
- newsletter signup + confirmation;
- metadata/SEO;
- performance;
- security/reliability;
- final-domain configuration;
- Cloudflare edge rate limiting if still required;
- Cloudflare Web Analytics verification;
- beehiiv `/confirmed` redirect;
- unsubscribe behavior;
- mailing-address/compliance clearance before first public newsletter send;
- final browser/console/link checks.

`main` remains a separate release boundary.

No merge to `main` without an intentional release review.

---

## PHASE I — Social Visual System

Status: **DEFERRED UNTIL WEBSITE SYSTEM IS STABLE**

Resume Social Visual System v0 only after the redesigned site establishes the visual system social should inherit.

Do not let social design delay the website redesign.

---

# 6. Exact current next task

**B1 — Homepage Copy Evidence Matrix**

Do not build the homepage yet.

Do not run Pilot Issue 1 yet.

Do not draft final Portfilo hero copy yet.

Do not perform more broad product-model research unless B1 discovers a concrete contradiction.

The B1 deliverable should let Louda choose a proven communication structure before any new Portfilo marketing sentence is generated.

---

# 7. New-chat handoff rule

A new chat should begin by reading:

1. `AGENTS.md`
2. `docs/EXECUTION_PLAN.md`
3. `docs/PROJECT_STATE.md`
4. `docs/V0_SCOPE.md`
5. the canonical documents named by the active phase

For the current phase also read:

- `research/homepage-redesign-v1.md`
- `research/newsletter-copy-reference-corpus-v1.md`
- `research/portfilo-product-model-research-v1.md`
- `research/editorial-lens-four-issue-pilot-v1.md`
- `docs/COPY_STYLE.md`
- `docs/WRITING_SYSTEM.md`

Then verify the current branch/HEAD before any write.

The new chat must treat **B1 — Homepage Copy Evidence Matrix** as the next task unless Louda explicitly changes the plan.

No implementation is authorized merely by reading this plan.
