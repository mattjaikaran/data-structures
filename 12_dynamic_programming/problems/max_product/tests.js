function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { maxProduct } from '../../problems/max_product/solution.js';



assert(maxProduct([2,3,-2,4])===6&&maxProduct([-2,3,-4])===24,"maxProduct");
console.log('PASS 12_dynamic_programming/max_product (js)');
