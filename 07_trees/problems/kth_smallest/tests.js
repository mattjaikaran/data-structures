function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { BST } from '../../fundamentals/bst/solution.js';
import { kthSmallest } from '../../problems/kth_smallest/solution.js';



const bst3 = new BST();
[3, 1, 4, null, 2].forEach((v) => v != null && bst3.insert(v));
assert(kthSmallest(bst3.root, 1) === 1, "kthSmallest");
console.log('PASS 07_trees/kth_smallest (js)');
