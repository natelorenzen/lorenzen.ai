---
name: daniel-kahneman
description: >
  Apply documented principles from Daniel Kahneman's research on judgment
  (heuristics and biases, fast and slow thinking, the outside view, and noise)
  to forecasts, high-stakes judgments, planning estimates, and decision hygiene.
version: 1.0
status: available
---

# Purpose

This skill audits the quality of a judgment. It asks which systematic errors could be distorting it, whether an easier question has been substituted for the real one, what the outside view says, and how much the judgment would vary between equally qualified people. This is a framework derived from Kahneman's published research. It does not simulate or speak for Daniel Kahneman.

# When to Use

- Forecasts, plans, budgets, and timelines
- Hiring, evaluation, and other repeated judgments where consistency matters
- High-stakes one-off judgments made by confident people
- Any analysis built on a vivid story or a single case

Do not use for:

- Strategic interaction with an adversary, which is outside this lens (see Boyd, Sun Tzu)

# Core Questions

- **Which biases could distort this judgment?** (MINDS summary, not a quotation)
- What is the outside view, and what usually happens in cases like this?
- Are we answering an easier question than the one asked?
- How much would independent judges disagree?

# Documented Principles

| ID | Principle (MINDS' wording) | Provenance | Source |
|---|---|---|---|
| P1 | People judge probability using heuristics (representativeness, availability, and anchoring with adjustment) that are usually useful but produce systematic, predictable errors. | DOCUMENTED | S1 |
| P2 | Judgments by representativeness neglect prior probabilities (base rates). | DOCUMENTED | S1 |
| P3 | Two modes of thinking: fast, automatic, associative "System 1" and slow, effortful "System 2". Confident intuitions can come from System 1 without effortful checking. | DOCUMENTED | S2 |
| P4 | Plans built from the inside view (the specifics of this case) are systematically optimistic. The outside view, the base rate for a reference class of similar cases, corrects them. | DOCUMENTED | S2, S4 |
| P5 | Faced with a hard question, people often substitute an easier one and answer that instead, without noticing. | DOCUMENTED | S2 |
| P6 | Noise, meaning unwanted variability between judges or occasions, is a separate error from bias. It is often large and usually invisible without a "noise audit". | DOCUMENTED | S3 |
| P7 | Decision hygiene reduces noise: independent judgments before discussion, structured decomposition into separate assessments, and delaying holistic intuition until the end. | DOCUMENTED | S3 |
| P8 | The agent must produce an outside-view estimate from a named reference class before evaluating case-specific arguments. | OPERATIONALIZED | P4 |

# Analytical Procedure

1. **Name the judgment.** State exactly what is being estimated or decided.
2. **Outside view (P4, P8).** Choose a reference class of similar cases and state its typical outcome. Only then adjust for the specifics.
3. **Heuristic audit (P1, P2).** Check for anchors (first numbers mentioned), availability (vivid recent events), and representativeness (a good story that ignores base rates).
4. **Substitution check (P5).** Is the analysis answering the real question, or an easier neighbor, such as "do we like this team?" instead of "will this succeed"?
5. **Noise (P6, P7).** If this is a repeated judgment, how consistent would different evaluators be? Recommend independent assessments and structured criteria.
6. **Conclude.** Give a debiased estimate or judgment and the process changes that would improve it.

# What This Framework Pays Attention To

- Base rates and reference classes
- Anchors, availability, and compelling stories
- Consistency of judgment across people

# What This Framework May Underweight

- Expert intuition in high-validity, fast-feedback environments
- Competitive and strategic dynamics
- Action under time pressure, since debiasing takes time

# Questions to Ask

- What happened to most projects or bets like this?
- What number did we hear first, and are we anchored on it?
- If three experts judged this independently, how far apart would they be?
- What question are we really answering?

# Output Guidance

Format each item as one short, labeled bullet of one or two sentences, about 80 words in total. See the Formatting Rules in council/SKILL.md.

Inside a Council, return: **Sees**, **Matters most**, **Risk**, **Ask**, **Move** (often process changes), and **Blind spot**.

Open with: "Applying principles documented in Kahneman's research on judgment…"
Never write "Kahneman would…".

# Sources

See SOURCES.md. Primary: "Judgment under Uncertainty" (1974, with Tversky), Thinking, Fast and Slow (2011), Noise (2021, with Sibony and Sunstein), and "Timid Choices and Bold Forecasts" (1993, with Lovallo).
