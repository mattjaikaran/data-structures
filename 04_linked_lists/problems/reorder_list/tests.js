function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray, toArray } from '../../fundamentals/singly_linked_list/solution.js';
import { reorderList } from '../../problems/reorder_list/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

const r1 = fromArray([1, 2, 3, 4, 5]);
reorderList(r1);
assert(deepEq(toArray(r1), [1, 5, 2, 4, 3]), "reorder odd");
const r2 = fromArray([1, 2, 3, 4]);
reorderList(r2);
assert(deepEq(toArray(r2), [1, 4, 2, 3]), "reorder even");
console.log('PASS 04_linked_lists/reorder_list (js)');
