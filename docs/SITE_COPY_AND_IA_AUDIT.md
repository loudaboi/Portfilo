# Portfilo Site Copy and Information Architecture Audit

_Last updated: 2026-09-03_

## Status

**AUDIT COMPLETE / IMPLEMENTATION NOT STARTED**

This audit follows `docs/WRITING_SYSTEM.md` and `docs/COPY_STYLE.md`.

It was opened after Portfilo identified a system-level writing problem: public copy could satisfy factual and product requirements while still inheriting generic, invented, or AI-shaped phrasing.

This phase does **not** rewrite public copy. It identifies what should be kept, removed, rewritten, moved, or structurally changed before implementation.

## Audit rules

Every public string is evaluated by job and authority, not by whether it sounds polished.

Decision labels:

- `KEEP` — the current wording is functional, grounded, and does not need a style-driven rewrite;
- `KEEP / TIGHTEN` — the underlying information belongs, but wording or repetition should be reconsidered during implementation;
- `REWRITE` — the information belongs, but the current wording is generic, over-produced, structurally wrong, or doing the wrong writing job;
- `DELETE` — the line is redundant, promotional, temporary, or unnecessary;
- `MOVE` — the information is valid but belongs on a different surface;
- `FIX` — the issue is structural, factual, metadata-related, or an implementation inconsistency rather than a prose preference.

Authority classes:

- `FUNCTIONAL` — describes an action, control, route, or interface state;
- `OPERATIONAL` — describes actual product/service behavior;
- `EDITORIAL` — states an approved Portfilo editorial position or practice;
- `LEGAL / PRIVACY` — describes data handling, provider behavior, or compliance-relevant information;
- `STORY METADATA` — derives from structured story fields;
- `NONE / LEGACY` — has no current approved authority and should not remain merely because it already exists.

Existing Portfilo copy is not automatic precedent under `docs/WRITING_SYSTEM.md`.

## Research basis

The audit uses the professional sources already incorporated into `docs/WRITING_SYSTEM.md`, especially:

- GOV.UK content design: start from the user need; front-load useful information; remove duplication;
- GOV.UK UI writing: use familiar controls and task-focused language;
- Microsoft writing guidance: make actions and states specific, concise, and readable;
- Microsoft final publishing review: scan headings and first sentences separately to expose repetition and structural gaps.

Additional decisions in this audit use:

- Google Search Central, `Control your snippets in search results`: meta descriptions should be unique, page-specific summaries and do not have a fixed required length;
- 404 Media's current archive as one professional example showing that a publication archive can be a simple chronological list rather than a feature-heavy discovery product.

These are structural references, not copy sources. Portfilo must not imitate their wording or house voice.

---

# 1. Global information architecture

## Current issue: `/stories/<slug>` exists without `/stories`

Current story URLs live under:

`/stories/<slug>`

There is no `/stories` index. Global navigation instead uses `Latest`, which links to `/#latest`.

Decision:

**FIX**

Rationale:

- `Stories` is the stable information category represented by the URL hierarchy;
- `Latest` is useful as a homepage section label but is a weaker global destination because it jumps into a section on another page;
- a dedicated index gives every published story a browseable parent surface;
- the v0 currently has too few stories to justify filters, search, pagination, or a complicated archive interface.

### Approved implementation direction

Create:

`src/pages/stories/index.astro`

Page job:

> Show all published Portfilo stories in reverse chronological order.

Minimum information per item:

- publication date;
- editorial type;
- topic;
- headline;
- short story description/summary;
- author;
- story link.

Do **not** add for v0:

- filters;
- search;
- pagination before volume requires it;
- topic cards;
- recommendation logic;
- popularity ranking;
- artificial archive categories.

### Global navigation change

Header:

`Latest` -> `Stories`

Footer:

`Latest` -> `Stories`

`Stories` links to `/stories`.

Homepage section name `Latest` remains valid because it describes the newest subset on that page.

`SiteHeader.astro` will need `stories` added to its current-page type so `/stories` can expose `aria-current="page"`.

### Utility-link follow-up

During implementation, review links currently pointing to `/#latest` from confirmation and 404 surfaces. Prefer the stable `/stories` destination when the action means browse/read published work.

Do not mechanically replace homepage-specific anchor links where the anchor remains the intended destination.

---

# 2. Release-blocking fixture route issue

## Synthetic series fixture is currently routable in production

Current series route:

`src/pages/series/[slug].astro`

loads every series entry, including:

