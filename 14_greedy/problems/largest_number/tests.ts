function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { largestNumber } from '../../problems/largest_number/solution.ts';



assert(largestNumber([10,2]) === "210", "largestNumber");
assert(largestNumber([3,30,34,5,9]) === "9534330", "largestNumber2");
console.log('PASS 14_greedy/largest_number (ts)');
