function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { zigzagLevelOrder } from '../../problems/zigzag_level_order/solution.js';
import { fromArray } from '../../fundamentals/bst/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(
    eq(zigzagLevelOrder(fromArray([3, 9, 20, null, null, 15, 7])), [
      [3],
      [20, 9],
      [15, 7],
    ]),
    "zigzag"
  );
console.log('PASS 07_trees/zigzag_level_order (js)');
