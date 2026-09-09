# Portfilo Editorial Source Map v0

_Last reviewed: 2026-09-10_

_Status: INITIAL OPERATING SOURCE MAP / v0_

## Purpose

This is Portfilo's first deliberately small source universe for current News discovery.

It supports `docs/EDITORIAL_INTELLIGENCE.md` and does not replace the evidentiary hierarchy in `docs/RESEARCH_STANDARD.md`.

The source map answers:

> **Where should Portfilo look regularly so material developments are less likely to be missed?**

It does not answer whether a claim is true. Discovery source and evidentiary weight remain separate questions.

## Operating rules

1. Start small. This list is intentionally below the available free-tool ceiling.
2. Prefer primary Philippine sources for developments they directly control or record.
3. Use strong secondary reporting for discovery, context, corroboration, and leads.
4. A company, regulator, industry association, or AI lab is primary evidence for what it announced or recorded. It is not independent proof of every claim it makes.
5. Add a source only when it repeatedly produces useful signals or fills a demonstrated gap.
6. Remove or de-emphasize sources that mostly create noise.
7. Do not create a second source-credibility tier system here. `docs/RESEARCH_STANDARD.md` owns evidentiary tiers.
8. Do not force every source into RSS. If a useful source has no public feed, keep it as a manual Watch source rather than paying for monitoring or building a scraper.

## Monitoring labels

These labels describe **how often Portfilo should look**, not how credible the source is.

- `CORE` — high-frequency source worth scanning in the normal News routine.
- `WATCH` — useful source checked periodically or when its subject becomes active.
- `TARGETED` — consult when a specific company, policy, filing, procurement, or question makes it relevant.

## Initial source universe

### Philippine primary and official sources

| Source | Monitoring | Main use | Collection default |
|---|---|---|---|
| PSE EDGE — https://edge.pse.com.ph/ | CORE | Listed-company material disclosures, transactions, acquisitions, press releases, financial and corporate events | Public feed if detected; otherwise direct/manual search |
| Bangko Sentral ng Pilipinas Media & Research — https://www.bsp.gov.ph/SitePages/MediaAndResearch/MediaList.aspx?TabId=1 | CORE | Banking, payments, monetary/financial developments, official surveys and releases | Public feed if detected; otherwise direct page |
| Philippine Statistics Authority Press Releases — https://psa.gov.ph/press-releases | WATCH | Labor, prices, trade, household, demographic and economic data | Public feed if detected; otherwise periodic page scan |
| Securities and Exchange Commission — https://www.sec.gov.ph/ | WATCH | Corporate regulation, advisories, securities and company-regulatory developments | Public feed if detected; otherwise periodic page scan |
| Philippine Competition Commission News — https://www.phcc.gov.ph/news | WATCH | Mergers, competition rules, market-concentration and antitrust developments | Public feed if detected; otherwise periodic page scan |
| National Privacy Commission Advisories & Circulars — https://privacy.gov.ph/pips-and-pics/advisories-circulars/ | WATCH | Privacy, AI/data processing, cybersecurity-adjacent regulation | Public feed if detected; otherwise periodic page scan |
| Energy Regulatory Commission Press Releases — https://www.erc.gov.ph/Press-Releases | WATCH | Electricity regulation, power costs, market rules and infrastructure constraints | Public feed if detected; otherwise periodic page scan |
| Department of Energy News & Updates — https://doe.gov.ph/news | WATCH | Energy policy, grid/infrastructure, auctions and energy conditions relevant to digital infrastructure | Public feed if detected; otherwise periodic page scan |
| Board of Investments — https://boi.gov.ph/ | WATCH | Approved investments, strategic sectors, AI/data-center/industrial investment signals | Public feed if detected; otherwise periodic page scan |
| Philippine Economic Zone Authority Press Releases — https://www.peza.gov.ph/press-releases | WATCH | Ecozone investments, IT-BPM, manufacturing and expansion projects | Public feed if detected; otherwise periodic page scan |
| DOST-PCIEERD News — https://pcieerd.dost.gov.ph/news/ | WATCH | Startups, R&D, commercialization, emerging technology and innovation programs | Public feed if detected; otherwise periodic page scan |
| PhilGEPS Open Opportunities — https://notices.philgeps.gov.ph/GEPSNONPILOT/Tender/SplashOpenOpportunitiesUI.aspx?ClickFrom=OpenOpp&men= | TARGETED | Government technology, software, cloud, cybersecurity and infrastructure procurement signals | Manual targeted search |
| IPOPHL News — https://www.ipophil.gov.ph/news/ | WATCH | Intellectual property, innovation, digital/AI copyright and commercialization signals | Public feed if detected; otherwise periodic page scan |
| Fiscal Incentives Review Board — https://firb.gov.ph/ | WATCH | Tax incentives and investment-policy changes affecting high-value technology/infrastructure projects | Public feed if detected; otherwise periodic page scan |
| Department of Information and Communications Technology — https://dict.gov.ph/ | WATCH | National digital policy, connectivity, cybersecurity, AI and e-government developments | Direct official-site check; use official PCO releases/documents as a verification fallback when the current DICT newsroom is difficult to access |
| IBPAP Knowledge Hub — https://ibpap.org/knowledge-hub | WATCH | IT-BPM workforce, industry data, AI/work and sector operating signals | Periodic direct check; treat association claims as interested industry evidence |

