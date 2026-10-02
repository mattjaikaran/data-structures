# Asteroid collision

Practice the matching question: [LeetCode #735: Asteroid Collision](https://leetcode.com/problems/asteroid-collision/).

Simulate collisions between asteroids moving in opposite directions.

## Practice

Read the tests, keep the existing function signatures, and replace the body in
your chosen `solution` file with your own implementation. Run from the repository root.

```bash
npm run practice -- 05_stacks_queues/problems/asteroid_collision js
npm run practice -- 05_stacks_queues/problems/asteroid_collision py
npm run practice -- 05_stacks_queues/problems/asteroid_collision ts
npm run practice -- 05_stacks_queues/problems/asteroid_collision rs
```

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
