# Remove k digits

Practice the matching question: [LeetCode #402: Remove K Digits](https://leetcode.com/problems/remove-k-digits/).

Remove k digits to form the smallest possible nonnegative decimal number.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/remove_k_digits js
npm run practice -- 05_stacks_queues/problems/remove_k_digits py
npm run practice -- 05_stacks_queues/problems/remove_k_digits ts
```

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
