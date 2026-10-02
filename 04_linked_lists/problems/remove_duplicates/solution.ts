import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🟢 Remove Duplicates from Sorted List (LC #83) */
export function removeDuplicates(head: SNode | null): SNode | null {
  let cur = head;
  while (cur && cur.next) {
    if (cur.val === cur.next.val) cur.next = cur.next.next;
    else cur = cur.next;
  }
  return head;
}
