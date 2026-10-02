# Hash map

Implement insertion, lookup, update, and removal by key. Resolve collisions without losing existing entries.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 02_hash_maps/fundamentals/hash_map py
# Edit the private solution path printed above.
npm run practice -- attempt 02_hash_maps/fundamentals/hash_map py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `HashMap` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `HashMap` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `HashMap` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const hm = new HashMap();
hm.put("a", 1);
hm.put("b", 2);
hm.put("a", 99);
assert(hm.get("a") === 99 && hm.get("b") === 2, "put/get/update");
```

[Back to the topic](../../README.md)
