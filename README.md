# 📚 Data Structures & Algorithms Handbook

Complete interview prep and learning reference. Implementations in **Python**, **TypeScript**, and **Rust** — organized in a deliberate learning progression from foundations to hardest topics.

---

## Study Order

Folders are numbered. Start at `01_` and work forward. Each topic builds on what came before.

| # | Module | Why This Order | Difficulty |
|---|--------|---------------|-----------|
| 01 | `arrays` | Everything else builds on array thinking. Two pointers, sliding window, binary search. | 🟢 Foundation |
| 02 | `hash_maps` | The most common optimization tool. O(1) lookup unlocks dozens of problems. | 🟢 Foundation |
| 03 | `strings` | Arrays of characters. KMP, Z-algorithm, sliding window on strings. | 🟢–🟡 |
| 04 | `linked_lists` | Pointer manipulation. Fast/slow pointers, reversal, LRU cache. | 🟡 |
| 05 | `stacks_queues` | Essential for DFS/BFS. Monotonic stack is underrated. | 🟡 |
| 06 | `sorting` | Know the algorithms, not just `sort()`. Quickselect, merge sort internals. | 🟡 |
| 07 | `trees` | DFS bottom-up/top-down. Most tree problems use 2–3 recursive patterns. | 🟡 |
| 08 | `heaps` | Top-K problems, streaming median, task scheduling. | 🟡 |
| 09 | `tries` | Prefix trees. Word search, autocomplete, XOR tricks. | 🟡 |
| 10 | `graphs` | BFS/DFS, Dijkstra, Union-Find, topological sort. | 🟡–🔴 |
| 11 | `bit_manipulation` | XOR tricks, masks, bit counting. Fast and elegant when it applies. | 🟡 |
| 12 | `dynamic_programming` | The hardest category. 1D/2D DP, knapsack, string DP, interval DP. Save for last. | 🔴 |
| 13 | `backtracking` | Subsets, permutations, N-Queens, Sudoku. Needs recursion comfort. | 🔴 |
| 14 | `greedy` | Locally optimal choices. Intervals, scheduling, heaps. | 🟡–🔴 |

---

## Running Tests

```bash
# Python — run any module
python 01_arrays/arrays.py
python 12_dynamic_programming/dynamic_programming.py

# Run all Python modules in order
for i in 01 02 03 04 05 06 07 08 09 10 11 12 13 14; do
  dir=$(ls -d ${i}_* 2>/dev/null)
  file=$(ls $dir/*.py 2>/dev/null | head -1)
  [ -n "$file" ] && python $file
done

# TypeScript — run any module
npx ts-node --skip-project 01_arrays/arrays.ts
npx ts-node --skip-project 12_dynamic_programming/dynamic_programming.ts

# Rust — all modules via workspace
cargo test
```

---

## Learning Guides (`learning/`)

| File | What It Covers |
|------|---------------|
| `blind75.md` | All 75 problems with pattern + key insight per problem |
| `neetcode150.md` | Extended 150 — gaps Blind 75 misses |
| `interview_patterns.md` | 14 core patterns with code templates + complexity table |
| `system_design.md` | Full framework + 8 classic design problems |
| `by_company.md` | Meta, Google, Amazon, Apple, Microsoft + others |
| `behavioral_interview.md` | STAR, all 16 Amazon LPs, question bank, story templates |
| `mock_interviews.md` | 14 timed sessions including full loop simulations |
| `python_deep_dive.md` | Generators, decorators, async, type system, performance |
| `typescript_deep_dive.md` | Event loop, closures, type system, patterns |
| `rust_after_the_book.md` | Lifetimes, smart pointers, async, audio plugins |

---

## Practice App (`practice-app/`)

`dsa-practice-app.jsx` — React app with 28 problems, AI solution checker, hints, progress tracking.
Paste into a Claude.ai artifact to run.

---

## Project Stats

- **14 modules** × **3 languages** = 42 implementation files
- **~200 problems** implemented with passing test suites
- **10 learning docs** covering algorithms, system design, behavioral, and language deep dives
- **14/14 Python** ✅ and **14/14 TypeScript** ✅ test suites passing

---

## Suggested Weekly Plan

**Week 1–2:** `01_arrays` → `02_hash_maps` → `03_strings` → `04_linked_lists`
Read `interview_patterns.md` as you go.

**Week 3–4:** `05_stacks_queues` → `06_sorting` → `07_trees`
Start working through `blind75.md`.

**Week 5:** `08_heaps` → `09_tries` → `10_graphs`

**Week 6:** `11_bit_manipulation` → `12_dynamic_programming`
DP deserves a full dedicated week. Don't rush it.

**Week 7:** `13_backtracking` → `14_greedy`

**Week 8:** System design + behavioral.
Read `system_design.md`, `by_company.md`, `behavioral_interview.md`.
Run the mock interview sessions in `mock_interviews.md`.
