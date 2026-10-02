# Contains duplicate

Practice the matching question: [LeetCode #217: Contains Duplicate](https://leetcode.com/problems/contains-duplicate/).

Return whether a value appears more than once in the input.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/contains_duplicate js
npm run practice -- 01_arrays/problems/contains_duplicate py
npm run practice -- 01_arrays/problems/contains_duplicate ts
npm run practice -- 01_arrays/problems/contains_duplicate rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `containsDuplicate` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `contains_duplicate` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `containsDuplicate` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `contains_duplicate` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(containsDuplicate([1, 2, 1]));
assert(!containsDuplicate([1, 2, 3]));
assert(!containsDuplicate([]));
```

## Solution notes

Contains Duplicate (LC #217)
Time: O(n)  Space: O(n)

[Back to the topic](../../README.md)
