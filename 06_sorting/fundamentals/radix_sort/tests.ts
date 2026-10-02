function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { radixSort } from '../../fundamentals/radix_sort/solution.ts';

const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

assert(eq(radixSort([170,45,75,90,802,24,2,66]),[2,24,45,66,75,90,170,802]),"radix");
console.log('PASS 06_sorting/radix_sort (ts)');
