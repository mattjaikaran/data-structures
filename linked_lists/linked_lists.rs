//! ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//! LINKED LISTS  ·  Rust
//! ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//!
//! Linked lists in Rust are famously tricky. The ownership model directly
//! conflicts with the typical pointer structure:
//!
//!   head -> node1 -> node2 -> node3 -> None
//!
//! Every arrow is an *owned* relationship — only ONE owner at a time.
//! `Box<T>` gives heap allocation + single ownership + automatic deallocation.
//! `Option<Box<Node>>` = nullable owned pointer = `Node*` in C.
//!
//! WHY NO DOUBLY LINKED LIST HERE?
//!   A doubly linked list requires each node to have TWO owning references
//!   (prev and next), which violates Rust's single-ownership rule.
//!   Solutions exist (Rc<RefCell<>>, unsafe raw pointers) but they obscure
//!   the learning purpose. See the Rust standard library's `LinkedList<T>`
//!   or the "too many linked lists" book for those patterns.
//!   For LRU Cache in Rust: use a HashMap + VecDeque, or `indexmap`.
//!
//! INTERVIEW APPROACH IN RUST
//!   Most interview problems on linked lists are solved by working on
//!   Vec<i32> proxies or by using the Box<Node> pattern shown here.

use std::collections::HashMap;

// ══════════════════════════════════════════════
// PART 1 — NODE + TYPE ALIAS
// ══════════════════════════════════════════════

#[derive(Debug, Clone, PartialEq)]
pub struct ListNode {
    pub val: i32,
    pub next: Link,
}

/// A nullable owned pointer to the next node.
/// `None` = null terminator.
pub type Link = Option<Box<ListNode>>;

impl ListNode {
    pub fn new(val: i32) -> Box<Self> {
        Box::new(ListNode { val, next: None })
    }
}

// ══════════════════════════════════════════════
// PART 2 — HELPER FUNCTIONS
// ══════════════════════════════════════════════

/// Build a linked list from a slice. O(n).
pub fn from_slice(vals: &[i32]) -> Link {
    let mut head: Link = None;
    // Build in reverse so we can prepend
    for &v in vals.iter().rev() {
        let mut node = ListNode::new(v);
        node.next = head;
        head = Some(node);
    }
    head
}

/// Convert a linked list to a Vec. O(n).
pub fn to_vec(mut head: &Link) -> Vec<i32> {
    let mut result = Vec::new();
    while let Some(node) = head {
        result.push(node.val);
        head = &node.next;
    }
    result
}

/// Count nodes. O(n).
pub fn length(mut head: &Link) -> usize {
    let mut count = 0;
    while let Some(node) = head {
        count += 1;
        head = &node.next;
    }
    count
}

// ══════════════════════════════════════════════
// PART 3 — CORE ALGORITHMS
// ══════════════════════════════════════════════

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

/// Find the middle node index (0-based). O(n).
/// Returns index of the middle node (second middle for even-length lists).
pub fn find_middle_index(head: &Link) -> usize {
    let n = length(head);
    n / 2
}

// ══════════════════════════════════════════════
// PART 4 — INTERVIEW PROBLEMS
// ══════════════════════════════════════════════

// ── 🟢 Easy ──────────────────────────────────

/// 🟢 Remove Duplicates from Sorted List (LC #83)
/// O(n) time, O(1) space.
pub fn remove_duplicates(mut head: Link) -> Link {
    let mut cur = &mut head;
    while let Some(node) = cur {
        // Skip all next nodes with the same value
        while node.next.as_ref().map_or(false, |n| n.val == node.val) {
            node.next = node.next.as_mut().unwrap().next.take();
        }
        cur = &mut cur.as_mut().unwrap().next;
    }
    head
}

/// 🟢 Reverse Linked List (LC #206)
pub fn reverse(head: Link) -> Link {
    reverse_list(head)
}

// ── 🟡 Medium ─────────────────────────────────

/// 🟡 Remove Nth Node From End (LC #19)
/// Two-pass: first count length, then delete at (len - n).
/// O(n) time, O(1) space.
pub fn remove_nth_from_end(head: Link, n: usize) -> Link {
    let len = length(&head);
    let target = len - n; // 0-based index to remove

    let mut dummy = ListNode::new(0);
    dummy.next = head;
    let mut cur = &mut dummy.next;

    for _ in 0..target {
        cur = &mut cur.as_mut().unwrap().next;
    }
    // Remove the node at `target`
    let removed_next = cur.as_mut().unwrap().next.take();
    *cur = removed_next.and_then(|n| {
        // put back n.next as the new current.next
        let mut placeholder = n;
        Some(placeholder).map(|mut node| {
            // Actually we just want node.next
            node.next.take(); // doesn't compile simply — use the approach below
            node
        })
    });
    // Cleaner approach: just skip the target node
    let skip_next = cur.as_mut().unwrap().next.take();
    *cur = skip_next;

    dummy.next
}

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

