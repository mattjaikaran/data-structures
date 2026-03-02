# Sorting

Comparison sorts: Bubble, Selection, Insertion (O(n²)); Merge, Quick, Heap (O(n log n)). Non-comparison: Counting (O(n+k)), Radix (O(d·(n+k))). Key insight: no comparison sort beats O(n log n); Counting/Radix bypass this by exploiting data structure.

## Complexity

| Algorithm      | Average     | Worst       | Space  | Stable |
|----------------|-------------|-------------|--------|--------|
| Bubble Sort    | O(n²)       | O(n²)       | O(1)   | Yes    |
| Selection Sort | O(n²)       | O(n²)       | O(1)   | No     |
| Insertion Sort | O(n²)       | O(n²)       | O(1)   | Yes    |
| Merge Sort     | O(n log n)  | O(n log n)  | O(n)   | Yes    |
| Quick Sort     | O(n log n)  | O(n²)       | O(log n)| No    |
| Heap Sort      | O(n log n)  | O(n log n)  | O(1)   | No     |
| Counting Sort  | O(n+k)      | O(n+k)      | O(k)   | Yes    |
| Radix Sort     | O(d·(n+k))  | O(d·(n+k))  | O(n+k) | Yes    |

## Key Patterns

- **Insertion Sort** — best for nearly-sorted arrays
- **Merge Sort** — best for linked lists, stable
- **Quick Sort** — best average, in-place, random pivot avoids worst case
- **Quickselect** — O(n) avg for kth smallest
- **Dutch National Flag** — three-way partition for 0s, 1s, 2s

## Problems Implemented

| Problem           | Difficulty | Notes |
|-------------------|------------|-------|
| Bubble Sort       | —          | Basic |
| Selection Sort    | —          | Basic |
| Insertion Sort    | —          | Basic |
| Merge Sort        | —          | Basic |
| Quick Sort        | —          | Basic |
| Heap Sort         | —          | Basic |
| Counting Sort     | —          | Non-negative ints |
| Radix Sort        | —          | Integers, strings |
| Quickselect       | —          | Kth smallest |
| Dutch National Flag | —       | Sort 0s, 1s, 2s |
| Merge Intervals   | Medium     | Sort + linear scan |
| Sort Nearly Sorted| —          | K-sorted via heap |

## Implementations

| Language   | File |
|------------|------|
| Python     | [sorting.py](sorting.py) |
| JavaScript | [sorting.js](sorting.js) |
| TypeScript | [sorting.ts](sorting.ts) |
| Rust       | [sorting.rs](sorting.rs) |
