export function reverseBetween(head, left, right) {
  let before = null, current = head;
  for (let position = 1; position < left; position++) { before = current; current = current.next; }
  const tail = current;
  let reversed = null;
  for (let position = left; position <= right; position++) {
    const next = current.next;
    current.next = reversed;
    reversed = current; current = next;
  }
  tail.next = current;
  if (before) before.next = reversed;
  else head = reversed;
  return head;
}
