# Data structures and AI/ML handbook

Practice DSA in JavaScript, Python, TypeScript, and Rust. Use JavaScript as your
reference language, then focus on Python. Add Python-first machine-learning
exercises and SQL practice alongside the DSA topics.

Start with the [JavaScript-to-Python study path](learning/study_path.md), then use
the [AI/ML learning path](learning/ai_ml_path.md) for math, data, models, and evaluation.

## Set up your environment

Install Node.js 22 or later for the practice runner. Install the runtime for each
language you want to use:

| Language | Environment | Test command |
|---|---|---|
| JavaScript | Node.js | `npm run practice -- 01_arrays/problems/two_sum js` |
| Python | Python 3.10 or later, available as `python3` | `npm run practice -- 01_arrays/problems/two_sum py` |
| TypeScript | Bun; install the pinned TypeScript compiler with `bun install` | `npm run practice -- 01_arrays/problems/two_sum ts` |
| Rust | Stable Rust and Cargo, installed with rustup | `npm run practice -- 01_arrays/problems/two_sum rs` |
| SQL | Python's standard-library SQLite 3.25 or later | `npm run practice -- 16_sql/problems/window_ranking sql` |

Python uses the standard library. Rust uses the workspace crates. You do not need
a test framework or separate project configuration for every problem.

## Practice a problem

1. Open the problem's `README.md` and read its task.
2. Read the test cases. Identify inputs, outputs, and edge cases.
3. Save the reference solution before you replace it. Keep its entry-point names
   and signatures, then write your answer in `solution.js`, `solution.py`,
   `solution.ts`, or `solution.rs`. Do not change the tests to fit your answer.
4. Run the command for that language. A failed assertion returns a nonzero exit
   status. Fix your solution and run again.
5. Explain the time and space costs. Repeat the problem in Python without looking
   at JavaScript. Compare the reference implementations after your attempt.

```bash
# Discover folders and their available languages.
npm run practice -- list

# Run one problem.
npm run practice -- 04_linked_lists/problems/reverse_list py

# Run all available problems in one topic.
npm run practice -- 01_arrays py

# Train and evaluate Python models; practice data queries.
npm run practice -- 15_machine_learning py
npm run practice -- 16_sql sql

# Run all available problems in one language.
npm run test:js
npm run test:py
npm run test:ts
npm run test:rs
npm run test:sql

# Check TypeScript types after bun install.
npm run typecheck

# Run DSA, machine-learning, and SQL suites in sequence.
npm test
```

TypeScript tests import `.ts` solutions, not the neighboring JavaScript files.
Rust tests live inside each `solution.rs`; Cargo compiles the topic crate and
filters its tests when you select one problem. Shared nodes and data structures
remain in the topic's fundamentals folders.

The original handbook does not implement every problem in every language.
Topic tables and problem pages show the actual coverage. An unavailable language
produces an error for a single-problem run; topic and full-language runs include
only available solutions. No placeholder implementations count as solutions.

The AI/ML exercises use Python only. SQL exercises execute `solution.sql` through
an in-memory SQLite database; their Python harness does not count as a Python solution.

## Folder layout

```text
01_arrays/
  README.md
  fundamentals/
    dynamic_array/
      README.md
      solution.js
      solution.py
      solution.ts
      tests.js
      tests.py
      tests.ts
  problems/
    two_sum/
      README.md
      solution.js
      solution.py
      solution.ts
      solution.rs       # Includes Rust tests
      tests.js
      tests.py
      tests.ts
  Cargo.toml
  lib.rs                # Includes the small Rust solution files
```

Keep one structure, algorithm, or problem per folder. Keep closely related helper
functions with their owner. Do not add another topic-sized implementation file.

## Topic order

| Topic | Start with |
|---|---|
| [01. Arrays](01_arrays/README.md) | Indexed access, scanning, two pointers, windows, and prefix sums |
| [02. Hash maps](02_hash_maps/README.md) | Lookups, frequencies, and trading memory for time |
| [03. Strings](03_strings/README.md) | Character processing and substring searches |
| [04. Linked lists](04_linked_lists/README.md) | Nodes, links, reversal, and fast/slow pointers |
| [05. Stacks and queues](05_stacks_queues/README.md) | Last-in/first-out and first-in/first-out processing |
| [06. Sorting](06_sorting/README.md) | Comparisons, partitioning, merging, and selection |
| [07. Trees](07_trees/README.md) | Recursion, traversal, and search-tree invariants |
| [08. Heaps](08_heaps/README.md) | Priority queues, top-k selection, and streaming values |
| [09. Tries](09_tries/README.md) | Prefix lookup and word search |
| [10. Graphs](10_graphs/README.md) | Representation, BFS, DFS, prerequisites, and shortest paths |
| [11. Bit manipulation](11_bit_manipulation/README.md) | Masks, XOR, and bit counting |
| [12. Dynamic programming](12_dynamic_programming/README.md) | States, transitions, and overlapping subproblems |
| [13. Backtracking](13_backtracking/README.md) | Make a choice, explore it, and undo it |
| [14. Greedy algorithms](14_greedy/README.md) | Choose a local step and justify why it works |
| [15. Machine learning](15_machine_learning/README.md) | Math, leakage-free preprocessing, training, evaluation, retrieval, and attention |
| [16. SQL](16_sql/README.md) | Joins, aggregation, ranking, and time-based data preparation |

## Additional material

- [JavaScript-to-Python study path](learning/study_path.md)
- [AI/ML learning path](learning/ai_ml_path.md)
- [Interview patterns](learning/interview_patterns.md)
- [Blind 75](learning/blind75.md) and [NeetCode 150](learning/neetcode150.md)
- [Python deep dive](learning/python_deep_dive.md)
- [TypeScript deep dive](learning/typescript_deep_dive.md)
- [Rust after the book](learning/rust_after_the_book.md)
- [Complexity reference](resources/complexity_cheatsheet.md)
- [Mock interviews](learning/mock_interviews.md), [behavioral preparation](learning/behavioral_interview.md), and [system design](learning/system_design.md)

## Generated files

Keep `target/`, `bin/`, compiled `.bin` files, and other compiler outputs out of
Git. The Rust build artifacts previously tracked under `target/` are removed from
the index. Keep source files, manifests, and the Bun lockfile.

Keep credentials, browser state, private notes, raw data, database dumps, model
artifacts, and experiment logs out of Git. Use `.private/`, `data/raw/`, and
`data/private/` for local material. Publish only synthetic or licensed examples.
Ignore rules do not erase previously committed files or history.
