# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**RESPONSIVE TYPOGRAPHY REPAIR IMPLEMENTED ON BUILD / VALIDATION PENDING**

The main website remediation was previously released, then sparse production inventory exposed layout problems. The archive acquisition/footer regression was corrected on `build/portfilo-v0`, and a follow-up typography audit found a separate systemic responsive defect: several older breakpoint overrides made important headings become larger when the viewport crossed into phone widths.

The founder approved a narrow system-level repair instead of more screenshot-by-screenshot patches.

Latest runtime-changing commit:

`ca6c77c651487d8c2c059ebf06d87004127a9610` — `Prefer real Story inventory in homepage rail`

Current `main` remains:

`11c9587123b0812cc8b09316dac50213858f0f01`

The founder has already authorized advancing the corrected state to `main` after the corrected deployment/render validation passes. Do not fast-forward `main` before that validation.

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

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Intended Cloudflare model:

- `build/portfilo-v0` -> preview/test
- `main` -> production

Cloudflare branch behavior appeared inconsistent in dashboard screenshots during this release cycle. Re-verify the effective Production branch after the corrected state reaches `main`; do not infer it from intent alone.

## Approved product direction

- Portfilo is a business and technology publication.
- News is the current/day-to-day editorial layer.
- Stories is the deeper editorial layer.
- Public topics: `Business / Technology / Startup / AI`.
- Portfilo remains free in v0.
- Newsletter acquisition remains important but must not dominate publication identity.
- Approved newsletter promise: latest news, a 7-minute read, three times per week.
- Exact send days/times remain open.
- `briefing` is rejected as public acquisition language.
- No individual public author/byline system is part of v0.

Approved internal selection lens:

> Portfilo covers business and technology developments that materially change how companies, products, markets, infrastructure, or work operate.

This is internal only.

## Temporary pre-audience content policy

### News

Until real News inventory exists, the existing synthetic News fixtures may render in production strictly as layout placeholders.

Requirements:

- visibly identify them as sample content, not Portfilo reporting;
- keep them non-clickable;
- do not create fake `/news/[slug]` routes;
- do not create Article metadata;
- real published News replaces them automatically;
- replace them before broad audience launch.

### Stories

The founder has approved temporarily exposing the existing Story drafts so the Stories archive uses the Story inventory already in the repository.

Draft handling remains explicit:

- `status: draft` is not silently changed to `published`;
- draft items are visibly labeled `Draft` in archive/article classification;
- draft Story routes use `noindex, nofollow`;
- draft routes omit canonical/social/article metadata intended for published work;
- published Stories keep normal metadata behavior.

Current Story inventory is four files: one published Story and three draft Story previews.

The homepage primary Feature remains published-only. The adjacent Stories rail now prefers an existing real Story, including an explicitly labeled draft during this pre-audience period, before falling back to a synthetic sample Story.

## Current public route model

Keep:

- `/`
- `/news`
- `/news/[slug]`
- `/stories`
- `/stories/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`
- `/robots.txt`
- `/api/subscribe`

Retired:

- `/subscribe` as a standalone page; redirect target `/#newsletter`.
- `/about`; redirect target `/`.
- public `/series/[slug]`.

## Current correction

### Archive acquisition and footer

Canonical archive structure is restored:

1. editorial lead;
2. contextual archive acquisition in Portfilo blue;
3. supporting archive rows when they exist;
4. normal shared footer acquisition;
5. compact institutional footer.

The erroneous global rule that forced `.archive-acquisition` to black is removed.

News and Stories use the normal `<SiteFooter />` again rather than disabling its acquisition block.

### Archive spacing

`EditorialArchive.astro` renders the supporting stream only when `supportingItems.length > 0`.

This prevents a one-item archive from creating an empty stream section with large dead beige space.

### Responsive typography repair

The source audit found reverse-scaling jumps at narrow breakpoints. Important headings could shrink progressively through desktop/tablet, then become larger when crossing an old phone media query.

The approved repair is now implemented:

