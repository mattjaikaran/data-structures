function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { Queue } from '../../fundamentals/queue/solution.js';



const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
assert(q.dequeue() === 1 && q.peek() === 2, "Queue");
q.enqueue(4);
assert(q.dequeue() === 2);
assert(q.dequeue() === 3);
assert(q.peek() === 4 && q.dequeue() === 4);
assert(q.isEmpty());
assert(q.dequeue() === undefined);
q.enqueue(5);
assert(q.peek() === 5 && q.dequeue() === 5 && q.isEmpty());

console.log('PASS 05_stacks_queues/queue (js)');
