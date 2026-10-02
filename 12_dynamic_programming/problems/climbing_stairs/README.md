# Climbing stairs

Practice the matching question: [LeetCode #70: Climbing Stairs](https://leetcode.com/problems/climbing-stairs/).

Count ways to climb n steps when each move takes one or two steps.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/climbing_stairs js
npm run practice -- 12_dynamic_programming/problems/climbing_stairs py
npm run practice -- 12_dynamic_programming/problems/climbing_stairs ts
npm run practice -- 12_dynamic_programming/problems/climbing_stairs rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `climbingStairs` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `climbing_stairs` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `climbingStairs` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `climbing_stairs` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(climbingStairs(5)===8&&climbingStairs(2)===2,"climbing");
```

[Back to the topic](../../README.md)
