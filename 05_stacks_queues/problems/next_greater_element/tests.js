function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { nextGreaterElement } from '../../problems/next_greater_element/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(
    deepEq(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]), [-1, 3, -1]),
    "nge"
  );
console.log('PASS 05_stacks_queues/next_greater_element (js)');
