function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { reverseKGroup } from '../../problems/reverse_k_group/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 2)), [2, 1, 4, 3, 5]), "k=2");
assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 3)), [3, 2, 1, 4, 5]), "k=3");
assert(deepEq(toArray(reverseKGroup(fromArray([1, 2, 3, 4, 5]), 1)), [1, 2, 3, 4, 5]), "k=1");
console.log('PASS 04_linked_lists/reverse_k_group (js)');
