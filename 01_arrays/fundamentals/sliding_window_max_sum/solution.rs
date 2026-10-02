/// Sliding window maximum sum of a window of size `k`.
/// O(n) time, O(1) space.
pub fn sliding_window_max_sum(nums: &[i32], k: usize) -> i32 {
    let mut window: i32 = nums[..k].iter().sum();
    let mut best = window;
    for i in k..nums.len() {
        window += nums[i] - nums[i - k];
        best = best.max(window);
    }
    best
}

#[cfg(test)]
mod sliding_window_max_sum_tests {
    use super::*;

    #[test]
    fn test_sliding_window() {
            assert_eq!(sliding_window_max_sum(&[2, 1, 5, 1, 3, 2], 3), 9);
            assert_eq!(sliding_window_max_sum(&[1, 2], 1), 2);
        }
}
