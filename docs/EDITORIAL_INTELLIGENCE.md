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

Portfilo v0 uses a ChatGPT-led discovery workflow:

```text
CANONICAL SOURCE MAP + CURRENT WEB SEARCH
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

ChatGPT may locate, organize, summarize, compare, and surface possible signals. It does not make evidence true.

Human editorial judgment remains responsible for significance, verification, routing, and publication decisions.

RSS readers, newsletters, alerts, and direct manual checks are optional supporting inputs. They are not required infrastructure.

## Approved editorial direction

Portfilo remains a business and technology publication.

Its strongest areas of editorial attention are:

### AI + Work

AI products, deployment, workflows, jobs, business economics, governance, and practical consequences inside companies and industries.

AI is a strong current reporting and audience-acquisition wedge. It is not Portfilo's entire identity.

### Startups + Building Companies

Startups, founders, accelerators, funding, products, distribution, sales, pricing, hiring, operations, business models, expansion, acquisitions, failure, and the mechanics of building companies.

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

## News, Why, and Hustle

Use this simple distinction as the default mental model.

### News

> **What changed?**

News is current, verified, and relatively narrow. Its main value is establishing a material development or current state.

Examples of possible News signals include:

- a funding round;
- accelerator or Y Combinator acceptance when materially useful;
- an acquisition or shutdown;
- a material product/model launch;
- a regulatory change;
- a significant company expansion;
- a pricing or availability change;
- a major infrastructure project;
- a consequential filing or official dataset release.

A development is not automatically News merely because it is new.

### Why

> **Why is this happening? How does this work? What is changing underneath?**

Why is question-led deeper work. It may examine mechanisms, systems, industries, patterns, contradictions, causes, consequences, or what several developments reveal.

### Hustle

> **Who is building or operating it, and how?**

Hustle is people-led reported work about founders, operators, and business owners. It should examine what was actually built or operated, the decisions and constraints involved, and what the reporting can establish rather than functioning as promotional success-story content.

Story ideas remain deliberately open-ended. They may come from observation, curiosity, lived experience, conversations, interviews, data, recurring patterns, News signals, or any worthwhile question.

The News pipeline is **not** the exclusive source of deeper editorial ideas.

When an idea becomes a substantial candidate, convert it into an answerable reporting question and use `docs/CONTENT_PLANNING.md`. The eventual public section may be Why or Hustle depending on the actual editorial job.

## Signal definition

A **signal** is a new piece of information that might deserve editorial attention.

A signal is not yet a verified fact, assignment, headline, or publication decision.

Examples include:

- an official filing;
- a company announcement;
- a regulator release;
- a credible news report;
- an RSS item;
- a newsletter item;
- a social post;
- an observed pattern;
- a newly released dataset;
- a current web-search result pointing to a potentially relevant development.

Discovery source and evidentiary weight are separate questions.

A search result or AI summary is a lead, not evidence. A company press release can establish that the company made an announcement, but does not independently prove every performance claim inside it.

`docs/RESEARCH_STANDARD.md` owns evidentiary source hierarchy and claim verification.

## V0 source universe

`docs/EDITORIAL_SOURCE_MAP.md` is the canonical starting source universe.

The scanner should begin there, but it may use broader current web search when needed to:

- catch a material development the fixed source list missed;
- locate the original source behind secondary reporting;
- corroborate consequential claims;
- find relevant context or a more authoritative record.

Do not mechanically open every source merely to prove that it was checked.

Add a source to the canonical map only when repeated use shows it consistently produces useful signals or fills a demonstrated gap.

## Triage

After a signal survives the first scan, use one primary decision:

### NEWS

A material development happened, can be established to the required standard, and a current factual update would be useful.

News then follows the fast factual or deeper path in `docs/PUBLISHING_STANDARD.md` depending on the reporting required.

### WATCH

Potentially important, but Portfilo is waiting for something concrete before acting.

Every Watch item should state what would change the decision, such as final regulation, implementation, rollout, filing, response, data release, market availability, or another development confirming a pattern.

### STORY IDEA

The signal exposes a deeper question, mechanism, contradiction, pattern, person/company path, or consequence worth considering through `docs/CONTENT_PLANNING.md`.

`STORY IDEA` remains a private scanner/Sheet label. It is not a public section. A promoted candidate may become Why or Hustle after editorial planning.

A Story Idea is not an assignment and does not need to originate in News.

### IGNORE

The signal is duplicate, immaterial, too promotional, unsupported, stale, outside current attention, or not worth Portfilo's limited reporting time.

Ignoring weak material is a successful editorial outcome.

## First verification step

For a possible News item:

1. find the original or most authoritative available source;
2. establish what actually changed;
3. confirm the relevant date, version, market, scope, amount, or effective date where material;
4. separate the source's own claims from independently established facts;
5. seek corroboration or stronger context when the claim is disputed, consequential, extraordinary, negative, or materially interested;
6. decide whether the development is narrow enough for the fast factual path or requires deeper reporting.

A narrow, undisputed development can sometimes be established by one authoritative primary source.

There is no mechanical source-count rule.

**AI output has zero evidentiary authority.**

## Primary v0 operating stack

### ChatGPT News Scanner

The primary discovery surface is a dedicated ChatGPT conversation using `docs/NEWS_SCANNER_PROMPT.md`.

The scanner reads current canonical repository authority, starts from `docs/EDITORIAL_SOURCE_MAP.md`, searches current public information, traces serious candidates to original sources, and returns only retained signals.

The scanner must not publish, invent facts, or lower the editorial bar to fill output.

### Private signal list

Use the private `Portfilo Signals` Sheet for signals worth retaining after first-pass triage.

Minimum fields:

- date;
- signal;
- original/source URL;
- decision;
- short note or Watch trigger.

Do not build an editorial database or custom dashboard for v0.

### Gmail

`Portfilo / Signals` may collect useful newsletters or press mail that repeatedly produce relevant developments.

It is an optional discovery input, not a required daily inbox.

### RSS / Inoreader

Inoreader may remain as optional supporting infrastructure for the useful public feeds already configured.

It is **not** the primary collection surface and the News workflow must not depend on its ChatGPT integration, folder state, or availability.

Do not spend time forcing non-RSS sources into it or paying for web-feed monitoring.

### Alerts

Use alerts only if repeated scanner use demonstrates a specific recurring gap.

Do not create broad alerts merely to increase volume.

## Normal scanner routine

When the editor says:

> **Run the Portfilo News scan.**

The scanner should:

1. inspect the canonical Portfilo authority needed for the task;
2. use the source map as the starting universe;
3. prioritize developments since the previous scan in that conversation, or roughly the last 24-48 hours if no prior scan exists;
4. broaden web search selectively where it improves coverage or source tracing;
5. retain only developments that survive a first editorial relevance check;
6. trace serious candidates to original or authoritative evidence;
7. classify them as `NEWS`, `WATCH`, `STORY IDEA`, or `IGNORE` where retaining an Ignore teaches something useful;
8. return a compact, source-linked result rather than a headline dump.

The objective is to find material developments, not to process the entire internet.

## Weekly routine

Once a week, review briefly:

- Watch items;
- repeated developments or emerging patterns;
- source-map gaps;
- sources producing useful signals;
- noisy or low-value inputs;
- important developments Portfilo discovered late or missed;
- possible deeper reporting questions created by repeated signals.

Do not create publishing quotas from this review.

## Automation boundary

Safe automation may assist with collection, obvious duplicate grouping, extracting dates/companies/links, batch summaries with source links, and Watch reminders.

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

Raw searches, routine feed items, newsletters, and the ordinary signal inbox do not belong in the repository.

Once a substantial assignment is promoted, its formal research belongs in the existing `research/stories/<slug>/` packet structure. The internal research path name does not define the public section.

Fast factual News must retain enough source/date/scope information to recover its evidence position under `docs/PUBLISHING_STANDARD.md`.

Do not commit credentials, API keys, private contact information, confidential source material, embargoed documents, or sensitive communications without a deliberate storage and access decision.

## Explicit non-goals

Portfilo v0 does not need a custom scraper, News API, source database, CMS for signals, autonomous AI news agent, autonomous editorial ranking, vector database, Elasticsearch, custom dashboard, Slack newsroom, Zapier/Make/n8n workflow, automated publishing, numeric newsworthiness score, sophisticated deduplication service, multiple RSS readers, automated Story-generation pipeline, or enterprise monitoring platform.

A dedicated ChatGPT scanner is a supervised research workflow, not an autonomous newsroom agent.

## Review triggers

Revisit this system when actual use shows a concrete problem, for example:

- important developments are repeatedly missed;
- search results are consistently too noisy;
- the same event requires excessive manual deduplication;
- Watch items are not being revisited;
- one source family is consistently under-covered;
- a paid capability would clearly save recurring time;
- Portfilo's editorial capacity or team changes materially.

Do not expand the system for hypothetical scale.

## Authority boundary

`docs/PROJECT_STATE.md` owns the active phase and exact next task.

This document owns only upstream News discovery, signal handling, the minimal operating routine, and the handoff into existing Portfilo editorial standards.