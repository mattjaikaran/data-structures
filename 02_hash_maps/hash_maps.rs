//! HASH MAPS  ·  Rust
//! HashMap<K,V> from std::collections. O(1) avg get/insert/remove.
//! HashMap is unordered. For ordered, use BTreeMap.
use std::collections::{HashMap, HashSet};

// ── Problems ──────────────────────────────────
pub fn group_anagrams(strs: &[&str]) -> Vec<Vec<String>> {
    let mut map: HashMap<Vec<char>, Vec<String>> = HashMap::new();
    for &s in strs {
        let mut key: Vec<char> = s.chars().collect(); key.sort();
        map.entry(key).or_default().push(s.to_string());
    }
    map.into_values().collect()
}

pub fn longest_consecutive(nums: &[i32]) -> usize {
    let s: HashSet<i32> = nums.iter().copied().collect();
    let mut best = 0;
    for &n in &s {
        if !s.contains(&(n-1)) {
            let mut cur = n; let mut len = 1;
            while s.contains(&(cur+1)) { cur+=1; len+=1; }
            best = best.max(len);
        }
    }
    best
}

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

pub fn subarray_sum_k(nums: &[i32], k: i32) -> i32 {
    let mut count = 0; let mut prefix = 0;
    let mut freq: HashMap<i32,i32> = HashMap::from([(0,1)]);
    for &n in nums {
        prefix += n;
        count += freq.get(&(prefix-k)).copied().unwrap_or(0);
        *freq.entry(prefix).or_insert(0) += 1;
    }
    count
}

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

pub fn first_unique_char(s: &str) -> i32 {
    let mut cnt: HashMap<char,usize> = HashMap::new();
    for c in s.chars() { *cnt.entry(c).or_insert(0) += 1; }
    for (i, c) in s.chars().enumerate() { if cnt[&c] == 1 { return i as i32; } }
    -1
}

pub fn find_all_anagrams(s: &str, p: &str) -> Vec<usize> {
    let sc: Vec<char> = s.chars().collect();
    let k = p.len();
    let mut need: HashMap<char,i32> = HashMap::new();
    for c in p.chars() { *need.entry(c).or_insert(0) += 1; }
    let mut window: HashMap<char,i32> = HashMap::new();
    let mut result = vec![];
    for (i, &c) in sc.iter().enumerate() {
        *window.entry(c).or_insert(0) += 1;
        if i >= k { let lc=sc[i-k]; let v=window.entry(lc).or_insert(0); *v-=1; if *v==0 { window.remove(&lc); } }
        if i + 1 >= k && window == need { result.push(i + 1 - k); }
    }
    result
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_group_anagrams() {
        let r = group_anagrams(&["eat","tea","tan","ate","nat","bat"]);
        assert_eq!(r.len(), 3);
    }
    #[test]
    fn test_longest_consecutive() {
        assert_eq!(longest_consecutive(&[100,4,200,1,3,2]), 4);
        assert_eq!(longest_consecutive(&[0,3,7,2,5,8,4,6,0,1]), 9);
    }
    #[test]
    fn test_longest_substring() {
        assert_eq!(length_of_longest_substring("abcabcbb"), 3);
        assert_eq!(length_of_longest_substring("bbbbb"), 1);
    }
    #[test]
    fn test_min_window() {
        assert_eq!(min_window_substring("ADOBECODEBANC","ABC"), "BANC");
        assert_eq!(min_window_substring("a","a"), "a");
        assert_eq!(min_window_substring("a","b"), "");
    }
    #[test]
    fn test_subarray_sum_k() {
        assert_eq!(subarray_sum_k(&[1,1,1],2), 2);
        assert_eq!(subarray_sum_k(&[1,2,3],3), 2);
    }
    #[test]
    fn test_word_pattern() {
        assert!(word_pattern("abba","dog cat cat dog"));
        assert!(!word_pattern("abba","dog cat cat fish"));
    }
    #[test]
    fn test_first_unique() {
        assert_eq!(first_unique_char("leetcode"), 0);
        assert_eq!(first_unique_char("aabb"), -1);
    }
    #[test]
    fn test_find_all_anagrams() {
        assert_eq!(find_all_anagrams("cbaebabacd","abc"), vec![0,6]);
        assert_eq!(find_all_anagrams("abab","ab"), vec![0,1,2]);
    }
}
