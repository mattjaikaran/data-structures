# Jump game

Practice the matching question: [LeetCode #55: Jump Game](https://leetcode.com/problems/jump-game/).

Determine whether jump lengths allow you to reach the last position.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 12_dynamic_programming/problems/jump_game py
# Edit the private solution path printed above.
npm run practice -- attempt 12_dynamic_programming/problems/jump_game py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

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
