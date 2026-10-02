function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { hammingDistance } from '../../problems/hamming_distance/solution.js';



assert(hammingDistance(1, 4) === 2 && hammingDistance(3, 1) === 1, "hamming");
console.log('PASS 11_bit_manipulation/hamming_distance (js)');
