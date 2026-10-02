function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isPowerOfTwo } from '../../fundamentals/is_power_of_two/solution.js';



assert(isPowerOfTwo(16) && isPowerOfTwo(1) && !isPowerOfTwo(6), "pow2");
console.log('PASS 11_bit_manipulation/is_power_of_two (js)');
