# Jump game

Practice the matching question: [LeetCode #55: Jump Game](https://leetcode.com/problems/jump-game/).

Determine whether jump lengths allow you to reach the last position.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 12_dynamic_programming/problems/jump_game js
npm run practice -- 12_dynamic_programming/problems/jump_game py
npm run practice -- 12_dynamic_programming/problems/jump_game ts
npm run practice -- 12_dynamic_programming/problems/jump_game rs
```

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `jumpGame` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `jump_game` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `jumpGame` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `jump_game` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(jumpGame([2,3,1,1,4])&&!jumpGame([3,2,1,0,4]),"jumpGame");
```

[Back to the topic](../../README.md)
