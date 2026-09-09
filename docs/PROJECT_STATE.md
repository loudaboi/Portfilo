# Portfilo Project State

_Last updated: 2026-09-10_

## Current phase

**EDITORIAL DIRECTION + NEWS INTELLIGENCE V0 ACTIVE / FIRST NEWS PILOT RUNNING**

The corrected and performance-optimized Portfilo v0 website release remains founder-approved and closed.

The founder has approved Editorial Direction + News Intelligence v0 as the primary Portfilo workstream.

This supersedes `Editorial Packaging Standard Refinement` as the immediate task. The packaging refinement remains a valid deferred editorial task and is not canceled.

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

`main` remains the production release boundary for future runtime changes.

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

Default mental model:

```text
NEWS
What changed?

STORIES
What is changing underneath?
Why is this happening?
How does this work?
What does it reveal?
```

News is primarily event-driven and uses the fast factual or deeper reporting path depending on what the development requires.

Stories are primarily question-driven. Story ideas may come from observation, curiosity, experience, conversations, data, repeated News signals, or anywhere else a worthwhile question emerges.

The News discovery pipeline is not the exclusive source of Story ideas.

## Editorial intelligence v0

Canonical upstream operating contract:

`docs/EDITORIAL_INTELLIGENCE.md`

Canonical operating source registry:

`docs/EDITORIAL_SOURCE_MAP.md`

Core flow:

```text
SOURCES
  ↓
AUTOMATIC COLLECTION WHERE PRACTICAL
  ↓
HUMAN SCAN
  ↓
INTERESTING SIGNAL
  ↓
CHECK ORIGINAL / AUTHORITATIVE SOURCE
  ↓
NEWS / WATCH / IGNORE
       ↘
        POSSIBLE STORY QUESTION
```

Automation may collect and organize. Human editorial judgment remains responsible for significance, verification, routing, and publication decisions.

Initial v0 uses free or already-available tools and a deliberately small source universe. No custom newsroom infrastructure is authorized.

## Repository conflict audit

A repository-level audit was performed before promoting this workstream.

### Already aligned

The following existing systems remain valid and should not be rebuilt:

- `docs/RESEARCH_STANDARD.md` already owns evidentiary source hierarchy, source maps for assigned stories, evidence ledgers, contradiction search, interviews, verification, and story outcomes.
- `docs/PUBLISHING_STANDARD.md` already owns the two-speed substantial/fast-factual publishing model.
- `docs/WRITING_SYSTEM.md` already keeps form dependent on reader need and evidence rather than a universal Story template.
- `docs/EXPLAINED_STANDARD.md` already rejects a universal explainer structure.
- `docs/EDITORIAL_PACKAGING_STANDARD.md` remains valid for headline/dek/metadata behavior.
- the current News/Stories route and article/archive implementation does not need redesign for this workstream.
- `BACKLOG.md` already keeps custom CMS, internal source database, editorial workflow UI, and other newsroom tooling out of v0 unless proven necessary.

### Reconciled during this phase

- the previous exact-next-task authority was replaced with Editorial Direction + News Intelligence v0;
- `docs/CONTENT_PLANNING.md` now explicitly allows Story ideas to originate from observation, curiosity, experience, conversations, data, News signals, or other worthwhile questions rather than requiring a News signal;
- `docs/EDITORIAL_STANDARD.md` now uses the approved Philippines-primary/not-Philippines-only reporting direction rather than the narrower old `ambitious Filipinos` mission language;
- `docs/EDITORIAL_STANDARD.md` no longer treats `Building` as a runtime/public topic value;
- `docs/REFERENCE_SOURCES.md` distinguishes decision-reference sources from the operational newsroom source map and records the re-check rule for changing free-tool limits;
- `docs/EDITORIAL_SOURCE_MAP.md` owns the monitored source universe and collection defaults.

### Known dependencies / deferred hygiene

- one current draft Story explicitly describes Portfilo through the current four public topics. Any later taxonomy change must therefore audit content copy as well as schema/docs;
- `docs/COPY_STYLE.md` contains stale route/header facts from an earlier Subscribe-page state even though current route authority has retired `/subscribe` and the persistent header Subscribe CTA;
- `docs/SOCIAL_DISTRIBUTION.md` contains legacy `Portfilo Brief` naming even though current newsletter authority uses `Portfilo newsletter`.

The last two items are adjacent authority-hygiene issues. They do not block Editorial Intelligence v0. Later maintenance should reconcile them without reopening the underlying product decisions.

## Current source-map state

The initial operating source map now contains 32 fixed sources across:

- Philippine primary/official sources;
- Philippine secondary discovery sources;
- explicit startup/venture discovery sources;
- global AI primary sources;
- global secondary discovery sources.

The first pilot exposed a concrete startup-discovery gap, so the source map now explicitly includes:

- Y Combinator Startup Directory / Launch YC / Demo Day;
- Kaya Founders Insights + Portfolio;
- Kickstart Ventures Insights.

This is intended to catch developments such as accelerator acceptance, batch participation, Philippine startup funding, and portfolio/company signals without adding a permanent feed for every startup.

Company/startup official channels remain on-demand rather than permanent feed inventory so the default system does not become a PR firehose.

Monitoring labels `CORE / WATCH / TARGETED` describe attention frequency only. They do not replace the evidentiary tiers in `docs/RESEARCH_STANDARD.md`.

## Free gathering stack: current operational state

### Gmail

Created external label:

`Portfilo / Signals`

The label exists. Automatic Gmail filters are **not** claimed as configured. Add newsletters or press mail only after they prove useful.

### Private signal list

Created a private Google Sheet outside the repository:

`Portfilo Signals`

