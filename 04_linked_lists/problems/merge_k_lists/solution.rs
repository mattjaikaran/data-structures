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

#[cfg(test)]
mod merge_k_lists_tests {
    use super::*;

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
