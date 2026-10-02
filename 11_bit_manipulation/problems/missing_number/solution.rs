pub fn missing_number(nums: &[usize]) -> usize {
    let mut res=nums.len();
    for (i,&n) in nums.iter().enumerate() { res^=i^n; }
    res
}

#[cfg(test)]
mod missing_number_tests {
    use super::*;

    #[test]
    fn test_missing() { assert_eq!(missing_number(&[3,0,1]),2); }
}
