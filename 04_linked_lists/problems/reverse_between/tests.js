function assert(condition, message = 'Assertion failed') {
  if (!condition) throw new Error(message);
}
import { SNode } from '../../fundamentals/singly_linked_list/solution.js';
import { reverseBetween } from './solution.js';
const nodes = [1,2,3,4,5].map(value => new SNode(value));
for (let i = 0; i < nodes.length - 1; i++) nodes[i].next = nodes[i+1];
let result = reverseBetween(nodes[0],2,4);
for (const index of [0,3,2,1,4]) { assert(result === nodes[index], 'Node identity'); result = result.next; }
assert(result === null, 'Tail termination');
const first = new SNode(1, new SNode(2, new SNode(3)));
const last = first.next.next;
assert(reverseBetween(first,1,3) === last);
assert(first.next === null);
const single = new SNode(1);
assert(reverseBetween(single,1,1) === single);
console.log('PASS 04_linked_lists/reverse_between (js)');
