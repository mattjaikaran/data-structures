function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { bestTimeWithFee } from '../../problems/best_time_with_fee/solution.js';



assert(bestTimeWithFee([1,3,2,8,4,9],2)===8,"fee");
console.log('PASS 12_dynamic_programming/best_time_with_fee (js)');
