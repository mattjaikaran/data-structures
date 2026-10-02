# Two city scheduling

Practice the matching question: [LeetCode #1029: Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/).

Send half the people to each city with the smallest total travel cost.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 14_greedy/problems/two_city_scheduling py
# Edit the private solution path printed above.
npm run practice -- attempt 14_greedy/problems/two_city_scheduling py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `twoCityScheduling` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `two_city_scheduling` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `twoCityScheduling` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(twoCityScheduling([[10,20],[30,200],[400,50],[30,20]]) === 110, "twoCityScheduling");
```

[Back to the topic](../../README.md)
