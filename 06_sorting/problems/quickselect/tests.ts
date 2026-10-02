function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { quickselect } from '../../problems/quickselect/solution.ts';



assert(quickselect([3,2,1,5,6,4],2)===2,"quickselect");
console.log('PASS 06_sorting/quickselect (ts)');
