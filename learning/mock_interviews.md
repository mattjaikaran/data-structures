# Mock Interview Sessions
### Timed practice sets designed to simulate real interview loops

Use these as full simulations: **no hints, no looking up syntax, timer running**.
After each session, grade yourself on correctness, time, and communication quality.

---

## How to Use This Guide

**Setup:**
1. Mute everything. Close all tabs except your editor.
2. Set a timer for the session length.
3. Write code in a blank file — no autocomplete if possible.
4. Talk out loud as if explaining to an interviewer.
5. After time's up: check solutions, grade yourself, note what to review.

**Grading:**
- ✅ Correct solution within time
- 🟡 Correct but too slow, or minor bugs
- ❌ Didn't finish or wrong approach

**Target:** Get to ✅ on 80%+ of problems before interviewing.

---

## Session 1 — Arrays & Hashing (45 min)
*Similar to: Meta, Amazon phone screen*

**Problem 1 (15 min) 🟢**
Given an integer array `nums`, return the indices of the two numbers that add up to `target`.
Assume exactly one solution, no reuse of same element.
```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
```

**Problem 2 (30 min) 🟡**
Given an unsorted array of integers, find the length of the longest consecutive sequence.
Must run in O(n) time.
```
Input: [100,4,200,1,3,2]
Output: 4  (sequence 1,2,3,4)
```

**After timer — what to review:**
- Hash map complement lookup
- Hash set for O(1) membership
- Only starting sequences from n where n-1 not in set

---

## Session 2 — Sliding Window (45 min)
*Similar to: Google phone screen, Amazon OA*

**Problem 1 (20 min) 🟢**
Find the maximum sum subarray of size k.
```
Input: arr = [2,1,5,1,3,2], k = 3
Output: 9  (subarray [5,1,3])
```

**Problem 2 (25 min) 🟡**
Given a string, find the length of the longest substring without repeating characters.
```
Input: "abcabcbb"
Output: 3  ("abc")
```

**After timer:**
- Fixed window: add right, remove left at i-k
- Variable window: expand right, shrink left while invalid
- Hash map of last-seen index for fast shrink

---

## Session 3 — Linked Lists (45 min)
*Similar to: Microsoft, Amazon*

**Problem 1 (15 min) 🟢**
Reverse a singly linked list. Both iterative and recursive.

**Problem 2 (30 min) 🟡**
Given the head of a linked list, remove the nth node from the end and return the head.
```
Input: 1→2→3→4→5, n=2
Output: 1→2→3→5
```

**After timer:**
- Two pointer gap of n
- Dummy head eliminates edge cases when removing head

---

## Session 4 — Trees I (45 min)
*Similar to: Microsoft, Google*

**Problem 1 (15 min) 🟢**
Find the maximum depth of a binary tree.

**Problem 2 (30 min) 🟡**
Given the root of a binary tree, return the level order traversal as a list of lists.
```
Input: [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

**After timer:**
- Max depth: 1 + max(left, right) recursively
- Level order: BFS with queue, snapshot queue size at start of each level

---

## Session 5 — Trees II + Binary Search (60 min)
*Similar to: Google onsite, Meta onsite*

**Problem 1 (20 min) 🟡**
Validate a Binary Search Tree.

**Problem 2 (20 min) 🟡**
Search in a rotated sorted array.
```
Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
```

**Problem 3 (20 min) 🟡**
Find the minimum element in a rotated sorted array.

**After timer:**
- BST validation: pass valid range [lo, hi] down the tree
- Rotated array: one half is always sorted — identify which, binary search in it

---

## Session 6 — Graphs (60 min)
*Similar to: Google, Amazon*

**Problem 1 (20 min) 🟡**
Number of Islands — given a 2D grid of '1's and '0's, count the islands.

**Problem 2 (40 min) 🟡**
Course Schedule — given n courses and prerequisites, determine if you can finish all courses.
```
Input: n=2, prerequisites=[[1,0]]
Output: true  (take 0, then 1)

