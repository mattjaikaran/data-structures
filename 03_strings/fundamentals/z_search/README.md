# Z search

Find pattern matches with Z values that measure matching prefixes.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/fundamentals/z_search py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/fundamentals/z_search py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `zArray`, `zSearch` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `z_algorithm`, `z_search` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `zArray`, `zSearch` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `z_array`, `z_search` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(zSearch("abcabcabc", "abc"), [0, 3, 6]), "z-search");
```

## Solution notes

Z-array: Z[i] = length of longest s[i:] matching prefix of s. O(n).

[Back to the topic](../../README.md)
