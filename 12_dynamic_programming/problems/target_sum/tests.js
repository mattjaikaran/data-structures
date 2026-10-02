function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { targetSum } from '../../problems/target_sum/solution.js';



assert(targetSum([1,1,1,1,1],3)===5,"targetSum");
console.log('PASS 12_dynamic_programming/target_sum (js)');
