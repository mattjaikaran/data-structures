/// 🟡 Remove Nth Node From End (LC #19)
/// Two-pass: first count length, then delete at (len - n).
/// O(n) time, O(1) space.
pub fn remove_nth_from_end(head: Link, n: usize) -> Link {
    let len = length(&head);
    if n > len { return head; }
    let target = len - n;

    let mut dummy = ListNode::new(0);
    dummy.next = head;
    let mut cur = &mut dummy.next;

    for _ in 0..target {
        cur = &mut cur.as_mut().unwrap().next;
    }
    let removed = cur.take().unwrap();
    *cur = removed.next;

    dummy.next
}

#[cfg(test)]
mod remove_nth_from_end_tests {
    use super::*;

    #[test]
    fn test_remove_nth_from_end() {
            assert_eq!(
                to_vec(&remove_nth_from_end(from_slice(&[1, 2, 3, 4, 5]), 2)),
                vec![1, 2, 3, 5]
            );
            assert_eq!(
                to_vec(&remove_nth_from_end(from_slice(&[1, 2]), 1)),
                vec![1]
            );
            assert_eq!(
                to_vec(&remove_nth_from_end(from_slice(&[1]), 1)),
                vec![]
            );
        }
}
