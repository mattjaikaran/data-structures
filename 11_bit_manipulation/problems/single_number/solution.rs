pub fn single_number(nums: &[i32]) -> i32 { nums.iter().fold(0,|a,&b|a^b) }

#[cfg(test)]
mod single_number_tests {
    use super::*;

    #[test]
    fn test_single() { assert_eq!(single_number(&[4,1,2,1,2]),4); }
}
