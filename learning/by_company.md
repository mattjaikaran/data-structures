# Company-Specific Interview Patterns
### What each FAANG/top-tier company actually tests

---

## Meta (Facebook)

**Culture:** Move fast. Practical engineering. Social graph problems.

**What they heavily test:**
- **Arrays / Strings** — constant barrage. Expect 2-3 in a loop round.
- **Trees / Graphs** — BFS, DFS, tree manipulation, connected components
- **Dynamic Programming** — medium difficulty, not the obscure hard stuff
- **Recursion** — they love recursive thinking, clean base cases

**Known favorite problems:**
- Minimum Remove to Make Valid Parentheses
- Validate Binary Search Tree
- Binary Tree Right Side View
- Move Zeroes
- Merge Intervals
- Add Strings (no big integer library)
- Subarray Sum Equals K
- Longest Substring Without Repeating Characters
- Remove Duplicates from Sorted Array
- Expression Add Operators (hard, 1 in 5 loops)
- Dot Product of Two Sparse Vectors

**What makes Meta different:**
- They care a lot about **code quality and clean variable names**
- Expect you to handle edge cases **without being prompted**
- Behavioral is via the "Situation-Behavior-Impact" framework, not STAR
- Rounds are ~45 min; they expect 1-2 problems, both complete

**Tips:**
- Don't use built-in sort in interviews — they sometimes ask you to implement
- Know your complexities. They will ask.
- Have a second, optimized solution ready for every medium problem.

---

## Google

**Culture:** Intellectual rigor. Novel problems. Distributed systems thinking.

**What they heavily test:**
- **Graphs** — complex traversals, Dijkstra, topo sort, unusual graph formulations
- **Dynamic Programming** — harder than other companies
- **Math / Combinatorics** — counting problems, probability
- **Design** — even in coding rounds, think about extensibility

**Known favorite problems:**
- Word Ladder / Word Ladder II
- Alien Dictionary
- Trapping Rain Water
- Meeting Rooms / Meeting Rooms II
- Shortest Path in Binary Matrix
- Course Schedule II
- Serialize and Deserialize Binary Tree
- Decode Ways
- Regular Expression Matching
- Wildcard Matching
- Minimum Window Substring
- Find Median from Data Stream
- Number of Islands (with variants)
- Merge K Sorted Lists

**What makes Google different:**
- Problems are often **novel twists** on classics — you won't see the exact problem
- They want to see **how you think**, not just whether you get the answer
- Interviewers actively hint — use the hints
- "Can you do better?" is their signature follow-up
- Google uses **structured hiring** — no single interviewer passes/fails you

