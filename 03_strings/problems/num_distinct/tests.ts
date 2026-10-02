function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { numDistinct } from '../../problems/num_distinct/solution.ts';



assert(numDistinct("rabbbit","rabbit")===3,"numDistinct");
assert(numDistinct("babgbag","bag")===5,"numDistinct2");
console.log('PASS 03_strings/num_distinct (ts)');
