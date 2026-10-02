function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { mergeKSorted } from '../../problems/merge_k_sorted/solution.js';

const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

assert(
    eq(mergeKSorted([[1, 4, 5], [1, 3, 4], [2, 6]]), [1, 1, 2, 3, 4, 4, 5, 6]),
    "mergeKSorted"
  );
console.log('PASS 08_heaps/merge_k_sorted (js)');
