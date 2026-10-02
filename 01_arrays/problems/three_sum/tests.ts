function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { threeSum } from '../../problems/three_sum/solution.ts';

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

const ts = threeSum([-1, 0, 1, 2, -1, -4]).map(t => [...t].sort((a,b)=>a-b)).sort();
assert(deepEqual(ts, [[-1, -1, 2], [-1, 0, 1]]), "three sum");
assert(deepEqual(threeSum([0, 0, 0]), [[0, 0, 0]]), "three sum all zeros");
assert(deepEqual(threeSum([1, 2, 3]), []), "three sum no result");
console.log('PASS 01_arrays/three_sum (ts)');
