function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.ts';
import { swapPairs } from '../../problems/swap_pairs/solution.ts';

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3, 4]))), [2, 1, 4, 3]), "swap even");
assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3]))), [2, 1, 3]), "swap odd");
assert(deepEq(toArray(swapPairs(fromArray([1]))), [1]), "swap single");
console.log('PASS 04_linked_lists/swap_pairs (ts)');
