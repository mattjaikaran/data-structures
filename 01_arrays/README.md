# Arrays

A contiguous block of memory storing elements in order. Python's `list` is a dynamic array that resizes automatically. Use arrays when you need O(1) random access, sequential iteration, or when working with subarrays and range queries.

## Complexity

| Operation           | Average      | Worst        |
|---------------------|--------------|--------------|
| Access arr[i]       | O(1)         | O(1)         |
| Search (unsorted)   | O(n)         | O(n)         |
| Search (sorted)     | O(log n)     | O(log n)     |
| Insert at end       | O(1) amort.   | O(n) resize  |
| Insert at middle    | O(n)         | O(n)         |
| Delete at end       | O(1)         | O(1)         |
| Delete at middle    | O(n)         | O(n)         |

## Key Patterns

- **Two Pointers** — shrink window from both ends
- **Sliding Window** — move a fixed/variable window forward
- **Prefix Sum** — precompute cumulative sums for range queries
- **Kadane's** — optimal subarray tracking running max
- **Binary Search** — O(log n) search on sorted data

## Problems Implemented

| Problem                    | Difficulty | LeetCode |
|----------------------------|------------|----------|
| Two Sum                    | Easy       | #1       |
| Best Time to Buy and Sell  | Easy       | #121     |
| Contains Duplicate         | Easy       | #217     |
| Move Zeroes                | Easy       | #283     |
| Product Except Self        | Medium     | #238     |
| Maximum Subarray           | Medium     | #53      |
| 3Sum                       | Medium     | #15      |
| Maximum Product Subarray   | Medium     | #152     |
| Subarray Sum Equals K      | Medium     | #560     |
| Container With Most Water | Medium     | #11      |
| Search in Rotated Sorted   | Medium     | #33      |
| Trapping Rain Water        | Hard       | #42      |
| Largest Rectangle Histogram| Hard       | #84      |

## Implementations

| Language   | File |
|------------|------|
| Python     | [arrays.py](arrays.py) |
| JavaScript | [arrays.js](arrays.js) |
| TypeScript | [arrays.ts](arrays.ts) |
| Rust       | [arrays.rs](arrays.rs) |
