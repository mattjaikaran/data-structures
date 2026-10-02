function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { countBitsRange } from '../../problems/count_bits_range/solution.ts';

const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

assert(eq(countBitsRange(5),[0,1,1,2,1,2]),"countRange");
console.log('PASS 11_bit_manipulation/count_bits_range (ts)');
