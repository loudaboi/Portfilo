# Portfilo Repository State Reconciliation Audit — 2026-09-07

_Status: HISTORICAL AUDIT / NON-AUTHORITY_

## Purpose

Record the repository-state problem found on 2026-09-07 and the cleanup performed to restore one clear current authority chain. This file is provenance only. It does not define the current phase, next task, product scope, or implementation sequence.

Current authority remains:

1. `AGENTS.md`;
2. `docs/PROJECT_STATE.md`;
3. `docs/DOCUMENT_STATUS.md`;
4. `docs/V0_SCOPE.md`;
5. the canonical standard/approved decision record relevant to the task;
6. runtime code for actual behavior.

## Problem found

During the redesign discussion, `docs/EXECUTION_PLAN.md` was created as a second canonical active-sequence document. It explicitly claimed authority over `docs/PROJECT_STATE.md`, creating an authority collision and making future handoffs vulnerable to phase drift.

The repository also contained expected historical drift:

- `README.md` described the earlier publication state and used an outdated authority-reading order;
- older navigation/copy implementation records still contain once-current navigation and taxonomy declarations;
- `research/homepage-copy-v1.md` still presents rejected generated copy candidates;
- `research/image-system/homepage-hero-image-brief-v1.md` still says concept selection is pending even though candidate 2 was later selected;
- `research/portfilo-product-model-research-v1.md` and `research/editorial-lens-four-issue-pilot-v1.md` retain pre-approval status text even though their relevant decisions were later founder-approved;
- the selected homepage hero lacked an exact repository provenance/selection record even though `docs/PROJECT_STATE.md` and `docs/DOCUMENT_STATUS.md` already referred to one.

These historical records were not all rewritten because `docs/DOCUMENT_STATUS.md` already maps which clauses are current, historical, rejected, partial, or superseded. Rewriting old research merely to make every old status line read as current would erase useful provenance and create unnecessary churn.

## Cleanup performed

The reconciliation cleanup:

- removed `docs/EXECUTION_PLAN.md` so `docs/PROJECT_STATE.md` is again the only active phase/next-task authority;
- updated `README.md` to match the reconciled product state, correct authority order, working branch, release boundary, and clean-handoff procedure;
- created `research/image-system/homepage-hero-selection-v1.md` with the founder-selected candidate 2 source/derivative filenames, dimensions, hashes, binary-availability rule, no-substitution rule, and live-HTML AI-image disclosure requirement;
- audited stale current-phase, next-task, navigation, homepage-image, and rejected-copy declarations against `docs/DOCUMENT_STATUS.md`;
- preserved mapped historical records rather than rewriting research history;
- made no runtime homepage, content-schema, taxonomy, route, newsletter-template, or production-configuration changes.

## Audit result

No additional authority-breaking defect was identified in the inspected stale declarations. The remaining stale in-file statuses/contracts are historical provenance already subordinated by `docs/DOCUMENT_STATUS.md`.

The exact current task continues to live only in `docs/PROJECT_STATE.md`.

## Validation note

This cleanup is documentation/repository-state work only. It does not establish a new `npm run check` or `npm run build` result.
