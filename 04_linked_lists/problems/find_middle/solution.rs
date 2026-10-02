/// Find the middle node index (0-based). O(n).
/// Returns index of the middle node (second middle for even-length lists).
pub fn find_middle_index(head: &Link) -> usize {
    let n = length(head);
    n / 2
}

#[cfg(test)]
mod find_middle_tests {
    use super::*;

    #[test]
    fn test_find_middle() { assert_eq!(find_middle_index(&from_slice(&[1,2,3,4])), 2); assert_eq!(find_middle_index(&from_slice(&[1,2,3])), 1); }
}
