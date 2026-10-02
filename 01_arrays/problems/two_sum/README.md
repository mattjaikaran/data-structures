# Two sum

Practice the matching question: [LeetCode #1: Two Sum](https://leetcode.com/problems/two-sum/).

Find two distinct positions whose values add to the target. Do not use the same position twice.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 01_arrays/problems/two_sum js
npm run practice -- 01_arrays/problems/two_sum py
npm run practice -- 01_arrays/problems/two_sum ts
npm run practice -- 01_arrays/problems/two_sum rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `twoSum` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `two_pointer_sorted_pair`, `two_sum` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `twoSum` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `two_sum` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]), "two sum basic");
```

## Solution notes

Two pointers on a sorted array — find pair summing to target.
Time: O(n)  Space: O(1)

[Back to the topic](../../README.md)
