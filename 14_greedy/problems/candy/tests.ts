function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { candy } from '../../problems/candy/solution.ts';



assert(candy([1,0,2]) === 5 && candy([1,2,2]) === 4, "candy");
console.log('PASS 14_greedy/candy (ts)');
