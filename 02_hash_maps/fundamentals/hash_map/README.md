# Hash map

Implement insertion, lookup, update, and removal by key. Resolve collisions without losing existing entries.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/fundamentals/hash_map js
npm run practice -- 02_hash_maps/fundamentals/hash_map py
npm run practice -- 02_hash_maps/fundamentals/hash_map ts
```

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
