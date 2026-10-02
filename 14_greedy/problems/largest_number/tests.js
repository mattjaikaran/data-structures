function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { largestNumber } from '../../problems/largest_number/solution.js';



assert(largestNumber([10,2]) === "210", "largestNumber");
assert(largestNumber([3,30,34,5,9]) === "9534330", "largestNumber2");
console.log('PASS 14_greedy/largest_number (js)');
