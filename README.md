# Portfilo

Portfilo is a business and technology publication.

News is the current/day-to-day editorial layer. Why is the question-led deeper layer. Hustle is the people-led reported layer focused on founders, operators, and business owners. Public topics are `Business / Technology / Startup / AI`. Newsletter acquisition is an important recurring-reader relationship, but the publication remains editorial-first and free in v0.

## Repository authority

The repository is the durable source of truth. Chat conversations are working sessions, not project memory.

Read current authority in this order:

1. `AGENTS.md`
2. `docs/PROJECT_STATE.md`
3. `docs/DOCUMENT_STATUS.md`
4. `docs/V0_SCOPE.md`
5. the canonical standard and approved decision record relevant to the task
6. current source code for actual runtime behavior

Do not create a second execution-plan, roadmap, phase-state, or other file that competes with `docs/PROJECT_STATE.md`.

For nontrivial discretionary Portfilo product, copy, design, imagery, newsletter, naming, social, or other public-facing decisions, read and apply:

`skills/portfilo-anti-slop/SKILL.md`

Historical research is provenance, not current authority unless `docs/DOCUMENT_STATUS.md` says otherwise.

## Branch and release boundary

Working branch:

`build/portfilo-v0`

Release boundary:

`main`

Do not merge to `main`, deploy, or release without the relevant explicit approval.

The intended Cloudflare model is working-branch preview/test deployments and `main` as production. The actual external Cloudflare branch setting must be verified before release.

## Current public route model

Keep:

- `/`
- `/news`
- `/news/[slug]`
- `/why`
- `/why/[slug]`
- `/hustle`
- `/hustle/[slug]`
- `/standards`
- `/privacy`
- `/confirmed`
- `/404`

Retired:

- `/stories` redirects to `/why`;
- `/stories/[slug]` redirects to the corresponding `/why/[slug]` legacy target;
- `/subscribe` redirects to `/#newsletter`;
- `/about` redirects to `/`;
- public Series presentation is not part of v0.

The current masthead is:

`Portfilo | News | Why | Hustle`

There is no individual public author/byline system in v0.

## Newsletter

Every visible newsletter form uses the shared `NewsletterSignup.astro` component and `/api/subscribe` endpoint.

beehiiv owns double opt-in confirmation, subscriber storage, delivery, and unsubscribe handling. Portfilo does not maintain a separate subscriber database.

The homepage `/#newsletter` section is the direct signup destination.

## Responsive contract

- 1440 / 1366: full desktop.
- 1024: compact desktop/laptop with preserved structure and deliberate side breathing room.
- 768: tablet remains in the desktop layout family with selective reflow only where needed.
- 390 / 375 / 320: deliberate phone simplification.

Forms should remain constrained on tablet rather than becoming unnecessarily wide after stacking. Typography must scale progressively across these widths.

## Technical direction

For v0:

- Astro + TypeScript;
- static-first output;
- Astro Content Collections + local Markdown;
- one internal collection currently named `stories` with public `section: news | why | hustle`;
- custom CSS;
- minimal client-side JavaScript;
- no frontend framework by default;
- no database, authentication, or custom CMS;
- Cloudflare Pages;
- one narrow Pages Function at `/api/subscribe`;
- beehiiv for newsletter infrastructure.

Node is pinned through `.node-version`.

Do not add infrastructure for hypothetical scale. `docs/V0_SCOPE.md` owns the detailed boundaries.

## Local development

```bash
npm install
npm run dev
```

Validation:

```bash
npm run check
npm run build
npm run preview
```

Never report a command as passing unless it actually ran against the relevant state.

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

## Handoff

Before a new contributor writes anything:

1. verify branch and HEAD;
2. read `AGENTS.md`;
3. read `docs/PROJECT_STATE.md`;
4. read `docs/DOCUMENT_STATUS.md`;
5. read `docs/V0_SCOPE.md`;
6. read the task-specific canonical standards;
7. apply the anti-slop skill when the task contains a material discretionary decision;
8. stay inside the current approval gate.
