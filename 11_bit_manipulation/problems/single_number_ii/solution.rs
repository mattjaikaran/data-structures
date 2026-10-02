pub fn single_number_ii(nums: &[i32]) -> i32 {
    let (mut ones, mut twos) = (0i32, 0i32);
    for &n in nums { ones=(ones^n)&!twos; twos=(twos^n)&!ones; }
    ones
}

#[cfg(test)]
mod single_number_ii_tests {
    use super::*;

    #[test]
    fn test_single_ii() { assert_eq!(single_number_ii(&[2,2,3,2]),3); }
}
