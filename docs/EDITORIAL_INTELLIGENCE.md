# Portfilo Editorial Intelligence v0

_Last updated: 2026-09-10_

_Status: FOUNDER APPROVED / CANONICAL V0_

## Purpose

This document defines the smallest reliable system Portfilo uses to discover current developments worth editorial attention.

Its primary job is **News discovery and monitoring**.

It does not replace:

- `docs/CONTENT_PLANNING.md`;
- `docs/EDITORIAL_STANDARD.md`;
- `docs/RESEARCH_STANDARD.md`;
- `docs/PUBLISHING_STANDARD.md`;
- `docs/WRITING_SYSTEM.md`;
- `docs/EDITORIAL_PACKAGING_STANDARD.md`.

Those documents already govern story selection, evidence, research, writing, packaging, verification, publication, and correction.

The editorial-intelligence layer ends when a development is promoted into Portfilo's existing editorial system.

## Core model

Portfilo v0 uses a hybrid model:

```text
SOURCES
  ↓
AUTOMATIC COLLECTION WHERE PRACTICAL
  ↓
HUMAN SCAN
  ↓
INTERESTING SIGNAL
  ↓
CHECK THE ORIGINAL / AUTHORITATIVE SOURCE
  ↓
NEWS / WATCH / IGNORE
       ↘
        POSSIBLE STORY QUESTION
```

Automation may reduce browsing and repetitive collection work.

Human editorial judgment decides whether a development matters, what can be established, and whether Portfilo should act on it.

## Approved editorial direction

Portfilo remains a business and technology publication.

Its strongest areas of editorial attention are:

### AI + Work

AI products, deployment, workflows, jobs, business economics, governance, and practical consequences inside companies and industries.

AI is a strong current reporting and audience-acquisition wedge. It is not Portfilo's entire identity.

### Startups + Building Companies

Startups, founders, funding, products, distribution, sales, pricing, hiring, operations, business models, expansion, acquisitions, failure, and the mechanics of building companies.

Portfilo is not limited to startups. Established companies belong when a development or operating question is materially useful.

### Digital Economy + Infrastructure

Payments, fintech, IT-BPM, cloud, data centers, connectivity, cybersecurity, platforms, digital regulation, and other systems that enable or constrain technology and business activity.

### Major business and technology developments

A development outside the priority lanes can still belong when it materially changes companies, products, markets, infrastructure, work, or the process of building businesses.

The priority lanes are guides for attention. They are not quotas and must not become artificial eligibility tests.

## Geographic rule

The Philippines is Portfilo's **primary reporting ground, not an artificial boundary**.

Prefer Philippine reporting context when geography materially affects the company, market, regulation, infrastructure, workforce, customer, or consequence being examined.

A significant global development can belong without a manufactured Philippine angle.

This internal reporting emphasis is not a public geographic product promise or tagline.

## News and Stories

Use this simple distinction as the default mental model.

### News

> **What changed?**

News is current, verified, and relatively narrow. Its main value is establishing a material development or current state.

Examples of possible News signals include:

- a funding round;
- an acquisition or shutdown;
- a material product/model launch;
- a regulatory change;
- a significant company expansion;
- a pricing or availability change;
- a major infrastructure project;
- a consequential filing or official dataset release.

A development is not automatically News merely because it is new.

### Stories

> **What is changing underneath?**

Stories may ask why something is happening, how it works, what a pattern means, what a company or industry is doing differently, or what a development reveals.

Story ideas are deliberately open-ended. They may come from:

- observation;
- curiosity;
- lived experience;
- conversations;
- interviews;
- data;
- a recurring pattern;
- several News signals;
- a company, product, industry, or behavior encountered in ordinary life;
- a question the editor simply wants to understand.

The News pipeline is **not** the exclusive source of Story ideas.

When an idea becomes a substantial Story candidate, convert it into an answerable question and use `docs/CONTENT_PLANNING.md`.

## Signal definition

A **signal** is a new piece of information that might deserve editorial attention.

A signal is not yet a verified fact, assignment, headline, or publication decision.

Examples:

- an RSS item;
- an official filing;
- a company announcement;
- a regulator release;
- a newsletter item;
- a credible news report;
- a social post;
- an observed pattern;
- a newly released dataset.

Discovery source and evidentiary weight are separate questions.

A company press release can establish that the company made an announcement. It does not independently prove every performance claim inside the announcement.

A social post can be a useful lead without proving the underlying claim.

`docs/RESEARCH_STANDARD.md` owns evidentiary source hierarchy and claim verification.

## V0 source universe

Start deliberately rather than comprehensively.

A practical initial source map is roughly **25-40 useful sources**, but this is a starting range, not a quota.

Likely source families include:

- Philippine regulators and official agencies;
- official statistics and datasets;
- PSE/company disclosures and investor-relations channels;
- Philippine companies and startups;
- venture/startup organizations where useful;
- major AI labs and technology vendors;
- strong Philippine business/technology reporting;
- strong international business/technology reporting;
- selected research institutions and industry groups;
- selected newsletters;
- social/community sources used mainly for discovery;
- procurement, employment, event, or other operating signals when they serve a real editorial question.

Add a source because it repeatedly produces useful information, not because a newsroom source list feels incomplete without it.

