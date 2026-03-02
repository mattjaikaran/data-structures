# Backtracking

Backtracking = DFS + undo. Template: choose → explore → unchoose. Prune early to avoid dead branches. Use when: finding all solutions, constraint satisfaction (Sudoku, N-Queens), combinations/permutations/subsets, path finding with constraints.

## Complexity

| Pattern | Time | Space |
|---------|------|-------|
| Subsets | O(2^n) | O(n) |
| Combinations C(n,k) | O(C(n,k)) | O(k) |
| Permutations | O(n!) | O(n) |
| N-Queens | O(n!) | O(n²) |

## Key Patterns

- **Subsets/Combinations** — `start` index to avoid duplicates; `path.append` / `bt` / `path.pop`
- **Permutations** — `used` array; skip when `used[i]` or duplicate with `nums[i]==nums[i-1]`
- **Constraint Problems** — track cols, diag1, diag2 for N-Queens; row/col/box for Sudoku
- **Pruning** — sort + skip `nums[i]==nums[i-1]`; break when `candidates[i] > remaining`

## Problems Implemented

| Problem | Difficulty | LeetCode |
|---------|-----------|----------|
| Subsets I/II | Medium | #78, #90 |
| Combinations | Medium | #77 |
| Combination Sum I/II | Medium | #39, #40 |
| Permutations I/II | Medium | #46, #47 |
| N-Queens I/II | Hard | #51, #52 |
| Sudoku Solver | Hard | #37 |
| Word Search | Medium | #79 |
| Letter Combinations of Phone Number | Medium | #17 |
| Palindrome Partitioning | Medium | #131 |
| Restore IP Addresses | Medium | #93 |
| Expression Add Operators | Hard | #282 |
| Remove Invalid Parentheses | Hard | #301 |

## Implementations

| Language | File |
|----------|------|
| Python | [backtracking.py](backtracking.py) |
| JavaScript | [backtracking.js](backtracking.js) |
| TypeScript | [backtracking.ts](backtracking.ts) |
| Rust | [backtracking.rs](backtracking.rs) |
