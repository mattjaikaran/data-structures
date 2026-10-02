function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { countBits } from '../../fundamentals/count_bits/solution.js';



assert(countBits(0b1011) === 3 && countBits(0) === 0, "countBits");
console.log('PASS 11_bit_manipulation/count_bits (js)');
