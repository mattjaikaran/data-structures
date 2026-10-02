# Kmp search

Find pattern matches with a prefix table. Reuse previous comparisons when a match fails.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/fundamentals/kmp_search js
npm run practice -- 03_strings/fundamentals/kmp_search py
npm run practice -- 03_strings/fundamentals/kmp_search ts
npm run practice -- 03_strings/fundamentals/kmp_search rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `buildLPS`, `kmpSearch` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `kmp_search` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `buildLPS`, `kmpSearch` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `build_lps`, `kmp_search` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(eq(kmpSearch("abcabcabc", "abc"), [0, 3, 6]), "kmp basic");
```

## Solution notes

KMP — returns all start indices of pattern in text. O(n+m).

[Back to the topic](../../README.md)
