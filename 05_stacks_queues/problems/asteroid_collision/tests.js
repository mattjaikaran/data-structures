function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { asteroidCollision } from '../../problems/asteroid_collision/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(asteroidCollision([5, 10, -5]), [5, 10]), "asteroids 1");
assert(deepEq(asteroidCollision([8, -8]), []), "asteroids 2");
assert(deepEq(asteroidCollision([10, 2, -5]), [10]), "asteroids 3");
console.log('PASS 05_stacks_queues/asteroid_collision (js)');
