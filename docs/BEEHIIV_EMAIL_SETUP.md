# Portfilo beehiiv Email Setup

_Status: v0 operational configuration locked_

_Last updated: 2026-09-02_

## Purpose

beehiiv owns double opt in, confirmed-subscriber storage, newsletter sending, unsubscribe handling, and provider email infrastructure for Portfilo v0.

This file records the live v0 beehiiv configuration and the reusable `Portfilo Brief v0` template rules.

Canonical architecture:

`docs/EMAIL_SYSTEM_PLAN.md`

## 1. Subscription API

Portfilo's server endpoint is:

`functions/api/subscribe.js`

Required behavior:

```js
reactivate_existing: true
send_welcome_email: false
double_opt_override: "on"
```

Keep the existing Portfilo website UTM attribution.

The beehiiv API key remains server-side only in `.dev.vars` locally and in the Cloudflare Pages production environment.

Never paste the key into ChatGPT, GitHub, screenshots, or browser-visible code.

## 2. Double opt-in email

Double opt in: **ON**.

The revised confirmation email has been intentionally published.

Copy:

**Subject**

`Confirm your Portfilo Brief subscription`

**Preview text**

`Confirm your email to finish subscribing.`

**Kicker**

`PORTFILO BRIEF / CONFIRMATION`

**Heading**

`Confirm your subscription.`

**Body**

`Click below to finish signing up for Portfilo Brief.`

**Button**

`Confirm subscription`

### Confirmation-email styles

Surface:

- canvas/background: `#F4F0E8`;
- no rounded-card treatment;
- no decorative image;
- left aligned.

Kicker:

- Arial;
- Semi Bold;
- `12 px`;
- `1.25em` line height;
- `#0050A4`;
- gap above `0 px`;
- gap below `8 px`.

Heading:

- Arial;
- Bold;
- `28 px`;
- `1.15em` line height;
- `#171614`;
- gap above `0 px`;
- gap below `14 px`.

Body:

- Georgia;
- Regular;
- `16 px`;
- `1.50em` line height;
- `#69655E`;
- gap above `0 px`;
- gap below `24 px`.

Button:

- Arial;
- Semi Bold;
- `15 px`;
- text `#FFFFFF`;
- background `#0050A4`;
- radius `0 px`;
- border `0 px`;
- padding top/right/bottom/left: `13 / 18 / 13 / 18 px`;
- gap above `0 px`;
- gap below `0 px`;
- left aligned.

Footer should use the same restrained Portfilo Brief footer styling documented below.

Do not add a brand manifesto, founder message, topic list, image, second CTA, issue date, story modules, or correction treatment to the confirmation email.

## 3. Welcome email and Smart Nudge

Welcome Email: **OFF**.

The API also remains:

`send_welcome_email: false`

Do not enable a generic welcome email for v0.

Smart Nudge: **OFF** for v0.

Revisit either feature only when actual reader behavior creates a clear reason.

## 4. Sender and reply identity

Current v0 configuration:

- sender name: `Portfilo`;
- post-author-as-sender: OFF;
- Reply-To: `portfilo.ph@gmail.com`;
- sending remains beehiiv/provider managed.

Do not use an individual article author as the recurring sender identity.

A custom Portfilo sending domain can be evaluated after the production domain is stable. It is not a dependency for the v0 architecture.

## 5. Post-confirmation redirect

Portfilo's owned destination is:

`/confirmed`

Implementation:

`src/pages/confirmed.astro`

After Portfilo has a stable production domain, set beehiiv's Opt-in Redirect URL to:

`https://<production-domain>/confirmed`

Do not use localhost, `127.0.0.1`, a Wrangler local URL, or a temporary preview URL as the permanent redirect.

This setting remains pending until the final public domain is available.

## 6. Reusable newsletter template

Template name:

`Portfilo Brief v0`

Build method:

- blank beehiiv Visual Editor template;
- single-column editorial layout;
- no custom HTML dependency;
- no stock newsletter layout dependency;
- no cards, shadows, gradients, or rounded content containers.

### Global surface

- Canvas: `#F4F0E8`;
- Post: `#F4F0E8`;
- post border: none;
- corner radius: `0 px`;
- border width: `0 px`;
- template margin: top `40 px`, right `0 px`, bottom `40 px`, left `0 px`;
- template/post padding: top `40 px`, right `28 px`, bottom `40 px`, left `28 px`.

Native beehiiv title, subtitle, and date elements are hidden from the email. Keep them available for operational post metadata rather than using them as the visible masthead.

