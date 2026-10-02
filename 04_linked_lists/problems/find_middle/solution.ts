import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

export function findMiddle(head: SNode | null): SNode | null {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }
  return slow;
}
