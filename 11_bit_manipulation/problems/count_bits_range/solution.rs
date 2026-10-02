pub fn count_bits_range(n: usize) -> Vec<usize> {
    let mut dp=vec![0usize;n+1];
    for i in 1..=n { dp[i]=dp[i>>1]+(i&1); }
    dp
}

#[cfg(test)]
mod count_bits_range_tests {
    use super::*;

    #[test]
    fn test_count_range() { assert_eq!(count_bits_range(5),vec![0,1,1,2,1,2]); }
}
