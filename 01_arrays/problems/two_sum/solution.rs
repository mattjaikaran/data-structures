/// 🟢 Two Sum (LC #1)
/// Return indices of two numbers summing to `target`.
/// O(n) time, O(n) space.
pub fn two_sum(nums: &[i32], target: i32) -> Option<[usize; 2]> {
    let mut seen: HashMap<i32, usize> = HashMap::new();
    for (i, &n) in nums.iter().enumerate() {
        if let Some(&j) = seen.get(&(target - n)) {
            return Some([j, i]);
        }
        seen.insert(n, i);
    }
    None
}

#[cfg(test)]
mod two_sum_tests {
    use super::*;

    #[test]
    fn test_two_sum() {
            assert_eq!(two_sum(&[2, 7, 11, 15], 9), Some([0, 1]));
            assert_eq!(two_sum(&[3, 2, 4], 6), Some([1, 2]));
            assert_eq!(two_sum(&[3, 3], 6), Some([0, 1]));
            assert_eq!(two_sum(&[1, 2, 3], 7), None);
        }
}
