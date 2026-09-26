---
name: nassim-taleb
description: >
  Apply documented principles from Nassim Nicholas Taleb's work on uncertainty
  (fat tails, Black Swans, fragility and antifragility, redundancy, optionality,
  and skin in the game) to risk management, exposure to rare events, and
  incentive asymmetries.
version: 1.0
status: available
---

# Purpose

This skill asks what happens in the tail. It classifies exposures as fragile, robust, or antifragile. It distrusts forecasts and optimization in domains dominated by extreme events, favors redundancy and capped downside with open upside, and asks who bears the consequences of being wrong. This is a framework derived from Taleb's writing. It does not simulate or speak for Nassim Taleb.

# When to Use

- Risk management, leverage, and concentration decisions
- Anything exposed to rare, extreme events: markets, supply chains, reputations, pandemics
- Plans that depend on accurate forecasts of remote outcomes
- Incentive structures where decision-makers don't bear the downside

Do not use for:

- Routine operating decisions in stable, thin-tailed domains, except to confirm they are thin-tailed

# Core Questions

- **What happens in the tail?** (MINDS summary, not a quotation)
- Is this exposure fragile, robust, or antifragile?
- Where is the downside capped and the upside open?
- Who bears the cost of being wrong?

# Documented Principles

| ID | Principle (MINDS' wording) | Provenance | Source |
|---|---|---|---|
| P1 | There are two domains. In thin-tailed "Mediocristan" no single observation changes the total much. In fat-tailed "Extremistan" a single observation can dominate. Methods valid in one fail in the other. | DOCUMENTED | S2, S4 |
| P2 | Black Swans are rare, have extreme impact, and are explained only in hindsight. Do not rely on predicting them. Reduce exposure to the negative ones. | DOCUMENTED | S2 |
| P3 | Where payoffs are complex and fat-tailed, avoid optimization and value redundancy. Redundancy is costly but works like insurance for survival. | DOCUMENTED | S4 |
| P4 | Avoid predictions of remote payoffs. Standard statistical measures are unreliable in the fat-tailed domain. | DOCUMENTED | S4 |
| P5 | Systems are fragile (harmed by volatility), robust (unaffected), or antifragile (they gain from volatility). Seek antifragility and optionality. Consider a barbell of very safe and very speculative exposures. | DOCUMENTED | S3 |
| P6 | Skin in the game: those who make risky decisions should bear their downside. Its absence lets risk be hidden and transferred to others, especially in the tails. | DOCUMENTED | S5, S6 |
| P7 | Avoid ruin above all. An irreversible catastrophic loss cannot be averaged out by later gains. | DOCUMENTED | S6 |
| P8 | The agent must classify the domain as thin- or fat-tailed before using any forecast, average, or standard deviation in the analysis. | OPERATIONALIZED | P1, P4 |

# Analytical Procedure

1. **Domain (P1, P8).** Is the relevant outcome thin-tailed or fat-tailed? If fat-tailed, discount forecasts and averages.
2. **Ruin check (P7).** Can any option lead to irreversible loss that ends the game? Eliminate or cap it first.
3. **Fragility (P5).** For each option, ask whether it is hurt more by a shock than it gains from an equal positive surprise.
4. **Redundancy (P3).** Where is the plan optimized with no slack? Add buffers, spare capacity, and alternatives.
5. **Optionality (P5).** Restructure options toward small, known costs with large potential upside.
6. **Skin in the game (P6).** Who decides, and who bears the downside? Flag any mismatch.

# What This Framework Pays Attention To

- Tail exposure and ruin
- Fragility created by optimization and leverage
- Asymmetric payoffs and incentives

# What This Framework May Underweight

- Ordinary operating improvements in stable domains
- The cost of redundancy when tails really are thin
- Precise valuation (see Buffett)

# Questions to Ask

- What is the worst case, and could we survive it?
- Where have we removed all slack to look efficient?
- If a shock hits, do we lose more than we would gain from an equal windfall?
- Who gets paid if this works, and who pays if it fails?

# Output Guidance

Format each item as one short, labeled bullet of one or two sentences, about 80 words in total. See the Formatting Rules in council/SKILL.md.

Inside a Council, return: **Sees**, **Matters most**, **Risk** (lead with ruin), **Ask**, **Move**, and **Blind spot**.

Open with: "Applying principles documented in Taleb's work on uncertainty…"
Never write "Taleb would…".

# Sources

See SOURCES.md. Primary: The Black Swan (2007), Antifragile (2012), Skin in the Game (2018), "The Fourth Quadrant" (2008), and Taleb and Sandis (2014).
