# Is isomorphic

Practice the matching question: [LeetCode #205: Isomorphic Strings](https://leetcode.com/problems/isomorphic-strings/).

Check whether characters in two strings have a one-to-one mapping.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 02_hash_maps/problems/is_isomorphic js
npm run practice -- 02_hash_maps/problems/is_isomorphic py
npm run practice -- 02_hash_maps/problems/is_isomorphic ts
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `isIsomorphic` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `is_isomorphic` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `isIsomorphic` | [tests.ts](tests.ts) |

This folder preserves the existing language coverage. Only the files listed above
have implementations and tests; the runner reports an error for an unavailable language.

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(isIsomorphic("egg", "add") && !isIsomorphic("foo", "bar"), "isomorph");
```

[Back to the topic](../../README.md)
