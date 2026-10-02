function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray } from '../../fundamentals/bst/solution.js';
import { maxDepth } from '../../problems/max_depth/solution.js';
import { levelOrder } from '../../problems/level_order/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

const t = fromArray([3, 9, 20, null, null, 15, 7]);
assert(maxDepth(t) === 3, "maxDepth");
assert(eq(levelOrder(t), [[3], [9, 20], [15, 7]]), "levelOrder");
console.log('PASS 07_trees/level_order (js)');
