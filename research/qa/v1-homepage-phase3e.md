# Portfilo v1 Homepage Phase 3E QA

_Last updated: 2026-09-14_

## Status

**ACTIVE / SOURCE-LEVEL QA PASSED / RENDERED QA NOT YET VERIFIED**

This record distinguishes checks that were actually performed from checks that still require a rendered runtime.

## Runtime under review

Final validated homepage runtime commit:

`4de81ee79f8a5bd3dc73d2dcc7d6897674064c67`

GitHub Actions run:

`34805811760`

Result:

**PASS**

Passed:

- dependency installation;
- `astro check`;
- production build.

## Source-level QA

### Homepage structure

**PASS**

Verified:

- one semantic homepage `h1`;
- approved section order in source;
- no legacy News/ticker homepage code;
- no hero CTA;
- no marquee;
- no Three.js/WebGL;
- no testimonial/client-logo/fabricated proof surface;
- approved hero copy present;
- approved newsletter copy present.

### Conditional rendering

**PASS**

Verified in runtime source:

- Work requires at least one published `work` entry;
- Hustle requires a real published Hustle entry;
- Journal requires published Journal content;
- Contact is withheld until a real public contact path is enabled;
- newsletter remains present using the existing approved signup infrastructure;
- homepage contains no empty-state filler messages.

Current content inventory:

- `src/content/work/` contains only `.gitkeep`;
- no Hustle article is currently present;
- three published Journal articles are present.

Therefore the current homepage branch resolves to:

`Hero -> Services -> Journal -> Newsletter -> Footer`

This is expected under the approved empty-state policy.

### Approved copy fidelity

**PASS**

Verified:

- hero headline matches `docs/V1_HOMEPAGE_COPY.md`;
- hero supporting sentence matches the approved copy;
- Services framing and capability names match;
- Journal framing matches;
- newsletter heading/message/action match;
- Contact wording is present only inside the intentionally disabled conditional section.

### Responsive source contract

**PASS AT SOURCE LEVEL**

Verified CSS contains deliberate breakpoint handling for:

- wide desktop;
- intermediate/tablet widths;
- mobile at `48rem`;
- narrow mobile at `30rem`.

Verified source behavior:

- hero desktop line treatment relaxes to natural inline wrapping on mobile;
- Work metadata collapses to a smaller grid;
- Services becomes one column;
- Hustle becomes one column;
- Journal removes the redundant arrow affordance on small screens;
- newsletter stacks on mobile.

Actual viewport rendering remains to be visually verified.

### Reduced motion

**PASS AT SOURCE LEVEL**

Verified:

- homepage motion initialization exits for `prefers-reduced-motion: reduce`;
- global reduced-motion CSS removes transition/animation duration;
- content is present in the DOM without requiring animation;
- no pinned/scroll-hijacked sequence exists.

Actual browser behavior remains to be verified.

### Astro navigation + GSAP lifecycle

**PASS AT SOURCE LEVEL**

Verified:

- homepage initialization is guarded against duplicate binding;
- GSAP animation state is scoped with `gsap.context`;
- context is reverted on `astro:before-swap`;
- homepage initialization runs on `astro:page-load`;
- non-home pages exit safely when `[data-homepage]` is absent;
- ScrollTrigger is used only for restrained section reveal behavior.

Actual repeated client-side navigation remains to be exercised in a browser.

### Keyboard/focus

**PASS AT SOURCE LEVEL**

Verified:

- global visible `:focus-visible` treatment remains;
- homepage links use normal anchors;
- newsletter input has a real label;
- Journal icon-only links have descriptive `aria-label` values;
- Work media links have descriptive labels;
- existing mobile menu retains Escape handling and focus containment.

Actual keyboard traversal remains to be exercised in a browser.

### Metadata

**PASS AT SOURCE LEVEL**

Verified:

- homepage uses `SiteHead`;
- homepage title remains `Portfilo`;
- approved supporting sentence is used as the meta description;
- canonical/social/structured-data infrastructure remains active through `SiteHead`.

The v1 default social-preview asset itself remains a separate unresolved release item.

### Layout/overflow

**PASS AT SOURCE LEVEL / RENDERED CHECK REQUIRED**

Verified:

- grids use `minmax(0, 1fr)` where content expansion matters;
- global body retains `overflow-x: clip`;
- software/editorial images retain intrinsic responsive sizing;
- no horizontal carousel or intentional off-screen travel was introduced.

Rendered browser inspection is still required to confirm there is no viewport-specific overflow or optical collision.

## Rendered QA still required

Do not close Phase 3E until an actual rendered branch runtime is inspected for:

- desktop composition;
- tablet composition;
- narrow and standard mobile composition;
- real font rendering and headline wraps;
- keyboard traversal;
- mobile menu behavior from the homepage;
- reduced-motion behavior;
- repeated Astro client-side navigation to/from the homepage;
- ScrollTrigger cleanup;
- newsletter interaction layout;
- overflow/layout stability;
- real image behavior once Work/Hustle media exists;
- basic performance behavior in a browser.

## Release blockers unrelated to homepage code

Before v1 release:

- at least one real Work case study is still required;
- Contact requires a real public contact path;
- v1 favicon/icon replacement remains open;
- v1 default social-preview replacement remains open;
- newsletter cadence remains a separate product decision.

No merge to `main` or deployment is authorized by this QA record.
