# Arrays

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 01_arrays py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [dynamic array](fundamentals/dynamic_array/README.md) | [js](fundamentals/dynamic_array/solution.js) | [py](fundamentals/dynamic_array/solution.py) | [ts](fundamentals/dynamic_array/solution.ts) | — |
| [binary search](fundamentals/binary_search/README.md) | [js](fundamentals/binary_search/solution.js) | [py](fundamentals/binary_search/solution.py) | [ts](fundamentals/binary_search/solution.ts) | [rs](fundamentals/binary_search/solution.rs) |
| [prefix sum](fundamentals/prefix_sum/README.md) | [js](fundamentals/prefix_sum/solution.js) | [py](fundamentals/prefix_sum/solution.py) | [ts](fundamentals/prefix_sum/solution.ts) | [rs](fundamentals/prefix_sum/solution.rs) |
| [sliding window max sum](fundamentals/sliding_window_max_sum/README.md) | [js](fundamentals/sliding_window_max_sum/solution.js) | [py](fundamentals/sliding_window_max_sum/solution.py) | [ts](fundamentals/sliding_window_max_sum/solution.ts) | [rs](fundamentals/sliding_window_max_sum/solution.rs) |
| [rotate right](fundamentals/rotate_right/README.md) | [js](fundamentals/rotate_right/solution.js) | [py](fundamentals/rotate_right/solution.py) | [ts](fundamentals/rotate_right/solution.ts) | [rs](fundamentals/rotate_right/solution.rs) |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [max subarray](problems/max_subarray/README.md) | [js](problems/max_subarray/solution.js) | [py](problems/max_subarray/solution.py) | [ts](problems/max_subarray/solution.ts) | [rs](problems/max_subarray/solution.rs) |
| [two sum](problems/two_sum/README.md) | [js](problems/two_sum/solution.js) | [py](problems/two_sum/solution.py) | [ts](problems/two_sum/solution.ts) | [rs](problems/two_sum/solution.rs) |
| [best time buy sell](problems/best_time_buy_sell/README.md) | [js](problems/best_time_buy_sell/solution.js) | [py](problems/best_time_buy_sell/solution.py) | [ts](problems/best_time_buy_sell/solution.ts) | [rs](problems/best_time_buy_sell/solution.rs) |
| [contains duplicate](problems/contains_duplicate/README.md) | [js](problems/contains_duplicate/solution.js) | [py](problems/contains_duplicate/solution.py) | [ts](problems/contains_duplicate/solution.ts) | [rs](problems/contains_duplicate/solution.rs) |
| [move zeroes](problems/move_zeroes/README.md) | [js](problems/move_zeroes/solution.js) | [py](problems/move_zeroes/solution.py) | [ts](problems/move_zeroes/solution.ts) | [rs](problems/move_zeroes/solution.rs) |
| [product except self](problems/product_except_self/README.md) | [js](problems/product_except_self/solution.js) | [py](problems/product_except_self/solution.py) | [ts](problems/product_except_self/solution.ts) | [rs](problems/product_except_self/solution.rs) |
| [three sum](problems/three_sum/README.md) | [js](problems/three_sum/solution.js) | [py](problems/three_sum/solution.py) | [ts](problems/three_sum/solution.ts) | — |
| [max product subarray](problems/max_product_subarray/README.md) | [js](problems/max_product_subarray/solution.js) | [py](problems/max_product_subarray/solution.py) | [ts](problems/max_product_subarray/solution.ts) | [rs](problems/max_product_subarray/solution.rs) |
| [subarray sum k](problems/subarray_sum_k/README.md) | [js](problems/subarray_sum_k/solution.js) | [py](problems/subarray_sum_k/solution.py) | [ts](problems/subarray_sum_k/solution.ts) | [rs](problems/subarray_sum_k/solution.rs) |
| [container most water](problems/container_most_water/README.md) | [js](problems/container_most_water/solution.js) | [py](problems/container_most_water/solution.py) | [ts](problems/container_most_water/solution.ts) | [rs](problems/container_most_water/solution.rs) |
| [search rotated](problems/search_rotated/README.md) | [js](problems/search_rotated/solution.js) | [py](problems/search_rotated/solution.py) | [ts](problems/search_rotated/solution.ts) | [rs](problems/search_rotated/solution.rs) |
| [trap rain water](problems/trap_rain_water/README.md) | [js](problems/trap_rain_water/solution.js) | [py](problems/trap_rain_water/solution.py) | [ts](problems/trap_rain_water/solution.ts) | [rs](problems/trap_rain_water/solution.rs) |
| [largest rectangle histogram](problems/largest_rectangle_histogram/README.md) | [js](problems/largest_rectangle_histogram/solution.js) | [py](problems/largest_rectangle_histogram/solution.py) | [ts](problems/largest_rectangle_histogram/solution.ts) | [rs](problems/largest_rectangle_histogram/solution.rs) |
| [search range](problems/search_range/README.md) | [js](problems/search_range/solution.js) | [py](problems/search_range/solution.py) | [ts](problems/search_range/solution.ts) | [rs](problems/search_range/solution.rs) |

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

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
