function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { combinationSum } from '../../problems/combination_sum/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a) === JSON.stringify(b);

const cs = combinationSum([2,3,6,7], 7);
assert(cs.length === 2 && cs.some(c => eq(c,[7])), "combinationSum");
console.log('PASS 13_backtracking/combination_sum (ts)');
