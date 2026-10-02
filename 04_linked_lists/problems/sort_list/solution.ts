import { mergeSorted } from '../../problems/merge_sorted/solution.ts';
import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🟡 Sort List (LC #148) — merge sort */
export function sortList(head: SNode | null): SNode | null {
  if (!head?.next) return head;
  let slow = head, fast: SNode | null = head.next;
  while (fast && fast.next) { slow = slow.next!; fast = fast.next.next; }
  const mid = slow.next;
  slow.next = null;
  return mergeSorted(sortList(head), sortList(mid));
}
