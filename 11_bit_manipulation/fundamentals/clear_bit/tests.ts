function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { clearBit } from '../../fundamentals/clear_bit/solution.ts';



assert(clearBit(0b1011,0)===0b1010,"clearBit");
console.log('PASS 11_bit_manipulation/clear_bit (ts)');
