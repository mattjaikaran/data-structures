# Heaps

Min-heap: parent ≤ children; root is minimum. Python's `heapq` is a min-heap; for max-heap, negate values. Use for top-K, kth largest, median stream, and task scheduling.

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| Push | O(log n) | O(log n) |
| Pop | O(log n) | O(log n) |
| Peek min | O(1) | O(1) |
| Build from list | O(n) | O(n) |

## Key Patterns

- **Top-K / Kth Largest** — maintain min-heap of size k; smallest of k largest is at root
- **Two Heaps for Median** — max-heap for lower half, min-heap for upper half
- **Merge K Sorted** — heap of (value, list_idx, elem_idx) for O(n log k) merge
- **Task Scheduling** — greedy with max-heap by frequency

## Problems Implemented

| Problem | Difficulty | LeetCode |
|---------|-----------|----------|
| Kth Largest Element | Medium | #215 |
| Top K Frequent Elements | Medium | #347 |
| Kth Largest in Stream | Medium | #703 |
| Merge K Sorted Lists | Hard | #23 |
| Find Median from Data Stream | Hard | #295 |
| Task Scheduler | Medium | #621 |
| K Closest Points to Origin | Medium | #973 |
| Ugly Number II | Medium | #264 |
| Reorganize String | Medium | #767 |

## Implementations

| Language | File |
|----------|------|
| Python | [heaps.py](heaps.py) |
| JavaScript | [heaps.js](heaps.js) |
| TypeScript | [heaps.ts](heaps.ts) |
| Rust | [heaps.rs](heaps.rs) |
