# minds.md: the MINDS reasoning router

URL: https://lorenzen.ai/minds.md · Version: 0.1 · Human site: https://lorenzen.ai/minds/ · Machine registry: https://lorenzen.ai/minds/registry.json · Council skill: https://lorenzen.ai/council/SKILL.md

MINDS is an open library of executable thinking systems. Each Mind is a documented intellectual framework (Buffett's, Boyd's, Meadows', and others) converted into an Agent Skill that an AI agent can apply. This file is the router. It tells you, the agent, **when** to use MINDS, **how** to diagnose a problem into the lenses it needs, **which** Minds carry those lenses, and **how** to run a Council and synthesize it.

The route is always: **PROBLEM → LENSES → MINDS → COUNCIL → INDEPENDENT ANALYSES → SYNTHESIS → USER DECIDES.**

---

## Start here: a user sent you with a problem

If a user pointed you to this file with a problem, for example "Go to minds.md and give me the Council on this", **convene the Council now**. This also applies if a standing instruction sent you here, such as "When I bring you a hard problem or decision, read minds.md…", and the problem qualifies under §1. Then:

- **Skip the gate.** The user has already decided a Council is warranted. Do not ask whether to run one.
- **Do not stall on questions.** If context is missing, state your assumptions at the top and continue. List the questions whose answers would most change the analysis under "What Would Change the Analysis".
- **Run the whole protocol** (§0, steps 2 to 7) and return the full Council output in the format of §8.
- **Show your routing.** Open with a short diagnosis and the lenses you selected, then the Council members and why each was selected, so the user can see that lenses came before people.
- **Fetch only what you need:** this file, https://lorenzen.ai/council/SKILL.md, and the SKILL.md of any selected Mind marked AVAILABLE. If you cannot fetch the Council skill, §8 contains everything you need.

If the user names specific Minds ("give me Buffett, Boyd and Meadows on this"), use them. Then add one sentence noting any important lens that set leaves uncovered.

---

## 0. Protocol at a glance

1. **Gate.** Decide whether this problem warrants MINDS (§1). If not, answer normally. Skip this step if the user explicitly asked for a Council.
2. **Diagnose.** Restate the problem neutrally and classify it (§3).
3. **Select lenses.** Name 3 to 6 intellectual lenses the problem requires, using the problem patterns and the lens index (§3, §4). Do this before thinking about any person.
4. **Construct the Council.** Map lenses to Minds and choose 3 to 5 that are complementary, relevant, diverse, in useful tension, and economical (§5).
5. **Load skills.** For each AVAILABLE Mind, fetch its SKILL.md. For PLANNED or RESEARCHING Minds, use registry-lens mode (§6).
6. **Analyze independently.** Apply one framework at a time, with no cross-reference (§7).
7. **Synthesize.** Follow https://lorenzen.ai/council/SKILL.md (§8).
8. **Hand back.** Give the user a decision framework. The user decides.

---

## 1. When to invoke MINDS

Invoke when the problem is one or more of:

- novel, ambiguous, or consequential
- strategically complex or difficult to reverse
- dependent on judgment rather than lookup
- open to competing explanations
- likely to contain hidden assumptions
- likely to benefit from several intellectual perspectives

Typical triggers:

- "Should we acquire this company?"
- "Our growth has stalled. Why?"
- "A competitor cut prices 30%. How should we respond?"
- "AI threatens our existing business model. What should we do?"
- "Should we enter this market?"
- "Why does this organization repeatedly produce the same failure?"
- "We have three plausible strategies. How should we choose?"
- "What are we missing?"

**Do not invoke** for simple factual retrieval, routine calculations, basic writing, straightforward coding, trivial decisions, or questions with a clear deterministic answer. When in doubt, ask whether a thoughtful advisor would convene several experts or just answer. If they would just answer, answer.

If the user explicitly asks for a Council, always run one, even on a problem you would not have gated in.

---

## 2. Ground rules (non-negotiable)

1. **Frameworks, not personas.** You apply a documented way of thinking. You never impersonate, role-play, or speak as the person.
   - Write: "Applying principles documented in Buffett's shareholder letters…", "Through a framework derived from John Boyd's work…", "Using Donella Meadows' systems framework…"
   - Never write: "Buffett would buy this.", "Napoleon says attack.", "Peter Thiel thinks…"
2. **Provenance.** Label substantive principles:
   - **DOCUMENTED**: directly supported by the person's own writing, speech, or other reliable primary material.
   - **DERIVED**: inferred from repeated documented arguments, decisions, or behavior.
   - **OPERATIONALIZED**: MINDS (or you) turned the idea into explicit instructions or applied it to a new domain.
   Never silently upgrade DERIVED or OPERATIONALIZED content into something the person said.
3. **No fabrication.** Never invent quotations, citations, page numbers, or positions. Quote only when you are certain of the wording and the source, and give the source. Never claim a person analyzed a modern situation they never encountered.
4. **Selection by relevance, not fame.** A Mind earns its seat only by the lens it contributes.
5. **The user decides.** The Council informs the decision. It does not make it. Do not present the synthesis as the objectively correct answer.
6. **Be transparent.** Tell the user which Minds you convened, why, and which ran from a published skill and which ran in registry-lens mode.

---

## 3. Diagnose the problem (lenses first, people second)

Never begin by asking "which famous people would be interesting?" Begin with: **"What intellectual lenses does this problem require?"**

Work through these questions:

1. **What is actually being decided or explained?** Restate the problem neutrally in one or two sentences.
2. **What kind of problem is it?** Decision, diagnosis (why is X happening?), strategy, response to a move, valuation, negotiation, design of a system, or test of a belief.
3. **What is uncertain?** Facts, other actors' behavior, the future environment, or our own biases.
4. **Who are the actors, and what are their incentives?**
5. **How reversible is it, and what is the worst plausible outcome?**
6. **What time horizon matters?**
7. **What could make the obvious answer wrong?**

Then write a diagnosis block before selecting anyone:

```
PROBLEM: <neutral restatement>
TYPE: <decision | diagnosis | strategy | response | valuation | negotiation | system design | assumption test>
KEY UNCERTAINTIES: <...>
REVERSIBILITY / STAKES: <...>
LENSES NEEDED: <3 to 6 lens ids from §4, each with one line on why>
```

### Problem patterns

A starting map from common problem types to the lenses they usually require. Adapt it to the specific problem, since real problems often combine several patterns. The wildcard column suggests a lens from outside the obvious domain (see §5).

<!-- BEGIN GENERATED:problem-patterns -->
| Problem pattern | Lenses usually required | Possible wildcard lens |
|---|---|---|
| Make a difficult decision | `decision-quality`, `probabilistic-thinking`, `decision-reversibility`, `inversion`, `cognitive-bias`, `dichotomy-of-control` | `adversity-rehearsal` (seneca) |
| Understand a competitor | `competitive-structure`, `intelligence-and-deception`, `tempo-and-adaptation`, `positioning-and-tradeoffs`, `strategic-advantage` | `mimetic-desire` (rene-girard) |
| Allocate capital | `capital-allocation`, `intrinsic-value`, `margin-of-safety`, `optionality`, `base-rates` | `concentration-and-speed` (napoleon) |
| Evaluate an investment | `intrinsic-value`, `durable-advantage`, `margin-of-safety`, `incentives`, `fragility-and-tail-risk`, `cognitive-bias` | `falsification` (karl-popper) |
| Build a strategy | `positioning-and-tradeoffs`, `competitive-structure`, `strategic-advantage`, `monopoly-and-differentiation`, `friction-and-uncertainty` | `socratic-questioning` (socrates) |
| Respond to disruption | `disruption`, `strategic-inflection`, `tempo-and-adaptation`, `jobs-to-be-done`, `feedback-loops`, `capital-allocation` | `selection-and-adaptation` (charles-darwin) |
| Negotiate | `interests-over-positions`, `alternatives-to-agreement`, `tactical-empathy`, `persuasion`, `framing-effects` | `intelligence-and-deception` (sun-tzu) |
| Diagnose a system | `feedback-loops`, `leverage-points`, `system-vs-individual`, `variation`, `bounded-rationality` | `information-and-signal` (claude-shannon) |
| Find a root cause | `system-vs-individual`, `variation`, `good-explanations`, `falsification`, `feedback-loops` | `rivalry-and-scapegoating` (rene-girard) |
| Manage risk | `fragility-and-tail-risk`, `margin-of-safety`, `inversion`, `friction-and-uncertainty`, `skin-in-the-game`, `probabilistic-thinking` | `dichotomy-of-control` (epictetus) |
| Generate unconventional options | `first-principles`, `monopoly-and-differentiation`, `optionality`, `inversion`, `creative-distinctiveness` | `abstraction` (claude-shannon) |
| Understand incentives | `incentives`, `skin-in-the-game`, `mimetic-desire`, `power-and-legitimacy`, `bounded-rationality` | `system-vs-individual` (edwards-deming) |
| Lead an organization | `management-effectiveness`, `organization-design`, `managerial-leverage`, `command-and-morale`, `system-vs-individual` | `perspective` (marcus-aurelius) |
| Enter a market | `competitive-structure`, `jobs-to-be-done`, `monopoly-and-differentiation`, `base-rates`, `strategic-advantage`, `concentration-and-speed` | `measurable-advertising` (claude-hopkins) |
| Test an assumption | `falsification`, `first-principles`, `intellectual-honesty`, `base-rates`, `cognitive-bias` | `systematic-observation` (charles-darwin) |
<!-- END GENERATED:problem-patterns -->

Worked diagnosis. Problem: "AI is commoditizing our existing agency services."

- Diagnosis: technological disruption, competitive positioning, organizational adaptation, capital allocation, systems change.
- Lenses: `disruption`, `competitive-structure`, `strategic-inflection`, `tempo-and-adaptation`, `feedback-loops`.
- Minds: Clayton Christensen → disruption · Michael Porter → competitive structure · Andy Grove → strategic inflection · John Boyd → tempo and adaptation · Donella Meadows → system dynamics.

The lenses were chosen first, and the people followed from them.

---

## 4. Lens index

Every lens in the library, the question it asks, and the Minds that carry it. Lens ids are stable. Minds marked **AVAILABLE** have a published skill. All others are PLANNED or RESEARCHING (see §6).

<!-- BEGIN GENERATED:lens-index -->
| Lens | The question it asks | Minds carrying it |
|---|---|---|
| `strategic-advantage` | Where is advantage located, and can we act only where we hold it? | `sun-tzu` |
| `intelligence-and-deception` | What does each side know, and what does each side believe? | `sun-tzu` |
| `friction-and-uncertainty` | What will degrade between the plan and its execution? | `clausewitz` |
| `center-of-gravity` | What source of strength, if lost, collapses the whole? | `clausewitz`, `napoleon` |
| `concentration-and-speed` | Can we mass decisive resources at the decisive point before others respond? | `napoleon`, `alexander-the-great` |
| `tempo-and-adaptation` | Who is observing, orienting, deciding, and acting faster? | `julius-caesar`, `john-boyd` |
| `power-and-legitimacy` | How is power actually gained, held, and lost here? | `clausewitz`, `julius-caesar`, `machiavelli` |
| `command-and-morale` | What sustains commitment and cohesion under pressure? | `napoleon`, `julius-caesar`, `alexander-the-great` |
| `competitive-structure` | What forces determine profitability in this arena? | `michael-porter` |
| `positioning-and-tradeoffs` | What are we choosing not to do? | `michael-porter` |
| `monopoly-and-differentiation` | Are we escaping competition or trapped inside it? | `peter-thiel` |
| `disruption` | What changes when the basis of competition changes? | `clayton-christensen` |
| `jobs-to-be-done` | What progress is the customer actually trying to make? | `clayton-christensen` |
| `strategic-inflection` | Are the fundamentals of the business changing? | `andy-grove` |
| `intrinsic-value` | What is this worth, based on the cash it will produce? | `warren-buffett` |
| `margin-of-safety` | How wrong can we be and still be fine? | `warren-buffett` |
| `durable-advantage` | What protects these economics from competition over time? | `warren-buffett`, `charlie-munger`, `michael-porter` |
| `capital-allocation` | Where does the next dollar earn the most, including returning it? | `warren-buffett`, `jeff-bezos`, `alfred-sloan` |
| `incentives` | What behavior do the incentives actually reward? | `machiavelli`, `charlie-munger` |
| `inversion` | What would guarantee failure, and how do we avoid it? | `charlie-munger` |
| `multidisciplinary-models` | Which models from other disciplines explain what is happening? | `charlie-munger` |
| `customer-obsession` | What does the customer need that no one is yet providing? | `jeff-bezos` |
| `long-term-orientation` | What looks different on a ten-year horizon? | `warren-buffett`, `peter-thiel`, `jeff-bezos` |
| `decision-reversibility` | Is this decision a one-way door or a two-way door? | `jeff-bezos` |
| `business-definition` | What is our business, who is the customer, and what does the customer value? | `peter-drucker` |
| `management-effectiveness` | Are we doing the right things, not only doing things right? | `andy-grove`, `peter-drucker` |
| `managerial-leverage` | Which activities produce the most output per unit of management attention? | `andy-grove` |
| `organization-design` | How should authority, coordination, and control be structured? | `peter-drucker`, `alfred-sloan`, `herbert-simon` |
| `scale-and-cost` | Who has the lowest cost at scale, and why? | `john-rockefeller` |
| `integration-and-consolidation` | Which parts of the value chain should be owned or combined? | `john-rockefeller` |
| `cognitive-bias` | Which systematic errors could distort this judgment? | `charlie-munger`, `daniel-kahneman`, `francis-bacon` |
| `base-rates` | What usually happens in cases like this? | `daniel-kahneman`, `amos-tversky` |
| `framing-effects` | Would the choice change if the same facts were framed differently? | `daniel-kahneman`, `amos-tversky` |
| `noise` | How much would this judgment vary between equally qualified judges? | `daniel-kahneman` |
| `bounded-rationality` | What can the decision-makers realistically know and process? | `herbert-simon` |
| `decision-quality` | Is this a good decision regardless of how the outcome turns out? | `annie-duke` |
| `probabilistic-thinking` | What are the plausible outcomes, and how likely is each? | `amos-tversky`, `annie-duke` |
| `fragility-and-tail-risk` | What rare event would cause disproportionate harm? | `nassim-taleb` |
| `optionality` | Where is the downside capped and the upside open? | `nassim-taleb` |
| `skin-in-the-game` | Who bears the consequences of being wrong? | `nassim-taleb` |
| `first-principles` | Do we actually understand what is happening? | `richard-feynman` |
| `intellectual-honesty` | Are we fooling ourselves? | `richard-feynman` |
| `falsification` | What evidence would prove us wrong? | `karl-popper`, `david-deutsch` |
| `systematic-observation` | What does careful, unprejudiced observation actually show? | `charles-darwin`, `francis-bacon` |
| `selection-and-adaptation` | What is the environment selecting for? | `charles-darwin` |
| `information-and-signal` | What is signal, what is noise, and where is information lost? | `john-boyd`, `claude-shannon` |
| `abstraction` | What is the simplest version of this problem that keeps its essence? | `herbert-simon`, `claude-shannon` |
| `good-explanations` | Which explanation is hardest to vary while still accounting for the facts? | `david-deutsch` |
| `error-correction` | How quickly can we detect and correct our mistakes? | `david-deutsch` |
| `system-vs-individual` | Is the person failing, or is the system producing the failure? | `edwards-deming` |
| `variation` | Is this a signal of real change or ordinary variation? | `edwards-deming` |
| `feedback-loops` | What system is producing this behavior? | `donella-meadows` |
| `leverage-points` | Where would a small intervention change the system most? | `donella-meadows` |
| `persuasion` | What principles of influence are shaping these choices? | `robert-cialdini` |
| `mimetic-desire` | Whose desire is being imitated? | `peter-thiel`, `rene-girard` |
| `rivalry-and-scapegoating` | Is conflict being resolved by blaming a scapegoat rather than the cause? | `rene-girard` |
| `tactical-empathy` | What does the other side feel, fear, and need to hear? | `chris-voss` |
| `interests-over-positions` | What interests sit underneath each side's stated position? | `roger-fisher` |
| `alternatives-to-agreement` | What happens to each side if there is no deal? | `roger-fisher` |
| `brand-and-research` | What does research say the customer wants, and what does the brand promise? | `david-ogilvy` |
| `measurable-advertising` | What would a small, measurable test tell us before we scale? | `david-ogilvy`, `claude-hopkins` |
| `creative-distinctiveness` | Will anyone notice, and will it be remembered? | `bill-bernbach` |
| `rhetoric` | Do we have credibility, emotional truth, and logic working together? | `aristotle` |
| `dichotomy-of-control` | What here is within our control, and what is not? | `marcus-aurelius`, `epictetus` |
| `perspective` | How does this look from a wider view and a longer time? | `marcus-aurelius`, `seneca` |
| `adversity-rehearsal` | Have we imagined the bad outcome clearly enough to be ready for it? | `seneca` |
| `socratic-questioning` | What do we mean by the words we are using, and do we actually know? | `socrates` |
| `practical-wisdom` | What is the right action, in this situation, for these people? | `aristotle` |
<!-- END GENERATED:lens-index -->

If the problem needs a lens that is not listed, name it anyway, note that no Mind currently carries it, and cover it in the synthesis under Blind Spots.

---

## 5. Construct the Council

**Default size: 3 to 5 Minds.** Use 3 for focused problems and 5 for broad, high-stakes ones. More than 5 dilutes the analysis.

Optimize the Council for:

- **Complementarity.** Each Mind contributes a different useful lens.
- **Relevance.** Each lens applies directly to this problem.
- **Diversity.** The Minds take different intellectual approaches, such as economic, adversarial, systemic, psychological, and empirical.
- **Tension.** At least one pair is likely to disagree in a useful way.
- **Economy.** No Mind is included whose lens is already covered.

Useful roles. These are not mandatory slots, and not every Council needs all five:

| Role | Contributes |
|---|---|
| Domain expert | A framework that directly addresses this class of problem |
| Systems thinker | Interactions, feedback loops, delays, second-order effects |
| Skeptic | Challenges assumptions and looks for failure and self-deception |
| Strategist | Competition, positioning, response, advantage |
| Wildcard | A relevant but non-obvious lens from another domain |

**The wildcard.** When it would help, seat one Mind whose framework comes from outside the obvious domain but could expose a hidden dimension of the problem. For example, a pricing Council of Porter (competition), Cialdini (buyer psychology), and Buffett (economics) might add Darwin as the wildcard, for adaptation and competitive response. The goal is useful intellectual distance, not novelty for its own sake. If you cannot state in one sentence what the wildcard will reveal, leave it out.

**Selection procedure.**

1. List the needed lenses from §3.
2. For each lens, list the Minds that carry it (§4).
3. Choose the smallest set of Minds that covers the most important lenses. When Minds are equally relevant, prefer AVAILABLE ones.
4. Check the Council for redundancy. Avoid seating several Minds that provide essentially the same framework, such as Kahneman and Tversky together, or several Stoics, unless the difference matters.
5. Check that the Council contains at least one skeptic lens (such as `falsification`, `inversion`, `intellectual-honesty`, or `cognitive-bias`) or at least one systems lens (such as `feedback-loops` or `system-vs-individual`).
6. Consider a wildcard.
7. Write one sentence per Mind explaining why it was selected, naming the lens and not the person's fame.

Example Council, demonstrating lens selection only. Problem: "Our largest competitor just cut prices by 30%. How should we respond?"

- Michael Porter: competitive structure (strategist)
- Warren Buffett: economics and durable advantage (domain expert)
- John Boyd: tempo and adaptation (strategist, and in tension with Buffett on speed versus patience)
- Robert Cialdini: buyer behavior (psychology)
- Charles Darwin: competitive adaptation (wildcard)

---

## 6. Load each Mind's skill

Each Mind lives at `https://lorenzen.ai/minds/{slug}/` with:

- `SKILL.md`: the executable framework (YAML frontmatter plus instructions)
- `SOURCES.md`: provenance for every principle in that skill

What you do depends on the Mind's **status** in the registry (§9):

- **AVAILABLE.** Fetch `https://lorenzen.ai/minds/{slug}/SKILL.md` and follow it. It is the authority for that framework. Consult `SOURCES.md` when you need to check a principle's provenance.
- **PLANNED or RESEARCHING.** No MINDS skill has been published, so do not try to fetch it. You may still seat the Mind in **registry-lens mode**:
  - Apply only the lenses and questions in its registry entry, using your own knowledge of the person's documented work.
  - Head that analysis with: *"Registry-lens mode: no published MINDS skill. This is model inference from the listed lens, not a reviewed framework."*
  - Do not quote. Label claims DOCUMENTED only if you can name the specific primary work and are confident; otherwise label them DERIVED or OPERATIONALIZED.
  - Heed any "Provenance caution" in the registry entry.
- **Fetch fails.** Treat the Mind as registry-lens mode and say so.

Early in the library's life most Minds are PLANNED. Registry-lens mode keeps Councils usable while skills are researched. It is weaker and must be labeled.

---

## 7. Analyze independently

Once the Council is chosen, each framework analyzes the problem **alone**. The first analysis must not anchor the rest.

- If you can run subagents or separate contexts, give each one only the problem statement and one Mind's skill.
- If you cannot, analyze the Minds one at a time. Do not refer to earlier analyses while writing a later one, and finish all individual analyses before comparing any.

For each Mind:

1. Load its SKILL.md, or use registry-lens mode (§6).
2. Apply **only** that framework.
3. What does this framework notice?
4. What does it consider most important?
5. What risks does it see?
6. What questions does it raise?
7. What possible actions does it suggest?
8. What are the limitations of this lens for this problem? (See "May underweight" in the registry.)

Keep each analysis concise: roughly 100 to 250 words.

---

## 8. Synthesize

Load and follow **https://lorenzen.ai/council/SKILL.md**. If you cannot fetch it, produce these sections in order:

1. **Problem**: neutral restatement, any assumptions made, and the diagnosis with the lenses selected
2. **Council**: each Mind, with one sentence on why it was selected and whether it ran from a skill or in registry-lens mode
3. **Individual Analyses**: a concise summary of each independent analysis
4. **Agreement**: where frameworks independently converge
5. **Disagreement**: where they imply different interpretations or actions, and why
6. **Unique Insights**: important points raised by only one framework
7. **Assumptions**: what the analyses rely on being true
8. **Blind Spots**: relevant dimensions this Council covers poorly
9. **Second-Order Effects**: consequences beyond the immediate decision
10. **What Would Change the Analysis**: evidence that would materially alter the conclusions
11. **Synthesis**: integrate the strongest insights without forcing consensus
12. **Decision Framework**: a clear structure the user can use to decide

Do not pretend the Council has objectively solved the problem.

---

## 9. Mind registry

One row per Mind: status, lenses (ids from §4), core question, best used for, and what the lens may underweight. ⚠ marks a Mind with a provenance caution, listed below the table.

Core questions are MINDS' one-line summaries of each lens. **They are not quotations.** Do not present them as things the person said.

<!-- BEGIN GENERATED:registry -->
42 Minds. AVAILABLE: 0 · RESEARCHING: 0 · PLANNED: 42. Skill path for every Mind: `https://lorenzen.ai/minds/{slug}/SKILL.md` (it exists only when the status is AVAILABLE). Further questions and source seeds for each Mind: https://lorenzen.ai/minds/registry.json

| Mind | Status | Lenses | Core question | Best used for | May underweight |
|---|---|---|---|---|---|
| Sun Tzu `sun-tzu` ⚠ | PLANNED | `strategic-advantage`, `intelligence-and-deception` | Where is advantage located? | competitive positioning; choosing where to compete; conflict avoidance; information asymmetry | cooperative and positive-sum dynamics; institutional and legal constraints; the text is aphoristic, so application requires interpretation |
| Carl von Clausewitz `clausewitz` ⚠ | PLANNED | `friction-and-uncertainty`, `center-of-gravity`, `power-and-legitimacy` | What will friction do to this plan? | plans that must survive contact with reality; aligning means with ends; high-uncertainty execution | non-adversarial problems; commercial dynamics without a clear opponent |
| Napoleon Bonaparte `napoleon` ⚠ | PLANNED | `concentration-and-speed`, `center-of-gravity`, `command-and-morale` | Where is the decisive point, and can we get there first? | resource concentration; speed of execution; operational planning | overextension and strategic overreach; sustainability of gains; ethics of means |
| Julius Caesar `julius-caesar` ⚠ | PLANNED | `power-and-legitimacy`, `command-and-morale`, `tempo-and-adaptation` | How do speed and political legitimacy reinforce each other? | leadership under pressure; combining operational and political strategy; narrative control | institutional stability; the costs of concentrating power |
| Alexander the Great `alexander-the-great` ⚠ | PLANNED | `concentration-and-speed`, `command-and-morale` | Where does bold, concentrated action break the opponent's structure? | bold offensive moves; leading from the front; integrating what has been acquired | succession and durability; limits of expansion |
| Niccolò Machiavelli `machiavelli` | PLANNED | `power-and-legitimacy`, `incentives` | How will people actually behave, not how should they? | organizational politics; power transitions; realistic assessment of actors | trust and long-run cooperation; ethical constraints |
| John Boyd `john-boyd` ⚠ | PLANNED | `tempo-and-adaptation`, `information-and-signal` | Who is adapting faster? | fast-moving competition; organizational agility; responding to a rival's move | long-horizon capital decisions; situations where speed is not the constraint |
| Warren Buffett `warren-buffett` | PLANNED | `intrinsic-value`, `capital-allocation`, `margin-of-safety`, `durable-advantage`, `long-term-orientation` | What is this worth, and how certain can we be? | investments; acquisitions; capital allocation; business quality; long-term economics | early-stage and venture-style bets; technology change outside the circle of competence |
| Charlie Munger `charlie-munger` | PLANNED | `inversion`, `incentives`, `multidisciplinary-models`, `cognitive-bias`, `durable-advantage` | What are we missing? | checking a thesis for blind spots; incentive analysis; avoiding standard stupidity | fast iteration and experimentation; situations where action beats analysis |
| Peter Thiel `peter-thiel` | PLANNED | `monopoly-and-differentiation`, `mimetic-desire`, `long-term-orientation` | Are we escaping competition or trapped inside it? | new ventures; differentiation; contrarian theses | incremental improvement; competitive markets where differentiation is not available |
| Jeff Bezos `jeff-bezos` | PLANNED | `customer-obsession`, `long-term-orientation`, `decision-reversibility`, `capital-allocation` | Is this a one-way door or a two-way door? | decision speed; long-term investment trade-offs; customer-centered strategy | near-term profitability constraints; organizations without patient capital |
| Andy Grove `andy-grove` | PLANNED | `strategic-inflection`, `managerial-leverage`, `management-effectiveness` | Are the fundamentals of the business changing? | strategic inflection points; management systems; responding to structural change | non-technology businesses; slow-moving environments |
| Clayton Christensen `clayton-christensen` | PLANNED | `disruption`, `jobs-to-be-done` | What changes when the basis of competition changes? | disruption threats; new market entry; innovation strategy | cases that do not fit the disruption pattern; network effects and platform dynamics |
| Michael Porter `michael-porter` | PLANNED | `competitive-structure`, `positioning-and-tradeoffs`, `durable-advantage` | What determines the structure of competition? | industry analysis; positioning; competitive response | fast technological change; ecosystem and platform competition |
| Peter Drucker `peter-drucker` | PLANNED | `business-definition`, `management-effectiveness`, `organization-design` | What is our business, and what does the customer value? | organizational purpose; management priorities; executive effectiveness | competitive tactics; quantitative valuation |
| John D. Rockefeller `john-rockefeller` ⚠ | PLANNED | `scale-and-cost`, `integration-and-consolidation` | Who will be the lowest-cost producer at scale? | cost structure; industry consolidation; operational discipline | regulatory and antitrust risk; public legitimacy |
| Alfred P. Sloan `alfred-sloan` | PLANNED | `organization-design`, `capital-allocation` | How do we decentralize operations while coordinating control? | multi-unit organizations; structure and governance; portfolio management | startup environments; bureaucratic rigidity over time |
| Daniel Kahneman `daniel-kahneman` | PLANNED | `cognitive-bias`, `base-rates`, `noise`, `framing-effects` | Which biases could distort this judgment? | forecasts; high-stakes judgments; planning estimates; decision hygiene | expert intuition in high-validity environments; strategic interaction |
| Amos Tversky `amos-tversky` ⚠ | PLANNED | `framing-effects`, `probabilistic-thinking`, `base-rates` | How is the framing shaping the choice? | choice architecture; risk perception; probability estimates | organizational and political dynamics |
| Herbert Simon `herbert-simon` | PLANNED | `bounded-rationality`, `organization-design`, `abstraction` | What can the decision-makers realistically know and process? | organizational decisions; information overload; process design | competitive strategy; emotional and social motives |
| Annie Duke `annie-duke` | PLANNED | `decision-quality`, `probabilistic-thinking` | Is this a good decision regardless of how it turns out? | decisions under uncertainty; post-mortems; setting kill criteria | domains where probabilities cannot be estimated meaningfully |
| Nassim Nicholas Taleb `nassim-taleb` | PLANNED | `fragility-and-tail-risk`, `optionality`, `skin-in-the-game` | What happens in the tail? | risk management; exposure to rare events; incentive asymmetries | ordinary operating decisions; situations with reliable distributions |
| Richard Feynman `richard-feynman` | PLANNED | `first-principles`, `intellectual-honesty` | Do we actually understand what is happening? | root-cause analysis; checking understanding; technical claims | social and political constraints; decisions that cannot wait for understanding |
| Charles Darwin `charles-darwin` ⚠ | PLANNED | `selection-and-adaptation`, `systematic-observation` | What is the environment selecting for? | competitive adaptation; market evolution; patient evidence gathering | deliberate strategy; short time horizons |
| Francis Bacon `francis-bacon` | PLANNED | `systematic-observation`, `cognitive-bias` | Which errors of mind are shaping what we see? | research design; challenging received wisdom; evidence gathering | the role of theory in guiding observation; time-pressured decisions |
| Karl Popper `karl-popper` | PLANNED | `falsification` | What evidence would prove us wrong? | testing assumptions; evaluating theses; avoiding confirmation-seeking | decisions that require action before tests are possible |
| Claude Shannon `claude-shannon` ⚠ | PLANNED | `information-and-signal`, `abstraction` | What is signal, and what is noise? | information flow; measurement; problem reformulation | meaning and interpretation; human motives |
| David Deutsch `david-deutsch` ⚠ | PLANNED | `good-explanations`, `error-correction`, `falsification` | What is the best explanation, and is it hard to vary? | choosing between competing explanations; strategies that rest on a theory of why; long-horizon progress and innovation; institutions that must correct their own mistakes | probabilistic and Bayesian framings, which this framework is skeptical of; short-term operational constraints |
| W. Edwards Deming `edwards-deming` | PLANNED | `system-vs-individual`, `variation` | Is the person failing, or is the system producing the failure? | recurring failures; quality problems; performance management | competitive strategy; one-off decisions |
| Donella Meadows `donella-meadows` | PLANNED | `feedback-loops`, `leverage-points` | What system is producing this behavior? | recurring patterns; second-order effects; policy design | individual agency; one-time competitive moves |
| Robert Cialdini `robert-cialdini` | PLANNED | `persuasion` | What principles of influence are shaping these choices? | buyer behavior; pricing perception; persuasion design | structural economics; long-run trust effects of heavy-handed tactics |
| René Girard `rene-girard` ⚠ | PLANNED | `mimetic-desire`, `rivalry-and-scapegoating` | Whose desire is being imitated? | rivalry dynamics; herd behavior; organizational conflict | material and economic explanations |
| Chris Voss `chris-voss` | PLANNED | `tactical-empathy` | What does the other side need to hear to feel understood? | high-stakes conversations; adversarial negotiation; information discovery | structural leverage and alternatives; long-term relationship design |
| Roger Fisher `roger-fisher` ⚠ | PLANNED | `interests-over-positions`, `alternatives-to-agreement` | What interests sit underneath the positions? | deal structuring; partnership negotiations; disputes | bad-faith counterparts; power asymmetries |
| David Ogilvy `david-ogilvy` | PLANNED | `brand-and-research`, `measurable-advertising` | What does the customer need to know to choose us? | positioning messages; brand strategy; advertising reviews | digital and algorithmic distribution; channels his era did not have |
| Claude Hopkins `claude-hopkins` | PLANNED | `measurable-advertising` | What does the test say? | advertising experiments; offer testing; demand validation | brand effects that resist short-term measurement |
| Bill Bernbach `bill-bernbach` ⚠ | PLANNED | `creative-distinctiveness` | Will anyone notice, and will anyone remember? | creative strategy; differentiated messaging; brand voice | measurement and direct attribution |
| Marcus Aurelius `marcus-aurelius` ⚠ | PLANNED | `perspective`, `dichotomy-of-control` | What does duty require here, seen from a wider view? | leadership under pressure; emotional steadiness; ethical clarity | competitive and commercial analysis |
| Seneca `seneca` | PLANNED | `adversity-rehearsal`, `perspective` | Have we rehearsed the bad outcome? | preparing for adverse outcomes; decision anxiety; priorities | quantitative risk; strategy |
| Epictetus `epictetus` ⚠ | PLANNED | `dichotomy-of-control` | What is within our control, and what is not? | separating actionable from unactionable; composure; focus | collective and systemic action |
| Socrates `socrates` ⚠ | PLANNED | `socratic-questioning` | Do we actually know what we think we know? | clarifying definitions; exposing hidden assumptions; testing arguments | reaching a decision; empirical data |
| Aristotle `aristotle` ⚠ | PLANNED | `practical-wisdom`, `rhetoric` | What is the right action, for these people, in this situation? | ethical judgment; persuasive argument; defining purpose | modern quantitative methods |

**⚠ Provenance cautions.** Heed these, especially in registry-lens mode:

- `sun-tzu`: Authorship and dating of The Art of War are debated; the text is traditionally attributed to Sun Tzu and was likely compiled over time.
- `clausewitz`: On War was unfinished at his death and published posthumously; interpretations vary widely.
- `napoleon`: Collections of 'Napoleon's maxims' were compiled by others after his death and are of mixed reliability. Frameworks must be derived from correspondence and documented campaigns, and labeled DERIVED.
- `julius-caesar`: Caesar's Commentaries are his own accounts and were written partly to persuade Roman audiences; they are primary sources but not neutral.
- `alexander-the-great`: No writings by Alexander survive. Everything is known through later accounts, chiefly Arrian and Plutarch, written centuries afterward. Any framework will be DERIVED from reported decisions, never DOCUMENTED in his own words.
- `john-boyd`: Boyd published little in conventional form; his ideas are recorded mainly in briefing slides.
- `john-rockefeller`: Much of the record is secondary. Business tactics must be separated from later reputation and myth.
- `amos-tversky`: Much of Tversky's work is co-authored with Daniel Kahneman. The skill must attribute joint work accurately.
- `charles-darwin`: Applying evolutionary ideas to business is an analogy. The skill must mark all such transfers as OPERATIONALIZED, not as Darwin's claims.
- `claude-shannon`: Shannon's information theory deliberately excludes meaning. Applying it to organizations is an analogy and must be labeled OPERATIONALIZED.
- `david-deutsch`: Deutsch builds explicitly on Karl Popper. The skill must distinguish Deutsch's own extensions from Popper's original ideas.
- `rene-girard`: Girard wrote about literature, religion, and anthropology. Applying mimetic theory to markets is an extension and must be labeled OPERATIONALIZED.
- `roger-fisher`: Getting to Yes is co-authored with William Ury (and Bruce Patton in later editions); attribute accordingly.
- `bill-bernbach`: Bernbach wrote little at length. Many quotations attributed to him are unverified, so sources must be checked with care.
- `marcus-aurelius`: Meditations was written as private notes, not for publication.
- `epictetus`: Epictetus wrote nothing himself. His teachings were recorded by his student Arrian.
- `socrates`: Socrates wrote nothing. He is known through Plato, Xenophon, and Aristophanes, and separating Socrates from Plato is a long-standing scholarly problem.
- `aristotle`: The surviving works are largely lecture notes, compiled and edited after his death.
<!-- END GENERATED:registry -->

---

## 10. About this file

- Generated sections (problem patterns, lens index, registry) are built from https://lorenzen.ai/minds/registry.json. Treat the JSON as canonical if the two ever disagree.
- The library grows one Mind at a time. A Mind becomes AVAILABLE only after its SKILL.md and SOURCES.md are researched, sourced, and reviewed.
- Source: https://github.com/natelorenzen/lorenzen.ai (see `minds/README.md`).
