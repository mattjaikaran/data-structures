function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { findMiddle } from '../../problems/find_middle/solution.js';
import { fromArray } from '../../fundamentals/singly_linked_list/solution.js';



const m1 = findMiddle(fromArray([1, 2, 3, 4, 5]));
const m2 = findMiddle(fromArray([1, 2, 3, 4]));
const m3 = findMiddle(fromArray([1]));
assert(m1 && m1.val === 3, "middle odd");
assert(m2 && m2.val === 3, "middle even");
assert(m3 && m3.val === 1, "middle single");
console.log('PASS 04_linked_lists/find_middle (js)');
