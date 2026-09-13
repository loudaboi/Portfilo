# Portfilo v1 Full Rebuild Audit

_Last updated: 2026-09-14_

## Status

**FOUNDER-APPROVED / EXECUTED IN PHASE 2**

This audit was requested before Phase 2 so the v1 rebuild would not preserve unused v0 routes, content, assets, components, documentation, or research merely because they existed in Git. The founder approved the clean-cut strategy and Phase 2 executed it.

The user clarified that the v0 site was not meaningfully released/distributed publicly. Therefore the preferred migration model is now a **clean v1 cutover**, not a compatibility-heavy migration.

Git history remains the historical archive. Removing a file from the active v1 branch does not erase it from repository history.

## Audit scope

Scanned:

- all current routes;
- components;
- content collection/articles;
- source images;
- public brand assets;
- social/favicons;
- Cloudflare functions;
- redirects/headers;
- root project files;
- 32 docs files;
- 205 research files;
- current skills/configuration.

Current branch inventory at audit time:

- 306 tracked files;
- ~7.69 MB total;
- 56 runtime/public/function files;
- 32 docs files;
- 205 research files.

---

# 1. Revised migration principle

Do not preserve legacy URLs, files, or assets without a concrete dependency.

For v1:

- keep what v1 actively uses;
- migrate durable editorial work;
- replace surfaces that still have a v1 job;
- delete v0-only runtime/content/assets from the active branch;
- delete v0-only docs/research from the active branch when they no longer inform current authority;
- use Git history as provenance.

Do not create compatibility code for hypothetical traffic.

---

# 2. Route audit

## Keep/adapt

- `/` — replace content in Phase 3, route remains.
- `/hustle` — keep route, rebuild presentation.
- `/hustle/[slug]` — keep route, rebuild presentation.
- `/privacy` — keep/adapt.
- `/404` — keep/adapt.
- `/robots.txt` — keep.
- newsletter confirmation route — keep until its final namespace is coordinated with beehiiv.

## New v1 routes

- `/work`
- `/work/[slug]`
- `/services`
- `/journal`
- `/journal/[slug]`
- `/contact`

## Delete

- `/news`
- `/news/[slug]`
- `/why`
- `/why/[slug]`
- `/standards`

Because the site has not developed meaningful public URL dependency, do not build a temporary News compatibility layer.

## Redirect file

Current `public/_redirects` contains only v0 redirects:

- `/subscribe -> /#newsletter`
- `/about -> /`
- `/stories -> /why`
- `/stories/* -> /why/:splat`

Recommendation: **delete the file** unless a real public URL dependency is identified before release.

Do not add Why/News compatibility redirects by default.

---

# 3. Newsletter namespace

Current runtime:

`functions/api/subscribe.js` -> `/api/subscribe`

Recommended v1 runtime:

`functions/api/newsletter/subscribe.js` -> `/api/newsletter/subscribe`

Update `NewsletterSignup.astro` to use the namespaced endpoint.

Also change the internal beehiiv UTM campaign identifier from the v0-specific:

`portfilo_brief_signup`

to a neutral v1 identifier such as:

`portfilo_newsletter_signup`

This is internal attribution, not public copy.

## Confirmation route

`/newsletter/confirmed` is structurally cleaner than `/confirmed`, but unlike the API endpoint it may be referenced in beehiiv provider configuration.

Recommendation:

- inspect the current beehiiv confirmation redirect before changing it;
- if the provider setting is easy to update in the same gate, move to `/newsletter/confirmed`;
- otherwise keep `/confirmed` temporarily.

Do not maintain both routes without a demonstrated need.

---

# 4. Article/content audit

Current article inventory:

- 9 News;
- 3 Why;
- 0 Hustle.

## Keep and migrate to Journal

Preserve these three articles and their research evidence:

1. `byd-everywhere-philippines.md`
2. `digital-bank-savings-rates-philippines.md`
3. `tiktok-commerce-philippines.md`

Change `section: why` to `section: journal`.

Do not rewrite the article bodies merely as part of route migration.

## Delete from active v1 branch

Delete all 9 News files:

- `bending-spoons-miro-1-36b-cash-deal.md`
- `dict-cicc-24-hour-cyber-checks.md`
- `ibpap-investor-push-beyond-us-market.md`
- `kita-raises-4-5m-ai-credit-underwriting.md`
- `onepuhunan-citi-deg-1-5b-financing.md`
- `paymongo-skyro-qr-ph-credit.md`
- `philippines-ai-infrastructure-roadmap-34-4b-investment.md`
- `philweb-jks-tech-4-23b-strategic-stake.md`
- `qualcomm-amazon-ai-data-center-collaboration.md`

They do not need a legacy runtime bridge.

---

# 5. Editorial image audit

Current source images:

- `84741d7b-9fe7-413e-bf3e-bc5d22a90120.png` — Miro/Bending Spoons News article.
- `byd-emblem-pexels-pedro-h-novais.jpg` — surviving Journal article.
- `greenwish-tiktok-phone-pexels.jpg` — surviving Journal article.
- `kita-seed-round-4-5m.png` — Kita News article.

## Keep

