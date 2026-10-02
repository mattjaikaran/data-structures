pub fn word_pattern(pattern: &str, s: &str) -> bool {
    let words: Vec<&str> = s.split_whitespace().collect();
    if pattern.len() != words.len() { return false; }
    let mut pw: HashMap<char,&str> = HashMap::new();
    let mut wp: HashMap<&str,char> = HashMap::new();
    for (p, w) in pattern.chars().zip(words.iter()) {
        if pw.get(&p).map_or(false, |&v| v != *w) { return false; }
        if wp.get(w).map_or(false, |&v| v != p) { return false; }
        pw.insert(p, w); wp.insert(w, p);
    }
    true
}

#[cfg(test)]
mod word_pattern_tests {
    use super::*;

    #[test]
    fn test_word_pattern() {
            assert!(word_pattern("abba","dog cat cat dog"));
            assert!(!word_pattern("abba","dog cat cat fish"));
        }
}
