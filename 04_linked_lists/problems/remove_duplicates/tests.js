function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { removeDuplicates } from '../../problems/remove_duplicates/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 2, 3, 3]))), [1, 2, 3]), "dedup");
assert(deepEq(toArray(removeDuplicates(fromArray([1, 1, 1]))), [1]), "dedup all same");
console.log('PASS 04_linked_lists/remove_duplicates (js)');
