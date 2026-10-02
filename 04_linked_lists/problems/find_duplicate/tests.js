function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { findDuplicate } from '../../problems/find_duplicate/solution.js';



assert(findDuplicate([1, 3, 4, 2, 2]) === 2, "duplicate 1");
assert(findDuplicate([3, 1, 3, 4, 2]) === 3, "duplicate 2");
console.log('PASS 04_linked_lists/find_duplicate (js)');
