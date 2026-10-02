function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { searchRotated } from '../../problems/search_rotated/solution.js';



assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 0) === 4, "search rotated found");
assert(searchRotated([4, 5, 6, 7, 0, 1, 2], 3) === -1, "search rotated not found");
assert(searchRotated([1], 0) === -1, "search rotated single");
console.log('PASS 01_arrays/search_rotated (js)');