- BYD image.
- TikTok image.

## Delete

- Miro/Bending Spoons image.
- Kita seed-round image.

The Kita image alone is ~2.53 MB, so deleting News-only media removes substantial dead weight.

---

# 6. Component audit

## Keep/adapt

- `SiteHead.astro`
- `SiteHeader.astro`
- `SiteFooter.astro`
- `NewsletterSignup.astro`
- `src/scripts/motion.ts`
- `src/styles/global.css`

## Delete now or during Phase 2

### `FooterAcquisition.astro`

Delete. The new v1 footer no longer imports it.

### `EditorialArchive.astro`

Delete after new Journal/Hustle archive implementations exist.

Do not replace it with another universal archive abstraction prematurely.

### `EditorialArticle.astro`

Delete after the new Journal/Hustle article implementations replace it.

Reuse useful logic only where it remains justified.

---

# 7. Brand/public asset audit

Current approved runtime wordmark:

`public/brand/portfilo-wordmark-v1.svg`

Keep it.

## Delete legacy v0 brand variants

Once the active code is confirmed to reference only the v1 wordmark, remove:

- `portfilo-avatar-ink-on-paper.svg`
- `portfilo-avatar-paper-on-ink.svg`
- `portfilo-symbol-ink.svg`
- `portfilo-symbol-paper.svg`
- `portfilo-wordmark-color.svg`
- `portfilo-wordmark-ink.svg`
- `portfilo-wordmark-light.svg`
- `portfilo-wordmark-port-paper.svg`

The v1 wordmark contains the surviving geometry, so these variants do not need to remain in the active branch for source preservation.

## Favicons

Current favicon files still use the retired v0 symbol/paper palette.

They are not v1-final.

Files:

- `apple-touch-icon.png`
- `favicon-16.png`
- `favicon-32.png`
- `favicon.ico`
- `favicon.svg`

Recommendation: **replace as a set**, then remove the old versions in the same change.

Do not invent a new v1 icon during cleanup. The favicon application needs a small design decision first.

## Social preview

`public/social/portfilo-default.png` is v0 publication-era artwork and is ~1.21 MB.

Replace it before release, then remove the old file.

---

# 8. Runtime cleanup size

Immediate/Phase-2 delete candidates identified in the runtime/public tree:

- 26 files;
- ~2.72 MB.

This count includes:

- News content/routes;
- News-only media;
- Why routes after Journal replacement;
- Standards;
- old redirects;
- legacy wordmark/symbol variants;
- FooterAcquisition.

A further 9 files (~1.24 MB) are **replace-then-remove** surfaces:

- EditorialArchive;
- EditorialArticle;
- old default social preview;
- favicon set;
- old newsletter API path.

---

# 9. Root/config audit

## Keep

- `.dev.vars.example`
- `.gitignore`
- `.node-version`
- `.github/workflows/ci.yml`
- `astro.config.mjs`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `AGENTS.md`
- `README.md`
- `BACKLOG.md`

## Required corrections

### `README.md`

Stale. It says v1 design is not approved and motion is only being evaluated.

Rewrite after cleanup to reflect the current validated v1 foundation.

### `BACKLOG.md`

Stale v0 authority. It still says:

- current v0 build;
- GSAP is backlog/default-risk;
- update `V0_SCOPE.md` when promoting work.

Rewrite into a v1 backlog or delete it if no useful v1 backlog remains.

### `AGENTS.md`

Mostly current, but its migration rule still says not to perform broad cleanup simply because a file belongs to v0.

That rule should be updated after founder approval of this audit because the founder has now explicitly requested a clean-cut v1 working tree.

### anti-slop skill

`skills/portfilo-anti-slop/SKILL.md` still references `docs/V0_SCOPE.md` in its authority sequence.

Fix to `docs/V1_SCOPE.md`.

---

# 10. Documentation audit

Current `docs/` inventory:

- 32 files;
- ~357 KB.

## Keep as v1 authority or supporting standards

Keep/adapt:

- `COPY_STYLE.md`
- `DOCUMENT_STATUS.md`
- `EDITORIAL_PACKAGING_STANDARD.md`
- `EDITORIAL_STANDARD.md`
- `IMAGE_SYSTEM.md`
- `PHOTO_TREATMENT.md`
- `PROJECT_STATE.md`
- `PUBLISHING_STANDARD.md`
- `RESEARCH_STANDARD.md`
- `SOCIAL_DISTRIBUTION.md`
- `STYLE_RESEARCH_STANDARD.md`
- `V1_DESIGN_DIRECTION.md`
- `V1_DESIGN_SYSTEM.md`
- `V1_SCOPE.md`
- `WRITING_SYSTEM.md`

Some of these still contain publication-era terminology and should be adapted when the relevant editorial/distribution gate is opened.

## Consolidate/update

- `BEEHIIV_EMAIL_SETUP.md`
- `EMAIL_SYSTEM_PLAN.md`

Recommendation: replace these with one current v1 newsletter-system document after the API namespace and confirmation flow are final.

- `CLOUDFLARE_PRODUCTION_SETUP.md`

Keep the operational purpose but rewrite its branch/runtime references for v1.

