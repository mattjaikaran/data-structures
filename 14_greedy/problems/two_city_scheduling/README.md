# Two city scheduling

Practice the matching question: [LeetCode #1029: Two City Scheduling](https://leetcode.com/problems/two-city-scheduling/).

Send half the people to each city with the smallest total travel cost.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 14_greedy/problems/two_city_scheduling js
npm run practice -- 14_greedy/problems/two_city_scheduling py
npm run practice -- 14_greedy/problems/two_city_scheduling ts
```

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
