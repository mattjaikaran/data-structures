function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { maxProductSubarray } from '../../problems/max_product_subarray/solution.ts';



assert(maxProductSubarray([2, 3, -2, 4]) === 6, "max product");
assert(maxProductSubarray([-2, 0, -1]) === 0, "max product with zero");
assert(maxProductSubarray([-2, 3, -4]) === 24, "max product two negatives");
console.log('PASS 01_arrays/max_product_subarray (ts)');
