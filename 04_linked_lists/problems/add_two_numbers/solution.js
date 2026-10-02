import { SNode } from '../../fundamentals/singly_linked_list/solution.js';

/**
 * @param {SNode | null} l1
 * @param {SNode | null} l2
 */
export function addTwoNumbers(l1, l2) {
  const dummy = new SNode(0);
  let cur = dummy, carry = 0;
  while (l1 || l2 || carry) {
    let val = carry;
    if (l1) { val += l1.val; l1 = l1.next; }
    if (l2) { val += l2.val; l2 = l2.next; }
    carry = Math.floor(val / 10);
    cur.next = new SNode(val % 10);
    cur = cur.next;
  }
  return dummy.next;
}
