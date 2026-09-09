# Portfilo Project State

_Last updated: 2026-09-10_

## Current phase

**EDITORIAL DIRECTION + NEWS INTELLIGENCE V0 OPERATIONAL / NORMAL SCANNER USE**

The corrected and performance-optimized Portfilo v0 website release remains founder-approved and closed.

The founder has approved Editorial Direction + News Intelligence v0 as the primary Portfilo workstream.

`Editorial Packaging Standard Refinement` remains deferred, not canceled.

The active workstream is editorial operations first. It does **not** authorize a taxonomy migration, runtime redesign, CMS, custom newsroom system, paid monitoring stack, automated publishing, or merge to `main`.

## Repository authority

Read in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard/approved decision relevant to the task
6. current runtime source

Mandatory discretionary-decision gate:

`skills/portfilo-anti-slop/SKILL.md`

The repository is the durable source of truth. Do not override current canonical decisions with assumptions from previous chats.

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Verified Cloudflare model:

- `build/portfilo-v0` -> preview/test
- `main` -> production

The documentation/operations work in this phase does not imply a production release.

## Approved product direction

- Portfilo is a business and technology publication.
- News is the current/day-to-day editorial layer.
- Stories is the deeper editorial layer.
- Public topics remain `Business / Technology / Startup / AI` **for now**.
- Portfilo remains free in v0.
- Newsletter acquisition is important but must not dominate publication identity.
- Approved newsletter promise: latest news, a 7-minute read, three times per week.
- Exact send days/times remain open.
- `briefing` and `Portfilo Brief` are not current public acquisition language.
- No individual public author/byline system is part of v0.

A change to the public topic taxonomy is a separate decision because the taxonomy is encoded in documentation, content frontmatter, and `src/content.config.ts`.

Do not migrate topic values without an explicit taxonomy gate.

## Approved internal editorial direction

Portfilo's strongest areas of editorial attention are:

### AI + Work

AI products, deployment, workflows, jobs, economics, governance, and practical consequences inside companies and industries.

### Startups + Building Companies

Startups, founders, accelerators, funding, products, distribution, sales, pricing, hiring, operations, business models, expansion, acquisitions, failure, and the mechanics of building companies.

This is not limited to startups. Established companies belong when a development or operating question is materially useful.

### Digital Economy + Infrastructure

Payments, fintech, IT-BPM, cloud, data centers, connectivity, cybersecurity, platforms, digital regulation, and other systems underneath technology and business activity.

### Major business and technology developments

A material development outside the priority lanes can still belong when it changes companies, products, markets, infrastructure, work, or the process of building businesses.

These are attention priorities, not quotas or public navigation labels.

Geographic rule:

> **The Philippines is Portfilo's primary reporting ground, not an artificial boundary.**

Use Philippine context when geography materially affects the subject. Global developments can belong without a manufactured Philippine angle.

This internal emphasis is not a public geographic positioning promise.

## News and Stories operating model

```text
NEWS
What changed?

STORIES
What is changing underneath?
Why is this happening?
How does this work?
What does this reveal?
```

News is primarily event-driven and uses the fast factual or deeper reporting path depending on what the development requires.

Stories are primarily question-driven. Story ideas may come from observation, curiosity, experience, conversations, data, repeated News signals, or anywhere else a worthwhile question emerges.

The News discovery pipeline is not the exclusive source of Story ideas.

## Editorial intelligence v0

Canonical upstream operating contract:

`docs/EDITORIAL_INTELLIGENCE.md`

Canonical operating source registry:

`docs/EDITORIAL_SOURCE_MAP.md`

Canonical reusable scanner prompt:

`docs/NEWS_SCANNER_PROMPT.md`

Current core flow:

```text
SOURCE MAP + CURRENT WEB SEARCH
  ↓
CHATGPT SCAN / DISCOVERY
  ↓
INTERESTING SIGNAL
  ↓
TRACE TO ORIGINAL / AUTHORITATIVE SOURCE
  ↓
HUMAN EDITORIAL REVIEW
  ↓
NEWS / WATCH / STORY IDEA / IGNORE
```

ChatGPT is the primary v0 discovery surface. It may locate, organize, summarize, compare, and surface possible signals, but AI output has zero evidentiary authority.

