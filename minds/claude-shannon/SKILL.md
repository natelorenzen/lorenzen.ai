---
name: claude-shannon
description: >
  Apply principles from Claude Shannon's information theory (separating signal
  from meaning, channels with limited capacity, noise, redundancy, and
  abstraction of a problem into its essential structure) as an
  OPERATIONALIZED lens on information flow, measurement, and problem
  reformulation.
version: 1.0
status: available
---

# Purpose

This skill asks what is signal and what is noise, where information is lost as it moves through a system, and what the simplest abstract form of the problem is. Shannon's theory concerns engineering communication and deliberately excludes meaning. Applying it to organizations, markets, and measurement is an analogy, labeled OPERATIONALIZED. The skill does not simulate or speak for Claude Shannon.

# When to Use

- Information flow in an organization: reporting chains, handoffs, dashboards
- Measurement and metrics that may be noisy or low-bandwidth
- Communication problems: messages that don't get through
- Problems that might become tractable if restated abstractly

Do not use for:

- Questions of meaning, persuasion, or values, since the theory explicitly sets meaning aside

# Core Questions

- **What is signal, and what is noise?** (MINDS summary, not a quotation)
- Where is information being lost or distorted?
- What is the capacity of this channel, and are we exceeding it?
- What is the simplest abstract form of this problem?

# Documented Principles

| ID | Principle (MINDS' wording) | Provenance | Source |
|---|---|---|---|
| P1 | The engineering problem of communication is reproducing a message selected from a set of possible messages. Its meaning is irrelevant to that problem. | DOCUMENTED | S1 |
| P2 | Information can be measured by the logarithm of the number of possible messages, so that capacity adds sensibly across channels. | DOCUMENTED | S1 |
| P3 | Every channel has a capacity, and noise in the channel limits reliable transmission. Redundancy and coding can overcome noise up to that capacity. | DOCUMENTED | S1 |
| P4 | The statistical structure of messages (redundancy) allows compression and error correction. | DOCUMENTED | S1 |
| P5 | Organizational channels (meetings, reports, metrics) have limited capacity and add noise at each relay. Critical signals need redundancy and fewer hops. | OPERATIONALIZED | P3 |
| P6 | Restating a problem abstractly, stripped of domain specifics, can reveal its structure and the solutions that the concrete framing hides. | OPERATIONALIZED | S1 (the method of the paper), P1 |
| P7 | The agent must trace one critical signal from source to decision-maker and count the relays and distortions. | OPERATIONALIZED | P5 |

# Analytical Procedure

1. **Name the critical signal.** What information must reach the decision point, such as customer churn reasons, defect data, or a market shift?
2. **Trace the channel (P5, P7).** Map every relay from source to decision. Where is it summarized, delayed, or filtered?
3. **Noise (P3).** What variation or distortion is added at each step? How much of what is reported is noise?
4. **Capacity (P2, P3).** Is the channel overloaded, with too many metrics or messages for the attention available?
5. **Redundancy (P3, P4).** Where should critical signals be duplicated or confirmed through a second channel?
6. **Abstraction (P6).** Restate the problem in its simplest abstract form. Does a known solution apply?

# What This Framework Pays Attention To

- Information loss and distortion
- Channel capacity and overload
- Problem structure beneath the specifics

# What This Framework May Underweight

- Meaning, interpretation, and motives, which it sets aside by design (see Cialdini, Girard)
- Its own analogy limits outside engineering

# Questions to Ask

- How many people does a front-line signal pass through before it changes a decision?
- Which metrics are mostly noise?
- What are we asking this channel to carry that it can't?
- What problem is this, stripped of our industry's details?

# Output Guidance

Inside a Council, return: **Notices**, **Important**, **Risks**, **Questions**, **Possible actions**, and **Limitations**. Label organizational applications as analogies.

Open with: "Using a framework derived from Shannon's information theory, applied here by analogy…"
Never write "Shannon would…".

# Sources

See SOURCES.md. Primary: "A Mathematical Theory of Communication" (1948).
