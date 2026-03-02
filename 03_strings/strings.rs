//! STRING ALGORITHMS  ·  Rust
//! KMP, Z-algorithm, Manacher + classic string problems.

/// KMP failure function
fn build_lps(p: &[u8]) -> Vec<usize> {
    let mut lps = vec![0usize; p.len()];
    let mut len = 0; let mut i = 1;
    while i < p.len() {
        if p[i] == p[len] { len += 1; lps[i] = len; i += 1; }
        else if len > 0 { len = lps[len - 1]; }
        else { lps[i] = 0; i += 1; }
    }
    lps
}

pub fn kmp_search(text: &str, pattern: &str) -> Vec<usize> {
    if pattern.is_empty() { return vec![]; }
    let (t, p) = (text.as_bytes(), pattern.as_bytes());
    let lps = build_lps(p);
    let mut result = vec![];
    let (mut i, mut j) = (0, 0);
    while i < t.len() {
        if t[i] == p[j] { i += 1; j += 1; }
        if j == p.len() { result.push(i - j); j = lps[j - 1]; }
        else if i < t.len() && t[i] != p[j] {
            if j > 0 { j = lps[j - 1]; } else { i += 1; }
        }
    }
    result
}

pub fn z_array(s: &str) -> Vec<usize> {
    let b = s.as_bytes(); let n = b.len();
    let mut z = vec![0usize; n]; z[0] = n;
    let (mut l, mut r) = (0, 0);
    for i in 1..n {
        if i < r { z[i] = (r - i).min(z[i - l]); }
        while i + z[i] < n && b[z[i]] == b[i + z[i]] { z[i] += 1; }
        if i + z[i] > r { l = i; r = i + z[i]; }
    }
    z
}

pub fn z_search(text: &str, pattern: &str) -> Vec<usize> {
    let s = format!("{}${}", pattern, text);
    let z = z_array(&s); let m = pattern.len();
    z.iter().enumerate()
        .filter(|&(i, &v)| v == m && i > m)
        .map(|(i, _)| i - m - 1)
        .collect()
}

pub fn manacher(s: &str) -> String {
    let chars: Vec<char> = s.chars().collect();
    let mut t = vec!['#'];
    for c in &chars { t.push(*c); t.push('#'); }
    let n = t.len();
    let mut p = vec![0i64; n];
    let (mut c, mut r) = (0i64, 0i64);
    for i in 0..n as i64 {
        if i < r { p[i as usize] = (r - i).min(p[(2*c-i) as usize]); }
        while i - p[i as usize] - 1 >= 0 && i + p[i as usize] + 1 < n as i64
            && t[(i - p[i as usize] - 1) as usize] == t[(i + p[i as usize] + 1) as usize]
        { p[i as usize] += 1; }
        if i + p[i as usize] > r { c = i; r = i + p[i as usize]; }
    }
    let center = p.iter().enumerate().max_by_key(|&(_, v)| v).map(|(i, _)| i).unwrap();
    let start = (center as i64 - p[center]) / 2;
    chars[start as usize..(start + p[center]) as usize].iter().collect()
}

pub fn is_palindrome(s: &str) -> bool {
    let clean: Vec<char> = s.chars().filter(|c| c.is_alphanumeric()).map(|c| c.to_lowercase().next().unwrap()).collect();
    clean.iter().eq(clean.iter().rev())
}

pub fn is_anagram(s: &str, t: &str) -> bool {
    let mut cnt = [0i32; 128];
    for c in s.chars() { cnt[c as usize] += 1; }
    for c in t.chars() { cnt[c as usize] -= 1; }
    cnt.iter().all(|&x| x == 0)
}

pub fn roman_to_int(s: &str) -> i32 {
    let val = |c| match c { 'I'=>1,'V'=>5,'X'=>10,'L'=>50,'C'=>100,'D'=>500,'M'=>1000,_=>0i32 };
    let chars: Vec<char> = s.chars().collect();
    let mut result = 0;
    for i in 0..chars.len() {
        if i + 1 < chars.len() && val(chars[i]) < val(chars[i+1]) { result -= val(chars[i]); }
        else { result += val(chars[i]); }
    }
    result
}

