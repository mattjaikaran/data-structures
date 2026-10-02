pub fn first_unique_char(s: &str) -> i32 {
    let mut cnt: HashMap<char,usize> = HashMap::new();
    for c in s.chars() { *cnt.entry(c).or_insert(0) += 1; }
    for (i, c) in s.chars().enumerate() { if cnt[&c] == 1 { return i as i32; } }
    -1
}

#[cfg(test)]
mod first_unique_char_tests {
    use super::*;

    #[test]
    fn test_first_unique() {
            assert_eq!(first_unique_char("leetcode"), 0);
            assert_eq!(first_unique_char("aabb"), -1);
        }
}
