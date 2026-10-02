function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { hammingDistance } from '../../problems/hamming_distance/solution.ts';



assert(hammingDistance(1,4)===2&&hammingDistance(3,1)===1,"hamming");
console.log('PASS 11_bit_manipulation/hamming_distance (ts)');
