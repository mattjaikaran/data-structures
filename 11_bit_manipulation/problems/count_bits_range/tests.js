function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { countBitsRange } from '../../problems/count_bits_range/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(eq(countBitsRange(5), [0, 1, 1, 2, 1, 2]), "countRange");
console.log('PASS 11_bit_manipulation/count_bits_range (js)');
