function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { containsDuplicate } from '../../problems/contains_duplicate/solution.js';



assert(containsDuplicate([1, 2, 1]));
assert(!containsDuplicate([1, 2, 3]));
assert(!containsDuplicate([]));
console.log('PASS 01_arrays/contains_duplicate (js)');
