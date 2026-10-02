function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { clearBit } from '../../fundamentals/clear_bit/solution.js';



assert(clearBit(0b1011, 0) === 0b1010, "clearBit");
console.log('PASS 11_bit_manipulation/clear_bit (js)');
