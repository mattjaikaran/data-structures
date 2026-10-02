# Kmp search

Find pattern matches with a prefix table. Reuse previous comparisons when a match fails.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/fundamentals/kmp_search py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/fundamentals/kmp_search py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `buildLPS`, `kmpSearch` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `kmp_search` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `buildLPS`, `kmpSearch` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `build_lps`, `kmp_search` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(kmpSearch("abcabcabc", "abc"), [0, 3, 6]), "kmp basic");
```

## Solution notes

KMP — returns all start indices of pattern in text. O(n+m).

[Back to the topic](../../README.md)
