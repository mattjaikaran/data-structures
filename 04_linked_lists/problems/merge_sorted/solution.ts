import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

export function mergeSorted(l1: SNode | null, l2: SNode | null): SNode | null {
  const dummy = new SNode(0);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val <= l2.val) { cur.next = l1; l1 = l1.next; }
    else { cur.next = l2; l2 = l2.next; }
    cur = cur.next;
  }
  cur.next = l1 ?? l2;
  return dummy.next;
}
