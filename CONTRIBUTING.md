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

Keep one problem per folder. Import shared helpers from their owner instead of
copying them. The practice runner discovers folders automatically; do not add a
registry entry for each problem.

## Keep solutions usable

- Keep public entry points stable so practice tests can import them.
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

## Verify changes

```bash
bun install
npm run practice -- 01_arrays/problems/two_sum js
npm run practice -- 01_arrays/problems/two_sum py
npm run practice -- 01_arrays/problems/two_sum ts
npm run practice -- 01_arrays/problems/two_sum rs
npm run typecheck
npm test
cargo clippy --workspace --all-targets
```

Replace the example folder with the problem you changed. Exercise the practice
command as well as the tests. Keep generated binaries and Rust targets out of Git.

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
