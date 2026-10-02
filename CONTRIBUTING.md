# Contributing

## Add a problem

1. Choose the numbered topic folder.
2. Create `problems/<problem_name>/`, or use `fundamentals/<lesson_name>/` for a
   structure or core algorithm.
3. Add a `README.md` with the task, input/output contract, example, and test commands.
4. Add small `solution.js`, `solution.py`, `solution.ts`, and `solution.rs` files
   for the languages you implement. Do not add empty files for missing languages.
5. Add behavioral cases in `tests.js`, `tests.py`, and `tests.ts`. Put Rust tests
   in a `#[cfg(test)] mod <problem_name>_tests` block inside `solution.rs`.
   For SQL, add `solution.sql` and a `tests.py` harness that executes the query
   against synthetic in-memory SQLite data.
6. Include a Rust solution in the topic's `lib.rs` with
   `include!("problems/<problem_name>/solution.rs");`.
7. Update the topic's navigation table with the actual language coverage.
8. Add editorial difficulty, pattern tags, and prerequisite lesson IDs to
   `resources/exercises.json`. Use the published difficulty for linked LeetCode
   questions. Use `foundation` for local fundamentals.

Keep one problem per folder. Import shared helpers from their owner instead of
copying them. The runner discovers solution files and language coverage. Do not
duplicate coverage, titles, or source links in the metadata. Keep prerequisites
as recommended preparation, not a copy of runtime imports. The catalog rejects
missing or stale entries and prerequisite cycles.

## Keep solutions usable

- Keep public entry points stable so practice tests can import them.
- When you must change an entry point, migrate its callers, tests, and examples.
  Remove obsolete names instead of adding compatibility aliases.
- Use clear names. Document mutation, return values, input constraints, and
  time/space costs.
- Export JavaScript and TypeScript entry points. Import `.ts` files in TypeScript
  tests so Bun does not run the neighboring JavaScript solution.
- Use Python type hints. Import topic helpers through namespace packages such as
  `fundamentals.singly_linked_list.solution`. Test files add the topic directory
  to `sys.path`; solutions must not run tests on import.
- Keep Rust helpers visible through the topic crate. Keep shared imports in
  `lib.rs`. Use Rust doc comments for public entry points.
- Make failed assertions stop the process. Do not use non-throwing
  `console.assert` as a test gate.
- Test results, boundaries, mutations, identity, and state changes. Do not test
  incidental wording or source formatting.
- Use seeded reference comparisons for search and sorting, identity checks for
  linked structures, and operation sequences for queues and heaps.
- Keep tests deterministic and isolated. Test consumer behavior, not copied
  configuration, wrappers, mock echoes, or implementation text.
- Keep ML preprocessing and model selection separate from final held-out data.

## Verify changes

```bash
bun install --frozen-lockfile
npm run practice -- 01_arrays/problems/two_sum js
npm run practice -- 01_arrays/problems/two_sum py
npm run practice -- 01_arrays/problems/two_sum ts
npm run practice -- 01_arrays/problems/two_sum rs
npm run typecheck
npm test
npm run check:rust
npm run check:py
# For changes to the optional applied projects:
npm run test:projects
```

Replace the example folder with the problem you changed. Exercise the actual
practice command or project, not only its tests. Use a temporary `PRACTICE_HOME`
to smoke private start/attempt/record workflows without changing your progress.
For a project change, run its training or evaluation script and inspect results.
Ruff checks all public Python files for selected errors and unused imports.
Strict mypy checks the 16 standard-library ML solution modules; it does not claim
that all DSA exercises or optional library APIs are fully typed.
Keep generated binaries, model artifacts, and Rust targets out of Git.

## Keep content public-safe

- Write original explanations and implementations. Link to public question pages
  and references; do not copy paid course material.
- Use synthetic data and inspect notebook output before you publish it.
- Keep credentials in your environment. Commit only sanitized `.env.example` files.
- Keep private notes in `.private/` and local datasets in `data/raw/` or `data/private/`.
- Keep browser state, database dumps, model weights, and experiment logs out of Git.
- Check tracked files and history. Ignore rules do not remove an existing exposure.
  Revoke exposed credentials before you remove them; request approval before a history rewrite.


## Add a topic

Create a numbered topic with `fundamentals/`, `problems/`, and a navigation page.
Add a Rust library manifest and register it in the root Cargo workspace only when
you implement Rust solutions. Python-only and SQL topics need no Cargo manifest.
Update the root study order and the relevant learning path.

## Commit messages

Use `<type>(<scope>): <Capitalized imperative summary>`. Keep the complete subject
at 50 characters or fewer. Wrap an optional body at 72 characters.

```text
feat(arrays): Add a prefix sum exercise
fix(trees): Preserve links during reversal
docs(study): Explain the Python practice path
```
