# Linked lists

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 04_linked_lists py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [singly linked list](fundamentals/singly_linked_list/README.md) | [js](fundamentals/singly_linked_list/solution.js) | [py](fundamentals/singly_linked_list/solution.py) | [ts](fundamentals/singly_linked_list/solution.ts) | [rs](fundamentals/singly_linked_list/solution.rs) |
| [doubly linked list](fundamentals/doubly_linked_list/README.md) | [js](fundamentals/doubly_linked_list/solution.js) | [py](fundamentals/doubly_linked_list/solution.py) | [ts](fundamentals/doubly_linked_list/solution.ts) | — |

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [lru cache](problems/lru_cache/README.md) | [js](problems/lru_cache/solution.js) | [py](problems/lru_cache/solution.py) | [ts](problems/lru_cache/solution.ts) | — |
| [reverse list](problems/reverse_list/README.md) | [js](problems/reverse_list/solution.js) | [py](problems/reverse_list/solution.py) | [ts](problems/reverse_list/solution.ts) | [rs](problems/reverse_list/solution.rs) |
| [has cycle](problems/has_cycle/README.md) | [js](problems/has_cycle/solution.js) | [py](problems/has_cycle/solution.py) | [ts](problems/has_cycle/solution.ts) | — |
| [find middle](problems/find_middle/README.md) | [js](problems/find_middle/solution.js) | [py](problems/find_middle/solution.py) | [ts](problems/find_middle/solution.ts) | [rs](problems/find_middle/solution.rs) |
| [merge sorted](problems/merge_sorted/README.md) | [js](problems/merge_sorted/solution.js) | [py](problems/merge_sorted/solution.py) | [ts](problems/merge_sorted/solution.ts) | [rs](problems/merge_sorted/solution.rs) |
| [remove duplicates](problems/remove_duplicates/README.md) | [js](problems/remove_duplicates/solution.js) | [py](problems/remove_duplicates/solution.py) | [ts](problems/remove_duplicates/solution.ts) | [rs](problems/remove_duplicates/solution.rs) |
| [remove nth from end](problems/remove_nth_from_end/README.md) | [js](problems/remove_nth_from_end/solution.js) | [py](problems/remove_nth_from_end/solution.py) | [ts](problems/remove_nth_from_end/solution.ts) | [rs](problems/remove_nth_from_end/solution.rs) |
| [reorder list](problems/reorder_list/README.md) | [js](problems/reorder_list/solution.js) | [py](problems/reorder_list/solution.py) | [ts](problems/reorder_list/solution.ts) | — |
| [add two numbers](problems/add_two_numbers/README.md) | [js](problems/add_two_numbers/solution.js) | [py](problems/add_two_numbers/solution.py) | [ts](problems/add_two_numbers/solution.ts) | [rs](problems/add_two_numbers/solution.rs) |
| [swap pairs](problems/swap_pairs/README.md) | [js](problems/swap_pairs/solution.js) | [py](problems/swap_pairs/solution.py) | [ts](problems/swap_pairs/solution.ts) | — |
| [sort list](problems/sort_list/README.md) | [js](problems/sort_list/solution.js) | [py](problems/sort_list/solution.py) | [ts](problems/sort_list/solution.ts) | [rs](problems/sort_list/solution.rs) |
| [find duplicate](problems/find_duplicate/README.md) | [js](problems/find_duplicate/solution.js) | [py](problems/find_duplicate/solution.py) | [ts](problems/find_duplicate/solution.ts) | [rs](problems/find_duplicate/solution.rs) |
| [reverse k group](problems/reverse_k_group/README.md) | [js](problems/reverse_k_group/solution.js) | [py](problems/reverse_k_group/solution.py) | [ts](problems/reverse_k_group/solution.ts) | [rs](problems/reverse_k_group/solution.rs) |
| [merge k lists](problems/merge_k_lists/README.md) | [js](problems/merge_k_lists/solution.js) | [py](problems/merge_k_lists/solution.py) | [ts](problems/merge_k_lists/solution.ts) | [rs](problems/merge_k_lists/solution.rs) |
| [detect cycle node](problems/detect_cycle_node/README.md) | [js](problems/detect_cycle_node/solution.js) | [py](problems/detect_cycle_node/solution.py) | [ts](problems/detect_cycle_node/solution.ts) | — |
| [reverse between](problems/reverse_between/README.md) | [js](problems/reverse_between/solution.js) | [py](problems/reverse_between/solution.py) | [ts](problems/reverse_between/solution.ts) | [rs](problems/reverse_between/solution.rs) |

## Complexity

| Operation                 | Singly | Doubly |
|---------------------------|--------|--------|
| Access by index           | O(n)   | O(n)   |
| Search                    | O(n)   | O(n)   |
| Insert at head            | O(1)   | O(1)   |
| Insert at tail (w/ ptr)   | O(1)   | O(1)   |
| Insert at middle          | O(n)   | O(n)   |
| Delete at head            | O(1)   | O(1)   |
| Delete given node ref     | O(n)*  | O(1)   |

*Singly needs to find predecessor — O(n) traversal

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
