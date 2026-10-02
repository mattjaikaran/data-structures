pub fn subsets_bitmask(nums: &[i32]) -> Vec<Vec<i32>> {
    (0..1<<nums.len()).map(|mask| (0..nums.len()).filter(|&i|(mask>>i)&1==1).map(|i|nums[i]).collect()).collect()
}

#[cfg(test)]
mod subsets_bitmask_tests {
    use super::*;

    #[test]
    fn test_subsets() { assert_eq!(subsets_bitmask(&[1,2,3]).len(),8); }
}
