function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { totalHammingDistance } from '../../problems/total_hamming_distance/solution.ts';



assert(totalHammingDistance([4,14,2])===6,"totalHamming");
console.log('PASS 11_bit_manipulation/total_hamming_distance (ts)');
