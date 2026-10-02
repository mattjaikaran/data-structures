# Dynamic array

Implement indexed access, append, insertion, and removal for a dynamic array. Keep existing elements when the backing storage grows.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/fundamentals/dynamic_array js
npm run practice -- 01_arrays/fundamentals/dynamic_array py
npm run practice -- 01_arrays/fundamentals/dynamic_array ts
```

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
