function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { hasCycle } from '../../problems/has_cycle/solution.ts';
import { fromArray, SNode } from '../../fundamentals/singly_linked_list/solution.ts';



assert(!hasCycle(fromArray([1, 2, 3])), "no cycle");
const n1 = new SNode(1), n2 = new SNode(2), n3 = new SNode(3);
n1.next = n2;
n2.next = n3;
n3.next = n2;
assert(hasCycle(n1), "has cycle");
assert(!hasCycle(null), "null no cycle");
console.log('PASS 04_linked_lists/has_cycle (ts)');
