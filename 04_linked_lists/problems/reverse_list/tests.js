function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { toArray, fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { reverseList } from '../../problems/reverse_list/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(toArray(reverseList(fromArray([1, 2, 3, 4, 5]))), [5, 4, 3, 2, 1]), "reverse std");
assert(deepEq(toArray(reverseList(fromArray([1]))), [1]), "reverse single");
assert(reverseList(null) === null, "reverse null");
const chain = fromArray([1,1,2,3]);
const originalNodes = [];
let cursor = chain;
while (cursor) { originalNodes.push(cursor); cursor = cursor.next; }
cursor = reverseList(chain);
for (const node of originalNodes.reverse()) {
  assert(cursor === node, 'Reverse by relinking, not cloning or replacing values');
  cursor = cursor.next;
}
assert(cursor === null, 'The old head must terminate the reversed chain');

console.log('PASS 04_linked_lists/reverse_list (js)');
