function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { backspaceCompare } from '../../problems/backspace_compare/solution.js';



assert(backspaceCompare("ab#c", "ad#c"), "backspace 1");
assert(!backspaceCompare("a#c", "b"), "backspace 2");
console.log('PASS 05_stacks_queues/backspace_compare (js)');
