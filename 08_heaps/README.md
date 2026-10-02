# Heaps

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 08_heaps py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [min heap](fundamentals/min_heap/README.md) | [js](fundamentals/min_heap/solution.js) | [py](fundamentals/min_heap/solution.py) | [ts](fundamentals/min_heap/solution.ts) | [rs](fundamentals/min_heap/solution.rs) |
| [max heap](fundamentals/max_heap/README.md) | [js](fundamentals/max_heap/solution.js) | [py](fundamentals/max_heap/solution.py) | [ts](fundamentals/max_heap/solution.ts) | — |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [kth largest](problems/kth_largest/README.md) | [js](problems/kth_largest/solution.js) | [py](problems/kth_largest/solution.py) | [ts](problems/kth_largest/solution.ts) | [rs](problems/kth_largest/solution.rs) |
| [top k frequent](problems/top_k_frequent/README.md) | [js](problems/top_k_frequent/solution.js) | [py](problems/top_k_frequent/solution.py) | [ts](problems/top_k_frequent/solution.ts) | [rs](problems/top_k_frequent/solution.rs) |
| [merge k sorted](problems/merge_k_sorted/README.md) | [js](problems/merge_k_sorted/solution.js) | [py](problems/merge_k_sorted/solution.py) | [ts](problems/merge_k_sorted/solution.ts) | [rs](problems/merge_k_sorted/solution.rs) |
| [median finder](problems/median_finder/README.md) | [js](problems/median_finder/solution.js) | [py](problems/median_finder/solution.py) | [ts](problems/median_finder/solution.ts) | [rs](problems/median_finder/solution.rs) |
| [task scheduler](problems/task_scheduler/README.md) | [js](problems/task_scheduler/solution.js) | [py](problems/task_scheduler/solution.py) | [ts](problems/task_scheduler/solution.ts) | [rs](problems/task_scheduler/solution.rs) |
| [k closest points](problems/k_closest_points/README.md) | [js](problems/k_closest_points/solution.js) | [py](problems/k_closest_points/solution.py) | [ts](problems/k_closest_points/solution.ts) | [rs](problems/k_closest_points/solution.rs) |
| [reorganize string](problems/reorganize_string/README.md) | [js](problems/reorganize_string/solution.js) | [py](problems/reorganize_string/solution.py) | [ts](problems/reorganize_string/solution.ts) | — |
| [find kth largest stream](problems/find_kth_largest_stream/README.md) | — | [py](problems/find_kth_largest_stream/solution.py) | — | — |
| [ugly number](problems/ugly_number/README.md) | — | [py](problems/ugly_number/solution.py) | — | — |

## Complexity

| Operation | Average | Worst |
|-----------|---------|-------|
| Push | O(log n) | O(log n) |
| Pop | O(log n) | O(log n) |
| Peek min | O(1) | O(1) |
| Build from list | O(n) | O(n) |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
