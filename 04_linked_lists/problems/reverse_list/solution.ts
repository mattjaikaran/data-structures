import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';

export function reverseList(head: SNode | null): SNode | null {
  let prev: SNode | null = null, cur = head;
  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}
