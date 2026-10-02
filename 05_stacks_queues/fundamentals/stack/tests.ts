function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { Stack } from '../../fundamentals/stack/solution.ts';



const s = new Stack<number>();
s.push(1);
s.push(2);
s.push(3);
assert(s.peek() === 3 && s.pop() === 3 && s.size === 2, "Stack");
console.log('PASS 05_stacks_queues/stack (ts)');
