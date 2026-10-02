function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subsetsWithDup } from '../../problems/subsets_with_dup/solution.js';



assert(subsetsWithDup([1,2,2]).length === 6, "subsetsWithDup");
console.log('PASS 13_backtracking/subsets_with_dup (js)');
