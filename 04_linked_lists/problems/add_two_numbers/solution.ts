import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🟡 Add Two Numbers (LC #2) */
export function addTwoNumbers(l1: SNode | null, l2: SNode | null): SNode | null {
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
