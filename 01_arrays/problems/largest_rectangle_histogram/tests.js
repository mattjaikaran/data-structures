function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { largestRectangleHistogram } from '../../problems/largest_rectangle_histogram/solution.js';



assert(largestRectangleHistogram([2, 1, 5, 6, 2, 3]) === 10, "histogram classic");
assert(largestRectangleHistogram([2, 4]) === 4, "histogram two bars");
assert(largestRectangleHistogram([1]) === 1, "histogram single");
console.log('PASS 01_arrays/largest_rectangle_histogram (js)');
