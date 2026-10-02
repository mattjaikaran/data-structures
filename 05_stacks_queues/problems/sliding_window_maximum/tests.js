function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { slidingWindowMaximum } from '../../problems/sliding_window_maximum/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(
    deepEq(slidingWindowMaximum([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]),
    "sw max"
  );
console.log('PASS 05_stacks_queues/sliding_window_maximum (js)');
