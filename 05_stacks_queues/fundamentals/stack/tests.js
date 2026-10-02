function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { Stack } from '../../fundamentals/stack/solution.js';



const s = new Stack();
s.push(1);
s.push(2);
s.push(3);
assert(s.peek() === 3 && s.pop() === 3 && s.size === 2, "Stack");
console.log('PASS 05_stacks_queues/stack (js)');
