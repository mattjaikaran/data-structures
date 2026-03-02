# Linked Lists

A chain of nodes where each node holds a value and a pointer to the next. Unlike arrays, nodes are not contiguous in memory. Variants: singly (next only), doubly (prev + next), circular. Use when you need O(1) insert/delete at head, or when you already hold a node reference for removal.

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

## Key Patterns

- **Fast & Slow Pointers (Floyd's)** — cycle detection, middle node
- **Dummy Head Node** — eliminates edge cases on empty/single
- **In-place Reversal** — three-pointer technique
- **Two-pass Tricks** — find nth from end
- **Merge Technique** — merge sorted lists

## Problems Implemented

| Problem                  | Difficulty | LeetCode |
|--------------------------|------------|----------|
| Reverse Linked List      | Easy       | #206     |
| Merge Two Sorted Lists   | Easy       | #21      |
| Linked List Cycle        | Easy       | #141     |
| Middle of Linked List    | Easy       | #876     |
| Remove Duplicates Sorted | Easy       | #83      |
| Remove Nth From End      | Medium     | #19      |
| Reorder List             | Medium     | #143     |
| Add Two Numbers          | Medium     | #2       |
| Swap Nodes in Pairs      | Medium     | #24      |
| Find Duplicate Number    | Medium     | #287     |
| Sort List                | Medium     | #148     |
| Reverse Nodes K-Group    | Hard       | #25      |
| Merge K Sorted Lists     | Hard       | #23      |
| Linked List Cycle II     | Hard       | #142     |

## Implementations

| Language   | File |
|------------|------|
| Python     | [linked_lists.py](linked_lists.py) |
| JavaScript | [linked_lists.js](linked_lists.js) |
| TypeScript | [linked_lists.ts](linked_lists.ts) |
| Rust       | [linked_lists.rs](linked_lists.rs) |
