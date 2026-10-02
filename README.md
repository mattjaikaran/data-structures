# Data structures and AI/ML handbook

Practice DSA in JavaScript, Python, TypeScript, and Rust. Use JavaScript as your
reference language, then focus on Python. Add Python-first machine-learning
exercises and SQL practice alongside the DSA topics.

Start with the [JavaScript-to-Python study path](learning/study_path.md), then use
the [AI/ML learning path](learning/ai_ml_path.md) for math, data, models, and evaluation.

## Set up your environment

Use Node.js 22 or later for the practice runner. Follow `.node-version` for the
recommended Node major, `.python-version` for the Python 3.12 project environment,
and `rust-toolchain.toml` for stable Rust with Clippy. Install each runtime you use:

| Language | Environment | Test command |
|---|---|---|
| JavaScript | Node.js | `npm run practice -- 01_arrays/problems/two_sum js` |
| Python | Python 3.10–3.14, available as `python3` | `npm run practice -- 01_arrays/problems/two_sum py` |
| TypeScript | Bun; install the pinned compiler with `bun install --frozen-lockfile` | `npm run practice -- 01_arrays/problems/two_sum ts` |
| Rust | Current stable Rust and Cargo, installed with rustup | `npm run practice -- 01_arrays/problems/two_sum rs` |
| SQL | Python's standard-library SQLite 3.25 or later | `npm run practice -- 16_sql/problems/window_ranking sql` |

The numbered Python exercises use the standard library. Rust uses the workspace
crates. The optional [applied ML projects](projects/README.md) use a separate
uv environment and the committed `uv.lock`; they do not change core practice dependencies.

## Practice without changing references

1. Read the problem's prompt and tests. State the input contract and edge cases.
2. Run `start` for one lesson and language. Open the private solution path it prints.
3. Keep entry-point names, signatures, and imports. Replace the copied implementation
   in that private file with your answer. Do not change public reference files.
4. Run `attempt`. The runner refreshes tests from the reference before it executes
   your code. Fix failures and run again.
5. Explain time and space costs. Compare references after your attempt. Report
   your outcome and hints honestly; a copied reference also passes the tests.
6. Repeat in Python from your explanation, then use the due review queue.

```bash
# Discover metadata and actual language coverage.
npm run practice -- list
npm run practice -- search "binary search" --language py
npm run practice -- list --difficulty medium --pattern binary-search --json

# Create or reopen a private attempt. Start never overwrites existing work.
npm run practice -- start 04_linked_lists/problems/reverse_list py
# Edit the solution path printed above.
npm run practice -- attempt 04_linked_lists/problems/reverse_list py
npm run practice -- record 04_linked_lists/problems/reverse_list py --outcome solved --hints 0 --minutes 20
npm run practice -- progress --language py
npm run practice -- review --language py

# Verify reference solutions without creating an attempt.
npm run practice -- 01_arrays/problems/two_sum js
npm run practice -- 01_arrays py --jobs 4
npm run practice -- 15_machine_learning py
npm run practice -- 16_sql sql

# Check the core suites and local development tools.
npm test
npm run typecheck
npm run check:rust
# Install uv first; this installs Ruff and mypy, not the optional ML stack.
npm run check:py
```

Use `js`, `py`, `ts`, `rs`, or `sql` for attempts. Each lesson-language workspace
contains a snapshot of topic helpers. Reuse it while you work; use another
`PRACTICE_HOME` after incompatible helper changes. References stay under numbered
topics; attempts and `progress.json` stay under `.private/` by default.
Choose an external or ignored directory for `PRACTICE_HOME`; custom paths are not
automatically ignored. Back up that directory to preserve your progress.

This workflow is not a security sandbox. Run only trusted local code. Trusted
test refresh prevents accidental weakening of tests, not deliberate cheating.

## Find exercises and schedule reviews

Use `--language`, `--topic`, `--difficulty`, and `--pattern` together to narrow the
catalog. Query words must all match the lesson path, title, difficulty, languages,
patterns, or prerequisite paths. Use `--pattern` for an exact algorithm tag.
Inspect `list --json` for prerequisite IDs and source links.

The [editorial metadata](resources/exercises.json) stores difficulty, patterns,
and recommended preparation. Prerequisites are a study graph, not runtime imports.
LeetCode-linked exercises use the site's published difficulty. Local fundamentals
use `foundation`; other local problems use editorial difficulty. Language coverage
comes from solution files, not another registry.

Record `solved`, `partial`, or `failed` after an attempt. A solved rating requires a
current passing attempt and unchanged reference tests. You cannot rate the same
attempt twice. Independent solves (`solved` with zero hints) advance review
intervals through 1, 3, 7, 14, 30, 60, and 120 days. Hints, partial results, and
failures reset the interval to one day. Reviews use UTC calendar dates.

## Run suites with bounded concurrency

The runner uses up to four processes by default, captures output in catalog order,
and reports every failure. Set `--jobs 1` for serial debugging or choose 1–16 jobs.
Set `--timeout-ms` to change the 120-second per-process limit. Interrupts leave
pending work unstarted. On POSIX, cancellation stops the active process groups;
on Windows, it stops direct child processes only. Cargo handles Rust compilation
and test scheduling; the runner does not launch competing Cargo jobs.

```bash
node scripts/practice.mjs benchmark all py --sample 246 --jobs 4
```

Observed complete-suite timings on the development machine:

| Language | Exercises | Serial | Four workers | Speedup |
|---|---:|---:|---:|---:|
| Python | 246 | 71.29 s | 18.42 s | 3.87× |
| JavaScript | 184 | 9.39 s | 3.94 s | 2.38× |
| TypeScript/Bun | 184 | 2.43 s | 0.64 s | 3.78× |

Each measurement ran the same complete language suite serially and concurrently;
both runs passed. These are local observations, not portable performance guarantees.

TypeScript tests import `.ts` solutions, not the neighboring JavaScript files.
Bun checks runtime behavior, not TypeScript types. The root `typecheck` command
checks public reference files and excludes private attempts.
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
- [Applied ML projects](projects/README.md)
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
Commit `uv.lock` and the workspace `Cargo.lock` as well.

Keep credentials, browser state, private notes, raw data, database dumps, model
artifacts, and experiment logs out of Git. Use `.private/`, `data/raw/`, and
`data/private/` for local material. Publish only synthetic or licensed examples.
Ignore rules do not erase previously committed files or history.

## License

Use this handbook's [MIT license](LICENSE) for its source and original learning
material. Linked resources, dependencies, and downloaded model weights retain
their own licenses.
