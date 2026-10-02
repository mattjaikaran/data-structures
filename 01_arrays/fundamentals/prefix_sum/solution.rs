/// Prefix sum array.
/// `prefix[i]` = sum of `arr[0..i]`  (`prefix[0]` = 0 as sentinel).
/// Range sum `[l, r]` = `prefix[r+1] - prefix[l]`.
/// O(n) build, O(1) query.
pub fn prefix_sum(nums: &[i32]) -> Vec<i32> {
    let mut prefix = vec![0i32; nums.len() + 1];
    for (i, &n) in nums.iter().enumerate() {
        prefix[i + 1] = prefix[i] + n;
    }
    prefix
}

/// Range sum query using a precomputed prefix array.
pub fn range_sum(prefix: &[i32], l: usize, r: usize) -> i32 {
    prefix[r + 1] - prefix[l]
}

#[cfg(test)]
mod prefix_sum_tests {
    use super::*;

    #[test]
    fn test_prefix_sum() {
            let p = prefix_sum(&[1, 2, 3, 4, 5]);
            assert_eq!(range_sum(&p, 1, 3), 9);  // 2+3+4
            assert_eq!(range_sum(&p, 0, 4), 15); // total
            assert_eq!(range_sum(&p, 2, 2), 3);  // single element
        }
}
