function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subsetsWithDup } from '../../problems/subsets_with_dup/solution.ts';



assert(subsetsWithDup([1,2,2]).length === 6, "subsetsWithDup");
console.log('PASS 13_backtracking/subsets_with_dup (ts)');
