function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { nextGreaterElement } from '../../problems/next_greater_element/solution.ts';

function deepEq(a: unknown, b: unknown): boolean {
  return JSON.stringify(a) === JSON.stringify(b);
}

assert(deepEq(nextGreaterElement([4,1,2],[1,3,4,2]), [-1,3,-1]), "nge");
console.log('PASS 05_stacks_queues/next_greater_element (ts)');
