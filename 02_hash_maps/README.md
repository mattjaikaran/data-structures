# Hash Maps

O(1) average get/set/delete. Python's `dict` is an open-addressing hash table with dynamic resizing. Key insight: trade O(n) space for O(1) lookup. Use when you need fast membership checks, frequency counting, or complement lookups (e.g., two-sum style problems).

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| Get       | O(1)    | O(n)  |
| Set       | O(1)    | O(n)  |
| Delete    | O(1)    | O(n)  |
| Search    | O(1)    | O(n)  |

## Key Patterns

- **Frequency counting** — count occurrences for anagrams, histograms
- **Prefix sums** — store cumulative sums for subarray queries
- **Two-sum complement** — store seen values, lookup target - current
- **Sliding window + map** — track character counts for substring problems

## Problems Implemented

| Problem                              | Difficulty | LeetCode |
|--------------------------------------|------------|----------|
| Group Anagrams                       | Medium     | #49      |
| Longest Consecutive Sequence         | Medium     | #128     |
| Longest Substring Without Repeating  | Medium     | #3       |
| Minimum Window Substring             | Hard       | #76      |
| 4Sum II                              | Medium     | #454     |
| Subarray Sum Equals K                | Medium     | #560     |
| Word Pattern                         | Easy       | #290     |
| Isomorphic Strings                   | Easy       | #205     |
| First Unique Character               | Easy       | #387     |
| Longest Substring K Distinct         | Medium     | #340     |
| Find All Anagrams in a String        | Medium     | #438     |

## Implementations

| Language   | File |
|------------|------|
| Python     | [hash_maps.py](hash_maps.py) |
| JavaScript | [hash_maps.js](hash_maps.js) |
| TypeScript | [hash_maps.ts](hash_maps.ts) |
| Rust       | [hash_maps.rs](hash_maps.rs) |
