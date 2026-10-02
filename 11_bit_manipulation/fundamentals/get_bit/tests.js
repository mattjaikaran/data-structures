function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { getBit } from '../../fundamentals/get_bit/solution.js';



assert(getBit(0b1010, 1) === 1 && getBit(0b1010, 0) === 0, "getBit");
console.log('PASS 11_bit_manipulation/get_bit (js)');
