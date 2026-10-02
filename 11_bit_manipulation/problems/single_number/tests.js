function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { singleNumber } from '../../problems/single_number/solution.js';



assert(singleNumber([4, 1, 2, 1, 2]) === 4, "singleNum");
console.log('PASS 11_bit_manipulation/single_number (js)');
