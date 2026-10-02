# Prefix sum

Build cumulative sums so you can calculate the sum of a range without scanning that range again.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/fundamentals/prefix_sum py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/fundamentals/prefix_sum py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `buildPrefixSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `prefix_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `buildPrefixSum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `prefix_sum`, `range_sum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const p = buildPrefixSum([1, 2, 3, 4, 5]);
assert(p[4] - p[1] === 9, "prefix range sum [1..3]");
```

## Solution notes

Build prefix sum array.
prefix[i] = sum of nums[0..i-1]  (prefix[0] = 0 as sentinel)

Range sum [l, r] = prefix[r+1] - prefix[l]
Time: O(n) build, O(1) query  Space: O(n)

[Back to the topic](../../README.md)
