function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { missingNumber } from '../../problems/missing_number/solution.ts';



assert(missingNumber([3,0,1])===2&&missingNumber([9,6,4,2,3,5,7,0,1])===8,"missing");
console.log('PASS 11_bit_manipulation/missing_number (ts)');
