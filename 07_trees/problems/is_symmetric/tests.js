function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isSymmetric } from '../../problems/is_symmetric/solution.js';
import { fromArray } from '../../fundamentals/bst/solution.js';



assert(isSymmetric(fromArray([1, 2, 2, 3, 4, 4, 3])), "symmetric");
assert(!isSymmetric(fromArray([1, 2, 2, null, 3, null, 3])), "asymmetric");
console.log('PASS 07_trees/is_symmetric (js)');
