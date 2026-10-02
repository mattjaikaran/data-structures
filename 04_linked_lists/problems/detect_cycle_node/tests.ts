function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { fromArray } from '../../fundamentals/singly_linked_list/solution.ts';
import { detectCycleNode } from '../../problems/detect_cycle_node/solution.ts';



const head = fromArray([1, 2, 3])!;
const entry = head.next!;
entry.next!.next = entry;
assert(detectCycleNode(head) === entry);
assert(detectCycleNode(fromArray([1, 2])) === null);
console.log('PASS 04_linked_lists/detect_cycle_node (ts)');
