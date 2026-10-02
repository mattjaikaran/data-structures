function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { singleNumber } from '../../problems/single_number/solution.ts';



assert(singleNumber([4,1,2,1,2])===4,"singleNum");
console.log('PASS 11_bit_manipulation/single_number (ts)');
