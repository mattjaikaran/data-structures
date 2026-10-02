# Greedy

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 14_greedy py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [meeting rooms](problems/meeting_rooms/README.md) | [js](problems/meeting_rooms/solution.js) | [py](problems/meeting_rooms/solution.py) | [ts](problems/meeting_rooms/solution.ts) | [rs](problems/meeting_rooms/solution.rs) |
| [meeting rooms ii](problems/meeting_rooms_ii/README.md) | [js](problems/meeting_rooms_ii/solution.js) | [py](problems/meeting_rooms_ii/solution.py) | [ts](problems/meeting_rooms_ii/solution.ts) | [rs](problems/meeting_rooms_ii/solution.rs) |
| [erase overlap intervals](problems/erase_overlap_intervals/README.md) | [js](problems/erase_overlap_intervals/solution.js) | [py](problems/erase_overlap_intervals/solution.py) | [ts](problems/erase_overlap_intervals/solution.ts) | [rs](problems/erase_overlap_intervals/solution.rs) |
| [min arrows burst balloons](problems/min_arrows_burst_balloons/README.md) | [js](problems/min_arrows_burst_balloons/solution.js) | [py](problems/min_arrows_burst_balloons/solution.py) | [ts](problems/min_arrows_burst_balloons/solution.ts) | [rs](problems/min_arrows_burst_balloons/solution.rs) |
| [insert interval](problems/insert_interval/README.md) | [js](problems/insert_interval/solution.js) | [py](problems/insert_interval/solution.py) | [ts](problems/insert_interval/solution.ts) | — |
| [partition labels](problems/partition_labels/README.md) | [js](problems/partition_labels/solution.js) | [py](problems/partition_labels/solution.py) | [ts](problems/partition_labels/solution.ts) | [rs](problems/partition_labels/solution.rs) |
| [can complete circuit](problems/can_complete_circuit/README.md) | [js](problems/can_complete_circuit/solution.js) | [py](problems/can_complete_circuit/solution.py) | [ts](problems/can_complete_circuit/solution.ts) | [rs](problems/can_complete_circuit/solution.rs) |
| [candy](problems/candy/README.md) | [js](problems/candy/solution.js) | [py](problems/candy/solution.py) | [ts](problems/candy/solution.ts) | [rs](problems/candy/solution.rs) |
| [largest number](problems/largest_number/README.md) | [js](problems/largest_number/solution.js) | [py](problems/largest_number/solution.py) | [ts](problems/largest_number/solution.ts) | — |
| [assign cookies](problems/assign_cookies/README.md) | [js](problems/assign_cookies/solution.js) | [py](problems/assign_cookies/solution.py) | [ts](problems/assign_cookies/solution.ts) | [rs](problems/assign_cookies/solution.rs) |
| [boats to save people](problems/boats_to_save_people/README.md) | [js](problems/boats_to_save_people/solution.js) | [py](problems/boats_to_save_people/solution.py) | [ts](problems/boats_to_save_people/solution.ts) | [rs](problems/boats_to_save_people/solution.rs) |
| [two city scheduling](problems/two_city_scheduling/README.md) | [js](problems/two_city_scheduling/solution.js) | [py](problems/two_city_scheduling/solution.py) | [ts](problems/two_city_scheduling/solution.ts) | — |
| [find min cost connect sticks](problems/find_min_cost_connect_sticks/README.md) | [js](problems/find_min_cost_connect_sticks/solution.js) | [py](problems/find_min_cost_connect_sticks/solution.py) | [ts](problems/find_min_cost_connect_sticks/solution.ts) | [rs](problems/find_min_cost_connect_sticks/solution.rs) |
| [lemonade change](problems/lemonade_change/README.md) | — | [py](problems/lemonade_change/solution.py) | — | — |
| [broken calculator](problems/broken_calculator/README.md) | — | [py](problems/broken_calculator/solution.py) | — | — |
| [ipo](problems/ipo/README.md) | — | [py](problems/ipo/solution.py) | — | — |
| [rearrange string k apart](problems/rearrange_string_k_apart/README.md) | — | [py](problems/rearrange_string_k_apart/solution.py) | — | — |
| [wiggle subsequence](problems/wiggle_subsequence/README.md) | — | [py](problems/wiggle_subsequence/solution.py) | — | — |

## Complexity

| Pattern | Time | Space |
|---------|------|-------|
| Interval sort + scan | O(n log n) | O(1) |
| Heap-based scheduling | O(n log n) | O(n) |
| Two-pointer | O(n log n) | O(1) |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
