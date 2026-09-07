# Portfilo

Portfilo is a business-and-technology media product.

The current v0 direction is a **focused business/technology briefing + original reporting** product: News is the intended current/day-to-day layer, Features are the deeper editorial layer, and newsletter/email acquisition is a primary recurring-reader relationship. Portfilo makes no geographic product promise and remains free in v0.

The working branch is currently in a website/product redesign. The transitional homepage is not design or copy precedent. The exact active task and approval boundary live only in `docs/PROJECT_STATE.md`.

## Repository authority

The repository is the durable source of truth. Chat conversations are working sessions, not project memory.

Read current authority in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

Do not create a second execution-plan, roadmap, phase-state, or other file that competes with `docs/PROJECT_STATE.md` for the current phase or next task.

For nontrivial discretionary Portfilo product, copy, design, imagery, newsletter, naming, social, or other public-facing decisions, read and apply:

`skills/portfilo-anti-slop/SKILL.md`

Historical research is provenance, not current authority unless `docs/DOCUMENT_STATUS.md` says the decision has been promoted.

## Current branch and release boundary

Authoritative working branch:

`build/portfilo-v0`

`main` remains the separate release boundary. Do not merge to `main` without an intentional release review.

## Current product and implementation state

Current approved direction includes:

- brand: Portfilo;
- business-and-technology media product;
- focused business/technology briefing + original reporting;
- News as the intended current/day-to-day editorial layer;
- Features as the deeper editorial layer;
- intended reader-facing coverage labels: `Business / Technology / Startup / AI`;
- no geographic product promise;
- newsletter/email acquisition as a primary product relationship;
- no approved public cadence or reading-time promise;
- v0 remains free.

The repository is intentionally between the old runtime and the approved redesign. In particular, the current content schema still uses the older topic values, and the current homepage is a rejected transitional implementation. Approved target state must not be mistaken for already-completed migration.

The operational name `Portfilo Brief` still appears on current website/email surfaces. The approved redesign direction is a later coordinated migration to `Newsletter`; do not change it piecemeal.

## Technical direction

For v0:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections + local Markdown;
- custom CSS;
- minimal client-side JavaScript;
- no frontend framework by default;
- no database, authentication, or custom CMS;
- Cloudflare Pages deployment;
- one narrow Pages Function at `/api/subscribe`;
- beehiiv for subscriber confirmation, storage, delivery, and unsubscribe handling.

Do not add infrastructure for hypothetical scale. `docs/V0_SCOPE.md` owns the detailed boundaries.

## Clean handoff procedure

Before a new chat or contributor writes anything:

1. verify the current branch and HEAD;
2. read `AGENTS.md` completely;
3. read `docs/PROJECT_STATE.md` completely;
4. read `docs/DOCUMENT_STATUS.md` completely;
5. read `docs/V0_SCOPE.md` completely;
6. read the canonical standards/research named by the exact task;
7. apply `skills/portfilo-anti-slop/SKILL.md` when the task contains a nontrivial discretionary decision;
8. stay inside the exact approval gate.

At a meaningful handoff boundary, commit stable work, update `docs/PROJECT_STATE.md` only when the current phase/next task actually changes, update `docs/DOCUMENT_STATUS.md` when authority changes, record unresolved assets/issues, and state the exact next gate.

## Local development

```bash
npm install
npm run dev
```

Validation commands when runtime work requires them:

```bash
npm run check
npm run build
```

Never report either command as passing unless it actually ran in the relevant state.

## Security

Never commit or upload:

- `.env` or `.env.*`;
- `.dev.vars`;
- API keys;
- access tokens;
- passwords;
- private credentials;
- `node_modules`;
- build output unless explicitly required.

Use `.dev.vars.example` only as a local configuration template.

For a clean local handoff archive from a stable commit:

```bash
git archive --format=zip --output=portfilo-context.zip HEAD
```
