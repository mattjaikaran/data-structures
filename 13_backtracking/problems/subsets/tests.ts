function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { subsets } from '../../problems/subsets/solution.ts';



assert(subsets([1,2,3]).length === 8, "subsets count");
assert(subsets([1,2,3]).some(s => s.length === 0), "subsets has empty");
console.log('PASS 13_backtracking/subsets (ts)');
