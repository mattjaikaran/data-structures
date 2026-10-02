function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { sortList } from '../../problems/sort_list/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(sortList(fromArray([4, 2, 1, 3]))), [1, 2, 3, 4]), "sort list");
assert(deepEq(toArray(sortList(fromArray([-1, 5, 3, 4, 0]))), [-1, 0, 3, 4, 5]), "sort negatives");
console.log('PASS 04_linked_lists/sort_list (js)');
