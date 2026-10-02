function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subsets } from '../../problems/subsets/solution.js';



assert(subsets([1,2,3]).length === 8, "subsets count");
assert(subsets([1,2,3]).some(s => s.length === 0), "subsets has empty");
console.log('PASS 13_backtracking/subsets (js)');
