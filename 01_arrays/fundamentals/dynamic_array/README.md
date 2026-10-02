# Dynamic array

Implement indexed access, append, insertion, and removal for a dynamic array. Keep existing elements when the backing storage grows.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 01_arrays/fundamentals/dynamic_array py
# Edit the private solution path printed above.
npm run practice -- attempt 01_arrays/fundamentals/dynamic_array py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `DynamicArray` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `DynamicArray` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `DynamicArray` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const da = new DynamicArray();
for (let i = 0; i < 10; i++) da.append(i);
assert(da.size === 10, "size after appends");
```

[Back to the topic](../../README.md)
