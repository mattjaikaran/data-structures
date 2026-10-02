/// Reverse a linked list. O(n) time, O(1) space.
/// Consumes the input and returns a new head.
///
/// The classic three-pointer technique, translated to Rust:
///   prev = None (will become new head)
///   curr = old head
///   loop: detach curr.next, point curr.next to prev, advance
pub fn reverse_list(mut head: Link) -> Link {
    let mut prev: Link = None;
    while let Some(mut node) = head {
        // Temporarily take ownership of `node.next`
        head = node.next.take();
        // Point this node backwards
        node.next = prev;
        prev = Some(node);
    }
    prev
}

/// 🟢 Reverse Linked List (LC #206)
pub fn reverse(head: Link) -> Link {
    reverse_list(head)
}

#[cfg(test)]
mod reverse_list_tests {
    use super::*;

    #[test]
    fn test_reverse_list() {
            assert_eq!(to_vec(&reverse_list(from_slice(&[1, 2, 3, 4, 5]))), vec![5, 4, 3, 2, 1]);
            assert_eq!(to_vec(&reverse_list(from_slice(&[1]))), vec![1]);
            assert_eq!(to_vec(&reverse_list(None)), vec![]);
        }
}
