function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { maximumXOR } from '../../problems/maximum_xor/solution.ts';



assert(maximumXOR([3,10,5,25,2,8])===28,"maxXor");
console.log('PASS 11_bit_manipulation/maximum_xor (ts)');