`src/content/series/content-architecture-fixtures.md`

which is explicitly marked:

`fixture: true`

Because the route does not filter fixtures, `/series/content-architecture-fixtures` can be generated in a production build. When `SITE_URL` enables the sitemap integration, the sitemap filter also does not exclude this route.

Decision:

**FIX / RELEASE BLOCKER**

Implementation direction:

- keep the fixture available in local development if it is still useful;
- exclude `fixture: true` series entries from production static paths;
- ensure synthetic fixture series are not added to production sitemap output;
- do not delete the fixture solely to hide the routing bug if it still serves development validation.

This is an implementation consistency issue, not a copy rewrite.

No `/series` index is required in v0. A real series may have a direct `/series/<slug>` route when one exists; add a general series index only when reader or publication volume creates a real need.

---

# 3. Story metadata architecture

## Current problem

The story schema has one required field:

`description`

That value currently performs several different jobs:

1. visible article dek on `/stories/<slug>`;
2. homepage story summary;
3. series-page story summary;
4. meta description;
5. Open Graph description;
6. Twitter description;
7. structured-data description.

Those jobs have different constraints.

Decision:

**FIX**

## Approved schema direction

Separate:

```yaml
title:
dek:
description:
```

### `title`

Job:

Editorial headline.

### `dek`

Job:

Visible story-header copy that adds information to the headline and helps the reader enter the story.

Rules:

- one or two sentences when needed;
- must add information rather than translate the headline;
- may state scope, finding, tension, or material limitation;
- is not required to fit search-result snippet conventions;
- must pass the story's `style-brief.md`.

### `description`

Job:

Short, page-specific story summary for cards, archive surfaces, search/social metadata, and structured data.

Rules:

- usually one concise sentence;
- accurately summarizes the story;
- must not be generic publication marketing;
- must be unique to the story;
- should not merely repeat the title;
- no hard character limit should be encoded solely for SEO: Google documents no fixed maximum, and snippets are truncated as needed.

## Implementation rule

Do not add a permanent runtime fallback such as `dek ?? description` after migration. That would recreate the same collapsed writing job.

Migration should update all current story entries so both fields are deliberately authored.

After migration:

- story page header uses `dek`;
- homepage cards use `description`;
- `/stories` index uses `description`;
- series story cards use `description`;
- `SiteHead` and article structured data use `description`.

---

# 4. Global header and footer copy

## Header

| Current copy | Authority | Decision | Reason |
|---|---|---|---|
| `Portfilo home` | FUNCTIONAL | KEEP | Clear accessible label. |
| `Latest` | FUNCTIONAL | REWRITE | Replace global destination with `Stories`; keep `Latest` for homepage section. |
| `Standards` | FUNCTIONAL | KEEP | Familiar and accurate. |
| `About` | FUNCTIONAL | KEEP | Familiar and accurate. |
| `Subscribe` | FUNCTIONAL | KEEP | Clear action. |

## Footer

| Current copy | Authority | Decision | Reason |
|---|---|---|---|
| `Latest` | FUNCTIONAL | REWRITE | Same `/stories` IA change as header. |
| `Standards` | FUNCTIONAL | KEEP | Accurate. |
| `About` | FUNCTIONAL | KEEP | Accurate. |
| `Subscribe` | FUNCTIONAL | KEEP | Accurate. |
| `Privacy` | FUNCTIONAL | KEEP | Accurate. |

---

# 5. Homepage audit

File:

`src/pages/index.astro`

## Metadata

### Title: `Portfilo`

Authority: FUNCTIONAL

Decision: **KEEP**

### Description: `Portfilo covers business, technology, startups, AI, and building.`

Authority: EDITORIAL / PRODUCT TAXONOMY

Decision: **KEEP / TIGHTEN ONLY IF NEEDED**

The line is literal, page-specific, and grounded in the approved taxonomy. It should not be replaced merely to sound more branded.

## Identity block

### `Business / Technology / Startups / AI / Building`

Authority: EDITORIAL / PRODUCT TAXONOMY

Decision: **KEEP**

It is functional orientation, not a tagline.

### `Stories about companies, products, markets, and the people building them.`

Authority: NONE / LEGACY TEMPORARY DESCRIPTOR

Decision: **DELETE OR REWRITE ONLY IF A REAL ORIENTATION NEED REMAINS**

Reason:

`COPY_STYLE.md` already identifies this as a temporary descriptor from the fixture phase. Portfilo now has real editorial work. Do not preserve the sentence only because the layout contains space for it.

