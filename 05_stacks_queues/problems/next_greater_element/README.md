# Next greater element

Practice the matching question: [LeetCode #496: Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/).

Find the next greater value to the right for each requested value.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/next_greater_element js
npm run practice -- 05_stacks_queues/problems/next_greater_element py
npm run practice -- 05_stacks_queues/problems/next_greater_element ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `nextGreaterElement` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `next_greater_element` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `nextGreaterElement` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(
    deepEq(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]),
    "nge"
  );
```

## Solution notes

Next Greater Element I (LC #496) — monotonic stack + hash map. O(n).

[Back to the topic](../../README.md)
