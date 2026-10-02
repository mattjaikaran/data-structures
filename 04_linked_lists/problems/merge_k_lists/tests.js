function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray, toArray } from '../../fundamentals/singly_linked_list/solution.js';
import { mergeKLists } from '../../problems/merge_k_lists/solution.js';

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

const kl = [fromArray([1, 4, 5]), fromArray([1, 3, 4]), fromArray([2, 6])];
assert(deepEq(toArray(mergeKLists(kl)), [1, 1, 2, 3, 4, 4, 5, 6]), "merge k lists");
assert(mergeKLists([]) === null, "merge k empty");
console.log('PASS 04_linked_lists/merge_k_lists (js)');
