function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { swapPairs } from '../../problems/swap_pairs/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3, 4]))), [2, 1, 4, 3]), "swap even");
assert(deepEq(toArray(swapPairs(fromArray([1, 2, 3]))), [2, 1, 3]), "swap odd");
assert(deepEq(toArray(swapPairs(fromArray([1]))), [1]), "swap single");
console.log('PASS 04_linked_lists/swap_pairs (js)');
