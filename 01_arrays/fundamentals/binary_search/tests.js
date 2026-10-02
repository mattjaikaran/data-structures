function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { binarySearch } from '../../fundamentals/binary_search/solution.js';



const sorted = [1, 3, 5, 7, 9, 11, 13];
assert(binarySearch(sorted, 7) === 3, "bs found");
assert(binarySearch(sorted, 1) === 0, "bs left boundary");
assert(binarySearch(sorted, 13) === 6, "bs right boundary");
assert(binarySearch(sorted, 6) === -1, "bs not found");
console.log('PASS 01_arrays/binary_search (js)');
