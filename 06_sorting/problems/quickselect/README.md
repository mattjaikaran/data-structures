# Quickselect

Select an order statistic without fully sorting the input. Check the solution signature for its k convention.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 06_sorting/problems/quickselect js
npm run practice -- 06_sorting/problems/quickselect py
npm run practice -- 06_sorting/problems/quickselect ts
npm run practice -- 06_sorting/problems/quickselect rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `quickselect` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `quickselect` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `quickselect` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `quickselect` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(quickselect([3, 2, 1, 5, 6, 4], 2) === 2, "quickselect");
```

## Solution notes

Find kth smallest element in O(n) avg via quickselect.
Same partition logic as quicksort but only recurse into relevant half.

[Back to the topic](../../README.md)
