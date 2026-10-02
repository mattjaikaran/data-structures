function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { MinHeap } from '../../fundamentals/min_heap/solution.ts';



const mnh = new MinHeap();
[5,2,8,1,9].forEach(v=>mnh.push(v));
assert(mnh.peek()===1,"minheap peek");
assert(mnh.pop()===1,"minheap pop");
assert(mnh.peek()===2,"minheap peek2");
console.log('PASS 08_heaps/min_heap (ts)');
