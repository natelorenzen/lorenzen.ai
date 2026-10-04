# BLACK FRIDAY: The Team

Wrung is four people: the player and these three. Trust runs from -3 to +3 (`core/dm-core.md` §7). Each has a secret, a moment, and a way to be lost: **poached** (another company hires them away) or **quit** (they've had enough). Nobody is the butt of the joke. They're the only people in the game doing the actual work.

---

## MARGO LIN: head of finance

**Visual:** late thirties, reading glasses on a beaded chain, a cardigan over a blazer, two monitors, one of which only ever shows the bank account. A mug that says *CASH IS A FACT*.

**Personality:** calm, precise, quietly devastating. She believes in one number, the bank deposit, and treats every other number as a rumor. *"I don't need to know what the platform thinks. I need to know what the bank thinks."* She's been right about everything, and nobody has ever thanked her for it.

**History:** joined from a consumer-goods company three years ago, took a pay cut "because the sponges were good". Built the unit-cost sheet.

**Secret** (`DISCOVER_MARGO_OFFER`): **Simone Arceneaux's** fund has offered her a CFO role. She hasn't said yes. She'll admit it with trust 1 or more, or if the player sees the calendar invite. She'll stay if Black Friday is run on a real plan, not a thread.

**Capability:** the P&L, the bank, the contribution-margin math (`game/puzzles.md`), and an unbeatable ability to ask "and where does that show up in cash?"

**Fear:** that she's the boring one, and boring loses.

**Moment** (`ALLY_MARGO_STAYS`): on Black Friday, when the plan holds and the deposits land, she closes the offer email without replying. *"Boring wins. Write that down."* Lost if MARGIN hits Underwater twice, or if the player overrules her on a sitewide discount at STACK 4 or more (she's poached). `RECRUIT_MARGO` in Act I.

---

## KYLE BRATTON: media buyer

**Visual:** twenty-six, a quarter-zip from a conference, AirPods in one ear at all times, a laptop covered in stickers from ad-tech startups, and fourteen tabs of paid courses.

**Personality:** earnest, talented, fast, and he believes **every single thing he reads on the Feed**, for about a week each. *"Okay, so new framework."* He's not dumb. He's young, he's online, and nobody has ever shown him a holdout test. His enthusiasm is real, and it's the thing worth saving.

**History:** hired two years ago from an agency. He runs the ad account. He loves the player and wants to impress them.

**Secret** (`DISCOVER_KYLE_TESTIMONIAL`): Kyle is a paying member of Scale Academy's **$4,997 Inner Circle**, and his face is on the sales page as a "student success story", next to the quote *"5:5:1 took Wrung from $40K to $4M a month!"* (Both numbers are wrong.) He also started Halcyon's "free trial" at a 1 a.m. webinar in June. He confesses with trust 1 or more, or when Margo finds the sales page.

**Capability:** fast, fluent in the ad platform, good at testing once he's taught to test, and very good at making four hundred variations of anything.

**Fear:** that he isn't actually good at this, and the courses are the only reason anyone thinks he is.

**Moment** (`ALLY_KYLE_UNSUBSCRIBES`): in Act IV, after the holdout or the Descent, Kyle cancels every course, asks Scale Academy to take his face off the sales page, unfollows Professor Calloway, and turns off his own automated rules. *"I'm going to run the account like it's my money."* Lost if the player mocks him in front of the team for the testimonial (he quits), or poached by Vince's academy as a "student success story" if STACK hits 5. `RECRUIT_KYLE` in Act I.

---

## DOT OKAFOR: customer experience

**Visual:** fifties, reading glasses pushed up into grey braids, a headset, a cardigan with a Wrung pin, and a spiral notebook that never leaves her desk.

**Personality:** warm, funny, unbothered, and the only person at Wrung who talks to customers every day. She doesn't post. She doesn't go to conferences. *"I'll stay here with the people who buy things."* Everybody forgets to invite her to strategy meetings.

**History:** the first hire. She answered the very first support email and every one since.

**Secret** (`DISCOVER_DOT_NOTES`): four years of notebooks, in her handwriting, of what customers say on the phone. It's the most valuable dataset the company has, and it's never been in a dashboard. The player can find it by asking her what customers say, or by sitting at her desk.

**Capability:** knows the customers by name. Can get ten of them on the phone by the end of the day (`SOCIAL_CUSTOMER_CALLS`). Knows exactly why they buy, but nobody's asked her the question that way.

**Fear:** that the company will grow past the point where anybody listens to the phone.

**Moment** (`ALLY_DOT_PRESENTS`): in Act IV, Dot presents to the team, standing at the whiteboard with her notebooks: *"Can I say something? I've been waiting four years to say something."* What she says is `DISCOVER_WHY_THEY_BUY`, if the player hasn't found it yet. `RECRUIT_DOT` in Act I, when the player invites her into the planning, which nobody has ever done. If the player never does, Dot stays at her desk and is still there at the end, but she isn't recruited and her moment never comes.

---

## Reporting

At game over, report `COMPANION_SURVIVES_<NAME>` for each recruited teammate who's still at Wrung: not poached, not quit.
