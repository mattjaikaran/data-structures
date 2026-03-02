# Dynamic Programming

DP = optimal substructure + overlapping subproblems. At each step you make a choice; the optimal global answer is built from optimal local answers. Top-down (memoization) or bottom-up (tabulation). Identify by: "min/max number of X", "how many ways", "is it possible", "longest/shortest subsequence".

## Complexity

| Pattern | Time | Space |
|---------|------|-------|
| 1D DP (linear) | O(n) | O(1)–O(n) |
| 2D DP (grid/sequences) | O(m×n) | O(m×n) |
| Knapsack | O(n×W) | O(W) |
| Interval DP | O(n³) | O(n²) |

## Key Patterns

- **1D Linear** — climbing stairs, house robber, jump game
- **2D Grid/Sequences** — unique paths, LCS, edit distance
- **Knapsack** — 0/1, unbounded, 2D (ones/zeroes)
- **State Machine** — stock buy/sell with cooldown/fee
- **Interval DP** — burst balloons, min cost tree

## Problems Implemented

| Problem | Difficulty | LeetCode |
|---------|-----------|----------|
| Climbing Stairs | Easy | #70 |
| House Robber I/II/III | Medium | #198, #213, #337 |
| Min Cost Climbing Stairs | Easy | #746 |
| Jump Game I/II | Medium | #55, #45 |
| Word Break | Medium | #139 |
| Decode Ways | Medium | #91 |
| Coin Change I/II | Medium | #322, #518 |
| Longest Increasing Subsequence | Medium | #300 |
| Maximum Product Subarray | Medium | #152 |
| Unique Paths | Medium | #62 |
| Minimum Path Sum | Medium | #64 |
| Longest Common Subsequence | Medium | #1143 |
| Edit Distance | Hard | #72 |
| Longest Palindromic Substring/Subseq | Medium | #5, #516 |
| Partition Equal Subset Sum | Medium | #416 |
| Ones and Zeroes | Hard | #474 |
| Target Sum | Medium | #494 |
| Interleaving String | Hard | #97 |
| Distinct Subsequences | Hard | #115 |
| Wildcard Matching | Hard | #44 |
| Burst Balloons | Hard | #312 |
| Unique Binary Search Trees | Medium | #96 |
| Minimum Cost Tree From Leaf Values | Hard | #1130 |
| Best Time to Buy/Sell (cooldown/fee/k) | Medium–Hard | #309, #714, #188 |

## Implementations

| Language | File |
|----------|------|
| Python | [dynamic_programming.py](dynamic_programming.py) |
| JavaScript | [dynamic_programming.js](dynamic_programming.js) |
| TypeScript | [dynamic_programming.ts](dynamic_programming.ts) |
| Rust | [dynamic_programming.rs](dynamic_programming.rs) |
