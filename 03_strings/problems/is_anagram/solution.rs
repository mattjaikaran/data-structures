pub fn is_anagram(s: &str, t: &str) -> bool {
    let mut cnt = [0i32; 128];
    for c in s.chars() { cnt[c as usize] += 1; }
    for c in t.chars() { cnt[c as usize] -= 1; }
    cnt.iter().all(|&x| x == 0)
}

#[cfg(test)]
mod is_anagram_tests {
    use super::*;

    #[test]
    fn test_anagram() {
            assert!(is_anagram("anagram","nagaram"));
            assert!(!is_anagram("rat","car"));
        }
}
