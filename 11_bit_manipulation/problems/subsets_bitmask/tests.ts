function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subsetsFromMask } from '../../problems/subsets_bitmask/solution.ts';



const subs=subsetsFromMask([1,2,3]);
assert(subs.length===8,"subsets");
console.log('PASS 11_bit_manipulation/subsets_bitmask (ts)');
