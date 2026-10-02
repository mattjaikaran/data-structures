/// Reverse a valid one-based interval by moving existing owned nodes.
pub fn reverse_between(mut head: Link, left: usize, right: usize) -> Link {
    let mut before = &mut head;
    for _ in 1..left { before = &mut before.as_mut().unwrap().next; }
    let mut end = &mut *before;
    for _ in left..=right { end = &mut end.as_mut().unwrap().next; }
    let mut reversed = end.take();
    let mut current = before.take();
    while let Some(mut node) = current {
        current = node.next.take();
        node.next = reversed;
        reversed = Some(node);
    }
    *before = reversed;
    head
}
#[cfg(test)]
mod reverse_between_tests {
    use super::*;
    #[test]
    fn preserves_nodes_and_boundaries() {
        let head = from_slice(&[1, 2, 3, 4, 5]);
        let original = head.as_ref().unwrap().as_ref() as *const ListNode;
        let result = reverse_between(head, 2, 4);
        assert_eq!(to_vec(&result), vec![1, 4, 3, 2, 5]);
        assert_eq!(result.as_ref().unwrap().as_ref() as *const ListNode, original);
        assert_eq!(to_vec(&reverse_between(from_slice(&[1, 2, 3]), 1, 3)), vec![3, 2, 1]);
        assert_eq!(to_vec(&reverse_between(from_slice(&[1]), 1, 1)), vec![1]);
    }
}
