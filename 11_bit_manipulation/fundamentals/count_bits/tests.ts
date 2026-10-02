function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { countBits } from '../../fundamentals/count_bits/solution.ts';



assert(countBits(0b1011)===3&&countBits(0)===0,"countBits");
console.log('PASS 11_bit_manipulation/count_bits (ts)');
