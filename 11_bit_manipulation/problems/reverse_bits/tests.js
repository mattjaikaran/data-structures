function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { reverseBits } from '../../problems/reverse_bits/solution.js';



assert(reverseBits(43261596) === 964176192, "reverseBits");
console.log('PASS 11_bit_manipulation/reverse_bits (js)');
