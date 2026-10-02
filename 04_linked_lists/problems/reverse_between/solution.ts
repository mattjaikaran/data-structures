import { SNode } from '../../fundamentals/singly_linked_list/solution.ts';
export function reverseBetween(head: SNode | null, left: number, right: number): SNode | null {
  let before: SNode | null = null, current = head;
  for (let position = 1; position < left; position++) { before = current; current = current!.next; }
  const tail = current!;
  let reversed: SNode | null = null;
  for (let position = left; position <= right; position++) {
    const next: SNode | null = current!.next;
    current!.next = reversed;
    reversed = current; current = next;
  }
  tail.next = current;
  if (before) before.next = reversed;
  else head = reversed;
  return head;
}