Human editorial judgment remains responsible for significance, verification, routing, and publication decisions.

RSS/Inoreader, Gmail, alerts, and direct manual checks are optional supporting inputs rather than required infrastructure.

## Why the operating model changed

The Inoreader experiment was useful but exposed unnecessary integration and source-availability friction:

- many important official and startup sources do not expose useful RSS;
- forcing non-RSS pages into paid or custom monitoring would violate the v0 anti-overengineering direction;
- Inoreader's ChatGPT integration was not reliable enough to make the workflow depend on it;
- the canonical source map remains useful regardless of collection mechanism.

Therefore Inoreader is retained only as an optional reading surface for the feeds already configured. The primary workflow is supervised ChatGPT-led source scanning plus original-source tracing.

This is a workflow simplification, not a change to research or publishing standards.

## Repository conflict/reconciliation state

### Already aligned and unchanged

- `docs/RESEARCH_STANDARD.md` owns evidentiary source hierarchy, source maps for assigned stories, evidence ledgers, contradiction search, interviews, verification, and story outcomes.
- `docs/PUBLISHING_STANDARD.md` owns the substantial and fast-factual publishing paths.
- `docs/WRITING_SYSTEM.md` keeps form dependent on reader need and evidence rather than a universal Story template.
- `docs/EXPLAINED_STANDARD.md` rejects a universal explainer structure.
- `docs/EDITORIAL_PACKAGING_STANDARD.md` remains valid for headline/dek/metadata behavior.
- the current News/Stories route and article/archive implementation does not need redesign for this workstream.
- `BACKLOG.md` keeps custom CMS, internal source database, editorial workflow UI, and other newsroom tooling out of v0 unless proven necessary.

### Reconciled during Editorial Intelligence v0

- Editorial Direction + News Intelligence replaced Packaging Refinement as the immediate workstream;
- Story ideas are explicitly allowed to originate outside News discovery;
- the Editorial Standard now uses the approved Philippines-primary/not-Philippines-only direction;
- invalid `Building` runtime-topic wording was removed;
- `docs/REFERENCE_SOURCES.md` is distinguished from the operational source map;
- `docs/EDITORIAL_SOURCE_MAP.md` owns the monitored source universe and monitoring priority;
- the primary discovery method is now ChatGPT-led source scanning rather than RSS/Inoreader;
- `docs/NEWS_SCANNER_PROMPT.md` provides the reusable scanner invocation while deferring substantive authority to the canonical standards.

### Known adjacent authority hygiene

- one current draft Story explicitly describes Portfilo through the current four public topics. Any later taxonomy change must audit content copy as well as schema/docs;
- `docs/COPY_STYLE.md` contains stale route/header facts from an earlier Subscribe-page state;
- `docs/SOCIAL_DISTRIBUTION.md` contains legacy `Portfilo Brief` naming.

These do not block Editorial Intelligence v0.

## Current source-map state

The operating source map contains 32 fixed starting sources across:

- Philippine primary/official sources;
- Philippine secondary discovery sources;
- startup/venture discovery sources;
- global AI primary sources;
- global secondary discovery sources.

The startup layer explicitly includes Y Combinator, Kaya Founders, and Kickstart Ventures to catch signals such as accelerator acceptance, batch participation, Philippine startup funding, and ecosystem developments.

Company/startup official channels remain on-demand rather than permanent inventory.

Monitoring labels `CORE / WATCH / TARGETED` describe attention frequency only. They do not replace evidentiary tiers in `docs/RESEARCH_STANDARD.md`.

## Current supporting stack

### ChatGPT News Scanner

Primary v0 discovery surface.

`docs/NEWS_SCANNER_PROMPT.md` is founder-approved and frozen for operational v0 use.

### Private signal list

A private Google Sheet named `Portfilo Signals` exists outside the repository.

Current columns:

`Date / Signal / Source URL / Decision / Note or Watch trigger`

Decision values:

`NEWS / WATCH / STORY IDEA / IGNORE`

### Gmail

The external label `Portfilo / Signals` exists.

Automatic filters are not assumed or required.

### Inoreader

The founder completed a first-pass Inoreader setup with useful feeds where available.

It is optional supporting infrastructure only. Do not make the workflow depend on its integration, folder state, or coverage.

### Alerts

