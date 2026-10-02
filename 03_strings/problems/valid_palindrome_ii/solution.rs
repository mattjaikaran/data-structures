/// Accept lowercase ASCII strings with at most one deletion.
pub fn valid_palindrome_ii(text: &str) -> bool {
    fn palindrome(bytes: &[u8], mut lo: usize, mut hi: usize) -> bool {
        while lo < hi {
            if bytes[lo] != bytes[hi] { return false; }
            lo += 1; hi -= 1;
        }
        true
    }
    let bytes = text.as_bytes();
    if bytes.is_empty() { return true; }
    let (mut lo, mut hi) = (0, bytes.len() - 1);
    while lo < hi {
        if bytes[lo] != bytes[hi] {
            return palindrome(bytes, lo + 1, hi) || palindrome(bytes, lo, hi - 1);
        }
        lo += 1; hi -= 1;
    }
    true
}
#[cfg(test)]
mod valid_palindrome_ii_tests {
    use super::*;
    #[test]
    fn deletion_choices() {
        for text in ["", "a", "aba", "abca", "deeee", "eeeed"] { assert!(valid_palindrome_ii(text)); }
        assert!(!valid_palindrome_ii("abc"));
        assert!(!valid_palindrome_ii("abcdef"));
    }
}
