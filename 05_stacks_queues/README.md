# Stacks & Queues

**Stack** — LIFO (Last In, First Out). Push/pop from the same end. Think: browser back button, undo/redo, call stack, DFS. **Queue** — FIFO (First In, First Out). Enqueue at back, dequeue from front. Think: printer queue, BFS, task scheduling. Use `collections.deque` for O(1) at both ends; never `list.pop(0)` which is O(n).

## Complexity

| Operation        | Stack | Queue |
|------------------|-------|-------|
| Push/Enqueue     | O(1)  | O(1)  |
| Pop/Dequeue      | O(1)  | O(1)  |
| Peek             | O(1)  | O(1)  |
| Search           | O(n)  | O(n)  |

## Key Patterns

- **Monotonic Stack** — maintains elements in sorted order; used for next greater element, histogram, span problems
- **Two-stack Queue** — inbox/outbox for O(1) amortized dequeue
- **MinStack** — parallel stack tracking running minimum

## Problems Implemented

| Problem                  | Difficulty | LeetCode |
|--------------------------|------------|----------|
| Valid Parentheses        | Easy       | #20      |
| Backspace String Compare | Easy       | #844     |
| Evaluate RPN             | Medium     | #150     |
| Generate Parentheses     | Medium     | #22      |
| Decode String            | Medium     | #394     |
| Daily Temperatures       | Medium     | #739     |
| Next Greater Element I   | Medium     | #496     |
| Asteroid Collision       | Medium     | #735     |
| Remove K Digits          | Medium     | #402     |
| Sliding Window Maximum   | Hard       | #239     |
| Largest Rectangle Histogram | Hard   | #84      |
| Basic Calculator        | Hard       | #224     |

## Implementations

| Language   | File |
|------------|------|
| Python     | [stacks_queues.py](stacks_queues.py) |
| JavaScript | [stacks_queues.js](stacks_queues.js) |
| TypeScript | [stacks_queues.ts](stacks_queues.ts) |
| Rust       | [stacks_queues.rs](stacks_queues.rs) |
