/// 🟢 Valid Parentheses (LC #20)
pub fn is_valid_parens(s: &str) -> bool {
    let mut stack: Vec<char> = Vec::new();
    for ch in s.chars() {
        match ch {
            '(' | '{' | '[' => stack.push(ch),
            ')' => if stack.pop() != Some('(') { return false; },
            '}' => if stack.pop() != Some('{') { return false; },
            ']' => if stack.pop() != Some('[') { return false; },
            _ => {}
        }
    }
    stack.is_empty()
}

#[cfg(test)]
mod is_valid_parens_tests {
    use super::*;

    #[test]
    fn test_is_valid_parens() {
            assert!(is_valid_parens("()[]{}"));
            assert!(is_valid_parens("([])"));
            assert!(!is_valid_parens("(]"));
            assert!(is_valid_parens(""));
        }
}
