# C021 Evidence Ledger

_Last updated: 2026-09-03_

## Status

**PRELIMINARY / SOURCE RECONNAISSANCE**

No national subtotal in this file is publication-ready yet.

## E001 - National baseline around/below 200 MW

**Claim type:** attributed government estimate  
**Status:** usable as baseline, not as reconciled total

BusinessWorld reported DICT Secretary Henry Aguda saying Philippine data-center capacity was about 200 MW in February 2026. July 2026 reporting quoted him saying the country did not yet have 200 MW.

Interpretation:

- current government baseline is roughly `<=200 MW` during 2026;
- exact date, metric basis and included facility universe need clarification;
- do not combine this baseline with future target MW.

## E002 - STT is a major source of reconciliation risk

**Claim type:** operator portfolio / current-status evidence  
**Status:** contradiction open

STT's current Philippines location index states seven data centers and more than 140 MW of IT load. BusinessWorld reported in April 2026 that STT operates seven Philippine data centers with combined IT load of nearly 150 MW and that Fairview was at 28 MW, expected to reach 32 MW by year-end.

However, current STT facility pages label Fairview 1 and Cavite 2 as `Launching Soon`, while Fairview 2-4 are `Under Development`.

Interpretation:

The portfolio-level number may include capacity that is not all currently operating, or the facility-status pages may be stale. Do not use the >140/nearly 150 MW figure as an operating subtotal until reconciled.

## E003 - Digital Edge NARRA1 provides a clean operating anchor

**Claim type:** operator current capacity  
**Status:** strong

Digital Edge currently lists NARRA1 at 10 MW and its launch record states the facility was ready for service from 1 March 2023.

Classification:

- `10 MW IT load`
- `OPERATING`

## E004 - A-FLOW shows why phase separation matters

**Claim type:** first-party / government project status  
**Status:** strong

BOI and FLOW state that ML1's first phase went live in November 2025 with 6 MW of IT load. The full three-building campus is planned for 36 MW.

Classification:

- `6 MW IT load` -> `OPERATING`
- remaining `30 MW` -> not operating; status requires phase-level execution evidence

This is a clear example of why a campus's full-buildout number cannot be treated as present supply.

## E005 - VITRO Sta. Rosa is operating, but live MW needs reconciliation

**Claim type:** operator/government  
**Status:** facility operating; capacity basis open

VITRO's current Sta. Rosa page states 36 MW IT load capacity. BOI confirms the facility was inaugurated in April 2025.

A separate VITRO site page still contains language describing an initial 10 MW IT power capacity in 2024.

Interpretation:

- facility operating status is strong;
- whether all 36 MW should be counted as currently live/available needs current phase confirmation;
- do not automatically count 36 MW in the clean operating subtotal until reconciled.

## E006 - Beeinfotech is operating but its MW basis is not explicit

**Claim type:** operator  
**Status:** operating; metric qualification open

Beeinfotech's current homepage states `20 MW+` and more than 3,600 racks. A March 2025 company release confirms the HIVE's grand opening.

Interpretation:

- The HIVE is operating;
- `20 MW+` is not explicitly labeled IT load on the cited current page;
- exclude from strict IT-load subtotal until metric definition is confirmed.

## E007 - YCO demonstrates the danger of mixing utility power and IT load

**Claim type:** operator  
**Status:** metric conflict open

YCO currently states Malvar One has 75 MW of available utility power and 30 MW energized, and describes the facility as a 30 MW powered core and shell.

Its 2023 groundbreaking release described Malvar One as a 12 MW critical IT-load facility.

Interpretation:

- 30 MW energized utility/powered-shell capacity is not interchangeable with 12 MW critical IT load;
- current IT-load figure must be sourced before inclusion in the clean ledger.

## E008 - Evolution/Megawide remains a future-status question

**Claim type:** operator project disclosure  
**Status:** committed / RFS confirmation required

Evolution's current market page lists 69 MW IT load at General Trias, Cavite with RFS Q3 2026. Earlier Megawide disclosures describe a 69 MW long-term development with an initial 23 MW phase.

As of 3 September 2026, a Q3 RFS target is not sufficient evidence that service has begun.

Interpretation:

- preserve `69 MW IT load` as project design capacity;
- do not classify as operating without a current RFS/launch confirmation;
- phase-level status may differ from full 69 MW campus status.

## E009 - DAMAC 250 MW is not current capacity

**Claim type:** government-reported investment/project discussion  
**Status:** announced

BOI reported June 2026 discussions on progress of a 250 MW Philippine data-center facility following a January 2026 meeting about a planned Laguna investment.

No first-pass evidence establishes 250 MW as operating or under construction.

Classification:

- `250 MW` -> `ANNOUNCED` pending stronger execution evidence.

## E010 - Equinix is operating but cannot yet be converted to MW

**Claim type:** operator  
**Status:** operating; capacity unavailable in comparable unit

Equinix completed acquisition of three Manila data centers in June 2025 and states the sites provide more than 1,000 cabinets.

The current Philippine site does not publish a comparable MW total.

Interpretation:

- count the facilities in the operator census;
- do not estimate MW from cabinet count using generic density assumptions.

## Preliminary editorial finding

C021 has a stronger story than a simple `current capacity = X MW` update.

The first pass shows at least three distinct reasons national figures can diverge:

1. **status mixing** - operating phases versus full buildout and future projects;
2. **metric mixing** - IT load versus utility/energized power versus unspecified MW;
3. **portfolio timing** - operator pages, reporting dates and government baselines may describe different commissioning moments.

That finding is promising but not yet publishable. The next phase must determine whether a clean bottom-up subtotal can be produced, or whether the final story should focus on explaining why capacity numbers conflict.
