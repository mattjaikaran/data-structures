function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { numTrees } from '../../problems/num_trees/solution.js';



assert(numTrees(3)===5&&numTrees(1)===1,"numTrees");
console.log('PASS 12_dynamic_programming/num_trees (js)');
