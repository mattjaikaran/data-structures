function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { mergeSorted } from '../../problems/merge_sorted/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(mergeSorted(fromArray([1, 3, 5]), fromArray([2, 4, 6]))), [1, 2, 3, 4, 5, 6]), "merge");
assert(deepEq(toArray(mergeSorted(null, fromArray([1]))), [1]), "merge null left");
console.log('PASS 04_linked_lists/merge_sorted (js)');
