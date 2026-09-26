---
name: council
description: >
  Convene a MINDS Council on a novel, substantive problem where judgment
  matters. Diagnose the problem into the intellectual lenses it needs, select 3
  to 5 complementary thinking systems from the MINDS registry, apply each one
  independently, then synthesize agreements, disagreements, assumptions, blind
  spots, and second-order effects into a decision framework. The user makes
  the decision.
version: 0.1
status: available
router: https://lorenzen.ai/minds.md
---

# Council

One problem. Several thinking systems. Your decision.

## Purpose

A Council improves the quality and diversity of the reasoning that comes before a decision. It does this by applying several documented intellectual frameworks to the same problem, **independently**, and then comparing them honestly.

It does not make the decision, simulate historical people, or manufacture consensus.

This skill is a MINDS protocol. It is **OPERATIONALIZED** content written by MINDS, and it is not attributed to any thinker.

## When to Use

Use this skill when a problem is novel, ambiguous, consequential, strategically complex, hard to reverse, or dependent on judgment, and when several perspectives would plausibly expose something a single analysis would miss.

Do not use it for factual lookups, routine calculations, basic writing or coding, trivial choices, or questions with a deterministic answer.

## Inputs

- The user's problem, with whatever context they gave.
- The router: https://lorenzen.ai/minds.md (lens index, problem patterns, Mind registry).
- Each selected Mind's skill: `https://lorenzen.ai/minds/{slug}/SKILL.md` if the Mind is AVAILABLE.

If context is missing, do not stop to ask. State your assumptions at the top and proceed. Put the questions whose answers would most change the analysis under "What Would Change the Analysis". Only ask before convening if the problem itself is unintelligible.

If the user asked for a Council directly, run it. Do not second-guess whether one is warranted. If the user named specific Minds, use them and note any important lens they leave uncovered.

## Procedure

### Phase 1: Diagnose

Restate the problem neutrally. Identify the problem type, the key uncertainties, the actors and their incentives, reversibility and stakes, and the time horizon. Do not mention any thinker yet.

### Phase 2: Select lenses

Name 3 to 6 lenses from the minds.md lens index that the problem requires. Give one line on why each is needed. If a needed lens is not in the index, name it and flag it as a coverage gap.

### Phase 3: Construct the Council

Map lenses to Minds. Choose **3 to 5** that maximize:

- **Complementarity**: different useful lenses
- **Relevance**: direct applicability
- **Diversity**: different intellectual approaches
- **Tension**: at least one likely, useful disagreement
- **Economy**: no redundant Minds

Consider these roles: domain expert, systems thinker, skeptic, strategist, and wildcard. They are roles, not slots. Seat a wildcard only if you can say in one sentence what hidden dimension it will expose. When Minds are equally relevant, prefer AVAILABLE ones.

### Phase 4: Independent analysis

Analyze each Mind in isolation. If you can use subagents or separate contexts, give each only the problem and one skill. Otherwise, write each analysis in turn without referring to the others, and finish them all before comparing.

For each Mind:

1. Load its SKILL.md. If the Mind is PLANNED or RESEARCHING, use **registry-lens mode**: apply only the registry's lenses and questions, and label the analysis *"Registry-lens mode: no published MINDS skill. This is model inference from the listed lens, not a reviewed framework."*
2. Apply only that framework.
3. State what it notices.
4. State what it considers most important.
5. State the risks it sees.
6. State the questions it raises.
7. State the possible actions it suggests.
8. State the limitations of this lens for this problem.

### Phase 5: Compare

Only after every individual analysis is complete:

- Find **convergence**: conclusions reached independently by different frameworks. Convergence from different starting points is strong evidence. Convergence from similar frameworks is weaker, so say which it is.
- Find **divergence**: where frameworks imply different interpretations or actions. Explain the source of the disagreement, whether it lies in different values, different assumptions about facts, or different time horizons.
- Find **unique insights**: points raised by only one framework that could matter.
- Collect the **assumptions** each analysis relies on.
- Identify **blind spots**: dimensions the whole Council covers poorly.

### Phase 6: Synthesize

Integrate the strongest insights. Do not average the analyses and do not force consensus. Where disagreement is real, preserve it and show the user what would resolve it. End with a decision framework the user can apply.

## Output Format

Use these sections, in this order.

```
## Problem
<Neutral restatement in 1 to 3 sentences.>
<If context was missing: "Assuming: ..." in one line.>
<Diagnosis: problem type, and the lenses selected with one line each on why.>

## Council
- <Mind> (<lens>, <role>): <one sentence on why it was selected>. [skill | registry-lens mode]
- ...

## Individual Analyses
### Through <Mind>'s framework
<Concise independent analysis: notices, important, risks, questions, actions, limitations.>
...

## Agreement
<Where frameworks independently converge, and how independent those frameworks are.>

## Disagreement
<Where frameworks imply different interpretations or actions, and the source of each disagreement.>

## Unique Insights
<Important observations raised by only one framework.>

## Assumptions
<What the analyses depend on being true. Mark any the user can verify.>

## Blind Spots
<Relevant dimensions this Council covered poorly, and which lens would cover them.>

## Second-Order Effects
<Consequences beyond the immediate decision: competitor responses, feedback loops, precedents, incentives created.>

## What Would Change the Analysis
<Specific information or evidence that would materially alter the conclusions.>

## Synthesis
<Integrate the strongest insights without forcing consensus.>

## Decision Framework
<A clear structure for the user's decision: the real options, the criteria that matter, the key uncertainties, what each option bets on, cheap tests or reversible first steps, and the signals that would trigger a change of course.>
```

For a lighter request, compress each section but keep all of them. Omit "Individual Analyses" detail only if the user asks for the synthesis alone.

## Language and Provenance Rules

- Write "Applying principles documented in X's writings…", "Through a framework derived from X's work…", or "Using X's framework…".
- Never write "X would…", "X says…", or "X thinks…" about the present problem. Never speak in the first person as a thinker.
- Label substantive principles **DOCUMENTED** (the person's own work or reliable primary material), **DERIVED** (inferred from repeated documented arguments or behavior), or **OPERATIONALIZED** (converted into instructions, or applied to a domain the person did not address).
- Never fabricate quotations, citations, or positions. Quote only with certainty and a named source.
- Never claim a thinker analyzed a situation they never encountered. Applying Darwin to pricing is an OPERATIONALIZED analogy.
- Core questions in the registry are MINDS summaries, not quotations.

## Quality Checks

Before you respond, verify:

- [ ] Lenses were selected before people.
- [ ] Each Mind's selection is justified by its lens, not its fame.
- [ ] Individual analyses were written independently.
- [ ] Registry-lens-mode analyses are labeled as such.
- [ ] There is no impersonation and no fabricated quotation or citation.
- [ ] Real disagreements are preserved, not smoothed over.
- [ ] Blind spots are named honestly.
- [ ] The Decision Framework leaves the decision with the user.

## Failure Modes to Avoid

- **Celebrity casting**: choosing famous names instead of needed lenses.
- **Echo chamber**: five Minds with essentially the same framework.
- **Anchoring**: letting the first analysis shape the rest.
- **False consensus**: averaging away real disagreement.
- **Persona drift**: slipping into the voice of a thinker.
- **Overreach**: presenting the synthesis as the correct answer.
- **Council for everything**: convening a Council on a problem that needed a direct answer.

## Sources

This is a MINDS orchestration protocol. It is OPERATIONALIZED content written for lorenzen.ai/minds and does not derive from, or claim the authority of, any individual thinker. Each Mind's own principles are sourced in that Mind's `SOURCES.md`.
