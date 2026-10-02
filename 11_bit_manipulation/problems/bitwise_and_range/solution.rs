pub fn bitwise_and_range(mut left: i32, mut right: i32) -> i32 {
    let mut shift=0;
    while left!=right { left>>=1; right>>=1; shift+=1; }
    left<<shift
}

#[cfg(test)]
mod bitwise_and_range_tests {
    use super::*;

    #[test]
    fn test_and_range() { assert_eq!(bitwise_and_range(5,7),4); }
}
