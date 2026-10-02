pub fn reverse_bits(mut n: u32) -> u32 {
    let mut res=0u32;
    for _ in 0..32 { res=(res<<1)|(n&1); n>>=1; }
    res
}

#[cfg(test)]
mod reverse_bits_tests {
    use super::*;

    #[test]
    fn test_reverse() { assert_eq!(reverse_bits(43261596),964176192); }
}