No broad alert set is currently required. Add an alert only when repeated scanner use demonstrates a specific gap.

## Pilot history

### Manual pilot

A first manual News pilot was completed on 2026-09-10 and retained five signals to exercise the triage model.

It demonstrated that startup funding and accelerator participation are valid signals, original sources should replace discovery articles where practical, not every launch deserves News, and Philippine AI/infrastructure developments can generate both News and deeper Story questions.

### ChatGPT News Scanner pilot

A live ChatGPT-led scanner pilot was completed on 2026-09-10 against the canonical source map plus selective broader web search.

The pilot passed the approved checks:

- it surfaced a fresh Philippine business/technology transaction through PSE EDGE and traced it to primary disclosure evidence;
- it surfaced the current Philippine AI+ Infrastructure Masterplan and traced the development to authoritative reporting with the DICT masterplan source identified;
- it surfaced a major global AI/startup funding development and traced it to the company's own announcement plus independent reporting;
- it retained global developments without inventing a Philippine angle;
- it did not fabricate a fresh Philippine startup/funding signal when none surfaced strongly within the scan window;
- output could remain selective rather than becoming a headline dump.

No pilot candidate was authorized for publication by the scanner test itself.

The scanner prompt is therefore frozen as operational v0.

## Current production/staging facts

### News

Until real News inventory replaces them, existing synthetic News fixtures may render only as clearly labeled, non-clickable layout placeholders.

They must not create fake article routes or Article metadata and must be replaced before broad-audience launch.

### Stories

The current Story inventory remains one published Story and three draft Story previews.

Draft status is not silently changed to published. Draft routes remain `noindex, nofollow` and omit published-story canonical/social/article metadata.

Existing Story drafts are separate editorial artifacts. This workstream does not automatically rewrite or publish them.

### Editorial imagery

The production image system supports image and image-less archive/article states.

Whether published News and Stories should normally require an editorial image remains an open packaging decision deferred with Editorial Packaging Standard Refinement.

## Validation status

**WEBSITE RELEASE REMAINS CLOSED / PRODUCTION FOUNDER-APPROVED.**

Current scanner/source-map work is documentation/operations-only. No new runtime validation pass is implied.

Do not claim `npm run check` or `npm run build` passed for documentation commits unless those commands were actually run against that state.

## Active work plan

1. **Repository conflict audit** - complete.
2. **Canonical editorial-direction and intelligence documentation** - complete.
3. **Initial source map** - complete and refined from pilot evidence.
4. **Gmail signal label + private signal sheet** - activated.
5. **Manual News pilot** - complete.
6. **Inoreader first-pass setup** - founder-completed; optional support only.
7. **ChatGPT-led workflow reconciliation** - complete.
8. **Reusable News Scanner prompt** - founder-approved and frozen.
9. **Live ChatGPT News Scanner pilot** - complete / PASS.
10. **Normal scanner operation** - active.
11. **Review real friction after repeated use** - change sources or tooling only from observed failure.

## Exact next task

**Use the Portfilo News Scanner in Normal Operation**

Start or maintain a dedicated scanner conversation using `docs/NEWS_SCANNER_PROMPT.md`.

Normal invocation:

```text
Run the Portfilo News scan.
```

For retained `NEWS` candidates, explicitly choose whether to move the item into deeper research or the fast factual path under `docs/PUBLISHING_STANDARD.md`.

Use `Portfilo Signals` only for retained signals worth remembering.

After repeated real scans expose a pattern, review:

- missed developments;
- weak/noisy source families;
- startup/funding/accelerator coverage;
- whether Watch items are being revisited;
- whether any alert or paid capability has a measurable recurring benefit.

Do not change the scanner prompt or source map from one-off search results alone.

No paid upgrade, scraper, News API, autonomous agent, custom dashboard, automated ranking, n8n/Zapier/Make workflow, or database is authorized.

## Deferred / separate workstreams

Remain separate unless explicitly promoted:

- Editorial Packaging Standard Refinement, including the editorial-image requirement question;
- individual News reporting and publication;
- individual Story development and publication;
- distribution execution and platform posting;
- provider-side newsletter naming/template changes;
- final custom-domain cutover;
- broad-audience launch;
- topic taxonomy migration;
- search, filters, accounts, CMS, community, analytics infrastructure, or other post-v0 expansion.