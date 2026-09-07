# Editorial Description / Story Summary Research

_Last updated: 2026-09-07_

_Status: RESEARCH COMPLETE / SYSTEM REVISION AUTHORIZED BY FOUNDER-EDITOR_

## Problem

Portfilo's existing description guidance said the story description should be short, literal, and specific for cards, indexes, SEO, and social metadata.

That guidance was directionally correct but incomplete. In practice it encouraged a recurring failure: compress the body into a neutral one-sentence thesis, then shorten it until it fit an imagined metadata limit.

The result could be accurate and still read like generic AI summary copy.

The research question for this pass was:

> How do strong human-edited publications use the supporting description, standfirst, summary, or card copy around a story, and what should Portfilo transfer from that practice without imitating another publication's voice?

## Current Portfilo implementation

The current Astro schema separates `dek` and `description`, but one `description` field is reused across several surfaces.

It appears as visible copy on the homepage and Stories archive. It is also passed into the story page's HTML meta description, Open Graph description, Twitter description, and Article structured data.

This means the current field is not merely hidden SEO metadata. It is part of the reader-facing editorial package.

## Human-edited examples reviewed

### WIRED

Article:

`How to Build an AI Startup: Go Big, Be Strange, Embrace Probable Doom`

https://www.wired.com/story/ai-startup-interview-founders/

Observed behavior:

- the supporting line establishes the scale and context of the subject;
- it then states what the reporter set out to find;
- it does not attempt to compress the article's eventual conclusions into a neutral thesis sentence.

Transferable lesson:

A description can work as a reporting premise or article promise when that is the clearest reason to understand what the story is.

### The Guardian

Article:

`Sink or swim: why some startups succeed and others don't`

https://www.theguardian.com/small-business-network/2015/jul/23/why-startups-succeed-others-dont-businesses-survive

Observed behavior:

- the standfirst names the areas the article examines;
- it tells the reader what kind of answer the reporting will provide;
- it is descriptive without being a mechanical restatement of the headline.

Transferable lesson:

A description can define scope using concrete parts of the story rather than summarize the final thesis.

### Harvard Business Review

Article:

`So You Want to Be an Entrepreneur?`

https://hbr.org/2020/07/so-you-want-to-be-an-entrepreneur

Observed behavior:

- HBR uses a visible summary layer to orient the reader around the practical situation and question;
- the supporting copy is allowed to be more useful than a conventional metadata sentence;
- the article package does not require every layer to restate the same conclusion.

Transferable lesson:

A summary can frame the reader's situation or practical question instead of compressing the article into one abstract claim.

### McKinsey

Article:

`Will you fly—or freeze? How founders can build enduring companies beyond $10 billion`

https://www.mckinsey.com/industries/private-capital/our-insights/will-you-fly-or-freeze-how-founders-can-build-enduring-companies-beyond-10-billion-dollars

Observed behavior:

- the supporting copy begins with a concrete stage and problem;
- it then states the bounded pattern the article examines;
- specificity comes from the actual reporting and analysis rather than generic business language.

Transferable lesson:

When the story has a distinctive stage, dataset, case, finding, or reporting method, the description can surface that specificity.

## Search metadata check

Google Search Central:

`Control your snippets in search results`

https://developers.google.com/search/docs/appearance/snippet

Relevant guidance:

- Google primarily creates snippets from page content and may use the meta description when it better describes the page;
- Google recommends page-specific, useful descriptions;
- there is no fixed maximum length for a meta description, although displayed snippets may be truncated to fit the device.

Transferable lesson:

Portfilo should not force visible editorial copy into an arbitrary `150-160 character` writing form merely because the field is reused as metadata.

## Cross-example findings

The examples do not share one sentence pattern. That is important.

Strong supporting copy may do one or more of these jobs:

1. establish the concrete situation or problem;
2. state what the reporting, research, or explanation examined;
3. narrow the story's scope;
4. surface a distinctive case, dataset, observation, or method;
5. state a bounded finding when the finding itself is the clearest reason to read;
6. frame the reader's practical question when that is the article's real job.

What they do not require is a mechanically compressed version of the article's conclusion.

## Portfilo diagnosis

The failure came from treating these instructions as sufficient:

- short;
- literal;
- specific;
- works for metadata.

Those are editing constraints, not an editorial form.

Without first choosing a job, an AI system tends to produce the safest possible sentence: an abstract summary of the thesis using nouns such as `results`, `causes`, `factors`, `decisions`, `challenges`, or `outcomes`.

That can satisfy factual accuracy while failing as editorial packaging.

## Revised decision

For Portfilo, the story description / summary is **editorial packaging first and metadata second** under the current implementation.

Before wording is generated, the editor must decide which job the description is performing for that specific story.

The default is not `summarize the conclusion`.

The description should be judged together with the headline and dek as one package, while remaining useful when shown alone on a story card.

## Anti-imitation boundary

Do not copy:

- another publication's wording;
- signature cadence;
- branded terms;
- jokes;
- metaphors;
- first-person posture merely because an exemplar used it;
- list constructions merely because one standfirst used a list.

The examples establish possible editorial jobs, not Portfilo sentence templates.

## Implementation consequence

A focused Portfilo editorial-packaging standard should now govern headline, dek, and description work.

The style-research and style-brief templates should explicitly require description-job selection rather than asking only for a short literal summary.

No public story description is approved by this system revision alone. Story-specific wording still requires the normal founder-editor gate.