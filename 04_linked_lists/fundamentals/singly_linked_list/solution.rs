#[derive(Debug, Clone, PartialEq)]
pub struct ListNode {
    pub val: i32,
    pub next: Link,
}

impl ListNode {
    pub fn new(val: i32) -> Box<Self> {
        Box::new(ListNode { val, next: None })
    }
}

/// A nullable owned pointer to the next node.
/// `None` = null terminator.
pub type Link = Option<Box<ListNode>>;

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

#[cfg(test)]
mod singly_linked_list_tests {
    use super::*;

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
}
