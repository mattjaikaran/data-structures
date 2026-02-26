# Interview Patterns — Problem → Pattern Mapping
### See the pattern, not just the problem

---

## The 14 Core Patterns

### 1. Two Pointers
**When:** sorted array, find pair/triplet, palindrome check, remove duplicates
**Template:**
```python
left, right = 0, len(arr) - 1
while left < right:
    if condition: return result
    elif too_small: left += 1
    else: right -= 1
```
**Problems:** Two Sum II, 3Sum, Container With Most Water, Trapping Rain Water, Valid Palindrome

---

### 2. Sliding Window
**When:** subarray/substring of fixed or variable length, "at most k", "longest without"
**Template:**
```python
# Variable window
left = 0
for right in range(len(arr)):
    # expand window — add arr[right]
    while window_invalid:
        # shrink window — remove arr[left]
        left += 1
    best = max(best, right - left + 1)
```
**Problems:** Longest Substring Without Repeating, Min Window Substring, Sliding Window Max

---

### 3. Fast & Slow Pointers
**When:** linked list cycle, middle of list, duplicate detection
**Template:**
```python
slow = fast = head
while fast and fast.next:
    slow = slow.next
    fast = fast.next.next
    if slow is fast: # cycle detected
```
**Problems:** Linked List Cycle, Find Duplicate, Happy Number, Middle of Linked List

---

### 4. Merge Intervals
**When:** overlapping intervals, scheduling, calendar
**Template:**
```python
intervals.sort(key=lambda x: x[0])
merged = [intervals[0]]
for start, end in intervals[1:]:
    if start <= merged[-1][1]:  # overlap
        merged[-1][1] = max(merged[-1][1], end)
    else:
        merged.append([start, end])
```
**Problems:** Merge Intervals, Insert Interval, Meeting Rooms, Employee Free Time

---

### 5. Cyclic Sort
**When:** array contains numbers in range [1,n], find missing/duplicate
**Template:**
```python
i = 0
while i < len(nums):
    j = nums[i] - 1           # where nums[i] should be
    if nums[i] != nums[j]:
        nums[i], nums[j] = nums[j], nums[i]
    else:
        i += 1
# Now scan for out-of-place elements
```
**Problems:** Missing Number, Find Duplicate, First Missing Positive

---

### 6. Monotonic Stack
**When:** "next greater/smaller element", histogram areas, temperature spans
**Template:**
```python
stack = []    # stores indices
for i in range(len(arr)):
    while stack and arr[stack[-1]] < arr[i]:  # popped elements found their answer
        idx = stack.pop()
        result[idx] = i - idx   # or arr[i]
    stack.append(i)
```
**Problems:** Daily Temperatures, Next Greater Element, Largest Rectangle in Histogram, Trapping Rain Water

---

### 7. BFS (Level-by-Level)
**When:** shortest path unweighted, level-order traversal, word ladder, spreading
**Template:**
```python
from collections import deque
q = deque([(start, 0)])
visited = {start}
while q:
    node, dist = q.popleft()
    if node == target: return dist
    for neighbor in graph[node]:
        if neighbor not in visited:
            visited.add(neighbor)
            q.append((neighbor, dist + 1))
```
**Problems:** Binary Tree Level Order, Word Ladder, Walls and Gates, Rotting Oranges

---

### 8. DFS / Backtracking
**When:** all combinations/permutations, constraint satisfaction, grid paths
**Template:**
```python
def backtrack(state, choices):
    if base_case(state):
        results.append(state[:])
        return
    for choice in choices:
        if is_valid(choice):
            state.append(choice)
            backtrack(state, updated_choices)
            state.pop()           # undo choice
```
**Problems:** Subsets, Permutations, Combination Sum, N-Queens, Sudoku Solver, Word Search

---

### 9. Binary Search (on Answer)
**When:** "minimum possible maximum", "can we do X in Y days", answer is monotonic
**Template:**
```python
def can_achieve(mid): ...    # check if mid is feasible

left, right = min_possible, max_possible
while left < right:
    mid = (left + right) // 2
    if can_achieve(mid): right = mid      # look for smaller valid answer
    else: left = mid + 1
return left
```
**Problems:** Koko Eating Bananas, Minimum Days to Make Bouquets, Capacity to Ship Packages

---

### 10. Tree DFS Patterns
**When:** path sums, depth, diameter, LCA, validation

```python
# Pattern A: return info bottom-up
def dfs(node):
    if not node: return base_case
    left = dfs(node.left)
    right = dfs(node.right)
    # update global answer using left, right, node.val
    return value_for_parent

# Pattern B: pass info top-down
def dfs(node, carried_value):
    if not node: return
    dfs(node.left, updated_value)
    dfs(node.right, updated_value)
```
**Problems:** Max Path Sum, Diameter, LCA, Path Sum III, Balanced Tree

