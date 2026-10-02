function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray } from '../../fundamentals/singly_linked_list/solution.js';
import { detectCycleNode } from '../../problems/detect_cycle_node/solution.js';



const head = fromArray([1, 2, 3]);
const entry = head.next;
head.next.next.next = entry;
assert(detectCycleNode(head) === entry);
assert(detectCycleNode(fromArray([1, 2])) === null);
console.log('PASS 04_linked_lists/detect_cycle_node (js)');
