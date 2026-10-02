# Manacher

Find the longest palindromic substring by reusing palindrome radii.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 03_strings/fundamentals/manacher py
# Edit the private solution path printed above.
npm run practice -- attempt 03_strings/fundamentals/manacher py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `manacher` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `manacher` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `manacher` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `manacher` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(["bab", "aba"].includes(manacher("babad")), "manacher babad");
```

## Solution notes

Manacher's O(n) longest palindromic substring.

[Back to the topic](../../README.md)