Input: n=2, prerequisites=[[1,0],[0,1]]
Output: false  (cycle)
```

**After timer:**
- Islands: DFS flood fill, mark visited as '0'
- Course schedule: DFS cycle detection with 3-color state (WHITE/GRAY/BLACK)

---

## Session 7 — Dynamic Programming I (60 min)
*Similar to: Amazon, Microsoft*

**Problem 1 (15 min) 🟢**
Climbing stairs: N steps, can take 1 or 2 at a time. How many ways?

**Problem 2 (20 min) 🟡**
Coin change: given coins and amount, return minimum number of coins.
```
Input: coins=[1,5,11], amount=11
Output: 1  (one 11-coin)
```

**Problem 3 (25 min) 🟡**
Longest Increasing Subsequence.
```
Input: [10,9,2,5,3,7,101,18]
Output: 4  ([2,3,7,101] or [2,5,7,101])
```

**After timer:**
- Climbing stairs = Fibonacci
- Coin change = unbounded knapsack: dp[a] = min over coins of dp[a-c]+1
- LIS O(n²): dp[i] = max dp[j]+1 where j < i and nums[j] < nums[i]
- LIS O(n log n): patience sorting with bisect

---

## Session 8 — Dynamic Programming II (60 min)
*Similar to: Google, Meta hard problems*

**Problem 1 (30 min) 🔴**
Longest Common Subsequence.
```
Input: s1="abcde", s2="ace"
Output: 3  ("ace")
```

**Problem 2 (30 min) 🔴**
Edit Distance (Levenshtein).
```
Input: "horse", "ros"
Output: 3
```

**After timer:**
- LCS: 2D DP. Match → dp[i][j] = dp[i-1][j-1]+1. No match → max of adjacent.
- Edit distance: match → dp[i-1][j-1]. No match → 1 + min(insert, delete, replace).

---

## Session 9 — Heap / Priority Queue (45 min)
*Similar to: Amazon, Google*

**Problem 1 (15 min) 🟡**
Find the Kth largest element in an unsorted array.

**Problem 2 (30 min) 🔴**
Find the median from a data stream. Design a class that supports:
- `addNum(num)` — add number
- `findMedian()` — return median

**After timer:**
- Kth largest: min-heap of size k
- Median stream: two heaps — max-heap lower half, min-heap upper half; maintain size balance

---

## Session 10 — Backtracking (60 min)
*Similar to: Google, Meta*

**Problem 1 (20 min) 🟡**
Generate all subsets of a distinct integer array.

**Problem 2 (20 min) 🟡**
Letter combinations of a phone number.
```
Input: "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**Problem 3 (20 min) 🔴**
N-Queens: place n queens on an n×n board so no two attack each other.
Return all distinct solutions.

**After timer:**
- Subsets: choose at index i or skip, pass i+1 as start
- Phone numbers: for each digit, try all letters
- N-Queens: track cols, diagonals (row-col), anti-diagonals (row+col) in sets

---

## Session 11 — Greedy + Intervals (45 min)
*Similar to: Amazon, Google*

**Problem 1 (15 min) 🟡**
Merge overlapping intervals.
```
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
```

**Problem 2 (30 min) 🟡**
Minimum number of meeting rooms required.
```
Input: [[0,30],[5,10],[15,20]]
Output: 2
```

**After timer:**
- Merge: sort by start, extend last interval's end if overlap
- Meeting rooms: sort by start, min-heap of end times, replace if new start >= heap top

---

## Session 12 — Full Google Loop Simulation (4 × 45 min)
*Take a real break between rounds. No reviewing answers mid-loop.*

**Round 1 (Arrays/Strings):**
- Product of Array Except Self — O(n) time, O(1) extra space
- Minimum Window Substring

**Round 2 (Trees/Graphs):**
- Binary Tree Maximum Path Sum
- Course Schedule II (return topological order)

**Round 3 (DP):**
- Word Break
- Decode Ways

**Round 4 (Design/Synthesis):**
- Design a Rate Limiter (API + data structures)
- LRU Cache implementation

**Debrief checklist after each round:**
- [ ] Did I clarify before coding?
- [ ] Did I state my approach before writing?
- [ ] Did I talk through my thinking?
- [ ] Did I test with examples?
- [ ] Did I state time/space complexity?
- [ ] Did I handle edge cases?

---

## Session 13 — Full Meta Loop Simulation (2 × 45 min)
*Meta typically gives 2 problems per 45-min round*

**Round 1:**
- Valid Palindrome II (can delete at most one character) 🟡
- Group Anagrams 🟡

**Round 2:**
- Binary Tree Right Side View 🟡
- Subarray Sum Equals K 🟡

---

## Session 14 — Full Amazon Loop Simulation (5 × 45 min)
*Amazon gives 1-2 coding + behavioral per round*

**Round 1: Coding**
- Two Sum + variant (what if multiple solutions?)
- Maximum Subarray

**Round 2: Coding**
- LRU Cache
- Number of Islands

**Round 3: System Design**
- Design a URL shortener
- (30 min design, 15 min deep dive on one component)

**Round 4: Behavioral (LP-focused)**
- "Tell me about a time you failed" (Earn Trust)
- "Tell me about a time you delivered despite obstacles" (Deliver Results)
- "Tell me about a time you disagreed with your manager" (Backbone)

**Round 5: Bar Raiser**
- Merge K Sorted Lists
- "Tell me about the most technically complex thing you've built"

---

## Tracking Your Progress

Copy this table and update after each session:

| Session | Date | Score | Weak Spots | Review |
|---------|------|-------|-----------|--------|
| 1 Arrays | | /2 | | |
| 2 Sliding Window | | /2 | | |
| 3 Linked Lists | | /2 | | |
| 4 Trees I | | /2 | | |
| 5 Trees II + BST | | /3 | | |
| 6 Graphs | | /2 | | |
| 7 DP I | | /3 | | |
| 8 DP II | | /2 | | |
| 9 Heap | | /2 | | |
| 10 Backtracking | | /3 | | |
| 11 Greedy | | /2 | | |
| 12 Google Loop | | /8 | | |
| 13 Meta Loop | | /4 | | |
| 14 Amazon Loop | | /5 | | |

**Ready to interview when:** scoring ✅ on 80%+ across all sessions, with full behavioral stories prepared.
