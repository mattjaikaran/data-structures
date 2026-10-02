# Z search

Find pattern matches with Z values that measure matching prefixes.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/fundamentals/z_search js
npm run practice -- 03_strings/fundamentals/z_search py
npm run practice -- 03_strings/fundamentals/z_search ts
npm run practice -- 03_strings/fundamentals/z_search rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `zArray`, `zSearch` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `z_algorithm`, `z_search` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `zArray`, `zSearch` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `z_array`, `z_search` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(zSearch("abcabcabc", "abc"), [0, 3, 6]), "z-search");
```

## Solution notes

Z-array: Z[i] = length of longest s[i:] matching prefix of s. O(n).

[Back to the topic](../../README.md)