### Philippine secondary discovery sources

| Source | Monitoring | Main use | Collection default |
|---|---|---|---|
| BusinessWorld Technology — https://www.bworldonline.com/technology/ | CORE | Philippine technology, enterprise IT, AI, telecom and infrastructure discovery | RSS/feed if available |
| BusinessWorld BW Launchpad — https://www.bworldonline.com/bw-launchpad/ | CORE | Philippine startups, founders, funding, MSMEs and company-building signals | RSS/feed if available |
| Newsbytes.PH — https://newsbytes.ph/ | CORE | Specialist Philippine technology, cybersecurity, startups, digital policy and product/company developments | RSS/feed if available |

Secondary reporting is a discovery and context layer. Trace material claims to primary evidence when the story requires it.

### Global AI primary sources

| Source | Monitoring | Main use | Collection default |
|---|---|---|---|
| OpenAI News — https://openai.com/news/ | CORE | Material model/product, adoption, company, safety and engineering developments | RSS/feed if available |
| Anthropic Newsroom — https://www.anthropic.com/news | CORE | Claude/model, product, company, policy and safety developments | RSS/feed if available |
| Google DeepMind News — https://deepmind.google/blog/ | CORE | Gemini/model, research, product and safety developments | RSS/feed if available |
| Microsoft Official Blog — https://blogs.microsoft.com/ | WATCH | Enterprise AI, cloud, infrastructure, security and business adoption | RSS/feed if available |
| Meta AI — https://ai.meta.com/ | WATCH | Meta model/product, agent and AI-platform developments | RSS/feed if available |
| NVIDIA Newsroom — https://nvidianews.nvidia.com/ | WATCH | AI compute, chips, infrastructure, data-center economics and platform developments | RSS/feed if available |
| Hugging Face Blog — https://huggingface.co/blog | WATCH | Open-model ecosystem, tooling and technical/open-source signals | RSS/feed if available; prioritize official/team material over arbitrary community posts |

Vendor and lab channels are primary evidence for their own releases and claims. Performance, adoption, safety and business-impact claims may require independent evidence before Portfilo states them as established fact.

### Global secondary discovery sources

| Source | Monitoring | Main use | Collection default |
|---|---|---|---|
| Reuters Technology — https://www.reuters.com/technology/ | CORE | High-value company, AI, chips, deals, regulation and global technology reporting | RSS/feed if available |
| Rest of World Asia — https://restofworld.org/region/asia/ | WATCH | Technology, labor, AI, platforms and infrastructure outside a US-only frame, including Philippine reporting | RSS/feed if available |
| TechCrunch AI Startups — https://techcrunch.com/tag/ai-startups/ | WATCH | Startup funding, products, venture and AI-company discovery | RSS/feed if available |

## On-demand company and startup sources

Do not maintain a giant permanent company list in v0.

When a company or startup becomes active in reporting, temporarily add or directly check:

- its official newsroom/blog;
- investor-relations page where relevant;
- product changelog/release notes;
- official LinkedIn or other verified company account for leads;
- PSE EDGE if listed;
- relevant regulator/filing source.

