# Next greater element

Practice the matching question: [LeetCode #496: Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/).

Find the next greater value to the right for each requested value.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/next_greater_element py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/next_greater_element py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
