function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isBalanced } from '../../problems/is_balanced/solution.js';
import { fromArray } from '../../fundamentals/bst/solution.js';



assert(isBalanced(fromArray([3, 9, 20, null, null, 15, 7])), "balanced");
assert(!isBalanced(fromArray([1, 2, 2, 3, 3, null, null, 4, 4])), "unbalanced");
console.log('PASS 07_trees/is_balanced (js)');
