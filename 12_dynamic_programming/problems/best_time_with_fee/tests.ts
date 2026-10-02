function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { bestTimeWithFee } from '../../problems/best_time_with_fee/solution.ts';



assert(bestTimeWithFee([1,3,2,8,4,9],2)===8,"fee");
console.log('PASS 12_dynamic_programming/best_time_with_fee (ts)');
