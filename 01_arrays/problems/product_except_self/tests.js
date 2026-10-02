function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { productExceptSelf } from '../../problems/product_except_self/solution.js';

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEqual(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]), "product except self");
assert(deepEqual(productExceptSelf([0, 1]), [1, 0]), "product with zero");
console.log('PASS 01_arrays/product_except_self (js)');
