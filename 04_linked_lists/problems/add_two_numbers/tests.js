function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { addTwoNumbers } from '../../problems/add_two_numbers/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(addTwoNumbers(fromArray([2, 4, 3]), fromArray([5, 6, 4]))), [7, 0, 8]), "add nums");
assert(deepEq(toArray(addTwoNumbers(fromArray([0]), fromArray([0]))), [0]), "add zeros");
assert(deepEq(toArray(addTwoNumbers(fromArray([9, 9, 9]), fromArray([1]))), [0, 0, 0, 1]), "add carry");
console.log('PASS 04_linked_lists/add_two_numbers (js)');
