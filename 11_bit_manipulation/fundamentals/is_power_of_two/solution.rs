pub fn is_power_of_two(n: i32) -> bool { n > 0 && (n & (n-1)) == 0 }

#[cfg(test)]
mod is_power_of_two_tests {
    use super::*;

    #[test]
    fn test_power() { assert!(is_power_of_two(16)&&!is_power_of_two(6)); }
}