Preferred implementation test:

Remove it first. Add replacement copy only if the page becomes materially harder to understand.

## Featured section

### `01 / Featured`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Featured story`

Authority: FUNCTIONAL

Decision: **DELETE / TEST WITHOUT**

The enclosing section already says Featured. This is repeated labeling.

### `Author`, `Editorial type`, `Topic`

Authority: STORY METADATA

Decision: **KEEP**

### `Read story`

Authority: FUNCTIONAL

Decision: **KEEP**

### Feature panel `Portfilo / <type>` and `Read`

Authority: STORY METADATA / FUNCTIONAL

Decision: **KEEP FOR VISUAL REVIEW**

This is primarily an editorial-design treatment rather than institutional prose. It can remain unless visual review shows unnecessary duplication.

## Latest section

### `02 / Latest`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Published stories`

Authority: FUNCTIONAL

Decision: **DELETE / TEST WITHOUT**

It adds little beside `Latest` and the story list.

### Story count

Authority: FUNCTIONAL

Decision: **KEEP**

### Story metadata, title, description, author, `Read story`

Authority: STORY METADATA / FUNCTIONAL

Decision: **KEEP**, with `description` adopting its new short-summary job after schema migration.

## About bridge

### `03 / About`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Portfilo is a business and technology publication.`

Authority: APPROVED EDITORIAL / PRODUCT POSITION

Decision: **KEEP**

This is the clearest literal statement of what the product is.

### `We cover companies, startups, AI, markets, products, and the work of building them.`

Authority: EDITORIAL

Decision: **KEEP / TEST FOR REDUNDANCY**

This information is valid, but the homepage already contains the five-topic identity block. During implementation, test whether removing this supporting sentence improves the page without reducing orientation.

### `About Portfilo`

Authority: FUNCTIONAL

Decision: **KEEP**

## Newsletter bridge

### `04 / Portfilo Brief`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Email / Subscribe`

Authority: FUNCTIONAL

Decision: **KEEP / OPTIONAL**

This is a small classification label rather than a brand sentence. Delete if it becomes redundant after visual review.

### `Portfilo Brief`

Authority: PRODUCT NAME

Decision: **KEEP**

### `New stories by email.`

Authority: OPERATIONAL

Decision: **KEEP**

### `Subscribe`

Authority: FUNCTIONAL

Decision: **KEEP**

---

# 6. About audit

File:

`src/pages/about.astro`

## Hero

### `About Portfilo`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Portfilo is a business and technology publication.`

Authority: APPROVED EDITORIAL / PRODUCT POSITION

Decision: **KEEP**

### `We cover companies, startups, AI, markets, products, and the work of building them.`

Authority: EDITORIAL

Decision: **KEEP / TIGHTEN ONLY IF THE TAXONOMY PASS REQUIRES IT**

This is direct product information and belongs on About.

## What we publish

### `01 / What we publish`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Coverage`

Authority: FUNCTIONAL

Decision: **KEEP / OPTIONAL**

### `Stories take different forms.`

Authority: NONE / GENERIC

Decision: **REWRITE**

It is a polished but low-information section headline. Replace with a literal heading derived from the section's actual content.

### `Portfilo publishes news, explanations, profiles, analysis, guides, and field notes. The subject decides the format.`

Authority: EDITORIAL TAXONOMY

Decision: **REWRITE**

Reasons:

- the live content-type taxonomy uses `Reported`, `Explained`, `Guide`, `Profile`, `Analysis`, `Perspective`, and `Field Notes`;
- `news` is not a configured content type;
- `Perspective` is omitted;
- `The subject decides the format` is an editorial interpretation that should be stated only if needed after the taxonomy is accurate.

## Topic descriptions

### Business — `Companies, money, markets, strategy, and business models.`

Authority: EDITORIAL TAXONOMY

Decision: **KEEP / TIGHTEN**

### Technology — `Software, fintech, platforms, infrastructure, and devices.`

Authority: EDITORIAL TAXONOMY

Decision: **KEEP / TIGHTEN**

### Startups — `New companies, funding, growth, failure, acquisitions, and early-stage decisions.`

Authority: EDITORIAL TAXONOMY

Decision: **KEEP / TIGHTEN**

### AI — `Models, products, adoption, economics, policy, and work.`

Authority: EDITORIAL TAXONOMY

Decision: **KEEP / TIGHTEN**

### Building — `Product, sales, distribution, pricing, hiring, and operations.`

Authority: EDITORIAL TAXONOMY

