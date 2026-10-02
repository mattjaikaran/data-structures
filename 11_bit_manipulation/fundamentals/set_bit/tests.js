function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { setBit } from '../../fundamentals/set_bit/solution.js';



assert(setBit(0b1010, 0) === 0b1011, "setBit");
console.log('PASS 11_bit_manipulation/set_bit (js)');
