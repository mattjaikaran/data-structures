pub fn min_window_substring<'a>(s: &'a str, t: &str) -> &'a str {
    let sc: Vec<char> = s.chars().collect();
    let mut need: HashMap<char,i32> = HashMap::new();
    for c in t.chars() { *need.entry(c).or_insert(0) += 1; }
    let mut missing = t.len() as i32;
    let (mut left, mut best_left, mut best_len) = (0usize, 0, usize::MAX);
    for (right, &c) in sc.iter().enumerate() {
        if *need.get(&c).unwrap_or(&0) > 0 { missing -= 1; }
        *need.entry(c).or_insert(0) -= 1;
        if missing == 0 {
            while *need.get(&sc[left]).unwrap_or(&0) < 0 { *need.entry(sc[left]).or_insert(0) += 1; left += 1; }
            if right - left + 1 < best_len { best_len = right-left+1; best_left = left; }
            *need.entry(sc[left]).or_insert(0) += 1; missing += 1; left += 1;
        }
    }
    if best_len == usize::MAX { "" } else { &s[best_left..best_left+best_len] }
}

#[cfg(test)]
mod min_window_substring_tests {
    use super::*;

    #[test]
    fn test_min_window() {
            assert_eq!(min_window_substring("ADOBECODEBANC","ABC"), "BANC");
            assert_eq!(min_window_substring("a","a"), "a");
            assert_eq!(min_window_substring("a","b"), "");
        }
}
