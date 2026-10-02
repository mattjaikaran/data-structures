function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { countingSort } from '../../fundamentals/counting_sort/solution.ts';

const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

assert(eq(countingSort([4,2,2,8,3,3,1]),[1,2,2,3,3,4,8]),"counting");
console.log('PASS 06_sorting/counting_sort (ts)');
