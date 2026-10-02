/// 🟡 Sort List (LC #148) — merge sort.
/// O(n log n) time, O(log n) space (recursion stack).
pub fn sort_list(head: Link) -> Link {
    // Base case: 0 or 1 nodes
    if head.is_none() || head.as_ref().unwrap().next.is_none() {
        return head;
    }

    // Split into two halves using slow/fast
    let (left, right) = split_half(head);
    let sorted_left = sort_list(left);
    let sorted_right = sort_list(right);
    merge_sorted(sorted_left, sorted_right)
}

fn split_half(head: Link) -> (Link, Link) {
    let mut len = 0;
    let mut probe = &head;
    while let Some(n) = probe { len += 1; probe = &n.next; }

    let mid = len / 2;
    let mut cur = head;
    let mut left_tail: Option<*mut ListNode> = None;

    // Advance mid steps and remember the mid-1 node
    let mut count = 0;
    let mut walker = &mut cur;
    while count < mid {
        if let Some(ref mut n) = walker {
            left_tail = Some(n.as_mut() as *mut ListNode);
            walker = &mut n.next;
        }
        count += 1;
    }

    // Detach right half
    let right = if let Some(ptr) = left_tail {
        unsafe { (*ptr).next.take() }
    } else {
        None
    };

    (cur, right)
}

#[cfg(test)]
mod sort_list_tests {
    use super::*;

    #[test]
    fn test_sort_list() {
            assert_eq!(to_vec(&sort_list(from_slice(&[4, 2, 1, 3]))), vec![1, 2, 3, 4]);
            assert_eq!(to_vec(&sort_list(from_slice(&[1]))), vec![1]);
            assert_eq!(to_vec(&sort_list(None)), vec![]);
        }
}
