/// 🟡 Product of Array Except Self (LC #238)
/// No division. O(n) time, O(1) extra space.
pub fn product_except_self(nums: &[i32]) -> Vec<i32> {
    let n = nums.len();
    let mut result = vec![1i32; n];
    // Left pass
    let mut prefix = 1;
    for i in 0..n {
        result[i] = prefix;
        prefix *= nums[i];
    }
    // Right pass
    let mut suffix = 1;
    for i in (0..n).rev() {
        result[i] *= suffix;
        suffix *= nums[i];
    }
    result
}

#[cfg(test)]
mod product_except_self_tests {
    use super::*;

    #[test]
    fn test_product_except_self() {
            assert_eq!(product_except_self(&[1, 2, 3, 4]), vec![24, 12, 8, 6]);
            assert_eq!(product_except_self(&[0, 1]), vec![1, 0]);
        }
}
