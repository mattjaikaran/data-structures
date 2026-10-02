pub fn count_set_bits(mut n: u32) -> u32 { let mut c=0; while n>0{n&=n-1;c+=1;} c }

#[cfg(test)]
mod count_bits_tests {
    use super::*;

    #[test]
    fn test_count_set_bits() { assert_eq!(count_set_bits(0), 0); assert_eq!(count_set_bits(0b10101), 3); assert_eq!(count_set_bits(u32::MAX), 32); }
}
