import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

/** 🔴 Linked List Cycle II (LC #142) — find cycle entry node */
export function detectCycleNode(head: SNode | null): SNode | null {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next; fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) { slow = slow!.next; fast = fast!.next; }
      return slow;
    }
  }
  return null;
}