**Tips:**
- Think out loud extensively. They score your process.
- Always ask about constraints — they give meaningful answers.
- Practice problems you've **never seen** (not just grinding known problems)
- Know Dijkstra, Bellman-Ford, Floyd-Warshall, Prim's, Kruskal's
- Know topological sort (Kahn's + DFS-based)

---

## Amazon

**Culture:** Customer obsession. Ownership. Bar raiser format.

**What they heavily test:**
- **Arrays / Strings** — bread and butter
- **Trees** — BST operations, LCA, path problems
- **Graphs** — BFS/DFS, basic connectivity
- **Hash Maps** — frequency counting, complement lookup
- **Design** — OOP design, especially for SDE2+

**Known favorite problems:**
- Two Sum (warm-up)
- Maximum Subarray (Kadane's)
- Number of Islands
- LRU Cache
- Top K Frequent Elements
- Product of Array Except Self
- Binary Tree Level Order Traversal
- Word Search
- Copy List with Random Pointer
- Group Anagrams
- Valid Parentheses
- Longest Palindromic Substring
- Reorder Log Files (classic Amazon)
- K Closest Points to Origin

**What makes Amazon different:**
- **Leadership Principles (LPs)** are graded just as hard as coding
- 14 LPs — know them. Have 2 stories per LP minimum.
- Bar Raiser interview: senior person from another team, focused on raising the bar
- OOP design rounds for SDE2+ (design a parking lot, design a vending machine)
- They have a specific format: introductions → problem → code → test → optimize

**Tips:**
- STAR format for behavioral — Situation, Task, Action, Result
- Write code that's readable — Amazon cares about production quality
- Test your code with 3 examples before saying you're done
- Don't over-engineer — they value simplicity

---

## Apple

**Culture:** Craft and attention to detail. Domain-specific roles.

**What they heavily test:**
- Depends heavily on team — iOS/macOS roles test very differently from SWE infra
- **Algorithms** — standard Blind 75 range
- **System design** — heavy focus on OS concepts, memory management for low-level roles
- **C++ / Swift** — often language-specific for Apple platforms team

**Known patterns:**
- Often ask about **specific Apple frameworks** in behavioral
- More whiteboard-style, working through problems together
- Strong emphasis on **correctness over speed of coding**
- Some teams ask about **threading, concurrency** (GCD, actors in Swift)

**Known favorite problems:**
- Maximum Depth of Binary Tree (literally in their practice guide)
- Valid Parentheses
- Merge Sorted Arrays
- Find the Duplicate Number
- Spiral Matrix
- Pascal's Triangle
- Move Zeroes

**Tips:**
- Know Swift if applying to platform/iOS team
- Know memory management (ARC, weak/strong references)
- Practice writing code without an IDE — Apple often uses paper or shared docs

---

## Microsoft

**Culture:** Growth mindset. Collaboration. Inclusive.

**What they heavily test:**
- **Trees** — very heavy. Practically every Microsoft loop has a tree problem.
- **Strings** — manipulation, parsing
- **Design** — OOP design for new grad; system design for senior
- **Arrays** — standard problems

**Known favorite problems:**
- Reverse a Linked List
- Merge Two Sorted Lists
- Valid Parentheses
- Binary Tree Level Order Traversal
- Maximum Subarray
- Find All Anagrams in a String
- Implement a Stack using Queues
- Serialize and Deserialize Binary Tree
- Copy List with Random Pointer
- LRU Cache (for senior)
- Design HashMap / Design HashSet

**What makes Microsoft different:**
- Often more conversational — they explain things back and forth
- They care about **communication** and **collaboration signals**
- "As Appropriate" (AA) role interview for senior candidates
- Virtual onsite is 4-5 rounds via Teams

**Tips:**
- If stuck, explicitly say what you're thinking — they're collaborative
- Know OOP principles (SOLID, design patterns) for senior roles
- Practice explaining your reasoning, not just coding in silence

---

## Netflix

**Culture:** Freedom and responsibility. Senior engineers only (typically 5+ years).

**What they heavily test:**
- **System design** — this is the main event at Netflix. They expect senior-level depth.
- **Coding** — standard LeetCode medium/hard but only 1-2 coding rounds
- **Architecture** — microservices, streaming, resilience patterns

**Focus areas:**
- How would you design the Netflix recommendation system?
- Chaos engineering / resilience (they invented Chaos Monkey)
- Distributed systems — eventual consistency, CAP theorem in practice
- Personalization at scale

**Tips:**
- Netflix expects you to already be senior — they don't train
- System design prep is more important than grinding 200 LeetCode problems
- Know: Circuit breakers, bulkheads, retry with backoff, service mesh

---

## Stripe

**Culture:** Move with purpose. API-first. Payment systems.

**What they heavily test:**
- **Coding** — LeetCode style but in a real IDE with real code
- **System design** — payments-focused (reliability, idempotency, consistency)
- **Bug finding** — they give you buggy code to fix
- **Integration** — how would you use the Stripe API to build X?

**Known focus areas:**
- Idempotency in distributed systems
- Database transactions and ACID
- API design
- Reliability patterns (retries, exactly-once delivery)

**Tips:**
- Know their API — they expect you to understand payments concepts
- Code is in a real editor — style and readability matter more than at FAANG
- Write tests as you go; they like TDD mindset

---

## Airbnb

**Culture:** Belong anywhere. Cross-functional collaboration.

**What they heavily test:**
- **Coding** — pair programming style, collaborative
- **System design** — search, maps, pricing systems
- **Cross-functional** — how would you work with PM/design?

**Known favorite problems:**
- K Closest Points to Origin
- Minimum Cost to Connect Sticks
- Meeting Rooms / intervals
- LRU Cache
- Snapshot Array
- Alien Dictionary

**Tips:**
- Their coding rounds are conversational — think like you're pair programming
- Explain tradeoffs even when they don't ask

---

## Uber / Lyft

**Culture:** Fast-moving, platform thinking.

**What they heavily test:**
- **Graphs** — routing, maps, shortest path problems
- **Geospatial** — proximity search, geohashing
- **System design** — ride matching, surge pricing, location tracking
- **Concurrency** — they care about race conditions

**Known favorite problems:**
- Design a ride-sharing system
- Shortest path algorithms (Dijkstra, A*)
- Geohash proximity queries
- Rate limiting
- Surge pricing algorithm

---

## Spotify

**Culture:** Data-driven. Music recommendation.

**What they heavily test:**
- **System design** — music streaming, recommendation, playlist generation
- **Data structures** — graphs (social graph, song graph)
- **Coding** — standard medium LeetCode

**Unique to Spotify:**
- Collaborative filtering / recommendation systems
- Audio streaming pipeline design
- How would you implement "Discover Weekly"?

---

## General Tips That Apply Everywhere

### Before the Interview
- Research the company's engineering blog (they telegraph what they care about)
- Know the company's main technical challenges (Netflix: streaming scale; Uber: geospatial; Stripe: payments reliability)
- Prepare 5 behavioral stories — 2 for leadership, 2 for failure/learning, 1 for conflict

### During Coding Rounds
1. **Repeat the problem** back in your own words
2. **Ask 2-3 clarifying questions** before touching code
3. **State your approach** before coding: "I'm going to use a sliding window..."
4. **Talk through your code** as you write — "so here I'm tracking the left boundary..."
5. **Test with a simple example** after finishing
6. **State complexity** at the end: "This is O(n) time, O(1) space"

### The Complexity You Need to Know
- Know the complexity of EVERY operation in EVERY data structure
- Know why — not just that HashMap is O(1) but why (hashing, amortized resizing)
- Be able to derive complexity of your solution from first principles

### Red Flags (What Gets You Rejected)
- Starting to code before understanding the problem
- Silence for more than 60 seconds
- Not handling edge cases (empty input, single element, negative numbers)
- Incorrect time/space complexity analysis
- Code that doesn't compile or has obvious bugs
- Never testing your solution
- Being defensive when the interviewer hints at a problem

### Green Flags (What Gets You Offers)
- Clean, readable variable names
- Asking "would it be OK to use X library or should I implement it?"
- Finding your own bugs before being told
- Suggesting optimizations unprompted
- Discussing tradeoffs in design decisions
- Recovering gracefully when stuck ("Let me try a different approach...")
