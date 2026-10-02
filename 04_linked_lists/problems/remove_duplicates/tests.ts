function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.ts';
import { removeDuplicates } from '../../problems/remove_duplicates/solution.ts';

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 2, 3, 3]))), [1, 2, 3]), "dedup");
assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 1]))), [1]), "dedup all same");
console.log('PASS 04_linked_lists/remove_duplicates (ts)');
