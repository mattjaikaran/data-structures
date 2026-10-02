function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { maxProduct } from '../../problems/max_product/solution.ts';



assert(maxProduct([2,3,-2,4])===6&&maxProduct([-2,3,-4])===24,"maxProduct");
console.log('PASS 12_dynamic_programming/max_product (ts)');
