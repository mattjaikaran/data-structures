/// 🟢 Backspace String Compare (LC #844)
pub fn backspace_compare(s: &str, t: &str) -> bool {
    fn process(s: &str) -> String {
        let mut stack: Vec<char> = Vec::new();
        for ch in s.chars() {
            if ch != '#' { stack.push(ch); } else { stack.pop(); }
        }
        stack.into_iter().collect()
    }
    process(s) == process(t)
}

#[cfg(test)]
mod backspace_compare_tests {
    use super::*;

    #[test]
    fn test_backspace_compare() {
            assert!(backspace_compare("ab#c", "ad#c"));
            assert!(!backspace_compare("a#c", "b"));
        }
}
