function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { twoSum } from '../../problems/two_sum/solution.ts';

function deepEqual(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]), "two sum basic");
assert(deepEqual(twoSum([3, 2, 4], 6), [1, 2]), "two sum non-adjacent");
assert(deepEqual(twoSum([3, 3], 6), [0, 1]), "two sum duplicate");
console.log('PASS 01_arrays/two_sum (ts)');
