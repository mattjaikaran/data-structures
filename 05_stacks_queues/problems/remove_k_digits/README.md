# Remove k digits

Practice the matching question: [LeetCode #402: Remove K Digits](https://leetcode.com/problems/remove-k-digits/).

Remove k digits to form the smallest possible nonnegative decimal number.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/remove_k_digits py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/remove_k_digits py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `removeKDigits` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `remove_k_digits` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `removeKDigits` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(removeKDigits("1432219", 3) === "1219", "remove k 1");
```

## Solution notes

Remove K Digits (LC #402) — monotonic increasing stack. O(n).

[Back to the topic](../../README.md)
