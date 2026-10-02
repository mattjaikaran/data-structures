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

#[cfg(test)]
mod kmp_search_tests {
    use super::*;

    #[test]
    fn test_kmp() {
            assert_eq!(kmp_search("abcabcabc","abc"), vec![0,3,6]);
            assert_eq!(kmp_search("hello","ll"), vec![2]);
            assert_eq!(kmp_search("hello","xyz"), vec![]);
        }
}
