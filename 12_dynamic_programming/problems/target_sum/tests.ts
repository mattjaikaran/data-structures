function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { targetSum } from '../../problems/target_sum/solution.ts';



assert(targetSum([1,1,1,1,1],3)===5,"targetSum");
console.log('PASS 12_dynamic_programming/target_sum (ts)');
