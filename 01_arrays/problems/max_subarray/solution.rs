/// Kadane's Algorithm — maximum contiguous subarray sum.
/// O(n) time, O(1) space.
///
/// At each index: current = max(num, current + num)
/// If extending is worse than starting fresh, start fresh.
pub fn max_subarray(nums: &[i32]) -> i32 {
    let mut best = nums[0];
    let mut current = nums[0];
    for &n in &nums[1..] {
        current = n.max(current + n);
        best = best.max(current);
    }
    best
}

#[cfg(test)]
mod max_subarray_tests {
    use super::*;

    #[test]
    fn test_max_subarray() {
            assert_eq!(max_subarray(&[-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
            assert_eq!(max_subarray(&[-1, -2, -3]), -1);  // all negative
            assert_eq!(max_subarray(&[1]), 1);
            assert_eq!(max_subarray(&[5, -3, 5]), 7);     // skip middle negative
        }
}
