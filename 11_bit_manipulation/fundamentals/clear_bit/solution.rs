pub fn clear_bit(n: i32, i: u32) -> i32 { n & !(1 << i) }

#[cfg(test)]
mod clear_bit_tests {
    use super::*;

    #[test]
    fn test_bits() { assert_eq!(get_bit(0b1010,1),1); assert_eq!(set_bit(0b1010,0),0b1011); assert_eq!(clear_bit(0b1011,0),0b1010); }
}
