function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { powerOfFour } from '../../problems/power_of_four/solution.js';



assert(powerOfFour(16) && !powerOfFour(8), "pow4");
console.log('PASS 11_bit_manipulation/power_of_four (js)');
