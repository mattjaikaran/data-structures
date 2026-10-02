pub fn word_break(s: &str, words: &[&str]) -> bool {
    let word_set: std::collections::HashSet<&str> = words.iter().copied().collect();
    let n = s.len();
    let mut dp = vec![false; n+1]; dp[0]=true;
    for i in 1..=n {
        for j in 0..i {
            if dp[j] && word_set.contains(&s[j..i]) { dp[i]=true; break; }
        }
    }
    dp[n]
}

#[cfg(test)]
mod word_break_tests {
    use super::*;

    #[test]
    fn test_word_break() { assert!(word_break("leetcode",&["leet","code"])); }
}
