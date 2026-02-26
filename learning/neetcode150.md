# NeetCode 150
### The extended list. Covers everything Blind 75 misses.
*Focus on the sections marked ⭐ — these are the gaps that trip people up.*

---

## What's New vs Blind 75

NeetCode 150 adds ~75 problems across these critical areas Blind 75 underserves:
- **Math & Geometry** — completely absent from Blind 75
- **Backtracking** — only 1 problem in Blind 75, 9 here
- **Advanced Graphs** — Dijkstra, Bellman-Ford, Prim's, Kruskal's, Topological Sort
- **1D DP** — 12 problems vs 3 in Blind 75
- **2D DP** — 11 problems including knapsack variants
- **Intervals** — 6 problems (scheduling, merging, inserting)

---

## ⭐ Backtracking (9 problems)

| Problem | Difficulty | Key Insight |
|---------|-----------|-------------|
| Subsets | 🟡 | At each element: include or exclude. 2^n total. Bitmask or DFS. |
| Subsets II (with duplicates) | 🟡 | Sort first. Skip duplicate at same recursion depth: `if i>start and nums[i]==nums[i-1]` |
| Combination Sum | 🟡 | Each element can be reused. Pass `start` index, not `start+1`. |
| Combination Sum II | 🟡 | Can't reuse. Sort, skip duplicate siblings. |
| Permutations | 🟡 | Swap current with each remaining. Or: use `used[]` boolean array. |
| Permutations II (duplicates) | 🟡 | Sort. Skip `used[i-1]==False and nums[i]==nums[i-1]`. |
| Word Search | 🟡 | DFS + backtrack (mark visited with '#', restore after). |
| Palindrome Partitioning | 🟡 | At each position, try all palindromic prefixes, recurse on remainder. |
| N-Queens | 🔴 | Track cols, diagonals (`r-c`), anti-diagonals (`r+c`) as sets. |
| Letter Combinations of Phone Number | 🟡 | DFS through digits, branching on each letter mapping. |

**Backtracking template:**
```python
def backtrack(state, choices):
    if is_complete(state):
        results.append(state[:])
        return
    for i, choice in enumerate(choices):
        if not is_valid(choice): continue
        state.append(choice)          # make choice
        backtrack(state, next_choices)
        state.pop()                    # undo choice (backtrack)
```

---

## ⭐ 1D Dynamic Programming (12 problems)

| Problem | Difficulty | Key Insight |
|---------|-----------|-------------|
| Climbing Stairs | 🟢 | Fibonacci. |
| Min Cost Climbing Stairs | 🟢 | `dp[i] = cost[i] + min(dp[i-1], dp[i-2])` |
| House Robber | 🟡 | Skip-or-take with 2-step lookback. |
| House Robber II (circular) | 🟡 | Run twice: [0..n-2] and [1..n-1]. |
| Longest Palindromic Substring | 🟡 | Expand around each center (odd + even). |
| Palindromic Substrings | 🟡 | Count palindromes from each center. |
| Decode Ways | 🟡 | Check valid 1-digit and 2-digit decodings. |
| Coin Change | 🟡 | Unbounded knapsack. Bottom-up over all amounts. |
| Maximum Product Subarray | 🟡 | Track max AND min (negative × negative). |
| Word Break | 🟡 | `dp[i] = any(dp[j] and s[j:i] in words)` |
| Longest Increasing Subsequence | 🟡 | Patience sort: O(n log n) with binary search. |
| Partition Equal Subset Sum | 🟡 | 0/1 knapsack. Target = totalSum / 2. |

---

## ⭐ 2D Dynamic Programming (11 problems)

| Problem | Difficulty | Key Insight |
|---------|-----------|-------------|
| Unique Paths | 🟡 | `dp[r][c] = dp[r-1][c] + dp[r][c-1]` |
| Longest Common Subsequence | 🟡 | Match → diagonal+1; no match → max(up, left) |
| Best Time to Buy Stock with Cooldown | 🟡 | States: held, sold (cooldown), idle |
| Coin Change II | 🟡 | Count combos. Outer loop: coins; inner: amounts 0→target. |
| Target Sum | 🟡 | DFS with memo. Or: reduce to knapsack with `(sum+target)/2` target. |
| Interleaving String | 🟡 | `dp[i][j]` = can s3[:i+j] be formed by interleaving s1[:i] and s2[:j]. |
| Longest Increasing Path in Matrix | 🔴 | DFS with memo. Each cell computed once. O(m*n). |
| Distinct Subsequences | 🔴 | `dp[i][j]` = ways t[:j] appears in s[:i]. |
| Edit Distance | 🔴 | Classic. Three ops: insert, delete, replace. |
| Burst Balloons | 🔴 | Think last balloon burst, not first. Interval DP. |
| Regular Expression Matching | 🔴 | `dp[i][j]` = s[:i] matches p[:j]. `*` can mean 0 or more of prev char. |

---

## ⭐ Intervals (6 problems)