## Delete from active v1 branch

These are v0-specific, superseded, or not part of the approved v1 product:

- `CONTENT_PLANNING.md`
- `COPY_REPLACEMENT_CANDIDATE.md`
- `DESIGN_DIRECTION.md`
- `EDITORIAL_INTELLIGENCE.md`
- `EDITORIAL_SOURCE_MAP.md`
- `EXPLAINED_STANDARD.md`
- `NAVIGATION_RESEARCH.md`
- `NEWS_SCANNER_PROMPT.md`
- `PORTFILO_TEST_STANDARD.md`
- `POSITIONING_ARCHITECTURE_EXPLORATION.md`
- `REFERENCE_SOURCES.md`
- `SITE_COPY_AND_IA_AUDIT.md`
- `SITE_COPY_IMPLEMENTATION.md`
- `V0_SCOPE.md`

That is 14 docs (~150 KB) removed from the active v1 authority surface.

Git history remains available if any historical decision needs to be recovered.

---

# 11. Research audit

Current `research/` inventory:

- 205 files;
- ~1.62 MB.

The active branch contains extensive v0 homepage, editorial-launch, image-pilot, rejected-copy, and unpublished-story research.

For a clean v1 branch, most of this is no longer operationally useful.

## Recommended retained research

Keep only research that directly supports:

1. current v1 product/design/migration decisions;
2. active editorial standards;
3. the three surviving Journal pieces.

Recommended retained set:

- `research/design/v1-design-direction-research.md`
- `research/design/v1-design-system-ia-research.md`
- `research/migration/v1-runtime-content-migration-plan.md`
- `research/portfilo-product-model-research-v1.md`
- `research/writing-system/research.md`
- `research/image-system/research.md`
- `research/image-system/image-generation-prompt-research.md`
- `research/editorial-packaging/architecture-v1-decision.md`
- `research/editorial-packaging/description-system-research.md`
- `research/IMAGE_BRIEF_TEMPLATE.md`
- `research/STYLE_BRIEF_TEMPLATE.md`
- `research/STYLE_RESEARCH_TEMPLATE.md`
- all five research files for BYD;
- all five research files for digital-bank savings rates;
- all five research files for TikTok commerce.

Under this proposed prune:

- keep: 27 research files (~263 KB);
- remove from active branch: 178 research files (~1.36 MB).

The removed research remains recoverable in Git history.

This is a recommendation, not an automatic deletion rule. If the founder wants to preserve specific unpublished story research for future Journal work, exempt those directories before cleanup.

---

# 12. Privacy/infrastructure consistency issues found

## Privacy is already stale

`privacy.astro` says jsDelivr delivers the site fonts.

Phase 1 moved Instrument Sans and IBM Plex Mono to locally bundled Fontsource packages.

Update Privacy to remove the jsDelivr disclosure.

## SiteHead social/favicons

`SiteHead.astro` still references:

- the old default social image;
- the old favicon set.

Those references should remain only until v1 replacements are approved.

## 404 and confirmation page

Both still link to `/stories`, which is not part of v1.

Fix during Phase 2.

---

# 13. Revised recommended Phase 2

Phase 2 should now be a **clean-cut route/content migration + active-branch prune**, not a compatibility bridge.

Recommended order:

1. update canonical migration authority to reflect clean cut;
2. migrate the three Why articles to Journal;
3. build Journal routes;
4. rebuild Hustle routes;
5. add Work collection/routes;
6. add Services route;
7. add Contact route with direct email;
8. namespace newsletter API to `/api/newsletter/subscribe`;
9. decide whether confirmation can move to `/newsletter/confirmed` with beehiiv;
10. delete News routes/articles/assets;
11. delete Why routes;
12. delete Standards;
13. delete v0 redirect file;
14. delete FooterAcquisition;
15. remove legacy brand variants;
16. adapt Privacy/404/confirmation;
17. prune v0-only docs/research after active-authority references are reconciled;
18. run reference/orphan audit;
19. run install/check/build;
20. stop for founder approval before Phase 3 homepage replacement.

Do not delete the old homepage file until its Phase 3 replacement is ready at the same path.

---

# 14. Recommendation

Approve the **clean v1 working-tree strategy**:

- no legacy News bridge;
- no hypothetical redirect preservation;
- namespaced newsletter API;
- remove unneeded v0 routes/content/assets;
- aggressively prune obsolete v0 docs/research from the active v1 branch;
- retain only current authority, useful shared standards, surviving Journal evidence, and v1 research;
- rely on Git history for historical recovery.

This produces a smaller and clearer codebase before the actual v1 homepage and Work showcase are built.


---

# 15. Execution result

Phase 2 completed the clean-cut migration.

Validated runtime commit:

`a0f6878bcd205c3ebd0089ac2730195d9a806281`

CI run:

`34781911660`

Result:

**PASS**

Tracked files:

- before cleanup audit: 306;
- after Phase 2 cleanup: 87.

Approximate tracked size:

- before: 7.69 MB;
- after: 3.29 MB.

Remaining v0-era favicon/social-preview files are intentional release blockers awaiting their own v1 identity replacement decision.
