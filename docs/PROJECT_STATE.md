# Portfilo Project State

_Last updated: 2026-09-09_

## Current phase

**ARCHIVE REGRESSION CORRECTED ON BUILD / VALIDATION PENDING**

The main website remediation was previously released, then sparse production inventory exposed layout problems. A first sparse-state correction introduced two regressions that the founder rejected:

- the contextual archive newsletter block was forced from Portfilo blue to black;
- the normal shared footer acquisition was disabled on News and Stories, making archive footers inconsistent.

Those regressions have now been corrected on `build/portfilo-v0` after a fresh repo audit.

Current runtime HEAD:

`623465870fbfc3514ea2cd6ecc32c3e942638849` — `Avoid empty archive stream spacing`

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

Cloudflare branch behavior has appeared inconsistent in dashboard screenshots during this release cycle. Re-verify the effective Production branch after the corrected state reaches `main`; do not infer it from intent alone.

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

Draft handling must remain explicit:

- `status: draft` is not silently changed to `published`;
- draft items are visibly labeled `Draft` in archive/article classification;
- draft Story routes use `noindex, nofollow`;
- draft routes omit canonical/social/article metadata intended for published work;
- published Stories keep normal metadata behavior.

Current Story inventory is four files: one published Story and three draft Story previews.

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

The erroneous global rule that forced `.archive-acquisition` to black has been removed.

News and Stories now use the normal `<SiteFooter />` again rather than disabling its acquisition block.

### Archive spacing

`EditorialArchive.astro` now renders the supporting stream only when `supportingItems.length > 0`.

This prevents a one-item archive from creating an empty stream section with large dead beige space.

### News

- sample News fixtures remain available when there are zero real News items;
- fixtures remain explicitly labeled and non-clickable;
- real News continues to take precedence automatically;
- no fake article routes were added.

### Stories

- `/stories` now includes the existing Story collection regardless of draft/published status for the current pre-audience staging period;
- draft items are labeled `Draft`;
- draft `/stories/[slug]` routes are generated so the existing stories can be inspected;
- draft routes are noindex/nofollow and do not publish canonical/social/article metadata;
- the normal shared archive footer is restored.

### Shared foundation

`src/styles/global.css` is back to the canonical shared foundation only. It no longer contains archive-specific color overrides.

No dependency, framework, database, CMS, runtime service, route family, or schema field was added.

## Prior validation evidence

Before this correction, founder-reported validation included:

- `npm run check`: PASS
- `npm run build`: PASS
- homepage responsive QA: founder accepted
- News / Stories / Story article / Standards / Privacy / Confirmed / 404 rendered QA: founder accepted
- deployed `/api/subscribe` real email -> beehiiv: PASS
- `/subscribe` -> `/#newsletter`: PASS
- `/about` -> `/`: PASS

Those results are baseline evidence only. They do not validate the current runtime HEAD.

## Current validation status

**SOURCE AUDIT COMPLETE / CORRECTION IMPLEMENTED / BUILD + RENDER VALIDATION PENDING.**

Do not claim the current correction passed until the latest branch deployment/build is actually checked.

## Exact next task

1. Let Cloudflare build the latest `build/portfilo-v0` HEAD.
2. Run or confirm `npm run check` and `npm run build` for the current HEAD.
3. Inspect `/news` and `/stories` on the latest deployment:
   - archive acquisition is Portfilo blue, not black;
   - supporting content follows the blue acquisition;
   - the normal shared footer acquisition and compact footer appear at the bottom;
   - no dead empty archive-stream gap;
   - News sample fixtures remain clearly labeled and non-clickable;
   - Stories shows all four existing Story entries, with drafts visibly labeled.
4. Open one draft Story route and confirm it renders correctly with `Draft` classification.
5. If those checks pass, fast-forward `main` to the validated build HEAD. That action is already founder-authorized for this correction.
6. Verify Cloudflare Production branch is `main` and the resulting production deployment succeeds.
7. Smoke-test production `/`, `/news`, `/stories`, one published Story, one draft Story preview, newsletter signup, `/subscribe`, and `/about`.
8. Record only checks actually performed.

## Still separate

The current authorization does not imply:

- final custom-domain cutover;
- beehiiv provider-side naming/template changes;
- public newsletter send;
- replacing sample News with real reporting;
- changing draft Story status to `published` without a separate editorial publication decision;
- broad audience launch.
