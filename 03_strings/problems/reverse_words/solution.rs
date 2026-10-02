pub fn reverse_words(s: &str) -> String {
    s.split_whitespace().rev().collect::<Vec<_>>().join(" ")
}

#[cfg(test)]
mod reverse_words_tests {
    use super::*;

    #[test]
    fn test_reverse_words() {
            assert_eq!(reverse_words("  the sky is blue  "), "blue is sky the");
        }
}
