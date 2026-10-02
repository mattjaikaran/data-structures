# Sorting

Start with fundamentals. Then choose one problem, edit its solution file, and run
its tests. Use JavaScript to understand the algorithm, then write Python without
looking at the reference solution. Add TypeScript and Rust after that.

Run all available exercises for this topic with:

```bash
npm run practice -- 06_sorting py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [bubble sort](fundamentals/bubble_sort/README.md) | [js](fundamentals/bubble_sort/solution.js) | [py](fundamentals/bubble_sort/solution.py) | [ts](fundamentals/bubble_sort/solution.ts) | — |
| [insertion sort](fundamentals/insertion_sort/README.md) | [js](fundamentals/insertion_sort/solution.js) | [py](fundamentals/insertion_sort/solution.py) | [ts](fundamentals/insertion_sort/solution.ts) | [rs](fundamentals/insertion_sort/solution.rs) |
| [merge sort](fundamentals/merge_sort/README.md) | [js](fundamentals/merge_sort/solution.js) | [py](fundamentals/merge_sort/solution.py) | [ts](fundamentals/merge_sort/solution.ts) | [rs](fundamentals/merge_sort/solution.rs) |
| [quick sort](fundamentals/quick_sort/README.md) | [js](fundamentals/quick_sort/solution.js) | [py](fundamentals/quick_sort/solution.py) | [ts](fundamentals/quick_sort/solution.ts) | — |
| [heap sort](fundamentals/heap_sort/README.md) | [js](fundamentals/heap_sort/solution.js) | [py](fundamentals/heap_sort/solution.py) | [ts](fundamentals/heap_sort/solution.ts) | [rs](fundamentals/heap_sort/solution.rs) |
| [counting sort](fundamentals/counting_sort/README.md) | [js](fundamentals/counting_sort/solution.js) | [py](fundamentals/counting_sort/solution.py) | [ts](fundamentals/counting_sort/solution.ts) | [rs](fundamentals/counting_sort/solution.rs) |
| [radix sort](fundamentals/radix_sort/README.md) | [js](fundamentals/radix_sort/solution.js) | [py](fundamentals/radix_sort/solution.py) | [ts](fundamentals/radix_sort/solution.ts) | [rs](fundamentals/radix_sort/solution.rs) |
| [selection sort](fundamentals/selection_sort/README.md) | — | [py](fundamentals/selection_sort/solution.py) | — | — |
| [quick sort inplace](fundamentals/quick_sort_inplace/README.md) | — | [py](fundamentals/quick_sort_inplace/solution.py) | — | — |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [quickselect](problems/quickselect/README.md) | [js](problems/quickselect/solution.js) | [py](problems/quickselect/solution.py) | [ts](problems/quickselect/solution.ts) | [rs](problems/quickselect/solution.rs) |
| [dutch national flag](problems/dutch_national_flag/README.md) | [js](problems/dutch_national_flag/solution.js) | [py](problems/dutch_national_flag/solution.py) | [ts](problems/dutch_national_flag/solution.ts) | [rs](problems/dutch_national_flag/solution.rs) |
| [merge intervals](problems/merge_intervals/README.md) | [js](problems/merge_intervals/solution.js) | [py](problems/merge_intervals/solution.py) | [ts](problems/merge_intervals/solution.ts) | [rs](problems/merge_intervals/solution.rs) |
| [sort nearly sorted](problems/sort_nearly_sorted/README.md) | — | [py](problems/sort_nearly_sorted/solution.py) | — | — |

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

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