Read-online display: OFF.

Reading-time display: OFF.

Native date display: OFF.

### Masthead

`PORTFILO BRIEF` uses Heading 6:

- Arial;
- Semi Bold;
- `12 px`;
- `1.25em` line height;
- `#0050A4`;
- left aligned;
- gap above `0 px`;
- gap below `6 px`.

`[ISSUE DATE]` uses Heading 5:

- Arial;
- Regular;
- `12 px`;
- `1.35em` line height;
- `#69655E`;
- left aligned;
- gap above `0 px`;
- gap below `0 px`.

Masthead Content break:

- color `#0050A4`;
- width `100%`;
- thickness `3 px`;
- solid;
- gap above `14 px`;
- gap below `30 px`.

Content-break styling is global in the editor. Do not use another Content break for neutral secondary-story separators.

## 7. Lead-story module

Topic `[TOPIC]`, Heading 6:

- Arial;
- Semi Bold;
- `12 px`;
- `1.25em` line height;
- `#0050A4`;
- left aligned;
- gap above `0 px`;
- gap below `8 px`.

Headline `[LEAD STORY HEADLINE]`, Heading 1:

- Arial;
- Bold;
- `32 px`;
- `1.12em` line height;
- `#171614`;
- left aligned;
- gap above `0 px`;
- gap below `14 px`.

Dek `[LEAD STORY DEK — ONE OR TWO SENTENCES]`, Paragraph:

- Georgia;
- Regular;
- `17 px`;
- `1.55em` line height;
- `#69655E`;
- left aligned.

Keep the established paragraph spacing in the template. Do not stack extra image top spacing on top of it.

Lead CTA button:

- label `Read story →`;
- Arial;
- Semi Bold;
- `15 px`;
- text `#FFFFFF`;
- background `#0050A4`;
- padding top/right/bottom/left: `13 / 18 / 13 / 18 px`;
- radius `0 px`;
- border `0 px`;
- left aligned;
- fit/auto width.

The master may use `https://example.com` as the temporary CTA URL. Replace it before every real send.

## 8. Secondary-story module

The entire secondary story lives inside one beehiiv Section. Duplicate or delete the whole Section, not individual fragments.

Section:

- top border: `1 px solid #CBC5BB`;
- right/bottom/left border: none;
- radius `0 px`;
- outer top spacing `36 px`;
- other outer spacing: zero / `-`;
- inner top spacing `28 px`;
- other inner spacing: zero / `-`;
- background remains paper.

Topic `[TOPIC]`, Heading 6:

- Arial;
- Semi Bold;
- `12 px`;
- `1.25em`;
- `#0050A4`;
- left aligned;
- bottom gap `8 px`.

Headline `[SECONDARY STORY HEADLINE]`, Heading 2:

- Arial;
- Bold;
- `22 px`;
- `1.20em` line height;
- `#171614`;
- left aligned;
- gap above `0 px`;
- gap below `10 px`.

Dek `[SECONDARY STORY DEK — OPTIONAL]`:

- use the same Georgia Paragraph style as the lead dek;
- delete the entire block when no dek is needed.

`Read story →`, Heading 4 with hyperlink:

- Arial;
- Semi Bold;
- `14 px`;
- `1.30em` line height;
- `#0050A4`;
- left aligned;
- underline ON;
- italic OFF;
- gap above `0 px`;
- gap below `0 px`.

Global Link style:

- bold toggle OFF;
- italic OFF;
- underline ON;
- font color `#0050A4`;
- underline color `#0050A4`.

The Heading 4 role supplies the Semi Bold weight for secondary CTAs.

## 9. Variable story count

Use the master as follows:

- 1 story: delete the entire secondary Section;
- 2 stories: use the one secondary Section;
- 3 stories: duplicate the entire secondary Section once;
- 4 stories: duplicate it twice;
- 5+ available stories: curate the strongest few rather than including everything.

Never leave an orphan separator, empty secondary module, or empty optional dek.

## 10. Optional lead image

Images are optional. Do not keep an empty image block in the master.

Default editorial ratio:

`16:9`

Recommended export:

`1200 × 675 px`

Use `3:2` when a photograph genuinely requires more height. Charts and graphics may use an appropriate native ratio such as `4:3`.

When inserted between the lead dek and lead CTA:

- width `100%`;
- left aligned;
- radius `0 px`;
- border `0 px`;
- shadow none;
- outer top spacing `0 px` / `-`;
- outer bottom spacing `18 px`;
- outer left/right zero / `-`;
- inner spacing all zero / `-`;
- no caption by default;
- descriptive alt text required;
- image may link to the same lead-story URL.