---

### 11. Graph Patterns

```python
# DFS for components/cycle/topo
state = {}   # WHITE=0, GRAY=1(in-progress), BLACK=2(done)
def dfs(node):
    state[node] = GRAY
    for nb in graph[node]:
        if state.get(nb) == GRAY: return "CYCLE"
        if state.get(nb, WHITE) == WHITE: dfs(nb)
    state[node] = BLACK

# Union-Find for connectivity
uf = UnionFind(n)
for u, v in edges:
    if not uf.union(u, v): return "CYCLE"  # already connected = cycle
```
**Problems:** Number of Islands, Course Schedule, Redundant Connection, Accounts Merge

---

### 12. Dynamic Programming
**When:** optimal substructure + overlapping subproblems. Choices at each step.

**Identify the state:**
- 1D: `dp[i]` = answer for subproblem ending at/including i
- 2D: `dp[i][j]` = answer for subproblem using first i of X and j of Y

```python
# Bottom-up template
dp = [base_case] * (n + 1)
for i in range(1, n + 1):
    for j in ...:
        dp[i] = max/min/sum(dp[i-1], dp[i-k], ...)
return dp[n]
```

**Classic problems by category:**
| Category | Problems |
|----------|---------|
| 1D linear | Climbing Stairs, House Robber, Jump Game |
| Kadane's | Max Subarray, Max Product Subarray |
| Knapsack | Coin Change, Partition Equal Subset Sum |
| 2D grid | Unique Paths, Min Path Sum, Dungeon Game |
| Strings | Longest Common Subsequence, Edit Distance, Palindrome |
| Trees | House Robber III, Unique BSTs |

---

### 13. Heap / Priority Queue
**When:** K largest/smallest, merge K sorted, streaming median, scheduling
```python
import heapq
# Min-heap of size k → top is kth largest
heap = []
for n in nums:
    heapq.heappush(heap, n)
    if len(heap) > k: heapq.heappop(heap)
return heap[0]
```
**Problems:** Kth Largest, Top K Frequent, Median from Stream, Task Scheduler

---

### 14. Prefix Sum
**When:** range sum queries, subarray sum = k, 2D region sums
```python
prefix = [0] * (n + 1)
for i, n in enumerate(nums): prefix[i+1] = prefix[i] + n
range_sum = lambda l, r: prefix[r+1] - prefix[l]

# Combined with hash map for count of subarrays
freq = {0: 1}; running = count = 0
for n in nums:
    running += n
    count += freq.get(running - k, 0)
    freq[running] = freq.get(running, 0) + 1
```

---

## Complexity Quick Reference

| Structure | Access | Search | Insert | Delete | Space |
|-----------|--------|--------|--------|--------|-------|
| Array | O(1) | O(n) | O(n) | O(n) | O(n) |
| Linked List | O(n) | O(n) | O(1)* | O(1)* | O(n) |
| Stack/Queue | O(n) | O(n) | O(1) | O(1) | O(n) |
| Hash Map | O(1) avg | O(1) avg | O(1) avg | O(1) avg | O(n) |
| BST | O(log n) avg | O(log n) avg | O(log n) avg | O(log n) avg | O(n) |
| Heap | O(n) | O(n) | O(log n) | O(log n) | O(n) |
| Trie | O(L) | O(L) | O(L) | O(L) | O(N*L) |

| Algorithm | Time | Space |
|-----------|------|-------|
| Binary Search | O(log n) | O(1) |
| BFS / DFS | O(V+E) | O(V) |
| Dijkstra | O(E log V) | O(V) |
| Merge Sort | O(n log n) | O(n) |
| Quick Sort | O(n log n) avg | O(log n) |
| Heap Sort | O(n log n) | O(1) |

---

## Approaching Any Problem (5-Step Framework)

1. **Understand** — restate the problem, clarify constraints (size? sorted? duplicates? negative numbers?)
2. **Examples** — work 2-3 examples by hand including edge cases (empty, single element, all same)
3. **Pattern** — which of the 14 patterns applies? what data structure?
4. **Brute force → optimize** — state the naive O(n²) or O(n!) solution, then ask "where's the waste?"
5. **Code** — write clean code, name variables clearly, handle edge cases explicitly

**Red flags to avoid:**
- Starting to code before fully understanding the problem
- Forgetting edge cases: empty input, single element, duplicates, negatives, integer overflow
- Saying "I'll optimize later" without having a plan
- Not communicating your thinking out loud
