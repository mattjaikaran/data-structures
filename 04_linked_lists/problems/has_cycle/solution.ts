import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

export function hasCycle(head: SNode | null): boolean {
  let slow = head, fast = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}
