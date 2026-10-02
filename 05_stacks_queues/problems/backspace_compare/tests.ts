function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { backspaceCompare } from '../../problems/backspace_compare/solution.ts';



assert(backspaceCompare("ab#c", "ad#c"), "backspace 1");
assert(!backspaceCompare("a#c", "b"), "backspace 2");
console.log('PASS 05_stacks_queues/backspace_compare (ts)');
