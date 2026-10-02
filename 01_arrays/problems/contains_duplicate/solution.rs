/// 🟢 Contains Duplicate (LC #217)
/// O(n) time, O(n) space.
pub fn contains_duplicate(nums: &[i32]) -> bool {
    let mut seen = std::collections::HashSet::new();
    nums.iter().any(|n| !seen.insert(n))
}

#[cfg(test)]
mod contains_duplicate_tests {
    use super::*;

    #[test]
    fn test_contains_duplicate() {
            assert!(contains_duplicate(&[1, 2, 3, 1]));
            assert!(!contains_duplicate(&[1, 2, 3, 4]));
            assert!(!contains_duplicate(&[1]));
        }
}
