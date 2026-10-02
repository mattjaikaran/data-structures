pub fn num_distinct(s: &str, t: &str) -> usize {
    let t: Vec<char> = t.chars().collect(); let n = t.len();
    let mut dp = vec![0usize; n + 1]; dp[0] = 1;
    for c in s.chars() { for j in (1..=n).rev() { if c == t[j-1] { dp[j] += dp[j-1]; } } }
    dp[n]
}

#[cfg(test)]
mod num_distinct_tests {
    use super::*;

    #[test]
    fn test_num_distinct() {
            assert_eq!(num_distinct("rabbbit","rabbit"), 3);
            assert_eq!(num_distinct("babgbag","bag"), 5);
        }
}
