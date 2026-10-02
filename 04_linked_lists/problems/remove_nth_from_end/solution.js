import { SNode } from '../../fundamentals/singly_linked_list/solution.js';

/**
 * @param {SNode | null} head
 * @param {number} n
 */
export function removeNthFromEnd(head, n) {
  const dummy = new SNode(0, head);
  let fast = dummy, slow = dummy;
  for (let i = 0; i <= n; i++) fast = fast.next;
  while (fast) { fast = fast.next; slow = slow.next; }
  slow.next = slow.next.next;
  return dummy.next;
}
