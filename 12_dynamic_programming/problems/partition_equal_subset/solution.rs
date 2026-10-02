pub fn partition_equal_subset(nums: &[i32]) -> bool {
    let total: i32 = nums.iter().sum();
    if total%2!=0 { return false; }
    let target = (total/2) as usize;
    let mut dp = vec![false; target+1]; dp[0]=true;
    for &n in nums {
        let n=n as usize;
        for j in (n..=target).rev() { if dp[j-n] { dp[j]=true; } }
    }
    dp[target]
}

#[cfg(test)]
mod partition_equal_subset_tests {
    use super::*;

    #[test]
    fn test_partition() { assert!(partition_equal_subset(&[1,5,11,5])); assert!(!partition_equal_subset(&[1,2,3,5])); }
}
