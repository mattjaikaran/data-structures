function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { diameterOfBinaryTree } from '../../problems/diameter_of_binary_tree/solution.js';
import { fromArray } from '../../fundamentals/bst/solution.js';



assert(diameterOfBinaryTree(fromArray([1, 2, 3, 4, 5])) === 3, "diameter");
console.log('PASS 07_trees/diameter_of_binary_tree (js)');
