# String compression

Practice the matching question: [LeetCode #443: String Compression](https://leetcode.com/problems/string-compression/).

Compress consecutive repeated characters in place and return the resulting length.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/string_compression js
npm run practice -- 03_strings/problems/string_compression py
npm run practice -- 03_strings/problems/string_compression ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `stringCompression` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `string_compression` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `stringCompression` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const chars = ["a", "a", "b", "b", "c", "c", "c"];
assert(stringCompression(chars) === 6, "compression");
```

[Back to the topic](../../README.md)
