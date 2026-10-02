function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { rightSideView } from '../../problems/right_side_view/solution.js';
import { fromArray } from '../../fundamentals/bst/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(rightSideView(fromArray([1, 2, 3, null, 5, null, 4])), [1, 3, 4]), "rightSideView");
console.log('PASS 07_trees/right_side_view (js)');
