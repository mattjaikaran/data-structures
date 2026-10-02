# Reorganize string

Practice the matching question: [LeetCode #767: Reorganize String](https://leetcode.com/problems/reorganize-string/).

Rearrange characters so adjacent characters differ, or return the impossible result.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 08_heaps/problems/reorganize_string js
npm run practice -- 08_heaps/problems/reorganize_string py
npm run practice -- 08_heaps/problems/reorganize_string ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `reorganizeString` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `reorganize_string` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `reorganizeString` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
const rs = reorganizeString("aab");
assert(rs.length === 3 && rs[0] !== rs[1] && rs[1] !== rs[2], "reorganize valid");
```

[Back to the topic](../../README.md)
