pub fn is_palindrome(s: &str) -> bool {
    let clean: Vec<char> = s.chars().filter(|c| c.is_alphanumeric()).map(|c| c.to_lowercase().next().unwrap()).collect();
    clean.iter().eq(clean.iter().rev())
}

#[cfg(test)]
mod is_palindrome_tests {
    use super::*;

    #[test]
    fn test_palindrome() {
            assert!(is_palindrome("A man a plan a canal Panama"));
            assert!(!is_palindrome("race a car"));
        }
}
