# Find duplicate

Practice the matching question: [LeetCode #287: Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/).

Find the repeated value in a sequence of n + 1 values in the range 1 through n.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 04_linked_lists/problems/find_duplicate js
npm run practice -- 04_linked_lists/problems/find_duplicate py
npm run practice -- 04_linked_lists/problems/find_duplicate ts
npm run practice -- 04_linked_lists/problems/find_duplicate rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `findDuplicate` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `find_duplicate` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `findDuplicate` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `find_duplicate` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(findDuplicate([1, 3, 4, 2, 2]) === 2, "duplicate 1");
```

## Solution notes

Find the Duplicate Number (LC #287)
Array of n+1 ints in [1,n]. Find the duplicate without modifying array.

Treat array as a linked list: index i → index nums[i].
A duplicate value creates a cycle. Use Floyd's to find the cycle entry.
O(n) time, O(1) space.

[Back to the topic](../../README.md)
