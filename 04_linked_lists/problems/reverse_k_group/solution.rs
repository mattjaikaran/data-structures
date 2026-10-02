/// 🔴 Reverse Nodes in k-Group (LC #25)
/// O(n) time, O(n/k) space (recursion).
pub fn reverse_k_group(head: Link, k: usize) -> Link {
    // Count available nodes
    let mut count = 0;
    let mut probe = &head;
    while let Some(n) = probe {
        count += 1;
        probe = &n.next;
        if count == k { break; }
    }
    if count < k { return head; }

    // Reverse k nodes
    let mut prev: Link = None;
    let mut cur = head;
    for _ in 0..k {
        if let Some(mut node) = cur {
            cur = node.next.take();
            node.next = prev;
            prev = Some(node);
        }
    }

    // Recursively process rest and connect to tail of reversed segment
    // `head` is now None (consumed), find new tail (prev is new head)
    // The last node of the reversed segment is the original head node
    // We need to find it and attach the recursive result
    let rest = reverse_k_group(cur, k);

    // Walk to the tail of the reversed segment to attach `rest`
    let mut tail = &mut prev;
    while tail.as_ref().is_some_and(|n| n.next.is_some()) {
        tail = &mut tail.as_mut().unwrap().next;
    }
    if let Some(ref mut t) = tail {
        t.next = rest;
    }

    prev
}

#[cfg(test)]
mod reverse_k_group_tests {
    use super::*;

    #[test]
    fn test_reverse_k_group() {
            assert_eq!(
                to_vec(&reverse_k_group(from_slice(&[1, 2, 3, 4, 5]), 2)),
                vec![2, 1, 4, 3, 5]
            );
            assert_eq!(
                to_vec(&reverse_k_group(from_slice(&[1, 2, 3, 4, 5]), 3)),
                vec![3, 2, 1, 4, 5]
            );
            assert_eq!(
                to_vec(&reverse_k_group(from_slice(&[1, 2, 3, 4, 5]), 1)),
                vec![1, 2, 3, 4, 5]
            );
        }
}