Do not put essential story meaning only inside the image.

## 11. Optional correction treatment

Do not keep a permanent correction module in the master.

When required, insert a Section immediately after the blue masthead rule and before the lead topic.

Section:

- top border `2 px solid #B42318`;
- right/bottom/left border none;
- radius `0 px`;
- inner top spacing `16 px`;
- outer bottom spacing `28 px`;
- other spacing zero / `-`;
- background remains paper.

`CORRECTION`, Heading 3:

- Arial;
- Semi Bold;
- `12 px`;
- `1.25em` line height;
- `#B42318`;
- left aligned;
- gap above `0 px`;
- gap below `8 px`.

Correction copy:

- normal Georgia Paragraph style;
- `#69655E`.

Optional corrected-story CTA:

- use the existing blue Heading 4 link style;
- label `Read corrected story →` when useful.

Do not use a red background or red CTA.

## 12. Footer

Email footer:

- font Arial;
- background `#F4F0E8`;
- font color `#69655E`;
- border color `#CBC5BB`;
- top border `1 px`;
- border width `100%`;
- left aligned;
- margin `0`;
- padding top/right/bottom/left: `24 / 0 / 24 / 0 px`;
- footer/share links: bold OFF, italic OFF, underline ON;
- link color `#0050A4`;
- underline color `#0050A4`;
- divider color `#CBC5BB`;
- Show logo: No;
- copyright: `Portfilo`.

Leave provider-controlled `Powered by beehiiv` treatment alone for v0.

Do not create a separate beehiiv website just to modify newsletter social/footer behavior. Portfilo's Astro website remains canonical.

If unwanted social icons appear in actual production email, remove them through the relevant beehiiv publication/social settings only after confirming they are truly present in a received email.

## 13. Mailing address

The publication address field is currently left unset.

beehiiv may show a provider fallback address in emails. That fallback is not Portfilo's own address and must not be represented as such.

Do not enter a fake address or casually publish a private/home address.

The user has accepted the current fallback for setup/testing. Mailing-address/compliance clearance remains a deployment-readiness item before the first public newsletter send.

## 14. Per-issue operating workflow

For every real issue:

1. create a normal post from `Portfilo Brief v0` rather than editing the master;
2. use an operational post title such as `Portfilo Brief / YYYY-MM-DD`;
3. replace `[ISSUE DATE]`, topic labels, headlines, and deks;
4. delete unused optional dek blocks;
5. duplicate/delete whole secondary Sections to match the curated story count;
6. add the optional correction Section only when required;
7. add a lead image only when it materially improves the issue;
8. replace every `https://example.com` placeholder with the exact real story URL;
9. set subject and preview text deliberately;
10. confirm native title/subtitle/date remain hidden from the email;
11. preview desktop and mobile;
12. send a test email to an accessible inbox;
13. verify links, sender, Reply-To, image/alt behavior, footer, and unsubscribe behavior;
14. only then schedule or send the public issue.

Never run destructive layout tests inside the master template.

## 15. QA status

Completed:

- desktop preview: PASS;
- mobile preview: PASS;
- long lead headline wrap: PASS;
- one-story issue with secondary Section removed: PASS;
- optional correction treatment: PASS;
- optional 16:9 image treatment: PASS;
- real inbox test send: PASS, user reported;
- revised double-opt-in email: published and accepted by user.

A specific dark-mode QA result was not separately recorded.

## 16. Production QA still required

Before public launch, verify the deployed environment with a fresh accessible email address:

1. submit through production Portfilo `/subscribe`;
2. require a successful Pages Function request;
3. receive the published beehiiv double-opt-in email;
4. click the confirmation action;
5. land on Portfilo `/confirmed` through the production redirect;
6. verify subscriber state is Active;
7. verify acquisition remains attributed to Portfilo website/API;
8. verify unsubscribe behavior;
9. verify sender and Reply-To identity;
10. resolve mailing-address/compliance clearance;
11. send a final production Portfilo Brief test with real content and links.

## 17. Non-goals

Do not add Resend, custom confirmation tokens, Workers KV, custom transactional-email code, or Turnstile solely to improve email appearance.

Do not make Portfilo v0 depend on custom HTML or paid-only beehiiv presentation features.

The v0 priority is a reliable subscription flow and a disciplined recurring editorial email with minimal infrastructure.
