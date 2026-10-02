/// 🟢 Remove Duplicates from Sorted List (LC #83)
/// O(n) time, O(1) space.
pub fn remove_duplicates(mut head: Link) -> Link {
    let mut cur = &mut head;
    while let Some(node) = cur {
        // Skip all next nodes with the same value
        while node.next.as_ref().is_some_and(|n| n.val == node.val) {
            node.next = node.next.as_mut().unwrap().next.take();
        }
        cur = &mut cur.as_mut().unwrap().next;
    }
    head
}

#[cfg(test)]
mod remove_duplicates_tests {
    use super::*;

    #[test]
    fn test_remove_duplicates() {
            assert_eq!(
                to_vec(&remove_duplicates(from_slice(&[1, 1, 2, 3, 3]))),
                vec![1, 2, 3]
            );
            assert_eq!(
                to_vec(&remove_duplicates(from_slice(&[1, 1, 1]))),
                vec![1]
            );
            assert_eq!(
                to_vec(&remove_duplicates(from_slice(&[1, 2, 3]))),
                vec![1, 2, 3]
            );
        }
}
