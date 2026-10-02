function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { isPowerOfTwo } from '../../fundamentals/is_power_of_two/solution.ts';



assert(isPowerOfTwo(16)&&isPowerOfTwo(1)&&!isPowerOfTwo(6),"pow2");
console.log('PASS 11_bit_manipulation/is_power_of_two (ts)');
