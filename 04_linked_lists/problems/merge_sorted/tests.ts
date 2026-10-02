function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.ts';
import { mergeSorted } from '../../problems/merge_sorted/solution.ts';

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(mergeSorted(fromArray([1, 3, 5]), fromArray([2, 4, 6]))), [1, 2, 3, 4, 5, 6]), "merge");
assert(deepEq(toArray(mergeSorted(null, fromArray([1]))), [1]), "merge null left");
console.log('PASS 04_linked_lists/merge_sorted (ts)');
