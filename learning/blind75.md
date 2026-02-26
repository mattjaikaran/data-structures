# Blind 75
### The canonical 75 problems. Master these and you can pass most FAANG screens.
*Each problem includes: difficulty, pattern, key insight, and time/space complexity.*

---

## Arrays & Hashing

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 1 | Two Sum | 🟢 | Hash Map | Store complement → index. One pass. O(n) |
| 2 | Best Time to Buy and Sell Stock | 🟢 | Sliding Window | Track min price seen so far. O(n) |
| 3 | Contains Duplicate | 🟢 | Hash Set | Add to set; return True if already there. O(n) |
| 4 | Product of Array Except Self | 🟡 | Prefix/Suffix | Left pass for prefix products, right pass for suffix. No division. O(n) |
| 5 | Maximum Subarray | 🟡 | Kadane's | If running sum goes negative, restart from 0. O(n) |
| 6 | Maximum Product Subarray | 🟡 | DP | Track both max AND min (negative × negative = positive). O(n) |
| 7 | Find Minimum in Rotated Sorted Array | 🟡 | Binary Search | Min is the only element smaller than its left neighbor. O(log n) |
| 8 | Search in Rotated Sorted Array | 🟡 | Binary Search | Determine which half is sorted; narrow accordingly. O(log n) |
| 9 | 3Sum | 🟡 | Two Pointers | Sort. Fix one, two-pointer the rest. Skip duplicates. O(n²) |
| 10 | Container With Most Water | 🟡 | Two Pointers | Move the shorter wall inward. O(n) |

**Approach notes:**
- **Product of Array Except Self**: `output[i] = product of all left × product of all right`. Two passes, O(1) extra space (excluding output).
- **Kadane's**: `curSum = max(n, curSum + n)`. Update best each step.
- **3Sum**: After sorting, for each `nums[i]`, two-pointer `left=i+1, right=n-1`. Skip `nums[i] == nums[i-1]` to avoid dupes.

---

## Two Pointers

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 11 | Valid Palindrome | 🟢 | Two Pointers | L/R pointers, skip non-alphanumeric. O(n) |
| 12 | Two Sum II (sorted input) | 🟡 | Two Pointers | Sorted: move left if sum too small, right if too big. O(n) |
| 13 | 3Sum | 🟡 | Two Pointers | (see Arrays) |
| 14 | Container With Most Water | 🟡 | Two Pointers | (see Arrays) |
| 15 | Trapping Rain Water | 🔴 | Two Pointers | `water[i] = min(maxLeft, maxRight) - height[i]`. Two pointer or stack. O(n) |

---

