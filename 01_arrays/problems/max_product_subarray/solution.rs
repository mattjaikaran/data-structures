/// 🟡 Maximum Product Subarray (LC #152)
/// Track both min and max — a negative flips the sign.
/// O(n) time, O(1) space.
pub fn max_product_subarray(nums: &[i32]) -> i32 {
    let (mut best, mut cur_max, mut cur_min) = (nums[0], nums[0], nums[0]);
    for &n in &nums[1..] {
        let (a, b, c) = (n, cur_max * n, cur_min * n);
        cur_max = a.max(b).max(c);
        cur_min = a.min(b).min(c);
        best = best.max(cur_max);
    }
    best
}

#[cfg(test)]
mod max_product_subarray_tests {
    use super::*;

    #[test]
    fn test_max_product_subarray() {
            assert_eq!(max_product_subarray(&[2, 3, -2, 4]), 6);
            assert_eq!(max_product_subarray(&[-2, 0, -1]), 0);
            assert_eq!(max_product_subarray(&[-2, 3, -4]), 24);
        }
}
