function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { rightSideView } from '../../problems/right_side_view/solution.ts';
import { fromArray } from '../../fundamentals/bst/solution.ts';

const eq = (a: unknown, b: unknown) => JSON.stringify(a)===JSON.stringify(b);

assert(eq(rightSideView(fromArray([1,2,3,null,5,null,4])),[1,3,4]),"rightSideView");
console.log('PASS 07_trees/right_side_view (ts)');
