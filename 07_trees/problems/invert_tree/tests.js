function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray, inorder } from '../../fundamentals/bst/solution.js';
import { invertTree } from '../../problems/invert_tree/solution.js';



const inv = fromArray([4, 2, 7, 1, 3, 6, 9]);
invertTree(inv);
assert(inorder(inv)[0] === 9, "invertTree");
console.log('PASS 07_trees/invert_tree (js)');
