import { SNode } from '../../fundamentals/singly_linked_list/solution.js';

/** @param {SNode | null} head */
export function swapPairs(head) {
  const dummy = new SNode(0, head);
  let prev = dummy;
  while (prev.next && prev.next.next) {
    const a = prev.next;
    const b = prev.next.next;
    prev.next = b;
    a.next = b.next;
    b.next = a;
    prev = a;
  }
  return dummy.next;
}
