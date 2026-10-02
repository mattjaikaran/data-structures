pub fn house_robber(nums: &[i32]) -> i32 {
    let (mut a, mut b) = (0, 0);
    for &n in nums { let c=b.max(a+n); a=b; b=c; }
    b
}

#[cfg(test)]
mod house_robber_tests {
    use super::*;

    #[test]
    fn test_house_robber() { assert_eq!(house_robber(&[2,7,9,3,1]),12); assert_eq!(house_robber(&[1,2,3,1]),4); }
}
