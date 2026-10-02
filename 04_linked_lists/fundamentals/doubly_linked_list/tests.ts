function assert(condition: unknown, message?: string): void {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { DoublyLinkedList } from '../../fundamentals/doubly_linked_list/solution.ts';



const dll = new DoublyLinkedList();
dll.appendFront(0, 0);
dll.appendFront(1, 1);
assert(dll.size === 2, "dll size");
dll.removeBack();
assert(dll.size === 1, "dll removeBack");
console.log('PASS 04_linked_lists/doubly_linked_list (ts)');
