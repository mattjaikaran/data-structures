function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { setBit } from '../../fundamentals/set_bit/solution.ts';



assert(setBit(0b1010,0)===0b1011,"setBit");
console.log('PASS 11_bit_manipulation/set_bit (ts)');
