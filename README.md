# Data Structures & Algorithms Handbook

Complete interview prep and learning reference. Implementations in **Python**, **JavaScript**, **TypeScript**, and **Rust** — organized in a deliberate learning progression from foundations to hardest topics.

## Languages

| Language | Files | Run |
|----------|-------|-----|
| Python | `*.py` | `python 01_arrays/arrays.py` |
| JavaScript | `*.js` | `node 01_arrays/arrays.js` |
| TypeScript | `*.ts` | `bun 01_arrays/arrays.ts` |
| Rust | `*.rs` | `cargo test` |

---

## Study Order

Folders are numbered. Start at `01_` and work forward. Each topic builds on what came before.

| # | Module | Why This Order | Difficulty |
|---|--------|---------------|-----------|
| 01 | [`arrays`](01_arrays/) | Everything else builds on array thinking. Two pointers, sliding window, binary search. | Foundation |
| 02 | [`hash_maps`](02_hash_maps/) | The most common optimization tool. O(1) lookup unlocks dozens of problems. | Foundation |
| 03 | [`strings`](03_strings/) | Arrays of characters. KMP, Z-algorithm, sliding window on strings. | Foundation–Medium |
| 04 | [`linked_lists`](04_linked_lists/) | Pointer manipulation. Fast/slow pointers, reversal, LRU cache. | Medium |
| 05 | [`stacks_queues`](05_stacks_queues/) | Essential for DFS/BFS. Monotonic stack is underrated. | Medium |
| 06 | [`sorting`](06_sorting/) | Know the algorithms, not just `sort()`. Quickselect, merge sort internals. | Medium |
| 07 | [`trees`](07_trees/) | DFS bottom-up/top-down. Most tree problems use 2–3 recursive patterns. | Medium |
| 08 | [`heaps`](08_heaps/) | Top-K problems, streaming median, task scheduling. | Medium |
| 09 | [`tries`](09_tries/) | Prefix trees. Word search, autocomplete, XOR tricks. | Medium |
| 10 | [`graphs`](10_graphs/) | BFS/DFS, Dijkstra, Union-Find, topological sort. | Medium–Hard |
| 11 | [`bit_manipulation`](11_bit_manipulation/) | XOR tricks, masks, bit counting. Fast and elegant when it applies. | Medium |
| 12 | [`dynamic_programming`](12_dynamic_programming/) | The hardest category. 1D/2D DP, knapsack, string DP, interval DP. | Hard |
| 13 | [`backtracking`](13_backtracking/) | Subsets, permutations, N-Queens, Sudoku. Needs recursion comfort. | Hard |
| 14 | [`greedy`](14_greedy/) | Locally optimal choices. Intervals, scheduling, heaps. | Medium–Hard |

---

## Running Tests

```bash
# Python — single module
python 01_arrays/arrays.py

# Python — all modules
for i in 01 02 03 04 05 06 07 08 09 10 11 12 13 14; do
  dir=$(ls -d ${i}_* 2>/dev/null)
  [ -n "$dir" ] && python "$dir"/*.py
done

# JavaScript — single module
node 01_arrays/arrays.js

# JavaScript — all modules
for dir in 01_* 02_* 03_* 04_* 05_* 06_* 07_* 08_* 09_* 10_* 11_* 12_* 13_* 14_*; do
  node "$dir"/*.js
done

# TypeScript — single module (via bun)
bun 01_arrays/arrays.ts

# TypeScript — all modules
for dir in 01_* 02_* 03_* 04_* 05_* 06_* 07_* 08_* 09_* 10_* 11_* 12_* 13_* 14_*; do
  bun "$dir"/*.ts
done

# Rust — all modules via workspace
cargo test
```

---

## Project Structure

```
├── 01_arrays/           # Each module contains:
│   ├── README.md        #   Overview, complexity, problem list
│   ├── arrays.py        #   Python implementation
│   ├── arrays.js        #   JavaScript implementation
│   ├── arrays.ts        #   TypeScript implementation
│   ├── arrays.rs        #   Rust implementation
│   └── Cargo.toml       #   Rust crate config
├── 02_hash_maps/
├── ...
├── 14_greedy/
├── learning/            # Study guides and interview prep
├── practice-app/        # React practice app (28 problems)
├── resources/           # Complexity cheatsheet
├── Cargo.toml           # Rust workspace root
├── package.json         # JS/TS project config
└── tsconfig.json        # TypeScript config
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

- **14 modules** x **4 languages** = 56 implementation files
- **~200 problems** implemented with passing test suites
- **10 learning docs** covering algorithms, system design, behavioral, and language deep dives
- **14/14 Python**, **14/14 JavaScript**, **14/14 TypeScript** test suites passing

---

## Suggested Weekly Plan

**Week 1–2:** `01_arrays` -> `02_hash_maps` -> `03_strings` -> `04_linked_lists`
Read `interview_patterns.md` as you go.

**Week 3–4:** `05_stacks_queues` -> `06_sorting` -> `07_trees`
Start working through `blind75.md`.

**Week 5:** `08_heaps` -> `09_tries` -> `10_graphs`

**Week 6:** `11_bit_manipulation` -> `12_dynamic_programming`
DP deserves a full dedicated week. Don't rush it.

**Week 7:** `13_backtracking` -> `14_greedy`

**Week 8:** System design + behavioral.
Read `system_design.md`, `by_company.md`, `behavioral_interview.md`.
Run the mock interview sessions in `mock_interviews.md`.