- News/Stories archive section titles use one continuous fluid scale with a lower phone minimum;
- archive lead and supporting headlines keep their existing fluid scales without phone-only font-size overrides;
- article titles use one continuous fluid scale, with article header top spacing also fluid through phone widths;
- article body text, body `h2`/`h3`, reading measure, hero, and Story TOC behavior were not redesigned;
- Standards and Privacy page titles no longer use a tiny-screen enlargement override;
- Confirmed and 404 titles no longer use a phone-only enlargement override;
- homepage editorial headline typography, masthead, newsletter forms, and footer typography were not retuned.

The layout breakpoints themselves remain where needed for structural reflow. The change removes conflicting type-size overrides rather than removing responsive layout behavior.

### Homepage Story rail

- primary Feature selection remains published-only;
- the secondary Stories rail now looks across the existing Story inventory;
- an existing draft can appear there during the approved pre-audience period and is labeled `Draft story`;
- the synthetic Story teaser is used only if no additional real Story exists.

### News

- sample News fixtures remain available when there are zero real News items;
- fixtures remain explicitly labeled and non-clickable;
- real News continues to take precedence automatically;
- no fake article routes were added.

### Stories

- `/stories` includes the existing Story collection regardless of draft/published status for the current pre-audience staging period;
- draft items are labeled `Draft`;
- draft `/stories/[slug]` routes are generated so the existing stories can be inspected;
- draft routes are noindex/nofollow and do not publish canonical/social/article metadata;
- the normal shared archive footer is restored.

### Shared foundation

`src/styles/global.css` remains the canonical shared foundation only. It contains no archive-specific color override.

No dependency, framework, database, CMS, runtime service, route family, or schema field was added.

## Prior validation evidence

Before this latest responsive typography repair, founder-reported validation included:

- `npm run check`: PASS
- `npm run build`: PASS
- homepage responsive QA: founder accepted
- News / Stories / Story article / Standards / Privacy / Confirmed / 404 rendered QA: founder accepted
- deployed `/api/subscribe` real email -> beehiiv: PASS
- `/subscribe` -> `/#newsletter`: PASS
- `/about` -> `/`: PASS

Those results are baseline evidence only. They do not validate the current runtime-changing commits.

## Current validation status

**SOURCE IMPLEMENTATION COMPLETE / BUILD + RENDER VALIDATION PENDING.**

Source inspection confirms the old archive/article title enlargement overrides targeted by this repair have been removed. Do not claim the corrected build or rendered layouts pass until the latest branch build is actually checked.

## Exact next task

1. Let Cloudflare build the latest `build/portfilo-v0` state.
2. Run or confirm `npm run check` and `npm run build` for the current branch state.
3. Inspect responsive boundary behavior at widths most likely to expose discontinuities:
   - `1440`
   - `1024`
   - `768`
   - `641`
   - `640`
   - `449`
   - `448`
   - `390`
   - `320`
4. Focus rendered checks on:
   - `/news` archive title, lead headline, supporting headlines, acquisition, and footer;
   - `/stories` with all four existing Story entries and visible draft labels;
   - one published Story article title/dek/body/hero;
   - one draft Story article title/dek/body and `Draft` classification;
   - `/standards` and `/privacy` page-title continuity;
   - `/confirmed` and `/404` title continuity;
   - homepage Feature remains published, rail uses the existing secondary Story, and homepage headline sizing is unchanged.
5. Specifically compare `641 -> 640` and `449 -> 448`. Important type must not jump larger when crossing either breakpoint.
6. If those checks pass, fast-forward `main` to the validated build state. That action is already founder-authorized for this correction.
7. Verify Cloudflare Production branch is `main` and the resulting production deployment succeeds.
8. Smoke-test production `/`, `/news`, `/stories`, one published Story, one draft Story preview, newsletter signup, `/subscribe`, and `/about`.
9. Record only checks actually performed.

If validation reveals a concrete defect, fix only that defect before advancing `main`.

## Still separate

The current authorization does not imply:

- final custom-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send;
- replacing sample News with real reporting;
- changing draft Story status to `published` without a separate editorial publication decision;
- broad audience launch.
