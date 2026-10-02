function assert(condition, message = "Assertion failed") {
  if (!condition) throw new Error(message ?? "Assertion failed");
}
import { DoublyLinkedList } from '../../fundamentals/doubly_linked_list/solution.js';



const dll = new DoublyLinkedList();
dll.appendFront(0, 0);
dll.appendFront(1, 1);
assert(dll.size === 2, "dll size");
dll.removeBack();
assert(dll.size === 1, "dll removeBack");
console.log('PASS 04_linked_lists/doubly_linked_list (js)');
