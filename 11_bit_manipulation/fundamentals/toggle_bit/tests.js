function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toggleBit } from '../../fundamentals/toggle_bit/solution.js';



assert(toggleBit(0b1010, 0) === 0b1011, "toggle");
console.log('PASS 11_bit_manipulation/toggle_bit (js)');
