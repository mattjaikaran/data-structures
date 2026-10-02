import { mergeSorted } from '../../problems/merge_sorted/solution.js';

/** @param {SNode | null} head */
export function sortList(head) {
  if (!head?.next) return head;
  let slow = head, fast = head.next;
  while (fast && fast.next) { slow = slow.next; fast = fast.next.next; }
  const mid = slow.next;
  slow.next = null;
  return mergeSorted(sortList(head), sortList(mid));
}