## Sliding Window

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 16 | Best Time to Buy Stock | 🟢 | Sliding Window | (see Arrays #2) |
| 17 | Longest Substring Without Repeating | 🟡 | Sliding Window | HashMap of last seen index. Shrink left past duplicate. O(n) |
| 18 | Longest Repeating Character Replacement | 🟡 | Sliding Window | Window valid if `len - maxCount <= k`. Only track max count seen. O(n) |
| 19 | Permutation in String | 🟡 | Sliding Window | Fixed-size window (len(p)). Compare char frequency maps. O(n) |
| 20 | Minimum Window Substring | 🔴 | Sliding Window | Expand right until valid; shrink left while still valid. Track `missing` count. O(n) |
| 21 | Sliding Window Maximum | 🔴 | Monotonic Deque | Deque stores indices of useful candidates, front = max. O(n) |

**Key insight for LC #424 (Longest Repeating Character Replacement):**
```python
# Window [left, right] is valid if:
# (right - left + 1) - max_count <= k
# max_count never decreases (only care about the best we've seen)
```

---

## Stack

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 22 | Valid Parentheses | 🟢 | Stack | Push open, pop+check on close. O(n) |
| 23 | Min Stack | 🟢 | Stack | Parallel min-stack alongside main stack. O(1) all ops |
| 24 | Evaluate Reverse Polish Notation | 🟡 | Stack | Push nums, pop 2 on operator. O(n) |
| 25 | Generate Parentheses | 🟡 | Backtracking | Branch: add `(` if open < n, add `)` if close < open. O(4^n/√n) |
| 26 | Daily Temperatures | 🟡 | Monotonic Stack | Stack of indices. Pop when warmer temp found. O(n) |
| 27 | Car Fleet | 🟡 | Stack/Sort | Sort by position desc. Time to target = (target-pos)/speed. If slower than car ahead, merge. O(n log n) |
| 28 | Largest Rectangle in Histogram | 🔴 | Monotonic Stack | Stack of (start_idx, height). Pop when shorter bar found. O(n) |

---

## Binary Search

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 29 | Binary Search | 🟢 | Binary Search | lo=0, hi=n-1. mid=(lo+hi)//2. O(log n) |
| 30 | Search a 2D Matrix | 🟡 | Binary Search | Treat as flattened sorted array. `row=mid//n, col=mid%n`. O(log m*n) |
| 31 | Koko Eating Bananas | 🟡 | Binary Search on Answer | `can(speed)` = total hours ≤ h. Search speed in [1, max(piles)]. O(n log max) |
| 32 | Find Minimum in Rotated Array | 🟡 | Binary Search | (see Arrays #7) |
| 33 | Search in Rotated Array | 🟡 | Binary Search | (see Arrays #8) |
| 34 | Time Based Key-Value Store | 🟡 | Binary Search | Store list of (timestamp, value). Binary search on timestamp. O(log n) |
| 35 | Median of Two Sorted Arrays | 🔴 | Binary Search | Partition both arrays so left halves = combined left half. O(log min(m,n)) |

---

## Linked List

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 36 | Reverse Linked List | 🟢 | Linked List | Three pointers: prev, cur, next. O(n) |
| 37 | Merge Two Sorted Lists | 🟢 | Linked List | Dummy head. Compare and advance. O(n+m) |
| 38 | Reorder List | 🟡 | Fast/Slow + Reverse | Find mid, reverse second half, merge alternating. O(n) |
| 39 | Remove Nth Node From End | 🟡 | Two Pointers | Fast pointer n+1 ahead. When fast=null, slow.next is target. O(n) |
| 40 | Copy List with Random Pointer | 🟡 | Hash Map | Map original→copy nodes. Two passes. O(n) |
| 41 | Add Two Numbers | 🟡 | Linked List | Simulate addition with carry. Dummy head. O(max(m,n)) |
| 42 | Linked List Cycle | 🟢 | Fast/Slow Pointers | Floyd's: if fast meets slow, cycle exists. O(n) |
| 43 | Find the Duplicate Number | 🟡 | Fast/Slow Pointers | Treat array as linked list (val = next node). Floyd's cycle detection. O(n) |
| 44 | LRU Cache | 🟡 | HashMap + DLL | O(1) get/put: map for lookup, DLL for order. Move-to-front on access. |
| 45 | Merge K Sorted Lists | 🔴 | Heap | Min-heap of (val, list_idx, node_idx). Pop min, push next from same list. O(n log k) |
| 46 | Reverse Nodes in K-Group | 🔴 | Linked List | Count k nodes, reverse group, recurse. O(n) |

---

## Trees

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 47 | Invert Binary Tree | 🟢 | DFS | Swap left/right at every node. O(n) |
| 48 | Maximum Depth of Binary Tree | 🟢 | DFS | `1 + max(depth(left), depth(right))`. O(n) |
| 49 | Diameter of Binary Tree | 🟢 | DFS | At each node: `left_height + right_height`. Track global max. O(n) |
| 50 | Balanced Binary Tree | 🟢 | DFS | Return -1 if unbalanced. `\|left - right\| > 1` → -1. O(n) |
| 51 | Same Tree | 🟢 | DFS | Null checks then compare val + recurse both sides. O(n) |
| 52 | Subtree of Another Tree | 🟢 | DFS | `isSame(root, sub) OR isSubtree(root.left) OR isSubtree(root.right)`. O(n*m) |
| 53 | Lowest Common Ancestor of BST | 🟢 | BST Property | Both < root → go left. Both > root → go right. Else root is LCA. O(log n) avg |
| 54 | Binary Tree Level Order Traversal | 🟡 | BFS | Queue. Process level by level. O(n) |
| 55 | Binary Tree Right Side View | 🟡 | BFS | Last element of each level in BFS. O(n) |
| 56 | Count Good Nodes in Binary Tree | 🟡 | DFS | Pass max-so-far top-down. Node is "good" if val ≥ max. O(n) |
| 57 | Validate Binary Search Tree | 🟡 | DFS | Pass (min, max) bounds top-down. O(n) |
| 58 | Kth Smallest Element in BST | 🟡 | Inorder | Inorder traversal is sorted. Stop at kth. O(n) |
| 59 | Construct Tree from Preorder+Inorder | 🟡 | DFS | preorder[0] = root. Find in inorder → split left/right. O(n²) naive, O(n) with hashmap |
| 60 | Binary Tree Maximum Path Sum | 🔴 | DFS | At each node: `max(0, gainLeft) + max(0, gainRight) + val`. O(n) |
| 61 | Serialize and Deserialize Binary Tree | 🔴 | BFS/DFS | BFS level-order with "null" markers. O(n) |

---

## Tries

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 62 | Implement Trie | 🟡 | Trie | TrieNode with children map + is_end flag. O(L) per op |
| 63 | Design Add and Search Words DS | 🟡 | Trie + DFS | '.' wildcard → try all children at that level. O(L) search |
| 64 | Word Search II | 🔴 | Trie + Backtracking | Build trie of words. DFS on board, prune using trie. O(M*N*4^L) |

---

## Heap / Priority Queue

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 65 | Kth Largest Element in a Stream | 🟢 | Min Heap | Maintain min-heap of size k. Top = kth largest. O(log k) per add |
| 66 | Last Stone Weight | 🟢 | Max Heap | Pop two heaviest, push difference if nonzero. O(n log n) |
| 67 | K Closest Points to Origin | 🟡 | Heap/QuickSelect | Heap of size k by distance OR quickselect for O(n) avg |
| 68 | Kth Largest Element in Array | 🟡 | Heap/QuickSelect | Min-heap size k OR quickselect O(n) avg |
| 69 | Task Scheduler | 🟡 | Greedy + Heap | `max((maxCount-1)*(n+1)+maxCountTasks, len(tasks))`. O(n) |
| 70 | Design Twitter | 🟡 | Heap + HashMap | Per-user tweet list (with timestamp). Merge-k on getNewsFeed. O(k log k) |
| 71 | Find Median from Data Stream | 🔴 | Two Heaps | Max-heap (lower half) + min-heap (upper half). Balance on insert. O(log n) |

---

## Graphs

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| 72 | Number of Islands | 🟡 | DFS/BFS | DFS from each '1', mark visited by setting to '0'. O(m*n) |
| 73 | Clone Graph | 🟡 | DFS + HashMap | Map original→clone. DFS to copy edges. O(V+E) |
| 74 | Max Area of Island | 🟡 | DFS | DFS returns area count. Track max. O(m*n) |
| 75 | Pacific Atlantic Water Flow | 🟡 | Multi-source BFS/DFS | BFS from Pacific edges, BFS from Atlantic edges. Intersection = answer. O(m*n) |

---

## Dynamic Programming (Bonus beyond strict 75)

| # | Problem | Difficulty | Pattern | Key Insight |
|---|---------|-----------|---------|-------------|
| B1 | Climbing Stairs | 🟢 | 1D DP | Fibonacci. `dp[i] = dp[i-1] + dp[i-2]`. O(n) |
| B2 | House Robber | 🟡 | 1D DP | `dp[i] = max(dp[i-1], dp[i-2]+nums[i])`. O(n) |
| B3 | House Robber II | 🟡 | 1D DP | Two passes: rob [0..n-2] and [1..n-1]. O(n) |
| B4 | Longest Palindromic Substring | 🟡 | Expand Around Center | Try each char as odd/even center. O(n²) |
| B5 | Palindromic Substrings | 🟡 | Expand Around Center | Count each palindrome. O(n²) |
| B6 | Decode Ways | 🟡 | 1D DP | `dp[i] += dp[i-1]` if valid single digit; `dp[i] += dp[i-2]` if valid two digits. O(n) |
| B7 | Coin Change | 🟡 | Unbounded Knapsack | `dp[a] = min(dp[a-c]+1)` for each coin c. O(amount*coins) |
| B8 | Maximum Product Subarray | 🟡 | DP | Track both max and min (negative×negative). O(n) |
| B9 | Word Break | 🟡 | DP | `dp[i] = True if dp[j] and s[j:i] in words`. O(n²) |
| B10 | Longest Increasing Subsequence | 🟡 | DP + Binary Search | Patience sort tails array. O(n log n) |
| B11 | Unique Paths | 🟡 | 2D DP | `dp[r][c] = dp[r-1][c] + dp[r][c-1]`. O(m*n) |
| B12 | Longest Common Subsequence | 🟡 | 2D DP | Match → diagonal+1; no match → max of up/left. O(m*n) |
| B13 | Edit Distance | 🔴 | 2D DP | Match → diagonal; else 1 + min(up, left, diagonal). O(m*n) |
| B14 | Jump Game | 🟡 | Greedy | Track furthest reachable. If i > reach, return False. O(n) |

---

## Study Order

**Week 1 — Foundation** (Do these first):
Arrays (#1-6), Two Pointers (#11-12), Stack (#22-23), Linked List (#36-37, 42), Trees (#47-52)

**Week 2 — Core Patterns**:
Sliding Window (#17-20), Binary Search (#29-33), Trees (#53-59), Graphs (#72-74)

**Week 3 — Advanced**:
DP (all bonus), Tries (#62-64), Heap (#65-71), Hard problems from each section

**Week 4 — Reinforce**:
Redo all medium problems without looking at solutions. Time yourself (25 min limit).

---

## Common Mistakes

1. **Forgetting edge cases**: empty input, single element, all same, negative numbers
2. **Off-by-one in binary search**: use `lo < hi` vs `lo <= hi` correctly; know which to use when
3. **Not handling the base case in recursion first**
4. **Modifying input unexpectedly**: make a copy if you need to sort or mutate
5. **Integer overflow** (C++/Java): use `long` when multiplying or summing large values
6. **Returning wrong type from DFS**: decide upfront what each recursive call returns
