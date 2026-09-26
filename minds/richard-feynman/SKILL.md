---
name: richard-feynman
description: >
  Apply documented principles from Richard Feynman's talks and writing on
  scientific integrity (not fooling yourself, reporting what could undermine
  your result, reality over public relations, and understanding versus
  naming) to root-cause analysis and to testing technical or empirical claims.
version: 1.0
status: available
---

# Purpose

This skill asks whether we actually understand what is happening, or are fooling ourselves. It demands the kind of integrity that reports everything that could undermine a conclusion, treats reality as the final judge over presentation, and distinguishes real understanding from the ability to name things. This is a framework derived from Feynman's documented talks and writing. It does not simulate or speak for Richard Feynman.

# When to Use

- Root-cause analysis of failures, especially technical ones
- Evaluating claims backed by data, models, or experts
- Situations where the official story and the engineering reality may differ
- Checking whether a team actually understands a mechanism

Do not use for:

- Decisions that must be made before understanding is possible, except to state the risk of acting without it

# Core Questions

- **Do we actually understand what is happening?** (MINDS summary, not a quotation)
- Are we fooling ourselves?
- Have we reported everything that might undermine our conclusion?
- Is the presentation diverging from reality?

# Documented Principles

| ID | Principle (MINDS' wording) | Provenance | Source |
|---|---|---|---|
| P1 | The first principle of scientific integrity is not to fool yourself, and you are the easiest person to fool. | DOCUMENTED | S1 |
| P2 | Integrity means "leaning over backwards": reporting everything that might make a result invalid, including other explanations and the data that doesn't fit. | DOCUMENTED | S1 |
| P3 | "Cargo cult" work follows the forms of rigor without its substance. It has the apparent procedure but lacks the honesty that makes it work. | DOCUMENTED | S1 |
| P4 | For a successful technology, reality must take precedence over public relations, because nature cannot be fooled. | DOCUMENTED | S2 |
| P5 | When engineers' and management's estimates of risk differ greatly, as in the Shuttle case, investigate the gap. It signals that someone is fooling themselves. | DOCUMENTED | S2 |
| P6 | Knowing the name of something is not the same as understanding it. Test understanding by explaining the mechanism simply. | DERIVED | S3 |
| P7 | The agent must list the evidence that would contradict its own leading explanation before concluding. | OPERATIONALIZED | P2 |

# Analytical Procedure

1. **State the claimed understanding (P6).** Explain the mechanism in plain language. Where does the explanation become vague or rely on jargon?
2. **Self-deception check (P1).** What do the people involved want to be true? Where could that be shaping the conclusion?
3. **Lean over backwards (P2, P7).** List the data that doesn't fit, the alternative explanations, and what would invalidate the conclusion.
4. **Form versus substance (P3).** Is the process followed in form, such as reviews, dashboards, and sign-offs, but hollow in substance?
5. **Reality versus presentation (P4, P5).** Compare the estimates of those closest to the work with those presenting it. Investigate large gaps.
6. **Conclude.** State what is actually known, what is assumed, and the cheapest test that would tell them apart.

# What This Framework Pays Attention To

- Honesty about data and uncertainty
- Mechanisms over labels
- Gaps between the engineering and the story

# What This Framework May Underweight

- Social, political, and incentive dynamics (see Munger, Machiavelli)
- Decisions under time pressure

# Questions to Ask

- Could we explain this mechanism to a smart outsider without jargon?
- What result would we be embarrassed to report, and have we reported it?
- What do the people doing the work estimate, compared with what leadership presents?
- Which of our rituals are cargo-cult rigor?

# Output Guidance

Inside a Council, return: **Notices**, **Important**, **Risks**, **Questions**, **Possible actions**, and **Limitations**.

Open with: "Applying principles documented in Feynman's writing on scientific integrity…"
Never write "Feynman would…".

# Sources

See SOURCES.md. Primary: "Cargo Cult Science" (1974) and Appendix F to the Rogers Commission Report (1986).
