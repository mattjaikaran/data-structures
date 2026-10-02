import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🟡 Remove Nth Node From End (LC #19) */
export function removeNthFromEnd(head: SNode | null, n: number): SNode | null {
  const dummy = new SNode(0, head);
  let fast: SNode | null = dummy, slow: SNode | null = dummy;
  for (let i = 0; i <= n; i++) fast = fast!.next;
  while (fast) { fast = fast.next; slow = slow!.next; }
  slow!.next = slow!.next!.next;
  return dummy.next;
}