Decision: **KEEP / TIGHTEN**

These lines are useful taxonomy descriptions rather than brand slogans. During implementation, check them against actual editorial scope and remove unnecessary overlap rather than rewriting for personality.

## Audience section

### `02 / Who it is for`

Authority: FUNCTIONAL

Decision: **KEEP**

### `People curious about business and technology.`

Authority: APPROVED AUDIENCE POSITION

Decision: **KEEP**

### `That includes people learning the subject, already working in it, or building something themselves.`

Authority: APPROVED AUDIENCE POSITION

Decision: **KEEP / TIGHTEN**

The information is grounded in Portfilo's approved audience scope. Review sentence rhythm, but do not replace it with demographic flattery or marketing segmentation.

### `Reader note`

Authority: FUNCTIONAL

Decision: **KEEP / OPTIONAL**

### `If a term matters, we explain it.`

Authority: APPROVED EDITORIAL POSITION

Decision: **KEEP**, subject to final writing-system pass.

## Standards bridge

### `03 / How we work`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Research & Standards`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Our standards are public.`

Authority: OPERATIONAL

Decision: **KEEP**

### `They cover sourcing, verification, AI use, corrections, and commercial independence.`

Authority: OPERATIONAL

Decision: **KEEP**

### `Read our standards`

Authority: FUNCTIONAL

Decision: **KEEP**

## Founder

`Founder / Louda Tuppal`

Authority: PRODUCT FACT

Decision: **KEEP**

---

# 7. Research & Standards audit

File:

`src/pages/standards.astro`

Overall decision:

**MOSTLY KEEP**

Reason:

This page has the strongest provenance on the site. Its substantive copy is a presentation of canonical research/editorial procedures rather than generated marketing positioning.

## Hero

### `How Portfilo works with evidence.`

Authority: EDITORIAL PROCEDURE

Decision: **KEEP / TIGHTEN**

The line correctly describes the page. Reconsider only if a more literal title improves scanability.

### Hero introductory paragraph

Authority: EDITORIAL PROCEDURE

Decision: **KEEP / TIGHTEN FOR DUPLICATION**

Ensure it does not summarize every section before the reader reaches them.

## Section-level decisions

### `Start as close to the evidence as possible.`

Authority: EDITORIAL PROCEDURE

Decision: **KEEP**

### `Relevance and methodology matter more than a source label alone.`

Authority: EDITORIAL PROCEDURE

Decision: **KEEP**

### `Important claims have to survive a skeptical check.`

Authority: EDITORIAL PROCEDURE

Decision: **KEEP / TIGHTEN**

### `AI can help with the work. It cannot establish the facts.`

Authority: CANONICAL AI RULE

Decision: **KEEP**

### `Assistance is not evidence`

Authority: CANONICAL AI RULE

Decision: **KEEP**

### `Material factual errors are corrected visibly.`

Authority: EDITORIAL PROCEDURE

Decision: **KEEP**

### `A commercial relationship cannot determine the factual conclusion.`

Authority: EDITORIAL PROCEDURE

Decision: **KEEP**

### `Commercial support does not buy an editorial conclusion.`

Authority: EDITORIAL PROCEDURE

Decision: **KEEP**

## Closing

### `The evidence sets the limit.`

Authority: EDITORIAL PRINCIPLE

Decision: **REWRITE OR DELETE**

Reason:

The idea is canonical, but the line functions like a campaign slogan. The preceding sections already establish the policy. During implementation, prefer a literal closing or end the page after the last standard if nothing else is needed.

### Closing paragraph

Authority: EDITORIAL PROCEDURE

Decision: **KEEP / TIGHTEN**, only if the closing section remains.

---

# 8. Subscribe audit

File:

`src/pages/subscribe.astro`

Overall decision:

**FUNCTIONAL COPY IS STRONG; REMOVE DUPLICATION**

## Hero

### `Portfilo Brief / Email`

Authority: FUNCTIONAL

Decision: **KEEP / OPTIONAL**

### `Portfilo Brief`

Authority: PRODUCT NAME

Decision: **KEEP**

### `New Portfilo stories by email.`

Authority: OPERATIONAL

Decision: **KEEP**

## Form

### `01 / Subscribe`, `Email signup`, `Subscribe`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Enter your email. We’ll send a confirmation link.`

Authority: OPERATIONAL

Decision: **KEEP**

### `Email address`

Authority: FUNCTIONAL

Decision: **KEEP**

### `you@example.com`