/// 🟡 Find the Duplicate Number (LC #287) — Floyd's on array
/// O(n) time, O(1) space.
pub fn find_duplicate(nums: &[usize]) -> usize {
    let mut slow = nums[0];
    let mut fast = nums[0];
    loop {
        slow = nums[slow];
        fast = nums[nums[fast]];
        if slow == fast { break; }
    }
    slow = nums[0];
    while slow != fast {
        slow = nums[slow];
        fast = nums[fast];
    }
    slow
}

// ── 🔴 Hard ────────────────────────────────────

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
    while tail.as_ref().map_or(false, |n| n.next.is_some()) {
        tail = &mut tail.as_mut().unwrap().next;
    }
    if let Some(ref mut t) = tail {
        t.next = rest;
    }

    prev
}

/// 🔴 Merge K Sorted Lists (LC #23) — divide and conquer.
/// O(n log k) time.
pub fn merge_k_lists(lists: Vec<Link>) -> Link {
    if lists.is_empty() { return None; }
    if lists.len() == 1 {
        return lists.into_iter().next().unwrap();
    }
    let mid = lists.len() / 2;
    let right_half = lists[mid..].to_vec();
    let left_half: Vec<Link> = lists.into_iter().take(mid).collect();
    let left = merge_k_lists(left_half);
    let right = merge_k_lists(right_half);
    merge_sorted(left, right)
}

// ══════════════════════════════════════════════
// PART 5 — TESTS
// ══════════════════════════════════════════════

#[cfg(test)]
mod tests {
    use super::*;

    // ── helpers ───────────────────────────────
    #[test]
    fn test_from_slice_to_vec() {
        assert_eq!(to_vec(&from_slice(&[1, 2, 3, 4, 5])), vec![1, 2, 3, 4, 5]);
        assert_eq!(to_vec(&from_slice(&[])), vec![]);
        assert_eq!(to_vec(&from_slice(&[1])), vec![1]);
    }

    #[test]
    fn test_length() {
        assert_eq!(length(&from_slice(&[1, 2, 3])), 3);
        assert_eq!(length(&None), 0);
    }

    // ── reverse_list ──────────────────────────
    #[test]
    fn test_reverse_list() {
        assert_eq!(to_vec(&reverse_list(from_slice(&[1, 2, 3, 4, 5]))), vec![5, 4, 3, 2, 1]);
        assert_eq!(to_vec(&reverse_list(from_slice(&[1]))), vec![1]);
        assert_eq!(to_vec(&reverse_list(None)), vec![]);
    }

    // ── merge_sorted ──────────────────────────
    #[test]
    fn test_merge_sorted() {
        let merged = merge_sorted(from_slice(&[1, 3, 5]), from_slice(&[2, 4, 6]));
        assert_eq!(to_vec(&merged), vec![1, 2, 3, 4, 5, 6]);

        let merged2 = merge_sorted(None, from_slice(&[1, 2]));
        assert_eq!(to_vec(&merged2), vec![1, 2]);

        let merged3 = merge_sorted(from_slice(&[1, 2]), None);
        assert_eq!(to_vec(&merged3), vec![1, 2]);
    }

    // ── remove_duplicates ─────────────────────
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

    // ── remove_nth_from_end ───────────────────
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

    // ── add_two_numbers ───────────────────────
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

    // ── sort_list ─────────────────────────────
    #[test]
    fn test_sort_list() {
        assert_eq!(to_vec(&sort_list(from_slice(&[4, 2, 1, 3]))), vec![1, 2, 3, 4]);
        assert_eq!(to_vec(&sort_list(from_slice(&[1]))), vec![1]);
        assert_eq!(to_vec(&sort_list(None)), vec![]);
    }

    // ── find_duplicate ────────────────────────
    #[test]
    fn test_find_duplicate() {
        assert_eq!(find_duplicate(&[1, 3, 4, 2, 2]), 2);
        assert_eq!(find_duplicate(&[3, 1, 3, 4, 2]), 3);
    }

    // ── reverse_k_group ───────────────────────
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

    // ── merge_k_lists ─────────────────────────
    #[test]
    fn test_merge_k_lists() {
        let lists = vec![
            from_slice(&[1, 4, 5]),
            from_slice(&[1, 3, 4]),
            from_slice(&[2, 6]),
        ];
        assert_eq!(to_vec(&merge_k_lists(lists)), vec![1, 1, 2, 3, 4, 4, 5, 6]);
        assert_eq!(to_vec(&merge_k_lists(vec![])), vec![]);
    }
}
