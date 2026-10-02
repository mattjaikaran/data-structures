function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { removeNthFromEnd } from '../../problems/remove_nth_from_end/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2, 3, 4, 5]), 2)), [1, 2, 3, 5]), "nth from end");
assert(deepEq(toArray(removeNthFromEnd(fromArray([1, 2]), 1)), [1]), "nth tail");
assert(deepEq(toArray(removeNthFromEnd(fromArray([1]), 1)), []), "nth only node");
console.log('PASS 04_linked_lists/remove_nth_from_end (js)');
