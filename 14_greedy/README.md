# Greedy

Greedy: make the locally optimal choice at each step. Provably correct when greedy choice property + optimal substructure hold. vs DP: DP tries all choices; greedy commits to one. Proof technique: exchange argument — show swapping for greedy choice doesn't worsen the result.

## Complexity

| Pattern | Time | Space |
|---------|------|-------|
| Interval sort + scan | O(n log n) | O(1) |
| Heap-based scheduling | O(n log n) | O(n) |
| Two-pointer | O(n log n) | O(1) |

## Key Patterns

- **Intervals** — sort by end time; keep earliest-ending (most room for future)
- **Meeting Rooms II** — min-heap of end times; assign to room that frees first
- **Gas Station** — if total gas ≥ total cost, solution exists; start after last deficit
- **Two-Pointer** — boats to save people: pair lightest + heaviest
- **Custom Sort** — largest number: `a+b > b+a` ⇒ a before b

## Problems Implemented

| Problem | Difficulty | LeetCode |
|---------|-----------|----------|
| Meeting Rooms I/II | Medium | #252, #253 |
| Non-overlapping Intervals | Medium | #435 |
| Minimum Arrows to Burst Balloons | Medium | #452 |
| Insert Interval | Medium | #57 |
| Partition Labels | Medium | #763 |
| Gas Station | Medium | #134 |
| Candy | Hard | #135 |
| Largest Number | Medium | #179 |
| Assign Cookies | Easy | #455 |
| Lemonade Change | Easy | #860 |
| Broken Calculator | Medium | #991 |
| Minimum Cost to Connect Sticks | Medium | #1167 |
| IPO | Hard | #502 |
| Rearrange String k Distance Apart | Hard | — |
| Boats to Save People | Medium | #881 |
| Two City Scheduling | Medium | #1029 |
| Wiggle Subsequence | Medium | #376 |

## Implementations

| Language | File |
|----------|------|
| Python | [greedy.py](greedy.py) |
| JavaScript | [greedy.js](greedy.js) |
| TypeScript | [greedy.ts](greedy.ts) |
| Rust | [greedy.rs](greedy.rs) |
