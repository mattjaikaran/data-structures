function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray, toArray } from '../../fundamentals/singly_linked_list/solution.ts';
import { mergeKLists } from '../../problems/merge_k_lists/solution.ts';

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

const kl = [fromArray([1, 4, 5]), fromArray([1, 3, 4]), fromArray([2, 6])];
assert(deepEq(toArray(mergeKLists(kl)), [1, 1, 2, 3, 4, 4, 5, 6]), "merge k lists");
assert(mergeKLists([]) === null, "merge k empty");
console.log('PASS 04_linked_lists/merge_k_lists (ts)');
