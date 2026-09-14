# Portfilo v1 Website Typography Direction

_Last updated: 2026-09-14_

## Status

**TYPOGRAPHY SELECTION ACTIVE / AWAITING FOUNDER CHOICE**

Parent authority:

- `docs/V1_CREATIVE_DIRECTION.md`
- `docs/V1_IDENTITY_SYSTEM.md`
- `docs/V1_HOMEPAGE_GENERATION_PLAN.md`
- `docs/V1_HOMEPAGE_COPY.md`

## Decision job

Select the website typography system that will sit beside the approved Noto Serif Display Portfilo wordmark without turning the entire website into an extension of the wordmark.

This is a typography decision only.

No homepage composition, color system, navigation layout, hero mechanism, or motion behavior is approved here.

## Locked constraints

- wordmark remains Noto Serif Display Regular as vector outlines;
- website type does not need to match the wordmark;
- approved hero headline remains:
  **Software built around the problem.**
- approved supporting copy remains unchanged;
- the site should read primarily as a software studio, not a fashion/editorial publication;
- typography must work for UI, body copy, Journal reading, Services, and future Work metadata;
- mono is not required unless a later functional use earns it.

## Candidate A — Instrument Sans

Source:

https://github.com/Instrument/instrument-sans

License:

SIL Open Font License 1.1.

Character:

- contemporary neo-grotesque;
- precise but not sterile;
- subtle playful details;
- width + weight variation;
- strong body/UI legibility.

Proposed usage:

- display: semi-condensed / medium;
- body: regular normal width;
- UI: medium normal width.

Strength:

The width axis creates controlled display character without needing a second display family.

Risk:

Instrument Sans already exists in the rejected runtime. The previous failure was not caused by the typeface, but retaining it may psychologically and visually preserve too much familiarity if used conservatively.

## Candidate B — Mona Sans

Source:

https://github.com/mona-sans

License:

SIL Open Font License 1.1.

Character:

- industrial-era grotesque influence;
- strong product/web capability;
- variable width, weight, optical size, and slant;
- technical without reading as terminal/developer cosplay.

Proposed usage:

- display: slightly condensed, moderate weight, display optical size;
- body: regular width/weight;
- UI: modestly heavier and slightly tightened.

Strength:

Best current balance between:

- software;
- design;
- product;
- editorial readability;
- identity flexibility.

It is materially different from the Noto Serif Display wordmark without fighting it.

Current recommendation:

**B — Mona Sans**

Risk:

The variable design space must be restrained. Excessive width/slant experimentation would turn the type system itself into a gimmick.

## Candidate C — Geist Sans

Source:

https://github.com/vercel/geist-font

License:

SIL Open Font License 1.1.

Character:

- Swiss-influenced geometric sans;
- high legibility;
- simple;
- product/UI-native;
- broad weight range.

Proposed usage:

- display: medium;
- body: regular;
- UI: medium.

Strength:

Cleanest product-interface behavior of the three.

Risk:

Highest chance of reading as generic developer-platform/SaaS typography because of Geist's strong association with modern product and developer interfaces.

## Comparison

| Criterion | A Instrument Sans | B Mona Sans | C Geist Sans |
| --- | ---: | ---: | ---: |
| Contrast with wordmark | 9/10 | **10/10** | 9/10 |
| Software-studio fit | 8.5/10 | **10/10** | **10/10** |
| Editorial readability | **10/10** | 9.5/10 | 9/10 |
| Display character | 9/10 | **10/10** | 8/10 |
| UI clarity | 9/10 | 9.5/10 | **10/10** |
| Risk of generic SaaS | Low-medium | **Low** | High |
| Variable control | **10/10** | **10/10** | 8/10 |
| Portfilo fit | 9.1/10 | **9.8/10** | 8.8/10 |

## Recommendation

**Mona Sans**

Reason:

The approved Portfilo wordmark already provides the refined serif signal.

The website type should contribute:

- software;
- precision;
- flexible density;
- interface credibility;
- readable editorial text.

Mona Sans does this without making the site feel like a fashion/editorial extension of the wordmark or a generic Vercel-style product site.

## Specimen rule

Founder review should compare the three candidates using:

- the exact approved hero headline;
- the exact approved supporting sentence;
- Work / Services / Hustle / Journal / Contact;
- Custom Software / Automation / AI Integration / Digital Products.

Do not evaluate them inside a homepage composition.

## Current gate

Founder selects:

- A — Instrument Sans;
- B — Mona Sans;
- C — Geist Sans;
- or rejects all three.

After selection:

**STRUCTURAL HERO WIREFRAMES**

Three grayscale 1440 × 900 hero wireframes may then be produced using the selected typography and exact identity/copy.

No polished homepage design or image generation is authorized yet.