Authority: FUNCTIONAL

Decision: **KEEP**

### `No fixed schedule yet. Unsubscribe any time. Privacy.`

Authority: OPERATIONAL / LEGAL

Decision: **KEEP** while both operational facts remain true.

### Validation/status messages

- `Enter a valid email address.`
- `Submitting…`
- `Check your inbox. Confirm your email to finish subscribing to Portfilo Brief.`
- `We could not submit your email. Please try again.`

Authority: FUNCTIONAL / OPERATIONAL

Decision: **KEEP / CONSISTENCY PASS**

The messages are direct and action-oriented. During implementation, compare client and API wording so the same failure class does not produce unnecessarily different phrasing.

## Repeated product section

### `02 / Portfilo Brief`

Authority: FUNCTIONAL

Decision: **KEEP / OPTIONAL**

### `New stories by email.`

Authority: OPERATIONAL

Decision: **DELETE / TEST WITHOUT**

The hero already communicates the same thing.

### Schedule / Confirmation / Unsubscribe definition list

Authority: OPERATIONAL

Decision: **KEEP / CONSOLIDATE**

These are real subscription facts. Keep only information not already made clear at the form.

## Provider/privacy section

### `03 / Email`

Authority: FUNCTIONAL

Decision: **DELETE OR MOVE WITH SECTION**

### `Email and unsubscribe`

Authority: OPERATIONAL

Decision: **MOVE / DELETE FROM SUBSCRIBE**

### `beehiiv handles delivery and unsubscribe requests. Every Portfilo Brief email includes an unsubscribe link.`

Authority: OPERATIONAL / PRIVACY

Decision: **MOVE / DELETE FROM SUBSCRIBE**

Reason:

The provider detail is already appropriate on Privacy. The form already states that the reader can unsubscribe. Keeping it here adds process detail after the signup task has already been explained.

---

# 9. Confirmation audit

File:

`src/pages/confirmed.astro`

Overall decision:

**KEEP**

### `Portfilo Brief / Confirmed`

Authority: FUNCTIONAL

Decision: **KEEP / OPTIONAL**

### `Subscription confirmed.`

Authority: OPERATIONAL

Decision: **KEEP**

### `You’re subscribed to Portfilo Brief. New stories will arrive by email.`

Authority: OPERATIONAL

Decision: **KEEP**

### `Read the latest`

Authority: FUNCTIONAL

Decision: **REWRITE ROUTE/ACTION DURING `/stories` IMPLEMENTATION**

Preferred job after `/stories` exists:

> Give the confirmed subscriber a stable path to published stories.

Do not decide the final wording by style invention; choose the simplest control label that accurately describes `/stories`.

---

# 10. 404 audit

File:

`src/pages/404.astro`

Overall decision:

**KEEP**

### `404 / Not found`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Page not found.`

Authority: FUNCTIONAL

Decision: **KEEP**

### `The page may have moved, or the address may be incorrect.`

Authority: FUNCTIONAL

Decision: **KEEP**

### `Read the latest`

Authority: FUNCTIONAL

Decision: **REWRITE ROUTE/ACTION DURING `/stories` IMPLEMENTATION**

Use the stable story index once it exists unless returning home proves more useful.

---

# 11. Privacy audit

File:

`src/pages/privacy.astro`

Overall decision:

**KEEP / VERIFY AGAINST ACTUAL DATA FLOW DURING IMPLEMENTATION**

Reason:

This page is operational/legal copy. Personality is not the goal. Current language is restrained and maps closely to the actual beehiiv/Cloudflare architecture.

Keep:

- `Privacy`;
- explanation of the current website scope;
- Portfilo Brief email handling;
- beehiiv responsibilities;
- Cloudflare hosting/endpoint role;
- unsubscribe instructions;
- last-updated date, updated whenever the substance changes.

Do not rewrite this page merely to make it sound more editorial.

Before final launch, re-verify every provider/data-flow sentence against the deployed implementation and any analytics enabled after this audit.

---

# 12. Story-page interface audit

File:

`src/pages/stories/[slug].astro`

Overall decision:

**KEEP INTERFACE LABELS / FIX METADATA JOBS**

Keep:

- editorial type;
- topic;
- author;
- published;
- updated;
- series / part;
- methodology;
- correction;
- story classification treatment;
- familiar skip-link wording.

Primary change:

- replace the visible use of `description` with the new `dek` field after schema migration.

The article body itself is outside this site-copy audit. C027, C009, and C030 will receive separate story style briefs and rewrites/re-audits after the site system work.

