# Backtracking

Start with fundamentals. Choose a problem and use its private start/attempt
commands. Read JavaScript to learn the algorithm, then write Python from your
explanation. Keep public references unchanged. Add TypeScript and Rust later.

Verify all available reference exercises for this topic with:

```bash
npm run practice -- 13_backtracking py
```

## Fundamentals

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|

## Problems

| Exercise | JavaScript | Python | TypeScript | Rust |
|---|---|---|---|---|
| [subsets](problems/subsets/README.md) | [js](problems/subsets/solution.js) | [py](problems/subsets/solution.py) | [ts](problems/subsets/solution.ts) | [rs](problems/subsets/solution.rs) |
| [subsets with dup](problems/subsets_with_dup/README.md) | [js](problems/subsets_with_dup/solution.js) | [py](problems/subsets_with_dup/solution.py) | [ts](problems/subsets_with_dup/solution.ts) | [rs](problems/subsets_with_dup/solution.rs) |
| [combination sum](problems/combination_sum/README.md) | [js](problems/combination_sum/solution.js) | [py](problems/combination_sum/solution.py) | [ts](problems/combination_sum/solution.ts) | [rs](problems/combination_sum/solution.rs) |
| [permutations](problems/permutations/README.md) | [js](problems/permutations/solution.js) | [py](problems/permutations/solution.py) | [ts](problems/permutations/solution.ts) | [rs](problems/permutations/solution.rs) |
| [n queens](problems/n_queens/README.md) | [js](problems/n_queens/solution.js) | [py](problems/n_queens/solution.py) | [ts](problems/n_queens/solution.ts) | [rs](problems/n_queens/solution.rs) |
| [word search](problems/word_search/README.md) | [js](problems/word_search/solution.js) | [py](problems/word_search/solution.py) | [ts](problems/word_search/solution.ts) | — |
| [letter combinations](problems/letter_combinations/README.md) | [js](problems/letter_combinations/solution.js) | [py](problems/letter_combinations/solution.py) | [ts](problems/letter_combinations/solution.ts) | [rs](problems/letter_combinations/solution.rs) |
| [palindrome partitioning](problems/palindrome_partitioning/README.md) | [js](problems/palindrome_partitioning/solution.js) | [py](problems/palindrome_partitioning/solution.py) | [ts](problems/palindrome_partitioning/solution.ts) | — |
| [restore ip addresses](problems/restore_ip_addresses/README.md) | [js](problems/restore_ip_addresses/solution.js) | [py](problems/restore_ip_addresses/solution.py) | [ts](problems/restore_ip_addresses/solution.ts) | [rs](problems/restore_ip_addresses/solution.rs) |
| [combinations](problems/combinations/README.md) | — | [py](problems/combinations/solution.py) | — | — |
| [combination sum ii](problems/combination_sum_ii/README.md) | — | [py](problems/combination_sum_ii/solution.py) | — | — |
| [permutations ii](problems/permutations_ii/README.md) | — | [py](problems/permutations_ii/solution.py) | — | — |
| [n queens count](problems/n_queens_count/README.md) | — | [py](problems/n_queens_count/solution.py) | — | — |
| [solve sudoku](problems/solve_sudoku/README.md) | — | [py](problems/solve_sudoku/solution.py) | — | — |
| [expression add operators](problems/expression_add_operators/README.md) | — | [py](problems/expression_add_operators/solution.py) | — | — |
| [remove invalid parentheses](problems/remove_invalid_parentheses/README.md) | — | [py](problems/remove_invalid_parentheses/solution.py) | — | — |

## Complexity

| Pattern | Time | Space |
|---------|------|-------|
| Subsets | O(2^n) | O(n) |
| Combinations C(n,k) | O(C(n,k)) | O(k) |
| Permutations | O(n!) | O(n) |
| N-Queens | O(n!) | O(n²) |

A dash means the original handbook has no solution in that language. Each listed
solution has a test file, or Rust tests inside the solution. Do not treat coverage
as a claim that every language uses the same API.

[Study path](../learning/study_path.md) · [AI/ML path](../learning/ai_ml_path.md)
