pub fn longest_common_prefix(strs: &[&str]) -> String {
    if strs.is_empty() { return String::new(); }
    let mut prefix = strs[0].to_string();
    for s in &strs[1..] { while !s.starts_with(&prefix as &str) { prefix.pop(); } }
    prefix
}

#[cfg(test)]
mod longest_common_prefix_tests {
    use super::*;

    #[test]
    fn test_lcp() {
            assert_eq!(longest_common_prefix(&["flower","flow","flight"]), "fl");
            assert_eq!(longest_common_prefix(&["dog","racecar","car"]), "");
        }
}
