function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { totalHammingDistance } from '../../problems/total_hamming_distance/solution.js';



assert(totalHammingDistance([4, 14, 2]) === 6, "totalHamming");
console.log('PASS 11_bit_manipulation/total_hamming_distance (js)');
