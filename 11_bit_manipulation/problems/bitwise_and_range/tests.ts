function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { bitwiseAndRange } from '../../problems/bitwise_and_range/solution.ts';



assert(bitwiseAndRange(5,7)===4&&bitwiseAndRange(1,2147483647)===0,"andRange");
console.log('PASS 11_bit_manipulation/bitwise_and_range (ts)');