Current columns:

`Date / Signal / Source URL / Decision / Note or Watch trigger`

The Sheet uses a constrained decision field:

`NEWS / WATCH / STORY IDEA / IGNORE`

Raw signal operations stay outside the repository.

### Inoreader

Inoreader is connected for the current workflow, but do **not** claim that the source-map subscriptions or four folder structure are configured until they are verified inside Inoreader.

The intended folders remain:

- `PH - Primary`
- `PH - News`
- `AI - Primary`
- `Global - News`

Subscribe only where Inoreader detects a useful public feed. Keep non-RSS sources manual rather than paying for web monitoring or building a scraper.

### Gap alerts

No Google Alert or extra alert is required merely because the feature exists.

The first pilot did not yet demonstrate a repeated gap that requires broad alerts. Add one only when repeated use shows the fixed source map misses a class of developments.

## First manual News pilot

First live scan completed on 2026-09-10.

Five signals were deliberately retained in the private sheet to exercise the triage model:

- three `NEWS` candidates;
- one `STORY IDEA` originating from an older startup funding signal;
- one `IGNORE` decision for a launch that did not yet show enough consequence or information gap.

The pilot demonstrated several useful behaviors:

1. Philippine AI/infrastructure policy can produce current News and larger Story patterns.
2. Listed-company/financial disclosures can surface major fintech/company developments before relying on generic secondary summaries.
3. Major global AI launches belong when they materially affect Portfilo's approved beats, but generic product recaps remain weak.
4. Startup funding and YC/accelerator participation are valid Portfilo News signals.
5. Not every startup/app launch deserves News; `IGNORE` is part of the operating model.
6. The original source should replace a secondary discovery article whenever practical before a signal is promoted.

The pilot did **not** authorize publication of any candidate. A `NEWS` decision in the signal sheet means the development is worth moving into the existing verification/publishing path, not that an article is ready to publish.

## Current production/staging facts

### News

Until real News inventory replaces them, the existing synthetic News fixtures may render strictly as clearly labeled, non-clickable layout placeholders.

They must not create fake article routes or Article metadata and must be replaced before broad-audience launch.

### Stories

The current Story inventory is one published Story and three draft Story previews.

Draft handling remains explicit:

- draft status is not silently changed to published;
- draft items are visibly labeled;
- draft routes remain `noindex, nofollow`;
- draft routes omit published-story canonical/social/article metadata.

Existing Story drafts are separate editorial artifacts. This workstream does not automatically rewrite or publish them.

### Editorial imagery

The production image system supports both image and image-less archive/article states.

Astro's native image pipeline remains the canonical runtime path for editorial images.

Whether published News and Stories should normally require an editorial image remains an open packaging decision. That question stays deferred with Editorial Packaging Standard Refinement.

## Closed release state

The released v0 includes the founder-approved shared News/Stories archive and article systems, responsive typography, newsletter acquisition surfaces, editorial imagery pipeline, navigation/performance work, and final homepage corrections.

No React/framework migration, SPA router, service worker, external image CDN, performance package, broad cache layer, CMS, database, or speculative infrastructure was added.

## Validation status

**WEBSITE RELEASE REMAINS CLOSED / PRODUCTION FOUNDER-APPROVED.**

This Editorial Direction + News Intelligence work remains documentation/operations-only unless a later explicit gate authorizes runtime changes.

Do not claim `npm run check` or `npm run build` passed for documentation commits unless those commands were actually run against that state. No runtime validation pass is created by documentation-only work.

## Active work plan

1. **Repository conflict audit** - complete.
2. **Canonical editorial-direction and intelligence documentation** - complete.
3. **Initial source map** - complete and refined once from pilot evidence.
4. **Gmail signal label + private signal sheet** - activated.
5. **First manual News pilot** - complete.
6. **Inoreader source subscription/folder setup** - not yet verified complete.
7. **Continue manual News pilot** - active once feed collection is configured; evaluate noise/misses over real use.
8. **Review real friction** - remove noisy sources, add missing sources, identify repeated manual problems.
9. **Automate only proven friction** - no speculative newsroom tooling.

## Exact next task

**Complete Inoreader Source Subscription Setup + Continue Daily News Pilot**

Use `docs/EDITORIAL_SOURCE_MAP.md` as the checklist.

Next operating steps:

1. verify/create the four Inoreader folders: `PH - Primary`, `PH - News`, `AI - Primary`, `Global - News`;
2. add only source-map pages for which Inoreader detects a useful public feed;
3. place startup/venture discovery sources in the existing folders rather than adding a fifth folder by default;
4. leave non-RSS official sources as manual `WATCH`/`TARGETED` checks;
5. use the private `Portfilo Signals` Sheet only for signals that survive the first scan;
6. continue real News scans and record `NEWS / WATCH / STORY IDEA / IGNORE` only when useful;
7. after enough real use to expose a pattern, review noise, missed developments, and whether any alert or paid capability is actually justified.

No paid upgrade, scraper, News API, AI agent, custom dashboard, automated ranking, n8n/Zapier/Make workflow, or database is authorized.

Individual `NEWS` candidates remain separate editorial assignments. Do not draft or publish them merely because they were surfaced by the pilot.

## Deferred / separate workstreams

Remain separate unless explicitly promoted:

- Editorial Packaging Standard Refinement, including the open editorial-image requirement question;
- individual News reporting and publication;
- individual Story development and publication;
- distribution execution and platform posting;
- provider-side newsletter naming/template changes;
- final custom-domain cutover;
- broad-audience launch;
- topic taxonomy migration;
- search, filters, accounts, CMS, community, analytics infrastructure, or other post-v0 expansion.
