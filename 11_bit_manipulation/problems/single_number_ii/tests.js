function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { singleNumberII } from '../../problems/single_number_ii/solution.js';



assert(singleNumberII([2, 2, 3, 2]) === 3 && singleNumberII([0, 1, 0, 1, 0, 1, 99]) === 99, "singleII");
console.log('PASS 11_bit_manipulation/single_number_ii (js)');
