# Zigzag conversion

Practice the matching question: [LeetCode #6: Zigzag Conversion](https://leetcode.com/problems/zigzag-conversion/).

Read characters row by row after arranging them in a zigzag with the specified row count.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 03_strings/problems/zigzag_conversion js
npm run practice -- 03_strings/problems/zigzag_conversion py
npm run practice -- 03_strings/problems/zigzag_conversion ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `zigzagConversion` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `zigzag_conversion` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `zigzagConversion` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(zigzagConversion("PAYPALISHIRING", 3) === "PAHNAPLSIIGYIR", "zigzag 3");
```

[Back to the topic](../../README.md)