Examples of companies worth watching only when they become active include major Philippine telecom, fintech, payments, cloud, retail, platform, data-center and technology operators.

This keeps the default feed from becoming a PR firehose.

## Free gathering setup

### 1. Inoreader Free — main feed surface

Use one Inoreader account as the main RSS surface.

As reviewed on 2026-09-10, the Free plan supports up to 150 RSS subscriptions and Google News alerts. It does not include the Pro web-feed/track-change feature for arbitrary sites without RSS.

Start with folders:

```text
PH — Primary
PH — News
AI — Primary
Global — News
```

Do not create a folder for every beat or organization.

For each source above:

1. paste the source/page URL into Inoreader;
2. subscribe only when Inoreader detects a public feed worth following;
3. if no feed is available, leave the source in this map as manual `WATCH` or `TARGETED` rather than paying or building around it.

Do not use multiple RSS readers.

### 2. Gmail — newsletters and press mail

Create one label:

`Portfilo / Signals`

Route only newsletters or press mail that repeatedly produce useful developments.

Do not subscribe to dozens of newsletters just to make the inbox feel comprehensive.

No newsletter needs to be mirrored into Inoreader in v0.

### 3. Gap alerts

Use Google Alerts or Inoreader's Google News alert support only when the fixed source map misses a recurring class of development.

If a small starting set is useful, begin with no more than three broad gaps:

- `Philippines artificial intelligence`
- `Philippines startup funding`
- `Philippines data center`

Delete or narrow any alert that produces mostly noise.

Do not treat an alert result as evidence. Open the underlying source.

### 4. Private signal list

The signal list stays outside the repository.

Only capture items that survive the first scan.

Minimum fields:

| Field | Purpose |
|---|---|
| Date | When Portfilo found it |
| Signal | What may have changed |
| Source URL | Original or strongest current source |
| Decision | `NEWS`, `WATCH`, `STORY IDEA`, or `CLOSED` |
| Note / trigger | Why it matters or what Portfilo is waiting for |

Do not log every ignored feed item.

## Normal operating routine

### Daily / normal News scan

Scan the `CORE` sources through the main feed surface.

For anything interesting:

```text
OPEN ITEM
  ↓
FIND ORIGINAL / AUTHORITATIVE SOURCE
  ↓
WHAT ACTUALLY CHANGED?
  ↓
NEWS / WATCH / IGNORE
       ↘
        POSSIBLE STORY QUESTION
```

Record only surviving signals in the private signal list.

No feed inbox-zero requirement.

### Periodic source sweep

Review `WATCH` sources periodically, especially when a beat is active.

The purpose is to catch official releases that do not flow cleanly into RSS, not to manually browse every source every day.

### Weekly review

Review:

- open Watch items and their triggers;
- repeated developments that may form a pattern;
- possible Story questions;
- noisy sources to remove;
- missed developments and which source would have caught them earlier.

Change the source map only from observed usefulness or failure.

## What not to add yet

Do not add by default:

- Feedly alongside Inoreader;
- paid Inoreader Pro;
- web-scraping services;
- News APIs;
- Meltwater, Factiva or other enterprise monitoring;
- n8n, Zapier or Make;
- automated ranking;
- AI-generated daily briefings as editorial authority;
- a database or newsroom dashboard;
- a permanent feed for every startup or company;
- social listening infrastructure.

## Review trigger

Revisit the source map after real manual use shows one of these:

- an important development class is repeatedly missed;
- a source produces mostly noise;
- one beat is materially under-covered;
- a manual non-RSS check becomes a repeated burden;
- a paid capability has a measurable recurring benefit;
- Portfilo's editorial capacity changes.

Until then, the smallest working system wins.

## Relationship to other authority

- `docs/EDITORIAL_INTELLIGENCE.md` owns signal handling and upstream News discovery rules.
- this file owns the initial monitored source universe and practical collection defaults.
- `docs/CONTENT_PLANNING.md` owns substantial Story selection.
- `docs/RESEARCH_STANDARD.md` owns evidence, source tiers, contradiction search and verification.
- `docs/PUBLISHING_STANDARD.md` owns fast factual and substantial publication paths.
- `docs/PROJECT_STATE.md` owns the active task and next gate.
