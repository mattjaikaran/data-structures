function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { Queue } from '../../fundamentals/queue/solution.js';



const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
assert(q.dequeue() === 1 && q.peek() === 2, "Queue");
console.log('PASS 05_stacks_queues/queue (js)');
