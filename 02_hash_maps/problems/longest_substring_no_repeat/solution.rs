pub fn length_of_longest_substring(s: &str) -> usize {
    let chars: Vec<char> = s.chars().collect();
    let mut last: HashMap<char,usize> = HashMap::new();
    let mut best = 0; let mut left = 0;
    for (right, &c) in chars.iter().enumerate() {
        if let Some(&prev) = last.get(&c) { if prev >= left { left = prev + 1; } }
        last.insert(c, right);
        best = best.max(right - left + 1);
    }
    best
}

#[cfg(test)]
mod longest_substring_no_repeat_tests {
    use super::*;

    #[test]
    fn test_longest_substring() {
            assert_eq!(length_of_longest_substring("abcabcbb"), 3);
            assert_eq!(length_of_longest_substring("bbbbb"), 1);
        }
}