| Problem | Difficulty | Key Insight |
|---------|-----------|-------------|
| Insert Interval | 🟡 | Three phases: before, overlap (merge), after. |
| Merge Intervals | 🟡 | Sort by start. If next.start ≤ cur.end, extend cur.end. |
| Non-overlapping Intervals | 🟡 | Greedy: sort by end time. Keep intervals with earliest end. |
| Meeting Rooms | 🟢 | Sort by start. Check if any overlap exists. |
| Meeting Rooms II | 🟡 | Min-heap of end times. Pop if room available, push new end. OR count max overlapping at any point. |
| Minimum Interval to Include Each Query | 🔴 | Sort intervals by size. For each query, add all intervals that contain it, take smallest. |

---

## ⭐ Advanced Graphs (6 problems)

| Problem | Difficulty | Key Insight |
|---------|-----------|-------------|
| Reconstruct Itinerary | 🔴 | Hierholzer's algorithm for Eulerian path. DFS with backtracking. |
| Min Cost to Connect All Points | 🟡 | Prim's MST: greedily add closest unvisited point. |
| Network Delay Time | 🟡 | Dijkstra from source k. Answer = max dist in result. |
| Swim in Rising Water | 🔴 | Dijkstra or binary search + BFS. Min max-elevation path. |
| Alien Dictionary | 🔴 | Build char DAG from adjacent word differences. Topological sort. |
| Cheapest Flights Within K Stops | 🟡 | Bellman-Ford limited to k+1 edges. OR Dijkstra with (cost,node,stops) state. |

**Dijkstra reminder:**
```python
heap = [(0, start)]  # (distance, node)
dist = {start: 0}
while heap:
    d, u = heappop(heap)
    if d > dist[u]: continue  # stale entry
    for v, w in graph[u]:
        if d + w < dist.get(v, inf):
            dist[v] = d + w
            heappush(heap, (d + w, v))
```

---

## Math & Geometry (8 problems) ⭐ Completely new vs Blind 75

| Problem | Difficulty | Key Insight |
|---------|-----------|-------------|
| Rotate Image | 🟡 | Transpose then reverse each row. In-place. |
| Spiral Matrix | 🟡 | Four boundaries (top, bottom, left, right). Shrink after each direction. |
| Set Matrix Zeroes | 🟡 | Use first row/col as flags to avoid extra space. |
| Happy Number | 🟢 | Fast/slow pointer on digit-square-sum sequence. Cycle = not happy. |
| Plus One | 🟢 | Carry propagation from end. If all 9s, prepend 1. |
| Pow(x, n) | 🟡 | Fast exponentiation: `x^n = (x^(n/2))^2`. Handle negative n. O(log n). |
| Multiply Strings | 🟡 | Grade-school multiplication on digit arrays. |
| Detect Squares | 🔴 | Count points by coordinate. For each axis-aligned square, check 4th corner. |

---

## Extra Problems Worth Knowing (not in either list)

### Hard problems that appear often
| Problem | Why It Matters |
|---------|---------------|
| Trapping Rain Water | Two-pointer classic. Also solvable with stack. |
| Median of Two Sorted Arrays | Binary search on partition. Tests deep BS understanding. |
| Word Ladder II | BFS + backtracking. Hard to implement clean. |
| Largest Rectangle in Histogram | Monotonic stack. Foundation for Maximal Rectangle. |
| Maximal Rectangle | Converts each row to histogram. |
| Regular Expression Matching | Hard DP. Tests exhaustive state design. |
| Serialize/Deserialize Binary Tree | Tests BFS/DFS implementation fluency. |
| Russian Doll Envelopes | LIS in 2D. Sort trick (by width asc, height desc). |

### Frequently Asked OA questions (less known but common)
| Problem | Pattern |
|---------|---------|
| Find All Anagrams | Sliding window + frequency map |
| Longest Consecutive Sequence | HashSet, start-of-sequence check |
| Top K Frequent Words | Min-heap, custom comparator |
| Design Spreadsheet | 2D array + formula evaluation |
| Design Snake Game | Deque for body, set for O(1) collision check |
| LFU Cache | Two HashMaps + min-freq tracking |

---

## NeetCode Roadmap Study Order

```
Week 1:  Arrays+Hashing, Two Pointers, Sliding Window (all easy+medium)
Week 2:  Stack, Binary Search, Linked List (all)
Week 3:  Trees (all), Tries (all), Heap/PQ (all)
Week 4:  Backtracking (all), Graphs - basic (BFS/DFS/Union-Find)
Week 5:  1D DP, 2D DP, Intervals (all)
Week 6:  Advanced Graphs, Greedy (all), Math & Geometry
Week 7+: Hard problems, Mock interviews, weak area review
```

---

## Quick Reference: When to Use What

```
Input array is sorted       → Binary Search or Two Pointers
Top K elements              → Heap (size K)
All combinations/subsets    → Backtracking
Tree problems               → DFS (usually) or BFS (level-order)
Shortest path               → BFS (unweighted) or Dijkstra (weighted)
Detect cycle                → Fast/Slow pointers (list) or DFS colors (graph)
String matching             → Sliding Window or KMP
Overlapping subproblems     → DP (top-down memo or bottom-up table)
Min/Max with deletion       → Monotonic Stack
Prefix in strings           → Trie
Connected components        → Union-Find or DFS/BFS
Scheduling/ordering         → Topological Sort
```