pub fn int_to_roman(mut num: i32) -> String {
    let vals = [(1000,"M"),(900,"CM"),(500,"D"),(400,"CD"),(100,"C"),(90,"XC"),(50,"L"),(40,"XL"),(10,"X"),(9,"IX"),(5,"V"),(4,"IV"),(1,"I")];
    let mut res = String::new();
    for (v, s) in vals { while num >= v { res.push_str(s); num -= v; } }
    res
}

pub fn reverse_words(s: &str) -> String {
    s.split_whitespace().rev().collect::<Vec<_>>().join(" ")
}

pub fn multiply_strings(num1: &str, num2: &str) -> String {
    let (m, n) = (num1.len(), num2.len());
    let mut pos = vec![0u32; m + n];
    let b1: Vec<u32> = num1.bytes().map(|b| (b - b'0') as u32).collect();
    let b2: Vec<u32> = num2.bytes().map(|b| (b - b'0') as u32).collect();
    for i in (0..m).rev() {
        for j in (0..n).rev() {
            let mul = b1[i] * b2[j];
            let (p1, p2) = (i + j, i + j + 1);
            let total = mul + pos[p2];
            pos[p2] = total % 10; pos[p1] += total / 10;
        }
    }
    let s: String = pos.iter().map(|&d| char::from_digit(d, 10).unwrap()).collect();
    let trimmed = s.trim_start_matches('0');
    if trimmed.is_empty() { "0".to_string() } else { trimmed.to_string() }
}

pub fn longest_common_prefix(strs: &[&str]) -> String {
    if strs.is_empty() { return String::new(); }
    let mut prefix = strs[0].to_string();
    for s in &strs[1..] { while !s.starts_with(&prefix as &str) { prefix.pop(); } }
    prefix
}

pub fn num_distinct(s: &str, t: &str) -> usize {
    let t: Vec<char> = t.chars().collect(); let n = t.len();
    let mut dp = vec![0usize; n + 1]; dp[0] = 1;
    for c in s.chars() { for j in (1..=n).rev() { if c == t[j-1] { dp[j] += dp[j-1]; } } }
    dp[n]
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_kmp() {
        assert_eq!(kmp_search("abcabcabc","abc"), vec![0,3,6]);
        assert_eq!(kmp_search("hello","ll"), vec![2]);
        assert_eq!(kmp_search("hello","xyz"), vec![]);
    }
    #[test]
    fn test_z_search() {
        assert_eq!(z_search("abcabcabc","abc"), vec![0,3,6]);
    }
    #[test]
    fn test_manacher() {
        assert!(["bab","aba"].contains(&manacher("babad").as_str()));
        assert_eq!(manacher("cbbd"), "bb");
        assert_eq!(manacher("racecar"), "racecar");
    }
    #[test]
    fn test_palindrome() {
        assert!(is_palindrome("A man a plan a canal Panama"));
        assert!(!is_palindrome("race a car"));
    }
    #[test]
    fn test_anagram() {
        assert!(is_anagram("anagram","nagaram"));
        assert!(!is_anagram("rat","car"));
    }
    #[test]
    fn test_roman() {
        assert_eq!(roman_to_int("MCMXCIV"), 1994);
        assert_eq!(int_to_roman(1994), "MCMXCIV");
    }
    #[test]
    fn test_reverse_words() {
        assert_eq!(reverse_words("  the sky is blue  "), "blue is sky the");
    }
    #[test]
    fn test_multiply() {
        assert_eq!(multiply_strings("123","456"), "56088");
        assert_eq!(multiply_strings("0","0"), "0");
    }
    #[test]
    fn test_lcp() {
        assert_eq!(longest_common_prefix(&["flower","flow","flight"]), "fl");
        assert_eq!(longest_common_prefix(&["dog","racecar","car"]), "");
    }
    #[test]
    fn test_num_distinct() {
        assert_eq!(num_distinct("rabbbit","rabbit"), 3);
        assert_eq!(num_distinct("babgbag","bag"), 5);
    }
}
