pub fn house_robber_ii(nums: &[i32]) -> i32 {
    fn rob(arr: &[i32]) -> i32 { let (mut a,mut b)=(0,0); for &n in arr {let c=b.max(a+n);a=b;b=c;} b }
    nums[0].max(rob(&nums[..nums.len()-1])).max(rob(&nums[1..]))
}

#[cfg(test)]
mod house_robber_ii_tests {
    use super::*;

    #[test]
    fn test_house_robber_ii() { assert_eq!(house_robber_ii(&[2,3,2]),3); assert_eq!(house_robber_ii(&[1,2,3,1]),4); }
}
