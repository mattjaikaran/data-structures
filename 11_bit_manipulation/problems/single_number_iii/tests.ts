function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { singleNumberIII } from '../../problems/single_number_iii/solution.ts';

const eq=(a:unknown,b:unknown)=>JSON.stringify(a)===JSON.stringify(b);

const[a,b]=singleNumberIII([1,2,1,3,2,5]);
assert(eq(singleNumberIII([1, 2, 1, 3, 2, 5]).sort((a,b)=>a-b), [3,5]));
assert(eq(singleNumberIII([-1, 0]).sort((a,b)=>a-b), [-1,0]));
console.log('PASS 11_bit_manipulation/single_number_iii (ts)');
