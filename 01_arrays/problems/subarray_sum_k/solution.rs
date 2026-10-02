/// 🟡 Subarray Sum Equals K (LC #560)
/// Count subarrays whose sum equals k.
/// O(n) time, O(n) space — prefix sum + hash map.
pub fn subarray_sum_k(nums: &[i32], k: i32) -> i32 {
    let mut count = 0;
    let mut prefix = 0;
    let mut freq: HashMap<i32, i32> = HashMap::from([(0, 1)]);
    for &n in nums {
        prefix += n;
        count += freq.get(&(prefix - k)).copied().unwrap_or(0);
        *freq.entry(prefix).or_insert(0) += 1;
    }
    count
}

#[cfg(test)]
mod subarray_sum_k_tests {
    use super::*;

    #[test]
    fn test_subarray_sum_k() {
            assert_eq!(subarray_sum_k(&[1, 1, 1], 2), 2);
            assert_eq!(subarray_sum_k(&[1, 2, 3], 3), 2);
            assert_eq!(subarray_sum_k(&[-1, -1, 1], 0), 1);
        }
}