Remove or de-emphasize sources that mostly create noise.

## Triage

After a signal survives the first scan, use one primary decision:

### NEWS

A material development happened, can be established to the required standard, and a current factual update would be useful.

News then follows the fast factual or deeper path in `docs/PUBLISHING_STANDARD.md` depending on the reporting required.

### WATCH

Potentially important, but Portfilo is waiting for something concrete before acting.

Every Watch item should state what would change the decision, such as:

- final regulation;
- implementation date;
- actual rollout;
- company response;
- filing;
- data release;
- availability in market;
- another development confirming a pattern.

### IGNORE

The signal is duplicate, immaterial, too promotional, unsupported, stale, outside current attention, or not worth Portfilo's limited reporting time.

Ignoring weak material is a successful editorial outcome.

### Possible Story question

A News or Watch signal may expose a deeper question. Save that question if useful and route it through `docs/CONTENT_PLANNING.md`.

Do not force every News item to produce a Story.

## First verification step

For a possible News item:

1. open the original or most authoritative available source;
2. establish what actually changed;
3. confirm the relevant date, version, market, scope, or effective date where material;
4. separate the source's own claims from independently established facts;
5. decide whether the development is narrow enough for the fast factual path or requires deeper reporting.

A narrow, undisputed development can sometimes be established by one authoritative primary source.

Disputed, consequential, extraordinary, negative, or materially interested claims may require corroboration, additional context, or precise attribution under the existing research and publishing standards.

There is no mechanical source-count rule.

AI output has zero evidentiary authority.

## Initial operating stack

Portfilo v0 should use free or already-available tools until real usage proves a paid requirement.

### RSS / feed aggregation

Use a free RSS reader as the primary collection surface. The currently evaluated starting option is **Inoreader Free**.

Do not run multiple aggregators by default.

### Newsletters / press email

Use a dedicated Gmail label such as:

`Portfilo / Signals`

Route only useful newsletters or press mail there.

### Alerts

Use Google Alerts only for genuine gaps not covered well by the main source feeds.

Do not create dozens of broad alerts merely to increase volume.

### Signal list

Use one private lightweight list or sheet for signals that survive the first scan.

Minimum useful fields are:

- date;
- signal;
- original/source URL;
- decision;
- short note or Watch trigger.

Do not build an editorial database or custom dashboard for v0.

## Daily routine

A normal News scan is:

```text
OPEN MAIN FEED
  ↓
SCAN NEW ITEMS
  ↓
INTERESTING?
  ↓
OPEN ORIGINAL SOURCE
  ↓
WHAT ACTUALLY CHANGED?
  ↓
NEWS / WATCH / IGNORE
```

Portfilo does not need feed inbox zero.

The objective is to find material developments, not process every item.

## Weekly routine

Once a week, review briefly:

- Watch items;
- repeated developments or emerging patterns;
- sources producing useful signals;
- noisy sources that should be removed or de-emphasized;
- important developments Portfilo discovered late or missed;
- possible Story questions created by repeated News signals.

Do not create publishing quotas from this review.

## Automation boundary

Safe automation may assist with:

- collecting RSS items;
- email filtering;
- alerts;
- obvious duplicate grouping;
- extracting dates, companies, or links;
- summarizing batches while preserving source links;
- reminding the editor about Watch triggers.

Automation must not independently:

- determine whether a claim is true;
- mark evidence verified;
- decide editorial importance as final authority;
- convert PR into factual reporting;
- publish;
- invent a Philippine angle;
- generate a Story simply to fill inventory.

Automate only a repeated manual problem that has actually appeared in use.

## Storage boundary

Raw feed items, routine newsletters, and the ordinary signal inbox do not belong in the repository.

Once a substantial Story is promoted, its formal research belongs in the existing `research/stories/<slug>/` packet structure.

Fast factual News must retain enough source/date/scope information to recover its evidence position under `docs/PUBLISHING_STANDARD.md`.

Do not commit credentials, API keys, private contact information, confidential source material, embargoed documents, or sensitive communications without a deliberate storage and access decision.

## Explicit non-goals

Portfilo v0 does not need:

- a custom scraper;
- a custom News API;
- a source database;
- a CMS for signals;
- an AI news agent;
- autonomous editorial ranking;
- a vector database;
- Elasticsearch;
- a custom dashboard;
- Slack newsroom infrastructure;
- Zapier, Make, or n8n automation by default;
- automated publishing;
- a numeric newsworthiness score;
- a sophisticated deduplication service;
- multiple RSS readers;
- an automated Story-generation pipeline;
- expensive enterprise media monitoring.

These may be reconsidered only after real operating friction establishes a requirement.

## Review triggers

Revisit this system when actual use shows a concrete problem, for example:

- too much irrelevant feed volume;
- important developments are repeatedly missed;
- the same event requires excessive manual deduplication;
- Watch items are not being revisited;
- a paid feed/monitoring feature would clearly save recurring time;
- Portfilo's editorial capacity or team changes materially.

Do not expand the system for hypothetical scale.

## Authority boundary

`docs/PROJECT_STATE.md` owns the active phase and exact next task.

This document owns only upstream News discovery, signal handling, the minimal operating routine, and the handoff into existing Portfilo editorial standards.