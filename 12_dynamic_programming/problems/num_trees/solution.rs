pub fn num_trees(n: usize) -> u64 {
    let mut dp = vec![0u64; n+1]; dp[0]=1; dp[1]=1;
    for i in 2..=n { for j in 1..=i { dp[i]+=dp[j-1]*dp[i-j]; } }
    dp[n]
}

#[cfg(test)]
mod num_trees_tests {
    use super::*;

    #[test]
    fn test_num_trees() { assert_eq!(num_trees(3),5); }
}
