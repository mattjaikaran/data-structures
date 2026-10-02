/// Merge two sorted linked lists. O(m+n) time, O(1) space.
/// Uses a dummy head to avoid special-casing the first node.
pub fn merge_sorted(l1: Link, l2: Link) -> Link {
    let mut dummy = ListNode::new(0);
    let mut cur = &mut dummy.next;
    let mut a = l1;
    let mut b = l2;

    loop {
        match (a, b) {
            (None, rest) => { *cur = rest; break; }
            (rest, None) => { *cur = rest; break; }
            (Some(mut na), Some(mut nb)) => {
                if na.val <= nb.val {
                    a = na.next.take();
                    b = Some(nb);
                    *cur = Some(na);
                } else {
                    b = nb.next.take();
                    a = Some(na);
                    *cur = Some(nb);
                }
                cur = &mut cur.as_mut().unwrap().next;
            }
        }
    }
    dummy.next
}

#[cfg(test)]
mod merge_sorted_tests {
    use super::*;

    #[test]
    fn test_merge_sorted() {
            let merged = merge_sorted(from_slice(&[1, 3, 5]), from_slice(&[2, 4, 6]));
            assert_eq!(to_vec(&merged), vec![1, 2, 3, 4, 5, 6]);
    
            let merged2 = merge_sorted(None, from_slice(&[1, 2]));
            assert_eq!(to_vec(&merged2), vec![1, 2]);
    
            let merged3 = merge_sorted(from_slice(&[1, 2]), None);
            assert_eq!(to_vec(&merged3), vec![1, 2]);
        }
}
