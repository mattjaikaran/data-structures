/// 🟡 Add Two Numbers (LC #2)
/// Digits in reverse order. Simulate addition with carry.
/// O(max(m,n)) time, O(max(m,n)) space.
pub fn add_two_numbers(l1: Link, l2: Link) -> Link {
    let mut dummy = ListNode::new(0);
    let mut cur = &mut dummy.next;
    let mut a = l1;
    let mut b = l2;
    let mut carry = 0i32;

    loop {
        let va = a.as_ref().map_or(0, |n| n.val);
        let vb = b.as_ref().map_or(0, |n| n.val);
        if a.is_none() && b.is_none() && carry == 0 { break; }

        let sum = va + vb + carry;
        carry = sum / 10;
        *cur = Some(ListNode::new(sum % 10));
        cur = &mut cur.as_mut().unwrap().next;

        a = a.and_then(|mut n| n.next.take());
        b = b.and_then(|mut n| n.next.take());
    }
    dummy.next
}

#[cfg(test)]
mod add_two_numbers_tests {
    use super::*;

    #[test]
    fn test_add_two_numbers() {
            // 342 + 465 = 807
            assert_eq!(
                to_vec(&add_two_numbers(from_slice(&[2, 4, 3]), from_slice(&[5, 6, 4]))),
                vec![7, 0, 8]
            );
            // 0 + 0 = 0
            assert_eq!(
                to_vec(&add_two_numbers(from_slice(&[0]), from_slice(&[0]))),
                vec![0]
            );
            // 999 + 1 = 1000
            assert_eq!(
                to_vec(&add_two_numbers(from_slice(&[9, 9, 9]), from_slice(&[1]))),
                vec![0, 0, 0, 1]
            );
        }
}
