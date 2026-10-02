# Asteroid collision

Practice the matching question: [LeetCode #735: Asteroid Collision](https://leetcode.com/problems/asteroid-collision/).

Simulate collisions between asteroids moving in opposite directions.

## Practice

Read the task and trusted tests. Keep public reference solutions unchanged.
Create or reopen a private attempt, then edit the solution path it prints.
Keep entry-point names and signatures. The attempt runner refreshes trusted tests.

```bash
npm run practice -- start 05_stacks_queues/problems/asteroid_collision py
# Edit the private solution path printed above.
npm run practice -- attempt 05_stacks_queues/problems/asteroid_collision py
```

Choose another available language from this page when you repeat the exercise.
Use [private progress and reviews](../../../README.md#find-exercises-and-schedule-reviews) to record the result.

## Files

| Language | Solution | Entry points | Tests |
|---|---|---|---|
| JavaScript | [solution.js](solution.js) | `asteroidCollision` | [tests.js](tests.js) |
| Python | [solution.py](solution.py) | `asteroid_collision` | [tests.py](tests.py) |
| TypeScript | [solution.ts](solution.ts) | `asteroidCollision` | [tests.ts](tests.ts) |
| Rust | [solution.rs](solution.rs) | `asteroid_collision` | Inside `solution.rs` |

## Example test

This excerpt comes from the test file. Open that file for its imports and fixtures.

```javascript
assert(deepEq(asteroidCollision([5, 10, -5]), [5, 10]), "asteroids 1");
```

## Solution notes

Asteroid Collision (LC #735). O(n).

[Back to the topic](../../README.md)