---

# 13. Series-page interface audit

File:

`src/pages/series/[slug].astro`

Overall copy decision:

**MOSTLY KEEP**

The current route is a structured editorial index rather than institutional brand prose.

Keep:

- `Series`;
- status;
- published story count;
- story metadata;
- `Stories`;
- `Series order`;
- `Read story`;
- empty state copy, subject to a final plain-language pass.

Fixture notice copy is appropriate for development, but the fixture itself must not be publicly routable in production.

Series story cards should continue to use `description`, not `dek`, after metadata migration.

---

# 14. Signup API/error copy audit

File:

`functions/api/subscribe.js`

User-facing messages:

- `Method not allowed.`
- `Request not allowed.`
- `Request is too large.`
- `Invalid signup request.`
- `Enter a valid email address.`
- `Email signup is temporarily unavailable. Please try again later.`
- `We could not submit your email. Please try again.`
- `Too many signup attempts. Please try again shortly.`

Authority: FUNCTIONAL / OPERATIONAL

Decision: **KEEP / CONSISTENCY AND SECURITY PASS**

These are literal system states and do not display the institutional-writing problem found elsewhere.

Implementation review should ensure:

- error detail does not expose unnecessary internals;
- client and server copy are consistent for equivalent states;
- accessibility status messages remain concise and actionable.

Console-only messages are developer diagnostics, not brand copy. They should remain factual and specific.

---

# 15. Package/repository metadata

File:

`package.json`

Current description:

> `Portfilo is a Filipino-first media and community company built around practical intelligence for ambitious Filipinos.`

Authority: `NONE / RETIRED POSITIONING`

Decision:

**FIX**

Although this string is not current page copy, it conflicts with the approved content-first/no-tagline architecture and contains retired positioning language.

During implementation, replace it with a literal repository/package description consistent with the current product definition. Do not introduce a new marketing sentence.

---

# 16. Copy-risk summary

## Highest-priority rewrite/delete areas

1. homepage temporary descriptor;
2. homepage repeated Featured/Latest labels;
3. About's generic `Stories take different forms` line;
4. About content-type paragraph, because it no longer matches the schema exactly;
5. Standards closing slogan treatment;
6. Subscribe page duplication and beehiiv/provider explanation that belongs on Privacy;
7. stale package description;
8. C030/C027/C009 story prose — **separate later phase**, not changed by this audit.

## Strongest current copy

The strongest existing site copy is where the writing job is constrained by actual behavior:

- navigation labels other than `Latest`;
- Subscribe form instructions and validation;
- confirmation state;
- 404 explanation;
- Privacy operational language;
- most Standards procedures;
- story metadata labels.

This supports the Writing System's premise: prose improves when the writer has a concrete job and authority rather than a vague request to make Portfilo sound good.

---

# 17. Approved implementation sequence after audit approval

Do not perform these automatically from this audit. Each phase should preserve the audit decisions and validate the result.

## Phase 2A — metadata and information architecture

1. add required `dek` field to story schema;
2. author deliberate `dek` and `description` values for all current story entries;
3. update story page to use `dek`;
4. keep cards/social/search on `description`;
5. add `/stories` index;
6. change global nav `Latest` -> `Stories`;
7. update utility actions that should point to `/stories`;
8. exclude synthetic series fixtures from production routes/sitemap;
9. replace stale `package.json` positioning description;
10. run build and route validation.

## Phase 2B — public site copy

Work surface by surface rather than asking AI for one site-wide rewrite:

1. homepage;
2. About;
3. Standards;
4. Subscribe;
5. confirmation / 404 / utility actions;
6. Privacy verification pass;
7. series/story interface labels if any issue remains.

For every changed institutional line, record its authority:

- canonical document;
- actual behavior;
- explicit editor/founder approval.

No line should be retained because it is merely more polished.

## Phase 3 — three-story writing repair

After the site copy/system implementation passes:

1. create/approve C027 `style-brief.md`, then rewrite/re-audit;
2. create/approve C009 `style-brief.md`, then rewrite/re-audit while preserving its evidence trail;
3. create/approve C030 `style-brief.md`, then rebuild its draft before publication review.

Story research and verified findings remain authoritative. Existing prose does not.

---

# Audit decision

**PASS / READY FOR USER REVIEW**

No public copy or application implementation was changed during this audit.

Recommended next gate:

> Approve or revise this audit, then implement **Phase 2A — metadata and information architecture** before rewriting prose.
