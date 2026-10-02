function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { maxPathSum } from '../../problems/max_path_sum/solution.js';
import { fromArray } from '../../fundamentals/bst/solution.js';



assert(maxPathSum(fromArray([-10, 9, 20, null, null, 15, 7])) === 42, "maxPathSum");
console.log('PASS 07_trees/max_path_sum (js)');
