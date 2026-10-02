function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { dailyTemperatures } from '../../problems/daily_temperatures/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(
    deepEq(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]), [1, 1, 4, 2, 1, 1, 0, 0]),
    "daily temps"
  );
console.log('PASS 05_stacks_queues/daily_temperatures (js)');
