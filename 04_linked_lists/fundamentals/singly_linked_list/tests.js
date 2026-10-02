import { SinglyLinkedList } from './solution.js';
function assert(condition, message = "Assertion failed") { if (!condition) throw new Error(message); }

function deepEq(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}
const ll = new SinglyLinkedList();
[1, 2, 3, 4, 5].forEach(v => ll.append(v));
assert(deepEq(ll.toArray(), [1, 2, 3, 4, 5]), "sll append");
ll.prepend(0);
assert(deepEq(ll.toArray(), [0, 1, 2, 3, 4, 5]), "sll prepend");
assert(ll.popFront() === 0, "sll popFront");
ll.removeValue(3);
assert(deepEq(ll.toArray(), [1, 2, 4, 5]), "sll removeValue");
ll.reverse();
assert(deepEq(ll.toArray(), [5, 4, 2, 1]), "sll reverse");
console.log('PASS 04_linked_lists/singly_linked_list (js)');
