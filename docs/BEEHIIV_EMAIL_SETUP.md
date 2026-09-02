# Portfilo beehiiv Email Setup

_Status: SUPERSEDED 2026-09-02_

Do not configure or publish a beehiiv Double Opt-in Email for Portfilo v0.

The beehiiv-editor approach was evaluated in browser and rejected because it did not provide the level of design control required for the Portfilo confirmation experience.

The approved architecture is now documented in:

- `docs/EMAIL_SYSTEM_PLAN.md`
- `docs/CUSTOM_CONFIRMATION_SETUP.md`

Current rule:

- Portfilo sends its own confirmation email through Resend;
- Portfilo validates an encrypted confirmation token at `/api/confirm`;
- only after that verification does Portfilo create the subscriber in beehiiv;
- beehiiv `double_opt_override` is therefore `off` for that final API call;
- beehiiv's own opt-in email and opt-in redirect are not used;
- beehiiv remains responsible for confirmed subscriber storage, regular newsletter delivery, and unsubscribe handling.

If there are unpublished edits in beehiiv's Opt in email editor from earlier QA, leave them unpublished. They are not part of the Portfilo v0 runtime path.
